import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "./Login.css";
import axios from "axios";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiUsers, setApiUsers] = useState([]);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const getUser = () => {
    axios
      .get("https://collection-sh.herokuapp.com/api/users")
      .then((res) => setApiUsers(res.data));
  };

  const getToken = (data) => {
    axios({
      method: "POST",
      url: "https://collection-sh.herokuapp.com/api/auth/local",
      data: data,
    }).then((res) => {
      const jwt = res.data.jwt;
      localStorage.setItem("jwt", jwt);
      navigate("/");
    });
  };

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    getToken({
      identifier: identifier,
      password: password,
    });

    const userData = apiUsers.find(
      (user) => user.identifier === identifier.value
    );

    if (userData) {
      if (userData.email !== password.value) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "identifier", message: errors.identifier });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="identifier"
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          {renderErrorMessage("identifier")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <input type="submit" value="Sign In" />
        </div>

        <Link to="/auth/registr">
          <p className="reg">Register</p>
        </Link>
      </form>
    </div>
  );

  return <div>{isSubmitted ? <MainLayout /> : renderForm}</div>;
}

export default Login;

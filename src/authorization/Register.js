import { useState } from "react";
import "./Register.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";

export default function Register() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const postUser = () => {
    axios({
      method: "post",
      url: "https://collection-sh.herokuapp.com/api/auth/local/register",
      data: {
        username: `${name}`,
        password: `${password}`,
      },
      headers: {
        Authorization: `
        Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2MzMxNTc5LCJleHAiOjE2NTg5MjM1Nzl9.FCbFRPzqLGZMuPsqpqrdlI0B8sAGEgFboWdvPc7a7H8`,
      },
    }).then((res) => console.log(res.status));
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      postUser();

      //   <MainLayout />;
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div>
      {/* <Form />
      {submitted ? <MainLayout /> : <Form />} */}
      <div className="form">
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          {/* Labels and inputs for form data */}

          <div>
            <h1>User Registration</h1>
          </div>
          <input
            onChange={handleName}
            className="input"
            value={name}
            type="text"
            placeholder="Username"
          />

          {/* <label className="label">Email</label>   */}
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
            placeholder="email"
          />

          {/* <label className="label">Password</label> */}
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
            placeholder="password"
          />

          <button onClick={handleSubmit} className="btn" type="submit">
            Register
          </button>

          <div className="addition">
            <Link to="/auth/login">
              <p>Sign In</p>
            </Link>
            <Link to="/">
              <p>Move to App</p>
            </Link>
          </div>
        </form>
      </div>
      ;
    </div>
  );
}

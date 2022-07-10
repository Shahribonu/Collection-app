import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from "axios";
// import Search from "../Search/Search";

export const Navbar = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    await localStorage.removeItem("jwt");
    navigate("/auth/login");
  };
  const navbar = () => {};
  return (
    <div className="navbar">
      <div className="left">
        <h1>Welcome</h1>
      </div>
      <div className="middle">
        <button onClick={logOut}>Log out</button>
      </div>

      <div className="right">
        <div className="navbar__search">
          {/* <SearchIcon className="navbar__searchIcon" /> */}
          {/* <input
            type="text"
            id="navbar__input"
            placeholder="Search Collections..."
          /> */}
          <Link to="/auth/login">
            <p className="login">Login</p>
          </Link>
          <Link to="/auth/registr">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Search from "../Search/Search";

export const Navbar = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    await localStorage.removeItem("jwt");
    navigate("/auth/login");
  };
  // const [users, setUsers] = useState([]);

  return (
    <div className="navbar">
      <h1>
        Welcome <span>Shahribonu</span>{" "}
      </h1>
      <div className="right">
        <div className="navbar__search">
          <SearchIcon className="navbar__searchIcon" />
          <input type="text" placeholder="Search Collections.." />
          {/* <Search details={users} /> */}
        </div>
        <button onClick={logOut}>Log out</button>
      </div>
    </div>
  );
};

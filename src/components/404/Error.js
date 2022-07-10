import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collections from "../Home/Collections";
const Errors = () => {
  return (
    <div className="error-page">
      <h1>Error page...</h1>
      <Link to="/">
        <p className="back">Back Home</p>{" "}
      </Link>
    </div>
  );
};

export default Errors;

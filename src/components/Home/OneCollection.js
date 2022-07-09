import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./OneCollection.css";

const OneCollection = ({ id, username, email, src }) => {
  return (
    <div>
      <Link to={"/items/" + `${id}`}>
        <div className="oneCollection">
          <Avatar src={src} sx={{ width: 80, height: 80 }} />
          <h2 className="name">{username}</h2>
        </div>
      </Link>
    </div>
  );
};

export default OneCollection;

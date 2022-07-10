import React from "react";
import Login from "../authorization/Login";
import Register from "../authorization/Register";
import Errors from "../components/404/Error";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth/registr" element={<Register />} />
        <Route path="*" element={<Errors />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default UserLayout;

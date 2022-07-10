import "../App.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Items } from "../views/Item";
import Collections from "../components/Home/Collections";
import Errors from "../components/404/Error";
import Login from "../authorization/Login";
import Register from "../authorization/Register";
import "./MainLayout.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "../views/All";

function EnteredLayout() {
  return (
    <div className="app">
      <Navbar />

      <div>
        <Routes>
          {/* <Route path="/" element={<Collections />} /> */}

          <Route path="/" element={<All />} exact />
          <Route path="/collection" element={<Collections />} />
          <Route path="*" element={<Errors />} />
          <Route path="/items/:id" element={<Items />} />
          <Route path="/auth/registr" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default EnteredLayout;

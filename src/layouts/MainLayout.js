import "../App.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Items } from "../views/Item";
import Collections from "../components/Home/Collections";
import Errors from "../components/404/Error";
import "./MainLayout.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Routes>
          <Route path="/collection" element={<Collections />} />
          <Route path="*" element={<Errors />} />
          <Route path="/items/:id" element={<Items />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;

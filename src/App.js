import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UserLayout from "./layouts/UserLayout";
import Login from "./authorization/Login";
// import Errors from "./components/404/Error";

function App() {
  const token = localStorage.getItem("jwt");
  const whiteList = ["/auth/registr", "/auth/login"];
  const location = useLocation();
  const isUserLayoutRoute = whiteList.includes(location.pathname);

  // return <Errors />;

  return <>{isUserLayoutRoute && !token ? <UserLayout /> : <MainLayout />}</>;
}

export default App;

import React from "react";
import "./Sidebar.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SidebarOption from "./SidebarOption";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Main icon */}
      <BookmarkIcon className="sidebar__icon" />

      {/* Sidebar option */}
      <Link to="/">
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>

      <Link to="/auth/register">
        <SidebarOption Icon={PlaylistAddCheckCircleIcon} text="Register" />
      </Link>
      <Link to="/auth/login">
        <SidebarOption Icon={LocalOfferIcon} text="Login" />
      </Link>

      {/* button */}
      <Button className="return" fullWidth>
        <KeyboardReturnIcon />
        <h2>Collection</h2>
      </Button>
    </div>
  );
};

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

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Main icon */}
      <BookmarkIcon className="sidebar__icon" />

      {/* Sidebar option */}
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={CollectionsIcon} text="Collections" />
      <SidebarOption Icon={LocalOfferIcon} text="Tags" />
      <SidebarOption Icon={PlaylistAddCheckCircleIcon} text="Album" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* button */}
      <Button className="return" fullWidth>
        <KeyboardReturnIcon />
        <h2>Collection</h2>
      </Button>
    </div>
  );
};

import React from "react";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "./Post.css";

export const Post = (ownPost) => {
  // console.log(ownPost.ownPost.attributes.image);
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={`https://picsum.photos/200/300?random=`} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>{ownPost.ownPost.attributes.title} </h3>
          </div>
        </div>
        <img
          src={`https://collection-sh.herokuapp.com${ownPost.ownPost.attributes.image}`}
          alt="image"
        />
        <div className="post__headerDescription">
          <p>{ownPost.ownPost.attributes.description}</p>
        </div>
        <div className="post__footer">
          <ThumbUpOffAltIcon className="icons" fontSize="small" />
          <ThumbDownOffAltIcon className="icons" fontSize="small" />
          <ChatBubbleOutlineIcon className="icons" fontSize="small" />
        </div>
      </div>
    </div>
  );
};

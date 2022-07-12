import React, { useState } from "react";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "./Post.css";

export const Post = (ownPost) => {
  const likes = ownPost.ownPost.attributes.like_count;
  const dislikes = ownPost.ownPost.attributes.like_count;

  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(dislikes);

  const Like = () => {
    setLike(like + 1);
  };
  const Dislike = () => {
    setDislike(dislike - 1);
  };
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar">
          <Avatar src={`https://picsum.photos/200/300?random=`} />
        </div>
        <div className="post__headerText">
          <h3>{ownPost.ownPost.attributes.title} </h3>
        </div>
      </div>

      <div className="post__body">
        <img
          src={`https://collection-sh.herokuapp.com${ownPost.ownPost.attributes.image}`}
          alt="image"
        />
        <div className="post__headerDescription">
          <p>{ownPost.ownPost.attributes.description}</p>
        </div>
        <div className="post__footer">
          <div className="likes" onClick={Like}>
            <ThumbUpOffAltIcon className="icons" fontSize="small" />{" "}
            <p>{likes}</p>
          </div>
          <div className="likes" onClick={Dislike}>
            <ThumbDownOffAltIcon className="icons" fontSize="small" />
            <p>{dislikes}</p>
          </div>
          <div>
            <ChatBubbleOutlineIcon className="icons" fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

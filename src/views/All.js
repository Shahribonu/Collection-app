import React, { useState, useEffect } from "react";
import axios from "axios";
import "./All.css";

const All = () => {
  const [ownPosts, setOwnPosts] = useState([]);

  const getOwnPosts = () => {
    axios.get("https://collection-sh.herokuapp.com/api/posts").then((res) => {
      setOwnPosts(res.data.data);
    });
  };
  useEffect(() => {
    getOwnPosts();
  }, []);

  // console.log(ownPosts[0])
  return (
    <div className="all">
      {ownPosts.map((post) => {
        return (
          <div className="box" key={post.id}>
            <img
              src={`https://collection-sh.herokuapp.com${post.attributes.image}`}
              alt="image"
              className="mainImages"
            />
          </div>
        );
      })}
    </div>
  );
};

export default All;

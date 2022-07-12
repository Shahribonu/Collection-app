import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Items.css";
import Modal from "../components/Modal/Modal";
import { Post } from "./Post";

export const Items = () => {
  //   const params = useParams();
  //   console.log(params);
  //   const parames = {
  //     populate: '*',
  //     filters[user][id][$ne]: 2
  //  }

  //  axios(
  //   method: "GET",
  //   data: "https://collection-sh.herokuapp.com/api/posts",
  //   params: { populate: '*', filters[user][id][$ne] : 3 }
  //  )

  const [ownPosts, setOwnPosts] = useState([]);
  const [modal, setModal] = useState(false);

  const getOwnPosts = () => {
    axios.get("https://collection-sh.herokuapp.com/api/posts").then((res) => {
      setOwnPosts(res.data.data);
    });
  };

  // const getOwnPosts = () => {
  //   axios.get("https://collection-sh.herokuapp.com/api/posts",  {params} );
  // };

  useEffect(() => {
    getOwnPosts();
  }, []);

  return (
    <div className="items">
      <div className="head">
        <div className="addItem">
          <button onClick={() => setModal(true)}>Add Item</button>
        </div>
        {modal && <Modal modal={modal} setModal={setModal} />}
      </div>

      <div className="itemss">
        {ownPosts.map((ownPost) => {
          return <Post key={ownPost.id} ownPost={ownPost} />;
        })}
      </div>
    </div>
  );
};

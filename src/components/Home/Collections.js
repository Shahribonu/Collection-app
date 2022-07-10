import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Collections.css";
import OneCollection from "./OneCollection";

const Collections = () => {
  const [users, setUsers] = useState(null);
  const id = Math.round(Math.random() * 10);

  const getUsers = () => {
    axios
      .get("https://collection-sh.herokuapp.com/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="collections">
      <h1>All Collections</h1>
      <div className="all-collections">
        {users
          ? users.map((user) => (
              <OneCollection
                key={user.id}
                id={user.id}
                username={user.username}
                src={`https://picsum.photos/200/300?random=${user.id}`}
                email={user.email}
              />
            ))
          : undefined}
      </div>
    </div>
  );
};

export default Collections;

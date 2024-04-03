import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../callAPI/users";
const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id).then((data) => setUser(data));
  }, []);

  return (
    <div>
      <p>Id: {user?.id || "Not Found"} </p>
      <p>Name: {user?.company?.name || "Not Found"} </p>
      <p>Email: {user?.email || "Not Found"}</p>
    </div>
  );
};

export default UserDetail;

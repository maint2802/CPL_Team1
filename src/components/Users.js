import { useEffect, useState } from "react";
// import users from "../users.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Users = () => {
  const nav = useNavigate();

  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  const handleToDetail = (userId) => {
    nav(`/users/${userId}`);
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Update Counter</button>
      {users.map((user) => {
        return (
          <div key={user.id} style={{ border: "2px #ccc solid" }}>
            <b>id: {user.id}</b>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <button
              className="btn btn-success"
              onClick={() => handleToDetail(user.id)}
            >
              Detail
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

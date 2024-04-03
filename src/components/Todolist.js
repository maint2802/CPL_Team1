import React from "react";
import todolist from "../todolist.json";
import { Link } from "react-router-dom";
const Todolist = () => {
  return (
    <div>
      {todolist.map((todo) => {
        return (
          <div key={todo.id} className="border">
            <p>Id: {todo.id}</p>
            <p>Name: {todo.name}</p>
            <button>
              <Link to={todo.id}>Detail</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;

import React from "react";
import { useParams } from "react-router-dom";
import todolist from "../todolist.json";
import { useSelector, useDispatch } from "react-redux";
import { increment, toggleIsLogin } from "../features/counter/couterslice";
const Todo = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncreCounter = () => {
    dispatch(increment());
  };

  console.log(counter);

  const { todoId } = useParams();
  const todo = todolist.find((todo) => todo.id == todoId);
  return (
    <div>
      <button onClick={handleIncreCounter}>Incre Counter</button>
      <p>Name: {todo.name}</p>
      <p>Counter: {counter.value}</p>
      <button
        onClick={() => {
          dispatch(toggleIsLogin());
        }}
      >
        Toggle Login
      </button>
    </div>
  );
};

export default Todo;

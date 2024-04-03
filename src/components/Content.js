import { useNavigate } from "react-router-dom";
import Child from "./Child";
const Content = () => {
  const nav = useNavigate();

  const handleToLogin = () => {
    nav("/login");
  };

  return (
    <div>
      <div>Content</div>
      <Child />
      {/* <button onClick={handleToLogin}>To Login</button> */}
    </div>
  );
};

export default Content;

// hooks: useState, useRef, useEffect, useNavigate

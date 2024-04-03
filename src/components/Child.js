import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
const Child = () => {
  const value = useContext(ThemeContext);
  // console.log(value.isLogin);
  const handleToggleLogin = () => {
    value.setIsLogin(!value.isLogin);
  };
  return (
    <div>
      <p>Child</p>
      <button onClick={handleToggleLogin}>Toggle Login</button>
    </div>
  );
};

export default Child;

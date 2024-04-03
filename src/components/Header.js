import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./../App";
const Header = () => {
  const { isLogin: isLogin1 } = useContext(ThemeContext);

  console.log(isLogin1);
  return (
    <div>
      <NavLink to="/content">Content</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/todolist">Todolist</NavLink>
    </div>
  );
};

export default Header;

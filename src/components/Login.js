import { useNavigate } from "react-router-dom";
const Login = ({ setIsLogin }) => {
  const nav = useNavigate();
  const handleLogin = () => {
    setIsLogin(true);
    nav("/home");
  };

  return (
    <div>
      <div>Login</div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

// v5 v6

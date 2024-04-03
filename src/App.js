import "./App.css";
import Content from "./components/Content";
import Home from "./components/Home";
import Login from "./components/Login";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Todolist from "./components/Todolist";
import Todo from "./components/Todo";
import { useState } from "react";

import { createContext } from "react";

export const ThemeContext = createContext();

function App() {
  let [isLogin, setIsLogin] = useState(false);
  const value = { isLogin: isLogin, setIsLogin: setIsLogin };
  return (
    <ThemeContext.Provider value={value}>
      <Header />
      <Routes>
        <Route path="/content" element={<Content />} />
        <Route
          path="/home"
          element={isLogin ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/todolist/:todoId" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;

// call API
// async: callback, async await, promise
// ajax -> fetch vs axios

// Global state
// App -> Content -> Child -> ChildChild

// local storage
// Context API (useContext)
// Redux Core vs Redux toolkit

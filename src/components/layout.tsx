import Navbar from "./navBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "./login";
import "../style/login.css";
const Layout = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleClick = () => {
    console.log("Login has been clicked");
    setIsLoginClicked(true);
  };
  return (
    <>
      <Navbar />
      {isLoginClicked && <Login />}
      <Outlet />
    </>
  );
};
export default Layout;

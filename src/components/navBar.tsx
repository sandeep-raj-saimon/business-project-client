import "bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  // state management
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // handler
  const handleLogin = async () => {
    navigate("login");
  };

  const handleLogout = async () => {
    const url = "http://localhost:3000/authentication/logout";
    const response = await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }),
    });
    console.log("response is ", await response.json());
    setIsUserLoggedIn((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar" id="nav">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {isUserLoggedIn && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Options
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Transactions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!isUserLoggedIn && (
                <li className="nav-item" id="login">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={handleLogin}
                  >
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

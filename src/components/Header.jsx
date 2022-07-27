import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : false;

  const logout = (e) => {
    localStorage.removeItem("user");
    nav("/signin");
    window.location.reload();
  };
  return (
    <header>
      <Link to="/">
        <div className="logo">Logo</div>
      </Link>
      <div className="navLinks">
        <span>
          Welcome{" "}
          <strong className="highlight">
            {user ? user.firstname : "user"}
          </strong>
        </span>
        {user ? (
          <span onClick={logout}>Logout</span>
        ) : (
          <Link to="/signin">
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

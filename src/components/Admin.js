import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";
import "./Admin.css"

const Admin = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [toggle, setToggle] = useState(false);

  const togglehandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <h3>The BookTown</h3>
            <i className="fa-solid fa-book"></i>
          </Link>
          {isLoggedIn && (
            <div>
              <ul>
                <li>
                  <Link to="/books">All Books</Link>
                </li>
                <li>
                  <Link to="/userBook">User Books</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <ul className={toggle ? "active" : ""}>
          <li>
            <Link onClick={() => setToggle(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
        <div>
          
            {/* <>
              {" "}
              <ul>
                <li><Link className="login-btn" to="/auth">Login</Link></li>
                <li><Link className="SignUp-btn" to="/auth">Sign Up</Link></li>
              </ul>
               
            </> */}
            
          {isLoggedIn && (
            <button onClick={() => dispath(authAction.logout())}>
              <Link to="/auth">Logout</Link>
            </button>
          )}
        </div>
        <div onClick={togglehandler} className="toggle-button">
          <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Admin;

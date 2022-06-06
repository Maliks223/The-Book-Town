import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "./Admin.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";

const Admin = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [toggle, setToggle] = useState(false);

  const togglehandler = () => {
    setToggle(!toggle);
  };
  const logOut = () => {
    localStorage.clear();
  };

  return (
    <>
      <nav>
        <div className="sidebar">
          <div className="logoo">
            <Link to="/">
              <h3>The BookTown</h3>
              <i className="fa-solid fa-book"></i>
            </Link>
            {isLoggedIn && (
              <div className="elt-container">
                <ul>
                  <li>
                    <Link to="/books">All Books</Link>
                  </li>
                  <li>
                    <Link to="/userBook">User Requests</Link>
                  </li>
                  <li>
                    <Link to="/books/borrowed">Borrowed Books</Link>
                  </li>
                  <li>
                    <Link to="/books/add">Add Book</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
          <>
            {" "}
            {/* <button>
                <Link to="/auth">Login</Link>
              </button>
              {/* <button>
                <Link to="/auth">Signup</Link>
              // </button> */}
          </>
          <div className="logout-container">
            {isLoggedIn && (
              <button
                className="btn-logoutt"
                onClick={() => {
                  dispath(authAction.logout());
                  logOut();
                }}
              >
                <Link className="logout-" to="/auth">
                  Logout
                </Link>
              </button>
            )}
          </div>
        </div>
        <div onClick={togglehandler} className="toggle-button">
          <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Admin;

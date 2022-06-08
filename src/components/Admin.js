import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";
import './Admin.css' 

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
      <div className="sidebar">
        <div className="logoo">
          <Link to="/">
            <h3>Admin</h3>
            <i></i>
          </Link>
          {isLoggedIn && (
            <div className="elt-container">
              <ul>
                <li>
                  <Link to="/books">All Books</Link>
                </li>
                <li>
                  <Link to="/userBook">Requests</Link>
                </li>
                <li>
                  <Link to="/books/borrowed">Borrowed Books</Link>
                </li>
                <li>
                  <Link to="/books/add">Add Book</Link>
                </li>
                <li>
                  <Link to="/addbanner">Banner Title</Link>
                </li>
                <li>
                  <Link to="/messages">Messages</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <>
          {" "}
          {/* <button>
                <Link to="/auth">Login</Link>
              </button>
              {/* <button>
                <Link to="/auth">Signup</Link>
              // </button> */}
        </>
        <div>
          {isLoggedIn && (
            <button
              className="btn-logoutt"
              onClick={() => {
                dispath(authAction.logout());
                logOut();
              }}
            >
              <Link  className="logout-" to="/auth">Logout</Link>
            </button>
          )}
        </div>
      </div>
      <div onClick={togglehandler} className="toggle-button">
        <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
    </>
  );
};

export default Admin;

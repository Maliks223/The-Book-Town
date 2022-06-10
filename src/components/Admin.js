import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";
import "./Admin.css";

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
          <a>
            <h3>Admin</h3>
          </a>
          {isLoggedIn && (
            <div className="elt-container">
              <ul>
                <li>
                  <Link to="/books/admin" className="side_elt">
                    All Books
                  </Link>
                </li>
                <li>
                  <Link to="/userBook" className="side_elt">
                    Requests
                  </Link>
                </li>
                <li>
                  <Link to="/books/borrowed" className="side_elt">
                    Borrowed Books
                  </Link>
                </li>
                <li>
                  <Link to="/books/add" className="side_elt">
                    Add Book
                  </Link>
                </li>
                <li>
                  <Link to="/addbanner" className="side_elt">
                    Banner Title
                  </Link>
                </li>
                <li>
                  <Link to="/messages" className="side_elt">
                    Messages
                  </Link>
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
    </>
  );
};

export default Admin;

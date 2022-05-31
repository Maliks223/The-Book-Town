import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import "./Admin.css"
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";

const Admin = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [toggle, setToggle] = useState(false);

  const togglehandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar">
        <div className="logoo">
          <Link to="/">
            <h3>Admin</h3>
            
          </Link>
          {isLoggedIn && (
            <div className="elt-container">
              <ul>
                <li>
                  <Link to="/books">All Books</Link>
                </li>
                <li>
                  <Link to="/userBook">User Books</Link>
                </li>
                <li>
                  <Link to="/books/add">Add Book</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* <ul className={toggle ? "active" : ""}>
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
        </ul> */}
        <div className="logout-container">
          <>
            {" "}
            {/* <button>
                <Link to="/auth">Login</Link>
              </button>
              {/* <button>
                <Link to="/auth">Signup</Link>
              // </button> */}
          </>

          {isLoggedIn && (
            <button className="btn-logoutt"  onClick={() => dispath(authAction.logout())}>
              <Link className="logout-"   to="/auth">Logout</Link>
            </button>
          )}
        </div>
        {/* <div onClick={togglehandler} className="toggle-button">
          <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div> */}
      </div>
    </>
  );
};

export default Admin;

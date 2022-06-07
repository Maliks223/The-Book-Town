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
                  <Link to="/books/borrowed">Borrowed Books</Link>
                </li>
                <li>
                  <Link to="/books/add">Add Book</Link>
                </li>
                <li>
                  <Link to="/contactUsMessages">ContactUs Messages</Link>
                </li>
                <li>
                  <Link to="/BannerTitle">Banner Title</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
       
        <div className="logout-container">
          

          {isLoggedIn && (
            <button className="btn-logoutt"  onClick={() => dispath(authAction.logout())}>
              <Link className="logout-"   to="/auth">Logout</Link>
            </button>
          )}
        </div>
        
      </div>
    </>
  );
};

export default Admin;

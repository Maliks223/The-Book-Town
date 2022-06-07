import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const togglehandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="navBar">
        <div className="logo">
            <Link onClick={() => setToggle(false)} to="/">
                <h3 className="bookT">The BookTown</h3>
                <i className="fa-solid fa-book"></i>
            </Link>
        </div >
        <div className={toggle ? "active" : ""} >
          <div className="navbar">

            <div className="ul">
              <Link onClick={() => setToggle(false)} to="/">
                Home
              </Link>
            </div>
            <div className="ul">
                <Link onClick={()=> setToggle(false)} to="/books">
                  All books
                </Link>
            </div>
            <div className="ul">
              <Link onClick={() => setToggle(false)} to="/about">
                About Us
              </Link>
            </div>
            <div className="ul">
              <Link onClick={() => setToggle(false)} to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* <div></div> */}
        <div onClick={togglehandler} className="toggle-button">
          <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



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
      <nav>
        <div className="logo">
          <Link to="/">
            <h3>The BookTown</h3>
            <i className="fa-solid fa-book"></i>
          </Link>
        </div>
        <ul className={toggle ? "active" : ""}>
          <li>
            <Link onClick={() => setToggle(false)} to="/">
              Home
            </Link>
          </li>
          <li>
              <Link to="/books">All Books</Link>
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
        <div></div>
        <div onClick={togglehandler} className="toggle-button">
          <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

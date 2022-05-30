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
                <h3>The BookTown</h3>
                <i className="fa-solid fa-book"></i>
            </Link>
        </div>
        <div className={toggle ? "active" : ""}>
          <div>
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
          </div>
          <div>
            <Link onClick={() => setToggle(false)} to="/contact">
              Contact Us
            </Link>
<<<<<<< HEAD
          </div>
        </div>
        {/* <div></div> */}
=======
          </li>
          
        </ul>
        
        <div></div>
>>>>>>> 81c19e11a3f02d41d68d13d9a53df566c217c913
        <div onClick={togglehandler} className="toggle-button">
          <i className={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

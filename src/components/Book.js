import React from "react";

import "./cardd.css";
import { Link } from "react-router-dom";

const Book = ({
  id,
  title,
  author,
  description,
  category,
  image,
  isAvailable,
}) => {
  // const handleClick = () => {
  //   // localStorage.setItem("bookId", id);
  // };
  return (
    <>
      <div className="card">
        <h1>Title: {title}</h1>
        <p>Author: {author}</p>
        <p>Description: {description}</p>
        <h4>Category: {category}</h4>
        <img src={image} alt="book" />
        <p>Available: {isAvailable.toString()}</p>
        <button type="submit">
          <Link to="/user" state={{ bookId: id }}>
            Lend
          </Link>
        </button>
      </div>
    </>
  );
};

export default Book;

import React from "react";
import { Link } from "react-router-dom";

const Book = ({
  id,
  title,
  author,
  description,
  category,
  image,
  isAvailable,
  pdf,
}) => {
  const handleClick=()=>{
    localStorage.setItem("bookId", id);
  }
  return (
    <>
      <div className="card" key={id}>
        <h1>id: {id}</h1>
        <h1>Title: {title}</h1>
        <p>Author: {author}</p>
        <p>Description: {description}</p>
        <h2>Category: {category}</h2>
        <img src={image} alt="book" />
        <p>Available: {isAvailable.toString()}</p>
        <h4>PDF: {pdf}</h4>
        <button type="submit" onClick={handleClick()}>
          <Link to="/user">
            Lend
          </Link>
        </button>
      </div>
    </>
  );
};

export default Book;

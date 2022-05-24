import React from "react";
import "./card.css";

const Book = ({
  title,
  author,
  description,
  category,
  image,
  isAvailable,
  pdf,
}) => {
  return (
    <>
      <div className="card">
        <h1>Title: {title}</h1>
        <p>Author: {author}</p>
        <p>Description: {description}</p>
        <h2>Category: {category}</h2>
        <img src={image} alt="book" />
        <p>Available: {isAvailable}</p>
        <h4>{pdf}</h4>
      </div>
    </>
  );
};

export default Book;

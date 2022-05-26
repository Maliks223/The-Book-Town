import React from "react";
import { Link } from "react-router-dom";
import "./card.css"

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


  // const handleClick = () => {
  //   // localStorage.setItem("bookId", id);
  // };
  return (
    <>
    <div className="card-container">

    
        <div className="card" key={id}>
          {/* <h1>id: {id}</h1> */}
          <div className="image-container">
            <img src={image} alt="book" />
          </div>

          <div className="card-content">
            <div className="card-title">
                <h3>Title: {title}</h3>
            </div>

            <div className="card-body">
              <p>Author: {author}</p>
              <p>Description: {description}</p>
              <h2>Category: {category}</h2>
            </div>

            <p>Available: {isAvailable.toString()}</p>
            <h4>PDF: {pdf}</h4>
            
          </div>
          
          <div className="btnCard">
            <button type="submit">
              <Link className="lend" to="/user" state={{bookId:id}}>Lend</Link>
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Book;

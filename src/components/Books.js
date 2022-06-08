import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";
import { MenuItem, TextField } from "@mui/material";
import "./CSS files/book.css";

const Books = () => {
  const [books, setBooks] = useState();
  const [firstData, setFirstData] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3002/books")
      .catch((err) => console.log(err));

    const data = await res.data;

    setBooks(data.books);
    setFirstData(data.books);
  };

  useEffect(() => {
    sendRequest();
  }, []);
  
  const filterCat = (e) => {
    setBooks(firstData.filter((book) => book.category === e.target.innerText));
  };
  const filterAuth = (e) => {
    setBooks(firstData.filter((book) => book.author === e.target.innerText));
  };
  const clear = (e) => {
    setBooks(firstData);
  };

  return (
    <div>
      <TextField
        label="Category"
        select
        sx={{ width: "125px", marginTop: "7px", marginLeft: "40%" }}
      >
        {firstData &&
          firstData.map((book) => {
            return (
              <MenuItem key={book._id} onClick={filterCat}>
                {book.category}
              </MenuItem>
            );
          })}
        <MenuItem onClick={clear}>All Books</MenuItem>
      </TextField>
      <TextField
        label="Author"
        select
        sx={{ width: "125px", marginTop: "7px", marginLeft: "55px" }}
      >
        {firstData &&
          firstData.map((book) => {
            return <MenuItem onClick={filterAuth}>{book.author}</MenuItem>;
          })}
        <MenuItem onClick={clear}>All Books</MenuItem>
      </TextField>
      <div className="Books-flex">
        {books &&
          books.map(
            (book) =>
              book.isAvailable && (
                <Book
                  key={book._id}
                  id={book._id}
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  category={book.category}
                  image={book.image}
                  refreshFunc={sendRequest}
                />
              )
          )}
      </div>
    </div>
  );
};

export default Books;

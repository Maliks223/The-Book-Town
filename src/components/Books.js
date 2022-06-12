import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";
import { MenuItem, TextField } from "@mui/material";

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
  let uniqueCat = [];
  if (firstData) {
    firstData.map((unique) => {
      uniqueCat.push(unique.category);
    });
  }
  const set = new Set(uniqueCat); // set undefined
  const finalArray = Array.from(set); // parse to array

  let uniqueAuth = [];
  if (firstData) {
    firstData.map((unique) => {
      uniqueAuth.push(unique.author);
    });
  }
  const aSet = new Set(uniqueAuth);
  const finalAuthors = Array.from(aSet);

  console.log(uniqueCat);

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
        sx={{ width: "125px", marginTop: "7px", marginLeft: "80%" }}
      >
        {firstData &&
          finalArray.map((book) => {
            return (
              <MenuItem value={book} key={book._id} onClick={filterCat}>
                {book}
              </MenuItem>
            );
          })}
        <MenuItem value={firstData} onClick={clear}>
          All Books
        </MenuItem>
      </TextField>
      <TextField
        className="Authorr"
        label="Author"
        select
        sx={{ width: "125px", marginTop: "7px", marginLeft: "50px" }}
      >
        {firstData &&
          finalAuthors.map((book) => {
            return (
              <MenuItem value={book} onClick={filterAuth}>
                {book}
              </MenuItem>
            );
          })}
        <MenuItem value={firstData} onClick={clear}>
          All Books
        </MenuItem>
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
                  suspended={book.suspended}
                  refreshFunc={sendRequest}
                />  
              )
          )}
      </div>
    </div>
  );
};

export default Books;

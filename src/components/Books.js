import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3002/books")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
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
                isAvailable={book.isAvailable}
              />
            )
        )}
    </div>
  );
};

export default Books;

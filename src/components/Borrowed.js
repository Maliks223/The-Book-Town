import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BorrowedBy from "./borrowedBy";
// import Book from "./Book";
// import Request from "./Request";

// import { useLocation } from "react-router-dom";

const Borrowed = () => {
  // const location = useLocation();
  const [users, setUsers] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3002/user")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUsers(data.users));
  }, []);
  
  return (
    <div>
      {users &&
        users.map((user) => (
          user.isBorrow &&
          <BorrowedBy
            key={user._id}
            // id={user._id}
            // name={user.name}
            email={user.email}
            dateFrom={user.dateFrom}
            dateTo={user.dateTo}
            phone={user.phone}
            bookTitle={user.book.title}
            bookId={user.book._id}
            bookImage={user.book.image}
          ></BorrowedBy>
        ))}
    </div>
  );
};

export default Borrowed;

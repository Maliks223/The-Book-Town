import React from "react";
import axios from "axios";
import Request from "./Request";
import { useEffect, useState } from "react";
import Book from "./Book";

const UserBook = () => {
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
  console.log(users);
  return (
    <div>
      {users &&
        users.map((user) => (
          <Request
            key={user._id}
            name={user.name}
            email={user.email}
            dateFrom={user.dateFrom}
            dateTo={user.dateTo}
            phone={user.phone}
            bookTitle={user.book.title}
          ></Request>
        ))}
    </div>
  );
};

export default UserBook;

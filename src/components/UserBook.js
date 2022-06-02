import React from "react";
import axios from "axios";
import Request from "./Request";
import { useEffect, useState } from "react";
// import Book from "./Book";

const UserBook = () => {
  const [users, setUsers] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3002/user")
      .catch((err) => console.log(err));

    const data = await res.data;
    setUsers(data.users);
  };
  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div>
      {users &&
        users.map(
          (user) =>
            user.isBorrow || (
              <Request
                key={user._id}
                id={user._id}
                name={user.name}
                email={user.email}
                dateFrom={user.dateFrom}
                dateTo={user.dateTo}
                phone={user.phone}
                borrowed={user.isBorrow}
                bookTitle={user.book.title}
                bookId={user.book._id}
                refreshFunc={sendRequest}
              ></Request>
            )
        )}
    </div>
  );
};

export default UserBook;

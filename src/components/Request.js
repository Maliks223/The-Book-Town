import axios from "axios";
import React from "react";

const Request = ({
  name,
  email,
  phone,
  dateFrom,
  dateTo,
  bookTitle,
  bookId,
}) => {
  const acceptRequest = async () => {
    const res = await axios
      .put(`http://localhost:3002/books/update/${bookId}`, {
        isAvailable: false,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };
  return (
    <div>
      <h2>User Name: {name}</h2>
      <h3>Phone: {phone}</h3>
      <h4>Email: {email}</h4>
      <h5>
        Requested From: {dateFrom.toString().split("T")[0]} To:{" "}
        {dateTo.toString().split("T")[0]}
      </h5>
      <h3>Requested Book: {bookTitle}</h3>
      <button onClick={acceptRequest}>Accept</button>
      <button>Reject</button>
    </div>
  );
};

export default Request;

import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";

const Request = ({
  id,
  name,
  email,
  phone,
  dateFrom,
  dateTo,
  bookTitle,
  bookId,
  refreshFunc,
}) => {
  // const navigate = useNavigate();
  const acceptRequest = async () => {
    let token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    const res = await axios
      .put(
        `http://localhost:3002/books/update/${bookId}`,
        {
          isAvailable: false,
        },
        { headers: headers }
      )
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const isBorrowed = async () => {
    let token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    const res = await axios
      .put(
        `http://localhost:3002/user/update/${id}`,
        {
          isBorrow: true,
        },
        { headers: headers }
      )
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const deleteRequest = async () => {
    let token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    const res = await axios
      .delete(`http://localhost:3002/user/requestDelete/${id}`, {
        headers: headers,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleAccept = () => {
    acceptRequest()
      .then(() => isBorrowed())
      .then(() => refreshFunc());
    // .then(() => navigate("/books/borrowed"));
    // .then(() => setShow(!show));
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
      <button onClick={handleAccept}>Accept</button>
      <button onClick={deleteRequest}>Reject</button>
    </div>
  );
};

export default Request;
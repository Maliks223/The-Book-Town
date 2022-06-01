import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Request = ({
  id,
  name,
  email,
  phone,
  dateFrom,
  dateTo,
  bookTitle,
  bookId,
}) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    window.localStorage.setItem("showHide", show);
  }, [show]);

  useEffect(() => {
    let data = window.localStorage.getItem("showHide");
    if (data !== null) setShow(data);
  }, []);

  // const navigate = useNavigate();
  const acceptRequest = async () => {
    const res = await axios
      .put(`http://localhost:3002/books/update/${bookId}`, {
        isAvailable: false,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:3002/user/requestDelete/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleAccept = () => {
    acceptRequest()
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
      {show && <button onClick={handleAccept}>Accept</button>}
      <button onClick={deleteRequest}>Reject</button>
    </div>
  );
};

export default Request;

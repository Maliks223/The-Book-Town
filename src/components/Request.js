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
    <div className="card-container user_req">
  <div className="card">
    <div className="card-content">
      <div className="card-title">
        <h2>User Name: {name}</h2>
      </div>

      <div className="card-body">
        <h3>Phone: {phone}</h3>
        <h4>Email:&nbsp;{email}</h4>
        <h5>
          Requested From: {dateFrom.toString().split("T")[0]} To:{" "}
          {dateTo.toString().split("T")[0]}
        </h5>
        <h3>Requested Book: {bookTitle}</h3>
      </div>
      <button className="accept_btn" onClick={handleAccept}>
        Accept
      </button>
      <button className="reject_btn" onClick={deleteRequest}>
        Reject
      </button>
    </div>
  </div>
</div>  

  );
};

export default Request;


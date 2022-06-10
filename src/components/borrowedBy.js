import React from "react";
import { IconButton } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./borrowed.css";
import "./CSS files/book.css";

const BorrowedBy = ({ email, bookTitle, bookImage, bookId, dateTo }) => {
  let expiryDate = new Date(dateTo);
  let today = new Date();
  const holdClick = async () => {
    const res = await axios
      .put(`http://localhost:3002/books/update/${bookId}`, {
        suspended: false,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const [expiry, setExpiry] = useState(false);
  useEffect(() => {
    if (expiryDate.getTime() < today.getTime()) {
      setExpiry(true);
    } else {
      setExpiry(false);
    }
  }, []);

  const navigate = useNavigate();
  const bookReturned = async () => {
    let token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    const res = await axios
      .delete(`http://localhost:3002/user/returned/${bookId}`, {
        headers: headers,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const acceptRequest = async () => {
    let token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    const res = await axios
      .put(
        `http://localhost:3002/books/update/${bookId}`,
        {
          isAvailable: true,
        },
        { headers: headers }
      )
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const handleReturn = () => {
    acceptRequest()
      .then(() => holdClick())
      .then(() => bookReturned())
      .then(() => navigate("/books/admin"));
  };

  return (
    <div className="card-container-borrow">
      <IconButton>
        <KeyboardReturnIcon onClick={handleReturn} />
      </IconButton>
      <div className="card-content">
        <div className="card-body">
          <h2>Book: {bookTitle}</h2>
          <img src={bookImage} alt="" />
          <div className={expiry ? "bg-red" : ""}>
            {expiry && <h1 className="expiry">Expired</h1>}
            <h1>
              Borrowed By: <br /> {email}
            </h1>
            <h2>Lended To Date : {dateTo.toString().split("T")[0]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBy;

import React from "react";
import { IconButton } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BorrowedBy = ({ email, bookTitle, bookImage, bookId }) => {
  const navigate = useNavigate();
  const bookReturned = async () => {
    const res = await axios
      .delete(`http://localhost:3002/user/returned/${bookId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const acceptRequest = async () => {
    const res = await axios
      .put(`http://localhost:3002/books/update/${bookId}`, {
        isAvailable: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const handleReturn = () => {
    acceptRequest()
      .then(() => bookReturned())
      .then(() => navigate("/books"));
  };

  return (
    <div>
      <IconButton>
        <KeyboardReturnIcon onClick={handleReturn} />
      </IconButton>
      <h2>Book: {bookTitle}</h2>
      <img src={bookImage} alt="" />
      <h1>Borrowed By: {email}</h1>
    </div>
  );
};

export default BorrowedBy;

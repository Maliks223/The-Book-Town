import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import axios from "axios";
import "./AllBook.css";

const Book = ({
  id,
  title,
  author,
  description,
  category,
  image,
  refreshFunc,
}) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const handleEdit = (e) => {
    navigate(`/books/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:3002/books/delete/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest().then(() => refreshFunc());
  };


  return (
    <>
    <div className="card-container">
      <div className="card">
        {isLoggedIn && (
          <Box display={"flex"}>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        )}
        <div className="image-container">
            <img src={image} alt="book" />
        </div>

        <div className="card-content">
          <div className="card-title">
            <h1>Title: {title}</h1>
          </div>
          
          <div className="card-body">
            <p>Author: {author}</p>
            <p>Description: {description}</p>
            <h4>Category: {category}</h4>
          </div>

        </div>

        {/* <div className="btnCard">
          <button type="submit">
            <Link to="/user" state={{ bookId: id }}>
              Lend
            </Link>
          </button>
        </div> */}
      </div>
      </div>
    </>
  );
};

export default Book;

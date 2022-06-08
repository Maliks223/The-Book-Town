import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Card.css"


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
    let token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    const res = await axios
      .delete(`http://localhost:3002/books/delete/${id}`, { headers: headers })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest().then(() => refreshFunc());
  };

  // const handleAccept = () => {
  //   acceptRequest()
  //     .then(() => navigate("/books"));
  // };

  return (
    <>
      <div className="card-container">
        {isLoggedIn && (
          <Box display={"flex"}>
            <button onClick={handleEdit}>Edit
              </button>
           <button onClick={handleDelete}>Delete</button> 
              
          </Box>
        )}
        
        <img alt="" src={`http://localhost:3002/${image}`} />
        <div className="card-content">
        <div className="card-body">
          <h1>Title: {title}</h1>
          <p className="Book-CardDetail">Author : {author}</p>
          <p className="Book-CardDetail">Description : {description}</p>
          <h4>Category : {category}</h4>
          </div>
        </div>
        {!isLoggedIn && (
          <div  >
            <button className="Book-button" type="submit">
              <Link className="Book-btn"  to="/user" state={{ bookId: id }}>
                Lend
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Book;
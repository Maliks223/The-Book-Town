import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Card.css";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { color } from "@mui/system";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  dialogPaper: {
     
      width:"550px"  
  },
}));


const Book = ({
  id,
  title,
  author,
  description,
  category,
  image,
  suspended,
  refreshFunc,
}) => {
  console.log(suspended)
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

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const handleAccept = () => {
  //   acceptRequest()
  //     .then(() => navigate("/books"));
  // };

  const location = useLocation();
  // const id = location.state.bookId;
  // console.log(location.state.bookId);
  // const navigate = useNavigate();
  //   const [user, setUser] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    dateFrom: "",
    dateTo: "",
  });
  const [dialog,setDialog]=useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3002/user/user", {
        name: inputs.name,
        email: inputs.email,
        phone: inputs.phone,
        dateFrom: inputs.dateFrom,
        dateTo: inputs.dateTo,
        book: id,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    if (data.status === 404) {
      alert(data.message);
    }
  };
  const editSuspened = async () => {
    const res = await axios
      .put(`http://localhost:3002/books/update/${id}`, {
        suspended: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent send the data to the url
    console.log(inputs);
    sendRequest()
  };
  const handleClick =()=>{
    editSuspened().then(()=>refreshFunc())
    .then(()=>handleClose())
    // setDialog(true)

  }
const classes = useStyles();
  return (
    <>
      <div className="card-container">
        {isLoggedIn && (
          <Box display={"flex"}>
            <button onClick={handleEdit}>Edit</button>
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
            {suspended=="home" && <div></div>}
            {suspended && <h1>Suspended</h1>}
          </div>
        </div>
        {!isLoggedIn && !suspended && (
          <div>
            <button className="Book-button" type="submit">
              <div
                className="Book-btn"
                onClick={handleClickOpen}
                state={{ bookId: id }}
              >
                Lend
              </div>
            </button>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              classes={{ paper : classes.dialogPaper}}
            >
              <BootstrapDialogTitle
                sx={{
                  textAlign: "center",
                  color:"dodgerBlue"
                }}
                id="customized-dialog-title"
                onClose={handleClose}
              >
                USER FORM
              </BootstrapDialogTitle>

              <DialogContent dividers>
                <div className="User-form">
                  <form onSubmit={handleSubmit} className="user__form">
                    {/* <h1 className="User-h1">USER FORM</h1> */}
                    <input
                      className="User-input"
                      onChange={handleChange}
                      value={inputs.name}
                      type="text"
                      placeholder="Name"
                      name="name"
                    />
                    <br />
                    <input
                      className="User-input"
                      onChange={handleChange}
                      value={inputs.email}
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                    <br />
                    <input
                      className="User-input"
                      onChange={handleChange}
                      value={inputs.phone}
                      type="text"
                      placeholder="Phone"
                      name="phone"
                    />
                    <br />
                    <label className="User-label">From: </label>&nbsp;&nbsp;
                    <input
                      className="User-date"
                      onChange={handleChange}
                      value={inputs.dateFrom}
                      type="date"
                      name="dateFrom"
                    />
                    &nbsp;<label className="User-label"> To: </label>
                    &nbsp;&nbsp;
                    <input
                      className="User-date"
                      onChange={handleChange}
                      value={inputs.dateTo}
                      type="date"
                      name="dateTo"
                    />
                    <br />
                    <button onClick={handleClick} className="User-submit" type="submit">
                      Submit
                    </button>
                    {/* <DialogActions>
                <Button type="submit"  onClick={handleClose}>
                  Submit
                </Button>
              </DialogActions> */}
                  </form>
                </div>
              </DialogContent>
              
            </Dialog>
          </div>
        )}
      </div>
    </>
  );
};

export default Book;

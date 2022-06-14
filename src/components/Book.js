import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Card.css";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

import {makeStyles} from "@material-ui/styles"
const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    width: "550px",
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
  home,
  refreshFunc,
}) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const handleEdit = (e) => {
    navigate(`/books/${id}`);
  };

  const [dialog, setDialog] = useState(false);
  const [details, setDetails] = useState(false);

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
  // const [dialog, setDialog] = useState(false);

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
    sendRequest();
  };
  const handleClick = () => {
    editSuspened()
      .then(() => refreshFunc())
      .then(() => handleClose());

    // .then(()=>setDialog(true))
  };
  const classes = useStyles();

  const openDescription = () => {
    setDetails(true);
    console.log(details);
  };
  return (
    <>
      <div className="card-container">
        {isLoggedIn && (
          <Box>
            <EditIcon
              sx={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={handleEdit}
            >
              Edit
            </EditIcon>
            <DeleteOutlineIcon
              sx={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={handleDelete}
            >
              Delete
            </DeleteOutlineIcon>
          </Box>
        )}
        <img
          alt=""
          src={`http://localhost:3002/${image}`}
          onClick={openDescription}
        />
        <div className="card-content">
          <div className="card-body">
            <h1 className="card-body-h1">{title}</h1>
            <div className="card-grid-container">
              <div>
                {/* <p className="Book-CardDetail">Author</p> */}
                {/* <p className="Book-CardDetail">Description</p> */}
                {/* <h4>Category</h4> */}
              </div>
              {/* <div>
                <p>: {author}</p>
                <p>: {description}</p> 
                <p>: {category}</p>
              </div> */}
            </div>
            {/* {suspended == "home" && <div></div>} */}
            {suspended && <h1 className="card-body-h1-suspend">Suspended</h1>}
          </div>
        </div>
        {!isLoggedIn && !suspended && !home && (
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
              classes={{ paper: classes.dialogPaperDialog }}
            >
              <DialogTitle
                sx={{
                  textAlign: "center",
                  color: "dodgerBlue",
                }}
                id="customized-dialog-title"
                onClose={handleClose}
              >
                USER FORM
              </DialogTitle>

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
                    <button
                      onClick={() => setDialog(true)}
                      className="User-submit"
                      type="submit"
                    >
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
              <Dialog open={dialog}>
                <div className="confirm">
                  <div className="confirm-text">
                    Your request is being processed, you will be notefied upon
                    approval.
                  </div>
                  <button
                    className="confirm-btn"
                    onClick={() => {
                      handleClick();
                      setDialog(false);
                    }}
                  >
                    Back To Books
                  </button>
                </div>
              </Dialog>
            </Dialog>
          </div>
        )}
      </div>
      <Dialog open={details}>
        <div className="details">
          <div>
            <h1 className="details-desc desc">Description</h1>
            <p className="details-desc paragraph">{description}</p>
            <h2 className="details-desc desc">Author</h2>
            <p className="details-desc paragraph">{author}</p>
            <h3 className="details-desc desc">Category</h3>
            <p className="details-desc paragraph">{category}</p>
          </div>
          <div>
            <img
              src={`http://localhost:3002/${image}`}
              alt="description-image"
              className="details-img"
            />
            <CloseIcon className="details-ex" onClick={() => setDetails(false)}>
              ok
            </CloseIcon>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Book;

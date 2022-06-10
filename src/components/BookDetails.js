import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, InputLabel, TextField, Typography, Button } from "@mui/material";

const BookDetails = () => {
  const navigate = useNavigate();
  const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
  const id = useParams().id;
  const [book, setBook] = useState();
  const [inputs, setInputs] = useState();
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:3002/books/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    fetchDetails().then((data) => {
      setBook(data.book);
      setInputs({
        title: data.book.title,
        author: data.book.author,
        description: data.book.description,
        image: data.book.image,
        category: data.book.category,
      });
    });
  }, [id]);
  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("author", inputs.author);
    formData.append("description", inputs.description);
    formData.append("category", inputs.category);
    formData.append("image", image);
    // for (var value of formData.values()) {
    //   console.log(value);}
    let token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    const res = await axios
      .put(`http://localhost:3002/books/update/${id}`, formData, {
        headers: headers,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/books/admin"));
  };

  return (
    <>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor={"dodgerblue"}
            borderRadius={5}
            boxShadow={"10px 10px 20px #ccc"}
            padding={3}
            marginLeft={"16%"}
            marginTop={1.25}
            display={"flex"}
            flexDirection={"column"}
            width={"80%"}
          >
            <Typography
              textAlign={"center"}
              fontWeight={"bold"}
              padding={2}
              color={"dodgerblue"}
              variant={"h4"}
            >
              Add Your Book
            </Typography>
            <InputLabel sx={labelStyles}>Title</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={labelStyles}>Author</InputLabel>
            <TextField
              name="author"
              onChange={handleChange}
              value={inputs.author}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={labelStyles}>Description</InputLabel>
            <TextField
              name="description"
              onChange={handleChange}
              value={inputs.description}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={labelStyles}>Category</InputLabel>
            <TextField
              name="category"
              onChange={handleChange}
              value={inputs.category}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={labelStyles}>Image</InputLabel>
            <input type="file" name="image" onChange={handleFileChange} />
            <Button
              sx={{ mt: 1.5, borderRadius: 4 }}
              variant="contained"
              type="submit"
            >
              Add
            </Button>
          </Box>
        </form>
      )}
    </>
  );
};

export default BookDetails;

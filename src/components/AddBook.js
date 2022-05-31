import React from "react";
import { Box, InputLabel, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    image: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3002/books/add", {
        title: inputs.title,
        author: inputs.author,
        description: inputs.description,
        category: inputs.category,
        image: inputs.image,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  return (
    <form className="form-container"  onSubmit={handleSubmit}>
      <Box
        border={3}
        borderColor={"dodgerblue"}
        borderRadius={5}
        boxShadow={"10px 10px 20px #ccc"}
        padding={3}
        marginLeft={"270px"}
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
        <TextField
          name="image"
          onChange={handleChange}
          value={inputs.image}
          margin="auto"
          variant="outlined"
        />
        <Button
          sx={{ mt: 1.5, borderRadius: 4 }}
          variant="contained"
          type="submit"
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;

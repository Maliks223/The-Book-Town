import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const AddBanner = () => {
  const [inputs, setInputs] = useState({ text: "" });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .put("http://localhost:3002/banner/edit/629f905734cbf36968b02ff5", {
        text: inputs.text,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => window.alert("Banner Updated"));
  };
  return (
    <div>
      <TextField
        sx={{ marginLeft: "300px", marginTop: "20px", width: "500px" }}
        id="outlined-basic"
        label="Banner's Title"
        variant="outlined"
        name="text"
        value={inputs.text}
        onChange={handleChange}
      />
      <Button
        onClick={handleSubmit}
        sx={{ marginLeft: "30px", marginTop: "30px" }}
        variant="outlined"
      >
        Submit
      </Button>
    </div>
  );
};

export default AddBanner;

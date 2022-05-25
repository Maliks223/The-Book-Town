import React from "react";
import { useState } from "react";
import axios from "axios";

const LendRequest = () => {
  const id = localStorage.getItem("userId");

  const [inputs, setInputs] = useState({
    dateFrom: "",
    dateTo: "",
    user: id,
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3002/user/request", {
        dateFrom: inputs.dateFrom,
        dateTo: inputs.dateTo,
        user: id,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent send the data to the url
    console.log(inputs);
    sendRequest()
      // .then(() => navigate("/books"))
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>From : </label>
        <br />
        <input
          onChange={handleChange}
          value={inputs.name}
          type="date"
          name="dateFrom"
        />
        <label> To: </label>
        <input
          onChange={handleChange}
          value={inputs.name}
          type="date"
          name="dateTo"
        />
        <br />
        <button type='submit'>LEND</button>
      </form>
    </div>
  );
};

export default LendRequest;

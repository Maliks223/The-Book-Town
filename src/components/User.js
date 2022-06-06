import React, { useState } from "react";
import axios from "axios";
import "./User.css"
// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();
  const id = location.state.bookId;
  console.log(location.state.bookId);
  // const navigate = useNavigate();
  //   const [user, setUser] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    dateFrom: "",
    dateTo: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent send the data to the url
    console.log(inputs);
    sendRequest();
  };

  return (
    <div className="User-form">
      <form onSubmit={handleSubmit} className="user__form">
        <h1 className="User-h1">USER FORM</h1>
        <input className="User-input"
          onChange={handleChange}
          value={inputs.name}
          type="text"
          placeholder="Name"
          name="name"
        />
        <br />
        <input className="User-input"
          onChange={handleChange}
          value={inputs.email}
          type="email"
          placeholder="Email"
          name="email"
        />
        <br />
        <input className="User-input"
          onChange={handleChange}
          value={inputs.phone}
          type="text"
          placeholder="Phone"
          name="phone"
        />
        <br />
        <label className="User-label">From: </label>&nbsp;&nbsp;
        <input
          onChange={handleChange}
          value={inputs.dateFrom}
          type="date"
          name="dateFrom"
        />
        &nbsp;<label className="User-label"> To: </label>&nbsp;&nbsp;
        <input
          onChange={handleChange}
          value={inputs.dateTo}
          type="date"
          name="dateTo"
        />
        <br />
        <button className="User-submit" type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default User;
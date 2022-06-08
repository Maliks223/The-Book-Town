import React from "react";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authAction } from "../store";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispath = useDispatch(); //to update satet inside redux
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post(`http://localhost:3002/admin/login`, {
        name: inputs.name,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    localStorage.setItem('token',data.token)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent send the data to the url
    sendRequest()
      .then(() => dispath(authAction.login()))
      .then(() => navigate("/books"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="logIn">
          Login
          <input
            onChange={handleChange}
            value={inputs.name}
            placeholder="Admin Name"
            type="text"
            name="name"
            id="adminname"
          />
          <input
            onChange={handleChange}
            value={inputs.password}
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          />
          <br />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;

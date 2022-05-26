import React from "react";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authAction } from "../store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const dispath = useDispatch(); //to update satet inside redux
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setisSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(`http://localhost:3002/admin/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent send the data to the url
    console.log(inputs);
    if (isSignup) {
      sendRequest("signup")
        .then(() => dispath(authAction.login()))
        .then(() => navigate("/books"))
        .then((data) => console.log(data));
    } else {
      sendRequest()
        .then(() => dispath(authAction.login()))
        .then(() => navigate("/books"))
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="logIn">
          {isSignup ? "Signup" : "Login"}
          <input
            onChange={handleChange}
            value={inputs.name}
            placeholder="Admin Name"
            type="text"
            name="name"
            id="adminname"
          />
          {isSignup && (
            <input
              onChange={handleChange}
              value={inputs.email}
              placeholder="Admin Email"
              type="email"
              name="email"
              id="adminemail"
            />
          )}
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

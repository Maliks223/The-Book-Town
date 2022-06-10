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
    password: "",
  });

  const [isSignup, setisSignup] = useState(false);

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
    localStorage.setItem("token", data.token);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent send the data to the url
    sendRequest()
      .then(() => dispath(authAction.login()))
      .then(() => navigate("/books/admin"));
  };

  return (
    <div className="bk-color">
      <div className="center">
        <form onSubmit={handleSubmit}>
          {isSignup ? <h1>Sign Up</h1> : <h1>Login</h1>}
          <div class="txt_field">
            <input
              type="text"
              onChange={handleChange}
              value={inputs.name}
              name="name"
              id="adminname"
              required
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
            <span></span>
            <label>Admin Name</label>
          </div>

          <div class="txt_field">
            <input
              onChange={handleChange}
              value={inputs.password}
              type="password"
              name="password"
              id="password"
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Auth;

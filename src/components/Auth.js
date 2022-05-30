import React from "react";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authAction } from "../store";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="bk-color">

      <div className="center">
      <form onSubmit={handleSubmit}>
      {isSignup ? <h1>Sign Up</h1> : <h1>Login</h1>}
        <div class="txt_field">
        

        <input type="text"
                  onChange={handleChange}
                  value={inputs.name}
                  name="name"
                  id="adminname"
                  required/>
          
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
          
          <input onChange={handleChange}
          value={inputs.password}
          type="password"
          name="password"
          id="password"
           required/>
          <span></span>
          <label>Password</label>
        </div>



        {/* <div class="pass">Forgot Password?</div> */}

        <input type="submit" value="Login"/>

        {/* <div class="signup_link">
           <a href="#">Signup</a>
        </div> */}
         <button className="changeto-btn" type="button" onClick={() => setisSignup(!isSignup)}>
           Change To {isSignup ? "Login" : "Sign Up"}
        </button> 
        
      </form>
      </div>

    </div>
  );
};

export default Auth;

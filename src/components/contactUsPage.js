import React from "react";
import "../components/contactUsPage.css";
// import { SocialMediaIconsReact } from "social-media-icons-react";
import { useState } from "react";
import axios from "axios";

const ContactUsPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3002/control/add", {
        name: inputs.name,
        email: inputs.email,
        message: inputs.message,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleAlert = () =>{
    alert("Thank you. We will reach to you soon")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            onChange={handleChange}
            value={inputs.name}
            name='name'
            className="input1"
            type="text"
            placeholder="Name"
            required
          ></input>
          <input
            onChange={handleChange}
            value={inputs.email}
            name='email'
            className="input1"
            type="email"
            placeholder="Email"
            required
          ></input>
          <input
            onChange={handleChange}
            value={inputs.message}
            name='message'
            className="input1 input3"
            type="text"
            placeholder="Message"
            required
          ></input>
          <input className="input4" name="subject" onClick={handleAlert} type="submit"></input>
        </div>
      </form>
      <div>
        <div className="footer">
          <div className="footerTxt">
            <h1>GET IN TOUCH</h1>
            <h3 className="contact-hey">
              Hey! We are looking forward<br></br> for your feedback!
            </h3>
            <p className="contact-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              possimus sunt quidem necessitatibus incidunt cupiditate nisi, nemo
              facere qui cum.
            </p>
          </div>
        </div>

        <div className="info">
          <div className="titles">
            <div className="title">
              <h2>CALL US</h2>
              <p>
                <a className="contact-phone" href="tel:+96171526244">+(961) 71 526244</a>
                <br></br>
                <a className="contact-phone" href="tel:+96171526244">+(961) 71 526244</a>
              </p>
            </div>

            <div className="title">
              <h2>LOCATION</h2>
              <p>
                <a className="contact-phone"
                  href="https://www.google.com/maps/@33.8839457,35.5103763,14z"
                  target="non-refer"
                >
                  {" "}
                  Lebanon , Beirut <br/> 2083 - 3054{" "}
                </a>
              </p>
            </div>

            <div className="title">
              <h2>BUSINESS HOURS </h2>
              <p className="contact-phone">
                Mon - Fri ..... 10 am - 8 pm <br></br>Sat - Sun ..... Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

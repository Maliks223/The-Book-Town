import "./Banner.css";
import React, { useEffect, useState } from "react";
import stand from "../assets/stand.png";
import index from "../assets/index.jpeg";
import The_Great_Gatsby_Cover_1925_Retouched from "../assets/The_Great_Gatsby_Cover_1925_Retouched.jpg";
import tree from "../assets/tree.jpeg";
import BannerTitle from "./BannerTitle";
import axios from "axios";
import {Link} from "react-router-dom"
// import sport from "../assets/sport.jpg";

const Banner = () => {
  const [banner, setBanner] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3002/banner/")
      .catch((err) => console.log(err));
    const data = await res.data;
    setBanner(data.banner);
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <div>
      <section class="home" id="home">
        <div class="row">
          <div class="content">
            {/* <h3>upto 75% off</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
              ex minima at!
            </p> */}

            {banner &&
              banner.map((title) => (
                <BannerTitle key={title._id} text={title.text}></BannerTitle>
              ))}
            <Link to="/books" className="btn">
              Rent Now
            </Link>
          </div>

          <div class="books">
            <div class="image-wrapper">
              <a href="#">
                <img src={index} alt="" />
              </a>
              <a href="#">
                <img src={The_Great_Gatsby_Cover_1925_Retouched} alt="" />
              </a>
              <a href="#">
                <img src={tree} alt="" />
              </a>
            </div>

            <img src={stand} class="stand" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

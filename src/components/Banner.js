import "./Banner.css";
import React, { useEffect, useState } from "react";
import stand from "../assets/stand.png";
import book1 from "../assets/book-1.png";
import book2 from "../assets/book-10.png";
import book3 from "../assets/book5.png";
import BannerTitle from "./BannerTitle";
import axios from "axios";

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
            Link
          </div>

          <div class="books">
            <div class="image-wrapper">
              <a href="#">
                <img src={book1} alt="" />
              </a>
              <a href="#">
                <img src={book2} alt="" />
              </a>
              <a href="#">
                <img src={book3} alt="" />
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

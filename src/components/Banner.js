import "./Banner.css"
import React from "react";
import stand from "../assets/stand.png"
import book1 from "../assets/book-1.png"
import book2 from "../assets/book-10.png"
import book3 from "../assets/book5.png"
import BannerTitle from "./BannerTitle";


const Banner = () => {
    return ( 
        <div>
            <section class="home" id="home">

                <div class="row">

                    <div class="content">
                        <h2 className="address">THE BOOK TOWN</h2>
                        <BannerTitle/>
                        <a href="/books" class="btn">Lend Now</a>
                    </div>

                    <div class="books">
                        <div class="image-wrapper">
                            <a href="#" ><img src={book1} alt=""/></a>
                            <a href="#" ><img src= {book2}alt=""/></a>
                            <a href="#" ><img src={book3} alt=""/></a>
                        </div>
                        <img src={stand} class="stand" alt=""/>
                    </div>

                </div>

            </section>
        </div>
     );
}
 
export default Banner;
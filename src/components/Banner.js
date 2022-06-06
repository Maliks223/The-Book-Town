import "./Banner.css"
import React from "react";
import stand from "../assets/stand.png"
import book1 from "../assets/book-1.png"
import book2 from "../assets/book-10.png"
import book3 from "../assets/book5.png"


const Banner = () => {
    return ( 
        <div>
            <section class="home" id="home">

                <div class="row">

                    <div class="content">
                        <h3>upto 75% off</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
                        <a href="/books" class="btn">Read Now</a>
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
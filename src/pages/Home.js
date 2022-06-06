import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Banner from "../components/Banner";
import Card from "../components/Card";
import book1 from "../assets/book-1.png";
import book2 from "../assets/book-10.png";
import book3 from "../assets/book5.png";
import Footer from "../components/footer";
import axios from "axios";
import Book from "../components/Book";

const breakPoints = [
  { width: 576, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 992, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1400, itemsToShow: 4 },
];

const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState({
        status: true,
        msg: 'Loading'
    });
    
    useEffect(() => {
        setLoading({
            status: true,
            msg: 'Fetching Books...'
        })
        setTimeout(() => {
            // setBooks([book, book, book, book, book, book, book])
            setLoading({
                status: false,
                msg: 'Loading...',
            });
            sendRequest()
        }, 500);
    }, [])
    const sendRequest = async () => {
      const res = await axios
        .get("http://localhost:3002/books")
        .catch((err) => console.log(err));
  
      const data = await res.data;
  
      setBooks(data.books);
    };
  return (
    <>
      <Banner />
      <div className="card-flex">
        {loading.status ? <div>{loading.msg}</div> : 
        <Carousel
          className="carousel"
          pagination={false}
          breakPoints={breakPoints}
        >
          {books.map((book, index) => {
            return (
              <Book
             
              key={book._id}
              author={book.author}
              description={book.description}
              category={'action'}
           
                image={book.image}
                
              />
            );
          })}
        </Carousel>
}
      </div>
      <Footer />
    </>
  );
};

export default Home;

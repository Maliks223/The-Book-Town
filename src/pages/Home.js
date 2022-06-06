import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Banner from "../components/Banner";
import Card from "../components/Card";
import book1 from "../assets/book-1.png";
import book2 from "../assets/book-10.png";
import book3 from "../assets/book5.png";
import Footer from "../components/footer";

const breakPoints = [
  { width: 576, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 992, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1400, itemsToShow: 4 },
];
const book = {
  title: "Card Title",
  imageUrl: book1,
  body: "body",
};
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
            setBooks([book, book, book, book, book, book, book])
            setLoading({
                status: false,
                msg: 'Loading...',
            });
        }, 1000);
    }, [])
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
              <Card
              key={index}
                title={book.title}
                imageUrl={book.imageUrl}
                body={book.body}
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

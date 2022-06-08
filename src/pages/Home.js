import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Banner from "../components/Banner";
// import Footer from "../components/footer";
import axios from "axios";
import Book from "../components/Book";
import HomeFooter from "../components/HomeFooter";

const breakPoints = [
  { width: 576, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 992, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1400, itemsToShow: 4 },
];

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState({
    status: true,
    msg: "Loading",
  });

  const sendRequest1 = async () => {
    const res = await axios
      .get("http://localhost:3002/books")
      .catch((err) => console.log(err));
    
    const data = await res.data;
    setBooks(data.books)
    // return data;
  };

  useEffect(() => {
    setLoading({
      status: true,
      msg: "Loading...",
    });
    setTimeout(() => {
      setLoading({
        status: false,
        msg: "Loading...",
      });
      sendRequest();
    }, 500);
  }, []);
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
        {loading.status ? (
          <div>{loading.msg}</div>
        ) : (
          <Carousel
            className="carousel"
            pagination={false}
            breakPoints={breakPoints}
          >
            {books.map((book) => {
              return (
                <Book
                  key={book._id}
                  id={book._id}
                  author={book.author}
                  description={book.description}
                  category={book.category}
                  image={book.image}
                  title={book.title}
                  suspended={"home"}
                  refreshFunc={sendRequest1}
                />
              );
            })}
          </Carousel>
        )}
      </div>
      <HomeFooter />
    </>
  );
};

export default Home;

import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Admin from "./components/Admin";
import Books from "../src/components/Books";
import UserBook from "../src/components/UserBook";
import AddBook from "../src/components/AddBook";
import BookDetails from "../src/components/BookDetails";
import Auth from "../src/components/Auth";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      {/* <Admin /> */}
      <Router>
        {/* <Navbar /> */}
        <Admin />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/books" element={<Books />} />
          <Route path="/book/add" element={<AddBook />} />
          <Route path="/userBook" element={<UserBook />} />
          <Route path="/userBook/:id" element={<BookDetails />} />
          <Route path="/auth/" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

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
import User from "../src/components/User";
import Navbar from "../src/components/Navbar";


function App() {
  return (<>
      <Router>
        <Admin />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/book/add" element={<AddBook />} />
          <Route exact path="/userBook" element={<UserBook />} />
          <Route exact path="/userBook/:id" element={<BookDetails />} />
          <Route exact path="/auth/" element={<Auth />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </Router>
      </>
    
  );
}

export default App;

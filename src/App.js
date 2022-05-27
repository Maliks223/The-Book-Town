import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<AboutUs/>}/>
          <Route exact path="/contact" element={<ContactUs/>}/> 
        </Routes>
        
        
      </Router>
     
    
  );
}

export default App;

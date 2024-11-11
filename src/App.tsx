import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;

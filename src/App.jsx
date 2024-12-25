import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './componets/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './componets/Navigation';
import CartPage from './componets/CartPage';
import Footer from './componets/Footer';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer/>
    </Router>
 
    </div>
  )
}

export default App

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import ProductDetail from './components/ProductDetail';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;

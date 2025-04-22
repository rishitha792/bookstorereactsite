import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Books from './Books';
import Cart from './Cart';
import Order from './Order';
import Boooks from './Boooks';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };
  const handleRemoveFromCart=(bookToRemove)=>{

    setCart(cart.filter(book=>book.title!==bookToRemove.title));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={Boooks} onAdd={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} onRemove={handleRemoveFromCart} />} />
        
        <Route path="/order" element={<Order cart={cart} clearCart={handleClearCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
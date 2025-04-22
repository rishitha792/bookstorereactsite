import React from 'react';
import { Link } from 'react-router-dom';
import './order.css';

function Order({ cart, clearCart }) {
  return (
    <div className="container3">
      <h2>Order Confirmed!</h2>
      <p>You ordered {cart.length} items.</p>
      <button className='button1' onClick={clearCart}><Link to="/">Go Home</Link></button>
    </div>
  );
}

export default Order;
import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

function Cart({ cart ,onRemove}) {
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="container2">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ol>
            {cart.map((item, index) => (
              <li key={index} className="cart-item"><span>{item.title} - ${item.price}</span>
              <button  onClick={()=>onRemove(item)} className='remove-button'>Remove</button></li>
            ))}
          </ol>
          <p>Total: ${total}</p>
          <Link to="/order"><button className='button5'>Proceed to Order</button></Link>
        </>
      )}
    </div>
  );
}

export default Cart;
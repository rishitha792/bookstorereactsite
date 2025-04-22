import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1 classname='name'>Vintage BookStore</h1>
      <div className="nvb">
        <Link to="/"><button className='button1'>Home</button></Link>
        <Link to="/books"><button className='button2'>Books</button></Link>
        <Link to="/cart"><button className='button3'>Cart ({cartCount})</button></Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
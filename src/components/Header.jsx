import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css'; 

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total item count in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">ShoppyGlobe</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

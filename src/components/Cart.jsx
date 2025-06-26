import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout" className='checkout'>
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;

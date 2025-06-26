import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import OrderConfirmation from './OrderConfirmation';
import '../styles/Checkout.css';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert('Please enter a valid address.');
      return;
    }

    // Clear all cart items
    cartItems.forEach(item => dispatch(removeFromCart(item.id)));

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return <OrderConfirmation />;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Address:
          <textarea
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            required
          />
        </label>

        <label>
          Payment Method:
          <select disabled>
            <option>Cash on Delivery</option>
          </select>
        </label>

        <button onClick={handlePlaceOrder}>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;

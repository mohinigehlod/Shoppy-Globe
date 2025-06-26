import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="order-confirmation">
      <h2>🎉 Congratulations!</h2>
      <p>Your order has been placed successfully.</p>
      <button onClick={handleBackHome}>Back to Home</button>
    </div>
  );
};

export default OrderConfirmation;

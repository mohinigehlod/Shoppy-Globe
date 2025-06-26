import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeFromCart(item.id));
  const handleIncrement = () => dispatch(incrementQuantity(item.id));
  const handleDecrement = () => dispatch(decrementQuantity(item.id));

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="details">
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>−</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <button className="remove" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;

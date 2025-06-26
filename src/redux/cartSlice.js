import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // array of { id, title, price, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(p => p.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
  const item = state.items.find(p => p.id === action.payload);
  if (item) {
    item.quantity += 1;
  }
},
decrementQuantity(state, action) {
  const item = state.items.find(p => p.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  }
}

  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

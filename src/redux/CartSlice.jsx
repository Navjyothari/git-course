import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add product with quantity 1; prevent duplicate entries if already added
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (!existingItem) {
        state.items.push({
          ...product,
          quantity: 1
        });
      }
    },

    // Remove a product completely from cart by id (supports both id and object payload)
    removeItem: (state, action) => {
      const targetId =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload.id
          : action.payload;
      state.items = state.items.filter(item => item.id !== targetId);
    },

    // Increase product quantity by 1
    increaseQuantity: (state, action) => {
      const targetId =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload.id
          : action.payload;
      const item = state.items.find(item => item.id === targetId);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease product quantity; if it reaches 0, remove the product
    decreaseQuantity: (state, action) => {
      const targetId =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload.id
          : action.payload;
      const item = state.items.find(item => item.id === targetId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== targetId);
        }
      }
    },

    // Clear all items in cart
    clearCart: (state) => {
      state.items = [];
    }
  }
});

// Action creators
export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// Default export reducer
export default cartSlice.reducer;

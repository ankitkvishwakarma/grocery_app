import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    couponApplied: false,
    discount: 0, // Percentage (e.g., 10 for 10%)
  },
  reducers: {
   addToCart: (state, action) => {
  const item = action.payload;
  const existing = state.items.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    state.items.push(item);
  }
},

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    changeQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    applyCoupon: (state, action) => {
      const validCoupon = action.payload === "DISCOUNT10";
      if (validCoupon) {
        state.couponApplied = true;
        state.discount = 10; // 10% discount
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.couponApplied = false;
      state.discount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  applyCoupon,
  changeQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

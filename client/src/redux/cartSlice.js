// src/redux/cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";  // ✅ correct path

// ✅ Fetch cart from backend
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const { data } = await API.get("/cart");
  return data.items || [];
});

// ✅ Add to cart (backend)
export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }) => {
    const { data } = await API.post("/cart/add", { productId, quantity });
    return data.items;
  }
);

// ✅ Remove from cart
export const removeFromCartAsync = createAsyncThunk(
  "cart/remove",
  async (productId) => {
    const { data } = await API.delete(`/cart/remove/${productId}`);
    return data.items;
  }
);

// ✅ Clear cart (on checkout success → place order)
export const clearCartAsync = createAsyncThunk("cart/clear", async () => {
  await API.post("/orders/place");
  return [];
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], discount: 0, couponApplied: false },
  reducers: {
    // ✅ Coupon Reducer
    applyCoupon: (state, action) => {
      if (action.payload === "DISCOUNT10") {
        state.discount = 10;
        state.couponApplied = true;
      }
    },
    // ✅ Local addToCart (without backend)
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (i) => i.product._id === action.payload.product._id
      );
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ product: action.payload.product, quantity: 1 });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(clearCartAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

// ✅ Export actions properly
export const { applyCoupon, addToCart } = cartSlice.actions;
export default cartSlice.reducer;

// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      state.token = token;

      // persist in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;

      // clear localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    },

    loadUserFromStorage: (state) => {
      const token = localStorage.getItem("authToken");
      const user = localStorage.getItem("user");

      if (token && user) {
        state.isLoggedIn = true;
        state.token = token;
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { login, logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;

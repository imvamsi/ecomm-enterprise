import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("credentials")
    ? JSON.parse(localStorage.getItem("credentials"))
    : null,
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("credentials", JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;

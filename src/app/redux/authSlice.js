import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

if (typeof localStorage !== "undefined") {
  const storedUserInfo = localStorage.getItem("userInfo");
  if (storedUserInfo) {
    try {
      initialState.userInfo = JSON.parse(storedUserInfo);
    } catch (error) {}
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentialsUser: (state, action) => {
      state.userInfo = action.payload;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.userInfo = null;
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("userInfo");
      }
    },
  },
});

export const { setCredentialsUser, logout } = authSlice.actions;
export default authSlice.reducer;

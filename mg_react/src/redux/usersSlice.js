import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.pk = action.payload.pk;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: {
        token,
        user: { pk },
      },
    } = await api.login(form);
    console.log(token, pk);
    if (pk && token) {
      dispatch(logIn({ token, pk }));
    }
  } catch {
    alert("아이디와 비밀번호를 확인해주세요");
  }
};

export default userSlice.reducer;

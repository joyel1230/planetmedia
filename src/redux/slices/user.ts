import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: boolean;
  userToken: String;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken: "",
    user: false,
  } as UserState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      localStorage.setItem("userAuth", action.payload);
      state.userToken = action.payload;
      state.user = true;
    },
    logoutUser: (state) => {
      localStorage.removeItem("userAuth");
      state.userToken = "";
      state.user = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

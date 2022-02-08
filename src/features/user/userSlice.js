import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: {} };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createDummyUser: (state) => {
      state.value = { username: "test" };
    },
    createSpecefiedUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { createDummyUser, createSpecefiedUser } = userSlice.actions;
export default userSlice.reducer;

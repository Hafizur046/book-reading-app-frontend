import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

const initialState = {
  socket: null,
  connected: false,
};

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    initializeConnection: (state) => {
      //initialize socket.io connection
      console.log("initializing socket.io connection");
      state.socket = io();
      state.connected = true;
      state.socket.on("welcome", () => {
        console.log("welcome");
      });
    },
  },
});

export const { initializeConnection } = socketSlice.actions;
export default socketSlice.reducer;

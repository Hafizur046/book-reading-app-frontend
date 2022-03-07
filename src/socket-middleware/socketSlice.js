import io from "socket.io-client";

function initializeSocket(store) {
  const socket = io(process.env.REACT_APP_SOCKET_URL);
  return socket;
}
//initialize socket.io connection
console.log("initializing socket.io connection");
let socket = io();
socket.on("welcome", () => {
  console.log("welcome");
});

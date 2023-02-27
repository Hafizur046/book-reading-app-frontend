import React from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export const SocketProvider = (props) => {
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    if (!props.isAuthenticated) return;
    const socket = io();
    setSocket(socket);
  }, [props.isAuthenticated]);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContext;

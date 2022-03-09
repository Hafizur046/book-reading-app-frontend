import { useEffect } from "react";
import { useParams } from "react-router";

//importing services
import { useGetSelfQuery } from "../../services/user";

function Room({ socket }) {
  const { isLoading, data } = useGetSelfQuery();
  const params = useParams();

  useEffect(() => {
    if (!socket || isLoading) return;
    socket.emit("join-room", { roomId: params.roomId, user: data });
    socket.on("room-joined", (room) => {
      console.log(room);
    });
  }, [socket, params.roomId, isLoading, data]);

  return (
    <div>
      <h1>Room {params.roomId}</h1>
    </div>
  );
}

export default Room;

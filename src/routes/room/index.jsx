import { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router";
import ePub from "epubjs";

//importing services
import { useGetSelfQuery } from "../../services/user";

function Room({ socket }) {
  const { isLoading, data } = useGetSelfQuery();
  const params = useParams();

  useLayoutEffect(() => {
    const book = ePub("/capitalists_realism.epub");
    const rendition = book.renderTo("area", {
      flow: "paginated",
      width: "100%",
      height: "100%",
    });
    rendition.display();
  }, []);

  useEffect(() => {
    if (!socket || isLoading) return;
    socket.emit("join-room", { roomId: params.roomId, user: data });
    socket.on("room-joined", (room) => {
      console.log(room);
    });
    socket.on("user-joined", (user) => {
      console.log(user);
    });
  }, [socket, params.roomId, isLoading, data]);

  return (
    <div>
      <h1>Room {params.roomId}</h1>
      <div id="area"></div>
    </div>
  );
}

export default Room;

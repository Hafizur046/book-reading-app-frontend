import { useEffect, useState } from "react";
import { useParams } from "react-router";

//importing services
import { useGetSelfQuery } from "../../services/user";
import { ReactReader } from "react-reader";

function Room({ socket }) {
  const { isLoading, data } = useGetSelfQuery();
  const params = useParams();
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
  };

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
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url="/capitalists_realism.epub"
        />
      </div>
    </div>
  );
}

export default Room;

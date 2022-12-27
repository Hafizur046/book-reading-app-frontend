import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RoomList({ socket, user }) {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (!socket) return;
    socket.emit("init");
    socket.on("available-public-rooms", (rooms) => {
      setRooms(rooms);
    });
    socket.on("new-room", (room) => {
      console.log("new room", room);
      setRooms((currentRooms) => [room, ...currentRooms]);
    });
  }, [socket]);

  function createRoom() {
    if (!socket) return;
    const bookUrl = prompt("Enter the book url");
    socket.emit("create-room", {
      name: roomName,
      roomType: "public",
      user: user,
      bookUrl: bookUrl,
    });
    setRoomName("");
  }

  return (
    <>
      <div>
        <h2>Public Rooms</h2>
        <ul>
          {rooms.map((room) => (
            <li key={room._id}>
              <Link to={`/room/${room._id}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Room name"
          onChange={(e) => setRoomName(e.target.value)}
          value={roomName}
        />
        <button onClick={createRoom}>Create Room</button>
      </div>
    </>
  );
}
export default RoomList;

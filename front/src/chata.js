import "./chat.css";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3303");

function Chati() {
  const username = localStorage.getItem("random");
  socket.emit("join_room", "Anonymous");
  return (
    <div>
      <Chat socket={socket} username={username} room={"Anonymous"} />
    </div>
  );
}
export default Chati;

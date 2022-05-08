import "./chat.css";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://cheshire.cse.buffalo.edu:3303");

function Chata() {
  const username = localStorage.getItem("random");
  socket.emit("join_room", "Anonymous");
  return (
    <div>
      <Chat socket={socket} username={username} room={"Anonymous"} />
    </div>
  );
}
export default Chata;

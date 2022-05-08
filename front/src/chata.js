import "./chat.css";
import io from "socket.io-client";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";

const socket = io.connect("http://cheshire.cse.buffalo.edu:3303");

function Chata() {
  const username = localStorage.getItem("random");
  socket.emit("join_room", "Anonymous");
  let navigate = useNavigate();
  return (
    <div>
      <Chat socket={socket} username={username} room={"Anonymous"} />
      <button class="Back" onClick={()=>{navigate("/main")}}>BACK</button>
    </div>
  );
}
export default Chata;

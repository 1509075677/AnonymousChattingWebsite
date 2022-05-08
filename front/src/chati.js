import "./chat.css";
import io from "socket.io-client";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";

const socket = io.connect("http://cheshire.cse.buffalo.edu:3303");

function Chati() {
  const username = localStorage.getItem("username");
  socket.emit("join_room", "Identified");
  let navigate = useNavigate();
  return (
    <div>
      <Chat socket={socket} username={username} room={"Identified"} />
      <button class="Back" onClick={()=>{navigate("/main")}}>BACK</button>
    </div>
  );
}
export default Chati;

import "./chat.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://cheshire.cse.buffalo.edu:3303");

function Chati() {
  const username = localStorage.getItem("username");
  socket.emit("join_room", "Identified");
  return (
    <div>
      <Chat socket={socket} username={username} room={"Identified"} />
    </div>
  );
}
export default Chati;

import React from 'react';
import './chat.css';
import { ChatEngine } from 'react-chat-engine';

function Chati() {
  return(
    <ChatEngine
      height="100vh"
      projectID="72d976b0-eb76-475a-94d1-1f3dc8085a5b"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    />
  );
}

export default Chati;
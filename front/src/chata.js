import React from 'react';
import './chat.css';
import { ChatEngine } from 'react-chat-engine';

function Chata() {
  return(
    <ChatEngine
      height="100vh"
      projectID="cf4092c8-f436-4018-94c9-70a69852188f"
      userName={localStorage.getItem('random')}
      userSecret={localStorage.getItem('password')}
    />
  );
}

export default Chata;
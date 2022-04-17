import React from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import Landing from './landing';
import Error from './Error';
import Chati from './chati';
import Chata from './chata';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Mainpage from './mainpage';
import Profilemodify from './profilemodify';
import Profile from './profile';
import InfoPage from './infoPage'
import SearchPage from './search';

import Sprofile from './sprofile';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/infoPage" element={<InfoPage />}/>
        <Route path="/profilemodify" element={<Profilemodify />}/>
        <Route path="/" element={<Landing />}/>
        <Route path="/main" element={<Mainpage/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/chati" element={<Chati />}/>
        <Route path="/chata" element={<Chata />}/>
        <Route path="*" element={<Error />}/>
          
        <Route path="/sprofile" element={<Sprofile />}/>
          
      </Routes>
    </Router>
  );
}


export default App;

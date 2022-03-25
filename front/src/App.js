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

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/main" element={<Mainpage/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/chati" element={<Chati />}/>
        <Route path="/chata" element={<Chata />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
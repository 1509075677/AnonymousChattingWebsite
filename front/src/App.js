import React from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import Landing from './landing';
import Error from './Error';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import Mainpage from './mainpage';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/main" element={<Mainpage/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
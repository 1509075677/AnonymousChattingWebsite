import React,{useState} from 'react';
import './login.css';
import Axios from 'axios'
import {useNavigate} from "react-router-dom";

function Login() {
  const [usernameR,setUsername] = useState('');
  const [passwordR,setPassword] = useState('');
  let navigate = useNavigate();

  const login =() =>{
    navigate("/")
    Axios.post('http://localhost:3302/login',{
      username : usernameR,
      password : passwordR,
    }).then(()=>{
      alert('nice')
    });
  };
  return (
    <div class='form'>
      <div class="NOMO" onClick={()=>{
            navigate("/");}}><img src="images/NOMO.svg"/></div>
      <div class ="Quote"><img src="./images/quote.svg"/></div>
      <input type="usernametext" 
        placeholder="USERNAME" 
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
      />
      <input type="passwordtext" 
        placeholder="PASSWORD" 
        onChange={(e)=>{
          setPassword(e.target.value)
      }}
      />
      <div class="loginborder" onClick={login}>
      </div>
      <div class="loginclass"><img src="./images/login/loginimage.svg"/></div>
    </div>

  );
}

export default Login;
import React,{useState} from 'react';
import './login.css';
import Axios from 'axios'
import {useNavigate} from "react-router-dom";

function Login() {
  const [usernameR,setUsername] = useState('');
  const [passwordR,setPassword] = useState('');
  let navigate = useNavigate();

  const login =() =>{
    //http://localhost:3301/login
    //http://cheshire.cse.buffalo.edu:3301/login
    Axios.post('http://cheshire.cse.buffalo.edu:3301/login',{ 
      username : usernameR,
      password : passwordR,
    }).then((response)=>{
      if(response.data.message){
        alert("WRONG PASSWORD OR USERNAME");
      }
      else{
        localStorage.setItem("name",response.data[0].username);
        localStorage.setItem("username",response.data[0].username);
        localStorage.setItem("password",response.data[0].password);

        Axios.post('http://cheshire.cse.buffalo.edu:3301/anonchat2',{ 
          username : usernameR,
          password : passwordR
        }).then((response)=>{
          localStorage.setItem("random",response.data[0].random);
          alert(localStorage.getItem("random"));
        });

        alert("WELCOME "+ response.data[0].username);
        navigate("/main")
      }
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

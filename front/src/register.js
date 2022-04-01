import React,{useState} from 'react';
import './reg.css';
import Axios from 'axios'
import {useNavigate} from "react-router-dom";
function Register() {
    const [usernameR,setUsername] = useState('');
    const [passwordR,setPassword] = useState('');
    let navigate = useNavigate();
    
    const register =() =>{
        Axios.post('http://cheshire.cse.buffalo.edu:3301/login',{
        username : usernameR,
        password : passwordR,
        }).then((response)=>{
        if(response.data.message){
            Axios.post('http://cheshire.cse.buffalo.edu:3301/register',{
            username : usernameR,
            password : passwordR,
            });
            Axios.post('http://cheshire.cse.buffalo.edu:3301/profile',{
            username : usernameR,
            });
            alert("REGISTRATION SUCCESSFUL");
            navigate("/login");
        }
        else{
            alert("THE USERNAME: "+response.data[0].username+ " HAS BEEN TAKEN");
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
        <input type="retypepasswordtext" placeholder="RETYPE PASSWORD"/>
        <button class="regborder" onClick={register}></button>
        <div class="reg"><img src="./images/register.svg"/></div>
        </div>
    );
}
export default Register;
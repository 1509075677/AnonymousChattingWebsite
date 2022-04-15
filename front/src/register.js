import React,{useState} from 'react';
import './reg.css';
import Axios from 'axios'
import {useNavigate} from "react-router-dom";

function Register() {
    const [usernameR,setUsername] = useState('');
    const [passwordR,setPassword] = useState('');
    let navigate = useNavigate();
    const myrandom='Anonymous'+Math.floor(Math.random() * 10000).toString();
    //http://localhost:3301/login
    //http://cheshire.cse.buffalo.edu:3301/login
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
            username : usernameR
            });
            Axios.post('http://cheshire.cse.buffalo.edu:3301/anonchat',{
            username : usernameR,
            random : myrandom,
            });

            alert("REGISTRATION SUCCESSFUL");

            var axios = require('axios');
            var data = ({
                "username": usernameR,
                "secret": passwordR
            }); 
     
            var data2 = ({
                "username": myrandom,
                "secret": passwordR
            });

            var config = {
                method: 'post',
                url: 'https://api.chatengine.io/users/',
                headers: {
                    'PRIVATE-KEY': '{{968b73fb-dce2-45fc-af0a-f5e831618689}}'
                },
                data : data
            };

            var config2 = {
                method: 'post',
                url: 'https://api.chatengine.io/users/',
                headers: {
                    'PRIVATE-KEY': '{{ca4be9eb-e4b6-4ef8-9da5-c13b1717c048}}'
                },
                data : data2
            };

            axios(config2)
            .then(function (response) {
                console.log(JSON.stringify(response.data2));
            })
            .catch(function (error) {
                console.log(error);
            });

            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

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
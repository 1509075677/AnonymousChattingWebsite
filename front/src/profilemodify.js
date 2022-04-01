import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import './profile.css'
import Axios from 'axios'

function Profilemodify() {
    const [birthdayR,setbirthday] = useState('');
    const [emailR,setemail] = useState('');
    let navigate = useNavigate();

    const pmodify =() =>{
        Axios.post('http://cheshire.cse.buffalo.edu:3301/pfmodify',{
          username : localStorage.getItem("name"),
          birthday : birthdayR,
          email : emailR,
        }).then((response)=>{
            localStorage.setItem("birthday",response.data[0])
            localStorage.setItem("email",response.data[1])
            navigate("/profile")
        });
      };

    return (
        <div class='form'>
            <div class ="profilephoto">
                <img src="./images/profilephoto.svg"/>
            </div>
            <p class="profiletitle">My Profile</p>
            <p class="myusername">MY USERNAME:</p>
            <p class="mybirthday">MY BIRTHDAY:</p> 
            <p class="myemail">MY EMAIL:</p>
            <button class="savebutton"onClick={pmodify}>Save
            </button> 
            <input type="emailtext" placeholder="My email"
            onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="birthdaytext" placeholder="My birthday"
            onChange={(e)=>{setbirthday(e.target.value)}}/>
        </div>
    );
}
export default Profilemodify;
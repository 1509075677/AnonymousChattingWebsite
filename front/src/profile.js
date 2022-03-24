import React from 'react';
import {useNavigate} from "react-router-dom";
import './profile.css'


function Profile() {
    let navigate = useNavigate();
    let showname = localStorage.getItem("name");
    let showbirthday = localStorage.getItem("birthday");
    let showemail = localStorage.getItem("email");
    return (
        <div>
            <div class="usernameinput">{showname}</div>
            <div class="birthdayinput">{showbirthday}</div>
            <div class="emailinput">{showemail}</div>
            <div class ="profilephoto">
                <img src="./images/profilephoto.svg"/>
            </div>
            <p class="profiletitle">My Profile</p>
            <p class="myusername">MY USERNAME:</p>
            <p class="mybirthday">MY BIRTHDAY:</p> 
            <p class="myemail">MY EMAIL:</p>
            <button class="back1button"onClick={()=>{
             navigate("/mainpage");}}>Back
            </button> 
            <button class="modifybutton"onClick={()=>{
             navigate("/profilemodify");}}>Modify
            </button> 
            
        </div>
    );
}
export default Profile;

import React from 'react';
import {useNavigate} from "react-router-dom";
import './profile.css'

function Sprofile() {
    let navigate = useNavigate();
    let showname1 = localStorage.getItem("susername");
    let showbirthday1 = localStorage.getItem("sbirthday");
    let showemail1 = localStorage.getItem("semail");
    return (
        <div>
            <div class="usernameinput">{showname1}</div>
            <div class="birthdayinput">{showbirthday1}</div>
            <div class="emailinput">{showemail1}</div>
            <div class ="profilephoto">
                < img src="./images/profilephoto.svg"/>
            </div>
            <p class="profiletitle">Profile</p >
            <p class="myusername">MY USERNAME:</p >
            <p class="mybirthday">MY BIRTHDAY:</p > 
            <p class="myemail">MY EMAIL:</p >
            <button class="back1button"onClick={()=>{
                navigate("/search");}}>Back
            </button> 
        </div>
    );
}
export default Sprofile;
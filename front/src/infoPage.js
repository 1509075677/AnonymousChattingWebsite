import React,{useState} from 'react';
import './infoPage.css';
import Axios from 'axios'
import {useNavigate} from "react-router-dom";

function InfoPage() {
    let navigate = useNavigate();
    return(
    <div>
        <p class="designertitle">DESIGNER</p>
        <div>
            <div class="PicBoxJason">
                <img class="Pic" src="./images/profilephoto.svg" alt="Jason"/>
            </div>
            <div class="PicBoxZhaowei">
                <img class="Pic" src="./images/profilephoto.svg" alt="Zhaowei"/>
            </div>
            <div class="PicBoxWeicheng">
                <img class="Pic" src="./images/profilephoto.svg" alt="Weicheng"/>
            </div>
        </div>
            <p class="JasonInfo">
                <b>Name:</b> Jason Chen<br></br>
                <b>Education:</b> University at Buffalo, Computer Science BS, Junior<br></br>
                <b>Developed:</b> Login,Register<br></br>
            </p>
            <p class="ZhaoweiInfo">
                <b>Name:</b> Zhaowei Zhao<br></br>
                <b>Education: University</b> at Buffalo, Computer Science BS, Junior<br></br>
                <b>Developed:</b> Profile <br></br>
            </p>
            <p class="WeichengInfo">
                <b>Name:</b> Weicheng Zhou<br></br>
                <b>Education:</b> University at Buffalo, Computer Science BS, Junior<br></br>
                <b>Developed:</b> Designer Page<br></br>
            </p>
            <button class="Back"onClick={()=>{
            navigate("/main");}}>Back
            </button>
    </div>
    );

}
export default InfoPage;
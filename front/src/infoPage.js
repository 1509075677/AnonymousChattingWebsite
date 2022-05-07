import React from 'react';
import './infoPage.css';
import {useNavigate} from "react-router-dom";

function InfoPage() {
    let navigate = useNavigate();
    return(
    <div>
        <div class="DesignerBox">
            <p class="designertitle"> <b>DESIGNER INFORMATION</b></p>
        </div>
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
        <div>
        <p class="JasonInfo">
                <b>Name:</b> Jason Chen<br></br>
                <b>Education:</b> University at Buffalo, Computer Science BS, Junior<br></br>
                <b>Developed:</b> Login, Register, Chat, Anonymous<br></br>
            </p>
            <p class="ZhaoweiInfo">
                <b>Name:</b> Zhaowei Zhao<br></br>
                <b>Education: University</b> at Buffalo, Computer Science BS, Junior<br></br>
                <b>Developed:</b> Profile, Chat, Identified<br></br>
            </p>
            <p class="WeichengInfo">
                <b>Name:</b> Weicheng Zhou<br></br>
                <b>Education:</b> University at Buffalo, Computer Science BS, Junior<br></br>
                <b>Developed:</b> Designer Page, Search, Optimize Website<br></br>
            </p>
            <button class="Back"onClick={()=>{
            navigate("/main");}}><b>Back</b>
            </button>
        </div>
    </div>
    );

}
export default InfoPage;

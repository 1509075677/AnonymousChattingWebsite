import React from 'react';
import {useNavigate} from "react-router-dom";
import './mainpage.css'

function Mainpage() {
    let navigate = useNavigate();
    return (
        <div class='form'>
            <p class="NOMOtitle">NOMO</p>
            <button class="backbutton"onClick={()=>{
            navigate("/");}}>BACK
            </button>
            <button class="profilebutton"onClick={()=>{
            navigate("/profile");}}>Profile
            </button>
            <button class="searchbutton"onClick={()=>{
            navigate("/");}}>Search
            </button>
            <button class="identifiedbutton"onClick={()=>{
            navigate("/chati");}}>Identified
            </button>
            <button class="anonymousbutton"onClick={()=>{
            navigate("/chata");}}>Anonymous
            </button>
            <button class="designerbutton"onClick={()=>{
            navigate("/");}}>Designer
            </button>
        </div>
    );
}
export default Mainpage;
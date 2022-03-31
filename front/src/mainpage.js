import React from 'react';
import {useNavigate} from "react-router-dom";
import './mainpage.css'
import Axios from 'axios'

function Mainpage() {
    let navigate = useNavigate();
    const showdata1 =() =>{
        Axios.post('http://localhost:3301/showdata',{
          username : localStorage.getItem("name"),
        }).then((response)=>{
            localStorage.setItem("birthday",response.data[0].birthday)
            localStorage.setItem("email",response.data[0].email)
            navigate("/profile")
        });
      };
    return (
        <div class='form'>
            <p class="NOMOtitle">NOMO</p>
            <button class="backbutton"onClick={()=>{
            navigate("/");}}>BACK
            </button>
            <button class="profilebutton"onClick={showdata1}>Profile
            </button>
            <button class="searchbutton"onClick={()=>{
            navigate("/");}}>Search
            </button>
            <button class="identifiedbutton"onClick={()=>{
            navigate("/");}}>Identified
            </button>
            <button class="anonymousbutton"onClick={()=>{
            navigate("/");}}>Anonymous
            </button>
            <button class="designerbutton"onClick={()=>{
            navigate("/infoPage");}}>Designer
            </button>
        </div>
    );
}
export default Mainpage;
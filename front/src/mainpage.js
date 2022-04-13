import React from 'react';
import {useNavigate} from "react-router-dom";
import './mainpage.css'
import Axios from 'axios'

function Mainpage() {
    let navigate = useNavigate();
    const showdata1 =() =>{
        Axios.post('http://cheshire.cse.buffalo.edu:3301/showdata',{
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
            <button class="profilebutton"onClick={showdata1}>PROFILE
            </button>
            <button class="searchbutton"onClick={()=>{
            navigate("/search");}}>SEARCH
            </button>
            <button class="identifiedbutton"onClick={()=>{
            navigate("/chati");}}>IDENTIFIED
            </button>
            <button class="anonymousbutton"onClick={()=>{
            navigate("/chata");}}>ANONYMOUS
            </button>
            <button class="designerbutton"onClick={()=>{
            navigate("/infoPage");}}>DESIGNER
            </button>
        </div>
    );
}
export default Mainpage;
import React from 'react';
import {useNavigate} from "react-router-dom";
import './mainpage.css'
import Axios from 'axios'

function Mainpage() {
    let navigate = useNavigate();
    //http://localhost:3301/showdata
    //http://cheshire.cse.buffalo.edu:3301/showdata
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
            <img class='NOMOtitle' src="./images/landing/landingnomo.svg"/>
            <button class="backbutton"onClick={()=>{
            navigate("/");}}><b>LOGOUT</b>
            </button>
            <button class="profilebutton"onClick={showdata1}><b>PROFILE</b>
            </button>
            <button class="searchbutton"onClick={()=>{
            navigate("/search");}}><b>SEARCH</b>
            </button>
            <button class="identifiedbutton"onClick={()=>{
            navigate("/chati");}}><b>IDENTIFIED</b>
            </button>
            <button class="anonymousbutton"onClick={()=>{
            navigate("/chata");}}><b>ANONYMOUS</b>
            </button>
            <button class="designerbutton"onClick={()=>{
            navigate("/infoPage");}}><b>DESIGNER</b>
            </button>
        </div>
    );
}
export default Mainpage;
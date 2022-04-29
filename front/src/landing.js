import React from 'react';
import {useNavigate} from "react-router-dom";

function Landing() {
    let navigate = useNavigate();
    return(
        <div className='App'>
          <div class="landingloginborder"onClick={()=>{
            navigate("/login");}}> 
          </div>

          <div class="landingsignupborder" onClick={()=>{
            navigate("/register");}}>
          </div>

          <div class="landingnomo" onClick={()=>{
            navigate("/");}}>
            <img src="./images/landing/landingnomo.svg"/>
          </div>

          <div class="landingquote">
            <img src="./images/landing/landingquote.svg" alt='landingquote'/>
          </div>
          <div class="landinglogin">
            <img src="./images/landing/landinglogin.svg" alt='landinglogin'/>
          </div>
          <div class="landingsignup">
            <img src="./images/landing/landingreg.svg" alt='landingreg'/>
          </div>
  
        </div>
    );
  }
  
  export default Landing;
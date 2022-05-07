import React, {useState} from 'react';
import './search.css'
import {useNavigate} from "react-router-dom"
import Axios from 'axios'


function SearchPage(){
    let navigate = useNavigate();
    const [input,setInput] = useState('');
    const search =() =>{
        // http://localhost:3301/search
        // http://cheshire.cse.buffalo.edu:3301/search
        Axios.post('http://cheshire.cse.buffalo.edu:3301/search',{
            username : input,
        }).then((response)=>{
            if(response.data.message){
                alert("Username Doesn't Exist");
            }
            else{
                localStorage.setItem("susername",response.data[0].username);
                localStorage.setItem("sbirthday",response.data[0].birthday);
                localStorage.setItem("semail",response.data[0].email);
                alert("Show User Profile");
                navigate("/sprofile");
            }
        });
    };
    return(
        <div>
            <img class='sNOMOtitle' src="./images/landing/landingnomo.svg"/>
            <input type="searchbox" placeholder="Username ..." onChange={(e)=>{setInput(e.target.value)}}/>
            <button class="bsearch" onClick={search}><b>SEARCH</b></button>
            <button class="Back" onClick={()=>{navigate("/main");}}><b>BACK</b></button>
        </div>
    );
}

export default SearchPage;

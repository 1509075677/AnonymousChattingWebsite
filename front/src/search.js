import React, {useState} from 'react';
import './search.css'
import {useNavigate} from "react-router-dom"
import Axios from 'axios'

function SearchPage(){
    let navigate = useNavigate();
    let UserName = ""
    let Birthday = ""
    let Email = ""
    const [data,setData] = useState(null);
    //http://localhost:3302/search
    //http://cheshire.cse.buffalo.edu:3302/search
    function searchUser(){
        Axios.post('http://cheshire.cse.buffalo.edu:3302/search',{ 
            username : data,
        }).then((response)=>{
            if(response.data.message){
              alert("Username Doesn't exsit");
            }
            else{
                UserName = response.data[0].username;
                Birthday = response.data[0].Birthday;
                Email = response.data[0].Email;
            }
        });
    }
    function TalkToUser(){
        alert("Up Coming");
    }
    function UserProfile(){
        alert("Up Coming");
    }
    return(
        <div>
            <div class="SearchTitleBox">
                <h class="SearchTitle"><b>Search</b></h>
            </div>
            <div>
                <img class="searchImage" src="./images/searchPage/search.jpg" alt="searchImage"/>
                <img class="searchImage1" src="./images/searchPage/search1.jpg" alt="searchImage1"/>
                <form class="InputSearchUser" >
                    <label for="username">Search For Username: <br></br></label>
                    <input type="text" placeholder="Enter Username" onChange={(e)=>setData(e.target.value)}/>
                    <button class="SearchButton" onClick={searchUser}>Search</button>
                </form>
                <div class="UserSearchResult">
                    <p class="Username"><b>User Name:</b></p>
                    <div class="showUsername">{UserName}</div>
                    <button class="TalkButton" onClick={TalkToUser}>Talk</button>
                    <button class="ProfileButton" onClick={UserProfile}>Profile</button>
                </div>
            </div>
            <button class="Back" onClick={()=>{navigate("/main");}}>
                <b>Back</b>
            </button>
        </div>
    );
}

export default SearchPage;
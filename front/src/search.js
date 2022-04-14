import React, {useState} from 'react';
import './search.css'
import {useNavigate} from "react-router-dom"

function SearchPage(){
    let navigate = useNavigate();
    let showname = ""
    const [data,setData] = useState(null);
    function searchUser(){
        alert("Up Coming");
    }
    function TalkToUser(){
        alert("Up Coming");
    }
    function AddUser(){
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
                    <div class="showUsername">{showname}</div>
                    <button class="TalkButton" onClick={TalkToUser}>Talk</button>
                    <button class="AddButton" onClick={AddUser}>Add</button>
                </div>
            </div>
            <button class="Back" onClick={()=>{navigate("/main");}}>
                <b>Back</b>
            </button>
        </div>
    );
}

export default SearchPage;
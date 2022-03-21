const mysql = require("mysql");
const express = require("express");

const app = express();

app.use(express.json)

var con= mysql.createConnection({
    user:"jchen386", 
    password:"50300069",
    host:"oceanus.cse.buffalo.edu",
    database:"cse442_2022_spring_team_t_db"
});
con.connect(function(err) {
    if (err){
        throw err;
    }
    else{
        console.log("Connected!");
    }
  });

app.listen(3060, ()=>{
    console.log("running server")
})
/*
var sql = "INSERT INTO account (username, password) VALUES ?";
var insert=[['123','123']]
con.query(sql,[insert], function (err, result) {
if (err) throw err;
    alert("success");
});

function reg(){
    
    var username=document.getElementById("usernametext").value;
    var password=document.getElementById("passwordtext").value;
    var retypepassword=document.getElementById("retypepasswordtext").value;
    if((password==retypepassword) && username !="" && password!=""){
        var sql = "INSERT INTO account (username, password) VALUES ?";
        var insert=[[username,password]]
        con.query(sql,[insert], function (err, result) {
        if (err) throw err;
        alert("success");
        });
        window.location.href="index.html";
    }
    else{
        window.location.href="usernametaken.html";
    }
    con.close();
}
*/
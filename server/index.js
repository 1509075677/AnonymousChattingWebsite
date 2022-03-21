const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db= mysql.createConnection({
    user:"jchen386", 
    password:"50300069",
    host:"oceanus.cse.buffalo.edu",
    database:"cse442_2022_spring_team_t_db"
});

app.post('/register',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const sql ="INSERT INTO account (username, password) VALUES ?"
    var insert=[[username,password]]
    db.query(sql, [insert],(err,result)=>{
        if (err) throw err;
        alert("success");
    })
});

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const sql ="SELECT * users WHERE username = ? AND password = ?"
    var insert=[[username,password]]
    db.query(sql, [insert],(err,result)=>{
        if (err) {
            res.send({err:err})
            
        }
        if(result){
            res.send(result);
        }
        else{
            res.send({message:"Wrong username/password combination!"});
        }
        
    })
});

app.listen(3306, ()=>{
    console.log("runnning on port 3306");
});

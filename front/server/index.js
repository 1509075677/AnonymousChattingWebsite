const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3302;

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
    const sql ="INSERT INTO account (username, password) VALUES (?,?)"
    db.query(sql, [username,password]);
});

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const sql ="SELECT * FROM account WHERE username = ? AND password = ?"
    db.query(sql, [username,password],(err,result)=>{
        if (err) {
            res.send({err:err});
        }
        if(result.length > 0){
            res.send(result);
        }
        else{
            res.send({message:"WRONG PW/USER"});
        }
        
    });
});

app.listen(PORT, ()=>{
    console.log("runnning on port 3302");
});

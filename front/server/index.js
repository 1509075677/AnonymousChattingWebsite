const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3301;

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

app.post('/profile',(req,res)=>{
    const username = req.body.username;
    const birthday = null;
    const email = null;
    const sql ="INSERT INTO profile (username, birthday, email) VALUES (?,?,?)"
    db.query(sql, [username,birthday,email]);
});

app.post('/anonchat',(req,res)=>{    //register
    const username = req.body.username;
    const random = req.body.random;
    const sql ="INSERT INTO anonchat (username, random) VALUES (?,?)"
    db.query(sql, [username,random]);
});

app.post('/anonchat2',(req,res)=>{   //login
    const username = req.body.username;
    const sql ="SELECT * FROM anonchat WHERE username = ?"
    db.query(sql, [username],(err,result)=>{
        if (err) {
            res.send({err:err});
        }
        else{
            res.send(result);
        }
    });
});

app.post('/showdata',(req,res)=>{
    const username = req.body.username;
    const sql ="SELECT * FROM profile WHERE username = ?"
    db.query(sql, [username],(err,result)=>{
        if (err) {
            res.send({err:err});
        }
        else{
            res.send(result);
        }
    });
});

app.post('/pfmodify',(req,res)=>{
    const username = req.body.username;
    const birthday = req.body.birthday;
    const email = req.body.email;
    const sql="UPDATE profile SET username=?, birthday=?, email=? WHERE username = ?"
    db.query(sql, [username,birthday,email,username],(err,result)=>{
        if (err) {
            res.send({err:err});
        }
        else{
            res.send([birthday,email]);
        }
    });
});

app.post('/search',(req,res)=>{
    const username = req.body.username;
    const sql ="SELECT * FROM profile WHERE username = ?"
    db.query(sql, [username],(err,result)=>{
        if(result.length > 0){
            res.send(result);
        }
        else{
            res.send({message:"NO SUCH USER"});
        }
    });
});

app.listen(PORT, ()=>{
    console.log("runnning on port 3301");
});

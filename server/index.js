const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const e = require('express');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "event_project"
})

app.get('/alumni', (req, res) => {
    db.query("SELECT * FROM alumni", (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query("SELECT * FROM alumni WHERE alumni_email = ?", [email], (err,sesult) => {
        if(err){
            console.log(err);
        }else{
            res.send(sesult);
        }
    })
})

app.post('/getdata', (req, res) => {
    const name = req.body.name;
    const course = req.body.name;
    const id = req.body.id;
    db.query("SELECT * FROM alumni WHERE alumni_name = ? or alumni_id = ?", [name, id], (err,sesult) => {
        if(err){
            console.log(err);
        }else{
            res.send(sesult);
        }
    })
})

app.listen('3001', () => {
    console.log('server is running on port 3001');
})
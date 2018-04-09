const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const mysql = require('mysql');

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

//creating the DB connection
const db =mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'KNOWit'
});

//connecting to the DB

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("DB connected");
});

//create table for questions

app.get('/createquestiontable',(req,res)=> {
    let sql = 'CREATE TABLE question(qid int AUTO_INCREMENT,qtitle VARCHAR(255),qdescription VARCHAR(255),PRIMARY KEY (qid))';
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Question table created');
    });
});

//create table for  response

app.get('/createresponsetable',(req,res)=> {
    let sql = 'CREATE TABLE response(rid int AUTO_INCREMENT,responsebody VARCHAR(255),PRIMARY KEY (rid))';
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Response table created');
    });
});

//create table for category

app.get('/createcategorytable',(req,res)=> {
    let sql = 'CREATE TABLE category(categoryid int AUTO_INCREMENT,categoryname VARCHAR(255),PRIMARY KEY (categoryid))';
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Category table created');
    });
});

//create table for user

app.get('/createusertable',(req,res)=> {
    let sql = 'CREATE TABLE user(userid int AUTO_INCREMENT,email VARCHAR(255),password VARCHAR(255) ,PRIMARY KEY (userid))';
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('User table created');
    });
});

//Add question

app.get('/postquestion',(req,res)=>{
    let question = {qtitle:'Test',qdescription:"This is a sample question"};
    let sql ='INSERT INTO question SET ?';
    let query = db.query(sql,question,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Question added successfully');
    })
})



app.listen(port,()=>{
    console.log("Server is up and running on http://www.localhost: "+port);

})


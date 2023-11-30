const express=require("express");
const app=express();
const mongoose =require('mongoose')
const cors=require('cors');
const  collection  = require("./model/model");

app.use(cors());


  
app.use(express.json())

app.get('/',(req,res)=>{
    collection.find({})
    .then(users => res.json(users))
    .catch(err=>res.json(err))
})

app.post("/createEmployee",(req,res)=>{
    collection.create(req.body)
    .then(users =>res.json(users))
    .catch(err =>res.json(err))
})

app.listen(3001,(req,res)=>{
    console.log("server is listening");
})

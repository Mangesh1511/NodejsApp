const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery',true);


mongoose.connect(`mongodb+srv://mangesh:${process.env.db_password}@cluster0.i69iakh.mongodb.net/DashboardApp`)
.then(()=>{
    console.log("Connection Succeded!!");
})
.catch((err)=>{
    console.log("Connection Error ",(err));
})
module.export=mongoose;
//import express
 
const express = require ("express");


//initialisation express

const app = express();


//import dotenv

require('dotenv').config();

//import DB

const connectDB = require("./config/connectDB");
connectDB();

//

app.use("/contact" , require ("./Routes/contact"));

app.listen(process.env.PORT, (err) => err ? console.log(err) : console.log(`server is running ${process.env.PORT}`) );
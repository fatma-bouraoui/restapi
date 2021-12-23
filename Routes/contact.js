//importation model schema contact
const contact = require("../models/contacts");
const express = require("express");
const { Router } = require("express");

//initialisation express Router
const router = express.Router();

//post all contacts
//methode post
//path http://localhost:5000/contact/add
//params body

Router.post ("/add", async (req , res) =>{
    try {
        let newContact = new contact ({...req.body});
        let result = await newContact.save();
        res.send({result,msg : "sucsseful added"});
    } catch (error) {
        console.log(error);
    }

    });

    //get all contacts
//methode get
//path http://localhost:5000/contact/
//params body

Router.get ("/", async (req , res) =>{
    try {
        let result = await contact.find();
        res.send({ result: result , msg:"contacts"});
       
    } catch (error) {
        console.log(error);
    }
});

    //get onecontacts
//methode get
//path http://localhost:5000/contact/:id
//params body

Router.get ("/:id", async (req , res) =>{
    try {
        let result = await contact.findOne({_id:req.params.id});
        res.send({ result: result , msg:"contacts"});
       
    } catch (error) {
        console.log(error);
    }




    });


        

    module.exports = router;
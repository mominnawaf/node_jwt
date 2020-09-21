const express = require('express');
const router = express.Router();
const model=require('../models/models');
const bcrypt = require('bcrypt');
router.post('/',async(req,res)=>{
    const user = await model.findOne({username:req.body.username});
    const pass = await bcrypt.compare(req.body.password,user.password)
    if(!user){
        res.send("Username doesn't exists");
    }
    else if(!pass){
        res.send("Wrong Pass");
    }
    else{
        res.send("login Success");
    }
})
module.exports=router;
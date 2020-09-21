const express = require('express');
const router = express.Router();
const model=require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        const token = jwt.sign({_id:user._id},"XYZ");
        res.header({'auth-token':token});
        res.send(token);
    }
})
module.exports=router;
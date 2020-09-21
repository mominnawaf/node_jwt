const express = require("express");
const router = express.Router();
const verify = require('./verify');
router.get('/',verify,async(req,res,next)=>{
    res.send("This is a post");
})
module.exports = router;
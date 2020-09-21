const express = require('express');
const router =express.Router();
router.get('/',async (req,res)=>{
    res.send({Message:"Registered"}).status
});
module.exports = router;
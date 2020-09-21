var express = require('express');
var router = express.Router();
const models = require('../models/models');
const bcrypt = require('bcrypt');


router.post('/', async(req, res)=> {
  //Check for new Email
  const exist= models.findOne({username:req.body.username})
  if (exist){
    res.send("Username Exist");
  }
  else{
   var model = new models({
     username: req.body.username,
     password: req.body.password,
   });
   try {
     await model.save();
     res.json(model);
   } catch (err) {
     res.send(err);
   } 
  }
});

module.exports = router;

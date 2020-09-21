var express = require('express');
var router = express.Router();
const models = require('../models/models');
const bcrypt = require('bcrypt');


router.post('/', async(req, res)=> {
  const Salt = await bcrypt.genSalt(15);
  const Pass = await bcrypt.hash(req.body.password, Salt);
  //Check for new username
  const exist= await models.findOne({username:req.body.username})
  if (exist){
    res.send("Username Exist");
  }
  else{
   var model = new models({
     username: req.body.username,
     password: Pass,
   });
   try {
     await model.save();
     res.json(model);
   } catch (err) {
     res.send(err);
   } 
  }
});
router.post('/')

module.exports = router;

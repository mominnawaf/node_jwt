const jwt = require('jsonwebtoken');
async function verify(req,res,next){
const token = req.header('auth-token');
if(!token){
    res.send('Access Denied').status(401);
}
try{
    const verified = jwt.verify(token, "XYZ");
   //req.user = verified;
   next();
}
catch(err){
    res.send("Access Denied").status(401);
}

}
module.exports=verify;
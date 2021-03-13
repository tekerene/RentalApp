const jwt = require('jsonwebtoken');
var atob = require('atob')

module.exports = function auth(req,res,next){
    let token = req.headers['authorization']
    
    if(req.url == '/login' || req.url=='/register'){
        console.log('Skipped')
        return next();
    }

    if(!token) return res.status(401).json({message:'Access Denied',status:false});
    
    let basic_token = token.replace(/Basic /,'');
    let bearer_token = token.replace(/Bearer /,'');

    let basic_pattern = new RegExp('Basic','g');
    let bearer_pattern = new RegExp('Bearer ','g');

    req.user = {}
  
    if((basic_pattern.test(token))){
        try{
            basic_token = atob(basic_token)
            console.log(basic_token)
            const verified = basic_token.split(':')
            req.user.name = verified[0];
            req.user.phone = verified[1];
            next();
        }catch(err){
            res.json({message:'Invalid Token',status:false});
        }
    }

    if((bearer_pattern.test(token))){
        try{
            const verified = jwt.verify(bearer_token,"supposed_to_be_a_hidden_secrete_key");
            req.user = verified.data;
            next();      
        }catch(err){
            res.json({message:'Invalid or Expired Token',status:false});
        }
    }
        
}
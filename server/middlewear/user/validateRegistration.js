const {registerUserValidation,registerPospectValidation} = require('../utils/registerValidate')


module.exports = (req,res, next) =>{
    //Validate the data before making a user
    console.log(req.path)
    if(req.path === '/user'){
        const {value,error} = registerUserValidation(req.body);
        if(error){
            console.log(error.details)
            return res.status(400).send(error.details[0].message);
        }

        next();
    }

    if(req.path === '/prospect'){
        const {value,error} = registerPospectValidation(req.body);
        if(error){
            console.log(error.details)
            return res.status(400).send(error.details[0].message);
        }

        next();
    }
    
}
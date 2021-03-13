const Joi = require('@hapi/joi');


const registerUserValidation = (data)=>{
const schema = Joi.object({
    name: Joi.string()
             .min(3)
             .max(30)
             .required(),
    email: Joi.string()
              .email({ minDomainSegments: 2, tlds: { allow: ["com", "net","yahoo"] } } ),
            list:Joi.array(),
    phone: Joi.number().required(),
    imgUrl: Joi.string().required(),
    password: Joi.string()
                 .min(6)
                 .max(1024)
                //  .pattern(/^[a-zA-Z0-9]{3,30}$/)
                 .required(),
  }).with('name', 'email').with('password','name').with("imgUrl","phone")

    return  schema.validate(data);  
}


const registerPospectValidation = (data)=>{
  const schema = Joi.object({
      name: Joi.string()
               .min(3)
               .max(30)
               .required(),
      email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ["com", "net","yahoo"] } } ),
              list:Joi.array(),
      phone: Joi.number().required(),
  }).with('name', 'email').with('password','phone')
    
    return  schema.validate(data);  
  }
  

module.exports.registerPospectValidation = registerPospectValidation;
module.exports.registerUserValidation = registerUserValidation;



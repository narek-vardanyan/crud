//const {checkAge , checkName} = require ("./validations");
const User = require("../model/userModel");

async function saveUser(Userdata){
   
     try{
       const  newUser = new User(Userdata);
        const savedUser =  await newUser.save();
        return savedUser;
    }catch(error){
        console.error("error happend while saving user",error);
        throw error;
    }
    }
 
    module.exports = saveUser;
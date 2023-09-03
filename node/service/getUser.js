 const User = require("../model/userModel");

 async function getUserById(user_Id){
    try{
        const options = { maxTimeMS: 30000 };
        const foundUser = await User.findById(user_Id,options);
       return foundUser;
    }
    catch(error){
        console.error(error);
        throw error;
    }
 }

module.exports = getUserById;
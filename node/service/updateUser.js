const User = require("../model/userModel");

async function updateUser(updateUserData,user_Id){
    try{
        const updatedUser = await User.findByIdAndUpdate(user_Id , updateUserData ,{new: true,});
        return updatedUser;
    }
    catch(error){
        console.error(error);
        throw error;
    }
}

module.exports = updateUser;
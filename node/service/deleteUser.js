const User = require("../model/userModel");

async function deleteUser (user_Id){
    try{
        const deletedUser = await User.findOneAndDelete({ _id: user_Id });
        return deletedUser;
    }
    catch (error){
        console.log(error);
    }
}

module.exports = deleteUser;
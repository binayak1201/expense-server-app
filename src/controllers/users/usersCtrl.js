
const expressAsyncHandler=require('express-async-handler');
const User = require("../../model/User");

//Register 
const registerUser=expressAsyncHandler(async(req,res)=>{
    const{email,firstname,lastname,password}=req?.body;
    //check if user exists
    const userExists=await User.findOne({email});
    if(userExists) throw new Error("user already Exists");
    try {
        

        const user=await User.create({email,firstname,lastname,password});
        res.status(200).json(user);
    } catch (error) {
        res.json('error');
    }
});
//featch all users
const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
    console.log("User ");
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  });
module.exports={registerUser,fetchUsersCtrl};
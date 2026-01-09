import mongoose from "mongoose";
import {User} from "../models/UserModel.js";
import { razorpay } from "../config/razorpay.js";


const sendpackageinfo = async (req, res) => {
  try {
    const data = await mongoose.connection
      .collection("hospitality_pass")
      .findOne({});

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch package info",
      error: error.message
    });
  }
};

const userpackages = async (req, res) => {
    let {packag,star_night,amount} = req.body;
    let sum,order,user;
    if(!amount){
        return res.status(400).json({success:false,message:"Amount is required"});
    }
    if(!packag){
        return res.status(400).json({success:false,message:"Package is required"});
    }
    if(packag!="three-day-without-food" && packag!="three-day-with-food" && packag!="two-day-without-food" && packag!="two-day-with-food" && packag!="one-day-without-food" && packag!="one-day-with-food"){
        return res.status(400).json({success:false,message:"Invalid package"});
    }
    if(!star_night){
        star_night=false;
    }
    if(packag=="three-day-with-food" || packag=="three-day-without-food"){
        star_night=true;
    }
    
    try{
        const packageinfo = await mongoose.connection
        .collection("hospitality_pass")
        .findOne({});
        if(!packageinfo){
            return res.status(400).json({success:false,message:"Package not found"});
        }
        sum=packageinfo.package.find(p=>p[packag])[packag];
        if(star_night == true && packag!="three-day-with-food" && packag!="three-day-without-food"){
            sum+=packageinfo.star_night;
        }       
        
        if(sum!=amount){
            return res.status(400).json({success:false,message:"Amount mismatch"});
        }
      }
    catch(err){
        return res.status(500).json({success:false,message:"Cannot fetch package info",error:err.message});
    }


    try{
        user= await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({success:false,message:"User not found"});
        }
    }
    catch(err){
        return res.status(500).json({success:false,message:"Cannot fetch user",error:err.message});
    }
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}_${user._id}_${packag}_${star_night}_${user.email}`,
    };
    try{
        order = await razorpay.orders.create(options);
    }
    catch(err){
        return res.status(500).json({success:false,err,message:"Order creation failed",error:err.message});
    }
    try {
        
        user.razorpay_order_id=order.id;
        user.star_night=star_night||false;
        user.hospitality_package=packag;
        await user.save();
        return  res.status(200).json({success:true,order,message:"User package updated successfully"});
    }
    catch(err){
        return res.status(500).json({success:false,message:"Cannot update user package",error:err.message});
    }
}

export { sendpackageinfo, userpackages };
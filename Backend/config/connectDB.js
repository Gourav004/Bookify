import express from "express"
import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async ()=>
{
    try{
    await mongoose.connect("mongodb+srv://gouravthakurpp_db_user:AJk4empZNohdBCIL@bookifycluster.1vikbgr.mongodb.net/bookify")
    console.log("Connected to database successfully✅");
    }
    catch(error){
    console.log("ERROR: " , error);
    }
}

export default connectDB;
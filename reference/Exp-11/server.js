const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Rec-11")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 email:{
  type:String,
  required:true
 },
 age:{
  type:Number,
  min:18
 }
});

const User = mongoose.model("User", userSchema);


// CREATE USER
app.post("/users", async(req,res)=>{
 try{
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
 }
 catch(err){
  res.status(400).json({error:err.message});
 }
});


// GET ALL USERS
app.get("/users", async(req,res)=>{
 const users = await User.find();
 res.json(users);
});


// GET USER BY ID
app.get("/users/:id", async(req,res)=>{
 const user = await User.findById(req.params.id);
 res.json(user);
});


// UPDATE USER
app.put("/users/:id", async(req,res)=>{
 const user = await User.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new:true}
 );
 res.json(user);
});


// DELETE USER
app.delete("/users/:id", async(req,res)=>{
 await User.findByIdAndDelete(req.params.id);
 res.send("User Deleted");
});


app.listen(3000, ()=>{
 console.log("Server running on port 3000");
});
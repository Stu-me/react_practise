const asyncHandler = require('express-async-handler');
const {createTodo,updateTodo} = require('../middlewares/authHandler')
const todoSchema = require('../model/todoModel');
const { log } = require('async');


function getTodo(req, res){
   res.send("welcome in Todo")
}

// creating Todo
const postTodo  = asyncHandler (async(req,res)=>{

   const createPayLoad = req.body; 
   const parsedPayLoad = createTodo.safeParse(createPayLoad); //safeParse checks if the input is correct  

   // if the input is wrong 
   if(!parsedPayLoad.success){
      res.status(411).json({
         msg:"Your input is Invalid" + parsedPayLoad.data
      })
      return ; // exit
   }
   // put it in mongodb as input is in the right format 
   const newTodo = await todoSchema.create(parsedPayLoad.data);
   res.status(201).json({
      msg:"todo created successfully"
   })
})

// updating todo

const putTodo  = asyncHandler(async(req,res)=>{
   const id = req.params.id;
   const verfiedId = updateTodo.safeParse(req.body); //safeParse checks if the input is correct  
   
   const payload = todoSchema.findById(verfiedId);

   if(!payload.success){
      res.status(411).json({
         msg:"No user of this Id found"
      })
      return;
   }
   todoSchema.updateOne(verfiedId,req.body);
   res.json({
      msg:"updated the user with = " + payload
   })

})


function errorTodo(req,res){
   res.send("error occured")
   console.log(`<h1><i>Error page <i><h1>`);
}

function importantTodo(req,res){
   res.send("importantTodo")
   // list down all the important todos
}

function starTodo(req,res){
   res.send("starTodo")
   //list down star todos
}

module.exports = {getTodo ,postTodo , putTodo , errorTodo  ,importantTodo , starTodo};

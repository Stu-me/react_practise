const asyncHandler = require('express-async-handler');
const { createTodo, updateTodo } = require('../middlewares/authHandler')
const todoSchema = require('../model/todoModel');
const { log } = require('async');


const  getTodo = asyncHandler(async(req, res)=>{
   const allTodos = await todoSchema.find({});
   res.json({
      allTodos
   })
})

// creating Todo
const postTodo = asyncHandler(async (req, res) => {

   const createPayLoad = req.body;
   const parsedPayLoad = createTodo.safeParse(createPayLoad); //safeParse checks if the input is correct  

   // if the input is wrong 
   if (!parsedPayLoad.success) {
      res.status(400).json({
         msg: "Your input is Invalid" + parsedPayLoad.data
      })
      return; // exit
   }
   // put it in mongodb as input is in the right format 
   const newTodo = await todoSchema.create(parsedPayLoad.data);
   res.status(201).json({
      msg: "todo created successfully"
   })
})

// updating todo

const putTodo = asyncHandler(async (req, res) => {
   const parsedId = req.body.id;
   const verify = updateTodo.safeParse({ id: parsedId });

   if (!verify.success) {
      res.status(400).json({
         msg: "Your input was wrong"
      })
      return;
   }
   const userValid = await todoSchema.findById(parsedId);
   if (!userValid) {
      res.status(400).json({
         msg: "No user of the given Id saved"
      })
      return;
   }
   const updated = await todoSchema.findByIdAndUpdate(
      parsedId,
      { description: "todo updated 2.1", important: false }
   )

   res.json({
      updated
   })
})


function errorTodo(req, res) {
   res.send(`Error occured`)
   console.log("error occured");
}

const importantTodo = asyncHandler(async(req, res)=>{

   const importandTodos = await todoSchema.find({important:true});
   // console.log(importandTodos);
   
   res.json({
      importandTodos
   })
   // list down all the important todos
})

const  starTodo = asyncHandler(async(req, res)=>{
   const starTodos = await todoSchema.find({star:TRUE})
})

module.exports = { getTodo, postTodo, putTodo, errorTodo, importantTodo, starTodo };

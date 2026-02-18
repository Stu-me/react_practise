const mongoose = require('mongoose')
const { Schema } = mongoose;

const todoSchema = new Schema({
    title:String,
    description:String,
    completed:Boolean,
    important:Boolean,
    star:Boolean
});
const todo = mongoose.model('todo',todoSchema)
module.exports = todo;
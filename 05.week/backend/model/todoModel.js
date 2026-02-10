import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
    title:String,
    content:String
});

module.exports = todoSchema;
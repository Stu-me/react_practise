const mongoose = require('mongoose');
const { tr } = require('zod/locales');


const connectDb = async ()=>{
    try{
        const connnector = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("in the server ");
        
        console.log("server started");
        console.log(connnector.connection.host);
        console.log(connnector.connection.name);
    }
    catch{
        console.log(err);  
    };
};

module.exports = connectDb
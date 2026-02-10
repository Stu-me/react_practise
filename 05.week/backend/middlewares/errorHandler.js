const asyncHandler = require('express-async-handler');
const  statusCode = require('../statusCode');


const errorHandler = asyncHandler(async(err,req,res,next)=>{
    switch(err){
        case statusCode.VALIDATION_ERROR:
            console.log(" validation Error -- check your inputs again ");
            break;
        case statusCode.UNAUTHORIZATION:
            console.log(" Unauthorized - you must authorized your self before sending the request");
            break;
        case statusCode.NOT_FOUND:
            console.log(" Requested resource not found ");
            break;
        case statusCode.INTERNAL_SERVER_ERROR:
            console.log(" Internal Server Error ");
            break;
        case statusCode.FORBIDDEN:
            console.log("Forbidden");
            break;
        default :
         console.log(err);
         break;
    }
});

module.exports = errorHandler;
import mongoose from "mongoose";

export const connectDB = () =>{
mongoose
    .connect(("mongodb+srv://nequla:1HKdecARjEA51ltU@nequla.l4tkydc.mongodb.net/DreamLegal?retryWrites=true"),{
        dbName: "DreamLegal",
    })
    .then( (c) =>   console.log("Database connnected Successfully") )
    .catch( (e) =>  console.log(e) )
}
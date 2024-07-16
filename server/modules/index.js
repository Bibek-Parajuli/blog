const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017");
const db=mongoose.connection;
db.on('error',error=>console.log(error));
db.on('open',()=>console.log("mongo connected"));
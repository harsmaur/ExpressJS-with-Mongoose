import express from 'express';
import connectdb from './db/connectdb.js';
import CreateDoc from './models/Student.js';
const port = process.env.PORT || 3000;
const app = express();
const db_url =process.env.db_url || "mongodb://127.0.0.1:27017/";



//connect to mongodb
connectdb(db_url);
//cretae and save document
CreateDoc()



app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
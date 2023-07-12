import express from 'express';
import  connectdb  from './db/connectdb.js';
import './models/Student.js';
const port = process.env.PORT || 3000;



const db_url =process.env.db_url || "mongodb://127.0.0.1:27017/";
const app = express();


//call the connectdb
connectdb(db_url);

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
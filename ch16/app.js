import express from 'express';
import mongoose from 'mongoose';
import  connectdb  from './db/connectdb.js';
const port = 3000;
const app = express();

//call the connectdb
connectdb();

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
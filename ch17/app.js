import express from 'express';
import  connectdb  from './db/connectdb.js';
const port = process.env.PORT || 3000;

 
//instead of passing all from here we will pass from db
// const db_url =process.env.db_url || "mongodb://harsmaur:12345678@127.0.0.1:27017/schooldb?authSource=schooldb"


const db_url =process.env.db_url || "mongodb://127.0.0.1:27017/";
const app = express();


//call the connectdb
connectdb(db_url);

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
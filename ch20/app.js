import express from 'express';
import connectdb from './db/connectdb.js';
import {getAllDoc, getSingleDoc,getDocByFieldName,getDocByFieldNameSpecificField,LimitedDoc,countDoc,SortingDoc,mixDoc,compDoc,LogDoc} from './models/Student.js'
const port = process.env.PORT || 3000;
const app = express();
const db_url =process.env.db_url || "mongodb://127.0.0.1:27017/";


//connect to mongodb
connectdb(db_url);

// getAllDoc();
// getSingleDoc();
// getDocByFieldName();
// getDocByFieldNameSpecificField();
// LimitedDoc();
// countDoc();
// SortingDoc()
// mixDoc()
// compDoc()
LogDoc()


app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
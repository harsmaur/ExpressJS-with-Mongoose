import express from 'express';
import {join} from 'path';
import connectdb from './db/connectdb.js';
import web from './routes/web.js'
const port = process.env.PORT || 3000;
const app = express();
const db_url = process.env.db_url || "mongodb://127.0.0.1:27017/";

//static files
app.use(express.static(join(process.cwd(), 'public')))
app.use('/student/edit', express.static(join(process.cwd(), 'public')))

//connection to db
connectdb(db_url);

//set view engine
app.set('view engine', 'ejs')

//load routes
app.use('/student', web)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
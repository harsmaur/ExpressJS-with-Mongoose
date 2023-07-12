import express from 'express';
import connectdb from './db/connectdb.js';
import { DeleteById,DeleteOne, DeleteMany} from './models/Student.js';
const port = process.env.PORT || 3000;
const app = express();
const db_url = process.env.db_url || "mongodb://127.0.0.1:27017/";


//connect to mongodb
connectdb(db_url);
// DeleteById('64ae531f153bdf101b41560f')
// DeleteOne('64ae557ce94a47ea5a9d5070')
DeleteMany(27)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
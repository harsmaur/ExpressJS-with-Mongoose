import express from 'express';
import connectdb from './db/connectdb.js';
import { updateDocById ,updateOneDoc, updateManyDoc} from './models/Student.js';
const port = process.env.PORT || 3000;
const app = express();
const db_url = process.env.db_url || "mongodb://127.0.0.1:27017/";


//connect to mongodb
connectdb(db_url);

// updateDocById('64ae557ce94a47ea5a9d5095')
// updateOneDoc('64ae557ce94a47ea5a9d5070')
updateManyDoc(27);

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
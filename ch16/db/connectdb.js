import mongoose from 'mongoose';


//connect to mongodb
const connectdb = ()=>{
    return  mongoose.connect("mongodb://127.0.0.1:27017/schooldb")
    .then(()=>{
     console.log('Connection Success..')
    })
    .catch((error)=>{
        console.log('Connection Error', error);
    })
}
export default connectdb;




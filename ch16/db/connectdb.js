import mongoose from 'mongoose';


//connect to mongodb
const connectdb = async (db_url)=>{
    try{
      await mongoose.connect(db_url)
         console.log('Connection Success..')
        
    }
    catch(err){
        console.log('Connection failed..',err)
    }
}
export default connectdb;




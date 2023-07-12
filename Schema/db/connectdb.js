import mongoose from 'mongoose';


//connect to mongodb
const connectdb = async (db_url)=>{
    try{
        const db_options = {
            dbName: 'schooldb2'
        }
      await mongoose.connect(db_url, db_options)
         console.log('Connection Success..')
        
    }
    catch(err){
        console.log('Connection failed..',err)
    }
}
export default connectdb;

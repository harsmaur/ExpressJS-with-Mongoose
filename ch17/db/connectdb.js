import mongoose from 'mongoose';


//connect to mongodb
const connectdb = async (db_url)=>{
    try{
        const db_options = {
            user: 'harsmaur',
            pass: '12345678',
            dbName: 'schooldb',
            authSource: 'schooldb'
        }
      await mongoose.connect(db_url, db_options)
         console.log('Connection Success..')
        
    }
    catch(err){
        console.log('Connection failed..',err)
    }
}
export default connectdb;




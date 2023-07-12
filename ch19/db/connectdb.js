import mongoose from 'mongoose';

const connectdb = async (db_url)=>{
    try{
      const  db_options = {
            dbName: 'schooldb2'
        }
      await mongoose.connect(db_url, db_options)
      console.log('Connection success')
    }
    catch(err){
      console.log('Error', err)
    }
}
export default connectdb;
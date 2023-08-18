import mongoose from 'mongoose';

const connectdb = async(db_url)=>{
    try{
        const options = {
            dbName: 'CRUD'
        }
       await mongoose.connect(db_url, options);
        console.log('Connectin success')
    }
    catch(err){
        console.log(err)
    }
}
export default connectdb;
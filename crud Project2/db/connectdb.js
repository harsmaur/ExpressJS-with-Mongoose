import mongoose from 'mongoose'

const connectdb = async (db_url) => {
    try {
        const db_options = {
            dbname: 'CRUD',

        };

        await mongoose.connect(db_url, db_options);
        console.log('Connection success');
    } catch (error) {
        console.log(error);
    }

}
export default connectdb;
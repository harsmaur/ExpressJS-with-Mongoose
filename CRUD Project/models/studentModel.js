import mongoose from 'mongoose';

//defining schema

const StudentSchema = new mongoose.Schema({
    name:{type: String, required: true, trim: true},
    Age: {type:Number, required: true, min:10, max: 50},
    Course:{type:String,required: true, trim: true}
})

//compiling Schema
const StudentModel = mongoose.model('student', StudentSchema);

export default StudentModel;
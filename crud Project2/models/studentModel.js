import mongoose from "mongoose";

//defining schema

const studentSchema = new mongoose.Schema({
    name: {type:String, required: true, trim: true},
    Age: {type:Number, required: true, min:18, max: 60},
    Course:{type: String, required: true, trim: true}
})

//Model
//createdted collection called student2
const StudentModel = mongoose.model('student2', studentSchema)

export default StudentModel;
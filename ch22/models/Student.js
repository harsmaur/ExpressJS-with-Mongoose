import mongoose from 'mongoose';


//defining schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: mongoose.Decimal128, required: true, validate: (v) => { v >= 5500.50 } },
    hobbies: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }

})

//compiling Schema
const StudentModel = mongoose.model('student', studentSchema); 

//deleting document
const DeleteById = async(id)=>{
  try {
    await StudentModel.findByIdAndDelete(id);

  } catch (error) {
    console.log(error)
  }
}


const DeleteOne = async(id)=>{
  try {
    await StudentModel.deleteOne({_id: id});
  } catch (error) {
    console.log(error)
  }
}

const DeleteMany = async(age)=>{
  try {
    await StudentModel.deleteOne({age: age});
  } catch (error) {
    console.log(error)
  }
}
export {DeleteById, DeleteOne, DeleteMany};
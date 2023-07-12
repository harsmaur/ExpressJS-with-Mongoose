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

//update Document
// (1st method)
const updateDocById = async(id)=>{
  try{
   const result =  await StudentModel.findByIdAndUpdate(id, {name:'Sunyil'}, {returnDocument:'after'});   
   //returnDocument: returns the doc after updation
   console.log(result);
  }
  catch(err){
    console.log(err)
  }

}

//2nd way-> only first which machtes with the filter is updated coz it is updateone 
const updateOneDoc = async(id)=>{
    try {
        // const result = await StudentModel.updateOne({_id:id}, {name: "modifiedname"})
        //we can update by any filter id or any other field

        //upsert -> if not found that id it creates a new doc with that
        const result = await StudentModel.updateOne({_id:id}, {name: "modifiednameUpsert"}, {upsert: true})
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// (3rd method)
const updateManyDoc = async(a)=>{
    try{
     const result =  await StudentModel.updateMany({age: a},{name:'ManyName'}, {returnDocument:'after'});   
     //returnDocument: returns the doc after updation
     console.log(result);
    }
    catch(err){
      console.log(err)
    }
  
  }
export {updateDocById, updateOneDoc, updateManyDoc};
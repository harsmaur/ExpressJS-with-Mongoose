import mongoose from 'mongoose';


const CreateDoc = async()=>{

try{
//defining schema
const studentSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    age: {type: Number, required: true, min: 18, max: 50},
    fees: {type: mongoose.Decimal128, required: true, validate:  (v)=>{v>=5500.50} },
    hobbies: {type: Array },
    isActive: {type: Boolean},
    comments: [{value:{type:String}, publish:{type: Date, default: Date.now}}],
    join:{type: Date, default: Date.now}

})

//compiling Schema
const StudentModel = mongoose.model('student', studentSchema); //the first arg is the name of the collection


//Creating new document

const StudentDoc = new StudentModel({
    name: 'HARSH Maurya',
    age: 21,
    fees: 11300.50,
    hobbies: ['dancing','singing', 'reading' ],
    isActive: true,
    comments:[{value: 'This is good mongoose'}]
})


//save the document
const result =  await StudentDoc.save();
console.log(result)
}
catch(err){
    console.log(err);
}

}

export default CreateDoc;
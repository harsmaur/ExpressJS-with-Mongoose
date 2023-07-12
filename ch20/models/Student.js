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
const StudentModel = mongoose.model('student', studentSchema); //the first arg is the name of the collection

//restrive all docs
const getAllDoc = async () => {
    const result = await StudentModel.find();
    console.log(result)
    result.forEach(item => {
        console.log(item.name,
            item.age,
            item.fees.toString(),
            item.hobbies[0],
            item.hobbies[1],
            item.comments[0].value
        )
    })

    //to get specific feilds
    const resultWithSpecificFiels = await StudentModel.find().select('name age fees') //use -name -age (-) before to exclude
    console.log(resultWithSpecificFiels)

    //other way
    const resultWithSpecificFiels2 = await StudentModel.find({}, 'name age')
    console.log(resultWithSpecificFiels2)


}

//retrive single document
const getSingleDoc = async () => {
    const result = await StudentModel.findById('64ae53145c6585aa121a6b81')
    console.log(result)
}

//by feild name
const getDocByFieldName = async () => {
    const result = await StudentModel.find({ name: 'HARSH' })
    console.log(result)
}

//Retrive document by field with specific field
const getDocByFieldNameSpecificField = async () => {
    const result = await StudentModel.find({ name: 'HARSH' }).select('name fees')
    console.log(result)
}

//get limited doc
const LimitedDoc = async () => {
    const result = await StudentModel.find().limit(3)
    console.log(result)
}
//count documents
const countDoc = async () => {
    const result = await StudentModel.find().countDocuments()
    console.log(result)
}
//sorting documents
const SortingDoc = async () => {
    const result = await StudentModel.find().sort({ age: 1 }); //1 for acsending -1 for decs
    console.log(result)
}


//mix query
const mixDoc = async () => {
    const result = await StudentModel.find({}, { name: 1, age: 1 }, { limit: 3, skip: 1 })
    console.log(result)
}
//Comparison Query operator
const compDoc = async () => {
    // const result = await StudentModel.find({age: {$gt: 27}})
    // const result = await StudentModel.find({age: {$gte: 27}})
    // const result = await StudentModel.find({age: {$lt: 27}})
    // const result = await StudentModel.find({age: {$lte: 25}})
    // const result = await StudentModel.find({age: {$ne: 27}})
    // const result = await StudentModel.find({age: {$nin: [27, 21]}}) //not in array (nin)
    const result = await StudentModel.find({ age: { $gt: 25 } })
    console.log(result)
}

//logical query operators

const LogDoc = async () => {
    // const result = await StudentModel.find({$and: [{age: 27}, {fees: 3242.2}]})
    // const result = await StudentModel.find({$or: [{age: 27}, {fees: 3242.2}]})
    // const result = await StudentModel.find({$and: [{age: {$gt: 27}}, {fees: 11300.5}]})
    // const result = await StudentModel.find({$or: [{age: {$lt: 27}}, {fees: 11300.5}]})
    // const result = await StudentModel.find({age: {$not: {$gt: 25}}})
    const result = await StudentModel.find({ $nor: [{ age: { $lt: 27 } }, { fees: 11300.5 }] })

    console.log(result)
}




export { getAllDoc, getSingleDoc, getDocByFieldName, getDocByFieldNameSpecificField, LimitedDoc, countDoc, SortingDoc, mixDoc, compDoc, LogDoc };



import StudentModel from "../models/studentModel.js"

class studentController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find();
            res.render('index', {data: result})
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
       
    }
    static createDoc = async (req, res) => {
        try {
            const {name, age, course} = req.body;
            
           //creating new document from the recieved data
            const doc = new StudentModel({
                name: name,
                Age: age,
                Course: course

            })
           //saving the doc
            const result = await doc.save();
            // console.log(req.body)
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
        
    }
    static editDocById =async (req, res) => {
       try {
        // console.log(req.params.id)
        const result = await StudentModel.findById(req.params.id);
        console.log(result)
        res.render('edit', {data: result})
       } catch (error) {
        
       }
        
    }

    static updateDocById = async(req, res) => {
        try{
            // console.log(req.params.id)
            //updaating to the db
           const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body ) 
            //redirecting to the home(index page)
           res.redirect('/student')
        }
        catch(err){
            console.log(err)
        }
    }

    static DeleteDocById =async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
        
    }
}
export default studentController;
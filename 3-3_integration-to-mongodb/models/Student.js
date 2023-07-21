import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    progressLevel:{
        required: true,
        type: Number
    }
})

const Student = mongoose.model('students', studentSchema); 

export default Student;
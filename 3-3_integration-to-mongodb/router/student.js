import express from "express";
import Student from "../models/Student.js";

const StudentRouter = express.Router();

StudentRouter.get('/', (req, res) => {
    res.json({ 
        message: "Get Success"
    })
})

StudentRouter.post('/', (req, res) => {
    const { name, progressLevel } = req.body;

    try {
        const student = new Student({
            name: name,
            progressLevel: progressLevel
        })

        student.save();
        res.status(201).json({ message: "Success student" });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
})

StudentRouter.get('/getAll', async (req, res) => {
    try {
        const students = await Student.find();
        res.json({
            student: students
        })
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
})

StudentRouter.patch('/:id', async (req, res) => {
    try {
        const id  = req.params.id;
        const body = req.body;

        const students = await Student.findByIdAndUpdate(
            id, body, { new: true }
        )

        res.json(students);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
})

StudentRouter.get('/:id', async (req, res) => {
    try {
        const students = await Student.findById(req.params.id);
        res.json({
            student: students
        })
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
})

StudentRouter.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUserData = await Student.findByIdAndDelete(id)
        res.send(`user with ${deleteUserData.name} has been deleted..`)
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
})
export default StudentRouter;
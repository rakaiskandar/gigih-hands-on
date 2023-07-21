import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import StudentRouter from './router/student.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/students', StudentRouter);

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log('Failed to connect', error.message);
})

db.once('connected', () => {
    console.log('Database connected');
})
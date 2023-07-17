const express = require('express');
const app = express();
const port = 3000;

const songsRouter = require('./routes/songsRoute');

app.use(express.json());

app.use('/api', songsRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Url not found" });
})

app.listen(port, () => {
    console.log(`Server listen on ${port}`);
})
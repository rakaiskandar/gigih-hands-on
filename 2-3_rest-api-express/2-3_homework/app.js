const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;

const songsRouter = require('./routes/songsRoute');

app.use(cors());
app.use(express.json());

app.use('/api', songsRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Url not found" });
})

app.listen(port, () => {
    console.log(`Server listen on ${port}`);
})
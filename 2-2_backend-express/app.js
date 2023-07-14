const express = require('express');
const app = express();
const port = 3000;
const songsRoute = require('./routes/songRoutes');

app.use(express.json());

app.use('/api', songsRoute);

app.use((req, res) => {
    res.status(404).send('Not found');
})

app.listen(port, () => {
    console.log(`Server on ${port}`);
})

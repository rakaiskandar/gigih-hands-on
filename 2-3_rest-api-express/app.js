const express = require('express');
const app = express();
const port = 4000;
const transactionsRoute = require('./routes/route');


app.use(express.json());

app.use('/api', transactionsRoute);

app.use((req, res) => {
    res.status(404).send('Not Found');
})

app.listen(port, () => {
    console.log(`Server listen on ${port}`);
})
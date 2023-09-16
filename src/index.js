const express = require('express');
const apiRouter = require('./routers/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/whatsapp', apiRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello World!<h1>') 
})

// running app on provided port
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
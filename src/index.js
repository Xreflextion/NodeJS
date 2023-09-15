const express = require('express');
const apiRouter = require('./routers/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/whatsapp', apiRouter);

// running app on provided port
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
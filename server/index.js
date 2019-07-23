const express = require('express');

const bc = require('./controllers/booksController.js')

const app = express();

const PORT = 3001;

//Middleware
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
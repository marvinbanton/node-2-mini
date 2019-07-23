const express = require('express');

const bc = require('./controllers/booksController.js')

const app = express();

const PORT = 3001;

//Middleware
app.use(express.json())
app.use(express.static(`${__dirname}/../build`))

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:bookId', bc.update);
app.delete('/api/books/:bookID', bc.delete);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
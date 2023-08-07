const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const booksRouter = require('./routes/api/books')

app.use('/api/books', booksRouter)

app.listen(3000, ()=>{console.log('>>> run my server')})
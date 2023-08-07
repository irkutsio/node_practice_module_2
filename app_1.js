const express = require('express');
const books = require('./books');
const fs = require('fs/promises');
const app = express();
const cors = require('cors');
const moment = require('moment');
//===============================================
// app.get('/', (request, response) => {

//     response.send('<h2>Home Page</h2>')
// })
// app.get('/contacts', (request, response) => {
//     console.log(request.url)
//     console.log(request.method)
//     response.send('<h2>Contacts Page</h2>')
// })

// app.listen(3000, () => console.log('server run'))
//=====================================================================
// app.get('/books', (req, res) => {
//     res.json(books)
//     // res.send(books)
// })

// app.listen(3000, () => console.log('server run'))
// ====================================================================
// app.use((req, res, next)=>{
//     console.log("My Middleware")
//     next();
// });

// app.get('/products', (req, res) => {
// 	res.json([]);
// });

// app.get('/books', (req, res) => {
// 	res.json(books);
// });

// ===================================
// app.use( async (req, res, next)=>{
//     const {url, method} = req;
//     const date = moment().format("DD-MM-YYYY_hh:mm:ss")
//     await fs.appendFile('./public/server.log', `\n${method} ${url} ${date}`)
//     next();
// });
// ===================================================
app.get('/products', (req, res) => {
	res.json([]);
});

app.get('/books', (req, res) => {
	res.json(books);
});

app.use((req, res, next) => {
	res.status(404).json({
		message: 'not found',
	});
});

// ===========================================
const corsMiddleware = cors()
app.use(corsMiddleware)
app.use(cors())
//============================================
app.listen(3000);

const books = require('../../books');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json(books);
});

router.get('/:id', (req, res) => {
	res.json(books[0]);
});

router.post('/', (req, res) => {});

router.get('/:id', (req, res) => {
	res.json(books[0]);
});

router.delete('/:id', (req, res) => {
	res.json(books[0]);
});

module.exports = router;

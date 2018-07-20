const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => {
	res.set('Content-Type', 'text/plain');
	res.send((req.query.a / req.query.b) + '');
});

module.exports = app;

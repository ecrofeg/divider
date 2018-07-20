const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => {
	res.json(req.query.a / req.query.b);
});

module.exports = app;

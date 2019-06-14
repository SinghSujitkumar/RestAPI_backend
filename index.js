const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const routes = require('./routes/api');

//set express app
const app = express();
//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;
// middleware

app.use(bodyParser.json());
//error handling
app.use(function(err, req, res, next) {
	res.status(422).send({ error: err.message });
});
app.use('/api', routes);
//listen for request
// app.get('/api', function(req, res) {
// 	console.log('GET request');
// 	res.send({ name: 'sujit' });
// });
app.listen(process.env.port || 4000, function() {
	console.log('now listening for requests');
});

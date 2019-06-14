const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');
router.get('/ninjas/:id', function(req, res, next) {
	Ninja.findById({ _id: req.params.id }).then(function(ninja) {
		res.send(ninja);
	});
});
// add a new ninja
router.post('/ninjas', function(req, res, next) {
	Ninja.create(req.body)
		.then(function(ninja) {
			res.send(ninja);
		})
		.catch(next);
	// var ninja =new ninja(req.body);
	// ninja.save()
});
//update
router.put('/ninjas/:id', function(req, res, next) {
	Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
		Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
			res.send(ninja);
		});
		res.send(ninja);
	});
});
//delete
router.delete('/ninjas/:id', function(req, res, next) {
	Ninja.findByIdAndRemove({ _id: req.params.id }).then(function(ninja) {
		res.send(ninja);
	});
});
module.exports = router;

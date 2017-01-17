var express = require('express');
var router = express.Router();
var burger = require('../models/')["burger"];
var moment = require('moment');
var Customer = require('../models/')["customer"];

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.findAll({include:{model: Customer}})
	.then(function(burgers){
		return res.render('inded', {burgers})
	});
	
});

router.post('/burgers/create', function(req, res) {
	Burger.create({burger_name: req.body.burger_name})
	.then(function(newBurger){
		res.redirect('/');
	});	
});

router.put('/burgers/update/:id', function(req, res) {
	Customer.create({customer_name: req.body.customer_name})
	.then(function(myCustomer) {
		return Burger.findOne({where:{id: req.body.burger_id}})
		.then(function(devourBurger) {
			return devourBurger.setCustomer(myCustomer)
			.then(function() {
				return devourBurger.updateAttributes({
					devoured: true
				}).then(function() {
					res.redirect('/burgers');	
				})
			})
		})
	})
});

module.exports = router;
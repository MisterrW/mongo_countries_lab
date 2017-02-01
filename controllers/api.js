var express = require('express');
var countryRouter = express.Router();
var DbQuery = require('../db/querier');
var dbQuery = new DbQuery();

//get all counrtries
countryRouter.get('/', function(req, res) {
  dbQuery.all(function(results){    
  	res.json(results);
  });
});

countryRouter.get('/:id', function(req, res) {
	var id = req.params.id;
  dbQuery.one(function(id, results){    
  	res.json(results);
  });
});

countryRouter.post('/', function(req, res) {
	console.log(req);
	
  // dbQuery.one(function(id, results){    
  // 	res.json(results);
  // });
});


module.exports = countryRouter;

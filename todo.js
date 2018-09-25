var express = require('express');
var router = express.Router();

const f = require('util').format;

const user = encodeURIComponent('59160089'); // 
const password = encodeURIComponent('59160089ei'); //
var dbName = "mobileparadigm_eiei" // 

var MongoClient = require('mongodb').MongoClient;
// moogose 
const dbUrl = f("mongodb://%s:%s@ds035385.mlab.com:35385/%s", user, password, dbName);

var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
    MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('todo').find({}).toArray(function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send(result);
		});
	});
});

router.post('/', function (req, res) {

    MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('todo').insertOne(req.body,function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send("Insert success!!!");
		});
	});

	
})

router.delete('/', function (req, res) {
		
})

router.put('/', function (req, res) {

})

module.exports = router;
var restify = require('restify');
var mongodb = require('mongodb');
var Lead = require('./configureDB');


function leadGeneration(req,res,next){
	console.log(req.body);
	var lead = new Lead(req.body);
	console.log('created lead');
	lead.save(function(err){
		if (err) console.log(err);
		console.log('completed saving');
	});
	return next();
}

var server = restify.createServer({name : 'SNimbus Lead Generation'});
server.use(restify.urlEncodedBodyParser({ mapParams : false }));
server.use(restify.acceptParser(server.acceptable));
server.post('/lead',leadGeneration);
var port = process.env.PORT || 8080;
server.listen(port,function(){
	console.log('%s listening at %s', server.name, server.url);
});
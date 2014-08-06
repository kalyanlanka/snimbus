var restify = require('restify');
var mongodb = require('mongodb');
var Lead = require('./configureDB');


function leadGeneration(req,res,next){
	console.log(req.body);
	var lead = new Lead(req.body);
	console.log('created lead');
	lead.save(function(err){
	res.content = "json";
	if (err) {
		console.log(err);
		res.send(400,JSON.stringify({"message" : "Error occured submitting your request.  The site administrator has been notified,  Thank you for your interest and we will get back to you shortly"}));
	} else {
		
		res.send(200,JSON.stringify({"messsage":"Thank you for your interest.  We will get back to you shortly"}));
			
	}

		

	});
	return next();
}


function buildSuccessResponse(res){
	res.send
}
var server = restify.createServer({name : 'SNimbus Lead Generation'});
server.use(restify.urlEncodedBodyParser({ mapParams : false }));
server.use(restify.acceptParser(server.acceptable));
server.post('/lead',leadGeneration);
var port = process.env.PORT || 8080;
server.listen(port,function(){
	console.log('%s listening at %s', server.name, server.url);
});
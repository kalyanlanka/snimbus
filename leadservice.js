var restify = require('restify');

var leadObj = {};

function leadGeneration(req,res,next){
	console.log(req.body);
}

var server = restify.createServer();
server.use(restify.urlEncodedBodyParser({ mapParams : false }));
server.use(restify.acceptParser(server.acceptable));
server.post('/lead',leadGeneration);

server.listen(8080,function(){
	console.log('%s listening at %s', server.name, server.url);
});
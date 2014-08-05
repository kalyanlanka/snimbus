var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/leadgen/');
var Schema = mongoose.Schema;

var LeadSchema = new Schema({name: String, 
	email: String, 
	subject: String, 
	message: String
});

mongoose.model('Lead',LeadSchema);

var Lead = mongoose.model('Lead');
module.exports = Lead;



//var lead = new Lead({name : 'Kitty kat'});

//kitty.save(function(err){
//	if (err){
//		console.log('error occured');
//	}
//});
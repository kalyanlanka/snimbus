var mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/leadgen';

mongoosed.connect(mongoUri);
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
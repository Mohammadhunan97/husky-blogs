const express  = require('express'),
	app		   = express(),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose'),
	ejs 	   = require('ejs');

const port 	   = process.env.PORT || 3000,
	dbUrl 	   = 'mongodb://localhost/sampleblogs';


mongoose.connect(dbUrl);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('view engine','ejs');

app.get('/',(req,res) => {
	res.render('homepage');
})

app.listen(port,(error) => {
	if(error) {
		console.log(error);
	}else{
		console.log('listening on http://localhost:'+port);
	}
})
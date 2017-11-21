/*
	this page is for a compilation of all routes for all user, regardless of whether its a passport or local user
*/
const Router 	 	 = require('express').Router();

Router.get('/one/:id',(req,res) => {
		//profile is the users data 
	// if id === req.user.id , logged in === true
	let posts = [
	{
		title: 'Cats',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor arcu arcu, ut rhoncus orci laoreet non. Morbi nibh quam, porttitor eu neque quis, finibus tincidunt sapien. Vestibulum elementum velit maximus consectetur suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis porttitor molestie malesuada. Nam lorem lectus, imperdiet vitae orci sit amet, consectetur finibus odio. Donec auctor egestas sollicitudin. Aenean egestas nibh pulvinar, posuere urna a, gravida turpis. Sed id semper velit. Etiam ex tellus, imperdiet vel elit non, maximus euismod velit. Nam tincidunt eu lorem id tristique.',
		image: 'https://media0.giphy.com/media/W3QKEujo8vztC/giphy.gif',
		original_poster: 'the_cat_guy',
		bloggerpic: 'https://img00.deviantart.net/0ff5/i/2015/163/1/a/cg_girl_headshot_sample_by_fayntcommissions-d8x0c98.jpg',
		bloggername: 'cool_girl_97'

	},
	{
		title: 'Zamasu sucks',
		description: 'Etiam nec mi in ipsum fringilla vehicula vitae at arcu. Integer efficitur bibendum porttitor. Praesent rutrum ex nunc, gravida rhoncus odio accumsan in. Donec dolor ligula, lobortis vel odio vitae, tincidunt mollis ipsum. Integer molestie feugiat turpis, a iaculis tortor mollis quis. Nullam dapibus dignissim turpis at congue. Vestibulum gravida non turpis a euismod. Fusce vestibulum elit id dui eleifend blandit. Cras dignissim quis est vitae commodo. Sed sed nisi augue. Praesent fermentum vitae odio in accumsan. Etiam lorem turpis, sollicitudin tincidunt porttitor ut, rhoncus ac ante. Ut euismod ipsum at odio maximus hendrerit.',
		image: 'https://media0.giphy.com/media/BqsndHTH6cbAY/giphy.gif',
		original_poster: 'the_cat_guy',
		bloggerpic: 'https://media3.giphy.com/media/8bS2vbeZ3hEuk/giphy.gif',
		bloggername: 'trunks_thesavage'

	}
	]
	let profile = {
		username: 'mocbr',
		pic: '/img/profilepic.png',
		followers: [{
			id: '123',
			username: 'abc'
		},{
			id: '456',
			username: 'def'
		},{
			id: '789',
			username: 'ghi'
		}],
		following: [{
			id: '123',
			username: 'abc'
		},{
			id: '456',
			username: 'def'
		},{
			id: '789',
			username: 'ghi'
		}],
		posts: posts
	}

	if(req.isAuthenticated() && req.user._id == req.params.id) {
		// res.render('profile',{user: req.user});
		res.render('profile',{profile,});
	}else if(req.session.localUser){
		// res.render('profile',{user: req.session.localUser});
		res.render('profile',{profile,});
	}else{
		res.redirect('/');
	}
})

Router.get('/signout',(req,res)=> {
	if(req.session.localUser){
		req.session.destroy(function(err) {
			res.redirect = "/";
	    })
	}else if(req.isAuthenticated()){
		req.logout();
  	 	res.redirect("/"); //Can fire before session is destroyed?
	}else{
		res.redirect("/");
	}
})



module.exports = Router;




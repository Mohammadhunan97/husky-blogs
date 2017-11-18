window.onload = function() {

	document.getElementById('search-btn').addEventListener('click',function(){
		let value = document.getElementById('img-search').value;
		fetch('http://api.giphy.com/v1/gifs/search?q='+ value +'&api_key=YluTAhEu73oqyFKk5AXioabT9bNbDfAP&limit=6').then(function(results){
			results.json().then(function(jsonres){
				//console.log(jsonres.data);  //img["images"]["original"]["url"]
				jsonres.data.forEach(function(object,i){
					console.log(object.images.original.url,i)
					document.getElementById('search-img-'+i).style.display = 'inline-block';
					document.getElementById('search-img-'+i).src = object.images.original.url;
				})
			})
		})
	})

	document.getElementById('search-img-0').addEventListener('click',function(){
		document.getElementById('search-img-0').style.border = '2px solid #f1c40f';
		document.getElementById('search-img-1').style.border = '2px solid black';
		document.getElementById('search-img-2').style.border = '2px solid black';
		document.getElementById('search-img-3').style.border = '2px solid black';
		document.getElementById('search-img-4').style.border = '2px solid black';
		document.getElementById('search-img-5').style.border = '2px solid black';
		document.getElementById('post-image').value = document.getElementById('search-img-0').src;
	})
	document.getElementById('search-img-1').addEventListener('click',function(){
		document.getElementById('search-img-1').style.border = '2px solid #f1c40f';
		document.getElementById('search-img-0').style.border = '2px solid black';
		document.getElementById('search-img-2').style.border = '2px solid black';
		document.getElementById('search-img-3').style.border = '2px solid black';
		document.getElementById('search-img-4').style.border = '2px solid black';
		document.getElementById('search-img-5').style.border = '2px solid black';
		document.getElementById('post-image').value = document.getElementById('search-img-1').src;

	})
	document.getElementById('search-img-2').addEventListener('click',function(){
		document.getElementById('search-img-2').style.border = '2px solid #f1c40f';
		document.getElementById('search-img-0').style.border = '2px solid black';
		document.getElementById('search-img-1').style.border = '2px solid black';
		document.getElementById('search-img-3').style.border = '2px solid black';
		document.getElementById('search-img-4').style.border = '2px solid black';
		document.getElementById('search-img-5').style.border = '2px solid black';
		document.getElementById('post-image').value = document.getElementById('search-img-2').src;

	})
	document.getElementById('search-img-3').addEventListener('click',function(){
		document.getElementById('search-img-3').style.border = '2px solid #f1c40f';
		document.getElementById('search-img-0').style.border = '2px solid black';
		document.getElementById('search-img-1').style.border = '2px solid black';
		document.getElementById('search-img-2').style.border = '2px solid black';
		document.getElementById('search-img-4').style.border = '2px solid black';
		document.getElementById('search-img-5').style.border = '2px solid black';
		document.getElementById('post-image').value = document.getElementById('search-img-3').src;
	})
	document.getElementById('search-img-4').addEventListener('click',function(){
		document.getElementById('search-img-4').style.border = '2px solid #f1c40f';
		document.getElementById('search-img-0').style.border = '2px solid black';
		document.getElementById('search-img-1').style.border = '2px solid black';
		document.getElementById('search-img-2').style.border = '2px solid black';
		document.getElementById('search-img-3').style.border = '2px solid black';
		document.getElementById('search-img-5').style.border = '2px solid black';
		document.getElementById('post-image').value = document.getElementById('search-img-4').src;
	})
	document.getElementById('search-img-5').addEventListener('click',function(){
		document.getElementById('search-img-5').style.border = '2px solid #f1c40f';
		document.getElementById('search-img-0').style.border = '2px solid black';
		document.getElementById('search-img-1').style.border = '2px solid black';
		document.getElementById('search-img-2').style.border = '2px solid black';
		document.getElementById('search-img-3').style.border = '2px solid black';
		document.getElementById('search-img-4').style.border = '2px solid black';
		document.getElementById('post-image').value = document.getElementById('search-img-5').src;
	})


	document.getElementById('make-new-post').addEventListener('click',function(e){
		e.target.style.display = "none";
		document.getElementById('my-new-post').style.display = 'block';
	})
}
function searchForImages() 
{

	let value = document.getElementById('img-search').value;

	fetch('http://api.giphy.com/v1/gifs/search?q='+ value +'&api_key=YluTAhEu73oqyFKk5AXioabT9bNbDfAP&limit=6').then(function(results){
			results.json().then(function(jsonres){
				//console.log(jsonres.data);  //img["images"]["original"]["url"]
				jsonres.data.forEach(function(object,i){

					document.getElementById('search-img-'+i).style.display = 'inline-block';
					document.getElementById('search-img-'+i).src = object.images.original.url;
				})
			})
		})
}
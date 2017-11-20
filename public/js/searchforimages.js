function searchForImages() 
{

	let value = document.getElementById('img-search').value;

	fetch('http://api.giphy.com/v1/gifs/search?q='+ value +'&api_key=YluTAhEu73oqyFKk5AXioabT9bNbDfAP&limit=6').then((results) => {
			results.json().then((jsonres) => {
				jsonres.data.forEach(function(object,i){
					$('#search-img-'+i).attr('src',object.images.original.url);
					$('.search-img').css('display','inline-block');
				})
			})
		})
}


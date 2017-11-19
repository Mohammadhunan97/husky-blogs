$(document).ready(() => {
	


	$('#search-btn').click(()=> searchForImages());



	$('#make-new-post').click((e)=>{
		$('#my-new-post').css('display','block');
		e.target.display = 'none';
	})	

	$('.search-img').click(()=> {
		console.log('bbeez')
		$(this).css('display','none');
	})

})



	// document.getElementById('search-img-0').addEventListener('click',function(){
	// 	document.getElementById('search-img-0').style.border = '2px solid #f1c40f';
	// 	document.getElementById('search-img-1').style.border = '2px solid black';
	// 	document.getElementById('search-img-2').style.border = '2px solid black';
	// 	document.getElementById('search-img-3').style.border = '2px solid black';
	// 	document.getElementById('search-img-4').style.border = '2px solid black';
	// 	document.getElementById('search-img-5').style.border = '2px solid black';
	// 	document.getElementById('post-image').value = document.getElementById('search-img-0').src;
	// })
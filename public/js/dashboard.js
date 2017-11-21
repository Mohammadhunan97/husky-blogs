$(document).ready(() => {
	


	$('#search-btn').click(()=> searchForImages());



	$('#make-new-post').click((e)=>{
		$('#my-new-post').css('display','block');
		e.target.display = 'none';
	})	

	$('.search-img').click(function(){
		$('.search-img').removeClass('selected-img');
		$('.search-img').addClass(' not-selected');


		$(this).addClass(' selected-img');
		$(this).removeClass(' not-selected');


		let img = $(this).attr('src');
		$('#post-image').val(img);
	})

	$('#explorer').click(() => {
		window.location = "/user/explore/" + $('#searcher').val();
	})

})



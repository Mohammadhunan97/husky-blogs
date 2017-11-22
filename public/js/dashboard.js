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


	$(document).ready(function() {
	  $(window).keydown(function(event){
	    if(event.keyCode == 13) {
	      event.preventDefault();
	      return false;
	    }
	  });
	});

	// $('#new-post-form').submit((e)=> {
	// 	e.preventDefault();
	// 	console.log(e.target.value);
	// 	console.log(e.target.tags.value)
	// })

})



$(document).ready(()=>{
	$('#explorer').click(() => {
		window.location = "/user/explore/" + $('#searcher').val();
	})
})
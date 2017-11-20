$(document).ready(()=>{
	$('#explorer').click(() => {
		window.location = "/explore/" + $('#searcher').val();
	})
})
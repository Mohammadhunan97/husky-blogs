function signInOrLogin()
{
	signButtonClickCount++;
	if(signButtonClickCount%2 === 0){ 
		$('#signup').css('display','inline');
		$('#login').css('display','none');
		$('#local-btn').text('Already Have An Account? Login');
		$('body').addClass('husky-background');
	}else{
		$('#signup').css('display','none');
		$('#login').css('display','inline');
		$('#local-btn').text("Don't Have An Account Yet? Signup");
		$('body').removeClass('husky-background').addClass('yellow-background');
	}
}
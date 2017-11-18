function signInOrLogin(){
	if(signButtonClickCount%2 === 0){ 
		document.getElementById('signup').style.display = 'inline';
		document.getElementById('login').style.display = 'none';
		document.getElementById('local-btn').innerText = 'Already Have An Account? Login';
		document.getElementsByTagName('body')[0].className = 'husky-background';
	}else{
		//odd 
		document.getElementById('login').style.display = 'inline';
		document.getElementById('signup').style.display = 'none';
		document.getElementById('local-btn').innerText = "Don't Have An Account Yet? Signup";
		document.getElementsByTagName('body')[0].className = 'yellow-background';
	}
}
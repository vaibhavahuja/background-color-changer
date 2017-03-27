var color = document.getElementById('hey');


window.setInterval(function(){
  if (color.value != ''){
		var bgcolor = color.value;
		document.querySelector('html').style.backgroundColor = bgcolor;
	}

}, 50);
	
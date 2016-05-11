var mq = window.matchMedia( "(max-width: 320px)" );
var mylogo = document.getElementById("mylogo");
if(mq.matches) {	
	mylogo.innerHTML = "SSR";
}

function changelogo() {
	return function() {
		if(mq.matches) {
			
			mylogo.innerHTML = "SSR";
		}
		else {
			mylogo.innerHTML = "Syco Scientist Records"
		}
	}
}

window.onresize = changelogo();

if (window.matchMedia( "(max-height: 420px)" ).matches) {
	for (var n=0; n < 5; n++) {
		document.getElementsByClassName("item")[n].style.backgroundSize = "100% calc(100% - 140px)";
	}
}




var timer = setInterval(function(){
	myTimer()}, 1000);

var counter = 1;

var isClicked = true;

var maxScroll = 0;

var totalPageScroll = 0;
var lastPageY = 0;

function myTimer() {
	counter++;
};


function signUpTime() {
	if (isClicked) {
	document.getElementById("sign-up-timer").innerHTML=(counter+" ");
	isClicked = false;
	}
	else {
		return true;
	}
};

function showContainer() {
	if (document.getElementById("aside-main").style.display==="block"){
		document.getElementById("aside-main").style.display="none";
		counter = 0;
	}
	else {
		document.getElementById("aside-main").style.display="block";
		document.getElementById("time-on-site").innerHTML=(" "+counter+" ");
		counter = 0;
	}
	percentOfPageViewed();
	pixelsScrolled();
}

function pixelsScrolled() {
	if (window.scroll) {
		totalPageScroll += (window.pageYOffset-(window.scrollTop()-window.pageYOffset));
	};
	document.getElementById("amount-scrolled").innerHTML=(" "+totalPageScroll+" ");
	window.pageYOffset
}

var percentOfPageViewed = function(){
	var windows = window.innerHeight;
	var scrollHeight = document.body.scrollHeight;

	if(maxScroll < pageYOffset ) {
		maxScroll = pageYOffset;
	}

	if (maxScroll < windows) {;
		document.getElementById("percent-page-viewed").innerHTML=(" "+Math.round((windows/scrollHeight)*100)+"% ");
	}
	else if (Math.round(maxScroll) >= Math.round(windows) && Math.round(maxScroll) < Math.round(scrollHeight - windows)){
		document.getElementById("percent-page-viewed").innerHTML=(" "+Math.round((maxScroll/scrollHeight)*100)+"% ");
	}
	else if (Math.round(maxScroll + windows) === Math.round(scrollHeight)){
		document.getElementById("percent-page-viewed").innerHTML=(" 100% ");
	}
}
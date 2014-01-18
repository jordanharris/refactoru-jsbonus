// function keysLoop(object){
// 	var news = [];
// 	for (var key in object) {
// 		news.push(key);
// 	}
// 	return news;
// };

// var trip = {
// 	small: "max",
// 	big: "jordan",
// 	large: "people"
// };

// keysLoop(trip);


// function keysLoop(object1,object2){
// 	var news = {};
// 	for (var key in object1) {
// 		news[key] = object1[key];
// 	};
// 	for (var i in object2) {
// 		news[i] = object2[i];		
// 	}
// 	return news;
// };


// var trip = {
// 	small: "max",
// 	big: "jordan",
// 	large: "people"
// };

// var grand = {
// 	orange: "circle",
// 	blue: "square",
// 	yellow: "rectangle"
// };

// keysLoop(trip,grand);

function keysLoop(){
	var news = {};
	for (var i=0; i < arguments.length ;i++)
		for (var key in arguments[i]) {
			news[key] = arguments[i][key];
		};
	return news;
};


var trip = {
	small: "max",
	big: "jordan",
	large: "people"
};

var grand = {
	orange: "circle",
	blue: "square",
	yellow: "rectangle"
};

keysLoop(trip,grand);
var Ui = require('./views/ui');

var app = function(){
	console.log("Hello there");
	console.log("I'm alive!");
  new Ui();
}
window.onload = app;

// var makeRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = callback;
//   request.send();
// }
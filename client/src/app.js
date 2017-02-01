var AllCountries = require('./models/allCountries');

var app = function(){
	console.log("Hello there");
	console.log("I'm alive!");
  var allCountries = new AllCountries();
  allCountries.popCountriesList();


}
window.onload = app;

// var makeRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = callback;
//   request.send();
// }
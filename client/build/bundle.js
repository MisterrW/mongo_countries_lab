/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Ui = __webpack_require__(1);
	
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var AllCountries = __webpack_require__(2);
	
	var Ui = function(){
	  this.allCountries = new AllCountries();
	  this.popList();
	  // this.displayCountries();
	}
	
	Ui.prototype = {
	  popList: function(){
	    // console.log(this.allCountries);
	    this.allCountries.popCountriesList(this.displayCountries.bind(this));
	  },
	  displayCountries: function(countries){
	    console.log("allCountries: " + this.allCountries);
	    console.log(countries);
	    var countriesList = document.createElement('ul');
	    for (country of countries){
	      var li = document.createElement('li');
	      // console.log(country.name);
	      li.innerText = country.name;
	      countriesList.appendChild(li);
	    }
	    // console.log(document);
	    // console.log(countriesList);
	    var container = document.getElementById('container');
	    var thing = document.createElement('p');
	    thing.innerText = "yep!";
	    container.appendChild(thing);
	    container.appendChild(countriesList);
	  }
	}
	
	module.exports = Ui;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var AllCountries = function(){
	  this.countries = [];
	  // var url = 
	}
	
	AllCountries.prototype = {
	  makeRequest: function(url, callback){
	    var request = new XMLHttpRequest();
	    request.open("GET", url);
	    request.onload = callback;
	    request.send();
	  },
	  popCountriesList: function(callback){
	    this.makeRequest("https://restcountries.eu/rest/v1/all", function(){
	      this.countries = JSON.parse(this.responseText);
	      // console.log(this.countries);
	      callback(JSON.parse(this.responseText));
	    });
	  }
	}
	
	module.exports = AllCountries;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
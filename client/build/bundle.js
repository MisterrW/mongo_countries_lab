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

	var AllCountries = __webpack_require__(1);
	
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

/***/ },
/* 1 */
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
	  popCountriesList: function(){
	    this.makeRequest("https://restcountries.eu/rest/v1/all", function(){
	      var countries = JSON.parse(this.responseText);
	      console.log(countries);
	    })
	  }
	}
	
	module.exports = AllCountries;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
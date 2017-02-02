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
	  this.countriesList = document.createElement('select');
	  this.countries = [];
	  this.bucket = document.createElement('ul');
	  this.container = document.getElementById('container');
	  this.container.appendChild(this.countriesList);
	  this.container.appendChild(this.bucket);
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
	    // console.log(countries);
	    console.log(this);
	    for (country of countries){
	      this.countries = countries;
	      var option = document.createElement('option');
	      // console.log(country.name);
	      option.innerText = country.name;
	      this.countriesList.appendChild(option);
	    }
	    // console.log(document);
	    // console.log(countriesList);
	    var container = document.getElementById('container');
	    container.appendChild(this.countriesList);
	    var button = document.createElement('button');
	    button.innerText = "add to list";
	    container.appendChild(button);
	    button.onclick = this.addToBucket.bind(this);
	  },
	  addToBucket: function(){
	    console.log("inBucketFunct");
	    console.log("countries: " + this.countries);
	    // alert(this.countriesList.value);
	    var li = document.createElement('li');
	    li.innerText = this.countriesList.value;
	    this.bucket.appendChild(li);
	    for (country of this.countries){
	      if(country.name === this.countriesList.value){
	        console.log("inloop");
	        console.log("country:" + country);
	        console.log(country);
	        this.allCountries.saveToBucket(country);
	      }
	    }
	  }
	
	}
	
	module.exports = Ui;

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	var AllCountries = function(){
	  this.countries = [];
	}
	
	AllCountries.prototype = {
	  makeRequest: function(url, callback){
	    var request = new XMLHttpRequest();
	    request.open("GET", url);
	    request.onload = callback;
	
	    request.send();
	  },
	  sendRequest: function(url, body){
	    var request = new XMLHttpRequest();
	    request.open("GET", url);
	    request.setRequestHeader("Content-Type", "application/json");
	    request.send(body);
	
	  },
	  popCountriesList: function(callback){
	    this.makeRequest("https://restcountries.eu/rest/v1/all", function(){
	      this.countries = JSON.parse(this.responseText);
	      // console.log(this.countries);
	      callback(JSON.parse(this.responseText));
	    });
	  },
	  saveToBucket: function(country){
	    console.log("what?");
	    console.log("countrywhat:" + country);
	    this.sendRequest("http://localhost:3000/api/countries/", country);
	  }
	};
	
	module.exports = AllCountries;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
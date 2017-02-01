var AllCountries = require('../models/allCountries');

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
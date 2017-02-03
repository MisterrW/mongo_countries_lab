var AllCountries = require('../models/allCountries');

var Ui = function(){
  this.allCountries = new AllCountries();
  this.countriesList = document.createElement('select');
  this.countries = [];
  this.bucket = document.createElement('ul');
  this.container = document.getElementById('container');
  this.container.appendChild(this.countriesList);
  this.container.appendChild(this.bucket);
  this.popList();
}

Ui.prototype = {
  popList: function(){
    this.allCountries.popCountriesList(this.displayCountries.bind(this));
  },
  displayCountries: function(countries){
    for (country of countries){
      this.countries = countries;
      var option = document.createElement('option');
      option.innerText = country.name;
      this.countriesList.appendChild(option);
    }
    var container = document.getElementById('container');
    container.appendChild(this.countriesList);
    var button = document.createElement('button');
    button.innerText = "add to list";
    container.appendChild(button);
    button.onclick = this.addToBucket.bind(this);
  },
  addToBucket: function(){
    var li = document.createElement('li');
    li.innerText = this.countriesList.value;
    this.bucket.appendChild(li);
    for (country of this.countries){
      if(country.name === this.countriesList.value){
        this.allCountries.saveToBucket(country);
      }
    }
  }

}

module.exports = Ui;
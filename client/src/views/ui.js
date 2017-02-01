var AllCountries = require('../models/allCountries');

var Ui = function(){
  this.allCountries = new AllCountries();
  this.countriesList = document.createElement('select');
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
    console.log(countries);
    console.log(this)
    for (country of countries){
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
    console.log(this.countriesList);
    // alert(this.countriesList.value);
    var li = document.createElement('li');
    li.innerText = this.countriesList.value;
    this.bucket.appendChild(li);
  }

}

module.exports = Ui;
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
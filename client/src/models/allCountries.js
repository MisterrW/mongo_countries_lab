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
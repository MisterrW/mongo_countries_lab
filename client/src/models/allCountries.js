
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
    console.log(body);
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify(body)
    request.onload = function(){
      console.log("completed");
    }
;    request.send(data);

    // console.log(JSON.stringify(body));
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
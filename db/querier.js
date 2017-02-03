var MongoClient = require('mongodb').MongoClient;

var DbQuery = function(){
  this.url = 'mongodb://localhost:27017/bucket_list';
  this.name = "DbQuery object";
  this.countryName = null;
  this.country = null;
}

DbQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db) {
      if(db){
        var collection = db.collection('countries'); 
        collection.find().toArray(function(err, docs) {
          onQueryFinished(docs);
        });
      }
    });
  },
  one: function(countryName, onQueryFinished){
    this.countryName = countryName;
    MongoClient.connect(this.url, function(err, db) {
      if(db){
        var collection = db.collection('countries'); 
        collection.find().toArray(function(err, docs) {
          onQueryFinished(docs);
        });
      }
    }.bind(this));
  },
  save: function(country){
    this.country = country;
     MongoClient.connect(this.url, function(err, db) {
      if(db){
        var collection = db.collection('countries'); 
        console.log(collection.insert(country));
      }
    }.bind(this));
  }
}

module.exports = DbQuery;
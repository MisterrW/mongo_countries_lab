use bucket_list;

db.dropDatabase();

db.countries.insert([{
	name: "UK",
	pop: "64 mill"
},
{
	name: "France",
	pop: "66 mill"
}]);

db.countries.find();

// db.close();
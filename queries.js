/* Fill out these functions using Mongoose queries*/
var schema_Module = require('./ListingSchema.js');
var mongoose = require('mongoose');

var Listing = require('./ListingSchema.js');
var config = require('./config');
mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri,{ useMongoClient: true });
var findLibraryWest = function() {
  var query = Listing.findOne({'name': 'Library West'});

  query.select('name code');
  query.exec(function(err,thing) {
    
    if (err) return handleError(err);
    console.log(thing.name, thing.code);
  })
  
};
  



var removeCable = function() {
  var query = Listing.findOne({'code': 'CABL'});

  query.select('name code');
  query.exec(function(err,thing) {
    
    if (err) return handleError(err);
    console.log(thing.name, thing.code);
  })
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

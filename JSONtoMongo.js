'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    json = require('./listings.json');

/* Connect to your database */

mongoose.connect(config.db.uri,{ useMongoClient: true });

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


for (var i=0; i< json.entries.length; i++ ){
  var newUser;
  if (json.entries[i].coordinates != undefined) {
    newUser = Listing({
      code: json.entries[i].code,
      name: json.entries[i].name,
      coordinates: {
        latitude: json.entries[i].coordinates.latitude,
        longitude: json.entries[i].coordinates.longitude
      },
      address : json.entries[i].address

    });
  }
  else {
    newUser = Listing({
      code: json.entries[i].code,
      name: json.entries[i].name      
    });
  }
  newUser.save(function(err) {
    if (err) throw err;
    console.log('Ready')
  });
  


}

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
	code: { type: String, required: true},
	name: { type: String, required: true},
	coordinates: {
		latitude: Number,
		longitude: Number,
	},
	address: String,
	created_at: Date,
	updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
	
	var currentDate = new Date();
	this.updated_at = currentDate;


	if (!this.created_at) {

		this.created_at = currentDate;
	};

	next();

});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),

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
    console.log("je");
    if (err) throw err;
  });
  


}

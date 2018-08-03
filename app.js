'use strict';

var SwaggerParser = require('swagger-parser');
var R = require('ramda');

const options = {
    resolve: {
      http: {
        headers: {
          "apikey": "296f3b6f-ef79-4f75-9793-b653955c4dd2"
        }
      }
    },
    validate: {
      spec: false
    }
};

//SwaggerParser.parse("Trouble_Ticket.swagger.json", options)
//.then(function(api) {
//  console.log("SPEC 1", JSON.stringify(api))
//});

SwaggerParser.validate("Trouble_Ticket.swagger.json", options)
  .then(function(api) {
    console.log(JSON.stringify(api, null, 2));
  })
  .catch(function(err) {
    console.error(err);
  });


/*  SwaggerParser.resolve("Trouble_Ticket.swagger.json", options)
    .then(function($refs) {
      // $refs.paths() returns the paths of all the files in your API
      var filePaths = $refs.paths();
      console.log("PATHS", JSON.stringify($refs))
    });
*/

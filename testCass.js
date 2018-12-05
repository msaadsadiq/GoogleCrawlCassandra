var cassandra = require('cassandra-driver');
var async = require('async');
 //Connect to the cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'ddminer'});

function (callback) {
       client.execute("SELECT imageid FROM ddminer.images", function (err, result) {
           if (!err){
               if ( result.rows.length > 0 ) {
                   var user = result.rows[0];
                   console.log("imageid = %s", user.imageid);
               } else {
                   console.log("No results");
               }
           }
 
           // Run next function in series
           callback(err, null);
       });
   },

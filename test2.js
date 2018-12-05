const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'ddminer' });

const query = 'SELECT imageid, image FROM ddminer.images';
client.execute(query)
  .then(result => console.log('imageNo %s and image %s', result.rows[0].imageid, result.rows[0].image));

//process.exit();

const express = require('express');

const hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
  // res.status(200).send("Hello");
});

server.get('/hobbits', async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});

module.exports = server;


// How to change to postgres
// in heroku
// resourcces
// search for postgres
// settings -> reveal config vars
// on your side
// yarn add pg
// knexfile.js -> 
// at top of file
// const localPg = { // for local postgres
//   host: 'localhost',
//   database: 'hobbits',
//   user: 'students',    // fake user for local use
//   password: 'hired'    // fake pass for local use or postgres would wig out
// }
// const productionDbConnection = process.env.DATABASE_URL || localPg;

//  under testing in file:
// production: {
//   client: 'pg',
//     connection: productionDbConnection, //could be an object or a string, see above
//       migrations: {
//     directory: './data/migrations',
//     },
//   seeds: {
//     directory: './data/seeds',
//     },
// }
// };
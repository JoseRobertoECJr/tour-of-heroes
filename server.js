//connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/heroes'); //127.0.0.1:27017

//promises
mongoose.Promise = global.Promise

//get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//get our API routes
const api = require('./api/routes/api');

const app = express();

//parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//set our api routes
app.use('/api', api);

//catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//get port from environment and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

//create HTTP server
const server = http.createServer(app);

//listen on provided port, on all network interfaces
server.listen(port, () => console.log(`API running on localhost:${port}`));

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var index = require('./routers/index');
var ticket = require('./routers/ticket');

var app = express();

/*******************************************************************************
 *                            configuration                                    *
 ******************************************************************************/
var mongoURI = 'mongodb://localhost/Project-Tracker';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err) {
  console.log('MongoDB connection failed with error:', err);
});

MongoDB.once('open', function() {
  console.log('MongoDB connection open');
});

app.use(bodyParser.json());
app.use(express.static('server/public'));

/*******************************************************************************
 *                               Routers                                       *
 ******************************************************************************/
app.use('/', index);
app.use('/ticket', ticket);

/*******************************************************************************
 *                                Server                                       *
 ******************************************************************************/

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
});

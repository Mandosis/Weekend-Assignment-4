var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var Ticket = require('../../models/ticket');

var router = express.Router();

router.get('/', function(req, res) {
  // Get all
  res.sendStatus(200);
});

router.post('/create', function(req, res) {
  // create new ticket
  res.sendStatus(200);
});

router.post('/edit/:id?', function(req, res) {
  // Find ticket by ID and edit it
  res.sendStatus(200);
});

router.delete('/remove/:id?', function(req, res) {
  // Find ticket by id and remove it from the database
  res.sendStatus(200);
});

module.exports = router;

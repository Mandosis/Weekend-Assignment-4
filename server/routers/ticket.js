var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var Ticket = require('../../models/ticket');

var router = express.Router();

router.get('/', function(req, res) {
  // Get all tickets from the database
  Ticket.find({}, function(err, tickets) {
    if(err) {
      console.log('Getting tickets failed:', err);
      res.sendStatus(500);
    } else {
      res.send(tickets);
    }
  });
});

router.post('/create', function(req, res) {
  // create new ticket
  var ticket = new Ticket({
    name: req.body.name,
    type: req.body.type,
    priority: req.body.priority,
    description: req.body.description,
    assignee: req.body.assignee,
    reporter: req.body.reporter,
    created: new Date(),
    updated: new Date()
  });

  ticket.save(function(err) {
    if(err) {
      console.log('Creating ticket failed:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.post('/edit/:id?', function(req, res) {
  var id = req.params.id;

  console.log('Edit route accessed');

  // Check if the id parameter is included in the request
  if(id) {
    var ticket = new Ticket({
      _id: req.body._id,
      name: req.body.name,
      type: req.body.type,
      priority: req.body.priority,
      description: req.body.description,
      assignee: req.body.assignee,
      reporter: req.body.reporter,
      created: req.body.created,
      updated: new Date()
    });

    // Find the ticket by ID and update
    Ticket.findByIdAndUpdate(id, ticket, function(err) {
      if(err) {
        console.log('Editing ticket failed:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  } else {
    res.sendStatus(404);
  }
});

router.delete('/remove/:id?', function(req, res) {
  var id = req.params.id;

  // Find ticket by id and remove it from the database
  if(id) {
    Ticket.find({_id: id}).remove(function(err){
      if(err) {
        console.log('Removing ticket by ID failed:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  } else {
    Ticket.find({}).remove(function(err) {
      if(err) {
        console.log('Removing all tickets failed:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  }
});

module.exports = router;

var app = angular.module('projectTrackerApp', []);

app.controller('ticketController', ['$http', function($http) {
  var vm = this;
  vm.tickets = [];
  vm.openTickets = 0;

  // Get all tickets
  vm.get = function() {
    $http.get('/ticket').then(function(response) {
      // console.log(response.data);
      vm.tickets = response.data;
      vm.openTickets = vm.tickets.length;
    });
  };

  // Send a ticket to be created
  vm.create = function() {
    var ticket = {
      name: vm.name,
      type: vm.type,
      priority: vm.priority,
      description: vm.description,
      assignee: vm.assignee,
      reporter: vm.reporter
    }
    $http.post('/ticket/create', ticket).then(function() {
      vm.get();
    });
  };

  // Make tickets editable
  vm.makeEditable = function(ticket) {
    ticket.editable = true;
    return ticket;
  };

  vm.edit = function(ticket) {
    ticket.editable = false;

    var api = '/ticket/edit/' + ticket._id;
    $http.post(api, ticket).then(function(response) {
      // console.log(response);
    });

    vm.get();
  };

  // Delete tickets
  vm.remove = function(id) {
    var api = '/ticket/remove/' + id;

    $http.delete(api).then(function() {
      console.log('Ticket removed succesfully');
      vm.get();
    });
  };

  // Check input
  vm.checkInput = function() {
    if (vm.name && vm.type && vm.priority && vm.description && vm.assignee && vm.reporter) {
      vm.create();
    }
  };

  // Make time readable
  vm.formatTime = function(time) {
    return moment(time).calendar();
  };

  vm.get();
}]);

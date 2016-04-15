#Weekend Assignment

In this weekend assignment you will br creating a ticket management sysystem using the MEAN Stack with the option to swap out AngularJS with jQuery. If you choose to use AngularJS, your controllers should use the '[controller as](https://docs.angularjs.org/api/ng/directive/ngController)' syntax.  Your app's index.html should load with a series of inputs with the following fields:

* Name (String)
* Type (String)
* Priority (String)
* Description (String)
* Assignee (String)
* Reporter (String)

The following fields should be on the Ticket model (ticket.js), but updated on the server:
* Created (Date)
* Updated (Date)

You should be able to submit the ticket to the server and it should be saved into MongoDB via a 'Submit' button. All of your ticket related requests should be sent to a router named 'ticketRouter.js'. As tickets are added, they should appear below listed 3 per row each within their own Bootstrap 'well'. The remainder of the page should be styled with Bootstrap as well. If the page is refreshed, the tickets listed below should remain.   

I advise you to validate your data as you go with something like adminMongo: https://github.com/mrvautin/adminMongo

##Hard Mode
Add buttons to each ticket to allow them to be removed (the button should read 'Completed').

##Pro mode
Allow all of the tickets fields to be updated and saved. Flow should be as follows:
* 'Edit' button is clicked
* Fields become editable
* 'Edit' button is replaced by a 'Save' button
* Edits are made
* 'Save' button click should send values to  server (save in database) and return fields to read-only

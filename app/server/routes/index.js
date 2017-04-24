var Router = require('express').Router;
var handleMailer = require('./mailer');
var viewVisitors = require('./view-visitors');

module.exports = function(app) {
  var router = Router();
  router.post('/mailer', handleMailer);
  router.get('/view_visitors', viewVisitors);
  return router;
};

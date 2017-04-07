var Router = require('express').Router;
var handleMailer = require('./mailer');

module.exports = function(app) {
  var router = Router();
  router.post('/mailer', handleMailer)
  return router;
};

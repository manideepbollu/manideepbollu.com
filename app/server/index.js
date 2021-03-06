var express = require('express');
var app     = express();
var server  = app.listen(process.env.PORT || 3013);

// Middleware.
app.use(require('morgan')('combined'));
app.use(require('compression')());
app.use(express.static('./app/static'));
app.use(require('body-parser').json());

// Routes.
app.use(require('./routes')(app));

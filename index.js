'use strict'
const express = require('express');
const httpErrors = require('http-errors');
const cors = require('cors');
require('dotenv').config();

const routers = require('./routes/routers');

// Create the express app
const app = express();

// Database

// CORS
app.use( cors() );

// Public resources
app.use( express.static('public') );

// Body parser
app.use( express.json() );

// Routes
routers.forEach(({path, route}) => {
  app.use(path, route);
});

app.get( '*', (req, res) => {
  res.sendFile( __dirname + '/public/index.html' );
});

// Common error handlers
app.use(function fourOhFourHandler (req, res, next) {
  next(httpErrors(404, `Route not found: ${req.url}`));
});
app.use(function fiveHundredHandler (err, req, res, next) {
  if (err.status >= 500) {
    logger.error(err);
  }
  res.status(err.status || 500).json({
    messages: [{
      code: err.code || 'InternalServerError',
      message: err.message
    }]
  })
});

// Start server
app.listen( process.env.PORT, () => {
  console.log(`Server up on port ${ process.env.PORT }`)
});
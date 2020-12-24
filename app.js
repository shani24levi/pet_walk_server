const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const colors = require('colors');

const dotenv = require('dotenv');
dotenv.config();
const app = express();

//Conect to DB
const mongoCon = require("./dbs_connected/mongo_connected");

//Middleware 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Server static assets 
app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-auth-token,x-api-key');
  next();
});

//Routs Middlewares
const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets');
const socialNetworkRouter = require('./routes/socialNetworks');
app.use('/users', usersRouter);
app.use('/pets', petsRouter);
app.use('/socialNetworks', socialNetworkRouter);


//client conction
app.use(express.static('public'));

//Listening on port 
const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(colors.red.underline.bgBrightWhite(`Server running on port ${port}`)));

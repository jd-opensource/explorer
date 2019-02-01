'use strict';

const express = require('express');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == "OPTIONS") res.send(200);
  else next();
});

const ledgers = require('./routes/ledgers');
app.use('/ledgers', ledgers);

const search = require('./routes/search');
app.use('/search', search);

const account = require('./routes/account');
app.use('/account', account);

const user = require('./routes/user');
app.use('/user', user);

const block = require('./routes/block');
app.use('/block', block);

const contract = require('./routes/contract');
app.use('/contract', contract);

//{pages}//

let server = app.listen(8088, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
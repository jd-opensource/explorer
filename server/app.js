'use strict';

const express = require('express');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const configs = require('../configs');
const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

const { resultData } = require('./common/utils');

//载入路由
const page1 = require('./routes/page1');
app.use('/page1', page1);
const page2 = require('./routes/page2');
app.use('/page2', page2);
const overview = require('./routes/overview');
app.use('/overview', overview);

const user = require('./routes/user');
app.use('/user', user);
const history = require('./routes/history');
app.use('/history', history);
app.use('/*/blocks', history);

app.use('/*/blocks/height/*', history);
app.use('/*/blocks/hash/*', history);


app.use('/txs/height/*/*/*/*', history);
app.use('/*/txs/*', history);
const contract = require('./routes/contract');
app.use('/contract', contract);
const ledgers = require('./routes/ledgers');
app.use('/ledgers', ledgers);
app.use('/*/accounts/count', overview);
app.use('/*/accounts/additional-count', overview);
app.use('/*/accounts/*', ledgers);
app.use('/*/accounts/*', ledgers);

app.use('/hash/all', ledgers);
app.use('/*/blocks/latest', overview);

app.use('/*/txs/count', overview);
app.use('/*/users/count', overview);

app.use('/*/contracts/count', overview);
app.use('/*/participants', overview);

app.use('/*', overview);


app.use('/*/txs/additional-count', overview);

app.use('/*/users/*', user);
app.use('/*/contracts/*', contract);
const search = require('./routes/search');
app.use('/search', search);
//{pages}//

app.get('/api/v1/search', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  const datas = _.times(100, function(i) {
    let num = i + 1;

    return {
      test1: num + 100000,
      test2: '测试' + num,
      test4: _.random(10, 90) + '%',
      test5: _.random(10, 90) + '%',
      test6: _.random(10, 90) + '%',
      test8: _.random(1, 10),
      test9: _.random(1, 10),
      test10: _.random(1, 10),
      test11: _.random(1, 10),
      test12: _.random(1, 10),
      test14: _.random(10, 90) + '%',
      test15: _.random(10, 90) + '%',
      test16: _.random(1, 24),
      test17: _.random(10, 90) + '%',
      test18: _.random(1, 100000)
    };
  });

  const pageIndex = params.currentPage,
    pageSize = params.pageSize,
    start = (pageIndex - 1) * pageSize,
    end = pageIndex * pageSize,
    data = datas.filter((obj, i) => {
      if (i >= start && i < end) {
        return true;
      }
    });

  Object.assign({
    "message": "OK",
    "data": {
      "blocks": [{
        "hash_id": "6Kw7g7pXTF89UXUNrbC4GQtjwrhguTSvCJicAbBCTiJMG",
        "height": 1
      }, {
        "hash_id": "68WiytpLnQYZamD9HSAaPGToUu2i7q3MZnSHQVD1tBhN4",
        "height": 2
      }, {
        "hash_id": "682tzY4JXr6ZByH5hMfKX4w8CJYUH3gKskNRP6UNgT7si",
        "height": 3
      }, {
        "hash_id": "682nAtP3QaisaQ5ZBXjMTeNPCEn27jJrB7zMF2wt3ScGB",
        "height": 4
      }, {
        "hash_id": "682FXSCzrgES1MQQthyuWFbyMpLDTHv5MbcK5M2hD2ucn",
        "height": 5
      }],
      "txs": null
    }
  });

  res.send({
    "message": "OK",
    "data": {
      "blocks": [{
        "hash_id": "6Kw7g7pXTF89UXUNrbC4GQtjwrhguTSvCJicAbBCTiJMG",
        "height": 1
      }, {
        "hash_id": "68WiytpLnQYZamD9HSAaPGToUu2i7q3MZnSHQVD1tBhN4",
        "height": 2
      }, {
        "hash_id": "682tzY4JXr6ZByH5hMfKX4w8CJYUH3gKskNRP6UNgT7si",
        "height": 3
      }, {
        "hash_id": "682nAtP3QaisaQ5ZBXjMTeNPCEn27jJrB7zMF2wt3ScGB",
        "height": 4
      }, {
        "hash_id": "682FXSCzrgES1MQQthyuWFbyMpLDTHv5MbcK5M2hD2ucn",
        "height": 5
      }],
      "txs": null
    }
  });

});

// app.get('/api/v1/search', function(req, res) {
//   res.type('json');
//   let ret = {};

//   Object.assign(ret, resultData, {
//     data: 'test_user'
//   });

//   res.send(ret);
// })

let server = app.listen(configs.port, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
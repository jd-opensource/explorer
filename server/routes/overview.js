'use strict';

const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

router.post('/getTableData', function(req, res) {
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

  Object.assign(ret, resultData, {
    data,
    totalCount: 100
  });

  res.send(ret);
});

// 区块高度
router.get('/blockHeight', function(req, res) {
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
    "data": 56897,
    "success": true
  });

  res.send({
    "data": 56897,
    "success": true
  });
});

// 交易总数
router.get('/transactionAccount', function(req, res) {
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

  Object.assign(ret, resultData, {
    data,
    totalCount: 100
  });

  res.send(ret);
});

module.exports = router;
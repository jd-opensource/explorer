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
router.get('', function(req, res) {
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
    "data": {
        "address": "www.jd.com",
        "pubKey": {
            "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
        }
    },
    "success": true
  });

  res.send({
    "data": {
        "address": "www.jd.com",
        "pubKey": {
            "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
        }
    },
    "success": true
  });
});

router.get('/data-account/*/*', function(req, res) {
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
      "data": {
          "address": "www.jd.com",
          "pubKey": {
              "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
          }
      },
      "success": true
    });
  
    res.send({
      "data": {
          "address": "www.jd.com",
          "pubKey": {
              "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
          }
      },
      "success": true
    });
});

// 获取数据账户中某些Key的结果
router.post('/data-entries/*/*', function(req, res) {
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
        "data": [
            {
                "value": "value1",
                "nil": false,
                "key": "key1",
                "type": "TEXT",
                "version": 1
            },
            {
                "value": "value2",
                "nil": false,
                "key": "key2",
                "type": "TEXT",
                "version": 2
            }
        ],
        "success": true
    });
  
    res.send({
        "data": [
            {
                "value": "value1",
                "nil": false,
                "key": "key1",
                "type": "TEXT",
                "version": 1
            },
            {
                "value": "value2",
                "nil": false,
                "key": "key2",
                "type": "TEXT",
                "version": 2
            }
        ],
        "success": true
    });
  });
// 区块高度
router.get('/block/height/max/*', function(req, res) {
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
router.get('/tx-count/all/*', function(req, res) {
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
// 用户总数
router.get('/user-count/all/*', function(req, res) {
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
    "data": 10,
    "success": true
  });

  res.send({
    "data": 10,
    "success": true
  });
});
// 账户总数
router.get('/account-count/all/*', function(req, res) {
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
    "data": 6,
    "success": true
  });

  res.send({
    "data": 6,
    "success": true
  });
});
// 合约总数
router.get('/contract-count/all/*', function(req, res) {
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
    "data": 456789,
    "success": true
  });

  res.send({
    "data": 456789,
    "success": true
  });
});

// 新增账户数量
router.get('/account-count/new/*', function(req, res) {
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
    "data": 10,
    "success": true
  });

  res.send({
    "data": 10,
    "success": true
  });
});
// 新增交易数量
router.get('/tx-count/new/*', function(req, res) {
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
    "data": 120,
    "success": true
  });

  res.send({
    "data": 120,
    "success": true
  });
});
// 成员列表
router.get('/ledger/participants/*', function(req, res) {
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
    "data": [
        {
            "hostAddress": {
                "host": "172.62.35.230",
                "port": 6666,
                "secure": false
            },
            "pubKey": {
                "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
            },
            "id": 0,
            "name": "jd-zhangsan"
        },
        {
            "hostAddress": {
                "host": "172.62.35.230",
                "port": 6666,
                "secure": false
            },
            "pubKey": {
                "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
            },
            "id": 1,
            "name": "jd-lisi"
        }
    ],
    "success": true
  });

  res.send({
    "data": [
        {
            "hostAddress": {
                "host": "172.62.35.230",
                "port": 6666,
                "secure": false
            },
            "pubKey": {
                "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
            },
            "id": 0,
            "name": "jd-zhangsan"
        },
        {
            "hostAddress": {
                "host": "172.62.35.230",
                "port": 6666,
                "secure": false
            },
            "pubKey": {
                "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
            },
            "id": 1,
            "name": "jd-lisi"
        }
    ],
    "success": true
  });
});
// 账本信息
router.get(`/ledger/*`, function(req, res) {
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
      "data": {
          "adminInfo": {
              "metadata": {
                  "participantsHash": {
                      "value": "F4evU3YyKryMCBNsrPg7NwBz1NX"
                  },
                  "seed": "amQ=",
                  "setting": {
                      "consensusSetting": {
                          "hostSettingValue": "Z2V0SG9zdFNldHRpbmdWYWx1ZQ==",
                          "systemSettingValue": "Z2V0U3lzdGVtU2V0dGluZ1ZhbHVl"
                      },
                      "cryptoSetting": {
                          "autoVerifyHash": false,
                          "hashAlgorithm": "SHA256"
                      }
                  }
              },
              "participantCount": 1234
          },
          "hash": {
              "value": "3uqhFboGY1M"
          },
          "latestBlock": {
              "adminAccountHash": {
                  "value": "SpXTn"
              },
              "contractAccountSetHash": {
                  "value": "SpXTq"
              },
              "dataAccountSetHash": {
                  "value": "SpXTo"
              },
              "hash": {
                  "value": "fPcnPW1xx"
              },
              "height": 1000,
              "previousHash": {
                  "value": "2y1mCD6"
              },
              "transactionSetHash": {
                  "value": "3vZUqf6yrKn"
              },
              "userAccountSetHash": {
                  "value": "SpXTp"
              }
          },
          "latestBlockHash": {
              "value": "4BoCfJESYPMpDBZVNgKN1j9vuD"
          },
          "latestBlockHeight": 26266,
          "nextBlockEditor": {}
      },
      "success": true
    });
  
    res.send({
      "data": {
          "adminInfo": {
              "metadata": {
                  "participantsHash": {
                      "value": "F4evU3YyKryMCBNsrPg7NwBz1NX"
                  },
                  "seed": "amQ=",
                  "setting": {
                      "consensusSetting": {
                          "hostSettingValue": "Z2V0SG9zdFNldHRpbmdWYWx1ZQ==",
                          "systemSettingValue": "Z2V0U3lzdGVtU2V0dGluZ1ZhbHVl"
                      },
                      "cryptoSetting": {
                          "autoVerifyHash": false,
                          "hashAlgorithm": "SHA256"
                      }
                  }
              },
              "participantCount": 1234
          },
          "hash": {
              "value": "3uqhFboGY1M"
          },
          "latestBlock": {
              "adminAccountHash": {
                  "value": "SpXTn"
              },
              "contractAccountSetHash": {
                  "value": "SpXTq"
              },
              "dataAccountSetHash": {
                  "value": "SpXTo"
              },
              "hash": {
                  "value": "fPcnPW1xx"
              },
              "height": 1000,
              "previousHash": {
                  "value": "2y1mCD6"
              },
              "transactionSetHash": {
                  "value": "3vZUqf6yrKn"
              },
              "userAccountSetHash": {
                  "value": "SpXTp"
              }
          },
          "latestBlockHash": {
              "value": "4BoCfJESYPMpDBZVNgKN1j9vuD"
          },
          "latestBlockHeight": 26266,
          "nextBlockEditor": {}
      },
      "success": true
    });
});
// 区块列表
router.get('/blocks/*', function(req, res) {
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
    "data": [
        {
            "adminAccountHash": {
                "value": "SpXTn"
            },
            "contractAccountSetHash": {
                "value": "SpXTq"
            },
            "dataAccountSetHash": {
                "value": "SpXTo"
            },
            "hash": {
                "value": "fPcnPW1xx"
            },
            "ledgerHash": {
                "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
            },
            "previousHash": {
                "value": "2y1mCD6"
            },
            "transactionSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "userAccountSetHash": {
                "value": "SpXTp"
            },
            "height": 0
        },
        {
            "adminAccountHash": {
                "value": "SpXTn"
            },
            "contractAccountSetHash": {
                "value": "SpXTq"
            },
            "dataAccountSetHash": {
                "value": "SpXTo"
            },
            "hash": {
                "value": "fPcnPW1xx"
            },
            "ledgerHash": {
                "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
            },
            "previousHash": {
                "value": "2y1mCD6"
            },
            "transactionSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "userAccountSetHash": {
                "value": "SpXTp"
            },
            "height": 0
        },
        {
            "adminAccountHash": {
                "value": "SpXTn"
            },
            "contractAccountSetHash": {
                "value": "SpXTq"
            },
            "dataAccountSetHash": {
                "value": "SpXTo"
            },
            "hash": {
                "value": "fPcnPW1xx"
            },
            "ledgerHash": {
                "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
            },
            "previousHash": {
                "value": "2y1mCD6"
            },
            "transactionSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "userAccountSetHash": {
                "value": "SpXTp"
            },
            "height": 0
        },
        {
            "adminAccountHash": {
                "value": "SpXTn"
            },
            "contractAccountSetHash": {
                "value": "SpXTq"
            },
            "dataAccountSetHash": {
                "value": "SpXTo"
            },
            "hash": {
                "value": "fPcnPW1xx"
            },
            "ledgerHash": {
                "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
            },
            "previousHash": {
                "value": "2y1mCD6"
            },
            "transactionSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "userAccountSetHash": {
                "value": "SpXTp"
            },
            "height": 0
        }
    ],
    "success": true
  });

  res.send({
    "data": [
        {
            "adminAccountHash": {
                "value": "SpXTn"
            },
            "contractAccountSetHash": {
                "value": "SpXTq"
            },
            "dataAccountSetHash": {
                "value": "SpXTo"
            },
            "hash": {
                "value": "fPcnPW1xx"
            },
            "ledgerHash": {
                "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
            },
            "previousHash": {
                "value": "2y1mCD6"
            },
            "transactionSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "userAccountSetHash": {
                "value": "SpXTp"
            },
            "height": 0
        },
        {
            "adminAccountHash": {
                "value": "SpXTn"
            },
            "contractAccountSetHash": {
                "value": "SpXTq"
            },
            "dataAccountSetHash": {
                "value": "SpXTo"
            },
            "hash": {
                "value": "fPcnPW1xx"
            },
            "ledgerHash": {
                "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
            },
            "previousHash": {
                "value": "2y1mCD6"
            },
            "transactionSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "userAccountSetHash": {
                "value": "SpXTp"
            },
            "height": 0
        },
        {
            "adminAccountHash": {
                "value": "SpXTn"
            },
            "contractAccountSetHash": {
                "value": "SpXTq"
            },
            "dataAccountSetHash": {
                "value": "SpXTo"
            },
            "hash": {
                "value": "fPcnPW1xx"
            },
            "ledgerHash": {
                "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
            },
            "previousHash": {
                "value": "2y1mCD6"
            },
            "transactionSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "userAccountSetHash": {
                "value": "SpXTp"
            },
            "height": 0
        },
        {
            "adminAccountHash": {
                "value": "SpXTn"
            },
            "contractAccountSetHash": {
                "value": "SpXTq"
            },
            "dataAccountSetHash": {
                "value": "SpXTo"
            },
            "hash": {
                "value": "fPcnPW1xx"
            },
            "ledgerHash": {
                "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
            },
            "previousHash": {
                "value": "2y1mCD6"
            },
            "transactionSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "userAccountSetHash": {
                "value": "SpXTp"
            },
            "height": 0
        }
    ],
    "success": true
  });
});
// 区块高度
router.get('/block/height/*/*', function(req, res) {
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
    "data": {
        "height": 12358,
        "adminAccountHash": {
            "value": "SpXTn"
        },
        "userAccountSetHash": {
            "value": "SpXTp"
        },
        "hash": {
            "value": "fPcnPW1xx"
        },
        "previousHash": {
            "value": "2y1mCD6"
        },
        "transactionSetHash": {
            "value": "3vZUqf6yrKn"
        },
        "contractAccountSetHash": {
            "value": "SpXTq"
        },
        "dataAccountSetHash": {
            "value": "SpXTo"
        },
        "ledgerHash": {
            "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
        }
    },
    "success": true
  });

  res.send({
    "data": {
        "height": 12358,
        "adminAccountHash": {
            "value": "SpXTn"
        },
        "userAccountSetHash": {
            "value": "SpXTp"
        },
        "hash": {
            "value": "fPcnPW1xx"
        },
        "previousHash": {
            "value": "2y1mCD6"
        },
        "transactionSetHash": {
            "value": "3vZUqf6yrKn"
        },
        "contractAccountSetHash": {
            "value": "SpXTq"
        },
        "dataAccountSetHash": {
            "value": "SpXTo"
        },
        "ledgerHash": {
            "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
        }
    },
    "success": true
  });
});

// 区块哈希
router.get('/block/hash/*/*', function(req, res) {
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
    "data": {
        "hash": {
            "value": "fPcnPW1xx"
        },
        "adminAccountHash": {
            "value": "SpXTn"
        },
        "contractAccountSetHash": {
            "value": "SpXTq"
        },
        "height": 12359,
        "transactionSetHash": {
            "value": "3vZUqf6yrKn"
        },
        "dataAccountSetHash": {
            "value": "SpXTo"
        },
        "ledgerHash": {
            "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
        },
        "previousHash": {
            "value": "2y1mCD6"
        },
        "userAccountSetHash": {
            "value": "SpXTp"
        }
    },
    "success": true
  });

  res.send({
    "data": {
        "hash": {
            "value": "fPcnPW1xx"
        },
        "adminAccountHash": {
            "value": "SpXTn"
        },
        "contractAccountSetHash": {
            "value": "SpXTq"
        },
        "height": 12359,
        "transactionSetHash": {
            "value": "3vZUqf6yrKn"
        },
        "dataAccountSetHash": {
            "value": "SpXTo"
        },
        "ledgerHash": {
            "value": "6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu"
        },
        "previousHash": {
            "value": "2y1mCD6"
        },
        "userAccountSetHash": {
            "value": "SpXTp"
        }
    },
    "success": true
  });
});

// 交易列表
router.get('/txs/height/*/*/*/*', function(req, res) {
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
    "success": true,
    "data": [
        {
            "adminAccountHash": {
                "value": "2y1mCD6"
            },
            "dataAccountSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "contractAccountSetHash": {
                "value": "9h2UYTxc"
            },
            "hash": {
                "value": "DuQMsm4j3GeZ"
            },
            "transactionContent": {
                "ledgerHash": {
                    "value": "6GvM9haSTBvxaYp3qGQJJd1yADjQ575e9pTGTLgEnnmZr"
                },
                "operations": [
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "324wS957YQXo7vh3kz8fWZFyUQxYTfK1pXD"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    }
                ],
                "hash": {
                    "value": "fH9d8BYxU"
                }
            },
            "userAccountSetHash": {
                "value": "fPcnPW1xx"
            },
            "endpointSignatures": [
                {
                    "pubKey": {
                        "value": "S76SHyu8p164"
                    },
                    "digest": {
                        "value": "emhhbmdzYW4="
                    }
                }
            ],
            "nodeSignatures": [
                {
                    "pubKey": {
                        "value": "S76SHz8DsfNc"
                    },
                    "digest": {
                        "value": "d2FuZ3d1"
                    }
                }
            ],
            "executionState": "SUCCESS",
            "blockHeight": 12358
        },
        {
            "adminAccountHash": {
                "value": "2y1mCD6"
            },
            "dataAccountSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "contractAccountSetHash": {
                "value": "9h2UYTxc"
            },
            "hash": {
                "value": "DuQMsm4j3GeZ"
            },
            "transactionContent": {
                "ledgerHash": {
                    "value": "6GvM9haSTBvxaYp3qGQJJd1yADjQ575e9pTGTLgEnnmZr"
                },
                "operations": [
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "324wS957YQXo7vh3kz8fWZFyUQxYTfK1pXD"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    }
                ],
                "hash": {
                    "value": "fH9d8BYxU"
                }
            },
            "userAccountSetHash": {
                "value": "fPcnPW1xx"
            },
            "endpointSignatures": [
                {
                    "pubKey": {
                        "value": "S76SHyu8p164"
                    },
                    "digest": {
                        "value": "emhhbmdzYW4="
                    }
                }
            ],
            "nodeSignatures": [
                {
                    "pubKey": {
                        "value": "S76SHz8DsfNc"
                    },
                    "digest": {
                        "value": "d2FuZ3d1"
                    }
                }
            ],
            "executionState": "SUCCESS",
            "blockHeight": 12358
        }
    ]
  });

  res.send({
    "success": true,
    "data": [
        {
            "adminAccountHash": {
                "value": "2y1mCD6"
            },
            "dataAccountSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "contractAccountSetHash": {
                "value": "9h2UYTxc"
            },
            "hash": {
                "value": "DuQMsm4j3GeZ"
            },
            "transactionContent": {
                "ledgerHash": {
                    "value": "6GvM9haSTBvxaYp3qGQJJd1yADjQ575e9pTGTLgEnnmZr"
                },
                "operations": [
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "324wS957YQXo7vh3kz8fWZFyUQxYTfK1pXD"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    }
                ],
                "hash": {
                    "value": "fH9d8BYxU"
                }
            },
            "userAccountSetHash": {
                "value": "fPcnPW1xx"
            },
            "endpointSignatures": [
                {
                    "pubKey": {
                        "value": "S76SHyu8p164"
                    },
                    "digest": {
                        "value": "emhhbmdzYW4="
                    }
                }
            ],
            "nodeSignatures": [
                {
                    "pubKey": {
                        "value": "S76SHz8DsfNc"
                    },
                    "digest": {
                        "value": "d2FuZ3d1"
                    }
                }
            ],
            "executionState": "SUCCESS",
            "blockHeight": 12358
        },
        {
            "adminAccountHash": {
                "value": "2y1mCD6"
            },
            "dataAccountSetHash": {
                "value": "3vZUqf6yrKn"
            },
            "contractAccountSetHash": {
                "value": "9h2UYTxc"
            },
            "hash": {
                "value": "DuQMsm4j3GeZ"
            },
            "transactionContent": {
                "ledgerHash": {
                    "value": "6GvM9haSTBvxaYp3qGQJJd1yADjQ575e9pTGTLgEnnmZr"
                },
                "operations": [
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "324wS957YQXo7vh3kz8fWZFyUQxYTfK1pXD"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    },
                    {
                        "writeSet": [
                            {
                                "key": "Name",
                                "value": "QUFB",
                                "expectedVersion": 25
                            }
                        ],
                        "accountAddress": "undefined"
                    }
                ],
                "hash": {
                    "value": "fH9d8BYxU"
                }
            },
            "userAccountSetHash": {
                "value": "fPcnPW1xx"
            },
            "endpointSignatures": [
                {
                    "pubKey": {
                        "value": "S76SHyu8p164"
                    },
                    "digest": {
                        "value": "emhhbmdzYW4="
                    }
                }
            ],
            "nodeSignatures": [
                {
                    "pubKey": {
                        "value": "S76SHz8DsfNc"
                    },
                    "digest": {
                        "value": "d2FuZ3d1"
                    }
                }
            ],
            "executionState": "SUCCESS",
            "blockHeight": 12358
        }
    ]
  });
});

// 交易哈希
router.get('/tx/*/*', function(req, res) {
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
      "success": true,
      "data": {
          "userAccountSetHash": {
              "value": "fPcnPW1xx"
          },
          "transactionContent": {
              "hash": {
                  "value": "fH9d8BYxU"
              },
              "ledgerHash": {
                  "value": "6EqXXS9c1njm6XPorwgstGLd1rdAywbQKrTfoaxe4SYY9"
              },
              "operations": [
                  {
                      "accountAddress": "31xnWp5RYLThS47S6yfwqbUW3toZrw5Mm3t",
                      "writeSet": [{
                          "expectedVersion": 25,
                          "key": "Name",
                          "value": "QUFB"
                      }]
                  }, {
                      "addressSignature": {
                          "digest": {
                              "algorithm": "ED25519",
                              "rawDigest": "d2FuZ3d1"
                          },
                          "pubKey": {
                              "value": "6gtyw9HjZbi"
                          }
                      },
                      "chainCode": "emhhbmdzYW4=",
                      "contractID": {
                          "address": "31kiRWCxNm8tYxhFK5wnDp3wNxLCuiVyDA7",
                          "pubKey": {
                              "value": "KXywstVY1tEAgEsc7kox48L"
                          }
                      }
                  }, {
                      "args": "YXJncw==",
                      "contractAddress": "contract-address",
                      "event": "contract-event"
                  }, {
                      "accountID": {
                          "address": "31r5f9D8kCxkiat2GvRJfjNi1fnFvaWaBEu",
                          "pubKey": {
                              "value": "5CYw7ztKJRxVt6Mfgz6vSQ"
                          }
                      },
                      "addressSignature": {
                          "digest": {
                              "algorithm": "ED25519",
                              "rawDigest": "emhhb2xpdQ=="
                          },
                          "pubKey": {
                              "value": "6gtyw9HjZbi"
                          }
                      }
                  }, {
                      "userID": {
                          "address": "321ZeecJ99N7RJGSHkRqkfBZDEAxRMHd6d5",
                          "pubKey": {
                              "value": "3qHAWiGwaF6FU2o7Lg"
                          }
                      }
                  }
              ]
          },
          "endpointSignatures": [
              {
                  "pubKey": {
                      "value": "S76SHyu8p164"
                  },
                  "digest": {
                      "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
                  }
              },
              {
                  "pubKey": {
                      "value": "S76SHyu8p164"
                  },
                  "digest": {
                      "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
                  }
              }
          ],
          "dataAccountSetHash": {
              "value": "3vZUqf6yrKn"
          },
          "executionState": "SUCCESS",
          "nodeSignatures": [
              {
                  "digest": {
                      "value": "d2FuZ3d1"
                  },
                  "pubKey": {
                      "value": "S76SHz8DsfNc"
                  }
              },
              {
                  "digest": {
                      "value": "d2FuZ3d1"
                  },
                  "pubKey": {
                      "value": "S76SHz8DsfNc"
                  }
              }
          ],
          "contractAccountSetHash": {
              "value": "9h2UYTxc"
          },
          "blockHeight": 123456,
          "hash": {
              "value": "DuQMsm4j3GeZ"
          },
          "adminAccountHash": {
              "value": "2y1mCD6"
          }
      }
    });
  
    res.send({
      "success": true,
      "data": {
          "userAccountSetHash": {
              "value": "fPcnPW1xx"
          },
          "transactionContent": {
              "hash": {
                  "value": "fH9d8BYxU"
              },
              "ledgerHash": {
                  "value": "6EqXXS9c1njm6XPorwgstGLd1rdAywbQKrTfoaxe4SYY9"
              },
              "operations": [
                  {
                      "accountAddress": "31xnWp5RYLThS47S6yfwqbUW3toZrw5Mm3t",
                      "writeSet": [{
                          "expectedVersion": 25,
                          "key": "Name",
                          "value": "QUFB"
                      }]
                  }, {
                      "addressSignature": {
                          "digest": {
                              "algorithm": "ED25519",
                              "rawDigest": "d2FuZ3d1"
                          },
                          "pubKey": {
                              "value": "6gtyw9HjZbi"
                          }
                      },
                      "chainCode": "emhhbmdzYW4=",
                      "contractID": {
                          "address": "31kiRWCxNm8tYxhFK5wnDp3wNxLCuiVyDA7",
                          "pubKey": {
                              "value": "KXywstVY1tEAgEsc7kox48L"
                          }
                      }
                  }, {
                      "args": "YXJncw==",
                      "contractAddress": "contract-address",
                      "event": "contract-event"
                  }, {
                      "accountID": {
                          "address": "31r5f9D8kCxkiat2GvRJfjNi1fnFvaWaBEu",
                          "pubKey": {
                              "value": "5CYw7ztKJRxVt6Mfgz6vSQ"
                          }
                      },
                      "addressSignature": {
                          "digest": {
                              "algorithm": "ED25519",
                              "rawDigest": "emhhb2xpdQ=="
                          },
                          "pubKey": {
                              "value": "6gtyw9HjZbi"
                          }
                      }
                  }, {
                      "userID": {
                          "address": "321ZeecJ99N7RJGSHkRqkfBZDEAxRMHd6d5",
                          "pubKey": {
                              "value": "3qHAWiGwaF6FU2o7Lg"
                          }
                      }
                  }
              ]
          },
          "endpointSignatures": [
              {
                  "pubKey": {
                      "value": "S76SHyu8p164"
                  },
                  "digest": {
                      "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
                  }
              },
              {
                  "pubKey": {
                      "value": "S76SHyu8p164"
                  },
                  "digest": {
                      "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
                  }
              }
          ],
          "dataAccountSetHash": {
              "value": "3vZUqf6yrKn"
          },
          "executionState": "SUCCESS",
          "nodeSignatures": [
              {
                  "digest": {
                      "value": "d2FuZ3d1"
                  },
                  "pubKey": {
                      "value": "S76SHz8DsfNc"
                  }
              },
              {
                  "digest": {
                      "value": "d2FuZ3d1"
                  },
                  "pubKey": {
                      "value": "S76SHz8DsfNc"
                  }
              }
          ],
          "contractAccountSetHash": {
              "value": "9h2UYTxc"
          },
          "blockHeight": 123456,
          "hash": {
              "value": "DuQMsm4j3GeZ"
          },
          "adminAccountHash": {
              "value": "2y1mCD6"
          }
      }
    });
});

// 账本哈希
router.get('/hash/all', function(req, res) {
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
        "data": [
            {
                "value": "67nubBh1nBtv9otJTkWw89WXSq7XnxshL74u33f5ipNYS"
            },
            {
                "value": "67nubBh1nBtv9otJTkWw89WXSq7XnxshL74u33f5ipNYSa"
            }
        ],
        "success": true
    });
  
    res.send({
        "data": [
            {
                "value": "67nubBh1nBtv9otJTkWw89WXSq7XnxshL74u33f5ipNYS"
            },
            {
                "value": "67nubBh1nBtv9otJTkWw89WXSq7XnxshL74u33f5ipNYSa"
            }
        ],
        "success": true
    });
});

// 用户身份
router.get('/user/*/*', function(req, res) {
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
      "data": {
        "address": "www.jd.com",
        "pubKey": {
          "value": "sR4AF"
        }
      },
      "success": true
    });
  
    res.send({
      "data": {
        "address": "www.jd.com",
        "pubKey": {
          "value": "sR4AF"
        }
      },
      "success": true
    });
});

// 合约账户
router.get('/contract/*/*', function(req, res) {
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
      "data": {
        "chaincodeVersion": -1,
        "address": "www.jd.com",
        "pubKey": {
          "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
        }
      },
      "success": true
    });
  
    res.send({
      "data": {
        "chaincodeVersion": -1,
        "address": "www.jd.com",
        "pubKey": {
          "value": "UUi8Ku8aypHYnNkJRuFnkEYSuXT"
        }
      },
      "success": true
    });
});


module.exports = router;


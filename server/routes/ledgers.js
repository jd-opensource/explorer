'use strict';

const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

// 2 账本
// 2.2 获取账本列表
// GET /ledgers?fromIndex={start_index}&count={count}
router.get('/', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": [
      {
        "value": "657TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs"
      },
      {
        "value": "357TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs"
      },
    ],
  });

  res.send(ret);
});

// 3 区块
// 3.1 获取最新区块
// GET /ledgers/{ledger}/blocks/latest
router.get('/:ledger/blocks/latest', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": {
      "ledgerHash": {
        "value": "657TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs"
      },
      "previousHash": {
        "value": "6EJZnMc9464DCSU2kgi96RyngEv8YeEfVoJNhH3yZ2v5T"
      },
      "transactionSetHash": {
        "value": "6LmZtDpMM7xE8FPChACEmLj1PLhfaoVM2rEHRsrV3ohPN"
      },
      "userAccountSetHash": {
        "value": "67jx7SctrwdSczxxuYjwBocA8fER7V8qcRZUzWamSav5p"
      },
      "contractAccountSetHash": {
        "value": "67ftaBhPDez24NEB9wiiTM3SNcn1XFz5rb7boYhpbbLXN"
      },
      "adminAccountHash": {
        "value": "69KEFp9m5iFyAiyGmJ2qPcVxuT79gMChMf9JkStBZe8aa"
      },
      "dataAccountSetHash": {
        "value": "6LB9gosVWEPG3uvWXkxTcWq22mcwMHVehbiXkavFtr5fZ"
      },
      "hash": {
        "value": "67XsKWgqZTBz1NsytKGpyNWHMbMRENWcBj8PEDYQnWiDL"
      },
      "height": 66
    },
  });

  res.send(ret);
});

// 4 交易
// 4.1 获取账本交易总数
// GET /ledgers/{ledger}/txs/count
router.get('/:ledger/txs/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": 88
  });

  res.send(ret);
});

// 5 用户
// 5.1 获取用户总数
// GET /ledgers/{ledger}/users/count
router.get('/:ledger/users/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": 4
  });

  res.send(ret);
});

// 6 数据账户
// 6.3 获取账户总数
// GET /ledgers/{ledger}/accounts/count
router.get('/:ledger/accounts/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": 18
  });

  res.send(ret);
});

// 7 搜索
// 7.1 搜索区块链
// GET /ledgers/{ledger}/all/search?keyword={keyword}&fromIndex={start_index}&count={count}
router.get('/:ledger/all/search', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": {
      "blocks": [
        {
        "hash": "6D5MJZnybT69bXET5QdCZdLGT16rZBJEjxLkANmDuykcb",
        }
      ],
      "txs":[
        {
          "hash": "6L3ehswCmC1jqBfvGJP9vaPx8qxkLsieu2aRgYepmkiw3",
        }
      ],
      "users": [
        {
        "address": "5SmAGKgmXyj5VsVvJgHbYCJ67iTizwSkNpw1",
        "publicKey": "mb97eG4bba2EjrgjXYiD9chAstjg4HaNuV5xgCtSHc5TeB"
        }
      ],
      "accounts": [
        {
          "address": "5Sm5VJMc9eMmpFjA1drCdnrjfVUvRhsi8eAw",
          "publicKey": "mb8CpWQeFVrZG9qe4yi6mngtvGg1yzeafaPrgYK2vXQp2H"
        }
      ],
      "contracts": [
        {
          "address": "5Sm2AU76zG87TyQuDHgMYYB5nEAd4hggEpxW",
          "publicKey": "maxTXMJHviDWiYKfkaxdTciHeXPDDmGesMWfzV7iip2VxH"
        }
      ],
    },
  });

  res.send(ret);
});

// 8 合约
// 8.3 获取合约总数
// GET /ledgers/{ledger}/contracts/count
router.get('/:ledger/contracts/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": 27
  });

  res.send(ret);
});

module.exports = router;
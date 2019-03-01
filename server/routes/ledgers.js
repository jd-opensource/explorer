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
      "height": 666
    },
  });

  res.send(ret);
});
// 3.2 根据区块哈希获取区块详细信息
// GET /ledgers/{ledger}/blocks/hash/{block_hash}
router.get('/:ledger/blocks/hash/:block_hash', function(req, res) {
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
      "height": 666
    },
  });

  res.send(ret);
});
// 3.3 根据区块高度获取区块详细信息
// GET /ledgers/{ledger}/blocks/height/{block_height}
router.get('/:ledger/blocks/height/:block_height', function(req, res) {
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
      "height": 666
    },
  });

  res.send(ret);
});
//3.5 根据哈希查询区块
// GET ledgers/{ledger}/blocks/search?keyword={keyword}&fromIndex={start_index}&count={count}
router.get('/:ledger/blocks/search', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": {
      "blocks": [
        {
          "hash": "6D5MJZnybT69bXET5QdCZdLGT16rZBJEjxLkANmDuykcb"
        }
      ],
      "height": 66,
      "txCount":123
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
// 4.2 根据区块高度查询区块内的交易数量
// GET /ledgers/{ledger}/blocks/height/{block_height}/txs/additional-count
router.get('/:ledger//blocks/height/:block_height/txs/additional-count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": 88
  });

  res.send(ret);
});
// 4.3 根据区块哈希查询区块内的交易数量
// GET /ledgers/{ledger}/blocks/hash/{block_hash}/txs/additional-count
router.get('/:ledger//blocks/hash/:block_hash/txs/additional-count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": 88
  });

  res.send(ret);
});
// 4.4 获取指定高度的区块交易列表
// GET /ledgers/{ledger}/blocks/height/{height}/txs?fromIndex={start_index}&count={count}
router.get('/:ledger/blocks/height/:height/txs', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": [
      {
        "blockHeight": 1,
        "executionState": "SUCCESS",
        "transactionContent": {
          "ledgerHash": {
            "value": "657TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs"
          },
          "operations": [
            {
              "userID": {
                "address": {
                  "value": "5SmBgzsrnY6u9Y7DgSSkXfTkCgp83hiFin3v"
                },
                "pubKey": {
                  "value": "mb5kukaqjWtXyAerfHU1JDtVwabSeBU5c3khMZbNh7R8VJ"
                }
              }
            },
            {
              "accountID": {
                "address": {
                  "value": "5SmA98VknTbZ1Z7fmbNPHBuN2pbD89ogy8Ha"
                },
                "pubKey": {
                  "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
                }
              }
            },
            {
              "contractID": {
                "address": {
                  "value": "5SmA98VknTbZ1Z7fmbNPHBuN2pbD89ogy8Ha"
                },
                "pubKey": {
                  "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
                }
              },
              "chainCode": "----------"
            },
            {
              "contractAddress": {
                "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
              },
              "event": "----------",
              "args": "----------"
            },
            {
              "writeSet": [{
                "key": "jdchain",
                "value": {
                  "type": "TEXT",
                  "value": {
                    "value": "----------"
                  }
                },
                "expectedVersion": 0
              }],
              "accountAddress": {
                "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
              }
            }
          ],
          "hash": {
            "value": "6BLtM1agb7ERKoN5AJgZKiTjzdS7BpjgzQNYK8ZeDqotA"
          }
        },
        "endpointSignatures": [
          {
            "digest": {
              "value": "42pbfM5YKnf39Gitr4UsjTCzhhnJjwNyi8MnLFYgP4VKewTLzHitzArHEMrCt3hZYUe5ex9XvqtmiCoWpeAbdc31F"
            },
            "pubKey": {
              "value": "mb5kbwzACnhK9P1dVxgMPB2ySJLFyJKQbHpH7T9oRK3LpS"
            }
          }
        ],
        "nodeSignatures": [
          {
            "digest": {
              "value": "66SQ95SbDaApAJhN2NsFx5sfAQTxsWhMW26D5iPqXc1jZU9rJEhRnqT1nzt62ZAcCvsfrjEsay3MxqXYA5tWPoA2U"
            },
            "pubKey": {
              "value": "mb5kbwzACnhK9P1dVxgMPB2ySJLFyJKQbHpH7T9oRK3LpS"
            }
          }
        ]
      }
    ],
    "success": true
  });

  res.send(ret);
});
// 4.5 获取指定哈希的区块的交易列表
// GET /ledgers/{ledger}/blocks/hash/{block_hash}/txs?fromIndex={start_index}&count={count}
router.get('/:ledger/blocks/hash/:block_hash/txs', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": [
      {
        "blockHeight": 1,
        "executionState": "SUCCESS",
        "transactionContent": {
          "ledgerHash": {
            "value": "657TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs"
          },
          "operations": [
            {
              "userID": {
                "address": {
                  "value": "5SmBgzsrnY6u9Y7DgSSkXfTkCgp83hiFin3v"
                },
                "pubKey": {
                  "value": "mb5kukaqjWtXyAerfHU1JDtVwabSeBU5c3khMZbNh7R8VJ"
                }
              }
            },
            {
              "accountID": {
                "address": {
                  "value": "5SmA98VknTbZ1Z7fmbNPHBuN2pbD89ogy8Ha"
                },
                "pubKey": {
                  "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
                }
              }
            },
            {
              "contractID": {
                "address": {
                  "value": "5SmA98VknTbZ1Z7fmbNPHBuN2pbD89ogy8Ha"
                },
                "pubKey": {
                  "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
                }
              },
              "chainCode": "----------"
            },
            {
              "contractAddress": {
                "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
              },
              "event": "----------",
              "args": "----------"
            },
            {
              "writeSet": [{
                "key": "jdchain",
                "value": {
                  "type": "TEXT",
                  "value": {
                    "value": "----------"
                  }
                },
                "expectedVersion": 0
              }],
              "accountAddress": {
                "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
              }
            }
          ],
          "hash": {
            "value": "6BLtM1agb7ERKoN5AJgZKiTjzdS7BpjgzQNYK8ZeDqotA"
          }
        },
        "endpointSignatures": [
          {
            "digest": {
              "value": "42pbfM5YKnf39Gitr4UsjTCzhhnJjwNyi8MnLFYgP4VKewTLzHitzArHEMrCt3hZYUe5ex9XvqtmiCoWpeAbdc31F"
            },
            "pubKey": {
              "value": "mb5kbwzACnhK9P1dVxgMPB2ySJLFyJKQbHpH7T9oRK3LpS"
            }
          }
        ],
        "nodeSignatures": [
          {
            "digest": {
              "value": "66SQ95SbDaApAJhN2NsFx5sfAQTxsWhMW26D5iPqXc1jZU9rJEhRnqT1nzt62ZAcCvsfrjEsay3MxqXYA5tWPoA2U"
            },
            "pubKey": {
              "value": "mb5kbwzACnhK9P1dVxgMPB2ySJLFyJKQbHpH7T9oRK3LpS"
            }
          }
        ]
      }
    ],
    "success": true
  });

  res.send(ret);
});
// 4.6 获取交易详细信息
// GET /ledgers/{ledger}/txs/hash/{tx_hash}
router.get('/:ledger/txs/hash/:tx_hash', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "transactionContent": {
        "ledgerHash": {
          "value": "657TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs"
        },
        "operations": [
          {
            "userID": {
              "address": {
                "value": "5SmBgzsrnY6u9Y7DgSSkXfTkCgp83hiFin3v"
              },
              "pubKey": {
                "value": "mb5kukaqjWtXyAerfHU1JDtVwabSeBU5c3khMZbNh7R8VJ"
              }
            }
          },
          {
            "accountID": {
              "address": {
                "value": "5SmA98VknTbZ1Z7fmbNPHBuN2pbD89ogy8Ha"
              },
              "pubKey": {
                "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
              }
            }
          },
          {
            "contractID": {
              "address": {
                "value": "5SmA98VknTbZ1Z7fmbNPHBuN2pbD89ogy8Ha"
              },
              "pubKey": {
                "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
              }
            },
            "chainCode": "----------"
          },
          {
            "contractAddress": {
              "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
            },
            "event": "----------",
            "args": "----------"
          },
          {
            "writeSet": [{
              "key": "jdchain",
              "value": {
                "type": "TEXT",
                "value": {
                  "value": "----------"
                }
              },
              "expectedVersion": 0
            }],
            "accountAddress": {
              "value": "mbC8hzmYBz2SsLLqwoBXAJiGeHrCnByBEvcaUZWscAiPqR"
            }
          }
        ],
        "hash": {
          "value": "6BLtM1agb7ERKoN5AJgZKiTjzdS7BpjgzQNYK8ZeDqotA"
        }
      },
      "endpointSignatures": [
        {
          "digest": {
            "value": "42pbfM5YKnf39Gitr4UsjTCzhhnJjwNyi8MnLFYgP4VKewTLzHitzArHEMrCt3hZYUe5ex9XvqtmiCoWpeAbdc31F"
          },
          "pubKey": {
            "value": "mb5kbwzACnhK9P1dVxgMPB2ySJLFyJKQbHpH7T9oRK3LpS"
          }
        }
      ],
      "nodeSignatures": [
        {
          "digest": {
            "value": "66SQ95SbDaApAJhN2NsFx5sfAQTxsWhMW26D5iPqXc1jZU9rJEhRnqT1nzt62ZAcCvsfrjEsay3MxqXYA5tWPoA2U"
          },
          "pubKey": {
            "value": "mb5kbwzACnhK9P1dVxgMPB2ySJLFyJKQbHpH7T9oRK3LpS"
          }
        }
      ]
    },
    "success": true
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
// 5.2 获取用户列表
// GET /ledgers/{ledger}/users?fromIndex={start_index}&count={count}
router.get('/:ledger/users', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data":[{
      "address": {
        "value": "5SmFzgFtHtpbJwMCsmWTwjNGTk6SeMKU1522"
      },
      "pubKey": {
        "value": "mb5kbwzACnhK9P1dVxgMPB2ySJLFyJKQbHpH7T9oRK3LpS"
      },
      "rootHash": {
        "value": "5SmFzgFtHtpbJwMCsmWTwjNGTk6SeMKU1522"
      }
    }],
    "success": true
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
// 6.1 获取账户列表
// GET /ledgers/{ledger}/accounts?fromIndex={start_index}&count={count}
router.get('/:ledger/accounts', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data":[{
      "address": {
        "value": "5Sm4gWXrNpDWW9Boi4xZCzZMHboRvEDm29Fa"
      },
      "rootHash": {
        "value": "6GiAH2PBRLnoE724ia83bKVijkKsNuNU5danA4AAi5qMM"
      },
      "pubKey": {
        "value": "mavweXqvKGUAJzSxE9S15pV7c7qe9bgUn5R1HwpqmXVTUs"
      }
    }],
    "success": true
  });

  res.send(ret);
});
// 6.3 获取账户总数
// GET /ledgers/{ledger}/accounts/count
router.get('/:ledger/accounts/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data":"18",
    "success": true
  });

  res.send(ret);
});
// 6.6 获取某数据账户KV总数
//   GET /ledgers/{ledger}/accounts/address/{address}/entries/count
router.get('/:ledger//accounts/address/:address/entries/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data":66,
    "success": true
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
// 8.1 获取合约列表
// GET /ledgers/{ledger}/contracts?fromIndex={start_index}&count={count}
router.get('/:ledger/contracts', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": [{
      "address": {
        "value": "5Sm4gWXrNpDWW9Boi4xZCzZMHboRvEDm29Fa"
      },
      "rootHash": {
        "value": "6GiAH2PBRLnoE724ia83bKVijkKsNuNU5danA4AAi5qMM"
      },
      "pubKey": {
        "value": "mavweXqvKGUAJzSxE9S15pV7c7qe9bgUn5R1HwpqmXVTUs"
      }
    }],
  });

  res.send(ret);
});
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
'use strict';

const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

// 2 账本
// 2.1 账本信息
// GET //ledgers/{ledgerHash}/settings
router.get('/:ledgerHash/settings', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": {
        "consensusProtocol": 1,
        "consensusSettings": {
            "commitBlockSettings": {
                "maxDelayMilliSecondsPerBlock": 500,
                "txSizePerBlock": 15
            },
            "nodes": [{
                "address": "LdeP1fLeUnmrQHr4ryGmoQ4ubzAvcrgayUK8U",
                "id": 0,
                "networkAddress": {
                    "host": "127.0.0.1",
                    "port": 8910,
                    "secure": false
                },
                "pubKey": {
                    "value": "7VeRBxpPoCzAS6AavVoe1HGpJsz68kcZEYzN1fkg3GgASvkb"
                }
            }, {
                "address": "LdeP2xKyNFeYhgzDGn5Vq2dndCUNCeLYLyh1k",
                "id": 1,
                "networkAddress": {
                    "host": "127.0.0.1",
                    "port": 8920,
                    "secure": false
                },
                "pubKey": {
                    "value": "7VeRJ9PiL7sCGKc56uckEwvKZnxqk9VfMedanGoKtM4CQ3yM"
                }
            }, {
                "address": "LdeNrvP3Q4NDjjeidcaqKGz3cWotf4qmTZmeK",
                "id": 2,
                "networkAddress": {
                    "host": "127.0.0.1",
                    "port": 8930,
                    "secure": false
                },
                "pubKey": {
                    "value": "7VeRG8n49ocQYEvievU971e7uJMhRPTkLS3qJr4NJBahysYY"
                }
            }, {
                "address": "LdeNisAU3fBAtEfTrdH7fXSYidAbAmBZBeP5c",
                "id": 3,
                "networkAddress": {
                    "host": "127.0.0.1",
                    "port": 8940,
                    "secure": false
                },
                "pubKey": {
                    "value": "7VeRFzWif8yGXa8GRYri7jFLevqryxZTJ6m9NiEUSfUNqKy8"
                }
            }],
            "systemConfigs": [{
                "name": "system.bft",
                "value": "true"
            }, {
                "name": "system.communication.defaultkeys",
                "value": "true"
            }, {
                "name": "system.communication.inQueueSize",
                "value": "500000"
            }, {
                "name": "system.communication.outQueueSize",
                "value": "500000"
            }, {
                "name": "system.communication.useMACs",
                "value": "1"
            }, {
                "name": "system.communication.useSenderThread",
                "value": "true"
            }, {
                "name": "system.communication.useSignatures",
                "value": "0"
            }, {
                "name": "system.debug",
                "value": "0"
            }, {
                "name": "system.servers.num",
                "value": "4"
            }, {
                "name": "system.shutdownhook",
                "value": "true"
            }, {
                "name": "system.totalordermulticast.checkpoint_period",
                "value": "1000"
            }, {
                "name": "system.totalordermulticast.checkpoint_to_disk",
                "value": "false"
            }, {
                "name": "system.totalordermulticast.global_checkpoint_period",
                "value": "120000"
            }, {
                "name": "system.totalordermulticast.highMark",
                "value": "10000"
            }, {
                "name": "system.totalordermulticast.log",
                "value": "true"
            }, {
                "name": "system.totalordermulticast.log_parallel",
                "value": "false"
            }, {
                "name": "system.totalordermulticast.log_to_disk",
                "value": "false"
            }, {
                "name": "system.totalordermulticast.maxbatchsize",
                "value": "400"
            }, {
                "name": "system.totalordermulticast.nonces",
                "value": "10"
            }, {
                "name": "system.totalordermulticast.revival_highMark",
                "value": "10"
            }, {
                "name": "system.totalordermulticast.state_transfer",
                "value": "true"
            }, {
                "name": "system.totalordermulticast.sync_ckp",
                "value": "false"
            }, {
                "name": "system.totalordermulticast.sync_log",
                "value": "false"
            }, {
                "name": "system.totalordermulticast.timeout",
                "value": "2000"
            }, {
                "name": "system.totalordermulticast.timeout_highMark",
                "value": "200"
            }, {
                "name": "system.totalordermulticast.verifyTimestamps",
                "value": "false"
            }, {
                "name": "system.ttp.id",
                "value": "7002"
            }]
        },
        "cryptoSetting": {
            "autoVerifyHash": true,
            "hashAlgorithm": 8216
        },
        "participantNodes": [{
            "address": "LdeP1fLeUnmrQHr4ryGmoQ4ubzAvcrgayUK8U",
            "id": 0,
            "name": "jd.com",
            "pubKey": {
                "value": "7VeRBxpPoCzAS6AavVoe1HGpJsz68kcZEYzN1fkg3GgASvkb"
            }
        }, {
            "address": "LdeP2xKyNFeYhgzDGn5Vq2dndCUNCeLYLyh1k",
            "id": 1,
            "name": "at.com",
            "pubKey": {
                "value": "7VeRJ9PiL7sCGKc56uckEwvKZnxqk9VfMedanGoKtM4CQ3yM"
            }
        }, {
            "address": "LdeNrvP3Q4NDjjeidcaqKGz3cWotf4qmTZmeK",
            "id": 2,
            "name": "bt.com",
            "pubKey": {
                "value": "7VeRG8n49ocQYEvievU971e7uJMhRPTkLS3qJr4NJBahysYY"
            }
        }, {
            "address": "LdeNisAU3fBAtEfTrdH7fXSYidAbAmBZBeP5c",
            "id": 3,
            "name": "xt.com",
            "pubKey": {
                "value": "7VeRFzWif8yGXa8GRYri7jFLevqryxZTJ6m9NiEUSfUNqKy8"
            }
        }],
        "participantsHash": {
            "value": "j5vDDASBGRAynVmopq2q4obNPZmbJMwGnDWsHnSgz9nuS9"
        },
        "seed": "932dfe23-fe23232f-283f32fa-dd32aa76-8322ca2f-56236cda-7136b322-cb323ffe"
    },
    "success": true
  });

  res.send(ret);
});
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
router.get('/:ledger/blocks/height/:block_height/txs/additional-count', function(req, res) {
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
router.get('/:ledger/blocks/hash/:block_hash/txs/additional-count', function(req, res) {
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
// 5.4 用户查询数量
//   GET /ledgers/{ledger}/users/count/search?keyword={keyword}
router.get('/:ledger/users/count/search', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": 4,
    "success": true
  });

  res.send(ret);
});
// 5.5 用户查询
//   GET /ledgers/{ledger}/users/search?keyword={keyword}&fromIndex={start_index}&count={count}
router.get('/:ledger/users/search', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": {
      "users": [
        {
          "address": {
            "value": "5SmAGKgmXyj5VsVvJgHbYCJ67iTizwSkNpw1"
          },
          "pubKey": {
            "value": "mb97eG4bba2EjrgjXYiD9chAstjg4HaNuV5xgCtSHc5TeB"
          },
          "rootHash": {
            "value": "5SmFzgFtHtpbJwMCsmWTwjNGTk6SeMKU1522"
          }
        }
      ]
    },
    "success": true
  });

  res.send(ret);
});
// 6 数据账户
// 6.2 获取账户详细信息
// GET /ledgers/{ledger}/accounts/address/{address}
router.get('/:ledger/accounts/address/:address', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": {
      "address": {
        "value": "5Sm4gWXrNpDWW9Boi4xZCzZMHboRvEDm29Fa"
      },
      "rootHash": {
        "value": "6GiAH2PBRLnoE724ia83bKVijkKsNuNU5danA4AAi5qMM"
      },
      "pubKey": {
        "value": "mavweXqvKGUAJzSxE9S15pV7c7qe9bgUn5R1HwpqmXVTUs"
      }
    },
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
// 6.4 查询数据账户匹配的数量
// GET /ledgers/{ledger}/accounts/count/search?keyword={keyword}
router.get('/:ledger/accounts/count/search', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data":"18",
    "success": true
  });

  res.send(ret);
});
// 6.5 查询数据账户
//   GET /ledgers/{ledger}/accounts/search?keyword={keyword}&fromIndex={start_index}&count={count}
router.get('/:ledger/accounts/search', function(req, res) {
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
// 6.6 获取某数据账户KV总数
//   GET /ledgers/{ledger}/accounts/address/{address}/entries/count
router.get('/:ledger/accounts/address/:address/entries/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data":66,
    "success": true
  });

  res.send(ret);
});
// 6.7 获取某数据账户KV详情
//   GET/POST /ledgers/{ledger}/accounts/address/{address}/entries?fromIndex={start_index}&count={count}
router.get('/:ledger/accounts/address/:address/entries', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": [
      {
        "key": "jd",
        "version": 0,
        "type": "TEXT",
        "value": "www.jd.com"
      },
      {
        "key": "jdchain",
        "version": 0,
        "type": "TEXT",
        "value": "www.blockchain.com"
      }],
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
        "address": {
        "value": "5Sm4gWXrNpDWW9Boi4xZCzZMHboRvEDm29Fa"
        },
        "pubKey": {
        "value": "mavweXqvKGUAJzSxE9S15pV7c7qe9bgUn5R1HwpqmXVTUs"
        }
        }
        ],
      "accounts": [
        {
        "address": {
        "value": "5Sm4gWXrNpDWW9Boi4xZCzZMHboRvEDm29Fa"
        },
        "pubKey": {
        "value": "mavweXqvKGUAJzSxE9S15pV7c7qe9bgUn5R1HwpqmXVTUs"
        }
        }
        ],
      "contracts": [
        {
        "address": {
        "value": "5Sm4gWXrNpDWW9Boi4xZCzZMHboRvEDm29Fa"
        },
        "pubKey": {
        "value": "mavweXqvKGUAJzSxE9S15pV7c7qe9bgUn5R1HwpqmXVTUs"
        }
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
// 8.2 获取合约详细信息
// GET /ledgers/{ledger}/contracts/address/{address}
router.get('/:ledger/contracts/address/:address', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": {
      "address": {
        "value": "5Sm4gWXrNpDWW9Boi4xZCzZMHboRvEDm29Fa"
      },
      "rootHash": {
        "value": "6GiAH2PBRLnoE724ia83bKVijkKsNuNU5danA4AAi5qMM"
      },
      "pubKey": {
        "value": "mavweXqvKGUAJzSxE9S15pV7c7qe9bgUn5R1HwpqmXVTUs"
      }
    },
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
// 8.4 查询指定合约数量
// GET /ledgers/{ledger}/contracts/count/search?keyword={keyword}
router.get('/:ledger/contracts/count/search', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": 27
  });

  res.send(ret);
});
// 8.5 合约查询
//   GET /ledgers/{ledger}/contracts/search?keyword={keyword}&fromIndex={start_index}&count={count}
router.get('/:ledger/contracts/search', function(req, res) {
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
module.exports = router;
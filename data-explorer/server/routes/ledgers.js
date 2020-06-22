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
        "ledgerStructureVersion": 0,
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
      "blockHeight": 0,
      "userAccountSetHash": {
        "value": "j5w9DAFBy1CAtxaSRCZTQSk9yG7baQZ3aF8o3ouaMCPz83"
      },
      "executionState": "SUCCESS",
      "transactionContent": {
        "operations": [{
          "initSetting": {
            "ledgerSeed": "ky3+I/4jIy8oPzL63TKqdoMiyi9WI2zacTazIssyP/4=",
            "consensusProvider": "com.jd.blockchain.consensus.bftsmart.BftsmartConsensusProvider",
            "cryptoSetting": {
              "supportedProviders": [{
                "algorithms": [{
                  "code": -32230,
                  "name": "AES"
                }, null, null, null, null, null, null],
                "name": "com.jd.blockchain.crypto.service.classic.ClassicCryptoService"
              }, {
                "algorithms": [null, {
                  "code": 8195,
                  "name": "SM3"
                }, null],
                "name": "com.jd.blockchain.crypto.service.sm.SMCryptoService"
              }],
              "autoVerifyHash": false,
              "hashAlgorithm": 8216
            },
            "createdTime": 1564640818069,
            "consensusSettings": {},
            "consensusParticipants": [{
              "participantNodeState": "ACTIVED",
              "address": {
                "value": "LdeP3fY7jJbNwL8CiL2wU21AF9unDWQjVEW5w"
              },
              "name": "jd.com",
              "id": 0,
              "pubKey": {
                "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
              }
            }, {
              "participantNodeState": "ACTIVED",
              "address": {
                "value": "LdeNnz88dH6CA6PwkVdn3nFRibUKP3sFT2byG"
              },
              "name": "at.com",
              "id": 1,
              "pubKey": {
                "value": "7VeRBsHM2nsGwP8b2ufRxz36hhNtSqjKTquzoa4WVKWty5sD"
              }
            }, {
              "participantNodeState": "ACTIVED",
              "address": {
                "value": "LdeNmdpT4DiTwLUP9jRQhwdRBRiXeHno456vy"
              },
              "name": "bt.com",
              "id": 2,
              "pubKey": {
                "value": "7VeRAr3dSbi1xatq11ZcF7sEPkaMmtZhV9shonGJWk9T4pLe"
              }
            }, {
              "participantNodeState": "ACTIVED",
              "address": {
                "value": "LdeNekdXMHqyz9Qxc2jDSBnkvvZLbty6pRDdP"
              },
              "name": "xt.com",
              "id": 3,
              "pubKey": {
                "value": "7VeRKoM5RE6iFXr214Hsiic2aoqCQ7MEU1dHQFRnjXQcReAS"
              }
            }]
          }
        }, {
          "userID": {
            "address": {
              "value": "LdeP3fY7jJbNwL8CiL2wU21AF9unDWQjVEW5w"
            },
            "pubKey": {
              "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
            }
          }
        }, {
          "userID": {
            "address": {
              "value": "LdeNnz88dH6CA6PwkVdn3nFRibUKP3sFT2byG"
            },
            "pubKey": {
              "value": "7VeRBsHM2nsGwP8b2ufRxz36hhNtSqjKTquzoa4WVKWty5sD"
            }
          }
        }, {
          "userID": {
            "address": {
              "value": "LdeNmdpT4DiTwLUP9jRQhwdRBRiXeHno456vy"
            },
            "pubKey": {
              "value": "7VeRAr3dSbi1xatq11ZcF7sEPkaMmtZhV9shonGJWk9T4pLe"
            }
          }
        }, {
          "roles": [{
            // "disableLedgerPermissions": ["CONFIGURE_ROLES", "AUTHORIZE_USER_ROLES", "SET_CONSENSUS", "SET_CRYPTO", "REGISTER_PARTICIPANT"],
            // "disableTransactionPermissions": ["DIRECT_OPERATION", "CONTRACT_OPERATION"],
            "disableLedgerPermissions": [],
            "disableTransactionPermissions": [],

            "roleName": "DEFAULT",
            "enableLedgerPermissions": ["REGISTER_USER", "REGISTER_DATA_ACCOUNT", "REGISTER_CONTRACT", "UPGRADE_CONTRACT", "SET_USER_ATTRIBUTES", "WRITE_DATA_ACCOUNT", "APPROVE_TX", "CONSENSUS_TX"],
            "enableTransactionPermissions": ["DIRECT_OPERATION", "CONTRACT_OPERATION"]
          },{
            "disableLedgerPermissions": ["SET_CONSENSUS", "SET_CRYPTO", "REGISTER_PARTICIPANT"],
            "disableTransactionPermissions": ["CONTRACT_OPERATION"],
            "roleName": "CREATETX",
            "enableLedgerPermissions": ["APPROVE_TX", "CONSENSUS_TX"],
            "enableTransactionPermissions": ["DIRECT_OPERATION"]
          }]
        }, {
          "userRolesAuthorizations": [{
            "unauthorizedRoles": ["A", "B"],
            "userAddresses": [{
              "value": "LdeP3fY7jJbNwL8CiL2wU21AF9unDWQjVEW5w"
            }],
            "authorizedRoles": ["DEFAULT", "D"],
            "policy": "UNION"
          }]
        }, {
          "userRolesAuthorizations": [{
            "unauthorizedRoles": ["CREATETX", "C"],
            "userAddresses": [{
              "value": "LdeNnz88dH6CA6PwkVdn3nFRibUKP3sFT2byG"
            }],
            "authorizedRoles": ["A", "M"],
            "policy": "UNION"
          }]
        }, {
          "userRolesAuthorizations": [{
            "unauthorizedRoles": [],
            "userAddresses": [{
              "value": "LdeNmdpT4DiTwLUP9jRQhwdRBRiXeHno456vy"
            }],
            "authorizedRoles": [],
            "policy": "UNION"
          }]
        }, {
          "userRolesAuthorizations": [{
            "unauthorizedRoles": [],
            "userAddresses": [{
              "value": "LdeNekdXMHqyz9Qxc2jDSBnkvvZLbty6pRDdP"
            }],
            "authorizedRoles": [],
            "policy": "UNION"
          }]
        }, {
          "eventAccountID":{
            "address":{
                "value":"LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
            },
            "pubKey":{
                "value":"7VeRPrJgSt4nKqSinLMwHGEWskPiQ5WNqcSj9ximuwLTjKoH"
            }
          }
        }, {
          "eventAddress":{
            "value":"LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
          },
          "events":[
            {
              "sequence":-1,
              "name":"e1",
              "content":{
                "nil":false,
                "bytes":{
                  "value":"C7P9wfY"
                },
                "type":"BYTES",
                "value":"Ynl0ZXM="
              }
            }
          ]
        }],
        "hash": {
          "value": "j5mTxuFAaBejKoRGphTaAWv5A15uSLPP8PUKiggs2NppR9"
        },
        "timestamp": 1564640818069
      },
      "adminAccountHash": {
        "value": "j5jydpPXLPvRc495sd1ZH2GJYUVRqf9FjqArfwnnmgdLju"
      },
      "nodeSignatures": [{
        "digest": {
          "value": "SMGmyCLpRsbY796kxh2S1yRbxaoEtuVB5SbQ8nHaNF4dwzZswELw7ruBT346jAHJRvVtzgxLYmKyX4Sm5Wy8Y7BV5a"
        },
        "pubKey": {
          "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
        }
      }, {
        "digest": {
          "value": "SMGVG3esDr2q7NkjjheYeKxVG98HhfMNAtDgwv8tFnyawZ7H9u9j3bhRYrenUbUkE6SwG2xjJuhMTSKhuSWni85vr6"
        },
        "pubKey": {
          "value": "7VeRBsHM2nsGwP8b2ufRxz36hhNtSqjKTquzoa4WVKWty5sD"
        }
      }, {
        "digest": {
          "value": "SMGzgDa2Qs26jtYt4ijFt71RSgWLVzWZtdJt89RysuvgYxhZqzxXKv1dsccTd5TfG6TksfDoWGUC1LmpTzfMAXNyLD"
        },
        "pubKey": {
          "value": "7VeRAr3dSbi1xatq11ZcF7sEPkaMmtZhV9shonGJWk9T4pLe"
        }
      }, {
        "digest": {
          "value": "SMHyt7NtebZTbU8nw5pHQHB4Voh2pDJeD5qcBHKrZCZMs8H9LGUmA77fUk7L4j1qcGvPnffvQketwiiGnFVjVrFNbe"
        },
        "pubKey": {
          "value": "7VeRKoM5RE6iFXr214Hsiic2aoqCQ7MEU1dHQFRnjXQcReAS"
        }
      }]
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
      },
      "chainCode":"package com.jd.blockchain.contract;\n\nimport com.jd.blockchain.crypto.*;\nimport com.jd.blockchain.ledger.*;\nimport com.jd.blockchain.utils.io.*;\n\n@Contract\npublic class AssetContractImpl implements EventProcessingAwire, AssetContract\n{\n private static final String ASSET_ADDRESS = \"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\";\n private static final String KEY_TOTAL = \"TV_TOTAL\";\n private ContractEventContext eventContext;\n \n @ContractEvent(name = \"transfer-asset\")\n public void transfer(final String fromAddress, final String toAddress, final long amount) {\n System.out.println(\"in AssetContractImpl transfer()\");\n final byte[] args_ = this.eventContext.getArgs();\n if (args_ == null) {\n return;\n }\n final String[] args = new String(args_).split(\"##\");\n if (amount < 0L) {\n throw new ContractException(\"The amount is negative!\");\n }\n if (amount == 0L) {\n return;\n }\n final HashDigest hashDigest = this.eventContext.getCurrentLedgerHash();\n final KVDataEntry[] kvEntries = this.eventContext.getLedger().getDataEntries(hashDigest, \"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\", new String[] { \"TV_TOTAL\", fromAddress, toAddress });\n final KVDataObject currTotal = (KVDataObject)kvEntries[0];\n final KVDataObject fromBalance = (KVDataObject)kvEntries[1];\n final KVDataObject toBalance = (KVDataObject)kvEntries[2];\n System.out.println(new StringBuilder().append(\"currTotal: \").append(currTotal.longValue()).toString());\n if (fromBalance.longValue() - amount < 0L) {\n throw new ContractException(\"Insufficient balance!\");\n }\n final long newFromBalance = fromBalance.longValue() - amount;\n System.out.println(new StringBuilder().append(\"newFromBalance: \").append(newFromBalance).toString());\n long newToBalance;\n if (toBalance.isNil()) {\n newToBalance = amount;\n }\n else {\n newToBalance = toBalance.longValue() + amount;\n }\n System.out.println(new StringBuilder().append(\"newToBalance: \").append(newToBalance).toString());\n final long fromVersion = fromBalance.getVersion();\n final long toVersion = toBalance.getVersion();\n System.out.println(new StringBuilder().append(\"fromVersion = \").append(fromVersion).toString());\n System.out.println(new StringBuilder().append(\"toVersion = \").append(toVersion).toString());\n this.eventContext.getLedger().dataAccount(\"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\").set(fromAddress, newFromBalance, fromVersion);\n this.eventContext.getLedger().dataAccount(\"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\").set(toAddress, newToBalance, toVersion);\n }\n \n public void beforeEvent(final ContractEventContext contractEventContext) {\n this.eventContext = contractEventContext;\n }\n \n public void postEvent(final ContractEventContext contractEventContext, final ContractException e) {\n this.eventContext = null;\n }\n \n public void postEvent(final ContractException e) {\n }\n \n public void postEvent() {\n }\n \n private HashDigest currentLedgerHash() {\n return this.eventContext.getCurrentLedgerHash();\n }\n \n @ContractEvent(name = \"issue-asset\")\n public void issue(final long amount, final String assetHolderAddress) {\n System.out.println(\"in AssetContractImpl2\");\n if (amount < 0L) {\n throw new ContractException(\"The amount is negative!\");\n }\n if (amount == 0L) {\n return;\n }\n final KVDataEntry[] kvEntries = this.eventContext.getLedger().getDataEntries(this.currentLedgerHash(), \"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\", new String[] { \"TV_TOTAL\", assetHolderAddress });\n final KVDataObject currTotal = (KVDataObject)kvEntries[0];\n final long newTotal = currTotal.longValue() + amount;\n this.eventContext.getLedger().dataAccount(\"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\").set(\"TV_TOTAL\", BytesUtils.toBytes(newTotal), currTotal.getVersion());\n final KVDataObject holderAmount = (KVDataObject)kvEntries[1];\n final long newHodlerAmount = holderAmount.longValue() + amount;\n this.eventContext.getLedger().dataAccount(\"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\").set(assetHolderAddress, BytesUtils.toBytes(newHodlerAmount), holderAmount.getVersion()).set(\"K2\", (byte[])null, -1L).set(\"k3\", (byte[])null, 3L);\n }\n}\n",
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
      },
      "chainCode":"package com.jd.blockchain.contract;\n\nimport com.jd.blockchain.crypto.*;\nimport com.jd.blockchain.ledger.*;\nimport com.jd.blockchain.utils.io.*;\n\n@Contract\npublic class AssetContractImpl implements EventProcessingAwire, AssetContract\n{\n private static final String ASSET_ADDRESS = \"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\";\n private static final String KEY_TOTAL = \"TV_TOTAL\";\n private ContractEventContext eventContext;\n \n @ContractEvent(name = \"transfer-asset\")\n public void transfer(final String fromAddress, final String toAddress, final long amount) {\n System.out.println(\"in AssetContractImpl transfer()\");\n final byte[] args_ = this.eventContext.getArgs();\n if (args_ == null) {\n return;\n }\n final String[] args = new String(args_).split(\"##\");\n if (amount < 0L) {\n throw new ContractException(\"The amount is negative!\");\n }\n if (amount == 0L) {\n return;\n }\n final HashDigest hashDigest = this.eventContext.getCurrentLedgerHash();\n final KVDataEntry[] kvEntries = this.eventContext.getLedger().getDataEntries(hashDigest, \"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\", new String[] { \"TV_TOTAL\", fromAddress, toAddress });\n final KVDataObject currTotal = (KVDataObject)kvEntries[0];\n final KVDataObject fromBalance = (KVDataObject)kvEntries[1];\n final KVDataObject toBalance = (KVDataObject)kvEntries[2];\n System.out.println(new StringBuilder().append(\"currTotal: \").append(currTotal.longValue()).toString());\n if (fromBalance.longValue() - amount < 0L) {\n throw new ContractException(\"Insufficient balance!\");\n }\n final long newFromBalance = fromBalance.longValue() - amount;\n System.out.println(new StringBuilder().append(\"newFromBalance: \").append(newFromBalance).toString());\n long newToBalance;\n if (toBalance.isNil()) {\n newToBalance = amount;\n }\n else {\n newToBalance = toBalance.longValue() + amount;\n }\n System.out.println(new StringBuilder().append(\"newToBalance: \").append(newToBalance).toString());\n final long fromVersion = fromBalance.getVersion();\n final long toVersion = toBalance.getVersion();\n System.out.println(new StringBuilder().append(\"fromVersion = \").append(fromVersion).toString());\n System.out.println(new StringBuilder().append(\"toVersion = \").append(toVersion).toString());\n this.eventContext.getLedger().dataAccount(\"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\").set(fromAddress, newFromBalance, fromVersion);\n this.eventContext.getLedger().dataAccount(\"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\").set(toAddress, newToBalance, toVersion);\n }\n \n public void beforeEvent(final ContractEventContext contractEventContext) {\n this.eventContext = contractEventContext;\n }\n \n public void postEvent(final ContractEventContext contractEventContext, final ContractException e) {\n this.eventContext = null;\n }\n \n public void postEvent(final ContractException e) {\n }\n \n public void postEvent() {\n }\n \n private HashDigest currentLedgerHash() {\n return this.eventContext.getCurrentLedgerHash();\n }\n \n @ContractEvent(name = \"issue-asset\")\n public void issue(final long amount, final String assetHolderAddress) {\n System.out.println(\"in AssetContractImpl2\");\n if (amount < 0L) {\n throw new ContractException(\"The amount is negative!\");\n }\n if (amount == 0L) {\n return;\n }\n final KVDataEntry[] kvEntries = this.eventContext.getLedger().getDataEntries(this.currentLedgerHash(), \"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\", new String[] { \"TV_TOTAL\", assetHolderAddress });\n final KVDataObject currTotal = (KVDataObject)kvEntries[0];\n final long newTotal = currTotal.longValue() + amount;\n this.eventContext.getLedger().dataAccount(\"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\").set(\"TV_TOTAL\", BytesUtils.toBytes(newTotal), currTotal.getVersion());\n final KVDataObject holderAmount = (KVDataObject)kvEntries[1];\n final long newHodlerAmount = holderAmount.longValue() + amount;\n this.eventContext.getLedger().dataAccount(\"5Sm1VK2RowVN3GVdicCkGMrwVt4pfjn4SGm3\").set(assetHolderAddress, BytesUtils.toBytes(newHodlerAmount), holderAmount.getVersion()).set(\"K2\", (byte[])null, -1L).set(\"k3\", (byte[])null, 3L);\n }\n}\n",
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

// 事件账户总数
router.get('/:ledger/events/user/accounts/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};
  
    Object.assign(ret, resultData,{
      "success":true,
      "data":84
    });
  
    res.send(ret);
});

// 事件账户
router.get('/:ledger/events/user/accounts', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "success":true,
    "data": [{
      "address":{
          "value":"LdeNu8QG9RuWYTo4zgrn2RsH3FRjubasgsnju"
      },
      "pubKey":{
          "value":"7VeRNQrP1AQnhKJHTWc9xvM4UEXSz47yWTxaV3rJiCNngYBD"
      }
    },
    {
      "address":{
          "value":"LdeP3UQY8ynDVLvFdBWtNqF8n5uS6qvBMe9VX"
      },
      "pubKey":{
          "value":"7VeRBwvf4qhJVHjgpbyX9QeX8H7AhGLUXq8hZcZnscij5Bj7"
      }
    },
    {
      "address":{
          "value":"LdeNpGSucAexG6BrVWc2tLNXEoTDgBHCCibQY"
      },
      "pubKey":{
          "value":"7VeRLaKGCiGj3X6FZA2jSwSxzdCmEK6aai6AnyqsGBsXW8DJ"
      }
    },
    {
      "address":{
          "value":"LdeNzjmSth3us6GXYLe3WE4KufNKQRzti69PW"
      },
      "pubKey":{
          "value":"7VeRA1zk2gk8B87X5gbX9aeGu1n9YKHDbmPrm1Z5wjNrKiMM"
      }
    },
    {
      "address":{
          "value":"LdeNhM2WhhumjsozQzdQF7hGMN5f8Ajv3VjtC"
      },
      "pubKey":{
          "value":"7VeRHuQxfWc9W9XBNqmEjjXmjg8LnuekadWmE8jqURKUEVNj"
      }
    },
    {
      "address":{
          "value":"LdeNoD33a7zU26WPAj19TqP84SsUK8EYtxy3m"
      },
      "pubKey":{
          "value":"7VeRBQGE2u3ozUKcTrnk4BXHwfbJW5D3R1VjpT6bmzemvF2o"
      }
    },
    {
      "address":{
        "value":"LdeNoumLzGAt9GER4y5LHTeovdCmSY24rdVWN"
      },
      "pubKey":{
        "value":"7VeRKDRchgcesxY95JXKj1vdnPKyBPATa1YNojXn3my61Ser"
      }
    },
    {
      "address":{
        "value":"LdeP3VP3wwxAmHeo87J9RDJMEk1AzvDCM264j"
      },
      "pubKey":{
        "value":"7VeRJDCGBv2kqTSBzwtcRYkHA2GzEaWGKff96o5SXfN6WuQa"
      }
    },
    {
      "address":{
        "value":"LdeNhbJxCiPHw5jGYb1zFcydpFPRNpE47pEpW"
      },
      "pubKey":{
        "value":"7VeRDBea3y9z3WoEVfdTUfg8Z42qfaqf7LZou2eojRHbZn9e"
      }
    },
    {
      "address":{
        "value":"LdeNxC19xnQ2XbBP4UChZB2hT5SUCz9JDCHRX"
      },
      "pubKey":{
        "value":"7VeRM1EhjRXwybAiYLHwjmJxxGPpYrJrNhGVjXNeuQw4hH3o"
      }
    },
    {
      "address":{
        "value":"LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
      },
      "pubKey":{
        "value":"7VeRPrJgSt4nKqSinLMwHGEWskPiQ5WNqcSj9ximuwLTjKoH"
      }
    },
    {
      "address":{
        "value":"LdeNzqjox47UKRxEYMC3rahxW7gBvrChPrf8E"
      },
      "pubKey":{
        "value":"7VeRLM82n3PrW8mXgvHPatEvA78oBZa1g3cN4dHR4JTPnXTT"
      }
    }],
  });

  res.send(ret);
});

// 指定事件账户下事件列表总数
router.get('/:ledger/events/user/accounts/:address/names/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};
  
  Object.assign(ret, resultData,{
    "success":true,
    "data":12
  });

  res.send(ret);
});

// 指定事件账户下事件列表
router.get('/:ledger/events/user/accounts/:address/names', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};
  
  Object.assign(ret, resultData,{
    "data":["e12","e8","e3","e13","e6","e4","e11","e9","e5","e10"],
    "success":true
  });

  res.send(ret);
});

// 指定事件账户下事件列表最新事件
router.get('/:ledger/events/user/accounts/:address/names/:eventName/latest', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};
  
  Object.assign(ret, resultData,{
    "data": {
      "sequence": 13,//　事件序列
      "transactionSource": {// 交易哈希
        "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
      },
      "blockHeight": 1,//　区块高度
      "contractSource": "",// 合约地址
      "eventAccount": {// 事件账户
        "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
      },
      "name": "e1",
      "content": {// 事件内容
        "nil": false,
        "bytes": {
          "value": "C7P9wfY"
        },
        "type": "BYTES",
        "value": "Ynl0ZXM="
      }
    },
    "success": true
  });

  res.send(ret);
})

// 指定事件账户下事件列表详情
router.get('/:ledger/events/user/accounts/:address/names/:eventName', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};
  
  Object.assign(ret, resultData,{
    "data": [
      {
        "sequence": 0,//　事件序列
        "transactionSource": {// 交易哈希
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,//　区块高度
        "contractSource": "",// 合约地址
        "eventAccount": {// 事件账户
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",// 事件名
        "content": {// 事件内容
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 1,
        "transactionSource": {
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,
        "contractSource": "",
        "eventAccount": {
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",
        "content": {
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 0,//　事件序列
        "transactionSource": {// 交易哈希
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,//　区块高度
        "contractSource": "",// 合约地址
        "eventAccount": {// 事件账户
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",// 事件名
        "content": {// 事件内容
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 1,
        "transactionSource": {
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,
        "contractSource": "",
        "eventAccount": {
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",
        "content": {
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 0,//　事件序列
        "transactionSource": {// 交易哈希
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,//　区块高度
        "contractSource": "",// 合约地址
        "eventAccount": {// 事件账户
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",// 事件名
        "content": {// 事件内容
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 1,
        "transactionSource": {
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,
        "contractSource": "",
        "eventAccount": {
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",
        "content": {
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 0,//　事件序列
        "transactionSource": {// 交易哈希
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,//　区块高度
        "contractSource": "",// 合约地址
        "eventAccount": {// 事件账户
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",// 事件名
        "content": {// 事件内容
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 1,
        "transactionSource": {
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,
        "contractSource": "",
        "eventAccount": {
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",
        "content": {
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 0,//　事件序列
        "transactionSource": {// 交易哈希
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,//　区块高度
        "contractSource": "",// 合约地址
        "eventAccount": {// 事件账户
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",// 事件名
        "content": {// 事件内容
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 1,
        "transactionSource": {
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,
        "contractSource": "",
        "eventAccount": {
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",
        "content": {
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 0,//　事件序列
        "transactionSource": {// 交易哈希
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,//　区块高度
        "contractSource": "",// 合约地址
        "eventAccount": {// 事件账户
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",// 事件名
        "content": {// 事件内容
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
      {
        "sequence": 1,
        "transactionSource": {
          "value": "j5ufPaiHndQ31ieQsBNFg57zqr2DmRJS8VnJCVmEL2dYWm"
        },
        "blockHeight": 1,
        "contractSource": "",
        "eventAccount": {
          "value": "LdeNpSUAoWgmj8inksfuBx6vL3PMdZxnovkFa"
        },
        "name": "e1",
        "content": {
          "nil": false,
          "bytes": {
            "value": "C7P9wfY"
          },
          "type": "BYTES",
          "value": "Ynl0ZXM="
        }
      },
    ],
    "success": true
  });

  res.send(ret);
})

// 指定事件账户下事件名总数
router.get('/:ledger/events/user/accounts/:address/names/:eventName/count', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};
  
  Object.assign(ret, resultData,{
    "success":true,
    "data":14
  });

  res.send(ret);
});


module.exports = router;
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
      "657TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs",
      "657TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs",
      // {
      //   "value": "657TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs"
      // },
      // {
      //   "value": "357TQAw6ssVoeKniWGwbovk7njvCTvikPambM9eBv6ezs"
      // },
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
router.get('/:ledger/blocks/height/:height/txs/additional-txs', function(req, res) {
  res.type('json');
  let params = req.body,
    ret = {};

  Object.assign(ret, resultData,{
    "data": [{
      "blockHeight": 0,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [],
        "nodeSignatures": [{
          "digest": {
            "value": "SMKKF9GCBdb3LiJQupbv5hNzpdaQTNmHxYsaMxymedup7sBRKprx6huTffQcFvJ4bKsZGPKbZzTu295Lk4JCFxEKTb"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }, {
          "digest": {
            "value": "SMJHt3DYwWqzMrBSjqFKWor4VwN3J1TboysiDNxyRm2DVPYexmLytYBkf5KoPQF2mnN1diK7xFh62YmjfCbqqVmreT"
          },
          "pubKey": {
            "value": "7VeRBsHM2nsGwP8b2ufRxz36hhNtSqjKTquzoa4WVKWty5sD"
          }
        }, {
          "digest": {
            "value": "SMMLFG2wbDKVhg3TJEnzELqXngVx15QN6PjwpNTtCVh81PtB3KjmzeXAq78Dy7yctMmJ52dhgnLTxTGzteFEbZ8RJr"
          },
          "pubKey": {
            "value": "7VeRAr3dSbi1xatq11ZcF7sEPkaMmtZhV9shonGJWk9T4pLe"
          }
        }, {
          "digest": {
            "value": "SMLK6oGzyFWaXsvgz87TwTRX6kF8ia9cwVHsLHwxFLw96vqSmUu5rMdixCU2gS3Y3FLQhWfxVEyB6shSHwSNmqq7G3"
          },
          "pubKey": {
            "value": "7VeRKoM5RE6iFXr214Hsiic2aoqCQ7MEU1dHQFRnjXQcReAS"
          }
        }],
        "transactionContent": {
          "operations": [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
          "timestamp": 1564640818069
        },
        "transactionHash": {
          "value": "j5j47m9goc4tz9XfoBDd8zQ3fyFT2iyZLGws4skAMWgdHH"
        }
      },
      "result": {
        "blockHeight": 0,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5sQJ8XibCG62dVTcCyV73qgqfcsMhUPvGQgiPre1wUu1n"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5j47m9goc4tz9XfoBDd8zQ3fyFT2iyZLGws4skAMWgdHH"
        }
      },
      "transactionHash": {
        "value": "j5j47m9goc4tz9XfoBDd8zQ3fyFT2iyZLGws4skAMWgdHH"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMKm5D7xEDUgWGRuAabugWMfygvGgLn9MrUMVijX78ZDFGCTXsxXcZ8ZyH6X4svboZ1SEe42JZVt3fdgwUJ7C7aXe2"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMKm5D7xEDUgWGRuAabugWMfygvGgLn9MrUMVijX78ZDFGCTXsxXcZ8ZyH6X4svboZ1SEe42JZVt3fdgwUJ7C7aXe2"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968253
        },
        "transactionHash": {
          "value": "j5gbyDaHfwnBJquH5HU3Y4ooEu6F4akaAvRgW5mPK9q24c"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5wDEV3qFGTwtpqFoy18FQxETyhXv8WAZEzjVAeSh4qoni"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5gbyDaHfwnBJquH5HU3Y4ooEu6F4akaAvRgW5mPK9q24c"
        }
      },
      "transactionHash": {
        "value": "j5gbyDaHfwnBJquH5HU3Y4ooEu6F4akaAvRgW5mPK9q24c"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMJLKkVk43uN2A8QqYnbvxZWsvMSbW6MVZk8yxiTt4uCvgP6BfoymuxQqci6Lu3bm38JhjgoBs4pVzdsyJ8bMM6rW3"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMJLKkVk43uN2A8QqYnbvxZWsvMSbW6MVZk8yxiTt4uCvgP6BfoymuxQqci6Lu3bm38JhjgoBs4pVzdsyJ8bMM6rW3"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968252
        },
        "transactionHash": {
          "value": "j5gg47mvrrF4DQczUQVjjvMN6gfN9TRocW7JMfsXDzcP47"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5koseQzgnrWBYcL2MGumBBqudexscQMNu5pUXVSR7AAUy"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5gg47mvrrF4DQczUQVjjvMN6gfN9TRocW7JMfsXDzcP47"
        }
      },
      "transactionHash": {
        "value": "j5gg47mvrrF4DQczUQVjjvMN6gfN9TRocW7JMfsXDzcP47"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMLzEc42EYkXu89YME69UFWxJSqT6RyiEy1gqgvgARKySRBX3yMSzoekuJgFPSbcdEjchaVoqbG3GZnKg3yh8CF4ZR"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMLzEc42EYkXu89YME69UFWxJSqT6RyiEy1gqgvgARKySRBX3yMSzoekuJgFPSbcdEjchaVoqbG3GZnKg3yh8CF4ZR"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968252
        },
        "transactionHash": {
          "value": "j5qWbXt9Ns72jZnEoEMdQRwRGZfpLfGCms8RGeXQzJkhoY"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5kYTy9viuKA1S8HqJxnBpDbr18p4weakMiiKfDKbE9Ejo"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5qWbXt9Ns72jZnEoEMdQRwRGZfpLfGCms8RGeXQzJkhoY"
        }
      },
      "transactionHash": {
        "value": "j5qWbXt9Ns72jZnEoEMdQRwRGZfpLfGCms8RGeXQzJkhoY"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMLV4ZfGczcfYcbrejY2raQewVgND86rhBxi6azT3ygBQrCMfHFcuMsswV7RxpGg9PqBmBzEvSEurZWHdYCxXhZvPP"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMLV4ZfGczcfYcbrejY2raQewVgND86rhBxi6azT3ygBQrCMfHFcuMsswV7RxpGg9PqBmBzEvSEurZWHdYCxXhZvPP"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968252
        },
        "transactionHash": {
          "value": "j5ok7diJu3C4ZxNKknpurNSDGDqrrALs7uAbxe4WkUszCf"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5fPZ9ydWrsdMH4xmiMuFqkL7YH9iTMG27ZxboBtCU2VF9"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5ok7diJu3C4ZxNKknpurNSDGDqrrALs7uAbxe4WkUszCf"
        }
      },
      "transactionHash": {
        "value": "j5ok7diJu3C4ZxNKknpurNSDGDqrrALs7uAbxe4WkUszCf"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMJgw2pw2ViVJWHhaRH2M3LvvQMFiarqgpFRZNSV8S98mG47Z1pKnN5UbBZ9Nz1dZdzzn2WQEwN3sEPHnf4KECGKnn"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMJgw2pw2ViVJWHhaRH2M3LvvQMFiarqgpFRZNSV8S98mG47Z1pKnN5UbBZ9Nz1dZdzzn2WQEwN3sEPHnf4KECGKnn"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968252
        },
        "transactionHash": {
          "value": "j5k2iCjiPkmyJUWVAkD617AyKnwwnwpAjwNayzdTrtoQGN"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5si1dprpxz1yXX9ECLGzPM6MGpd7Lwg9sWaYffaS7E2WW"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5k2iCjiPkmyJUWVAkD617AyKnwwnwpAjwNayzdTrtoQGN"
        }
      },
      "transactionHash": {
        "value": "j5k2iCjiPkmyJUWVAkD617AyKnwwnwpAjwNayzdTrtoQGN"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMGWt9QUZNPy9YyBeFnhv5taSTE4o9M4R7rZ2AZNnLj4x4KDbALQL36E8gwvzks1C3UfL2qddFdq5hBPqa8u38gwmp"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMGWt9QUZNPy9YyBeFnhv5taSTE4o9M4R7rZ2AZNnLj4x4KDbALQL36E8gwvzks1C3UfL2qddFdq5hBPqa8u38gwmp"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968253
        },
        "transactionHash": {
          "value": "j5iXQszMEkLQzQputBx83aF28J4o8Qrr9Vo5T1gP2Nuowh"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5hTd4e2QiCpY5LWxn5FoULnKTCxNntNxJZESi6DFf7t53"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5iXQszMEkLQzQputBx83aF28J4o8Qrr9Vo5T1gP2Nuowh"
        }
      },
      "transactionHash": {
        "value": "j5iXQszMEkLQzQputBx83aF28J4o8Qrr9Vo5T1gP2Nuowh"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMKqo5K1Sk2hSfvrerAVbEs7z9QyVedxCkHduux45XQxauWztyEUb8bkBNQYDqzxXe3D4PvdzzSqCY247NJCtbuPek"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMKqo5K1Sk2hSfvrerAVbEs7z9QyVedxCkHduux45XQxauWztyEUb8bkBNQYDqzxXe3D4PvdzzSqCY247NJCtbuPek"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968253
        },
        "transactionHash": {
          "value": "j5v29bs7G2R5tYkBBWW2oiPbR923BAXALGAnYBmV5PxG2f"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5iWtySuaNKPC5RPPdprJXheDNZNtubDBd5QUySy1XBdKP"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5v29bs7G2R5tYkBBWW2oiPbR923BAXALGAnYBmV5PxG2f"
        }
      },
      "transactionHash": {
        "value": "j5v29bs7G2R5tYkBBWW2oiPbR923BAXALGAnYBmV5PxG2f"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMKAT8dKytLjHkbENzQUeCMEinE4aQdWG2xZ4yGhJDH1SF18X1Fn134CFMfoAt8vhYndHdpQvX788uSjy1zaaAG6YA"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMKAT8dKytLjHkbENzQUeCMEinE4aQdWG2xZ4yGhJDH1SF18X1Fn134CFMfoAt8vhYndHdpQvX788uSjy1zaaAG6YA"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968253
        },
        "transactionHash": {
          "value": "j5sAf9Fna39RttiDhy5jx4NNqQBFnbQ52wLSBPF4MNvjkb"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5quWJqgWYVDV6p3FGo8WCizeA9vuptffErYcqM7X9Cwe9"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5sAf9Fna39RttiDhy5jx4NNqQBFnbQ52wLSBPF4MNvjkb"
        }
      },
      "transactionHash": {
        "value": "j5sAf9Fna39RttiDhy5jx4NNqQBFnbQ52wLSBPF4MNvjkb"
      }
    }, {
      "blockHeight": 1,
      "executionState": "SUCCESS",
      "request": {
        "endpointSignatures": [{
          "digest": {
            "value": "SMKSkJc8PBHCKuKgNEMYbzCyZeV335nZJroZAgA5a3ko7Sad8c8fRex1QVQkrKtzhpvjeBEQsYrzDRNKfqKpUMotHt"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "nodeSignatures": [{
          "digest": {
            "value": "SMKSkJc8PBHCKuKgNEMYbzCyZeV335nZJroZAgA5a3ko7Sad8c8fRex1QVQkrKtzhpvjeBEQsYrzDRNKfqKpUMotHt"
          },
          "pubKey": {
            "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
          }
        }],
        "transactionContent": {
          "ledgerHash": {
            "value": "j5oyNMUZNfuhdgC4UkwURqZkNNnFaNRQWgmWQXiQXhiopc"
          },
          "operations": [{}],
          "timestamp": 1601274968253
        },
        "transactionHash": {
          "value": "j5xPbJHsjnrvsL5CsDwVCstPKPcvh9t6XtXjgzTUBn6e3j"
        }
      },
      "result": {
        "blockHeight": 1,
        "dataSnapshot": {
          "adminAccountHash": {
            "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
          },
          "userAccountSetHash": {
            "value": "j5qkRzh1txM2zKX7N2zUGHuhUjWLN4TFfYdMoivoyXe1mj"
          }
        },
        "executionState": "SUCCESS",
        "transactionHash": {
          "value": "j5xPbJHsjnrvsL5CsDwVCstPKPcvh9t6XtXjgzTUBn6e3j"
        }
      },
      "transactionHash": {
        "value": "j5xPbJHsjnrvsL5CsDwVCstPKPcvh9t6XtXjgzTUBn6e3j"
      }
    }],
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
    // "data": {
    //   "blockHeight": 38,
    //   "userAccountSetHash": {
    //     "value": "j5qJayNMYJHMcp6CvnX2UJcM4f7XokmAaHodp9Dsc2SsQ9"
    //   },
    //   "executionState": "SUCCESS",
    //   "transactionContent": {
    //     "ledgerHash": {
    //       "value": "j5kjrG38kEkgP3GGvp3WQrzonuP7G8urRAMPWfdiTSZLV2"
    //     },
    //     "operations": [{
    //       "participantID": {
    //         "address": {
    //           "value": "LdeNyYYygDPHs4buTFiBqZGmjhPiEV43b2TZ8"
    //         },
    //         "pubKey": {
    //           "value": "7VeR8VN5HRU9PnNWTb3oKM5vFVZZP9Tc1bXyN983BiqwtqiP"
    //         }
    //       },
    //       "state": "CONSENSUS"
    //     }, {
    //       "properties": [{
    //         "name": "system.servers.num",
    //         "value": "6"
    //       }, {
    //         "name": "system.servers.f",
    //         "value": "1"
    //       }, {
    //         "name": "system.initial.view",
    //         "value": "2,3,4,5,6,1"
    //       }, {
    //         "name": "participant.op",
    //         "value": "deactive"
    //       }, {
    //         "name": "deactive.participant.id",
    //         "value": "0"
    //       }]
    //     }],
    //     "hash": {
    //       "value": "j5gqF7VUcEaZtk3ZG69jZBvV3QPACYnZjCvNdt74d5iDTP"
    //     },
    //     "timestamp": 1599636055428
    //   },
    //   "endpointSignatures": [{
    //     "digest": {
    //       "value": "SMKxczXDM46tMeGVbZnCwK3eevCUiJuCdtMTTxc9orJo3Vtsc25sfTuou4kDBGGhyJWkmxxhjuEKXy1jXYxi1cHS5h"
    //     },
    //     "pubKey": {
    //       "value": "7VeR8VN5HRU9PnNWTb3oKM5vFVZZP9Tc1bXyN983BiqwtqiP"
    //     }
    //   }],
    //   "adminAccountHash": {
    //     "value": "j5koAs9qhia4LMSVVgLM7QfZuY1VytfxsbtywgJvu9f5zf"
    //   },
    //   "dataAccountSetHash": {
    //     "value": "j5hyMRErPM9mhvz3PUTDVhWE2BJLVm78X78Lcxdi8qV53Q"
    //   },
    //   "nodeSignatures": [{
    //     "digest": {
    //       "value": "SMKxczXDM46tMeGVbZnCwK3eevCUiJuCdtMTTxc9orJo3Vtsc25sfTuou4kDBGGhyJWkmxxhjuEKXy1jXYxi1cHS5h"
    //     },
    //     "pubKey": {
    //       "value": "7VeR8VN5HRU9PnNWTb3oKM5vFVZZP9Tc1bXyN983BiqwtqiP"
    //     }
    //   }]
    // },
    // "success": true
    // "data": {
    //   "blockHeight": 0,
    //   "executionState": "SUCCESS",
    //   "request": {
    //     "endpointSignatures": [],
    //     "nodeSignatures": [{
    //       "digest": {
    //         "value": "SMKKF9GCBdb3LiJQupbv5hNzpdaQTNmHxYsaMxymedup7sBRKprx6huTffQcFvJ4bKsZGPKbZzTu295Lk4JCFxEKTb"
    //       },
    //       "pubKey": {
    //         "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
    //       }
    //     }, {
    //       "digest": {
    //         "value": "SMJHt3DYwWqzMrBSjqFKWor4VwN3J1TboysiDNxyRm2DVPYexmLytYBkf5KoPQF2mnN1diK7xFh62YmjfCbqqVmreT"
    //       },
    //       "pubKey": {
    //         "value": "7VeRBsHM2nsGwP8b2ufRxz36hhNtSqjKTquzoa4WVKWty5sD"
    //       }
    //     }, {
    //       "digest": {
    //         "value": "SMMLFG2wbDKVhg3TJEnzELqXngVx15QN6PjwpNTtCVh81PtB3KjmzeXAq78Dy7yctMmJ52dhgnLTxTGzteFEbZ8RJr"
    //       },
    //       "pubKey": {
    //         "value": "7VeRAr3dSbi1xatq11ZcF7sEPkaMmtZhV9shonGJWk9T4pLe"
    //       }
    //     }, {
    //       "digest": {
    //         "value": "SMLK6oGzyFWaXsvgz87TwTRX6kF8ia9cwVHsLHwxFLw96vqSmUu5rMdixCU2gS3Y3FLQhWfxVEyB6shSHwSNmqq7G3"
    //       },
    //       "pubKey": {
    //         "value": "7VeRKoM5RE6iFXr214Hsiic2aoqCQ7MEU1dHQFRnjXQcReAS"
    //       }
    //     }],
    //     "transactionContent": {
    //       "operations": [{
    //         "initSetting": {
    //           "consensusParticipants": [{
    //             "address": {
    //               "value": "LdeP3fY7jJbNwL8CiL2wU21AF9unDWQjVEW5w"
    //             },
    //             "id": 0,
    //             "name": "jd.com",
    //             "participantNodeState": "CONSENSUS",
    //             "pubKey": {
    //               "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
    //             }
    //           }, {
    //             "address": {
    //               "value": "LdeNnz88dH6CA6PwkVdn3nFRibUKP3sFT2byG"
    //             },
    //             "id": 1,
    //             "name": "at.com",
    //             "participantNodeState": "CONSENSUS",
    //             "pubKey": {
    //               "value": "7VeRBsHM2nsGwP8b2ufRxz36hhNtSqjKTquzoa4WVKWty5sD"
    //             }
    //           }, {
    //             "address": {
    //               "value": "LdeNmdpT4DiTwLUP9jRQhwdRBRiXeHno456vy"
    //             },
    //             "id": 2,
    //             "name": "bt.com",
    //             "participantNodeState": "CONSENSUS",
    //             "pubKey": {
    //               "value": "7VeRAr3dSbi1xatq11ZcF7sEPkaMmtZhV9shonGJWk9T4pLe"
    //             }
    //           }, {
    //             "address": {
    //               "value": "LdeNekdXMHqyz9Qxc2jDSBnkvvZLbty6pRDdP"
    //             },
    //             "id": 3,
    //             "name": "xt.com",
    //             "participantNodeState": "CONSENSUS",
    //             "pubKey": {
    //               "value": "7VeRKoM5RE6iFXr214Hsiic2aoqCQ7MEU1dHQFRnjXQcReAS"
    //             }
    //           }],
    //           "consensusProvider": "com.jd.blockchain.consensus.bftsmart.BftsmartConsensusProvider",
    //           "consensusSettings": {
    //             "value": "112pLW8QHVaLJZUw8pcpoBmX1pFnAWbmr7TuuTCHH4WJL4JX72K8C6sHTH1b7uiXJbEUfDq5M9J6iy2zDBdXVR75E25EnAiEmvAd3FLppCst3BB3gmFKHBzr2pvxM8vwXyEyvjJHAvKgShx7Ruwjg55c9h5uv43MWh2BNNDU4nU6um98sPmVs73SAbYzB7YpqMz8KAsup8Cz5D91ou77hfQAqxhRTvfbkYT3nWTfdCTQYEkfjUoqde8WV5M5iuESnTFoNQ2QsbZCguCxzcHorr3BKsaQdocb8Su26DdidZB6yR4i7KxRUCC42i1Pgak7mQGTK8C4tGauyM6gARGLQqJCCbQZdUWWxdCsTxqhN2Nh4rDNv3uK3dXhvD69BxqPdHriTjkLLJFiffiYfZTGP91fStweM3VaWxANSi6LCcXXeCQxHUDvTLLV77RkuyQH6knVQ4tszRbPacXvhWJSpHn7ph1gywRrEXeeAC8LaD7LQ6uVdj5nPK1mfsxpLG76RW3QctqAZe8g3LbvvEbBTL8Lfhc8DHyPM7ojL1JVENJLqzKfsrqKmfPPss4GaTUZ7E2JkZEnRi6mL22EoqM99Pkomaaku3RWpzrvvsb6p9TWu1frF9KMVAzJYBR9PLkuXknKxDjbx5xzysNzd8Q3qttfkmqsFyyr24SGTJkrHotrf3LnUheEmf5hbbgyvH1C9w8PHthmh8vuszkkpHhXeD5o1eabFWb96TRu379tNPBzSKxjs3k4Zwxc5YybA6oXR5GMJKndGGP2faxPCSQk7Zq2tRo3q2ZLHcs1FZVEGwoNPxCLkdYQx6atdGq2RMdAeuBnLPd6B2Jvc8x1sMPTYpWAHwZatXUDVTKJJ3ZtC8swkyA4aeBD1XT3UYa6AT3m7L2BBnLMLkomAuTSSg9HMWoauYNCTDvEgsxvabeoiYKGiHvz1wMKVBZxW2oKGsm5r4Ko1wFfKghgUED6AKhtiCNuZ14V3cH1RWdVV9jrWLJeumE9btov9GuP67k3QoKQ8bf8RzHJEom8oRL6XifSnQ28FAPnatwTmfYk7S6nutQPYM4W2oEMkAzXsYWJoaTF9HzZgMLyDimQa5EAUMAt37ewf5iDhmRjBSFqZ6qQDermSKuVRXqCYfiejhL2TspuDo2ytxdxTbwmsBNxVEPT5WCqx6MwPVvhXwGfFEGy66qyN4JYWAUxkbnv6JhLiXj7VUnnUXoG6Y7tUa3bEtnnAzt3UbzPXDAFGAVwr7sy8gJT3Lvap2EEuzQaZ6eeT3QWkPG8XqdY6wQRXhbHMhcnsL2W7YKHgMsW34oQ4YRrNLxYSgBfYrd1BCuNctc8RuGhB9MfFX2LHAp6hg5wYRbhNJLxECDPcVMpmv3V7tz1gLHLyXVHQk9MUGywXm4ztCSBpGR2eBV46wBj188ZtUAjmS5Edo2ERirpazuZaFGncZpsoNe1cmwFPX82ykruSQzUvCQ9UxSTKqYXYmbpDSssQehjxWV2DXaVW3FYqDzoNh8yabutnfNDGEwWkGfbAzhQuE98hgpez82U2pZ1142MfhkQGSktSRh6wpuBebj2DCCzqUd7axjoPkmwPWfBtP5cSEoE2T65mRY1KcYpg87L87eWQigN7m9gQtapoiqmJDwctjStcxuzdXuMsuQTXDkjyhYo9z3RaH8wJTR6onH2NLpeQSjNVcK9vJVzq9jTMnj1Hd7bNtxqjVEDfHWkTtpSp21mtXj6ZSfYWBgZ414rkqXdHKrGscACHsBeasdTEMJneNrvGQDqdXcCYxKAmj3zHcDFSENZr1fKMM49mHmEuogV63SHozjMLrAZxCjjVsBajK1gcbh6MF4Saeekf83NLrsQ66Wse2C2rRB1K48fPPFv5WJhej3QE94KpkKQK4ay1v9xoetnD3ovtBBKrT6zkZfUEvxRNeujTro9g4nbbxzYNFwjxwFY2S7BDuRyVcTcMCRkNdpRnwEEzmqVRSsv7qfyE4ZnSJWr4JkhroMwZkGHxzgBJDevtxp7C4Wz9N4XLMS4tgHNEvEWurxpJ1cGxRoHYvYPUSnXMEMTkmYphYFKe6ZjKydtgFYCQuY95oqHWyv9LyKPzEUamXubqwPEWo5Yj5bzmGJr71iJrsYTj9bkLzhLL2dzaK1P5"
    //           },
    //           "createdTime": 1564640818069,
    //           "cryptoSetting": {
    //             "autoVerifyHash": false,
    //             "hashAlgorithm": 8216,
    //             "supportedProviders": [{
    //               "algorithms": [{
    //                 "code": -32230,
    //                 "name": "AES"
    //               }, null, null, null, null, null, null],
    //               "name": "com.jd.blockchain.crypto.service.classic.ClassicCryptoService"
    //             }, {
    //               "algorithms": [null, {
    //                 "code": 8195,
    //                 "name": "SM3"
    //               }, null],
    //               "name": "com.jd.blockchain.crypto.service.sm.SMCryptoService"
    //             }]
    //           },
    //           "ledgerSeed": "ky3+I/4jIy8oPzL63TKqdoMiyi9WI2zacTazIssyP/4=",
    //           "ledgerStructureVersion": -1
    //         }
    //       }, {
    //         "userID": {
    //           "address": {
    //             "value": "LdeP3fY7jJbNwL8CiL2wU21AF9unDWQjVEW5w"
    //           },
    //           "pubKey": {
    //             "value": "7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"
    //           }
    //         }
    //       }, {
    //         "userID": {
    //           "address": {
    //             "value": "LdeNnz88dH6CA6PwkVdn3nFRibUKP3sFT2byG"
    //           },
    //           "pubKey": {
    //             "value": "7VeRBsHM2nsGwP8b2ufRxz36hhNtSqjKTquzoa4WVKWty5sD"
    //           }
    //         }
    //       }, {
    //         "userID": {
    //           "address": {
    //             "value": "LdeNmdpT4DiTwLUP9jRQhwdRBRiXeHno456vy"
    //           },
    //           "pubKey": {
    //             "value": "7VeRAr3dSbi1xatq11ZcF7sEPkaMmtZhV9shonGJWk9T4pLe"
    //           }
    //         }
    //       }, {
    //         "userID": {
    //           "address": {
    //             "value": "LdeNekdXMHqyz9Qxc2jDSBnkvvZLbty6pRDdP"
    //           },
    //           "pubKey": {
    //             "value": "7VeRKoM5RE6iFXr214Hsiic2aoqCQ7MEU1dHQFRnjXQcReAS"
    //           }
    //         }
    //       }, {
    //         "empty": false,
    //         "roles": [{
    //           "disableLedgerPermissions": [],
    //           "disableTransactionPermissions": [],
    //           "enableLedgerPermissions": ["CONFIGURE_ROLES", "AUTHORIZE_USER_ROLES", "SET_CONSENSUS", "SET_CRYPTO", "REGISTER_PARTICIPANT", "REGISTER_USER", "REGISTER_DATA_ACCOUNT", "REGISTER_CONTRACT", "UPGRADE_CONTRACT", "SET_USER_ATTRIBUTES", "WRITE_DATA_ACCOUNT", "APPROVE_TX", "CONSENSUS_TX", "REGISTER_EVENT_ACCOUNT", "WRITE_EVENT_ACCOUNT"],
    //           "enableTransactionPermissions": ["DIRECT_OPERATION", "CONTRACT_OPERATION"],
    //           "roleName": "DEFAULT"
    //         }]
    //       }, {
    //         "userRolesAuthorizations": [{
    //           "authorizedRoles": [],
    //           "policy": "UNION",
    //           "unauthorizedRoles": [],
    //           "userAddresses": [{
    //             "value": "LdeP3fY7jJbNwL8CiL2wU21AF9unDWQjVEW5w"
    //           }]
    //         }]
    //       }, {
    //         "userRolesAuthorizations": [{
    //           "authorizedRoles": [],
    //           "policy": "UNION",
    //           "unauthorizedRoles": [],
    //           "userAddresses": [{
    //             "value": "LdeNnz88dH6CA6PwkVdn3nFRibUKP3sFT2byG"
    //           }]
    //         }]
    //       }, {
    //         "userRolesAuthorizations": [{
    //           "authorizedRoles": [],
    //           "policy": "UNION",
    //           "unauthorizedRoles": [],
    //           "userAddresses": [{
    //             "value": "LdeNmdpT4DiTwLUP9jRQhwdRBRiXeHno456vy"
    //           }]
    //         }]
    //       }, {
    //         "userRolesAuthorizations": [{
    //           "authorizedRoles": [],
    //           "policy": "UNION",
    //           "unauthorizedRoles": [],
    //           "userAddresses": [{
    //             "value": "LdeNekdXMHqyz9Qxc2jDSBnkvvZLbty6pRDdP"
    //           }]
    //         }]
    //       }, {
    //         "participantID": {
    //           "address": {
    //             "value": "LdeNyYYygDPHs4buTFiBqZGmjhPiEV43b2TZ8"
    //           },
    //           "pubKey": {
    //             "value": "7VeR8VN5HRU9PnNWTb3oKM5vFVZZP9Tc1bXyN983BiqwtqiP"
    //           }
    //         },
    //         "state": "CONSENSUS"
    //       }],
    //       "timestamp": 1564640818069
    //     },
    //     "transactionHash": {
    //       "value": "j5j47m9goc4tz9XfoBDd8zQ3fyFT2iyZLGws4skAMWgdHH"
    //     }
    //   },
    //   "result": {
    //     "blockHeight": 0,
    //     "dataSnapshot": {
    //       "adminAccountHash": {
    //         "value": "j5sEPziX7gbht286xb1ECDNqMwUST6Bfd1iTb55UVSoB6V"
    //       },
    //       "userAccountSetHash": {
    //         "value": "j5sQJ8XibCG62dVTcCyV73qgqfcsMhUPvGQgiPre1wUu1n"
    //       }
    //     },
    //     "executionState": "SUCCESS",
    //     "transactionHash": {
    //       "value": "j5j47m9goc4tz9XfoBDd8zQ3fyFT2iyZLGws4skAMWgdHH"
    //     }
    //   },
    //   "transactionHash": {
    //     "value": "j5j47m9goc4tz9XfoBDd8zQ3fyFT2iyZLGws4skAMWgdHH"
    //   }
    // },
    // "success": true
    "data":{"result":{"blockHeight":15,"dataSnapshot":{"userAccountSetHash":{"value":"j5iSUBKD9ZNoim4TGcLoo8JhQFe2iAP7YvnCq9e9jzrQuN"},"adminAccountHash":{"value":"j5uMABfxYNbjNLQmMsS4zpEDmjSjhfHm2UbJosGvEQsPAR"},"dataAccountSetHash":{"value":"j5o3K2KcdAhVoXNAiDFRCdQGGLxAFmKE6WN4bEUEXWtdKD"}},"executionState":"SUCCESS","transactionHash":{"value":"j5kz23qsWQiJy3WHwJRULXSnbaXp4UUA592sMYnk4vtzqL"}},"request":{"transactionContent":{"ledgerHash":{"value":"j5vBAT6jVNqVQjHMp1FEr8xZ4bhKFtipnGbmujhJWBL6Wd"},"operations":[{"writeSet":[{"expectedVersion":-1,"value":{"nil":false,"bytes":{"value":"7iHgG87BWS9we4"},"type":"TEXT","value":"www.jd.com"},"key":"jingdong160343874998663908"}],"accountAddress":{"value":"LdeNwtn6A2eZciHc5NMWEvZVFCB8EBTqLMwrg"}}],"timestamp":1603438749987},"endpointSignatures":[{"digest":{"value":"SMKmmXbUx8rnLz1Puz13zmLEoM8jN9bXWUM2DCCjJNmXtbdkiHQr46ogntVF38M49BCWo63KeAHdVTEvpWCVPj1qVH"},"pubKey":{"value":"7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"}}],"transactionHash":{"value":"j5kz23qsWQiJy3WHwJRULXSnbaXp4UUA592sMYnk4vtzqL"},"nodeSignatures":[{"digest":{"value":"SMKmmXbUx8rnLz1Puz13zmLEoM8jN9bXWUM2DCCjJNmXtbdkiHQr46ogntVF38M49BCWo63KeAHdVTEvpWCVPj1qVH"},"pubKey":{"value":"7VeRLdGtSz1Y91gjLTqEdnkotzUfaAqdap3xw6fQ1yKHkvVq"}}]},"blockHeight":15,"executionState":"SUCCESS","transactionHash":{"value":"j5kz23qsWQiJy3WHwJRULXSnbaXp4UUA592sMYnk4vtzqL"}},"success":true
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
    "data":1
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
      "sequence": 0,//　事件序列
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
          "value": 0
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
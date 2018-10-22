import { observable, computed, action, transaction } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import BlockHistory from '../pages/history/blockHistory';
import { tranBase58 } from '../common/util';
import $ from 'jquery';

export default class HistoryStore {
  @observable showHistoryState = 3; // 1-区块历史 2-区块高度/区块哈希 3-交易详情 0-空页面
  @observable showTransactionTable = 1; // 1-正确 0-错误 -1-无数据
  @observable blockHistoryData = []; // 区块历史数据
  @observable blockData = {
    transactionSetHash: {
      value: '3vZUqf6yrKn'
    },
    userAccountSetHash: {
      value: 'SpXTp'
    },
    dataAccountSetHash: {
      value: 'SpXTo'
    },
    ledgerHash: {
      value: '6GNP3H3WjGeQ7kbyu6LFhRtpmkdiTi7ENEpuLW1FJjwgu'
    },
    contractAccountSetHash: {
      value: 'SpXTq'
    },
    hash: {
      value: 'fPcnPW1xx'
    },
    height: 12358,
    previousHash: {
      value: '2y1mCD6'
    },
    adminAccountHash: {
      value: 'SpXTn'
    }
  }; // 区块高度/哈希数据
  @observable transactionList = [
    
  ]; // 交易列表数据
  @observable transactionData = {
    adminAccountHash: {
		  value: '2y1mCD6'
	  },
    blockHeight: 123456,
    contractAccountSetHash: {
      value: '9h2UYTxc'
    },
    dataAccountSetHash: {
      value: '3vZUqf6yrKn'
    },
    endpointSignatures: [
      {
        digest: {
          value: 'emhhbmdzYW4='
        },
        pubKey: {
          value: 'S76SHyu8p164'
        }
      },
      {
        digest: {
          value: 'emhhbmdzYW4='
        },
        pubKey: {
          value: 'S76SHyu8p164'
        }
      }
    ],
    executionState: 'SUCCESS',
    hash: {
      value: 'DuQMsm4j3GeZ'
    },
    nodeSignatures: [
      {
        digest: {
          value: 'd2FuZ3d1'
        },
        pubKey: {
          value: 'S76SHz8DsfNc'
        }
      },
      {
        digest: {
          value: 'd2FuZ3d1'
        },
        pubKey: {
          value: 'S76SHz8DsfNc'
        }
      }
    ],
    transactionContent: {
      hash: {
        value: 'fH9d8BYxU'
      },
      ledgerHash: {
        value: '6EqXXS9c1njm6XPorwgstGLd1rdAywbQKrTfoaxe4SYY9'
      },
      operations: [
        {
          writeSet: [{
            expectedVersion: 25,
            key: 'Name',
            value: 'QUFB'
          }],
          accountAddress: '31xnWp5RYLThS47S6yfwqbUW3toZrw5Mm3t'
        },
        {
          writeSet: [{
            expectedVersion: 25,
            key: 'Name',
            value: 'QUFB'
          }],
          accountAddress: 'undefined'
        },
        {
          writeSet: [{
            expectedVersion: 25,
            key: 'Name',
            value: 'QUFB'
          }],
          accountAddress: 'undefined'
        },
        {
          writeSet: [{
            expectedVersion: 25,
            key: 'Name',
            value: 'QUFB'
          }],
          accountAddress: 'undefined'
        },
        {
          writeSet: [{
            expectedVersion: 25,
            key: 'Name',
            value: 'QUFB'
          }],
          accountAddress: 'undefined'
        }
      ]
    },
    userAccountSetHash: {
      value: 'fPcnPW1xx'
    }
  }; // 交易详情数据

  @autobind
  @action
  setTransactionData() {
    this.transactionData.endpointSignatures.map((item, key) => {
      item['pubKey']['algorithm'] = tranBase58(item['pubKey']['value']);
    });
    this.transactionData.nodeSignatures.map((item, key) => {
      item['pubKey']['algorithm'] = tranBase58(item['pubKey']['value']);
    });
    console.log(this.transactionData);
    return this.transactionData;
  }

  @autobind
  @action
  goback() {
    this.showHistoryState = 1;
  }

  @autobind
  @action
  getBlockHistoryData() {
    $.ajax({
      url: 'http://localhost:8000/ledgers/blocks/' + '64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty',
      method: 'GET',
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;'
      },
      success: (res) => {
        console.log(res, JSON.parse(res)['data']);
      },
      error: (res) => {
        console.log(res);
      }
    });
  }

  @autobind
  @action
  setBlockHistoryData() {
    debugger;
  }
}
import { observable, computed, action, transaction, toJS } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import BlockHistory from '../pages/history/blockHistory';
import { tranBase58 } from '../common/util';
import $ from 'jquery';

export default class HistoryStore {
  @observable showHistoryState = 1; // 1-区块历史 2-区块高度/区块哈希 3-交易详情 0-空页面
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
  @observable transactionList = []; // 交易列表数据
  @observable transactionData = {
    // adminAccountHash: {
		//   value: '2y1mCD6'
	  // },
    // blockHeight: 123456,
    // contractAccountSetHash: {
    //   value: '9h2UYTxc'
    // },
    // dataAccountSetHash: {
    //   value: '3vZUqf6yrKn'
    // },
    // endpointSignatures: [
    //   {
    //     digest: {
    //       value: 'emhhbmdzYW4='
    //     },
    //     pubKey: {
    //       value: 'S76SHyu8p164'
    //     }
    //   },
    //   {
    //     digest: {
    //       value: 'emhhbmdzYW4='
    //     },
    //     pubKey: {
    //       value: 'S76SHyu8p164'
    //     }
    //   }
    // ],
    // executionState: 'SUCCESS',
    // hash: {
    //   value: 'DuQMsm4j3GeZ'
    // },
    // nodeSignatures: [
    //   {
    //     digest: {
    //       value: 'd2FuZ3d1'
    //     },
    //     pubKey: {
    //       value: 'S76SHz8DsfNc'
    //     }
    //   },
    //   {
    //     digest: {
    //       value: 'd2FuZ3d1'
    //     },
    //     pubKey: {
    //       value: 'S76SHz8DsfNc'
    //     }
    //   }
    // ],
    // transactionContent: {
    //   hash: {
    //     value: 'fH9d8BYxU'
    //   },
    //   ledgerHash: {
    //     value: '6EqXXS9c1njm6XPorwgstGLd1rdAywbQKrTfoaxe4SYY9'
    //   },
    //   operations: [
    //     {
    //       writeSet: [{
    //         expectedVersion: 25,
    //         key: 'Name',
    //         value: 'QUFB'
    //       }],
    //       accountAddress: '31xnWp5RYLThS47S6yfwqbUW3toZrw5Mm3t'
    //     },
    //     {
    //       writeSet: [{
    //         expectedVersion: 25,
    //         key: 'Name',
    //         value: 'QUFB'
    //       }],
    //       accountAddress: 'undefined'
    //     },
    //     {
    //       writeSet: [{
    //         expectedVersion: 25,
    //         key: 'Name',
    //         value: 'QUFB'
    //       }],
    //       accountAddress: 'undefined'
    //     },
    //     {
    //       writeSet: [{
    //         expectedVersion: 25,
    //         key: 'Name',
    //         value: 'QUFB'
    //       }],
    //       accountAddress: 'undefined'
    //     },
    //     {
    //       writeSet: [{
    //         expectedVersion: 25,
    //         key: 'Name',
    //         value: 'QUFB'
    //       }],
    //       accountAddress: 'undefined'
    //     }
    //   ]
    // },
    // userAccountSetHash: {
    //   value: 'fPcnPW1xx'
    // }
  }; // 交易详情数据
  @observable pubKeys = []; // 终端签名公钥算法
  @observable digests = []; // 终端签名节点算法
  @observable pubKeysNode = []; // 节点签名公钥算法
  @observable digestsNode = []; // 节点签名节点算法
  @observable one = 0;
  @observable two = '';
  @observable three = '';
  @observable four = 0;
  @observable five = '';
  @observable six = '';
  @observable seven = 0;
  @observable eight = '';
  @observable nine = '';
  @observable ten = 0;
  @observable eleven = '';
  @observable twelve = '';
  @observable len = 0; 
  @observable pubA = ''; // 公钥算法
  @observable pubB = '';
  @observable pubC = '';
  @observable pubD = '';
  @observable shows = [];

  @autobind
  @action
  goback() {
    this.showHistoryState = 1;
  }

  @autobind
  @action
  getBlockHistoryData() {
    fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/blocks`,
      this.setBlockHistoryData,
      '', { method: 'get',}
    ).catch(error => {
    });
  }

  @autobind
  @action
  setBlockHistoryData(result) {
    let response = result && result.data ? result.data : [];
    this.showHistoryState = 1;
    this.blockHistoryData = [...response];
    this.one = this.blockHistoryData[0] && this.blockHistoryData[0].height ? this.blockHistoryData[0].height : 0;
    this.two = this.blockHistoryData[0] && this.blockHistoryData[0].hash.value ? this.blockHistoryData[0].hash.value : '';
    this.three = this.blockHistoryData[0].previousHash.value || '无';
    this.four = this.blockHistoryData[1] && this.blockHistoryData[1].height ? this.blockHistoryData[1].height : 0;
    this.five = this.blockHistoryData[1] && this.blockHistoryData[1].hash.value ? this.blockHistoryData[1].hash.value : '';
    this.six = this.blockHistoryData[1].previousHash.value || '无';
    this.seven = this.blockHistoryData[2] && this.blockHistoryData[2].height ? this.blockHistoryData[2].height : 0;
    this.eight = this.blockHistoryData[2] && this.blockHistoryData[2].hash.value ? this.blockHistoryData[2].hash.value : '';
    this.nine = this.blockHistoryData[2].previousHash.value || '无';
    this.ten = this.blockHistoryData[3] && this.blockHistoryData[3].height ? this.blockHistoryData[3].height : 0;
    this.eleven = this.blockHistoryData[3] && this.blockHistoryData[3].hash.value ? this.blockHistoryData[3].hash.value : '';
    this.twelve = this.blockHistoryData[3].previousHash.value || '无';
    this.len = this.blockHistoryData.length;
  }

  @autobind
  @action
  getBlockHeightData(e) {
    fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/blocks/height/${e}`,
      this.setBlockHeightData,
      '', { method: 'get',}
    ).catch(error => {
    });
  }

  @autobind
  @action
  setBlockHeightData(result) {
    let response = result && result.data ? result.data : {};
    this.showHistoryState = 2;
    this.blockData = {...response};
    this.getTransactionList(this.blockData.height, 'height');
  }

  @autobind
  @action
  getBlockHashData(e) {
    fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/blocks/hash/${e}`,
      this.setBlockHashData,
      '', { method: 'get',}
    ).catch(error => {
    });
  }

  @autobind
  @action
  setBlockHashData(result) {
    let response = result && result.data ? result.data : {};
    this.showHistoryState = 2;
    this.blockData = {...response};
    this.getTransactionList(this.blockData.hash.value, 'height');
  }

  @autobind
  @action
  getTransactionHashData(e) {
    fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/txs/${e}`,
      this.setTransactionHashData,
      '', { method: 'get',}
    ).catch(error => {
    });
  }

  @autobind
  @action
  setTransactionHashData(result) {
    let response = result && result.data ? result.data : {};
    this.pubKeys = [];
    this.digests = [];
    this.showHistoryState = 3;
    this.transactionData = {...response};
    let arr = this.transactionData.endpointSignatures ? [...this.transactionData.endpointSignatures] : [];
    arr.map((item, key) => {
      this.pubKeys.push(tranBase58(item['pubKey']['value']));
    });
    let arr1 = this.transactionData.nodeSignatures ? [...this.transactionData.nodeSignatures] : [];
    arr1.map((item, key) => {
      this.pubKeysNode.push(tranBase58(item['pubKey']['value']));
    });
    this.transactionData.transactionContent.operations[0] && this.transactionData.transactionContent.operations[0].writeSet.map((item, key) => {
      item['show'] = false;
    });
    this.mapShow(this.transactionData.transactionContent.operations[0].writeSet);
    this.pubA = tranBase58(this.transactionData.transactionContent.operations[1].addressSignature.pubKey.value) || '';
    this.pubB = tranBase58(this.transactionData.transactionContent.operations[3].accountID.pubKey.value) || '';
    this.pubC = tranBase58(this.transactionData.transactionContent.operations[3].addressSignature.pubKey.value) || '';
    this.pubD = tranBase58(this.transactionData.transactionContent.operations[4].userID.pubKey.value) || '';
  }

  @autobind
  @action
  setShow(key, e) {
    this.shows[key] = !e;
  }

  @autobind
  @action
  mapShow(arr) {
    for(let i = 0; i < arr.length; i++) {
      this.shows[i] = false;
    }
    return this.shows;
  }

  @autobind
  @action
  getTransactionList(e, text) {
    fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/blocks/${text}/${e}/`+'txs?fromIndex=1&count=5',
      this.setTransactionList,
      '', { method: 'get',}
    ).catch(error => {
    });
  }

  @autobind
  @action
  setTransactionList(result) {
    let response = result && result.data ? result.data : [];
    this.showTransactionTable = 1;
    this.transactionList = [...response];
  }
}
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
  // @autobind
  // @action
  // setTransactionData() {
  //   this.transactionData.endpointSignatures.map((item, key) => {
  //     item['pubKey']['algorithm'] = tranBase58(item['pubKey']['value']);
  //   });
  //   this.transactionData.nodeSignatures.map((item, key) => {
  //     item['pubKey']['algorithm'] = tranBase58(item['pubKey']['value']);
  //   });
  //   console.log(this.transactionData);
  //   return this.transactionData;
  // }

  @autobind
  @action
  goback() {
    this.showHistoryState = 1;
  }

  @autobind
  @action
  getBlockHistoryData() {
    fetchData(`${G_WEB_DOMAIN}/ledgers/blockList`,
      this.setBlockHistoryData,
      '', { method: 'get',}
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setBlockHistoryData(result) {
    let response = result && result.data ? result.data : [];
    this.showHistoryState = 1;
    this.blockHistoryData = [...response];
    console.log(this.blockHistoryData);
  }

  @autobind
  @action
  getBlockHeightData() {
    fetchData(`${G_WEB_DOMAIN}/ledgers/blockHeightData`,
      this.setBlockHeightData,
      '', { method: 'get',}
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setBlockHeightData(result) {
    console.log(result);
    let response = result && result.data ? result.data : {};
    this.showHistoryState = 2;
    this.blockData = {...response};
    this.getTransactionList();
  }

  @autobind
  @action
  getBlockHashData() {
    fetchData(`${G_WEB_DOMAIN}/ledgers/blockHash`,
      this.setBlockHashData,
      '', { method: 'get',}
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setBlockHashData(result) {
    console.log(result);
    let response = result && result.data ? result.data : {};
    this.showHistoryState = 2;
    this.blockData = {...response};
    this.getTransactionList();
  }

  @autobind
  @action
  getTransactionHashData() {
    fetchData(`${G_WEB_DOMAIN}/ledgers/transactionHash`,
      this.setTransactionHashData,
      '', { method: 'get',}
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setTransactionHashData(result) {
    console.log(result);
    let response = result && result.data ? result.data : {};
    this.pubKeys = [];
    this.digests = [];
    this.showHistoryState = 3;
    this.transactionData = {...response};
    let arr = this.transactionData.endpointSignatures ? [...this.transactionData.endpointSignatures] : [];
    arr.map((item, key) => {
      this.pubKeys.push(tranBase58(item['pubKey']['value']));
      this.digests.push(tranBase58(item['digest']['value']));
    });
    let arr1 = this.transactionData.nodeSignatures ? [...this.transactionData.nodeSignatures] : [];
    arr1.map((item, key) => {
      this.pubKeysNode.push(tranBase58(item['pubKey']['value']));
      this.digestsNode.push(tranBase58(item['digest']['value']));
    });
    console.log(this.pubKeysNode, this.digestsNode);

  }

  @autobind
  @action
  getTransactionList() {
    fetchData(`${G_WEB_DOMAIN}/ledgers/transactionList`,
      this.setTransactionList,
      '', { method: 'get',}
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setTransactionList(result) {
    console.log(result);
    let response = result && result.data ? result.data : [];
    this.showTransactionTable = 1;
    this.transactionList = [...response];
    console.log(this.transactionList);
  }
}
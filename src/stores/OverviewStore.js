import { observable, computed, action, transaction } from 'mobx';
import { types } from 'mobx-state-tree';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import { tranBase58 } from '../common/util';
import ActionButton from 'antd/lib/modal/ActionButton';

export default class OverviewStore {
  @observable overviewHeadData = {
    blockHeight: 2,
    transactionTotal: 32124,
    userTotal: 34,
    dataLedgersTotal: 451,
    contractTotal: 32
  }; // 摘要页面tab部分
  @observable ledgerInformation = {
    adminInfo: {
      metadata: {
        seed: 'amQ=',
        setting: {
          cryptoSetting: {
            hashAlgorithm: 'SHA256',
            autoVerifyHash: false
          },
          consensusSetting: {
            hostSettingValue: 'Z2V0SG9zdFNldHRpbmdWYWx1ZQ==',
            systemSettingValue: 'Z2V0U3lzdGVtU2V0dGluZ1ZhbHVl'
          }
        },
        participantsHash: {
          value: 'F4evU3YyKryMCBNsrPg7NwBz1NX'
        }
      },
      participantCount: 1234
    },
    latestBlockHash: {
      value: '4BoCfJESYPMpDBZVNgKN1j9vuD'
    },
    hash: {
      value: '3uqhFboGY1M'
    }
  }; // 当前账本信息
  @observable accountCount = 78; // 新增账户数量
  @observable transactionCount = 246; // 新增交易数量
  @observable userTable = [
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 0,
      name: 'jd-11'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 1,
      name: 'jd-12'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 2,
      name: 'jd-13'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 3,
      name: 'jd-14'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 4,
      name: 'jd-15'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 5,
      name: 'jd-16'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 6,
      name: 'jd-17'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 7,
      name: 'jd-18'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 8,
      name: 'jd-19'
    }
  ]
  @observable pageTotal = 3
  @observable pageIndex = 1;
  @observable pageSize = 10;
  @observable count = 0;
  @observable tableData = [];
  @observable __HOST = 'http://localhost:8000/';

  @autobind
  @action
  getUserTable() {
    this.userTable && this.userTable.map((item, key) => {
      item['pubKey']['algorithm'] = tranBase58(item['pubKey']['value']);
    });
    console.log(this.userTable);
    return this.userTable;
  }

  // 获取区块高度
  @autobind
  @action
  getBlockHeight() {
    fetchData(`${this.__HOST}ledgers/block/height/max/UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setBlockHeight,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setBlockHeight(result) {
    console.log(result);
  }

  // 获取交易总数
  @autobind
  @action
  getTransactionTotal() {
    fetchData(`${this.__HOST}ledgers/tx-count/all/UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setTransactionTotal,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setTransactionTotal(result) {
    console.log(result);
  }

  // 获取用户总数
  @autobind
  @action
  getUserTotal() {
    fetchData(`${this.__HOST}ledgers/user-count/all/UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setUserTotal,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setUser(result) {
    console.log(result);
  }

  // 获取数据账户总数
  @autobind
  @action
  getLedgerTotal() {
    fetchData(`${this.__HOST}ledgers/account-count/all/UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setLedgerTotal,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setLedgerTotal(result) {
    console.log(result);
  }

  // 合约总数
  @autobind
  @action
  getContractTotal() {
    fetchData(`${this.__HOST}ledgers/contract-count/all/UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setTransactionTotal,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setContractTotal(result) {
    console.log(result);
  }

  // 获取成员列表
  @autobind
  @action
  getUserList() {
    fetchData(`${this.__HOST}ledgers/ledger/participants/UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setUserList,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setUserList(result) {
    console.log(result);
  }

  // 获取当前账本信息
  @autobind
  @action
  getLedgerCurrent() {
    fetchData(`${this.__HOST}ledgers/ledger/UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setLedgerCurrent,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setLedgerCurrent(result) {
    console.log(result);
  }

  // 获取新增交易数量
  @autobind
  @action
  getNewTransaction() {
    fetchData(`${this.__HOST}ledgers/tx-count/new/{ledgerHash}UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setNewTransaction,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setNewTransaction(result) {
    console.log(result);
  }

  // 获取新增账户数量
  @autobind
  @action
  getNewLedger() {
    fetchData(`${this.__HOST}ledgers/account-count/new/UUi8Ku8aypHYnNkJRuFnkEYSuXT`,
      this.setNewLedger,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
  }

  @autobind
  @action
  setNewLedger(result) {
    console.log(result);
  }
}
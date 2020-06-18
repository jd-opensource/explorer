import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const SearchStore = types
  .model('SearchStore', {
  })
  .volatile(self => ({
    blockHeight:0,// 区块高度
    transactionTotal:0,// 交易总数
    userTotal:0,// 用户总数
    dataLedgersTotal:0,// 数据账户总数
    dataEventTotal:0, // 事件账户总数
    contractTotal:0,// 合约总数
    allData:null,// 区块的数据
    blockData:[],// 区块数据
    txsData:[],// 交易数据
    usersData:[],// 用户数据
    accountsData:[],// 数据账户
    eventData: [], // 事件账户
    contractsData:[],// 合约数据
  }))
  .actions(self => ({
    // 获取区块高度
    getBlockHeight(param) {
      return fetchData(`${__HOST}/ledgers/${param}/blocks/latest`,
        self.setBlockHeight,
        '', { 
          method: 'get',
          headers: {
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
      });
    },

    setBlockHeight(result) {
      if (result&&result.success) {
        self.blockHeight=result.data.height||0;
      }
    },
    
    // 获取交易总数
    getTransactionTotal(param) {
      return fetchData(`${__HOST}/ledgers/${param}/txs/count`,
        self.setTransactionTotal,
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
    },
 
    setTransactionTotal(result) {
      if (result&&result.success) {
        self.transactionTotal=result.data||0;
      }
    },

    // 获取用户总数
    getUserTotal(param) {
      return fetchData(`${__HOST}/ledgers/${param}/users/count`,
        self.setUserTotal,
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
    },
    setUserTotal(result) {
      if (result&&result.success) {
        self.userTotal=result.data||0;
      }
    },

    // 获取数据账户总数
    getLedgerTotal(param) {
      return fetchData(`${__HOST}/ledgers/${param}/accounts/count`,
        self.setLedgerTotal,
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
    },
    
    setLedgerTotal(result) {
      if (result&&result.success) {
        self.dataLedgersTotal=result.data||0;
      }
    },

    // 事件账户总数
    getEventTotal(param) {
      return fetchData(`${__HOST}/ledgers/${param}/events/user/accounts/count`,
        self.setEventTotal,
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
    },
    setEventTotal(result) {
      if (result&&result.success) {
        self.dataEventTotal=result.data||0;
      }
    },

    // 合约总数
    getContractTotal(param) {
      return fetchData(`${__HOST}/ledgers/${param}/contracts/count`,
        self.setContractTotal,
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
    },
    setContractTotal(result) {
      if (result&&result.success) {
        self.contractTotal=result.data||0;
      }
    },

    // 搜索
    getBlockData(param,ledger) {
      return fetchData(`${__HOST}/ledgers/${ledger}/all/search`,
        self.setBlockData,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
  
    setBlockData(result){
      if (result&&result.success)
      {
        self.blockData=result.data && result.data.blocks || [];// 区块数据
        self.txsData= result.data && result.data.txs || [];// 交易数据
        self.usersData=result.data && result.data.users ||[];// 用户数据
        self.accountsData=result.data && result.data.accounts ||[];// 数据账户
        self.contractsData=result.data && result.data.contracts || [];// 合约数据

        self.eventData = [];

        self.allData=[...self.blockData,...self.txsData,...self.usersData,...self.accountsData,...self.contractsData, ...self.eventData];
      } 
      else{
        self.blockData=[];// 区块数据
        self.txsData=[];// 交易数据
        self.usersData=[];// 用户数据
        self.kvsData=[];// 写操作数据
        self.datasetsData=[];// 数据账户

        self.eventData = [];

        self.contractsData=[];// 合约数据
        self.allData=[];
        Notification.error({
          title:'提示',
          description: result.error&&result.error.errorMessage||'请重试！',
          duration: null
        
        });
      }
    }
  }));

export default SearchStore;
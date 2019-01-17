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
    contractTotal:0,// 合约总数
    allData:null,// 区块的数据
    total:0,// 区块数量
    transNum:0,// 交易数量
    blockData:[],// 区块数据
    txsData:[],// 交易数据
    usersData:[],// 用户数据
    kvsData:[],// 写操作数据
    datasetsData:[],// 数据账户
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

    // 搜索交易
    getBlockData(param) {
      return fetchData(`${__HOST}/api/v1/search`,
        self.setBlockData,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
  
    setBlockData(result){
      if (result.message == 'OK')
      {
        self.blockData=result.data && result.data.blocks || [];// 区块数据
        self.txsData= result.data && result.data.txs || [];// 交易数据
        self.usersData=result.data && result.data.users ||[];// 用户数据
        self.kvsData=result.data && result.data.kvs ||[];// 写操作数据
        self.datasetsData=result.data && result.data.datasets ||[];// 数据账户
        self.contractsData=result.data && result.data.contracts || [];// 合约数据
        self.allData=[...self.blockData,...self.txsData,...self.usersData,...self.kvsData,...self.datasetsData,...self.contractsData];
        self.total = self.blockData.length;
        self.transNum = self.transData.length;
        console.log(self.datasetsData);
      } 
      else{
        self.blockData=[];// 区块数据
        self.txsData=[];// 交易数据
        self.usersData=[];// 用户数据
        self.kvsData=[];// 写操作数据
        self.datasetsData=[];// 数据账户
        self.contractsData=[];// 合约数据
        self.allData=[];
        self.total =0;
        self.transNum = 0;
      }
    }
  }));

export default SearchStore;
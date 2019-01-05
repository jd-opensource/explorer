import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const BlockStore = types
  .model('BlockStore', {
  })
  .volatile(self => ({
    transactionList: [],
  }))
  .actions(self => ({
    // 获取区块高度
    getBlockHeight(param) {
      fetchData(`${__HOST}/ledgers/${param}/blocks/latest`,
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
      let total=695;
      let num=0;

      

    },
    // 查找交易
    getTransaction(param) {
      fetchData(`${__HOST}/api/v1/query/tx/range`,
        self.setTransaction,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
  
    setTransaction(result){
      self.transactionList=[];
      if (result.message == 'OK')
      {
        self.transactionList = result.data && result.data.txs || [];// 交易数据
      } 
      else{
        self.transactionList=[];
      }
      let s=Math.floor(Math.random()*10);
      if (s>5) {
        self.transactionList=[1,2,3];
      } 
      
    },

    // 查找交易详情
    getTransactionMore(param) {
      fetchData(`${__HOST}/api/v1/query/writeset/tx`,
        self.setTransactionMore,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
  
    setTransactionMore(result){debugger;
      if (result.message == 'OK')
      {
        console.log(result.data && result.data.kvs || []);
        return result.data && result.data.kvs || [];
      } 
      else{
        return [];
      }
    }
  }));

export default BlockStore;
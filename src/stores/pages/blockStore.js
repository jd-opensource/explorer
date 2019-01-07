import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const BlockStore = types
  .model('BlockStore', {
  })
  .volatile(self => ({
    transactionList: [],
    blockHeight:0,// 区块高度
    blockHash:''
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
        return result.data.height||0;
      }
      else{
        return 0;
      }
    },
    // 查找交易
    getTransaction(param) {
      return fetchData(`${__HOST}/api/v1/query/tx/range`,
        self.setTransaction,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
  
    setTransaction(result){
      if (result.message == 'OK')
      {
        self.transactionList = result.data && result.data.txs || [];// 交易数据
      } 
      else{
        self.transactionList=[];
      }      
    },

    // 查找交易详情
    getTransactionMore(param) {
      return fetchData(`${__HOST}/api/v1/query/writeset/tx`,
        self.setTransactionMore,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
  
    setTransactionMore(result){
      if (result.message == 'OK')
      {
        return result.data && result.data.kvs || [];
      } 
      else{
        return [];
      }
    },
    // 获取交易Hash
    getTransactionHash(param) {
      return fetchData(`${__HOST}/api/v1/query/block/range`,
        self.setTransactionHash,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
  
    setTransactionHash(result){
      if (result.message == 'OK')
      {
        self.blockHash=result.data && result.data.blocks && result.data.blocks.length>0 && result.data.blocks[0]['hash_id'] || '';
        self.blockHeight=result.data && result.data.blocks && result.data.blocks.length>0 && result.data.blocks[0]['height'] || 0;
      } 
    }
  }));

export default BlockStore;
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
    blockHash:'',
    // jinlong12
    inputRole: 0,
    blockList: [],
  }))
  .actions(self => ({
    setInputRole(e) {
      self.inputRole = e;
    },

    searchData(success, ledger) {
      console.log(success, ledger)
      let totalBlock=success[0];// 最高区块
      let searchBlock=self.inputRole*1; // 将要搜索的区块
      console.log(totalBlock, searchBlock);
      if(self.inputRole==0){
        searchBlock=totalBlock-3; // 将要搜索的区块
      }
      self.inputRole=searchBlock;
      // 验证区块是否超过最大区块
      if (searchBlock>totalBlock) {
        searchBlock= totalBlock;
      }
      // 验证区块是否小于1
      if (searchBlock<1) {
        searchBlock=1;
      }
      let interval=3,// 区块列表显示数量前后间隔
        length=7,// 区块列表显示数量
        startBlock=searchBlock-3,// 区块列表显示起始高度
        endBlock=searchBlock+3;// 区块列表显示终止高度
      // 起始高度是开始的情况
      if (startBlock<=1) {
        // 计算起始高度
        for (let i = 0; i < length; i++) {
          if (startBlock<1) {
            startBlock++;
            endBlock++;
          }
        }
        // 计算终止高度
        for (let i = 0; i <length; i++) {
          if (endBlock>totalBlock) {
            endBlock--;
          }
        }
      } else if(endBlock>=totalBlock){
        // 计算起始高度
        for (let i = 0; i < length; i++) {
          if (endBlock>totalBlock) {
            
            startBlock>1&&startBlock--;
            endBlock--;
          }
        }
      }
      self.blockList=[];
      for (let i = startBlock; i <= endBlock; i++) {
        self.blockList.push({
          height:i,
          check:i==searchBlock
        });
        
      }
      console.log(self.blockList);
      // this.blockList=this.blockList.reverse();
      // closeLoading();
      Promise.all([
        self.getTransaction({
          height:self.inputRole,
          from:0,
          to:60,
          ledgers:ledger
        }),
        self.getTransactionHash({
          from:self.inputRole,
          to:self.inputRole,
          ledgers:ledger
        })
      ]).then(() => {
      });
    },

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
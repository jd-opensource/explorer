import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const BlockStore = types
  .model('BlockStore', {
  })
  .volatile(self => ({
    blockHeight:0,// 区块高度
    txCount:0,//区块内的交易数量
    blockInformation:{},//区块信息
    transactionList:[],//交易列表
    transactionInfo:{},//交易详细信息
    blockHash:'',
    inputRole: 0,
    blockList: [],
  }))
  .actions(self => ({
    setInputRole(e) {
      self.inputRole = e;
    },

    searchData(success, ledger) {
      let totalBlock=success[0];// 最高区块
      let searchBlock=self.inputRole*1; // 将要搜索的区块
      if(self.inputRole<0){
        searchBlock=totalBlock-3; // 将要搜索的区块
      }
      self.inputRole=searchBlock;
      // 验证区块是否超过最大区块
      if (searchBlock>totalBlock) {
        searchBlock= totalBlock;
      }
      // 验证区块是否小于1
      if (searchBlock<0) {
        searchBlock=0;
      }
      let interval=3,// 区块列表显示数量前后间隔
        length=7,// 区块列表显示数量
        startBlock=searchBlock-3,// 区块列表显示起始高度
        endBlock=searchBlock+3;// 区块列表显示终止高度
      // 起始高度是开始的情况
      if (startBlock<=1) {
        // 计算起始高度
        for (let i = 0; i < length; i++) {
          if (startBlock<0) {
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
        self.blockHeight=result.data.height||0;
        return result.data.height||0;
      }
      else{
        return 0;
      }
    },

    // 根据高度查询交易数量
    getTxCount(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/blocks/height/${param.height}/txs/additional-count`,
        self.setTxCount,
        '', { 
          method: 'get',
          headers: {
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
      });
    },
    // 根据哈希查询交易数量
    getTxCountOfHash(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/blocks/hash/${param.hash}/txs/additional-count`,
        self.setTxCount,
        '', { 
          method: 'get',
          headers: {
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
      });
    },
    setTxCount(result) {
      if (result&&result.success) {
        self.txCount= result.data||0;
      }
    },

    // 根据高度获取区块的详细信息
    getBlockInformation(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/blocks/height/${param.height}`,
        self.setBlockInformation,
        '', { 
          method: 'get',
          headers: {
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
      });
    },
    //根据hash获取区块的详细信息
    getBlockInformationOfHash(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/blocks/hash/${param.hash}`,
        self.setBlockInformation,
        '', { 
          method: 'get',
          headers: {
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
      });
    },
    setBlockInformation(result) {
      if (result&&result.success) {
        self.blockInformation= result.data;
        return result.data;
      }
    },
    //根据hash获取区块的高度
    getBlockHeightOfHash(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/blocks/hash/${param.hash}`,
        self.setBlockHeightOfHash,
        '', { 
          method: 'get',
          headers: {
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
      });
    },
    setBlockHeightOfHash(result) {
      if (result&&result.success) {
       return result.data.height;
      }
      else{
        return 0;
      }
    },
    // 根据高度查找交易
    getTransaction(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/blocks/height/${param.height}/txs`,
        self.setTransaction,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
    // 查找hash交易
    getTransactionOfHash(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/blocks/hash/${param.hash}/txs`,
        self.setTransaction,param,
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
    setTransaction(result){
      if (result&&result.success) {
        self.transactionList = result.data || [];// 交易数据
        return result.data;
      }     
    },

    // 查找交易详情
    getTransactionMore(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/txs/hash/${param.tx_hash}`,
        self.setTransactionMore,'',
        { 
          method: 'get',
        }
      ).catch(error => {
      });
    },
  
    setTransactionMore(result){
      
      if (result&&result.success) {
        self.transactionInfo = result.data || {};// 交易数据
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
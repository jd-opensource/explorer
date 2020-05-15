import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
// import fetchData from 'flarej/lib/utils/fetchData';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const ContractStore = types
  .model('ContractStore', {
    bool: types.optional(types.boolean, true), // 布尔类型声明
    strs: types.optional(types.string, ''), // 字符串类型声明
    arrs: types.optional(types.array(types.string), []), // 数组类型声明
  })
  .volatile(self => ({
    modData: null,
    tableData: [],
    accountcount:0,//数据账户总条数
    accountcurrent:1,//当前选中页码
  }))
  .views(self => ({

  }))
  .actions(self => ({
    afterCreate() {

    },
    
    // 设置页码
    setCurrent(v){
      self.accountcurrent=v;
    },

    // 合约列表
    getContracts(ledger,param) {
      return fetchData(`${__HOST}/ledgers/${ledger}/contracts`,
        self.setContracts,
        param, { 
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
    // 合约列表--模糊查询
    getContractsVague(ledger,param) {
      return fetchData(`${__HOST}/ledgers/${ledger}/contracts/search`,
        self.setContractsVague,
        param, { 
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
    setContracts(result) {
      if (result&&result.success) {
        self.tableData=result.data||[];

      }
    },
    setContractsVague(result) {
      if (result&&result.success) {
        // self.tableData=result.data.contracts||[];
        self.tableData=result.data||[];

      }
    },
    // 合约列表总数
    getContractsCount(ledger) {
      return fetchData(`${__HOST}/ledgers/${ledger}/contracts/count`,
        self.setContractsCount,
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
    // 合约列表总数--模糊查询
    getContractsCountVague(ledger,keyword) {
      return fetchData(`${__HOST}/ledgers/${ledger}/contracts/count/search`,
        self.setContractsCount,
        {keyword:keyword}, { 
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
    setContractsCount(result) {
      if (result&&result.success) {
        self.accountcount=result.data||0;
        if(self.accountcount*1==0){
          self.tableData=[];
        }
      }
    },
    // 根据合约地址查询详细信息
    getContractsByAddress(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/contracts/address/${param.address}`,
        self.setContractsByAddress,
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
    setContractsByAddress(result) {
      if (result&&result.success) {
        return result.data||[];
      }
    },
  }));

export default ContractStore;

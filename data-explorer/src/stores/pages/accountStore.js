import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const AccountStore = types
  .model('AccountStore', {
  })
  .volatile(self => ({
    tableData: [],
    accountcount:0,//数据账户总条数
    accountcurrent:1,//当前选中页码
    ledger:'',
  }))
  .actions(self => ({
    // 设置页码
    setCurrent(v){
      self.accountcurrent=v;
    },
    // 数据账户列表
    getAccounts(ledger,param) {
      self.ledger=ledger;
      return fetchData(`${__HOST}/ledgers/${ledger}/accounts`,
        self.setAccounts,
        param, {
          method: 'get',
          headers: {
            // accept: 'application/json',
            cookie: document.cookie,
          }
        }
      ).catch(error => {

      });
    },
    // 数据账户列表--模糊查询
    getAccountVague(ledger,param) {
      self.ledger=ledger;
      return fetchData(`${__HOST}/ledgers/${ledger}/accounts/search`,
        self.setAccounts,
        param, { 
          method: 'get',
          headers: {
            // accept: 'application/json',
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
        
      });
    },
    setAccounts(result) {
      if (result&&result.success) {
        self.tableData=result.data||[];
      }
      else{
        self.tableData=[];
      }
    },
    // 数据账户列表总数
    getAccountCount(ledgers) {
      return fetchData(`${__HOST}/ledgers/${ledgers}/accounts/count`,
        self.setAccountCount,
        '', { 
          method: 'get',
          headers: {
            // accept: 'application/json',
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
        
      });
    },
    // 数据账户列表总数--模糊查询
    getAccountCountVague(ledgers,keyword) {
      return fetchData(`${__HOST}/ledgers/${ledgers}/accounts/count/search`,
        self.setAccountCount,
        {keyword:keyword}, { 
          method: 'get',
          headers: {
            // accept: 'application/json',
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
        
      });
    },
    setAccountCount(result) {
      if (result&&result.success) {
        self.accountcount=result.data||0;
        if(self.accountcount*1==0){
          self.tableData=[];
        }
      }
    },
    // 数据账户KV总数
    getEntriescount(ledger,address) {
      return fetchData(`${__HOST}/ledgers/${ledger}/accounts/address/${address}/entries/count`,
        self.setEntriescount,
        '', { 
          method: 'get',
          headers: {
            // accept: 'application/json',
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
        
      });
    },
    setEntriescount(result) {
      if (result&&result.success) {
        return result.data;
      }
      else{
        return 0;
      }
    },
    // 数据账户KV列表
    getEntries(ledger,address,param) {
      return fetchData(`${__HOST}/ledgers/${ledger}/accounts/address/${address}/entries`,
        self.setEntries,
        param, { 
          method: 'get',
          headers: {
            // accept: 'application/json',
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
        
      });
    },
    setEntries(result) {
      if (result&&result.success) {
        return result.data;
      }
      else{
        return [];
      }
    },
    // 数据账户详细信息
    getAccountInfo(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledger}/accounts/address/${param.address}`,
        self.setAccountInfo,
        '', { 
          method: 'get',
          headers: {
            // accept: 'application/json',
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
        
      });
    },
    setAccountInfo(result) {
      if (result&&result.success) {
        return result.data;
      }
    },
    // 穿透式检索
    getSchemaInfo(param) {
      return fetchData(`${__HOST}/schema/querysql`,
        self.setSchemaInfo,
        param, { 
          method: 'post',
          headers: {
            Accept: '*/*',
          } 
        }
      ).catch(error => {
      });
    },
    setSchemaInfo(result) {
      return result;
    },
  }));

export default AccountStore;
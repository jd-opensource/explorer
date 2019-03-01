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
    count:0,
  }))
  .actions(self => ({
    // 设置页码
    setCurrent(v){
      self.accountcurrent=v;
    },
    // 数据账户列表
    getAccount(ledger,param) {
      self.ledger=ledger;
      return fetchData(`${__HOST}/ledgers/${ledger}/accounts`,
        self.setAccount,
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
    setAccount(result) {
      if (result&&result.success) {
        self.tableData=result.data||[];
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
        console.log(error);
      });
    },
    setAccountCount(result) {
      if (result&&result.success) {
        self.accountcount=result.data||0;
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
        console.log(error);
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
  }));

export default AccountStore;
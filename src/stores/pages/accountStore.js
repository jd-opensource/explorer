import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const AccountStore = types
  .model('AccountStore', {
  })
  .volatile(self => ({
    tableData: [],
  }))
  .actions(self => ({
    // 数据账户
    getAccount(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledgers}/accounts`,
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
      if (result&&result.message=="OK") {
        self.tableData=result.data||[];

      }
    },
  }));

export default AccountStore;
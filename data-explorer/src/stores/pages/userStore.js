import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const UserStore = types
  .model('UserStore', {
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

    // 设置页码
    setCurrent(v){
      self.accountcurrent=v;
    },
    
    // 用户信息列表
    getUser(ledger,param) {
      return fetchData(`${__HOST}/ledgers/${ledger}/users`,
        self.setUser,
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
    setUser(result) {
      if (result&&result.success) {
        self.tableData=result.data||[];
      }
    },
    // 用户信息列表总数
    getUserCount(ledger) {
      return fetchData(`${__HOST}/ledgers/${ledger}/users/count`,
        self.setUserCount,
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
    setUserCount(result) {
      if (result&&result.success) {
        self.accountcount=result.data||0;
      }
    },
     // 用户信息列表--模糊查询
    getUserVague(ledger,param) {
      return fetchData(`${__HOST}/ledgers/${ledger}/users/search`,
        self.setUserVague,
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
    setUserVague(result) {
      if (result&&result.success) {
        self.tableData=result.data||[];
      }
      else{
        self.tableData=[];
      }
    },
    // 用户信息列表总数
    getUserCountVague(ledger,keyword) {
      return fetchData(`${__HOST}/ledgers/${ledger}/users/count/search`,
        self.setUserCountVague,
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
    setUserCountVague(result) {
      if (result&&result.success) {
        self.accountcount=result.data||0;
        if(self.accountcount*1==0){
          self.tableData=[];
        }
      }
      else{
        self.accountcount=0;
        Notification.error({
          title:'提示',
          description: result.error&&result.error.errorMessage||'请重试！',
          duration: null
        
        });
      }
    },
  }));

export default UserStore;

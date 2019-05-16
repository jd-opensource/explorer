import { types } from 'mobx-state-tree';
import { fetchData } from '../utils/fetchConfig';
import Notification from '../utils/notification';

export const UserInfo = types.model('UserInfo', {
  pin: types.maybe(types.string),
  name: types.maybe(types.string),
});

export const CommonStore = types
  .model('CommonStore', {
    userInfo: types.maybe(UserInfo),
   
  }).volatile(self => ({
    ledgers: [],
    ledgerinfo:{},
    defaultledger:'',
  }))
  .views(self => ({
   
    get isDemo() {
      return self.userInfo.pin && self.userInfo.pin.trim().toLowerCase() === 'jd_653e751552511';
    }
  }))
  .actions(self => ({
    //设置当前账本
    setDefaultLedger(v){
      self.defaultledger=v;
    },
    getDefaultLedger(){
      return self.defaultledger || localStorage.getItem("defaultledger");
    },
    getLedgersInfo() {
      return fetchData(`${__HOST}/ledgers`,
        self.setLedgersInfo,
        null, { method: 'get' })
        .catch((ex) => {
          Notification.error({
            description: '获取账本信息异常:' + ex,
            duration: null
          });
        });
    },
    setLedgersInfo(result) {
      if (result.success) {
        self.ledgers = result.data;
      } else {
        Notification.error({
          description: '获取账本信息错误:' + result.message,
          duration: null
        });
      }
    },
    // 获取账本信息
    getLedgerInfo() {
      return fetchData(`${__HOST}/ledgers`,
        self.setLedgerInfo,
        null, { method: 'get' })
        .catch((ex) => {
          Notification.error({
            description: '获取账本信息异常:' + ex,
            duration: null
          });
        });
    },
    setLedgerInfo(result) {
      if (result.success) {
        self.ledgers = result.data;
      } else {
        Notification.error({
          description: '获取账本信息错误:' + result.message,
          duration: null
        });
      }
    },
    // 获取账本详细信息
    getLedger(ledgerHash) {
      return fetchData(`${__HOST}/ledgers/${ledgerHash}/settings`,
        self.setLedger,
        null, { method: 'get' })
        .catch((ex) => {
          Notification.error({
            description: '获取账本信息异常:' + ex,
            duration: null
          });
        });
    },
    setLedger(result) {
      if (result.success) {
        self.ledgerinfo = result.data;
      } else {
        Notification.error({
          description: '获取账本信息错误:' + result.message,
          duration: null
        });
      }
    },

  }));

export const Category = types.model('Category', {
  value: '0',
  label: ''
});

export const Brand = types.model('Category', {
  value: '0',
  label: ''
});
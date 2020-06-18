import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import fetchData from 'flarej/lib/utils/fetchData';
import Notification from '../../utils/notification';

const EventStore = types
  .model('EventStore', {
    bool: types.optional(types.boolean, true), // 布尔类型声明
    strs: types.optional(types.string, ''), // 字符串类型声明
    arrs: types.optional(types.array(types.string), []), // 数组类型声明
  })
  .volatile(self => ({
    tableData: [],
    accountcount:0,//数据账户总条数
    accountcurrent:1,//当前选中页码
    ledger:'',

    dataEvent: [], // 事件列表
    eventTotal: 0, // 事件总数
    eventCurrent: 1, // 事件列表当前页

    dataName: [],
    nameTotal: 0,
    nameCurrent: 1,

    dataLatest: {}, // 最新事件数据
  }))
  .views(self => ({
    
  }))
  .actions(self => ({
    afterCreate() {

    },

    setCurrent(v) {
      self.accountcurrent=v;
    },

    setEvent(v) {
      self.eventCurrent = v;
    },

    setName(v) {
      self.nameCurrent = v;
    },

    // 事件账户列表
    getAccount(ledger,param, keywords) {
      self.ledger=ledger;
      return fetchData(`${__HOST}/ledgers/${ledger}/events/user/accounts`,
        result => self.setAccount(result, keywords),
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
    setAccount(result, keywords) {
      if (result&&result.success) {
        self.tableData = result.data && result.data.filter(item => item.address.value.indexOf(keywords) != -1) || [];
      }
      else{
        self.tableData=[];
      }
    },

    // 事件账户列表总数
    getAccountCount(ledgers) {
      return fetchData(`${__HOST}/ledgers/${ledgers}/events/user/accounts/count`,
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
        if(self.accountcount*1==0){
          self.tableData=[];
        }
      }
    },

    // 指定事件账户下事件列表
    getEvent(ledgers, address) {
      return fetchData(`${__HOST}/ledgers/${ledgers}/events/user/accounts/${address}/names`,
        self.setEvent,
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
    setEvent(result) {
      if (result && result.success) {
        self.dataEvent = result.data||[];
        console.log(self.dataEvent)
      }
      else{
        self.dataEvent = [];
      }
    },

    // 指定事件账户下事件列表总数
    getEventCount(ledgers, address) {
      return fetchData(`${__HOST}/ledgers/${ledgers}/events/user/accounts/${address}/names/count`,
        self.setEventCount,
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
    setEventCount(result) {
      if (result && result.success) {
        self.eventTotal = result.data || 0;
        if(self.eventTotal * 1 == 0){
          self.dataEvent = [];
        }
      }
    },

    getEventName(ledgers, address, eventName, param) {
      return fetchData(`${__HOST}/ledgers/${ledgers}/events/user/accounts/${address}/names/${eventName}`,
        self.setEventName,
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

    setEventName(result) {
      if (result && result.success) {
        self.dataName = result.data||[];
      }
      else{
        self.dataName = [];
      }
    },

    getEventLatest(ledgers, address, eventName) {
      return fetchData(`${__HOST}/ledgers/${ledgers}/events/user/accounts/${address}/names/${eventName}/latest`,
        self.setEventLatest,
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
    setEventLatest(result) {
      if (result && result.success) {
        self.dataLatest = result.data || {};
      }
      else{
        self.dataLatest = {};
      }
    }
  }));

export default EventStore;
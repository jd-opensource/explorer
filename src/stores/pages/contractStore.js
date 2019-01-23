import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import fetchData from 'flarej/lib/utils/fetchData';
import Notification from '../../utils/notification';

const ContractStore = types
  .model('ContractStore', {
    bool: types.optional(types.boolean, true), // 布尔类型声明
    strs: types.optional(types.string, ''), // 字符串类型声明
    arrs: types.optional(types.array(types.string), []), // 数组类型声明
  })
  .volatile(self => ({
    modData: null,
    tableData: [{
      "address": "5Sm2AU76zG87TyQuDHgMYYB5nEAd4hggEpxW", 
      "publicKey": "maxTXMJHviDWiYKfkaxdTciHeXPDDmGesMWfzV7iip2VxH"
    }],
  }))
  .views(self => ({

  }))
  .actions(self => ({
    afterCreate() {

    },
  }));

export default ContractStore;

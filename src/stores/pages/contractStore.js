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
    tableData: [],
  }))
  .views(self => ({

  }))
  .actions(self => ({
    afterCreate() {

    },
    // 合约
    getContracts(param) {
      return fetchData(`${__HOST}/ledgers/${param.ledgers}/contracts`,
        self.setContracts,
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
    setContracts(result) {
      if (result&&result.success) {
        self.tableData=result.data||[];

      }
    },
  }));

export default ContractStore;

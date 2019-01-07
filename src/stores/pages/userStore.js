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
  }))
  .views(self => ({

  }))
  .actions(self => ({

    // 用户信息
    getUser(param) {
      return fetchData(`${__HOST}/api/v1/query/user`,
        self.setUser,
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
    setUser(result) {
      if (result&&result.code==0) {
        self.tableData=result.data.users||[];

      }
    },
  }));

export default UserStore;

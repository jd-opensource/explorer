import { types } from 'mobx-state-tree';
import { observable, toJS } from 'mobx';
import { fetchData } from '../../utils/fetchConfig';
import Notification from '../../utils/notification';

const SearchStore = types
  .model('SearchStore', {
    isDisable: types.optional(types.boolean, true),
    activeKey: types.optional(types.string, 'tab1'),
    addModalVisible: false,
    editModalVisible: false,
    saveBtnDisabled: false,
    addInputRole: '',
    addInputDes: '',
    roleId: 0,
    expandedKeys: types.optional(types.array(types.string), []),
    checkedKeys: types.optional(types.array(types.string), []),
    detailModalVisible: false
  })
  .volatile(self => ({
    tableData: null,
    tableDataO: null,
    searchData: null,
    addRoleData: null,
    treeData: null,
    addRoleId: null,
    menuIds: null,
    authTreeData: null,
    menuData: null,
    detailData: [],
    blockHeight:0,// 区块高度
  }))
  .actions(self => ({
    afterCreate() {
      self.authTreeDataMap = null;
    },

    setAddModalVisible(v) {
      self.addModalVisible = v;
    },

    setEditModalVisible(v) {
      self.editModalVisible = v;
    },

    setSaveBtnDisabled(v) {
      self.saveBtnDisabled = v;
    },

    setAddInputRole(v) {
      self.addInputRole = v;
    },

    setAddInputDes(v) {
      self.addInputDes = v;
    },

    setRoleId(v) {
      self.roleId = v;
    },

    setExpandedKeys(v) {
      self.expandedKeys = v;
    },

    setCheckedKeys(v) {
      self.checkedKeys = v;
    },

    setDetailModalVisible(v) {
      self.detailModalVisible = v;
    },

    setDetailData(v) {
      self.detailData = v;
    },

    setMenuIds(checkeds) {
      self.menuIds = checkeds.join();
    },

    setTableData(value) {
      self.tableData = value;
    },

    setDisable(value) {
      self.isDisable = value;
    },

    setActiveKey(value) {
      self.activeKey = value;
    },

    initTree() {
      self.expandedKeys = self.getExpandedKeys(toJS(self.menuData));
      self.checkedKeys = self.getDefaultCheckedKeys();
    },

    getRoleMenuTree(params) {
      return fetchData(`${__HOST}/search/getRoleMenuTree`,
        self.setRoleMenuTree,
        params, { method: 'get' })
        .catch((ex) => {
          Notification.error({
            description: '获取角色权限数据异常:' + ex,
            duration: null
          });
        });
    },

    setRoleMenuTree(result) {
      if (result.success) {
        self.menuData = result.data;
        self.authTreeDataMap = self.getAuthTreeDataMap(result.data);
        self.authTreeData = self.getAuthTreeData(result.data, self.authTreeDataMap);
      } else {
        Notification.error({
          description: '获取角色权限数据错误:' + result.message,
          duration: null
        });
      }
    },

    getRoleManagementData(params) {
      return fetchData(`${__HOST}/api/v1/search`,
        self.setRoleManagementData,
        params, { method: 'get' })
        .catch((ex) => {
          Notification.error({
            description: '获取角色管理数据异常:' + ex,
            duration: null
          });
        });
    },

    setRoleManagementData(result) {
      if (result.success) {
        const data = result.data;
        self.tableDataO = self.tableData = data.length > 0 ? data : [];
      } else {
        Notification.error({
          description: '获取角色管理度数据异常:' + result.message,
          duration: null
        });
      }
    },

    searchRole(params) {
      return fetchData(`${__HOST}/search/searchRole`,
        self.setSearchRole,
        params, { method: 'get' })
        .catch((ex) => {
          Notification.error({
            description: '获取角色数据异常:' + ex,
            duration: null
          });
        });
    },

    setSearchRole(result) {
      if (result.success) {
        const data = result.data;
        self.searchData = data;
      } else {
        Notification.error({
          description: '获取角色数据异常:' + result.message,
          duration: null
        });
      }
    },

    saveRole(params) {
      return fetchData(`${__HOST}/search/saveRole`,
        self.setSaveRole,
        params, { method: 'post' })
        .catch((ex) => {
          Notification.error({
            description: '添加角色数据异常:' + ex,
            duration: null
          });
        });
    },

    setSaveRole(result) {
      if (result.success) {
        const data = result.data;
        self.addRoleId = data.roleId;
        Notification.success({ description: '添加角色成功！', duration: 2 });
        self.setDisable(false);

      } else {
        Notification.error({
          description: '添加角色数据异常:' + result.message,
          duration: null
        });
      }
    },

    saveRolePermission(params) {
      return fetchData(`${__HOST}/search/saveRolePermission`,
        self.setSaveRolePermission,
        params, { method: 'post' })
        .catch((ex) => {
          Notification.error({
            description: '添加角色权限数据异常:' + ex,
            duration: null
          });
        });
    },

    setSaveRolePermission(result) {
      if (result.success) {
        Notification.success({ description: '添加角色权限成功！', duration: 2 });
      } else {
        Notification.error({
          description: '添加角色权限数据异常:' + result.message,
          duration: null
        });
      }
    },

    deleteRole(params) {
      return fetchData(`${__HOST}/search/deleteRole`,
        self.setDeleteRole,
        params, { method: 'post' })
        .catch((ex) => {
          Notification.error({
            description: '删除角色数据异常:' + ex,
            duration: null
          });
        });
    },

    setDeleteRole(result) {
      if (result.success) {
        Notification.success({ description: '删除角色成功！', duration: null });
      } else {
        Notification.error({ description: '删除角色数据异常:' + result.message, duration: null });
      }
    },
    // 获取区块高度
    getBlockHeight(param) {
      fetchData(`${__HOST}/ledgers/${param}/blocks/latest`,
        self.setBlockHeight,
        '', { 
          method: 'get',
          headers: {
            cookie: document.cookie,
          } 
        }
      ).catch(error => {
        console.log(error);
      });
    },

    setBlockHeight(result) {
      if (result&&result.success) {
        self.blockHeight=result.data.height||0;
      }
      // let response = result;
      // this.overviewHeadData.blockHeight = response && response.data && response.data.height ? response.data.height : 0; 
    },

    // 获取交易总数
    getTransactionTotal() {
      fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/txs/count`,
        this.setTransactionTotal,
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
 
    setTransactionTotal(result) {
      let response = result;
      this.overviewHeadData.transactionTotal = response && response.data ? response.data : 0; 
    },

    // 获取用户总数
    getUserTotal() {
      fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/users/count`,
        this.setUserTotal,
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
    setUserTotal(result) {
      let response = result;
      this.overviewHeadData.userTotal = response && response.data ? response.data : 0; 
    },

   // 获取数据账户总数
    getLedgerTotal() {
      fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/accounts/count`,
        this.setLedgerTotal,
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
    
    setLedgerTotal(result) {
      let response = result;
      this.overviewHeadData.dataLedgersTotal = response && response.data ? response.data : 0; 
    },

    // 合约总数
    getContractTotal() {
      fetchData(`${G_WEB_DOMAIN}/ledgers/${localStorage.defaultValue}/contracts/count`,
        this.setContractTotal,
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
    setContractTotal(result) {
      let response = result;
      this.overviewHeadData.contractTotal = response && response.data ? response.data : 0;
    },
  }));

export default SearchStore;
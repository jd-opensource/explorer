import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/pagination';
import 'flarej/lib/components/antd/tabs';
import 'flarej/lib/components/antd/tree';
import 'flarej/lib/components/antd/checkbox';
import Modal from 'flarej/lib/components/antd/modal';
import Tree from 'flarej/lib/components/antd/tree';
import Input from 'flarej/lib/components/antd/input';
import Message from 'flarej/lib/components/antd/message';
import Notification from '../../../utils/notification';
import styles from './transaction.m.scss';
import tmpls from './transaction.t.html';

//页面容器组件
@registerTmpl('Transaction')
@inject('store')
@observer
export default class Transaction extends Component {
  @observable detailModalVisible = false;
  @observable inputRole = '';
  @observable detailData = [];
  @observable selectedRowKeys = [];
  @observable selectedRows = [];

  componentDidMount() {
    const { store: { transaction,header } } = this.props;
    header.setSelectMenu(['transaction']);
    //const closeLoading = Message.loading('正在获取数据...', 0);
   
  }

  @autobind
  onInputRole(e) {
    this.inputRole = e.target.value;
  }

  @autobind
  onSearch() {
    if (this.inputRole == '') {
      const closeLoading = Message.loading('正在获取数据...', 0);
      Promise.all([
        this.props.store.transaction.getRoleManagementData(),
      ]).then(() => {
        closeLoading();
      });
    } else {
      const { store: { transaction } } = this.props;
      const searchRole = transaction.tableDataO.filter(n => n.name.indexOf(this.inputRole.trim()) > -1);
      transaction.setTableData(searchRole);
    }
  }

  @autobind
  onAddRole() {
    const { store: { transaction } } = this.props;
    transaction.setAddModalVisible(true);
    transaction.setDisable(true);
    transaction.setActiveKey('tab1');
    transaction.setAddInputRole('');
    transaction.setAddInputDes('');
  }

  @autobind
  onDeleteRole() {
    const { store: { transaction } } = this.props;
    if (this.selectedRowKeys.length == 0) {
      Notification.error({ description: '请勾选要删除的角色！', duration: 3 });
    } else {
      Modal.confirm({
        title: '你确认要删除角色吗？',
        onOk: () => {
          const closeLoading = Message.loading('正在获取数据...', 0);
          const roleId = this.selectedRows.map((item) => item.roleId);

          Promise.all([
            transaction.deleteRole({ roleId: roleId })
          ]).then(() => {
            transaction.getRoleManagementData();
          }).then(() => {
            this.selectedRowKeys = [];
            closeLoading();
          });
        }
      });
    }
  }

  @computed get tableColumns() {
    return [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '角色名称',
      dataIndex: 'name',
    }, {
      title: '角色描述',
      dataIndex: 'describe',
    }, {
      title: '创建时间',
      dataIndex: 'cTime',
    }, {
      title: '修改时间',
      dataIndex: 'mTime',
    }, {
      title: '操作',
      dataIndex: 'handler',
      render: (text, record, index) => nj `
        <span>
          <a href="javascript:;" onClick=${()=>this.onEdit(record, index)} className="btn-link">编辑</a>
          <a href="javascript:;" onClick=${()=>this.onDetail(record, index)} className="btn-link">用户明细</a>
        </span>
      ` (),
    }];
  }

  @autobind
  onEdit(record, index) {
    const { store: { transaction } } = this.props;
    transaction.setEditModalVisible(true);
    transaction.setSaveBtnDisabled(true);
    transaction.setActiveKey('tab1');
    transaction.setAddInputRole(record.name);
    transaction.setAddInputDes(record.describe);
    transaction.setRoleId(record.roleId);
    transaction.setDisable(false);

    const closeLoading = Message.loading('正在获取数据...', 0);
    Promise.all([
      transaction.getRoleMenuTree({ roleId: record.roleId }).then(() => transaction.initTree()),
    ]).then(() => {
      closeLoading();
    });
  }

  @autobind
  onDetail(record, index) {
    const { store: { transaction } } = this.props;
    transaction.setDetailModalVisible(true);
    transaction.setDetailData(record.users);
  }

  getRowSelection() {
    return {
      selectedRowKeys: this.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.selectedRowKeys = selectedRowKeys;
        this.selectedRows = selectedRows;
      }
    };
  }

  render() {
    const { store: { transaction } } = this.props;
    return tmpls.container(this.props, this, {
      styles,
      transaction,
      tableData: toJS(transaction.tableData),
      rowSelection: this.getRowSelection(),
    });
  }
}

@registerTmpl('ModalFormTransaction')
@inject('store')
@observer
class ModalForm extends Component {
  @observable autoExpandParent = false;

  //获取树节点的展开形式
  getExpandedKeys(arr) {
    return arr.filter(n => n.level == 1 || n.level == 2).map(m => { return m.id.toString(); });
  }

  getDefaultCheckedKeys() {
    let keys = [];
    this.props.store.transaction.menuData.filter(n => n.level == 3)
      .forEach(item => {
        if (item.selected) {
          keys.push(item.id.toString());
        }
      });
    return keys;
  }

  //获取选中的 checkbox 包含父级未选中状态
  getAllCheckedKeys(key) {
    const _map = toJS(this.props.store.transaction.authTreeDataMap);
    if (key.length > 1) {
      let pids = key.map(item => { return _map[item].pids; });
      return Array.from(new Set([].concat(...pids)));
    } else {
      return _map[key].pids;
    }
  }

  @autobind
  onExpand(expandedKeys) {
    const { store: { transaction } } = this.props;
    transaction.setExpandedKeys(expandedKeys);
    this.autoExpandParent = true;
  }

  @autobind
  onCheck(checkedKeys) {
    const { store: { transaction } } = this.props;
    transaction.setSaveBtnDisabled(false);
    transaction.setCheckedKeys(checkedKeys);

    if (checkedKeys.length == 0) {
      transaction.setMenuIds([]);
    } else {
      let allChecked = Array.from(new Set(this.getAllCheckedKeys(checkedKeys).concat(checkedKeys)));
      transaction.setMenuIds(allChecked);
    }
  }

  @autobind
  onAddModalCancel() {
    if (this.props.tabName == '增加角色') {
      this.props.store.transaction.setAddModalVisible(false);
    }
    else {
      this.props.store.transaction.setEditModalVisible(false);
    }
    this.props.store.transaction.setSaveBtnDisabled(false);
  }

  @autobind
  onTabChange(key) {
    this.props.store.transaction.setActiveKey(key);
  }

  @autobind
  onAddInputRoleChange(e) {
    this.props.store.transaction.setAddInputRole(e.target.value);
  }

  @autobind
  onAddInputDesChange(e) {
    this.props.store.transaction.setAddInputDes(e.target.value);
  }

  @autobind
  onAddSaveRole() {
    const { store: { transaction } } = this.props;

    if (transaction.addInputRole.trim() == '') {
      Notification.error({ description: '请输入角色名称！', duration: 1 });
    } else {
      const closeLoading = Message.loading('正在获取数据...', 0);
      let params = {
        roleName: transaction.addInputRole,
        roleDescribe: transaction.addInputDes
      };
      if (this.props.tabName == '编辑角色' && transaction.roleId != null) {
        params.roleId = transaction.roleId;
      }

      Promise.all([
        transaction.saveRole(params)
      ]).then(() => {
        transaction.getRoleManagementData();
      }).then(() => {
        transaction.setActiveKey('tab2');
        closeLoading();
      });
    }
  }

  @autobind
  onAddCancel() {
    const { store: { transaction } } = this.props;
    if (this.props.tabName == '增加角色') {
      transaction.setAddModalVisible(false);
    } else {
      transaction.setEditModalVisible(false);
    }
  }

  @autobind
  onSavePermission() {
    const { store: { transaction } } = this.props;

    if (this.props.tabName == '增加角色') {
      console.log(transaction.menuIds);
      transaction.saveRolePermission({
        roleId: transaction.addRoleId,
        menuIds: transaction.menuIds
      }).then(() => transaction.setAddModalVisible(false));
    } else {
      transaction.saveRolePermission({
        roleId: transaction.roleId,
        menuIds: transaction.menuIds
      }).then(() => transaction.setEditModalVisible(false));
    }
  }

  disabledTreeNodes = ['权限管理', '角色管理'];

  render() {
    const { store: { transaction } } = this.props;
    const TreeNode = Tree.TreeNode;
    let level = 1;
    const loop = data => data.map((item) => {
      const disableCheckbox = this.disabledTreeNodes.indexOf(item.title) > -1 ? true : false;

      if (item.children) {
        const disabled = level == 1 ? true : item.children.filter(n => this.disabledTreeNodes.indexOf(n.title) > -1).length > 0;
        level++;

        return nj `
          <${TreeNode} key=${item.key} title=${item.title} disableCheckbox=${disableCheckbox} disabled=${disabled}>
            ${loop(item.children)}
          </${TreeNode}>
        ` ();
      }
      return nj `<${TreeNode} key=${item.key} title=${item.title} disableCheckbox=${disableCheckbox} />` ();
    });

    return tmpls.modalForm({
      components: { 'ant-TextArea': Input.TextArea },
      styles,
      transaction,
      loop,
      treeData: toJS(transaction.authTreeData) || [],
    }, this.props, this);
  }
}

@registerTmpl('ModalDetailTransaction')
@inject('store')
@observer
class ModalDetail extends Component {
  @autobind
  onDetailModalCancel() {
    const { store: { transaction } } = this.props;
    transaction.setDetailModalVisible(false);
  }

  @computed get detailColumns() {
    return [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '登录名',
      dataIndex: 'loginName',
    }, {
      title: '姓名',
      dataIndex: 'name',
    }, {
      title: '邮箱',
      dataIndex: 'email',
    }, {
      title: '部门',
      dataIndex: 'department',
    }, {
      title: '职务',
      dataIndex: 'duty',
    }, {
      title: '开通时间',
      dataIndex: 'oTime',
    }];
  }

  render() {
    const { store: { transaction } } = this.props;
    return tmpls.modalDetail(this.props, this, {
      styles,
      transaction,
      getDetailRowKey: (record, index) => `${record.key}-${index}`
    });
  }
}
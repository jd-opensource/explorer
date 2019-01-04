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
import styles from './block.m.scss';
import tmpls from './block.t.html';

//页面容器组件
@registerTmpl('Block')
@inject('store')
@observer
export default class Block extends Component {
  @observable detailModalVisible = false;
  @observable inputRole = '';
  @observable detailData = [];
  @observable selectedRowKeys = [];
  @observable selectedRows = [];

  componentDidMount() {
    const { store: { block , header } } = this.props;
    header.setSelectMenu(['block']);
    const closeLoading = Message.loading('正在获取数据...', 0);
    Promise.all([
      block.getRoleManagementData(),
      block.getRoleMenuTree().then(() => block.initTree())
    ]).then(() => {
      closeLoading();
    });
  }

  @autobind
  onInputRole(e) {
    this.inputRole = e.target.value;
  }

  @computed get tableColumns() {
    return [{
      title: '键',
      dataIndex: 'a',
      key:'name'
    }, {
      title: '版本',
      dataIndex: 'b',
      key:'describe'
    }, {
      title: '值',
      dataIndex: '',
      key: 'c',
      render: (text, record, index) => nj `
      <span>10</span>
      `()
    },
    {
      title: '',
      dataIndex: '',
      key: 'cTime',
      render: (text, record, index) => nj `
      <span>详细</span>
      `()
    }];
  }
  @autobind
  onSearch() {
    if (this.inputRole == '') {
      const closeLoading = Message.loading('正在获取数据...', 0);
      Promise.all([
        this.props.store.block.getRoleManagementData(),
      ]).then(() => {
        closeLoading();
      });
    } else {
      const { store: { block } } = this.props;
      const searchRole = block.tableDataO.filter(n => n.name.indexOf(this.inputRole.trim()) > -1);
      block.setTableData(searchRole);
    }
  }

  @autobind
  onAddRole() {
    const { store: { block } } = this.props;
    block.setAddModalVisible(true);
    block.setDisable(true);
    block.setActiveKey('tab1');
    block.setAddInputRole('');
    block.setAddInputDes('');
  }

  @autobind
  onDeleteRole() {
    const { store: { block } } = this.props;
    if (this.selectedRowKeys.length == 0) {
      Notification.error({ description: '请勾选要删除的角色！', duration: 3 });
    } else {
      Modal.confirm({
        title: '你确认要删除角色吗？',
        onOk: () => {
          const closeLoading = Message.loading('正在获取数据...', 0);
          const roleId = this.selectedRows.map((item) => item.roleId);

          Promise.all([
            block.deleteRole({ roleId: roleId })
          ]).then(() => {
            block.getRoleManagementData();
          }).then(() => {
            this.selectedRowKeys = [];
            closeLoading();
          });
        }
      });
    }
  }
  @autobind
  onEdit(record, index) {
    const { store: { block } } = this.props;
    block.setEditModalVisible(true);
    block.setSaveBtnDisabled(true);
    block.setActiveKey('tab1');
    block.setAddInputRole(record.name);
    block.setAddInputDes(record.describe);
    block.setRoleId(record.roleId);
    block.setDisable(false);

    const closeLoading = Message.loading('正在获取数据...', 0);
    Promise.all([
      block.getRoleMenuTree({ roleId: record.roleId }).then(() => block.initTree()),
    ]).then(() => {
      closeLoading();
    });
  }

  @autobind
  onDetail(record, index) {
    const { store: { block } } = this.props;
    block.setDetailModalVisible(true);
    block.setDetailData(record.users);
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
    const { store: { block } } = this.props;
    return tmpls.container(this.props, this, {
      styles,
      block,
      tableData: toJS([{
        a:1,
        b:2,
        c:3
      },{
        a:1,
        b:2,
        c:3
      },{
        a:1,
        b:2,
        c:3
      },{
        a:1,
        b:2,
        c:3
      }]),
      rowSelection: this.getRowSelection(),
    });
  }
}

@registerTmpl('ModalFormBlock')
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
    this.props.store.block.menuData.filter(n => n.level == 3)
      .forEach(item => {
        if (item.selected) {
          keys.push(item.id.toString());
        }
      });
    return keys;
  }

  //获取选中的 checkbox 包含父级未选中状态
  getAllCheckedKeys(key) {
    const _map = toJS(this.props.store.block.authTreeDataMap);
    if (key.length > 1) {
      let pids = key.map(item => { return _map[item].pids; });
      return Array.from(new Set([].concat(...pids)));
    } else {
      return _map[key].pids;
    }
  }

  @autobind
  onExpand(expandedKeys) {
    const { store: { block } } = this.props;
    block.setExpandedKeys(expandedKeys);
    this.autoExpandParent = true;
  }

  @autobind
  onCheck(checkedKeys) {
    const { store: { block } } = this.props;
    block.setSaveBtnDisabled(false);
    block.setCheckedKeys(checkedKeys);

    if (checkedKeys.length == 0) {
      block.setMenuIds([]);
    } else {
      let allChecked = Array.from(new Set(this.getAllCheckedKeys(checkedKeys).concat(checkedKeys)));
      block.setMenuIds(allChecked);
    }
  }

  @autobind
  onAddModalCancel() {
    if (this.props.tabName == '增加角色') {
      this.props.store.block.setAddModalVisible(false);
    }
    else {
      this.props.store.block.setEditModalVisible(false);
    }
    this.props.store.block.setSaveBtnDisabled(false);
  }

  @autobind
  onTabChange(key) {
    this.props.store.block.setActiveKey(key);
  }

  @autobind
  onAddInputRoleChange(e) {
    this.props.store.block.setAddInputRole(e.target.value);
  }

  @autobind
  onAddInputDesChange(e) {
    this.props.store.block.setAddInputDes(e.target.value);
  }

  @autobind
  onAddSaveRole() {
    const { store: { block } } = this.props;

    if (block.addInputRole.trim() == '') {
      Notification.error({ description: '请输入角色名称！', duration: 1 });
    } else {
      const closeLoading = Message.loading('正在获取数据...', 0);
      let params = {
        roleName: block.addInputRole,
        roleDescribe: block.addInputDes
      };
      if (this.props.tabName == '编辑角色' && block.roleId != null) {
        params.roleId = block.roleId;
      }

      Promise.all([
        block.saveRole(params)
      ]).then(() => {
        block.getRoleManagementData();
      }).then(() => {
        block.setActiveKey('tab2');
        closeLoading();
      });
    }
  }

  @autobind
  onAddCancel() {
    const { store: { block } } = this.props;
    if (this.props.tabName == '增加角色') {
      block.setAddModalVisible(false);
    } else {
      block.setEditModalVisible(false);
    }
  }

  @autobind
  onSavePermission() {
    const { store: { block } } = this.props;

    if (this.props.tabName == '增加角色') {
      console.log(block.menuIds);
      block.saveRolePermission({
        roleId: block.addRoleId,
        menuIds: block.menuIds
      }).then(() => block.setAddModalVisible(false));
    } else {
      block.saveRolePermission({
        roleId: block.roleId,
        menuIds: block.menuIds
      }).then(() => block.setEditModalVisible(false));
    }
  }

  disabledTreeNodes = ['权限管理', '角色管理'];

  render() {
    const { store: { block } } = this.props;
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
      block,
      loop,
      treeData: toJS(block.authTreeData) || [],
    }, this.props, this);
  }
}

@registerTmpl('ModalDetailBlock')
@inject('store')
@observer
class ModalDetail extends Component {
  @autobind
  onDetailModalCancel() {
    const { store: { block } } = this.props;
    block.setDetailModalVisible(false);
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
    const { store: { block } } = this.props;
    return tmpls.modalDetail(this.props, this, {
      styles,
      block,
      getDetailRowKey: (record, index) => `${record.key}-${index}`
    });
  }
}
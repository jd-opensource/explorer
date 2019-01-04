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
import styles from './account.m.scss';
import tmpls from './account.t.html';

//页面容器组件
@registerTmpl('Account')
@inject('store')
@observer
export default class Account extends Component {
  @observable detailModalVisible = false;
  @observable inputRole = '';
  @observable detailData = [];
  @observable selectedRowKeys = [];
  @observable selectedRows = [];

  componentDidMount() {
    const { store: { account, header } } = this.props;
    header.setSelectMenu(['account']);
    const closeLoading = Message.loading('正在获取数据...', 0);
    Promise.all([
      account.getAccount(),
    ]).then(() => {
      closeLoading();
    });
  }

  @computed get tableColumns() {
    return [{
      title: '数据集地址',
      dataIndex: 'address',
      key:'name'
    }, {
      title: '数据集公钥',
      dataIndex: 'public_key',
      key:'describe'
    }, {
      title: '交易数量',
      dataIndex: '',
      key: 'cTime',
      render: (text, record, index) => nj `
      <span>10</span>
      `()
    }];
  }

  render() {
    const { store: { account } } = this.props;
    return tmpls.container(this.props, this, {
      styles,
      account,
      tableData: toJS(account.tableData),
    });
  }
}
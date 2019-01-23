import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx'
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';

import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/pagination';
import 'flarej/lib/components/antd/radio';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/cascader';
import 'flarej/lib/components/antd/datePicker';
import 'flarej/lib/components/antd/checkbox';

import Message from 'flarej/lib/components/antd/message';
import Notification from 'flarej/lib/components/antd/notification';

import styles from './contract.m.scss';
import tmpls from './contract.t.html';

// 页面容器组件
@registerTmpl('Contract')
@inject('store')
@observer
export default class Contract extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  @computed get tableColumns() {
    return [{
      title: '合约公钥',
      dataIndex: 'publicKey',
      key:'name'
    }, {
      title: '合约地址',
      dataIndex: 'address',
      key:'describe'
    }, {
      title: '合约公钥算法',
      dataIndex: '',
      key:''
    }, {
      title: '合约根哈希',
      dataIndex: '',
      key:''
    }];
  }

  render() {
    const { store: { contract } } = this.props;
    return tmpls.container(this.state, this.props, this, {
      styles,
      contract,
      tableData: toJS(contract.tableData),
    });
  }
}

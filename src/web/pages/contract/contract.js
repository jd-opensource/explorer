import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx'
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import {tranBase58} from '../../../utils/util';
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
    const { store: { header,contract } } = this.props;
    header.setSelectMenu(['contract']);
    
    const closeLoading = Message.loading('正在获取数据...', 0);
    Promise.all([
      contract.getContracts({
        ledgers:this.props.store.common.getDefaultLedger()
      }),
    ]).then(() => {
      closeLoading();
    });
  }

  @computed get tableColumns() {
    return [{
      title: '合约公钥',
      dataIndex: 'pubKey.value',
      key:'pubKey'
    }, {
      title: '合约地址',
      dataIndex: 'address.value',
      key:'address'
    }, {
      title: '合约公钥算法',
      dataIndex: 'pubKey.value',
      render: (text, record, index) => nj `
      ${tranBase58(text)}
      `()
      
    }, {
      title: '合约根哈希',
      dataIndex: 'rootHash.value',
      key:'rootHash'
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

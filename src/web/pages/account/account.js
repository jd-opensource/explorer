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
import KvCount from '../../components/kvcount';
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
  @observable pageSize = 10;
  

  componentDidMount() {
    const { store: {header } } = this.props;
    header.setSelectMenu(['account']);
    this.Search();
  }
  
  Search(){
    const { store: { account } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let leaders=this.props.store.common.getDefaultLedger(),
    param={
      fromIndex:(account.accountcurrent-1)*this.pageSize,
      count:this.pageSize,
    }
    Promise.all([
      account.getAccountCount(leaders)     
    ]).then(() => {
      if(account.accountcount>0){
        Promise.all([ account.getAccount(leaders,
          param
          ),
        ]).then(() => {
          closeLoading();
        });
      }
      else{
        closeLoading();
      }
    });
  }

  ////分页切换
  @autobind
  onPageChange(page, pageSize) {
    const { store: { account } } = this.props;
    account.setCurrent(page);
    this.Search();
  }

  @computed get tableColumns() {
    return [{
      title: '账户地址',
      dataIndex: 'address.value',
      key:'address'
    }, {
      title: '账户公钥',
      dataIndex: 'pubKey.value',
      key:'pubKey'
    }, {
      title: '默克尔树根哈希',
      dataIndex: 'rootHash.value',
      key: 'rootHash',
    },
    {
      title: 'KV',
      dataIndex: 'address.value',
      key: 'kv',
      render: (text, record, index) => nj `
        <KvCount address=${text} key=${text}/>
      `()
    },
    {
      title: '操作',
      render: (text, record, index) => nj `
       <a>查看</a>
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
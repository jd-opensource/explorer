import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import TransactionInfo from '../../components/transactionInfo';
import 'flarej/lib/components/antd/table';
import Message from 'flarej/lib/components/antd/message';
import styles from './blockInfo.m.scss';
import tmpls from './blockInfo.t.html';

//页面容器组件
@registerTmpl('BlockInfo')
@inject('store')
@observer
export default class BlockInfo extends Component {
  
  @observable blockDetails=false;
  @observable show=false;// 
  @observable transactioninfoData={};

  componentDidMount() {

  }

  // 关闭详细信息
  @autobind
  onClose(visible){
    this.show=visible;
    
  }

  // 跳转到前置区块
  @autobind
  goBlock(e){
    const {goPrev}= this.props;
    if (goPrev) {
      goPrev(e.target.innerText);
    }
  }

  // 查看详细信息
  @autobind
  onShowBlockDetails(record,index){
    const { store: { block }} = this.props;
    let legder=this.props.store.common.getDefaultLedger();
    this.transactioninfoData={};
    Promise.all([
      block.getTransactionMore({"ledger":legder,'tx_hash':record.transactionContent.hash.value}),
    ]).then((success) => {
      this.show=true;
      this.transactioninfoData=block.transactionInfo;
    });
  }

  // 交易列表
  @computed get tableColumns() {
    return [{
      title: '交易哈希',
      dataIndex: 'transactionContent.hash.value',
      width:'80%',
      key:'name'
    }, {
      title: '执行状态',
      dataIndex: 'executionState',
      width:'10%',
      key:'describe',
      render: (text, record, index) => nj `
        <span class="success">${text}</span>
      `()
    }, {
      title: '操作',
      dataIndex: '',
      width:'10%',
      key: 'cTime',
      render: (text, record, index) => nj `
      <a  href="javascript:;" onClick=${()=>this.onShowBlockDetails(record, index)}>查看详情</a>
      `()
    }];
  }

  render() {
    const { store: { block },blockinfo,txCount,transactionList } = this.props;
    
    return tmpls.container(this.props, this, {
      styles,
      block,
      blockdata:blockinfo,
      txCount:txCount,
      transactionList:transactionList,
    });
  }
}
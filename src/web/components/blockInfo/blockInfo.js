import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import { Drawer} from 'antd';
import { BlockCollapse,BlockCollapseSmall,BlockCollapsePanel } from '../../components/blockCollapse';
import TransactionInfo from '../../components/transactionInfo';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/pagination';
import 'flarej/lib/components/antd/tabs';
import 'flarej/lib/components/antd/tree';
import 'flarej/lib/components/antd/checkbox';
import 'flarej/lib/components/antd/collapse';
import Message from 'flarej/lib/components/antd/message';
import Notification from '../../../utils/notification';
import {isNotANumber} from '../../../utils/util';
import styles from './blockInfo.m.scss';
import tmpls from './blockInfo.t.html';
import BlockList from '../../components/blockList';
import Search from 'antd/lib/transfer/search';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

//页面容器组件
@registerTmpl('BlockInfo')
@inject('store')
@observer
export default class BlockInfo extends Component {
  @observable detailModalVisible = false;
  @observable detailData = [];
  @observable selectedRowKeys = [];
  @observable selectedRows = [];
  @observable optionBlockHeight=0;
  @observable optionBlockHash='';
  @observable mySwiper='';
  @observable blockDetails=false;
  @observable show=false;
  @observable transactioninfoData={};
  // jinlong12
  // @observable inputRole = 0;
  // @observable blockList = [];

  componentDidMount() {
    // const { store: { header,block },} = this.props;
  }

  @autobind
  onClose(visible){
    //获取详细信息
    this.show=visible;
    
  }


  @autobind
  onShowBlockDetails(record,index){
    const { store: { block }} = this.props;
    let legder=this.props.store.common.getDefaultLedger();
    Promise.all([
      block.getTransactionMore({"ledger":legder,'tx_hash':record.transactionContent.ledgerHash.value}),
    ]).then((success) => {
      this.show=!this.show;
      this.transactioninfoData=block.transactionInfo;
    });
  }

  @computed get tableColumns() {
    return [{
      title: '交易哈希',
      dataIndex: 'transactionContent.ledgerHash.value',
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
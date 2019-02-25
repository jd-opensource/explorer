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
import Message from 'flarej/lib/components/antd/message';
import Notification from '../../../utils/notification';
import BlockInfo from '../../components/blockInfo';
import TransactionInfo from '../../components/transactionInfo';
import styles from './search.m.scss';
import tmpls from './search.t.html';

//页面容器组件
@registerTmpl('Search')
@inject('store')
@observer
export default class Search extends Component {
  
  @observable searchParamInput = '';// 搜索的值
  @observable flagSerch = false;
  @observable blockShow = false;  
  @observable blockDetails=false;
  @observable show=false;
  @observable transactioninfoData={};
  @observable navShow=false;
  @observable resultShow=false;
  
  // 获取输入内容
  @autobind
  onChangeInput(e){
    this.searchParamInput=e.target.value.trim();
  }

  // 搜索
  @autobind
  Search(){
    const { store: { search } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    Promise.all([
      search.getBlockData(
        {
          keyword: this.searchParamInput,
        },this.props.store.common.getDefaultLedger()),
    ]).then(() => {
      this.flagSerch=true;
      this.resultShow=!this.resultShow;
      closeLoading();
    });
  }

  // 高亮文字
  highLIght=(content)=>{
    return String(content).replace(this.searchParamInput, '<i>'+this.searchParamInput+'</i>');
  }

  componentDidMount() {
    const { store: { search,header } } = this.props;
    header.setSelectMenu(['search']);
    const closeLoading = Message.loading('正在获取数据...', 0);
    let legder=this.props.store.common.getDefaultLedger();
    Promise.all([
      search.getBlockHeight(legder),
      search.getTransactionTotal(legder),
      search.getUserTotal(legder),
      search.getLedgerTotal(legder),
      search.getContractTotal(legder),
    ]).then(() => {
      closeLoading();
    });
  }

  //查看区块详情
  @autobind
  showBlock(e){
    const { store: { block, common } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let legder=this.props.store.common.getDefaultLedger();
    Promise.all([
     // block.getBlockHeight(legder),
      block.getBlockInformation(legder),
      block.getTxCount(legder),
      block.getTransaction({legder:legder,height:2}),
    ]).then((success) => {
      this.navShow=!this.navShow;
      this.blockShow=!this.blockShow;
      this.resultShow=!this.resultShow;
      closeLoading();
    });
  }
@autobind
gobackResult(){
  this.navShow=!this.navShow;
  this.blockShow=!this.blockShow;
  this.resultShow=!this.resultShow;
}
  
  @autobind
  onClose(visible){
    //获取详细信息
    this.show=visible;
    
  }

  //查看交易详情
  @autobind
  onShowBlockDetails(hash){
    const { store: { block }} = this.props;
    let legder=this.props.store.common.getDefaultLedger();
    Promise.all([
      block.getTransactionMore({"ledger":legder,'tx_hash':hash}),
    ]).then((success) => {
      this.show=!this.show;
      this.transactioninfoData=block.transactionInfo;
    });
  }
  render() {
    const { store: { search,block } } = this.props;
    return tmpls.container(this.props, this, {
      styles,
      search,
      block,
    });
  }
}
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { Drawer} from 'antd';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import TransactionInfo from '../transactionInfo';
import AccountRootHash from '../../components/accountRootHash';
import 'flarej/lib/components/antd/table';
import Message from 'flarej/lib/components/antd/message';
import KvCount from '../../components/kvcount';
import styles from './accountInfo.m.scss';
import tmpls from './accountInfo.t.html';

//页面容器组件
@registerTmpl('AccountInfo')
@inject('store')
@observer
export default class AccountInfo extends Component {

  @observable kvData=[];
  @observable accountcount=0;  
  @observable accountcurrent=1;  
  @observable pageSize=10; 
  @observable visible=false;
  @observable valueinfo='';
  componentDidMount() {
    this.Search();
  }
  Search(){
    const { store: { account },accountData} = this.props;
    
    if (accountData&&accountData.address&&accountData.address.value) {
      const closeLoading = Message.loading('正在获取数据...', 0);
      let leader=this.props.store.common.getDefaultLedger(),
      param={
        fromIndex:(this.accountcurrent-1)*this.pageSize,
        count:this.pageSize,
      },
      address=accountData.address.value;
      Promise.all([
        account.getEntriescount(leader,address)     
      ]).then((data) => {
      if(data[0]>0){
        this.accountcount=data[0];
        Promise.all([ account.getEntries(leader,address,
          param
          ),
        ]).then((data) => {
          this.kvData=data[0];
          closeLoading();
        });
      }
      else{
        closeLoading();
      }
      });
    }
  }
  ////分页切换
  @autobind
  onPageChange(page, pageSize) {
    const { store: { account } } = this.props;
    this.accountcurrent=page;
    this.Search();
  }
  // 关闭详细信息
  @autobind
  onClose(visible){
    this.show=visible;
    
  }

  // 跳转到前置区块
  @autobind
  goBlock(e){debugger;
    const {goPrev}= this.props;
    if (goPrev) {
      goPrev(e.target.innerText);
    }
  }

  // 查看详细信息
  @autobind
  onShowBlockDetails(text){
    this.onCloseblockDetails();
    this.valueinfo=text;
  }
 // 关闭
 @autobind
 onCloseblockDetails(){
    this.visible=!this.visible;
 }
  // 交易列表
  @computed get tableColumns() {
    return [{
      title: '键',
      dataIndex: 'key',
      key:'key'
    },{
      title: '值',
      dataIndex: 'value',
      key:'value',
      render: (text, record, index) => nj `
        ${text}&nbsp;&nbsp;&nbsp;
        <a onClick=${()=>this.onShowBlockDetails(text)}>详细</a>
      `()
    }, {
      title: '版本',
      dataIndex: 'version',
      width:'10%',
      key: 'version',
    },{
      title: '类型',
      dataIndex: 'type',
      width:'10%',
      key: 'type',
    }];
  }

  render() {
    const { store: { block },accountData } = this.props;
    
    return tmpls.container({
      components: {
        'ant-Drawer': Drawer,
      }},this.props, this, {
      styles,
      block,
      accountData
    });
  }
}
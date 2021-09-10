/*jshint esversion: 6 */
import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx'
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import { Drawer} from 'antd';
import {tranBase58} from '../../../utils/util';
import ContractsRootHash from '../../components/contractsRootHash';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/pagination';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/cascader';
import 'flarej/lib/components/antd/datePicker';
import 'flarej/lib/components/antd/checkbox';
import MonacoEditor from 'react-monaco-editor';
import Message from 'flarej/lib/components/antd/message';
import Notification from 'flarej/lib/components/antd/notification';

import styles from './contract.m.scss';
import tmpls from './contract.t.html';

// 页面容器组件
@registerTmpl('Contract')
@inject('store')
@observer
export default class Contract extends Component {

  @observable pageSize = 10;
  @observable contractAddress='';
  @observable visible=false;
  @observable contractValue='';
  @observable contractState='NORMAL';
  @observable chainCodeVersion=-1;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { store: { header } } = this.props;
    header.setSelectMenu(['contract']);
    this.Search();
  }

  // 搜索
  Search(){
    const { store: {contract } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let ledger=this.props.store.common.getDefaultLedger(),
    param={
      fromIndex:(contract.accountcurrent-1)*this.pageSize,
      count:this.pageSize,
    }
    Promise.all([
      contract.getContractsCount(ledger)     
    ]).then(() => {
      if(contract.accountcount>0){
        Promise.all([ contract.getContracts(ledger,
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

  // 搜索
  SearchVague(){
    const { store: {contract } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let ledger=this.props.store.common.getDefaultLedger(),
      keyword=this.contractAddress,
      param={
        fromIndex:(contract.accountcurrent-1)*this.pageSize,
        count:this.pageSize,
        keyword
      }
    Promise.all([
      contract.getContractsCountVague(ledger,keyword)     
    ]).then(() => {
      if(contract.accountcount>0){
        Promise.all([ contract.getContractsVague(ledger,
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

  //模糊查询
  @autobind
  SerchInfo(){
    if (this.contractAddress.trim()!='') {
      this.SearchVague();
    }
    else{
      this.Search()
    }
  }

  @autobind
  onChangeInput(e){
    this.contractAddress=e.target.value;
  }
  ////分页切换
  @autobind
  onPageChange(page, pageSize) {
    const { store: { contract } } = this.props;
    contract.setCurrent(page);
    this.Search();
  }

  @computed get tableColumns() {
    return [{
      title: '合约地址',
      dataIndex: 'address',
      key:'address'
    }, {
      title: '合约公钥',
      dataIndex: 'pubKey',
      key:'pubKey',
      render: (text, record, index) => nj `
      ${text}<br/>算法：${tranBase58(text)}
      `()
    }, 
    // {
    //   title: '合约根哈希',
    //   dataIndex: 'rootHash',
    //   key:'rootHash',
    //   render: (text, record, index) => nj `
    //     <#if ${text}>
    //       ${text}
    //       <#else>
    //         <ContractsRootHash address=${record.address.value}/>
    //       </#else>
    //     </#if>
    //   `()
    // },
    {
      title: '操作',
      dataIndex: 'address',
      key:'chainCode',
      render: (text, record, index) => nj `
        <a onClick=${()=>this.onShowContract(text)}>查看合约</a>
      `()
    }];
  }
  onShowContract(address){
    const { store: {contract } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let ledger=this.props.store.common.getDefaultLedger(),
      param={
        'ledger':ledger,
        'address':address
      };
    this.visible=!this.visible;
    Promise.all([
      contract.getContractsByAddress(param)     
    ]).then(data=> {
      this.contractValue=data[0].chainCode||'';
      this.contractState=data[0].state||'';
      this.chainCodeVersion=data[0].chainCodeVersion;
      closeLoading();
    });
   
  }
  @autobind
  onClose(){
    this.visible=!this.visible;
    this.contractValue='';
    this.contractState='NORMAL';
    this.chainCodeVersion=-1;
    Message.destroy();
  }

  render() {
    const { store: { contract } } = this.props;
    return tmpls.container({components:{
      MonacoEditor,
      'ant-Drawer':Drawer
    }},this.state, this.props, this, {
      styles,
      contract,
      tableData: toJS(contract.tableData),
    });
  }
}

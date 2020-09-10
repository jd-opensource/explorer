import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import { Drawer} from 'antd';
import {tranBase58,stringToBase58,byteToLong,byteToString,Bytes2Str,Int32ToStr,transAuth} from '../../../utils/util';
import { BlockCollapse,BlockCollapseSmall,BlockCollapsePanel } from '../../components/blockCollapse';
import styles from './transactionInfo.m.scss';
import tmpls from './transactionInfo.t.html';
import moment from 'moment';

//页面容器组件
@registerTmpl('TransactionInfo')
@inject('store')
@observer
export default class TransactionInfo extends Component {
  @observable arr0 = [{
    "disableLedgerPermissions": [],
    "disableTransactionPermissions": [],
    "roleName": "DEFAULT",
    "enableLedgerPermissions": ["CONFIGURE_ROLES", "AUTHORIZE_USER_ROLES", "SET_CONSENSUS", "SET_CRYPTO", "REGISTER_PARTICIPANT", "REGISTER_USER", "REGISTER_DATA_ACCOUNT", "REGISTER_CONTRACT", "UPGRADE_CONTRACT", "SET_USER_ATTRIBUTES", "WRITE_DATA_ACCOUNT", "APPROVE_TX", "CONSENSUS_TX"],
    "enableTransactionPermissions": ["DIRECT_OPERATION", "CONTRACT_OPERATION"]
  }];
  @observable arr1 = [{
    "unauthorizedRoles": ["A", "B"],
    "userAddresses": [{
      "value": "LdeP3fY7jJbNwL8CiL2wU21AF9unDWQjVEW5w"
    }],
    "authorizedRoles": ["C", "D"],
    "policy": "UNION"
  }]

  // 关闭
  @autobind
  onCloseblockDetails(){
    return this.props.onClose(!this.props.visible);
  }

  transform = arr => {
    return arr.map(item => transAuth(item)).join(',')
  }

  
  formatData(type,data, value = ''){
    data = data && data.value != undefined && (data.value + '') || '';
    
    console.log(type, data, data.value)
    let result='';
    switch (type.toUpperCase()) {
      case 'INT64':
        let int64=stringToBase58(data);
        result=byteToLong(int64);
        break;
      case 'TEXT':
        let text=stringToBase58(data);
        result=byteToString(text);
        break;
      case 'JSON':
        let json=stringToBase58(data);
        result=byteToString(json);
        break;
      case 'BYTES':
        let hex=stringToBase58(data);
        result=Bytes2Str(hex);
        break;  
      case 'INT32':
        let int32=stringToBase58(data);
        result=Int32ToStr(int32);
        break; 
      case 'TIMESTAMP':
        // let timestamp=stringToBase58(data);
        result = value;
        break;
      default:
        result=data;
        break;
    }
    return result;
  }

  stateItem = state => {
    let span = '';

    switch(state) {
      case 'READY':
        span = '注册';
      break;
      case 'CONSENSUS':
        span = '激活';
      break;
      case 'DECONSENSUS':
        span = '吊销';
      break;
      default: 
        span = '注册';
      break;
    }

    return span;
  }

  partItem = state => {
    let span = '';

    switch(state) {
      case 'READY':
        span = '注册参与方';
      break;
      case 'CONSENSUS':
        span = '激活参与方';
      break;
      case 'DECONSENSUS':
        span = '吊销参与方';
      break;
      default: 
        span = '注册参与方';
      break;
    }

    return span;
  }

  argsToList(data){
    let json=[];
    if(data&&data.values&&data.values.length>0){
      for (let i = 0; i < data.values.length; i++) {
        json.push({
          type:data.values[i].type,
          value:this.formatData(data.values[i].type,data.values[i].bytes),
        });
        
      }
      var str = JSON.stringify(json);
      return str;
    }
  }

  render() {
    const { data,visible} = this.props;
    return tmpls.container({
      components: {
        'ant-Drawer': Drawer,
        'BlockCollapse':BlockCollapse,
        'BlockCollapseSmall':BlockCollapseSmall,
        'BlockCollapsePanel':BlockCollapsePanel,
      }
    },this.props, this, {
      styles,
      data,
      visible,
      tranBase58,
      transAuth,
      moment: moment
    });
  }
}
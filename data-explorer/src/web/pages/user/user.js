import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx'
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import {tranBase58} from '../../../utils/util';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/pagination';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/cascader';
import 'flarej/lib/components/antd/datePicker';
import 'flarej/lib/components/antd/checkbox';
import Message from 'flarej/lib/components/antd/message';
import Notification from 'flarej/lib/components/antd/notification';
import UserCert from '../../components/usercert';

import styles from './user.m.scss';
import tmpls from './user.t.html';
// 页面容器组件
@registerTmpl('User')
@inject('store')
@observer
export default class User extends Component {

  @observable pageSize = 10;
  @observable useraddress='';
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { store: { header } } = this.props;
    header.setSelectMenu(['user']);
    this.Search();
  }

  Search(){
    const { store: { user } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let leader=this.props.store.common.getDefaultLedger(),
    param={
      fromIndex:(user.accountcurrent-1)*this.pageSize,
      count:this.pageSize,
    }
    Promise.all([
      user.getUserCount(leader)     
    ]).then(() => {
      if(user.accountcount>0){
        Promise.all([ user.getUser(leader,
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
  SearchVague(){
    const { store: { user } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let leader=this.props.store.common.getDefaultLedger(),
    keyword=this.useraddress,
    param={
      fromIndex:(user.accountcurrent-1)*this.pageSize,
      count:this.pageSize,
      keyword:keyword
    }
    Promise.all([
      user.getUserCountVague(leader,keyword)     
    ]).then(() => {
      if(user.accountcount>0){
        Promise.all([ user.getUserVague(leader,
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
    if (this.useraddress.trim()!='') {
      this.SearchVague();
    }
    else{
      this.Search()
    }
  }

  ////分页切换
  @autobind
  onPageChange(page, pageSize) {
    const { store: { user } } = this.props;
    user.setCurrent(page);
    this.Search();
  }

  @autobind
  onChangeInput(e){
    this.useraddress=e.target.value;
  }

  @computed get tableColumns() {
    return [ {
      title: '用户地址',
      dataIndex: 'address',
      key:'address',
      width: 100
    },{
      title: '用户公钥',
      dataIndex: 'pubKey',
      key:'pubKey',
      width: 120,
      render: (text, record, index) => nj `
      ${text}<br>算法：${tranBase58(text)}
      `()
    },{
      title: '证书',
      dataIndex: 'address',
      key:'certificate',
      width: 150,
      render: (text, record, index) => nj`
        <UserCert address=${text} key=${text}/>
      `()
    }];
  }

  render() {
    const { store: { user } } = this.props;
    return tmpls.container(this.state, this.props, this, {
      styles,
      user,
      tableData: toJS(user.tableData),
    });
  }
}

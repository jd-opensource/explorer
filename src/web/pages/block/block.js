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
import Input from 'flarej/lib/components/antd/input';
import Message from 'flarej/lib/components/antd/message';
import Notification from '../../../utils/notification';
import styles from './block.m.scss';
import tmpls from './block.t.html';
import BlockList from '../../components/blockList';

//页面容器组件
@registerTmpl('Block')
@inject('store')
@observer
export default class Block extends Component {
  @observable detailModalVisible = false;
  @observable inputRole = '';
  @observable detailData = [];
  @observable selectedRowKeys = [];
  @observable selectedRows = [];
  @observable list = ['a','b','c'];

  componentDidMount() {
    const { store: { block , header } } = this.props;
    header.setSelectMenu(['block']);
    // const closeLoading = Message.loading('正在获取数据...', 0);
    // Promise.all([
    //   block.getRoleManagementData(),
    //   block.getRoleMenuTree().then(() => block.initTree())
    // ]).then(() => {
    //   closeLoading();
    // });
  }

  @autobind
  onInputRole(e) {
    this.inputRole = e.target.value;
  }

 
  @autobind
  onSearch() {debugger;
    
    const closeLoading = Message.loading('正在获取数据...', 0);
      Promise.all([
        this.props.store.block.getTransaction({
          height:23,from:0,to:60
        }),
      ]).then(() => {debugger;
        closeLoading();
      });
  }


  render() {
    const { store: { block } } = this.props;
    return tmpls.container(this.props, this, {
      styles,
      block,
    });
  }
}
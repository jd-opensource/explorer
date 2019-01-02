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
import styles from './search.m.scss';
import tmpls from './search.t.html';

//页面容器组件
@registerTmpl('Search')
@inject('store')
@observer
export default class Search extends Component {
  @observable detailModalVisible = false;
  @observable inputRole = '';
  @observable detailData = [];
  @observable selectedRowKeys = [];
  @observable selectedRows = [];

  componentDidMount() {
    const { store: { search } } = this.props;

    const closeLoading = Message.loading('正在获取数据...', 0);
    Promise.all([
      search.getBlockHeight(this.props.store.common.getDefaultLedger()),
    ]).then(() => {
      closeLoading();
    });
  }

  render() {
    const { store: { search } } = this.props;
    return tmpls.container(this.props, this, {
      styles,
      search,
    });
  }
}
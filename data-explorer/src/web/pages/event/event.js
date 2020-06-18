import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx'
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import { tranBase58 } from '../../../utils/util';
import { Message, Table } from 'antd';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/radio';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/cascader';
import 'flarej/lib/components/antd/datePicker';
import 'flarej/lib/components/antd/checkbox';

import EventInfo from '../../components/eventInfo/eventInfo';

import Notification from 'flarej/lib/components/antd/notification';

import styles from './event.m.scss';
import tmpls from './event.t.html';

// 页面容器组件
@registerTmpl('Event')
@inject('store')
@observer
export default class Event extends Component {
  @observable pageSize = 10;
  @observable accountData = {};
  @observable click = 0;
  @observable show = false;
  @observable accountAddress = '';

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { store: { header } } = this.props;
    header.setSelectMenu(['event']);
    this.onSearch()
  }

  eventItem = () => {
    this.click++;
    return <EventInfo data = {this.accountData} key = {this.click}/>
  }


  onSearch = () => {
    const { store: { common, event } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let leaders = common.getDefaultLedger(),
      param = {
        fromIndex: (event.accountcurrent - 1) * this.pageSize,
        count: this.pageSize,
      };
    
    Promise.all([
      event.getAccountCount(leaders)
    ]).then(() => {
      if (event.accountcount > 0) {
        Promise.all([
          event.getAccount(leaders,param)
        ]).then(() => {
          closeLoading();
        });
      } else {
        closeLoading();
      }
    })
  }

  //模糊查询
  @autobind
  onSerchInfo() {
    if (this.accountAddress.trim() != '') {
      this.onSearchVague();
    }
    else {
      this.onSearch()
    }
  }

  @autobind
  onPageChange(page, pageSize) {
    const { store: { event } } = this.props;
    event.setCurrent(page);
    this.onSearch();
  }

  showEvent = (record, index) => {
    const { store: { common, event } } = this.props;

    let address = record.address && record.address.value && record.address.value || '';

    const closeLoading = Message.loading('正在获取数据...', 0);

    Promise.all([
        event.getEventCount(common.getDefaultLedger(), address)
    ]).then(() => {
      if (event.eventTotal > 0) {
          Promise.all([
              event.getEvent(common.getDefaultLedger(), address)
          ]).then(() => {
              closeLoading();
              this.accountData = record;


              this.show = !this.show;
          });
      } else {
          closeLoading();
      }
    })

    
  }

  onShow = () => {
    this.show = !this.show;
  }

  @computed get eventColumns() {
    return [{
      title: '账户地址',
      dataIndex: 'address.value',
      key: 'address',
    }, {
      title: '账户公钥',
      dataIndex: 'pubKey.value',
      key: 'pubKey',
      render: (text, record, index) => nj`
        ${text}<br/>算法：${tranBase58(text)}
      `()
    }, {
      title: '操作',
      render: (text, record, index) => nj`
        <a  onClick=${() => this.showEvent(record, index)}>查看</a>
      `()
    }]
  }

  render() {
    const { store: { event } } = this.props;
    console.log(event.tableData)
    return tmpls.container(this.state, this.props, this, {
      styles,
      event,
      tableData: toJS(event.tableData),
    });
  }
}
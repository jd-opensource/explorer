import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import '../../common/containerConfig';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/breadcrumb';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/radio';
import { Message } from 'flarej/lib/components/antd/message';
import { autobind } from 'core-decorators';
import $ from 'jquery';
import '../../components/header';
import '../../components/sider';
import BlockHistory from './blockHistory';
import ContainerHoc from '../../components/higherOrders/container';
import styles from './history.m.less';
import tmpls from './history.t.html';
import HistoryStore from '../../stores/HistoryStore';
import { tranBase58 } from '../../common/util';
const historyStore = new HistoryStore();

//页面容器组件
@inject('store')
@observer
class Container extends Component {
  componentDidMount() {
    console.log(tranBase58('S76SHyu8p164'));
  }

  render() {
    const { store } = this.props;
    console.log(store);
    return this.props.tmpls[0](this, {
      store,
      styles
    });
  }
}
ContainerHoc('Container', Container, historyStore); 

// 历史页面组件
@registerTmpl('DataTable')
@inject('store')
@observer
class DataTable extends Component {
  @observable placeholder = '请输入区块高度';
  @observable inputValue = '';
  @observable radioValue = 'blockHeight';

  handleInputChange = (e) => {
    this.inputValue = e.target.value;
  }

  handleHashChange = (e) => {
    this.radioValue = e.target.value;
    this.placeholder = 
      this.radioValue == 'blockHash' ? '请输入区块哈希' : 
        this.radioValue == 'transactionHash' ? '请输入交易哈希' : '请输入区块高度';
  }

  // 查询按钮
  dataQuery = () => {
    const { store } = this.props;
    if (this.inputValue != '') {
      if (this.radioValue == 'blockHeight') {
        Promise.all([
          store.getBlockHeightData(this.inputValue)
        ]).then(
  
        ).catch((err) => {
          console.log(err);
        });
      } else if (this.radioValue == 'blockHash') {
        Promise.all([
          store.getBlockHashData(this.inputValue)
        ]).then(
  
        ).catch((err) => {
          console.log(err);
        });
      } else {
        Promise.all([
          store.getTransactionHashData(this.inputValue)
        ]).then(
  
        ).catch((err) => {
          console.log(err);
        });
      }
    } else {
      alert("请输入...")
    }
    
  }

  render() {
    const { store } = this.props;
    return tmpls.dataTable(this.state, this.props, this, {
      store,
      styles
    });
  }
}

// 区块高度/区块哈希数据页面
@registerTmpl('BlockHeight')
@inject('store')
@observer
class BlockHeight extends Component {
  @computed get BlockColumns() {
    return [{
      title: '交易哈希',
      dataIndex: 'hash',
      width: '90%',
      render: (text, record) => {
        return (
          <span 
            className = {`${styles.hash}`}
            onClick = {() => {this.handleTransactionShow(text.value);}}
          >
            {record && record['hash'] ? record['hash']['value'] : ''}
          </span>
        )
      }
    }, {
      title: '状态',
      dataIndex: 'status',
      width: '10%',
      render: (text, record) => {
        console.log(record)
        let status = record && record['executionState'] == 'SUCCESS' ? '成功' : '失败';
        return <span>{status}</span>;
      }
    }];
  }

  // 点击交易哈希执行根据当前交易哈希查询交易内容
  handleTransactionShow = (text) => {
    const { store } = this.props;
    Promise.all([
      store.getTransactionHashData(text)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { store } = this.props;
    // console.log(store.transactionList)
    return tmpls.blockHeight(this.state, this.props, this, {
      store,
      styles,
      dataList: store.transactionList ? toJS(store.transactionList) : [],
      getRowKey: (record, index) => `uid-${index}`,
      pagination: {
        pageSize: 5,
        defaultCurrent: 1, 
        showQuickJumper: true
      }
    });
  }
}

// 交易哈希数据页面
@registerTmpl('TransactionHash')
@inject('store')
@observer
class TransactionHash extends Component {
  @observable showEndpoint = false; // 是否显示节点终端列表, 默认隐藏
  @observable showNode = false; // 是否显示节点签名列表, 默认隐藏
  @observable showTrans = true; // 是否显示交易内容, 默认显示
  @observable showValue = false; // 是否显示value与预期版本
  @observable shows = [];
  // 控制终端签名显示隐藏
  handleEndpointShow = () => {
    this.showEndpoint = !this.showEndpoint;
  }

  

  // 控制节点签名显示隐藏
  handleNodeShow = () => {
    this.showNode = !this.showNode;
  }

  // 控制交易内容显示隐藏
  handleTranShow = () => {
    this.showTrans = !this.showTrans;
  }

  // 控制值显示隐藏
  handleValueShow = (key, e) => {
    const { store } = this.props;
    store.setShow(key, e);
  }

  keyItem = () => {
    const { store } = this.props;
    let arr = [...store.transactionData.transactionContent.operations[0].writeSet];
    return [
      store.transactionData.transactionContent.operations[0].writeSet.map((item, key) => (
        <div className={`${styles.kv}`}>
          <div class={`${styles.key}`}>
            键 :&nbsp;&nbsp;&nbsp;
            {item.key || ''}
            <div 
              className = {`${styles.arrow} ${store.shows[key] ? styles.arrowTop : styles.arrowBottom}`}
              onClick={() => this.handleValueShow(key, store.shows[key])}
            ></div>
          </div>
          <div className = {`${styles.value} ${store.shows[key] ? styles.show : styles.hide}`}>
            <div><span>值 :</span>&nbsp;&nbsp;&nbsp;
              {item.value || ''}
            </div>
            <div><span>预期版本 :</span>&nbsp;&nbsp;&nbsp;
              {item.expectedVersion || ''}
            </div>
          </div>
        </div>
      ))
    ]
  }

  render() {
    const { store } = this.props;
    return tmpls.transactionHash(this.state, this.props, this, {
      store,
      styles
    });
  }
}

if (module.hot) {
  module.hot.accept();
  njr.renderTmplTag({ target: '#container' });
}
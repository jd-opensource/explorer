import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import styles from './history.m.less';
import tmpls from './history.t.html';
import HistoryStore from '../../stores/HistoryStore';
import { tranBase58 } from '../../common/util';

// 区块历史首页
@registerTmpl('BlockHistory')
@inject('store')
@observer
export default class BlockHistory extends Component {
  @observable a = '123'
  componentDidMount = () => {
    const { store } = this.props;
    store.getBlockHistoryData();
  }

  handleClickHeight = (e) => {
    console.log(e);
    const { store } = this.props;
    Promise.all([
      store.getBlockHeightData()
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHash = (e) => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData()
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleBlockShow = (e) => {
    this.handleHeightShow(e);
  }

  handleHeightShow = (e) => {
    alert(e);
  }

  render() {
    const { store } = this.props;
    return tmpls.blockHistory(this.state, this.props, this, {
      store,
      styles
    });
  }
}
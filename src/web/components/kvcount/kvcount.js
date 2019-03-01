import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import styles from './kvcount.m.scss';
import tmpls from './kvcount.t.html';

//页面容器组件
@registerTmpl('KvCount')
@inject('store')
@observer
export default class TransactionInfo extends Component {

  @observable kvcount='-';
  componentDidMount() {
    const { store: { account },address } = this.props;
    let leader=this.props.store.common.getDefaultLedger();
    Promise.all([
      account.getEntriescount(leader,address)     
    ]).then((data) => {
     this.kvcount=data[0];
    });
  }
  render() {
    const { data,visible} = this.props;
    return tmpls.container(this.props, this, {
      styles,
    });
  }
}
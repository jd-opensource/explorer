import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import styles from './accountRootHash.m.scss';
import tmpls from './accountRootHash.t.html';

//页面容器组件
@registerTmpl('AccountRootHash')
@inject('store')
@observer
export default class AccountRootHash extends Component {

  @observable roothash='-';
  componentDidMount() {
    const { store: { account, common },address, hash } = this.props;
    let ledger =this.props.store.common.getDefaultLedger();
    let param={ledger:ledger,address:address};
    Promise.all([
      account.getAccountInfo(param),
    ]).then((success) => {
      console.log(success)
      if (hash == 'data') {
        this.roothash=success[0].dataRootHash||'-';
      } else {
        this.roothash=success[0].headerRootHash||'-';
      }
    //  this.roothash=success[0].rootHash.value||'-';
    });
  }
  render() {
    const { data,visible} = this.props;
    return tmpls.AccountRootHash(this.props, this, {
      styles,
    });
  }
}
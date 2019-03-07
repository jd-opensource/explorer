import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import styles from './contractsRootHash.m.scss';
import tmpls from './contractsRootHash.t.html';

//页面容器组件
@registerTmpl('ContractsRootHash')
@inject('store')
@observer
export default class ContractsRootHash extends Component {

  @observable roothash='-';
  componentDidMount() {
    const { store: { contract, common },address } = this.props;
    let ledger =common.getDefaultLedger();
    let param={ledger:ledger,address:address};
    Promise.all([
      contract.getContractsByAddress(param),
    ]).then((success) => {
     this.roothash=success[0].rootHash.value||'-';
    });
  }
  render() {
    const { data,visible} = this.props;
    return tmpls.ContractsRootHash(this.props, this, {
      styles,
    });
  }
}
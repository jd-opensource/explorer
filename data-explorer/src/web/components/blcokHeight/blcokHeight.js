import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import styles from './blcokHeight.m.scss';
import tmpls from './blcokHeight.t.html';

//页面容器组件
@registerTmpl('BlcokHeight')
@inject('store')
@observer
export default class BlcokHeight extends Component {

  @observable height='-';
  componentDidMount() {
    const { store: { block, common },hash } = this.props;
    let ledger =this.props.store.common.getDefaultLedger();
    let param={ledger:ledger,hash:hash};
    Promise.all([
      block.getBlockInformationOfHash(param),
    ]).then((success) => {
     this.height=success[0].height||'-';
    });
  }
  render() {
    const { data,visible} = this.props;
    return tmpls.blcokHeight(this.props, this, {
      styles,
    });
  }
}
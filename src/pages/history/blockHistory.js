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

  handleClickHeightOne = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHeightData(store.one)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHeightFour = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHeightData(store.four)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHeightSeven = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHeightData(store.seven)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHeightTen = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHeightData(store.ten)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHashTwo = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData(store.two)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHashThree = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData(store.three)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHashFive = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData(store.five)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHashSix = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData(store.six)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHashEight = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData(store.eight)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHashNine = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData(store.nine)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHashEleven = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData(store.eleven)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  handleClickHashTwelve = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockHashData(store.twelve)
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
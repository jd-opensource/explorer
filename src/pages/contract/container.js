import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import '../../common/containerConfig';
import 'flarej/lib/components/antd/button';
import { Message } from 'flarej/lib/components/antd/message';
import { autobind } from 'core-decorators';
import '../../components/header';
import '../../components/sider';
import ContainerHoc from '../../components/higherOrders/container';
import styles from './contract.m.less';
import tmpls from './contract.t.html';
import ContractStore from '../../stores/ContractStore';
import { observable } from 'mobx';
const contractStore = new ContractStore();

//页面容器组件
@inject('store')
@observer
class Container extends Component {
  componentDidMount() {
    const { store } = this.props;
    // Promise.all([
    //   store.getContractData()
    // ]).then(

    // ).catch((err) => {
    //   console.log(err);
    // });
    
    // this.props.store.getContractData().then(() => closeLoading());
  }

  render() {
    const { store } = this.props;
    store.test();
    return this.props.tmpls[0](this, {
      store,
      styles
    });
  }
}
ContainerHoc('Container', Container, contractStore); 

@registerTmpl('DataTable')
@inject('store')
@observer
class DataTable extends Component {
  @observable contractLedger = ''; // 合约账户

  inputChange = (e) => {
    this.contractLedger = e.target.value;
  }

  query = () => {
    const { store } = this.props;
    Promise.all([
      store.getContractData(this.contractLedger)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return tmpls.dataTable(this.state, this.props, this, {
      styles
    });
  }
}

if (module.hot) {
  module.hot.accept();
  njr.renderTmplTag({ target: '#container' });
}
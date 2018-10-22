import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import '../../common/containerConfig';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/breadcrumb';
import 'flarej/lib/components/antd/table';
import { Message } from 'flarej/lib/components/antd/message';
import { autobind } from 'core-decorators';
import '../../components/header';
import '../../components/sider';
import ContainerHoc from '../../components/higherOrders/container';
import { observable } from 'mobx';
import styles from './user.m.less';
import tmpls from './user.t.html';
import UserStore from '../../stores/UserStore';
const userStore = new UserStore();

//页面容器组件
@inject('store')
@observer
class Container extends Component {
  componentDidMount() {
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
ContainerHoc('Container', Container, userStore); 

@registerTmpl('DataTable')
@inject('store')
@observer
class DataTable extends Component {
  @observable userLedger = ''; // 合约账户

  inputChange = (e) => {
    this.userLedger = e.target.value;
  }

  query = () => {
    const { store } = this.props;
    Promise.all([
      store.getUserData(this.userLedger)
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
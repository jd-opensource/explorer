import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import '../../common/containerConfig';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/breadcrumb';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/tabs';
import 'flarej/lib/components/antd/pagination';
import { autobind } from 'core-decorators';
import '../../components/header';
import '../../components/sider';
import { Input, Select, Icon, Message } from 'antd';
import ContainerHoc from '../../components/higherOrders/container';
import styles from './search.m.less';
import tmpls from './search.t.html';
import SearchStore from '../../stores/SearchStore';
import { observable } from 'mobx';
const searchStore = new SearchStore();
const Option = Select.Option;

//页面容器组件
@inject('store')
@observer
class Container extends Component {
  componentDidMount() {
  }

  render() {
    return this.props.tmpls[0](this, {
      styles
    });
  }
}
ContainerHoc('Container', Container, searchStore); 

@registerTmpl('DataTable')
@inject('store')
@observer
class DataTable extends Component {
  @observable searchSpan = '';
  @observable searchParam = '';

  componentDidMount = () => {
  }

  inputChange = (e) => {
    this.searchSpan = e.target.value;
    if (this.searchSpan.indexOf('(') != -1) {
      // if (s) {
      this.searchParam = `$${this.searchSpan.substring(1)}`;
      console.log(this.searchParam);
      // }
    } else {
      this.searchParam = this.searchSpan;
      console.log(this.searchParam);
    }
  }

  query = () => {
    const { store } = this.props;
    Promise.all([
      store.getBlockData(this.searchParam)
    ]).then(

    ).catch(

    );
  }

  render() {
    const { store } = this.props;
    return tmpls.dataTable(this.state, this.props, this, {
      store,
      styles
    });
  }
}

if (module.hot) {
  module.hot.accept();
  njr.renderTmplTag({ target: '#container' });
}
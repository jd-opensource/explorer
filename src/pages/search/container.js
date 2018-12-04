import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import '../../common/containerConfig';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/breadcrumb';
import 'flarej/lib/components/antd/table';
import { autobind } from 'core-decorators';
import '../../components/header';
import '../../components/sider';
import { Input, Select, Icon, Message } from 'antd';
import ContainerHoc from '../../components/higherOrders/container';
import styles from './search.m.less';
import tmpls from './search.t.html';
import SearchStore from '../../stores/SearchStore';
const searchStore = new SearchStore();
const Option = Select.Option;

//页面容器组件
@inject('store')
@observer
class Container extends Component {
  componentDidMount() {
    const closeLoading = Message.loading('正在加载数据...', 0);
    this.props.store.getTableData(1, this.props.store.pageSize).then(() => closeLoading());
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
  searchItem = () => (
    <Input addonBefore = {this.selectBefore()} className = {`${styles.inputTable}`}/>
  )

  selectBefore = () => (
    <Select defaultValue="all">
      <Option value="all">全部</Option>
      <Option value="blockchain">区块</Option>
      <Option value="transaction">交易</Option>
    </Select>
  )

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
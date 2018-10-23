import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import '../../common/containerConfig';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/breadcrumb';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/select';
import { Message } from 'flarej/lib/components/antd/message';
import { Select } from 'flarej/lib/components/antd/select';
import { autobind } from 'core-decorators';
import '../../components/header';
import '../../components/sider';
import ContainerHoc from '../../components/higherOrders/container';
import styles from './ledgers.m.less';
import tmpls from './ledgers.t.html';
import { observable, toJS } from 'mobx';
import LedgersStore from '../../stores/LedgersStore';
const ledgersStore = new LedgersStore();
const Option = Select.Option;

//页面容器组件
@inject('store')
@observer
class Container extends Component {
  componentDidMount() {
    // const closeLoading = Message.loading('正在加载数据...', 0);
    // this.props.store.getTableData(1, this.props.store.pageSize).then(() => closeLoading());
  }

  render() {
    const { store } = this.props;
    return this.props.tmpls[0](this, {
      store,
      styles
    });
  }
}
ContainerHoc('Container', Container, ledgersStore); 

@registerTmpl('DataTable')
@inject('store')
@observer
class DataTable extends Component {
  @observable dataLedger = ''; // 合约账户
  @observable keys = []; // key数组

  inputChange = (e) => {
    this.dataLedger = e.target.value;
  }

  keyChange = (e) => {
    let str = e.target.value;
    this.keys = str.split(',');
  }

  query = () => {
    const { store } = this.props;
    Promise.all([
      store.getLedgerData(this.dataLedger)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  queryKey = () => {
    const { store } = this.props;
    Promise.all([
      store.getKeyData(this.keys)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  // 待确认
  selectItem = () => (
    <Select defaultValue = "1">
      <Option value = "1">原始内容</Option>
      <Option value = "2">UTF-8</Option>
    </Select>
  )

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
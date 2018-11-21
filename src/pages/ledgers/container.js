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
      store.getKeyData(this.keys, this.dataLedger)
    ]).then(

    ).catch((err) => {
      console.log(err);
    });
  }

  // 待确认
  selectItem = (item) => (
    <Select onChange = {(e) => this.handleSelectChange(e, item)} defaultValue = "1">
      <Option value = "1">原始内容</Option>
      <Option value = "2">UTF-8</Option>
    </Select>
  )

  handleSelectChange = (e, item) => {
    console.log(e, item);
    item.value = e == '1' ? this.enc(item.value) : this.dec(item.value);
    return item.value;
  }

  enc = (str) => {
    let val = '';
    for (let i = 0; i < str.length; i++) {
      val += str.charCodeAt(i).toString(16);
    }
    return val;
  }

  dec = (s1) => {
    var tmp2='';
    for(let i=0; i<s1.length;){
      tmp2+='%'+s1.substring (i,i+=2);
    }
    return decodeURI(tmp2);
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
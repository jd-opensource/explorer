import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Drawer } from 'antd';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import JSONTree from 'react-json-tree';
import {byteToString, stringToBase64, utf8ToString} from '../../../utils/util';
import 'flarej/lib/components/antd/table';
import Message from 'flarej/lib/components/antd/message';
import styles from './accountInfo.m.scss';
import tmpls from './accountInfo.t.html';

const theme = {
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};
//页面容器组件
@registerTmpl('AccountInfo')
@inject('store')
@observer
export default class AccountInfo extends Component {

  @observable kvData = [];
  @observable accountcount = 0;
  @observable accountcurrent = 1;
  @observable pageSize = 10;
  @observable visible = false;
  @observable valueinfo = '';
  @observable valueinfotype = 'BYTES';
  @observable jsondata = '';
  componentDidMount() {
    this.Search();
  }
  Search() {
    const { store: { account }, accountData } = this.props;

    if (accountData && accountData.address) {
      const closeLoading = Message.loading('正在获取数据...', 0);
      let leader = this.props.store.common.getDefaultLedger(),
        param = {
          fromIndex: (this.accountcurrent - 1) * this.pageSize,
          count: this.pageSize,
        },
        address = accountData.address;
      Promise.all([
        account.getEntriescount(leader, address)
      ]).then((data) => {
        if (data[0] > 0) {
          this.accountcount = data[0];
          Promise.all([account.getEntries(leader, address,
            param
          ),
          ]).then((data) => {
            this.kvData = data[0];
            closeLoading();
          });
        }
        else {
          closeLoading();
        }
      });
    }
  }
  ////分页切换
  @autobind
  onPageChange(page, pageSize) {
    const { store: { account } } = this.props;
    this.accountcurrent = page;
    this.Search();
  }
  // 关闭详细信息
  @autobind
  onClose(visible) {
    this.show = visible;

  }

  // 跳转到前置区块
  @autobind
  goBlock(e) {
    const { goPrev } = this.props;
    if (goPrev) {
      goPrev(e.target.innerText);
    }
  }

  isJsonString(str) {
    try {
      if (typeof JSON.parse(str) == "object") {
        return true;
      }
    } catch (e) {
    }
    return false;
  }

  Jsontree = () => {
    if (this.isJsonString(this.jsondata)) {
      return <JSONTree theme={theme}
        data={JSON.parse(this.jsondata)}
      />
    }
    else {
      return <JSONTree theme={theme}
        data={this.jsondata}
      />
    }

  };

  // 查看详细信息
  @autobind
  onShowBlockDetails(text, record) {
    this.onCloseblockDetails();
    if (record.type.toUpperCase() == 'JSON') {
      this.valueinfotype = 'JSON';
      this.jsondata = text;
    }
    else {
      this.valueinfotype = record.type.toUpperCase();
      this.valueinfo = text;
    }
  }
  // 关闭
  @autobind
  onCloseblockDetails() {
    this.visible = !this.visible;
  }
  //字符串限制长度
  strOfLength(str, l) {
    if (str.length > l) {
      return str.substring(0, l) + "...";
    }
    else {
      return str;
    }
  }
  // 交易列表
  @computed get tableColumns() {
    return [{
      title: '键',
      dataIndex: 'key',
      key: 'key'
    }, {
      title: '值',
      dataIndex: 'value',
      key: 'value',
      // render: (text, record, index) => nj`
      //   ${this.strOfLength(text || '', 50)}&nbsp;&nbsp;&nbsp;
      //   <a onClick=${() => this.onShowBlockDetails(text, record)}>详细</a>
      // `()
      render: (text, record, index) => (
        <div>
          {text && this.strOfLength(('' + text + '') || '', 50)}&nbsp;&nbsp;&nbsp;
          {text && (<a onClick={() => this.onShowBlockDetails(text, record)}>详细</a>) || null}
        </div>
      )
    }, {
      title: '版本',
      dataIndex: 'version',
      width: '10%',
      key: 'version',
    }, {
      title: '类型',
      dataIndex: 'type',
      width: '10%',
      key: 'type',
    }];
  }

  render() {
    const { store: { block }, accountData } = this.props;

    return tmpls.container({
      components: {
        'ant-Drawer': Drawer,
        JSONTree
      }
    }, this.props, this, {
      styles,
      block,
      accountData
    });
  }
}
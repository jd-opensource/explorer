import { Component, PropTypes } from 'react';
import { observable, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import 'flarej/lib/components/antd/menu';
import 'flarej/lib/components/antd/select';
import 'flarej/lib/components/antd/icon';
import styles from './header.scss';
import template from './header.t.html';

@inject('store')
@observer
export default class Header extends Component {

  // 菜单
  @observable menuData=[{

  }];
  // 切换菜单
  @autobind
  CheckMenu({key}){
    window.location.hash="#"+key;
  }

  handleSelectChange = (e) => {
    const { store: { common, search } } = this.props;
    common.setDefaultLedger(e);
    Promise.all([
      search.getBlockHeight(common.defaultledger),
      search.getTransactionTotal(common.defaultledger),
      search.getUserTotal(common.defaultledger),
      search.getLedgerTotal(common.defaultledger),
      search.getContractTotal(common.defaultledger),
    ]).then(() => {
      closeLoading();
    });
  }

  render() {
    const { store: { common } } = this.props;
    return template(this.props, this, {
      styles,
      common,
      headerPic: require('../../images/pic-header.png')
    });
  }
}

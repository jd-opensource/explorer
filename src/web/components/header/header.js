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

  @observable hash = ''; // url标签
  // 菜单
  @observable menuData=[{

  }];

  componentDidMount = () => {
    let hashArr = location.hash.split('/');
    this.hash = hashArr[1];
    console.log(this.hash);
  }

  // 切换菜单
  @autobind
  CheckMenu({key}){
    this.hash = key;
    window.location.hash = '#' + key;
  }

  handleSelectChange = (e) => {
    const { store: { account, block, common, search, user } } = this.props;
    // jinlong12
    common.setDefaultLedger(e);
    switch(this.hash) {
      case 'search':
        Promise.all([
          search.getBlockHeight(common.defaultledger),
          search.getTransactionTotal(common.defaultledger),
          search.getUserTotal(common.defaultledger),
          search.getLedgerTotal(common.defaultledger),
          search.getContractTotal(common.defaultledger),
        ]).then(() => {
          // closeLoading();
        });
        break;
      case 'account':
        Promise.all([
          account.getAccount({
            keyword: '_all_',
            ledgers: common.defaultledger
          }),
        ]).then(() => {
        });
        break;
      case 'block':
        block.setInputRole(0);
        Promise.all([
          block.getBlockHeight(common.defaultledger),
        ]).then((success) => {
          block.searchData(success);
        }).catch((err) => {

        });
        // block.onSearch(common.defaultledger);
        break;
      case 'user':
        Promise.all([
          user.getUser({
            ledgers:common.defaultledger,
            keyword:'_all_'
          })
        ]).then(() => {

        }).catch(() => {

        });
        break;
    }
    
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

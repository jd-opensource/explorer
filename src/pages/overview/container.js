import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import '../../common/containerConfig';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/breadcrumb';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/pagination';
import { Message } from 'flarej/lib/components/antd/message';
import { autobind } from 'core-decorators';
import '../../components/header';
import '../../components/sider';
import ContainerHoc from '../../components/higherOrders/container';
import styles from './overview.m.less';
import tmpls from './overview.t.html';
import OverviewStore from '../../stores/OverviewStore';
import { Promise } from 'core-js';
const overviewStore = new OverviewStore();

//页面容器组件
@inject('store')
@observer
class Container extends Component {
  componentDidMount() {
    console.log(this.props);
    // const closeLoading = Message.loading('正在加载数据...', 0);
    // this.props.store.getTableData(1, this.props.store.pageSize).then(() => closeLoading());
  }

  render() {
    const { store } = this.props;
    console.log(this, this.props, store);
    store.getUserTable();
    return this.props.tmpls[0](this, {
      styles,
      store
    });
  }
}
ContainerHoc('Container', Container, overviewStore); 

@registerTmpl('DataTable')
@inject('store')
@observer
class DataTable extends Component { 
  @observable pageIndex = 0;
  @observable userData = [];
  @observable total = 0;
  componentDidMount = () => {
    const { store } = this.props;
    this.userData = [...store.userTable];
    this.total = store.pageTotal;
    console.log(this.userData);
    Promise.all([
      store.getBlockHeight(), store.getTransactionTotal(), store.getUserTotal(), store.getLedgerTotal(), store.getContractTotal()
    ]).then(

    ).catch(

    );
    Promise.all([
      store.getLedgerCurrent(), store.getNewTransaction(), store.getNewLedger()
    ]).then(

    ).catch(

    );
    Promise.all([
      store.getUserList()
    ]).then(

    ).catch(

    );
  }

  // @page: 页码----->number类型
  handlePageChange = (page) => {
    console.log(page);
    this.pageIndex = page - 1;
    console.log(`当前页码为:${page}, 实际为第${this.pageIndex}页`);
  }

  /**
   * @num: 第几条
   */
  tableDataState = num => {
    const { store } = this.props;
    // console.log(store.userTable);
    return (
      <div className = {`${styles.userState}`}>
        <div className={`${styles.stateHead}`}>
          <div className={`${styles.leftTitle}`}></div>
          <div className={`${styles.rightTitle}`}>
            <p className={`${styles.title}`}>
              <span className={`${styles.key}`}>名称&nbsp;:&nbsp;</span>
              <span className={`${styles.val}`}>
                {store.userTable && store.userTable[`${num}`] && store.userTable[`${num}`]['name'] || ''}
              </span>
            </p>
            <p className={`${styles.title}`}>
              <span className={`${styles.key}`}>地址&nbsp;:&nbsp;</span>
              <span className={`${styles.val}`}>
                {store.userTable && 
                  store.userTable[`${num}`] && 
                    `${store.userTable[`${num}`]['consensusAddress']['host']}:${store.userTable[`${num}`]['consensusAddress']['port']}` 
                      || ''
                }
              </span>
            </p>
          </div>
        </div>
        <p className={`${styles.keyTitle}`}>公钥内容&nbsp;:</p>
        <p className={`${styles.keySpan}`}>
          {/* 64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty  */}
          {store.userTable && store.userTable[`${num}`] && store.userTable[`${num}`]['pubKey']['value'] || ''}
        </p>
        <p className={`${styles.keygen}`}>
          <span className={`${styles.keygenTitle}`}>公钥算法&nbsp;:&nbsp;</span>
          <span className={`${styles.keygenSpan}`}>
            {/* ED25519 */}
            {store.algorithms && store.algorithms[`${num}`] || ''}
          </span>
        </p>
      </div>
    );
  }

  dataNull = () => (
    <div style={{'width': '100%', 'height':'474px', 'display': 'flex', 'justifyContent':'center', 'alignItems': 'center'}}>
      <div>
        暂无数据！！
      </div>
    </div>
  )

  dataNullO = () => (
    <div style={{'width': '100%', 'height':'237px'}}>
      
    </div>
  )

  // 成员列表数据
  tableData = () => {
    const { store } = this.props;
    let zero = this.pageIndex * 4;
    let one = this.pageIndex * 4 + 1;
    let two = this.pageIndex * 4 + 2;
    let three = this.pageIndex * 4 + 3;
    let tableZero = store.userTable[`${zero}`] ? this.tableDataState(zero) : null;
    let tableOne = store.userTable[`${one}`] ? this.tableDataState(one) : null;
    let tableTwo = store.userTable[`${two}`] ? this.tableDataState(two) : null;
    let tableThree = store.userTable[`${three}`] ? this.tableDataState(one) : null;
    let tableNull = this.dataNull();
    let tableNullO = this.dataNullO();
    // if (store.userTable[`${zero}`]) {
    //   debugger;
    //   return tableZero;
    // };
    // if (store.userTable[`${one}`]) {
    //   debugger;
    //   return tableOne;
    // };
    if (tableZero == null && tableOne == null && tableTwo == null && tableThree == null) {
      return tableNull;
    } else if (tableZero !== null && tableOne == null && tableTwo == null && tableThree == null) {
      return [
        tableZero,
        tableNullO
      ];
    } else if (tableZero !== null && tableOne !== null && tableTwo == null && tableThree == null) {
      return [
        tableZero,
        tableOne,
        tableNullO
      ];
    }else {
      return [
        tableZero,
        tableOne,
        tableTwo,
        tableThree
      ];
    }
  }

  @autobind
  onPageChange(page, pageSize) {
    const closeLoading = Message.loading('正在加载数据...', 0);
    this.props.store.getTableData(page, pageSize).then(() => closeLoading());
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
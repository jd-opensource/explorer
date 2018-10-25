import { observable, computed, action, transaction } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import { tranBase58 } from '../common/util';

export default class LedgersStore {
  @observable showLdegerList = 1; // 1----->正常页面 0----->请求出错页面 -1----->异常页面
  @observable showKeyList = 0; // 0----->隐藏页面 1----->显示页面
  @observable showKeys = 0;
  @observable ledgerData = {};
  @observable algorithm = ''; // 公钥算法
  @observable keyData = [];
  @observable ledgerValue = '';

  @autobind
  @action
  getLedgerData(e) {
    console.log(e);
    fetchData(`${G_WEB_DOMAIN}/ledgers/data-account/${localStorage.defaultValue}/${e}`,
      this.setLedgerData,
      '', { method: 'get',}
    ).catch(error => {
      console.log(error);
    });
  }

  setLedgerData = (result) => {
    let response = result && result.data ? result.data : {};
    this.showKeyList = 1;
    this.ledgerData = {...response};
    this.algorithm = tranBase58(this.ledgerData['pubKey']['value']);
    this.ledgerValue = localStorage.defaultValue;
    console.log(this.ledgerValue);
  }

  @autobind
  @action
  getKeyData(e, f) {
    let formdata = new FormData();
    formdata.append('key', e); 
    console.log(formdata);
    fetchData(`${G_WEB_DOMAIN}/ledgers/data-entries/${localStorage.defaultValue}/${f}`,
      this.setKeyData, {formdata},
      { 
        method: 'post',
        headers:{
    		  'Content-Type':'application/x-www-form-urlencoded'
        },
        body:formdata
      }
    ).catch(error => {
      console.log(error);
    });
  }

  setKeyData = (result) => {
    let response = result && result.data ? result.data : [];
    console.log(result, response);
    this.keyData = {...response};
  }
}
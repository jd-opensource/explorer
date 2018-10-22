import { observable, computed, action, transaction } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import { tranBase58 } from '../common/util';

export default class LedgersStore {
  @observable ledgerData = [
    {
      'key': 'key1',
      'nil': false,
      'type': 'TEXT',
      'value': 'value1',
      'version': 1
    },
    {
      'key': 'key2',
      'nil': false,
      'type': 'TEXT',
      'value': 'value2',
      'version': 2
    }
  ]

  @autobind
  @action
  getLedgerData(e) {
    console.log(e);
    fetchData(`http://localhost:8000/ledgers/contract/${e}/www.jd.com`,
      this.setLedgerData,
      '', { 
        method: 'get',
        headers: {
          accept: 'application/json',
          cookie: document.cookie,
          'Access-Control-Allow-Credentials' : true,
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'OPTIONS',
          'Access-Control-Allow-Headers':'application/json',
          
        },
        mode: 'no-cors', 
      }
    ).catch(error => {
      console.log(error);
    });
    // this.ledgerData['pubKey']['algorithm'] = tranBase58(this.ledgerData['pubKey']['value']);
    // console.log(this.contractData['pubKey']['algorithm']);
    // console.log(this.userTable);
    // return this.contractData;
  }

  @autobind
  @action
  test() {
    // this.ledgerData['pubKey']['algorithm'] = tranBase58(this.ledgerData['pubKey']['value']);
    // console.log(this.contractData['pubKey']['algorithm']);
  }

  setLedgerData = (result) => {
    console.log(result);
  }
}
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
    fetchData(`${G_WEB_DOMAIN}/ledgers`,
      this.setLedgerData,
      '', { method: 'get',}
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
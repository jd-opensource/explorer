import { observable, computed, action, transaction } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import { tranBase58 } from '../common/util';

export default class ContractStore {
  @observable contractData =  {
    'address': 'www.jd.com',
    'chaincodeVersion': -1,
    'pubKey': {
      'value': 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
    }
  };

  @autobind
  @action
  getContractData() {
    fetchData('/ledgers/contract/64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty/www.jd.com',
      this.setContractData,
      '', { 
        method: 'get',
        headers: {
          // accept: 'application/json',
          cookie: document.cookie,
        } 
      }
    ).catch(error => {
      console.log(error);
    });
    this.contractData['pubKey']['algorithm'] = tranBase58(this.contractData['pubKey']['value']);
    console.log(this.contractData['pubKey']['algorithm']);
    // console.log(this.userTable);
    // return this.contractData;
  }

  @autobind
  @action
  test() {
    this.contractData['pubKey']['algorithm'] = tranBase58(this.contractData['pubKey']['value']);
    console.log(this.contractData['pubKey']['algorithm']);
  }

  setContractData = (result) => {
    console.log(result);
  }
}
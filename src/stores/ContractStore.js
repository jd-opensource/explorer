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
  getContractData(e) {
    console.log(e);
    fetchData(`http://localhost:8000/ledgers/contract/${e}/www.jd.com`,
      this.setContractData,
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
    this.contractData['pubKey']['algorithm'] = tranBase58(this.contractData['pubKey']['value']);
    console.log(this.contractData['pubKey']['algorithm']);
    // console.log(this.userTable);
    // return this.contractData;
  }

  @autobind
  @action
  test() {
    this.contractData['pubKey']['algorithm'] = tranBase58(this.contractData['pubKey']['value']);
    // console.log(this.contractData['pubKey']['algorithm']);
  }

  setContractData = (result) => {
    console.log(result);
  }
}
import { observable, computed, action, transaction } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import { tranBase58 } from '../common/util';

export default class ContractStore {
  @observable contractData =  {
    // 'address': 'www.jd.com',
    // 'chaincodeVersion': -1,
    // 'pubKey': {
    //   'value': 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
    // }
  };
  @observable algorithm = ''; // 公钥算法

  @autobind
  @action
  getContractData(e) {
    console.log(e, this, localStorage);
    fetchData(`${G_WEB_DOMAIN}/ledgers/contract/${localStorage.defaultValue}/${e}`,
      this.setContractData,
      '', { 
        method: 'get',
      }
    ).catch(error => {
      console.log(error);
    });
    // this.contractData['pubKey']['algorithm'] = tranBase58(this.contractData['pubKey']['value']);
    // console.log(this.contractData['pubKey']['algorithm']);
    // console.log(this.userTable);
    // return this.contractData;
  }

  setContractData = (result) => {
    // console.log(result);
    let response = result && result.data;
    this.contractData = {...response};
    this.algorithm = tranBase58(this.contractData['pubKey']['value']);
  }
}
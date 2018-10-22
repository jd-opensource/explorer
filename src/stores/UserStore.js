import { observable, computed, action, transaction } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import { tranBase58 } from '../common/util';

export default class UserStore {
  @observable userData = {
    'address': 'www.jd.com',
    'pubKey': {
      'value': 'sR4AF'
    }
  }
  @observable __HOST = 'http://localhost:8000/'
  
  @autobind
  @action
  getUserData(e) {
    console.log(e);
    fetchData(`${this.__HOST}ledgers/user/${e}/www.jd.com`,
      this.setUserData,
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
    this.userData['pubKey']['algorithm'] = tranBase58(this.userData['pubKey']['value']);
    console.log(this.contractData['pubKey']['algorithm']);
  }

  @autobind
  @action
  test() {
    this.userData['pubKey']['algorithm'] = tranBase58(this.userData['pubKey']['value']);
  }

  setUserData = (result) => {
    console.log(result);
  }
}
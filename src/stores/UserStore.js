import { observable, computed, action, transaction } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import { tranBase58 } from '../common/util';

export default class UserStore {
  @observable userData = {
    // 'address': 'www.jd.com',
    // 'pubKey': {
    //   'value': 'sR4AF'
    // }
  }
  @observable algorithm = '';
  
  @autobind
  @action
  getUserData(e) {
    console.log(e);
    fetchData(`${G_WEB_DOMAIN}/user`,
      this.setUserData,
      '', { 
        method: 'get',
      }
    ).catch(error => {
      console.log(error);
    });
    // this.userData['pubKey']['algorithm'] = tranBase58(this.userData['pubKey']['value']);
    // console.log(this.contractData['pubKey']['algorithm']);
  }

  // @autobind
  // @action
  // test() {
  //   this.userData['pubKey']['algorithm'] = tranBase58(this.userData['pubKey']['value']);
  // }

  setUserData = (result) => {
    let response = result && result.data;
    this.userData = {...response};
    this.algorithm = tranBase58(this.userData['pubKey']['value']);
  }
}
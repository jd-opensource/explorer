import { observable, computed, action, transaction, toJS } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';

export default class SearchStore {
  @observable showSummary = false;
  @observable allData = null;
  @observable blockData = null;
  @observable transData = null;
  @observable total = 0;
  @observable transNum = 0;

  @autobind
  @action
  getBlockData(inputVal) {
    // http://192.168.151.39:10001/api/v1/search
    console.log(inputVal);
    fetchData(`${G_WEB_DOMAIN}/api/v1/search`,
    // fetchData(`http://192.168.151.39:10001/api/v1/search?q=${inputVal}`,
      this.setBlockData,{q:inputVal},
      { 
        method: 'get',
        // mode: 'no-cors',
      }
    ).catch(error => {
      console.log(error);
    });
  }

  setBlockData = (result) => {
    if (result.message == 'OK') {
      this.showSummary = true;
      this.blockData = result && result.data && result.data.blocks ? [...result.data.blocks] : undefined;
      this.transData = result && result.data && result.data.txs ? [...result.data.txs] : undefined;
      if (this.blockData) {
        if (this.transData) {
          this.allData = [...this.blockData, ...this.transData];
        } else {
          this.allData = [...this.blockData];
        }
      } else {
        if (this.transData) {
          this.allData = [...this.transData];
        } else {
          this.allData = undefined;
        }
      }
      this.total = this.allData ? toJS(this.allData).length : 0;
      console.log(this.total);
      this.transNum = this.transData ? toJS(this.transData).length : 0;
    }
  }
}
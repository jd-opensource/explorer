import { observable, computed, action, transaction } from 'mobx';
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
    console.log(inputVal);
    fetchData(`${G_WEB_DOMAIN}/api/v1/search?q=${inputVal}`,
      this.setBlockData,
      '', { 
        method: 'get',
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
    }
  }
}
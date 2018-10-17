import { observable, computed, action, transaction } from 'mobx';
import { types } from 'mobx-state-tree';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { autobind } from 'core-decorators';
import { Notification } from 'flarej/lib/components/antd/notification';
import { tranBase58 } from '../common/util';

export default class OverviewStore {
  @observable overviewHeadData = {
    blockHeight: 2,
    transactionTotal: 32124,
    userTotal: 34,
    dataLedgersTotal: 451,
    contractTotal: 32
  }; // 摘要页面tab部分
  @observable ledgerInformation = {
    adminInfo: {
      metadata: {
        seed: 'amQ=',
        setting: {
          cryptoSetting: {
            hashAlgorithm: 'SHA256',
            autoVerifyHash: false
          },
          consensusSetting: {
            hostSettingValue: 'Z2V0SG9zdFNldHRpbmdWYWx1ZQ==',
            systemSettingValue: 'Z2V0U3lzdGVtU2V0dGluZ1ZhbHVl'
          }
        },
        participantsHash: {
          value: 'F4evU3YyKryMCBNsrPg7NwBz1NX'
        }
      },
      participantCount: 1234
    },
    latestBlockHash: {
      value: '4BoCfJESYPMpDBZVNgKN1j9vuD'
    },
    hash: {
      value: '3uqhFboGY1M'
    }
  }; // 当前账本信息
  @observable accountCount = 78; // 新增账户数量
  @observable transactionCount = 246; // 新增交易数量
  @observable userTable = [
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 0,
      name: 'jd-11'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 1,
      name: 'jd-12'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 2,
      name: 'jd-13'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 3,
      name: 'jd-14'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 4,
      name: 'jd-15'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 5,
      name: 'jd-16'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 6,
      name: 'jd-17'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 7,
      name: 'jd-18'
    },
    {
      pubKey: {
        value: 'UUi8Ku8aypHYnNkJRuFnkEYSuXT'
      },
      hostAddress: {
        host: '172.62.35.230',
        secure: false,
        port: 6666
      },
      id: 8,
      name: 'jd-19'
    }
  ]
  @observable pageTotal = 3
  @observable pageIndex = 1;
  @observable pageSize = 10;
  @observable count = 0;
  @observable tableData = [];

  @autobind
  @action
  getTableData(currentPage = this.pageIndex, pageSize = this.pageSize) {
    return fetchData(`${G_WEB_DOMAIN}/overview/getTableData`, result => {
      transaction(() => {
        if (result.success) {
          this.pageIndex = currentPage;
          this.pageSize = pageSize;
          this.count = result.totalCount;
          this.tableData = result.data;
        } else {
          this.pageIndex = 1;
          this.pageSize = 10;
          this.count = 0;
          this.tableData = [];
          Notification.error({ description: '获取表格数据出错，异常是:' + result.msg, duration: null });
        }
      });
    }, {
      currentPage,
      pageSize,
    }, { method: 'post' }).catch((ex) => {
      Notification.error({ description: '获取表格数据出错，错误是:' + ex, duration: null });
    });
  }

  @autobind
  @action
  getUserTable() {
    this.userTable && this.userTable.map((item, key) => {
      item['pubKey']['algorithm'] = tranBase58(item['pubKey']['value']);
    });
    console.log(this.userTable);
    return this.userTable;
  }
}
import { Component, PropTypes } from 'react';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import { Drawer} from 'antd';
import { copyToClipboard,tranBase58,numToalgorithm } from '../.././../utils/util';
import Notification from '../.././../utils/notification';
import Message from 'flarej/lib/components/antd/message';
import 'flarej/lib/components/antd/menu';
import 'flarej/lib/components/antd/select';
import 'flarej/lib/components/antd/icon';
import 'flarej/lib/components/antd/tooltip';
import styles from './header.scss';
import template from './header.t.html';

@inject('store')
@observer
export default class Header extends Component {

  @observable hash = ''; // url标签
  @observable visible=false;
  // 菜单
  @observable menuData=[{

  }];

  componentDidMount = () => {
    let hashArr = location.hash.split('/');
    this.hash = hashArr[1];
  }

  // 切换菜单
  @autobind
  CheckMenu({key}){
    this.hash = key;
    window.location.hash = '#' + key;
  }
  // 复制账本
  @autobind
  onClickCopy(){
    const { store: { common } } = this.props;
    copyToClipboard(common.defaultledger);
    Notification.success({
      title:'提示',
      description: '已复制',
      duration: null
    
    });
  }

  //查看账本信息
  @autobind
  onClickEye(){
    const closeLoading = Message.loading('正在获取数据...', 0);
    Promise.all([
      this.props.store.common.getLedger(this.props.store.common.getDefaultLedger()),
    ]).then(() => {
     
      closeLoading();
    });
    this.visible=true;
  }

  // 交易列表
  @computed get tableColumns() {
    return [{
      title: '参与方序号',
      dataIndex: 'id',
      key:'id'
    },
    {
      title: '参与方名字',
      dataIndex: 'name',
      key:'name'
    },
    {
      title: '参与方地址',
      dataIndex: 'address',
      key:'address'
    },
    {
      title: '参与方公钥',
      dataIndex: 'pubKey.value',
      key:'pubKey'
    },
    {
      title: '公钥算法',
      dataIndex: 'pubKey.value',
      key:'algorithm',
      render: (text, record, index) => nj `
       ${tranBase58(text)}
      `()
    }];
  }
 // 交易列表
 @computed get tableColumnsOfconfig() {
  return [{
    title: 'Key',
    dataIndex: 'name',
    key:'name'
  },
  {
    title: '值',
    dataIndex: 'value',
    key:'value'
  }];
}
  // 关闭
  @autobind
  onClose(){
    this.visible=false;
  }
  handleSelectChange = (e) => {
    const { store: { account, block, common, search, user } } = this.props;
    localStorage.setItem('defaultledger',e);
    window.location.reload();
  }

  render() {
    const { store: { common } } = this.props;
    return template( {
      components: {
        'ant-Drawer': Drawer,
      }},this.props, this, {
      styles,
      common,
      headerPic: require('../../images/pic-header.png'),
      numToalgorithm
    });
  }
}

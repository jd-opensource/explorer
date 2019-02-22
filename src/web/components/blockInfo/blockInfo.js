import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import { Drawer} from 'antd';
import { BlockCollapse,BlockCollapseSmall,BlockCollapsePanel } from '../../components/blockCollapse';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/pagination';
import 'flarej/lib/components/antd/tabs';
import 'flarej/lib/components/antd/tree';
import 'flarej/lib/components/antd/checkbox';
import 'flarej/lib/components/antd/collapse';
import Message from 'flarej/lib/components/antd/message';
import Notification from '../../../utils/notification';
import {isNotANumber} from '../../../utils/util';
import styles from './blockInfo.m.scss';
import tmpls from './blockInfo.t.html';
import BlockList from '../../components/blockList';
import Search from 'antd/lib/transfer/search';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

//页面容器组件
@registerTmpl('Block')
@inject('store')
@observer
export default class BlockInfo extends Component {
  @observable detailModalVisible = false;
  @observable detailData = [];
  @observable selectedRowKeys = [];
  @observable selectedRows = [];
  @observable optionBlockHeight=0;
  @observable optionBlockHash='';
  @observable mySwiper='';
  @observable blockDetails=false;
  @observable show=false;
  // jinlong12
  // @observable inputRole = 0;
  // @observable blockList = [];

  componentDidMount() {
    const { store: { header,block } } = this.props;

  }

  @autobind
  onClose(visible){
    this.show=visible;
  }
  @autobind
  onCloseblockDetails(){
    this.blockDetails=!this.blockDetails;
  }

  @autobind
  onInputRole(e) {
    const { store: { block } } = this.props;

    if (isNotANumber(e.target.value)) {
      // this.inputRole = e.target.value;
      block.setInputRole(e.target.value);
    }
  }

  @autobind
  onPressEnterInputRole(){
    const { store: { block } } = this.props;

    this.Search();
    // this.searchTransaction(this.inputRole);
    this.searchTransaction(block.inputRole);
    this.mySwiper.slideTo(block.inputRole*1);
    $('.swiper-slide').each(function(){
      if ($(this).attr('data-con')*1==block.inputRole*1) {
        $('.swiper-slide').removeClass('lights');
        $(this).addClass('lights');
      }
    });
  }

  @autobind
  Search(){
    const { store: { block, common } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let legder=this.props.store.common.getDefaultLedger();
    // let legder = common.defaultledger;
    Promise.all([
      block.getBlockHeight(legder),
    ]).then((success) => {
      // let totalBlock=success[0];// 最高区块
      // let searchBlock=this.inputRole*1; // 将要搜索的区块
      // if(this.inputRole==0){
      //   searchBlock=totalBlock-3; // 将要搜索的区块
      // }
      // this.inputRole=searchBlock;
      // // 验证区块是否超过最大区块
      // if (searchBlock>totalBlock) {
      //   searchBlock= totalBlock;
      // }
      // // 验证区块是否小于1
      // if (searchBlock<1) {
      //   searchBlock=1;
      // }
      // let interval=3,// 区块列表显示数量前后间隔
      //   length=7,// 区块列表显示数量
      //   startBlock=searchBlock-3,// 区块列表显示起始高度
      //   endBlock=searchBlock+3;// 区块列表显示终止高度
      // // 起始高度是开始的情况
      // if (startBlock<=1) {
      //   // 计算起始高度
      //   for (let i = 0; i < length; i++) {
      //     if (startBlock<1) {
      //       startBlock++;
      //       endBlock++;
      //     }
      //   }
      //   // 计算终止高度
      //   for (let i = 0; i <length; i++) {
      //     if (endBlock>totalBlock) {
      //       endBlock--;
      //     }
      //   }
      // } else if(endBlock>=totalBlock){
      //   // 计算起始高度
      //   for (let i = 0; i < length; i++) {
      //     if (endBlock>totalBlock) {
            
      //       startBlock>1&&startBlock--;
      //       endBlock--;
      //     }
      //   }
      // }
      // this.blockList=[];
      // for (let i = startBlock; i <= endBlock; i++) {
      //   this.blockList.push({
      //     height:i,
      //     check:i==searchBlock
      //   });
        
      // }
      // // this.blockList=this.blockList.reverse();
      block.searchData(success, legder);
      closeLoading();
    });
  }
 
  searchTransaction(height){
    console.log(height);
    const { store: { block } } = this.props;
    Promise.all([
      block.getTransaction({
        height:height,
        from:0,
        to:60,
        ledgers:this.props.store.common.getDefaultLedger()
      }),
      block.getTransactionHash({
        from:height,
        to:height,
        ledgers:this.props.store.common.getDefaultLedger()
      })
    ]).then(() => {
    });
  }

  @autobind
  onClickSearch(height){
    const { store: { block } } = this.props;
    return e => {
      // this.inputRole=height;
      block.setInputRole(height);
      this.Search();
      this.searchTransaction(height);
    }   
    
  }

  @autobind
  onShowBlockDetails(record,index){
    this.show=!this.show;
  }

  @computed get tableColumns() {
    return [{
      title: '交易哈希',
      dataIndex: 'address',
      width:'80%',
      key:'name'
    }, {
      title: '执行状态',
      dataIndex: 'public_key',
      width:'10%',
      key:'describe',
      render: (text, record, index) => nj `
        <span class="success">${text}</span>
      `()
    }, {
      title: '操作',
      dataIndex: '',
      width:'10%',
      key: 'cTime',
      render: (text, record, index) => nj `
      <a  href="javascript:;" onClick=${()=>this.onShowBlockDetails(record, index)}>查看详情</a>
      `()
    }];
  }

  render() {
    const { store: { block } } = this.props;
    return tmpls.container({
      components: {
        'ant-Drawer': Drawer,
        'BlockCollapse':BlockCollapse,
        'BlockCollapseSmall':BlockCollapseSmall,
        'BlockCollapsePanel':BlockCollapsePanel,
      }
    },this.props, this, {
      styles,
      block,
      tableData: [{"address":'64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty ',"public_key":'成功'},
        {"address":'64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty ',"public_key":'成功'},
        {"address":'64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty ',"public_key":'成功'},
        {"address":'64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty ',"public_key":'成功'},
        {"address":'64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty ',"public_key":'成功'},
        {"address":'64hnH4a8n48LeEP5HU2bMWmNxUPcaZ1JRCehRwvuNS8Ty ',"public_key":'成功'}],
    });
  }
}
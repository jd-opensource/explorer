import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observable,computed,toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import JSONTree from 'react-json-tree';
import { fetchData } from '../../../utils/fetchConfig';
import {isJsonString} from '../../../utils/util';
import styles from './BlockList.m.scss';
import tmpls from './BlockList.t.html';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/modal';

@registerTmpl('BlockList')
@inject('store')
@observer
export default class BlockList extends Component {
  constructor(props) {
    super(props);
  }
  @observable data=[];
  @observable hash_id='';
  @observable show=false;
  @observable jsondata=false;
 
  componentDidMount(){
    const { store: { block } } = this.props;
    this.hash_id=this.props.source.hash_id;
    Promise.all([
      block.getTransactionMore({
        keyword:this.props.source.hash_id,
        ledgers:this.props.store.common.getDefaultLedger()
      }),
    ]).then((success) => {
      this.data =success[0];// 最高区块
    });
  }

  @computed get tableColumns() {
    return [{
      title: '键',
      dataIndex: 'key',
    }, {
      title: '版本',
      dataIndex: 'version',
    }, {
      title: '值',
      dataIndex: 'value',
      render: (text, record, index) => nj `
      <span>${text.length>60 && (text.substring(0,50)+'...') || text}</span>
      `()
    },
    {
      title: '',
      dataIndex: '',
      render: (text, record, index) => nj `
      <a href="javascript:;" onClick=${()=>this.onShow(record, index)} className="btn-link">详细</a>
      `()
    }];
  }
  @autobind
  onShow(record, index){
    this.show=true;
    this.jsondata=record.value;
  }

  Jsontree=()=>{
    // let json=this.jsondata&&JSON.parse(this.jsondata)||'';
    if (isJsonString(this.jsondata)) {
      return <JSONTree 
        data={JSON.parse(this.jsondata)}
      />  
    }
    else{
      return <JSONTree 
        data={this.jsondata}
      />
    }
  }

  // 关闭
  @autobind
  handleCancel(){
    this.show=false;
  }
  render() {
    return tmpls.blockList(this.props, this, { 
      styles,
      tableData: toJS(this.data), 
    });
  }
}

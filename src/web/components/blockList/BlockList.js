import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observable,computed,toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import { fetchData } from '../../../utils/fetchConfig';
import styles from './BlockList.m.scss';
import tmpls from './BlockList.t.html';
import 'flarej/lib/components/antd/input';

@registerTmpl('BlockList')
@inject('store')
@observer
export default class BlockList extends Component {
  constructor(props) {
    super(props);
  }
  @observable data=[];
  @observable hash_id='';
  transactionMore=(result)=>{debugger;
    if (result.message == 'OK')
    {
      this.data = result.data && result.data.kvs || [];
    } 
    else{
      this.data =  [];
    }
  }
  componentDidMount(){
    const { store: { block } } = this.props;
    this.hash_id=this.props.source.hash_id;
    debugger;
    fetchData(`${__HOST}/api/v1/query/writeset/tx`,
      this.transactionMore,{
            keyword:this.props.source.hash_id
          },
      { 
        method: 'get',
      }
    ).catch(error => {
    });
    // Promise.all([
    //   block.getTransactionMore({
    //     keyword:'641UtzqGsxLzM2w7qtXYV2fieM43roWRMxGC7tWDbGzAR'
    //   }),
    // ]).then(data => {
    //   debugger;
    // });
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
      <span>${text}</span>
      `()
    },
    {
      title: '',
      dataIndex: '',
      key: 'cTime',
      render: (text, record, index) => nj `
      <span>详细</span>
      `()
    }];
  }
  
  render() {
    return tmpls.blockList(this.props, this, { 
      styles,
      tableData: toJS(this.data), 
    });
  }
}

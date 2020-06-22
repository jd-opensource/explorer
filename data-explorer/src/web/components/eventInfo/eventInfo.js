import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import styles from './eventInfo.m.scss';

import { Badge, Col, Drawer, Message, Row, Table } from 'antd';

function arrayIndexOf(arr, val) {
    for (var i = 0, len = arr.length; i < len; i++) { 
    if (arr[i] == val) {
        return i; 
    }
    } 
    return -1; 
}
function arrayRemove(arr, val) {
    var index = arrayIndexOf(arr, val);
    if (index > -1) { 
    arr.splice(index, 1); 
    }
    return arr; 
}


//页面容器组件
@inject('store')
@observer
export default class EventInfo extends Component {
    constructor(props) {
        super(props);
    }

    @observable pageSize = 10;
    @observable pageEvent = 10;
    @observable visible = false;
    @observable expandedRowKeys = [];
    @observable expandedRowKeysName = [];
    
    onPageChange = (page, pageSize) => {
        console.log(page, pageSize)
        const { data, store: { common, event } } = this.props;
        const closeLoading = Message.loading('正在获取数据...', 0);
        let leaders = common.getDefaultLedger();

        event.setEvent(page);
        this.expandedRowKeys = [];

        let param = {
            fromIndex: (event.eventCurrent - 1) * this.pageSize,
            count: this.pageSize,
        };
        let address = data.address && data.address.value && data.address.value || '';


        // 查询事件列表
        Promise.all([
            event.getEventCount(common.getDefaultLedger(), address)
        ]).then(() => {
            if (event.eventTotal > 0) {
                Promise.all([
                    event.getEventData(common.getDefaultLedger(), address, param)
                ]).then(() => {
                    closeLoading();        
                });
            } else {
                closeLoading();
            }
        })
    }

    onPageChangeName = (page, pageSize) => {
        const { data, store: { common, event } } = this.props;
        event.setName(page);
        this.expandedRowKeysName = [];
        let address = data.address && data.address.value && data.address.value || '';
        let param = {
            fromSequence: (event.nameCurrent - 1) * this.pageEvent,
            count: this.pageEvent,
        }

        

        Promise.all([
            event.getNameCount(common.getDefaultLedger(), address)
        ]).then(() => {
            if (event.nameTotal) {
                Promise.all([
                    event.getEventName(common.getDefaultLedger(), address, event.nameRecord, param)
                ]).then(() => {
                    
                })
            }
        })
    }

    onShow = (record, index) => {
        const { data, store: { common, event } } = this.props;
        let address = data.address && data.address.value && data.address.value || '';
        let param = {
            fromSequence: (event.nameCurrent - 1) * this.pageEvent,
            count: this.pageEvent,
        }
        event.setNameRecord(record)
        Promise.all([
            event.getNameCount(common.getDefaultLedger(), address)
        ]).then(() => {
            if (event.nameTotal) {
                Promise.all([
                    event.getEventName(common.getDefaultLedger(), address, record, param)
                ]).then(() => {
                    this.visible = true;
                })
            }
        })
        
    }

    onClose = () => {
        const { data, store: { common, event } } = this.props;
        this.visible = false;
        event.setName(1)
    }

    onShowLatest = (e, record) => {
        const { data, store: { common, event } } = this.props;
        let address = data.address && data.address.value && data.address.value || '';

        
        Promise.all([
            event.getEventLatest(common.getDefaultLedger(), address, record)
        ]).then(() => {

        })
        
    }

    expandedRowRender = () => {
        const { store: { event } } = this.props;
        let data = event.dataLatest && {...event.dataLatest} || {}
        return (
            <div>
                <div className = {styles.info}>
                    <h4>最新事件</h4>
                    <Row className = {styles.gl}>
                        <Col span = {2} xs = {24} sm = {8} lg = {2}>事件序列:</Col>
                        <Col span = {10} xs = {24} sm = {16} lg = {10}>{data.sequence && data.sequence || ''}</Col>

                        <Col span = {2} xs = {24} sm = {8} lg = {2}>事件账户:</Col>
                        <Col span = {10} xs = {24} sm = {16} lg = {10}>{data.eventAccount && data.eventAccount.value && data.eventAccount.value || ''}</Col>

                        <Col span = {2} xs = {24} sm = {8} lg = {2}>事件名称:</Col>
                        <Col span = {10} xs = {24} sm = {16} lg = {10}>{data.name && data.name || ''}</Col>

                        <Col span = {2} xs = {24} sm = {8} lg = {2}>交易哈希:</Col>
                        <Col span = {10} xs = {24} sm = {16} lg = {10}>{data.transactionSource && data.transactionSource.value && data.transactionSource.value || ''}</Col>

                        <Col span = {2} xs = {24} sm = {8} lg = {2}>区块高度:</Col>
                        <Col span = {10} xs = {24} sm = {16} lg = {10}>{data.blockHeight && data.blockHeight || 0}</Col>

                        <Col span = {2} xs = {24} sm = {8} lg = {2}>合约地址:</Col>
                        <Col span = {10} xs = {24} sm = {16} lg = {10}>{data.contractSource && data.contractSource || ''}</Col>
                    </Row>
                </div>
            </div>
        )
    }

    eventColumns = () => {
        return [{
            dataIndex: 'event',
            title: '事件名称',
            render: (text, record, index) => (
                <span>{record || ''}</span>
            )
        }, {
            dataIndex: 'operate',
            title: '操作',
            render: (text, record, index) => (
                <a onClick = {() => this.onShow(record, index)}>详情</a>
            )
        }]
    }

      // 子表展开收缩函数
    handleExpandShow = (expanded, record) => {
        if (expanded) {
            let testArr = [];
            testArr.push(record);
            this.expandedRowKeys = [...testArr];
        } else {
            this.expandedRowKeys = [...arrayRemove(this.expandedRowKeys, record)]
        }
    }

    handleExpandShowName = (expanded, record) => {
        if (expanded) {
            let testArr = [];
            testArr.push(record.index);
            this.expandedRowKeysName = [...testArr];
            console.log(record, this.expandedRowKeysName)
        } else {
            this.expandedRowKeysName = [...arrayRemove(this.expandedRowKeysName, record.index)]
        }
    }

    nameColumns = () => {

        return [{
            dataIndex: 'sequence',
            title: '事件序列',
        }, 
        {
            dataIndex: 'transactionSource.value',
            title: '交易哈希',
        }, 
        {
            title: '合约地址',
            dataIndex: 'contractSource',
        }, 
        {
            title: '区块高度',
            dataIndex: 'blockHeight',
        }, 
        // {
        //     title: '事件账户',
        //     dataIndex: 'eventAccount.value'
        // }, 
        // {
        //     title: '事件名称',
        //     dataIndex: 'name',
        // }
    ]
    }

    eventContent = record => {
        return (
            <div className = {styles.info}>
                <Row className = {styles.gl}>
                    <Col span = {4} xs = {24} sm = {8} lg = {4}>事件账户:</Col>
                    <Col span = {20} xs = {24} sm = {16} lg = {20}>{record.eventAccount && record.eventAccount.value && record.eventAccount.value || ''}</Col>

                    {/* <Col span = {4} xs = {24} sm = {8} lg = {4}>事件名称:</Col>
                    <Col span = {20} xs = {24} sm = {16} lg = {20}>{record.name && record.name || ''}</Col> */}

                    {/* <Col span = {4} xs = {24} sm = {8} lg = {4}>内容:</Col>
                    <Col span = {20} xs = {24} sm = {16} lg = {20}>
                        <ul>
                            <li>nil: {record.content && record.content.nil && record.content.nil || false}</li>
                            <li>bytes: {record.content && record.content.bytes && record.content.bytes.value && record.content.bytes.value || false}</li>
                            <li>type: {record.content && record.content.type && record.content.type || ''}</li>
                            <li>value: {record.content && record.content.value && record.content.value || ''}</li>
                        </ul>   
                    </Col> */}

                    {/* <Col span = {4} xs = {24} sm = {8} lg = {4}>nil:</Col>
                    <Col span = {8} xs = {24} sm = {16} lg = {8}>{record.content && record.content.nil && record.content.nil || false}</Col> */}

                    <Col span = {4} xs = {24} sm = {8} lg = {4}>事件名称:</Col>
                    <Col span = {8} xs = {24} sm = {16} lg = {8}>{record.name && record.name || ''}</Col>


                    <Col span = {4} xs = {24} sm = {8} lg = {4}>字节:</Col>
                    <Col span = {8} xs = {24} sm = {16} lg = {8}>{record.content && record.content.bytes && record.content.bytes.value && record.content.bytes.value || false}</Col>
                    <Col span = {4} xs = {24} sm = {8} lg = {4}>类型:</Col>
                    <Col span = {8} xs = {24} sm = {16} lg = {8}>{record.content && record.content.type && record.content.type || ''}</Col>

                    <Col span = {4} xs = {24} sm = {8} lg = {4}>值:</Col>
                    <Col span = {8} xs = {24} sm = {16} lg = {8}>{record.content && record.content.value && record.content.value || ''}</Col>
                </Row>
            </div>
        )
    }

    render() {
        const { data, store: { event } } = this.props;
        return (
            <div>
                <h3>账户详情</h3>
                <div className = {styles.info}>
                    <Row className = {styles.gl}>
                        <Col span = {2} xs = {24} sm = {8} lg = {2}>事件账户地址:</Col>
                        <Col span = {10} xs = {24} sm = {16} lg = {10}>{data.address && data.address.value && data.address.value || ''}</Col>

                        <Col span = {2} xs = {24} sm = {8} lg = {2}>事件账户公钥:</Col>
                        <Col span = {10} xs = {24} sm = {16} lg = {10}>{data.pubKey && data.pubKey.value && data.pubKey.value || ''}</Col>
                    </Row>

                    <h3>事件列表</h3>
                    <Table
                        rowKey = {record => record}
                        dataSource = {event.dataEvent}
                        columns = {this.eventColumns()}
                        expandedRowKeys = {this.expandedRowKeys}
                        expandedRowRender = {this.expandedRowRender}
                        onExpand = {(expanded, record) => this.handleExpandShow(expanded, record)}
                        onRow = {record => ({
                            onMouseOver: event => this.onShowLatest(event, record)
                        }
                        )}
                        pagination = {{
                            current: event.eventCurrent,
                            pageSize: this.pageSize,
                            total: event.eventTotal,
                            onChange: this.onPageChange,
                            showQuickJumper: true
                        }}
                    />
                </div>

                <Drawer
                    title = "历史记录"
                    maskClosable = {false}
                    onClose = {this.onClose}
                    visible = {this.visible}
                    width = {1200}
                >
                    <Table
                        rowKey = {record => record.index}
                        dataSource = {event.dataName}
                        columns = {this.nameColumns()}
                        pagination = {{
                            current: event.nameCurrent,
                            pageSize: this.pageEvent,
                            total: event.nameTotal,
                            onChange: this.onPageChangeName,
                            showQuickJumper: true
                        }}
                        onExpand = {(expanded, record) => this.handleExpandShowName(expanded, record)}
                        expandedRowKeys = {this.expandedRowKeysName}
                        expandedRowRender = {record => this.eventContent(record)}
                    />
                </Drawer>
            </div>
        )
    }
}
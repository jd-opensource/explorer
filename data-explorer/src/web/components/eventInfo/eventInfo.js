import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import styles from './eventInfo.m.scss';

import { Badge, Col, Drawer, Row, Table } from 'antd';


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

    
    onPageChange = (page, pageSize) => {
        const { store: { event } } = this.props;
        event.setEvent(page);
        // this.Search();
    }

    onPageChangeName = (page, pageSize) => {
        const { store: { event } } = this.props;
        event.setName(page);
    }

    onShow = (record, index) => {
        const { data, store: { common, event } } = this.props;
        let address = data.address && data.address.value && data.address.value || '';
        let param = {
            fromSequence: (event.nameCurrent - 1) * this.pageEvent,
            count: this.pageEvent,
        }

        Promise.all([
            event.getEventName(common.getDefaultLedger(), address, record, param)
        ]).then(() => {
            this.visible = true;
        })
    }

    onClose = () => {
        this.visible = false;
    }

    onShowLatest = (e, record) => {
        console.log(e)
        const { data, store: { common, event } } = this.props;
        let address = data.address && data.address.value && data.address.value || '';

        
        Promise.all([
            event.getEventLatest(common.getDefaultLedger(), address, record)
        ]).then(() => {
            console.log(event.dataLatest)
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

    nameColumns = () => {

        return [{
            dataIndex: 'sequence',
            title: '事件序列',
        }, {
            dataIndex: 'transactionSource.value',
            title: '交易哈希',
        }, {
            title: '合约地址',
            dataIndex: 'contractSource',
        }, {
            title: '区块高度',
            dataIndex: 'blockHeight',
        }, {
            title: '事件账户',
            dataIndex: 'eventAccount.value'
        }, {
            title: '事件名称',
            dataIndex: 'name',
        }]
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
                        dataSource = {event.dataEvent}
                        columns = {this.eventColumns()}
                        // onExpand = {this.onShowLatest}
                        expandedRowRender = {this.expandedRowRender}
                        onRow = {record => ({
                                // onMouse: event => this.onShowLatest(event)
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
                    title = "事件详情"
                    maskClosable = {false}
                    onClose = {this.onClose}
                    visible = {this.visible}
                    width = {1200}
                >
                    <Table
                        dataSource = {event.dataName}
                        columns = {this.nameColumns()}
                        pagination = {{
                            current: event.nameCurrent,
                            pageSize: this.pageEvent,
                            total: event.nameTotal,
                            onChange: this.onPageChangeName,
                            showQuickJumper: true
                        }}
                    />
                </Drawer>
            </div>
        )
    }
}
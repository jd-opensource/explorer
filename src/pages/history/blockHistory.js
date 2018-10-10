import React, { Component } from 'react';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import styles from './history.m.less';
import tmpls from './history.t.html';
import HistoryStore from '../../stores/HistoryStore';

// 区块历史首页
@registerTmpl('BlockHistory')
@inject('store')
@observer
export default class BlockHistory extends Component {
    render() {
        return tmpls.blockHistory(this.state, this.props, this, {
            styles
        });
    }
}
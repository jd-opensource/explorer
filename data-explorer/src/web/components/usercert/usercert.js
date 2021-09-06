import React, {Component} from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import {registerTmpl} from 'nornj-react';
import tmpls from './usercert.t.html';
import styles from './usercert.m.scss';

//页面容器组件
@registerTmpl('UserCert')
@inject('store')
@observer
export default class UserCert extends Component {

    @observable usercert = '-';

    componentDidMount() {
        const {store: {user}, address} = this.props;
        let leader = this.props.store.common.getDefaultLedger();
        Promise.all([
            user.getUserInfo(leader, address)
        ]).then((data) => {
            if (data && data[0].certificate) {
                if (data[0].state == "NORMAL") {
                    this.usercert = data[0].certificate;
                } else {
                    this.usercert = data[0].state;
                }
            }
        });
    }

    render() {
        const {data, visible} = this.props;
        return tmpls.container(this.props, this, {
            styles,
        });
    }
}
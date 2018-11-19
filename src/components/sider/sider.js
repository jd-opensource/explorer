import { Component, PropTypes } from 'react';
import { toJS, transaction, observable } from 'mobx';
import { observer } from 'mobx-react';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import 'flarej/lib/components/antd/icon';
import 'flarej/lib/components/antd/menu';
import styles from './sider.m.less';
import template from './sider.t.html';

@registerTmpl('Sider')
@observer
export default class Sider extends Component {
  @observable href = 'overview.html';
  componentDidMount = () => {
    let arr = window.location.href.split('/');
    let len = arr.length;
    this.href = arr[`${len - 1}`];
    console.log(this.href);
  }
  render() {
    return template(this.state, this, { styles });
  }
}
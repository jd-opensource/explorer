import { Component, PropTypes } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import 'flarej/lib/components/antd/menu';
import 'flarej/lib/components/antd/select';
import styles from './header.m.less';
import template from './header.t.html';

@registerTmpl('fjb-Header')
@observer
export default class Header extends Component {
  static defaultProps = {
    no: '1'
  };

  @autobind
  onSelect({ item, key, selectedKeys }) {
    location.href = '/pages/page' + key+'.html';
  }

  render() {
    return template(this.props, this, { styles });
  }
}
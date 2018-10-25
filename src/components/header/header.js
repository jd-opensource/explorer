import React, { Component, PropTypes } from 'react';
import { observable } from 'mobx';
import { fetchData } from 'flarej/lib/utils/fetchConfig';
import { observer } from 'mobx-react';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import 'flarej/lib/components/antd/menu';
import 'flarej/lib/components/antd/select';
import { Select } from 'flarej/lib/components/antd/select';
import styles from './header.m.less';
import template from './header.t.html';
const Option = Select.Option;

@registerTmpl('fjb-Header')
@observer
export default class Header extends Component {
  static defaultProps = {
    no: '1'
  };
  @observable optionData = [];
  @observable defaultValue = '';

  componentDidMount = () => {
    Promise.all([
      fetchData(`${G_WEB_DOMAIN}/ledgers/hash/all`,
        this.setOptionData,
        '', { method: 'get',}
      ).catch(error => {
        console.log(error);
      })
    ]).then(

    ).catch(

    );
  }

  setOptionData = (result) => {
    let response = result && result.data ? result.data : [];
    this.optionData = [...response];
    this.defaultValue = this.optionData[0].value ? this.optionData[0].value : ''; 
    localStorage.setItem('defaultValue', this.defaultValue);
    console.log(localStorage);
  }

  selectItem = () => {
    return (
      <Select className = {`${styles.value}`} onChange = {this.handleSelectChange} placeholder = "请选择账本" value = {`${this.defaultValue}`}>
        {
          this.optionData && this.optionData.map((item, key) => {
            return (
              <Option value = {`${key}`}>{item.value}</Option>
            );
          })
        }
      </Select>
    );
  }

  handleSelectChange = (e) => {
    this.defaultValue = this.optionData[e].value ? this.optionData[e].value : ''; 
    localStorage.setItem('defaultValue', this.defaultValue);
    console.log(localStorage);
  }

  getChildContext() {
    return {color: 'red'};
  }

  @autobind
  onSelect({ item, key, selectedKeys }) {
    location.href = '/pages/page' + key+'.html';
  }

  render() {
    return template(this.props, this, { styles });
  }
}
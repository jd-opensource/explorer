import { Component } from 'react';
import { capitalize } from './src/utils/util';
import Message from 'flarej/lib/components/antd/message';
import notification from 'flarej/lib/components/antd/notification';
class Bundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    };
  }

  componentWillMount() {
    // 销毁全局的消息提示
    Message.destroy();
    notification.destroy();
    // 初始化全局数据
    const { store:{common,header} } = this.props;
    this.props.store.setLoading(true);
    // 设置菜单高亮
    if (common&&common.ledgers.length==0) {
      Promise.all([
        common.getLedgersInfo("")
      ]).then(() => {
        let ledgerDafault=localStorage.getItem("defaultledger"),
          ledgers=common.ledgers;
        if (ledgerDafault) {
          for (let i = 0; i < ledgers.length; i++) {
            if(ledgers[i].value==ledgerDafault){
              common.setDefaultLedger(ledgerDafault);
              this.load(this.props);
              return false;
            }
          }
          if (ledgers.length>0) {
            common.setDefaultLedger(ledgers[0].value);
            localStorage.setItem('defaultledger',ledgers[0].value);
          }
          else{
            // 没有账本时的操作
            localStorage.removeItem("defaultledger");
          }
          this.load(this.props);
        }
        else{
          if (ledgers.length>0) {
            common.setDefaultLedger(ledgers[0].value);
            localStorage.setItem('defaultledger',ledgers[0].value);
          }
          else{
            // 没有账本时的操作
            localStorage.removeItem("defaultledger");
          }
          this.load(this.props);
        }
      });
    }
    else{
      this.load(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      });
    });
  }
  componentWillUnmount(){
    const { store } = this.props;
    store.setLoading(true);
  }
  render() {
    const { store } = this.props;
    store.setLoading(false);
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

export default Bundle;
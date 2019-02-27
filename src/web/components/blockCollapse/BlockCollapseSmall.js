import React, { Component } from 'react';
import { Collapse, Icon } from 'antd';
import styles from './index.m.scss'

const Panel = Collapse.Panel;
const customPanelStyle = {
  width: '90%',
}
export default class  BlockCollapseSmall extends Component {
 
    componentDidMount() {
  
    }
  
    componentWillUnmount() {
      
    }
    
    render() {
      // const { activeData = [] } = this.state;
      const { title,children} = this.props;
      return (
        <Collapse bordered={false} expandIcon={({ isActive }) => <Icon type="double-right" rotate={isActive ? 90 : -90} />}>
        <Panel header={<div style={customPanelStyle}>{title}</div>} key="1" className='blockCollapse blockCollapsesmall'>
            <div>
              {children}
            </div>
          
        </Panel>
    </Collapse>
      );
    }
  }
  

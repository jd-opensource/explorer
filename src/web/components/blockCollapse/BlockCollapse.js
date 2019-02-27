import React, { Component } from 'react';
import { Collapse, Icon } from 'antd';


const Panel = Collapse.Panel;

export default class BlockCollapse extends Component {
 
  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  render() {
    // const { activeData = [] } = this.state;
    const { title,children} = this.props;
    return (
      <Collapse bordered={false} expandIcon={({ isActive }) => <Icon type="double-right" rotate={isActive ? 90 : -90} />}>
        <Panel header={title} key="1" className=' blockCollapse '>
          {children}
        </Panel>
      </Collapse>
    );
  }
}
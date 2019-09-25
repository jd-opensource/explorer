import React, { Component } from 'react';
import styles from './index.m.scss';
export default class BlockCollapsePanel extends Component {
 
  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  render() {
    // const { activeData = [] } = this.state;
    const { title,children} = this.props;
    return (
      <div className="blockCollapsePanel">
        <div className="header"> 
          {title} 
        </div>
        <div className="body">
          {children}
        </div>
        
      </div>
    );
  }
}
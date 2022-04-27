import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import { Col, Drawer, Row, Tabs } from 'antd';
import {tranBase58,formatBase64Data,transAuth} from '../../../utils/util';
import { BlockCollapse,BlockCollapseSmall,BlockCollapsePanel } from '../../components/blockCollapse';
import styles from './transactionInfo.m.scss';
import tmpls from './transactionInfo.t.html';
import moment from 'moment';

const { TabPane } = Tabs;

//页面容器组件
@registerTmpl('TransactionInfo')
@inject('store')
@observer
export default class TransactionInfo extends Component {
  // 关闭
  @autobind
  onCloseblockDetails(){
    return this.props.onClose(!this.props.visible);
  }

  transform = arr => {
    return arr.map(item => transAuth(item)).join(',')
  }

  stateItem = state => {
    let span = '';

    switch(state) {
      case 'READY':
      case 'DECONSENSUS':
        span = '共识未启动';
      break;
      case 'CONSENSUS':
        span = '共识已启动';
      break;
      default:
        span = '共识未启动';
      break;
    }

    return span;
  }

  partItem = state => {
    let span = '';

    switch(state) {
      case 'READY':
        span = '注册参与方';
      break;
      case 'CONSENSUS':
        span = '激活参与方';
      break;
      case 'DECONSENSUS':
        span = '禁用参与方';
      break;
      default:
        span = '注册参与方';
      break;
    }

    return span;
  }

  argsToList(data){
    let json=[];
    if(data&&data.values&&data.values.length>0){
      for (let i = 0; i < data.values.length; i++) {
        json.push({
          type:data.values[i].type,
          value:formatBase64Data(data.values[i].type,data.values[i].bytes),
        });

      }
      var str = JSON.stringify(json);
      return str;
    }
  }

  modelItem = (data) => {
    return [

      <Tabs
        defaultActiveKey = "1"
        style = {{marginTop: '10px'}}
        tabBarStyle = {{
          color: '#5A77D3'
        }}
      >
        {data.request && JSON.stringify(data.request) != "{}" && (
          <TabPane tab = "请求" key = "1">
            {this.resItem(data.request)}
          </TabPane>
        )}
        {
          data.result && JSON.stringify(data.result) != "{}" && (
            <TabPane tab = "响应" key = "2">
              {this.reqItem(data.result)}
            </TabPane>
          )
        }
      </Tabs>
    ]
  }

  resItem = data => {
    return (
      <div>
        {
          data.endpointSignatures && data.endpointSignatures.length != 0 && (
            <BlockCollapse title = "终端签名列表">
              {
                data.endpointSignatures.map((item, key) => (
                  <BlockCollapseSmall title = {`公钥: ${item.pubKey && item.pubKey && item.pubKey || ''}`}>
                    签名: {item.digest && item.digest && item.digest || ''}
                  </BlockCollapseSmall>
                ))
              }
            </BlockCollapse>
          )
        }
        {
          data.nodeSignatures && data.nodeSignatures.length != 0 && (
            <BlockCollapse title = "节点签名列表">
              {
                data.nodeSignatures.map((item, key) => (
                  <BlockCollapseSmall title = {`公钥: ${item.pubKey && item.pubKey && item.pubKey || ''}`}>
                    签名: {item.digest && item.digest && item.digest || ''}
                  </BlockCollapseSmall>
                ))
              }
            </BlockCollapse>
          )
        }
        {
          data.transactionContent && JSON.stringify(data.transactionContent) != "{}" && this.transItem(data.transactionContent)
        }
      </div>
    )
  }

  transItem = content => {
    return (
      <div>
        <BlockCollapse title = "交易内容">
          {
            content.timestamp && (
              <table style = {{lineHeight: '41px'}}>
                <tr>
                  <td>交易时间: </td>
                  <td>{content.timestamp && moment(content.timestamp).format('YYYY-MM-DD HH:mm:ss') || ''}</td>
                </tr>
              </table>
            )
          }
          {
            content.operations && content.operations.length != 0 && content.operations.map((item, key) => {
              item['_type'] = item['@type']
              return this.operaItem(item)
            })
          }
        </BlockCollapse>
      </div>
    )
  }

  derivedTransItem = derivedOperations => {
    return (
        <div>
          <BlockCollapse title = "衍生交易">
            {
              derivedOperations && derivedOperations.length != 0 && derivedOperations.map((item, key) => {
                item['_type'] = item['@type']
                return this.operaItem(item)
              })
            }
          </BlockCollapse>
        </div>
    )
  }

  operaItem = opt => {
    let {
      _type,
      accountAddress,
      accountID,
      args,
      chainCode,
      lang,
      contractAddress,
      version,
      contractID,
      event,
      eventAccountID,
      eventAddress,
      events,
      initSetting,
      participantID,
      participantName,
      roles,
      state,
      userID,
      userAddress,
      certificate,
      certificatesAdd,
      certificatesUpdate,
      certificatesRemove,
      userRolesAuthorizations,
      writeSet,
      accountType,
      address,
      mode,
      role,
      properties,
      provider,
      algorithm,
      reconfigType,
    } = opt;
    return [
      _type == "com.jd.blockchain.ledger.LedgerInitOperation" && (
        <BlockCollapsePanel title = "初始化配置">
          <table style = {{lineHeight: '41px'}}>
            <tr>
              <td>共识供应方:</td>
              <td>{initSetting.consensusProvider && initSetting.consensusProvider || ''}</td>
            </tr>
            {/* <tr>
              <td>共识配置:</td>
              <td>{initSetting.consensusSettings && initSetting.consensusSettings.value && initSetting.consensusSettings.value || ''}</td>
            </tr> */}
            <tr>
              <td>账户种子:</td>
              <td>{initSetting.ledgerSeed || ''}</td>
            </tr>
            <tr>
              <td>账户结构版本:</td>
              <td>{initSetting.ledgerStructureVersion || ''}</td>
            </tr>
            <tr>
              <td>账本数据结构:</td>
              <td>{initSetting.ledgerDataStructure || ''}</td>
            </tr>
            <tr>
              <td>身份模式:</td>
              <td>{initSetting.identityMode || ''}</td>
            </tr>
            <tr>
              <td>创建时间:</td>
              <td>{initSetting.createdTime && moment(initSetting.createdTime).format('YYYY-MM-DD HH:mm:ss') || ''}</td>
            </tr>
          </table>
          <BlockCollapse title = "共识参与方">
            {
              initSetting.consensusParticipants && initSetting.consensusParticipants.length != 0 && initSetting.consensusParticipants.map((item, key) => (
                <BlockCollapseSmall title = {`参与方名称: ${item.name || ''}`}>
                  <table style = {{lineHeight: '41px'}}>

                    <tr>
                      <td>参与方地址:</td>
                      <td>{item.address || ''}</td>
                    </tr>
                    <tr>
                      <td>参与方公钥算法:</td>
                      <td>{item.pubKey && tranBase58(item.pubKey) || ''}</td>
                    </tr>
                    <tr>
                      <td>参与方公钥:</td>
                      <td>{item.pubKey || ''}</td>
                    </tr>
                    <tr>
                      <td>节点状态:</td>
                      <td>{item.participantNodeState || ''}</td>
                    </tr>
                  </table>
                </BlockCollapseSmall>
              ))
            }
          </BlockCollapse>
          {initSetting.cryptoSetting && JSON.stringify(initSetting.cryptoSetting) && (
            <BlockCollapse title = "Crypto加密配置">
              <div className = {styles.option}>
                自动校验: {initSetting.cryptoSetting.autoVerifyHash && '开启' || '关闭'}
              </div>
              {
                initSetting.cryptoSetting.hashAlgorithm && (
                  <div className = {styles.option}>
                    哈希算法: {initSetting.cryptoSetting.hashAlgorithm && initSetting.cryptoSetting.hashAlgorithm || ''}
                  </div>
                )
              }
              <BlockCollapseSmall title = "算法供应方">
                {
                  initSetting.cryptoSetting.supportedProviders && initSetting.cryptoSetting.supportedProviders.length != 0 && initSetting.cryptoSetting.supportedProviders.map((item, key) => (
                    <BlockCollapse title = {`名称: ${item.name || ''}`}>

                        {
                          item.algorithms && item.algorithms.length != 0 && item.algorithms.map((it, ke) => it && (
                            <BlockCollapseSmall title = {`算法名称: ${it.name || ''}`}>
                              <table style = {{lineHeight: '41px'}}>
                                <tr>
                                  <td>算法编号:</td>
                                  <td>{it.code && it.code || ''}</td>
                                </tr>
                              </table>
                            </BlockCollapseSmall>

                          ) || null)
                        }
                    </BlockCollapse>
                  ))
                }
              </BlockCollapseSmall>
            </BlockCollapse>
          )}
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.DataAccountKVSetOperation" && (
        <BlockCollapsePanel title = "数据写入">
          <h4 style = {{
            fontSize: '14px', color: '#333333',
            lineHeight: '14px', fontWeight: 'bold',
            margin: '16px 0'}}>写入</h4>

          <Row style = {{margin: '16px 0'}}>
            <Col span = {4}>账户地址:</Col>
            <Col span = {20}>{accountAddress || ''}</Col>
          </Row>

          {
            writeSet.map((item, key) => (
              <BlockCollapseSmall title = {`键: ${item.key || ''}`}>
                值:{formatBase64Data(item.value.type,item.value.bytes)}<br/>
                预期版本:{item.expectedVersion}<br/>
                类型:{item.value.type}
              </BlockCollapseSmall>
            ))
          }
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.ContractCodeDeployOperation" && (
        <BlockCollapsePanel title = "合约发布">
          <table style = {{lineHeight: '41px'}}>
            <tr>
              <td>合约地址:</td>
              <td>{contractID.address || ''}</td>
            </tr>
            <tr>
              <td>合约公钥算法:</td>
              <td>{tranBase58(contractID.pubKey || '')}</td>
            </tr>
            <tr>
              <td>合约公钥:</td>
              <td>{contractID.pubKey || ''}</td>
            </tr>
            <tr>
              <td>合约语言:</td>
              <td>{lang || 'Java'}</td>
            </tr>
            {chainCode && (<tr>
              <td>合约内容:</td>
              <td>{chainCode || ''}</td>
            </tr>) || null}
          </table>
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.ContractEventSendOperation" && (
        <BlockCollapsePanel title = "合约事件操作">
          <table style = {{lineHeight: '41px'}}>
            {args && (<tr>
              <td>合约参数:</td>
              <td>{this.argsToList(args)}</td>
            </tr>) || null}
            <tr>
              <td>合约地址:</td>
              <td>{contractAddress || ''}</td>
            </tr>
            {event && (<tr>
              <td>合约事件:</td>
              <td>{event}</td>
            </tr>) || null}
            <tr>
              <td>合约版本:</td>
              <td>{version}</td>
            </tr>
          </table>
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.ContractStateUpdateOperation" && (
          <BlockCollapsePanel title = "更新合约状态">
            <table style = {{lineHeight: '41px'}}>
              <tr>
                <td>合约地址:</td>
                <td>{contractAddress}</td>
              </tr>
              <tr>
                <td>合约状态:</td>
                <td>{state}</td>
              </tr>
            </table>
          </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.DataAccountRegisterOperation" && (
        <BlockCollapsePanel title = "注册数据账户">
          <table style = {{lineHeight: '41px'}}>
            <tr>
              <td>数据账户地址:</td>
              <td>{accountID.address || ''}</td>
            </tr>
            <tr>
              <td>账户公钥算法:</td>
              <td>{tranBase58(accountID.pubKey && accountID.pubKey && accountID.pubKey || '')}</td>
            </tr>
            <tr>
              <td>账户公钥:</td>
              <td>{accountID.pubKey && accountID.pubKey && accountID.pubKey || ''}</td>
            </tr>
          </table>
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.UserRegisterOperation" && (
        <BlockCollapsePanel title = "注册用户">
          <table style = {{lineHeight: '41px'}}>
            <tr>
              <td>用户地址:</td>
              <td>{userID.address}</td>
            </tr>
            <tr>
              <td>用户公钥算法:</td>
              <td>{tranBase58(userID.pubKey && userID.pubKey && userID.pubKey || '')}</td>
            </tr>
            <tr>
              <td>用户公钥数据:</td>
              <td>{userID.pubKey && userID.pubKey && userID.pubKey || ''}</td>
            </tr>
            {
              certificate && (
                  <tr>
                    <td>用户证书数据:</td>
                    <td>{certificate || ''}</td>
                  </tr>
              )
            }
          </table>
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.UserStateUpdateOperation" && (
          <BlockCollapsePanel title = "更新用户（证书）状态">
            <table style = {{lineHeight: '41px'}}>
              <tr>
                <td>用户地址:</td>
                <td>{userAddress}</td>
              </tr>
              <tr>
                <td>用户状态:</td>
                <td>{state}</td>
              </tr>
            </table>
          </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.UserCAUpdateOperation" &&  (
          <BlockCollapsePanel title = "更新用户证书">
            <table style = {{lineHeight: '41px'}}>
              <tr>
                <td>用户地址:</td>
                <td>{userAddress}</td>
              </tr>
              <tr>
                <td>用户证书:</td>
                <td>{certificate}</td>
              </tr>
            </table>
          </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.RootCAUpdateOperation" &&  (
          <BlockCollapsePanel title = "更新账本根证书">
            <table style = {{lineHeight: '41px'}}>
              {certificatesAdd.map(item => (
                  <tr>
                    <td>
                      添加根证书：
                    </td>
                    <td>
                      {item}
                    </td>
                </tr>
              ))}
              {certificatesUpdate.map(item => (
                  <tr>
                    <td>
                      更新根证书：
                    </td>
                    <td>
                      {item}
                    </td>
                  </tr>
              ))}
              {certificatesRemove.map(item => (
                  <tr>
                    <td>
                      删除根证书：
                    </td>
                    <td>
                      {item}
                    </td>
                  </tr>
              ))}
            </table>
          </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.ParticipantRegisterOperation" && (
        <BlockCollapsePanel title = "注册参与方">
          <table style = {{lineHeight: '41px'}}>
            {
              participantName && (
                <tr>
                  <td>参与方名称:</td>
                  <td>{participantName}</td>
                </tr>
              )
            }
            <tr>
              <td>参与方地址:</td>
              <td>{participantID.address || ''}</td>
            </tr>
            <tr>
              <td>参与方公钥算法:</td>
              <td>{participantID.pubKey && tranBase58(participantID.pubKey) || ''}</td>
            </tr>
            <tr>
              <td>参与方公钥:</td>
              <td>{participantID.pubKey || ''}</td>
            </tr>
            {
              certificate && (
                  <tr>
                    <td>参与方证书:</td>
                    <td>{certificate}</td>
                  </tr>
              )
            }
          </table>
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.ParticipantStateUpdateOperation" && (
        <BlockCollapsePanel title = {this.partItem(state)}>
          <table style = {{lineHeight: '41px'}}>
            {
              participantName && (
                <tr>
                  <td>参与方名称:</td>
                  <td>{participantName}</td>
                </tr>
              )
            }
            <tr>
              <td>参与方地址:</td>
              <td>{participantID.address || ''}</td>
            </tr>
            <tr>
              <td>参与方公钥算法:</td>
              <td>{participantID.pubKey && tranBase58(participantID.pubKey) || ''}</td>
            </tr>
            <tr>
              <td>参与方公钥:</td>
              <td>{participantID.pubKey || ''}</td>
            </tr>
            {
              state && (
                <tr>
                  <td>状态:</td>
                  <td>{this.stateItem(state)}</td>
                </tr>
              )
            }
          </table>
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.EventAccountRegisterOperation" && (
        <BlockCollapsePanel title="注册事件账户">
          <table style = {{lineHeight: '41px', width: '100%'}}>
            <tr>
              <td>事件账户地址:</td>
              <td>{eventAccountID.address || ''}</td>
            </tr>
            <tr>
              <td>事件账户公钥算法:</td>
              <td>{eventAccountID.pubKey && eventAccountID.pubKey && tranBase58(eventAccountID.pubKey) || ''}</td>
            </tr>
          </table>
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.EventPublishOperation" && (
        <BlockCollapsePanel title = "发布事件">
          <table style = {{lineHeight: '41px', width: '100%'}}>
            <tr>
              <td>事件地址:</td>
              <td>{eventAddress || ''}</td>
            </tr>
          </table>
          {
            events.length != 0 && events.map((item, key) => (
              <BlockCollapse title = {`事件: ${item.name}`}>
                <table style = {{lineHeight: '41px', width: '100%'}}>
                  <tr>
                    <td>事件序列:</td>
                    <td>{item.sequence || 0}</td>
                  </tr>
                  {item.content && [
                    <tr>
                      <td>类型:</td>
                      <td>{item.content.type || ''}</td>
                    </tr>,
                    <tr>
                      <td>值:</td>
                      {/* formatBase64Data(item.value.type,item.value.bytes, item.value.value) */}
                      <td>{formatBase64Data(item.content && item.content.type || '',
                          item.content && item.content.bytes || '')}</td>
                    </tr>
                  ] || null}
                </table>
              </BlockCollapse>
            ))
          }
        </BlockCollapsePanel>
      )  || null,
      _type == "com.jd.blockchain.ledger.AccountPermissionSetOperation" && (
          <BlockCollapsePanel title = "账户权限配置">
            <table style = {{lineHeight: '41px', width: '100%'}}>
              <tr>
                <td>账户类型:</td>
                <td>{accountType || ''}</td>
              </tr>
              <tr>
                <td>账户地址:</td>
                <td>{address || ''}</td>
              </tr>
              {role != '' && (<tr>
                <td>所属角色:</td>
                <td>{role}</td>
              </tr>) || null}
              {mode > -1 && (<tr>
                <td>权限值:</td>
                <td>{mode}</td>
              </tr>) || null}
            </table>
          </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.RolesConfigureOperation" && (
        <BlockCollapsePanel title="角色配置">
          {
            roles.map((item, key) => (
              <BlockCollapse title = {`角色:${item.roleName}`}>
                <BlockCollapseSmall title = "账本操作权限">
                  <table style = {{width: '100%'}}>
                    <tr>
                      <td>可以执行的操作:</td>
                      <td>{item.enableLedgerPermissions && this.transform(item.enableLedgerPermissions) || ''}</td>
                    </tr>
                    {
                      item.disableLedgerPermissions && item.disableLedgerPermissions.length != 0 && (
                        <tr>
                          <td>不可执行的操作:</td>
                          <td>{item.disableLedgerPermissions && this.transform(item.disableLedgerPermissions) || ''}</td>
                        </tr>
                      )
                    }
                  </table>
                </BlockCollapseSmall>
                <BlockCollapseSmall title = "交易操作权限">
                  <table style = {{width: "100%"}} >
                    <tr>
                      <td>可以执行的操作:</td>
                      <td>{item.enableTransactionPermissions && this.transform(item.enableTransactionPermissions) || ''}</td>
                    </tr>
                    {
                      item.disableTransactionPermissions && item.disableTransactionPermissions.length != 0 && (
                        <tr>
                          <td>不可执行的操作:</td>
                          <td>{item.disableTransactionPermissions && this.transform(item.disableTransactionPermissions) || ''}</td>
                        </tr>
                      )
                    }
                  </table>
                </BlockCollapseSmall>
              </BlockCollapse>
            ))
          }
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.UserAuthorizeOperation" && (
        <BlockCollapsePanel title="用户权限配置">
          {userRolesAuthorizations.map((item, key) => (
            <table style = {{width: '100%', lineHeight: '41px'}}>
              <tr>
                <td>用户地址:</td>
                <td>{item.userAddresses[0] || ''}</td>
              </tr>
              <tr>
                <td>用户授权的角色清单:</td>
                <td>{item.authorizedRoles && item.authorizedRoles.join(',') || 'DEFAULT'}</td>
              </tr>
              <tr>
                <td>剔除的角色清单:</td>
                <td>{item.unauthorizedRoles && item.unauthorizedRoles.join(',') || ''}</td>
              </tr>
              <tr>
                <td>要更新的多角色权限策略:</td>
                <td>{item.policy && item.policy || ''}</td>
              </tr>
            </table>
          ))}
        </BlockCollapsePanel>
      ) || null,
      _type == "com.jd.blockchain.ledger.ConsensusSettingsUpdateOperation" && (
          <BlockCollapsePanel title="共识更新">
            <table style = {{width: '100%', lineHeight: '41px'}}>
              {provider != '' && (<tr>
                <td>共识方式:</td>
                <td>{provider}</td>
              </tr>) || null}
              <tr>
                <td colspan="2">
                  <table style = {{width: '100%', lineHeight: '41px'}}>
                        <tr>
                            <th colspan="2">共识配置:</th>
                        </tr>
                        {properties.map((item, key) => (
                          <tr>
                            <td style = {{width: '80%' }}>{item.name || ''}:</td>
                            <td style = {{width: '20%' }}>{item.value || ''}</td>
                          </tr>
                          ))}
                  </table>
                </td>
              </tr>
            </table>

          </BlockCollapsePanel>
      )|| null,
         _type == "com.jd.blockchain.ledger.HashAlgorithmUpdateOperation" && (
             <BlockCollapsePanel title="Hash算法切换">
               <table style = {{width: '100%', lineHeight: '41px'}}>
                 <tr>
                   <td>变更Hash算法:</td>
                   <td>{algorithm || ''}</td>
                 </tr>
               </table>

             </BlockCollapsePanel>
         )|| null,
           _type == "com.jd.blockchain.ledger.ConsensusReconfigOperation" && (
               <BlockCollapsePanel title="Reconfig操作">
                 <table style = {{width: '100%', lineHeight: '41px'}}>
                   <tr>
                     <td>操作类型:</td>
                     <td>{reconfigType || ''}</td>
                   </tr>
                 </table>

               </BlockCollapsePanel>
           )
    ]
  }

  reqItem = data => {
    let { dataSnapshot, executionState, blockHeight, transactionHash, derivedOperations } = data

    return (
      <div>
        <div className = {styles.option}>
          区块高度: {blockHeight && blockHeight || 0}
        </div>
        {transactionHash && (
          <div className = {styles.option}>
            交易哈希: {transactionHash && transactionHash || ''}
          </div>
        ) || null}
        {
          dataSnapshot && JSON.stringify(dataSnapshot) != "{}" && (
            <BlockCollapse title = "数据快照">
              <table style = {{lineHeight: '41px'}}>
                {
                  dataSnapshot.adminAccountHash && (
                    <tr>
                      <td>管理账户根哈希:</td>
                      <td>{dataSnapshot.adminAccountHash || ''}</td>
                    </tr>
                  ) || null
                }
                {
                  dataSnapshot.userAccountSetHash && (
                    <tr>
                      <td>用户账户集根哈希:</td>
                      <td>{dataSnapshot.userAccountSetHash || ''}</td>
                    </tr>
                  ) || null
                }
                {
                  dataSnapshot.dataAccountSetHash && (
                    <tr>
                      <td>数据账户集根哈希:</td>
                      <td>{dataSnapshot.dataAccountSetHash || ''}</td>
                    </tr>
                  ) || null
                }
                {
                  dataSnapshot.contractAccountSetHash && (
                    <tr>
                      <td>合约账户集根哈希:</td>
                      <td>{dataSnapshot.contractAccountSetHash || ''}</td>
                    </tr>
                  ) || null
                }
                {
                  dataSnapshot.systemEventSetHash && (
                    <tr>
                      <td>系统事件集根哈希:</td>
                      <td>{dataSnapshot.systemEventSetHash || ''}</td>
                    </tr>
                  ) || null
                }
                {
                  dataSnapshot.userEventSetHash && (
                    <tr>
                      <td>用户事件集根哈希:</td>
                      <td>{dataSnapshot.userEventSetHash || ''}</td>
                    </tr>
                  ) || null
                }
              </table>
            </BlockCollapse>
          )
        }
        {
          data.derivedOperations && JSON.stringify(data.derivedOperations) != "{}" && this.derivedTransItem(data.derivedOperations)
        }
        <div className = {styles.option}>
          运行结果: {executionState && executionState || ''}
        </div>
      </div>
    )
  }

  render() {
    const { data,visible} = this.props;
    return tmpls.container({
      components: {
        'ant-Drawer': Drawer,
        'BlockCollapse':BlockCollapse,
        'BlockCollapseSmall':BlockCollapseSmall,
        'BlockCollapsePanel':BlockCollapsePanel,
      }
    },this.props, this, {
      styles,
      data,
      visible,
      tranBase58,
      transAuth,
      moment: moment
    });
  }
}
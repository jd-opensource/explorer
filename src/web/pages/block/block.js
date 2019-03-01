import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import BlockInfo from '../../components/blockInfo';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/button';
import 'swiper/dist/css/swiper.min.css';
import Message from 'flarej/lib/components/antd/message';
import {isNotANumber} from '../../../utils/util';
import styles from './block.m.scss';
import tmpls from './block.t.html';
import Swiper from 'swiper/dist/js/swiper.js';


//页面容器组件
@registerTmpl('Block')
@inject('store')
@observer
export default class Block extends Component {

  @observable blockSwiper='';//区块查看Swiper
  @observable dom='swiper-container';

  // 初始化数据
  componentDidMount() {
    const { store: { header,block,common } } = this.props;
    header.setSelectMenu(['block']);//菜单高亮
    let legder=this.props.store.common.getDefaultLedger();
    Promise.all([
      block.getBlockHeight(legder),
    ]).then((data) => {
      block.setInputRole(data[0]);
      this.InitBlockShow();
      //搜索区块数据
      this.Search(data[0]);
    });
    window.onresize=()=>{  
      this.blockSwiper.virtual.cache=[];//清除cache内的虚拟slide
    this.blockSwiper.destroy(false); //销毁swiper
    $('#blockswiper').html('');//清空Swiper
    this.InitBlockShow();
    }
  } 

  // 获取区块高度输入框的值
  @autobind
  onInputRole(e) {
    const { store: { block } } = this.props;
    if (isNotANumber(e.target.value)) {
      block.setInputRole(e.target.value);
    }
  }

  // 搜索指定高度的区块信息
  @autobind
  onPressEnterInputRole(){
    const { store: { block } } = this.props;
    this.blockSwiper.virtual.cache=[];//清除cache内的虚拟slide
    this.blockSwiper.destroy(false); //销毁swiper
    $('#blockswiper').html('');//清空Swiper
    //搜索区块数据
    this.Search(block.inputRole*1);
    this.InitBlockShow();
  }

  // 初始化区块展示
  @autobind
  InitBlockShow(){
    const { store: { block} } = this.props;
    let blockheight=block.blockHeight,//区块总高度
        blockNew=block.inputRole*1,//当前区块
        blcokInterval=5000,//将要展示的区块范围
        blcokShowStart=0,//将要展示的区块范围--开始值
        blcokShowEnd=blockheight;//将要展示的区块范围--结束值
    this.dom="swiper-container"+new Date().getTime();
    let bw=`<div class="swiper-container ${this.dom}" >
              <div class="swiper-wrapper"></div>
              <div class="swiper-button-prev"></div><!--左箭头-->
              <div class="swiper-button-next"></div><!--右箭头-->
            </div>`;
    $('#blockswiper').html(bw);
    // 处理显示方式
    if(blockNew>blockheight){
      blockNew=blockheight;
    }
    blcokShowStart= (blockNew-blcokInterval)>0 && (blockNew-blcokInterval) || 0;
    blcokShowEnd= (blcokShowStart+2*blcokInterval)<=blcokShowEnd && (blcokShowStart+2*blcokInterval) || blcokShowEnd;
    this.blockSwiper = new Swiper("."+this.dom, {
      slidesPerView:parseInt(document.body.clientWidth/250),
      slidesPerGroup: parseInt(document.body.clientWidth/250),
      mousewheel: true,
      virtual: {
        slides: (function () {
          var slides = [];
          for (var i = blcokShowStart; i <= blcokShowEnd; i++) {
            slides.push(i);
          }
          return slides;
        }()),
        cache: false,
        renderSlide:(slide, index)=>{
          return `<div class="swiper-slide" data-con="${slide}""> 
                    <div class="${styles.blockSwiper} ${styles.blockHeight} ${styles.dark} bg">
                      <p class="${styles.blockHeightTitle}"> 区块高度</p>
                      <p class="${styles.blockHeightValue}">${slide}</p>
                    </div>
                  </div>`;
        },
    
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.blockSwiper.slideTo(block.inputRole*1-blcokShowStart);
    $('.swiper-slide').each(function(){
      if ($(this).attr('data-con')*1==block.inputRole*1) {
        $('.swiper-slide').removeClass('lights');
        $(this).addClass('lights');
      }
    });
    let now=this;
    $('.swiper-wrapper').on('click','.swiper-slide',function(){
      $('.swiper-slide').removeClass('lights');
      $(this).addClass('lights');
      now.Search($(this).attr('data-con')*1);
    });
  }

  // 搜索区块信息
  @autobind
  Search(height){
    const { store: { block, common } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let ledger=this.props.store.common.getDefaultLedger();
    let param={ledger:ledger,height:height};
    Promise.all([
      block.getBlockInformation(param),
      block.getTxCount(param),
      block.getTransaction(param),
    ]).then(() => {
      closeLoading();
    });
  }

  render() {
    const { store: { block } } = this.props;
    return tmpls.container(this.props, this, {
      styles,
      block,
      });
  }
}
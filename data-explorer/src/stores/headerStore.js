import { types } from 'mobx-state-tree';

const HeaderStore = types
  .model('HeaderStore', {
    current: types.number,
    title: '', //在导航栏显示当前页标题，用于app
  })
  .volatile(self => ({
    menuData:[{
      path:'search',
      name:'首页',
      icon:'home'
    },{
      path:'block',
      name:'区块',
      icon:'block',
    },{
      path:'account',
      name:'数据账户',
      icon:'switcher'
    },{
      path: 'event',
      name: '事件账户',
      icon: 'mail',
    },{
      path:'contract',
      name:'合约',
      icon:'profile',
    },{
      path:'user',
      name:'用户',
      icon:'user',
    }],
    selectMenu:[''],
  }))
  .actions(self => ({
    setSelectMenu(v) {
      self.selectMenu = v;
    },
    setCurrent(index) {
      self.current = index;
    },
    setPageTitle(title) { //设置标题
      self.title = title;
    }
  }));

export default HeaderStore;
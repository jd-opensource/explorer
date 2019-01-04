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
      path:'account',
      name:'数据账户',
      icon:'switcher'
    },{
      path:'block',
      name:'区块',
      icon:'block',
    },{
      path:'user',
      name:'用户',
      icon:'user',
    }],
    selectMenu:['search'],
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
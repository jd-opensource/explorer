import { types } from 'mobx-state-tree';
import { CommonStore } from './commonStore';
import HeaderStore from './headerStore';
import SearchStore from './pages/searchStore';
//{importStore}//

// prettier-ignore
const RootStore = types.model('RootStore', {
  common: types.optional(CommonStore, {}),

  header: types.optional(HeaderStore, {
    current: 0
  }),
  search: types.optional(SearchStore, {}),
  //{pageStore}//
});

export default RootStore;
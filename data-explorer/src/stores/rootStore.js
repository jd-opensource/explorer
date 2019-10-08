import { types } from 'mobx-state-tree';
import { CommonStore } from './commonStore';
import HeaderStore from './headerStore';
import SearchStore from './pages/searchStore';
import AccountStore from './pages/accountStore';
import UserStore from './pages/userStore';
import BlockStore from './pages/blockStore';
import ContractStore from './pages/contractStore';
//{importStore}//

// prettier-ignore
const RootStore = types.model('RootStore', {
  common: types.optional(CommonStore, {}),

  header: types.optional(HeaderStore, {
    current: 0,
  }),
  search: types.optional(SearchStore, {}),
  account: types.optional(AccountStore, {}),
  user: types.optional(UserStore, {}),
  block: types.optional(BlockStore, {}),
  contract: types.optional(ContractStore, {}),
  //{pageStore}//
});

export default RootStore;
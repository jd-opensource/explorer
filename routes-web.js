import React from 'react';
import { template as t } from 'nornj';
import Bundle from './Bundle';
import { withRouter, Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { observer, Provider, inject } from 'mobx-react';
import loadSearch from 'bundle-loader?lazy&name=[name]!./src/web/pages/search/search.js';
import loadAccount from 'bundle-loader?lazy&name=[name]!./src/web/pages/account/account.js';
import loadUser from 'bundle-loader?lazy&name=[name]!./src/web/pages/user/user.js';
import loadBlock from 'bundle-loader?lazy&name=[name]!./src/web/pages/block/block.js';
import loadContract from 'bundle-loader?lazy&name=[name]!./src/web/pages/contract/contract.js';
//{importLoadPage}//

// prettier-ignore
const loadBundles = {
  loadSearch,
  loadAccount,
  loadUser,
  loadBlock,
  loadContract,
  //{loadPage}//
};

/**
 * 页面search
 */
const Search = inject('store')(
  observer(({ store }) => t`
    <${PageWrap}>
      <${Bundle} load=${loadSearch} store=${store} isPc loadBundles=${loadBundles}>${
        (_Search) => {
          const Search = withRouter(_Search)
          return t`<${Search} />`;
        }
      }</${Bundle}>
    </${PageWrap}>
  `)
);

/**
 * 页面account
 */
const Account = inject('store')(
  observer(({ store }) => t`
    <${PageWrap}>
      <${Bundle} load=${loadAccount} store=${store} isPc loadBundles=${loadBundles}>${
        (_Account) => {
          const Account = withRouter(_Account)
          return t`<${Account} />`;
        }
      }</${Bundle}>
    </${PageWrap}>
  `)
);

/**
 * 页面user
 */
const User = inject('store')(
  observer(({ store }) => t`
    <${PageWrap}>
      <${Bundle} load=${loadUser} store=${store} isPc loadBundles=${loadBundles}>${
        (_User) => {
          const User = withRouter(_User)
          return t`<${User} />`;
        }
      }</${Bundle}>
    </${PageWrap}>
  `)
);

/**
 * 页面block
 */
const Block = inject('store')(
  observer(({ store }) => t`
    <${PageWrap}>
      <${Bundle} load=${loadBlock} store=${store} isPc loadBundles=${loadBundles}>${
        (_Block) => {
          const Block = withRouter(_Block)
          return t`<${Block} />`;
        }
      }</${Bundle}>
    </${PageWrap}>
  `)
);

/**
 * 页面contract
 */
const Contract = inject('store')(
  observer(({ store }) => t`
    <${PageWrap}>
      <${Bundle} load=${loadContract} store=${store} isPc loadBundles=${loadBundles}>${
        (_Contract) => {
          const Contract = withRouter(_Contract)
          return t`<${Contract} />`;
        }
      }</${Bundle}>
    </${PageWrap}>
  `)
);

//{pageComponent}//

const PageWrap = inject('store')(
  observer(({ store, children }) => t`
    <div id="page-wrap">
      ${children}
    </div>
  `)
);

const routes = () => t`
  <router-Switch>
    <Route exact path="/" component=${Search}/>
    
    <Route exact path="/Search" component=${Search} />
    
    <Route exact path="/Account" component=${Account} />
    
    <Route exact path="/User" component=${User} />
    
    <Route exact path="/Block" component=${Block} />
    
    <Route exact path="/Contract" component=${Contract} />
    
    <!--//{route}//-->
    <Redirect from="*" to="/"/>
  </router-Switch>
`;

export default routes;
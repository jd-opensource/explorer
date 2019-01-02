import React from 'react';
import { template as t } from 'nornj';
import Bundle from './Bundle';
import { withRouter, Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { observer, Provider, inject } from 'mobx-react';
import loadSearch from 'bundle-loader?lazy&name=[name]!./src/web/pages/search/search.js';
//{importLoadPage}//

// prettier-ignore
const loadBundles = {
  loadSearch,
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
    <!--//{route}//-->
    <Redirect from="*" to="/"/>
  </router-Switch>
`;

export default routes;
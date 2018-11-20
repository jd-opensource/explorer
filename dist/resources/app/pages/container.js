(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Global_pages/container", [], factory);
	else if(typeof exports === 'object')
		exports["Global_pages/container"] = factory();
	else
		root["Global_pages/container"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpGlobal__name_([7],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nornj__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nornj_react__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nornj_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nornj_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_containerConfig__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_flarej_lib_components_antd_button__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_flarej_lib_components_antd_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_flarej_lib_components_antd_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_decorators__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_higherOrders_container__ = __webpack_require__(65);
var _class, _desc, _value, _class2;

var _templateObject = babelHelpers.taggedTemplateLiteral(['\n      <div style="width: 100px;">\n        <style>\n          button.ant-btn {@lb}\n            margin: 10px 0 0 10px;\n          {@rb}\n        </style>\n        #', '\n      </div>\n    '], ['\n      <div style="width: 100px;">\n        <style>\n          button.ant-btn {@lb}\n            margin: 10px 0 0 10px;\n          {@rb}\n        </style>\n        #', '\n      </div>\n    ']);

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}










//页面容器组件

var Container = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = (_class2 = function (_Component) {
  babelHelpers.inherits(Container, _Component);

  function Container() {
    babelHelpers.classCallCheck(this, Container);
    return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Container.prototype.goPage1 = function goPage1() {
    location.href = '/page1';
  };

  Container.prototype.goPage2 = function goPage2() {
    location.href = '/page2';
  };

  Container.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_2_nornj__["default"])(_templateObject, this.props.tmpls[0])(this);
  };

  return Container;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), (_applyDecoratedDescriptor(_class2.prototype, 'goPage1', [__WEBPACK_IMPORTED_MODULE_6_core_decorators__["autobind"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'goPage1'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'goPage2', [__WEBPACK_IMPORTED_MODULE_6_core_decorators__["autobind"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'goPage2'), _class2.prototype)), _class2)) || _class;

Object(__WEBPACK_IMPORTED_MODULE_7__components_higherOrders_container__["a" /* default */])('Container', Container);

if (false) {
  module.hot.accept();
  njr.renderTmplTag({ target: '#container' });
}

/***/ })

},[430]);
});
//# sourceMappingURL=container.js.map
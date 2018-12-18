(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Global_pages/page1/container", [], factory);
	else if(typeof exports === 'object')
		exports["Global_pages/page1/container"] = factory();
	else
		root["Global_pages/page1/container"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpGlobal__name_([6],{

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nornj__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nornj_react__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nornj_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nornj_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_containerConfig__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_flarej_lib_components_antd_button__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_flarej_lib_components_antd_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_flarej_lib_components_antd_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flarej_lib_components_antd_breadcrumb__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_flarej_lib_components_antd_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_flarej_lib_components_antd_breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_flarej_lib_components_antd_table__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_flarej_lib_components_antd_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_flarej_lib_components_antd_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_flarej_lib_components_antd_message__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_flarej_lib_components_antd_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_flarej_lib_components_antd_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_decorators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sider__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_higherOrders_container__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page1_m_less__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page1_m_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__page1_m_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page1_t_html__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page1_t_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__page1_t_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stores_Page1Store__ = __webpack_require__(974);
var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3;

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

















var page1Store = new __WEBPACK_IMPORTED_MODULE_15__stores_Page1Store__["a" /* default */]();

//页面容器组件
var Container = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('store'), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = function (_Component) {
  babelHelpers.inherits(Container, _Component);

  function Container() {
    babelHelpers.classCallCheck(this, Container);
    return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Container.prototype.componentDidMount = function componentDidMount() {
    var closeLoading = __WEBPACK_IMPORTED_MODULE_8_flarej_lib_components_antd_message__["Message"].loading('正在加载数据...', 0);
    this.props.store.getTableData(1, this.props.store.pageSize).then(function () {
      return closeLoading();
    });
  };

  Container.prototype.render = function render() {
    return this.props.tmpls[0](this, {
      styles: __WEBPACK_IMPORTED_MODULE_13__page1_m_less___default.a
    });
  };

  return Container;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);

Object(__WEBPACK_IMPORTED_MODULE_12__components_higherOrders_container__["a" /* default */])('Container', Container, page1Store);

var DataTable = (_dec2 = Object(__WEBPACK_IMPORTED_MODULE_3_nornj_react__["registerTmpl"])('DataTable'), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('store'), _dec2(_class2 = _dec3(_class2 = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class2 = (_class3 = function (_Component2) {
  babelHelpers.inherits(DataTable, _Component2);

  function DataTable() {
    var _temp, _this2, _ret;

    babelHelpers.classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = babelHelpers.possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
      columns: [{
        title: '测试1',
        dataIndex: 'test1',
        key: 'test1'
      }, {
        title: '测试2',
        dataIndex: 'test2',
        key: 'test2'
      }, {
        title: '测试3',
        dataIndex: 'test3',
        key: 'test3',
        children: [{
          title: '测试4',
          dataIndex: 'test4',
          key: 'test4'
        }, {
          title: '测试5',
          dataIndex: 'test5',
          key: 'test5'
        }, {
          title: '测试6',
          dataIndex: 'test6',
          key: 'test6'
        }]
      }, {
        title: '测试7',
        dataIndex: 'test7',
        key: 'test7',
        children: [{
          title: '测试8',
          dataIndex: 'test8',
          key: 'test8'
        }, {
          title: '测试9',
          dataIndex: 'test9',
          key: 'test9'
        }, {
          title: '测试10',
          dataIndex: 'test10',
          key: 'test10'
        }, {
          title: '测试11',
          dataIndex: 'test11',
          key: 'test11'
        }, {
          title: '测试12',
          dataIndex: 'test12',
          key: 'test12'
        }]
      }, {
        title: '测试13',
        dataIndex: 'test13',
        key: 'test13',
        children: [{
          title: '测试14',
          dataIndex: 'test14',
          key: 'test14'
        }, {
          title: '测试15',
          dataIndex: 'test15',
          key: 'test15'
        }, {
          title: '测试16',
          dataIndex: 'test16',
          key: 'test16'
        }, {
          title: '测试17',
          dataIndex: 'test17',
          key: 'test17'
        }, {
          title: '测试18',
          dataIndex: 'test18',
          key: 'test18'
        }]
      }]
    }, _temp), babelHelpers.possibleConstructorReturn(_this2, _ret);
  }

  DataTable.prototype.onPageChange = function onPageChange(page, pageSize) {
    var closeLoading = __WEBPACK_IMPORTED_MODULE_8_flarej_lib_components_antd_message__["Message"].loading('正在加载数据...', 0);
    this.props.store.getTableData(page, pageSize).then(function () {
      return closeLoading();
    });
  };

  DataTable.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_14__page1_t_html___default.a.dataTable(this.state, this.props, this, {
      styles: __WEBPACK_IMPORTED_MODULE_13__page1_m_less___default.a
    });
  };

  return DataTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), (_applyDecoratedDescriptor(_class3.prototype, 'onPageChange', [__WEBPACK_IMPORTED_MODULE_9_core_decorators__["autobind"]], Object.getOwnPropertyDescriptor(_class3.prototype, 'onPageChange'), _class3.prototype)), _class3)) || _class2) || _class2) || _class2);


if (false) {
  module.hot.accept();
  njr.renderTmplTag({ target: '#container' });
}

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(972);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(48)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./page1.m.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./page1.m.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nj = __webpack_require__(9);

module.exports = {
  dataTable: nj.compileH({
  _njTmplKey: -757632400,
  useString: false,
  main: function anonymous(p1,p2,p3,p4,p5
/*``*/) {

var _type0 = p1.e('ant-table', p1, 'ant-Table', p2);
var _value0 = null, _valueL0;
var _tmp;

var _filter0;
var _fnH0 = p2.d('toJS', 0, true);
if (_fnH0) {
  _filter0 = _fnH0.val;
} else {
  _filter0 = p1.f['toJS'];
}
if (!_filter0) {
  p1.wn('toJS', 'f');
} else {
var _value1 = p2.d('store'), _valueL1;

var _filter1 = p1.f['.'];
if (!_filter1) {
  p1.wn('.', 'f');
} else {
  _tmp = _filter1.apply(p2, [_value1, 'tableData']);
  _valueL1 = _value1;
  _value1 = _tmp;
}
  _tmp = _filter0.apply(_fnH0 ? _fnH0._njCtx : p2, [_value1]);
  _valueL0 = _value0;
  _value0 = _tmp;
}
var _value2 = null, _valueL2;

var _filter2 = p1.f['obj'];
if (!_filter2) {
  p1.wn('obj', 'f');
} else {
var _value3 = 'current', _valueL3;

var _filter3 = p1.f[':'];
if (!_filter3) {
  p1.wn(':', 'f');
} else {
var _value4 = p2.d('store'), _valueL4;

var _filter4 = p1.f['.'];
if (!_filter4) {
  p1.wn('.', 'f');
} else {
  _tmp = _filter4.apply(p2, [_value4, 'pageIndex']);
  _valueL4 = _value4;
  _value4 = _tmp;
}
  _tmp = _filter3.apply(p2, [_value3, _value4]);
  _valueL3 = _value3;
  _value3 = _tmp;
}
var _value5 = 'pageSize', _valueL5;

var _filter5 = p1.f[':'];
if (!_filter5) {
  p1.wn(':', 'f');
} else {
var _value6 = p2.d('store'), _valueL6;

var _filter6 = p1.f['.'];
if (!_filter6) {
  p1.wn('.', 'f');
} else {
  _tmp = _filter6.apply(p2, [_value6, 'pageSize']);
  _valueL6 = _value6;
  _value6 = _tmp;
}
  _tmp = _filter5.apply(p2, [_value5, _value6]);
  _valueL5 = _value5;
  _value5 = _tmp;
}
var _value7 = 'total', _valueL7;

var _filter7 = p1.f[':'];
if (!_filter7) {
  p1.wn(':', 'f');
} else {
var _value8 = p2.d('store'), _valueL8;

var _filter8 = p1.f['.'];
if (!_filter8) {
  p1.wn('.', 'f');
} else {
  _tmp = _filter8.apply(p2, [_value8, 'count']);
  _valueL8 = _value8;
  _value8 = _tmp;
}
  _tmp = _filter7.apply(p2, [_value7, _value8]);
  _valueL7 = _value7;
  _value7 = _tmp;
}
var _value9 = 'onChange', _valueL9;

var _filter9 = p1.f[':'];
if (!_filter9) {
  p1.wn(':', 'f');
} else {
  _tmp = _filter9.apply(p2, [_value9, p2.d('onPageChange')]);
  _valueL9 = _value9;
  _value9 = _tmp;
}
  _tmp = _filter2.apply(p2, [_value3, _value5, _value7, _value9]);
  _valueL2 = _value2;
  _value2 = _tmp;
}
var _params0 = {
  'dataSource': _value0,
  'rowKey': 'test1',
  'columns': p2.d('columns'),
  'bordered': true,
  'pagination': _value2
};
var _compParam0 = [_type0, _params0];

return p1.H(_compParam0);
}
})
};

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flarej_lib_utils_fetchConfig__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flarej_lib_utils_fetchConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flarej_lib_utils_fetchConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_decorators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flarej_lib_components_antd_notification__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_flarej_lib_components_antd_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_flarej_lib_components_antd_notification__);
var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}






var Page1Store = (_class = function () {
  function Page1Store() {
    babelHelpers.classCallCheck(this, Page1Store);

    _initDefineProp(this, 'pageIndex', _descriptor, this);

    _initDefineProp(this, 'pageSize', _descriptor2, this);

    _initDefineProp(this, 'count', _descriptor3, this);

    _initDefineProp(this, 'tableData', _descriptor4, this);
  }

  Page1Store.prototype.getTableData = function getTableData() {
    var _this = this;

    var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pageIndex;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.pageSize;

    return Object(__WEBPACK_IMPORTED_MODULE_1_flarej_lib_utils_fetchConfig__["fetchData"])("http://projectName.dev.jd.com:3021" + '/page1/getTableData', function (result) {
      Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["transaction"])(function () {
        if (result.success) {
          _this.pageIndex = currentPage;
          _this.pageSize = pageSize;
          _this.count = result.totalCount;
          _this.tableData = result.data;
        } else {
          _this.pageIndex = 1;
          _this.pageSize = 10;
          _this.count = 0;
          _this.tableData = [];
          __WEBPACK_IMPORTED_MODULE_3_flarej_lib_components_antd_notification__["Notification"].error({ description: '获取表格数据出错，异常是:' + result.msg, duration: null });
        }
      });
    }, {
      currentPage: currentPage,
      pageSize: pageSize
    }, { method: 'post' }).catch(function (ex) {
      __WEBPACK_IMPORTED_MODULE_3_flarej_lib_components_antd_notification__["Notification"].error({ description: '获取表格数据出错，错误是:' + ex, duration: null });
    });
  };

  return Page1Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'pageIndex', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'count', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'tableData', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'getTableData', [__WEBPACK_IMPORTED_MODULE_2_core_decorators__["autobind"], __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, 'getTableData'), _class.prototype)), _class);


/***/ })

},[970]);
});
//# sourceMappingURL=container.js.map
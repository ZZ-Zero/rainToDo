webpackHotUpdate(0,{

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _AppStore = __webpack_require__(264);

	var _AppStore2 = _interopRequireDefault(_AppStore);

	var _flux = __webpack_require__(269);

	var _flux2 = _interopRequireDefault(_flux);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppDispatchar = new _flux2.default.Dispatcher();

	AppDispatchar.register(function (action) {
		switch (action.actionType) {
			case 'ADD_NEW_ITEM':
				_AppStore2.default.addNewItem();
				_AppStore2.default.emitChange();
				break;
			case 'REMOVE_ITEM':
				_AppStore2.default.removeItem(action.nth);
				_AppStore2.default.emitChange();
				break;
			case 'CHANGE_TEXT':
				_AppStore2.default.changeText(action.nth, action.text);
				_AppStore2.default.emitChange();
				break;
			default:
				return;
		}
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(266); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppDispatchar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
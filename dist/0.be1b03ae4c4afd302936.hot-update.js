webpackHotUpdate(0,{

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(152);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(169);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"centerBox.styl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var CenterBox = function CenterBox(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'centerBox' },
	    ' Hello ',
	    props.name
	  );
	};

	(0, _reactDom.render)(_react2.default.createElement(CenterBox, { name: 'centerBox' }), document.body);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(261); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "centerBox.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
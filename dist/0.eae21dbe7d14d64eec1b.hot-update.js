webpackHotUpdate(0,{

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(152);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(174);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(262);

	var MenuBox = function MenuBox(props) {
		return _react2.default.createElement(
			'div',
			{ className: 'menu' },
			_react2.default.createElement(
				'span',
				{ className: 'addButton' },
				'+'
			),
			_react2.default.createElement(
				'span',
				{ className: 'addButton' },
				'Active'
			),
			_react2.default.createElement(
				'span',
				{ className: 'addButton' },
				'Completed'
			)
		);
	};

	exports.default = MenuBox;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(264); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "menu.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
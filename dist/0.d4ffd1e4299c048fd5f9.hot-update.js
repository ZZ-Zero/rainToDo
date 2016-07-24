webpackHotUpdate(0,{

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(152);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(174);

	var _AppStore = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../store/AppStore\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _AppStore2 = _interopRequireDefault(_AppStore);

	var _ButtonActions = __webpack_require__(262);

	var _ButtonActions2 = _interopRequireDefault(_ButtonActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(272);

	var MenuBox = function (_Component) {
		_inherits(MenuBox, _Component);

		function MenuBox(props) {
			_classCallCheck(this, MenuBox);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuBox).call(this, props));

			_this.state = {
				viewRange: 'all',
				listArr: _AppStore2.default.getAll()
			};
			return _this;
		}

		_createClass(MenuBox, [{
			key: 'viewClick',
			value: function viewClick(e) {}
		}, {
			key: 'addList',
			value: function addList() {
				_ButtonActions2.default.addNewItem();
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'menu' },
					_react2.default.createElement('span', { onClick: this.addList, className: 'add button' }),
					_react2.default.createElement(
						'span',
						{ className: 'active button check' },
						'Active'
					),
					_react2.default.createElement(
						'span',
						{ className: 'completed button check' },
						'Completed'
					)
				);
			}
		}]);

		return MenuBox;
	}(_react.Component);

	exports.default = MenuBox;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(266); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "menu.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
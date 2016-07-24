webpackHotUpdate(0,{

/***/ 274:
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

	var _AppStore = __webpack_require__(264);

	var _AppStore2 = _interopRequireDefault(_AppStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(275);

	var List = function (_Component) {
		_inherits(List, _Component);

		function List(props) {
			_classCallCheck(this, List);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

			_this.state = {
				color: "",
				text: props.text ? props.text : '',
				check: props.check ? 'check' : ''
			};
			return _this;
		}

		_createClass(List, [{
			key: 'checkClick',
			value: function checkClick() {
				this.setState({
					check: this.state.check ? '' : 'check'
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{
							className: 'checkBox ' + this.state.check,
							onClick: this.checkClick.bind(this)
						},
						'√'
					),
					_react2.default.createElement(
						'span',
						{ className: 'text ' + this.state.color, placeholder: '请直接填写新任务', contentEditable: 'true' },
						this.state.text
					),
					_react2.default.createElement('span', { className: 'deleteLi' })
				);
			}
		}]);

		return List;
	}(_react.Component);

	var ListBox = function (_Component2) {
		_inherits(ListBox, _Component2);

		function ListBox(props) {
			_classCallCheck(this, ListBox);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ListBox).call(this, props));

			_this2.state = {
				items: _AppStore2.default.getAll()
			};
			return _this2;
		}

		_createClass(ListBox, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				_AppStore2.default.addChangeListener(this.listChange);
			}
		}, {
			key: 'listChange',
			value: function listChange() {
				this.setState({
					items: _AppStore2.default.getAll()
				}).bind(this);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ol',
					{ className: 'listBox' },
					this.state.items.map(function (item, nth) {
						return _react2.default.createElement(List, { key: nth, text: item });
					})
				);
			}
		}]);

		return ListBox;
	}(_react.Component);

	exports.default = ListBox;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(266); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "list.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
webpackHotUpdate(0,{

/***/ 267:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(268);

	var List = function (_Component) {
		_inherits(List, _Component);

		function List(props) {
			_classCallCheck(this, List);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

			_this.state = {
				color: "",
				text: props.text ? props.text : '',
				check: props.check ? props.check : ''
			};
			return _this;
		}

		_createClass(List, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{ className: 'checkBox' },
						'√'
					),
					_react2.default.createElement(
						'span',
						{ className: 'text {this.state.color} {this.state.check}' },
						this.state.text
					),
					_react2.default.createElement('span', { className: 'deleteLi' })
				);
			}
		}]);

		return List;
	}(_react.Component);

	var ListBox = function ListBox(props) {
		return _react2.default.createElement(
			'ol',
			{ className: 'listBox' },
			_react2.default.createElement(List, { text: 'test' }),
			_react2.default.createElement(List, { text: 'test' }),
			_react2.default.createElement(List, { text: 'test' }),
			_react2.default.createElement(List, { text: 'test', check: 'check' }),
			_react2.default.createElement(List, { text: 'test', check: 'check' }),
			_react2.default.createElement(List, { text: 'test', check: 'check' })
		);
	};

	exports.default = ListBox;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(264); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "list.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
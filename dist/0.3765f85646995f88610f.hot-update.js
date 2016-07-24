webpackHotUpdate(0,{

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(152);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(174);

	var _menu = __webpack_require__(261);

	var _menu2 = _interopRequireDefault(_menu);

	var _list = __webpack_require__(267);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(270);

	var CenterBox = function CenterBox(props) {
		return _react2.default.createElement(
			'div',
			{ className: 'centerBox' },
			_react2.default.createElement(_menu2.default, null),
			_react2.default.createElement(_list2.default, null)
		);
	};

	(0, _reactDom.render)(_react2.default.createElement(CenterBox, null), document.getElementsByClassName('app')[0]);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(264); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "centerBox.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(262);

	var MenuBox = function (_Component) {
		_inherits(MenuBox, _Component);

		function MenuBox(props) {
			_classCallCheck(this, MenuBox);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuBox).call(this, props));

			_this.state = {
				viewRange: 'all'
			};
			return _this;
		}

		_createClass(MenuBox, [{
			key: 'viewClick',
			value: function viewClick(e) {}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'menu' },
					_react2.default.createElement('span', { className: 'add button' }),
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(264); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "menu.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(263);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(263, function() {
				var newContent = __webpack_require__(263);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, ".menu {\n  width: 60%;\n  margin: auto;\n  padding: 0 0 20px;\n  display: flex;\n}\n.menu * {\n  border: 1px solid rgba(0,0,0,0.2);\n  border-radius: 999em 4px;\n  background: rgba(255,255,255,0.8);\n  padding: 10px;\n  margin: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.4s;\n  flex: 1;\n  opacity: 0.1;\n}\n.menu *:hover {\n  box-shadow: 0 0 4px rgba(0,0,0,0.2);\n  opacity: 1;\n}\n.menu *.check {\n  opacity: 1;\n  box-shadow: 0 0 4px rgba(0,0,0,0.2);\n}\n.menu .add {\n  flex-grow: 0;\n  flex-basis: 38px;\n  border-radius: 999em;\n  transform: scale(0.7);\n}\n.menu .add:before {\n  content: \"\";\n  width: 2px;\n  height: 16px;\n  background: #000;\n  position: absolute;\n  top: 10px;\n  left: 17px;\n}\n.menu .add:after {\n  content: \"\";\n  width: 16px;\n  height: 2px;\n  background: #000;\n  position: absolute;\n  top: 17px;\n  left: 10px;\n}\n.menu .add:hover {\n  background: rgba(108,195,236,0.8);\n  transform: scale(1);\n}\n", ""]);

	// exports


/***/ }

})
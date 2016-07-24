webpackHotUpdate(0,{

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _events = __webpack_require__(265);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppStore = Object.assign({}, _events2.default.EventEmitter.prototype, {
		listStore: {
			items: ['test1', 'test2', 'test3'],
			userName: 'testName'
		},
		storageLoad: function storageLoad() {
			this.listStore = JSON.parse(localStorage.rainToDo);
		},
		storageSave: function storageSave() {
			localStorage.rainToDo = JSON.stringify(this.listStore);
		},
		getAll: function getAll() {
			return this.listStore.items;
		},
		addNewItem: function addNewItem() {
			this.listStore.items.push('New items');
		},
		removeItem: function removeItem(nth) {
			this.listStore.items.splice(nth, 1);
		},
		changeText: function changeText(nth, text) {
			this.listStore.items[nth] = text;
		},
		emitChange: function emitChange() {
			this.emit('change');
		},
		addChangeListener: function addChangeListener(callback) {
			this.on('change', callback);
		}
	});

	exports.default = AppStore;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(266); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
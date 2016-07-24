webpackHotUpdate(0,{

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
	exports.push([module.id, ".menu {\n  width: 60%;\n  margin: auto;\n  padding: 0 0 20px;\n  display: flex;\n}\n.menu * {\n  border: 1px solid rgba(0,0,0,0.2);\n  border-radius: 999em 4px;\n  background: rgba(255,255,255,0.8);\n  padding: 10px;\n  margin: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.4s;\n  flex: 1;\n  opacity: 0.1;\n}\n.menu *:hover,\n.menu *.check {\n  box-shadow: 0 0 4px rgba(0,0,0,0.2);\n  opacity: 1;\n}\n.menu .add {\n  flex-grow: 0;\n  flex-basis: 38px;\n  border-radius: 999em;\n  transform: scale(0.7);\n}\n.menu .add:before {\n  content: \"\";\n  width: 2px;\n  height: 16px;\n  background: #000;\n  position: absolute;\n  top: 10px;\n  left: 17px;\n}\n.menu .add:after {\n  content: \"\";\n  width: 16px;\n  height: 2px;\n  background: #000;\n  position: absolute;\n  top: 17px;\n  left: 10px;\n}\n.menu .add:hover {\n  background: rgba(108,195,236,0.8);\n  transform: scale(1);\n}\n", ""]);

	// exports


/***/ }

})
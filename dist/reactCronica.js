(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["react-cronica"] = factory(require("react"));
	else
		root["react-cronica"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _PlacaRoja = __webpack_require__(1);
	
	var _PlacaRoja2 = _interopRequireDefault(_PlacaRoja);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// eslint-disable-line
	
	module.exports = _PlacaRoja2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var style = {
	  container: {
	    display: 'flex',
	    flexFlow: 'column',
	    backgroundColor: '#A91700',
	    width: '32em',
	    height: '24em'
	  },
	  titleContainer: {
	    display: 'flex',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    paddingTop: '.5em',
	    paddingLeft: '2em',
	    paddingRight: '1em'
	  },
	  epigrafe: {
	    fontFamily: 'sans-serif',
	    color: '#EAEAEA',
	    fontStyle: 'italic',
	    textTransform: 'uppercase',
	    textShadow: 'black 4px 4px 0'
	  },
	  rightContainer: {
	    lineHeight: '1em'
	  },
	  logo: {
	    backgroundColor: '#FFFFFF',
	    padding: '0 .4em',
	    color: '#B32C32',
	    border: '1px solid black',
	    borderRadius: '2px',
	    fontFamily: 'cursive',
	    fontWeight: 'bold'
	  },
	  timeAndTemperatureContainer: {
	    display: 'flex',
	    flexFlow: 'column',
	    alignItems: 'flex-end',
	    paddingRight: '.5em'
	  },
	  timeAndTemperature: {
	    backgroundColor: 'black',
	    color: '#EBF8BD'
	  },
	  content: {
	    flex: 1,
	    display: 'flex',
	    alignItems: 'center',
	    marginTop: '-.5em',
	    fontFamily: 'Impact',
	    color: '#EAEAEA',
	    textAlign: 'center',
	    fontSize: '4em',
	    textTransform: 'uppercase',
	    textShadow: 'black 4px 4px 0'
	  }
	};
	
	function PlacaRoja(_ref) {
	  var _ref$epigrafe = _ref.epigrafe,
	      epigrafe = _ref$epigrafe === undefined ? 'Reiteramos' : _ref$epigrafe,
	      _ref$hora = _ref.hora,
	      hora = _ref$hora === undefined ? '16:21' : _ref$hora,
	      _ref$temperatura = _ref.temperatura,
	      temperatura = _ref$temperatura === undefined ? '26º5' : _ref$temperatura,
	      _ref$logo = _ref.logo,
	      logo = _ref$logo === undefined ? 'crónica' : _ref$logo,
	      children = _ref.children;
	
	  return _react2.default.createElement(
	    'div',
	    { style: style.container },
	    _react2.default.createElement(
	      'div',
	      { style: style.titleContainer },
	      _react2.default.createElement(
	        'span',
	        { style: style.epigrafe },
	        epigrafe
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: style.rightContainer },
	        _react2.default.createElement(
	          'div',
	          { style: style.logo },
	          logo
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: style.timeAndTemperatureContainer },
	          _react2.default.createElement(
	            'span',
	            { style: style.timeAndTemperature },
	            hora
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: style.timeAndTemperature },
	            temperatura
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: style.content },
	      children
	    )
	  );
	}
	
	process.env.NODE_ENV !== "production" ? PlacaRoja.propTypes = {
	  epigrafe: _react.PropTypes.string,
	  logo: _react.PropTypes.string,
	  hora: _react.PropTypes.string,
	  temperatura: _react.PropTypes.string,
	  children: _react.PropTypes.string.isRequired
	} : void 0;
	
	exports.default = PlacaRoja;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=reactCronica.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index_render */ "./src/index_render.ts");

Object(_src_index_render__WEBPACK_IMPORTED_MODULE_0__["default"])('W:/ui/node_modules');


/***/ }),

/***/ "./node_modules/ccts/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/ccts/lib/index.js ***!
  \****************************************/
/*! exports provided: default, ccd3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'W:\\diskScan\\node_modules\\ccts\\lib\\index.js'");

/***/ }),

/***/ "./src/index_render.ts":
/*!*****************************!*\
  !*** ./src/index_render.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _treemap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treemap */ "./src/treemap.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_4__);





const LOADING_LIMIT = 32;
let loadingArray = [];
let currentRunning = 0;
let updateTimer;
/* harmony default export */ __webpack_exports__["default"] = (function (target = './') {
    readFile(target)
        .then(function () {
        Object(_treemap__WEBPACK_IMPORTED_MODULE_2__["default"])('#treemap', target);
    });
});
function readFile(target, parent) {
    return readStats(target, parent)
        .then(handleFile);
}
function readStats(target, parent) {
    return fs__WEBPACK_IMPORTED_MODULE_0__["promises"].stat(target)
        .then((stats) => {
        return handleStats(stats, target, parent);
    });
}
function handleStats(stats, target, parent) {
    let isDirectory = stats.isDirectory();
    let file = {
        name: path__WEBPACK_IMPORTED_MODULE_1__["basename"](target),
        children: [],
        value: stats.size,
        path: target,
        isDirectory: isDirectory,
        parent: parent,
    };
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].set(target, file);
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].set(file, []);
    return file;
}
function handleFile(file) {
    let isDirectory = file.isDirectory;
    appendChildren(file);
    if (isDirectory) {
        handleDirectory(file);
    }
    else {
        updateSizeOfAllParents(file);
    }
}
function handleDirectory(file) {
    fs__WEBPACK_IMPORTED_MODULE_0__["promises"].readdir(file.path)
        .then((items) => {
        items.forEach((item) => {
            handleRunning(function () {
                return readFile(path__WEBPACK_IMPORTED_MODULE_1__["join"](file.path, item), file);
            });
        });
    });
}
function handleRunning(fn) {
    if (fn) {
        let task = function () {
            currentRunning++;
            fn()
                .then(function () {
                handleRunning();
            })
                .catch(function (err) {
                handleRunning();
            });
        };
        if (currentRunning < LOADING_LIMIT) {
            task();
        }
        else {
            loadingArray.push(task);
        }
    }
    else {
        currentRunning--;
        let task = loadingArray.shift();
        if (task) {
            task();
        }
    }
}
function appendChildren(file) {
    if (file.parent)
        _store__WEBPACK_IMPORTED_MODULE_3__["default"].get(file.parent).push(file);
}
function updateSizeOfAllParents(file) {
    let parent = _store__WEBPACK_IMPORTED_MODULE_3__["default"].get(file.parent.path);
    do {
        parent.value += file.value;
        if (parent.parent) {
            parent = _store__WEBPACK_IMPORTED_MODULE_3__["default"].get(parent.parent.path);
        }
        else {
            parent = null;
        }
    } while (parent);
    Object(_treemap__WEBPACK_IMPORTED_MODULE_2__["default"])();
}


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let store = new Map();
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./src/treemap.ts":
/*!************************!*\
  !*** ./src/treemap.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ccts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ccts */ "./node_modules/ccts/lib/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



const SIZE = [500, 500];
let CURRENT_DATA;
let CONTAINER;
let isRendering = false;
window.addEventListener('resize', function () {
    Treemap();
});
let treemap = ccts__WEBPACK_IMPORTED_MODULE_0__["ccd3"].treemap()
    .tile(ccts__WEBPACK_IMPORTED_MODULE_0__["ccd3"].treemapBinary)
    .round(true)
    .paddingInner(4)
    .paddingOuter(4);
let Treemap = function (containerSelector, key) {
    let scanUpdate = !containerSelector && !key;
    if (isRendering && scanUpdate)
        return;
    isRendering = true;
    let originalData = _store__WEBPACK_IMPORTED_MODULE_1__["default"].get(key || CURRENT_DATA.path);
    CURRENT_DATA = Object.assign({}, _store__WEBPACK_IMPORTED_MODULE_1__["default"].get(key || CURRENT_DATA.path));
    containerSelector = CONTAINER = containerSelector || CONTAINER;
    let svg = ccts__WEBPACK_IMPORTED_MODULE_0__["ccd3"].select(containerSelector)
        .style('position', `relative`);
    let { width, height } = document.querySelector(containerSelector).getBoundingClientRect();
    treemap.size([width, height]);
    CURRENT_DATA._value = CURRENT_DATA.value;
    CURRENT_DATA.value = 0;
    CURRENT_DATA.children = _store__WEBPACK_IMPORTED_MODULE_1__["default"].get(originalData);
    let root = ccts__WEBPACK_IMPORTED_MODULE_0__["ccd3"].hierarchy(CURRENT_DATA);
    root.sum(function (d) {
        return d.value;
    });
    treemap(root);
    let treeData = root.descendants();
    ccts__WEBPACK_IMPORTED_MODULE_0__["ccd3"].select('#back')
        .text(path__WEBPACK_IMPORTED_MODULE_2__["normalize"](treeData[0].data.path) + ' (' + numberToBytes(treeData[0].data._value) + ')')
        .on('click', function () {
        if (treeData[0].data.parent)
            Treemap(containerSelector, treeData[0].data.parent.path);
    });
    svg.selectAll('.warper')
        .data(treeData)
        .exit()
        .remove();
    svg.selectAll('.warper')
        .data(treeData)
        .enter()
        .append('div')
        .classed('warper', true)
        .style('transform', function (d) { return `translate(${(d.x0)}px, ${(d.y0)}px)`; })
        .style('width', 0)
        .style('height', 0)
        .append('div')
        .classed('content-container', true)
        .append('header')
        .classed('title', true)
        .parent()
        .append('div')
        .classed('children-container', true);
    let warpers = svg.selectAll('.warper')
        .classed('file', function (d) {
        return !d.data.isDirectory;
    })
        .classed('child', function (d, i) {
        return d.data.isDirectory && i > 0;
    })
        .attr('id', function (d) {
        return `f_` + stringToAscii(d.data.path);
    })
        .on('click', function (d, i) {
        if (!d.data.isDirectory) {
            return;
        }
        Treemap(containerSelector, d.data.path);
    });
    warpers.select('header')
        .text(function (d, i) {
        let text = i === 0 ? '' : d.data.name + ' (' + numberToBytes(d.data.value) + ')';
        return text;
    });
    if (scanUpdate) {
        warpers
            .style('transform', function (d) { return `translate(${(d.x0)}px, ${(d.y0)}px)`; })
            .style('width', function (d) { return (d.x1 - d.x0) + 'px'; })
            .style('height', function (d) { return (d.y1 - d.y0) + 'px'; });
        setTimeout(function () {
            isRendering = false;
        }, 20);
    }
    else {
        warpers
            .transition()
            .delay((d, i) => i * 10)
            .duration(50)
            .end()
            .style('transform', function (d) { return `translate(${(d.x0)}px, ${(d.y0)}px)`; })
            .style('width', function (d) { return (d.x1 - d.x0) + 'px'; })
            .style('height', function (d) { return (d.y1 - d.y0) + 'px'; });
    }
};
function NTP(px) {
    return px * 100 / SIZE[0];
}
function stringToAscii(string) {
    return string.split('')
        .map(function (char) {
        return char.charCodeAt(0);
    })
        .reduce(function (current, previous) {
        return previous + '' + current;
    });
}
function numberToBytes(number) {
    if (number === 0)
        return '0 Bytes';
    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(number) / Math.log(k));
    return parseFloat((number / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
/* harmony default export */ __webpack_exports__["default"] = (Treemap);


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleF9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy90cmVlbWFwLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUF1QztBQUd2QyxpRUFBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFFZDtBQUdHO0FBQ0o7QUFDWDtBQUlqQixNQUFN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LENBQUM7SUFFbkMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2YsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckQsT0FBTyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFYyxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLdkIsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAudHNcIik7XG4iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9zcmMvaW5kZXhfcmVuZGVyJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3JjL3N0b3JlJztcclxuXHJcbmluZGV4KCdXOi91aS9ub2RlX21vZHVsZXMnKTtcclxuLy9pbmRleCgndzovJyk7IiwiaW1wb3J0IHsgU3RhdHMsIHByb21pc2VzIGFzIGZwIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5cclxuaW1wb3J0IHRyZWVtYXAgZnJvbSAnLi90cmVlbWFwJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgJy4vdHlwZXMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBMT0FESU5HX0xJTUlUID0gMzI7XHJcbmxldCBsb2FkaW5nQXJyYXk6IGFueVtdID0gW107XHJcbmxldCBjdXJyZW50UnVubmluZyA9IDA7XHJcblxyXG5sZXQgdXBkYXRlVGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVtYmVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldDogc3RyaW5nID0gJy4vJykge1xyXG4gICAgcmVhZEZpbGUodGFyZ2V0KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdHJlZW1hcCgnI3RyZWVtYXAnLCB0YXJnZXQpXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRGaWxlKHRhcmdldDogc3RyaW5nLCBwYXJlbnQ/OiBmaWxlKSB7XHJcbiAgICByZXR1cm4gcmVhZFN0YXRzKHRhcmdldCwgcGFyZW50KVxyXG4gICAgICAgIC50aGVuKGhhbmRsZUZpbGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRTdGF0cyh0YXJnZXQ6IHN0cmluZywgcGFyZW50PzogZmlsZSkge1xyXG4gICAgcmV0dXJuIGZwLnN0YXQodGFyZ2V0KVxyXG4gICAgICAgIC50aGVuKChzdGF0cykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlU3RhdHMoc3RhdHMsIHRhcmdldCwgcGFyZW50KTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU3RhdHMoc3RhdHM6IFN0YXRzLCB0YXJnZXQ6IHN0cmluZywgcGFyZW50PzogZmlsZSkge1xyXG4gICAgbGV0IGlzRGlyZWN0b3J5ID0gc3RhdHMuaXNEaXJlY3RvcnkoKTtcclxuICAgIGxldCBmaWxlOiBmaWxlID0ge1xyXG4gICAgICAgIG5hbWU6IHBhdGguYmFzZW5hbWUodGFyZ2V0KSxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgdmFsdWU6IHN0YXRzLnNpemUsXHJcbiAgICAgICAgcGF0aDogdGFyZ2V0LFxyXG4gICAgICAgIGlzRGlyZWN0b3J5OiBpc0RpcmVjdG9yeSxcclxuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmUuc2V0KHRhcmdldCwgZmlsZSk7XHJcbiAgICBzdG9yZS5zZXQoZmlsZSwgW10pO1xyXG4gICAgcmV0dXJuIGZpbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUZpbGUoZmlsZTogZmlsZSkge1xyXG4gICAgbGV0IGlzRGlyZWN0b3J5ID0gZmlsZS5pc0RpcmVjdG9yeTtcclxuICAgIGFwcGVuZENoaWxkcmVuKGZpbGUpO1xyXG4gICAgaWYgKGlzRGlyZWN0b3J5KSB7XHJcbiAgICAgICAgaGFuZGxlRGlyZWN0b3J5KGZpbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVTaXplT2ZBbGxQYXJlbnRzKGZpbGUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURpcmVjdG9yeShmaWxlOiBmaWxlKSB7XHJcbiAgICBmcC5yZWFkZGlyKGZpbGUucGF0aClcclxuICAgICAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUnVubmluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRGaWxlKHBhdGguam9pbihmaWxlLnBhdGgsIGl0ZW0pLCBmaWxlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUnVubmluZyhmbj86IGFueSkge1xyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSdW5uaW5nKys7XHJcbiAgICAgICAgICAgIGZuKClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVSdW5uaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnI6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudFJ1bm5pbmcgPCBMT0FESU5HX0xJTUlUKSB7XHJcbiAgICAgICAgICAgIHRhc2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2FkaW5nQXJyYXkucHVzaCh0YXNrKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRSdW5uaW5nLS07XHJcbiAgICAgICAgbGV0IHRhc2sgPSBsb2FkaW5nQXJyYXkuc2hpZnQoKTtcclxuICAgICAgICBpZiAodGFzaykge1xyXG4gICAgICAgICAgICB0YXNrKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4oZmlsZTogZmlsZSkge1xyXG4gICAgaWYgKGZpbGUucGFyZW50KVxyXG4gICAgICAgIHN0b3JlLmdldChmaWxlLnBhcmVudCkucHVzaChmaWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2l6ZU9mQWxsUGFyZW50cyhmaWxlOiBmaWxlKSB7XHJcbiAgICBsZXQgcGFyZW50OiBmaWxlID0gc3RvcmUuZ2V0KGZpbGUucGFyZW50LnBhdGgpO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIHBhcmVudC52YWx1ZSArPSBmaWxlLnZhbHVlO1xyXG4gICAgICAgIGlmIChwYXJlbnQucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHN0b3JlLmdldChwYXJlbnQucGFyZW50LnBhdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSB3aGlsZSAocGFyZW50KTtcclxuXHJcblxyXG4gICAgdHJlZW1hcCgpXHJcblxyXG59XHJcbiIsImxldCBzdG9yZSA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiaW1wb3J0IHsgY2NkMyBhcyBkMyB9IGZyb20gJ2NjdHMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmNvbnN0IFNJWkU6IFtudW1iZXIsIG51bWJlcl0gPSBbNTAwLCA1MDBdO1xyXG5cclxubGV0IENVUlJFTlRfREFUQTogYW55O1xyXG5sZXQgQ09OVEFJTkVSOiBzdHJpbmc7XHJcbmxldCBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIFRyZWVtYXAoKTtcclxufSk7XHJcblxyXG5cclxubGV0IHRyZWVtYXAgPSBkMy50cmVlbWFwKClcclxuICAgIC50aWxlKGQzLnRyZWVtYXBCaW5hcnkpXHJcbiAgICAucm91bmQodHJ1ZSlcclxuICAgIC5wYWRkaW5nSW5uZXIoNClcclxuICAgIC5wYWRkaW5nT3V0ZXIoNCk7XHJcblxyXG5cclxubGV0IFRyZWVtYXAgPSBmdW5jdGlvbiAoY29udGFpbmVyU2VsZWN0b3I/OiBzdHJpbmcsIGtleT86IHN0cmluZykge1xyXG4gICAgbGV0IHNjYW5VcGRhdGUgPSAhY29udGFpbmVyU2VsZWN0b3IgJiYgIWtleTtcclxuICAgIGlmIChpc1JlbmRlcmluZyAmJiBzY2FuVXBkYXRlKSByZXR1cm47XHJcblxyXG4gICAgaXNSZW5kZXJpbmcgPSB0cnVlO1xyXG4gICAgbGV0IG9yaWdpbmFsRGF0YSA9IHN0b3JlLmdldChrZXkgfHwgQ1VSUkVOVF9EQVRBLnBhdGgpO1xyXG4gICAgQ1VSUkVOVF9EQVRBID0gT2JqZWN0LmFzc2lnbih7fSwgc3RvcmUuZ2V0KGtleSB8fCBDVVJSRU5UX0RBVEEucGF0aCkpO1xyXG4gICAgY29udGFpbmVyU2VsZWN0b3IgPSBDT05UQUlORVIgPSBjb250YWluZXJTZWxlY3RvciB8fCBDT05UQUlORVI7XHJcblxyXG4gICAgLy8gZDMuc2VsZWN0QWxsKGNvbnRhaW5lclNlbGVjdG9yICsgJyAud2FycGVyJylcclxuICAgIC8vICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoY29udGFpbmVyU2VsZWN0b3IpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsIGByZWxhdGl2ZWApO1xyXG5cclxuICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIHRyZWVtYXAuc2l6ZShbd2lkdGgsIGhlaWdodF0pO1xyXG5cclxuICAgIENVUlJFTlRfREFUQS5fdmFsdWUgPSBDVVJSRU5UX0RBVEEudmFsdWU7XHJcbiAgICBDVVJSRU5UX0RBVEEudmFsdWUgPSAwO1xyXG4gICAgQ1VSUkVOVF9EQVRBLmNoaWxkcmVuID0gc3RvcmUuZ2V0KG9yaWdpbmFsRGF0YSk7XHJcblxyXG5cclxuICAgIGxldCByb290ID0gZDMuaGllcmFyY2h5KENVUlJFTlRfREFUQSk7XHJcblxyXG4gICAgcm9vdC5zdW0oZnVuY3Rpb24gKGQ6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBkLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdHJlZW1hcChyb290KTtcclxuXHJcbiAgICBsZXQgdHJlZURhdGE6IHsgZGF0YTogYW55IH1bXSA9IHJvb3QuZGVzY2VuZGFudHMoKTtcclxuXHJcbiAgICBkMy5zZWxlY3QoJyNiYWNrJylcclxuICAgICAgICAudGV4dChwYXRoLm5vcm1hbGl6ZSh0cmVlRGF0YVswXS5kYXRhLnBhdGgpICsgJyAoJyArIG51bWJlclRvQnl0ZXModHJlZURhdGFbMF0uZGF0YS5fdmFsdWUpICsgJyknKVxyXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmVlRGF0YVswXS5kYXRhLnBhcmVudClcclxuICAgICAgICAgICAgICAgIFRyZWVtYXAoY29udGFpbmVyU2VsZWN0b3IsIHRyZWVEYXRhWzBdLmRhdGEucGFyZW50LnBhdGgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHN2Zy5zZWxlY3RBbGwoJy53YXJwZXInKVxyXG4gICAgICAgIC5kYXRhKHRyZWVEYXRhKVxyXG4gICAgICAgIC5leGl0KClcclxuICAgICAgICAucmVtb3ZlKCk7XHJcblxyXG4gICAgc3ZnLnNlbGVjdEFsbCgnLndhcnBlcicpXHJcbiAgICAgICAgLmRhdGEodHJlZURhdGEpXHJcbiAgICAgICAgLmVudGVyKClcclxuICAgICAgICAvLyBXYXJwZXJcclxuICAgICAgICAuYXBwZW5kKCdkaXYnKVxyXG4gICAgICAgIC5jbGFzc2VkKCd3YXJwZXInLCB0cnVlKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQ6IGFueSkgeyByZXR1cm4gYHRyYW5zbGF0ZSgkeyhkLngwKX1weCwgJHsoZC55MCl9cHgpYCB9KVxyXG4gICAgICAgIC5zdHlsZSgnd2lkdGgnLCAwKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgMClcclxuICAgICAgICAvLyBDb250ZW50IGNvbnRhaW5lclxyXG4gICAgICAgIC5hcHBlbmQoJ2RpdicpXHJcbiAgICAgICAgLmNsYXNzZWQoJ2NvbnRlbnQtY29udGFpbmVyJywgdHJ1ZSlcclxuICAgICAgICAvLyBQYXRoXHJcbiAgICAgICAgLmFwcGVuZCgnaGVhZGVyJylcclxuICAgICAgICAuY2xhc3NlZCgndGl0bGUnLCB0cnVlKVxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC8vIENoaWxkcmVuIGNvbnRlbnRzXHJcbiAgICAgICAgLmFwcGVuZCgnZGl2JylcclxuICAgICAgICAuY2xhc3NlZCgnY2hpbGRyZW4tY29udGFpbmVyJywgdHJ1ZSk7XHJcblxyXG4gICAgbGV0IHdhcnBlcnMgPSBzdmcuc2VsZWN0QWxsKCcud2FycGVyJylcclxuXHJcbiAgICAgICAgLmNsYXNzZWQoJ2ZpbGUnLCBmdW5jdGlvbiAoZDogeyBkYXRhOiBhbnkgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gIWQuZGF0YS5pc0RpcmVjdG9yeTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jbGFzc2VkKCdjaGlsZCcsIGZ1bmN0aW9uIChkOiB7IGRhdGE6IGFueSB9LCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkLmRhdGEuaXNEaXJlY3RvcnkgJiYgaSA+IDA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cignaWQnLCBmdW5jdGlvbiAoZDogeyBkYXRhOiBhbnkgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYGZfYCArIHN0cmluZ1RvQXNjaWkoZC5kYXRhLnBhdGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uIChkOiB7IGRhdGE6IGFueSB9LCBpKSB7XHJcbiAgICAgICAgICAgIGlmICghZC5kYXRhLmlzRGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBUcmVlbWFwKGNvbnRhaW5lclNlbGVjdG9yLCBkLmRhdGEucGF0aCk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgd2FycGVycy5zZWxlY3QoJ2hlYWRlcicpXHJcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQ6IHsgZGF0YTogYW55IH0sIGkpIHtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBpID09PSAwID8gJycgOiBkLmRhdGEubmFtZSArICcgKCcgKyBudW1iZXJUb0J5dGVzKGQuZGF0YS52YWx1ZSkgKyAnKSc7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgaWYgKHNjYW5VcGRhdGUpIHtcclxuICAgICAgICB3YXJwZXJzXHJcbiAgICAgICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQ6IGFueSkgeyByZXR1cm4gYHRyYW5zbGF0ZSgkeyhkLngwKX1weCwgJHsoZC55MCl9cHgpYCB9KVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgZnVuY3Rpb24gKGQ6IGFueSkgeyByZXR1cm4gKGQueDEgLSBkLngwKSArICdweCc7IH0pXHJcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgZnVuY3Rpb24gKGQ6IGFueSkgeyByZXR1cm4gKGQueTEgLSBkLnkwKSArICdweCc7IH0pXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlzUmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMjApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdhcnBlcnNcclxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgICAuZGVsYXkoKGQ6IGFueSwgaTogbnVtYmVyKSA9PiBpICogMTApXHJcbiAgICAgICAgICAgIC5kdXJhdGlvbig1MClcclxuICAgICAgICAgICAgLmVuZCgpXHJcbiAgICAgICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQ6IGFueSkgeyByZXR1cm4gYHRyYW5zbGF0ZSgkeyhkLngwKX1weCwgJHsoZC55MCl9cHgpYCB9KVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgZnVuY3Rpb24gKGQ6IGFueSkgeyByZXR1cm4gKGQueDEgLSBkLngwKSArICdweCc7IH0pXHJcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgZnVuY3Rpb24gKGQ6IGFueSkgeyByZXR1cm4gKGQueTEgLSBkLnkwKSArICdweCc7IH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5UUChweDogbnVtYmVyKSB7XHJcbiAgICAvL3JldHVybiBweDtcclxuICAgIHJldHVybiBweCAqIDEwMCAvIFNJWkVbMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvQXNjaWkoc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoY2hhcikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhci5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoY3VycmVudCwgcHJldmlvdXMpOiBhbnkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyAnJyArIGN1cnJlbnQ7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG51bWJlclRvQnl0ZXMobnVtYmVyOiBudW1iZXIpIHtcclxuICAgIGlmIChudW1iZXIgPT09IDApIHJldHVybiAnMCBCeXRlcyc7XHJcblxyXG4gICAgY29uc3QgayA9IDEwMjQ7XHJcbiAgICBjb25zdCBkbSA9IDI7XHJcbiAgICBjb25zdCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcclxuXHJcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhudW1iZXIpIC8gTWF0aC5sb2coaykpO1xyXG5cclxuICAgIHJldHVybiBwYXJzZUZsb2F0KChudW1iZXIgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChkbSkpICsgJyAnICsgc2l6ZXNbaV07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWVtYXA7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
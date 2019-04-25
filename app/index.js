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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
var ROOT = __dirname;
var DEBUG = process.execPath.includes('electron.exe');
global['ROOT'] = ROOT;
electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('ready', function () {
    if (DEBUG) {
        electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"].addDevToolsExtension(Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(ROOT, '..', 'node_modules', 'vue-devtools', 'vender'));
    }
    var w = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
        frame: false,
        fullscreen: true,
        transparent: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    var html = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(ROOT, './index.html');
    w.loadFile(html);
    w.on('close', electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit.bind(electron__WEBPACK_IMPORTED_MODULE_0__["app"]));
    if (DEBUG) {
        w.webContents.openDevTools();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxVQUFVLENBQUE7QUFDL0QsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQTtBQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFHLEdBQUcsQ0FBQTtBQUVwRCxJQUFNLElBQUksR0FBRyxTQUFTLENBQUE7QUFDdEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQTtBQUVyQixHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNkLElBQUcsS0FBSyxFQUFDO1FBQ1AsYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtLQUM3RjtJQUNELElBQU0sQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFDO1FBQzFCLEtBQUssRUFBQyxLQUFLO1FBQ1gsVUFBVSxFQUFDLElBQUk7UUFDZixXQUFXLEVBQUMsSUFBSTtRQUNoQixXQUFXLEVBQUMsSUFBSTtRQUNoQixjQUFjLEVBQUM7WUFDYixlQUFlLEVBQUMsSUFBSTtTQUNyQjtLQUNGLENBQUMsQ0FBQTtJQUNGLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUMsY0FBYyxDQUFDLENBQUE7SUFDdEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ2pDLElBQUcsS0FBSyxFQUFDO1FBQ1AsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtLQUM3QjtBQUNILENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHAsIEJyb3dzZXJXaW5kb3csIEJyb3dzZXJXaW5kb3dQcm94eX0gZnJvbSAnZWxlY3Ryb24nXHJcbmltcG9ydCB7am9pbn0gZnJvbSAncGF0aCdcclxuXHJcbnByb2Nlc3MuZW52LkVMRUNUUk9OX0RJU0FCTEVfU0VDVVJJVFlfV0FSTklOR1MgPSAnMSdcclxuXHJcbmNvbnN0IFJPT1QgPSBfX2Rpcm5hbWVcclxuY29uc3QgREVCVUcgPSBwcm9jZXNzLmV4ZWNQYXRoLmluY2x1ZGVzKCdlbGVjdHJvbi5leGUnKVxyXG5nbG9iYWxbJ1JPT1QnXSA9IFJPT1RcclxuXHJcbmFwcC5vbigncmVhZHknLCAoKT0+e1xyXG4gIGlmKERFQlVHKXtcclxuICAgIEJyb3dzZXJXaW5kb3cuYWRkRGV2VG9vbHNFeHRlbnNpb24oam9pbihST09ULCcuLicsICdub2RlX21vZHVsZXMnLCAndnVlLWRldnRvb2xzJywndmVuZGVyJykpXHJcbiAgfVxyXG4gIGNvbnN0IHcgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICBmcmFtZTpmYWxzZSxcclxuICAgIGZ1bGxzY3JlZW46dHJ1ZSxcclxuICAgIHRyYW5zcGFyZW50OnRydWUsXHJcbiAgICBhbHdheXNPblRvcDp0cnVlLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6e1xyXG4gICAgICBub2RlSW50ZWdyYXRpb246dHJ1ZVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgaHRtbCA9IGpvaW4oUk9PVCwnLi9pbmRleC5odG1sJylcclxuICB3LmxvYWRGaWxlKGh0bWwpXHJcbiAgdy5vbignY2xvc2UnLCBhcHAucXVpdC5iaW5kKGFwcCkpXHJcbiAgaWYoREVCVUcpe1xyXG4gICAgdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKVxyXG4gIH1cclxufSkiXX0=

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QztBQUNsQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUFHO0FBQ0g7QUFDQSxRQUFRLHNEQUFhLHNCQUFzQixpREFBSTtBQUMvQztBQUNBLGdCQUFnQixzREFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLGlEQUFJO0FBQ25CO0FBQ0Esa0JBQWtCLDRDQUFHLFdBQVcsNENBQUc7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDJDQUEyQyxtMUU7Ozs7Ozs7Ozs7O0FDMUIzQyxxQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbnByb2Nlc3MuZW52LkVMRUNUUk9OX0RJU0FCTEVfU0VDVVJJVFlfV0FSTklOR1MgPSAnMSc7XHJcbnZhciBST09UID0gX19kaXJuYW1lO1xyXG52YXIgREVCVUcgPSBwcm9jZXNzLmV4ZWNQYXRoLmluY2x1ZGVzKCdlbGVjdHJvbi5leGUnKTtcclxuZ2xvYmFsWydST09UJ10gPSBST09UO1xyXG5hcHAub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgICAgQnJvd3NlcldpbmRvdy5hZGREZXZUb29sc0V4dGVuc2lvbihqb2luKFJPT1QsICcuLicsICdub2RlX21vZHVsZXMnLCAndnVlLWRldnRvb2xzJywgJ3ZlbmRlcicpKTtcclxuICAgIH1cclxuICAgIHZhciB3ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgICAgIGZyYW1lOiBmYWxzZSxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgIGFsd2F5c09uVG9wOiB0cnVlLFxyXG4gICAgICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIGh0bWwgPSBqb2luKFJPT1QsICcuL2luZGV4Lmh0bWwnKTtcclxuICAgIHcubG9hZEZpbGUoaHRtbCk7XHJcbiAgICB3Lm9uKCdjbG9zZScsIGFwcC5xdWl0LmJpbmQoYXBwKSk7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgICB3LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xyXG4gICAgfVxyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFVTXNSMEZCUnl4RlFVRkZMR0ZCUVdFc1JVRkJjVUlzVFVGQlRTeFZRVUZWTEVOQlFVRTdRVUZETDBRc1QwRkJUeXhGUVVGRExFbEJRVWtzUlVGQlF5eE5RVUZOTEUxQlFVMHNRMEZCUVR0QlFVVjZRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEd0RFFVRnJReXhIUVVGSExFZEJRVWNzUTBGQlFUdEJRVVZ3UkN4SlFVRk5MRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVUU3UVVGRGRFSXNTVUZCVFN4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVFN1FVRkRka1FzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRVHRCUVVWeVFpeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSVHRKUVVOa0xFbEJRVWNzUzBGQlN5eEZRVUZETzFGQlExQXNZVUZCWVN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVNc1NVRkJTU3hGUVVGRkxHTkJRV01zUlVGQlJTeGpRVUZqTEVWQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRVHRMUVVNM1JqdEpRVU5FTEVsQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1lVRkJZU3hEUVVGRE8xRkJRekZDTEV0QlFVc3NSVUZCUXl4TFFVRkxPMUZCUTFnc1ZVRkJWU3hGUVVGRExFbEJRVWs3VVVGRFppeFhRVUZYTEVWQlFVTXNTVUZCU1R0UlFVTm9RaXhYUVVGWExFVkJRVU1zU1VGQlNUdFJRVU5vUWl4alFVRmpMRVZCUVVNN1dVRkRZaXhsUVVGbExFVkJRVU1zU1VGQlNUdFRRVU55UWp0TFFVTkdMRU5CUVVNc1EwRkJRVHRKUVVOR0xFbEJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVNc1kwRkJZeXhEUVVGRExFTkJRVUU3U1VGRGRFTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUdEpRVU5vUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZCTzBsQlEycERMRWxCUVVjc1MwRkJTeXhGUVVGRE8xRkJRMUFzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRVHRMUVVNM1FqdEJRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkJJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRoY0hBc0lFSnliM2R6WlhKWGFXNWtiM2NzSUVKeWIzZHpaWEpYYVc1a2IzZFFjbTk0ZVgwZ1puSnZiU0FuWld4bFkzUnliMjRuWEhKY2JtbHRjRzl5ZENCN2FtOXBibjBnWm5KdmJTQW5jR0YwYUNkY2NseHVYSEpjYm5CeWIyTmxjM011Wlc1MkxrVk1SVU5VVWs5T1gwUkpVMEZDVEVWZlUwVkRWVkpKVkZsZlYwRlNUa2xPUjFNZ1BTQW5NU2RjY2x4dVhISmNibU52Ym5OMElGSlBUMVFnUFNCZlgyUnBjbTVoYldWY2NseHVZMjl1YzNRZ1JFVkNWVWNnUFNCd2NtOWpaWE56TG1WNFpXTlFZWFJvTG1sdVkyeDFaR1Z6S0NkbGJHVmpkSEp2Ymk1bGVHVW5LVnh5WEc1bmJHOWlZV3hiSjFKUFQxUW5YU0E5SUZKUFQxUmNjbHh1WEhKY2JtRndjQzV2YmlnbmNtVmhaSGtuTENBb0tUMCtlMXh5WEc0Z0lHbG1LRVJGUWxWSEtYdGNjbHh1SUNBZ0lFSnliM2R6WlhKWGFXNWtiM2N1WVdSa1JHVjJWRzl2YkhORmVIUmxibk5wYjI0b2FtOXBiaWhTVDA5VUxDY3VMaWNzSUNkdWIyUmxYMjF2WkhWc1pYTW5MQ0FuZG5WbExXUmxkblJ2YjJ4ekp5d25kbVZ1WkdWeUp5a3BYSEpjYmlBZ2ZWeHlYRzRnSUdOdmJuTjBJSGNnUFNCdVpYY2dRbkp2ZDNObGNsZHBibVJ2ZHloN1hISmNiaUFnSUNCbWNtRnRaVHBtWVd4elpTeGNjbHh1SUNBZ0lHWjFiR3h6WTNKbFpXNDZkSEoxWlN4Y2NseHVJQ0FnSUhSeVlXNXpjR0Z5Wlc1ME9uUnlkV1VzWEhKY2JpQWdJQ0JoYkhkaGVYTlBibFJ2Y0RwMGNuVmxMRnh5WEc0Z0lDQWdkMlZpVUhKbFptVnlaVzVqWlhNNmUxeHlYRzRnSUNBZ0lDQnViMlJsU1c1MFpXZHlZWFJwYjI0NmRISjFaVnh5WEc0Z0lDQWdmVnh5WEc0Z0lIMHBYSEpjYmlBZ1kyOXVjM1FnYUhSdGJDQTlJR3B2YVc0b1VrOVBWQ3duTGk5cGJtUmxlQzVvZEcxc0p5bGNjbHh1SUNCM0xteHZZV1JHYVd4bEtHaDBiV3dwWEhKY2JpQWdkeTV2YmlnblkyeHZjMlVuTENCaGNIQXVjWFZwZEM1aWFXNWtLR0Z3Y0NrcFhISmNiaUFnYVdZb1JFVkNWVWNwZTF4eVhHNGdJQ0FnZHk1M1pXSkRiMjUwWlc1MGN5NXZjR1Z1UkdWMlZHOXZiSE1vS1Z4eVhHNGdJSDFjY2x4dWZTa2lYWDA9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
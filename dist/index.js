module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ({

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 文件下载通知命令
 *
 * @file src/downloader/dispatcher.js
 * @author mudio(job.zhanghao@gmail.com)
 */

const NotifyProgress = exports.NotifyProgress = 'download_notify_progress';
const NotifyPaused = exports.NotifyPaused = 'download_notify_pause';
const NotifyFinished = exports.NotifyFinished = 'download_notify_finish';
const NotifyError = exports.NotifyError = 'download_notify_error';
const NotifyStart = exports.NotifyStart = 'download_notify_start';

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 文件下载通知命令
 *
 * @file src/uploader/dispatcher.js
 * @author mudio(job.zhanghao@gmail.com)
 */

const NotifyPaused = exports.NotifyPaused = 'upload_notify_pause';
const NotifyFinished = exports.NotifyFinished = 'upload_notify_finish';
const NotifyError = exports.NotifyError = 'upload_notify_error';
const NotifyStart = exports.NotifyStart = 'upload_notify_start';
const NotifyProgress = exports.NotifyProgress = 'upload_notify_progress';

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(74);

Object.defineProperty(exports, 'UploadCommand', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_command).default;
  }
});

var _command2 = __webpack_require__(73);

Object.defineProperty(exports, 'DownloadCommand', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_command2).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
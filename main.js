/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #0a0a0f;\n    touch-action: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\ncanvas#canvas {\n    display: block;\n}\n\n#touch-ui {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    z-index: 1000;\n}\n\n#joystick-zone {\n    position: absolute;\n    bottom: 30px;\n    left: 20px;\n    width: 140px;\n    height: 140px;\n    background: rgba(255, 255, 255, 0.12);\n    border: 3px solid rgba(255, 255, 255, 0.35);\n    border-radius: 50%;\n    pointer-events: auto;\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n}\n\n#joystick-knob {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 50px;\n    height: 50px;\n    background: rgba(255, 255, 255, 0.45);\n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n    border: 2px solid rgba(255, 255, 255, 0.6);\n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);\n}\n\n#attack-buttons {\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 6px;\n    width: 200px;\n    height: 100px;\n    pointer-events: auto;\n}\n\n.attack-btn {\n    background: rgba(255, 255, 255, 0.1);\n    border: 2px solid rgba(255, 255, 255, 0.3);\n    border-radius: 12px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n    transition: transform 0.1s, filter 0.1s;\n}\n\n.attack-btn:hover {\n    filter: brightness(1.3);\n}\n\n.attack-btn.active {\n    transform: scale(0.9);\n    filter: brightness(1.5);\n}\n\n/* HUD - esquina superior izquierda */\n#hud {\n    position: fixed;\n    top: 10px;\n    left: 10px;\n    pointer-events: none;\n    z-index: 500;\n}\n\n/* Minimapa - esquina superior derecha */\n#minimap {\n    position: fixed;\n    top: 10px;\n    right: 10px;\n    width: 80px;\n    height: 60px;\n    background: rgba(0, 0, 0, 0.7);\n    border: 2px solid rgba(255, 255, 255, 0.3);\n    border-radius: 6px;\n    pointer-events: none;\n    z-index: 500;\n    overflow: hidden;\n}\n\n#minimap canvas {\n    width: 100%;\n    height: 100%;\n}\n\n/* Botón de pausa */\n#pause-btn {\n    position: fixed;\n    top: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 40px;\n    height: 40px;\n    background: rgba(0, 0, 0, 0.7);\n    border: 2px solid rgba(255, 255, 255, 0.3);\n    border-radius: 50%;\n    color: #fff;\n    font-size: 18px;\n    pointer-events: auto;\n    z-index: 500;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#pause-btn:active {\n    transform: translateX(-50%) scale(0.9);\n}\n\n/* Game Over */\n#game-over {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.85);\n    display: none;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    z-index: 2000;\n}\n\n#game-over.active {\n    display: flex;\n}\n\n#game-over h1 {\n    color: #e74c3c;\n    font-size: 36px;\n    margin-bottom: 10px;\n}\n\n#game-over p {\n    color: #fff;\n    margin-bottom: 20px;\n    font-size: 16px;\n}\n\n#restart-btn {\n    padding: 12px 24px;\n    background: #e74c3c;\n    color: #fff;\n    border: none;\n    border-radius: 8px;\n    font-size: 18px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n#restart-btn:hover {\n    background: #c0392b;\n}\n\n@media (min-width: 768px) {\n    #touch-ui {\n        display: none;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,wCAAwC;AAC5C;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,2BAA2B;IAC3B,yBAAyB;IACzB,iBAAiB;IACjB,4DAA4D;AAChE;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,2CAA2C;IAC3C,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;IAC1B,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,kBAAkB;IAClB,gCAAgC;IAChC,0CAA0C;IAC1C,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;IACpC,0CAA0C;IAC1C,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,0BAA0B;IAC1B,kCAAkC;IAClC,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA,qCAAqC;AACrC;IACI,eAAe;IACf,SAAS;IACT,UAAU;IACV,oBAAoB;IACpB,YAAY;AAChB;;AAEA,wCAAwC;AACxC;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,0CAA0C;IAC1C,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,mBAAmB;AACnB;IACI,eAAe;IACf,SAAS;IACT,SAAS;IACT,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,0CAA0C;IAC1C,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,oBAAoB;IACpB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,sCAAsC;AAC1C;;AAEA,cAAc;AACd;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI;QACI,aAAa;IACjB;AACJ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #0a0a0f;\n    touch-action: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\ncanvas#canvas {\n    display: block;\n}\n\n#touch-ui {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    z-index: 1000;\n}\n\n#joystick-zone {\n    position: absolute;\n    bottom: 30px;\n    left: 20px;\n    width: 140px;\n    height: 140px;\n    background: rgba(255, 255, 255, 0.12);\n    border: 3px solid rgba(255, 255, 255, 0.35);\n    border-radius: 50%;\n    pointer-events: auto;\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n}\n\n#joystick-knob {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 50px;\n    height: 50px;\n    background: rgba(255, 255, 255, 0.45);\n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n    border: 2px solid rgba(255, 255, 255, 0.6);\n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);\n}\n\n#attack-buttons {\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 6px;\n    width: 200px;\n    height: 100px;\n    pointer-events: auto;\n}\n\n.attack-btn {\n    background: rgba(255, 255, 255, 0.1);\n    border: 2px solid rgba(255, 255, 255, 0.3);\n    border-radius: 12px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n    transition: transform 0.1s, filter 0.1s;\n}\n\n.attack-btn:hover {\n    filter: brightness(1.3);\n}\n\n.attack-btn.active {\n    transform: scale(0.9);\n    filter: brightness(1.5);\n}\n\n/* HUD - esquina superior izquierda */\n#hud {\n    position: fixed;\n    top: 10px;\n    left: 10px;\n    pointer-events: none;\n    z-index: 500;\n}\n\n/* Minimapa - esquina superior derecha */\n#minimap {\n    position: fixed;\n    top: 10px;\n    right: 10px;\n    width: 80px;\n    height: 60px;\n    background: rgba(0, 0, 0, 0.7);\n    border: 2px solid rgba(255, 255, 255, 0.3);\n    border-radius: 6px;\n    pointer-events: none;\n    z-index: 500;\n    overflow: hidden;\n}\n\n#minimap canvas {\n    width: 100%;\n    height: 100%;\n}\n\n/* Botón de pausa */\n#pause-btn {\n    position: fixed;\n    top: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 40px;\n    height: 40px;\n    background: rgba(0, 0, 0, 0.7);\n    border: 2px solid rgba(255, 255, 255, 0.3);\n    border-radius: 50%;\n    color: #fff;\n    font-size: 18px;\n    pointer-events: auto;\n    z-index: 500;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#pause-btn:active {\n    transform: translateX(-50%) scale(0.9);\n}\n\n/* Game Over */\n#game-over {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.85);\n    display: none;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    z-index: 2000;\n}\n\n#game-over.active {\n    display: flex;\n}\n\n#game-over h1 {\n    color: #e74c3c;\n    font-size: 36px;\n    margin-bottom: 10px;\n}\n\n#game-over p {\n    color: #fff;\n    margin-bottom: 20px;\n    font-size: 16px;\n}\n\n#restart-btn {\n    padding: 12px 24px;\n    background: #e74c3c;\n    color: #fff;\n    border: none;\n    border-radius: 8px;\n    font-size: 18px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n#restart-btn:hover {\n    background: #c0392b;\n}\n\n@media (min-width: 768px) {\n    #touch-ui {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/img/main_char_sprite.png":
/*!**************************************!*\
  !*** ./src/img/main_char_sprite.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3fe79a67eb3940203df992b285552c3e.png");

/***/ }),

/***/ "./src/img/mushroom_boss.png":
/*!***********************************!*\
  !*** ./src/img/mushroom_boss.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d5f8ddf1940ff25afb89f2923f3a081e.png");

/***/ }),

/***/ "./src/img/november.png":
/*!******************************!*\
  !*** ./src/img/november.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "51679299555ef69139001b59675241e3.png");

/***/ }),

/***/ "./src/img/november_foreground.png":
/*!*****************************************!*\
  !*** ./src/img/november_foreground.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7a7e5731f69a84918cf86370646366ff.png");

/***/ }),

/***/ "./src/types/index.d.ts":
/*!******************************!*\
  !*** ./src/types/index.d.ts ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/attacks/attackList/ShadowStep.ts":
/*!**********************************************!*\
  !*** ./src/attacks/attackList/ShadowStep.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShadowStep": () => (/* binding */ ShadowStep)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ShadowStep = /** @class */ (function (_super) {
    __extends(ShadowStep, _super);
    function ShadowStep() {
        return _super.call(this, {
            name: "Shadow Step",
            damage: 0,
            heal: 0,
            type: "shadow",
            range: 1000,
            cost: 10,
            accuracy: 0.8,
            cooldown: 2,
            description: "",
            effects: [],
        }) || this;
    }
    ShadowStep.prototype.activate = function (user, target) {
        user
            .reduceMana(this.cost);
        var step = 100;
        user.position = {
            x: user.position.x + (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(-step, step),
            y: user.position.y + (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(-step, step)
        };
        return this;
    };
    ShadowStep.prototype.render = function (user, target, ctx) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        for (var i = 0; i < 100; i++) {
            var x = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.position.x, user.position.x + user.width);
            var y = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.position.y, user.position.y + user.height);
            var w = 1;
            var h = 20;
            ctx.fillRect(x, y, w, h);
        }
        return this;
    };
    return ShadowStep;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/attackList/citricHealing.ts":
/*!*************************************************!*\
  !*** ./src/attacks/attackList/citricHealing.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitricHealing": () => (/* binding */ CitricHealing)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CitricHealing = /** @class */ (function (_super) {
    __extends(CitricHealing, _super);
    function CitricHealing() {
        return _super.call(this, {
            name: "Citric Healing",
            damage: 0,
            heal: 10,
            type: "grass",
            range: 1000,
            cost: 50,
            accuracy: 0.8,
            cooldown: 2,
            description: "",
            effects: [],
        }) || this;
    }
    CitricHealing.prototype.activate = function (user, target) {
        user
            .heal(this.heal)
            .reduceMana(this.cost);
        return this;
    };
    CitricHealing.prototype.render = function (user, target, ctx) {
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.width - 20, user.width);
        ctx.strokeStyle = "rgba(250, 251, 240, 0.8)";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(user.position.x + user.width / 2, user.position.y + user.height / 2, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        return this;
    };
    return CitricHealing;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/attackList/newAttacks.ts":
/*!**********************************************!*\
  !*** ./src/attacks/attackList/newAttacks.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fireball": () => (/* binding */ Fireball),
/* harmony export */   "Heal": () => (/* binding */ Heal),
/* harmony export */   "IceShard": () => (/* binding */ IceShard),
/* harmony export */   "LightningBolt": () => (/* binding */ LightningBolt),
/* harmony export */   "PoisonSting": () => (/* binding */ PoisonSting),
/* harmony export */   "ThunderStorm": () => (/* binding */ ThunderStorm)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Fireball = /** @class */ (function (_super) {
    __extends(Fireball, _super);
    function Fireball() {
        return _super.call(this, {
            name: "Fireball",
            damage: 80,
            type: "fire",
            range: 200,
            cost: 30,
            accuracy: 0.9,
            cooldown: 3,
            description: "A blazing ball of fire",
            effects: [],
        }) || this;
    }
    Fireball.prototype.activate = function (user, target) {
        var damage = (user.magik / target.immunity) * this.damage;
        target.takeDamage(damage);
        user.reduceMana(this.cost);
        return this;
    };
    Fireball.prototype.render = function (user, target, ctx) {
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(10, 30);
        ctx.fillStyle = "rgba(255, 100, 0, 0.7)";
        ctx.beginPath();
        ctx.arc(target.position.x + target.width / 2, target.position.y + target.height / 2, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return this;
    };
    return Fireball;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));

var IceShard = /** @class */ (function (_super) {
    __extends(IceShard, _super);
    function IceShard() {
        return _super.call(this, {
            name: "Ice Shard",
            damage: 40,
            type: "ice",
            range: 150,
            cost: 20,
            accuracy: 0.95,
            cooldown: 1,
            description: "Sharp ice projectile",
            effects: [],
        }) || this;
    }
    IceShard.prototype.activate = function (user, target) {
        var damage = (user.magik / target.immunity) * this.damage;
        target.takeDamage(damage);
        user.reduceMana(this.cost);
        return this;
    };
    IceShard.prototype.render = function (user, target, ctx) {
        ctx.strokeStyle = "rgba(100, 200, 255, 0.8)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(user.position.x + user.width / 2, user.position.y + user.height / 2);
        ctx.lineTo(target.position.x + target.width / 2, target.position.y + target.height / 2);
        ctx.stroke();
        return this;
    };
    return IceShard;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));

var Heal = /** @class */ (function (_super) {
    __extends(Heal, _super);
    function Heal() {
        return _super.call(this, {
            name: "Heal",
            damage: 0,
            heal: 100,
            type: "holy",
            range: 0,
            cost: 40,
            accuracy: 1,
            cooldown: 5,
            description: "Restore HP",
            effects: [],
        }) || this;
    }
    Heal.prototype.activate = function (user, target) {
        user.heal(this.heal);
        user.reduceMana(this.cost);
        return this;
    };
    Heal.prototype.render = function (user, target, ctx) {
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(20, 50);
        ctx.strokeStyle = "rgba(100, 255, 100, 0.8)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(user.position.x + user.width / 2, user.position.y + user.height / 2, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        return this;
    };
    return Heal;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));

var LightningBolt = /** @class */ (function (_super) {
    __extends(LightningBolt, _super);
    function LightningBolt() {
        return _super.call(this, {
            name: "Lightning Bolt",
            damage: 120,
            type: "electric",
            range: 250,
            cost: 60,
            accuracy: 0.85,
            cooldown: 4,
            description: "A powerful lightning strike",
            effects: [],
        }) || this;
    }
    LightningBolt.prototype.activate = function (user, target) {
        var damage = (user.magik / target.immunity) * this.damage;
        target.takeDamage(damage);
        user.reduceMana(this.cost);
        return this;
    };
    LightningBolt.prototype.render = function (user, target, ctx) {
        ctx.strokeStyle = "rgba(255, 255, 0, 0.9)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(user.position.x + user.width / 2, user.position.y + user.height / 2);
        for (var i = 0; i < 5; i++) {
            var x = user.position.x + (target.position.x - user.position.x) * (i / 5) + (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(-30, 30);
            var y = user.position.y + (target.position.y - user.position.y) * (i / 5) + (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(-30, 30);
            ctx.lineTo(x, y);
        }
        ctx.lineTo(target.position.x + target.width / 2, target.position.y + target.height / 2);
        ctx.stroke();
        return this;
    };
    return LightningBolt;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));

var PoisonSting = /** @class */ (function (_super) {
    __extends(PoisonSting, _super);
    function PoisonSting() {
        return _super.call(this, {
            name: "Poison Sting",
            damage: 30,
            type: "poison",
            range: 100,
            cost: 15,
            accuracy: 0.9,
            cooldown: 2,
            description: "A toxic stab",
            effects: [],
        }) || this;
    }
    PoisonSting.prototype.activate = function (user, target) {
        var damage = (user.muscle / target.armour) * this.damage;
        target.takeDamage(damage);
        user.reduceMana(this.cost);
        return this;
    };
    PoisonSting.prototype.render = function (user, target, ctx) {
        ctx.fillStyle = "rgba(0, 200, 0, 0.6)";
        for (var i = 0; i < 8; i++) {
            var x = target.position.x + (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(0, target.width);
            var y = target.position.y + (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(0, target.height);
            ctx.beginPath();
            ctx.arc(x, y, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(3, 8), 0, 2 * Math.PI);
            ctx.fill();
        }
        return this;
    };
    return PoisonSting;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));

var ThunderStorm = /** @class */ (function (_super) {
    __extends(ThunderStorm, _super);
    function ThunderStorm() {
        return _super.call(this, {
            name: "Thunder Storm",
            damage: 150,
            type: "electric",
            range: 300,
            cost: 80,
            accuracy: 0.75,
            cooldown: 6,
            description: "Massive lightning damage",
            effects: [],
        }) || this;
    }
    ThunderStorm.prototype.activate = function (user, target) {
        var damage = (user.magik / target.immunity) * this.damage;
        target.takeDamage(damage);
        user.reduceMana(this.cost);
        return this;
    };
    ThunderStorm.prototype.render = function (user, target, ctx) {
        ctx.strokeStyle = "rgba(255, 255, 100, 0.9)";
        ctx.lineWidth = 5;
        for (var i = 0; i < 8; i++) {
            ctx.beginPath();
            var startX = target.position.x + (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(0, target.width);
            var startY = target.position.y - 50;
            ctx.moveTo(startX, startY);
            ctx.lineTo(startX + (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(-40, 40), target.position.y + target.height);
            ctx.stroke();
        }
        return this;
    };
    return ThunderStorm;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/attackList/photonBeam.ts":
/*!**********************************************!*\
  !*** ./src/attacks/attackList/photonBeam.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotonBeam": () => (/* binding */ PhotonBeam)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PhotonBeam = /** @class */ (function (_super) {
    __extends(PhotonBeam, _super);
    function PhotonBeam() {
        return _super.call(this, {
            name: "Photon Beam",
            damage: 50,
            heal: 0,
            type: "grass",
            range: 50,
            cost: 50,
            accuracy: 0.8,
            cooldown: 2,
            description: "",
            effects: [],
        }) || this;
    }
    PhotonBeam.prototype.activate = function (user, target) {
        var damage = (user.magik / target.immunity) * this.damage;
        target.takeDamage(damage);
        user.reduceMana(this.cost);
        return this;
    };
    PhotonBeam.prototype.render = function (user, target, ctx) {
        ctx.fillStyle = "rgba(158, 25, 8, 0.8)";
        for (var i = 0; i < 100; i++) {
            var x = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.position.x - 50, user.position.x - 500);
            var y = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.position.y, user.position.y + user.height);
            var w = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(20, 100);
            var h = 5;
            var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(240, 255);
            var g = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(240, 255);
            var b = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(240, 255);
            var a = Math.random();
            ctx.fillStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
            ctx.fillRect(x, y, w, h);
        }
        return this;
    };
    return PhotonBeam;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/attackList/softGrass.ts":
/*!*********************************************!*\
  !*** ./src/attacks/attackList/softGrass.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoftGrass": () => (/* binding */ SoftGrass)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SoftGrass = /** @class */ (function (_super) {
    __extends(SoftGrass, _super);
    function SoftGrass() {
        return _super.call(this, {
            name: "Soft Grass",
            damage: 10,
            type: "grass",
            range: 16,
            cost: 20,
            accuracy: 0.8,
            cooldown: 2,
            description: "",
            effects: [],
        }) || this;
    }
    SoftGrass.prototype.activate = function (user, target) {
        var damage = (user.magik / target.immunity) * this.damage;
        target.takeDamage(damage);
        user
            .heal(Math.floor(damage / 2))
            .reduceMana(this.cost);
        return this;
    };
    SoftGrass.prototype.render = function (user, target, ctx) {
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.width / 16, user.width);
        ctx.fillStyle = "rgba(8, 168, 86, 0.5)";
        ctx.beginPath();
        ctx.arc(user.position.x + user.width / 2, user.position.y + user.height / 2, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return this;
    };
    return SoftGrass;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/attackList/toxicDrain.ts":
/*!**********************************************!*\
  !*** ./src/attacks/attackList/toxicDrain.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToxicDrain": () => (/* binding */ ToxicDrain)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ToxicDrain = /** @class */ (function (_super) {
    __extends(ToxicDrain, _super);
    function ToxicDrain() {
        return _super.call(this, {
            name: "Toxic Drain",
            damage: 20,
            type: "poison",
            range: 16,
            accuracy: 0.8,
            cost: 20,
            cooldown: 2,
            description: "The user drains the target's HP and releases toxic fumes. Has 15% chance of poisoning the target.",
            effects: [
                {
                    name: "poison",
                    duration: 2,
                    startValue: 0,
                    endValue: 10,
                    inc: 1,
                    chance: 0.15,
                },
            ],
        }) || this;
    }
    ToxicDrain.prototype.activate = function (user, target) {
        var damage = (user.magik / target.immunity) * this.damage;
        target.takeDamage(damage);
        user.reduceMana(this.cost);
        return this;
    };
    ToxicDrain.prototype.render = function (user, target, ctx) {
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.width / 16, user.width);
        ctx.fillStyle = "rgba(180, 112, 224, 0.5)";
        ctx.beginPath();
        ctx.arc(user.position.x + user.width / 2, user.position.y + user.height / 2, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return this;
    };
    return ToxicDrain;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/core.ts":
/*!*****************************!*\
  !*** ./src/attacks/core.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attack": () => (/* binding */ Attack),
/* harmony export */   "Effect": () => (/* binding */ Effect)
/* harmony export */ });
var Effect = /** @class */ (function () {
    function Effect(_a) {
        var name = _a.name, duration = _a.duration, startValue = _a.startValue, endValue = _a.endValue, inc = _a.inc, chance = _a.chance;
        this.name = name;
        this.duration = duration;
        this.startValue = startValue;
        this.endValue = endValue;
        this.inc = inc;
        this.chance = chance;
    }
    return Effect;
}());

var Attack = /** @class */ (function () {
    function Attack(_a) {
        var name = _a.name, damage = _a.damage, type = _a.type, range = _a.range, accuracy = _a.accuracy, cooldown = _a.cooldown, cost = _a.cost, heal = _a.heal, effects = _a.effects, description = _a.description;
        this.name = name;
        this.damage = damage;
        this.type = type;
        this.cost = cost;
        this.heal = heal;
        this.effects = effects;
        this.range = range;
        this.accuracy = accuracy;
        this.cooldown = cooldown;
        this.description = description;
    }
    Attack.prototype.activate = function (user, target) {
        return this;
    };
    return Attack;
}());



/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BAR_HEIGHT": () => (/* binding */ BAR_HEIGHT),
/* harmony export */   "BAR_OFFSET": () => (/* binding */ BAR_OFFSET),
/* harmony export */   "CHAR_HEIGHT": () => (/* binding */ CHAR_HEIGHT),
/* harmony export */   "CHAR_WIDTH": () => (/* binding */ CHAR_WIDTH),
/* harmony export */   "CHAR_X_OFFSET": () => (/* binding */ CHAR_X_OFFSET),
/* harmony export */   "CHAR_Y_OFFSET": () => (/* binding */ CHAR_Y_OFFSET),
/* harmony export */   "DIRECTIONS": () => (/* binding */ DIRECTIONS),
/* harmony export */   "ENEMY_CHASE_DISTANCE": () => (/* binding */ ENEMY_CHASE_DISTANCE),
/* harmony export */   "IS_COLLIDER": () => (/* binding */ IS_COLLIDER),
/* harmony export */   "MAP_HEIGHT": () => (/* binding */ MAP_HEIGHT),
/* harmony export */   "MAP_WIDTH": () => (/* binding */ MAP_WIDTH),
/* harmony export */   "MAP_X_OFFSET": () => (/* binding */ MAP_X_OFFSET),
/* harmony export */   "MAP_Y_OFFSET": () => (/* binding */ MAP_Y_OFFSET),
/* harmony export */   "MOVESPEED": () => (/* binding */ MOVESPEED),
/* harmony export */   "TILES": () => (/* binding */ TILES),
/* harmony export */   "TILE_HEIGHT": () => (/* binding */ TILE_HEIGHT),
/* harmony export */   "TILE_WIDTH": () => (/* binding */ TILE_WIDTH),
/* harmony export */   "VIEW_HEIGHT": () => (/* binding */ VIEW_HEIGHT),
/* harmony export */   "VIEW_WIDTH": () => (/* binding */ VIEW_WIDTH)
/* harmony export */ });
// Viewport 9:16 para móvil
var VIEW_WIDTH = 720;
var VIEW_HEIGHT = 1280;
// Mapa del mundo (4:3 original de November)
var MAP_WIDTH = 1920;
var MAP_HEIGHT = 1440;
var TILE_WIDTH = 64;
var TILE_HEIGHT = 64;
var CHAR_WIDTH = 16;
var CHAR_HEIGHT = 16;
// Posición inicial del jugador (centrado en el mapa)
var CHAR_X_OFFSET = MAP_WIDTH / 2;
var CHAR_Y_OFFSET = MAP_HEIGHT / 2;
// Offsets del mapa (para centrar la vista inicial)
var MAP_X_OFFSET = -(VIEW_WIDTH / 2);
var MAP_Y_OFFSET = -(VIEW_HEIGHT / 2);
var BAR_OFFSET = 2;
var BAR_HEIGHT = 10;
var ENEMY_CHASE_DISTANCE = CHAR_WIDTH * 50;
var IS_COLLIDER = 955;
var MOVESPEED = 4;
var TILES = {
    rows: 40,
    cols: 30
};
var DIRECTIONS = [[-1, 0], [0, -1], [1, 0], [0, 1]];


/***/ }),

/***/ "./src/data/collision.ts":
/*!*******************************!*\
  !*** ./src/data/collision.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collisions": () => (/* binding */ collisions)
/* harmony export */ });
var collisions = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 955, 0, 0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 0, 0, 0, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 955, 955, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 955, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 0, 0, 955, 955, 955, 955, 955, 955, 955, 0, 0, 0, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 955, 955, 955, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 0, 955, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 0, 0, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 955, 955, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 955, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 955, 955, 955, 955, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 955, 0, 955, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 955, 0, 955, 955, 955, 955, 955, 955, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];


/***/ }),

/***/ "./src/events/keys.ts":
/*!****************************!*\
  !*** ./src/events/keys.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureKeyPress": () => (/* binding */ configureKeyPress)
/* harmony export */ });
var configureKeyPress = function (controller) {
    window.addEventListener("keydown", function (e) {
        controller.press(e.key);
    });
    window.addEventListener("keyup", function (e) {
        controller.release(e.key);
    });
};


/***/ }),

/***/ "./src/events/touch.ts":
/*!*****************************!*\
  !*** ./src/events/touch.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureTouchControls": () => (/* binding */ configureTouchControls)
/* harmony export */ });
var configureTouchControls = function (controller) {
    var touchUI = document.createElement('div');
    touchUI.id = 'touch-ui';
    // Joystick zone
    var joystickZone = document.createElement('div');
    joystickZone.id = 'joystick-zone';
    var joystickKnob = document.createElement('div');
    joystickKnob.id = 'joystick-knob';
    joystickZone.appendChild(joystickKnob);
    // Attack buttons - grid 4x2 for all 8 attacks
    var attackButtons = document.createElement('div');
    attackButtons.id = 'attack-buttons';
    var attackConfigs = [
        { key: 'y', label: '🔥', color: 'rgba(255, 100, 0, 0.6)', name: 'Fireball' },
        { key: 'u', label: '❄️', color: 'rgba(100, 200, 255, 0.6)', name: 'IceShard' },
        { key: 'i', label: '💚', color: 'rgba(100, 255, 100, 0.6)', name: 'Heal' },
        { key: 'o', label: '⚡', color: 'rgba(255, 255, 0, 0.6)', name: 'Lightning' },
        { key: 'p', label: '☠️', color: 'rgba(0, 200, 0, 0.6)', name: 'Poison' },
        { key: 'j', label: '🌪️', color: 'rgba(100, 100, 255, 0.6)', name: 'Thunder' },
        { key: 'k', label: '🌑', color: 'rgba(80, 0, 120, 0.6)', name: 'Dark' },
        { key: 'l', label: '✨', color: 'rgba(255, 100, 255, 0.6)', name: 'Shadow' },
    ];
    var activeTouches = {};
    attackConfigs.forEach(function (cfg) {
        var btn = document.createElement('button');
        btn.className = 'attack-btn';
        btn.textContent = cfg.label;
        btn.style.background = cfg.color;
        btn.dataset.key = cfg.key;
        btn.addEventListener('touchstart', function (e) {
            e.preventDefault();
            var touch = e.changedTouches[0];
            if (touch)
                activeTouches[touch.identifier] = cfg.key;
            controller.press(cfg.key);
            btn.style.transform = 'scale(0.9)';
            btn.style.filter = 'brightness(1.5)';
        });
        btn.addEventListener('touchend', function (e) {
            e.preventDefault();
            var touch = e.changedTouches[0];
            if (touch)
                delete activeTouches[touch.identifier];
            controller.release(cfg.key);
            btn.style.transform = 'scale(1)';
            btn.style.filter = 'brightness(1)';
        });
        // Multi-touch support: also cancel when touch is cancelled
        btn.addEventListener('touchcancel', function (e) {
            e.preventDefault();
            var touch = e.changedTouches[0];
            if (touch)
                delete activeTouches[touch.identifier];
            controller.release(cfg.key);
            btn.style.transform = 'scale(1)';
            btn.style.filter = 'brightness(1)';
        });
        attackButtons.appendChild(btn);
    });
    touchUI.appendChild(joystickZone);
    touchUI.appendChild(attackButtons);
    document.body.appendChild(touchUI);
    var joystickActive = false;
    var joystickCenterX = 0;
    var joystickCenterY = 0;
    var joystickTouchId = null;
    joystickZone.addEventListener('touchstart', function (e) {
        e.preventDefault();
        if (joystickTouchId !== null)
            return;
        var touch = e.changedTouches[0];
        joystickTouchId = touch.identifier;
        joystickActive = true;
        var rect = joystickZone.getBoundingClientRect();
        joystickCenterX = rect.left + rect.width / 2;
        joystickCenterY = rect.top + rect.height / 2;
        updateJoystick(touch.clientX, touch.clientY);
    });
    joystickZone.addEventListener('touchmove', function (e) {
        e.preventDefault();
        if (!joystickActive || joystickTouchId === null)
            return;
        // Find our specific touch
        for (var i = 0; i < e.touches.length; i++) {
            if (e.touches[i].identifier === joystickTouchId) {
                updateJoystick(e.touches[i].clientX, e.touches[i].clientY);
                break;
            }
        }
    });
    joystickZone.addEventListener('touchend', function (e) {
        for (var i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === joystickTouchId) {
                joystickActive = false;
                joystickTouchId = null;
                joystickKnob.style.transform = 'translate(-50%, -50%)';
                releaseAllDirections();
                break;
            }
        }
    });
    joystickZone.addEventListener('touchcancel', function (e) {
        for (var i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === joystickTouchId) {
                joystickActive = false;
                joystickTouchId = null;
                joystickKnob.style.transform = 'translate(-50%, -50%)';
                releaseAllDirections();
                break;
            }
        }
    });
    var updateJoystick = function (clientX, clientY) {
        var dx = clientX - joystickCenterX;
        var dy = clientY - joystickCenterY;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var maxDistance = Math.min(joystickZone.getBoundingClientRect().width / 3, 50);
        var clampedDistance = Math.min(distance, maxDistance);
        var angle = Math.atan2(dy, dx);
        var knobX = Math.cos(angle) * clampedDistance;
        var knobY = Math.sin(angle) * clampedDistance;
        joystickKnob.style.transform = "translate(calc(-50% + ".concat(knobX, "px), calc(-50% + ").concat(knobY, "px))");
        releaseAllDirections();
        var threshold = maxDistance * 0.35;
        if (distance > threshold) {
            if (Math.abs(dx) > Math.abs(dy)) {
                controller.press(dx > 0 ? 'd' : 'a');
            }
            else {
                controller.press(dy > 0 ? 's' : 'w');
            }
        }
    };
    var releaseAllDirections = function () {
        controller.release('w');
        controller.release('a');
        controller.release('s');
        controller.release('d');
    };
    return { joystickZone: joystickZone, attackButtons: attackButtons };
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites */ "./src/sprites/index.ts");
/* harmony import */ var _render_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/canvas */ "./src/render/canvas.ts");
/* harmony import */ var _events_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/keys */ "./src/events/keys.ts");
/* harmony import */ var _events_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/touch */ "./src/events/touch.ts");
/* harmony import */ var _render_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render/animation */ "./src/render/animation.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state */ "./src/state/index.ts");
/* harmony import */ var _attacks_attackList_toxicDrain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attacks/attackList/toxicDrain */ "./src/attacks/attackList/toxicDrain.ts");
/* harmony import */ var _attacks_attackList_softGrass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attacks/attackList/softGrass */ "./src/attacks/attackList/softGrass.ts");
/* harmony import */ var _attacks_attackList_citricHealing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attacks/attackList/citricHealing */ "./src/attacks/attackList/citricHealing.ts");
/* harmony import */ var _attacks_attackList_photonBeam__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attacks/attackList/photonBeam */ "./src/attacks/attackList/photonBeam.ts");
/* harmony import */ var _attacks_attackList_ShadowStep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attacks/attackList/ShadowStep */ "./src/attacks/attackList/ShadowStep.ts");
/* harmony import */ var _attacks_attackList_newAttacks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./attacks/attackList/newAttacks */ "./src/attacks/attackList/newAttacks.ts");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _img_november_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/november.png */ "./src/img/november.png");
/* harmony import */ var _img_november_foreground_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/november_foreground.png */ "./src/img/november_foreground.png");
/* harmony import */ var _img_main_char_sprite_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/main_char_sprite.png */ "./src/img/main_char_sprite.png");
/* harmony import */ var _img_mushroom_boss_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/mushroom_boss.png */ "./src/img/mushroom_boss.png");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






















var loadImage = function (image) {
    return new Promise(function (resolve, reject) {
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function (e) {
            reject(e);
        };
    });
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var playerImg, bgImg, fgImg, enemyImg, images, playerFrames, bg, fg, player, enemyCoords, enemies, state, canvas, restartBtn;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerImg = new Image();
                bgImg = new Image();
                fgImg = new Image();
                enemyImg = new Image();
                images = [playerImg, bgImg, fgImg, enemyImg];
                bgImg.src = _img_november_png__WEBPACK_IMPORTED_MODULE_14__["default"];
                playerImg.src = _img_main_char_sprite_png__WEBPACK_IMPORTED_MODULE_16__["default"];
                fgImg.src = _img_november_foreground_png__WEBPACK_IMPORTED_MODULE_15__["default"];
                enemyImg.src = _img_mushroom_boss_png__WEBPACK_IMPORTED_MODULE_17__["default"];
                return [4 /*yield*/, Promise.all(images.map(loadImage))];
            case 1:
                _a.sent();
                playerFrames = 16;
                bg = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Sprite({
                    position: {
                        x: _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_X_OFFSET,
                        y: _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_Y_OFFSET,
                    },
                    image: bgImg,
                    width: _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_WIDTH,
                    height: _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_HEIGHT,
                    directions: {
                        down: 0,
                        up: 0,
                        left: 0,
                        right: 0,
                    },
                });
                fg = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Sprite({
                    position: {
                        x: _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_X_OFFSET,
                        y: _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_Y_OFFSET,
                    },
                    image: fgImg,
                    width: _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_WIDTH,
                    height: _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_HEIGHT,
                    directions: {
                        down: 0,
                        up: 0,
                        left: 0,
                        right: 0,
                    },
                });
                player = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Playable({
                    position: {
                        x: _constants__WEBPACK_IMPORTED_MODULE_5__.CHAR_X_OFFSET,
                        y: _constants__WEBPACK_IMPORTED_MODULE_5__.CHAR_Y_OFFSET,
                    },
                    image: playerImg,
                    width: playerImg.width / playerFrames,
                    height: playerImg.height,
                    zoom: 4,
                    frames: playerFrames,
                    directions: {
                        down: 0,
                        up: 4,
                        left: 8,
                        right: 12,
                    },
                }, {
                    hp: 1000,
                    hpRegen: 1e-4,
                    mana: 1000,
                    manaRegen: 0.001,
                    muscle: 30,
                    magik: 15,
                    armour: 30,
                    immunity: 30,
                    attacks: [new _attacks_attackList_softGrass__WEBPACK_IMPORTED_MODULE_8__.SoftGrass(), new _attacks_attackList_citricHealing__WEBPACK_IMPORTED_MODULE_9__.CitricHealing(), new _attacks_attackList_ShadowStep__WEBPACK_IMPORTED_MODULE_11__.ShadowStep(), new _attacks_attackList_photonBeam__WEBPACK_IMPORTED_MODULE_10__.PhotonBeam(), new _attacks_attackList_newAttacks__WEBPACK_IMPORTED_MODULE_12__.Fireball(), new _attacks_attackList_newAttacks__WEBPACK_IMPORTED_MODULE_12__.IceShard(), new _attacks_attackList_newAttacks__WEBPACK_IMPORTED_MODULE_12__.LightningBolt(), new _attacks_attackList_newAttacks__WEBPACK_IMPORTED_MODULE_12__.PoisonSting(), new _attacks_attackList_newAttacks__WEBPACK_IMPORTED_MODULE_12__.ThunderStorm()],
                });
                enemyCoords = [
                    { x: 265, y: 20 },
                    { x: 800, y: 400 },
                    { x: 1200, y: 200 },
                    { x: 500, y: 800 },
                    { x: 1500, y: 600 },
                    { x: 300, y: 1200 },
                    { x: 1000, y: 1000 },
                ];
                enemies = enemyCoords.map(function (enemyCoords) {
                    var enemy = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Playable({
                        position: enemyCoords,
                        image: enemyImg,
                        width: enemyImg.width,
                        height: enemyImg.height,
                        zoom: 4,
                        directions: {
                            down: 0,
                            up: 0,
                            left: 0,
                            right: 0,
                        },
                    }, {
                        hp: 1000,
                        hpRegen: 1e-4,
                        mana: 1000,
                        manaRegen: 0.001,
                        muscle: 10,
                        magik: 10,
                        armour: 35,
                        immunity: 30,
                        attacks: [new _attacks_attackList_toxicDrain__WEBPACK_IMPORTED_MODULE_7__.ToxicDrain()],
                    });
                    return enemy;
                });
                state = new _state__WEBPACK_IMPORTED_MODULE_6__.State({
                    controller: {
                        up: "w",
                        down: "s",
                        left: "a",
                        right: "d",
                        attacks: ["y", "u", "i", "o"],
                    },
                });
                canvas = (0,_render_canvas__WEBPACK_IMPORTED_MODULE_1__.mapSetup)();
                (0,_events_keys__WEBPACK_IMPORTED_MODULE_2__.configureKeyPress)(state.controller);
                (0,_events_touch__WEBPACK_IMPORTED_MODULE_3__.configureTouchControls)(state.controller);
                restartBtn = document.getElementById('restart-btn');
                if (restartBtn) {
                    restartBtn.addEventListener('click', function () {
                        location.reload();
                    });
                }
                (0,_render_animation__WEBPACK_IMPORTED_MODULE_4__.animationBuilder)({ bg: bg, player: player, state: state, canvas: canvas, fg: fg, enemies: enemies });
                return [2 /*return*/];
        }
    });
}); };
main();


/***/ }),

/***/ "./src/render/animation.ts":
/*!*********************************!*\
  !*** ./src/render/animation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationBuilder": () => (/* binding */ animationBuilder)
/* harmony export */ });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/render/canvas.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collider */ "./src/render/collider/index.ts");



var ENEMY_ATTACK_COOLDOWN = 90;
var enemyAttackTimer = 0;
var motionControl = function (_a) {
    var ctx = _a.ctx, state = _a.state, player = _a.player, enemies = _a.enemies, colliders = _a.colliders;
    var controller = state.controller;
    var futureKeyState = { x: 0, y: 0 };
    if (controller.isPressed("up")) {
        futureKeyState.y = -_constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    if (controller.isPressed("left")) {
        futureKeyState.x = -_constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    if (controller.isPressed("down")) {
        futureKeyState.y = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    if (controller.isPressed("right")) {
        futureKeyState.x = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    // Check collisions for each axis separately
    var playerCollisionsX = colliders.some(function (collider) {
        return (0,_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(player, collider, { x: futureKeyState.x, y: 0 });
    });
    var playerCollisionsY = colliders.some(function (collider) {
        return (0,_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(player, collider, { x: 0, y: futureKeyState.y });
    });
    var movementDirection = controller.getMovement();
    if (!movementDirection && futureKeyState.x === 0 && futureKeyState.y === 0) {
        player.animate("idle");
    }
    else {
        // Determine animation direction
        if (Math.abs(futureKeyState.x) > Math.abs(futureKeyState.y)) {
            player.animate(futureKeyState.x > 0 ? "right" : "left");
        }
        else if (futureKeyState.y !== 0) {
            player.animate(futureKeyState.y > 0 ? "down" : "up");
        }
        else if (futureKeyState.x !== 0) {
            player.animate(futureKeyState.x > 0 ? "right" : "left");
        }
        // Move enemies toward player
        enemies.forEach(function (enemy) {
            if (enemy.alive())
                enemy.follow(player, colliders);
        });
        // Apply movement with collision (player moves through world)
        if (futureKeyState.x !== 0 && !playerCollisionsX) {
            player.position.x += futureKeyState.x;
        }
        if (futureKeyState.y !== 0 && !playerCollisionsY) {
            player.position.y += futureKeyState.y;
        }
    }
    // Enemy attacks with cooldown
    enemyAttackTimer++;
    if (enemyAttackTimer >= ENEMY_ATTACK_COOLDOWN) {
        enemyAttackTimer = 0;
        enemies.forEach(function (enemy) {
            if (enemy.alive()) {
                enemy.regen().attack(player, 0, ctx);
            }
        });
    }
    // Player regen
    player.regen();
    // Player attacks
    var attackChoice = controller.getAttack();
    if (attackChoice !== null && enemies.length > 0) {
        var aliveEnemies = enemies.filter(function (e) { return e.alive(); });
        if (aliveEnemies.length > 0) {
            var closestEnemy = aliveEnemies.reduce(function (closest, enemy) {
                var distToEnemy = Math.abs(enemy.position.x - player.position.x) + Math.abs(enemy.position.y - player.position.y);
                var distToClosest = Math.abs(closest.position.x - player.position.x) + Math.abs(closest.position.y - player.position.y);
                return distToEnemy < distToClosest ? enemy : closest;
            });
            player.attack(closestEnemy, attackChoice, ctx);
        }
    }
};
var animationBuilder = function (_a) {
    var bg = _a.bg, player = _a.player, state = _a.state, canvas = _a.canvas, fg = _a.fg, enemies = _a.enemies;
    var ctx = canvas.getContext("2d");
    var colliders = (0,_collider__WEBPACK_IMPORTED_MODULE_2__.getColliders)();
    // Camera position (top-left of viewport)
    var camX = player.position.x - 360; // VIEW_WIDTH / 2
    var camY = player.position.y - 640; // VIEW_HEIGHT / 2
    var animate = function () {
        var scale = (0,_canvas__WEBPACK_IMPORTED_MODULE_0__.getScale)();
        // Clear screen
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Apply viewport scaling
        ctx.save();
        ctx.scale(scale, scale);
        // Camera transform (follow player)
        ctx.translate(-camX, -camY);
        // Draw game world
        bg.draw(ctx);
        enemies.forEach(function (enemy) {
            if (enemy.alive()) {
                enemy.draw(ctx);
            }
        });
        player.draw(ctx);
        fg.draw(ctx);
        ctx.restore();
        // Draw HUD (fixed position)
        drawHUD(ctx, player, canvas);
        // Update camera (smooth follow)
        var targetCamX = player.position.x - 360;
        var targetCamY = player.position.y - 640;
        // Clamp camera to map bounds
        var clampedCamX = Math.max(0, Math.min(targetCamX, _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_WIDTH - 720));
        var clampedCamY = Math.max(0, Math.min(targetCamY, _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_HEIGHT - 1280));
        // Smooth lerp
        camX += (clampedCamX - camX) * 0.1;
        camY += (clampedCamY - camY) * 0.1;
        window.requestAnimationFrame(animate);
        motionControl({ ctx: ctx, state: state, player: player, enemies: enemies, colliders: colliders });
    };
    animate();
};
var drawHUD = function (ctx, player, canvas) {
    var hudX = 10;
    var hudY = 10;
    var barWidth = 150;
    var barHeight = 14;
    var spacing = 6;
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(hudX - 4, hudY - 4, barWidth + 8, barHeight * 2 + spacing + 24);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 12px monospace";
    ctx.fillText("HP: ".concat(Math.floor(player.hp), "/").concat(player.maxHp), hudX, hudY + 10);
    ctx.fillStyle = "#333";
    ctx.fillRect(hudX, hudY + 16, barWidth, barHeight);
    ctx.fillStyle = player.hp / player.maxHp > 0.3 ? "#e74c3c" : "#ff0000";
    ctx.fillRect(hudX, hudY + 16, barWidth * Math.max(0, player.hp / player.maxHp), barHeight);
    ctx.fillStyle = "#fff";
    ctx.fillText("MP: ".concat(Math.floor(player.mana), "/").concat(player.maxMana), hudX, hudY + 36);
    ctx.fillStyle = "#333";
    ctx.fillRect(hudX, hudY + 42, barWidth, barHeight);
    ctx.fillStyle = "#3498db";
    ctx.fillRect(hudX, hudY + 42, barWidth * Math.max(0, player.mana / player.maxMana), barHeight);
    if (player.hp <= 0) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#e74c3c";
        ctx.font = "bold 32px monospace";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 16px monospace";
        ctx.fillText("Restart to play again", canvas.width / 2, canvas.height / 2 + 30);
        ctx.textAlign = "start";
        var restartBtn = document.getElementById('restart-btn');
        if (restartBtn)
            restartBtn.style.display = 'block';
    }
};


/***/ }),

/***/ "./src/render/canvas.ts":
/*!******************************!*\
  !*** ./src/render/canvas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScale": () => (/* binding */ getScale),
/* harmony export */   "mapSetup": () => (/* binding */ mapSetup)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var SCALE = 1;
var mapSetup = function () {
    var canvas = document.getElementById("canvas");
    var dpr = window.devicePixelRatio || 1;
    var screenW = window.innerWidth;
    var screenH = window.innerHeight;
    // Fit 9:16 viewport into screen (cover mode)
    var scaleX = screenW / _constants__WEBPACK_IMPORTED_MODULE_0__.VIEW_WIDTH;
    var scaleY = screenH / _constants__WEBPACK_IMPORTED_MODULE_0__.VIEW_HEIGHT;
    SCALE = Math.max(scaleX, scaleY);
    // Canvas fills entire screen
    canvas.style.width = screenW + "px";
    canvas.style.height = screenH + "px";
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.width = Math.floor(screenW * dpr);
    canvas.height = Math.floor(screenH * dpr);
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;
    return canvas;
};
var getScale = function () { return SCALE; };


/***/ }),

/***/ "./src/render/collider/collisions.ts":
/*!*******************************************!*\
  !*** ./src/render/collider/collisions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGrid": () => (/* binding */ makeGrid)
/* harmony export */ });
/* harmony import */ var _data_collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/collision */ "./src/data/collision.ts");

var makeGrid = function (chunkSize) {
    var collisionGrid = [];
    for (var i = 0; i < _data_collision__WEBPACK_IMPORTED_MODULE_0__.collisions.length; i += chunkSize) {
        collisionGrid.push(_data_collision__WEBPACK_IMPORTED_MODULE_0__.collisions.slice(i, i + chunkSize));
    }
    return collisionGrid;
};


/***/ }),

/***/ "./src/render/collider/index.ts":
/*!**************************************!*\
  !*** ./src/render/collider/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxCollider": () => (/* binding */ BoxCollider),
/* harmony export */   "checkCollision": () => (/* binding */ checkCollision),
/* harmony export */   "coordsAbsPosition": () => (/* binding */ coordsAbsPosition),
/* harmony export */   "coordsMapPosition": () => (/* binding */ coordsMapPosition),
/* harmony export */   "getColliders": () => (/* binding */ getColliders)
/* harmony export */ });
/* harmony import */ var _collisions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collisions */ "./src/render/collider/collisions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");


var BoxCollider = /** @class */ (function () {
    function BoxCollider(_a) {
        var position = _a.position;
        this.position = position;
        this.width = BoxCollider.width;
        this.height = BoxCollider.height;
    }
    BoxCollider.prototype.draw = function (ctx) {
        ctx.strokeStyle = "rgba(100, 0, 0, 0.5)";
        ctx.strokeRect(this.position.x, this.position.y, BoxCollider.width, BoxCollider.height);
        ctx.font = "10px Arial";
        ctx.fillText("(".concat(this.position.x, ", ").concat(this.position.y, ")"), this.position.x + 10, this.position.y + 20);
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x, this.position.y, 5, 5);
    };
    BoxCollider.width = _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_WIDTH;
    BoxCollider.height = _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_HEIGHT;
    return BoxCollider;
}());

var coordsAbsPosition = function (coords) { return ({
    x: Math.floor((coords.x - _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_X_OFFSET) / _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_WIDTH),
    y: Math.floor((coords.y - _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_Y_OFFSET) / _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_HEIGHT),
}); };
var coordsMapPosition = function (coords) { return ({
    x: (coords.x * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_WIDTH) + _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_X_OFFSET,
    y: (coords.y * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_HEIGHT) + _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_Y_OFFSET,
}); };
var getColliders = function () {
    var colliders = [];
    var grid = (0,_collisions__WEBPACK_IMPORTED_MODULE_0__.makeGrid)(_constants__WEBPACK_IMPORTED_MODULE_1__.TILES.rows);
    grid.forEach(function (row, i) {
        row.forEach(function (col, j) {
            if (col === _constants__WEBPACK_IMPORTED_MODULE_1__.IS_COLLIDER) {
                colliders.push(new BoxCollider({
                    position: coordsMapPosition({ x: j, y: i }),
                }));
            }
        });
    });
    return colliders;
};
/**
 *          _____ _____
 *          | P | | C |
 *          ‾‾‾‾‾ ‾‾‾‾‾
 *
 * @param shape1
 * @param shape2
 * @param param2
 * @param tolerance
 * @returns
 */
var checkCollision = function (shape1, shape2, _a, tolerance) {
    var x = _a.x, y = _a.y;
    if (tolerance === void 0) { tolerance = 16; }
    var shape1Position = shape1.position;
    var shape2Position = shape2.position;
    return ((shape1Position.x + shape1.width > shape2Position.x + x + tolerance) // player is to the right of collider
        && (shape1Position.x < shape2Position.x + x + shape2.width - tolerance) // player is to the left of collider
        && (shape1Position.y + shape1.height > shape2Position.y + y + tolerance) // player is below collider
        && (shape1Position.y < shape2Position.y + y + shape2.height - tolerance)); // player is above collider
};


/***/ }),

/***/ "./src/sprites/index.ts":
/*!******************************!*\
  !*** ./src/sprites/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playable": () => (/* binding */ Playable),
/* harmony export */   "Sprite": () => (/* binding */ Sprite)
/* harmony export */ });
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _render_collider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/collider */ "./src/render/collider/index.ts");
/* harmony import */ var _pathfinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pathfinder */ "./src/sprites/pathfinder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Sprite = /** @class */ (function () {
    function Sprite(_a) {
        var position = _a.position, image = _a.image, width = _a.width, height = _a.height, directions = _a.directions, _b = _a.zoom, zoom = _b === void 0 ? 1 : _b, _c = _a.frames, frames = _c === void 0 ? 1 : _c;
        this.position = position;
        this.zoom = zoom;
        this.image = image;
        this.width = width * this.zoom;
        this.height = height * this.zoom;
        this.face = 0;
        this.currentFrame = 0;
        this.frames = frames;
        this.directions = directions;
        this.framesPerDirection = this.frames / Object.keys(this.directions).length;
    }
    Sprite.prototype.draw = function (ctx) {
        ctx.drawImage(this.image, this.currentFrame, 0, this.image.width / this.frames, this.image.height, this.position.x, this.position.y, (this.image.width / this.frames) * this.zoom, this.image.height * this.zoom);
        return this;
    };
    return Sprite;
}());

var Playable = /** @class */ (function (_super) {
    __extends(Playable, _super);
    function Playable(spriteArgs, _a) {
        var hp = _a.hp, hpRegen = _a.hpRegen, mana = _a.mana, manaRegen = _a.manaRegen, muscle = _a.muscle, magik = _a.magik, armour = _a.armour, immunity = _a.immunity, attacks = _a.attacks;
        var _this = _super.call(this, spriteArgs) || this;
        _this.maxHp = hp;
        _this.hp = hp;
        _this.hpRegen = hpRegen;
        _this.maxMana = mana;
        _this.mana = mana;
        _this.manaRegen = manaRegen;
        _this.muscle = muscle;
        _this.magik = magik;
        _this.refreshRate = _this.framesPerDirection / (_this.frames * 2);
        _this.armour = armour;
        _this.immunity = immunity;
        _this.path = [];
        _this.attacks = attacks;
        return _this;
    }
    Playable.prototype.takeDamage = function (damage) {
        this.hp = Math.max(0, this.hp - damage);
        return this;
    };
    Playable.prototype.heal = function (amount) {
        this.hp = Math.min(this.maxHp, this.hp + amount);
        return this;
    };
    Playable.prototype.reduceMana = function (cost) {
        this.mana = Math.max(0, this.mana - cost);
        return this;
    };
    Playable.prototype.idleAnimation = function () {
        for (var _i = 0, _a = Object.values(this.directions); _i < _a.length; _i++) {
            var frameIdx = _a[_i];
            var face = this.currentFrame / this.frames;
            if (face < frameIdx) {
                break;
            }
            this.face = frameIdx;
        }
        this.currentFrame = Math.floor(this.face) * this.frames;
        return this;
    };
    Playable.prototype.walkAnimation = function (direction) {
        if (!(0,_utils_misc__WEBPACK_IMPORTED_MODULE_0__.hasKey)(this.directions, direction)) {
            return this;
        }
        var firstFrame = this.directions[direction];
        var lastFrame = this.directions[direction] + this.framesPerDirection;
        this.face =
            this.face >= firstFrame && this.face < lastFrame
                ? this.face + this.refreshRate
                : firstFrame;
        this.currentFrame = Math.floor(this.face) * this.frames;
        return this;
    };
    Playable.prototype.animate = function (direction) {
        if (direction === "idle") {
            this.idleAnimation();
        }
        else {
            this.walkAnimation(direction);
        }
        return this;
    };
    Playable.prototype.alive = function () {
        return this.hp > 0;
    };
    Playable.prototype.regen = function () {
        if (!this.alive()) {
            return this;
        }
        this.hp = Math.min(this.maxHp, this.hp + this.maxHp * this.hpRegen);
        this.mana = Math.min(this.maxMana, this.mana + this.maxMana * this.manaRegen);
        return this;
    };
    Playable.prototype.follow = function (target, colliders) {
        if (!target.alive()) {
            return this;
        }
        var currentPosition = (0,_render_collider__WEBPACK_IMPORTED_MODULE_2__.coordsAbsPosition)(this.position);
        var targetPosition = (0,_render_collider__WEBPACK_IMPORTED_MODULE_2__.coordsAbsPosition)(target.position);
        if (this.path.length === 0) {
            this.path = new _pathfinder__WEBPACK_IMPORTED_MODULE_3__.PathFinder()
                .find(currentPosition, targetPosition, colliders)
                .map(_render_collider__WEBPACK_IMPORTED_MODULE_2__.coordsMapPosition);
        }
        if (this.path.length) {
            this.crawl(this.path.shift());
        }
        return this;
    };
    Playable.prototype.crawl = function (coords) {
        var x = coords.x - this.position.x;
        var y = coords.y - this.position.y;
        this.position.x += x;
        this.position.y += y;
        return this;
    };
    Playable.prototype.attack = function (target, choice, ctx) {
        if (this.hp === 0 || choice === null) {
            return this;
        }
        var attack = this.attacks[choice];
        var inRange = (0,_render_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(target, this, { x: 0, y: 0 }, -attack.range);
        if (inRange) {
            target.takeDamage(attack.damage);
            if (attack.render) {
                attack.render(this, target, ctx);
            }
        }
        return this;
    };
    Playable.prototype.draw = function (ctx) {
        ctx.drawImage(this.image, this.currentFrame, 0, this.image.width / this.frames, this.image.height, this.position.x, this.position.y, (this.image.width / this.frames) * this.zoom, this.image.height * this.zoom);
        var barWidth = this.width;
        var barHeight = _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_HEIGHT;
        var barOffset = _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_OFFSET;
        ctx.fillStyle = "#333";
        ctx.fillRect(this.position.x, this.position.y - barOffset - barHeight * 2, barWidth, barHeight);
        ctx.fillStyle = "#e74c3c";
        ctx.fillRect(this.position.x, this.position.y - barOffset - barHeight * 2, barWidth * (this.hp / this.maxHp), barHeight);
        ctx.fillStyle = "#333";
        ctx.fillRect(this.position.x, this.position.y - barOffset - barHeight, barWidth, barHeight);
        ctx.fillStyle = "#3498db";
        ctx.fillRect(this.position.x, this.position.y - barOffset - barHeight, barWidth * (this.mana / this.maxMana), barHeight);
        return this;
    };
    return Playable;
}(Sprite));



/***/ }),

/***/ "./src/sprites/pathfinder.ts":
/*!***********************************!*\
  !*** ./src/sprites/pathfinder.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathFinder": () => (/* binding */ PathFinder)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _render_collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/collider */ "./src/render/collider/index.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _utils_priorityQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/priorityQueue */ "./src/utils/priorityQueue.ts");




var encodeCoords = function (coordinates) {
    return "".concat(coordinates.x, "-").concat(coordinates.y);
};
var PathFinder = /** @class */ (function () {
    function PathFinder() {
        this.paths = {};
        this.visited = new Set();
        this.surroundings = new _utils_priorityQueue__WEBPACK_IMPORTED_MODULE_3__.PriorityQueue();
    }
    PathFinder.prototype.isSameCoords = function (c1, c2) {
        return c1.x === c2.x && c1.y === c2.y;
    };
    PathFinder.prototype.buildPath = function (key) {
        if (!this.paths.hasOwnProperty(key)) {
            return [];
        }
        var path = [];
        var current = this.paths[key];
        while (current.parent) {
            path.push(current.position);
            current = this.paths[encodeCoords(current.parent)];
        }
        return path.reverse();
    };
    PathFinder.prototype.find = function (source, destination, colliders) {
        var _this = this;
        var srcKey = encodeCoords(source);
        var path = [];
        var aStarRecord = {
            fScore: 0,
            gScore: 0,
            hScore: 0,
            parent: null,
            position: source,
            key: srcKey,
        };
        this.visited.add(srcKey);
        this.paths[srcKey] = aStarRecord;
        this.surroundings.nq(0, aStarRecord);
        while (!this.surroundings.empty()) {
            var current = this.surroundings.dq();
            this.paths[current.key] = current;
            if (this.isSameCoords(current.position, destination)) {
                return this.buildPath(current.key);
            }
            var _loop_1 = function (direction) {
                var horizontal = direction[0], vertical = direction[1];
                var newCoordinates = {
                    x: current.position.x + horizontal,
                    y: current.position.y + vertical,
                };
                var newKey = encodeCoords(newCoordinates);
                var isBoundary = colliders.some(function (collider) {
                    return _this.isSameCoords(newCoordinates, (0,_render_collider__WEBPACK_IMPORTED_MODULE_1__.coordsAbsPosition)(collider.position));
                });
                if (isBoundary || this_1.visited.has(newKey)) {
                    return "continue";
                }
                var gScore = current.gScore + 1;
                var hScore = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_2__.manhattanDistance)(newCoordinates, destination);
                var fScore = gScore + hScore;
                this_1.visited.add(newKey);
                this_1.surroundings.nq(fScore, {
                    fScore: fScore,
                    gScore: gScore,
                    hScore: hScore,
                    parent: current.position,
                    position: newCoordinates,
                    key: newKey,
                });
            };
            var this_1 = this;
            for (var _i = 0, DIRECTIONS_1 = _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS; _i < DIRECTIONS_1.length; _i++) {
                var direction = DIRECTIONS_1[_i];
                _loop_1(direction);
            }
        }
        return path;
    };
    return PathFinder;
}());



/***/ }),

/***/ "./src/state/index.ts":
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");


var Controller = /** @class */ (function () {
    function Controller(_a) {
        var _b;
        var up = _a.up, down = _a.down, left = _a.left, right = _a.right, attacks = _a.attacks;
        this.motion = {
            up: {
                key: up,
                axis: "y",
                velocity: -_constants__WEBPACK_IMPORTED_MODULE_0__.MOVESPEED,
                pressed: false,
            },
            down: {
                key: down,
                axis: "y",
                velocity: _constants__WEBPACK_IMPORTED_MODULE_0__.MOVESPEED,
                pressed: false,
            },
            left: {
                key: left,
                axis: "x",
                velocity: -_constants__WEBPACK_IMPORTED_MODULE_0__.MOVESPEED,
                pressed: false
            },
            right: {
                key: right,
                axis: "x",
                velocity: _constants__WEBPACK_IMPORTED_MODULE_0__.MOVESPEED,
                pressed: false
            },
        };
        this.directionBindings = (_b = {},
            _b[up] = "up",
            _b[down] = "down",
            _b[left] = "left",
            _b[right] = "right",
            _b);
        this.attackBindings = {};
        this.activeAttacks = attacks.map(function (_) { return false; });
        for (var i = 0; i < attacks.length; i++) {
            this.attackBindings[attacks[i]] = i;
        }
    }
    Controller.prototype.idle = function () {
        var _this = this;
        return Object.keys(this.motion).every(function (direction) { return !_this.motion[direction].pressed; });
    };
    Controller.prototype.getMovement = function () {
        var _this = this;
        var directions = Object.keys(this.motion).filter(function (direction) { return _this.motion[direction].pressed; });
        if (directions.length === 1) {
            return directions[0];
        }
        return null;
    };
    Controller.prototype.getAttack = function () {
        var attackIndices = this.activeAttacks.map(function (attackActive, i) { return attackActive ? i : -1; }).filter(function (attackIdx) { return attackIdx !== -1; });
        if (attackIndices.length === 1) {
            return attackIndices[0];
        }
        return null;
    };
    Controller.prototype.press = function (key) {
        if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.directionBindings, key)) {
            var direction = this.directionBindings[key];
            this.motion[direction].pressed = true;
        }
        else if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.attackBindings, key)) {
            var attack = this.attackBindings[key];
            this.activeAttacks[attack] = true;
        }
    };
    Controller.prototype.release = function (key) {
        if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.directionBindings, key)) {
            var direction = this.directionBindings[key];
            this.motion[direction].pressed = false;
        }
        else if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.attackBindings, key)) {
            var attack = this.attackBindings[key];
            this.activeAttacks[attack] = false;
        }
    };
    Controller.prototype.isPressed = function (key) {
        if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.motion, key)) {
            return this.motion[key].pressed;
        }
        else if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.activeAttacks, key)) {
            return this.activeAttacks[key];
        }
        return false;
    };
    return Controller;
}());

var State = /** @class */ (function () {
    function State(_a) {
        var controller = _a.controller;
        this.controller = new Controller(controller);
    }
    return State;
}());



/***/ }),

/***/ "./src/utils/misc.ts":
/*!***************************!*\
  !*** ./src/utils/misc.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasKey": () => (/* binding */ hasKey),
/* harmony export */   "manhattanDistance": () => (/* binding */ manhattanDistance),
/* harmony export */   "randomInt": () => (/* binding */ randomInt)
/* harmony export */ });
var hasKey = function (obj, key) {
    return key in obj;
};
var manhattanDistance = function (a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
};
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


/***/ }),

/***/ "./src/utils/priorityQueue.ts":
/*!************************************!*\
  !*** ./src/utils/priorityQueue.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityQueue": () => (/* binding */ PriorityQueue)
/* harmony export */ });
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.items = [];
    }
    PriorityQueue.prototype.nq = function (priority, element) {
        var left = 0;
        var right = this.items.length - 1;
        var mid = 0;
        var pos = -1;
        if (this.items.length === 0) {
            this.items.push({ priority: priority, element: element });
            return this;
        }
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (this.items[mid].priority > priority) {
                right = mid - 1;
                pos = mid;
            }
            else {
                left = mid + 1;
            }
        }
        this.items.splice(pos, 0, { priority: priority, element: element });
        return this;
    };
    PriorityQueue.prototype.dq = function () {
        if (this.items.length) {
            return this.items.shift().element;
        }
        return null;
    };
    PriorityQueue.prototype.empty = function () {
        return this.items.length === 0;
    };
    return PriorityQueue;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/attacks/attackList/citricHealing.ts");
/******/ 	__webpack_require__("./src/attacks/attackList/newAttacks.ts");
/******/ 	__webpack_require__("./src/attacks/attackList/photonBeam.ts");
/******/ 	__webpack_require__("./src/attacks/attackList/ShadowStep.ts");
/******/ 	__webpack_require__("./src/attacks/attackList/softGrass.ts");
/******/ 	__webpack_require__("./src/attacks/attackList/toxicDrain.ts");
/******/ 	__webpack_require__("./src/attacks/core.ts");
/******/ 	__webpack_require__("./src/constants.ts");
/******/ 	__webpack_require__("./src/data/collision.ts");
/******/ 	__webpack_require__("./src/events/keys.ts");
/******/ 	__webpack_require__("./src/events/touch.ts");
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	__webpack_require__("./src/render/animation.ts");
/******/ 	__webpack_require__("./src/render/canvas.ts");
/******/ 	__webpack_require__("./src/render/collider/collisions.ts");
/******/ 	__webpack_require__("./src/render/collider/index.ts");
/******/ 	__webpack_require__("./src/sprites/index.ts");
/******/ 	__webpack_require__("./src/sprites/pathfinder.ts");
/******/ 	__webpack_require__("./src/state/index.ts");
/******/ 	__webpack_require__("./src/types/index.d.ts");
/******/ 	__webpack_require__("./src/utils/misc.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/priorityQueue.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDdEQsSUFBTSxVQUFVLEdBQWE7SUFDakMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5SyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzFILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM1SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDcEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM1SixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2xJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDaEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN4SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ2xKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDeEosQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3hJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDMUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3BKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDcEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDeEssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFB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S0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUN6Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvaW1nL21haW5fY2hhcl9zcHJpdGUucG5nIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvaW1nL211c2hyb29tX2Jvc3MucG5nIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvaW1nL25vdmVtYmVyLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9ub3ZlbWJlcl9mb3JlZ3JvdW5kLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3R5cGVzL2luZGV4LmQudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9TaGFkb3dTdGVwLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvYXR0YWNrcy9hdHRhY2tMaXN0L2NpdHJpY0hlYWxpbmcudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvbmV3QXR0YWNrcy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9waG90b25CZWFtLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvYXR0YWNrcy9hdHRhY2tMaXN0L3NvZnRHcmFzcy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC90b3hpY0RyYWluLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvYXR0YWNrcy9jb3JlLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvZGF0YS9jb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9ldmVudHMva2V5cy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2V2ZW50cy90b3VjaC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvcmVuZGVyL2FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY29sbGlkZXIvY29sbGlzaW9ucy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9jb2xsaWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3Nwcml0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9zcHJpdGVzL3BhdGhmaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9zdGF0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3V0aWxzL21pc2MudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy91dGlscy9wcmlvcml0eVF1ZXVlLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjMGEwYTBmO1xcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuY2FudmFzI2NhbnZhcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jdG91Y2gtdWkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbiNqb3lzdGljay16b25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbiNqb3lzdGljay1rbm9iIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuI2F0dGFjay1idXR0b25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDZweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmF0dGFjay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMsIGZpbHRlciAwLjFzO1xcbn1cXG5cXG4uYXR0YWNrLWJ0bjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xcbn1cXG5cXG4uYXR0YWNrLWJ0bi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xcbn1cXG5cXG4vKiBIVUQgLSBlc3F1aW5hIHN1cGVyaW9yIGl6cXVpZXJkYSAqL1xcbiNodWQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwMDtcXG59XFxuXFxuLyogTWluaW1hcGEgLSBlc3F1aW5hIHN1cGVyaW9yIGRlcmVjaGEgKi9cXG4jbWluaW1hcCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI21pbmltYXAgY2FudmFzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogQm90w7NuIGRlIHBhdXNhICovXFxuI3BhdXNlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYXVzZS1idG46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuOSk7XFxufVxcblxcbi8qIEdhbWUgT3ZlciAqL1xcbiNnYW1lLW92ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHotaW5kZXg6IDIwMDA7XFxufVxcblxcbiNnYW1lLW92ZXIuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2dhbWUtb3ZlciBoMSB7XFxuICAgIGNvbG9yOiAjZTc0YzNjO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNnYW1lLW92ZXIgcCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNyZXN0YXJ0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyZXN0YXJ0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNjMDM5MmI7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAjdG91Y2gtdWkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUFxQztJQUNyQywyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQywwQ0FBMEM7SUFDMUMsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBLHFDQUFxQztBQUNyQztJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBLHdDQUF3QztBQUN4QztJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUEsY0FBYztBQUNkO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjMGEwYTBmO1xcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuY2FudmFzI2NhbnZhcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jdG91Y2gtdWkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbiNqb3lzdGljay16b25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbiNqb3lzdGljay1rbm9iIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuI2F0dGFjay1idXR0b25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDZweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmF0dGFjay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMsIGZpbHRlciAwLjFzO1xcbn1cXG5cXG4uYXR0YWNrLWJ0bjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xcbn1cXG5cXG4uYXR0YWNrLWJ0bi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xcbn1cXG5cXG4vKiBIVUQgLSBlc3F1aW5hIHN1cGVyaW9yIGl6cXVpZXJkYSAqL1xcbiNodWQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwMDtcXG59XFxuXFxuLyogTWluaW1hcGEgLSBlc3F1aW5hIHN1cGVyaW9yIGRlcmVjaGEgKi9cXG4jbWluaW1hcCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI21pbmltYXAgY2FudmFzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogQm90w7NuIGRlIHBhdXNhICovXFxuI3BhdXNlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYXVzZS1idG46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuOSk7XFxufVxcblxcbi8qIEdhbWUgT3ZlciAqL1xcbiNnYW1lLW92ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHotaW5kZXg6IDIwMDA7XFxufVxcblxcbiNnYW1lLW92ZXIuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2dhbWUtb3ZlciBoMSB7XFxuICAgIGNvbG9yOiAjZTc0YzNjO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNnYW1lLW92ZXIgcCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNyZXN0YXJ0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyZXN0YXJ0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNjMDM5MmI7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAjdG91Y2gtdWkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNmZTc5YTY3ZWIzOTQwMjAzZGY5OTJiMjg1NTUyYzNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNWY4ZGRmMTk0MGZmMjVhZmI4OWYyOTIzZjNhMDgxZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTE2NzkyOTk1NTVlZjY5MTM5MDAxYjU5Njc1MjQxZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdhN2U1NzMxZjY5YTg0OTE4Y2Y4NjM3MDY0NjM2NmZmLnBuZ1wiOyIsIiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBBdHRhY2sgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUGxheWFibGUgfSBmcm9tIFwiLi4vLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pc2NcIjtcblxuZXhwb3J0IGNsYXNzIFNoYWRvd1N0ZXAgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlNoYWRvdyBTdGVwXCIsXG4gICAgICBkYW1hZ2U6IDAsXG4gICAgICBoZWFsOiAwLFxuICAgICAgdHlwZTogXCJzaGFkb3dcIixcbiAgICAgIHJhbmdlOiAxMDAwLFxuICAgICAgY29zdDogMTAsXG4gICAgICBhY2N1cmFjeTogMC44LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBTaGFkb3dTdGVwIHtcbiAgICB1c2VyXG4gICAgICAucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIGNvbnN0IHN0ZXAgPSAxMDA7XG4gICAgdXNlci5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHVzZXIucG9zaXRpb24ueCArIHJhbmRvbUludCgtc3RlcCwgc3RlcCksXG4gICAgICB5OiB1c2VyLnBvc2l0aW9uLnkgKyByYW5kb21JbnQoLXN0ZXAsIHN0ZXApXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihcbiAgICB1c2VyOiBQbGF5YWJsZSxcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IFNoYWRvd1N0ZXAge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSByYW5kb21JbnQodXNlci5wb3NpdGlvbi54LCB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoKTtcbiAgICAgIGNvbnN0IHkgPSByYW5kb21JbnQodXNlci5wb3NpdGlvbi55LCB1c2VyLnBvc2l0aW9uLnkgKyB1c2VyLmhlaWdodCk7XG4gICAgICBjb25zdCB3ID0gMTtcbiAgICAgIGNvbnN0IGggPSAyMDtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgQ2l0cmljSGVhbGluZyBleHRlbmRzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IFwiQ2l0cmljIEhlYWxpbmdcIixcbiAgICAgIGRhbWFnZTogMCxcbiAgICAgIGhlYWw6IDEwLFxuICAgICAgdHlwZTogXCJncmFzc1wiLFxuICAgICAgcmFuZ2U6IDEwMDAsXG4gICAgICBjb3N0OiA1MCxcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IENpdHJpY0hlYWxpbmcge1xuICAgIHVzZXJcbiAgICAgIC5oZWFsKHRoaXMuaGVhbClcbiAgICAgIC5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBDaXRyaWNIZWFsaW5nIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLSAyMCwgdXNlci53aWR0aCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1MCwgMjUxLCAyNDAsIDAuOClcIjtcbiAgICBjdHgubGluZVdpZHRoID0gIDU7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgRmlyZWJhbGwgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIkZpcmViYWxsXCIsXG4gICAgICBkYW1hZ2U6IDgwLFxuICAgICAgdHlwZTogXCJmaXJlXCIsXG4gICAgICByYW5nZTogMjAwLFxuICAgICAgY29zdDogMzAsXG4gICAgICBhY2N1cmFjeTogMC45LFxuICAgICAgY29vbGRvd246IDMsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIGJsYXppbmcgYmFsbCBvZiBmaXJlXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogRmlyZWJhbGwge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBGaXJlYmFsbCB7XG4gICAgY29uc3QgciA9IHJhbmRvbUludCgxMCwgMzApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAxMDAsIDAsIDAuNylcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHRhcmdldC5wb3NpdGlvbi54ICsgdGFyZ2V0LndpZHRoIC8gMixcbiAgICAgIHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LmhlaWdodCAvIDIsXG4gICAgICByLFxuICAgICAgMCxcbiAgICAgIDIgKiBNYXRoLlBJXG4gICAgKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWNlU2hhcmQgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIkljZSBTaGFyZFwiLFxuICAgICAgZGFtYWdlOiA0MCxcbiAgICAgIHR5cGU6IFwiaWNlXCIsXG4gICAgICByYW5nZTogMTUwLFxuICAgICAgY29zdDogMjAsXG4gICAgICBhY2N1cmFjeTogMC45NSxcbiAgICAgIGNvb2xkb3duOiAxLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2hhcnAgaWNlIHByb2plY3RpbGVcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBJY2VTaGFyZCB7XG4gICAgY29uc3QgZGFtYWdlID0gKHVzZXIubWFnaWsgLyB0YXJnZXQuaW1tdW5pdHkpICogdGhpcy5kYW1hZ2U7XG4gICAgdGFyZ2V0LnRha2VEYW1hZ2UoZGFtYWdlKTtcbiAgICB1c2VyLnJlZHVjZU1hbmEodGhpcy5jb3N0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihcbiAgICB1c2VyOiBQbGF5YWJsZSxcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IEljZVNoYXJkIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMTAwLCAyMDAsIDI1NSwgMC44KVwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHVzZXIucG9zaXRpb24ueCArIHVzZXIud2lkdGggLyAyLCB1c2VyLnBvc2l0aW9uLnkgKyB1c2VyLmhlaWdodCAvIDIpO1xuICAgIGN0eC5saW5lVG8odGFyZ2V0LnBvc2l0aW9uLnggKyB0YXJnZXQud2lkdGggLyAyLCB0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5oZWlnaHQgLyAyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhlYWwgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIkhlYWxcIixcbiAgICAgIGRhbWFnZTogMCxcbiAgICAgIGhlYWw6IDEwMCxcbiAgICAgIHR5cGU6IFwiaG9seVwiLFxuICAgICAgcmFuZ2U6IDAsXG4gICAgICBjb3N0OiA0MCxcbiAgICAgIGFjY3VyYWN5OiAxLFxuICAgICAgY29vbGRvd246IDUsXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZXN0b3JlIEhQXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogSGVhbCB7XG4gICAgdXNlci5oZWFsKHRoaXMuaGVhbCk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBIZWFsIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KDIwLCA1MCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDEwMCwgMjU1LCAxMDAsIDAuOClcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHVzZXIucG9zaXRpb24ueCArIHVzZXIud2lkdGggLyAyLFxuICAgICAgdXNlci5wb3NpdGlvbi55ICsgdXNlci5oZWlnaHQgLyAyLFxuICAgICAgcixcbiAgICAgIDAsXG4gICAgICAyICogTWF0aC5QSVxuICAgICk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlnaHRuaW5nQm9sdCBleHRlbmRzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IFwiTGlnaHRuaW5nIEJvbHRcIixcbiAgICAgIGRhbWFnZTogMTIwLFxuICAgICAgdHlwZTogXCJlbGVjdHJpY1wiLFxuICAgICAgcmFuZ2U6IDI1MCxcbiAgICAgIGNvc3Q6IDYwLFxuICAgICAgYWNjdXJhY3k6IDAuODUsXG4gICAgICBjb29sZG93bjogNCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcG93ZXJmdWwgbGlnaHRuaW5nIHN0cmlrZVwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IExpZ2h0bmluZ0JvbHQge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBMaWdodG5pbmdCb2x0IHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDAsIDAuOSlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMiwgdXNlci5wb3NpdGlvbi55ICsgdXNlci5oZWlnaHQgLyAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHVzZXIucG9zaXRpb24ueCArICh0YXJnZXQucG9zaXRpb24ueCAtIHVzZXIucG9zaXRpb24ueCkgKiAoaSAvIDUpICsgcmFuZG9tSW50KC0zMCwgMzApO1xuICAgICAgY29uc3QgeSA9IHVzZXIucG9zaXRpb24ueSArICh0YXJnZXQucG9zaXRpb24ueSAtIHVzZXIucG9zaXRpb24ueSkgKiAoaSAvIDUpICsgcmFuZG9tSW50KC0zMCwgMzApO1xuICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG4gICAgY3R4LmxpbmVUbyh0YXJnZXQucG9zaXRpb24ueCArIHRhcmdldC53aWR0aCAvIDIsIHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LmhlaWdodCAvIDIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9pc29uU3RpbmcgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlBvaXNvbiBTdGluZ1wiLFxuICAgICAgZGFtYWdlOiAzMCxcbiAgICAgIHR5cGU6IFwicG9pc29uXCIsXG4gICAgICByYW5nZTogMTAwLFxuICAgICAgY29zdDogMTUsXG4gICAgICBhY2N1cmFjeTogMC45LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHRveGljIHN0YWJcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBQb2lzb25TdGluZyB7XG4gICAgY29uc3QgZGFtYWdlID0gKHVzZXIubXVzY2xlIC8gdGFyZ2V0LmFybW91cikgKiB0aGlzLmRhbWFnZTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXIucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogUG9pc29uU3Rpbmcge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMjAwLCAwLCAwLjYpXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB0YXJnZXQucG9zaXRpb24ueCArIHJhbmRvbUludCgwLCB0YXJnZXQud2lkdGgpO1xuICAgICAgY29uc3QgeSA9IHRhcmdldC5wb3NpdGlvbi55ICsgcmFuZG9tSW50KDAsIHRhcmdldC5oZWlnaHQpO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCByYW5kb21JbnQoMywgOCksIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaHVuZGVyU3Rvcm0gZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlRodW5kZXIgU3Rvcm1cIixcbiAgICAgIGRhbWFnZTogMTUwLFxuICAgICAgdHlwZTogXCJlbGVjdHJpY1wiLFxuICAgICAgcmFuZ2U6IDMwMCxcbiAgICAgIGNvc3Q6IDgwLFxuICAgICAgYWNjdXJhY3k6IDAuNzUsXG4gICAgICBjb29sZG93bjogNixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1hc3NpdmUgbGlnaHRuaW5nIGRhbWFnZVwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IFRodW5kZXJTdG9ybSB7XG4gICAgY29uc3QgZGFtYWdlID0gKHVzZXIubWFnaWsgLyB0YXJnZXQuaW1tdW5pdHkpICogdGhpcy5kYW1hZ2U7XG4gICAgdGFyZ2V0LnRha2VEYW1hZ2UoZGFtYWdlKTtcbiAgICB1c2VyLnJlZHVjZU1hbmEodGhpcy5jb3N0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihcbiAgICB1c2VyOiBQbGF5YWJsZSxcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IFRodW5kZXJTdG9ybSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAxMDAsIDAuOSlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY29uc3Qgc3RhcnRYID0gdGFyZ2V0LnBvc2l0aW9uLnggKyByYW5kb21JbnQoMCwgdGFyZ2V0LndpZHRoKTtcbiAgICAgIGNvbnN0IHN0YXJ0WSA9IHRhcmdldC5wb3NpdGlvbi55IC0gNTA7XG4gICAgICBjdHgubW92ZVRvKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICAgIGN0eC5saW5lVG8oc3RhcnRYICsgcmFuZG9tSW50KC00MCwgNDApLCB0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5oZWlnaHQpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXR0YWNrIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IFBsYXlhYmxlIH0gZnJvbSBcIi4uLy4uL3Nwcml0ZXNcIjtcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gXCIuLi8uLi91dGlscy9taXNjXCI7XG5cbmV4cG9ydCBjbGFzcyBQaG90b25CZWFtIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJQaG90b24gQmVhbVwiLFxuICAgICAgZGFtYWdlOiA1MCxcbiAgICAgIGhlYWw6IDAsXG4gICAgICB0eXBlOiBcImdyYXNzXCIsXG4gICAgICByYW5nZTogNTAsXG4gICAgICBjb3N0OiA1MCxcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IFBob3RvbkJlYW0ge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBQaG90b25CZWFtIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE1OCwgMjUsIDgsIDAuOClcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcmFuZG9tSW50KHVzZXIucG9zaXRpb24ueCAtIDUwLCB1c2VyLnBvc2l0aW9uLnggLSA1MDApO1xuICAgICAgY29uc3QgeSA9IHJhbmRvbUludCh1c2VyLnBvc2l0aW9uLnksIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IHcgPSByYW5kb21JbnQoMjAsIDEwMCk7XG4gICAgICBjb25zdCBoID0gNTtcbiAgICAgIGNvbnN0IHIgPSByYW5kb21JbnQoMjQwLCAyNTUpO1xuICAgICAgY29uc3QgZyA9IHJhbmRvbUludCgyNDAsIDI1NSk7XG4gICAgICBjb25zdCBiID0gcmFuZG9tSW50KDI0MCwgMjU1KTtcbiAgICAgIGNvbnN0IGEgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YX0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgU29mdEdyYXNzIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJTb2Z0IEdyYXNzXCIsXG4gICAgICBkYW1hZ2U6IDEwLFxuICAgICAgdHlwZTogXCJncmFzc1wiLFxuICAgICAgcmFuZ2U6IDE2LFxuICAgICAgY29zdDogMjAsXG4gICAgICBhY2N1cmFjeTogMC44LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBTb2Z0R3Jhc3Mge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlclxuICAgICAgLmhlYWwoTWF0aC5mbG9vcihkYW1hZ2UgLyAyKSlcbiAgICAgIC5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBTb2Z0R3Jhc3Mge1xuICAgIGNvbnN0IHIgPSByYW5kb21JbnQodXNlci53aWR0aCAvIDE2LCB1c2VyLndpZHRoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDgsIDE2OCwgODYsIDAuNSlcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHVzZXIucG9zaXRpb24ueCArIHVzZXIud2lkdGggLyAyLFxuICAgICAgdXNlci5wb3NpdGlvbi55ICsgdXNlci5oZWlnaHQgLyAyLFxuICAgICAgcixcbiAgICAgIDAsXG4gICAgICAyICogTWF0aC5QSVxuICAgICk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgVG94aWNEcmFpbiBleHRlbmRzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IFwiVG94aWMgRHJhaW5cIixcbiAgICAgIGRhbWFnZTogMjAsXG4gICAgICB0eXBlOiBcInBvaXNvblwiLFxuICAgICAgcmFuZ2U6IDE2LFxuICAgICAgYWNjdXJhY3k6IDAuOCxcbiAgICAgIGNvc3Q6IDIwLFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUaGUgdXNlciBkcmFpbnMgdGhlIHRhcmdldCdzIEhQIGFuZCByZWxlYXNlcyB0b3hpYyBmdW1lcy4gSGFzIDE1JSBjaGFuY2Ugb2YgcG9pc29uaW5nIHRoZSB0YXJnZXQuXCIsXG4gICAgICBlZmZlY3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInBvaXNvblwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgICAgICAgZW5kVmFsdWU6IDEwLFxuICAgICAgICAgIGluYzogMSxcbiAgICAgICAgICBjaGFuY2U6IDAuMTUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogSVBsYXlhYmxlLCB0YXJnZXQ6IElQbGF5YWJsZSk6IFRveGljRHJhaW4ge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBUb3hpY0RyYWluIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLyAxNiwgdXNlci53aWR0aCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxODAsIDExMiwgMjI0LCAwLjUpXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWZmZWN0IGltcGxlbWVudHMgSUVmZmVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgc3RhcnRWYWx1ZTogbnVtYmVyO1xuICAgIGVuZFZhbHVlOiBudW1iZXI7XG4gICAgaW5jOiBudW1iZXI7XG4gICAgY2hhbmNlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgaW5jLFxuICAgICAgICBjaGFuY2VcbiAgICB9OiBJRWZmZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgdGhpcy5lbmRWYWx1ZSA9IGVuZFZhbHVlO1xuICAgICAgICB0aGlzLmluYyA9IGluYztcbiAgICAgICAgdGhpcy5jaGFuY2UgPSBjaGFuY2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0YWNrIGltcGxlbWVudHMgSUF0dGFjayB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgcmFuZ2U6IG51bWJlcjtcbiAgaGVhbDogbnVtYmVyO1xuICBhY2N1cmFjeTogbnVtYmVyO1xuICBjb29sZG93bjogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG4gIGVmZmVjdHM6IEVmZmVjdFtdO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBuYW1lLFxuICAgIGRhbWFnZSxcbiAgICB0eXBlLFxuICAgIHJhbmdlLFxuICAgIGFjY3VyYWN5LFxuICAgIGNvb2xkb3duLFxuICAgIGNvc3QsXG4gICAgaGVhbCxcbiAgICBlZmZlY3RzLFxuICAgIGRlc2NyaXB0aW9uXG4gIH06IElBdHRhY2spIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb3N0ID0gY29zdDtcbiAgICB0aGlzLmhlYWwgPSBoZWFsO1xuICAgIHRoaXMuZWZmZWN0cyA9IGVmZmVjdHM7XG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xuICAgIHRoaXMuYWNjdXJhY3kgPSBhY2N1cmFjeTtcbiAgICB0aGlzLmNvb2xkb3duID0gY29vbGRvd247XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogSVBsYXlhYmxlLCB0YXJnZXQ6IElQbGF5YWJsZSk6IElBdHRhY2sge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvLyBWaWV3cG9ydCA5OjE2IHBhcmEgbcOzdmlsXG5leHBvcnQgY29uc3QgVklFV19XSURUSCA9IDcyMDtcbmV4cG9ydCBjb25zdCBWSUVXX0hFSUdIVCA9IDEyODA7XG5cbi8vIE1hcGEgZGVsIG11bmRvICg0OjMgb3JpZ2luYWwgZGUgTm92ZW1iZXIpXG5leHBvcnQgY29uc3QgTUFQX1dJRFRIID0gMTkyMDtcbmV4cG9ydCBjb25zdCBNQVBfSEVJR0hUID0gMTQ0MDtcblxuZXhwb3J0IGNvbnN0IFRJTEVfV0lEVEggPSA2NDtcbmV4cG9ydCBjb25zdCBUSUxFX0hFSUdIVCA9IDY0O1xuZXhwb3J0IGNvbnN0IENIQVJfV0lEVEggPSAxNjtcbmV4cG9ydCBjb25zdCBDSEFSX0hFSUdIVCA9IDE2O1xuXG4vLyBQb3NpY2nDs24gaW5pY2lhbCBkZWwganVnYWRvciAoY2VudHJhZG8gZW4gZWwgbWFwYSlcbmV4cG9ydCBjb25zdCBDSEFSX1hfT0ZGU0VUID0gTUFQX1dJRFRIIC8gMjtcbmV4cG9ydCBjb25zdCBDSEFSX1lfT0ZGU0VUID0gTUFQX0hFSUdIVCAvIDI7XG5cbi8vIE9mZnNldHMgZGVsIG1hcGEgKHBhcmEgY2VudHJhciBsYSB2aXN0YSBpbmljaWFsKVxuZXhwb3J0IGNvbnN0IE1BUF9YX09GRlNFVCA9IC0oVklFV19XSURUSCAvIDIpO1xuZXhwb3J0IGNvbnN0IE1BUF9ZX09GRlNFVCA9IC0oVklFV19IRUlHSFQgLyAyKTtcblxuZXhwb3J0IGNvbnN0IEJBUl9PRkZTRVQgPSAyO1xuZXhwb3J0IGNvbnN0IEJBUl9IRUlHSFQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX0NIQVNFX0RJU1RBTkNFID0gQ0hBUl9XSURUSCAqIDUwO1xuXG5leHBvcnQgY29uc3QgSVNfQ09MTElERVIgPSA5NTU7XG5leHBvcnQgY29uc3QgTU9WRVNQRUVEID0gNDtcblxuZXhwb3J0IGNvbnN0IFRJTEVTID0ge1xuICAgIHJvd3M6IDQwLFxuICAgIGNvbHM6IDMwXG59O1xuXG5leHBvcnQgY29uc3QgRElSRUNUSU9OUyA9IFtbLTEsIDBdLCBbMCwgLTFdLCBbMSwgMF0sIFswLCAxXV07XG4iLCJleHBvcnQgY29uc3QgY29sbGlzaW9uczogbnVtYmVyW10gPSBbXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCA5NTUsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXG5dIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJlS2V5UHJlc3MgPSAoY29udHJvbGxlcjogQ29udHJvbGxlcikgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBjb250cm9sbGVyLnByZXNzKGUua2V5KTtcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBjb250cm9sbGVyLnJlbGVhc2UoZS5rZXkpO1xuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVUb3VjaENvbnRyb2xzID0gKGNvbnRyb2xsZXI6IENvbnRyb2xsZXIpID0+IHtcbiAgICBjb25zdCB0b3VjaFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG91Y2hVSS5pZCA9ICd0b3VjaC11aSc7XG5cbiAgICAvLyBKb3lzdGljayB6b25lXG4gICAgY29uc3Qgam95c3RpY2tab25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgam95c3RpY2tab25lLmlkID0gJ2pveXN0aWNrLXpvbmUnO1xuICAgIGNvbnN0IGpveXN0aWNrS25vYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGpveXN0aWNrS25vYi5pZCA9ICdqb3lzdGljay1rbm9iJztcbiAgICBqb3lzdGlja1pvbmUuYXBwZW5kQ2hpbGQoam95c3RpY2tLbm9iKTtcblxuICAgIC8vIEF0dGFjayBidXR0b25zIC0gZ3JpZCA0eDIgZm9yIGFsbCA4IGF0dGFja3NcbiAgICBjb25zdCBhdHRhY2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXR0YWNrQnV0dG9ucy5pZCA9ICdhdHRhY2stYnV0dG9ucyc7XG5cbiAgICBjb25zdCBhdHRhY2tDb25maWdzID0gW1xuICAgICAgICB7IGtleTogJ3knLCBsYWJlbDogJ/CflKUnLCBjb2xvcjogJ3JnYmEoMjU1LCAxMDAsIDAsIDAuNiknLCBuYW1lOiAnRmlyZWJhbGwnIH0sXG4gICAgICAgIHsga2V5OiAndScsIGxhYmVsOiAn4p2E77iPJywgY29sb3I6ICdyZ2JhKDEwMCwgMjAwLCAyNTUsIDAuNiknLCBuYW1lOiAnSWNlU2hhcmQnIH0sXG4gICAgICAgIHsga2V5OiAnaScsIGxhYmVsOiAn8J+SmicsIGNvbG9yOiAncmdiYSgxMDAsIDI1NSwgMTAwLCAwLjYpJywgbmFtZTogJ0hlYWwnIH0sXG4gICAgICAgIHsga2V5OiAnbycsIGxhYmVsOiAn4pqhJywgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAwLCAwLjYpJywgbmFtZTogJ0xpZ2h0bmluZycgfSxcbiAgICAgICAgeyBrZXk6ICdwJywgbGFiZWw6ICfimKDvuI8nLCBjb2xvcjogJ3JnYmEoMCwgMjAwLCAwLCAwLjYpJywgbmFtZTogJ1BvaXNvbicgfSxcbiAgICAgICAgeyBrZXk6ICdqJywgbGFiZWw6ICfwn4yq77iPJywgY29sb3I6ICdyZ2JhKDEwMCwgMTAwLCAyNTUsIDAuNiknLCBuYW1lOiAnVGh1bmRlcicgfSxcbiAgICAgICAgeyBrZXk6ICdrJywgbGFiZWw6ICfwn4yRJywgY29sb3I6ICdyZ2JhKDgwLCAwLCAxMjAsIDAuNiknLCBuYW1lOiAnRGFyaycgfSxcbiAgICAgICAgeyBrZXk6ICdsJywgbGFiZWw6ICfinKgnLCBjb2xvcjogJ3JnYmEoMjU1LCAxMDAsIDI1NSwgMC42KScsIG5hbWU6ICdTaGFkb3cnIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IGFjdGl2ZVRvdWNoZXM6IHsgW2lkOiBudW1iZXJdOiBzdHJpbmcgfSA9IHt9O1xuXG4gICAgYXR0YWNrQ29uZmlncy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NOYW1lID0gJ2F0dGFjay1idG4nO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBjZmcubGFiZWw7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gY2ZnLmNvbG9yO1xuICAgICAgICBidG4uZGF0YXNldC5rZXkgPSBjZmcua2V5O1xuICAgICAgICBcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgIGlmICh0b3VjaCkgYWN0aXZlVG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXSA9IGNmZy5rZXk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnByZXNzKGNmZy5rZXkpO1xuICAgICAgICAgICAgYnRuLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjkpJztcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxLjUpJztcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgIGlmICh0b3VjaCkgZGVsZXRlIGFjdGl2ZVRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICAgICAgICBjb250cm9sbGVyLnJlbGVhc2UoY2ZnLmtleSk7XG4gICAgICAgICAgICBidG4uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxKSc7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gTXVsdGktdG91Y2ggc3VwcG9ydDogYWxzbyBjYW5jZWwgd2hlbiB0b3VjaCBpcyBjYW5jZWxsZWRcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICBpZiAodG91Y2gpIGRlbGV0ZSBhY3RpdmVUb3VjaGVzW3RvdWNoLmlkZW50aWZpZXJdO1xuICAgICAgICAgICAgY29udHJvbGxlci5yZWxlYXNlKGNmZy5rZXkpO1xuICAgICAgICAgICAgYnRuLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICAgICAgICBidG4uc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMSknO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGF0dGFja0J1dHRvbnMuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9KTtcblxuICAgIHRvdWNoVUkuYXBwZW5kQ2hpbGQoam95c3RpY2tab25lKTtcbiAgICB0b3VjaFVJLmFwcGVuZENoaWxkKGF0dGFja0J1dHRvbnMpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG91Y2hVSSk7XG5cbiAgICBsZXQgam95c3RpY2tBY3RpdmUgPSBmYWxzZTtcbiAgICBsZXQgam95c3RpY2tDZW50ZXJYID0gMDtcbiAgICBsZXQgam95c3RpY2tDZW50ZXJZID0gMDtcbiAgICBsZXQgam95c3RpY2tUb3VjaElkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAgIGpveXN0aWNrWm9uZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoam95c3RpY2tUb3VjaElkICE9PSBudWxsKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGpveXN0aWNrVG91Y2hJZCA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgICAgIGpveXN0aWNrQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlY3QgPSBqb3lzdGlja1pvbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGpveXN0aWNrQ2VudGVyWCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyO1xuICAgICAgICBqb3lzdGlja0NlbnRlclkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgdXBkYXRlSm95c3RpY2sodG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XG4gICAgfSk7XG5cbiAgICBqb3lzdGlja1pvbmUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIWpveXN0aWNrQWN0aXZlIHx8IGpveXN0aWNrVG91Y2hJZCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gRmluZCBvdXIgc3BlY2lmaWMgdG91Y2hcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLnRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gam95c3RpY2tUb3VjaElkKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlSm95c3RpY2soZS50b3VjaGVzW2ldLmNsaWVudFgsIGUudG91Y2hlc1tpXS5jbGllbnRZKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgam95c3RpY2tab25lLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSBqb3lzdGlja1RvdWNoSWQpIHtcbiAgICAgICAgICAgICAgICBqb3lzdGlja0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGpveXN0aWNrVG91Y2hJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgam95c3RpY2tLbm9iLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknO1xuICAgICAgICAgICAgICAgIHJlbGVhc2VBbGxEaXJlY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGpveXN0aWNrWm9uZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gam95c3RpY2tUb3VjaElkKSB7XG4gICAgICAgICAgICAgICAgam95c3RpY2tBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBqb3lzdGlja1RvdWNoSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGpveXN0aWNrS25vYi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC01MCUsIC01MCUpJztcbiAgICAgICAgICAgICAgICByZWxlYXNlQWxsRGlyZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1cGRhdGVKb3lzdGljayA9IChjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBkeCA9IGNsaWVudFggLSBqb3lzdGlja0NlbnRlclg7XG4gICAgICAgIGNvbnN0IGR5ID0gY2xpZW50WSAtIGpveXN0aWNrQ2VudGVyWTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCBtYXhEaXN0YW5jZSA9IE1hdGgubWluKGpveXN0aWNrWm9uZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDMsIDUwKTtcblxuICAgICAgICBjb25zdCBjbGFtcGVkRGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZSwgbWF4RGlzdGFuY2UpO1xuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcblxuICAgICAgICBjb25zdCBrbm9iWCA9IE1hdGguY29zKGFuZ2xlKSAqIGNsYW1wZWREaXN0YW5jZTtcbiAgICAgICAgY29uc3Qga25vYlkgPSBNYXRoLnNpbihhbmdsZSkgKiBjbGFtcGVkRGlzdGFuY2U7XG4gICAgICAgIGpveXN0aWNrS25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKGNhbGMoLTUwJSArICR7a25vYlh9cHgpLCBjYWxjKC01MCUgKyAke2tub2JZfXB4KSlgO1xuXG4gICAgICAgIHJlbGVhc2VBbGxEaXJlY3Rpb25zKCk7XG5cbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gbWF4RGlzdGFuY2UgKiAwLjM1O1xuICAgICAgICBpZiAoZGlzdGFuY2UgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiBNYXRoLmFicyhkeSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnByZXNzKGR4ID4gMCA/ICdkJyA6ICdhJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucHJlc3MoZHkgPiAwID8gJ3MnIDogJ3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZWxlYXNlQWxsRGlyZWN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29udHJvbGxlci5yZWxlYXNlKCd3Jyk7XG4gICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZSgnYScpO1xuICAgICAgICBjb250cm9sbGVyLnJlbGVhc2UoJ3MnKTtcbiAgICAgICAgY29udHJvbGxlci5yZWxlYXNlKCdkJyk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGpveXN0aWNrWm9uZSwgYXR0YWNrQnV0dG9ucyB9O1xufTtcbiIsImltcG9ydCB7IFNwcml0ZSwgUGxheWFibGUgfSBmcm9tIFwiLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyBtYXBTZXR1cCB9IGZyb20gXCIuL3JlbmRlci9jYW52YXNcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUtleVByZXNzIH0gZnJvbSBcIi4vZXZlbnRzL2tleXNcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZVRvdWNoQ29udHJvbHMgfSBmcm9tIFwiLi9ldmVudHMvdG91Y2hcIjtcbmltcG9ydCB7IGFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi9yZW5kZXIvYW5pbWF0aW9uXCI7XG5pbXBvcnQge1xuICBNQVBfV0lEVEgsXG4gIE1BUF9IRUlHSFQsXG4gIE1BUF9YX09GRlNFVCxcbiAgTUFQX1lfT0ZGU0VULFxuICBDSEFSX1hfT0ZGU0VULFxuICBDSEFSX1lfT0ZGU0VULFxuICBFTkVNWV9YX09GRlNFVCxcbiAgRU5FTVlfWV9PRkZTRVQsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgVG94aWNEcmFpbiB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC90b3hpY0RyYWluXCI7XG5pbXBvcnQgeyBTb2Z0R3Jhc3MgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3Qvc29mdEdyYXNzXCI7XG5pbXBvcnQgeyBDaXRyaWNIZWFsaW5nIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L2NpdHJpY0hlYWxpbmdcIjtcbmltcG9ydCB7IFBob3RvbkJlYW0gfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvcGhvdG9uQmVhbVwiO1xuaW1wb3J0IHsgU2hhZG93U3RlcCB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9TaGFkb3dTdGVwXCI7XG5pbXBvcnQgeyBUaHVuZGVyU3Rvcm0gfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvbmV3QXR0YWNrc1wiO1xuaW1wb3J0IHsgTGlnaHRuaW5nQm9sdCB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9uZXdBdHRhY2tzXCI7XG5pbXBvcnQgeyBQb2lzb25TdGluZyB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9uZXdBdHRhY2tzXCI7XG5pbXBvcnQgeyBGaXJlYmFsbCB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9uZXdBdHRhY2tzXCI7XG5pbXBvcnQgeyBJY2VTaGFyZCB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9uZXdBdHRhY2tzXCI7XG5cbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEJhY2tncm91bmRTcHJpdGUgZnJvbSBcIi4vaW1nL25vdmVtYmVyLnBuZ1wiO1xuaW1wb3J0IEZvcmVncm91bmRTcHJpdGUgZnJvbSBcIi4vaW1nL25vdmVtYmVyX2ZvcmVncm91bmQucG5nXCI7XG5pbXBvcnQgUGxheWVyU3ByaXRlIGZyb20gXCIuL2ltZy9tYWluX2NoYXJfc3ByaXRlLnBuZ1wiO1xuaW1wb3J0IEVuZW15U3ByaXRlIGZyb20gXCIuL2ltZy9tdXNocm9vbV9ib3NzLnBuZ1wiO1xuXG5jb25zdCBsb2FkSW1hZ2UgPSAoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+ID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKGltYWdlKTtcbiAgICB9XG4gICAgaW1hZ2Uub25lcnJvciA9IGUgPT4ge1xuICAgICAgcmVqZWN0KGUpXG4gICAgfVxuICB9KVxufTtcblxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGxheWVySW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGJnSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGZnSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGVuZW15SW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGltYWdlcyA9IFtwbGF5ZXJJbWcsIGJnSW1nLCBmZ0ltZywgZW5lbXlJbWddO1xuICBcbiAgYmdJbWcuc3JjID0gQmFja2dyb3VuZFNwcml0ZTtcbiAgcGxheWVySW1nLnNyYyA9IFBsYXllclNwcml0ZTtcbiAgZmdJbWcuc3JjID0gRm9yZWdyb3VuZFNwcml0ZTtcbiAgZW5lbXlJbWcuc3JjID0gRW5lbXlTcHJpdGU7XG4gIGF3YWl0IFByb21pc2UuYWxsKGltYWdlcy5tYXAobG9hZEltYWdlKSk7XG5cbiAgY29uc3QgcGxheWVyRnJhbWVzID0gMTY7XG5cblxuXG4gIGNvbnN0IGJnID0gbmV3IFNwcml0ZSh7XG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IE1BUF9YX09GRlNFVCxcbiAgICAgIHk6IE1BUF9ZX09GRlNFVCxcbiAgICB9LFxuICAgIGltYWdlOiBiZ0ltZyxcbiAgICB3aWR0aDogTUFQX1dJRFRILFxuICAgIGhlaWdodDogTUFQX0hFSUdIVCxcbiAgICBkaXJlY3Rpb25zOiB7XG4gICAgICBkb3duOiAwLFxuICAgICAgdXA6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGZnID0gbmV3IFNwcml0ZSh7XG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IE1BUF9YX09GRlNFVCxcbiAgICAgIHk6IE1BUF9ZX09GRlNFVCxcbiAgICB9LFxuICAgIGltYWdlOiBmZ0ltZyxcbiAgICB3aWR0aDogTUFQX1dJRFRILFxuICAgIGhlaWdodDogTUFQX0hFSUdIVCxcbiAgICBkaXJlY3Rpb25zOiB7XG4gICAgICBkb3duOiAwLFxuICAgICAgdXA6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5YWJsZShcbiAgICB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBDSEFSX1hfT0ZGU0VULFxuICAgICAgICB5OiBDSEFSX1lfT0ZGU0VULFxuICAgICAgfSxcbiAgICAgIGltYWdlOiBwbGF5ZXJJbWcsXG4gICAgICB3aWR0aDogcGxheWVySW1nLndpZHRoIC8gcGxheWVyRnJhbWVzLFxuICAgICAgaGVpZ2h0OiBwbGF5ZXJJbWcuaGVpZ2h0LFxuICAgICAgem9vbTogNCxcbiAgICAgIGZyYW1lczogcGxheWVyRnJhbWVzLFxuICAgICAgZGlyZWN0aW9uczoge1xuICAgICAgICBkb3duOiAwLFxuICAgICAgICB1cDogNCxcbiAgICAgICAgbGVmdDogOCxcbiAgICAgICAgcmlnaHQ6IDEyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhwOiAxMDAwLFxuICAgICAgaHBSZWdlbjogMWUtNCxcbiAgICAgIG1hbmE6IDEwMDAsXG4gICAgICBtYW5hUmVnZW46IDAuMDAxLFxuICAgICAgbXVzY2xlOiAzMCxcbiAgICAgIG1hZ2lrOiAxNSxcbiAgICAgIGFybW91cjogMzAsXG4gICAgICBpbW11bml0eTogMzAsXG4gICAgICBhdHRhY2tzOiBbbmV3IFNvZnRHcmFzcygpLCBuZXcgQ2l0cmljSGVhbGluZygpLCBuZXcgU2hhZG93U3RlcCgpLCBuZXcgUGhvdG9uQmVhbSgpLCBuZXcgRmlyZWJhbGwoKSwgbmV3IEljZVNoYXJkKCksIG5ldyBMaWdodG5pbmdCb2x0KCksIG5ldyBQb2lzb25TdGluZygpLCBuZXcgVGh1bmRlclN0b3JtKCldLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZW5lbXlDb29yZHMgPSBbXG4gICAgeyB4OiAyNjUsIHk6IDIwIH0sXG4gICAgeyB4OiA4MDAsIHk6IDQwMCB9LFxuICAgIHsgeDogMTIwMCwgeTogMjAwIH0sXG4gICAgeyB4OiA1MDAsIHk6IDgwMCB9LFxuICAgIHsgeDogMTUwMCwgeTogNjAwIH0sXG4gICAgeyB4OiAzMDAsIHk6IDEyMDAgfSxcbiAgICB7IHg6IDEwMDAsIHk6IDEwMDAgfSxcbiAgXTtcblxuICBjb25zdCBlbmVtaWVzID0gZW5lbXlDb29yZHMubWFwKGVuZW15Q29vcmRzID0+IHtcbiAgICBjb25zdCBlbmVteSA9IG5ldyBQbGF5YWJsZSh7XG4gICAgICAgIHBvc2l0aW9uOiBlbmVteUNvb3JkcyxcbiAgICAgICAgaW1hZ2U6IGVuZW15SW1nLFxuICAgICAgICB3aWR0aDogZW5lbXlJbWcud2lkdGgsXG4gICAgICAgIGhlaWdodDogZW5lbXlJbWcuaGVpZ2h0LFxuICAgICAgICB6b29tOiA0LFxuICAgICAgICBkaXJlY3Rpb25zOiB7XG4gICAgICAgICAgZG93bjogMCxcbiAgICAgICAgICB1cDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaHA6IDEwMDAsXG4gICAgICAgIGhwUmVnZW46IDFlLTQsXG4gICAgICAgIG1hbmE6IDEwMDAsXG4gICAgICAgIG1hbmFSZWdlbjogMC4wMDEsXG4gICAgICAgIG11c2NsZTogMTAsXG4gICAgICAgIG1hZ2lrOiAxMCxcbiAgICAgICAgYXJtb3VyOiAzNSxcbiAgICAgICAgaW1tdW5pdHk6IDMwLFxuICAgICAgICBhdHRhY2tzOiBbbmV3IFRveGljRHJhaW4oKV0sXG4gICAgICB9XG4gICAgKVxuICAgIHJldHVybiBlbmVteTtcbiAgfSk7XG5cbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoe1xuICAgIGNvbnRyb2xsZXI6IHtcbiAgICAgIHVwOiBcIndcIixcbiAgICAgIGRvd246IFwic1wiLFxuICAgICAgbGVmdDogXCJhXCIsXG4gICAgICByaWdodDogXCJkXCIsXG4gICAgICBhdHRhY2tzOiBbXCJ5XCIsIFwidVwiLCBcImlcIiwgXCJvXCJdLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBjYW52YXMgPSBtYXBTZXR1cCgpO1xuICBjb25maWd1cmVLZXlQcmVzcyhzdGF0ZS5jb250cm9sbGVyKTtcbiAgY29uZmlndXJlVG91Y2hDb250cm9scyhzdGF0ZS5jb250cm9sbGVyKTtcbiAgXG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1idG4nKTtcbiAgaWYgKHJlc3RhcnRCdG4pIHtcbiAgICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGFuaW1hdGlvbkJ1aWxkZXIoeyBiZywgcGxheWVyLCBzdGF0ZSwgY2FudmFzLCBmZywgZW5lbWllcyB9KTtcbn07XG5cbm1haW4oKTtcbiIsImltcG9ydCB7IGdldFNjYWxlIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBNT1ZFU1BFRUQsIE1BUF9XSURUSCwgTUFQX0hFSUdIVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldENvbGxpZGVycywgY2hlY2tDb2xsaXNpb24gfSBmcm9tIFwiLi9jb2xsaWRlclwiO1xuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwiLi9jb2xsaWRlclwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCB7IFNwcml0ZSwgUGxheWFibGUgfSBmcm9tIFwiLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgaGFzS2V5IH0gZnJvbSBcIi4uL3V0aWxzL21pc2NcIjtcblxudHlwZSBNb3Rpb25Db250cm9sQXJncyA9IHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHN0YXRlOiBTdGF0ZTtcbiAgcGxheWVyOiBQbGF5YWJsZTtcbiAgZW5lbWllczogUGxheWFibGVbXTtcbiAgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdO1xufTtcblxudHlwZSBBbmltYXRpb25CdWlsZGVyQXJncyA9IHtcbiAgYmc6IFNwcml0ZTtcbiAgcGxheWVyOiBQbGF5YWJsZTtcbiAgZW5lbWllczogUGxheWFibGVbXTtcbiAgZmc6IFNwcml0ZTtcbiAgc3RhdGU6IFN0YXRlO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xufTtcblxuY29uc3QgRU5FTVlfQVRUQUNLX0NPT0xET1dOID0gOTA7XG5sZXQgZW5lbXlBdHRhY2tUaW1lciA9IDA7XG5cbmNvbnN0IG1vdGlvbkNvbnRyb2wgPSAoe1xuICBjdHgsXG4gIHN0YXRlLFxuICBwbGF5ZXIsXG4gIGVuZW1pZXMsXG4gIGNvbGxpZGVycyxcbn06IE1vdGlvbkNvbnRyb2xBcmdzKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgY29udHJvbGxlciB9ID0gc3RhdGU7XG4gIGxldCBmdXR1cmVLZXlTdGF0ZTogY29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBpZiAoY29udHJvbGxlci5pc1ByZXNzZWQoXCJ1cFwiKSkge1xuICAgIGZ1dHVyZUtleVN0YXRlLnkgPSAtTU9WRVNQRUVEO1xuICB9XG4gIGlmIChjb250cm9sbGVyLmlzUHJlc3NlZChcImxlZnRcIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS54ID0gLU1PVkVTUEVFRDtcbiAgfVxuICBpZiAoY29udHJvbGxlci5pc1ByZXNzZWQoXCJkb3duXCIpKSB7XG4gICAgZnV0dXJlS2V5U3RhdGUueSA9IE1PVkVTUEVFRDtcbiAgfVxuICBpZiAoY29udHJvbGxlci5pc1ByZXNzZWQoXCJyaWdodFwiKSkge1xuICAgIGZ1dHVyZUtleVN0YXRlLnggPSBNT1ZFU1BFRUQ7XG4gIH1cblxuICAvLyBDaGVjayBjb2xsaXNpb25zIGZvciBlYWNoIGF4aXMgc2VwYXJhdGVseVxuICBjb25zdCBwbGF5ZXJDb2xsaXNpb25zWCA9IGNvbGxpZGVycy5zb21lKChjb2xsaWRlcjogQm94Q29sbGlkZXIpID0+XG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBjb2xsaWRlciwgeyB4OiBmdXR1cmVLZXlTdGF0ZS54LCB5OiAwIH0pXG4gICk7XG4gIGNvbnN0IHBsYXllckNvbGxpc2lvbnNZID0gY29sbGlkZXJzLnNvbWUoKGNvbGxpZGVyOiBCb3hDb2xsaWRlcikgPT5cbiAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGNvbGxpZGVyLCB7IHg6IDAsIHk6IGZ1dHVyZUtleVN0YXRlLnkgfSlcbiAgKTtcblxuICBjb25zdCBtb3ZlbWVudERpcmVjdGlvbiA9IGNvbnRyb2xsZXIuZ2V0TW92ZW1lbnQoKTtcbiAgXG4gIGlmICghbW92ZW1lbnREaXJlY3Rpb24gJiYgZnV0dXJlS2V5U3RhdGUueCA9PT0gMCAmJiBmdXR1cmVLZXlTdGF0ZS55ID09PSAwKSB7XG4gICAgcGxheWVyLmFuaW1hdGUoXCJpZGxlXCIpO1xuICB9IGVsc2Uge1xuICAgIC8vIERldGVybWluZSBhbmltYXRpb24gZGlyZWN0aW9uXG4gICAgaWYgKE1hdGguYWJzKGZ1dHVyZUtleVN0YXRlLngpID4gTWF0aC5hYnMoZnV0dXJlS2V5U3RhdGUueSkpIHtcbiAgICAgIHBsYXllci5hbmltYXRlKGZ1dHVyZUtleVN0YXRlLnggPiAwID8gXCJyaWdodFwiIDogXCJsZWZ0XCIpO1xuICAgIH0gZWxzZSBpZiAoZnV0dXJlS2V5U3RhdGUueSAhPT0gMCkge1xuICAgICAgcGxheWVyLmFuaW1hdGUoZnV0dXJlS2V5U3RhdGUueSA+IDAgPyBcImRvd25cIiA6IFwidXBcIik7XG4gICAgfSBlbHNlIGlmIChmdXR1cmVLZXlTdGF0ZS54ICE9PSAwKSB7XG4gICAgICBwbGF5ZXIuYW5pbWF0ZShmdXR1cmVLZXlTdGF0ZS54ID4gMCA/IFwicmlnaHRcIiA6IFwibGVmdFwiKTtcbiAgICB9XG4gICAgXG4gICAgLy8gTW92ZSBlbmVtaWVzIHRvd2FyZCBwbGF5ZXJcbiAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgaWYgKGVuZW15LmFsaXZlKCkpIGVuZW15LmZvbGxvdyhwbGF5ZXIsIGNvbGxpZGVycyk7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBseSBtb3ZlbWVudCB3aXRoIGNvbGxpc2lvbiAocGxheWVyIG1vdmVzIHRocm91Z2ggd29ybGQpXG4gICAgaWYgKGZ1dHVyZUtleVN0YXRlLnggIT09IDAgJiYgIXBsYXllckNvbGxpc2lvbnNYKSB7XG4gICAgICBwbGF5ZXIucG9zaXRpb24ueCArPSBmdXR1cmVLZXlTdGF0ZS54O1xuICAgIH1cbiAgICBpZiAoZnV0dXJlS2V5U3RhdGUueSAhPT0gMCAmJiAhcGxheWVyQ29sbGlzaW9uc1kpIHtcbiAgICAgIHBsYXllci5wb3NpdGlvbi55ICs9IGZ1dHVyZUtleVN0YXRlLnk7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5lbXkgYXR0YWNrcyB3aXRoIGNvb2xkb3duXG4gIGVuZW15QXR0YWNrVGltZXIrKztcbiAgaWYgKGVuZW15QXR0YWNrVGltZXIgPj0gRU5FTVlfQVRUQUNLX0NPT0xET1dOKSB7XG4gICAgZW5lbXlBdHRhY2tUaW1lciA9IDA7XG4gICAgZW5lbWllcy5mb3JFYWNoKChlbmVteTogUGxheWFibGUpID0+IHtcbiAgICAgIGlmIChlbmVteS5hbGl2ZSgpKSB7XG4gICAgICAgIGVuZW15LnJlZ2VuKCkuYXR0YWNrKHBsYXllciwgMCwgY3R4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBsYXllciByZWdlblxuICBwbGF5ZXIucmVnZW4oKTtcbiAgXG4gIC8vIFBsYXllciBhdHRhY2tzXG4gIGNvbnN0IGF0dGFja0Nob2ljZSA9IGNvbnRyb2xsZXIuZ2V0QXR0YWNrKCk7XG4gIGlmIChhdHRhY2tDaG9pY2UgIT09IG51bGwgJiYgZW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWxpdmVFbmVtaWVzID0gZW5lbWllcy5maWx0ZXIoZSA9PiBlLmFsaXZlKCkpO1xuICAgIGlmIChhbGl2ZUVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2xvc2VzdEVuZW15ID0gYWxpdmVFbmVtaWVzLnJlZHVjZSgoY2xvc2VzdCwgZW5lbXkpID0+IHtcbiAgICAgICAgY29uc3QgZGlzdFRvRW5lbXkgPSBNYXRoLmFicyhlbmVteS5wb3NpdGlvbi54IC0gcGxheWVyLnBvc2l0aW9uLngpICsgTWF0aC5hYnMoZW5lbXkucG9zaXRpb24ueSAtIHBsYXllci5wb3NpdGlvbi55KTtcbiAgICAgICAgY29uc3QgZGlzdFRvQ2xvc2VzdCA9IE1hdGguYWJzKGNsb3Nlc3QucG9zaXRpb24ueCAtIHBsYXllci5wb3NpdGlvbi54KSArIE1hdGguYWJzKGNsb3Nlc3QucG9zaXRpb24ueSAtIHBsYXllci5wb3NpdGlvbi55KTtcbiAgICAgICAgcmV0dXJuIGRpc3RUb0VuZW15IDwgZGlzdFRvQ2xvc2VzdCA/IGVuZW15IDogY2xvc2VzdDtcbiAgICAgIH0pO1xuICAgICAgcGxheWVyLmF0dGFjayhjbG9zZXN0RW5lbXksIGF0dGFja0Nob2ljZSwgY3R4KTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gKHtcbiAgYmcsXG4gIHBsYXllcixcbiAgc3RhdGUsXG4gIGNhbnZhcyxcbiAgZmcsXG4gIGVuZW1pZXMsXG59OiBBbmltYXRpb25CdWlsZGVyQXJncyk6IHZvaWQgPT4ge1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgY29uc3QgY29sbGlkZXJzID0gZ2V0Q29sbGlkZXJzKCk7XG4gIFxuICAvLyBDYW1lcmEgcG9zaXRpb24gKHRvcC1sZWZ0IG9mIHZpZXdwb3J0KVxuICBsZXQgY2FtWCA9IHBsYXllci5wb3NpdGlvbi54IC0gMzYwOyAgLy8gVklFV19XSURUSCAvIDJcbiAgbGV0IGNhbVkgPSBwbGF5ZXIucG9zaXRpb24ueSAtIDY0MDsgIC8vIFZJRVdfSEVJR0hUIC8gMlxuICBcbiAgY29uc3QgYW5pbWF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCk7XG4gICAgXG4gICAgLy8gQ2xlYXIgc2NyZWVuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIFxuICAgIC8vIEFwcGx5IHZpZXdwb3J0IHNjYWxpbmdcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgIFxuICAgIC8vIENhbWVyYSB0cmFuc2Zvcm0gKGZvbGxvdyBwbGF5ZXIpXG4gICAgY3R4LnRyYW5zbGF0ZSgtY2FtWCwgLWNhbVkpO1xuICAgIFxuICAgIC8vIERyYXcgZ2FtZSB3b3JsZFxuICAgIGJnLmRyYXcoY3R4KTtcbiAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgaWYgKGVuZW15LmFsaXZlKCkpIHtcbiAgICAgICAgZW5lbXkuZHJhdyhjdHgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBsYXllci5kcmF3KGN0eCk7XG4gICAgZmcuZHJhdyhjdHgpO1xuICAgIFxuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgXG4gICAgLy8gRHJhdyBIVUQgKGZpeGVkIHBvc2l0aW9uKVxuICAgIGRyYXdIVUQoY3R4LCBwbGF5ZXIsIGNhbnZhcyk7XG4gICAgXG4gICAgLy8gVXBkYXRlIGNhbWVyYSAoc21vb3RoIGZvbGxvdylcbiAgICBjb25zdCB0YXJnZXRDYW1YID0gcGxheWVyLnBvc2l0aW9uLnggLSAzNjA7XG4gICAgY29uc3QgdGFyZ2V0Q2FtWSA9IHBsYXllci5wb3NpdGlvbi55IC0gNjQwO1xuICAgIFxuICAgIC8vIENsYW1wIGNhbWVyYSB0byBtYXAgYm91bmRzXG4gICAgY29uc3QgY2xhbXBlZENhbVggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0YXJnZXRDYW1YLCBNQVBfV0lEVEggLSA3MjApKTtcbiAgICBjb25zdCBjbGFtcGVkQ2FtWSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRhcmdldENhbVksIE1BUF9IRUlHSFQgLSAxMjgwKSk7XG4gICAgXG4gICAgLy8gU21vb3RoIGxlcnBcbiAgICBjYW1YICs9IChjbGFtcGVkQ2FtWCAtIGNhbVgpICogMC4xO1xuICAgIGNhbVkgKz0gKGNsYW1wZWRDYW1ZIC0gY2FtWSkgKiAwLjE7XG4gICAgXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICBtb3Rpb25Db250cm9sKHsgY3R4LCBzdGF0ZSwgcGxheWVyLCBlbmVtaWVzLCBjb2xsaWRlcnMgfSk7XG4gIH07XG4gIGFuaW1hdGUoKTtcbn07XG5cbmNvbnN0IGRyYXdIVUQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBsYXllcjogUGxheWFibGUsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcbiAgY29uc3QgaHVkWCA9IDEwO1xuICBjb25zdCBodWRZID0gMTA7XG4gIGNvbnN0IGJhcldpZHRoID0gMTUwO1xuICBjb25zdCBiYXJIZWlnaHQgPSAxNDtcbiAgY29uc3Qgc3BhY2luZyA9IDY7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjgpXCI7XG4gIGN0eC5maWxsUmVjdChodWRYIC0gNCwgaHVkWSAtIDQsIGJhcldpZHRoICsgOCwgYmFySGVpZ2h0ICogMiArIHNwYWNpbmcgKyAyNCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICBjdHguZm9udCA9IFwiYm9sZCAxMnB4IG1vbm9zcGFjZVwiO1xuICBjdHguZmlsbFRleHQoYEhQOiAke01hdGguZmxvb3IocGxheWVyLmhwKX0vJHtwbGF5ZXIubWF4SHB9YCwgaHVkWCwgaHVkWSArIDEwKTtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjMzMzXCI7XG4gIGN0eC5maWxsUmVjdChodWRYLCBodWRZICsgMTYsIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gcGxheWVyLmhwIC8gcGxheWVyLm1heEhwID4gMC4zID8gXCIjZTc0YzNjXCIgOiBcIiNmZjAwMDBcIjtcbiAgY3R4LmZpbGxSZWN0KGh1ZFgsIGh1ZFkgKyAxNiwgYmFyV2lkdGggKiBNYXRoLm1heCgwLCBwbGF5ZXIuaHAgLyBwbGF5ZXIubWF4SHApLCBiYXJIZWlnaHQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgY3R4LmZpbGxUZXh0KGBNUDogJHtNYXRoLmZsb29yKHBsYXllci5tYW5hKX0vJHtwbGF5ZXIubWF4TWFuYX1gLCBodWRYLCBodWRZICsgMzYpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiMzMzNcIjtcbiAgY3R4LmZpbGxSZWN0KGh1ZFgsIGh1ZFkgKyA0MiwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBcIiMzNDk4ZGJcIjtcbiAgY3R4LmZpbGxSZWN0KGh1ZFgsIGh1ZFkgKyA0MiwgYmFyV2lkdGggKiBNYXRoLm1heCgwLCBwbGF5ZXIubWFuYSAvIHBsYXllci5tYXhNYW5hKSwgYmFySGVpZ2h0KTtcbiAgXG4gIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC43KVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNlNzRjM2NcIjtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMnB4IG1vbm9zcGFjZVwiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICAgIGN0eC5mb250ID0gXCJib2xkIDE2cHggbW9ub3NwYWNlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiUmVzdGFydCB0byBwbGF5IGFnYWluXCIsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcInN0YXJ0XCI7XG4gICAgXG4gICAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWJ0bicpO1xuICAgIGlmIChyZXN0YXJ0QnRuKSByZXN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgVklFV19XSURUSCwgVklFV19IRUlHSFQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBTQ0FMRSA9IDE7XG5cbmV4cG9ydCBjb25zdCBtYXBTZXR1cCA9ICgpOiBIVE1MQ2FudmFzRWxlbWVudCA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICBjb25zdCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICBjb25zdCBzY3JlZW5XID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHNjcmVlbkggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgLy8gRml0IDk6MTYgdmlld3BvcnQgaW50byBzY3JlZW4gKGNvdmVyIG1vZGUpXG4gIGNvbnN0IHNjYWxlWCA9IHNjcmVlblcgLyBWSUVXX1dJRFRIO1xuICBjb25zdCBzY2FsZVkgPSBzY3JlZW5IIC8gVklFV19IRUlHSFQ7XG4gIFNDQUxFID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xuXG4gIC8vIENhbnZhcyBmaWxscyBlbnRpcmUgc2NyZWVuXG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IHNjcmVlblcgKyBcInB4XCI7XG4gIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBzY3JlZW5IICsgXCJweFwiO1xuICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGNhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gIGNhbnZhcy5zdHlsZS50b3AgPSBcIjBcIjtcblxuICBjYW52YXMud2lkdGggPSBNYXRoLmZsb29yKHNjcmVlblcgKiBkcHIpO1xuICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihzY3JlZW5IICogZHByKTtcblxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgY3R4LnNldFRyYW5zZm9ybShkcHIsIDAsIDAsIGRwciwgMCwgMCk7XG4gIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuICByZXR1cm4gY2FudmFzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNjYWxlID0gKCkgPT4gU0NBTEU7XG4iLCJpbXBvcnQgeyBjb2xsaXNpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGEvY29sbGlzaW9uXCI7XG5cbmV4cG9ydCBjb25zdCBtYWtlR3JpZCA9IChjaHVua1NpemU6IG51bWJlcik6IG51bWJlcltdW10gPT4ge1xuICAgIGNvbnN0IGNvbGxpc2lvbkdyaWQ6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpICs9IGNodW5rU2l6ZSkge1xuICAgICAgICBjb2xsaXNpb25HcmlkLnB1c2goY29sbGlzaW9ucy5zbGljZShpLCBpICsgY2h1bmtTaXplKSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xsaXNpb25HcmlkXG59XG4iLCJpbXBvcnQgeyBtYWtlR3JpZCB9IGZyb20gXCIuL2NvbGxpc2lvbnNcIjtcbmltcG9ydCB7IElTX0NPTExJREVSLCBNQVBfWF9PRkZTRVQsIE1BUF9ZX09GRlNFVCwgVElMRVMsIFRJTEVfSEVJR0hULCBUSUxFX1dJRFRIIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBCb3hDb2xsaWRlciBpbXBsZW1lbnRzIEJveCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXM7XG4gICAgaXNDb2xsaWRlcjogYm9vbGVhbjtcbiAgICBzdGF0aWMgd2lkdGggPSBUSUxFX1dJRFRIO1xuICAgIHN0YXRpYyBoZWlnaHQgPSBUSUxFX0hFSUdIVDtcblxuICAgIGNvbnN0cnVjdG9yKHsgcG9zaXRpb24gfTogQm94UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLndpZHRoID0gQm94Q29sbGlkZXIud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQm94Q29sbGlkZXIuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDEwMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgQm94Q29sbGlkZXIud2lkdGgsIEJveENvbGxpZGVyLmhlaWdodCk7XG4gICAgICAgIGN0eC5mb250ID0gXCIxMHB4IEFyaWFsXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChgKCR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9KWAsIHRoaXMucG9zaXRpb24ueCArIDEwLCB0aGlzLnBvc2l0aW9uLnkgKyAyMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgNSwgNSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY29vcmRzQWJzUG9zaXRpb24gPSAoY29vcmRzOiBjb29yZGluYXRlcyk6IGNvb3JkaW5hdGVzID0+ICh7XG4gICAgeDogTWF0aC5mbG9vcigoY29vcmRzLnggLSBNQVBfWF9PRkZTRVQpIC8gVElMRV9XSURUSCksXG4gICAgeTogTWF0aC5mbG9vcigoY29vcmRzLnkgLSBNQVBfWV9PRkZTRVQpIC8gVElMRV9IRUlHSFQpLFxufSlcblxuZXhwb3J0IGNvbnN0IGNvb3Jkc01hcFBvc2l0aW9uID0gKGNvb3JkczogY29vcmRpbmF0ZXMpOiBjb29yZGluYXRlcyA9PiAoe1xuICAgIHg6IChjb29yZHMueCAqIFRJTEVfV0lEVEgpICsgTUFQX1hfT0ZGU0VULFxuICAgIHk6IChjb29yZHMueSAqIFRJTEVfSEVJR0hUKSArIE1BUF9ZX09GRlNFVCxcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRDb2xsaWRlcnMgPSAoKTogQm94Q29sbGlkZXJbXSA9PiB7XG4gICAgY29uc3QgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdID0gW107XG4gICAgY29uc3QgZ3JpZDogbnVtYmVyW11bXSA9IG1ha2VHcmlkKFRJTEVTLnJvd3MpO1xuICAgIGdyaWQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGopID0+IHtcbiAgICAgICAgICAgIGlmIChjb2wgPT09IElTX0NPTExJREVSKSB7XG4gICAgICAgICAgICAgICAgY29sbGlkZXJzLnB1c2gobmV3IEJveENvbGxpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNvb3Jkc01hcFBvc2l0aW9uKHsgeDogaiwgeTogaSB9KSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuIGNvbGxpZGVycztcbn1cblxuLyoqXG4gKiAgICAgICAgICBfX19fXyBfX19fX1xuICogICAgICAgICAgfCBQIHwgfCBDIHxcbiAqICAgICAgICAgIOKAvuKAvuKAvuKAvuKAviDigL7igL7igL7igL7igL5cbiAqICAgICAgICAgXG4gKiBAcGFyYW0gc2hhcGUxIFxuICogQHBhcmFtIHNoYXBlMiBcbiAqIEBwYXJhbSBwYXJhbTIgXG4gKiBAcGFyYW0gdG9sZXJhbmNlIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVja0NvbGxpc2lvbiA9IChcbiAgICBzaGFwZTE6IEJveCxcbiAgICBzaGFwZTI6IEJveCxcbiAgICB7IHgsIHkgfTogY29vcmRpbmF0ZXMsXG4gICAgdG9sZXJhbmNlOiBudW1iZXIgPSAxNlxuKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qgc2hhcGUxUG9zaXRpb24gPSBzaGFwZTEucG9zaXRpb247XG4gICAgY29uc3Qgc2hhcGUyUG9zaXRpb24gPSBzaGFwZTIucG9zaXRpb247XG5cbiAgICByZXR1cm4gKChzaGFwZTFQb3NpdGlvbi54ICsgc2hhcGUxLndpZHRoID4gc2hhcGUyUG9zaXRpb24ueCArIHggKyB0b2xlcmFuY2UpIC8vIHBsYXllciBpcyB0byB0aGUgcmlnaHQgb2YgY29sbGlkZXJcbiAgICAmJiAoc2hhcGUxUG9zaXRpb24ueCA8IHNoYXBlMlBvc2l0aW9uLnggKyB4ICsgc2hhcGUyLndpZHRoIC0gdG9sZXJhbmNlKSAvLyBwbGF5ZXIgaXMgdG8gdGhlIGxlZnQgb2YgY29sbGlkZXJcbiAgICAmJiAoc2hhcGUxUG9zaXRpb24ueSArIHNoYXBlMS5oZWlnaHQgPiBzaGFwZTJQb3NpdGlvbi55ICsgeSArIHRvbGVyYW5jZSkgLy8gcGxheWVyIGlzIGJlbG93IGNvbGxpZGVyXG4gICAgJiYgKHNoYXBlMVBvc2l0aW9uLnkgPCBzaGFwZTJQb3NpdGlvbi55ICsgeSArIHNoYXBlMi5oZWlnaHQgLSB0b2xlcmFuY2UpKSAvLyBwbGF5ZXIgaXMgYWJvdmUgY29sbGlkZXJcbn1cbiIsImltcG9ydCB7IGhhc0tleSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5pbXBvcnQgeyBCQVJfSEVJR0hULCBCQVJfT0ZGU0VUIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgQm94Q29sbGlkZXIsXG4gIGNvb3Jkc0Fic1Bvc2l0aW9uLFxuICBjb29yZHNNYXBQb3NpdGlvbixcbn0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlclwiO1xuaW1wb3J0IHsgUGF0aEZpbmRlciB9IGZyb20gXCIuL3BhdGhmaW5kZXJcIjtcbmltcG9ydCB7IGNoZWNrQ29sbGlzaW9uIH0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlclwiO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcbiAgcG9zaXRpb246IGNvb3JkaW5hdGVzO1xuICB6b29tPzogbnVtYmVyO1xuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGZhY2U6IG51bWJlcjtcbiAgZnJhbWVzPzogbnVtYmVyO1xuICBjdXJyZW50RnJhbWU6IG51bWJlcjtcbiAgZGlyZWN0aW9uczogRGlyZWN0aW9uRmFjZUFyZ3M7XG4gIGZyYW1lc1BlckRpcmVjdGlvbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwb3NpdGlvbixcbiAgICBpbWFnZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZGlyZWN0aW9ucyxcbiAgICB6b29tID0gMSxcbiAgICBmcmFtZXMgPSAxLFxuICB9OiBTcHJpdGVBcmdzKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCAqIHRoaXMuem9vbTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCAqIHRoaXMuem9vbTtcbiAgICB0aGlzLmZhY2UgPSAwO1xuICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgIHRoaXMuZnJhbWVzUGVyRGlyZWN0aW9uID0gdGhpcy5mcmFtZXMgLyBPYmplY3Qua2V5cyh0aGlzLmRpcmVjdGlvbnMpLmxlbmd0aDtcbiAgfVxuXG4gIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBTcHJpdGUge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5jdXJyZW50RnJhbWUsXG4gICAgICAwLFxuICAgICAgdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLFxuICAgICAgdGhpcy5pbWFnZS5oZWlnaHQsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAodGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzKSAqIHRoaXMuem9vbSxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ICogdGhpcy56b29tXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWFibGUgZXh0ZW5kcyBTcHJpdGUgaW1wbGVtZW50cyBJUGxheWFibGUge1xuICBwb3NpdGlvbjogY29vcmRpbmF0ZXM7XG4gIHpvb20/OiBudW1iZXI7XG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgZmFjZTogbnVtYmVyO1xuICBmcmFtZXM/OiBudW1iZXI7XG4gIGN1cnJlbnRGcmFtZTogbnVtYmVyO1xuICBkaXJlY3Rpb25zOiBEaXJlY3Rpb25GYWNlQXJncztcbiAgZnJhbWVzUGVyRGlyZWN0aW9uOiBudW1iZXI7XG4gIHJlZnJlc2hSYXRlOiBudW1iZXI7XG4gIG1heEhwOiBudW1iZXI7XG4gIGhwOiBudW1iZXI7XG4gIGhwUmVnZW46IG51bWJlcjtcbiAgYXJtb3VyOiBudW1iZXI7XG4gIGltbXVuaXR5OiBudW1iZXI7XG4gIG11c2NsZTogbnVtYmVyO1xuICBtYWdpazogbnVtYmVyO1xuICBtYXhNYW5hOiBudW1iZXI7XG4gIG1hbmE6IG51bWJlcjtcbiAgbWFuYVJlZ2VuOiBudW1iZXI7XG4gIHBhdGg6IGNvb3JkaW5hdGVzW107XG4gIGF0dGFja3M6IElBdHRhY2tbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzcHJpdGVBcmdzOiBTcHJpdGVBcmdzLFxuICAgIHtcbiAgICAgIGhwLFxuICAgICAgaHBSZWdlbixcbiAgICAgIG1hbmEsXG4gICAgICBtYW5hUmVnZW4sXG4gICAgICBtdXNjbGUsXG4gICAgICBtYWdpayxcbiAgICAgIGFybW91cixcbiAgICAgIGltbXVuaXR5LFxuICAgICAgYXR0YWNrcyxcbiAgICB9OiBQbGF5YWJsZUFyZ3NcbiAgKSB7XG4gICAgc3VwZXIoc3ByaXRlQXJncyk7XG4gICAgdGhpcy5tYXhIcCA9IGhwO1xuICAgIHRoaXMuaHAgPSBocDtcbiAgICB0aGlzLmhwUmVnZW4gPSBocFJlZ2VuO1xuICAgIHRoaXMubWF4TWFuYSA9IG1hbmE7XG4gICAgdGhpcy5tYW5hID0gbWFuYTtcbiAgICB0aGlzLm1hbmFSZWdlbiA9IG1hbmFSZWdlbjtcbiAgICB0aGlzLm11c2NsZSA9IG11c2NsZTtcbiAgICB0aGlzLm1hZ2lrID0gbWFnaWs7XG4gICAgdGhpcy5yZWZyZXNoUmF0ZSA9IHRoaXMuZnJhbWVzUGVyRGlyZWN0aW9uIC8gKHRoaXMuZnJhbWVzICogMik7XG4gICAgdGhpcy5hcm1vdXIgPSBhcm1vdXI7XG4gICAgdGhpcy5pbW11bml0eSA9IGltbXVuaXR5O1xuICAgIHRoaXMucGF0aCA9IFtdO1xuICAgIHRoaXMuYXR0YWNrcyA9IGF0dGFja3M7XG4gIH1cblxuICB0YWtlRGFtYWdlKGRhbWFnZTogbnVtYmVyKTogUGxheWFibGUge1xuICAgIHRoaXMuaHAgPSBNYXRoLm1heCgwLCB0aGlzLmhwIC0gZGFtYWdlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhlYWwoYW1vdW50OiBudW1iZXIpOiBQbGF5YWJsZSB7XG4gICAgdGhpcy5ocCA9IE1hdGgubWluKHRoaXMubWF4SHAsIHRoaXMuaHAgKyBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVkdWNlTWFuYShjb3N0OiBudW1iZXIpOiBQbGF5YWJsZSB7XG4gICAgdGhpcy5tYW5hID0gTWF0aC5tYXgoMCwgdGhpcy5tYW5hIC0gY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZGxlQW5pbWF0aW9uKCk6IFBsYXlhYmxlIHtcbiAgICBmb3IgKGxldCBmcmFtZUlkeCBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlyZWN0aW9ucykpIHtcbiAgICAgIGNvbnN0IGZhY2UgPSB0aGlzLmN1cnJlbnRGcmFtZSAvIHRoaXMuZnJhbWVzO1xuICAgICAgaWYgKGZhY2UgPCBmcmFtZUlkeCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuZmFjZSA9IGZyYW1lSWR4O1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5mYWNlKSAqIHRoaXMuZnJhbWVzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2Fsa0FuaW1hdGlvbihkaXJlY3Rpb246IHN0cmluZyk6IFBsYXlhYmxlIHtcbiAgICBpZiAoIWhhc0tleSh0aGlzLmRpcmVjdGlvbnMsIGRpcmVjdGlvbikpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0RnJhbWUgPSB0aGlzLmRpcmVjdGlvbnNbZGlyZWN0aW9uXTtcbiAgICBjb25zdCBsYXN0RnJhbWUgPSB0aGlzLmRpcmVjdGlvbnNbZGlyZWN0aW9uXSArIHRoaXMuZnJhbWVzUGVyRGlyZWN0aW9uO1xuICAgIHRoaXMuZmFjZSA9XG4gICAgICB0aGlzLmZhY2UgPj0gZmlyc3RGcmFtZSAmJiB0aGlzLmZhY2UgPCBsYXN0RnJhbWVcbiAgICAgICAgPyB0aGlzLmZhY2UgKyB0aGlzLnJlZnJlc2hSYXRlXG4gICAgICAgIDogZmlyc3RGcmFtZTtcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5mYWNlKSAqIHRoaXMuZnJhbWVzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYW5pbWF0ZShkaXJlY3Rpb246IHN0cmluZyk6IFBsYXlhYmxlIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImlkbGVcIikge1xuICAgICAgdGhpcy5pZGxlQW5pbWF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Fsa0FuaW1hdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFsaXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhwID4gMDtcbiAgfVxuXG4gIHJlZ2VuKCk6IFBsYXlhYmxlIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuaHAgPSBNYXRoLm1pbih0aGlzLm1heEhwLCB0aGlzLmhwICsgdGhpcy5tYXhIcCAqIHRoaXMuaHBSZWdlbik7XG4gICAgdGhpcy5tYW5hID0gTWF0aC5taW4odGhpcy5tYXhNYW5hLCB0aGlzLm1hbmEgKyB0aGlzLm1heE1hbmEgKiB0aGlzLm1hbmFSZWdlbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmb2xsb3codGFyZ2V0OiBQbGF5YWJsZSwgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdKTogUGxheWFibGUge1xuICAgIGlmICghdGFyZ2V0LmFsaXZlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBjb29yZHNBYnNQb3NpdGlvbih0aGlzLnBvc2l0aW9uKTtcbiAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGNvb3Jkc0Fic1Bvc2l0aW9uKHRhcmdldC5wb3NpdGlvbik7XG4gICAgaWYgKHRoaXMucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMucGF0aCA9IG5ldyBQYXRoRmluZGVyKClcbiAgICAgICAgLmZpbmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbiwgY29sbGlkZXJzKVxuICAgICAgICAubWFwKGNvb3Jkc01hcFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXRoLmxlbmd0aCkge1xuICAgICAgdGhpcy5jcmF3bCh0aGlzLnBhdGguc2hpZnQoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY3Jhd2woY29vcmRzOiBjb29yZGluYXRlcyk6IFBsYXlhYmxlIHtcbiAgICBjb25zdCB4ID0gY29vcmRzLnggLSB0aGlzLnBvc2l0aW9uLng7XG4gICAgY29uc3QgeSA9IGNvb3Jkcy55IC0gdGhpcy5wb3NpdGlvbi55O1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB4O1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXR0YWNrKFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY2hvaWNlOiBudW1iZXIgfCBudWxsLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IFBsYXlhYmxlIHtcbiAgICBpZiAodGhpcy5ocCA9PT0gMCB8fCBjaG9pY2UgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBhdHRhY2s6IElBdHRhY2sgPSB0aGlzLmF0dGFja3NbY2hvaWNlXTtcbiAgICBjb25zdCBpblJhbmdlID0gY2hlY2tDb2xsaXNpb24odGFyZ2V0LCB0aGlzLCB7IHg6IDAsIHk6IDAgfSwgLWF0dGFjay5yYW5nZSk7XG5cbiAgICBpZiAoaW5SYW5nZSkge1xuICAgICAgdGFyZ2V0LnRha2VEYW1hZ2UoYXR0YWNrLmRhbWFnZSk7XG4gICAgICBpZiAoYXR0YWNrLnJlbmRlcikge1xuICAgICAgICBhdHRhY2sucmVuZGVyKHRoaXMsIHRhcmdldCwgY3R4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogUGxheWFibGUge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5jdXJyZW50RnJhbWUsXG4gICAgICAwLFxuICAgICAgdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLFxuICAgICAgdGhpcy5pbWFnZS5oZWlnaHQsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAodGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzKSAqIHRoaXMuem9vbSxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ICogdGhpcy56b29tXG4gICAgKTtcblxuICAgIGNvbnN0IGJhcldpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBiYXJIZWlnaHQgPSBCQVJfSEVJR0hUO1xuICAgIGNvbnN0IGJhck9mZnNldCA9IEJBUl9PRkZTRVQ7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMzMzXCI7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55IC0gYmFyT2Zmc2V0IC0gYmFySGVpZ2h0ICogMixcbiAgICAgIGJhcldpZHRoLFxuICAgICAgYmFySGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZTc0YzNjXCI7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55IC0gYmFyT2Zmc2V0IC0gYmFySGVpZ2h0ICogMixcbiAgICAgIGJhcldpZHRoICogKHRoaXMuaHAgLyB0aGlzLm1heEhwKSxcbiAgICAgIGJhckhlaWdodFxuICAgICk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMzMzXCI7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55IC0gYmFyT2Zmc2V0IC0gYmFySGVpZ2h0LFxuICAgICAgYmFyV2lkdGgsXG4gICAgICBiYXJIZWlnaHRcbiAgICApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMzNDk4ZGJcIjtcbiAgICBjdHguZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnkgLSBiYXJPZmZzZXQgLSBiYXJIZWlnaHQsXG4gICAgICBiYXJXaWR0aCAqICh0aGlzLm1hbmEgLyB0aGlzLm1heE1hbmEpLFxuICAgICAgYmFySGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUSUxFUywgRElSRUNUSU9OUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEJveENvbGxpZGVyLCBjb29yZHNBYnNQb3NpdGlvbiB9IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXJcIjtcbmltcG9ydCB7IG1ha2VHcmlkIH0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlci9jb2xsaXNpb25zXCI7XG5pbXBvcnQgeyBtYW5oYXR0YW5EaXN0YW5jZSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5pbXBvcnQgeyBQcmlvcml0eVF1ZXVlIH0gZnJvbSBcIi4uL3V0aWxzL3ByaW9yaXR5UXVldWVcIjtcblxuY29uc3QgZW5jb2RlQ29vcmRzID0gKGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcykgPT5cbiAgYCR7Y29vcmRpbmF0ZXMueH0tJHtjb29yZGluYXRlcy55fWA7XG5cbmV4cG9ydCBjbGFzcyBQYXRoRmluZGVyIHtcbiAgdmlzaXRlZDogU2V0PHN0cmluZz47XG4gIHN1cnJvdW5kaW5nczogUHJpb3JpdHlRdWV1ZTxBU3RhclJlY29yZD47XG4gIHBhdGhzOiBUaWxlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGF0aHMgPSB7fTtcbiAgICB0aGlzLnZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5zdXJyb3VuZGluZ3MgPSBuZXcgUHJpb3JpdHlRdWV1ZSgpO1xuICB9XG5cbiAgaXNTYW1lQ29vcmRzKGMxOiBjb29yZGluYXRlcywgYzI6IGNvb3JkaW5hdGVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGMxLnggPT09IGMyLnggJiYgYzEueSA9PT0gYzIueTtcbiAgfVxuXG4gIGJ1aWxkUGF0aChrZXk6IHN0cmluZyk6IGNvb3JkaW5hdGVzW10ge1xuICAgIGlmICghdGhpcy5wYXRocy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHBhdGg6IGNvb3JkaW5hdGVzW10gPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMucGF0aHNba2V5XTtcbiAgICB3aGlsZSAoY3VycmVudC5wYXJlbnQpIHtcbiAgICAgIHBhdGgucHVzaChjdXJyZW50LnBvc2l0aW9uKTtcbiAgICAgIGN1cnJlbnQgPSB0aGlzLnBhdGhzW2VuY29kZUNvb3JkcyhjdXJyZW50LnBhcmVudCldO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5yZXZlcnNlKCk7XG4gIH1cblxuICBmaW5kKFxuICAgIHNvdXJjZTogY29vcmRpbmF0ZXMsXG4gICAgZGVzdGluYXRpb246IGNvb3JkaW5hdGVzLFxuICAgIGNvbGxpZGVyczogQm94Q29sbGlkZXJbXVxuICApOiBjb29yZGluYXRlc1tdIHtcbiAgICBjb25zdCBzcmNLZXkgPSBlbmNvZGVDb29yZHMoc291cmNlKTtcbiAgICBsZXQgcGF0aDogY29vcmRpbmF0ZXNbXSA9IFtdO1xuICAgIGNvbnN0IGFTdGFyUmVjb3JkOiBBU3RhclJlY29yZCA9IHtcbiAgICAgIGZTY29yZTogMCxcbiAgICAgIGdTY29yZTogMCxcbiAgICAgIGhTY29yZTogMCxcbiAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgIHBvc2l0aW9uOiBzb3VyY2UsXG4gICAgICBrZXk6IHNyY0tleSxcbiAgICB9O1xuICAgIHRoaXMudmlzaXRlZC5hZGQoc3JjS2V5KTtcbiAgICB0aGlzLnBhdGhzW3NyY0tleV0gPSBhU3RhclJlY29yZDtcbiAgICB0aGlzLnN1cnJvdW5kaW5ncy5ucSgwLCBhU3RhclJlY29yZCk7XG5cbiAgICB3aGlsZSAoIXRoaXMuc3Vycm91bmRpbmdzLmVtcHR5KCkpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQ6IEFTdGFyUmVjb3JkID0gdGhpcy5zdXJyb3VuZGluZ3MuZHEoKTtcbiAgICAgIHRoaXMucGF0aHNbY3VycmVudC5rZXldID0gY3VycmVudDtcblxuICAgICAgaWYgKHRoaXMuaXNTYW1lQ29vcmRzKGN1cnJlbnQucG9zaXRpb24sIGRlc3RpbmF0aW9uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFBhdGgoY3VycmVudC5rZXkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgRElSRUNUSU9OUykge1xuICAgICAgICBjb25zdCBbaG9yaXpvbnRhbCwgdmVydGljYWxdID0gZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBuZXdDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICB4OiBjdXJyZW50LnBvc2l0aW9uLnggKyBob3Jpem9udGFsLFxuICAgICAgICAgIHk6IGN1cnJlbnQucG9zaXRpb24ueSArIHZlcnRpY2FsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdLZXkgPSBlbmNvZGVDb29yZHMobmV3Q29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCBpc0JvdW5kYXJ5ID0gY29sbGlkZXJzLnNvbWUoKGNvbGxpZGVyOiBCb3hDb2xsaWRlcikgPT5cbiAgICAgICAgICB0aGlzLmlzU2FtZUNvb3JkcyhcbiAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzLFxuICAgICAgICAgICAgY29vcmRzQWJzUG9zaXRpb24oY29sbGlkZXIucG9zaXRpb24pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpc0JvdW5kYXJ5IHx8IHRoaXMudmlzaXRlZC5oYXMobmV3S2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ1Njb3JlID0gY3VycmVudC5nU2NvcmUgKyAxO1xuICAgICAgICBjb25zdCBoU2NvcmUgPSBtYW5oYXR0YW5EaXN0YW5jZShuZXdDb29yZGluYXRlcywgZGVzdGluYXRpb24pO1xuICAgICAgICBjb25zdCBmU2NvcmUgPSBnU2NvcmUgKyBoU2NvcmU7XG5cbiAgICAgICAgdGhpcy52aXNpdGVkLmFkZChuZXdLZXkpO1xuICAgICAgICB0aGlzLnN1cnJvdW5kaW5ncy5ucShmU2NvcmUsIHtcbiAgICAgICAgICBmU2NvcmUsXG4gICAgICAgICAgZ1Njb3JlLFxuICAgICAgICAgIGhTY29yZSxcbiAgICAgICAgICBwYXJlbnQ6IGN1cnJlbnQucG9zaXRpb24sXG4gICAgICAgICAgcG9zaXRpb246IG5ld0Nvb3JkaW5hdGVzLFxuICAgICAgICAgIGtleTogbmV3S2V5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1PVkVTUEVFRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGhhc0tleSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb3Rpb246IHsgW2tleTogc3RyaW5nXTogeyBrZXk6IHN0cmluZywgYXhpczogc3RyaW5nLCB2ZWxvY2l0eTogbnVtYmVyLCBwcmVzc2VkOiBib29sZWFuIH0gfVxuICAgIGF0dGFjazogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIGRpcmVjdGlvbkJpbmRpbmdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgYXR0YWNrQmluZGluZ3M6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cbiAgICBhY3RpdmVBdHRhY2tzOiBib29sZWFuW107XG5cbiAgICBjb25zdHJ1Y3Rvcih7IHVwLCBkb3duLCBsZWZ0LCByaWdodCwgYXR0YWNrcyB9OiBEaXJlY3Rpb25LZXlBcmdzKSB7XG4gICAgICAgIHRoaXMubW90aW9uID0ge1xuICAgICAgICAgICAgdXA6IHtcbiAgICAgICAgICAgICAgICBrZXk6IHVwLFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieVwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiAtTU9WRVNQRUVELFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd246IHtcbiAgICAgICAgICAgICAgICBrZXk6IGRvd24sXG4gICAgICAgICAgICAgICAgYXhpczogXCJ5XCIsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IE1PVkVTUEVFRCxcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgICAga2V5OiBsZWZ0LFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiAtTU9WRVNQRUVELFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBrZXk6IHJpZ2h0LFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBNT1ZFU1BFRUQsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXJlY3Rpb25CaW5kaW5ncyA9IHtcbiAgICAgICAgICAgIFt1cF06IFwidXBcIixcbiAgICAgICAgICAgIFtkb3duXTogXCJkb3duXCIsXG4gICAgICAgICAgICBbbGVmdF06IFwibGVmdFwiLFxuICAgICAgICAgICAgW3JpZ2h0XTogXCJyaWdodFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdHRhY2tCaW5kaW5ncyA9IHt9O1xuICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja3MgPSBhdHRhY2tzLm1hcChfID0+IGZhbHNlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrQmluZGluZ3NbYXR0YWNrc1tpXV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWRsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubW90aW9uKS5ldmVyeShkaXJlY3Rpb24gPT4gIXRoaXMubW90aW9uW2RpcmVjdGlvbl0ucHJlc3NlZClcbiAgICB9XG5cbiAgICBnZXRNb3ZlbWVudCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMubW90aW9uKS5maWx0ZXIoZGlyZWN0aW9uID0+IHRoaXMubW90aW9uW2RpcmVjdGlvbl0ucHJlc3NlZCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0QXR0YWNrKCk6IG51bWJlciB8IG51bGwge1xuICAgICAgICBjb25zdCBhdHRhY2tJbmRpY2VzID0gdGhpcy5hY3RpdmVBdHRhY2tzLm1hcCgoYXR0YWNrQWN0aXZlLCBpKSA9PiBhdHRhY2tBY3RpdmUgPyBpIDogLTEpLmZpbHRlcihhdHRhY2tJZHggPT4gYXR0YWNrSWR4ICE9PSAtMSk7XG4gICAgICAgIGlmIChhdHRhY2tJbmRpY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja0luZGljZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJlc3Moa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKGhhc0tleSh0aGlzLmRpcmVjdGlvbkJpbmRpbmdzLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbkJpbmRpbmdzW2tleV07XG4gICAgICAgICAgICB0aGlzLm1vdGlvbltkaXJlY3Rpb25dLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc0tleSh0aGlzLmF0dGFja0JpbmRpbmdzLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB0aGlzLmF0dGFja0JpbmRpbmdzW2tleV07XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja3NbYXR0YWNrXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChoYXNLZXkodGhpcy5kaXJlY3Rpb25CaW5kaW5ncywga2V5KSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb25CaW5kaW5nc1trZXldO1xuICAgICAgICAgICAgdGhpcy5tb3Rpb25bZGlyZWN0aW9uXS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzS2V5KHRoaXMuYXR0YWNrQmluZGluZ3MsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IHRoaXMuYXR0YWNrQmluZGluZ3Nba2V5XTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQXR0YWNrc1thdHRhY2tdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ByZXNzZWQoa2V5OiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGhhc0tleSh0aGlzLm1vdGlvbiwga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW90aW9uW2tleV0ucHJlc3NlZDtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNLZXkodGhpcy5hY3RpdmVBdHRhY2tzLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVBdHRhY2tzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgICBjb250cm9sbGVyOiBDb250cm9sbGVyXG4gICAgY29uc3RydWN0b3IoeyBjb250cm9sbGVyIH06IHsgY29udHJvbGxlcjogRGlyZWN0aW9uS2V5QXJncyB9KSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKGNvbnRyb2xsZXIpXG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGhhc0tleSA9IDxPPihvYmo6IE8sIGtleTogUHJvcGVydHlLZXkpOiBrZXkgaXMga2V5b2YgTyA9PiB7XG4gICAgcmV0dXJuIGtleSBpbiBvYmpcbn07XG5cblxuZXhwb3J0IGNvbnN0IG1hbmhhdHRhbkRpc3RhbmNlID0gKGE6IGNvb3JkaW5hdGVzLCBiOiBjb29yZGluYXRlcyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEueCAtIGIueCkgKyBNYXRoLmFicyhhLnkgLSBiLnkpXG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuIiwiZXhwb3J0IGNsYXNzIFByaW9yaXR5UXVldWU8VD4ge1xuICAgIGl0ZW1zOiB7cHJpb3JpdHk6IG51bWJlciwgZWxlbWVudDogVH1bXVxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIG5xKHByaW9yaXR5OiBudW1iZXIsIGVsZW1lbnQ6IFQpOiBQcmlvcml0eVF1ZXVlPFQ+IHtcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xuICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBtaWQgPSAwO1xuICAgICAgICBsZXQgcG9zID0gLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe3ByaW9yaXR5LCBlbGVtZW50fSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0KSB7XG4gICAgICAgICAgICBtaWQgPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1ttaWRdLnByaW9yaXR5ID4gcHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICByaWdodCA9IG1pZCAtIDE7XG4gICAgICAgICAgICAgICAgcG9zID0gbWlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbWlkICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHBvcywgMCwge3ByaW9yaXR5LCBlbGVtZW50fSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZHEoKTogVCB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuc2hpZnQoKS5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgZW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9jaXRyaWNIZWFsaW5nLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9uZXdBdHRhY2tzLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9waG90b25CZWFtLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9TaGFkb3dTdGVwLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9zb2Z0R3Jhc3MudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXR0YWNrcy9hdHRhY2tMaXN0L3RveGljRHJhaW4udHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXR0YWNrcy9jb3JlLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnN0YW50cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kYXRhL2NvbGxpc2lvbi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ldmVudHMva2V5cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ldmVudHMvdG91Y2gudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmVuZGVyL2FuaW1hdGlvbi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZW5kZXIvY2FudmFzLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jb2xsaWRlci9jb2xsaXNpb25zLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jb2xsaWRlci9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zcHJpdGVzL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nwcml0ZXMvcGF0aGZpbmRlci50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdGF0ZS9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90eXBlcy9pbmRleC5kLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxzL21pc2MudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91dGlscy9wcmlvcml0eVF1ZXVlLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony export */   "ENEMY_X_OFFSET": () => (/* binding */ ENEMY_X_OFFSET),
/* harmony export */   "ENEMY_Y_OFFSET": () => (/* binding */ ENEMY_Y_OFFSET),
/* harmony export */   "IS_COLLIDER": () => (/* binding */ IS_COLLIDER),
/* harmony export */   "MAP_HEIGHT": () => (/* binding */ MAP_HEIGHT),
/* harmony export */   "MAP_WIDTH": () => (/* binding */ MAP_WIDTH),
/* harmony export */   "MAP_X_OFFSET": () => (/* binding */ MAP_X_OFFSET),
/* harmony export */   "MAP_Y_OFFSET": () => (/* binding */ MAP_Y_OFFSET),
/* harmony export */   "MOVESPEED": () => (/* binding */ MOVESPEED),
/* harmony export */   "TILES": () => (/* binding */ TILES),
/* harmony export */   "TILE_HEIGHT": () => (/* binding */ TILE_HEIGHT),
/* harmony export */   "TILE_WIDTH": () => (/* binding */ TILE_WIDTH)
/* harmony export */ });
var MAP_WIDTH = 1920;
var MAP_HEIGHT = 1440;
var TILE_WIDTH = 64;
var TILE_HEIGHT = 64;
var CHAR_WIDTH = 16;
var CHAR_HEIGHT = 16;
var MAP_X_OFFSET = -600;
var MAP_Y_OFFSET = -900;
var CHAR_X_OFFSET = 600;
var CHAR_Y_OFFSET = 600;
var BAR_OFFSET = 2;
var BAR_HEIGHT = 10;
var ENEMY_X_OFFSET = 265;
var ENEMY_Y_OFFSET = 20;
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
                canvas = (0,_render_canvas__WEBPACK_IMPORTED_MODULE_1__.mapSetup)(_constants__WEBPACK_IMPORTED_MODULE_5__.MAP_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_5__.MAP_HEIGHT);
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
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");




var ENEMY_ATTACK_COOLDOWN = 90;
var enemyAttackTimer = 0;
var motionControl = function (_a) {
    var ctx = _a.ctx, state = _a.state, player = _a.player, enemies = _a.enemies, colliders = _a.colliders;
    var controller = state.controller;
    var futureKeyState = { x: 0, y: 0 };
    if (controller.isPressed("up")) {
        futureKeyState.y = -_constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    else if (controller.isPressed("left")) {
        futureKeyState.x = -_constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    else if (controller.isPressed("down")) {
        futureKeyState.y = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    else if (controller.isPressed("right")) {
        futureKeyState.x = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    var playerCollisions = colliders.some(function (collider) {
        return (0,_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(player, collider, futureKeyState);
    });
    var movementDirection = controller.getMovement();
    if (!movementDirection) {
        player.animate("idle");
    }
    else {
        var _b = controller.motion[movementDirection], axis = _b.axis, velocity = _b.velocity;
        player.animate(movementDirection);
        enemies.forEach(function (enemy) {
            if (enemy.alive())
                enemy.follow(player, colliders);
        });
        if (!playerCollisions && (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.hasKey)(player.position, axis)) {
            player.position[axis] += velocity;
        }
    }
    enemyAttackTimer++;
    if (enemyAttackTimer >= ENEMY_ATTACK_COOLDOWN) {
        enemyAttackTimer = 0;
        enemies.forEach(function (enemy) {
            if (enemy.alive()) {
                enemy.regen().attack(player, 0, ctx);
            }
        });
    }
    player.regen();
    var attackChoice = controller.getAttack();
    if (attackChoice !== null && enemies.length > 0) {
        var closestEnemy = enemies.reduce(function (closest, enemy) {
            if (!enemy.alive())
                return closest;
            var distToEnemy = Math.abs(enemy.position.x - player.position.x) + Math.abs(enemy.position.y - player.position.y);
            var distToClosest = Math.abs(closest.position.x - player.position.x) + Math.abs(closest.position.y - player.position.y);
            return distToEnemy < distToClosest ? enemy : closest;
        });
        player.attack(closestEnemy, attackChoice, ctx);
    }
};
var animationBuilder = function (_a) {
    var bg = _a.bg, player = _a.player, state = _a.state, canvas = _a.canvas, fg = _a.fg, enemies = _a.enemies;
    var ctx = (0,_canvas__WEBPACK_IMPORTED_MODULE_0__.getCtx)(canvas);
    var colliders = (0,_collider__WEBPACK_IMPORTED_MODULE_2__.getColliders)();
    var animate = function () {
        // Clear screen
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Save context and apply camera transform
        ctx.save();
        // Scale to fill 9:16 screen
        var scaleX = canvas.width / 1920;
        var scaleY = canvas.height / 1440;
        var scale = Math.max(scaleX, scaleY);
        ctx.scale(scale, scale);
        // Center the view on the player
        var offsetX = -player.position.x + (1920 / 2);
        var offsetY = -player.position.y + (1440 / 2);
        ctx.translate(offsetX, offsetY);
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
        window.requestAnimationFrame(animate);
        motionControl({ ctx: ctx, state: state, bg: bg, player: player, enemies: enemies, fg: fg, colliders: colliders });
    };
    animate();
};
var drawHUD = function (ctx, player, canvas) {
    var hudX = 10;
    var hudY = 10;
    var barWidth = Math.min(150, canvas.width * 0.3);
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
/* harmony export */   "CANVAS_SCALE": () => (/* binding */ CANVAS_SCALE),
/* harmony export */   "getCtx": () => (/* binding */ getCtx),
/* harmony export */   "mapSetup": () => (/* binding */ mapSetup)
/* harmony export */ });
var CANVAS_SCALE = 1;
var mapSetup = function (map_width, map_height) {
    var canvas = document.getElementById("canvas");
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    // Set canvas to fill the entire screen
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    canvas.style.width = screenWidth + 'px';
    canvas.style.height = screenHeight + 'px';
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    // Calculate scale to cover the screen (crop sides if needed)
    // This ensures the game fills a 9:16 screen without black bars
    CANVAS_SCALE = Math.max(screenWidth / map_width, screenHeight / map_height);
    var ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    return canvas;
};
var getCtx = function (canvas) {
    var ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    return ctx;
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMxSCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNwSixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUosQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ2hJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDeEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNsSixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3hKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDbEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN4SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQzFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDbEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNwSixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3BJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3hLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3hIOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JNLElBQU0saUJBQWlCLEdBQUcsVUFBQyxVQUFzQjtJQUNwRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBZ0I7UUFDaEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQWdCO1FBQzlDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSTSxJQUFNLHNCQUFzQixHQUFHLFVBQUMsVUFBc0I7SUFDekQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztJQUV4QixnQkFBZ0I7SUFDaEIsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxZQUFZLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQztJQUNsQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELFlBQVksQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ2xDLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFdkMsOENBQThDO0lBQzlDLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsYUFBYSxDQUFDLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQztJQUVwQyxJQUFNLGFBQWEsR0FBRztRQUNsQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtRQUM1RSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtRQUM5RSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUMxRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtRQUM1RSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtRQUN4RSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtRQUM5RSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUN2RSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtLQUM5RSxDQUFDO0lBRUYsSUFBTSxhQUFhLEdBQTZCLEVBQUUsQ0FBQztJQUVuRCxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQUc7UUFDckIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUM3QixHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNqQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRTFCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsV0FBQztZQUNoQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLEtBQUs7Z0JBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztZQUNuQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsV0FBQztZQUM5QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLEtBQUs7Z0JBQUUsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCwyREFBMkQ7UUFDM0QsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxXQUFDO1lBQ2pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksS0FBSztnQkFBRSxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkMsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzNCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDeEIsSUFBSSxlQUFlLEdBQWtCLElBQUksQ0FBQztJQUUxQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxlQUFlLEtBQUssSUFBSTtZQUFFLE9BQU87UUFFckMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xELGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztJQUVILFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxJQUFJLGVBQWUsS0FBSyxJQUFJO1lBQUUsT0FBTztRQUV4RCwwQkFBMEI7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUssZUFBZSxFQUFFO2dCQUM3QyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0QsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLGVBQWUsRUFBRTtnQkFDcEQsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDdkIsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7Z0JBQ3ZELG9CQUFvQixFQUFFLENBQUM7Z0JBQ3ZCLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFVBQUMsQ0FBQztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxlQUFlLEVBQUU7Z0JBQ3BELGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO2dCQUN2RCxvQkFBb0IsRUFBRSxDQUFDO2dCQUN2QixNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBTSxjQUFjLEdBQUcsVUFBQyxPQUFlLEVBQUUsT0FBZTtRQUNwRCxJQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsZUFBZSxDQUFDO1FBQ3JDLElBQU0sRUFBRSxHQUFHLE9BQU8sR0FBRyxlQUFlLENBQUM7UUFDckMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakYsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxlQUFlLENBQUM7UUFDaEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxlQUFlLENBQUM7UUFDaEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0NBQXlCLEtBQUssOEJBQW9CLEtBQUssU0FBTSxDQUFDO1FBRTdGLG9CQUFvQixFQUFFLENBQUM7UUFFdkIsSUFBTSxTQUFTLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzdCLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4QztpQkFBTTtnQkFDSCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDeEM7U0FDSjtJQUNMLENBQUMsQ0FBQztJQUVGLElBQU0sb0JBQW9CLEdBQUc7UUFDekIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRixPQUFPLEVBQUUsWUFBWSxnQkFBRSxhQUFhLGlCQUFFLENBQUM7QUFDM0MsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaksyQztBQUNGO0FBQ087QUFDTTtBQUNGO0FBVWpDO0FBQ1c7QUFDNkI7QUFDRjtBQUNRO0FBQ047QUFDQTtBQUNFO0FBQ0M7QUFDRjtBQUNIO0FBQ0E7QUFFbEM7QUFDeUI7QUFDVztBQUNQO0FBQ0o7QUFFbEQsSUFBTSxTQUFTLEdBQUcsVUFBQyxLQUF1QjtJQUN4QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsS0FBSyxDQUFDLE1BQU0sR0FBRztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQ0QsS0FBSyxDQUFDLE9BQU8sR0FBRyxXQUFDO1lBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixJQUFNLElBQUksR0FBRzs7Ozs7Z0JBQ0wsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNwQixLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUVuRCxLQUFLLENBQUMsR0FBRyxHQUFHLDBEQUFnQixDQUFDO2dCQUM3QixTQUFTLENBQUMsR0FBRyxHQUFHLGtFQUFZLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxHQUFHLEdBQUcscUVBQWdCLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsK0RBQVcsQ0FBQztnQkFDM0IscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztnQkFBeEMsU0FBd0MsQ0FBQztnQkFFbkMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFJbEIsRUFBRSxHQUFHLElBQUksNENBQU0sQ0FBQztvQkFDcEIsUUFBUSxFQUFFO3dCQUNSLENBQUMsRUFBRSxvREFBWTt3QkFDZixDQUFDLEVBQUUsb0RBQVk7cUJBQ2hCO29CQUNELEtBQUssRUFBRSxLQUFLO29CQUNaLEtBQUssRUFBRSxpREFBUztvQkFDaEIsTUFBTSxFQUFFLGtEQUFVO29CQUNsQixVQUFVLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLENBQUM7d0JBQ1AsRUFBRSxFQUFFLENBQUM7d0JBQ0wsSUFBSSxFQUFFLENBQUM7d0JBQ1AsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNHLEVBQUUsR0FBRyxJQUFJLDRDQUFNLENBQUM7b0JBQ3BCLFFBQVEsRUFBRTt3QkFDUixDQUFDLEVBQUUsb0RBQVk7d0JBQ2YsQ0FBQyxFQUFFLG9EQUFZO3FCQUNoQjtvQkFDRCxLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsaURBQVM7b0JBQ2hCLE1BQU0sRUFBRSxrREFBVTtvQkFDbEIsVUFBVSxFQUFFO3dCQUNWLElBQUksRUFBRSxDQUFDO3dCQUNQLEVBQUUsRUFBRSxDQUFDO3dCQUNMLElBQUksRUFBRSxDQUFDO3dCQUNQLEtBQUssRUFBRSxDQUFDO3FCQUNUO2lCQUNGLENBQUMsQ0FBQztnQkFDRyxNQUFNLEdBQUcsSUFBSSw4Q0FBUSxDQUN6QjtvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsQ0FBQyxFQUFFLHFEQUFhO3dCQUNoQixDQUFDLEVBQUUscURBQWE7cUJBQ2pCO29CQUNELEtBQUssRUFBRSxTQUFTO29CQUNoQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxZQUFZO29CQUNyQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07b0JBQ3hCLElBQUksRUFBRSxDQUFDO29CQUNQLE1BQU0sRUFBRSxZQUFZO29CQUNwQixVQUFVLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLENBQUM7d0JBQ1AsRUFBRSxFQUFFLENBQUM7d0JBQ0wsSUFBSSxFQUFFLENBQUM7d0JBQ1AsS0FBSyxFQUFFLEVBQUU7cUJBQ1Y7aUJBQ0YsRUFDRDtvQkFDRSxFQUFFLEVBQUUsSUFBSTtvQkFDUixPQUFPLEVBQUUsSUFBSTtvQkFDYixJQUFJLEVBQUUsSUFBSTtvQkFDVixTQUFTLEVBQUUsS0FBSztvQkFDaEIsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLEVBQUU7b0JBQ1osT0FBTyxFQUFFLENBQUMsSUFBSSxvRUFBUyxFQUFFLEVBQUUsSUFBSSw0RUFBYSxFQUFFLEVBQUUsSUFBSSx1RUFBVSxFQUFFLEVBQUUsSUFBSSx1RUFBVSxFQUFFLEVBQUUsSUFBSSxxRUFBUSxFQUFFLEVBQUUsSUFBSSxxRUFBUSxFQUFFLEVBQUUsSUFBSSwwRUFBYSxFQUFFLEVBQUUsSUFBSSx3RUFBVyxFQUFFLEVBQUUsSUFBSSx5RUFBWSxFQUFFLENBQUM7aUJBQ2hMLENBQ0YsQ0FBQztnQkFDSSxXQUFXLEdBQUc7b0JBQ2xCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO29CQUNqQixFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtvQkFDbEIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7b0JBQ25CLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO29CQUNsQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtvQkFDbkIsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUU7b0JBQ25CLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFO2lCQUNyQixDQUFDO2dCQUVJLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLHFCQUFXO29CQUN6QyxJQUFNLEtBQUssR0FBRyxJQUFJLDhDQUFRLENBQUM7d0JBQ3ZCLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixLQUFLLEVBQUUsUUFBUTt3QkFDZixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7d0JBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTt3QkFDdkIsSUFBSSxFQUFFLENBQUM7d0JBQ1AsVUFBVSxFQUFFOzRCQUNWLElBQUksRUFBRSxDQUFDOzRCQUNQLEVBQUUsRUFBRSxDQUFDOzRCQUNMLElBQUksRUFBRSxDQUFDOzRCQUNQLEtBQUssRUFBRSxDQUFDO3lCQUNUO3FCQUNGLEVBQ0Q7d0JBQ0UsRUFBRSxFQUFFLElBQUk7d0JBQ1IsT0FBTyxFQUFFLElBQUk7d0JBQ2IsSUFBSSxFQUFFLElBQUk7d0JBQ1YsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLE1BQU0sRUFBRSxFQUFFO3dCQUNWLEtBQUssRUFBRSxFQUFFO3dCQUNULE1BQU0sRUFBRSxFQUFFO3dCQUNWLFFBQVEsRUFBRSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxDQUFDLElBQUksc0VBQVUsRUFBRSxDQUFDO3FCQUM1QixDQUNGO29CQUNELE9BQU8sS0FBSyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO2dCQUVHLEtBQUssR0FBRyxJQUFJLHlDQUFLLENBQUM7b0JBQ3RCLFVBQVUsRUFBRTt3QkFDVixFQUFFLEVBQUUsR0FBRzt3QkFDUCxJQUFJLEVBQUUsR0FBRzt3QkFDVCxJQUFJLEVBQUUsR0FBRzt3QkFDVCxLQUFLLEVBQUUsR0FBRzt3QkFDVixPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7cUJBQzlCO2lCQUNGLENBQUMsQ0FBQztnQkFDRyxNQUFNLEdBQUcsd0RBQVEsQ0FBQyxpREFBUyxFQUFFLGtEQUFVLENBQUMsQ0FBQztnQkFDL0MsK0RBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNwQyxxRUFBc0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRW5DLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUNuQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUVELG1FQUFnQixDQUFDLEVBQUUsRUFBRSxNQUFFLE1BQU0sVUFBRSxLQUFLLFNBQUUsTUFBTSxVQUFFLEVBQUUsTUFBRSxPQUFPLFdBQUUsQ0FBQyxDQUFDOzs7O0tBQzlELENBQUM7QUFFRixJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TDJCO0FBQ087QUFDaUI7QUFJbkI7QUFxQnZDLElBQU0scUJBQXFCLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBRXpCLElBQU0sYUFBYSxHQUFHLFVBQUMsRUFNSDtRQUxsQixHQUFHLFdBQ0gsS0FBSyxhQUNMLE1BQU0sY0FDTixPQUFPLGVBQ1AsU0FBUztJQUVELGNBQVUsR0FBSyxLQUFLLFdBQVYsQ0FBVztJQUM3QixJQUFJLGNBQWMsR0FBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUVqRCxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUIsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLGlEQUFTLENBQUM7S0FDL0I7U0FBTSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdkMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLGlEQUFTLENBQUM7S0FDL0I7U0FBTSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdkMsY0FBYyxDQUFDLENBQUMsR0FBRyxpREFBUyxDQUFDO0tBQzlCO1NBQU0sSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3hDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsaURBQVMsQ0FBQztLQUM5QjtJQUVELElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQXFCO1FBQzVELGdFQUFjLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUM7SUFBaEQsQ0FBZ0QsQ0FDakQsQ0FBQztJQUVGLElBQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25ELElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hCO1NBQU07UUFDQyxTQUFxQixVQUFVLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQXZELElBQUksWUFBRSxRQUFRLGNBQXlDLENBQUM7UUFDaEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBSztZQUNuQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLElBQUksbURBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDO1NBQ25DO0tBQ0Y7SUFFRCxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLElBQUksZ0JBQWdCLElBQUkscUJBQXFCLEVBQUU7UUFDN0MsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFlO1lBQzlCLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBRUQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVDLElBQUksWUFBWSxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMvQyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsT0FBTyxPQUFPLENBQUM7WUFDbkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwSCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFILE9BQU8sV0FBVyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDaEQ7QUFDSCxDQUFDLENBQUM7QUFFSyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsRUFPVjtRQU5yQixFQUFFLFVBQ0YsTUFBTSxjQUNOLEtBQUssYUFDTCxNQUFNLGNBQ04sRUFBRSxVQUNGLE9BQU87SUFFUCxJQUFNLEdBQUcsR0FBNkIsK0NBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxJQUFNLFNBQVMsR0FBRyx1REFBWSxFQUFFLENBQUM7SUFFakMsSUFBTSxPQUFPLEdBQUc7UUFDZCxlQUFlO1FBQ2YsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDdkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhELDBDQUEwQztRQUMxQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWCw0QkFBNEI7UUFDNUIsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsZ0NBQWdDO1FBQ2hDLElBQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVoQyxrQkFBa0I7UUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBSztZQUNuQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWQsNEJBQTRCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxhQUFhLENBQUMsRUFBRSxHQUFHLE9BQUUsS0FBSyxTQUFFLEVBQUUsTUFBRSxNQUFNLFVBQUUsT0FBTyxXQUFFLEVBQUUsTUFBRSxTQUFTLGFBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUMsQ0FBQztJQUNGLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUcsVUFBQyxHQUE2QixFQUFFLE1BQWdCLEVBQUUsTUFBeUI7SUFDekYsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyQixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFFbEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUNyQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRTdFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7SUFDakMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRTlFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFM0YsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDdkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRWxGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRS9GLElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDbEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNyQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDMUIsR0FBRyxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUNqQyxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN6QixHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9ELEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7UUFDakMsR0FBRyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoRixHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUV4QixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELElBQUksVUFBVTtZQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUNwRDtBQUNILENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxLLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUVyQixJQUFNLFFBQVEsR0FBRyxVQUN0QixTQUFpQixFQUNqQixVQUFrQjtJQUVsQixJQUFNLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVwRSxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RDLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFFeEMsdUNBQXVDO0lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMxQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUV2Qiw2REFBNkQ7SUFDN0QsK0RBQStEO0lBQy9ELFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxTQUFTLEVBQUUsWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBRTVFLElBQU0sR0FBRyxHQUE2QixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFFbEMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUssSUFBTSxNQUFNLEdBQUcsVUFBQyxNQUF5QjtJQUM5QyxJQUFNLEdBQUcsR0FBNkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxHQUFHLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZ0Q7QUFFM0MsSUFBTSxRQUFRLEdBQUcsVUFBQyxTQUFpQjtJQUN0QyxJQUFNLGFBQWEsR0FBZSxFQUFFLENBQUM7SUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDhEQUFpQixFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUU7UUFDbkQsYUFBYSxDQUFDLElBQUksQ0FBQyw2REFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDMUQ7SUFDRCxPQUFPLGFBQWE7QUFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J1QztBQUNrRTtBQUcxRztJQVFJLHFCQUFZLEVBQXlCO1lBQXZCLFFBQVE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLEdBQTZCO1FBQzlCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDekMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RixHQUFHLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUN4QixHQUFHLENBQUMsUUFBUSxDQUFDLFdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckcsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQWhCTSxpQkFBSyxHQUFHLGtEQUFVLENBQUM7SUFDbkIsa0JBQU0sR0FBRyxtREFBVyxDQUFDO0lBZ0JoQyxrQkFBQztDQUFBO0FBdEJ1QjtBQXdCakIsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLE1BQW1CLElBQWtCLFFBQUM7SUFDcEUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLG9EQUFZLENBQUMsR0FBRyxrREFBVSxDQUFDO0lBQ3JELENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxvREFBWSxDQUFDLEdBQUcsbURBQVcsQ0FBQztDQUN6RCxDQUFDLEVBSHFFLENBR3JFO0FBRUssSUFBTSxpQkFBaUIsR0FBRyxVQUFDLE1BQW1CLElBQWtCLFFBQUM7SUFDcEUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxrREFBVSxDQUFDLEdBQUcsb0RBQVk7SUFDekMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxtREFBVyxDQUFDLEdBQUcsb0RBQVk7Q0FDN0MsQ0FBQyxFQUhxRSxDQUdyRTtBQUVLLElBQU0sWUFBWSxHQUFHO0lBQ3hCLElBQU0sU0FBUyxHQUFrQixFQUFFLENBQUM7SUFDcEMsSUFBTSxJQUFJLEdBQWUscURBQVEsQ0FBQyxrREFBVSxDQUFDLENBQUM7SUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksR0FBRyxLQUFLLG1EQUFXLEVBQUU7Z0JBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUM7b0JBQzNCLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUM5QyxDQUFDLENBQUMsQ0FBQzthQUNQO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7SUFDRixPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNJLElBQU0sY0FBYyxHQUFHLFVBQzFCLE1BQVcsRUFDWCxNQUFXLEVBQ1gsRUFBcUIsRUFDckIsU0FBc0I7UUFEcEIsQ0FBQyxTQUFFLENBQUM7SUFDTiwwQ0FBc0I7SUFFdEIsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBRXZDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxxQ0FBcUM7V0FDL0csQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsb0NBQW9DO1dBQ3pHLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLDJCQUEyQjtXQUNqRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFDLDJCQUEyQjtBQUN6RyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RXNDO0FBQ2U7QUFLMUI7QUFDYztBQUNVO0FBRXBEO0lBWUUsZ0JBQVksRUFRQztZQVBYLFFBQVEsZ0JBQ1IsS0FBSyxhQUNMLEtBQUssYUFDTCxNQUFNLGNBQ04sVUFBVSxrQkFDVixZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLE9BQ1IsY0FBVSxFQUFWLE1BQU0sbUJBQUcsQ0FBQztRQUVWLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM5RSxDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEdBQTZCO1FBQ2hDLEdBQUcsQ0FBQyxTQUFTLENBQ1gsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsWUFBWSxFQUNqQixDQUFDLEVBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQzlCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUE4Qiw0QkFBTTtJQXlCbEMsa0JBQ0UsVUFBc0IsRUFDdEIsRUFVZTtZQVRiLEVBQUUsVUFDRixPQUFPLGVBQ1AsSUFBSSxZQUNKLFNBQVMsaUJBQ1QsTUFBTSxjQUNOLEtBQUssYUFDTCxNQUFNLGNBQ04sUUFBUSxnQkFDUixPQUFPO1FBWFgsWUFjRSxrQkFBTSxVQUFVLENBQUMsU0FjbEI7UUFiQyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUN6QixDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLE1BQWM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHVCQUFJLEdBQUosVUFBSyxNQUFjO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDRSxLQUFxQixVQUE4QixFQUE5QixXQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBOUIsY0FBOEIsRUFBOUIsSUFBOEIsRUFBRTtZQUFoRCxJQUFJLFFBQVE7WUFDZixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxFQUFFO2dCQUNuQixNQUFNO2FBQ1A7WUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQ0FBYSxHQUFiLFVBQWMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLG1EQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN2RSxJQUFJLENBQUMsSUFBSTtZQUNQLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUztnQkFDOUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVc7Z0JBQzlCLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxTQUFpQjtRQUN2QixJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLE1BQWdCLEVBQUUsU0FBd0I7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBTSxlQUFlLEdBQUcsbUVBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQU0sY0FBYyxHQUFHLG1FQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbURBQVUsRUFBRTtpQkFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDO2lCQUNoRCxHQUFHLENBQUMsK0RBQWlCLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx3QkFBSyxHQUFMLFVBQU0sTUFBbUI7UUFDdkIsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUNFLE1BQWdCLEVBQ2hCLE1BQXFCLEVBQ3JCLEdBQTZCO1FBRTdCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBTSxNQUFNLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFNLE9BQU8sR0FBRyxnRUFBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1RSxJQUFJLE9BQU8sRUFBRTtZQUNYLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssR0FBNkI7UUFDaEMsR0FBRyxDQUFDLFNBQVMsQ0FDWCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxZQUFZLEVBQ2pCLENBQUMsRUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDOUIsQ0FBQztRQUVGLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBTSxTQUFTLEdBQUcsa0RBQVUsQ0FBQztRQUM3QixJQUFNLFNBQVMsR0FBRyxrREFBVSxDQUFDO1FBRTdCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQzNDLFFBQVEsRUFDUixTQUFTLENBQ1YsQ0FBQztRQUNGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQzNDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNqQyxTQUFTLENBQ1YsQ0FBQztRQUVGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLFNBQVMsRUFDdkMsUUFBUSxFQUNSLFNBQVMsQ0FDVixDQUFDO1FBQ0YsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDMUIsR0FBRyxDQUFDLFFBQVEsQ0FDVixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsU0FBUyxFQUN2QyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDckMsU0FBUyxDQUNWLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQXRONkIsTUFBTSxHQXNObkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pSZ0Q7QUFDbUI7QUFFbEI7QUFDSztBQUV2RCxJQUFNLFlBQVksR0FBRyxVQUFDLFdBQXdCO0lBQzVDLGlCQUFHLFdBQVcsQ0FBQyxDQUFDLGNBQUksV0FBVyxDQUFDLENBQUMsQ0FBRTtBQUFuQyxDQUFtQyxDQUFDO0FBRXRDO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLCtEQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLEVBQWUsRUFBRSxFQUFlO1FBQzNDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLEdBQVc7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFNLElBQUksR0FBa0IsRUFBRSxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQ0UsTUFBbUIsRUFDbkIsV0FBd0IsRUFDeEIsU0FBd0I7UUFIMUIsaUJBNkRDO1FBeERDLElBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUksR0FBa0IsRUFBRSxDQUFDO1FBQzdCLElBQU0sV0FBVyxHQUFnQjtZQUMvQixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEdBQUcsRUFBRSxNQUFNO1NBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVyQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQyxJQUFNLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7WUFFbEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUU7Z0JBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEM7b0NBRVEsU0FBUztnQkFDVCxjQUFVLEdBQWMsU0FBUyxHQUF2QixFQUFFLFFBQVEsR0FBSSxTQUFTLEdBQWIsQ0FBYztnQkFDekMsSUFBTSxjQUFjLEdBQUc7b0JBQ3JCLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxVQUFVO29CQUNsQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUTtpQkFDakMsQ0FBQztnQkFDRixJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFxQjtvQkFDdEQsWUFBSSxDQUFDLFlBQVksQ0FDZixjQUFjLEVBQ2QsbUVBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUNyQztnQkFIRCxDQUdDLENBQ0YsQ0FBQztnQkFFRixJQUFJLFVBQVUsSUFBSSxPQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7O2lCQUUzQztnQkFFRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsSUFBTSxNQUFNLEdBQUcsOERBQWlCLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUM5RCxJQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUUvQixPQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLE9BQUssWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQzNCLE1BQU07b0JBQ04sTUFBTTtvQkFDTixNQUFNO29CQUNOLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUTtvQkFDeEIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLEdBQUcsRUFBRSxNQUFNO2lCQUNaLENBQUMsQ0FBQzs7O1lBOUJMLEtBQXNCLFVBQVUsRUFBVixpRUFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVTtnQkFBM0IsSUFBSSxTQUFTO3dCQUFULFNBQVM7YUErQmpCO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkd3QztBQUNGO0FBRXZDO0lBT0ksb0JBQVksRUFBb0Q7O1lBQWxELEVBQUUsVUFBRSxJQUFJLFlBQUUsSUFBSSxZQUFFLEtBQUssYUFBRSxPQUFPO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixFQUFFLEVBQUU7Z0JBQ0EsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLENBQUMsaURBQVM7Z0JBQ3BCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLEdBQUcsRUFBRSxJQUFJO2dCQUNULElBQUksRUFBRSxHQUFHO2dCQUNULFFBQVEsRUFBRSxpREFBUztnQkFDbkIsT0FBTyxFQUFFLEtBQUs7YUFDakI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLENBQUMsaURBQVM7Z0JBQ3BCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNILEdBQUcsRUFBRSxLQUFLO2dCQUNWLElBQUksRUFBRSxHQUFHO2dCQUNULFFBQVEsRUFBRSxpREFBUztnQkFDbkIsT0FBTyxFQUFFLEtBQUs7YUFDakI7U0FDSjtRQUNELElBQUksQ0FBQyxpQkFBaUI7WUFDbEIsR0FBQyxFQUFFLElBQUcsSUFBSTtZQUNWLEdBQUMsSUFBSSxJQUFHLE1BQU07WUFDZCxHQUFDLElBQUksSUFBRyxNQUFNO1lBQ2QsR0FBQyxLQUFLLElBQUcsT0FBTztlQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxZQUFLLEVBQUwsQ0FBSyxDQUFDLENBQUM7UUFFN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUFBLGlCQUVDO1FBREcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQVMsSUFBSSxRQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUEvQixDQUErQixDQUFDO0lBQ3ZGLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQUEsaUJBTUM7UUFMRyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQVMsSUFBSSxZQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hHLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsWUFBWSxFQUFFLENBQUMsSUFBSyxtQkFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFTLElBQUksZ0JBQVMsS0FBSyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQy9ILElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsMEJBQUssR0FBTCxVQUFNLEdBQVc7UUFDYixJQUFJLG1EQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDekM7YUFBTSxJQUFJLG1EQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUN6QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxHQUFXO1FBQ2YsSUFBSSxtREFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNyQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQzFDO2FBQU0sSUFBSSxtREFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDekMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsR0FBb0I7UUFDMUIsSUFBSSxtREFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNuQzthQUFNLElBQUksbURBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7O0FBRUQ7SUFFSSxlQUFZLEVBQWdEO1lBQTlDLFVBQVU7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dNLElBQU0sTUFBTSxHQUFHLFVBQUksR0FBTSxFQUFFLEdBQWdCO0lBQzlDLE9BQU8sR0FBRyxJQUFJLEdBQUc7QUFDckIsQ0FBQyxDQUFDO0FBR0ssSUFBTSxpQkFBaUIsR0FBRyxVQUFDLENBQWMsRUFBRSxDQUFjO0lBQzVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRU0sSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFXLEVBQUUsR0FBVztJQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7QUFDNUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0lBRUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsMEJBQUUsR0FBRixVQUFHLFFBQWdCLEVBQUUsT0FBVTtRQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFYixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsWUFBRSxPQUFPLFdBQUMsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUU7Z0JBQ3JDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDbEI7U0FDSjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQyxRQUFRLFlBQUUsT0FBTyxXQUFDLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDBCQUFFLEdBQUY7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUk7SUFDZixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7Ozs7Ozs7O1VDekNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9tYWluX2NoYXJfc3ByaXRlLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9tdXNocm9vbV9ib3NzLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9ub3ZlbWJlci5wbmciLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbWcvbm92ZW1iZXJfZm9yZWdyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy90eXBlcy9pbmRleC5kLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvU2hhZG93U3RlcC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9jaXRyaWNIZWFsaW5nLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvYXR0YWNrcy9hdHRhY2tMaXN0L25ld0F0dGFja3MudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvcGhvdG9uQmVhbS50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9zb2Z0R3Jhc3MudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvdG94aWNEcmFpbi50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvY29yZS50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2RhdGEvY29sbGlzaW9uLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvZXZlbnRzL2tleXMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9ldmVudHMvdG91Y2gudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY2FudmFzLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvcmVuZGVyL2NvbGxpZGVyL2NvbGxpc2lvbnMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY29sbGlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9zcHJpdGVzL2luZGV4LnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvc3ByaXRlcy9wYXRoZmluZGVyLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvc3RhdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy91dGlscy9taXNjLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvdXRpbHMvcHJpb3JpdHlRdWV1ZS50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogIzBhMGEwZjtcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmNhbnZhcyNjYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI3RvdWNoLXVpIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4jam95c3RpY2stem9uZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiAyMHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbn1cXG5cXG4jam95c3RpY2sta25vYiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbiNhdHRhY2stYnV0dG9ucyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5hdHRhY2stYnRuIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzLCBmaWx0ZXIgMC4xcztcXG59XFxuXFxuLmF0dGFjay1idG46aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcXG59XFxuXFxuLmF0dGFjay1idG4uYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcXG59XFxuXFxuLyogSFVEIC0gZXNxdWluYSBzdXBlcmlvciBpenF1aWVyZGEgKi9cXG4jaHVkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB6LWluZGV4OiA1MDA7XFxufVxcblxcbi8qIE1pbmltYXBhIC0gZXNxdWluYSBzdXBlcmlvciBkZXJlY2hhICovXFxuI21pbmltYXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNtaW5pbWFwIGNhbnZhcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEJvdMOzbiBkZSBwYXVzYSAqL1xcbiNwYXVzZS1idG4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGF1c2UtYnRuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLjkpO1xcbn1cXG5cXG4vKiBHYW1lIE92ZXIgKi9cXG4jZ2FtZS1vdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbn1cXG5cXG4jZ2FtZS1vdmVyLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNnYW1lLW92ZXIgaDEge1xcbiAgICBjb2xvcjogI2U3NGMzYztcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHAge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jcmVzdGFydC1idG4ge1xcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmVzdGFydC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgI3RvdWNoLXVpIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsMENBQTBDO0lBQzFDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQSxxQ0FBcUM7QUFDckM7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBLGNBQWM7QUFDZDtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogIzBhMGEwZjtcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmNhbnZhcyNjYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI3RvdWNoLXVpIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4jam95c3RpY2stem9uZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiAyMHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbn1cXG5cXG4jam95c3RpY2sta25vYiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbiNhdHRhY2stYnV0dG9ucyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5hdHRhY2stYnRuIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzLCBmaWx0ZXIgMC4xcztcXG59XFxuXFxuLmF0dGFjay1idG46aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcXG59XFxuXFxuLmF0dGFjay1idG4uYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcXG59XFxuXFxuLyogSFVEIC0gZXNxdWluYSBzdXBlcmlvciBpenF1aWVyZGEgKi9cXG4jaHVkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB6LWluZGV4OiA1MDA7XFxufVxcblxcbi8qIE1pbmltYXBhIC0gZXNxdWluYSBzdXBlcmlvciBkZXJlY2hhICovXFxuI21pbmltYXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNtaW5pbWFwIGNhbnZhcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEJvdMOzbiBkZSBwYXVzYSAqL1xcbiNwYXVzZS1idG4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGF1c2UtYnRuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLjkpO1xcbn1cXG5cXG4vKiBHYW1lIE92ZXIgKi9cXG4jZ2FtZS1vdmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbn1cXG5cXG4jZ2FtZS1vdmVyLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNnYW1lLW92ZXIgaDEge1xcbiAgICBjb2xvcjogI2U3NGMzYztcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHAge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jcmVzdGFydC1idG4ge1xcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmVzdGFydC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgI3RvdWNoLXVpIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZmU3OWE2N2ViMzk0MDIwM2RmOTkyYjI4NTU1MmMzZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDVmOGRkZjE5NDBmZjI1YWZiODlmMjkyM2YzYTA4MWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUxNjc5Mjk5NTU1ZWY2OTEzOTAwMWI1OTY3NTI0MWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YTdlNTczMWY2OWE4NDkxOGNmODYzNzA2NDYzNjZmZi5wbmdcIjsiLCIiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQXR0YWNrIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IFBsYXlhYmxlIH0gZnJvbSBcIi4uLy4uL3Nwcml0ZXNcIjtcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gXCIuLi8uLi91dGlscy9taXNjXCI7XG5cbmV4cG9ydCBjbGFzcyBTaGFkb3dTdGVwIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJTaGFkb3cgU3RlcFwiLFxuICAgICAgZGFtYWdlOiAwLFxuICAgICAgaGVhbDogMCxcbiAgICAgIHR5cGU6IFwic2hhZG93XCIsXG4gICAgICByYW5nZTogMTAwMCxcbiAgICAgIGNvc3Q6IDEwLFxuICAgICAgYWNjdXJhY3k6IDAuOCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogU2hhZG93U3RlcCB7XG4gICAgdXNlclxuICAgICAgLnJlZHVjZU1hbmEodGhpcy5jb3N0KTtcbiAgICBjb25zdCBzdGVwID0gMTAwO1xuICAgIHVzZXIucG9zaXRpb24gPSB7XG4gICAgICB4OiB1c2VyLnBvc2l0aW9uLnggKyByYW5kb21JbnQoLXN0ZXAsIHN0ZXApLFxuICAgICAgeTogdXNlci5wb3NpdGlvbi55ICsgcmFuZG9tSW50KC1zdGVwLCBzdGVwKVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBTaGFkb3dTdGVwIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcmFuZG9tSW50KHVzZXIucG9zaXRpb24ueCwgdXNlci5wb3NpdGlvbi54ICsgdXNlci53aWR0aCk7XG4gICAgICBjb25zdCB5ID0gcmFuZG9tSW50KHVzZXIucG9zaXRpb24ueSwgdXNlci5wb3NpdGlvbi55ICsgdXNlci5oZWlnaHQpO1xuICAgICAgY29uc3QgdyA9IDE7XG4gICAgICBjb25zdCBoID0gMjA7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdHRhY2sgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUGxheWFibGUgfSBmcm9tIFwiLi4vLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pc2NcIjtcblxuZXhwb3J0IGNsYXNzIENpdHJpY0hlYWxpbmcgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIkNpdHJpYyBIZWFsaW5nXCIsXG4gICAgICBkYW1hZ2U6IDAsXG4gICAgICBoZWFsOiAxMCxcbiAgICAgIHR5cGU6IFwiZ3Jhc3NcIixcbiAgICAgIHJhbmdlOiAxMDAwLFxuICAgICAgY29zdDogNTAsXG4gICAgICBhY2N1cmFjeTogMC44LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBDaXRyaWNIZWFsaW5nIHtcbiAgICB1c2VyXG4gICAgICAuaGVhbCh0aGlzLmhlYWwpXG4gICAgICAucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogQ2l0cmljSGVhbGluZyB7XG4gICAgY29uc3QgciA9IHJhbmRvbUludCh1c2VyLndpZHRoIC0gMjAsIHVzZXIud2lkdGgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTAsIDI1MSwgMjQwLCAwLjgpXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9ICA1O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKFxuICAgICAgdXNlci5wb3NpdGlvbi54ICsgdXNlci53aWR0aCAvIDIsXG4gICAgICB1c2VyLnBvc2l0aW9uLnkgKyB1c2VyLmhlaWdodCAvIDIsXG4gICAgICByLFxuICAgICAgMCxcbiAgICAgIDIgKiBNYXRoLlBJXG4gICAgKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdHRhY2sgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUGxheWFibGUgfSBmcm9tIFwiLi4vLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pc2NcIjtcblxuZXhwb3J0IGNsYXNzIEZpcmViYWxsIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJGaXJlYmFsbFwiLFxuICAgICAgZGFtYWdlOiA4MCxcbiAgICAgIHR5cGU6IFwiZmlyZVwiLFxuICAgICAgcmFuZ2U6IDIwMCxcbiAgICAgIGNvc3Q6IDMwLFxuICAgICAgYWNjdXJhY3k6IDAuOSxcbiAgICAgIGNvb2xkb3duOiAzLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSBibGF6aW5nIGJhbGwgb2YgZmlyZVwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IEZpcmViYWxsIHtcbiAgICBjb25zdCBkYW1hZ2UgPSAodXNlci5tYWdpayAvIHRhcmdldC5pbW11bml0eSkgKiB0aGlzLmRhbWFnZTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXIucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogRmlyZWJhbGwge1xuICAgIGNvbnN0IHIgPSByYW5kb21JbnQoMTAsIDMwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMTAwLCAwLCAwLjcpXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB0YXJnZXQucG9zaXRpb24ueCArIHRhcmdldC53aWR0aCAvIDIsXG4gICAgICB0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5oZWlnaHQgLyAyLFxuICAgICAgcixcbiAgICAgIDAsXG4gICAgICAyICogTWF0aC5QSVxuICAgICk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEljZVNoYXJkIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJJY2UgU2hhcmRcIixcbiAgICAgIGRhbWFnZTogNDAsXG4gICAgICB0eXBlOiBcImljZVwiLFxuICAgICAgcmFuZ2U6IDE1MCxcbiAgICAgIGNvc3Q6IDIwLFxuICAgICAgYWNjdXJhY3k6IDAuOTUsXG4gICAgICBjb29sZG93bjogMSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNoYXJwIGljZSBwcm9qZWN0aWxlXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogSWNlU2hhcmQge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBJY2VTaGFyZCB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDEwMCwgMjAwLCAyNTUsIDAuOClcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMiwgdXNlci5wb3NpdGlvbi55ICsgdXNlci5oZWlnaHQgLyAyKTtcbiAgICBjdHgubGluZVRvKHRhcmdldC5wb3NpdGlvbi54ICsgdGFyZ2V0LndpZHRoIC8gMiwgdGFyZ2V0LnBvc2l0aW9uLnkgKyB0YXJnZXQuaGVpZ2h0IC8gMik7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFsIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJIZWFsXCIsXG4gICAgICBkYW1hZ2U6IDAsXG4gICAgICBoZWFsOiAxMDAsXG4gICAgICB0eXBlOiBcImhvbHlcIixcbiAgICAgIHJhbmdlOiAwLFxuICAgICAgY29zdDogNDAsXG4gICAgICBhY2N1cmFjeTogMSxcbiAgICAgIGNvb2xkb3duOiA1LFxuICAgICAgZGVzY3JpcHRpb246IFwiUmVzdG9yZSBIUFwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IEhlYWwge1xuICAgIHVzZXIuaGVhbCh0aGlzLmhlYWwpO1xuICAgIHVzZXIucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogSGVhbCB7XG4gICAgY29uc3QgciA9IHJhbmRvbUludCgyMCwgNTApO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgxMDAsIDI1NSwgMTAwLCAwLjgpXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpZ2h0bmluZ0JvbHQgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIkxpZ2h0bmluZyBCb2x0XCIsXG4gICAgICBkYW1hZ2U6IDEyMCxcbiAgICAgIHR5cGU6IFwiZWxlY3RyaWNcIixcbiAgICAgIHJhbmdlOiAyNTAsXG4gICAgICBjb3N0OiA2MCxcbiAgICAgIGFjY3VyYWN5OiAwLjg1LFxuICAgICAgY29vbGRvd246IDQsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHBvd2VyZnVsIGxpZ2h0bmluZyBzdHJpa2VcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBMaWdodG5pbmdCb2x0IHtcbiAgICBjb25zdCBkYW1hZ2UgPSAodXNlci5tYWdpayAvIHRhcmdldC5pbW11bml0eSkgKiB0aGlzLmRhbWFnZTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXIucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogTGlnaHRuaW5nQm9sdCB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAwLCAwLjkpXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odXNlci5wb3NpdGlvbi54ICsgdXNlci53aWR0aCAvIDIsIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB1c2VyLnBvc2l0aW9uLnggKyAodGFyZ2V0LnBvc2l0aW9uLnggLSB1c2VyLnBvc2l0aW9uLngpICogKGkgLyA1KSArIHJhbmRvbUludCgtMzAsIDMwKTtcbiAgICAgIGNvbnN0IHkgPSB1c2VyLnBvc2l0aW9uLnkgKyAodGFyZ2V0LnBvc2l0aW9uLnkgLSB1c2VyLnBvc2l0aW9uLnkpICogKGkgLyA1KSArIHJhbmRvbUludCgtMzAsIDMwKTtcbiAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgfVxuICAgIGN0eC5saW5lVG8odGFyZ2V0LnBvc2l0aW9uLnggKyB0YXJnZXQud2lkdGggLyAyLCB0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5oZWlnaHQgLyAyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvaXNvblN0aW5nIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJQb2lzb24gU3RpbmdcIixcbiAgICAgIGRhbWFnZTogMzAsXG4gICAgICB0eXBlOiBcInBvaXNvblwiLFxuICAgICAgcmFuZ2U6IDEwMCxcbiAgICAgIGNvc3Q6IDE1LFxuICAgICAgYWNjdXJhY3k6IDAuOSxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSB0b3hpYyBzdGFiXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogUG9pc29uU3Rpbmcge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm11c2NsZSAvIHRhcmdldC5hcm1vdXIpICogdGhpcy5kYW1hZ2U7XG4gICAgdGFyZ2V0LnRha2VEYW1hZ2UoZGFtYWdlKTtcbiAgICB1c2VyLnJlZHVjZU1hbmEodGhpcy5jb3N0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihcbiAgICB1c2VyOiBQbGF5YWJsZSxcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IFBvaXNvblN0aW5nIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDIwMCwgMCwgMC42KVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gdGFyZ2V0LnBvc2l0aW9uLnggKyByYW5kb21JbnQoMCwgdGFyZ2V0LndpZHRoKTtcbiAgICAgIGNvbnN0IHkgPSB0YXJnZXQucG9zaXRpb24ueSArIHJhbmRvbUludCgwLCB0YXJnZXQuaGVpZ2h0KTtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMoeCwgeSwgcmFuZG9tSW50KDMsIDgpLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGh1bmRlclN0b3JtIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJUaHVuZGVyIFN0b3JtXCIsXG4gICAgICBkYW1hZ2U6IDE1MCxcbiAgICAgIHR5cGU6IFwiZWxlY3RyaWNcIixcbiAgICAgIHJhbmdlOiAzMDAsXG4gICAgICBjb3N0OiA4MCxcbiAgICAgIGFjY3VyYWN5OiAwLjc1LFxuICAgICAgY29vbGRvd246IDYsXG4gICAgICBkZXNjcmlwdGlvbjogXCJNYXNzaXZlIGxpZ2h0bmluZyBkYW1hZ2VcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBUaHVuZGVyU3Rvcm0ge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBUaHVuZGVyU3Rvcm0ge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMTAwLCAwLjkpXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnN0IHN0YXJ0WCA9IHRhcmdldC5wb3NpdGlvbi54ICsgcmFuZG9tSW50KDAsIHRhcmdldC53aWR0aCk7XG4gICAgICBjb25zdCBzdGFydFkgPSB0YXJnZXQucG9zaXRpb24ueSAtIDUwO1xuICAgICAgY3R4Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XG4gICAgICBjdHgubGluZVRvKHN0YXJ0WCArIHJhbmRvbUludCgtNDAsIDQwKSwgdGFyZ2V0LnBvc2l0aW9uLnkgKyB0YXJnZXQuaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgUGhvdG9uQmVhbSBleHRlbmRzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IFwiUGhvdG9uIEJlYW1cIixcbiAgICAgIGRhbWFnZTogNTAsXG4gICAgICBoZWFsOiAwLFxuICAgICAgdHlwZTogXCJncmFzc1wiLFxuICAgICAgcmFuZ2U6IDUwLFxuICAgICAgY29zdDogNTAsXG4gICAgICBhY2N1cmFjeTogMC44LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBQaG90b25CZWFtIHtcbiAgICBjb25zdCBkYW1hZ2UgPSAodXNlci5tYWdpayAvIHRhcmdldC5pbW11bml0eSkgKiB0aGlzLmRhbWFnZTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXIucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogUGhvdG9uQmVhbSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxNTgsIDI1LCA4LCAwLjgpXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJhbmRvbUludCh1c2VyLnBvc2l0aW9uLnggLSA1MCwgdXNlci5wb3NpdGlvbi54IC0gNTAwKTtcbiAgICAgIGNvbnN0IHkgPSByYW5kb21JbnQodXNlci5wb3NpdGlvbi55LCB1c2VyLnBvc2l0aW9uLnkgKyB1c2VyLmhlaWdodCk7XG4gICAgICBjb25zdCB3ID0gcmFuZG9tSW50KDIwLCAxMDApO1xuICAgICAgY29uc3QgaCA9IDU7XG4gICAgICBjb25zdCByID0gcmFuZG9tSW50KDI0MCwgMjU1KTtcbiAgICAgIGNvbnN0IGcgPSByYW5kb21JbnQoMjQwLCAyNTUpO1xuICAgICAgY29uc3QgYiA9IHJhbmRvbUludCgyNDAsIDI1NSk7XG4gICAgICBjb25zdCBhID0gTWF0aC5yYW5kb20oKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2F9KWA7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdHRhY2sgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUGxheWFibGUgfSBmcm9tIFwiLi4vLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pc2NcIjtcblxuZXhwb3J0IGNsYXNzIFNvZnRHcmFzcyBleHRlbmRzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IFwiU29mdCBHcmFzc1wiLFxuICAgICAgZGFtYWdlOiAxMCxcbiAgICAgIHR5cGU6IFwiZ3Jhc3NcIixcbiAgICAgIHJhbmdlOiAxNixcbiAgICAgIGNvc3Q6IDIwLFxuICAgICAgYWNjdXJhY3k6IDAuOCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogU29mdEdyYXNzIHtcbiAgICBjb25zdCBkYW1hZ2UgPSAodXNlci5tYWdpayAvIHRhcmdldC5pbW11bml0eSkgKiB0aGlzLmRhbWFnZTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXJcbiAgICAgIC5oZWFsKE1hdGguZmxvb3IoZGFtYWdlIC8gMikpXG4gICAgICAucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogU29mdEdyYXNzIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLyAxNiwgdXNlci53aWR0aCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg4LCAxNjgsIDg2LCAwLjUpXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdHRhY2sgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUGxheWFibGUgfSBmcm9tIFwiLi4vLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pc2NcIjtcblxuZXhwb3J0IGNsYXNzIFRveGljRHJhaW4gZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlRveGljIERyYWluXCIsXG4gICAgICBkYW1hZ2U6IDIwLFxuICAgICAgdHlwZTogXCJwb2lzb25cIixcbiAgICAgIHJhbmdlOiAxNixcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb3N0OiAyMCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlIHVzZXIgZHJhaW5zIHRoZSB0YXJnZXQncyBIUCBhbmQgcmVsZWFzZXMgdG94aWMgZnVtZXMuIEhhcyAxNSUgY2hhbmNlIG9mIHBvaXNvbmluZyB0aGUgdGFyZ2V0LlwiLFxuICAgICAgZWZmZWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwb2lzb25cIixcbiAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICAgIGVuZFZhbHVlOiAxMCxcbiAgICAgICAgICBpbmM6IDEsXG4gICAgICAgICAgY2hhbmNlOiAwLjE1LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IElQbGF5YWJsZSwgdGFyZ2V0OiBJUGxheWFibGUpOiBUb3hpY0RyYWluIHtcbiAgICBjb25zdCBkYW1hZ2UgPSAodXNlci5tYWdpayAvIHRhcmdldC5pbW11bml0eSkgKiB0aGlzLmRhbWFnZTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXIucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogVG94aWNEcmFpbiB7XG4gICAgY29uc3QgciA9IHJhbmRvbUludCh1c2VyLndpZHRoIC8gMTYsIHVzZXIud2lkdGgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTgwLCAxMTIsIDIyNCwgMC41KVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKFxuICAgICAgdXNlci5wb3NpdGlvbi54ICsgdXNlci53aWR0aCAvIDIsXG4gICAgICB1c2VyLnBvc2l0aW9uLnkgKyB1c2VyLmhlaWdodCAvIDIsXG4gICAgICByLFxuICAgICAgMCxcbiAgICAgIDIgKiBNYXRoLlBJXG4gICAgKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVmZmVjdCBpbXBsZW1lbnRzIElFZmZlY3Qge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHN0YXJ0VmFsdWU6IG51bWJlcjtcbiAgICBlbmRWYWx1ZTogbnVtYmVyO1xuICAgIGluYzogbnVtYmVyO1xuICAgIGNoYW5jZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgICAgZW5kVmFsdWUsXG4gICAgICAgIGluYyxcbiAgICAgICAgY2hhbmNlXG4gICAgfTogSUVmZmVjdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWU7XG4gICAgICAgIHRoaXMuZW5kVmFsdWUgPSBlbmRWYWx1ZTtcbiAgICAgICAgdGhpcy5pbmMgPSBpbmM7XG4gICAgICAgIHRoaXMuY2hhbmNlID0gY2hhbmNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dGFjayBpbXBsZW1lbnRzIElBdHRhY2sge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhbWFnZTogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIHJhbmdlOiBudW1iZXI7XG4gIGhlYWw6IG51bWJlcjtcbiAgYWNjdXJhY3k6IG51bWJlcjtcbiAgY29vbGRvd246IG51bWJlcjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xuICBlZmZlY3RzOiBFZmZlY3RbXTtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgbmFtZSxcbiAgICBkYW1hZ2UsXG4gICAgdHlwZSxcbiAgICByYW5nZSxcbiAgICBhY2N1cmFjeSxcbiAgICBjb29sZG93bixcbiAgICBjb3N0LFxuICAgIGhlYWwsXG4gICAgZWZmZWN0cyxcbiAgICBkZXNjcmlwdGlvblxuICB9OiBJQXR0YWNrKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY29zdCA9IGNvc3Q7XG4gICAgdGhpcy5oZWFsID0gaGVhbDtcbiAgICB0aGlzLmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcbiAgICB0aGlzLmFjY3VyYWN5ID0gYWNjdXJhY3k7XG4gICAgdGhpcy5jb29sZG93biA9IGNvb2xkb3duO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IElQbGF5YWJsZSwgdGFyZ2V0OiBJUGxheWFibGUpOiBJQXR0YWNrIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IE1BUF9XSURUSDogbnVtYmVyID0gMTkyMDtcbmV4cG9ydCBjb25zdCBNQVBfSEVJR0hUOiBudW1iZXIgPSAxNDQwO1xuZXhwb3J0IGNvbnN0IFRJTEVfV0lEVEg6IG51bWJlciA9IDY0O1xuZXhwb3J0IGNvbnN0IFRJTEVfSEVJR0hUOiBudW1iZXIgPSA2NDtcbmV4cG9ydCBjb25zdCBDSEFSX1dJRFRIOiBudW1iZXIgPSAxNjtcbmV4cG9ydCBjb25zdCBDSEFSX0hFSUdIVDogbnVtYmVyID0gMTY7XG5leHBvcnQgY29uc3QgTUFQX1hfT0ZGU0VUOiBudW1iZXIgPSAtNjAwO1xuZXhwb3J0IGNvbnN0IE1BUF9ZX09GRlNFVDogbnVtYmVyID0gLTkwMDtcblxuZXhwb3J0IGNvbnN0IENIQVJfWF9PRkZTRVQ6IG51bWJlciA9IDYwMDtcbmV4cG9ydCBjb25zdCBDSEFSX1lfT0ZGU0VUOiBudW1iZXIgPSA2MDA7XG5leHBvcnQgY29uc3QgQkFSX09GRlNFVDogbnVtYmVyID0gMjtcbmV4cG9ydCBjb25zdCBCQVJfSEVJR0hUOiBudW1iZXIgPSAxMDtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1hfT0ZGU0VUOiBudW1iZXIgPSAyNjU7XG5leHBvcnQgY29uc3QgRU5FTVlfWV9PRkZTRVQ6IG51bWJlciA9IDIwO1xuZXhwb3J0IGNvbnN0IEVORU1ZX0NIQVNFX0RJU1RBTkNFOiBudW1iZXIgPSBDSEFSX1dJRFRIICogNTA7XG5cbmV4cG9ydCBjb25zdCBJU19DT0xMSURFUjogbnVtYmVyID0gOTU1O1xuZXhwb3J0IGNvbnN0IE1PVkVTUEVFRDogbnVtYmVyID0gNDtcbmV4cG9ydCBjb25zdCBUSUxFUzogeyByb3dzOiBudW1iZXIsIGNvbHM6IG51bWJlciB9ID0ge1xuICAgIHJvd3M6IDQwLFxuICAgIGNvbHM6IDMwXG59XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJT05TID0gW1stMSwgMF0sIFswLCAtMV0sIFsxLCAwXSwgWzAsIDFdXTtcbiIsImV4cG9ydCBjb25zdCBjb2xsaXNpb25zOiBudW1iZXJbXSA9IFtcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgOTU1LCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcbl0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVLZXlQcmVzcyA9IChjb250cm9sbGVyOiBDb250cm9sbGVyKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIucHJlc3MoZS5rZXkpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZShlLmtleSk7XG4gICAgfSlcbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVRvdWNoQ29udHJvbHMgPSAoY29udHJvbGxlcjogQ29udHJvbGxlcikgPT4ge1xuICAgIGNvbnN0IHRvdWNoVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3VjaFVJLmlkID0gJ3RvdWNoLXVpJztcblxuICAgIC8vIEpveXN0aWNrIHpvbmVcbiAgICBjb25zdCBqb3lzdGlja1pvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBqb3lzdGlja1pvbmUuaWQgPSAnam95c3RpY2stem9uZSc7XG4gICAgY29uc3Qgam95c3RpY2tLbm9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgam95c3RpY2tLbm9iLmlkID0gJ2pveXN0aWNrLWtub2InO1xuICAgIGpveXN0aWNrWm9uZS5hcHBlbmRDaGlsZChqb3lzdGlja0tub2IpO1xuXG4gICAgLy8gQXR0YWNrIGJ1dHRvbnMgLSBncmlkIDR4MiBmb3IgYWxsIDggYXR0YWNrc1xuICAgIGNvbnN0IGF0dGFja0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhdHRhY2tCdXR0b25zLmlkID0gJ2F0dGFjay1idXR0b25zJztcblxuICAgIGNvbnN0IGF0dGFja0NvbmZpZ3MgPSBbXG4gICAgICAgIHsga2V5OiAneScsIGxhYmVsOiAn8J+UpScsIGNvbG9yOiAncmdiYSgyNTUsIDEwMCwgMCwgMC42KScsIG5hbWU6ICdGaXJlYmFsbCcgfSxcbiAgICAgICAgeyBrZXk6ICd1JywgbGFiZWw6ICfinYTvuI8nLCBjb2xvcjogJ3JnYmEoMTAwLCAyMDAsIDI1NSwgMC42KScsIG5hbWU6ICdJY2VTaGFyZCcgfSxcbiAgICAgICAgeyBrZXk6ICdpJywgbGFiZWw6ICfwn5KaJywgY29sb3I6ICdyZ2JhKDEwMCwgMjU1LCAxMDAsIDAuNiknLCBuYW1lOiAnSGVhbCcgfSxcbiAgICAgICAgeyBrZXk6ICdvJywgbGFiZWw6ICfimqEnLCBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDAsIDAuNiknLCBuYW1lOiAnTGlnaHRuaW5nJyB9LFxuICAgICAgICB7IGtleTogJ3AnLCBsYWJlbDogJ+KYoO+4jycsIGNvbG9yOiAncmdiYSgwLCAyMDAsIDAsIDAuNiknLCBuYW1lOiAnUG9pc29uJyB9LFxuICAgICAgICB7IGtleTogJ2onLCBsYWJlbDogJ/CfjKrvuI8nLCBjb2xvcjogJ3JnYmEoMTAwLCAxMDAsIDI1NSwgMC42KScsIG5hbWU6ICdUaHVuZGVyJyB9LFxuICAgICAgICB7IGtleTogJ2snLCBsYWJlbDogJ/CfjJEnLCBjb2xvcjogJ3JnYmEoODAsIDAsIDEyMCwgMC42KScsIG5hbWU6ICdEYXJrJyB9LFxuICAgICAgICB7IGtleTogJ2wnLCBsYWJlbDogJ+KcqCcsIGNvbG9yOiAncmdiYSgyNTUsIDEwMCwgMjU1LCAwLjYpJywgbmFtZTogJ1NoYWRvdycgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgYWN0aXZlVG91Y2hlczogeyBbaWQ6IG51bWJlcl06IHN0cmluZyB9ID0ge307XG5cbiAgICBhdHRhY2tDb25maWdzLmZvckVhY2goY2ZnID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnYXR0YWNrLWJ0bic7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGNmZy5sYWJlbDtcbiAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmQgPSBjZmcuY29sb3I7XG4gICAgICAgIGJ0bi5kYXRhc2V0LmtleSA9IGNmZy5rZXk7XG4gICAgICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgaWYgKHRvdWNoKSBhY3RpdmVUb3VjaGVzW3RvdWNoLmlkZW50aWZpZXJdID0gY2ZnLmtleTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIucHJlc3MoY2ZnLmtleSk7XG4gICAgICAgICAgICBidG4uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuOSknO1xuICAgICAgICAgICAgYnRuLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEuNSknO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgaWYgKHRvdWNoKSBkZWxldGUgYWN0aXZlVG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZShjZmcua2V5KTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgICAgICAgICAgYnRuLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEpJztcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBNdWx0aS10b3VjaCBzdXBwb3J0OiBhbHNvIGNhbmNlbCB3aGVuIHRvdWNoIGlzIGNhbmNlbGxlZFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgIGlmICh0b3VjaCkgZGVsZXRlIGFjdGl2ZVRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICAgICAgICBjb250cm9sbGVyLnJlbGVhc2UoY2ZnLmtleSk7XG4gICAgICAgICAgICBidG4uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxKSc7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYXR0YWNrQnV0dG9ucy5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuXG4gICAgdG91Y2hVSS5hcHBlbmRDaGlsZChqb3lzdGlja1pvbmUpO1xuICAgIHRvdWNoVUkuYXBwZW5kQ2hpbGQoYXR0YWNrQnV0dG9ucyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3VjaFVJKTtcblxuICAgIGxldCBqb3lzdGlja0FjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCBqb3lzdGlja0NlbnRlclggPSAwO1xuICAgIGxldCBqb3lzdGlja0NlbnRlclkgPSAwO1xuICAgIGxldCBqb3lzdGlja1RvdWNoSWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gICAgam95c3RpY2tab25lLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChqb3lzdGlja1RvdWNoSWQgIT09IG51bGwpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgam95c3RpY2tUb3VjaElkID0gdG91Y2guaWRlbnRpZmllcjtcbiAgICAgICAgam95c3RpY2tBY3RpdmUgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVjdCA9IGpveXN0aWNrWm9uZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgam95c3RpY2tDZW50ZXJYID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDI7XG4gICAgICAgIGpveXN0aWNrQ2VudGVyWSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICB1cGRhdGVKb3lzdGljayh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgICB9KTtcblxuICAgIGpveXN0aWNrWm9uZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICgham95c3RpY2tBY3RpdmUgfHwgam95c3RpY2tUb3VjaElkID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBGaW5kIG91ciBzcGVjaWZpYyB0b3VjaFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUudG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUudG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSBqb3lzdGlja1RvdWNoSWQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVKb3lzdGljayhlLnRvdWNoZXNbaV0uY2xpZW50WCwgZS50b3VjaGVzW2ldLmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBqb3lzdGlja1pvbmUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IGpveXN0aWNrVG91Y2hJZCkge1xuICAgICAgICAgICAgICAgIGpveXN0aWNrQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgam95c3RpY2tUb3VjaElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBqb3lzdGlja0tub2Iuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSc7XG4gICAgICAgICAgICAgICAgcmVsZWFzZUFsbERpcmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgam95c3RpY2tab25lLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSBqb3lzdGlja1RvdWNoSWQpIHtcbiAgICAgICAgICAgICAgICBqb3lzdGlja0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGpveXN0aWNrVG91Y2hJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgam95c3RpY2tLbm9iLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknO1xuICAgICAgICAgICAgICAgIHJlbGVhc2VBbGxEaXJlY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZUpveXN0aWNrID0gKGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGR4ID0gY2xpZW50WCAtIGpveXN0aWNrQ2VudGVyWDtcbiAgICAgICAgY29uc3QgZHkgPSBjbGllbnRZIC0gam95c3RpY2tDZW50ZXJZO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIGNvbnN0IG1heERpc3RhbmNlID0gTWF0aC5taW4oam95c3RpY2tab25lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMywgNTApO1xuXG4gICAgICAgIGNvbnN0IGNsYW1wZWREaXN0YW5jZSA9IE1hdGgubWluKGRpc3RhbmNlLCBtYXhEaXN0YW5jZSk7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuXG4gICAgICAgIGNvbnN0IGtub2JYID0gTWF0aC5jb3MoYW5nbGUpICogY2xhbXBlZERpc3RhbmNlO1xuICAgICAgICBjb25zdCBrbm9iWSA9IE1hdGguc2luKGFuZ2xlKSAqIGNsYW1wZWREaXN0YW5jZTtcbiAgICAgICAgam95c3RpY2tLbm9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoY2FsYygtNTAlICsgJHtrbm9iWH1weCksIGNhbGMoLTUwJSArICR7a25vYll9cHgpKWA7XG5cbiAgICAgICAgcmVsZWFzZUFsbERpcmVjdGlvbnMoKTtcblxuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSBtYXhEaXN0YW5jZSAqIDAuMzU7XG4gICAgICAgIGlmIChkaXN0YW5jZSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+IE1hdGguYWJzKGR5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucHJlc3MoZHggPiAwID8gJ2QnIDogJ2EnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5wcmVzcyhkeSA+IDAgPyAncycgOiAndycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbGVhc2VBbGxEaXJlY3Rpb25zID0gKCkgPT4ge1xuICAgICAgICBjb250cm9sbGVyLnJlbGVhc2UoJ3cnKTtcbiAgICAgICAgY29udHJvbGxlci5yZWxlYXNlKCdhJyk7XG4gICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZSgncycpO1xuICAgICAgICBjb250cm9sbGVyLnJlbGVhc2UoJ2QnKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgam95c3RpY2tab25lLCBhdHRhY2tCdXR0b25zIH07XG59O1xuIiwiaW1wb3J0IHsgU3ByaXRlLCBQbGF5YWJsZSB9IGZyb20gXCIuL3Nwcml0ZXNcIjtcbmltcG9ydCB7IG1hcFNldHVwIH0gZnJvbSBcIi4vcmVuZGVyL2NhbnZhc1wiO1xuaW1wb3J0IHsgY29uZmlndXJlS2V5UHJlc3MgfSBmcm9tIFwiLi9ldmVudHMva2V5c1wiO1xuaW1wb3J0IHsgY29uZmlndXJlVG91Y2hDb250cm9scyB9IGZyb20gXCIuL2V2ZW50cy90b3VjaFwiO1xuaW1wb3J0IHsgYW5pbWF0aW9uQnVpbGRlciB9IGZyb20gXCIuL3JlbmRlci9hbmltYXRpb25cIjtcbmltcG9ydCB7XG4gIE1BUF9XSURUSCxcbiAgTUFQX0hFSUdIVCxcbiAgTUFQX1hfT0ZGU0VULFxuICBNQVBfWV9PRkZTRVQsXG4gIENIQVJfWF9PRkZTRVQsXG4gIENIQVJfWV9PRkZTRVQsXG4gIEVORU1ZX1hfT0ZGU0VULFxuICBFTkVNWV9ZX09GRlNFVCxcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBUb3hpY0RyYWluIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L3RveGljRHJhaW5cIjtcbmltcG9ydCB7IFNvZnRHcmFzcyB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9zb2Z0R3Jhc3NcIjtcbmltcG9ydCB7IENpdHJpY0hlYWxpbmcgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvY2l0cmljSGVhbGluZ1wiO1xuaW1wb3J0IHsgUGhvdG9uQmVhbSB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9waG90b25CZWFtXCI7XG5pbXBvcnQgeyBTaGFkb3dTdGVwIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L1NoYWRvd1N0ZXBcIjtcbmltcG9ydCB7IFRodW5kZXJTdG9ybSB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9uZXdBdHRhY2tzXCI7XG5pbXBvcnQgeyBMaWdodG5pbmdCb2x0IH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L25ld0F0dGFja3NcIjtcbmltcG9ydCB7IFBvaXNvblN0aW5nIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L25ld0F0dGFja3NcIjtcbmltcG9ydCB7IEZpcmViYWxsIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L25ld0F0dGFja3NcIjtcbmltcG9ydCB7IEljZVNoYXJkIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L25ld0F0dGFja3NcIjtcblxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgQmFja2dyb3VuZFNwcml0ZSBmcm9tIFwiLi9pbWcvbm92ZW1iZXIucG5nXCI7XG5pbXBvcnQgRm9yZWdyb3VuZFNwcml0ZSBmcm9tIFwiLi9pbWcvbm92ZW1iZXJfZm9yZWdyb3VuZC5wbmdcIjtcbmltcG9ydCBQbGF5ZXJTcHJpdGUgZnJvbSBcIi4vaW1nL21haW5fY2hhcl9zcHJpdGUucG5nXCI7XG5pbXBvcnQgRW5lbXlTcHJpdGUgZnJvbSBcIi4vaW1nL211c2hyb29tX2Jvc3MucG5nXCI7XG5cbmNvbnN0IGxvYWRJbWFnZSA9IChpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgIH1cbiAgICBpbWFnZS5vbmVycm9yID0gZSA9PiB7XG4gICAgICByZWplY3QoZSlcbiAgICB9XG4gIH0pXG59O1xuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgYmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgZmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgZW5lbXlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaW1hZ2VzID0gW3BsYXllckltZywgYmdJbWcsIGZnSW1nLCBlbmVteUltZ107XG4gIFxuICBiZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kU3ByaXRlO1xuICBwbGF5ZXJJbWcuc3JjID0gUGxheWVyU3ByaXRlO1xuICBmZ0ltZy5zcmMgPSBGb3JlZ3JvdW5kU3ByaXRlO1xuICBlbmVteUltZy5zcmMgPSBFbmVteVNwcml0ZTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoaW1hZ2VzLm1hcChsb2FkSW1hZ2UpKTtcblxuICBjb25zdCBwbGF5ZXJGcmFtZXMgPSAxNjtcblxuXG5cbiAgY29uc3QgYmcgPSBuZXcgU3ByaXRlKHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogTUFQX1hfT0ZGU0VULFxuICAgICAgeTogTUFQX1lfT0ZGU0VULFxuICAgIH0sXG4gICAgaW1hZ2U6IGJnSW1nLFxuICAgIHdpZHRoOiBNQVBfV0lEVEgsXG4gICAgaGVpZ2h0OiBNQVBfSEVJR0hULFxuICAgIGRpcmVjdGlvbnM6IHtcbiAgICAgIGRvd246IDAsXG4gICAgICB1cDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgZmcgPSBuZXcgU3ByaXRlKHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogTUFQX1hfT0ZGU0VULFxuICAgICAgeTogTUFQX1lfT0ZGU0VULFxuICAgIH0sXG4gICAgaW1hZ2U6IGZnSW1nLFxuICAgIHdpZHRoOiBNQVBfV0lEVEgsXG4gICAgaGVpZ2h0OiBNQVBfSEVJR0hULFxuICAgIGRpcmVjdGlvbnM6IHtcbiAgICAgIGRvd246IDAsXG4gICAgICB1cDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXlhYmxlKFxuICAgIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IENIQVJfWF9PRkZTRVQsXG4gICAgICAgIHk6IENIQVJfWV9PRkZTRVQsXG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHBsYXllckltZyxcbiAgICAgIHdpZHRoOiBwbGF5ZXJJbWcud2lkdGggLyBwbGF5ZXJGcmFtZXMsXG4gICAgICBoZWlnaHQ6IHBsYXllckltZy5oZWlnaHQsXG4gICAgICB6b29tOiA0LFxuICAgICAgZnJhbWVzOiBwbGF5ZXJGcmFtZXMsXG4gICAgICBkaXJlY3Rpb25zOiB7XG4gICAgICAgIGRvd246IDAsXG4gICAgICAgIHVwOiA0LFxuICAgICAgICBsZWZ0OiA4LFxuICAgICAgICByaWdodDogMTIsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgaHA6IDEwMDAsXG4gICAgICBocFJlZ2VuOiAxZS00LFxuICAgICAgbWFuYTogMTAwMCxcbiAgICAgIG1hbmFSZWdlbjogMC4wMDEsXG4gICAgICBtdXNjbGU6IDMwLFxuICAgICAgbWFnaWs6IDE1LFxuICAgICAgYXJtb3VyOiAzMCxcbiAgICAgIGltbXVuaXR5OiAzMCxcbiAgICAgIGF0dGFja3M6IFtuZXcgU29mdEdyYXNzKCksIG5ldyBDaXRyaWNIZWFsaW5nKCksIG5ldyBTaGFkb3dTdGVwKCksIG5ldyBQaG90b25CZWFtKCksIG5ldyBGaXJlYmFsbCgpLCBuZXcgSWNlU2hhcmQoKSwgbmV3IExpZ2h0bmluZ0JvbHQoKSwgbmV3IFBvaXNvblN0aW5nKCksIG5ldyBUaHVuZGVyU3Rvcm0oKV0sXG4gICAgfVxuICApO1xuICBjb25zdCBlbmVteUNvb3JkcyA9IFtcbiAgICB7IHg6IDI2NSwgeTogMjAgfSxcbiAgICB7IHg6IDgwMCwgeTogNDAwIH0sXG4gICAgeyB4OiAxMjAwLCB5OiAyMDAgfSxcbiAgICB7IHg6IDUwMCwgeTogODAwIH0sXG4gICAgeyB4OiAxNTAwLCB5OiA2MDAgfSxcbiAgICB7IHg6IDMwMCwgeTogMTIwMCB9LFxuICAgIHsgeDogMTAwMCwgeTogMTAwMCB9LFxuICBdO1xuXG4gIGNvbnN0IGVuZW1pZXMgPSBlbmVteUNvb3Jkcy5tYXAoZW5lbXlDb29yZHMgPT4ge1xuICAgIGNvbnN0IGVuZW15ID0gbmV3IFBsYXlhYmxlKHtcbiAgICAgICAgcG9zaXRpb246IGVuZW15Q29vcmRzLFxuICAgICAgICBpbWFnZTogZW5lbXlJbWcsXG4gICAgICAgIHdpZHRoOiBlbmVteUltZy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBlbmVteUltZy5oZWlnaHQsXG4gICAgICAgIHpvb206IDQsXG4gICAgICAgIGRpcmVjdGlvbnM6IHtcbiAgICAgICAgICBkb3duOiAwLFxuICAgICAgICAgIHVwOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBocDogMTAwMCxcbiAgICAgICAgaHBSZWdlbjogMWUtNCxcbiAgICAgICAgbWFuYTogMTAwMCxcbiAgICAgICAgbWFuYVJlZ2VuOiAwLjAwMSxcbiAgICAgICAgbXVzY2xlOiAxMCxcbiAgICAgICAgbWFnaWs6IDEwLFxuICAgICAgICBhcm1vdXI6IDM1LFxuICAgICAgICBpbW11bml0eTogMzAsXG4gICAgICAgIGF0dGFja3M6IFtuZXcgVG94aWNEcmFpbigpXSxcbiAgICAgIH1cbiAgICApXG4gICAgcmV0dXJuIGVuZW15O1xuICB9KTtcblxuICBjb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSh7XG4gICAgY29udHJvbGxlcjoge1xuICAgICAgdXA6IFwid1wiLFxuICAgICAgZG93bjogXCJzXCIsXG4gICAgICBsZWZ0OiBcImFcIixcbiAgICAgIHJpZ2h0OiBcImRcIixcbiAgICAgIGF0dGFja3M6IFtcInlcIiwgXCJ1XCIsIFwiaVwiLCBcIm9cIl0sXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGNhbnZhcyA9IG1hcFNldHVwKE1BUF9XSURUSCwgTUFQX0hFSUdIVCk7XG4gIGNvbmZpZ3VyZUtleVByZXNzKHN0YXRlLmNvbnRyb2xsZXIpO1xuICBjb25maWd1cmVUb3VjaENvbnRyb2xzKHN0YXRlLmNvbnRyb2xsZXIpO1xuICBcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWJ0bicpO1xuICBpZiAocmVzdGFydEJ0bikge1xuICAgIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgYW5pbWF0aW9uQnVpbGRlcih7IGJnLCBwbGF5ZXIsIHN0YXRlLCBjYW52YXMsIGZnLCBlbmVtaWVzIH0pO1xufTtcblxubWFpbigpO1xuIiwiaW1wb3J0IHsgZ2V0Q3R4IH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBNT1ZFU1BFRUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRDb2xsaWRlcnMsIGNoZWNrQ29sbGlzaW9uIH0gZnJvbSBcIi4vY29sbGlkZXJcIjtcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIi4vY29sbGlkZXJcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFBsYXlhYmxlIH0gZnJvbSBcIi4uL3Nwcml0ZXNcIjtcbmltcG9ydCB7IGhhc0tleSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5cbnR5cGUgTW90aW9uQ29udHJvbEFyZ3MgPSB7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBzdGF0ZTogU3RhdGU7XG4gIGJnOiBTcHJpdGU7XG4gIHBsYXllcjogUGxheWFibGU7XG4gIGVuZW1pZXM6IFBsYXlhYmxlW107XG4gIGZnOiBTcHJpdGU7XG4gIGNvbGxpZGVyczogQm94Q29sbGlkZXJbXTtcbn07XG5cbnR5cGUgQW5pbWF0aW9uQnVpbGRlckFyZ3MgPSB7XG4gIGJnOiBTcHJpdGU7XG4gIHBsYXllcjogUGxheWFibGU7XG4gIGVuZW1pZXM6IFBsYXlhYmxlW107XG4gIGZnOiBTcHJpdGU7XG4gIHN0YXRlOiBTdGF0ZTtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbn07XG5cbmNvbnN0IEVORU1ZX0FUVEFDS19DT09MRE9XTiA9IDkwO1xubGV0IGVuZW15QXR0YWNrVGltZXIgPSAwO1xuXG5jb25zdCBtb3Rpb25Db250cm9sID0gKHtcbiAgY3R4LFxuICBzdGF0ZSxcbiAgcGxheWVyLFxuICBlbmVtaWVzLFxuICBjb2xsaWRlcnMsXG59OiBNb3Rpb25Db250cm9sQXJncyk6IHZvaWQgPT4ge1xuICBjb25zdCB7IGNvbnRyb2xsZXIgfSA9IHN0YXRlO1xuICBsZXQgZnV0dXJlS2V5U3RhdGU6IGNvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XG5cbiAgaWYgKGNvbnRyb2xsZXIuaXNQcmVzc2VkKFwidXBcIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS55ID0gLU1PVkVTUEVFRDtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyLmlzUHJlc3NlZChcImxlZnRcIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS54ID0gLU1PVkVTUEVFRDtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyLmlzUHJlc3NlZChcImRvd25cIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS55ID0gTU9WRVNQRUVEO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIuaXNQcmVzc2VkKFwicmlnaHRcIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS54ID0gTU9WRVNQRUVEO1xuICB9XG5cbiAgY29uc3QgcGxheWVyQ29sbGlzaW9ucyA9IGNvbGxpZGVycy5zb21lKChjb2xsaWRlcjogQm94Q29sbGlkZXIpID0+XG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBjb2xsaWRlciwgZnV0dXJlS2V5U3RhdGUpXG4gICk7XG5cbiAgY29uc3QgbW92ZW1lbnREaXJlY3Rpb24gPSBjb250cm9sbGVyLmdldE1vdmVtZW50KCk7XG4gIGlmICghbW92ZW1lbnREaXJlY3Rpb24pIHtcbiAgICBwbGF5ZXIuYW5pbWF0ZShcImlkbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBheGlzLCB2ZWxvY2l0eSB9ID0gY29udHJvbGxlci5tb3Rpb25bbW92ZW1lbnREaXJlY3Rpb25dO1xuICAgIHBsYXllci5hbmltYXRlKG1vdmVtZW50RGlyZWN0aW9uKTtcbiAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgaWYgKGVuZW15LmFsaXZlKCkpIGVuZW15LmZvbGxvdyhwbGF5ZXIsIGNvbGxpZGVycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXBsYXllckNvbGxpc2lvbnMgJiYgaGFzS2V5KHBsYXllci5wb3NpdGlvbiwgYXhpcykpIHtcbiAgICAgIHBsYXllci5wb3NpdGlvbltheGlzXSArPSB2ZWxvY2l0eTtcbiAgICB9XG4gIH1cblxuICBlbmVteUF0dGFja1RpbWVyKys7XG4gIGlmIChlbmVteUF0dGFja1RpbWVyID49IEVORU1ZX0FUVEFDS19DT09MRE9XTikge1xuICAgIGVuZW15QXR0YWNrVGltZXIgPSAwO1xuICAgIGVuZW1pZXMuZm9yRWFjaCgoZW5lbXk6IFBsYXlhYmxlKSA9PiB7XG4gICAgICBpZiAoZW5lbXkuYWxpdmUoKSkge1xuICAgICAgICBlbmVteS5yZWdlbigpLmF0dGFjayhwbGF5ZXIsIDAsIGN0eCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwbGF5ZXIucmVnZW4oKTtcbiAgY29uc3QgYXR0YWNrQ2hvaWNlID0gY29udHJvbGxlci5nZXRBdHRhY2soKTtcbiAgaWYgKGF0dGFja0Nob2ljZSAhPT0gbnVsbCAmJiBlbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBjbG9zZXN0RW5lbXkgPSBlbmVtaWVzLnJlZHVjZSgoY2xvc2VzdCwgZW5lbXkpID0+IHtcbiAgICAgIGlmICghZW5lbXkuYWxpdmUoKSkgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICBjb25zdCBkaXN0VG9FbmVteSA9IE1hdGguYWJzKGVuZW15LnBvc2l0aW9uLnggLSBwbGF5ZXIucG9zaXRpb24ueCkgKyBNYXRoLmFicyhlbmVteS5wb3NpdGlvbi55IC0gcGxheWVyLnBvc2l0aW9uLnkpO1xuICAgICAgY29uc3QgZGlzdFRvQ2xvc2VzdCA9IE1hdGguYWJzKGNsb3Nlc3QucG9zaXRpb24ueCAtIHBsYXllci5wb3NpdGlvbi54KSArIE1hdGguYWJzKGNsb3Nlc3QucG9zaXRpb24ueSAtIHBsYXllci5wb3NpdGlvbi55KTtcbiAgICAgIHJldHVybiBkaXN0VG9FbmVteSA8IGRpc3RUb0Nsb3Nlc3QgPyBlbmVteSA6IGNsb3Nlc3Q7XG4gICAgfSk7XG4gICAgcGxheWVyLmF0dGFjayhjbG9zZXN0RW5lbXksIGF0dGFja0Nob2ljZSwgY3R4KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSAoe1xuICBiZyxcbiAgcGxheWVyLFxuICBzdGF0ZSxcbiAgY2FudmFzLFxuICBmZyxcbiAgZW5lbWllcyxcbn06IEFuaW1hdGlvbkJ1aWxkZXJBcmdzKTogdm9pZCA9PiB7XG4gIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gZ2V0Q3R4KGNhbnZhcyk7XG4gIGNvbnN0IGNvbGxpZGVycyA9IGdldENvbGxpZGVycygpO1xuICBcbiAgY29uc3QgYW5pbWF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICAvLyBDbGVhciBzY3JlZW5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgLy8gU2F2ZSBjb250ZXh0IGFuZCBhcHBseSBjYW1lcmEgdHJhbnNmb3JtXG4gICAgY3R4LnNhdmUoKTtcbiAgICBcbiAgICAvLyBTY2FsZSB0byBmaWxsIDk6MTYgc2NyZWVuXG4gICAgY29uc3Qgc2NhbGVYID0gY2FudmFzLndpZHRoIC8gMTkyMDtcbiAgICBjb25zdCBzY2FsZVkgPSBjYW52YXMuaGVpZ2h0IC8gMTQ0MDtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcbiAgICBcbiAgICBjdHguc2NhbGUoc2NhbGUsIHNjYWxlKTtcbiAgICBcbiAgICAvLyBDZW50ZXIgdGhlIHZpZXcgb24gdGhlIHBsYXllclxuICAgIGNvbnN0IG9mZnNldFggPSAtcGxheWVyLnBvc2l0aW9uLnggKyAoMTkyMCAvIDIpO1xuICAgIGNvbnN0IG9mZnNldFkgPSAtcGxheWVyLnBvc2l0aW9uLnkgKyAoMTQ0MCAvIDIpO1xuICAgIGN0eC50cmFuc2xhdGUob2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgXG4gICAgLy8gRHJhdyBnYW1lIHdvcmxkXG4gICAgYmcuZHJhdyhjdHgpO1xuICAgIGVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XG4gICAgICBpZiAoZW5lbXkuYWxpdmUoKSkge1xuICAgICAgICBlbmVteS5kcmF3KGN0eCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcGxheWVyLmRyYXcoY3R4KTtcbiAgICBmZy5kcmF3KGN0eCk7XG4gICAgXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgICBcbiAgICAvLyBEcmF3IEhVRCAoZml4ZWQgcG9zaXRpb24pXG4gICAgZHJhd0hVRChjdHgsIHBsYXllciwgY2FudmFzKTtcbiAgICBcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIG1vdGlvbkNvbnRyb2woeyBjdHgsIHN0YXRlLCBiZywgcGxheWVyLCBlbmVtaWVzLCBmZywgY29sbGlkZXJzIH0pO1xuICB9O1xuICBhbmltYXRlKCk7XG59O1xuXG5jb25zdCBkcmF3SFVEID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwbGF5ZXI6IFBsYXlhYmxlLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGh1ZFggPSAxMDtcbiAgY29uc3QgaHVkWSA9IDEwO1xuICBjb25zdCBiYXJXaWR0aCA9IE1hdGgubWluKDE1MCwgY2FudmFzLndpZHRoICogMC4zKTtcbiAgY29uc3QgYmFySGVpZ2h0ID0gMTQ7XG4gIGNvbnN0IHNwYWNpbmcgPSA2O1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC44KVwiO1xuICBjdHguZmlsbFJlY3QoaHVkWCAtIDQsIGh1ZFkgLSA0LCBiYXJXaWR0aCArIDgsIGJhckhlaWdodCAqIDIgKyBzcGFjaW5nICsgMjQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgY3R4LmZvbnQgPSBcImJvbGQgMTJweCBtb25vc3BhY2VcIjtcbiAgY3R4LmZpbGxUZXh0KGBIUDogJHtNYXRoLmZsb29yKHBsYXllci5ocCl9LyR7cGxheWVyLm1heEhwfWAsIGh1ZFgsIGh1ZFkgKyAxMCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwiIzMzM1wiO1xuICBjdHguZmlsbFJlY3QoaHVkWCwgaHVkWSArIDE2LCBiYXJXaWR0aCwgYmFySGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IHBsYXllci5ocCAvIHBsYXllci5tYXhIcCA+IDAuMyA/IFwiI2U3NGMzY1wiIDogXCIjZmYwMDAwXCI7XG4gIGN0eC5maWxsUmVjdChodWRYLCBodWRZICsgMTYsIGJhcldpZHRoICogTWF0aC5tYXgoMCwgcGxheWVyLmhwIC8gcGxheWVyLm1heEhwKSwgYmFySGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gIGN0eC5maWxsVGV4dChgTVA6ICR7TWF0aC5mbG9vcihwbGF5ZXIubWFuYSl9LyR7cGxheWVyLm1heE1hbmF9YCwgaHVkWCwgaHVkWSArIDM2KTtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjMzMzXCI7XG4gIGN0eC5maWxsUmVjdChodWRYLCBodWRZICsgNDIsIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gXCIjMzQ5OGRiXCI7XG4gIGN0eC5maWxsUmVjdChodWRYLCBodWRZICsgNDIsIGJhcldpZHRoICogTWF0aC5tYXgoMCwgcGxheWVyLm1hbmEgLyBwbGF5ZXIubWF4TWFuYSksIGJhckhlaWdodCk7XG4gIFxuICBpZiAocGxheWVyLmhwIDw9IDApIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZTc0YzNjXCI7XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzJweCBtb25vc3BhY2VcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAxNnB4IG1vbm9zcGFjZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIlJlc3RhcnQgdG8gcGxheSBhZ2FpblwiLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICBjdHgudGV4dEFsaWduID0gXCJzdGFydFwiO1xuICAgIFxuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydC1idG4nKTtcbiAgICBpZiAocmVzdGFydEJ0bikgcmVzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufTtcbiIsImV4cG9ydCBsZXQgQ0FOVkFTX1NDQUxFID0gMTtcblxuZXhwb3J0IGNvbnN0IG1hcFNldHVwID0gKFxuICBtYXBfd2lkdGg6IG51bWJlcixcbiAgbWFwX2hlaWdodDogbnVtYmVyXG4pOiBIVE1MQ2FudmFzRWxlbWVudCA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgXG4gIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgXG4gIC8vIFNldCBjYW52YXMgdG8gZmlsbCB0aGUgZW50aXJlIHNjcmVlblxuICBjYW52YXMud2lkdGggPSBzY3JlZW5XaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHNjcmVlbkhlaWdodDtcbiAgY2FudmFzLnN0eWxlLndpZHRoID0gc2NyZWVuV2lkdGggKyAncHgnO1xuICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gc2NyZWVuSGVpZ2h0ICsgJ3B4JztcbiAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgY2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XG4gIGNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gIFxuICAvLyBDYWxjdWxhdGUgc2NhbGUgdG8gY292ZXIgdGhlIHNjcmVlbiAoY3JvcCBzaWRlcyBpZiBuZWVkZWQpXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGUgZ2FtZSBmaWxscyBhIDk6MTYgc2NyZWVuIHdpdGhvdXQgYmxhY2sgYmFyc1xuICBDQU5WQVNfU0NBTEUgPSBNYXRoLm1heChzY3JlZW5XaWR0aCAvIG1hcF93aWR0aCwgc2NyZWVuSGVpZ2h0IC8gbWFwX2hlaWdodCk7XG4gIFxuICBjb25zdCBjdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgXG4gIHJldHVybiBjYW52YXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3R4ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPT4ge1xuICBjb25zdCBjdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGN0eDtcbn07XG4iLCJpbXBvcnQgeyBjb2xsaXNpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGEvY29sbGlzaW9uXCI7XG5cbmV4cG9ydCBjb25zdCBtYWtlR3JpZCA9IChjaHVua1NpemU6IG51bWJlcik6IG51bWJlcltdW10gPT4ge1xuICAgIGNvbnN0IGNvbGxpc2lvbkdyaWQ6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpICs9IGNodW5rU2l6ZSkge1xuICAgICAgICBjb2xsaXNpb25HcmlkLnB1c2goY29sbGlzaW9ucy5zbGljZShpLCBpICsgY2h1bmtTaXplKSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xsaXNpb25HcmlkXG59XG4iLCJpbXBvcnQgeyBtYWtlR3JpZCB9IGZyb20gXCIuL2NvbGxpc2lvbnNcIjtcbmltcG9ydCB7IElTX0NPTExJREVSLCBNQVBfWF9PRkZTRVQsIE1BUF9ZX09GRlNFVCwgVElMRVMsIFRJTEVfSEVJR0hULCBUSUxFX1dJRFRIIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBCb3hDb2xsaWRlciBpbXBsZW1lbnRzIEJveCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXM7XG4gICAgaXNDb2xsaWRlcjogYm9vbGVhbjtcbiAgICBzdGF0aWMgd2lkdGggPSBUSUxFX1dJRFRIO1xuICAgIHN0YXRpYyBoZWlnaHQgPSBUSUxFX0hFSUdIVDtcblxuICAgIGNvbnN0cnVjdG9yKHsgcG9zaXRpb24gfTogQm94UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLndpZHRoID0gQm94Q29sbGlkZXIud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQm94Q29sbGlkZXIuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDEwMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgQm94Q29sbGlkZXIud2lkdGgsIEJveENvbGxpZGVyLmhlaWdodCk7XG4gICAgICAgIGN0eC5mb250ID0gXCIxMHB4IEFyaWFsXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChgKCR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9KWAsIHRoaXMucG9zaXRpb24ueCArIDEwLCB0aGlzLnBvc2l0aW9uLnkgKyAyMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgNSwgNSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY29vcmRzQWJzUG9zaXRpb24gPSAoY29vcmRzOiBjb29yZGluYXRlcyk6IGNvb3JkaW5hdGVzID0+ICh7XG4gICAgeDogTWF0aC5mbG9vcigoY29vcmRzLnggLSBNQVBfWF9PRkZTRVQpIC8gVElMRV9XSURUSCksXG4gICAgeTogTWF0aC5mbG9vcigoY29vcmRzLnkgLSBNQVBfWV9PRkZTRVQpIC8gVElMRV9IRUlHSFQpLFxufSlcblxuZXhwb3J0IGNvbnN0IGNvb3Jkc01hcFBvc2l0aW9uID0gKGNvb3JkczogY29vcmRpbmF0ZXMpOiBjb29yZGluYXRlcyA9PiAoe1xuICAgIHg6IChjb29yZHMueCAqIFRJTEVfV0lEVEgpICsgTUFQX1hfT0ZGU0VULFxuICAgIHk6IChjb29yZHMueSAqIFRJTEVfSEVJR0hUKSArIE1BUF9ZX09GRlNFVCxcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRDb2xsaWRlcnMgPSAoKTogQm94Q29sbGlkZXJbXSA9PiB7XG4gICAgY29uc3QgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdID0gW107XG4gICAgY29uc3QgZ3JpZDogbnVtYmVyW11bXSA9IG1ha2VHcmlkKFRJTEVTLnJvd3MpO1xuICAgIGdyaWQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGopID0+IHtcbiAgICAgICAgICAgIGlmIChjb2wgPT09IElTX0NPTExJREVSKSB7XG4gICAgICAgICAgICAgICAgY29sbGlkZXJzLnB1c2gobmV3IEJveENvbGxpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNvb3Jkc01hcFBvc2l0aW9uKHsgeDogaiwgeTogaSB9KSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuIGNvbGxpZGVycztcbn1cblxuLyoqXG4gKiAgICAgICAgICBfX19fXyBfX19fX1xuICogICAgICAgICAgfCBQIHwgfCBDIHxcbiAqICAgICAgICAgIOKAvuKAvuKAvuKAvuKAviDigL7igL7igL7igL7igL5cbiAqICAgICAgICAgXG4gKiBAcGFyYW0gc2hhcGUxIFxuICogQHBhcmFtIHNoYXBlMiBcbiAqIEBwYXJhbSBwYXJhbTIgXG4gKiBAcGFyYW0gdG9sZXJhbmNlIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVja0NvbGxpc2lvbiA9IChcbiAgICBzaGFwZTE6IEJveCxcbiAgICBzaGFwZTI6IEJveCxcbiAgICB7IHgsIHkgfTogY29vcmRpbmF0ZXMsXG4gICAgdG9sZXJhbmNlOiBudW1iZXIgPSAxNlxuKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qgc2hhcGUxUG9zaXRpb24gPSBzaGFwZTEucG9zaXRpb247XG4gICAgY29uc3Qgc2hhcGUyUG9zaXRpb24gPSBzaGFwZTIucG9zaXRpb247XG5cbiAgICByZXR1cm4gKChzaGFwZTFQb3NpdGlvbi54ICsgc2hhcGUxLndpZHRoID4gc2hhcGUyUG9zaXRpb24ueCArIHggKyB0b2xlcmFuY2UpIC8vIHBsYXllciBpcyB0byB0aGUgcmlnaHQgb2YgY29sbGlkZXJcbiAgICAmJiAoc2hhcGUxUG9zaXRpb24ueCA8IHNoYXBlMlBvc2l0aW9uLnggKyB4ICsgc2hhcGUyLndpZHRoIC0gdG9sZXJhbmNlKSAvLyBwbGF5ZXIgaXMgdG8gdGhlIGxlZnQgb2YgY29sbGlkZXJcbiAgICAmJiAoc2hhcGUxUG9zaXRpb24ueSArIHNoYXBlMS5oZWlnaHQgPiBzaGFwZTJQb3NpdGlvbi55ICsgeSArIHRvbGVyYW5jZSkgLy8gcGxheWVyIGlzIGJlbG93IGNvbGxpZGVyXG4gICAgJiYgKHNoYXBlMVBvc2l0aW9uLnkgPCBzaGFwZTJQb3NpdGlvbi55ICsgeSArIHNoYXBlMi5oZWlnaHQgLSB0b2xlcmFuY2UpKSAvLyBwbGF5ZXIgaXMgYWJvdmUgY29sbGlkZXJcbn1cbiIsImltcG9ydCB7IGhhc0tleSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5pbXBvcnQgeyBCQVJfSEVJR0hULCBCQVJfT0ZGU0VUIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgQm94Q29sbGlkZXIsXG4gIGNvb3Jkc0Fic1Bvc2l0aW9uLFxuICBjb29yZHNNYXBQb3NpdGlvbixcbn0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlclwiO1xuaW1wb3J0IHsgUGF0aEZpbmRlciB9IGZyb20gXCIuL3BhdGhmaW5kZXJcIjtcbmltcG9ydCB7IGNoZWNrQ29sbGlzaW9uIH0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlclwiO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcbiAgcG9zaXRpb246IGNvb3JkaW5hdGVzO1xuICB6b29tPzogbnVtYmVyO1xuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGZhY2U6IG51bWJlcjtcbiAgZnJhbWVzPzogbnVtYmVyO1xuICBjdXJyZW50RnJhbWU6IG51bWJlcjtcbiAgZGlyZWN0aW9uczogRGlyZWN0aW9uRmFjZUFyZ3M7XG4gIGZyYW1lc1BlckRpcmVjdGlvbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwb3NpdGlvbixcbiAgICBpbWFnZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZGlyZWN0aW9ucyxcbiAgICB6b29tID0gMSxcbiAgICBmcmFtZXMgPSAxLFxuICB9OiBTcHJpdGVBcmdzKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCAqIHRoaXMuem9vbTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCAqIHRoaXMuem9vbTtcbiAgICB0aGlzLmZhY2UgPSAwO1xuICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgIHRoaXMuZnJhbWVzUGVyRGlyZWN0aW9uID0gdGhpcy5mcmFtZXMgLyBPYmplY3Qua2V5cyh0aGlzLmRpcmVjdGlvbnMpLmxlbmd0aDtcbiAgfVxuXG4gIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBTcHJpdGUge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5jdXJyZW50RnJhbWUsXG4gICAgICAwLFxuICAgICAgdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLFxuICAgICAgdGhpcy5pbWFnZS5oZWlnaHQsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAodGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzKSAqIHRoaXMuem9vbSxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ICogdGhpcy56b29tXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWFibGUgZXh0ZW5kcyBTcHJpdGUgaW1wbGVtZW50cyBJUGxheWFibGUge1xuICBwb3NpdGlvbjogY29vcmRpbmF0ZXM7XG4gIHpvb20/OiBudW1iZXI7XG4gIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgZmFjZTogbnVtYmVyO1xuICBmcmFtZXM/OiBudW1iZXI7XG4gIGN1cnJlbnRGcmFtZTogbnVtYmVyO1xuICBkaXJlY3Rpb25zOiBEaXJlY3Rpb25GYWNlQXJncztcbiAgZnJhbWVzUGVyRGlyZWN0aW9uOiBudW1iZXI7XG4gIHJlZnJlc2hSYXRlOiBudW1iZXI7XG4gIG1heEhwOiBudW1iZXI7XG4gIGhwOiBudW1iZXI7XG4gIGhwUmVnZW46IG51bWJlcjtcbiAgYXJtb3VyOiBudW1iZXI7XG4gIGltbXVuaXR5OiBudW1iZXI7XG4gIG11c2NsZTogbnVtYmVyO1xuICBtYWdpazogbnVtYmVyO1xuICBtYXhNYW5hOiBudW1iZXI7XG4gIG1hbmE6IG51bWJlcjtcbiAgbWFuYVJlZ2VuOiBudW1iZXI7XG4gIHBhdGg6IGNvb3JkaW5hdGVzW107XG4gIGF0dGFja3M6IElBdHRhY2tbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzcHJpdGVBcmdzOiBTcHJpdGVBcmdzLFxuICAgIHtcbiAgICAgIGhwLFxuICAgICAgaHBSZWdlbixcbiAgICAgIG1hbmEsXG4gICAgICBtYW5hUmVnZW4sXG4gICAgICBtdXNjbGUsXG4gICAgICBtYWdpayxcbiAgICAgIGFybW91cixcbiAgICAgIGltbXVuaXR5LFxuICAgICAgYXR0YWNrcyxcbiAgICB9OiBQbGF5YWJsZUFyZ3NcbiAgKSB7XG4gICAgc3VwZXIoc3ByaXRlQXJncyk7XG4gICAgdGhpcy5tYXhIcCA9IGhwO1xuICAgIHRoaXMuaHAgPSBocDtcbiAgICB0aGlzLmhwUmVnZW4gPSBocFJlZ2VuO1xuICAgIHRoaXMubWF4TWFuYSA9IG1hbmE7XG4gICAgdGhpcy5tYW5hID0gbWFuYTtcbiAgICB0aGlzLm1hbmFSZWdlbiA9IG1hbmFSZWdlbjtcbiAgICB0aGlzLm11c2NsZSA9IG11c2NsZTtcbiAgICB0aGlzLm1hZ2lrID0gbWFnaWs7XG4gICAgdGhpcy5yZWZyZXNoUmF0ZSA9IHRoaXMuZnJhbWVzUGVyRGlyZWN0aW9uIC8gKHRoaXMuZnJhbWVzICogMik7XG4gICAgdGhpcy5hcm1vdXIgPSBhcm1vdXI7XG4gICAgdGhpcy5pbW11bml0eSA9IGltbXVuaXR5O1xuICAgIHRoaXMucGF0aCA9IFtdO1xuICAgIHRoaXMuYXR0YWNrcyA9IGF0dGFja3M7XG4gIH1cblxuICB0YWtlRGFtYWdlKGRhbWFnZTogbnVtYmVyKTogUGxheWFibGUge1xuICAgIHRoaXMuaHAgPSBNYXRoLm1heCgwLCB0aGlzLmhwIC0gZGFtYWdlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhlYWwoYW1vdW50OiBudW1iZXIpOiBQbGF5YWJsZSB7XG4gICAgdGhpcy5ocCA9IE1hdGgubWluKHRoaXMubWF4SHAsIHRoaXMuaHAgKyBhbW91bnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVkdWNlTWFuYShjb3N0OiBudW1iZXIpOiBQbGF5YWJsZSB7XG4gICAgdGhpcy5tYW5hID0gTWF0aC5tYXgoMCwgdGhpcy5tYW5hIC0gY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZGxlQW5pbWF0aW9uKCk6IFBsYXlhYmxlIHtcbiAgICBmb3IgKGxldCBmcmFtZUlkeCBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlyZWN0aW9ucykpIHtcbiAgICAgIGNvbnN0IGZhY2UgPSB0aGlzLmN1cnJlbnRGcmFtZSAvIHRoaXMuZnJhbWVzO1xuICAgICAgaWYgKGZhY2UgPCBmcmFtZUlkeCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuZmFjZSA9IGZyYW1lSWR4O1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5mYWNlKSAqIHRoaXMuZnJhbWVzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2Fsa0FuaW1hdGlvbihkaXJlY3Rpb246IHN0cmluZyk6IFBsYXlhYmxlIHtcbiAgICBpZiAoIWhhc0tleSh0aGlzLmRpcmVjdGlvbnMsIGRpcmVjdGlvbikpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0RnJhbWUgPSB0aGlzLmRpcmVjdGlvbnNbZGlyZWN0aW9uXTtcbiAgICBjb25zdCBsYXN0RnJhbWUgPSB0aGlzLmRpcmVjdGlvbnNbZGlyZWN0aW9uXSArIHRoaXMuZnJhbWVzUGVyRGlyZWN0aW9uO1xuICAgIHRoaXMuZmFjZSA9XG4gICAgICB0aGlzLmZhY2UgPj0gZmlyc3RGcmFtZSAmJiB0aGlzLmZhY2UgPCBsYXN0RnJhbWVcbiAgICAgICAgPyB0aGlzLmZhY2UgKyB0aGlzLnJlZnJlc2hSYXRlXG4gICAgICAgIDogZmlyc3RGcmFtZTtcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5mYWNlKSAqIHRoaXMuZnJhbWVzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYW5pbWF0ZShkaXJlY3Rpb246IHN0cmluZyk6IFBsYXlhYmxlIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImlkbGVcIikge1xuICAgICAgdGhpcy5pZGxlQW5pbWF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Fsa0FuaW1hdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFsaXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhwID4gMDtcbiAgfVxuXG4gIHJlZ2VuKCk6IFBsYXlhYmxlIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuaHAgPSBNYXRoLm1pbih0aGlzLm1heEhwLCB0aGlzLmhwICsgdGhpcy5tYXhIcCAqIHRoaXMuaHBSZWdlbik7XG4gICAgdGhpcy5tYW5hID0gTWF0aC5taW4odGhpcy5tYXhNYW5hLCB0aGlzLm1hbmEgKyB0aGlzLm1heE1hbmEgKiB0aGlzLm1hbmFSZWdlbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmb2xsb3codGFyZ2V0OiBQbGF5YWJsZSwgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdKTogUGxheWFibGUge1xuICAgIGlmICghdGFyZ2V0LmFsaXZlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBjb29yZHNBYnNQb3NpdGlvbih0aGlzLnBvc2l0aW9uKTtcbiAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGNvb3Jkc0Fic1Bvc2l0aW9uKHRhcmdldC5wb3NpdGlvbik7XG4gICAgaWYgKHRoaXMucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMucGF0aCA9IG5ldyBQYXRoRmluZGVyKClcbiAgICAgICAgLmZpbmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbiwgY29sbGlkZXJzKVxuICAgICAgICAubWFwKGNvb3Jkc01hcFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXRoLmxlbmd0aCkge1xuICAgICAgdGhpcy5jcmF3bCh0aGlzLnBhdGguc2hpZnQoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY3Jhd2woY29vcmRzOiBjb29yZGluYXRlcyk6IFBsYXlhYmxlIHtcbiAgICBjb25zdCB4ID0gY29vcmRzLnggLSB0aGlzLnBvc2l0aW9uLng7XG4gICAgY29uc3QgeSA9IGNvb3Jkcy55IC0gdGhpcy5wb3NpdGlvbi55O1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB4O1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXR0YWNrKFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY2hvaWNlOiBudW1iZXIgfCBudWxsLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IFBsYXlhYmxlIHtcbiAgICBpZiAodGhpcy5ocCA9PT0gMCB8fCBjaG9pY2UgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBhdHRhY2s6IElBdHRhY2sgPSB0aGlzLmF0dGFja3NbY2hvaWNlXTtcbiAgICBjb25zdCBpblJhbmdlID0gY2hlY2tDb2xsaXNpb24odGFyZ2V0LCB0aGlzLCB7IHg6IDAsIHk6IDAgfSwgLWF0dGFjay5yYW5nZSk7XG5cbiAgICBpZiAoaW5SYW5nZSkge1xuICAgICAgdGFyZ2V0LnRha2VEYW1hZ2UoYXR0YWNrLmRhbWFnZSk7XG4gICAgICBpZiAoYXR0YWNrLnJlbmRlcikge1xuICAgICAgICBhdHRhY2sucmVuZGVyKHRoaXMsIHRhcmdldCwgY3R4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogUGxheWFibGUge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5jdXJyZW50RnJhbWUsXG4gICAgICAwLFxuICAgICAgdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLFxuICAgICAgdGhpcy5pbWFnZS5oZWlnaHQsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAodGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzKSAqIHRoaXMuem9vbSxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ICogdGhpcy56b29tXG4gICAgKTtcblxuICAgIGNvbnN0IGJhcldpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBiYXJIZWlnaHQgPSBCQVJfSEVJR0hUO1xuICAgIGNvbnN0IGJhck9mZnNldCA9IEJBUl9PRkZTRVQ7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMzMzXCI7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55IC0gYmFyT2Zmc2V0IC0gYmFySGVpZ2h0ICogMixcbiAgICAgIGJhcldpZHRoLFxuICAgICAgYmFySGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZTc0YzNjXCI7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55IC0gYmFyT2Zmc2V0IC0gYmFySGVpZ2h0ICogMixcbiAgICAgIGJhcldpZHRoICogKHRoaXMuaHAgLyB0aGlzLm1heEhwKSxcbiAgICAgIGJhckhlaWdodFxuICAgICk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMzMzXCI7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55IC0gYmFyT2Zmc2V0IC0gYmFySGVpZ2h0LFxuICAgICAgYmFyV2lkdGgsXG4gICAgICBiYXJIZWlnaHRcbiAgICApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMzNDk4ZGJcIjtcbiAgICBjdHguZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnkgLSBiYXJPZmZzZXQgLSBiYXJIZWlnaHQsXG4gICAgICBiYXJXaWR0aCAqICh0aGlzLm1hbmEgLyB0aGlzLm1heE1hbmEpLFxuICAgICAgYmFySGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUSUxFUywgRElSRUNUSU9OUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEJveENvbGxpZGVyLCBjb29yZHNBYnNQb3NpdGlvbiB9IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXJcIjtcbmltcG9ydCB7IG1ha2VHcmlkIH0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlci9jb2xsaXNpb25zXCI7XG5pbXBvcnQgeyBtYW5oYXR0YW5EaXN0YW5jZSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5pbXBvcnQgeyBQcmlvcml0eVF1ZXVlIH0gZnJvbSBcIi4uL3V0aWxzL3ByaW9yaXR5UXVldWVcIjtcblxuY29uc3QgZW5jb2RlQ29vcmRzID0gKGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcykgPT5cbiAgYCR7Y29vcmRpbmF0ZXMueH0tJHtjb29yZGluYXRlcy55fWA7XG5cbmV4cG9ydCBjbGFzcyBQYXRoRmluZGVyIHtcbiAgdmlzaXRlZDogU2V0PHN0cmluZz47XG4gIHN1cnJvdW5kaW5nczogUHJpb3JpdHlRdWV1ZTxBU3RhclJlY29yZD47XG4gIHBhdGhzOiBUaWxlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGF0aHMgPSB7fTtcbiAgICB0aGlzLnZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5zdXJyb3VuZGluZ3MgPSBuZXcgUHJpb3JpdHlRdWV1ZSgpO1xuICB9XG5cbiAgaXNTYW1lQ29vcmRzKGMxOiBjb29yZGluYXRlcywgYzI6IGNvb3JkaW5hdGVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGMxLnggPT09IGMyLnggJiYgYzEueSA9PT0gYzIueTtcbiAgfVxuXG4gIGJ1aWxkUGF0aChrZXk6IHN0cmluZyk6IGNvb3JkaW5hdGVzW10ge1xuICAgIGlmICghdGhpcy5wYXRocy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHBhdGg6IGNvb3JkaW5hdGVzW10gPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMucGF0aHNba2V5XTtcbiAgICB3aGlsZSAoY3VycmVudC5wYXJlbnQpIHtcbiAgICAgIHBhdGgucHVzaChjdXJyZW50LnBvc2l0aW9uKTtcbiAgICAgIGN1cnJlbnQgPSB0aGlzLnBhdGhzW2VuY29kZUNvb3JkcyhjdXJyZW50LnBhcmVudCldO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5yZXZlcnNlKCk7XG4gIH1cblxuICBmaW5kKFxuICAgIHNvdXJjZTogY29vcmRpbmF0ZXMsXG4gICAgZGVzdGluYXRpb246IGNvb3JkaW5hdGVzLFxuICAgIGNvbGxpZGVyczogQm94Q29sbGlkZXJbXVxuICApOiBjb29yZGluYXRlc1tdIHtcbiAgICBjb25zdCBzcmNLZXkgPSBlbmNvZGVDb29yZHMoc291cmNlKTtcbiAgICBsZXQgcGF0aDogY29vcmRpbmF0ZXNbXSA9IFtdO1xuICAgIGNvbnN0IGFTdGFyUmVjb3JkOiBBU3RhclJlY29yZCA9IHtcbiAgICAgIGZTY29yZTogMCxcbiAgICAgIGdTY29yZTogMCxcbiAgICAgIGhTY29yZTogMCxcbiAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgIHBvc2l0aW9uOiBzb3VyY2UsXG4gICAgICBrZXk6IHNyY0tleSxcbiAgICB9O1xuICAgIHRoaXMudmlzaXRlZC5hZGQoc3JjS2V5KTtcbiAgICB0aGlzLnBhdGhzW3NyY0tleV0gPSBhU3RhclJlY29yZDtcbiAgICB0aGlzLnN1cnJvdW5kaW5ncy5ucSgwLCBhU3RhclJlY29yZCk7XG5cbiAgICB3aGlsZSAoIXRoaXMuc3Vycm91bmRpbmdzLmVtcHR5KCkpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQ6IEFTdGFyUmVjb3JkID0gdGhpcy5zdXJyb3VuZGluZ3MuZHEoKTtcbiAgICAgIHRoaXMucGF0aHNbY3VycmVudC5rZXldID0gY3VycmVudDtcblxuICAgICAgaWYgKHRoaXMuaXNTYW1lQ29vcmRzKGN1cnJlbnQucG9zaXRpb24sIGRlc3RpbmF0aW9uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFBhdGgoY3VycmVudC5rZXkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgRElSRUNUSU9OUykge1xuICAgICAgICBjb25zdCBbaG9yaXpvbnRhbCwgdmVydGljYWxdID0gZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBuZXdDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICB4OiBjdXJyZW50LnBvc2l0aW9uLnggKyBob3Jpem9udGFsLFxuICAgICAgICAgIHk6IGN1cnJlbnQucG9zaXRpb24ueSArIHZlcnRpY2FsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdLZXkgPSBlbmNvZGVDb29yZHMobmV3Q29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCBpc0JvdW5kYXJ5ID0gY29sbGlkZXJzLnNvbWUoKGNvbGxpZGVyOiBCb3hDb2xsaWRlcikgPT5cbiAgICAgICAgICB0aGlzLmlzU2FtZUNvb3JkcyhcbiAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzLFxuICAgICAgICAgICAgY29vcmRzQWJzUG9zaXRpb24oY29sbGlkZXIucG9zaXRpb24pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpc0JvdW5kYXJ5IHx8IHRoaXMudmlzaXRlZC5oYXMobmV3S2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ1Njb3JlID0gY3VycmVudC5nU2NvcmUgKyAxO1xuICAgICAgICBjb25zdCBoU2NvcmUgPSBtYW5oYXR0YW5EaXN0YW5jZShuZXdDb29yZGluYXRlcywgZGVzdGluYXRpb24pO1xuICAgICAgICBjb25zdCBmU2NvcmUgPSBnU2NvcmUgKyBoU2NvcmU7XG5cbiAgICAgICAgdGhpcy52aXNpdGVkLmFkZChuZXdLZXkpO1xuICAgICAgICB0aGlzLnN1cnJvdW5kaW5ncy5ucShmU2NvcmUsIHtcbiAgICAgICAgICBmU2NvcmUsXG4gICAgICAgICAgZ1Njb3JlLFxuICAgICAgICAgIGhTY29yZSxcbiAgICAgICAgICBwYXJlbnQ6IGN1cnJlbnQucG9zaXRpb24sXG4gICAgICAgICAgcG9zaXRpb246IG5ld0Nvb3JkaW5hdGVzLFxuICAgICAgICAgIGtleTogbmV3S2V5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1PVkVTUEVFRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGhhc0tleSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb3Rpb246IHsgW2tleTogc3RyaW5nXTogeyBrZXk6IHN0cmluZywgYXhpczogc3RyaW5nLCB2ZWxvY2l0eTogbnVtYmVyLCBwcmVzc2VkOiBib29sZWFuIH0gfVxuICAgIGF0dGFjazogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIGRpcmVjdGlvbkJpbmRpbmdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgYXR0YWNrQmluZGluZ3M6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cbiAgICBhY3RpdmVBdHRhY2tzOiBib29sZWFuW107XG5cbiAgICBjb25zdHJ1Y3Rvcih7IHVwLCBkb3duLCBsZWZ0LCByaWdodCwgYXR0YWNrcyB9OiBEaXJlY3Rpb25LZXlBcmdzKSB7XG4gICAgICAgIHRoaXMubW90aW9uID0ge1xuICAgICAgICAgICAgdXA6IHtcbiAgICAgICAgICAgICAgICBrZXk6IHVwLFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieVwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiAtTU9WRVNQRUVELFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd246IHtcbiAgICAgICAgICAgICAgICBrZXk6IGRvd24sXG4gICAgICAgICAgICAgICAgYXhpczogXCJ5XCIsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IE1PVkVTUEVFRCxcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgICAga2V5OiBsZWZ0LFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiAtTU9WRVNQRUVELFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBrZXk6IHJpZ2h0LFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBNT1ZFU1BFRUQsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXJlY3Rpb25CaW5kaW5ncyA9IHtcbiAgICAgICAgICAgIFt1cF06IFwidXBcIixcbiAgICAgICAgICAgIFtkb3duXTogXCJkb3duXCIsXG4gICAgICAgICAgICBbbGVmdF06IFwibGVmdFwiLFxuICAgICAgICAgICAgW3JpZ2h0XTogXCJyaWdodFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdHRhY2tCaW5kaW5ncyA9IHt9O1xuICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja3MgPSBhdHRhY2tzLm1hcChfID0+IGZhbHNlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrQmluZGluZ3NbYXR0YWNrc1tpXV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWRsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubW90aW9uKS5ldmVyeShkaXJlY3Rpb24gPT4gIXRoaXMubW90aW9uW2RpcmVjdGlvbl0ucHJlc3NlZClcbiAgICB9XG5cbiAgICBnZXRNb3ZlbWVudCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMubW90aW9uKS5maWx0ZXIoZGlyZWN0aW9uID0+IHRoaXMubW90aW9uW2RpcmVjdGlvbl0ucHJlc3NlZCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0QXR0YWNrKCk6IG51bWJlciB8IG51bGwge1xuICAgICAgICBjb25zdCBhdHRhY2tJbmRpY2VzID0gdGhpcy5hY3RpdmVBdHRhY2tzLm1hcCgoYXR0YWNrQWN0aXZlLCBpKSA9PiBhdHRhY2tBY3RpdmUgPyBpIDogLTEpLmZpbHRlcihhdHRhY2tJZHggPT4gYXR0YWNrSWR4ICE9PSAtMSk7XG4gICAgICAgIGlmIChhdHRhY2tJbmRpY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja0luZGljZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJlc3Moa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKGhhc0tleSh0aGlzLmRpcmVjdGlvbkJpbmRpbmdzLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbkJpbmRpbmdzW2tleV07XG4gICAgICAgICAgICB0aGlzLm1vdGlvbltkaXJlY3Rpb25dLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc0tleSh0aGlzLmF0dGFja0JpbmRpbmdzLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB0aGlzLmF0dGFja0JpbmRpbmdzW2tleV07XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja3NbYXR0YWNrXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChoYXNLZXkodGhpcy5kaXJlY3Rpb25CaW5kaW5ncywga2V5KSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb25CaW5kaW5nc1trZXldO1xuICAgICAgICAgICAgdGhpcy5tb3Rpb25bZGlyZWN0aW9uXS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzS2V5KHRoaXMuYXR0YWNrQmluZGluZ3MsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IHRoaXMuYXR0YWNrQmluZGluZ3Nba2V5XTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQXR0YWNrc1thdHRhY2tdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ByZXNzZWQoa2V5OiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGhhc0tleSh0aGlzLm1vdGlvbiwga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW90aW9uW2tleV0ucHJlc3NlZDtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNLZXkodGhpcy5hY3RpdmVBdHRhY2tzLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVBdHRhY2tzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgICBjb250cm9sbGVyOiBDb250cm9sbGVyXG4gICAgY29uc3RydWN0b3IoeyBjb250cm9sbGVyIH06IHsgY29udHJvbGxlcjogRGlyZWN0aW9uS2V5QXJncyB9KSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKGNvbnRyb2xsZXIpXG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGhhc0tleSA9IDxPPihvYmo6IE8sIGtleTogUHJvcGVydHlLZXkpOiBrZXkgaXMga2V5b2YgTyA9PiB7XG4gICAgcmV0dXJuIGtleSBpbiBvYmpcbn07XG5cblxuZXhwb3J0IGNvbnN0IG1hbmhhdHRhbkRpc3RhbmNlID0gKGE6IGNvb3JkaW5hdGVzLCBiOiBjb29yZGluYXRlcyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEueCAtIGIueCkgKyBNYXRoLmFicyhhLnkgLSBiLnkpXG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuIiwiZXhwb3J0IGNsYXNzIFByaW9yaXR5UXVldWU8VD4ge1xuICAgIGl0ZW1zOiB7cHJpb3JpdHk6IG51bWJlciwgZWxlbWVudDogVH1bXVxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIG5xKHByaW9yaXR5OiBudW1iZXIsIGVsZW1lbnQ6IFQpOiBQcmlvcml0eVF1ZXVlPFQ+IHtcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xuICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBtaWQgPSAwO1xuICAgICAgICBsZXQgcG9zID0gLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe3ByaW9yaXR5LCBlbGVtZW50fSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0KSB7XG4gICAgICAgICAgICBtaWQgPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1ttaWRdLnByaW9yaXR5ID4gcHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICByaWdodCA9IG1pZCAtIDE7XG4gICAgICAgICAgICAgICAgcG9zID0gbWlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbWlkICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHBvcywgMCwge3ByaW9yaXR5LCBlbGVtZW50fSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZHEoKTogVCB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuc2hpZnQoKS5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgZW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9jaXRyaWNIZWFsaW5nLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9uZXdBdHRhY2tzLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9waG90b25CZWFtLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9TaGFkb3dTdGVwLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9zb2Z0R3Jhc3MudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXR0YWNrcy9hdHRhY2tMaXN0L3RveGljRHJhaW4udHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXR0YWNrcy9jb3JlLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnN0YW50cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kYXRhL2NvbGxpc2lvbi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ldmVudHMva2V5cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ldmVudHMvdG91Y2gudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmVuZGVyL2FuaW1hdGlvbi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZW5kZXIvY2FudmFzLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jb2xsaWRlci9jb2xsaXNpb25zLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jb2xsaWRlci9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zcHJpdGVzL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nwcml0ZXMvcGF0aGZpbmRlci50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdGF0ZS9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90eXBlcy9pbmRleC5kLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxzL21pc2MudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91dGlscy9wcmlvcml0eVF1ZXVlLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
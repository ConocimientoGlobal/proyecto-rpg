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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsNkJBQTZCLCtDQUErQyxHQUFHLGdCQUFnQixrQkFBa0IsbUJBQW1CLHVCQUF1QiwwQkFBMEIseUJBQXlCLGtDQUFrQyxnQ0FBZ0Msd0JBQXdCLG1FQUFtRSxHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxlQUFlLHNCQUFzQixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQiwyQkFBMkIsb0JBQW9CLEdBQUcsb0JBQW9CLHlCQUF5QixtQkFBbUIsaUJBQWlCLG1CQUFtQixvQkFBb0IsNENBQTRDLGtEQUFrRCx5QkFBeUIsMkJBQTJCLGlDQUFpQyx5Q0FBeUMsR0FBRyxvQkFBb0IseUJBQXlCLGVBQWUsZ0JBQWdCLGtCQUFrQixtQkFBbUIsNENBQTRDLHlCQUF5Qix1Q0FBdUMsaURBQWlELG9EQUFvRCxHQUFHLHFCQUFxQix5QkFBeUIsbUJBQW1CLGtCQUFrQixvQkFBb0IsNENBQTRDLHlDQUF5QyxlQUFlLG1CQUFtQixvQkFBb0IsMkJBQTJCLEdBQUcsaUJBQWlCLDJDQUEyQyxpREFBaUQsMEJBQTBCLGtCQUFrQixzQkFBc0Isd0JBQXdCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGlDQUFpQyx5Q0FBeUMsOENBQThDLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHdCQUF3Qiw0QkFBNEIsOEJBQThCLEdBQUcsa0RBQWtELHNCQUFzQixnQkFBZ0IsaUJBQWlCLDJCQUEyQixtQkFBbUIsR0FBRyx5REFBeUQsc0JBQXNCLGdCQUFnQixrQkFBa0Isa0JBQWtCLG1CQUFtQixxQ0FBcUMsaURBQWlELHlCQUF5QiwyQkFBMkIsbUJBQW1CLHVCQUF1QixHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLEdBQUcsc0NBQXNDLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLGtDQUFrQyxrQkFBa0IsbUJBQW1CLHFDQUFxQyxpREFBaUQseUJBQXlCLGtCQUFrQixzQkFBc0IsMkJBQTJCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLHVCQUF1Qiw2Q0FBNkMsR0FBRyxpQ0FBaUMsc0JBQXNCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLHNDQUFzQyxvQkFBb0IsMEJBQTBCLDhCQUE4Qiw2QkFBNkIsb0JBQW9CLEdBQUcsdUJBQXVCLG9CQUFvQixHQUFHLG1CQUFtQixxQkFBcUIsc0JBQXNCLDBCQUEwQixHQUFHLGtCQUFrQixrQkFBa0IsMEJBQTBCLHNCQUFzQixHQUFHLGtCQUFrQix5QkFBeUIsMEJBQTBCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQix3QkFBd0Isc0JBQXNCLEdBQUcsd0JBQXdCLDBCQUEwQixHQUFHLCtCQUErQixpQkFBaUIsd0JBQXdCLE9BQU8sR0FBRyxTQUFTLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLDRCQUE0QixnQkFBZ0IsaUJBQWlCLDZCQUE2QiwrQ0FBK0MsR0FBRyxnQkFBZ0Isa0JBQWtCLG1CQUFtQix1QkFBdUIsMEJBQTBCLHlCQUF5QixrQ0FBa0MsZ0NBQWdDLHdCQUF3QixtRUFBbUUsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsZUFBZSxzQkFBc0IsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsMkJBQTJCLG9CQUFvQixHQUFHLG9CQUFvQix5QkFBeUIsbUJBQW1CLGlCQUFpQixtQkFBbUIsb0JBQW9CLDRDQUE0QyxrREFBa0QseUJBQXlCLDJCQUEyQixpQ0FBaUMseUNBQXlDLEdBQUcsb0JBQW9CLHlCQUF5QixlQUFlLGdCQUFnQixrQkFBa0IsbUJBQW1CLDRDQUE0Qyx5QkFBeUIsdUNBQXVDLGlEQUFpRCxvREFBb0QsR0FBRyxxQkFBcUIseUJBQXlCLG1CQUFtQixrQkFBa0Isb0JBQW9CLDRDQUE0Qyx5Q0FBeUMsZUFBZSxtQkFBbUIsb0JBQW9CLDJCQUEyQixHQUFHLGlCQUFpQiwyQ0FBMkMsaURBQWlELDBCQUEwQixrQkFBa0Isc0JBQXNCLHdCQUF3QixvQkFBb0IsMEJBQTBCLDhCQUE4QixpQ0FBaUMseUNBQXlDLDhDQUE4QyxHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyx3QkFBd0IsNEJBQTRCLDhCQUE4QixHQUFHLGtEQUFrRCxzQkFBc0IsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsbUJBQW1CLEdBQUcseURBQXlELHNCQUFzQixnQkFBZ0Isa0JBQWtCLGtCQUFrQixtQkFBbUIscUNBQXFDLGlEQUFpRCx5QkFBeUIsMkJBQTJCLG1CQUFtQix1QkFBdUIsR0FBRyxxQkFBcUIsa0JBQWtCLG1CQUFtQixHQUFHLHNDQUFzQyxzQkFBc0IsZ0JBQWdCLGdCQUFnQixrQ0FBa0Msa0JBQWtCLG1CQUFtQixxQ0FBcUMsaURBQWlELHlCQUF5QixrQkFBa0Isc0JBQXNCLDJCQUEyQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyx1QkFBdUIsNkNBQTZDLEdBQUcsaUNBQWlDLHNCQUFzQixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQixzQ0FBc0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsNkJBQTZCLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyxtQkFBbUIscUJBQXFCLHNCQUFzQiwwQkFBMEIsR0FBRyxrQkFBa0Isa0JBQWtCLDBCQUEwQixzQkFBc0IsR0FBRyxrQkFBa0IseUJBQXlCLDBCQUEwQixrQkFBa0IsbUJBQW1CLHlCQUF5QixzQkFBc0Isd0JBQXdCLHNCQUFzQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRywrQkFBK0IsaUJBQWlCLHdCQUF3QixPQUFPLEdBQUcscUJBQXFCO0FBQzFzVDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVDL0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmlDO0FBRVk7QUFFN0M7SUFBZ0MsOEJBQU07SUFDcEM7ZUFDRSxrQkFBTTtZQUNKLElBQUksRUFBRSxhQUFhO1lBQ25CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLElBQWMsRUFBRSxNQUFnQjtRQUN2QyxJQUFJO2FBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFNLElBQUksR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxzREFBUyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7U0FDNUMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFDRSxJQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsR0FBNkI7UUFFN0IsR0FBRyxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQU0sQ0FBQyxHQUFHLHNEQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25FLElBQU0sQ0FBQyxHQUFHLHNEQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNaLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNiLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQ0ExQytCLHlDQUFNLEdBMENyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDZ0M7QUFFWTtBQUU3QztJQUFtQyxpQ0FBTTtJQUN2QztlQUNFLGtCQUFNO1lBQ0osSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFjLEVBQUUsTUFBZ0I7UUFDdkMsSUFBSTthQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQ0UsSUFBYyxFQUNkLE1BQWdCLEVBQ2hCLEdBQTZCO1FBRTdCLElBQU0sQ0FBQyxHQUFHLHNEQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBSSxDQUFDLENBQUM7UUFDbkIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNqQyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUNaLENBQUM7UUFDRixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLENBM0NrQyx5Q0FBTSxHQTJDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZ0M7QUFFWTtBQUU3QztJQUE4Qiw0QkFBTTtJQUNsQztlQUNFLGtCQUFNO1lBQ0osSUFBSSxFQUFFLFVBQVU7WUFDaEIsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLElBQWMsRUFBRSxNQUFnQjtRQUN2QyxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQ0UsSUFBYyxFQUNkLE1BQWdCLEVBQ2hCLEdBQTZCO1FBRTdCLElBQU0sQ0FBQyxHQUFHLHNEQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7UUFDekMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUNaLENBQUM7UUFDRixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0F6QzZCLHlDQUFNLEdBeUNuQzs7QUFFRDtJQUE4Qiw0QkFBTTtJQUNsQztlQUNFLGtCQUFNO1lBQ0osSUFBSSxFQUFFLFdBQVc7WUFDakIsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLElBQWMsRUFBRSxNQUFnQjtRQUN2QyxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQ0UsSUFBYyxFQUNkLE1BQWdCLEVBQ2hCLEdBQTZCO1FBRTdCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEYsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0FuQzZCLHlDQUFNLEdBbUNuQzs7QUFFRDtJQUEwQix3QkFBTTtJQUM5QjtlQUNFLGtCQUFNO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsSUFBYyxFQUFFLE1BQWdCO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFDRSxJQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsR0FBNkI7UUFFN0IsSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2pDLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ1osQ0FBQztRQUNGLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxDQTFDeUIseUNBQU0sR0EwQy9COztBQUVEO0lBQW1DLGlDQUFNO0lBQ3ZDO2VBQ0Usa0JBQU07WUFDSixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE1BQU0sRUFBRSxHQUFHO1lBQ1gsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLEdBQUc7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBYyxFQUFFLE1BQWdCO1FBQ3ZDLElBQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1RCxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFDRSxJQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsR0FBNkI7UUFFN0IsR0FBRyxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztRQUMzQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLHNEQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakcsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLHNEQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEI7UUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEYsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLENBeENrQyx5Q0FBTSxHQXdDeEM7O0FBRUQ7SUFBaUMsK0JBQU07SUFDckM7ZUFDRSxrQkFBTTtZQUNKLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLFFBQVE7WUFDZCxLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxjQUFjO1lBQzNCLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBYyxFQUFFLE1BQWdCO1FBQ3ZDLElBQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzRCxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFDRSxJQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsR0FBNkI7UUFFN0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLHNEQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxzREFBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUQsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxzREFBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxDQXJDZ0MseUNBQU0sR0FxQ3RDOztBQUVEO0lBQWtDLGdDQUFNO0lBQ3RDO2VBQ0Usa0JBQU07WUFDSixJQUFJLEVBQUUsZUFBZTtZQUNyQixNQUFNLEVBQUUsR0FBRztZQUNYLElBQUksRUFBRSxVQUFVO1lBQ2hCLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQWMsRUFBRSxNQUFnQjtRQUN2QyxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQ0UsSUFBYyxFQUNkLE1BQWdCLEVBQ2hCLEdBQTZCO1FBRTdCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxzREFBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxDQXZDaUMseUNBQU0sR0F1Q3ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFBnQztBQUVZO0FBRTdDO0lBQWdDLDhCQUFNO0lBQ3BDO2VBQ0Usa0JBQU07WUFDSixJQUFJLEVBQUUsYUFBYTtZQUNuQixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxJQUFjLEVBQUUsTUFBZ0I7UUFDdkMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUNFLElBQWMsRUFDZCxNQUFnQixFQUNoQixHQUE2QjtRQUU3QixHQUFHLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakUsSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEUsSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBUSxDQUFDLGVBQUssQ0FBQyxlQUFLLENBQUMsZUFBSyxDQUFDLE1BQUcsQ0FBQztZQUMvQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBM0MrQix5Q0FBTSxHQTJDckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ2dDO0FBRVk7QUFFN0M7SUFBK0IsNkJBQU07SUFDbkM7ZUFDRSxrQkFBTTtZQUNKLElBQUksRUFBRSxZQUFZO1lBQ2xCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxJQUFjLEVBQUUsTUFBZ0I7UUFDdkMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSTthQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFDRSxJQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsR0FBNkI7UUFFN0IsSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsR0FBRyxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztRQUN4QyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2pDLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ1osQ0FBQztRQUNGLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0EzQzhCLHlDQUFNLEdBMkNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZ0M7QUFFWTtBQUU3QztJQUFnQyw4QkFBTTtJQUNwQztlQUNFLGtCQUFNO1lBQ0osSUFBSSxFQUFFLGFBQWE7WUFDbkIsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEdBQUc7WUFDYixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUNULG1HQUFtRztZQUNyRyxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLENBQUM7b0JBQ1gsVUFBVSxFQUFFLENBQUM7b0JBQ2IsUUFBUSxFQUFFLEVBQUU7b0JBQ1osR0FBRyxFQUFFLENBQUM7b0JBQ04sTUFBTSxFQUFFLElBQUk7aUJBQ2I7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLElBQWUsRUFBRSxNQUFpQjtRQUN6QyxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQ0UsSUFBYyxFQUNkLE1BQWdCLEVBQ2hCLEdBQTZCO1FBRTdCLElBQU0sQ0FBQyxHQUFHLHNEQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7UUFDM0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNqQyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUNaLENBQUM7UUFDRixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBbkQrQix5Q0FBTSxHQW1EckM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERDtJQVFJLGdCQUFZLEVBT0Y7WUFOTixJQUFJLFlBQ0osUUFBUSxnQkFDUixVQUFVLGtCQUNWLFFBQVEsZ0JBQ1IsR0FBRyxXQUNILE1BQU07UUFFTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQVlFLGdCQUFZLEVBV0Y7WUFWUixJQUFJLFlBQ0osTUFBTSxjQUNOLElBQUksWUFDSixLQUFLLGFBQ0wsUUFBUSxnQkFDUixRQUFRLGdCQUNSLElBQUksWUFDSixJQUFJLFlBQ0osT0FBTyxlQUNQLFdBQVc7UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLElBQWUsRUFBRSxNQUFpQjtRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRU0sSUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDO0FBQy9CLElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQztBQUNoQyxJQUFNLFVBQVUsR0FBVyxFQUFFLENBQUM7QUFDOUIsSUFBTSxXQUFXLEdBQVcsRUFBRSxDQUFDO0FBQy9CLElBQU0sVUFBVSxHQUFXLEVBQUUsQ0FBQztBQUM5QixJQUFNLFdBQVcsR0FBVyxFQUFFLENBQUM7QUFDL0IsSUFBTSxZQUFZLEdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDbEMsSUFBTSxZQUFZLEdBQVcsQ0FBQyxHQUFHLENBQUM7QUFFbEMsSUFBTSxhQUFhLEdBQVcsR0FBRyxDQUFDO0FBQ2xDLElBQU0sYUFBYSxHQUFXLEdBQUcsQ0FBQztBQUNsQyxJQUFNLFVBQVUsR0FBVyxDQUFDLENBQUM7QUFDN0IsSUFBTSxVQUFVLEdBQVcsRUFBRSxDQUFDO0FBRTlCLElBQU0sY0FBYyxHQUFXLEdBQUcsQ0FBQztBQUNuQyxJQUFNLGNBQWMsR0FBVyxFQUFFLENBQUM7QUFDbEMsSUFBTSxvQkFBb0IsR0FBVyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBRXJELElBQU0sV0FBVyxHQUFXLEdBQUcsQ0FBQztBQUNoQyxJQUFNLFNBQVMsR0FBVyxDQUFDLENBQUM7QUFDNUIsSUFBTSxLQUFLLEdBQW1DO0lBQ2pELElBQUksRUFBRSxFQUFFO0lBQ1IsSUFBSSxFQUFFLEVBQUU7Q0FDWDtBQUVNLElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnRELElBQU0sVUFBVSxHQUFhO0lBQ2pDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMxSCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNwSixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUosQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ2hJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDeEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNsSixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3hKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDbEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN4SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQzFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDbEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNwSixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3BJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3hLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvaW1nL21haW5fY2hhcl9zcHJpdGUucG5nIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvaW1nL211c2hyb29tX2Jvc3MucG5nIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvaW1nL25vdmVtYmVyLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9ub3ZlbWJlcl9mb3JlZ3JvdW5kLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3R5cGVzL2luZGV4LmQudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9TaGFkb3dTdGVwLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvYXR0YWNrcy9hdHRhY2tMaXN0L2NpdHJpY0hlYWxpbmcudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvbmV3QXR0YWNrcy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9waG90b25CZWFtLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvYXR0YWNrcy9hdHRhY2tMaXN0L3NvZnRHcmFzcy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC90b3hpY0RyYWluLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvYXR0YWNrcy9jb3JlLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvZGF0YS9jb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9ldmVudHMva2V5cy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2V2ZW50cy90b3VjaC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvcmVuZGVyL2FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY29sbGlkZXIvY29sbGlzaW9ucy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9jb2xsaWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3Nwcml0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9zcHJpdGVzL3BhdGhmaW5kZXIudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9zdGF0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3V0aWxzL21pc2MudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy91dGlscy9wcmlvcml0eVF1ZXVlLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjMGEwYTBmO1xcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuY2FudmFzI2NhbnZhcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jdG91Y2gtdWkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbiNqb3lzdGljay16b25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbiNqb3lzdGljay1rbm9iIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuI2F0dGFjay1idXR0b25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDZweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmF0dGFjay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMsIGZpbHRlciAwLjFzO1xcbn1cXG5cXG4uYXR0YWNrLWJ0bjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xcbn1cXG5cXG4uYXR0YWNrLWJ0bi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xcbn1cXG5cXG4vKiBIVUQgLSBlc3F1aW5hIHN1cGVyaW9yIGl6cXVpZXJkYSAqL1xcbiNodWQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwMDtcXG59XFxuXFxuLyogTWluaW1hcGEgLSBlc3F1aW5hIHN1cGVyaW9yIGRlcmVjaGEgKi9cXG4jbWluaW1hcCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI21pbmltYXAgY2FudmFzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogQm90w7NuIGRlIHBhdXNhICovXFxuI3BhdXNlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYXVzZS1idG46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuOSk7XFxufVxcblxcbi8qIEdhbWUgT3ZlciAqL1xcbiNnYW1lLW92ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHotaW5kZXg6IDIwMDA7XFxufVxcblxcbiNnYW1lLW92ZXIuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2dhbWUtb3ZlciBoMSB7XFxuICAgIGNvbG9yOiAjZTc0YzNjO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNnYW1lLW92ZXIgcCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNyZXN0YXJ0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyZXN0YXJ0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNjMDM5MmI7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAjdG91Y2gtdWkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUFxQztJQUNyQywyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQywwQ0FBMEM7SUFDMUMsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBLHFDQUFxQztBQUNyQztJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBLHdDQUF3QztBQUN4QztJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUEsY0FBYztBQUNkO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjMGEwYTBmO1xcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuY2FudmFzI2NhbnZhcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jdG91Y2gtdWkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbiNqb3lzdGljay16b25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbiNqb3lzdGljay1rbm9iIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuI2F0dGFjay1idXR0b25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDZweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmF0dGFjay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMsIGZpbHRlciAwLjFzO1xcbn1cXG5cXG4uYXR0YWNrLWJ0bjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xcbn1cXG5cXG4uYXR0YWNrLWJ0bi5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xcbn1cXG5cXG4vKiBIVUQgLSBlc3F1aW5hIHN1cGVyaW9yIGl6cXVpZXJkYSAqL1xcbiNodWQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwMDtcXG59XFxuXFxuLyogTWluaW1hcGEgLSBlc3F1aW5hIHN1cGVyaW9yIGRlcmVjaGEgKi9cXG4jbWluaW1hcCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI21pbmltYXAgY2FudmFzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogQm90w7NuIGRlIHBhdXNhICovXFxuI3BhdXNlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYXVzZS1idG46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuOSk7XFxufVxcblxcbi8qIEdhbWUgT3ZlciAqL1xcbiNnYW1lLW92ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHotaW5kZXg6IDIwMDA7XFxufVxcblxcbiNnYW1lLW92ZXIuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2dhbWUtb3ZlciBoMSB7XFxuICAgIGNvbG9yOiAjZTc0YzNjO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNnYW1lLW92ZXIgcCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNyZXN0YXJ0LWJ0biB7XFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyZXN0YXJ0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNjMDM5MmI7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAjdG91Y2gtdWkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNmZTc5YTY3ZWIzOTQwMjAzZGY5OTJiMjg1NTUyYzNlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNWY4ZGRmMTk0MGZmMjVhZmI4OWYyOTIzZjNhMDgxZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTE2NzkyOTk1NTVlZjY5MTM5MDAxYjU5Njc1MjQxZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdhN2U1NzMxZjY5YTg0OTE4Y2Y4NjM3MDY0NjM2NmZmLnBuZ1wiOyIsIiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBBdHRhY2sgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUGxheWFibGUgfSBmcm9tIFwiLi4vLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pc2NcIjtcblxuZXhwb3J0IGNsYXNzIFNoYWRvd1N0ZXAgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlNoYWRvdyBTdGVwXCIsXG4gICAgICBkYW1hZ2U6IDAsXG4gICAgICBoZWFsOiAwLFxuICAgICAgdHlwZTogXCJzaGFkb3dcIixcbiAgICAgIHJhbmdlOiAxMDAwLFxuICAgICAgY29zdDogMTAsXG4gICAgICBhY2N1cmFjeTogMC44LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBTaGFkb3dTdGVwIHtcbiAgICB1c2VyXG4gICAgICAucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIGNvbnN0IHN0ZXAgPSAxMDA7XG4gICAgdXNlci5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHVzZXIucG9zaXRpb24ueCArIHJhbmRvbUludCgtc3RlcCwgc3RlcCksXG4gICAgICB5OiB1c2VyLnBvc2l0aW9uLnkgKyByYW5kb21JbnQoLXN0ZXAsIHN0ZXApXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihcbiAgICB1c2VyOiBQbGF5YWJsZSxcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IFNoYWRvd1N0ZXAge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSByYW5kb21JbnQodXNlci5wb3NpdGlvbi54LCB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoKTtcbiAgICAgIGNvbnN0IHkgPSByYW5kb21JbnQodXNlci5wb3NpdGlvbi55LCB1c2VyLnBvc2l0aW9uLnkgKyB1c2VyLmhlaWdodCk7XG4gICAgICBjb25zdCB3ID0gMTtcbiAgICAgIGNvbnN0IGggPSAyMDtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgQ2l0cmljSGVhbGluZyBleHRlbmRzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IFwiQ2l0cmljIEhlYWxpbmdcIixcbiAgICAgIGRhbWFnZTogMCxcbiAgICAgIGhlYWw6IDEwLFxuICAgICAgdHlwZTogXCJncmFzc1wiLFxuICAgICAgcmFuZ2U6IDEwMDAsXG4gICAgICBjb3N0OiA1MCxcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IENpdHJpY0hlYWxpbmcge1xuICAgIHVzZXJcbiAgICAgIC5oZWFsKHRoaXMuaGVhbClcbiAgICAgIC5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBDaXRyaWNIZWFsaW5nIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLSAyMCwgdXNlci53aWR0aCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1MCwgMjUxLCAyNDAsIDAuOClcIjtcbiAgICBjdHgubGluZVdpZHRoID0gIDU7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgRmlyZWJhbGwgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIkZpcmViYWxsXCIsXG4gICAgICBkYW1hZ2U6IDgwLFxuICAgICAgdHlwZTogXCJmaXJlXCIsXG4gICAgICByYW5nZTogMjAwLFxuICAgICAgY29zdDogMzAsXG4gICAgICBhY2N1cmFjeTogMC45LFxuICAgICAgY29vbGRvd246IDMsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIGJsYXppbmcgYmFsbCBvZiBmaXJlXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogRmlyZWJhbGwge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBGaXJlYmFsbCB7XG4gICAgY29uc3QgciA9IHJhbmRvbUludCgxMCwgMzApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAxMDAsIDAsIDAuNylcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHRhcmdldC5wb3NpdGlvbi54ICsgdGFyZ2V0LndpZHRoIC8gMixcbiAgICAgIHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LmhlaWdodCAvIDIsXG4gICAgICByLFxuICAgICAgMCxcbiAgICAgIDIgKiBNYXRoLlBJXG4gICAgKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWNlU2hhcmQgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIkljZSBTaGFyZFwiLFxuICAgICAgZGFtYWdlOiA0MCxcbiAgICAgIHR5cGU6IFwiaWNlXCIsXG4gICAgICByYW5nZTogMTUwLFxuICAgICAgY29zdDogMjAsXG4gICAgICBhY2N1cmFjeTogMC45NSxcbiAgICAgIGNvb2xkb3duOiAxLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2hhcnAgaWNlIHByb2plY3RpbGVcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBJY2VTaGFyZCB7XG4gICAgY29uc3QgZGFtYWdlID0gKHVzZXIubWFnaWsgLyB0YXJnZXQuaW1tdW5pdHkpICogdGhpcy5kYW1hZ2U7XG4gICAgdGFyZ2V0LnRha2VEYW1hZ2UoZGFtYWdlKTtcbiAgICB1c2VyLnJlZHVjZU1hbmEodGhpcy5jb3N0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihcbiAgICB1c2VyOiBQbGF5YWJsZSxcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IEljZVNoYXJkIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMTAwLCAyMDAsIDI1NSwgMC44KVwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHVzZXIucG9zaXRpb24ueCArIHVzZXIud2lkdGggLyAyLCB1c2VyLnBvc2l0aW9uLnkgKyB1c2VyLmhlaWdodCAvIDIpO1xuICAgIGN0eC5saW5lVG8odGFyZ2V0LnBvc2l0aW9uLnggKyB0YXJnZXQud2lkdGggLyAyLCB0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5oZWlnaHQgLyAyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhlYWwgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIkhlYWxcIixcbiAgICAgIGRhbWFnZTogMCxcbiAgICAgIGhlYWw6IDEwMCxcbiAgICAgIHR5cGU6IFwiaG9seVwiLFxuICAgICAgcmFuZ2U6IDAsXG4gICAgICBjb3N0OiA0MCxcbiAgICAgIGFjY3VyYWN5OiAxLFxuICAgICAgY29vbGRvd246IDUsXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZXN0b3JlIEhQXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogSGVhbCB7XG4gICAgdXNlci5oZWFsKHRoaXMuaGVhbCk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBIZWFsIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KDIwLCA1MCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDEwMCwgMjU1LCAxMDAsIDAuOClcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHVzZXIucG9zaXRpb24ueCArIHVzZXIud2lkdGggLyAyLFxuICAgICAgdXNlci5wb3NpdGlvbi55ICsgdXNlci5oZWlnaHQgLyAyLFxuICAgICAgcixcbiAgICAgIDAsXG4gICAgICAyICogTWF0aC5QSVxuICAgICk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlnaHRuaW5nQm9sdCBleHRlbmRzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IFwiTGlnaHRuaW5nIEJvbHRcIixcbiAgICAgIGRhbWFnZTogMTIwLFxuICAgICAgdHlwZTogXCJlbGVjdHJpY1wiLFxuICAgICAgcmFuZ2U6IDI1MCxcbiAgICAgIGNvc3Q6IDYwLFxuICAgICAgYWNjdXJhY3k6IDAuODUsXG4gICAgICBjb29sZG93bjogNCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcG93ZXJmdWwgbGlnaHRuaW5nIHN0cmlrZVwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IExpZ2h0bmluZ0JvbHQge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBMaWdodG5pbmdCb2x0IHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDAsIDAuOSlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMiwgdXNlci5wb3NpdGlvbi55ICsgdXNlci5oZWlnaHQgLyAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHVzZXIucG9zaXRpb24ueCArICh0YXJnZXQucG9zaXRpb24ueCAtIHVzZXIucG9zaXRpb24ueCkgKiAoaSAvIDUpICsgcmFuZG9tSW50KC0zMCwgMzApO1xuICAgICAgY29uc3QgeSA9IHVzZXIucG9zaXRpb24ueSArICh0YXJnZXQucG9zaXRpb24ueSAtIHVzZXIucG9zaXRpb24ueSkgKiAoaSAvIDUpICsgcmFuZG9tSW50KC0zMCwgMzApO1xuICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG4gICAgY3R4LmxpbmVUbyh0YXJnZXQucG9zaXRpb24ueCArIHRhcmdldC53aWR0aCAvIDIsIHRhcmdldC5wb3NpdGlvbi55ICsgdGFyZ2V0LmhlaWdodCAvIDIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9pc29uU3RpbmcgZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlBvaXNvbiBTdGluZ1wiLFxuICAgICAgZGFtYWdlOiAzMCxcbiAgICAgIHR5cGU6IFwicG9pc29uXCIsXG4gICAgICByYW5nZTogMTAwLFxuICAgICAgY29zdDogMTUsXG4gICAgICBhY2N1cmFjeTogMC45LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHRveGljIHN0YWJcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBQb2lzb25TdGluZyB7XG4gICAgY29uc3QgZGFtYWdlID0gKHVzZXIubXVzY2xlIC8gdGFyZ2V0LmFybW91cikgKiB0aGlzLmRhbWFnZTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXIucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogUG9pc29uU3Rpbmcge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMjAwLCAwLCAwLjYpXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSB0YXJnZXQucG9zaXRpb24ueCArIHJhbmRvbUludCgwLCB0YXJnZXQud2lkdGgpO1xuICAgICAgY29uc3QgeSA9IHRhcmdldC5wb3NpdGlvbi55ICsgcmFuZG9tSW50KDAsIHRhcmdldC5oZWlnaHQpO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCByYW5kb21JbnQoMywgOCksIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaHVuZGVyU3Rvcm0gZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlRodW5kZXIgU3Rvcm1cIixcbiAgICAgIGRhbWFnZTogMTUwLFxuICAgICAgdHlwZTogXCJlbGVjdHJpY1wiLFxuICAgICAgcmFuZ2U6IDMwMCxcbiAgICAgIGNvc3Q6IDgwLFxuICAgICAgYWNjdXJhY3k6IDAuNzUsXG4gICAgICBjb29sZG93bjogNixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1hc3NpdmUgbGlnaHRuaW5nIGRhbWFnZVwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IFRodW5kZXJTdG9ybSB7XG4gICAgY29uc3QgZGFtYWdlID0gKHVzZXIubWFnaWsgLyB0YXJnZXQuaW1tdW5pdHkpICogdGhpcy5kYW1hZ2U7XG4gICAgdGFyZ2V0LnRha2VEYW1hZ2UoZGFtYWdlKTtcbiAgICB1c2VyLnJlZHVjZU1hbmEodGhpcy5jb3N0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihcbiAgICB1c2VyOiBQbGF5YWJsZSxcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICk6IFRodW5kZXJTdG9ybSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAxMDAsIDAuOSlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY29uc3Qgc3RhcnRYID0gdGFyZ2V0LnBvc2l0aW9uLnggKyByYW5kb21JbnQoMCwgdGFyZ2V0LndpZHRoKTtcbiAgICAgIGNvbnN0IHN0YXJ0WSA9IHRhcmdldC5wb3NpdGlvbi55IC0gNTA7XG4gICAgICBjdHgubW92ZVRvKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICAgIGN0eC5saW5lVG8oc3RhcnRYICsgcmFuZG9tSW50KC00MCwgNDApLCB0YXJnZXQucG9zaXRpb24ueSArIHRhcmdldC5oZWlnaHQpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXR0YWNrIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IFBsYXlhYmxlIH0gZnJvbSBcIi4uLy4uL3Nwcml0ZXNcIjtcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gXCIuLi8uLi91dGlscy9taXNjXCI7XG5cbmV4cG9ydCBjbGFzcyBQaG90b25CZWFtIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJQaG90b24gQmVhbVwiLFxuICAgICAgZGFtYWdlOiA1MCxcbiAgICAgIGhlYWw6IDAsXG4gICAgICB0eXBlOiBcImdyYXNzXCIsXG4gICAgICByYW5nZTogNTAsXG4gICAgICBjb3N0OiA1MCxcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IFBob3RvbkJlYW0ge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBQaG90b25CZWFtIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE1OCwgMjUsIDgsIDAuOClcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcmFuZG9tSW50KHVzZXIucG9zaXRpb24ueCAtIDUwLCB1c2VyLnBvc2l0aW9uLnggLSA1MDApO1xuICAgICAgY29uc3QgeSA9IHJhbmRvbUludCh1c2VyLnBvc2l0aW9uLnksIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IHcgPSByYW5kb21JbnQoMjAsIDEwMCk7XG4gICAgICBjb25zdCBoID0gNTtcbiAgICAgIGNvbnN0IHIgPSByYW5kb21JbnQoMjQwLCAyNTUpO1xuICAgICAgY29uc3QgZyA9IHJhbmRvbUludCgyNDAsIDI1NSk7XG4gICAgICBjb25zdCBiID0gcmFuZG9tSW50KDI0MCwgMjU1KTtcbiAgICAgIGNvbnN0IGEgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YX0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgU29mdEdyYXNzIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJTb2Z0IEdyYXNzXCIsXG4gICAgICBkYW1hZ2U6IDEwLFxuICAgICAgdHlwZTogXCJncmFzc1wiLFxuICAgICAgcmFuZ2U6IDE2LFxuICAgICAgY29zdDogMjAsXG4gICAgICBhY2N1cmFjeTogMC44LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGVmZmVjdHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogUGxheWFibGUsIHRhcmdldDogUGxheWFibGUpOiBTb2Z0R3Jhc3Mge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlclxuICAgICAgLmhlYWwoTWF0aC5mbG9vcihkYW1hZ2UgLyAyKSlcbiAgICAgIC5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBTb2Z0R3Jhc3Mge1xuICAgIGNvbnN0IHIgPSByYW5kb21JbnQodXNlci53aWR0aCAvIDE2LCB1c2VyLndpZHRoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDgsIDE2OCwgODYsIDAuNSlcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHVzZXIucG9zaXRpb24ueCArIHVzZXIud2lkdGggLyAyLFxuICAgICAgdXNlci5wb3NpdGlvbi55ICsgdXNlci5oZWlnaHQgLyAyLFxuICAgICAgcixcbiAgICAgIDAsXG4gICAgICAyICogTWF0aC5QSVxuICAgICk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgVG94aWNEcmFpbiBleHRlbmRzIEF0dGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIG5hbWU6IFwiVG94aWMgRHJhaW5cIixcbiAgICAgIGRhbWFnZTogMjAsXG4gICAgICB0eXBlOiBcInBvaXNvblwiLFxuICAgICAgcmFuZ2U6IDE2LFxuICAgICAgYWNjdXJhY3k6IDAuOCxcbiAgICAgIGNvc3Q6IDIwLFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUaGUgdXNlciBkcmFpbnMgdGhlIHRhcmdldCdzIEhQIGFuZCByZWxlYXNlcyB0b3hpYyBmdW1lcy4gSGFzIDE1JSBjaGFuY2Ugb2YgcG9pc29uaW5nIHRoZSB0YXJnZXQuXCIsXG4gICAgICBlZmZlY3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInBvaXNvblwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgICAgICAgZW5kVmFsdWU6IDEwLFxuICAgICAgICAgIGluYzogMSxcbiAgICAgICAgICBjaGFuY2U6IDAuMTUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogSVBsYXlhYmxlLCB0YXJnZXQ6IElQbGF5YWJsZSk6IFRveGljRHJhaW4ge1xuICAgIGNvbnN0IGRhbWFnZSA9ICh1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5KSAqIHRoaXMuZGFtYWdlO1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBUb3hpY0RyYWluIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLyAxNiwgdXNlci53aWR0aCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxODAsIDExMiwgMjI0LCAwLjUpXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWZmZWN0IGltcGxlbWVudHMgSUVmZmVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgc3RhcnRWYWx1ZTogbnVtYmVyO1xuICAgIGVuZFZhbHVlOiBudW1iZXI7XG4gICAgaW5jOiBudW1iZXI7XG4gICAgY2hhbmNlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgaW5jLFxuICAgICAgICBjaGFuY2VcbiAgICB9OiBJRWZmZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgdGhpcy5lbmRWYWx1ZSA9IGVuZFZhbHVlO1xuICAgICAgICB0aGlzLmluYyA9IGluYztcbiAgICAgICAgdGhpcy5jaGFuY2UgPSBjaGFuY2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0YWNrIGltcGxlbWVudHMgSUF0dGFjayB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgcmFuZ2U6IG51bWJlcjtcbiAgaGVhbDogbnVtYmVyO1xuICBhY2N1cmFjeTogbnVtYmVyO1xuICBjb29sZG93bjogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG4gIGVmZmVjdHM6IEVmZmVjdFtdO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBuYW1lLFxuICAgIGRhbWFnZSxcbiAgICB0eXBlLFxuICAgIHJhbmdlLFxuICAgIGFjY3VyYWN5LFxuICAgIGNvb2xkb3duLFxuICAgIGNvc3QsXG4gICAgaGVhbCxcbiAgICBlZmZlY3RzLFxuICAgIGRlc2NyaXB0aW9uXG4gIH06IElBdHRhY2spIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb3N0ID0gY29zdDtcbiAgICB0aGlzLmhlYWwgPSBoZWFsO1xuICAgIHRoaXMuZWZmZWN0cyA9IGVmZmVjdHM7XG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xuICAgIHRoaXMuYWNjdXJhY3kgPSBhY2N1cmFjeTtcbiAgICB0aGlzLmNvb2xkb3duID0gY29vbGRvd247XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogSVBsYXlhYmxlLCB0YXJnZXQ6IElQbGF5YWJsZSk6IElBdHRhY2sge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgTUFQX1dJRFRIOiBudW1iZXIgPSAxOTIwO1xuZXhwb3J0IGNvbnN0IE1BUF9IRUlHSFQ6IG51bWJlciA9IDE0NDA7XG5leHBvcnQgY29uc3QgVElMRV9XSURUSDogbnVtYmVyID0gNjQ7XG5leHBvcnQgY29uc3QgVElMRV9IRUlHSFQ6IG51bWJlciA9IDY0O1xuZXhwb3J0IGNvbnN0IENIQVJfV0lEVEg6IG51bWJlciA9IDE2O1xuZXhwb3J0IGNvbnN0IENIQVJfSEVJR0hUOiBudW1iZXIgPSAxNjtcbmV4cG9ydCBjb25zdCBNQVBfWF9PRkZTRVQ6IG51bWJlciA9IC02MDA7XG5leHBvcnQgY29uc3QgTUFQX1lfT0ZGU0VUOiBudW1iZXIgPSAtOTAwO1xuXG5leHBvcnQgY29uc3QgQ0hBUl9YX09GRlNFVDogbnVtYmVyID0gNjAwO1xuZXhwb3J0IGNvbnN0IENIQVJfWV9PRkZTRVQ6IG51bWJlciA9IDYwMDtcbmV4cG9ydCBjb25zdCBCQVJfT0ZGU0VUOiBudW1iZXIgPSAyO1xuZXhwb3J0IGNvbnN0IEJBUl9IRUlHSFQ6IG51bWJlciA9IDEwO1xuXG5leHBvcnQgY29uc3QgRU5FTVlfWF9PRkZTRVQ6IG51bWJlciA9IDI2NTtcbmV4cG9ydCBjb25zdCBFTkVNWV9ZX09GRlNFVDogbnVtYmVyID0gMjA7XG5leHBvcnQgY29uc3QgRU5FTVlfQ0hBU0VfRElTVEFOQ0U6IG51bWJlciA9IENIQVJfV0lEVEggKiA1MDtcblxuZXhwb3J0IGNvbnN0IElTX0NPTExJREVSOiBudW1iZXIgPSA5NTU7XG5leHBvcnQgY29uc3QgTU9WRVNQRUVEOiBudW1iZXIgPSA0O1xuZXhwb3J0IGNvbnN0IFRJTEVTOiB7IHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyIH0gPSB7XG4gICAgcm93czogNDAsXG4gICAgY29sczogMzBcbn1cblxuZXhwb3J0IGNvbnN0IERJUkVDVElPTlMgPSBbWy0xLCAwXSwgWzAsIC0xXSwgWzEsIDBdLCBbMCwgMV1dO1xuIiwiZXhwb3J0IGNvbnN0IGNvbGxpc2lvbnM6IG51bWJlcltdID0gW1xuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgOTU1LCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCA5NTUsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMFxuXSIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUtleVByZXNzID0gKGNvbnRyb2xsZXI6IENvbnRyb2xsZXIpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgY29udHJvbGxlci5wcmVzcyhlLmtleSk7XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgY29udHJvbGxlci5yZWxlYXNlKGUua2V5KTtcbiAgICB9KVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJlVG91Y2hDb250cm9scyA9IChjb250cm9sbGVyOiBDb250cm9sbGVyKSA9PiB7XG4gICAgY29uc3QgdG91Y2hVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvdWNoVUkuaWQgPSAndG91Y2gtdWknO1xuXG4gICAgLy8gSm95c3RpY2sgem9uZVxuICAgIGNvbnN0IGpveXN0aWNrWm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGpveXN0aWNrWm9uZS5pZCA9ICdqb3lzdGljay16b25lJztcbiAgICBjb25zdCBqb3lzdGlja0tub2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBqb3lzdGlja0tub2IuaWQgPSAnam95c3RpY2sta25vYic7XG4gICAgam95c3RpY2tab25lLmFwcGVuZENoaWxkKGpveXN0aWNrS25vYik7XG5cbiAgICAvLyBBdHRhY2sgYnV0dG9ucyAtIGdyaWQgNHgyIGZvciBhbGwgOCBhdHRhY2tzXG4gICAgY29uc3QgYXR0YWNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGF0dGFja0J1dHRvbnMuaWQgPSAnYXR0YWNrLWJ1dHRvbnMnO1xuXG4gICAgY29uc3QgYXR0YWNrQ29uZmlncyA9IFtcbiAgICAgICAgeyBrZXk6ICd5JywgbGFiZWw6ICfwn5SlJywgY29sb3I6ICdyZ2JhKDI1NSwgMTAwLCAwLCAwLjYpJywgbmFtZTogJ0ZpcmViYWxsJyB9LFxuICAgICAgICB7IGtleTogJ3UnLCBsYWJlbDogJ+KdhO+4jycsIGNvbG9yOiAncmdiYSgxMDAsIDIwMCwgMjU1LCAwLjYpJywgbmFtZTogJ0ljZVNoYXJkJyB9LFxuICAgICAgICB7IGtleTogJ2knLCBsYWJlbDogJ/CfkponLCBjb2xvcjogJ3JnYmEoMTAwLCAyNTUsIDEwMCwgMC42KScsIG5hbWU6ICdIZWFsJyB9LFxuICAgICAgICB7IGtleTogJ28nLCBsYWJlbDogJ+KaoScsIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMCwgMC42KScsIG5hbWU6ICdMaWdodG5pbmcnIH0sXG4gICAgICAgIHsga2V5OiAncCcsIGxhYmVsOiAn4pig77iPJywgY29sb3I6ICdyZ2JhKDAsIDIwMCwgMCwgMC42KScsIG5hbWU6ICdQb2lzb24nIH0sXG4gICAgICAgIHsga2V5OiAnaicsIGxhYmVsOiAn8J+Mqu+4jycsIGNvbG9yOiAncmdiYSgxMDAsIDEwMCwgMjU1LCAwLjYpJywgbmFtZTogJ1RodW5kZXInIH0sXG4gICAgICAgIHsga2V5OiAnaycsIGxhYmVsOiAn8J+MkScsIGNvbG9yOiAncmdiYSg4MCwgMCwgMTIwLCAwLjYpJywgbmFtZTogJ0RhcmsnIH0sXG4gICAgICAgIHsga2V5OiAnbCcsIGxhYmVsOiAn4pyoJywgY29sb3I6ICdyZ2JhKDI1NSwgMTAwLCAyNTUsIDAuNiknLCBuYW1lOiAnU2hhZG93JyB9LFxuICAgIF07XG5cbiAgICBjb25zdCBhY3RpdmVUb3VjaGVzOiB7IFtpZDogbnVtYmVyXTogc3RyaW5nIH0gPSB7fTtcblxuICAgIGF0dGFja0NvbmZpZ3MuZm9yRWFjaChjZmcgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmNsYXNzTmFtZSA9ICdhdHRhY2stYnRuJztcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gY2ZnLmxhYmVsO1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZCA9IGNmZy5jb2xvcjtcbiAgICAgICAgYnRuLmRhdGFzZXQua2V5ID0gY2ZnLmtleTtcbiAgICAgICAgXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICBpZiAodG91Y2gpIGFjdGl2ZVRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl0gPSBjZmcua2V5O1xuICAgICAgICAgICAgY29udHJvbGxlci5wcmVzcyhjZmcua2V5KTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC45KSc7XG4gICAgICAgICAgICBidG4uc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMS41KSc7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICBpZiAodG91Y2gpIGRlbGV0ZSBhY3RpdmVUb3VjaGVzW3RvdWNoLmlkZW50aWZpZXJdO1xuICAgICAgICAgICAgY29udHJvbGxlci5yZWxlYXNlKGNmZy5rZXkpO1xuICAgICAgICAgICAgYnRuLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICAgICAgICBidG4uc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMSknO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE11bHRpLXRvdWNoIHN1cHBvcnQ6IGFsc28gY2FuY2VsIHdoZW4gdG91Y2ggaXMgY2FuY2VsbGVkXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgaWYgKHRvdWNoKSBkZWxldGUgYWN0aXZlVG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZShjZmcua2V5KTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgICAgICAgICAgYnRuLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEpJztcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBhdHRhY2tCdXR0b25zLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfSk7XG5cbiAgICB0b3VjaFVJLmFwcGVuZENoaWxkKGpveXN0aWNrWm9uZSk7XG4gICAgdG91Y2hVSS5hcHBlbmRDaGlsZChhdHRhY2tCdXR0b25zKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvdWNoVUkpO1xuXG4gICAgbGV0IGpveXN0aWNrQWN0aXZlID0gZmFsc2U7XG4gICAgbGV0IGpveXN0aWNrQ2VudGVyWCA9IDA7XG4gICAgbGV0IGpveXN0aWNrQ2VudGVyWSA9IDA7XG4gICAgbGV0IGpveXN0aWNrVG91Y2hJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICBqb3lzdGlja1pvbmUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGpveXN0aWNrVG91Y2hJZCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBqb3lzdGlja1RvdWNoSWQgPSB0b3VjaC5pZGVudGlmaWVyO1xuICAgICAgICBqb3lzdGlja0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZWN0ID0gam95c3RpY2tab25lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBqb3lzdGlja0NlbnRlclggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgam95c3RpY2tDZW50ZXJZID0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIHVwZGF0ZUpveXN0aWNrKHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICAgIH0pO1xuXG4gICAgam95c3RpY2tab25lLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCFqb3lzdGlja0FjdGl2ZSB8fCBqb3lzdGlja1RvdWNoSWQgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vIEZpbmQgb3VyIHNwZWNpZmljIHRvdWNoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS50b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS50b3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IGpveXN0aWNrVG91Y2hJZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUpveXN0aWNrKGUudG91Y2hlc1tpXS5jbGllbnRYLCBlLnRvdWNoZXNbaV0uY2xpZW50WSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGpveXN0aWNrWm9uZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gam95c3RpY2tUb3VjaElkKSB7XG4gICAgICAgICAgICAgICAgam95c3RpY2tBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBqb3lzdGlja1RvdWNoSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGpveXN0aWNrS25vYi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC01MCUsIC01MCUpJztcbiAgICAgICAgICAgICAgICByZWxlYXNlQWxsRGlyZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBqb3lzdGlja1pvbmUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IGpveXN0aWNrVG91Y2hJZCkge1xuICAgICAgICAgICAgICAgIGpveXN0aWNrQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgam95c3RpY2tUb3VjaElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBqb3lzdGlja0tub2Iuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSc7XG4gICAgICAgICAgICAgICAgcmVsZWFzZUFsbERpcmVjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdXBkYXRlSm95c3RpY2sgPSAoY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgZHggPSBjbGllbnRYIC0gam95c3RpY2tDZW50ZXJYO1xuICAgICAgICBjb25zdCBkeSA9IGNsaWVudFkgLSBqb3lzdGlja0NlbnRlclk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgY29uc3QgbWF4RGlzdGFuY2UgPSBNYXRoLm1pbihqb3lzdGlja1pvbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAzLCA1MCk7XG5cbiAgICAgICAgY29uc3QgY2xhbXBlZERpc3RhbmNlID0gTWF0aC5taW4oZGlzdGFuY2UsIG1heERpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG5cbiAgICAgICAgY29uc3Qga25vYlggPSBNYXRoLmNvcyhhbmdsZSkgKiBjbGFtcGVkRGlzdGFuY2U7XG4gICAgICAgIGNvbnN0IGtub2JZID0gTWF0aC5zaW4oYW5nbGUpICogY2xhbXBlZERpc3RhbmNlO1xuICAgICAgICBqb3lzdGlja0tub2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKC01MCUgKyAke2tub2JYfXB4KSwgY2FsYygtNTAlICsgJHtrbm9iWX1weCkpYDtcblxuICAgICAgICByZWxlYXNlQWxsRGlyZWN0aW9ucygpO1xuXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IG1heERpc3RhbmNlICogMC4zNTtcbiAgICAgICAgaWYgKGRpc3RhbmNlID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gTWF0aC5hYnMoZHkpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5wcmVzcyhkeCA+IDAgPyAnZCcgOiAnYScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnByZXNzKGR5ID4gMCA/ICdzJyA6ICd3Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVsZWFzZUFsbERpcmVjdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZSgndycpO1xuICAgICAgICBjb250cm9sbGVyLnJlbGVhc2UoJ2EnKTtcbiAgICAgICAgY29udHJvbGxlci5yZWxlYXNlKCdzJyk7XG4gICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZSgnZCcpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBqb3lzdGlja1pvbmUsIGF0dGFja0J1dHRvbnMgfTtcbn07XG4iLCJpbXBvcnQgeyBTcHJpdGUsIFBsYXlhYmxlIH0gZnJvbSBcIi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgbWFwU2V0dXAgfSBmcm9tIFwiLi9yZW5kZXIvY2FudmFzXCI7XG5pbXBvcnQgeyBjb25maWd1cmVLZXlQcmVzcyB9IGZyb20gXCIuL2V2ZW50cy9rZXlzXCI7XG5pbXBvcnQgeyBjb25maWd1cmVUb3VjaENvbnRyb2xzIH0gZnJvbSBcIi4vZXZlbnRzL3RvdWNoXCI7XG5pbXBvcnQgeyBhbmltYXRpb25CdWlsZGVyIH0gZnJvbSBcIi4vcmVuZGVyL2FuaW1hdGlvblwiO1xuaW1wb3J0IHtcbiAgTUFQX1dJRFRILFxuICBNQVBfSEVJR0hULFxuICBNQVBfWF9PRkZTRVQsXG4gIE1BUF9ZX09GRlNFVCxcbiAgQ0hBUl9YX09GRlNFVCxcbiAgQ0hBUl9ZX09GRlNFVCxcbiAgRU5FTVlfWF9PRkZTRVQsXG4gIEVORU1ZX1lfT0ZGU0VULFxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IFRveGljRHJhaW4gfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvdG94aWNEcmFpblwiO1xuaW1wb3J0IHsgU29mdEdyYXNzIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L3NvZnRHcmFzc1wiO1xuaW1wb3J0IHsgQ2l0cmljSGVhbGluZyB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC9jaXRyaWNIZWFsaW5nXCI7XG5pbXBvcnQgeyBQaG90b25CZWFtIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L3Bob3RvbkJlYW1cIjtcbmltcG9ydCB7IFNoYWRvd1N0ZXAgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvU2hhZG93U3RlcFwiO1xuaW1wb3J0IHsgVGh1bmRlclN0b3JtIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L25ld0F0dGFja3NcIjtcbmltcG9ydCB7IExpZ2h0bmluZ0JvbHQgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvbmV3QXR0YWNrc1wiO1xuaW1wb3J0IHsgUG9pc29uU3RpbmcgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvbmV3QXR0YWNrc1wiO1xuaW1wb3J0IHsgRmlyZWJhbGwgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvbmV3QXR0YWNrc1wiO1xuaW1wb3J0IHsgSWNlU2hhcmQgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3QvbmV3QXR0YWNrc1wiO1xuXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBCYWNrZ3JvdW5kU3ByaXRlIGZyb20gXCIuL2ltZy9ub3ZlbWJlci5wbmdcIjtcbmltcG9ydCBGb3JlZ3JvdW5kU3ByaXRlIGZyb20gXCIuL2ltZy9ub3ZlbWJlcl9mb3JlZ3JvdW5kLnBuZ1wiO1xuaW1wb3J0IFBsYXllclNwcml0ZSBmcm9tIFwiLi9pbWcvbWFpbl9jaGFyX3Nwcml0ZS5wbmdcIjtcbmltcG9ydCBFbmVteVNwcml0ZSBmcm9tIFwiLi9pbWcvbXVzaHJvb21fYm9zcy5wbmdcIjtcblxuY29uc3QgbG9hZEltYWdlID0gKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShpbWFnZSk7XG4gICAgfVxuICAgIGltYWdlLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgIHJlamVjdChlKVxuICAgIH1cbiAgfSlcbn07XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBiZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBmZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBlbmVteUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBpbWFnZXMgPSBbcGxheWVySW1nLCBiZ0ltZywgZmdJbWcsIGVuZW15SW1nXTtcbiAgXG4gIGJnSW1nLnNyYyA9IEJhY2tncm91bmRTcHJpdGU7XG4gIHBsYXllckltZy5zcmMgPSBQbGF5ZXJTcHJpdGU7XG4gIGZnSW1nLnNyYyA9IEZvcmVncm91bmRTcHJpdGU7XG4gIGVuZW15SW1nLnNyYyA9IEVuZW15U3ByaXRlO1xuICBhd2FpdCBQcm9taXNlLmFsbChpbWFnZXMubWFwKGxvYWRJbWFnZSkpO1xuXG4gIGNvbnN0IHBsYXllckZyYW1lcyA9IDE2O1xuXG5cblxuICBjb25zdCBiZyA9IG5ldyBTcHJpdGUoe1xuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiBNQVBfWF9PRkZTRVQsXG4gICAgICB5OiBNQVBfWV9PRkZTRVQsXG4gICAgfSxcbiAgICBpbWFnZTogYmdJbWcsXG4gICAgd2lkdGg6IE1BUF9XSURUSCxcbiAgICBoZWlnaHQ6IE1BUF9IRUlHSFQsXG4gICAgZGlyZWN0aW9uczoge1xuICAgICAgZG93bjogMCxcbiAgICAgIHVwOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBmZyA9IG5ldyBTcHJpdGUoe1xuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiBNQVBfWF9PRkZTRVQsXG4gICAgICB5OiBNQVBfWV9PRkZTRVQsXG4gICAgfSxcbiAgICBpbWFnZTogZmdJbWcsXG4gICAgd2lkdGg6IE1BUF9XSURUSCxcbiAgICBoZWlnaHQ6IE1BUF9IRUlHSFQsXG4gICAgZGlyZWN0aW9uczoge1xuICAgICAgZG93bjogMCxcbiAgICAgIHVwOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWFibGUoXG4gICAge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogQ0hBUl9YX09GRlNFVCxcbiAgICAgICAgeTogQ0hBUl9ZX09GRlNFVCxcbiAgICAgIH0sXG4gICAgICBpbWFnZTogcGxheWVySW1nLFxuICAgICAgd2lkdGg6IHBsYXllckltZy53aWR0aCAvIHBsYXllckZyYW1lcyxcbiAgICAgIGhlaWdodDogcGxheWVySW1nLmhlaWdodCxcbiAgICAgIHpvb206IDQsXG4gICAgICBmcmFtZXM6IHBsYXllckZyYW1lcyxcbiAgICAgIGRpcmVjdGlvbnM6IHtcbiAgICAgICAgZG93bjogMCxcbiAgICAgICAgdXA6IDQsXG4gICAgICAgIGxlZnQ6IDgsXG4gICAgICAgIHJpZ2h0OiAxMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBocDogMTAwMCxcbiAgICAgIGhwUmVnZW46IDFlLTQsXG4gICAgICBtYW5hOiAxMDAwLFxuICAgICAgbWFuYVJlZ2VuOiAwLjAwMSxcbiAgICAgIG11c2NsZTogMzAsXG4gICAgICBtYWdpazogMTUsXG4gICAgICBhcm1vdXI6IDMwLFxuICAgICAgaW1tdW5pdHk6IDMwLFxuICAgICAgYXR0YWNrczogW25ldyBTb2Z0R3Jhc3MoKSwgbmV3IENpdHJpY0hlYWxpbmcoKSwgbmV3IFNoYWRvd1N0ZXAoKSwgbmV3IFBob3RvbkJlYW0oKSwgbmV3IEZpcmViYWxsKCksIG5ldyBJY2VTaGFyZCgpLCBuZXcgTGlnaHRuaW5nQm9sdCgpLCBuZXcgUG9pc29uU3RpbmcoKSwgbmV3IFRodW5kZXJTdG9ybSgpXSxcbiAgICB9XG4gICk7XG4gIGNvbnN0IGVuZW15Q29vcmRzID0gW1xuICAgIHsgeDogMjY1LCB5OiAyMCB9LFxuICAgIHsgeDogODAwLCB5OiA0MDAgfSxcbiAgICB7IHg6IDEyMDAsIHk6IDIwMCB9LFxuICAgIHsgeDogNTAwLCB5OiA4MDAgfSxcbiAgICB7IHg6IDE1MDAsIHk6IDYwMCB9LFxuICAgIHsgeDogMzAwLCB5OiAxMjAwIH0sXG4gICAgeyB4OiAxMDAwLCB5OiAxMDAwIH0sXG4gIF07XG5cbiAgY29uc3QgZW5lbWllcyA9IGVuZW15Q29vcmRzLm1hcChlbmVteUNvb3JkcyA9PiB7XG4gICAgY29uc3QgZW5lbXkgPSBuZXcgUGxheWFibGUoe1xuICAgICAgICBwb3NpdGlvbjogZW5lbXlDb29yZHMsXG4gICAgICAgIGltYWdlOiBlbmVteUltZyxcbiAgICAgICAgd2lkdGg6IGVuZW15SW1nLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVuZW15SW1nLmhlaWdodCxcbiAgICAgICAgem9vbTogNCxcbiAgICAgICAgZGlyZWN0aW9uczoge1xuICAgICAgICAgIGRvd246IDAsXG4gICAgICAgICAgdXA6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhwOiAxMDAwLFxuICAgICAgICBocFJlZ2VuOiAxZS00LFxuICAgICAgICBtYW5hOiAxMDAwLFxuICAgICAgICBtYW5hUmVnZW46IDAuMDAxLFxuICAgICAgICBtdXNjbGU6IDEwLFxuICAgICAgICBtYWdpazogMTAsXG4gICAgICAgIGFybW91cjogMzUsXG4gICAgICAgIGltbXVuaXR5OiAzMCxcbiAgICAgICAgYXR0YWNrczogW25ldyBUb3hpY0RyYWluKCldLFxuICAgICAgfVxuICAgIClcbiAgICByZXR1cm4gZW5lbXk7XG4gIH0pO1xuXG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKHtcbiAgICBjb250cm9sbGVyOiB7XG4gICAgICB1cDogXCJ3XCIsXG4gICAgICBkb3duOiBcInNcIixcbiAgICAgIGxlZnQ6IFwiYVwiLFxuICAgICAgcmlnaHQ6IFwiZFwiLFxuICAgICAgYXR0YWNrczogW1wieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiXSxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY2FudmFzID0gbWFwU2V0dXAoTUFQX1dJRFRILCBNQVBfSEVJR0hUKTtcbiAgY29uZmlndXJlS2V5UHJlc3Moc3RhdGUuY29udHJvbGxlcik7XG4gIGNvbmZpZ3VyZVRvdWNoQ29udHJvbHMoc3RhdGUuY29udHJvbGxlcik7XG4gIFxuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtYnRuJyk7XG4gIGlmIChyZXN0YXJ0QnRuKSB7XG4gICAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBhbmltYXRpb25CdWlsZGVyKHsgYmcsIHBsYXllciwgc3RhdGUsIGNhbnZhcywgZmcsIGVuZW1pZXMgfSk7XG59O1xuXG5tYWluKCk7XG4iLCJpbXBvcnQgeyBnZXRDdHggfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7IE1PVkVTUEVFRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldENvbGxpZGVycywgY2hlY2tDb2xsaXNpb24gfSBmcm9tIFwiLi9jb2xsaWRlclwiO1xuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwiLi9jb2xsaWRlclwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCB7IFNwcml0ZSwgUGxheWFibGUgfSBmcm9tIFwiLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgaGFzS2V5IH0gZnJvbSBcIi4uL3V0aWxzL21pc2NcIjtcblxudHlwZSBNb3Rpb25Db250cm9sQXJncyA9IHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHN0YXRlOiBTdGF0ZTtcbiAgYmc6IFNwcml0ZTtcbiAgcGxheWVyOiBQbGF5YWJsZTtcbiAgZW5lbWllczogUGxheWFibGVbXTtcbiAgZmc6IFNwcml0ZTtcbiAgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdO1xufTtcblxudHlwZSBBbmltYXRpb25CdWlsZGVyQXJncyA9IHtcbiAgYmc6IFNwcml0ZTtcbiAgcGxheWVyOiBQbGF5YWJsZTtcbiAgZW5lbWllczogUGxheWFibGVbXTtcbiAgZmc6IFNwcml0ZTtcbiAgc3RhdGU6IFN0YXRlO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xufTtcblxuY29uc3QgRU5FTVlfQVRUQUNLX0NPT0xET1dOID0gOTA7XG5sZXQgZW5lbXlBdHRhY2tUaW1lciA9IDA7XG5cbmNvbnN0IG1vdGlvbkNvbnRyb2wgPSAoe1xuICBjdHgsXG4gIHN0YXRlLFxuICBwbGF5ZXIsXG4gIGVuZW1pZXMsXG4gIGNvbGxpZGVycyxcbn06IE1vdGlvbkNvbnRyb2xBcmdzKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgY29udHJvbGxlciB9ID0gc3RhdGU7XG4gIGxldCBmdXR1cmVLZXlTdGF0ZTogY29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBpZiAoY29udHJvbGxlci5pc1ByZXNzZWQoXCJ1cFwiKSkge1xuICAgIGZ1dHVyZUtleVN0YXRlLnkgPSAtTU9WRVNQRUVEO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIuaXNQcmVzc2VkKFwibGVmdFwiKSkge1xuICAgIGZ1dHVyZUtleVN0YXRlLnggPSAtTU9WRVNQRUVEO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIuaXNQcmVzc2VkKFwiZG93blwiKSkge1xuICAgIGZ1dHVyZUtleVN0YXRlLnkgPSBNT1ZFU1BFRUQ7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlci5pc1ByZXNzZWQoXCJyaWdodFwiKSkge1xuICAgIGZ1dHVyZUtleVN0YXRlLnggPSBNT1ZFU1BFRUQ7XG4gIH1cblxuICBjb25zdCBwbGF5ZXJDb2xsaXNpb25zID0gY29sbGlkZXJzLnNvbWUoKGNvbGxpZGVyOiBCb3hDb2xsaWRlcikgPT5cbiAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGNvbGxpZGVyLCBmdXR1cmVLZXlTdGF0ZSlcbiAgKTtcblxuICBjb25zdCBtb3ZlbWVudERpcmVjdGlvbiA9IGNvbnRyb2xsZXIuZ2V0TW92ZW1lbnQoKTtcbiAgaWYgKCFtb3ZlbWVudERpcmVjdGlvbikge1xuICAgIHBsYXllci5hbmltYXRlKFwiaWRsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IGF4aXMsIHZlbG9jaXR5IH0gPSBjb250cm9sbGVyLm1vdGlvblttb3ZlbWVudERpcmVjdGlvbl07XG4gICAgcGxheWVyLmFuaW1hdGUobW92ZW1lbnREaXJlY3Rpb24pO1xuICAgIGVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XG4gICAgICBpZiAoZW5lbXkuYWxpdmUoKSkgZW5lbXkuZm9sbG93KHBsYXllciwgY29sbGlkZXJzKTtcbiAgICB9KTtcblxuICAgIGlmICghcGxheWVyQ29sbGlzaW9ucyAmJiBoYXNLZXkocGxheWVyLnBvc2l0aW9uLCBheGlzKSkge1xuICAgICAgcGxheWVyLnBvc2l0aW9uW2F4aXNdICs9IHZlbG9jaXR5O1xuICAgIH1cbiAgfVxuXG4gIGVuZW15QXR0YWNrVGltZXIrKztcbiAgaWYgKGVuZW15QXR0YWNrVGltZXIgPj0gRU5FTVlfQVRUQUNLX0NPT0xET1dOKSB7XG4gICAgZW5lbXlBdHRhY2tUaW1lciA9IDA7XG4gICAgZW5lbWllcy5mb3JFYWNoKChlbmVteTogUGxheWFibGUpID0+IHtcbiAgICAgIGlmIChlbmVteS5hbGl2ZSgpKSB7XG4gICAgICAgIGVuZW15LnJlZ2VuKCkuYXR0YWNrKHBsYXllciwgMCwgY3R4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBsYXllci5yZWdlbigpO1xuICBjb25zdCBhdHRhY2tDaG9pY2UgPSBjb250cm9sbGVyLmdldEF0dGFjaygpO1xuICBpZiAoYXR0YWNrQ2hvaWNlICE9PSBudWxsICYmIGVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGNsb3Nlc3RFbmVteSA9IGVuZW1pZXMucmVkdWNlKChjbG9zZXN0LCBlbmVteSkgPT4ge1xuICAgICAgaWYgKCFlbmVteS5hbGl2ZSgpKSByZXR1cm4gY2xvc2VzdDtcbiAgICAgIGNvbnN0IGRpc3RUb0VuZW15ID0gTWF0aC5hYnMoZW5lbXkucG9zaXRpb24ueCAtIHBsYXllci5wb3NpdGlvbi54KSArIE1hdGguYWJzKGVuZW15LnBvc2l0aW9uLnkgLSBwbGF5ZXIucG9zaXRpb24ueSk7XG4gICAgICBjb25zdCBkaXN0VG9DbG9zZXN0ID0gTWF0aC5hYnMoY2xvc2VzdC5wb3NpdGlvbi54IC0gcGxheWVyLnBvc2l0aW9uLngpICsgTWF0aC5hYnMoY2xvc2VzdC5wb3NpdGlvbi55IC0gcGxheWVyLnBvc2l0aW9uLnkpO1xuICAgICAgcmV0dXJuIGRpc3RUb0VuZW15IDwgZGlzdFRvQ2xvc2VzdCA/IGVuZW15IDogY2xvc2VzdDtcbiAgICB9KTtcbiAgICBwbGF5ZXIuYXR0YWNrKGNsb3Nlc3RFbmVteSwgYXR0YWNrQ2hvaWNlLCBjdHgpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9ICh7XG4gIGJnLFxuICBwbGF5ZXIsXG4gIHN0YXRlLFxuICBjYW52YXMsXG4gIGZnLFxuICBlbmVtaWVzLFxufTogQW5pbWF0aW9uQnVpbGRlckFyZ3MpOiB2b2lkID0+IHtcbiAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBnZXRDdHgoY2FudmFzKTtcbiAgY29uc3QgY29sbGlkZXJzID0gZ2V0Q29sbGlkZXJzKCk7XG4gIFxuICBjb25zdCBhbmltYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIC8vIENsZWFyIHNjcmVlblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDBcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBcbiAgICAvLyBTYXZlIGNvbnRleHQgYW5kIGFwcGx5IGNhbWVyYSB0cmFuc2Zvcm1cbiAgICBjdHguc2F2ZSgpO1xuICAgIFxuICAgIC8vIFNjYWxlIHRvIGZpbGwgOToxNiBzY3JlZW5cbiAgICBjb25zdCBzY2FsZVggPSBjYW52YXMud2lkdGggLyAxOTIwO1xuICAgIGNvbnN0IHNjYWxlWSA9IGNhbnZhcy5oZWlnaHQgLyAxNDQwO1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xuICAgIFxuICAgIGN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgIFxuICAgIC8vIENlbnRlciB0aGUgdmlldyBvbiB0aGUgcGxheWVyXG4gICAgY29uc3Qgb2Zmc2V0WCA9IC1wbGF5ZXIucG9zaXRpb24ueCArICgxOTIwIC8gMik7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IC1wbGF5ZXIucG9zaXRpb24ueSArICgxNDQwIC8gMik7XG4gICAgY3R4LnRyYW5zbGF0ZShvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICBcbiAgICAvLyBEcmF3IGdhbWUgd29ybGRcbiAgICBiZy5kcmF3KGN0eCk7XG4gICAgZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcbiAgICAgIGlmIChlbmVteS5hbGl2ZSgpKSB7XG4gICAgICAgIGVuZW15LmRyYXcoY3R4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwbGF5ZXIuZHJhdyhjdHgpO1xuICAgIGZnLmRyYXcoY3R4KTtcbiAgICBcbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIFxuICAgIC8vIERyYXcgSFVEIChmaXhlZCBwb3NpdGlvbilcbiAgICBkcmF3SFVEKGN0eCwgcGxheWVyLCBjYW52YXMpO1xuICAgIFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgbW90aW9uQ29udHJvbCh7IGN0eCwgc3RhdGUsIGJnLCBwbGF5ZXIsIGVuZW1pZXMsIGZnLCBjb2xsaWRlcnMgfSk7XG4gIH07XG4gIGFuaW1hdGUoKTtcbn07XG5cbmNvbnN0IGRyYXdIVUQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBsYXllcjogUGxheWFibGUsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcbiAgY29uc3QgaHVkWCA9IDEwO1xuICBjb25zdCBodWRZID0gMTA7XG4gIGNvbnN0IGJhcldpZHRoID0gTWF0aC5taW4oMTUwLCBjYW52YXMud2lkdGggKiAwLjMpO1xuICBjb25zdCBiYXJIZWlnaHQgPSAxNDtcbiAgY29uc3Qgc3BhY2luZyA9IDY7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjgpXCI7XG4gIGN0eC5maWxsUmVjdChodWRYIC0gNCwgaHVkWSAtIDQsIGJhcldpZHRoICsgOCwgYmFySGVpZ2h0ICogMiArIHNwYWNpbmcgKyAyNCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICBjdHguZm9udCA9IFwiYm9sZCAxMnB4IG1vbm9zcGFjZVwiO1xuICBjdHguZmlsbFRleHQoYEhQOiAke01hdGguZmxvb3IocGxheWVyLmhwKX0vJHtwbGF5ZXIubWF4SHB9YCwgaHVkWCwgaHVkWSArIDEwKTtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjMzMzXCI7XG4gIGN0eC5maWxsUmVjdChodWRYLCBodWRZICsgMTYsIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gcGxheWVyLmhwIC8gcGxheWVyLm1heEhwID4gMC4zID8gXCIjZTc0YzNjXCIgOiBcIiNmZjAwMDBcIjtcbiAgY3R4LmZpbGxSZWN0KGh1ZFgsIGh1ZFkgKyAxNiwgYmFyV2lkdGggKiBNYXRoLm1heCgwLCBwbGF5ZXIuaHAgLyBwbGF5ZXIubWF4SHApLCBiYXJIZWlnaHQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgY3R4LmZpbGxUZXh0KGBNUDogJHtNYXRoLmZsb29yKHBsYXllci5tYW5hKX0vJHtwbGF5ZXIubWF4TWFuYX1gLCBodWRYLCBodWRZICsgMzYpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiMzMzNcIjtcbiAgY3R4LmZpbGxSZWN0KGh1ZFgsIGh1ZFkgKyA0MiwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBcIiMzNDk4ZGJcIjtcbiAgY3R4LmZpbGxSZWN0KGh1ZFgsIGh1ZFkgKyA0MiwgYmFyV2lkdGggKiBNYXRoLm1heCgwLCBwbGF5ZXIubWFuYSAvIHBsYXllci5tYXhNYW5hKSwgYmFySGVpZ2h0KTtcbiAgXG4gIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC43KVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNlNzRjM2NcIjtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMnB4IG1vbm9zcGFjZVwiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICAgIGN0eC5mb250ID0gXCJib2xkIDE2cHggbW9ub3NwYWNlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiUmVzdGFydCB0byBwbGF5IGFnYWluXCIsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcInN0YXJ0XCI7XG4gICAgXG4gICAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWJ0bicpO1xuICAgIGlmIChyZXN0YXJ0QnRuKSByZXN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59O1xuIiwiZXhwb3J0IGxldCBDQU5WQVNfU0NBTEUgPSAxO1xuXG5leHBvcnQgY29uc3QgbWFwU2V0dXAgPSAoXG4gIG1hcF93aWR0aDogbnVtYmVyLFxuICBtYXBfaGVpZ2h0OiBudW1iZXJcbik6IEhUTUxDYW52YXNFbGVtZW50ID0+IHtcbiAgY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICBcbiAgLy8gU2V0IGNhbnZhcyB0byBmaWxsIHRoZSBlbnRpcmUgc2NyZWVuXG4gIGNhbnZhcy53aWR0aCA9IHNjcmVlbldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gc2NyZWVuSGVpZ2h0O1xuICBjYW52YXMuc3R5bGUud2lkdGggPSBzY3JlZW5XaWR0aCArICdweCc7XG4gIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBzY3JlZW5IZWlnaHQgKyAncHgnO1xuICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBjYW52YXMuc3R5bGUubGVmdCA9ICcwJztcbiAgY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcbiAgXG4gIC8vIENhbGN1bGF0ZSBzY2FsZSB0byBjb3ZlciB0aGUgc2NyZWVuIChjcm9wIHNpZGVzIGlmIG5lZWRlZClcbiAgQ0FOVkFTX1NDQUxFID0gTWF0aC5tYXgoc2NyZWVuV2lkdGggLyBtYXBfd2lkdGgsIHNjcmVlbkhlaWdodCAvIG1hcF9oZWlnaHQpO1xuICBcbiAgY29uc3QgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gIFxuICByZXR1cm4gY2FudmFzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEN0eCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0+IHtcbiAgY29uc3QgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBjdHg7XG59O1xuIiwiaW1wb3J0IHsgY29sbGlzaW9ucyB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbGxpc2lvblwiO1xuXG5leHBvcnQgY29uc3QgbWFrZUdyaWQgPSAoY2h1bmtTaXplOiBudW1iZXIpOiBudW1iZXJbXVtdID0+IHtcbiAgICBjb25zdCBjb2xsaXNpb25HcmlkOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaXNpb25zLmxlbmd0aDsgaSArPSBjaHVua1NpemUpIHtcbiAgICAgICAgY29sbGlzaW9uR3JpZC5wdXNoKGNvbGxpc2lvbnMuc2xpY2UoaSwgaSArIGNodW5rU2l6ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGlzaW9uR3JpZFxufVxuIiwiaW1wb3J0IHsgbWFrZUdyaWQgfSBmcm9tIFwiLi9jb2xsaXNpb25zXCI7XG5pbXBvcnQgeyBJU19DT0xMSURFUiwgTUFQX1hfT0ZGU0VULCBNQVBfWV9PRkZTRVQsIFRJTEVTLCBUSUxFX0hFSUdIVCwgVElMRV9XSURUSCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQm94Q29sbGlkZXIgaW1wbGVtZW50cyBCb3gge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgcG9zaXRpb246IGNvb3JkaW5hdGVzO1xuICAgIGlzQ29sbGlkZXI6IGJvb2xlYW47XG4gICAgc3RhdGljIHdpZHRoID0gVElMRV9XSURUSDtcbiAgICBzdGF0aWMgaGVpZ2h0ID0gVElMRV9IRUlHSFQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uIH06IEJveFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJveENvbGxpZGVyLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJveENvbGxpZGVyLmhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgxMDAsIDAsIDAsIDAuNSlcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIEJveENvbGxpZGVyLndpZHRoLCBCb3hDb2xsaWRlci5oZWlnaHQpO1xuICAgICAgICBjdHguZm9udCA9IFwiMTBweCBBcmlhbFwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCgke3RoaXMucG9zaXRpb24ueH0sICR7dGhpcy5wb3NpdGlvbi55fSlgLCB0aGlzLnBvc2l0aW9uLnggKyAxMCwgdGhpcy5wb3NpdGlvbi55ICsgMjApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUsIDUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvb3Jkc0Fic1Bvc2l0aW9uID0gKGNvb3JkczogY29vcmRpbmF0ZXMpOiBjb29yZGluYXRlcyA9PiAoe1xuICAgIHg6IE1hdGguZmxvb3IoKGNvb3Jkcy54IC0gTUFQX1hfT0ZGU0VUKSAvIFRJTEVfV0lEVEgpLFxuICAgIHk6IE1hdGguZmxvb3IoKGNvb3Jkcy55IC0gTUFQX1lfT0ZGU0VUKSAvIFRJTEVfSEVJR0hUKSxcbn0pXG5cbmV4cG9ydCBjb25zdCBjb29yZHNNYXBQb3NpdGlvbiA9IChjb29yZHM6IGNvb3JkaW5hdGVzKTogY29vcmRpbmF0ZXMgPT4gKHtcbiAgICB4OiAoY29vcmRzLnggKiBUSUxFX1dJRFRIKSArIE1BUF9YX09GRlNFVCxcbiAgICB5OiAoY29vcmRzLnkgKiBUSUxFX0hFSUdIVCkgKyBNQVBfWV9PRkZTRVQsXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0Q29sbGlkZXJzID0gKCk6IEJveENvbGxpZGVyW10gPT4ge1xuICAgIGNvbnN0IGNvbGxpZGVyczogQm94Q29sbGlkZXJbXSA9IFtdO1xuICAgIGNvbnN0IGdyaWQ6IG51bWJlcltdW10gPSBtYWtlR3JpZChUSUxFUy5yb3dzKTtcbiAgICBncmlkLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBqKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29sID09PSBJU19DT0xMSURFUikge1xuICAgICAgICAgICAgICAgIGNvbGxpZGVycy5wdXNoKG5ldyBCb3hDb2xsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjb29yZHNNYXBQb3NpdGlvbih7IHg6IGosIHk6IGkgfSksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuICAgIHJldHVybiBjb2xsaWRlcnM7XG59XG5cbi8qKlxuICogICAgICAgICAgX19fX18gX19fX19cbiAqICAgICAgICAgIHwgUCB8IHwgQyB8XG4gKiAgICAgICAgICDigL7igL7igL7igL7igL4g4oC+4oC+4oC+4oC+4oC+XG4gKiAgICAgICAgIFxuICogQHBhcmFtIHNoYXBlMSBcbiAqIEBwYXJhbSBzaGFwZTIgXG4gKiBAcGFyYW0gcGFyYW0yIFxuICogQHBhcmFtIHRvbGVyYW5jZSBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgY29uc3QgY2hlY2tDb2xsaXNpb24gPSAoXG4gICAgc2hhcGUxOiBCb3gsXG4gICAgc2hhcGUyOiBCb3gsXG4gICAgeyB4LCB5IH06IGNvb3JkaW5hdGVzLFxuICAgIHRvbGVyYW5jZTogbnVtYmVyID0gMTZcbik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHNoYXBlMVBvc2l0aW9uID0gc2hhcGUxLnBvc2l0aW9uO1xuICAgIGNvbnN0IHNoYXBlMlBvc2l0aW9uID0gc2hhcGUyLnBvc2l0aW9uO1xuXG4gICAgcmV0dXJuICgoc2hhcGUxUG9zaXRpb24ueCArIHNoYXBlMS53aWR0aCA+IHNoYXBlMlBvc2l0aW9uLnggKyB4ICsgdG9sZXJhbmNlKSAvLyBwbGF5ZXIgaXMgdG8gdGhlIHJpZ2h0IG9mIGNvbGxpZGVyXG4gICAgJiYgKHNoYXBlMVBvc2l0aW9uLnggPCBzaGFwZTJQb3NpdGlvbi54ICsgeCArIHNoYXBlMi53aWR0aCAtIHRvbGVyYW5jZSkgLy8gcGxheWVyIGlzIHRvIHRoZSBsZWZ0IG9mIGNvbGxpZGVyXG4gICAgJiYgKHNoYXBlMVBvc2l0aW9uLnkgKyBzaGFwZTEuaGVpZ2h0ID4gc2hhcGUyUG9zaXRpb24ueSArIHkgKyB0b2xlcmFuY2UpIC8vIHBsYXllciBpcyBiZWxvdyBjb2xsaWRlclxuICAgICYmIChzaGFwZTFQb3NpdGlvbi55IDwgc2hhcGUyUG9zaXRpb24ueSArIHkgKyBzaGFwZTIuaGVpZ2h0IC0gdG9sZXJhbmNlKSkgLy8gcGxheWVyIGlzIGFib3ZlIGNvbGxpZGVyXG59XG4iLCJpbXBvcnQgeyBoYXNLZXkgfSBmcm9tIFwiLi4vdXRpbHMvbWlzY1wiO1xuaW1wb3J0IHsgQkFSX0hFSUdIVCwgQkFSX09GRlNFVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7XG4gIEJveENvbGxpZGVyLFxuICBjb29yZHNBYnNQb3NpdGlvbixcbiAgY29vcmRzTWFwUG9zaXRpb24sXG59IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXJcIjtcbmltcG9ydCB7IFBhdGhGaW5kZXIgfSBmcm9tIFwiLi9wYXRoZmluZGVyXCI7XG5pbXBvcnQgeyBjaGVja0NvbGxpc2lvbiB9IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XG4gIHBvc2l0aW9uOiBjb29yZGluYXRlcztcbiAgem9vbT86IG51bWJlcjtcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBmYWNlOiBudW1iZXI7XG4gIGZyYW1lcz86IG51bWJlcjtcbiAgY3VycmVudEZyYW1lOiBudW1iZXI7XG4gIGRpcmVjdGlvbnM6IERpcmVjdGlvbkZhY2VBcmdzO1xuICBmcmFtZXNQZXJEaXJlY3Rpb246IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgcG9zaXRpb24sXG4gICAgaW1hZ2UsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGRpcmVjdGlvbnMsXG4gICAgem9vbSA9IDEsXG4gICAgZnJhbWVzID0gMSxcbiAgfTogU3ByaXRlQXJncykge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGggKiB0aGlzLnpvb207XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKiB0aGlzLnpvb207XG4gICAgdGhpcy5mYWNlID0gMDtcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB0aGlzLmZyYW1lc1BlckRpcmVjdGlvbiA9IHRoaXMuZnJhbWVzIC8gT2JqZWN0LmtleXModGhpcy5kaXJlY3Rpb25zKS5sZW5ndGg7XG4gIH1cblxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogU3ByaXRlIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuY3VycmVudEZyYW1lLFxuICAgICAgMCxcbiAgICAgIHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcyxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0LFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgKHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcykgKiB0aGlzLnpvb20sXG4gICAgICB0aGlzLmltYWdlLmhlaWdodCAqIHRoaXMuem9vbVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXlhYmxlIGV4dGVuZHMgU3ByaXRlIGltcGxlbWVudHMgSVBsYXlhYmxlIHtcbiAgcG9zaXRpb246IGNvb3JkaW5hdGVzO1xuICB6b29tPzogbnVtYmVyO1xuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGZhY2U6IG51bWJlcjtcbiAgZnJhbWVzPzogbnVtYmVyO1xuICBjdXJyZW50RnJhbWU6IG51bWJlcjtcbiAgZGlyZWN0aW9uczogRGlyZWN0aW9uRmFjZUFyZ3M7XG4gIGZyYW1lc1BlckRpcmVjdGlvbjogbnVtYmVyO1xuICByZWZyZXNoUmF0ZTogbnVtYmVyO1xuICBtYXhIcDogbnVtYmVyO1xuICBocDogbnVtYmVyO1xuICBocFJlZ2VuOiBudW1iZXI7XG4gIGFybW91cjogbnVtYmVyO1xuICBpbW11bml0eTogbnVtYmVyO1xuICBtdXNjbGU6IG51bWJlcjtcbiAgbWFnaWs6IG51bWJlcjtcbiAgbWF4TWFuYTogbnVtYmVyO1xuICBtYW5hOiBudW1iZXI7XG4gIG1hbmFSZWdlbjogbnVtYmVyO1xuICBwYXRoOiBjb29yZGluYXRlc1tdO1xuICBhdHRhY2tzOiBJQXR0YWNrW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc3ByaXRlQXJnczogU3ByaXRlQXJncyxcbiAgICB7XG4gICAgICBocCxcbiAgICAgIGhwUmVnZW4sXG4gICAgICBtYW5hLFxuICAgICAgbWFuYVJlZ2VuLFxuICAgICAgbXVzY2xlLFxuICAgICAgbWFnaWssXG4gICAgICBhcm1vdXIsXG4gICAgICBpbW11bml0eSxcbiAgICAgIGF0dGFja3MsXG4gICAgfTogUGxheWFibGVBcmdzXG4gICkge1xuICAgIHN1cGVyKHNwcml0ZUFyZ3MpO1xuICAgIHRoaXMubWF4SHAgPSBocDtcbiAgICB0aGlzLmhwID0gaHA7XG4gICAgdGhpcy5ocFJlZ2VuID0gaHBSZWdlbjtcbiAgICB0aGlzLm1heE1hbmEgPSBtYW5hO1xuICAgIHRoaXMubWFuYSA9IG1hbmE7XG4gICAgdGhpcy5tYW5hUmVnZW4gPSBtYW5hUmVnZW47XG4gICAgdGhpcy5tdXNjbGUgPSBtdXNjbGU7XG4gICAgdGhpcy5tYWdpayA9IG1hZ2lrO1xuICAgIHRoaXMucmVmcmVzaFJhdGUgPSB0aGlzLmZyYW1lc1BlckRpcmVjdGlvbiAvICh0aGlzLmZyYW1lcyAqIDIpO1xuICAgIHRoaXMuYXJtb3VyID0gYXJtb3VyO1xuICAgIHRoaXMuaW1tdW5pdHkgPSBpbW11bml0eTtcbiAgICB0aGlzLnBhdGggPSBbXTtcbiAgICB0aGlzLmF0dGFja3MgPSBhdHRhY2tzO1xuICB9XG5cbiAgdGFrZURhbWFnZShkYW1hZ2U6IG51bWJlcik6IFBsYXlhYmxlIHtcbiAgICB0aGlzLmhwID0gTWF0aC5tYXgoMCwgdGhpcy5ocCAtIGRhbWFnZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBoZWFsKGFtb3VudDogbnVtYmVyKTogUGxheWFibGUge1xuICAgIHRoaXMuaHAgPSBNYXRoLm1pbih0aGlzLm1heEhwLCB0aGlzLmhwICsgYW1vdW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZHVjZU1hbmEoY29zdDogbnVtYmVyKTogUGxheWFibGUge1xuICAgIHRoaXMubWFuYSA9IE1hdGgubWF4KDAsIHRoaXMubWFuYSAtIGNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWRsZUFuaW1hdGlvbigpOiBQbGF5YWJsZSB7XG4gICAgZm9yIChsZXQgZnJhbWVJZHggb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpcmVjdGlvbnMpKSB7XG4gICAgICBjb25zdCBmYWNlID0gdGhpcy5jdXJyZW50RnJhbWUgLyB0aGlzLmZyYW1lcztcbiAgICAgIGlmIChmYWNlIDwgZnJhbWVJZHgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmZhY2UgPSBmcmFtZUlkeDtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuZmFjZSkgKiB0aGlzLmZyYW1lcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGtBbmltYXRpb24oZGlyZWN0aW9uOiBzdHJpbmcpOiBQbGF5YWJsZSB7XG4gICAgaWYgKCFoYXNLZXkodGhpcy5kaXJlY3Rpb25zLCBkaXJlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdEZyYW1lID0gdGhpcy5kaXJlY3Rpb25zW2RpcmVjdGlvbl07XG4gICAgY29uc3QgbGFzdEZyYW1lID0gdGhpcy5kaXJlY3Rpb25zW2RpcmVjdGlvbl0gKyB0aGlzLmZyYW1lc1BlckRpcmVjdGlvbjtcbiAgICB0aGlzLmZhY2UgPVxuICAgICAgdGhpcy5mYWNlID49IGZpcnN0RnJhbWUgJiYgdGhpcy5mYWNlIDwgbGFzdEZyYW1lXG4gICAgICAgID8gdGhpcy5mYWNlICsgdGhpcy5yZWZyZXNoUmF0ZVxuICAgICAgICA6IGZpcnN0RnJhbWU7XG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuZmFjZSkgKiB0aGlzLmZyYW1lcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFuaW1hdGUoZGlyZWN0aW9uOiBzdHJpbmcpOiBQbGF5YWJsZSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIHRoaXMuaWRsZUFuaW1hdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhbGtBbmltYXRpb24oZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ocCA+IDA7XG4gIH1cblxuICByZWdlbigpOiBQbGF5YWJsZSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmhwID0gTWF0aC5taW4odGhpcy5tYXhIcCwgdGhpcy5ocCArIHRoaXMubWF4SHAgKiB0aGlzLmhwUmVnZW4pO1xuICAgIHRoaXMubWFuYSA9IE1hdGgubWluKHRoaXMubWF4TWFuYSwgdGhpcy5tYW5hICsgdGhpcy5tYXhNYW5hICogdGhpcy5tYW5hUmVnZW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZm9sbG93KHRhcmdldDogUGxheWFibGUsIGNvbGxpZGVyczogQm94Q29sbGlkZXJbXSk6IFBsYXlhYmxlIHtcbiAgICBpZiAoIXRhcmdldC5hbGl2ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gY29vcmRzQWJzUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBjb29yZHNBYnNQb3NpdGlvbih0YXJnZXQucG9zaXRpb24pO1xuICAgIGlmICh0aGlzLnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnBhdGggPSBuZXcgUGF0aEZpbmRlcigpXG4gICAgICAgIC5maW5kKGN1cnJlbnRQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24sIGNvbGxpZGVycylcbiAgICAgICAgLm1hcChjb29yZHNNYXBQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGF0aC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3Jhd2wodGhpcy5wYXRoLnNoaWZ0KCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyYXdsKGNvb3JkczogY29vcmRpbmF0ZXMpOiBQbGF5YWJsZSB7XG4gICAgY29uc3QgeCA9IGNvb3Jkcy54IC0gdGhpcy5wb3NpdGlvbi54O1xuICAgIGNvbnN0IHkgPSBjb29yZHMueSAtIHRoaXMucG9zaXRpb24ueTtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0geDtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGF0dGFjayhcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGNob2ljZTogbnVtYmVyIHwgbnVsbCxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBQbGF5YWJsZSB7XG4gICAgaWYgKHRoaXMuaHAgPT09IDAgfHwgY2hvaWNlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29uc3QgYXR0YWNrOiBJQXR0YWNrID0gdGhpcy5hdHRhY2tzW2Nob2ljZV07XG4gICAgY29uc3QgaW5SYW5nZSA9IGNoZWNrQ29sbGlzaW9uKHRhcmdldCwgdGhpcywgeyB4OiAwLCB5OiAwIH0sIC1hdHRhY2sucmFuZ2UpO1xuXG4gICAgaWYgKGluUmFuZ2UpIHtcbiAgICAgIHRhcmdldC50YWtlRGFtYWdlKGF0dGFjay5kYW1hZ2UpO1xuICAgICAgaWYgKGF0dGFjay5yZW5kZXIpIHtcbiAgICAgICAgYXR0YWNrLnJlbmRlcih0aGlzLCB0YXJnZXQsIGN0eCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFBsYXlhYmxlIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuY3VycmVudEZyYW1lLFxuICAgICAgMCxcbiAgICAgIHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcyxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0LFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgKHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcykgKiB0aGlzLnpvb20sXG4gICAgICB0aGlzLmltYWdlLmhlaWdodCAqIHRoaXMuem9vbVxuICAgICk7XG5cbiAgICBjb25zdCBiYXJXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgYmFySGVpZ2h0ID0gQkFSX0hFSUdIVDtcbiAgICBjb25zdCBiYXJPZmZzZXQgPSBCQVJfT0ZGU0VUO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzMzM1wiO1xuICAgIGN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSAtIGJhck9mZnNldCAtIGJhckhlaWdodCAqIDIsXG4gICAgICBiYXJXaWR0aCxcbiAgICAgIGJhckhlaWdodFxuICAgICk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2U3NGMzY1wiO1xuICAgIGN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSAtIGJhck9mZnNldCAtIGJhckhlaWdodCAqIDIsXG4gICAgICBiYXJXaWR0aCAqICh0aGlzLmhwIC8gdGhpcy5tYXhIcCksXG4gICAgICBiYXJIZWlnaHRcbiAgICApO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzMzM1wiO1xuICAgIGN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSAtIGJhck9mZnNldCAtIGJhckhlaWdodCxcbiAgICAgIGJhcldpZHRoLFxuICAgICAgYmFySGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMzQ5OGRiXCI7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55IC0gYmFyT2Zmc2V0IC0gYmFySGVpZ2h0LFxuICAgICAgYmFyV2lkdGggKiAodGhpcy5tYW5hIC8gdGhpcy5tYXhNYW5hKSxcbiAgICAgIGJhckhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgVElMRVMsIERJUkVDVElPTlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCb3hDb2xsaWRlciwgY29vcmRzQWJzUG9zaXRpb24gfSBmcm9tIFwiLi4vcmVuZGVyL2NvbGxpZGVyXCI7XG5pbXBvcnQgeyBtYWtlR3JpZCB9IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXIvY29sbGlzaW9uc1wiO1xuaW1wb3J0IHsgbWFuaGF0dGFuRGlzdGFuY2UgfSBmcm9tIFwiLi4vdXRpbHMvbWlzY1wiO1xuaW1wb3J0IHsgUHJpb3JpdHlRdWV1ZSB9IGZyb20gXCIuLi91dGlscy9wcmlvcml0eVF1ZXVlXCI7XG5cbmNvbnN0IGVuY29kZUNvb3JkcyA9IChjb29yZGluYXRlczogY29vcmRpbmF0ZXMpID0+XG4gIGAke2Nvb3JkaW5hdGVzLnh9LSR7Y29vcmRpbmF0ZXMueX1gO1xuXG5leHBvcnQgY2xhc3MgUGF0aEZpbmRlciB7XG4gIHZpc2l0ZWQ6IFNldDxzdHJpbmc+O1xuICBzdXJyb3VuZGluZ3M6IFByaW9yaXR5UXVldWU8QVN0YXJSZWNvcmQ+O1xuICBwYXRoczogVGlsZU1hcDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhdGhzID0ge307XG4gICAgdGhpcy52aXNpdGVkID0gbmV3IFNldCgpO1xuICAgIHRoaXMuc3Vycm91bmRpbmdzID0gbmV3IFByaW9yaXR5UXVldWUoKTtcbiAgfVxuXG4gIGlzU2FtZUNvb3JkcyhjMTogY29vcmRpbmF0ZXMsIGMyOiBjb29yZGluYXRlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjMS54ID09PSBjMi54ICYmIGMxLnkgPT09IGMyLnk7XG4gIH1cblxuICBidWlsZFBhdGgoa2V5OiBzdHJpbmcpOiBjb29yZGluYXRlc1tdIHtcbiAgICBpZiAoIXRoaXMucGF0aHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBwYXRoOiBjb29yZGluYXRlc1tdID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLnBhdGhzW2tleV07XG4gICAgd2hpbGUgKGN1cnJlbnQucGFyZW50KSB7XG4gICAgICBwYXRoLnB1c2goY3VycmVudC5wb3NpdGlvbik7XG4gICAgICBjdXJyZW50ID0gdGhpcy5wYXRoc1tlbmNvZGVDb29yZHMoY3VycmVudC5wYXJlbnQpXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGgucmV2ZXJzZSgpO1xuICB9XG5cbiAgZmluZChcbiAgICBzb3VyY2U6IGNvb3JkaW5hdGVzLFxuICAgIGRlc3RpbmF0aW9uOiBjb29yZGluYXRlcyxcbiAgICBjb2xsaWRlcnM6IEJveENvbGxpZGVyW11cbiAgKTogY29vcmRpbmF0ZXNbXSB7XG4gICAgY29uc3Qgc3JjS2V5ID0gZW5jb2RlQ29vcmRzKHNvdXJjZSk7XG4gICAgbGV0IHBhdGg6IGNvb3JkaW5hdGVzW10gPSBbXTtcbiAgICBjb25zdCBhU3RhclJlY29yZDogQVN0YXJSZWNvcmQgPSB7XG4gICAgICBmU2NvcmU6IDAsXG4gICAgICBnU2NvcmU6IDAsXG4gICAgICBoU2NvcmU6IDAsXG4gICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICBwb3NpdGlvbjogc291cmNlLFxuICAgICAga2V5OiBzcmNLZXksXG4gICAgfTtcbiAgICB0aGlzLnZpc2l0ZWQuYWRkKHNyY0tleSk7XG4gICAgdGhpcy5wYXRoc1tzcmNLZXldID0gYVN0YXJSZWNvcmQ7XG4gICAgdGhpcy5zdXJyb3VuZGluZ3MubnEoMCwgYVN0YXJSZWNvcmQpO1xuXG4gICAgd2hpbGUgKCF0aGlzLnN1cnJvdW5kaW5ncy5lbXB0eSgpKSB7XG4gICAgICBjb25zdCBjdXJyZW50OiBBU3RhclJlY29yZCA9IHRoaXMuc3Vycm91bmRpbmdzLmRxKCk7XG4gICAgICB0aGlzLnBhdGhzW2N1cnJlbnQua2V5XSA9IGN1cnJlbnQ7XG5cbiAgICAgIGlmICh0aGlzLmlzU2FtZUNvb3JkcyhjdXJyZW50LnBvc2l0aW9uLCBkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRQYXRoKGN1cnJlbnQua2V5KTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIERJUkVDVElPTlMpIHtcbiAgICAgICAgY29uc3QgW2hvcml6b250YWwsIHZlcnRpY2FsXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgY29uc3QgbmV3Q29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgeDogY3VycmVudC5wb3NpdGlvbi54ICsgaG9yaXpvbnRhbCxcbiAgICAgICAgICB5OiBjdXJyZW50LnBvc2l0aW9uLnkgKyB2ZXJ0aWNhbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3S2V5ID0gZW5jb2RlQ29vcmRzKG5ld0Nvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgaXNCb3VuZGFyeSA9IGNvbGxpZGVycy5zb21lKChjb2xsaWRlcjogQm94Q29sbGlkZXIpID0+XG4gICAgICAgICAgdGhpcy5pc1NhbWVDb29yZHMoXG4gICAgICAgICAgICBuZXdDb29yZGluYXRlcyxcbiAgICAgICAgICAgIGNvb3Jkc0Fic1Bvc2l0aW9uKGNvbGxpZGVyLnBvc2l0aW9uKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaXNCb3VuZGFyeSB8fCB0aGlzLnZpc2l0ZWQuaGFzKG5ld0tleSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdTY29yZSA9IGN1cnJlbnQuZ1Njb3JlICsgMTtcbiAgICAgICAgY29uc3QgaFNjb3JlID0gbWFuaGF0dGFuRGlzdGFuY2UobmV3Q29vcmRpbmF0ZXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgY29uc3QgZlNjb3JlID0gZ1Njb3JlICsgaFNjb3JlO1xuXG4gICAgICAgIHRoaXMudmlzaXRlZC5hZGQobmV3S2V5KTtcbiAgICAgICAgdGhpcy5zdXJyb3VuZGluZ3MubnEoZlNjb3JlLCB7XG4gICAgICAgICAgZlNjb3JlLFxuICAgICAgICAgIGdTY29yZSxcbiAgICAgICAgICBoU2NvcmUsXG4gICAgICAgICAgcGFyZW50OiBjdXJyZW50LnBvc2l0aW9uLFxuICAgICAgICAgIHBvc2l0aW9uOiBuZXdDb29yZGluYXRlcyxcbiAgICAgICAgICBrZXk6IG5ld0tleSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNT1ZFU1BFRUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBoYXNLZXkgfSBmcm9tIFwiLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgbW90aW9uOiB7IFtrZXk6IHN0cmluZ106IHsga2V5OiBzdHJpbmcsIGF4aXM6IHN0cmluZywgdmVsb2NpdHk6IG51bWJlciwgcHJlc3NlZDogYm9vbGVhbiB9IH1cbiAgICBhdHRhY2s6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICBkaXJlY3Rpb25CaW5kaW5nczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIGF0dGFja0JpbmRpbmdzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9XG4gICAgYWN0aXZlQXR0YWNrczogYm9vbGVhbltdO1xuXG4gICAgY29uc3RydWN0b3IoeyB1cCwgZG93biwgbGVmdCwgcmlnaHQsIGF0dGFja3MgfTogRGlyZWN0aW9uS2V5QXJncykge1xuICAgICAgICB0aGlzLm1vdGlvbiA9IHtcbiAgICAgICAgICAgIHVwOiB7XG4gICAgICAgICAgICAgICAga2V5OiB1cCxcbiAgICAgICAgICAgICAgICBheGlzOiBcInlcIixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogLU1PVkVTUEVFRCxcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiB7XG4gICAgICAgICAgICAgICAga2V5OiBkb3duLFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieVwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBNT1ZFU1BFRUQsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIGtleTogbGVmdCxcbiAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogLU1PVkVTUEVFRCxcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAga2V5OiByaWdodCxcbiAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogTU9WRVNQRUVELFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uQmluZGluZ3MgPSB7XG4gICAgICAgICAgICBbdXBdOiBcInVwXCIsXG4gICAgICAgICAgICBbZG93bl06IFwiZG93blwiLFxuICAgICAgICAgICAgW2xlZnRdOiBcImxlZnRcIixcbiAgICAgICAgICAgIFtyaWdodF06IFwicmlnaHRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXR0YWNrQmluZGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5hY3RpdmVBdHRhY2tzID0gYXR0YWNrcy5tYXAoXyA9PiBmYWxzZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFja0JpbmRpbmdzW2F0dGFja3NbaV1dID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlkbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm1vdGlvbikuZXZlcnkoZGlyZWN0aW9uID0+ICF0aGlzLm1vdGlvbltkaXJlY3Rpb25dLnByZXNzZWQpXG4gICAgfVxuXG4gICAgZ2V0TW92ZW1lbnQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBPYmplY3Qua2V5cyh0aGlzLm1vdGlvbikuZmlsdGVyKGRpcmVjdGlvbiA9PiB0aGlzLm1vdGlvbltkaXJlY3Rpb25dLnByZXNzZWQpO1xuICAgICAgICBpZiAoZGlyZWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25zWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldEF0dGFjaygpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgY29uc3QgYXR0YWNrSW5kaWNlcyA9IHRoaXMuYWN0aXZlQXR0YWNrcy5tYXAoKGF0dGFja0FjdGl2ZSwgaSkgPT4gYXR0YWNrQWN0aXZlID8gaSA6IC0xKS5maWx0ZXIoYXR0YWNrSWR4ID0+IGF0dGFja0lkeCAhPT0gLTEpO1xuICAgICAgICBpZiAoYXR0YWNrSW5kaWNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tJbmRpY2VzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByZXNzKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChoYXNLZXkodGhpcy5kaXJlY3Rpb25CaW5kaW5ncywga2V5KSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb25CaW5kaW5nc1trZXldO1xuICAgICAgICAgICAgdGhpcy5tb3Rpb25bZGlyZWN0aW9uXS5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNLZXkodGhpcy5hdHRhY2tCaW5kaW5ncywga2V5KSkge1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrID0gdGhpcy5hdHRhY2tCaW5kaW5nc1trZXldO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVBdHRhY2tzW2F0dGFja10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVsZWFzZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoaGFzS2V5KHRoaXMuZGlyZWN0aW9uQmluZGluZ3MsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uQmluZGluZ3Nba2V5XTtcbiAgICAgICAgICAgIHRoaXMubW90aW9uW2RpcmVjdGlvbl0ucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc0tleSh0aGlzLmF0dGFja0JpbmRpbmdzLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB0aGlzLmF0dGFja0JpbmRpbmdzW2tleV07XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja3NbYXR0YWNrXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNQcmVzc2VkKGtleTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChoYXNLZXkodGhpcy5tb3Rpb24sIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdGlvbltrZXldLnByZXNzZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzS2V5KHRoaXMuYWN0aXZlQXR0YWNrcywga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQXR0YWNrc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gICAgY29udHJvbGxlcjogQ29udHJvbGxlclxuICAgIGNvbnN0cnVjdG9yKHsgY29udHJvbGxlciB9OiB7IGNvbnRyb2xsZXI6IERpcmVjdGlvbktleUFyZ3MgfSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihjb250cm9sbGVyKVxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBoYXNLZXkgPSA8Tz4ob2JqOiBPLCBrZXk6IFByb3BlcnR5S2V5KToga2V5IGlzIGtleW9mIE8gPT4ge1xuICAgIHJldHVybiBrZXkgaW4gb2JqXG59O1xuXG5cbmV4cG9ydCBjb25zdCBtYW5oYXR0YW5EaXN0YW5jZSA9IChhOiBjb29yZGluYXRlcywgYjogY29vcmRpbmF0ZXMpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhhLnggLSBiLngpICsgTWF0aC5hYnMoYS55IC0gYi55KVxufVxuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cbiIsImV4cG9ydCBjbGFzcyBQcmlvcml0eVF1ZXVlPFQ+IHtcbiAgICBpdGVtczoge3ByaW9yaXR5OiBudW1iZXIsIGVsZW1lbnQ6IFR9W11cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBucShwcmlvcml0eTogbnVtYmVyLCBlbGVtZW50OiBUKTogUHJpb3JpdHlRdWV1ZTxUPiB7XG4gICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgbWlkID0gMDtcbiAgICAgICAgbGV0IHBvcyA9IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtwcmlvcml0eSwgZWxlbWVudH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCkge1xuICAgICAgICAgICAgbWlkID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbbWlkXS5wcmlvcml0eSA+IHByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSBtaWQgLSAxO1xuICAgICAgICAgICAgICAgIHBvcyA9IG1pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IG1pZCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShwb3MsIDAsIHtwcmlvcml0eSwgZWxlbWVudH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRxKCk6IFQge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnNoaWZ0KCkuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGVtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPT09IDA7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvY2l0cmljSGVhbGluZy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvbmV3QXR0YWNrcy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvcGhvdG9uQmVhbS50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvU2hhZG93U3RlcC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hdHRhY2tzL2F0dGFja0xpc3Qvc29mdEdyYXNzLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC90b3hpY0RyYWluLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvY29yZS50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb25zdGFudHMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZGF0YS9jb2xsaXNpb24udHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZXZlbnRzL2tleXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZXZlbnRzL3RvdWNoLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9hbmltYXRpb24udHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmVuZGVyL2NhbnZhcy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZW5kZXIvY29sbGlkZXIvY29sbGlzaW9ucy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZW5kZXIvY29sbGlkZXIvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc3ByaXRlcy9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zcHJpdGVzL3BhdGhmaW5kZXIudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc3RhdGUvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMvaW5kZXguZC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91dGlscy9taXNjLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdXRpbHMvcHJpb3JpdHlRdWV1ZS50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
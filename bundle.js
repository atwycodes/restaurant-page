/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/pizza.jpg */ "./src/pics/pizza.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  font-size: 16px;\r\n  font-family: Roboto, sans-serif;\r\n  --primary: #062462;\r\n  --secondary: #e5e5e5;\r\n  background-color: var(--primary);\r\n  color: var(--secondary);\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n}\r\n\r\n#content {\r\n  display: flex; \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 100%;\r\n}\r\n\r\n/* header */\r\n\r\n.header {\r\n  display: grid; \r\n  grid-template-columns: repeat(2,1fr);\r\n  align-items: center;\r\n  padding: 20px 10%;\r\n}\r\n\r\n.logo {\r\n  font-size: 2.5rem; \r\n  font-weight: 900; \r\n  font-style: italic;\r\n}\r\n\r\n.nav-bar__container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.nav-bar__container > * {\r\n  font-size: 1.6rem; \r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  transition: all 300ms;\r\n}\r\n\r\n.nav-bar__container > *:hover {\r\n  box-shadow: 0px 3px 0px 0px var(--secondary);\r\n  transition: all 300ms;\r\n}\r\n\r\n.active {\r\n  box-shadow: 0px 3px 0px 0px var(--secondary);\r\n}\r\n\r\n/* home */\r\n\r\n.home__image {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.home {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(2,1fr);\r\n}\r\n\r\n.home__container {\r\n  justify-self: center;\r\n  align-self: center;\r\n  height: fit-content;\r\n  padding: 5% 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly; \r\n  align-items: center; \r\n  text-align: center;\r\n  gap: 50px;\r\n}\r\n\r\n.home__copy {\r\n  font-size: 1.6rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.home__order-btn{\r\n  align-self: center;\r\n  cursor: pointer;\r\n  padding: 15px 25px;\r\n  background-color: var(--secondary);\r\n  color: var(--primary);\r\n  border: solid 1px var(--secondary); border-radius: 15px;\r\n  font-size: 1rem;\r\n  transition: all 300ms;\r\n}\r\n\r\n.home__order-btn:hover {\r\n  opacity: 0.6;\r\n}\r\n\r\n.home__info-box{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.home__address-wrapper,\r\n.home__hours-wrapper {\r\n  display: flex;\r\n  justify-content: flex-start; align-items: center;\r\n  padding: 20px 0px;\r\n  gap: 30px;\r\n}\r\n\r\n.home__address-icon,\r\n.home__hours-icon {\r\n  width: 30px; height: 30px;\r\n}\r\n\r\n.home__address-copy,\r\n.home__hours-copy {\r\n}\r\n\r\n/* menu */\r\n\r\n.menu {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));\r\n  justify-items: center; align-items: center;\r\n  gap: 20px;\r\n  padding: 10% 10%;\r\n}\r\n\r\n.menu__card {\r\n  width: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center; align-items: center;\r\n  border: solid 2px var(--secondary); border-radius: 15px;\r\n  background-color: var(--secondary); \r\n  font-weight: 600 ; color: var(--primary);\r\n  padding: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu__name,\r\n.menu__price {\r\n  padding-top: 10px;\r\n}\r\n\r\n/* contact */\r\n\r\n.contact {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5% 10%;\r\n}\r\n\r\n.contact__copy {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.contact__email {\r\n  font-size: 1.2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n/* footer */\r\n\r\n.footer {\r\n  color: var(--light-shade);\r\n  height: clamp(5%,50px,10%);\r\n  background-color: var(--primary);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px 10%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--secondary);\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,+BAA+B;EAC/B,kBAAkB;EAClB,oBAAoB;EACpB,gCAAgC;EAChC,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;AACd;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,4CAA4C;EAC5C,qBAAqB;AACvB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA,SAAS;;AAET;EACE,yDAAwC;EACxC,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,kCAAkC;EAClC,qBAAqB;EACrB,kCAAkC,EAAE,mBAAmB;EACvD,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,2BAA2B,EAAE,mBAAmB;EAChD,iBAAiB;EACjB,SAAS;AACX;;AAEA;;EAEE,WAAW,EAAE,YAAY;AAC3B;;AAEA;;AAEA;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,0DAA0D;EAC1D,qBAAqB,EAAE,mBAAmB;EAC1C,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB,EAAE,mBAAmB;EAC5C,kCAAkC,EAAE,mBAAmB;EACvD,kCAAkC;EAClC,iBAAiB,EAAE,qBAAqB;EACxC,aAAa;EACb,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,WAAW;;AAEX;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,gCAAgC;EAChC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;AACzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  font-size: 16px;\r\n  font-family: Roboto, sans-serif;\r\n  --primary: #062462;\r\n  --secondary: #e5e5e5;\r\n  background-color: var(--primary);\r\n  color: var(--secondary);\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n}\r\n\r\n#content {\r\n  display: flex; \r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 100%;\r\n}\r\n\r\n/* header */\r\n\r\n.header {\r\n  display: grid; \r\n  grid-template-columns: repeat(2,1fr);\r\n  align-items: center;\r\n  padding: 20px 10%;\r\n}\r\n\r\n.logo {\r\n  font-size: 2.5rem; \r\n  font-weight: 900; \r\n  font-style: italic;\r\n}\r\n\r\n.nav-bar__container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.nav-bar__container > * {\r\n  font-size: 1.6rem; \r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  transition: all 300ms;\r\n}\r\n\r\n.nav-bar__container > *:hover {\r\n  box-shadow: 0px 3px 0px 0px var(--secondary);\r\n  transition: all 300ms;\r\n}\r\n\r\n.active {\r\n  box-shadow: 0px 3px 0px 0px var(--secondary);\r\n}\r\n\r\n/* home */\r\n\r\n.home__image {\r\n  background-image: url(../pics/pizza.jpg);\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.home {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(2,1fr);\r\n}\r\n\r\n.home__container {\r\n  justify-self: center;\r\n  align-self: center;\r\n  height: fit-content;\r\n  padding: 5% 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly; \r\n  align-items: center; \r\n  text-align: center;\r\n  gap: 50px;\r\n}\r\n\r\n.home__copy {\r\n  font-size: 1.6rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.home__order-btn{\r\n  align-self: center;\r\n  cursor: pointer;\r\n  padding: 15px 25px;\r\n  background-color: var(--secondary);\r\n  color: var(--primary);\r\n  border: solid 1px var(--secondary); border-radius: 15px;\r\n  font-size: 1rem;\r\n  transition: all 300ms;\r\n}\r\n\r\n.home__order-btn:hover {\r\n  opacity: 0.6;\r\n}\r\n\r\n.home__info-box{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.home__address-wrapper,\r\n.home__hours-wrapper {\r\n  display: flex;\r\n  justify-content: flex-start; align-items: center;\r\n  padding: 20px 0px;\r\n  gap: 30px;\r\n}\r\n\r\n.home__address-icon,\r\n.home__hours-icon {\r\n  width: 30px; height: 30px;\r\n}\r\n\r\n.home__address-copy,\r\n.home__hours-copy {\r\n}\r\n\r\n/* menu */\r\n\r\n.menu {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));\r\n  justify-items: center; align-items: center;\r\n  gap: 20px;\r\n  padding: 10% 10%;\r\n}\r\n\r\n.menu__card {\r\n  width: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center; align-items: center;\r\n  border: solid 2px var(--secondary); border-radius: 15px;\r\n  background-color: var(--secondary); \r\n  font-weight: 600 ; color: var(--primary);\r\n  padding: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu__name,\r\n.menu__price {\r\n  padding-top: 10px;\r\n}\r\n\r\n/* contact */\r\n\r\n.contact {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5% 10%;\r\n}\r\n\r\n.contact__copy {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.contact__email {\r\n  font-size: 1.2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n/* footer */\r\n\r\n.footer {\r\n  color: var(--light-shade);\r\n  height: clamp(5%,50px,10%);\r\n  background-color: var(--primary);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px 10%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--secondary);\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/functions/contact.js":
/*!**********************************!*\
  !*** ./src/functions/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContact (body) {
  body.appendChild(createContact())
  document.querySelector('.nav-bar__contact').classList.add('active')
  document.querySelector('.nav-bar__home').classList.remove('active')
  document.querySelector('.nav-bar__menu').classList.remove('active')
} 

function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')
  
  const contactCopy = document.createElement('div')
  contactCopy.innerHTML = 'For enquiries or general feedback, write to us at:'
  contactCopy.classList.add('contact__copy')

  const email = document.createElement('div')
  email.innerHTML = 'customerfeedback@totallyreal.com'
  email.classList.add('contact__email')

  contact.appendChild(contactCopy)
  contact.appendChild(email)

  return contact
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/functions/home.js":
/*!*******************************!*\
  !*** ./src/functions/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_location_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/location.svg */ "./src/icons/location.svg");
/* harmony import */ var _icons_time_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/time.svg */ "./src/icons/time.svg");



function loadHome (body) {
  body.appendChild(createHome())
  document.querySelector('.nav-bar__home').classList.add('active')
  document.querySelector('.nav-bar__menu').classList.remove('active')
  document.querySelector('.nav-bar__contact').classList.remove('active')
}

function createHome () {
  const home = document.createElement('div')
  home.classList.add('home')

  const homeImage = document.createElement('div')
  homeImage.classList.add('home__image')
  
  const homeContainer = document.createElement('div')
  homeContainer.classList.add('home__container')

  const homeCopy = document.createElement('div')
  homeCopy.classList.add('home__copy')
  homeCopy.innerHTML = `Drew's offers a modern take on the neighborhood pizzeria. Enjoy a concise menu of premium stone-fired pizzas handcrafted with the freshest ingredients.`

  const homeOrderBtn = document.createElement('button')
  homeOrderBtn.classList.add('home__order-btn')
  homeOrderBtn.innerHTML = 'Order Now!'

  home.appendChild(homeImage)
  home.appendChild(homeContainer)
  homeContainer.appendChild(homeCopy)
  homeContainer.appendChild(homeOrderBtn)
  homeContainer.appendChild(createInfoBox())

  return home
}

function createInfoBox () {
  const homeInfoBox = document.createElement('div')
  homeInfoBox.classList.add('home__info-box')

  homeInfoBox.appendChild(createAddressBox())
  homeInfoBox.appendChild(createOpeningHoursBox())

  return homeInfoBox
}

function createAddressBox () {
  const addressWrapper = document.createElement('div')
  addressWrapper.classList.add('home__address-wrapper')
  
  const addressIcon = document.createElement('img')
  addressIcon.classList.add('home__address-icon')
  addressIcon.src = _icons_location_svg__WEBPACK_IMPORTED_MODULE_0__

  const addressCopy = document.createElement('div')
  addressCopy.classList.add('home__address-copy')
  addressCopy.innerHTML = 'Jalan Faraday, Bangsar, 59100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur'

  addressWrapper.appendChild(addressIcon)
  addressWrapper.appendChild(addressCopy)

  return addressWrapper
}

function createOpeningHoursBox () {
  const hoursWrapper = document.createElement('div')
  hoursWrapper.classList.add('home__hours-wrapper')
  
  const hoursIcon = document.createElement('img')
  hoursIcon.classList.add('home__hours-icon')
  hoursIcon.src = _icons_time_svg__WEBPACK_IMPORTED_MODULE_1__

  const hoursCopy = document.createElement('div')
  hoursCopy.classList.add('home__hours-copy')
  hoursCopy.innerHTML = 'Open Daily, 12:00 PM to 9:00 PM'

  hoursWrapper.appendChild(hoursIcon)
  hoursWrapper.appendChild(hoursCopy)

  return hoursWrapper
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/functions/menu.js":
/*!*******************************!*\
  !*** ./src/functions/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pics_pizzas_pizza_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pics/pizzas/pizza-1.png */ "./src/pics/pizzas/pizza-1.png");
/* harmony import */ var _pics_pizzas_pizza_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/pizzas/pizza-2.png */ "./src/pics/pizzas/pizza-2.png");
/* harmony import */ var _pics_pizzas_pizza_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pics/pizzas/pizza-3.png */ "./src/pics/pizzas/pizza-3.png");
/* harmony import */ var _pics_pizzas_pizza_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pics/pizzas/pizza-4.png */ "./src/pics/pizzas/pizza-4.png");
/* harmony import */ var _pics_pizzas_pizza_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pics/pizzas/pizza-5.png */ "./src/pics/pizzas/pizza-5.png");
/* harmony import */ var _pics_pizzas_pizza_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pics/pizzas/pizza-6.png */ "./src/pics/pizzas/pizza-6.png");







function loadMenu (body) {
  body.appendChild(createMenu())
  document.querySelector('.nav-bar__menu').classList.add('active')
  document.querySelector('.nav-bar__home').classList.remove('active')
  document.querySelector('.nav-bar__contact').classList.remove('active')
} 

function createMenu() {
  const menu = document.createElement('div')
  menu.classList.add('menu')

  menu.appendChild(
    createMenuItem(
      _pics_pizzas_pizza_1_png__WEBPACK_IMPORTED_MODULE_0__,
      'Spicy Salami',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      _pics_pizzas_pizza_2_png__WEBPACK_IMPORTED_MODULE_1__,
      'Classic Margherita',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      _pics_pizzas_pizza_3_png__WEBPACK_IMPORTED_MODULE_2__,
      'Perfect Pepperoni',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      _pics_pizzas_pizza_4_png__WEBPACK_IMPORTED_MODULE_3__,
      'Porky Pineapple',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      _pics_pizzas_pizza_5_png__WEBPACK_IMPORTED_MODULE_4__,
      'Bacon Bonanza',
      '$20' )
  )

  menu.appendChild(
    createMenuItem(
      _pics_pizzas_pizza_6_png__WEBPACK_IMPORTED_MODULE_5__,
      'Veggie Fiesta',
      '$20' )
  )

  return menu
}

function createMenuItem(img, name, price) {
  const menuCard = document.createElement('div')
  menuCard.classList.add('menu__card')

  const menuImg = document.createElement('img')
  menuImg.classList.add('menu__img')
  menuImg.src = img

  const menuName = document.createElement('div')
  menuName.classList.add('menu__name')
  menuName.innerHTML = name

  const menuPrice = document.createElement('span')
  menuPrice.classList.add('menu__price')
  menuPrice.innerHTML = price

  menuCard.appendChild(menuImg)
  menuCard.appendChild(menuName)
  menuCard.appendChild(menuPrice)

  return menuCard
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/icons/location.svg":
/*!********************************!*\
  !*** ./src/icons/location.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "location.svg";

/***/ }),

/***/ "./src/icons/time.svg":
/*!****************************!*\
  !*** ./src/icons/time.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "time.svg";

/***/ }),

/***/ "./src/pics/pizza.jpg":
/*!****************************!*\
  !*** ./src/pics/pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza.jpg";

/***/ }),

/***/ "./src/pics/pizzas/pizza-1.png":
/*!*************************************!*\
  !*** ./src/pics/pizzas/pizza-1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-1.png";

/***/ }),

/***/ "./src/pics/pizzas/pizza-2.png":
/*!*************************************!*\
  !*** ./src/pics/pizzas/pizza-2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-2.png";

/***/ }),

/***/ "./src/pics/pizzas/pizza-3.png":
/*!*************************************!*\
  !*** ./src/pics/pizzas/pizza-3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-3.png";

/***/ }),

/***/ "./src/pics/pizzas/pizza-4.png":
/*!*************************************!*\
  !*** ./src/pics/pizzas/pizza-4.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-4.png";

/***/ }),

/***/ "./src/pics/pizzas/pizza-5.png":
/*!*************************************!*\
  !*** ./src/pics/pizzas/pizza-5.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-5.png";

/***/ }),

/***/ "./src/pics/pizzas/pizza-6.png":
/*!*************************************!*\
  !*** ./src/pics/pizzas/pizza-6.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-6.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _functions_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/home */ "./src/functions/home.js");
/* harmony import */ var _functions_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/menu */ "./src/functions/menu.js");
/* harmony import */ var _functions_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/contact */ "./src/functions/contact.js");





const body = document.getElementById('content')

initialLoad()

function initialLoad () {
  loadHeader(body)
  ;(0,_functions_home__WEBPACK_IMPORTED_MODULE_1__["default"])(body)
  loadFooter(body)
}

function generateHome () { 
  clearDisplay(body)
  ;(0,_functions_home__WEBPACK_IMPORTED_MODULE_1__["default"])(body)
  loadFooter(body)
}

function generateMenu () { 
  clearDisplay(body)
  ;(0,_functions_menu__WEBPACK_IMPORTED_MODULE_2__["default"])(body)
  loadFooter(body)
}

function generateContact () { 
  clearDisplay(body)
  ;(0,_functions_contact__WEBPACK_IMPORTED_MODULE_3__["default"])(body)
  loadFooter(body)
}


function loadHeader () {
  body.appendChild(createHeader())
}

function createHeader () {
  const header = document.createElement('div')
  header.classList.add('header')

  const logo = document.createElement('div')
  logo.classList.add('logo')
  logo.innerHTML = `Drew's`

  header.appendChild(logo)

  header.appendChild(createNavBar(body))

  return header
}

function createNavBar () {
  const navBar = document.createElement('div')
  navBar.classList.add('nav-bar__container')

  const home = document.createElement('div')
  home.innerHTML = 'Home'
  home.classList.add('nav-bar__home')
  home.addEventListener('click', () => generateHome(body))

  const menu = document.createElement('div')
  menu.innerHTML = 'Menu'
  menu.classList.add('nav-bar__menu')
  menu.addEventListener('click', () => generateMenu(body))
  
  const contact = document.createElement('div') 
  contact.innerHTML = 'Contact'   
  contact.classList.add('nav-bar__contact')
  contact.addEventListener('click', () => generateContact(body))

  navBar.appendChild(home)
  navBar.appendChild(menu)
  navBar.appendChild(contact)

  return navBar
}

function loadFooter () {
  body.appendChild(createFooter())
}

function createFooter () {
  const footer = document.createElement('div')
  footer.classList.add('footer')
  
  const footerCredits = document.createElement('span')
  footerCredits.classList.add('footer__credits')
  footerCredits.innerHTML = 'created by ' 

  const devName = document.createElement('a')
  devName.innerHTML = '@atwycodes'
  devName.href = 'https://github.com/atwycodes'

  footerCredits.appendChild(devName)
  footer.appendChild(footerCredits)

  return footer
}

function clearDisplay () {
  for (let i = 2; i > 0; i--) {
    body.children[i].remove()
  }
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL3BpenphLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAtLXByaW1hcnk6ICMwNjI0NjI7XFxyXFxuICAtLXNlY29uZGFyeTogI2U1ZTVlNTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDsgXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTsgXFxyXFxuICBmb250LXdlaWdodDogOTAwOyBcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXJfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyX19jb250YWluZXIgPiAqIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtOyBcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhcl9fY29udGFpbmVyID4gKjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggM3B4IDBweCAwcHggdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggM3B4IDBweCAwcHggdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG9tZSAqL1xcclxcblxcclxcbi5ob21lX19pbWFnZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX2NvbnRhaW5lciB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiA1JSAxMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyBcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9fY29weSB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lX19vcmRlci1idG57XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2Vjb25kYXJ5KTsgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX29yZGVyLWJ0bjpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbi5ob21lX19pbmZvLWJveHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9fYWRkcmVzcy13cmFwcGVyLFxcclxcbi5ob21lX19ob3Vycy13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX2FkZHJlc3MtaWNvbixcXHJcXG4uaG9tZV9faG91cnMtaWNvbiB7XFxyXFxuICB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9fYWRkcmVzcy1jb3B5LFxcclxcbi5ob21lX19ob3Vycy1jb3B5IHtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LDFmcikpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTAlIDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2NhcmQge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZGFyeSk7IGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpOyBcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDAgOyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fbmFtZSxcXHJcXG4ubWVudV9fcHJpY2Uge1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDUlIDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX2NvcHkge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9fZW1haWwge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1zaGFkZSk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDUlLDUwcHgsMTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTAlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUNoQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSx5REFBd0M7RUFDeEMsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsa0NBQWtDLEVBQUUsbUJBQW1CO0VBQ3ZELGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYiwyQkFBMkIsRUFBRSxtQkFBbUI7RUFDaEQsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxXQUFXLEVBQUUsWUFBWTtBQUMzQjs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLDBEQUEwRDtFQUMxRCxxQkFBcUIsRUFBRSxtQkFBbUI7RUFDMUMsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFFLG1CQUFtQjtFQUM1QyxrQ0FBa0MsRUFBRSxtQkFBbUI7RUFDdkQsa0NBQWtDO0VBQ2xDLGlCQUFpQixFQUFFLHFCQUFxQjtFQUN4QyxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAtLXByaW1hcnk6ICMwNjI0NjI7XFxyXFxuICAtLXNlY29uZGFyeTogI2U1ZTVlNTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDsgXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTsgXFxyXFxuICBmb250LXdlaWdodDogOTAwOyBcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXJfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyX19jb250YWluZXIgPiAqIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtOyBcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhcl9fY29udGFpbmVyID4gKjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggM3B4IDBweCAwcHggdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggM3B4IDBweCAwcHggdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG9tZSAqL1xcclxcblxcclxcbi5ob21lX19pbWFnZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcGljcy9waXp6YS5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX2NvbnRhaW5lciB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiA1JSAxMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyBcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9fY29weSB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lX19vcmRlci1idG57XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2Vjb25kYXJ5KTsgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX29yZGVyLWJ0bjpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbi5ob21lX19pbmZvLWJveHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9fYWRkcmVzcy13cmFwcGVyLFxcclxcbi5ob21lX19ob3Vycy13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX2FkZHJlc3MtaWNvbixcXHJcXG4uaG9tZV9faG91cnMtaWNvbiB7XFxyXFxuICB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9fYWRkcmVzcy1jb3B5LFxcclxcbi5ob21lX19ob3Vycy1jb3B5IHtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LDFmcikpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTAlIDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2NhcmQge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZGFyeSk7IGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpOyBcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDAgOyBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fbmFtZSxcXHJcXG4ubWVudV9fcHJpY2Uge1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDUlIDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX2NvcHkge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9fZW1haWwge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1zaGFkZSk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDUlLDUwcHgsMTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTAlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbG9hZENvbnRhY3QgKGJvZHkpIHtcclxuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSlcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcl9fY29udGFjdCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1iYXJfX2hvbWUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyX19tZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxufSBcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcclxuICBcclxuICBjb25zdCBjb250YWN0Q29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29udGFjdENvcHkuaW5uZXJIVE1MID0gJ0ZvciBlbnF1aXJpZXMgb3IgZ2VuZXJhbCBmZWVkYmFjaywgd3JpdGUgdG8gdXMgYXQ6J1xyXG4gIGNvbnRhY3RDb3B5LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2NvcHknKVxyXG5cclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgZW1haWwuaW5uZXJIVE1MID0gJ2N1c3RvbWVyZmVlZGJhY2tAdG90YWxseXJlYWwuY29tJ1xyXG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2VtYWlsJylcclxuXHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Q29weSlcclxuICBjb250YWN0LmFwcGVuZENoaWxkKGVtYWlsKVxyXG5cclxuICByZXR1cm4gY29udGFjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdCIsImltcG9ydCBsb2NhdGlvbkljb24gZnJvbSAnLi4vaWNvbnMvbG9jYXRpb24uc3ZnJ1xyXG5pbXBvcnQgdGltZUljb24gZnJvbSAnLi4vaWNvbnMvdGltZS5zdmcnXHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSAoYm9keSkge1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyX19ob21lJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcl9fbWVudScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1iYXJfX2NvbnRhY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lICgpIHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxyXG5cclxuICBjb25zdCBob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGhvbWVJbWFnZS5jbGFzc0xpc3QuYWRkKCdob21lX19pbWFnZScpXHJcbiAgXHJcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lX19jb250YWluZXInKVxyXG5cclxuICBjb25zdCBob21lQ29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgaG9tZUNvcHkuY2xhc3NMaXN0LmFkZCgnaG9tZV9fY29weScpXHJcbiAgaG9tZUNvcHkuaW5uZXJIVE1MID0gYERyZXcncyBvZmZlcnMgYSBtb2Rlcm4gdGFrZSBvbiB0aGUgbmVpZ2hib3Job29kIHBpenplcmlhLiBFbmpveSBhIGNvbmNpc2UgbWVudSBvZiBwcmVtaXVtIHN0b25lLWZpcmVkIHBpenphcyBoYW5kY3JhZnRlZCB3aXRoIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cy5gXHJcblxyXG4gIGNvbnN0IGhvbWVPcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgaG9tZU9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX29yZGVyLWJ0bicpXHJcbiAgaG9tZU9yZGVyQnRuLmlubmVySFRNTCA9ICdPcmRlciBOb3chJ1xyXG5cclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVJbWFnZSlcclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpXHJcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQ29weSlcclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVPcmRlckJ0bilcclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9Cb3goKSlcclxuXHJcbiAgcmV0dXJuIGhvbWVcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5mb0JveCAoKSB7XHJcbiAgY29uc3QgaG9tZUluZm9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGhvbWVJbmZvQm94LmNsYXNzTGlzdC5hZGQoJ2hvbWVfX2luZm8tYm94JylcclxuXHJcbiAgaG9tZUluZm9Cb3guYXBwZW5kQ2hpbGQoY3JlYXRlQWRkcmVzc0JveCgpKVxyXG4gIGhvbWVJbmZvQm94LmFwcGVuZENoaWxkKGNyZWF0ZU9wZW5pbmdIb3Vyc0JveCgpKVxyXG5cclxuICByZXR1cm4gaG9tZUluZm9Cb3hcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWRkcmVzc0JveCAoKSB7XHJcbiAgY29uc3QgYWRkcmVzc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGFkZHJlc3NXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX2FkZHJlc3Mtd3JhcHBlcicpXHJcbiAgXHJcbiAgY29uc3QgYWRkcmVzc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gIGFkZHJlc3NJY29uLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX2FkZHJlc3MtaWNvbicpXHJcbiAgYWRkcmVzc0ljb24uc3JjID0gbG9jYXRpb25JY29uXHJcblxyXG4gIGNvbnN0IGFkZHJlc3NDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBhZGRyZXNzQ29weS5jbGFzc0xpc3QuYWRkKCdob21lX19hZGRyZXNzLWNvcHknKVxyXG4gIGFkZHJlc3NDb3B5LmlubmVySFRNTCA9ICdKYWxhbiBGYXJhZGF5LCBCYW5nc2FyLCA1OTEwMCBLdWFsYSBMdW1wdXIsIFdpbGF5YWggUGVyc2VrdXR1YW4gS3VhbGEgTHVtcHVyJ1xyXG5cclxuICBhZGRyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChhZGRyZXNzSWNvbilcclxuICBhZGRyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChhZGRyZXNzQ29weSlcclxuXHJcbiAgcmV0dXJuIGFkZHJlc3NXcmFwcGVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wZW5pbmdIb3Vyc0JveCAoKSB7XHJcbiAgY29uc3QgaG91cnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBob3Vyc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaG9tZV9faG91cnMtd3JhcHBlcicpXHJcbiAgXHJcbiAgY29uc3QgaG91cnNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICBob3Vyc0ljb24uY2xhc3NMaXN0LmFkZCgnaG9tZV9faG91cnMtaWNvbicpXHJcbiAgaG91cnNJY29uLnNyYyA9IHRpbWVJY29uXHJcblxyXG4gIGNvbnN0IGhvdXJzQ29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgaG91cnNDb3B5LmNsYXNzTGlzdC5hZGQoJ2hvbWVfX2hvdXJzLWNvcHknKVxyXG4gIGhvdXJzQ29weS5pbm5lckhUTUwgPSAnT3BlbiBEYWlseSwgMTI6MDAgUE0gdG8gOTowMCBQTSdcclxuXHJcbiAgaG91cnNXcmFwcGVyLmFwcGVuZENoaWxkKGhvdXJzSWNvbilcclxuICBob3Vyc1dyYXBwZXIuYXBwZW5kQ2hpbGQoaG91cnNDb3B5KVxyXG5cclxuICByZXR1cm4gaG91cnNXcmFwcGVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lIiwiaW1wb3J0IFNwaWN5U2FsYW1pIGZyb20gJy4uL3BpY3MvcGl6emFzL3BpenphLTEucG5nJ1xyXG5pbXBvcnQgTWFyZ2hlcml0YSBmcm9tICcuLi9waWNzL3Bpenphcy9waXp6YS0yLnBuZydcclxuaW1wb3J0IFBlcmZlY3RQZXBwZXJvbmkgZnJvbSAnLi4vcGljcy9waXp6YXMvcGl6emEtMy5wbmcnXHJcbmltcG9ydCBQb3JreVBpbmVhcHBsZSBmcm9tICcuLi9waWNzL3Bpenphcy9waXp6YS00LnBuZydcclxuaW1wb3J0IEJhY29uQm9uYW56YSBmcm9tICcuLi9waWNzL3Bpenphcy9waXp6YS01LnBuZydcclxuaW1wb3J0IFZlZ2dpZUZpZXN0YSBmcm9tICcuLi9waWNzL3Bpenphcy9waXp6YS02LnBuZydcclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51IChib2R5KSB7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1iYXJfX21lbnUnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyX19ob21lJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcl9fY29udGFjdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcblxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgU3BpY3lTYWxhbWksXHJcbiAgICAgICdTcGljeSBTYWxhbWknLFxyXG4gICAgICAnJDIwJyApXHJcbiAgKVxyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIE1hcmdoZXJpdGEsXHJcbiAgICAgICdDbGFzc2ljIE1hcmdoZXJpdGEnLFxyXG4gICAgICAnJDIwJyApXHJcbiAgKVxyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFBlcmZlY3RQZXBwZXJvbmksXHJcbiAgICAgICdQZXJmZWN0IFBlcHBlcm9uaScsXHJcbiAgICAgICckMjAnIClcclxuICApXHJcblxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgUG9ya3lQaW5lYXBwbGUsXHJcbiAgICAgICdQb3JreSBQaW5lYXBwbGUnLFxyXG4gICAgICAnJDIwJyApXHJcbiAgKVxyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIEJhY29uQm9uYW56YSxcclxuICAgICAgJ0JhY29uIEJvbmFuemEnLFxyXG4gICAgICAnJDIwJyApXHJcbiAgKVxyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFZlZ2dpZUZpZXN0YSxcclxuICAgICAgJ1ZlZ2dpZSBGaWVzdGEnLFxyXG4gICAgICAnJDIwJyApXHJcbiAgKVxyXG5cclxuICByZXR1cm4gbWVudVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpbWcsIG5hbWUsIHByaWNlKSB7XHJcbiAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQnKVxyXG5cclxuICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICBtZW51SW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2ltZycpXHJcbiAgbWVudUltZy5zcmMgPSBpbWdcclxuXHJcbiAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIG1lbnVOYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVfX25hbWUnKVxyXG4gIG1lbnVOYW1lLmlubmVySFRNTCA9IG5hbWVcclxuXHJcbiAgY29uc3QgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgbWVudVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3ByaWNlJylcclxuICBtZW51UHJpY2UuaW5uZXJIVE1MID0gcHJpY2VcclxuXHJcbiAgbWVudUNhcmQuYXBwZW5kQ2hpbGQobWVudUltZylcclxuICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51TmFtZSlcclxuICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51UHJpY2UpXHJcblxyXG4gIHJldHVybiBtZW51Q2FyZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3JjL3N0eWxlcy9zdHlsZS5jc3MnXHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2Z1bmN0aW9ucy9ob21lJ1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9mdW5jdGlvbnMvbWVudSdcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vZnVuY3Rpb25zL2NvbnRhY3QnXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG5cclxuaW5pdGlhbExvYWQoKVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbExvYWQgKCkge1xyXG4gIGxvYWRIZWFkZXIoYm9keSlcclxuICBsb2FkSG9tZShib2R5KVxyXG4gIGxvYWRGb290ZXIoYm9keSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lICgpIHsgXHJcbiAgY2xlYXJEaXNwbGF5KGJvZHkpXHJcbiAgbG9hZEhvbWUoYm9keSlcclxuICBsb2FkRm9vdGVyKGJvZHkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTWVudSAoKSB7IFxyXG4gIGNsZWFyRGlzcGxheShib2R5KVxyXG4gIGxvYWRNZW51KGJvZHkpXHJcbiAgbG9hZEZvb3Rlcihib2R5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRhY3QgKCkgeyBcclxuICBjbGVhckRpc3BsYXkoYm9keSlcclxuICBsb2FkQ29udGFjdChib2R5KVxyXG4gIGxvYWRGb290ZXIoYm9keSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRIZWFkZXIgKCkge1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlciAoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcclxuXHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJylcclxuICBsb2dvLmlubmVySFRNTCA9IGBEcmV3J3NgXHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKGJvZHkpKVxyXG5cclxuICByZXR1cm4gaGVhZGVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhciAoKSB7XHJcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcl9fY29udGFpbmVyJylcclxuXHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSdcclxuICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXJfX2hvbWUnKVxyXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnZW5lcmF0ZUhvbWUoYm9keSkpXHJcblxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIG1lbnUuaW5uZXJIVE1MID0gJ01lbnUnXHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCduYXYtYmFyX19tZW51JylcclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2VuZXJhdGVNZW51KGJvZHkpKVxyXG4gIFxyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBcclxuICBjb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JyAgIFxyXG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcl9fY29udGFjdCcpXHJcbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdlbmVyYXRlQ29udGFjdChib2R5KSlcclxuXHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWUpXHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpXHJcblxyXG4gIHJldHVybiBuYXZCYXJcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvb3RlciAoKSB7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyICgpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxyXG4gIFxyXG4gIGNvbnN0IGZvb3RlckNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICBmb290ZXJDcmVkaXRzLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fY3JlZGl0cycpXHJcbiAgZm9vdGVyQ3JlZGl0cy5pbm5lckhUTUwgPSAnY3JlYXRlZCBieSAnIFxyXG5cclxuICBjb25zdCBkZXZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgZGV2TmFtZS5pbm5lckhUTUwgPSAnQGF0d3ljb2RlcydcclxuICBkZXZOYW1lLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2F0d3ljb2RlcydcclxuXHJcbiAgZm9vdGVyQ3JlZGl0cy5hcHBlbmRDaGlsZChkZXZOYW1lKVxyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDcmVkaXRzKVxyXG5cclxuICByZXR1cm4gZm9vdGVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSAoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDI7IGkgPiAwOyBpLS0pIHtcclxuICAgIGJvZHkuY2hpbGRyZW5baV0ucmVtb3ZlKClcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
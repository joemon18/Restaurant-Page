/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ga+Maamli&family=Heebo:wght@100..900&family=Playwrite+BE+VLG:wght@100..400&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\r\nhtml {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: cursive;\r\n    background-color: rgb(34, 33, 33);\r\n    color: white;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-family: \"Dancing Script\", cursive;\r\n    font-size: 60px;\r\n}\r\n\r\n#btnsContainer {\r\n    position: sticky;\r\n    z-index: 1000;\r\n    top: 100px;\r\n    display: flex;\r\n    justify-content: end;\r\n    right: 10px;\r\n    width: 95%;\r\n    gap: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n#closeBtn {\r\n    text-align: end;\r\n}\r\n\r\n\r\n\r\n#closeBtn {\r\n    font-size: 2rem;\r\n    margin-right: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n#header {\r\n    position: sticky;\r\n    top: 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 100px;\r\n    background-color: rgb(37, 32, 32);\r\n    padding: 0 20px;\r\n    z-index: 1000;\r\n}\r\n\r\n\r\n#title {\r\n    margin-top: 10px;\r\n    font-family: \"Ga Maamli\";\r\n    font-size: 60px;\r\n}\r\n\r\n#title .word {\r\n    color: rgb(185, 203, 218);\r\n}\r\n\r\n#title .word::after {\r\n    content: 'Flavorful Fork';\r\n    color: rgb(239, 46, 11);\r\n}\r\n\r\n\r\n#btns {\r\n    width: 40vw;\r\n    display: flex;\r\n    justify-content: end;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n\r\n#buttons {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\nbutton {\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    width: 110px;\r\n    font-size: 100%;\r\n    transition: ease transform .5s;\r\n}\r\n\r\n\r\nbutton:hover {\r\n    transform: scale(1.1);\r\n    cursor: pointer;\r\n}\r\n\r\n#bookTable {\r\n    background-color: rgb(255, 84, 22);\r\n    color: white;\r\n    padding: 0px 10px;\r\n    width: 120px;\r\n}\r\n\r\n#hamburger {\r\n    font-size: 2.5rem;\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n\r\n\r\n#homeContainer {\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    text-align: center;\r\n    display: grid;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n#info {\r\n    height: 40vh;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#info p {\r\n    text-align: center;\r\n    width: 50%;\r\n    margin-left: 25%;\r\n    font-size: 18px;\r\n    font-family: cursive;\r\n    text-align: center;\r\n}\r\n\r\n#timings {\r\n    height: 25vh;\r\n    font-size: larger;\r\n}\r\n\r\n#slogan h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n.page {\r\n    position: relative;\r\n}\r\n\r\n#menuContainer {\r\n    padding: 20px;\r\n    background-size: contain;\r\n    background-color:rgb(36, 44, 55)\r\n}\r\n\r\n#menuBox h2 {\r\n    font-size: 30px;\r\n}\r\n\r\n.item img {\r\n    width: 300px;\r\n    height: 300px;\r\n    object-fit: cover;\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n\r\n#breakfastItems,\r\n#appetizersandsnacksItems,\r\n#maincoursesItems,\r\n#beveragesItems,\r\n#dessertsItems {\r\n    display: flex;\r\n    overflow-x: auto;\r\n    scrollbar-width: none;\r\n    gap: 40px;\r\n}\r\n\r\n\r\n#aboutContainer {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: grid;\r\n    justify-content: center;\r\n    background-color:rgb(20, 43, 43);\r\n}\r\n\r\n#aboutContainer h3 {\r\n    font-size: 25px;\r\n}\r\n\r\n#story,\r\n#cuisine,\r\n#team,\r\n#join {\r\n    position: relative;\r\n    top: -20px;\r\n    border: 1px solid white;\r\n    margin-top: 20px;\r\n    width: 40vw;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n}\r\n\r\n#story,\r\n#team {\r\n    right: 250px;\r\n}\r\n\r\n#cuisine,\r\n#join {\r\n    left: 250px;\r\n}\r\n\r\n#booking-form {\r\n    position: absolute;\r\n    border: 1px solid gray;\r\n    top: 100px;\r\n    left: 40%;\r\n    display: grid;\r\n    gap: 20px;\r\n    width: 350px;\r\n    padding: 20px;\r\n    justify-content: center;\r\n    border-radius: 8px;\r\n    visibility: hidden;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput {\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    padding: 0px 10px;\r\n    width:90%;\r\n}\r\n\r\n#confirm {\r\n    width: auto;\r\n}\r\n\r\n\r\n@media (max-width:1220px) {\r\n    #title {\r\n        font-size: 55px;\r\n    }\r\n\r\n    #btns {\r\n        width: 50vw;\r\n        gap: 10px;\r\n    }\r\n\r\n    #booking-form {\r\n        left: 35%;\r\n    }\r\n}\r\n\r\n@media(max-width:1000px) {\r\n\r\n    #title {\r\n        font-size: 50px;\r\n        margin-top: 15px;\r\n    }\r\n\r\n    #btns {\r\n        width: 50vw;\r\n    }\r\n\r\n    button {\r\n        width: 80px;\r\n    }\r\n\r\n    #story,\r\n    #cuisine,\r\n    #team,\r\n    #join {\r\n        width: 70vw;\r\n    }\r\n\r\n    #story,\r\n    #team {\r\n        right: 100px;\r\n    }\r\n\r\n    #cuisine,\r\n    #join {\r\n        left: 100px;\r\n    }\r\n\r\n    #booking-form {\r\n        left: 33%;\r\n    }\r\n\r\n}\r\n\r\n@media(max-width:915px) {\r\n\r\n    #btns {\r\n        width: 50px;\r\n    }\r\n\r\n\r\n    #title {\r\n        font-size: 55px;\r\n        margin-left: 20px;\r\n        margin-top: 15px;\r\n    }\r\n\r\n    #hamburger {\r\n        display: block;\r\n    }\r\n\r\n    .item img {\r\n        width: 250px;\r\n        height: 250px;\r\n    }\r\n\r\n    #booking-form {\r\n        left: 32%;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width:800px){\r\n\r\n    #slogan {\r\n        width: 90vw;\r\n        margin-left: 23px;\r\n        margin-top: -120px;\r\n        height: 120px;\r\n    }\r\n\r\n    #slogan h1 {\r\n         font-size: 45px;\r\n    }\r\n\r\n    #timings {\r\n        margin-top: -50px;\r\n        font-size: large;\r\n    }\r\n\r\n    #story,\r\n    #cuisine,\r\n    #team,\r\n    #join {\r\n        width: 90vw;\r\n    }\r\n\r\n    #story,\r\n    #team {\r\n        right: 0;\r\n    }\r\n\r\n    #cuisine,\r\n    #join {\r\n        left: 0;\r\n    }\r\n\r\n    p {\r\n        font-size: 90%;\r\n    }\r\n\r\n    #info p {\r\n        font-size: 100%;\r\n        width: 90%;\r\n        margin-left: 5%;\r\n    }\r\n\r\n    #booking-form {\r\n        top: 80px;\r\n        width: 300px;\r\n        left: 25%;\r\n    }\r\n  \r\n}\r\n\r\n\r\n@media (max-width:570px){\r\n\r\n#title {\r\n    font-size: 40px;\r\n    margin-left: 20px;\r\n    margin-top: 25px;\r\n}\r\n\r\n#info h1 {\r\n    font-size: 50px;\r\n    width: 90vw;\r\n}\r\n\r\n#slogan {\r\n    margin-top: -180px;\r\n}\r\n\r\n#slogan h1 {\r\n    font-size: 36px;\r\n}\r\n\r\n#timings {\r\n    margin-top: -150px;\r\n    font-size: 100%;\r\n}\r\n\r\n\r\n#menuContainer h2,\r\n#aboutContainer h3 {\r\n    font-size: 23px;\r\n}\r\n\r\n.item img {\r\n    width: 210px;\r\n    height: 210px;\r\n}\r\n\r\n#btnsContainer {\r\n    gap: 10px;\r\n}\r\n\r\n#booking-form {\r\n    width: 280px;\r\n    left: 22%;\r\n}\r\n\r\np {\r\n    font-size: 85%;\r\n}\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst aboutPage = () => {\r\n    const aboutContainer = document.createElement('div');\r\n    aboutContainer.setAttribute('id','aboutContainer');\r\n    aboutContainer.setAttribute('class','page');\r\n\r\n    const aboutHeader = document.createElement('h1');\r\n    aboutHeader.textContent = \"About US...\";\r\n\r\n    const aboutSection = document.createElement(\"div\");\r\n    aboutSection.setAttribute('id','aboutSection');\r\n\r\n    const aboutContent = `\r\n        <section>\r\n            <div id=\"story\">\r\n              <h3>Our Story</h3>\r\n              <p>Welcome to The Flavorful Fork , where passion meets flavor! Founded in 2001, our journey began with a simple vision: to create a dining experience that feels like home, yet offers a culinary adventure that excites your taste buds.We are proud to serve our community with dishes that are crafted with love, fresh ingredients, and a dash of creativity.</p>\r\n            </div>\r\n\r\n            <div id=\"cuisine\">\r\n                <h3>Our Cuisine</h3>\r\n                <p>At The Flavorful Fork , we believe that food is more than just sustenance it's a celebration of life, culture, and tradition. Our menu features a diverse array of dishes, from timeless classics to innovative creations. Each dish is meticulously prepared by our talented chefs, ensuring that every bite is a delightful experience.</p>\r\n            </div>\r\n\r\n            <div id=\"team\">\r\n                <h3>Our Team</h3>\r\n                <p>Our team at The Flavorful Fork is a close-knit family of passionate individuals who share a common goal: to provide exceptional service and unforgettable dining experiences. From our skilled chefs to our friendly waitstaff, each member of our team is dedicated to making your visit memorable.</p>\r\n            </div>\r\n            \r\n            <div id=\"join\">\r\n                <h3>Join Us</h3>\r\n                <p>We invite you to join us and experience the magic of our cuisine and hospitality. Whether you're a regular guest or visiting for the first time, we look forward to welcoming you with open arms and serving you a meal that you'll remember. Thank you for choosing The Flavorful Fork, and we hope to see you soon!</p>\r\n            </div>\r\n\r\n        </section>\r\n    `; \r\n\r\n    aboutSection.innerHTML = aboutContent;\r\n\r\n    aboutContainer.appendChild(aboutHeader);\r\n    aboutContainer.appendChild(aboutSection);\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.appendChild(aboutContainer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createBookingForm() {\r\n\r\n    const createInputField = (labelText, inputType, inputName, isRequired = true) => {\r\n        const label = document.createElement('label');\r\n        label.textContent = labelText;\r\n        \r\n        const input = document.createElement('input');\r\n        input.setAttribute('type', inputType);\r\n        input.setAttribute('name', inputName);\r\n        if (isRequired) input.setAttribute('required', 'required');\r\n  \r\n        const container = document.createElement('div');\r\n        container.appendChild(label);\r\n        container.appendChild(input);\r\n        container.appendChild(document.createElement('br'));\r\n  \r\n        return container;\r\n    };\r\n  \r\n    const form = document.createElement('form');\r\n    form.setAttribute('id', 'booking-form');\r\n  \r\n    form.appendChild(createInputField('Name:', 'text', 'name'));\r\n    form.appendChild(createInputField('Phone No:', 'text', 'phoneNo'));\r\n    form.appendChild(createInputField('Number of Guests:', 'number', 'guests'));\r\n    form.appendChild(createInputField('Date:', 'date', 'date'));\r\n    form.appendChild(createInputField('Preferred Time:', 'text', 'time'));\r\n  \r\n    const submitButton = document.createElement('button');\r\n    submitButton.setAttribute('type', 'submit');\r\n    submitButton.textContent = 'Book Table';\r\n    submitButton.setAttribute('id', 'confirm');\r\n  \r\n    const cancelButton = document.createElement('button');\r\n    cancelButton.setAttribute('type', 'button');\r\n    cancelButton.setAttribute('id', 'cancel');\r\n    cancelButton.textContent = 'Cancel';\r\n    cancelButton.style.backgroundColor = \"red\";\r\n    cancelButton.addEventListener('click', () => form.reset());\r\n  \r\n    const btnContainer = document.createElement('div');\r\n    btnContainer.style.display = \"flex\";\r\n    btnContainer.style.justifyContent = \"space-between\";\r\n    btnContainer.style.marginTop = \"20px\";\r\n    btnContainer.appendChild(submitButton);\r\n    btnContainer.appendChild(cancelButton);\r\n  \r\n    form.appendChild(btnContainer);\r\n  \r\n    const homeContainer = document.getElementById(\"homeContainer\");\r\n    homeContainer.appendChild(form);\r\n  \r\n    form.addEventListener('submit', function(event) {\r\n        event.preventDefault();\r\n        const formData = new FormData(form);\r\n        const name = formData.get('name');\r\n        const guests = formData.get('guests');\r\n        const time = formData.get('time');\r\n  \r\n        console.log(`Booking confirmed for ${name}, ${guests} guests, at ${time}.`);\r\n        alert(`Booking confirmed for ${name}, ${guests} guests, at ${time}.`);\r\n  \r\n        form.reset();\r\n        window.location.reload();\r\n    });\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBookingForm);\r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/book.js?");

/***/ }),

/***/ "./src/btnsContainer.js":
/*!******************************!*\
  !*** ./src/btnsContainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buttonsContainer = () => {\r\n    if (document.getElementById('btnsContainer')) {\r\n        return; \r\n    }\r\n\r\n    const btnsContainer = document.createElement('div');\r\n    btnsContainer.setAttribute('id', 'btnsContainer');\r\n    btnsContainer.style.display = 'none';\r\n\r\n    const hamburgerIcon = document.getElementById('hamburger');\r\n    const buttons = document.getElementById('buttons');\r\n\r\n    const homeBtn = document.getElementById('home');\r\n    const menuBtn = document.getElementById('menu');\r\n    const aboutBtn = document.getElementById('about');\r\n    const bookingBtn = document.getElementById('bookTable');\r\n\r\n    const closeBtn = document.createElement('div');\r\n    closeBtn.setAttribute('id', 'closeBtn');\r\n    closeBtn.innerHTML = '&#10006;';\r\n    btnsContainer.insertBefore(closeBtn, btnsContainer.firstChild);\r\n\r\n    const appendButtons = (targetContainer) => {\r\n        targetContainer.appendChild(homeBtn);\r\n        targetContainer.appendChild(menuBtn);\r\n        targetContainer.appendChild(aboutBtn);\r\n        targetContainer.appendChild(bookingBtn);\r\n    };\r\n\r\n    const handleResize = () => {\r\n        if (window.innerWidth > 915) {\r\n            btnsContainer.style.display = 'none';\r\n            if (!buttons.contains(homeBtn)) {\r\n                appendButtons(buttons);\r\n                buttons.style.display = 'flex';\r\n                hamburgerIcon.style.display = 'none';\r\n            }\r\n        } else {\r\n            if (!btnsContainer.contains(homeBtn)) {\r\n                buttons.style.display = 'none';\r\n                appendButtons(btnsContainer);\r\n                hamburgerIcon.style.display = 'block';\r\n            }\r\n        }\r\n    };\r\n\r\n    hamburgerIcon.addEventListener('click', () => {\r\n        hamburgerIcon.style.display = 'none';\r\n        btnsContainer.style.display = 'flex';\r\n        adjustScrollPosition(btnsContainer);\r\n    });\r\n\r\n    window.addEventListener('resize', handleResize);\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        hamburgerIcon.style.display = 'block';\r\n        btnsContainer.style.display = 'none';\r\n    });\r\n\r\n    const content = document.getElementById('content');\r\n    if (!content.contains(btnsContainer)) {\r\n        content.insertBefore(btnsContainer, content.firstChild);\r\n    }\r\n\r\n    handleResize();\r\n\r\n    function adjustScrollPosition(container) {\r\n        const yOffset = -80;\r\n        const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;\r\n        window.scrollTo({ top: y, behavior: 'smooth' });\r\n    }\r\n};\r\n\r\nbuttonsContainer();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonsContainer);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/btnsContainer.js?");

/***/ }),

/***/ "./src/eventListener.js":
/*!******************************!*\
  !*** ./src/eventListener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)\n/* harmony export */ });\nconst setupEventListeners = () => {\r\nconst homeContainer = document.getElementById(\"homeContainer\");\r\nconst menuContainer = document.getElementById(\"menuContainer\");\r\nconst aboutContainer = document.getElementById(\"aboutContainer\");\r\nconst formContainer = document.getElementById('booking-form');\r\nconst info = document.getElementById('info');\r\nconst slogan = document.getElementById('slogan');\r\nconst timings = document.getElementById('timings'); \r\nconst homeBtn = document.getElementById('home');\r\nconst menuBtn = document.getElementById('menu');\r\nconst aboutBtn = document.getElementById('about');\r\nconst bookingBtn = document.getElementById('bookTable');\r\nconst cancelButton = document.getElementById('cancel');\r\nconst hamburgerIcon = document.getElementById('hamburger');\r\n\r\n\r\nhomeBtn.addEventListener('click',() => {\r\n    formContainer.style.visibility = 'hidden';\r\n    info.style.visibility = 'Visible';\r\n    slogan.style.visibility = 'Visible';\r\n    timings.style.visibility = 'Visible';\r\n    homeContainer.scrollIntoView({behavior:\"smooth\"});\r\n    adjustScrollPosition(homeContainer);\r\n\r\n})\r\n\r\nmenuBtn.addEventListener('click',() => {\r\n    menuContainer.scrollIntoView({behavior:'smooth'});\r\n    adjustScrollPosition(menuContainer);\r\n})\r\n\r\naboutBtn.addEventListener('click',() => {\r\n    aboutContainer.scrollIntoView({behavior:\"smooth\"});  \r\n    adjustScrollPosition(aboutContainer);\r\n});\r\n\r\n\r\n\r\nbookingBtn.addEventListener('click',() => {\r\n    homeContainer.scrollIntoView({behavior:\"smooth\"});\r\n    formContainer.style.visibility = 'Visible';\r\n    info.style.visibility = 'hidden';\r\n    slogan.style.visibility = 'hidden';\r\n    timings.style.visibility = 'hidden';\r\n    adjustScrollPosition(homeContainer);\r\n})\r\n\r\ncancelButton.addEventListener('click',() =>{\r\n    formContainer.style.visibility = 'hidden';\r\n    info.style.visibility = 'Visible';\r\n    slogan.style.visibility = 'Visible';\r\n    timings.style.visibility = 'Visible';\r\n\r\n})\r\n\r\nfunction adjustScrollPosition(container) {\r\n    const yOffset = -80; \r\n    const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;\r\n    window.scrollTo({ top: y, behavior: 'smooth' });\r\n}\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/eventListener.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_images_main_img_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/main-img.avif */ \"./src/images/main-img.avif\");\n\r\n\r\nconst homePage = () => {\r\n\r\nconst homeContainer = document.createElement(\"div\");\r\nhomeContainer.setAttribute(\"id\",\"homeContainer\");\r\nhomeContainer.setAttribute('class','page');\r\nhomeContainer.style.backgroundImage = `url(${_src_images_main_img_avif__WEBPACK_IMPORTED_MODULE_0__})` ;\r\n\r\nconst info = document.createElement(\"div\");\r\ninfo.setAttribute(\"id\",\"info\");\r\n\r\nconst heading = document.createElement('h1');\r\nheading.textContent = \"Fast Food Restaurant...\";\r\n\r\nconst para = document.createElement('p');\r\npara.textContent = 'Our appetizers set the stage, our entrees steal the show, and our desserts are the grand finale.';\r\n\r\n\r\ninfo.appendChild(heading);\r\ninfo.appendChild(para);\r\n\r\n\r\nconst slogan = document.createElement('div');\r\nslogan.setAttribute('id','slogan');\r\n\r\nconst sloganHeading = document.createElement('h1');\r\nconst preserve = document.createElement('pre');\r\npreserve.textContent = 'EAT     DRINK    VISIT';\r\n\r\nsloganHeading.appendChild(preserve);\r\nslogan.appendChild(sloganHeading);\r\n\r\nconst timings = document.createElement('div');\r\ntimings.setAttribute(\"id\",'timings');\r\n\r\nconst timingsHeading = document.createElement('h3');\r\ntimingsHeading.textContent = 'Our Timings';\r\n\r\nconst timingsPara1 = document.createElement('p');\r\ntimingsPara1.textContent = 'Monday to Friday : 8:00 AM to 11:00 PM';\r\n\r\nconst timingsPara2 = document.createElement('p');\r\ntimingsPara2.textContent = 'Saturday & Sunday : 10:00 AM to 11:00 PM';\r\n\r\ntimings.appendChild(timingsHeading);\r\ntimings.appendChild(timingsPara1);\r\ntimings.appendChild(timingsPara2);\r\n\r\n\r\nhomeContainer.appendChild(info);\r\nhomeContainer.appendChild(slogan);\r\nhomeContainer.appendChild(timings);\r\n\r\nconst content = document.getElementById(\"content\");\r\ncontent.appendChild(homeContainer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n/* harmony import */ var _btnsContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btnsContainer.js */ \"./src/btnsContainer.js\");\n/* harmony import */ var _eventListener_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventListener.js */ \"./src/eventListener.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_book_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_btnsContainer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_eventListener_js__WEBPACK_IMPORTED_MODULE_6__.setupEventListeners)();\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_images_breakFast_image1_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/breakFast-image1.webp */ \"./src/images/breakFast-image1.webp\");\n/* harmony import */ var _src_images_breakFast_image2_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/breakFast-image2.webp */ \"./src/images/breakFast-image2.webp\");\n/* harmony import */ var _src_images_breakFast_image3_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/breakFast-image3.webp */ \"./src/images/breakFast-image3.webp\");\n/* harmony import */ var _src_images_breakFast_image4_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/breakFast-image4.webp */ \"./src/images/breakFast-image4.webp\");\n/* harmony import */ var _src_images_breakFast_image5_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/breakFast-image5.webp */ \"./src/images/breakFast-image5.webp\");\n/* harmony import */ var _src_images_breakFast_image6_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/breakFast-image6.webp */ \"./src/images/breakFast-image6.webp\");\n/* harmony import */ var _src_images_appetizers_image1_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/images/appetizers-image1.webp */ \"./src/images/appetizers-image1.webp\");\n/* harmony import */ var _src_images_appetizers_image2_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/images/appetizers-image2.webp */ \"./src/images/appetizers-image2.webp\");\n/* harmony import */ var _src_images_appetizers_image3_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/images/appetizers-image3.webp */ \"./src/images/appetizers-image3.webp\");\n/* harmony import */ var _src_images_appetizers_image4_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/images/appetizers-image4.webp */ \"./src/images/appetizers-image4.webp\");\n/* harmony import */ var _src_images_appetizers_image5_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/images/appetizers-image5.webp */ \"./src/images/appetizers-image5.webp\");\n/* harmony import */ var _src_images_appetizers_image6_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/images/appetizers-image6.webp */ \"./src/images/appetizers-image6.webp\");\n/* harmony import */ var _src_images_mainCourse_image1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/images/mainCourse-image1.jpg */ \"./src/images/mainCourse-image1.jpg\");\n/* harmony import */ var _src_images_mainCourse_image2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/images/mainCourse-image2.jpg */ \"./src/images/mainCourse-image2.jpg\");\n/* harmony import */ var _src_images_mainCourse_image3_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/images/mainCourse-image3.jpg */ \"./src/images/mainCourse-image3.jpg\");\n/* harmony import */ var _src_images_mainCourse_image4_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/images/mainCourse-image4.jpg */ \"./src/images/mainCourse-image4.jpg\");\n/* harmony import */ var _src_images_mainCourse_image5_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/images/mainCourse-image5.jpg */ \"./src/images/mainCourse-image5.jpg\");\n/* harmony import */ var _src_images_mainCourse_image6_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/images/mainCourse-image6.jpg */ \"./src/images/mainCourse-image6.jpg\");\n/* harmony import */ var _src_images_beverages_image1_jpeg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/images/beverages-image1.jpeg */ \"./src/images/beverages-image1.jpeg\");\n/* harmony import */ var _src_images_beverages_image2_jpeg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/images/beverages-image2.jpeg */ \"./src/images/beverages-image2.jpeg\");\n/* harmony import */ var _src_images_beverages_image3_webp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/images/beverages-image3.webp */ \"./src/images/beverages-image3.webp\");\n/* harmony import */ var _src_images_beverages_image4_webp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/images/beverages-image4.webp */ \"./src/images/beverages-image4.webp\");\n/* harmony import */ var _src_images_beverages_image5_jpeg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../src/images/beverages-image5.jpeg */ \"./src/images/beverages-image5.jpeg\");\n/* harmony import */ var _src_images_beverages_image6_jpeg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/images/beverages-image6.jpeg */ \"./src/images/beverages-image6.jpeg\");\n/* harmony import */ var _src_images_desserts_image1_webp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/images/desserts-image1.webp */ \"./src/images/desserts-image1.webp\");\n/* harmony import */ var _src_images_desserts_image2_webp__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../src/images/desserts-image2.webp */ \"./src/images/desserts-image2.webp\");\n/* harmony import */ var _src_images_desserts_image3_webp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../src/images/desserts-image3.webp */ \"./src/images/desserts-image3.webp\");\n/* harmony import */ var _src_images_desserts_image4_webp__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../src/images/desserts-image4.webp */ \"./src/images/desserts-image4.webp\");\n/* harmony import */ var _src_images_desserts_image5_webp__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../src/images/desserts-image5.webp */ \"./src/images/desserts-image5.webp\");\n/* harmony import */ var _src_images_desserts_image6_webp__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../src/images/desserts-image6.webp */ \"./src/images/desserts-image6.webp\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuPage = () => {\r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.setAttribute(\"id\", \"menuContainer\");\r\n    menuContainer.setAttribute('class','page');\r\n\r\n    const menuHeader = document.createElement('h1');\r\n    menuHeader.textContent = 'Our Menu...';\r\n\r\n    const menuBox = document.createElement('div');\r\n    menuBox.setAttribute('id','menuBox');\r\n\r\n    const categories = [\r\n        {\r\n            title: 'Breakfast',\r\n            items: [\r\n                { src: _src_images_breakFast_image1_webp__WEBPACK_IMPORTED_MODULE_0__, name: \"Chocolate Chip Pancakes - 10$\" },\r\n                { src: _src_images_breakFast_image2_webp__WEBPACK_IMPORTED_MODULE_1__, name: \"Waffles - 10$\" },\r\n                { src: _src_images_breakFast_image3_webp__WEBPACK_IMPORTED_MODULE_2__, name: \"Grilled Cheese Sandwich - 10$\" },\r\n                { src: _src_images_breakFast_image4_webp__WEBPACK_IMPORTED_MODULE_3__, name: \"Fruit Salad - 10$\" },\r\n                { src: _src_images_breakFast_image5_webp__WEBPACK_IMPORTED_MODULE_4__, name: \"Breakfast Burritos - 10$\" },\r\n                { src: _src_images_breakFast_image6_webp__WEBPACK_IMPORTED_MODULE_5__, name: \"Cream Cheese Croissants - 10$\" }\r\n            ]\r\n        },\r\n        {\r\n            title: 'Appetizers and Snacks',\r\n            items: [\r\n                { src: _src_images_appetizers_image1_webp__WEBPACK_IMPORTED_MODULE_6__, name: \"Buffalo Chicken Pizza Rolls - 10$\" },\r\n                { src: _src_images_appetizers_image2_webp__WEBPACK_IMPORTED_MODULE_7__, name: \"Eggrolls - 10$\" },\r\n                { src: _src_images_appetizers_image3_webp__WEBPACK_IMPORTED_MODULE_8__, name: \"Spring Rolls - 10$\" },\r\n                { src: _src_images_appetizers_image4_webp__WEBPACK_IMPORTED_MODULE_9__, name: \"Cheesy Garlic Bread - 10$\" },\r\n                { src: _src_images_appetizers_image5_webp__WEBPACK_IMPORTED_MODULE_10__, name: \"Chicken Wings - 10$\" },\r\n                { src: _src_images_appetizers_image6_webp__WEBPACK_IMPORTED_MODULE_11__, name: \"Grilled Chicken Marinade - 10$\" }\r\n            ]\r\n        },\r\n        {\r\n            title: 'Main Courses',\r\n            items: [\r\n                { src: _src_images_mainCourse_image1_jpg__WEBPACK_IMPORTED_MODULE_12__ , name: \"Tuscan Chicken Mac and Cheese - 10$\" },\r\n                { src: _src_images_mainCourse_image2_jpg__WEBPACK_IMPORTED_MODULE_13__ , name: \"Kimchi Noodles - 10$\" },\r\n                { src: _src_images_mainCourse_image3_jpg__WEBPACK_IMPORTED_MODULE_14__ , name: \"Chicken Fried Rice - 10$\" },\r\n                { src: _src_images_mainCourse_image4_jpg__WEBPACK_IMPORTED_MODULE_15__ , name: \"Honey Garlic Meatballs - 10$\" },\r\n                { src: _src_images_mainCourse_image5_jpg__WEBPACK_IMPORTED_MODULE_16__ , name: \"Sweet and Sour Vegetables - 10$\" },\r\n                { src: _src_images_mainCourse_image6_jpg__WEBPACK_IMPORTED_MODULE_17__ , name: \"Paneer Kathi Roll - 10$\" }\r\n            ]\r\n        },\r\n        {\r\n            title: 'Beverages',\r\n            items: [\r\n                { src: _src_images_beverages_image1_jpeg__WEBPACK_IMPORTED_MODULE_18__ , name: \"Coffee - 10$\" },\r\n                { src: _src_images_beverages_image2_jpeg__WEBPACK_IMPORTED_MODULE_19__ , name: \"Tea - 10$\" },\r\n                { src: _src_images_beverages_image3_webp__WEBPACK_IMPORTED_MODULE_20__ , name: \"Mojitos - 10$\" },\r\n                { src: _src_images_beverages_image4_webp__WEBPACK_IMPORTED_MODULE_21__ , name: \"Smoothies - 10$\" },\r\n                { src: _src_images_beverages_image5_jpeg__WEBPACK_IMPORTED_MODULE_22__ , name: \"Juices - 10$\" },\r\n                { src: _src_images_beverages_image6_jpeg__WEBPACK_IMPORTED_MODULE_23__ , name: \"Cocktails and Mocktails - 10$\" }\r\n            ]\r\n        },\r\n        {\r\n            title: 'Desserts',\r\n            items: [\r\n                { src: _src_images_desserts_image1_webp__WEBPACK_IMPORTED_MODULE_24__ , name: \"Ice Creams - 10$\" },\r\n                { src: _src_images_desserts_image2_webp__WEBPACK_IMPORTED_MODULE_25__ , name: \"Cakes - 10$\" },\r\n                { src: _src_images_desserts_image3_webp__WEBPACK_IMPORTED_MODULE_26__ , name: \"Brownies - 10$\" },\r\n                { src: _src_images_desserts_image4_webp__WEBPACK_IMPORTED_MODULE_27__ , name: \"Kheer - 10$\" },\r\n                { src: _src_images_desserts_image5_webp__WEBPACK_IMPORTED_MODULE_28__ , name: \"Cookies - 10$\" },\r\n                { src: _src_images_desserts_image6_webp__WEBPACK_IMPORTED_MODULE_29__ , name: \"Puddings - 10$\" }\r\n            ]\r\n        }\r\n    ];\r\n\r\n    categories.forEach(category => {\r\n        const categoryDiv = document.createElement('div');\r\n        categoryDiv.setAttribute('id', category.title.toLowerCase().replace(/\\s+/g, ''));\r\n        \r\n        const categoryTitle = document.createElement('h2');\r\n        categoryTitle.textContent = category.title;\r\n        \r\n        const categoryItems = document.createElement('div');\r\n        categoryItems.setAttribute('id', `${category.title.toLowerCase().replace(/\\s+/g, '')}Items`);\r\n        \r\n        category.items.forEach(item => {\r\n            const itemDiv = document.createElement('div');\r\n            itemDiv.setAttribute('class', 'item');\r\n            \r\n            const itemImg = document.createElement('img');\r\n            itemImg.src = item.src;\r\n            \r\n            const itemName = document.createElement('p');\r\n            itemName.textContent = item.name;\r\n            \r\n            itemDiv.appendChild(itemImg);\r\n            itemDiv.appendChild(itemName);\r\n            \r\n            categoryItems.appendChild(itemDiv);\r\n        });\r\n        \r\n        categoryDiv.appendChild(categoryTitle);\r\n        categoryDiv.appendChild(categoryItems);\r\n        \r\n        menuBox.appendChild(categoryDiv);\r\n    });\r\n\r\n    menuContainer.appendChild(menuHeader);\r\n    menuContainer.appendChild(menuBox);\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.appendChild(menuContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/appetizers-image1.webp":
/*!*******************************************!*\
  !*** ./src/images/appetizers-image1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/appetizers-image1fa072f2cf6a9e24bfb44.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/appetizers-image1.webp?");

/***/ }),

/***/ "./src/images/appetizers-image2.webp":
/*!*******************************************!*\
  !*** ./src/images/appetizers-image2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/appetizers-image260c53f81fab1e35dd4c3.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/appetizers-image2.webp?");

/***/ }),

/***/ "./src/images/appetizers-image3.webp":
/*!*******************************************!*\
  !*** ./src/images/appetizers-image3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/appetizers-image320cce16c35904346fbc8.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/appetizers-image3.webp?");

/***/ }),

/***/ "./src/images/appetizers-image4.webp":
/*!*******************************************!*\
  !*** ./src/images/appetizers-image4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/appetizers-image4a97b08b0b541805e2b15.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/appetizers-image4.webp?");

/***/ }),

/***/ "./src/images/appetizers-image5.webp":
/*!*******************************************!*\
  !*** ./src/images/appetizers-image5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/appetizers-image5479ea19b41f577a49169.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/appetizers-image5.webp?");

/***/ }),

/***/ "./src/images/appetizers-image6.webp":
/*!*******************************************!*\
  !*** ./src/images/appetizers-image6.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/appetizers-image6249fb660ad6d2107c1f2.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/appetizers-image6.webp?");

/***/ }),

/***/ "./src/images/beverages-image1.jpeg":
/*!******************************************!*\
  !*** ./src/images/beverages-image1.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/beverages-image1bff964ff2f1d8fa6bc18.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/beverages-image1.jpeg?");

/***/ }),

/***/ "./src/images/beverages-image2.jpeg":
/*!******************************************!*\
  !*** ./src/images/beverages-image2.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/beverages-image25659eda151d41f9e6ee0.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/beverages-image2.jpeg?");

/***/ }),

/***/ "./src/images/beverages-image3.webp":
/*!******************************************!*\
  !*** ./src/images/beverages-image3.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/beverages-image32154aa3c8840d5db3b40.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/beverages-image3.webp?");

/***/ }),

/***/ "./src/images/beverages-image4.webp":
/*!******************************************!*\
  !*** ./src/images/beverages-image4.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/beverages-image4cbec2ec3789a278a0b0f.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/beverages-image4.webp?");

/***/ }),

/***/ "./src/images/beverages-image5.jpeg":
/*!******************************************!*\
  !*** ./src/images/beverages-image5.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/beverages-image508d04c52583a9df58bff.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/beverages-image5.jpeg?");

/***/ }),

/***/ "./src/images/beverages-image6.jpeg":
/*!******************************************!*\
  !*** ./src/images/beverages-image6.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/beverages-image64858a3a8b312ed68fc47.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/beverages-image6.jpeg?");

/***/ }),

/***/ "./src/images/breakFast-image1.webp":
/*!******************************************!*\
  !*** ./src/images/breakFast-image1.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/breakFast-image1267f801d3bff3093c910.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/breakFast-image1.webp?");

/***/ }),

/***/ "./src/images/breakFast-image2.webp":
/*!******************************************!*\
  !*** ./src/images/breakFast-image2.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/breakFast-image2ba566d99b6af7211b794.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/breakFast-image2.webp?");

/***/ }),

/***/ "./src/images/breakFast-image3.webp":
/*!******************************************!*\
  !*** ./src/images/breakFast-image3.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/breakFast-image382600bfa675a281bb193.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/breakFast-image3.webp?");

/***/ }),

/***/ "./src/images/breakFast-image4.webp":
/*!******************************************!*\
  !*** ./src/images/breakFast-image4.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/breakFast-image4edd6f18324c49dd19051.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/breakFast-image4.webp?");

/***/ }),

/***/ "./src/images/breakFast-image5.webp":
/*!******************************************!*\
  !*** ./src/images/breakFast-image5.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/breakFast-image598681d700081b9de8b68.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/breakFast-image5.webp?");

/***/ }),

/***/ "./src/images/breakFast-image6.webp":
/*!******************************************!*\
  !*** ./src/images/breakFast-image6.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/breakFast-image6d0893f7ab8fed0162336.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/breakFast-image6.webp?");

/***/ }),

/***/ "./src/images/desserts-image1.webp":
/*!*****************************************!*\
  !*** ./src/images/desserts-image1.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/desserts-image169cf15d113dcd7b743ee.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/desserts-image1.webp?");

/***/ }),

/***/ "./src/images/desserts-image2.webp":
/*!*****************************************!*\
  !*** ./src/images/desserts-image2.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/desserts-image28d812d3e20d86b74836c.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/desserts-image2.webp?");

/***/ }),

/***/ "./src/images/desserts-image3.webp":
/*!*****************************************!*\
  !*** ./src/images/desserts-image3.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/desserts-image3d160f5ae0519e9629607.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/desserts-image3.webp?");

/***/ }),

/***/ "./src/images/desserts-image4.webp":
/*!*****************************************!*\
  !*** ./src/images/desserts-image4.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/desserts-image404161392413affc0011b.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/desserts-image4.webp?");

/***/ }),

/***/ "./src/images/desserts-image5.webp":
/*!*****************************************!*\
  !*** ./src/images/desserts-image5.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/desserts-image5a0ad3a691f118c0a16bb.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/desserts-image5.webp?");

/***/ }),

/***/ "./src/images/desserts-image6.webp":
/*!*****************************************!*\
  !*** ./src/images/desserts-image6.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/desserts-image6401cdb7098742f7728b7.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/desserts-image6.webp?");

/***/ }),

/***/ "./src/images/main-img.avif":
/*!**********************************!*\
  !*** ./src/images/main-img.avif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/main-img8ff89cbc228236b0f72f.avif\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/main-img.avif?");

/***/ }),

/***/ "./src/images/mainCourse-image1.jpg":
/*!******************************************!*\
  !*** ./src/images/mainCourse-image1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mainCourse-image17285a978cfe0d77d4090.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/mainCourse-image1.jpg?");

/***/ }),

/***/ "./src/images/mainCourse-image2.jpg":
/*!******************************************!*\
  !*** ./src/images/mainCourse-image2.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mainCourse-image2fce103715442c7346586.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/mainCourse-image2.jpg?");

/***/ }),

/***/ "./src/images/mainCourse-image3.jpg":
/*!******************************************!*\
  !*** ./src/images/mainCourse-image3.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mainCourse-image32180d3b24b799d404cc3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/mainCourse-image3.jpg?");

/***/ }),

/***/ "./src/images/mainCourse-image4.jpg":
/*!******************************************!*\
  !*** ./src/images/mainCourse-image4.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mainCourse-image463ed0e74b222c0eaa4c8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/mainCourse-image4.jpg?");

/***/ }),

/***/ "./src/images/mainCourse-image5.jpg":
/*!******************************************!*\
  !*** ./src/images/mainCourse-image5.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mainCourse-image58bb8a7963e8b73477d2a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/mainCourse-image5.jpg?");

/***/ }),

/***/ "./src/images/mainCourse-image6.jpg":
/*!******************************************!*\
  !*** ./src/images/mainCourse-image6.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mainCourse-image6cbb18cf4735b5cf14aff.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/mainCourse-image6.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
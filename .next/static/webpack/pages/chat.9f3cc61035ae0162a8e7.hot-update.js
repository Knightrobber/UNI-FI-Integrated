/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./components/chatcomponents/names.js":
/*!********************************************!*\
  !*** ./components/chatcomponents/names.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/firebase.js */ \"./firebase/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sisirreddy/Desktop/Development/WebD/SPM project/FrontEnd/components/chatcomponents/names.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar user = \"\";\n_firebase_firebase_js__WEBPACK_IMPORTED_MODULE_3__.default.auth().onAuthStateChanged(function (user) {\n  if (user) {\n    username = user.email;\n    console.log(\"The user is \" + username);\n    username = username.split('@');\n    user = username[0];\n  } else {\n    console.log(\"no user signed in\");\n  }\n});\nvar db = _firebase_firebase_js__WEBPACK_IMPORTED_MODULE_3__.default.database();\nvar messages = [1];\n\nvar Names = function Names(props) {\n  _s();\n\n  var messagesUI = [];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      userArray = _useState3[0],\n      setUserArray = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    trigger: \"\",\n    messagesState: []\n  }),\n      state = _useState4[0],\n      setState = _useState4[1];\n\n  function retrieveMessages() {\n    // populate the global messages variable here\n    console.log(\"Hey\");\n  }\n\n  function showMessages() {\n    var UI = [];\n\n    for (var i = 0; i < messages.length; ++i) {\n      //UI.push(<p className={`${flag == 1 ? \"text-right\" : \"text-left\"}`}>message</p>)\n      // if flag = 0\n      UI.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-500 rounded p-2\",\n        style: {\n          position: \"relative\",\n          left: \"1\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-lg font-normal\",\n          children: \"message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 5\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-right font-thin\",\n          style: {\n            fontSize: \"10px\"\n          },\n          children: \"Time\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 4\n      }, this)); //if flag =1\n\n      /* UI.push(\n      \t\n      \t<div\n      \tclassName=\"bg-gray-500 p-2 rounded\"\n      \tstyle={{ position: \"relative\", right: \"1\" }}\n      \t>\n      \t\t<p className=\"text-lg font-normal\">\n      \t\t\tmessage is being written here somehow\n      \t\t</p>\n      \t\t<p\n      \t\t\tclassName=\"text-right font-thin\"\n      \t\t\tstyle={{ fontSize: \"10px\" }}\n      \t\t>\n      \t\t\tTime\n      \t\t</p>\n      \t</div>\n      ) */\n    }\n\n    return UI;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      onClick: function onClick() {\n        return setOpen(!open);\n      },\n      style: {\n        width: \"100%\"\n      },\n      className: \"\".concat(open ? \"transition transform duration-200 bg-white border-yellow-500 border-r-4 shadow-2xl\" : \"\", \"hover:bg-white z-40 duration-200 hover:border-r-4 transform transition border-yellow-500 focus:outline-none\"),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex p-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"w-1/4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"https://picsum.photos/50\",\n            className: \"rounded-full\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"w-1/2\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-xl text-medium text-gray-600\",\n            children: props.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-sm -mt-1 text-gray-500\",\n            children: \"prev message\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 7\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"w-1/4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-sm text-medium text-gray-600\",\n            children: \"5:03 pm\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 4\n    }, _this), open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"bg-gray-100 border-2 border-white\",\n      style: {\n        position: \"absolute\",\n        left: \"100%\",\n        top: \"0\",\n        width: \"85vw\",\n        height: \"92vh\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-200 shadow-xl flex items-center p-1\",\n        style: {\n          margin: \"auto\",\n          width: \"100%\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: \"https://picsum.photos/50\",\n          className: \"ml-5 rounded-full\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-2xl text-medium text-gray-800 p-1 pl-4\",\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: showMessages()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex border-t-2 border-gray-300 rounded p-1 bg-gray-200\",\n        style: {\n          position: \"absolute\",\n          width: \"100%\",\n          margin: \"auto\",\n          top: \"94%\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          style: {\n            outline: \"none\",\n            width: \"100%\",\n            margin: \"auto\"\n          },\n          className: \"text-gray-700 tracking-wider text-lg px-2 py-3 rounded-tl-lg\",\n          id: \"search\",\n          type: \"text\",\n          placeholder: \"Type a message\",\n          onChange: function onChange(e) {\n            return setText(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"font-semibold text-lg uppercase px-4 bg-yellow-500 transition transform duration-200 focus:outline-none hover:bg-green-500\",\n          children: \"Send\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 6\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Names, \"y79ETCLdPx6sIciXG4vrJ+/lP34=\");\n\n_c = Names;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Names);\n\nvar _c;\n\n$RefreshReg$(_c, \"Names\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0Y29tcG9uZW50cy9uYW1lcy5qcz84MjllIl0sIm5hbWVzIjpbInVzZXIiLCJmaXJlYmFzZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXJuYW1lIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwic3BsaXQiLCJkYiIsIm1lc3NhZ2VzIiwiTmFtZXMiLCJwcm9wcyIsIm1lc3NhZ2VzVUkiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwidGV4dCIsInNldFRleHQiLCJ1c2VyQXJyYXkiLCJzZXRVc2VyQXJyYXkiLCJ0cmlnZ2VyIiwibWVzc2FnZXNTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJyZXRyaWV2ZU1lc3NhZ2VzIiwic2hvd01lc3NhZ2VzIiwiVUkiLCJpIiwibGVuZ3RoIiwicHVzaCIsInBvc2l0aW9uIiwibGVmdCIsImZvbnRTaXplIiwid2lkdGgiLCJuYW1lIiwidG9wIiwiaGVpZ2h0IiwibWFyZ2luIiwib3V0bGluZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsSUFBSSxHQUFHLEVBQVg7QUFDQUMsK0RBQUEsR0FBZ0JDLGtCQUFoQixDQUFtQyxVQUFVRixJQUFWLEVBQWdCO0FBQ2xELE1BQUlBLElBQUosRUFBVTtBQUVURyxZQUFRLEdBQUdILElBQUksQ0FBQ0ksS0FBaEI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQWlCSCxRQUE3QjtBQUNBQSxZQUFRLEdBQUdBLFFBQVEsQ0FBQ0ksS0FBVCxDQUFlLEdBQWYsQ0FBWDtBQUNBUCxRQUFJLEdBQUdHLFFBQVEsQ0FBQyxDQUFELENBQWY7QUFJQSxHQVRELE1BVUs7QUFDSkUsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQTtBQUVELENBZkQ7QUFnQkEsSUFBSUUsRUFBRSxHQUFHUCxtRUFBQSxFQUFUO0FBQ0EsSUFB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QixPQUFPLENBQUNzQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRELGVBaUJDO0FBQVEsbUJBQVMsRUFBQyw0SEFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESSxHQTZDRCxJQXBFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXdFQSxDQWxJRDs7R0FBTS9CLEs7O0tBQUFBLEs7QUFvSU4sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXRjb21wb25lbnRzL25hbWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5qcydcbnZhciB1c2VyID0gXCJcIlxuZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbiAodXNlcikge1xuXHRpZiAodXNlcikge1xuXG5cdFx0dXNlcm5hbWUgPSB1c2VyLmVtYWlsO1xuXHRcdGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgaXMgXCIgKyB1c2VybmFtZSlcblx0XHR1c2VybmFtZSA9IHVzZXJuYW1lLnNwbGl0KCdAJylcblx0XHR1c2VyID0gdXNlcm5hbWVbMF07XG5cblxuXG5cdH1cblx0ZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coXCJubyB1c2VyIHNpZ25lZCBpblwiKVxuXHR9XG5cbn0pXG52YXIgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpXG52YXIgbWVzc2FnZXMgPSBbMV1cbmNvbnN0IE5hbWVzID0gKHByb3BzKSA9PiB7XG5cdHZhciBtZXNzYWdlc1VJID0gW11cblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW3VzZXJBcnJheSwgc2V0VXNlckFycmF5XSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IHRyaWdnZXI6IFwiXCIsbWVzc2FnZXNTdGF0ZTpbXSB9KTtcblx0XG5cdGZ1bmN0aW9uIHJldHJpZXZlTWVzc2FnZXMoKXtcblx0XHQvLyBwb3B1bGF0ZSB0aGUgZ2xvYmFsIG1lc3NhZ2VzIHZhcmlhYmxlIGhlcmVcblxuXG5cdFx0Y29uc29sZS5sb2coXCJIZXlcIilcblx0fVxuXG5cdGZ1bmN0aW9uIHNob3dNZXNzYWdlcygpIHtcblx0XHR2YXIgVUkgPSBbXVxuXHRcdGZvcih2YXIgaT0wO2k8bWVzc2FnZXMubGVuZ3RoOysraSl7XG5cdFx0XHQvL1VJLnB1c2goPHAgY2xhc3NOYW1lPXtgJHtmbGFnID09IDEgPyBcInRleHQtcmlnaHRcIiA6IFwidGV4dC1sZWZ0XCJ9YH0+bWVzc2FnZTwvcD4pXG5cdFx0XHQvLyBpZiBmbGFnID0gMFxuXHRcdFx0VUkucHVzaChcblx0XHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCByb3VuZGVkIHAtMlwiXG5cdFx0XHRzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBsZWZ0OiBcIjFcIiB9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbm9ybWFsXCI+bWVzc2FnZTwvcD5cblx0XHRcdFx0PHBcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGZvbnQtdGhpblwiXG5cdFx0XHRcdFx0c3R5bGU9e3sgZm9udFNpemU6IFwiMTBweFwiIH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRUaW1lXG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdClcblxuXHRcdFx0Ly9pZiBmbGFnID0xXG5cdFx0XHQvKiBVSS5wdXNoKFxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCBwLTIgcm91bmRlZFwiXG5cdFx0XHRcdHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHJpZ2h0OiBcIjFcIiB9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW5vcm1hbFwiPlxuXHRcdFx0XHRcdFx0bWVzc2FnZSBpcyBiZWluZyB3cml0dGVuIGhlcmUgc29tZWhvd1xuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8cFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1yaWdodCBmb250LXRoaW5cIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgZm9udFNpemU6IFwiMTBweFwiIH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0VGltZVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpICovXG5cblx0XHR9XG5cdFx0cmV0dXJuIChVSSlcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxuXHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cblx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtcblx0XHRcdFx0XHRvcGVuXG5cdFx0XHRcdFx0XHQ/IFwidHJhbnNpdGlvbiB0cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGJnLXdoaXRlIGJvcmRlci15ZWxsb3ctNTAwIGJvcmRlci1yLTQgc2hhZG93LTJ4bFwiXG5cdFx0XHRcdFx0XHQ6IFwiXCJcblx0XHRcdFx0fWhvdmVyOmJnLXdoaXRlIHotNDAgZHVyYXRpb24tMjAwIGhvdmVyOmJvcmRlci1yLTQgdHJhbnNmb3JtIHRyYW5zaXRpb24gYm9yZGVyLXllbGxvdy01MDAgZm9jdXM6b3V0bGluZS1ub25lYH1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzRcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzUwXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj57cHJvcHMubmFtZX08L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIC1tdC0xIHRleHQtZ3JheS01MDBcIj5wcmV2IG1lc3NhZ2U8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+NTowMyBwbTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtvcGVuID8gKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgYm9yZGVyLTIgYm9yZGVyLXdoaXRlXCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0XHRcdGxlZnQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0dG9wOiBcIjBcIixcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjg1dndcIixcblx0XHRcdFx0XHRcdGhlaWdodDogXCI5MnZoXCIsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHNoYWRvdy14bCBmbGV4IGl0ZW1zLWNlbnRlciBwLTFcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luOiBcImF1dG9cIiwgd2lkdGg6IFwiMTAwJVwiIH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvNTBcIiBjbGFzc05hbWU9XCJtbC01IHJvdW5kZWQtZnVsbFwiIC8+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LW1lZGl1bSB0ZXh0LWdyYXktODAwIHAtMSBwbC00XCI+e3Byb3BzLm5hbWV9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7c2hvd01lc3NhZ2VzKCl9XG5cdFx0XHRcdFx0XHR7LyogPHAgY2xhc3NOYW1lPXtgJHtmbGFnID09IDEgPyBcInRleHQtcmlnaHRcIiA6IFwidGV4dC1sZWZ0XCJ9YH0+bWVzc2FnZTwvcD4gKi99XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGJvcmRlci10LTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgcC0xIGJnLWdyYXktMjAwXCJcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBcImF1dG9cIixcblx0XHRcdFx0XHRcdFx0dG9wOiBcIjk0JVwiLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgb3V0bGluZTogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luOiBcImF1dG9cIiB9fVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHRyYWNraW5nLXdpZGVyIHRleHQtbGcgcHgtMiBweS0zIHJvdW5kZWQtdGwtbGdcIlxuXHRcdFx0XHRcdFx0XHRpZD1cInNlYXJjaFwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgdXBwZXJjYXNlIHB4LTQgYmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWdyZWVuLTUwMFwiPlxuXHRcdFx0XHRcdFx0XHRTZW5kXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIDogbnVsbH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVzO1xuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/chatcomponents/names.js\n");

/***/ })

});
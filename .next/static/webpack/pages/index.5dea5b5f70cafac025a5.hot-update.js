webpackHotUpdate_N_E("pages/index",{

/***/ "./components/headlines.js":
/*!*********************************!*\
  !*** ./components/headlines.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_urlHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/urlHelper */ "./helpers/urlHelper.js");

var _jsxFileName = "C:\\Users\\HOME\\Desktop\\hindustan-daily\\components\\headlines.js";




function Headlines(_ref) {
  var date = _ref.date,
      image = _ref.image,
      title = _ref.title,
      slug = _ref.slug;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: Object(_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_3__["getNewsHref"])(slug),
    as: Object(_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_3__["getNewsLink"])(slug),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "headline-link",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "headline-left",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "headline-left-img",
            src: image.file.url,
            alt: image.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "headline-right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = Headlines;
/* harmony default export */ __webpack_exports__["default"] = (Headlines);

var _c;

$RefreshReg$(_c, "Headlines");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkbGluZXMuanMiXSwibmFtZXMiOlsiSGVhZGxpbmVzIiwiZGF0ZSIsImltYWdlIiwidGl0bGUiLCJzbHVnIiwiZ2V0TmV3c0hyZWYiLCJnZXROZXdzTGluayIsImZpbGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFNBQVQsT0FBaUQ7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMvQyxzQkFDRSxxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUMsc0VBQVcsQ0FBQ0QsSUFBRCxDQUF2QjtBQUErQixNQUFFLEVBQUVFLHNFQUFXLENBQUNGLElBQUQsQ0FBOUM7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBQyxlQUFiO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNBO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFtQyxlQUFHLEVBQUVGLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxHQUFuRDtBQUF3RCxlQUFHLEVBQUVOLEtBQUssQ0FBQ0M7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFJQTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxpQ0FDRTtBQUFBLHNCQUFJQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7S0FmUUgsUztBQWlCTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWRlYTViNWY3MGNhZmFjMDI1YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgZ2V0TmV3c0hyZWYsIGdldE5ld3NMaW5rIH0gZnJvbSAnLi4vaGVscGVycy91cmxIZWxwZXInO1xyXG5cclxuZnVuY3Rpb24gSGVhZGxpbmVzKHsgZGF0ZSwgaW1hZ2UsIHRpdGxlLCBzbHVnIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17Z2V0TmV3c0hyZWYoc2x1Zyl9IGFzPXtnZXROZXdzTGluayhzbHVnKX0+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRsaW5lLWxpbmtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbWItMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lLWxlZnRcIj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkbGluZS1sZWZ0LWltZ1wiIHNyYz17aW1hZ2UuZmlsZS51cmx9IGFsdD17aW1hZ2UudGl0bGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGxpbmVzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
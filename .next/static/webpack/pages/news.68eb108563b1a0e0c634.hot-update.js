webpackHotUpdate_N_E("pages/news",{

/***/ "./helpers/urlHelper.js":
/*!******************************!*\
  !*** ./helpers/urlHelper.js ***!
  \******************************/
/*! exports provided: getNewsLink, getNewsHref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsLink", function() { return getNewsLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsHref", function() { return getNewsHref; });
var getNewsLink = function getNewsLink(slug) {
  return "/news/".concat(slug);
};
var getNewsHref = function getNewsHref(slug) {
  return {
    pathname: '/news/[slug]',
    query: {
      slug: slug
    }
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy91cmxIZWxwZXIuanMiXSwibmFtZXMiOlsiZ2V0TmV3c0xpbmsiLCJzbHVnIiwiZ2V0TmV3c0hyZWYiLCJwYXRobmFtZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRDtBQUFBLHlCQUFtQkEsSUFBbkI7QUFBQSxDQUFwQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNELElBQUQ7QUFBQSxTQUFXO0FBQ2xDRSxZQUFRLEVBQUUsY0FEd0I7QUFFbENDLFNBQUssRUFBRTtBQUFDSCxVQUFJLEVBQUVBO0FBQVA7QUFGMkIsR0FBWDtBQUFBLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld3MuNjhlYjEwODU2M2IxYTBlMGM2MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXROZXdzTGluayA9IChzbHVnKSA9PiBgL25ld3MvJHtzbHVnfWA7XHJcbmV4cG9ydCBjb25zdCBnZXROZXdzSHJlZiA9IChzbHVnKSA9PiAoe1xyXG4gICAgcGF0aG5hbWU6ICcvbmV3cy9bc2x1Z10nLFxyXG4gICAgcXVlcnk6IHtzbHVnOiBzbHVnfSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
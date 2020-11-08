webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_adpost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/adpost */ "./components/adpost.js");
/* harmony import */ var _components_headlines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/headlines */ "./components/headlines.js");






var _jsxFileName = "C:\\Users\\HOME\\Desktop\\hindustan-daily\\pages\\index.js",
    _s = $RefreshSig$();







var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "zxcekwsr7ul3",
  accessToken: "X4D5eS-qwnmqBXyO7CA8u-qve93tOpq7MxeM3kWCbEw"
});

function HomePage() {
  _s();

  var _this = this;

  function fetchNews() {
    return _fetchNews.apply(this, arguments);
  }

  function _fetchNews() {
    _fetchNews = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.getEntries({
                content_type: "post"
              });

            case 2:
              entries = _context2.sent;

              if (!entries.items) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchNews.apply(this, arguments);
  }

  function fetchAds() {
    return _fetchAds.apply(this, arguments);
  }

  function _fetchAds() {
    _fetchAds = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.getEntries({
                content_type: "addPost"
              });

            case 2:
              entries = _context3.sent;

              if (!entries.items) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchAds.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      ads = _useState2[0],
      setAds = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getPosts() {
      return _getPosts.apply(this, arguments);
    }

    function _getPosts() {
      _getPosts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var allPosts, allAds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchNews();

              case 2:
                allPosts = _context.sent;
                setPosts(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allPosts));
                console.log(allPosts);
                _context.next = 7;
                return fetchAds();

              case 7:
                allAds = _context.sent;
                setAds(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allAds));
                console.log(allAds);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getPosts.apply(this, arguments);
    }

    getPosts();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-md-6 col-lg-4 mt-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: ads.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
              image: ads[0].fields.adPost.fields,
              link: ads[0].fields.link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 11
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
              className: "bg-light",
              children: "Top Stories"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 7
            }, this), posts.length > 0 ? posts.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_8__["default"], {
                date: p.fields.date,
                image: p.fields.image.fields,
                title: p.fields.title,
                slug: p.fields.slug
              }, p.fields.title, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 13
              }, _this);
            }) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-md-6 col-lg-4 mt-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: ads.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
              image: ads[1].fields.adPost.fields,
              link: ads[1].fields.link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
              className: "bg-light",
              children: "Big News"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 11
            }, this), posts.length > 0 ? posts.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_8__["default"], {
                date: p.fields.date,
                image: p.fields.image.fields,
                title: p.fields.title,
                slug: p.fields.slug
              }, p.fields.title, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, _this);
            }) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-md-6 col-lg-4 mt-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: ads.length > 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
              image: ads[2].fields.adPost.fields,
              link: ads[2].fields.link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
              className: "bg-light",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), posts.length > 0 ? posts.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_8__["default"], {
                date: p.fields.date,
                image: p.fields.image.fields,
                title: p.fields.title,
                slug: p.fields.slug
              }, p.fields.title, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, _this);
            }) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(HomePage, "N65+2IiFQS5dOwyDBNCTBGkQEOY=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoTmV3cyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJlbnRyaWVzIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFR5cGUiLCJuYW1lIiwiZmV0Y2hBZHMiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJhZHMiLCJzZXRBZHMiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0cyIsImFsbFBvc3RzIiwiYWxsQWRzIiwibGVuZ3RoIiwiZmllbGRzIiwiYWRQb3N0IiwibGluayIsIm1hcCIsInAiLCJkYXRlIiwiaW1hZ2UiLCJ0aXRsZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDJFQUFELENBQVAsQ0FBc0JDLFlBQXRCLENBQW1DO0FBQ2hEQyxPQUFLLEVBQUVDLGNBRHlDO0FBRWhEQyxhQUFXLEVBQUVELDZDQUErQ0U7QUFGWixDQUFuQyxDQUFmOztBQUtBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxXQUNIQyxTQURHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtNQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN3QlIsTUFBTSxDQUFDUyxVQUFQLENBQWtCO0FBQUVDLDRCQUFZLEVBQUU7QUFBaEIsZUFBbEIsQ0FEeEI7O0FBQUE7QUFDUUMscUJBRFI7O0FBQUEsbUJBRU1BLE9BQU8sQ0FBQ0MsS0FGZDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxn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QUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBaUZEOztHQTdHUTVCLFE7O0tBQUFBLFE7QUErR01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ1NThlOWM1YmMxNTUzYTkxNGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEFkUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2FkcG9zdCdcclxuaW1wb3J0IEhlYWRsaW5lcyBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRsaW5lcydcclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xyXG4gIHNwYWNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lELFxyXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxyXG59KVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hOZXdzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFkcygpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJhZGRQb3N0XCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYWRzLCBzZXRBZHNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICAgICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBmZXRjaE5ld3MoKVxyXG4gICAgICBzZXRQb3N0cyhbLi4uYWxsUG9zdHNdKVxyXG4gICAgICBjb25zb2xlLmxvZyhhbGxQb3N0cyk7XHJcbiAgICAgIGNvbnN0IGFsbEFkcyA9IGF3YWl0IGZldGNoQWRzKClcclxuICAgICAgc2V0QWRzKFsuLi5hbGxBZHNdKVxyXG4gICAgICBjb25zb2xlLmxvZyhhbGxBZHMpO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9zdHMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTNcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAge2Fkcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyA8QWRQb3N0XHJcbiAgICAgICAgICAgIGltYWdlID0ge2Fkc1swXS5maWVsZHMuYWRQb3N0LmZpZWxkc31cclxuICAgICAgICAgICAgbGluayA9IHthZHNbMF0uZmllbGRzLmxpbmt9XHJcbiAgICAgICAgICAvPiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJiZy1saWdodFwiPlRvcCBTdG9yaWVzPC9oNT5cclxuICAgICAge3Bvc3RzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHBvc3RzLm1hcChwID0+IChcclxuICAgICAgICAgICAgPEhlYWRsaW5lc1xyXG4gICAgICAgICAgICAgIGRhdGU9e3AuZmllbGRzLmRhdGV9XHJcbiAgICAgICAgICAgICAga2V5PXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICBpbWFnZT17cC5maWVsZHMuaW1hZ2UuZmllbGRzfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICBzbHVnPXtwLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNCBtdC0zXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2Fkcy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgID8gPEFkUG9zdFxyXG4gICAgICAgICAgICAgICAgaW1hZ2UgPSB7YWRzWzFdLmZpZWxkcy5hZFBvc3QuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgbGluayA9IHthZHNbMV0uZmllbGRzLmxpbmt9XHJcbiAgICAgICAgICAgICAgLz4gOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+QmlnIE5ld3M8L2g1PlxyXG4gICAgICAgICAge3Bvc3RzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBwb3N0cy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgICAgPEhlYWRsaW5lc1xyXG4gICAgICAgICAgICAgICAgZGF0ZT17cC5maWVsZHMuZGF0ZX1cclxuICAgICAgICAgICAgICAgIGtleT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17cC5maWVsZHMuaW1hZ2UuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3AuZmllbGRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgc2x1Zz17cC5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7YWRzLmxlbmd0aCA+IDJcclxuICAgICAgICAgICAgICAgID8gPEFkUG9zdFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0ge2Fkc1syXS5maWVsZHMuYWRQb3N0LmZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICBsaW5rID0ge2Fkc1syXS5maWVsZHMubGlua31cclxuICAgICAgICAgICAgICAgICAgLz4gOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJiZy1saWdodFwiPlRyZW5kaW5nPC9oNT5cclxuICAgICAgICAgICAgICB7cG9zdHMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgPyBwb3N0cy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkbGluZXNcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3AuZmllbGRzLmltYWdlLmZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Zz17cC5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
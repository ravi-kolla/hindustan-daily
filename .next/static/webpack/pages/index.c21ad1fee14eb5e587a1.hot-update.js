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

  function fetchTopStories() {
    return _fetchTopStories.apply(this, arguments);
  }

  function _fetchTopStories() {
    _fetchTopStories = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.getEntries({
                content_type: "post",
                'fields.category[match]': "top-stories"
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
    return _fetchTopStories.apply(this, arguments);
  }

  function fetchBigNews() {
    return _fetchBigNews.apply(this, arguments);
  }

  function _fetchBigNews() {
    _fetchBigNews = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.getEntries({
                content_type: "post",
                'fields.category[match]': "big-news"
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
    return _fetchBigNews.apply(this, arguments);
  }

  function fetchTrending() {
    return _fetchTrending.apply(this, arguments);
  }

  function _fetchTrending() {
    _fetchTrending = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return client.getEntries({
                content_type: "post",
                'fields.category[match]': "trending"
              });

            case 2:
              entries = _context4.sent;

              if (!entries.items) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _fetchTrending.apply(this, arguments);
  }

  function fetchAds() {
    return _fetchAds.apply(this, arguments);
  }

  function _fetchAds() {
    _fetchAds = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return client.getEntries({
                content_type: "addPost"
              });

            case 2:
              entries = _context5.sent;

              if (!entries.items) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _fetchAds.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      topStories = _useState[0],
      setTopStories = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      bigNews = _useState2[0],
      setBigNews = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      trending = _useState3[0],
      setTrending = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      ads = _useState4[0],
      setAds = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getPosts() {
      return _getPosts.apply(this, arguments);
    }

    function _getPosts() {
      _getPosts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var topStories, bigNews, trending, allAds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchTopStories();

              case 2:
                topStories = _context.sent;
                setTopStories(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(topStories));
                console.log(topStories);
                _context.next = 7;
                return fetchBigNews();

              case 7:
                bigNews = _context.sent;
                setBigNews(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(bigNews));
                console.log(bigNews);
                _context.next = 12;
                return fetchTrending();

              case 12:
                trending = _context.sent;
                setTrending(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(trending));
                console.log(trending);
                _context.next = 17;
                return fetchAds();

              case 17:
                allAds = _context.sent;
                setAds(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allAds));
                console.log(allAds);

              case 20:
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
      lineNumber: 62,
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
              lineNumber: 68,
              columnNumber: 11
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
              className: "bg-light",
              children: "Top Stories"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 7
            }, this), topStories.length > 0 ? topStories.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_8__["default"], {
                date: p.fields.date,
                image: p.fields.image.fields,
                title: p.fields.title,
                slug: p.fields.slug
              }, p.fields.title, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 13
              }, _this);
            }) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-md-6 col-lg-4 mt-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: ads.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
              image: ads[1].fields.adPost.fields,
              link: ads[1].fields.link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
              className: "bg-light",
              children: "Big News"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 11
            }, this), bigNews.length > 0 ? bigNews.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_8__["default"], {
                date: p.fields.date,
                image: p.fields.image.fields,
                title: p.fields.title,
                slug: p.fields.slug
              }, p.fields.title, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 15
              }, _this);
            }) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "col-md-6 col-lg-4 mt-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: ads.length > 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
              image: ads[2].fields.adPost.fields,
              link: ads[2].fields.link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 19
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
              className: "bg-light",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this), trending.length > 0 ? trending.map(function (p) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_8__["default"], {
                date: p.fields.date,
                image: p.fields.image.fields,
                title: p.fields.title,
                slug: p.fields.slug
              }, p.fields.title, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 19
              }, _this);
            }) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(HomePage, "1npsJYXdS23nI3z5X7+lUNEpldw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoVG9wU3RvcmllcyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJlbnRyaWVzIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFR5cGUiLCJuYW1lIiwiZmV0Y2hCaWdOZXdzIiwiZmV0Y2hUcmVuZGluZyIsImZldGNoQWRzIiwidXNlU3RhdGUiLCJ0b3BTdG9yaWVzIiwic2V0VG9wU3RvcmllcyIsImJpZ05ld3MiLCJzZXRCaWdOZXdzIiwidHJlbmRpbmciLCJzZXRUcmVuZGluZyIsImFkcyIsInNldEFkcyIsInVzZUVmZmVjdCIsImdldFBvc3RzIiwiYWxsQWRzIiwibGVuZ3RoIiwiZmllbGRzIiwiYWRQb3N0IiwibGluayIsIm1hcCIsInAiLCJkYXRlIiwiaW1hZ2UiLCJ0aXRsZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDJFQUFELENBQVAsQ0FBc0JDLFlBQXRCLENBQW1DO0FBQ2hEQyxPQUFLLEVBQUVDLGNBRHlDO0FBRWhEQyxhQUFXLEVBQUVELDZDQUErQ0U7QUFGWixDQUFuQyxDQUFmOztBQUtBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxXQUNIQyxlQURHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN3QlIsTUFBTSxDQUFDUyxVQUFQLENBQWtCO0FBQUVDLDRCQUFZLEVBQUUsTUFB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QSxDQUFDLENBQUNKLE1BQUYsQ0FBU0ssSUFEakI7QUFHRSxxQkFBSyxFQUFFRCxDQUFDLENBQUNKLE1BQUYsQ0FBU00sS0FBVCxDQUFlTixNQUh4QjtBQUlFLHFCQUFLLEVBQUVJLENBQUMsQ0FBQ0osTUFBRixDQUFTTyxLQUpsQjtBQUtFLG9CQUFJLEVBQUVILENBQUMsQ0FBQ0osTUFBRixDQUFTUTtBQUxqQixpQkFFT0osQ0FBQyxDQUFDSixNQUFGLENBQVNPLEtBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGM7QUFBQSxhQUFkLENBREgsR0FVRyxJQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBaUZEOztHQWpJUWpDLFE7O0tBQUFBLFE7QUFtSU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMyMWFkMWZlZTE0ZWI1ZTU4N2ExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEFkUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2FkcG9zdCdcclxuaW1wb3J0IEhlYWRsaW5lcyBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRsaW5lcydcclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xyXG4gIHNwYWNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lELFxyXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxyXG59KVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb3BTdG9yaWVzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiwgJ2ZpZWxkcy5jYXRlZ29yeVttYXRjaF0nOiBcInRvcC1zdG9yaWVzXCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCaWdOZXdzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiwgJ2ZpZWxkcy5jYXRlZ29yeVttYXRjaF0nOiBcImJpZy1uZXdzXCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmVuZGluZygpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJwb3N0XCIsICdmaWVsZHMuY2F0ZWdvcnlbbWF0Y2hdJzogXCJ0cmVuZGluZ1wiIH0pXHJcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQWRzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcImFkZFBvc3RcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBjb25zdCBbdG9wU3Rvcmllcywgc2V0VG9wU3Rvcmllc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYmlnTmV3cywgc2V0QmlnTmV3c10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbdHJlbmRpbmcsIHNldFRyZW5kaW5nXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthZHMsIHNldEFkc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gICAgICBjb25zdCB0b3BTdG9yaWVzID0gYXdhaXQgZmV0Y2hUb3BTdG9yaWVzKClcclxuICAgICAgc2V0VG9wU3RvcmllcyhbLi4udG9wU3Rvcmllc10pXHJcbiAgICAgIGNvbnNvbGUubG9nKHRvcFN0b3JpZXMpO1xyXG4gICAgICBjb25zdCBiaWdOZXdzID0gYXdhaXQgZmV0Y2hCaWdOZXdzKClcclxuICAgICAgc2V0QmlnTmV3cyhbLi4uYmlnTmV3c10pXHJcbiAgICAgIGNvbnNvbGUubG9nKGJpZ05ld3MpO1xyXG4gICAgICBjb25zdCB0cmVuZGluZyA9IGF3YWl0IGZldGNoVHJlbmRpbmcoKVxyXG4gICAgICBzZXRUcmVuZGluZyhbLi4udHJlbmRpbmddKVxyXG4gICAgICBjb25zb2xlLmxvZyh0cmVuZGluZyk7XHJcbiAgICAgIGNvbnN0IGFsbEFkcyA9IGF3YWl0IGZldGNoQWRzKClcclxuICAgICAgc2V0QWRzKFsuLi5hbGxBZHNdKVxyXG4gICAgICBjb25zb2xlLmxvZyhhbGxBZHMpO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9zdHMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTNcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAge2Fkcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyA8QWRQb3N0XHJcbiAgICAgICAgICAgIGltYWdlID0ge2Fkc1swXS5maWVsZHMuYWRQb3N0LmZpZWxkc31cclxuICAgICAgICAgICAgbGluayA9IHthZHNbMF0uZmllbGRzLmxpbmt9XHJcbiAgICAgICAgICAvPiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJiZy1saWdodFwiPlRvcCBTdG9yaWVzPC9oNT5cclxuICAgICAge3RvcFN0b3JpZXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gdG9wU3Rvcmllcy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgIDxIZWFkbGluZXNcclxuICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgIGtleT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e3AuZmllbGRzLmltYWdlLmZpZWxkc31cclxuICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgc2x1Zz17cC5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTQgbXQtM1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHthZHMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICA/IDxBZFBvc3RcclxuICAgICAgICAgICAgICAgIGltYWdlID0ge2Fkc1sxXS5maWVsZHMuYWRQb3N0LmZpZWxkc31cclxuICAgICAgICAgICAgICAgIGxpbmsgPSB7YWRzWzFdLmZpZWxkcy5saW5rfVxyXG4gICAgICAgICAgICAgIC8+IDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJiZy1saWdodFwiPkJpZyBOZXdzPC9oNT5cclxuICAgICAgICAgIHtiaWdOZXdzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBiaWdOZXdzLm1hcChwID0+IChcclxuICAgICAgICAgICAgICA8SGVhZGxpbmVzXHJcbiAgICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgICAga2V5PXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtwLmZpZWxkcy5pbWFnZS5maWVsZHN9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBzbHVnPXtwLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHthZHMubGVuZ3RoID4gMlxyXG4gICAgICAgICAgICAgICAgPyA8QWRQb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSB7YWRzWzJdLmZpZWxkcy5hZFBvc3QuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSB7YWRzWzJdLmZpZWxkcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAvPiA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+VHJlbmRpbmc8L2g1PlxyXG4gICAgICAgICAgICAgIHt0cmVuZGluZy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICA/IHRyZW5kaW5nLm1hcChwID0+IChcclxuICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lc1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e3AuZmllbGRzLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17cC5maWVsZHMuaW1hZ2UuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzbHVnPXtwLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
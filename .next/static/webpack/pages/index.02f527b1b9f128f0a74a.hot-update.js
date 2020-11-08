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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_adpost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/adpost */ "./components/adpost.js");
/* harmony import */ var _components_mainBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/mainBanner */ "./components/mainBanner.js");
/* harmony import */ var _components_headlines__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/headlines */ "./components/headlines.js");






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

  function fetchMainBanner() {
    return _fetchMainBanner.apply(this, arguments);
  }

  function _fetchMainBanner() {
    _fetchMainBanner = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return client.getEntries({
                content_type: "mainBanner"
              });

            case 2:
              entries = _context6.sent;

              if (!entries.items) {
                _context6.next = 5;
                break;
              }

              return _context6.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _fetchMainBanner.apply(this, arguments);
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      mainBanner = _useState5[0],
      setMainBanner = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getPosts() {
      return _getPosts.apply(this, arguments);
    }

    function _getPosts() {
      _getPosts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var topStories, bigNews, trending, allAds, mainBanner;
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
                _context.next = 22;
                return fetchMainBanner();

              case 22:
                mainBanner = _context.sent;
                setMainBanner(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(mainBanner));
                console.log(mainBanner);

              case 25:
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-md-6 col-lg-4 mt-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: mainBanner.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_mainBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
                image: mainBanner[0].fields.banner.fields,
                link: mainBanner[0].fields.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 11
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-md-6 col-lg-4 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ads.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
                image: ads[0].fields.adPost.fields,
                link: ads[0].fields.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 11
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
                className: "bg-light",
                children: "Top Stories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 7
              }, this), topStories.length > 0 ? topStories.map(function (p) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  date: p.fields.date,
                  image: p.fields.image.fields,
                  title: p.fields.title,
                  slug: p.fields.slug
                }, p.fields.title, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 13
                }, _this);
              }) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-md-6 col-lg-4 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ads.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
                image: ads[1].fields.adPost.fields,
                link: ads[1].fields.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 15
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
                className: "bg-light",
                children: "Big News"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 11
              }, this), bigNews.length > 0 ? bigNews.map(function (p) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  date: p.fields.date,
                  image: p.fields.image.fields,
                  title: p.fields.title,
                  slug: p.fields.slug
                }, p.fields.title, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 15
                }, _this);
              }) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-md-6 col-lg-4 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ads.length > 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
                image: ads[2].fields.adPost.fields,
                link: ads[2].fields.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
                className: "bg-light",
                children: "Trending"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 15
              }, this), trending.length > 0 ? trending.map(function (p) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  date: p.fields.date,
                  image: p.fields.image.fields,
                  title: p.fields.title,
                  slug: p.fields.slug
                }, p.fields.title, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 19
                }, _this);
              }) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(HomePage, "/KUWA8F1IMoYtapuWnz4mKtzCHw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoVG9wU3RvcmllcyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJlbnRyaWVzIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFR5cGUiLCJuYW1lIiwiZmV0Y2hCaWdOZXdzIiwiZmV0Y2hUcmVuZGluZyIsImZldGNoQWRzIiwiZmV0Y2hNYWluQmFubmVyIiwidXNlU3RhdGUiLCJ0b3BTdG9yaWVzIiwic2V0VG9wU3RvcmllcyIsImJpZ05ld3MiLCJzZXRCaWdOZXdzIiwidHJlbmRpbmciLCJzZXRUcmVuZGluZyIsImFkcyIsInNldEFkcyIsIm1haW5CYW5uZXIiLCJzZXRNYWluQmFubmVyIiwidXNlRWZmZWN0IiwiZ2V0UG9zdHMiLCJhbGxBZHMiLCJsZW5ndGgiLCJmaWVsZHMiLCJiYW5uZXIiLCJsaW5rIiwiYWRQb3N0IiwibWFwIiwicCIsImRhdGUiLCJpbWFnZSIsInRpdGxlIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMkVBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERDLE9BQUssRUFBRUMsY0FEeUM7QUFFaERDLGFBQVcsRUFBRUQsNkNBQStDRTtBQUZaLENBQW5DLENBQWY7O0FBS0EsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLFdBQ0hDLGVBREc7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Q0FBQ2MsR0FBVCxDQUFhLFVBQUFDLENBQUM7QUFBQSxvQ0FDZCxxRUFBQyw2REFBRDtBQUNFLHNCQUFJLEVBQUVBLENBQUMsQ0FBQ0wsTUFBRixDQUFTTSxJQURqQjtBQUdFLHVCQUFLLEVBQUVELENBQUMsQ0FBQ0wsTUFBRixDQUFTTyxLQUFULENBQWVQLE1BSHhCO0FBSUUsdUJBQUssRUFBRUssQ0FBQyxDQUFDTCxNQUFGLENBQVNRLEtBSmxCO0FBS0Usc0JBQUksRUFBRUgsQ0FBQyxDQUFDTCxNQUFGLENBQVNTO0FBTGpCLG1CQUVPSixDQUFDLENBQUNMLE1BQUYsQ0FBU1EsS0FGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEYztBQUFBLGVBQWQsQ0FESCxHQVVHLElBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQThGRDs7R0F4SlFyQyxROztLQUFBQSxRO0FBMEpNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMmY1MjdiMWI5ZjEyOGYwYTc0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBBZFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hZHBvc3QnXHJcbmltcG9ydCBNYWluQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbkJhbm5lcidcclxuaW1wb3J0IEhlYWRsaW5lcyBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRsaW5lcydcclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xyXG4gIHNwYWNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lELFxyXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxyXG59KVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb3BTdG9yaWVzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiwgJ2ZpZWxkcy5jYXRlZ29yeVttYXRjaF0nOiBcInRvcC1zdG9yaWVzXCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCaWdOZXdzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiwgJ2ZpZWxkcy5jYXRlZ29yeVttYXRjaF0nOiBcImJpZy1uZXdzXCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmVuZGluZygpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJwb3N0XCIsICdmaWVsZHMuY2F0ZWdvcnlbbWF0Y2hdJzogXCJ0cmVuZGluZ1wiIH0pXHJcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQWRzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcImFkZFBvc3RcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaE1haW5CYW5uZXIoKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwibWFpbkJhbm5lclwiIH0pXHJcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcclxuICB9XHJcblxyXG4gIGNvbnN0IFt0b3BTdG9yaWVzLCBzZXRUb3BTdG9yaWVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtiaWdOZXdzLCBzZXRCaWdOZXdzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFt0cmVuZGluZywgc2V0VHJlbmRpbmddID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2Fkcywgc2V0QWRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttYWluQmFubmVyLCBzZXRNYWluQmFubmVyXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XHJcbiAgICAgIGNvbnN0IHRvcFN0b3JpZXMgPSBhd2FpdCBmZXRjaFRvcFN0b3JpZXMoKVxyXG4gICAgICBzZXRUb3BTdG9yaWVzKFsuLi50b3BTdG9yaWVzXSlcclxuICAgICAgY29uc29sZS5sb2codG9wU3Rvcmllcyk7XHJcbiAgICAgIGNvbnN0IGJpZ05ld3MgPSBhd2FpdCBmZXRjaEJpZ05ld3MoKVxyXG4gICAgICBzZXRCaWdOZXdzKFsuLi5iaWdOZXdzXSlcclxuICAgICAgY29uc29sZS5sb2coYmlnTmV3cyk7XHJcbiAgICAgIGNvbnN0IHRyZW5kaW5nID0gYXdhaXQgZmV0Y2hUcmVuZGluZygpXHJcbiAgICAgIHNldFRyZW5kaW5nKFsuLi50cmVuZGluZ10pXHJcbiAgICAgIGNvbnNvbGUubG9nKHRyZW5kaW5nKTtcclxuICAgICAgY29uc3QgYWxsQWRzID0gYXdhaXQgZmV0Y2hBZHMoKVxyXG4gICAgICBzZXRBZHMoWy4uLmFsbEFkc10pXHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbEFkcyk7XHJcbiAgICAgIGNvbnN0IG1haW5CYW5uZXIgPSBhd2FpdCBmZXRjaE1haW5CYW5uZXIoKVxyXG4gICAgICBzZXRNYWluQmFubmVyKFsuLi5tYWluQmFubmVyXSlcclxuICAgICAgY29uc29sZS5sb2cobWFpbkJhbm5lcik7XHJcbiAgICB9XHJcbiAgICBnZXRQb3N0cygpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTNcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAge21haW5CYW5uZXIubGVuZ3RoID4gMFxyXG4gICAgICAgID8gPE1haW5CYW5uZXJcclxuICAgICAgICAgICAgaW1hZ2UgPSB7bWFpbkJhbm5lclswXS5maWVsZHMuYmFubmVyLmZpZWxkc31cclxuICAgICAgICAgICAgbGluayA9IHttYWluQmFubmVyWzBdLmZpZWxkcy5saW5rfVxyXG4gICAgICAgICAgLz4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNCBtdC0zXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIHthZHMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gPEFkUG9zdFxyXG4gICAgICAgICAgICBpbWFnZSA9IHthZHNbMF0uZmllbGRzLmFkUG9zdC5maWVsZHN9XHJcbiAgICAgICAgICAgIGxpbmsgPSB7YWRzWzBdLmZpZWxkcy5saW5rfVxyXG4gICAgICAgICAgLz4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICA8aDUgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5Ub3AgU3RvcmllczwvaDU+XHJcbiAgICAgIHt0b3BTdG9yaWVzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHRvcFN0b3JpZXMubWFwKHAgPT4gKFxyXG4gICAgICAgICAgICA8SGVhZGxpbmVzXHJcbiAgICAgICAgICAgICAgZGF0ZT17cC5maWVsZHMuZGF0ZX1cclxuICAgICAgICAgICAgICBrZXk9e3AuZmllbGRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtwLmZpZWxkcy5pbWFnZS5maWVsZHN9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3AuZmllbGRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHNsdWc9e3AuZmllbGRzLnNsdWd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTNcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7YWRzLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgPyA8QWRQb3N0XHJcbiAgICAgICAgICAgICAgICBpbWFnZSA9IHthZHNbMV0uZmllbGRzLmFkUG9zdC5maWVsZHN9XHJcbiAgICAgICAgICAgICAgICBsaW5rID0ge2Fkc1sxXS5maWVsZHMubGlua31cclxuICAgICAgICAgICAgICAvPiA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5CaWcgTmV3czwvaDU+XHJcbiAgICAgICAgICB7YmlnTmV3cy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gYmlnTmV3cy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgICAgPEhlYWRsaW5lc1xyXG4gICAgICAgICAgICAgICAgZGF0ZT17cC5maWVsZHMuZGF0ZX1cclxuICAgICAgICAgICAgICAgIGtleT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17cC5maWVsZHMuaW1hZ2UuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3AuZmllbGRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgc2x1Zz17cC5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7YWRzLmxlbmd0aCA+IDJcclxuICAgICAgICAgICAgICAgID8gPEFkUG9zdFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0ge2Fkc1syXS5maWVsZHMuYWRQb3N0LmZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICBsaW5rID0ge2Fkc1syXS5maWVsZHMubGlua31cclxuICAgICAgICAgICAgICAgICAgLz4gOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJiZy1saWdodFwiPlRyZW5kaW5nPC9oNT5cclxuICAgICAgICAgICAgICB7dHJlbmRpbmcubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgPyB0cmVuZGluZy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkbGluZXNcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3AuZmllbGRzLmltYWdlLmZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Zz17cC5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
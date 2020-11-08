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
            className: "mt-3",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoVG9wU3RvcmllcyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJlbnRyaWVzIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFR5cGUiLCJuYW1lIiwiZmV0Y2hCaWdOZXdzIiwiZmV0Y2hUcmVuZGluZyIsImZldGNoQWRzIiwiZmV0Y2hNYWluQmFubmVyIiwidXNlU3RhdGUiLCJ0b3BTdG9yaWVzIiwic2V0VG9wU3RvcmllcyIsImJpZ05ld3MiLCJzZXRCaWdOZXdzIiwidHJlbmRpbmciLCJzZXRUcmVuZGluZyIsImFkcyIsInNldEFkcyIsIm1haW5CYW5uZXIiLCJzZXRNYWluQmFubmVyIiwidXNlRWZmZWN0IiwiZ2V0UG9zdHMiLCJhbGxBZHMiLCJsZW5ndGgiLCJmaWVsZHMiLCJiYW5uZXIiLCJsaW5rIiwiYWRQb3N0IiwibWFwIiwicCIsImRhdGUiLCJpbWFnZSIsInRpdGxlIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMkVBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERDLE9BQUssRUFBRUMsY0FEeUM7QUFFaERDLGFBQVcsRUFBRUQsNkNBQStDRTtBQUZaLENBQW5DLENBQWY7O0FBS0EsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLFdBQ0hDLGVBREc7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFDYyxHQUFULENBQWEsVUFBQUMsQ0FBQztBQUFBLG9DQUNkLHFFQUFDLDZEQUFEO0FBQ0Usc0JBQUksRUFBRUEsQ0FBQyxDQUFDTCxNQUFGLENBQVNNLElBRGpCO0FBR0UsdUJBQUssRUFBRUQsQ0FBQyxDQUFDTCxNQUFGLENBQVNPLEtBQVQsQ0FBZVAsTUFIeEI7QUFJRSx1QkFBSyxFQUFFSyxDQUFDLENBQUNMLE1BQUYsQ0FBU1EsS0FKbEI7QUFLRSxzQkFBSSxFQUFFSCxDQUFDLENBQUNMLE1BQUYsQ0FBU1M7QUFMakIsbUJBRU9KLENBQUMsQ0FBQ0wsTUFBRixDQUFTUSxLQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURjO0FBQUEsZUFBZCxDQURILEdBVUcsSUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBOEZEOztHQXhKUXJDLFE7O0tBQUFBLFE7QUEwSk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4MDg5ZDNjM2EyMjZkN2M3Y2VlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEFkUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2FkcG9zdCdcclxuaW1wb3J0IE1haW5CYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluQmFubmVyJ1xyXG5pbXBvcnQgSGVhZGxpbmVzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGxpbmVzJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnY29udGVudGZ1bCcpLmNyZWF0ZUNsaWVudCh7XHJcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXHJcbiAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRvcFN0b3JpZXMoKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwicG9zdFwiLCAnZmllbGRzLmNhdGVnb3J5W21hdGNoXSc6IFwidG9wLXN0b3JpZXNcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEJpZ05ld3MoKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwicG9zdFwiLCAnZmllbGRzLmNhdGVnb3J5W21hdGNoXSc6IFwiYmlnLW5ld3NcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRyZW5kaW5nKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiwgJ2ZpZWxkcy5jYXRlZ29yeVttYXRjaF0nOiBcInRyZW5kaW5nXCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBZHMoKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwiYWRkUG9zdFwiIH0pXHJcbiAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXNcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoTWFpbkJhbm5lcigpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJtYWluQmFubmVyXCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3RvcFN0b3JpZXMsIHNldFRvcFN0b3JpZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2JpZ05ld3MsIHNldEJpZ05ld3NdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3RyZW5kaW5nLCBzZXRUcmVuZGluZ10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYWRzLCBzZXRBZHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21haW5CYW5uZXIsIHNldE1haW5CYW5uZXJdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICAgICAgY29uc3QgdG9wU3RvcmllcyA9IGF3YWl0IGZldGNoVG9wU3RvcmllcygpXHJcbiAgICAgIHNldFRvcFN0b3JpZXMoWy4uLnRvcFN0b3JpZXNdKVxyXG4gICAgICBjb25zb2xlLmxvZyh0b3BTdG9yaWVzKTtcclxuICAgICAgY29uc3QgYmlnTmV3cyA9IGF3YWl0IGZldGNoQmlnTmV3cygpXHJcbiAgICAgIHNldEJpZ05ld3MoWy4uLmJpZ05ld3NdKVxyXG4gICAgICBjb25zb2xlLmxvZyhiaWdOZXdzKTtcclxuICAgICAgY29uc3QgdHJlbmRpbmcgPSBhd2FpdCBmZXRjaFRyZW5kaW5nKClcclxuICAgICAgc2V0VHJlbmRpbmcoWy4uLnRyZW5kaW5nXSlcclxuICAgICAgY29uc29sZS5sb2codHJlbmRpbmcpO1xyXG4gICAgICBjb25zdCBhbGxBZHMgPSBhd2FpdCBmZXRjaEFkcygpXHJcbiAgICAgIHNldEFkcyhbLi4uYWxsQWRzXSlcclxuICAgICAgY29uc29sZS5sb2coYWxsQWRzKTtcclxuICAgICAgY29uc3QgbWFpbkJhbm5lciA9IGF3YWl0IGZldGNoTWFpbkJhbm5lcigpXHJcbiAgICAgIHNldE1haW5CYW5uZXIoWy4uLm1haW5CYW5uZXJdKVxyXG4gICAgICBjb25zb2xlLmxvZyhtYWluQmFubmVyKTtcclxuICAgIH1cclxuICAgIGdldFBvc3RzKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICB7bWFpbkJhbm5lci5sZW5ndGggPiAwXHJcbiAgICAgICAgPyA8TWFpbkJhbm5lclxyXG4gICAgICAgICAgICBpbWFnZSA9IHttYWluQmFubmVyWzBdLmZpZWxkcy5iYW5uZXIuZmllbGRzfVxyXG4gICAgICAgICAgICBsaW5rID0ge21haW5CYW5uZXJbMF0uZmllbGRzLmxpbmt9XHJcbiAgICAgICAgICAvPiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTNcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAge2Fkcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyA8QWRQb3N0XHJcbiAgICAgICAgICAgIGltYWdlID0ge2Fkc1swXS5maWVsZHMuYWRQb3N0LmZpZWxkc31cclxuICAgICAgICAgICAgbGluayA9IHthZHNbMF0uZmllbGRzLmxpbmt9XHJcbiAgICAgICAgICAvPiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJiZy1saWdodFwiPlRvcCBTdG9yaWVzPC9oNT5cclxuICAgICAge3RvcFN0b3JpZXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gdG9wU3Rvcmllcy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgIDxIZWFkbGluZXNcclxuICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgIGtleT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e3AuZmllbGRzLmltYWdlLmZpZWxkc31cclxuICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgc2x1Zz17cC5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTQgbXQtM1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHthZHMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICA/IDxBZFBvc3RcclxuICAgICAgICAgICAgICAgIGltYWdlID0ge2Fkc1sxXS5maWVsZHMuYWRQb3N0LmZpZWxkc31cclxuICAgICAgICAgICAgICAgIGxpbmsgPSB7YWRzWzFdLmZpZWxkcy5saW5rfVxyXG4gICAgICAgICAgICAgIC8+IDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJiZy1saWdodFwiPkJpZyBOZXdzPC9oNT5cclxuICAgICAgICAgIHtiaWdOZXdzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBiaWdOZXdzLm1hcChwID0+IChcclxuICAgICAgICAgICAgICA8SGVhZGxpbmVzXHJcbiAgICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgICAga2V5PXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtwLmZpZWxkcy5pbWFnZS5maWVsZHN9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBzbHVnPXtwLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHthZHMubGVuZ3RoID4gMlxyXG4gICAgICAgICAgICAgICAgPyA8QWRQb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSB7YWRzWzJdLmZpZWxkcy5hZFBvc3QuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSB7YWRzWzJdLmZpZWxkcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAvPiA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+VHJlbmRpbmc8L2g1PlxyXG4gICAgICAgICAgICAgIHt0cmVuZGluZy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICA/IHRyZW5kaW5nLm1hcChwID0+IChcclxuICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lc1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e3AuZmllbGRzLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17cC5maWVsZHMuaW1hZ2UuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzbHVnPXtwLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
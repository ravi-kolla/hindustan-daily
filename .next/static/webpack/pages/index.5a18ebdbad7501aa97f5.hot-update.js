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

  function fetchReviews() {
    return _fetchReviews.apply(this, arguments);
  }

  function _fetchReviews() {
    _fetchReviews = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return client.getEntries({
                content_type: "post",
                'fields.category[match]': "movie-reviews"
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
    return _fetchReviews.apply(this, arguments);
  }

  function fetchAds() {
    return _fetchAds.apply(this, arguments);
  }

  function _fetchAds() {
    _fetchAds = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return client.getEntries({
                content_type: "addPost"
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
    return _fetchAds.apply(this, arguments);
  }

  function fetchMainBanner() {
    return _fetchMainBanner.apply(this, arguments);
  }

  function _fetchMainBanner() {
    _fetchMainBanner = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      var entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return client.getEntries({
                content_type: "mainBanner"
              });

            case 2:
              entries = _context7.sent;

              if (!entries.items) {
                _context7.next = 5;
                break;
              }

              return _context7.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      reviews = _useState6[0],
      setReviews = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getPosts() {
      return _getPosts.apply(this, arguments);
    }

    function _getPosts() {
      _getPosts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var topStories, bigNews, trending, allAds, mainBanner, reviews;
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
                _context.next = 27;
                return fetchReviews();

              case 27:
                reviews = _context.sent;
                setReviews(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(reviews));
                console.log(reviews);

              case 30:
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
            className: "mt-1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: mainBanner.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_mainBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
                image: mainBanner[0].fields.banner.fields,
                link: mainBanner[0].fields.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 11
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
                lineNumber: 101,
                columnNumber: 11
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
                className: "bg-light",
                children: "Top Stories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 7
              }, this), topStories.length > 0 ? topStories.map(function (p) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  date: p.fields.date,
                  image: p.fields.image.fields,
                  title: p.fields.title,
                  slug: p.fields.slug
                }, p.fields.title, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 13
                }, _this);
              }) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-md-6 col-lg-4 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ads.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
                image: ads[1].fields.adPost.fields,
                link: ads[1].fields.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 15
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
                className: "bg-light",
                children: "Big News"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 11
              }, this), bigNews.length > 0 ? bigNews.map(function (p) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  date: p.fields.date,
                  image: p.fields.image.fields,
                  title: p.fields.title,
                  slug: p.fields.slug
                }, p.fields.title, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 15
                }, _this);
              }) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-md-6 col-lg-4 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ads.length > 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
                image: ads[2].fields.adPost.fields,
                link: ads[2].fields.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
                className: "bg-light",
                children: "Trending"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 15
              }, this), trending.length > 0 ? trending.map(function (p) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  date: p.fields.date,
                  image: p.fields.image.fields,
                  title: p.fields.title,
                  slug: p.fields.slug
                }, p.fields.title, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, _this);
              }) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-md-6 col-lg-4 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ads.length > 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_adpost__WEBPACK_IMPORTED_MODULE_7__["default"], {
                image: ads[2].fields.adPost.fields,
                link: ads[2].fields.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 21
              }, this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
                className: "bg-light",
                children: "Reviews"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, this), reviews.length > 0 ? reviews.map(function (p) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_headlines__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  date: p.fields.date,
                  image: p.fields.image.fields,
                  title: p.fields.title,
                  slug: p.fields.slug
                }, p.fields.title, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 21
                }, _this);
              }) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(HomePage, "GHdW6DS41v78UsK5bRoqjq9Tf20=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJIb21lUGFnZSIsImZldGNoVG9wU3RvcmllcyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJlbnRyaWVzIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFR5cGUiLCJuYW1lIiwiZmV0Y2hCaWdOZXdzIiwiZmV0Y2hUcmVuZGluZyIsImZldGNoUmV2aWV3cyIsImZldGNoQWRzIiwiZmV0Y2hNYWluQmFubmVyIiwidXNlU3RhdGUiLCJ0b3BTdG9yaWVzIiwic2V0VG9wU3RvcmllcyIsImJpZ05ld3MiLCJzZXRCaWdOZXdzIiwidHJlbmRpbmciLCJzZXRUcmVuZGluZyIsImFkcyIsInNldEFkcyIsIm1haW5CYW5uZXIiLCJzZXRNYWluQmFubmVyIiwicmV2aWV3cyIsInNldFJldmlld3MiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0cyIsImFsbEFkcyIsImxlbmd0aCIsImZpZWxkcyIsImJhbm5lciIsImxpbmsiLCJhZFBvc3QiLCJtYXAiLCJwIiwiZGF0ZSIsImltYWdlIiwidGl0bGUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQywyRUFBRCxDQUFQLENBQXNCQyxZQUF0QixDQUFtQztBQUNoREMsT0FBSyxFQUFFQyxjQUR5QztBQUVoREMsYUFBVyxFQUFFRCw2Q0FBK0NFO0FBRlosQ0FBbkMsQ0FBZjs7QUFLQSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsV0FDSEMsZUFERztBQUFBO0FBQUE7O0FB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QTtBQUFBLGtCQXpFUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0hEOztHQTFMUXhDLFE7O0tBQUFBLFE7QUE0TE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhMThlYmRiYWQ3NTAxYWE5N2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEFkUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2FkcG9zdCdcclxuaW1wb3J0IE1haW5CYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluQmFubmVyJ1xyXG5pbXBvcnQgSGVhZGxpbmVzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGxpbmVzJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnY29udGVudGZ1bCcpLmNyZWF0ZUNsaWVudCh7XHJcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXHJcbiAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRvcFN0b3JpZXMoKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwicG9zdFwiLCAnZmllbGRzLmNhdGVnb3J5W21hdGNoXSc6IFwidG9wLXN0b3JpZXNcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEJpZ05ld3MoKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwicG9zdFwiLCAnZmllbGRzLmNhdGVnb3J5W21hdGNoXSc6IFwiYmlnLW5ld3NcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRyZW5kaW5nKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiwgJ2ZpZWxkcy5jYXRlZ29yeVttYXRjaF0nOiBcInRyZW5kaW5nXCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXZpZXdzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiwgJ2ZpZWxkcy5jYXRlZ29yeVttYXRjaF0nOiBcIm1vdmllLXJldmlld3NcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFkcygpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJhZGRQb3N0XCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNYWluQmFubmVyKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcIm1haW5CYW5uZXJcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBjb25zdCBbdG9wU3Rvcmllcywgc2V0VG9wU3Rvcmllc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYmlnTmV3cywgc2V0QmlnTmV3c10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbdHJlbmRpbmcsIHNldFRyZW5kaW5nXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthZHMsIHNldEFkc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbWFpbkJhbm5lciwgc2V0TWFpbkJhbm5lcl0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gICAgICBjb25zdCB0b3BTdG9yaWVzID0gYXdhaXQgZmV0Y2hUb3BTdG9yaWVzKClcclxuICAgICAgc2V0VG9wU3RvcmllcyhbLi4udG9wU3Rvcmllc10pXHJcbiAgICAgIGNvbnNvbGUubG9nKHRvcFN0b3JpZXMpO1xyXG4gICAgICBjb25zdCBiaWdOZXdzID0gYXdhaXQgZmV0Y2hCaWdOZXdzKClcclxuICAgICAgc2V0QmlnTmV3cyhbLi4uYmlnTmV3c10pXHJcbiAgICAgIGNvbnNvbGUubG9nKGJpZ05ld3MpO1xyXG4gICAgICBjb25zdCB0cmVuZGluZyA9IGF3YWl0IGZldGNoVHJlbmRpbmcoKVxyXG4gICAgICBzZXRUcmVuZGluZyhbLi4udHJlbmRpbmddKVxyXG4gICAgICBjb25zb2xlLmxvZyh0cmVuZGluZyk7XHJcbiAgICAgIGNvbnN0IGFsbEFkcyA9IGF3YWl0IGZldGNoQWRzKClcclxuICAgICAgc2V0QWRzKFsuLi5hbGxBZHNdKVxyXG4gICAgICBjb25zb2xlLmxvZyhhbGxBZHMpO1xyXG4gICAgICBjb25zdCBtYWluQmFubmVyID0gYXdhaXQgZmV0Y2hNYWluQmFubmVyKClcclxuICAgICAgc2V0TWFpbkJhbm5lcihbLi4ubWFpbkJhbm5lcl0pXHJcbiAgICAgIGNvbnNvbGUubG9nKG1haW5CYW5uZXIpO1xyXG4gICAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgZmV0Y2hSZXZpZXdzKClcclxuICAgICAgc2V0UmV2aWV3cyhbLi4ucmV2aWV3c10pXHJcbiAgICAgIGNvbnNvbGUubG9nKHJldmlld3MpO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9zdHMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIHttYWluQmFubmVyLmxlbmd0aCA+IDBcclxuICAgICAgICA/IDxNYWluQmFubmVyXHJcbiAgICAgICAgICAgIGltYWdlID0ge21haW5CYW5uZXJbMF0uZmllbGRzLmJhbm5lci5maWVsZHN9XHJcbiAgICAgICAgICAgIGxpbmsgPSB7bWFpbkJhbm5lclswXS5maWVsZHMubGlua31cclxuICAgICAgICAgIC8+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTQgbXQtM1wiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICB7YWRzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IDxBZFBvc3RcclxuICAgICAgICAgICAgaW1hZ2UgPSB7YWRzWzBdLmZpZWxkcy5hZFBvc3QuZmllbGRzfVxyXG4gICAgICAgICAgICBsaW5rID0ge2Fkc1swXS5maWVsZHMubGlua31cclxuICAgICAgICAgIC8+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+VG9wIFN0b3JpZXM8L2g1PlxyXG4gICAgICB7dG9wU3Rvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyB0b3BTdG9yaWVzLm1hcChwID0+IChcclxuICAgICAgICAgICAgPEhlYWRsaW5lc1xyXG4gICAgICAgICAgICAgIGRhdGU9e3AuZmllbGRzLmRhdGV9XHJcbiAgICAgICAgICAgICAga2V5PXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICBpbWFnZT17cC5maWVsZHMuaW1hZ2UuZmllbGRzfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICBzbHVnPXtwLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNCBtdC0zXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2Fkcy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgID8gPEFkUG9zdFxyXG4gICAgICAgICAgICAgICAgaW1hZ2UgPSB7YWRzWzFdLmZpZWxkcy5hZFBvc3QuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgbGluayA9IHthZHNbMV0uZmllbGRzLmxpbmt9XHJcbiAgICAgICAgICAgICAgLz4gOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+QmlnIE5ld3M8L2g1PlxyXG4gICAgICAgICAge2JpZ05ld3MubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IGJpZ05ld3MubWFwKHAgPT4gKFxyXG4gICAgICAgICAgICAgIDxIZWFkbGluZXNcclxuICAgICAgICAgICAgICAgIGRhdGU9e3AuZmllbGRzLmRhdGV9XHJcbiAgICAgICAgICAgICAgICBrZXk9e3AuZmllbGRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e3AuZmllbGRzLmltYWdlLmZpZWxkc31cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIHNsdWc9e3AuZmllbGRzLnNsdWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTQgbXQtM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2Fkcy5sZW5ndGggPiAyXHJcbiAgICAgICAgICAgICAgICA/IDxBZFBvc3RcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IHthZHNbMl0uZmllbGRzLmFkUG9zdC5maWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IHthZHNbMl0uZmllbGRzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgIC8+IDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5UcmVuZGluZzwvaDU+XHJcbiAgICAgICAgICAgICAge3RyZW5kaW5nLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgID8gdHJlbmRpbmcubWFwKHAgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGxpbmVzXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17cC5maWVsZHMuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3AuZmllbGRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtwLmZpZWxkcy5pbWFnZS5maWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3AuZmllbGRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWc9e3AuZmllbGRzLnNsdWd9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy00IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7YWRzLmxlbmd0aCA+IDJcclxuICAgICAgICAgICAgICAgICAgPyA8QWRQb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IHthZHNbMl0uZmllbGRzLmFkUG9zdC5maWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rID0ge2Fkc1syXS5maWVsZHMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAvPiA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5SZXZpZXdzPC9oNT5cclxuICAgICAgICAgICAgICAgIHtyZXZpZXdzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgPyByZXZpZXdzLm1hcChwID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwLmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwLmZpZWxkcy5pbWFnZS5maWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtwLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
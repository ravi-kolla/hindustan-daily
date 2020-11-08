webpackHotUpdate_N_E("pages/news",{

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_adpost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/adpost */ "./components/adpost.js");
/* harmony import */ var _components_headlines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/headlines */ "./components/headlines.js");






var _jsxFileName = "C:\\Users\\HOME\\Desktop\\hindustan-daily\\pages\\news\\index.js",
    _s = $RefreshSig$();







var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "zxcekwsr7ul3",
  accessToken: "X4D5eS-qwnmqBXyO7CA8u-qve93tOpq7MxeM3kWCbEw"
});

function Newspage() {
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
      news = _useState[0],
      setNews = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      ads = _useState2[0],
      setAds = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getPosts() {
      return _getPosts.apply(this, arguments);
    }

    function _getPosts() {
      _getPosts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var news, allAds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchNews();

              case 2:
                news = _context.sent;
                setNews(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(news));
                console.log(news);
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-md-6 col-lg-8 mt-3",
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
                children: "News"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 7
              }, this), news.length > 0 ? news.map(function (p) {
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
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Newspage, "y14e/VGotcK9f6hX+qE+fNEcLcg=");

_c = Newspage;
/* harmony default export */ __webpack_exports__["default"] = (Newspage);

var _c;

$RefreshReg$(_c, "Newspage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbGllbnQiLCJyZXF1aXJlIiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJwcm9jZXNzIiwiYWNjZXNzVG9rZW4iLCJORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTiIsIk5ld3NwYWdlIiwiZmV0Y2hOZXdzIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsImVudHJpZXMiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50VHlwZSIsIm5hbWUiLCJmZXRjaEFkcyIsInVzZVN0YXRlIiwibmV3cyIsInNldE5ld3MiLCJhZHMiLCJzZXRBZHMiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0cyIsImFsbEFkcyIsImxlbmd0aCIsImZpZWxkcyIsImFkUG9zdCIsImxpbmsiLCJtYXAiLCJwIiwiZGF0ZSIsImltYWdlIiwidGl0bGUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQywyRUFBRCxDQUFQLENBQXNCQyxZQUF0QixDQUFtQztBQUNoREMsT0FBSyxFQUFFQyxjQUR5QztBQUVoREMsYUFBVyxFQUFFRCw2Q0FBK0NFO0FBRlosQ0FBbkMsQ0FBZjs7QUFLQSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsV0FDSEMsU0FERztBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTUFDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDd0JSLE1BQU0sQ0FBQ1MsVUFBUCxDQUFrQjtBQUFFQyw0QkFBWSxFQUFFO0FBQWhCLGVBQWxCLENBRHhCOztBQUFBO0FBQ1FDLHFCQURSOztBQUFBLG1CQUVNQSxPQUFPLENBQUNDLEtBRmQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBRTRCRCxP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QUFGLENBQVNPLEtBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFE7QUFBQSxlQUFWLENBREgsR0FVRyxJQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWtDRDs7R0E5RFEzQixROztLQUFBQSxRO0FBZ0VNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzLjc0ZDYwOTg5MDZhMmVkNzI5YTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEFkUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkcG9zdCdcclxuaW1wb3J0IEhlYWRsaW5lcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRsaW5lcydcclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xyXG4gIHNwYWNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lELFxyXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxyXG59KVxyXG5cclxuZnVuY3Rpb24gTmV3c3BhZ2UoKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hOZXdzKCkge1xyXG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInBvc3RcIiB9KVxyXG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zXHJcbiAgICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFkcygpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJhZGRQb3N0XCIgfSlcclxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2Fkcywgc2V0QWRzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XHJcbiAgICAgIGNvbnN0IG5ld3MgPSBhd2FpdCBmZXRjaE5ld3MoKVxyXG4gICAgICBzZXROZXdzKFsuLi5uZXdzXSlcclxuICAgICAgY29uc29sZS5sb2cobmV3cyk7XHJcbiAgICAgIGNvbnN0IGFsbEFkcyA9IGF3YWl0IGZldGNoQWRzKClcclxuICAgICAgc2V0QWRzKFsuLi5hbGxBZHNdKVxyXG4gICAgICBjb25zb2xlLmxvZyhhbGxBZHMpO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9zdHMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctOCBtdC0zXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIHthZHMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gPEFkUG9zdFxyXG4gICAgICAgICAgICBpbWFnZSA9IHthZHNbMF0uZmllbGRzLmFkUG9zdC5maWVsZHN9XHJcbiAgICAgICAgICAgIGxpbmsgPSB7YWRzWzBdLmZpZWxkcy5saW5rfVxyXG4gICAgICAgICAgLz4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICA8aDUgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5OZXdzPC9oNT5cclxuICAgICAge25ld3MubGVuZ3RoID4gMFxyXG4gICAgICAgID8gbmV3cy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgIDxIZWFkbGluZXNcclxuICAgICAgICAgICAgICBkYXRlPXtwLmZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgIGtleT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e3AuZmllbGRzLmltYWdlLmZpZWxkc31cclxuICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgc2x1Zz17cC5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzcGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
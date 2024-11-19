"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\login.js */ \"(api)/./pages/api/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/login\",\n        pathname: \"/api/login\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmxvZ2luJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUNsb2dpbi5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNtRDtBQUNuRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsZ0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLGdEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGxvZ2luLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpblwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst cors = cors__WEBPACK_IMPORTED_MODULE_3__({\n    origin: 'http://localhost:3000',\n    methods: [\n        'POST'\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    await runMiddleware(req, res, cors);\n    if (req.method === 'POST') {\n        const { email, password } = req.body;\n        try {\n            const user = await prisma.user.findUnique({\n                where: {\n                    email\n                }\n            });\n            if (!user) {\n                return res.status(401).json({\n                    error: 'Usuário ou senha inválidos'\n                });\n            }\n            const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare(password, user.password);\n            if (!isPasswordValid) {\n                return res.status(401).json({\n                    error: 'Usuário ou senha inválidos'\n                });\n            }\n            // Gerar token JWT\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign({\n                userId: user.id\n            }, 'secreta-chave', {\n                expiresIn: '1h'\n            });\n            // Define o cookie com o token\n            res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);\n            res.status(200).json({\n                message: 'Login bem-sucedido!'\n            });\n        } catch (error) {\n            console.error('Erro interno:', error);\n            res.status(500).json({\n                error: 'Erro interno no servidor'\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        res.status(405).end(`Método ${req.method} não permitido`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFDZjtBQUNEO0FBQ047QUFFeEIsTUFBTUksU0FBUyxJQUFJSix3REFBWUE7QUFDL0IsTUFBTUssT0FBT0YsaUNBQUlBLENBQUM7SUFBRUcsUUFBUTtJQUF5QkMsU0FBUztRQUFDO0tBQU87QUFBQztBQUV2RSxTQUFTQyxjQUFjQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRTtJQUNqQyxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0JILEdBQUdGLEtBQUtDLEtBQUssQ0FBQ0s7WUFDWixJQUFJQSxrQkFBa0JDLE9BQU87Z0JBQzNCLE9BQU9GLE9BQU9DO1lBQ2hCO1lBQ0EsT0FBT0YsUUFBUUU7UUFDakI7SUFDRjtBQUNGO0FBRWUsZUFBZUUsUUFBUVIsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1GLGNBQWNDLEtBQUtDLEtBQUtMO0lBRTlCLElBQUlJLElBQUlTLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1gsSUFBSVksSUFBSTtRQUVwQyxJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNbEIsT0FBT2tCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2dCQUFFQyxPQUFPO29CQUFFTDtnQkFBTTtZQUFFO1lBRTdELElBQUksQ0FBQ0csTUFBTTtnQkFDVCxPQUFPWixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUE2QjtZQUNwRTtZQUVBLE1BQU1DLGtCQUFrQixNQUFNMUIsNkNBQWMsQ0FBQ2tCLFVBQVVFLEtBQUtGLFFBQVE7WUFFcEUsSUFBSSxDQUFDUSxpQkFBaUI7Z0JBQ3BCLE9BQU9sQixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUE2QjtZQUNwRTtZQUVBLGtCQUFrQjtZQUNsQixNQUFNRyxRQUFRN0IsOENBQVEsQ0FBQztnQkFBRStCLFFBQVFWLEtBQUtXLEVBQUU7WUFBQyxHQUFHLGlCQUFpQjtnQkFBRUMsV0FBVztZQUFLO1lBRS9FLDhCQUE4QjtZQUM5QnhCLElBQUl5QixTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRUwsTUFBTSwyQ0FBMkMsQ0FBQztZQUN2RnBCLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVVLFNBQVM7WUFBc0I7UUFDeEQsRUFBRSxPQUFPVCxPQUFPO1lBQ2RVLFFBQVFWLEtBQUssQ0FBQyxpQkFBaUJBO1lBQy9CakIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEyQjtRQUMzRDtJQUNGLE9BQU87UUFDTGpCLElBQUl5QixTQUFTLENBQUMsU0FBUztZQUFDO1NBQU87UUFDL0J6QixJQUFJZSxNQUFNLENBQUMsS0FBS2EsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFN0IsSUFBSVMsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMxRDtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGdhYnJpZWwuc2ltb2VzMVxcTXVzaWNcXEplZmZcXGplZmVyc29uQ2FidWxvc29cXGJhY2tlbmRHSFxccGFnZXNcXGFwaVxcbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgQ29ycyBmcm9tICdjb3JzJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuY29uc3QgY29ycyA9IENvcnMoeyBvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLCBtZXRob2RzOiBbJ1BPU1QnXSB9KTtcclxuXHJcbmZ1bmN0aW9uIHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGZuKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKTtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcclxuXHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnVXN1w6FyaW8gb3Ugc2VuaGEgaW52w6FsaWRvcycgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zJyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2VyYXIgdG9rZW4gSldUXHJcbiAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyB1c2VySWQ6IHVzZXIuaWQgfSwgJ3NlY3JldGEtY2hhdmUnLCB7IGV4cGlyZXNJbjogJzFoJyB9KTtcclxuXHJcbiAgICAgIC8vIERlZmluZSBvIGNvb2tpZSBjb20gbyB0b2tlblxyXG4gICAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgYHRva2VuPSR7dG9rZW59OyBQYXRoPS87IEh0dHBPbmx5OyBTZWN1cmU7IFNhbWVTaXRlPVN0cmljdGApO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdMb2dpbiBiZW0tc3VjZWRpZG8hJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gaW50ZXJubzonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvIGludGVybm8gbm8gc2Vydmlkb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE3DqXRvZG8gJHtyZXEubWV0aG9kfSBuw6NvIHBlcm1pdGlkb2ApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50Iiwiand0IiwiYmNyeXB0IiwiQ29ycyIsInByaXNtYSIsImNvcnMiLCJvcmlnaW4iLCJtZXRob2RzIiwicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImhhbmRsZXIiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb21wYXJlIiwidG9rZW4iLCJzaWduIiwidXNlcklkIiwiaWQiLCJleHBpcmVzSW4iLCJzZXRIZWFkZXIiLCJtZXNzYWdlIiwiY29uc29sZSIsImVuZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();
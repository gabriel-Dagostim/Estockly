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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst cors = cors__WEBPACK_IMPORTED_MODULE_3__({\n    origin: 'http://localhost:3000',\n    methods: [\n        'POST'\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    await runMiddleware(req, res, cors);\n    if (req.method === 'POST') {\n        const { email, password } = req.body;\n        try {\n            const user = await prisma.user.findUnique({\n                where: {\n                    email\n                }\n            });\n            if (!user) {\n                return res.status(401).json({\n                    error: 'Usuário ou senha inválidos'\n                });\n            }\n            const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare(password, user.password);\n            if (!isPasswordValid) {\n                return res.status(401).json({\n                    error: 'Usuário ou senha inválidos'\n                });\n            }\n            // Gerar token JWT\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign({\n                userId: user.id\n            }, 'secreta-chave', {\n                expiresIn: '1h'\n            });\n            // Define o cookie com o token\n            res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);\n            res.status(200).json({\n                message: 'Login bem-sucedido!'\n            });\n        } catch (error) {\n            console.error('Erro interno:', error);\n            res.status(500).json({\n                error: 'Erro interno no servidor'\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        res.status(405).end(`Método ${req.method} não permitido`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFDZjtBQUNEO0FBQ047QUFFeEIsTUFBTUksU0FBUyxJQUFJSix3REFBWUE7QUFDL0IsTUFBTUssT0FBT0YsaUNBQUlBLENBQUM7SUFBRUcsUUFBUTtJQUF5QkMsU0FBUztRQUFDO0tBQU87QUFBQztBQUV2RSxTQUFTQyxjQUFjQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRTtJQUNqQyxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0JILEdBQUdGLEtBQUtDLEtBQUssQ0FBQ0s7WUFDWixJQUFJQSxrQkFBa0JDLE9BQU87Z0JBQzNCLE9BQU9GLE9BQU9DO1lBQ2hCO1lBQ0EsT0FBT0YsUUFBUUU7UUFDakI7SUFDRjtBQUNGO0FBRWUsZUFBZUUsUUFBUVIsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1GLGNBQWNDLEtBQUtDLEtBQUtMO0lBRTlCLElBQUlJLElBQUlTLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1gsSUFBSVksSUFBSTtRQUVwQyxJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNbEIsT0FBT2tCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2dCQUFFQyxPQUFPO29CQUFFTDtnQkFBTTtZQUFFO1lBRTdELElBQUksQ0FBQ0csTUFBTTtnQkFDVCxPQUFPWixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUE2QjtZQUNwRTtZQUVBLE1BQU1DLGtCQUFrQixNQUFNMUIsNkNBQWMsQ0FBQ2tCLFVBQVVFLEtBQUtGLFFBQVE7WUFFcEUsSUFBSSxDQUFDUSxpQkFBaUI7Z0JBQ3BCLE9BQU9sQixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUE2QjtZQUNwRTtZQUVBLGtCQUFrQjtZQUNsQixNQUFNRyxRQUFRN0IsOENBQVEsQ0FBQztnQkFBRStCLFFBQVFWLEtBQUtXLEVBQUU7WUFBQyxHQUFHLGlCQUFpQjtnQkFBRUMsV0FBVztZQUFLO1lBRS9FLDhCQUE4QjtZQUM5QnhCLElBQUl5QixTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRUwsTUFBTSwyQ0FBMkMsQ0FBQztZQUN2RnBCLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVVLFNBQVM7WUFBc0I7UUFDeEQsRUFBRSxPQUFPVCxPQUFPO1lBQ2RVLFFBQVFWLEtBQUssQ0FBQyxpQkFBaUJBO1lBQy9CakIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEyQjtRQUMzRDtJQUNGLE9BQU87UUFDTGpCLElBQUl5QixTQUFTLENBQUMsU0FBUztZQUFDO1NBQU87UUFDL0J6QixJQUFJZSxNQUFNLENBQUMsS0FBS2EsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFN0IsSUFBSVMsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMxRDtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENsb3Zpc1xcT25lRHJpdmVcXERvY3VtZW50b3NcXEdpdEh1YlxcamVmZXJzb25DYWJ1bG9zb1xcYmFja2VuZEdIXFxwYWdlc1xcYXBpXFxsb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcbmltcG9ydCBDb3JzIGZyb20gJ2NvcnMnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5jb25zdCBjb3JzID0gQ29ycyh7IG9yaWdpbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsIG1ldGhvZHM6IFsnUE9TVCddIH0pO1xyXG5cclxuZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpO1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pO1xyXG5cclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zJyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ1VzdcOhcmlvIG91IHNlbmhhIGludsOhbGlkb3MnIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZXJhciB0b2tlbiBKV1RcclxuICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJJZDogdXNlci5pZCB9LCAnc2VjcmV0YS1jaGF2ZScsIHsgZXhwaXJlc0luOiAnMWgnIH0pO1xyXG5cclxuICAgICAgLy8gRGVmaW5lIG8gY29va2llIGNvbSBvIHRva2VuXHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBgdG9rZW49JHt0b2tlbn07IFBhdGg9LzsgSHR0cE9ubHk7IFNlY3VyZTsgU2FtZVNpdGU9U3RyaWN0YCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0xvZ2luIGJlbS1zdWNlZGlkbyEnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBpbnRlcm5vOicsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm8gaW50ZXJubyBubyBzZXJ2aWRvcicgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTcOpdG9kbyAke3JlcS5tZXRob2R9IG7Do28gcGVybWl0aWRvYCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJqd3QiLCJiY3J5cHQiLCJDb3JzIiwicHJpc21hIiwiY29ycyIsIm9yaWdpbiIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiaGFuZGxlciIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImlzUGFzc3dvcmRWYWxpZCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJ1c2VySWQiLCJpZCIsImV4cGlyZXNJbiIsInNldEhlYWRlciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

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
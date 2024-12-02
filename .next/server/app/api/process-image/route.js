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
exports.id = "app/api/process-image/route";
exports.ids = ["app/api/process-image/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprocess-image%2Froute&page=%2Fapi%2Fprocess-image%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprocess-image%2Froute.ts&appDir=%2Fhome%2Fhchawla%2Fhomework%2Fweek5-project%2Fimage-vision-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fhchawla%2Fhomework%2Fweek5-project%2Fimage-vision-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprocess-image%2Froute&page=%2Fapi%2Fprocess-image%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprocess-image%2Froute.ts&appDir=%2Fhome%2Fhchawla%2Fhomework%2Fweek5-project%2Fimage-vision-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fhchawla%2Fhomework%2Fweek5-project%2Fimage-vision-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_hchawla_homework_week5_project_image_vision_app_app_api_process_image_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/process-image/route.ts */ \"(rsc)/./app/api/process-image/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/process-image/route\",\n        pathname: \"/api/process-image\",\n        filename: \"route\",\n        bundlePath: \"app/api/process-image/route\"\n    },\n    resolvedPagePath: \"/home/hchawla/homework/week5-project/image-vision-app/app/api/process-image/route.ts\",\n    nextConfigOutput,\n    userland: _home_hchawla_homework_week5_project_image_vision_app_app_api_process_image_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9jZXNzLWltYWdlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9jZXNzLWltYWdlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvY2Vzcy1pbWFnZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGaGNoYXdsYSUyRmhvbWV3b3JrJTJGd2VlazUtcHJvamVjdCUyRmltYWdlLXZpc2lvbi1hcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZoY2hhd2xhJTJGaG9tZXdvcmslMkZ3ZWVrNS1wcm9qZWN0JTJGaW1hZ2UtdmlzaW9uLWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDb0M7QUFDakg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2hjaGF3bGEvaG9tZXdvcmsvd2VlazUtcHJvamVjdC9pbWFnZS12aXNpb24tYXBwL2FwcC9hcGkvcHJvY2Vzcy1pbWFnZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvY2Vzcy1pbWFnZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2Nlc3MtaW1hZ2VcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2Nlc3MtaW1hZ2Uvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9oY2hhd2xhL2hvbWV3b3JrL3dlZWs1LXByb2plY3QvaW1hZ2UtdmlzaW9uLWFwcC9hcHAvYXBpL3Byb2Nlc3MtaW1hZ2Uvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprocess-image%2Froute&page=%2Fapi%2Fprocess-image%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprocess-image%2Froute.ts&appDir=%2Fhome%2Fhchawla%2Fhomework%2Fweek5-project%2Fimage-vision-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fhchawla%2Fhomework%2Fweek5-project%2Fimage-vision-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/process-image/route.ts":
/*!****************************************!*\
  !*** ./app/api/process-image/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function POST(request) {\n    const { imageName } = await request.json();\n    return new Promise((resolve)=>{\n        const pythonProcess = (0,child_process__WEBPACK_IMPORTED_MODULE_1__.spawn)('python', [\n            '/scripts/ObjectDetection.py',\n            imageName\n        ]);\n        pythonProcess.stdout.on('data', (data)=>{\n            console.log(`Output: ${data}`);\n        });\n        pythonProcess.stderr.on('data', (data)=>{\n            console.error(`Error: ${data}`);\n        });\n        pythonProcess.on('close', (code)=>{\n            console.log(`Python script finished with code ${code}`);\n            if (code === 0) {\n                resolve(next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: 'Image processed successfully!'\n                }));\n            } else {\n                resolve(next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: 'Failed to process image.'\n                }, {\n                    status: 500\n                }));\n            }\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2Nlc3MtaW1hZ2Uvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNMO0FBRS9CLGVBQWVFLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUcsTUFBTUQsUUFBUUUsSUFBSTtJQUV4QyxPQUFPLElBQUlDLFFBQVEsQ0FBQ0M7UUFDbEIsTUFBTUMsZ0JBQWdCUCxvREFBS0EsQ0FBQyxVQUFVO1lBQUM7WUFBK0JHO1NBQVU7UUFFaEZJLGNBQWNDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsQ0FBQ0M7WUFDL0JDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRUYsTUFBTTtRQUMvQjtRQUVBSCxjQUFjTSxNQUFNLENBQUNKLEVBQUUsQ0FBQyxRQUFRLENBQUNDO1lBQy9CQyxRQUFRRyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUVKLE1BQU07UUFDaEM7UUFFQUgsY0FBY0UsRUFBRSxDQUFDLFNBQVMsQ0FBQ007WUFDekJKLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLGlDQUFpQyxFQUFFRyxNQUFNO1lBQ3RELElBQUlBLFNBQVMsR0FBRztnQkFDZFQsUUFBUVAscURBQVlBLENBQUNLLElBQUksQ0FBQztvQkFBRVksU0FBUztnQkFBZ0M7WUFDdkUsT0FBTztnQkFDTFYsUUFBUVAscURBQVlBLENBQUNLLElBQUksQ0FBQztvQkFBRVksU0FBUztnQkFBMkIsR0FBRztvQkFBRUMsUUFBUTtnQkFBSTtZQUNuRjtRQUNGO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL2hvbWUvaGNoYXdsYS9ob21ld29yay93ZWVrNS1wcm9qZWN0L2ltYWdlLXZpc2lvbi1hcHAvYXBwL2FwaS9wcm9jZXNzLWltYWdlL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgeyBpbWFnZU5hbWUgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHB5dGhvblByb2Nlc3MgPSBzcGF3bigncHl0aG9uJywgWycvc2NyaXB0cy9PYmplY3REZXRlY3Rpb24ucHknLCBpbWFnZU5hbWVdKTtcblxuICAgIHB5dGhvblByb2Nlc3Muc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBPdXRwdXQ6ICR7ZGF0YX1gKTtcbiAgICB9KTtcblxuICAgIHB5dGhvblByb2Nlc3Muc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiAke2RhdGF9YCk7XG4gICAgfSk7XG5cbiAgICBweXRob25Qcm9jZXNzLm9uKCdjbG9zZScsIChjb2RlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgUHl0aG9uIHNjcmlwdCBmaW5pc2hlZCB3aXRoIGNvZGUgJHtjb2RlfWApO1xuICAgICAgaWYgKGNvZGUgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdJbWFnZSBwcm9jZXNzZWQgc3VjY2Vzc2Z1bGx5IScgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWlsZWQgdG8gcHJvY2VzcyBpbWFnZS4nIH0sIHsgc3RhdHVzOiA1MDAgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwic3Bhd24iLCJQT1NUIiwicmVxdWVzdCIsImltYWdlTmFtZSIsImpzb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInB5dGhvblByb2Nlc3MiLCJzdGRvdXQiLCJvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3RkZXJyIiwiZXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/process-image/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprocess-image%2Froute&page=%2Fapi%2Fprocess-image%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprocess-image%2Froute.ts&appDir=%2Fhome%2Fhchawla%2Fhomework%2Fweek5-project%2Fimage-vision-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fhchawla%2Fhomework%2Fweek5-project%2Fimage-vision-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
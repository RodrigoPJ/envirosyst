(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _router_router_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router/router-routing.module */ "./src/app/router/router-routing.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _helpers_fakebackend_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/fakebackend.service */ "./src/app/helpers/fakebackend.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_web_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/web/nav-bar/nav-bar.component */ "./src/app/components/web/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_web_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/web/home/home.component */ "./src/app/components/web/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_dashboard_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/toolbar/toolbar.component */ "./src/app/components/dashboard/toolbar/toolbar.component.ts");
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/article/article.component */ "./src/app/components/article/article.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_web_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/web/contact/contact.component */ "./src/app/components/web/contact/contact.component.ts");
/* harmony import */ var _components_web_info_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/web/info/info.component */ "./src/app/components/web/info/info.component.ts");
/* harmony import */ var _components_web_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/web/welcome/welcome.component */ "./src/app/components/web/welcome/welcome.component.ts");
/* harmony import */ var _components_web_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/web/footer/footer.component */ "./src/app/components/web/footer/footer.component.ts");
/* harmony import */ var _components_dashboard_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashboard/main-view/main-view.component */ "./src/app/components/dashboard/main-view/main-view.component.ts");
/* harmony import */ var _components_dashboard_ledgers_ledgers_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dashboard/ledgers/ledgers.component */ "./src/app/components/dashboard/ledgers/ledgers.component.ts");
/* harmony import */ var _components_dashboard_ledgers_ledger_ledger_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dashboard/ledgers/ledger/ledger.component */ "./src/app/components/dashboard/ledgers/ledger/ledger.component.ts");
/* harmony import */ var _components_dashboard_program_program_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dashboard/program/program.component */ "./src/app/components/dashboard/program/program.component.ts");
/* harmony import */ var _components_dashboard_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dashboard/analysis/analysis.component */ "./src/app/components/dashboard/analysis/analysis.component.ts");
/* harmony import */ var _components_dashboard_main_view_pie_graph_pie_graph_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/dashboard/main-view/pie-graph/pie-graph.component */ "./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.ts");
/* harmony import */ var _components_dashboard_main_view_pending_list_pending_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dashboard/main-view/pending-list/pending-list.component */ "./src/app/components/dashboard/main-view/pending-list/pending-list.component.ts");
/* harmony import */ var _components_dashboard_main_view_actions_actions_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dashboard/main-view/actions/actions.component */ "./src/app/components/dashboard/main-view/actions/actions.component.ts");
/* harmony import */ var _components_dashboard_safety_safety_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dashboard/safety/safety.component */ "./src/app/components/dashboard/safety/safety.component.ts");
/* harmony import */ var _components_dashboard_enviro_manage_enviro_manage_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/dashboard/enviro-manage/enviro-manage.component */ "./src/app/components/dashboard/enviro-manage/enviro-manage.component.ts");
/* harmony import */ var _components_dashboard_energy_energy_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/dashboard/energy/energy.component */ "./src/app/components/dashboard/energy/energy.component.ts");
/* harmony import */ var _components_dashboard_quality_quality_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dashboard/quality/quality.component */ "./src/app/components/dashboard/quality/quality.component.ts");




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_web_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _components_web_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                _components_dashboard_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _components_article_article_component__WEBPACK_IMPORTED_MODULE_17__["ArticleComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _components_web_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                _components_web_info_info_component__WEBPACK_IMPORTED_MODULE_21__["InfoComponent"],
                _components_web_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_22__["WelcomeComponent"],
                _components_web_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _components_dashboard_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_24__["MainViewComponent"],
                _components_dashboard_ledgers_ledgers_component__WEBPACK_IMPORTED_MODULE_25__["LedgersComponent"],
                _components_dashboard_ledgers_ledger_ledger_component__WEBPACK_IMPORTED_MODULE_26__["LedgerComponent"],
                _components_dashboard_program_program_component__WEBPACK_IMPORTED_MODULE_27__["ProgramComponent"],
                _components_dashboard_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_28__["AnalysisComponent"],
                _components_dashboard_main_view_pie_graph_pie_graph_component__WEBPACK_IMPORTED_MODULE_29__["PieGraphComponent"],
                _components_dashboard_main_view_pending_list_pending_list_component__WEBPACK_IMPORTED_MODULE_30__["PendingListComponent"],
                _components_dashboard_main_view_actions_actions_component__WEBPACK_IMPORTED_MODULE_31__["ActionsComponent"],
                _components_dashboard_safety_safety_component__WEBPACK_IMPORTED_MODULE_32__["SafetyComponent"],
                _components_dashboard_enviro_manage_enviro_manage_component__WEBPACK_IMPORTED_MODULE_33__["EnviroManageComponent"],
                _components_dashboard_energy_energy_component__WEBPACK_IMPORTED_MODULE_34__["EnergyComponent"],
                _components_dashboard_quality_quality_component__WEBPACK_IMPORTED_MODULE_35__["QualityComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _router_router_routing_module__WEBPACK_IMPORTED_MODULE_7__["RouterRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NgxChartsModule"]
            ],
            entryComponents: [_components_web_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                // fake backend, remove for production
                _helpers_fakebackend_service__WEBPACK_IMPORTED_MODULE_11__["fakeBackeEndProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/article/article.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/article/article.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/article/article.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/article/article.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  article works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/components/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/components/article/article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/analysis/analysis.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/analysis/analysis.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2FuYWx5c2lzL2FuYWx5c2lzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/analysis/analysis.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/analysis/analysis.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  analysis works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/analysis/analysis.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/analysis/analysis.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalysisComponent = /** @class */ (function () {
    function AnalysisComponent() {
    }
    AnalysisComponent.prototype.ngOnInit = function () {
    };
    AnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analysis',
            template: __webpack_require__(/*! ./analysis.component.html */ "./src/app/components/dashboard/analysis/analysis.component.html"),
            styles: [__webpack_require__(/*! ./analysis.component.css */ "./src/app/components/dashboard/analysis/analysis.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnalysisComponent);
    return AnalysisComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/energy/energy.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/energy/energy.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2VuZXJneS9lbmVyZ3kuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/energy/energy.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/energy/energy.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  energy works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/energy/energy.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/energy/energy.component.ts ***!
  \*****************************************************************/
/*! exports provided: EnergyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyComponent", function() { return EnergyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnergyComponent = /** @class */ (function () {
    function EnergyComponent() {
    }
    EnergyComponent.prototype.ngOnInit = function () {
    };
    EnergyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-energy',
            template: __webpack_require__(/*! ./energy.component.html */ "./src/app/components/dashboard/energy/energy.component.html"),
            styles: [__webpack_require__(/*! ./energy.component.css */ "./src/app/components/dashboard/energy/energy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnergyComponent);
    return EnergyComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/enviro-manage/enviro-manage.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/dashboard/enviro-manage/enviro-manage.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Vudmlyby1tYW5hZ2UvZW52aXJvLW1hbmFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/enviro-manage/enviro-manage.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/enviro-manage/enviro-manage.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  enviro-manage works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/enviro-manage/enviro-manage.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/enviro-manage/enviro-manage.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EnviroManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviroManageComponent", function() { return EnviroManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnviroManageComponent = /** @class */ (function () {
    function EnviroManageComponent() {
    }
    EnviroManageComponent.prototype.ngOnInit = function () {
    };
    EnviroManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enviro-manage',
            template: __webpack_require__(/*! ./enviro-manage.component.html */ "./src/app/components/dashboard/enviro-manage/enviro-manage.component.html"),
            styles: [__webpack_require__(/*! ./enviro-manage.component.css */ "./src/app/components/dashboard/enviro-manage/enviro-manage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnviroManageComponent);
    return EnviroManageComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/ledgers/ledger/ledger.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/dashboard/ledgers/ledger/ledger.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xlZGdlcnMvbGVkZ2VyL2xlZGdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/ledgers/ledger/ledger.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard/ledgers/ledger/ledger.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ledger works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/ledgers/ledger/ledger.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/ledgers/ledger/ledger.component.ts ***!
  \*************************************************************************/
/*! exports provided: LedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerComponent", function() { return LedgerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LedgerComponent = /** @class */ (function () {
    function LedgerComponent() {
    }
    LedgerComponent.prototype.ngOnInit = function () {
    };
    LedgerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ledger',
            template: __webpack_require__(/*! ./ledger.component.html */ "./src/app/components/dashboard/ledgers/ledger/ledger.component.html"),
            styles: [__webpack_require__(/*! ./ledger.component.css */ "./src/app/components/dashboard/ledgers/ledger/ledger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LedgerComponent);
    return LedgerComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/ledgers/ledgers.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/ledgers/ledgers.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xlZGdlcnMvbGVkZ2Vycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/ledgers/ledgers.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/ledgers/ledgers.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ledgers works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/ledgers/ledgers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/ledgers/ledgers.component.ts ***!
  \*******************************************************************/
/*! exports provided: LedgersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgersComponent", function() { return LedgersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LedgersComponent = /** @class */ (function () {
    function LedgersComponent() {
    }
    LedgersComponent.prototype.ngOnInit = function () {
    };
    LedgersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ledgers',
            template: __webpack_require__(/*! ./ledgers.component.html */ "./src/app/components/dashboard/ledgers/ledgers.component.html"),
            styles: [__webpack_require__(/*! ./ledgers.component.css */ "./src/app/components/dashboard/ledgers/ledgers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LedgersComponent);
    return LedgersComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/main-view/actions/actions.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/actions/actions.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field {\n  margin-right: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbWFpbi12aWV3L2FjdGlvbnMvYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9tYWluLXZpZXcvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/main-view/actions/actions.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/actions/actions.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li>\n    <mat-icon>assignment_ind</mat-icon>\n    <span>\n      Juan Perez hizo una anotacion en la bitacora agua 1\n    </span>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/dashboard/main-view/actions/actions.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/actions/actions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.step = Infinity;
    }
    ActionsComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ActionsComponent.prototype.nextStep = function () {
        this.step++;
    };
    ActionsComponent.prototype.prevStep = function () {
        this.step--;
    };
    ActionsComponent.prototype.ngOnInit = function () {
    };
    ActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actions',
            template: __webpack_require__(/*! ./actions.component.html */ "./src/app/components/dashboard/main-view/actions/actions.component.html"),
            styles: [__webpack_require__(/*! ./actions.component.css */ "./src/app/components/dashboard/main-view/actions/actions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/main-view/main-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/main-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL21haW4tdmlldy9tYWluLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/main-view/main-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/main-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"250px\">\n  <mat-grid-tile\n      [colspan]=\"1\"\n      [rowspan]=\"1\"\n      [style.background]=\"color.gray\"\n      >\n    <app-pie-graph ></app-pie-graph>\n  </mat-grid-tile>\n  \n  <mat-grid-tile\n    [colspan]=\"1\"\n      [rowspan]=\"1\"\n      [style.background]=\"color.white\"\n      style=\"overflow:scroll;\">\n    <app-pending-list ></app-pending-list>\n  </mat-grid-tile>\n  \n  <mat-grid-tile\n      [colspan]=\"2\"\n      [rowspan]=\"1\"\n      [style.background]=\"color.blue\">\n      <app-actions></app-actions>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/components/dashboard/main-view/main-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/main-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainViewComponent = /** @class */ (function () {
    function MainViewComponent() {
        this.color = {
            blue: "lightblue",
            white: "white",
            gray: "gray"
        };
    }
    MainViewComponent.prototype.ngOnInit = function () {
    };
    MainViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/components/dashboard/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.css */ "./src/app/components/dashboard/main-view/main-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/main-view/pending-list/pending-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/pending-list/pending-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL21haW4tdmlldy9wZW5kaW5nLWxpc3QvcGVuZGluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/main-view/pending-list/pending-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/pending-list/pending-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <h3 mat-list-header>Documentos pendientes</h3>\n\n  <mat-list-item *ngFor=\"let activity of activities\">\n    <mat-icon matListIcon>assignment</mat-icon>\n    <h3 matLine>{{ activity.date }}</h3>\n    <p matLine>\n      <span> {{ activity.resposible }} </span>\n      <span class=\"demo-2\"> -- {{ activity.action }} </span>\n    </p>\n    <p matLine>\n      <a >\n        <span class=\"demo-2\"> -- {{ activity.file }} </span>\n      </a>\n    </p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/components/dashboard/main-view/pending-list/pending-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/pending-list/pending-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PendingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingListComponent", function() { return PendingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PendingListComponent = /** @class */ (function () {
    function PendingListComponent() {
        this.activities = [{
                date: new Date('12/26/2025').toLocaleString(),
                responsible: 'Will Smith',
                action: "Entregar plan de accion completado",
                file: 'accion-completo.pdf'
            }, {
                date: new Date('6/26/2025').toLocaleString(),
                responsible: 'Rodolfo Renaldo',
                action: "Pruebas de laboratorio Agua",
                file: 'analisis-agua.pdf'
            }, {
                date: new Date('6/26/2025').toLocaleString(),
                responsible: 'Martin Martinez',
                action: "Estudio de impacto ambiental",
                file: 'estudio-profesional.pdf'
            }];
    }
    PendingListComponent.prototype.ngOnInit = function () {
    };
    PendingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending-list',
            template: __webpack_require__(/*! ./pending-list.component.html */ "./src/app/components/dashboard/main-view/pending-list/pending-list.component.html"),
            styles: [__webpack_require__(/*! ./pending-list.component.css */ "./src/app/components/dashboard/main-view/pending-list/pending-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PendingListComponent);
    return PendingListComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL21haW4tdmlldy9waWUtZ3JhcGgvcGllLWdyYXBoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-charts-advanced-pie-chart\n    [results] = \"results\"\n    [label] = \"label\"\n    [view] = \"view\"\n    ></ngx-charts-advanced-pie-chart>"

/***/ }),

/***/ "./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PieGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieGraphComponent", function() { return PieGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PieGraphComponent = /** @class */ (function () {
    function PieGraphComponent() {
        this.view = [400, 220];
        this.results = [{
                name: "Completadas",
                value: 100
            }, {
                name: "Activas",
                value: 80
            }, {
                name: "Pendientes",
                value: 233
            }];
        this.label = "Actividades ambientales";
    }
    PieGraphComponent.prototype.ngOnInit = function () {
    };
    PieGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pie-graph',
            template: __webpack_require__(/*! ./pie-graph.component.html */ "./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.html"),
            styles: [__webpack_require__(/*! ./pie-graph.component.css */ "./src/app/components/dashboard/main-view/pie-graph/pie-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PieGraphComponent);
    return PieGraphComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/program/program.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/program/program.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    overflow: auto;\n  }\n  \n  table {\n    width: 100%;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvcHJvZ3JhbS9wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvcHJvZ3JhbS9wcm9ncmFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/program/program.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/program/program.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n  \n    \n      <ng-container matColumnDef=\"position\">\n          <th mat-header-cell *matHeaderCellDef> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n        </ng-container>\n    \n      \n        <ng-container matColumnDef=\"activity\">\n          <th mat-header-cell *matHeaderCellDef> Actividad </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.activity}} </td>\n        </ng-container>\n    \n     \n        <ng-container matColumnDef=\"freq\">\n          <th mat-header-cell *matHeaderCellDef> Frecuencia </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.freq}} </td>\n        </ng-container>\n    \n     \n        <ng-container matColumnDef=\"responsible\">\n          <th mat-header-cell *matHeaderCellDef> Responsable </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.responsible}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"fechaProgram\">\n          <th mat-header-cell *matHeaderCellDef> Fecha Programada</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.fechaProgram}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"quienRealiza\">\n          <th mat-header-cell *matHeaderCellDef> Quien Realiza</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.quienRealiza}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"fechaCumpli\">\n          <th mat-header-cell *matHeaderCellDef> Fecha Cumplimiento</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.fechaCumpli}} </td>\n        </ng-container>\n    \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> \n    </table>\n  </div> \n"

/***/ }),

/***/ "./src/app/components/dashboard/program/program.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/program/program.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgramComponent = /** @class */ (function () {
    function ProgramComponent() {
        this.displayedColumns = ['position', 'activity', 'freq',
            'responsible',
            'fechaProgram', 'quienRealiza', 'fechaCumpli'];
        this.dataSource = acciones;
    }
    ProgramComponent.prototype.ngOnInit = function () {
    };
    ProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! ./program.component.html */ "./src/app/components/dashboard/program/program.component.html"),
            styles: [__webpack_require__(/*! ./program.component.css */ "./src/app/components/dashboard/program/program.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgramComponent);
    return ProgramComponent;
}());

var acciones = [
    { position: 1,
        activity: 'Licencia Unica Ambiental',
        freq: '5 años',
        responsible: 'Representante Legal',
        fechaProgram: '15/enero/2024',
        quienRealiza: 'Rodolfo Medina',
        fechaCumpli: 'n/a' },
    { position: 2,
        activity: 'Cedula de operacion anual',
        freq: 'Anual',
        responsible: 'Gerencia',
        fechaProgram: '15/enero/2020',
        quienRealiza: 'Pedro Marquez',
        fechaCumpli: 'n/a' },
    { position: 3,
        activity: 'Verificacion Vehicular',
        freq: 'Semestral',
        responsible: 'Mantenimiento',
        fechaProgram: '15/Abril/2019',
        quienRealiza: 'Juan Murca',
        fechaCumpli: '13/Abril/2019' },
];


/***/ }),

/***/ "./src/app/components/dashboard/quality/quality.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/quality/quality.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3F1YWxpdHkvcXVhbGl0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/quality/quality.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/quality/quality.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  quality works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/quality/quality.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/quality/quality.component.ts ***!
  \*******************************************************************/
/*! exports provided: QualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityComponent", function() { return QualityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QualityComponent = /** @class */ (function () {
    function QualityComponent() {
    }
    QualityComponent.prototype.ngOnInit = function () {
    };
    QualityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quality',
            template: __webpack_require__(/*! ./quality.component.html */ "./src/app/components/dashboard/quality/quality.component.html"),
            styles: [__webpack_require__(/*! ./quality.component.css */ "./src/app/components/dashboard/quality/quality.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QualityComponent);
    return QualityComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/safety/safety.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/safety/safety.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NhZmV0eS9zYWZldHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/safety/safety.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/safety/safety.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  safety works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/safety/safety.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/safety/safety.component.ts ***!
  \*****************************************************************/
/*! exports provided: SafetyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafetyComponent", function() { return SafetyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SafetyComponent = /** @class */ (function () {
    function SafetyComponent() {
    }
    SafetyComponent.prototype.ngOnInit = function () {
    };
    SafetyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-safety',
            template: __webpack_require__(/*! ./safety.component.html */ "./src/app/components/dashboard/safety/safety.component.html"),
            styles: [__webpack_require__(/*! ./safety.component.css */ "./src/app/components/dashboard/safety/safety.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SafetyComponent);
    return SafetyComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/toolbar/toolbar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/toolbar/toolbar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  .example-is-mobile .example-toolbar {\n    position: fixed;\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n    z-index: 2;\n  }\n  \n  h1.example-app-name {\n    margin-left: 8px;\n  }\n  \n  .example-sidenav-container {\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n    flex: 1;\n  }\n  \n  .example-is-mobile .example-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    flex: 1 0 auto;\n  }\n  \n  .example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFOzRGQUN3RjtJQUN4RixPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtpRUFDNkQ7SUFDN0QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gICAgZmxleDogMTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbiAgXG4gIC5leGFtcGxlLWljb24ge1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/toolbar/toolbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/toolbar/toolbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-toolbar color=\"primary\">\n  <button mat-icon-button (click)=\"snav.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n<a [routerLink]=\"['/dashboard/']\" mat-button> <span class=\"mat-h3\">EnviroSyst</span> \n</a>\n  <a [routerLink]=\"['/dashboard/enviro-manage']\" mat-button>Ambiental</a>\n  <a [routerLink]=\"['/dashboard/ledgers']\" mat-button>Bitacoras</a>\n  <a [routerLink]=\"['/dashboard/safety']\" mat-button>Seguridad</a>\n  <a [routerLink]=\"['/dashboard/energy']\" mat-button>Energía</a>\n  <a [routerLink]=\"['/dashboard/quality']\" mat-button>Calidad</a>\n  <span class=\"example-spacer\"></span>\n  <button mat-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>account_circle</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button color=\"primary\" mat-menu-item>Preferencias</button>\n    <button mat-menu-item (click)=\"logOut()\">Cerrar sesion</button>\n  </mat-menu>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"example-sidenav-container\">\n  <mat-sidenav #snav>\n    <mat-nav-list>\n      <a mat-button>Hi</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n   <router-outlet ></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/toolbar/toolbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/toolbar/toolbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.logOut = function () {
        var _this = this;
        this.authenticationService.logOut()
            .toPromise()
            .then(function (v) {
            console.log(v);
            _this.router.navigate(["/home"]);
        });
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/dashboard/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/components/dashboard/toolbar/toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Login </h1>\n<div mat-dialog-content>\n    <form class=\"example-form\" [formGroup]=\"loginForm\"  >\n        <mat-form-field class=\"example-full-width\">\n          <input autocomplete=\"username\" formControlName=\"username\" matInput placeholder=\"Username\">\n          <mat-error *ngIf=\"loginForm.invalid\">username required</mat-error>\n        </mat-form-field>\n      \n        <mat-form-field class=\"example-full-width\">\n          <input autocomplete=\"current-password\" formControlName=\"password\" type=\"password\" matInput placeholder=\"Password\">\n          <mat-error *ngIf=\"loginForm.invalid\">password required</mat-error>\n        </mat-form-field>\n        <mat-spinner *ngIf=\"loading\" ></mat-spinner>\n        \n      </form>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [disabled] = \"loading\" (click)=\"submit()\" cdkFocusInitial>Ingresar</button>\n  <button mat-button (click)=\"onNoClick()\">Cancelar</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogRef, formBuilder, route, router, authenticationService, alertService, data) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.data = data;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid)
            return;
        this.loading = true;
        this.authenticationService
            .login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(["/dashboard"]);
            _this.dialogRef.close();
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
            _this.onNoClick();
        });
    };
    LoginComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"], String])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/web/contact/contact.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/web/contact/contact.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2ViL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/web/contact/contact.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/web/contact/contact.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/web/contact/contact.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/web/contact/contact.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/web/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/web/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/web/footer/footer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/web/footer/footer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  bottom: 5px;\n  position: fixed;\n  width: 98.5%;\n  height: 2em;\n}\n\n.spacer{\n    flex: 1 1 auto;   \n}\n\n.footer-text{\n    font-size: 0.75em\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgYm90dG9tOiA1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDk4LjUlO1xuICBoZWlnaHQ6IDJlbTtcbn1cblxuLnNwYWNlcntcbiAgICBmbGV4OiAxIDEgYXV0bzsgICBcbn1cblxuLmZvb3Rlci10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMC43NWVtXG59Il19 */"

/***/ }),

/***/ "./src/app/components/web/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/web/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color = \"primary\" class=\"footer\">\n  <span class=\"spacer\"></span>\n  <span class=\"footer-text\">&reg; &trade;  por Rodrigo Peña Jiménez</span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/web/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/web/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/web/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/web/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/web/home/home.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/web/home/home.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWIvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/web/home/home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/web/home/home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/web/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/web/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/web/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/web/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/web/info/info.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/web/info/info.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2ViL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/web/info/info.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/web/info/info.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>hi</h1>\n<h1>hi</h1>\n<h1>hi</h1>\n<h1>hi</h1>\n<h1>hi</h1>"

/***/ }),

/***/ "./src/app/components/web/info/info.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/web/info/info.component.ts ***!
  \*******************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/components/web/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/components/web/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/web/nav-bar/nav-bar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/web/nav-bar/nav-bar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWIvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2ViL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/web/nav-bar/nav-bar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/web/nav-bar/nav-bar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <a [routerLink]=\"['/home/']\" mat-button ><span class=\"mat-h2\">EnviroSyst</span></a>\n    <a [routerLink]=\"['/home/info']\" mat-button color=\"\">Informacion</a>\n    <a [routerLink]=\"['/home/contact']\" mat-button color=\"\">Contacto</a>\n    <span></span>\n    <span class=\"example-spacer\"></span>   \n     <button mat-button (click)=\"openDialog()\">Iniciar sesión</button>\n\n    <button mat-raised-button color=\"accent\">Registrarse</button>\n    \n    <mat-icon class=\"example-icon\" aria-hidden=\"false\">help</mat-icon>\n  </mat-toolbar-row>\n\n\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/components/web/nav-bar/nav-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/web/nav-bar/nav-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/components/login/login.component.ts");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(dialog) {
        this.dialog = dialog;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '50%',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/web/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/web/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/web/welcome/welcome.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/web/welcome/welcome.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2ViL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/web/welcome/welcome.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/web/welcome/welcome.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n      <mat-card-title>\n          <h1 >\n              <p class=\"centered\">\n                  Welcome to Enviro Syst!\n              </p>      \n          </h1>\n      </mat-card-title>\n  </mat-card-header>\n  <hr>\n  <mat-card-content>\n      <h2>\n          <p class=\"mat-body\">\n              Este es el portal de acceso al sistema de administración \n                  de recursos y normativas ambientales. Por favor inicia sesión \n                  para comenzar. Si aún no tienes cuenta puedes registrarte o contactanos\n                  si estas interesado en mas información.\n          </p>\n      </h2>\n  </mat-card-content>\n  <mat-card-actions>\n          <button mat-flat-button color=\"primary\">Conoce mas</button>\n        </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/web/welcome/welcome.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/web/welcome/welcome.component.ts ***!
  \*************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/web/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/web/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers/fakebackend.service.ts":
/*!************************************************!*\
  !*** ./src/app/helpers/fakebackend.service.ts ***!
  \************************************************/
/*! exports provided: FakebackendService, fakeBackeEndProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakebackendService", function() { return FakebackendService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackeEndProvider", function() { return fakeBackeEndProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var admin = {
    user: 'admin',
    token: 'secret-jwt',
};
var FakebackendService = /** @class */ (function () {
    function FakebackendService() {
    }
    FakebackendService.prototype.intercept = function (req, next) {
        var user = JSON.parse(localStorage.getItem('users')) || [];
        return (Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (v, i) {
            // We define what server is needed, either auth or data
            switch (req.url) {
                case '/auth/login':
                    if (req.body.password === 'pass' &&
                        req.body.user === 'admin' &&
                        req.method === 'POST') {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: admin }));
                    }
                    else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                            error: { message: 'Username or password is incorrect' },
                        });
                    }
                    break;
                case '/auth/logout':
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                        status: 200,
                        body: { message: 'sesion cerrada' },
                    }));
            }
        }))
            // add some delay to test loading elements and better feel
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(700))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])()));
    };
    FakebackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FakebackendService);
    return FakebackendService;
}());

var fakeBackeEndProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakebackendService,
    multi: true,
};


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/router/router-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/router/router-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RouterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterRoutingModule", function() { return RouterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_web_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/web/home/home.component */ "./src/app/components/web/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_web_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/web/contact/contact.component */ "./src/app/components/web/contact/contact.component.ts");
/* harmony import */ var _components_web_info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/web/info/info.component */ "./src/app/components/web/info/info.component.ts");
/* harmony import */ var _components_web_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/web/welcome/welcome.component */ "./src/app/components/web/welcome/welcome.component.ts");
/* harmony import */ var _components_dashboard_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/dashboard/main-view/main-view.component */ "./src/app/components/dashboard/main-view/main-view.component.ts");
/* harmony import */ var _components_dashboard_ledgers_ledgers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/dashboard/ledgers/ledgers.component */ "./src/app/components/dashboard/ledgers/ledgers.component.ts");
/* harmony import */ var _components_dashboard_safety_safety_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/dashboard/safety/safety.component */ "./src/app/components/dashboard/safety/safety.component.ts");
/* harmony import */ var _components_dashboard_enviro_manage_enviro_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/dashboard/enviro-manage/enviro-manage.component */ "./src/app/components/dashboard/enviro-manage/enviro-manage.component.ts");
/* harmony import */ var _components_dashboard_energy_energy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/dashboard/energy/energy.component */ "./src/app/components/dashboard/energy/energy.component.ts");
/* harmony import */ var _components_dashboard_quality_quality_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/dashboard/quality/quality.component */ "./src/app/components/dashboard/quality/quality.component.ts");















var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "home",
        component: _components_web_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: "",
                component: _components_web_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"]
            },
            {
                path: "contact",
                component: _components_web_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
            },
            {
                path: "info",
                component: _components_web_info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"]
            }
        ]
    },
    {
        path: "dashboard",
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: "",
                component: _components_dashboard_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_9__["MainViewComponent"]
            },
            {
                path: "enviro-manage",
                component: _components_dashboard_enviro_manage_enviro_manage_component__WEBPACK_IMPORTED_MODULE_12__["EnviroManageComponent"],
            },
            {
                path: "ledgers",
                component: _components_dashboard_ledgers_ledgers_component__WEBPACK_IMPORTED_MODULE_10__["LedgersComponent"]
            },
            {
                path: "safety",
                component: _components_dashboard_safety_safety_component__WEBPACK_IMPORTED_MODULE_11__["SafetyComponent"]
            },
            {
                path: "energy",
                component: _components_dashboard_energy_energy_component__WEBPACK_IMPORTED_MODULE_13__["EnergyComponent"]
            },
            {
                path: "quality",
                component: _components_dashboard_quality_quality_component__WEBPACK_IMPORTED_MODULE_14__["QualityComponent"]
            }
        ]
    },
    { path: "**", redirectTo: "" }
];
var RouterRoutingModule = /** @class */ (function () {
    function RouterRoutingModule() {
    }
    RouterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RouterRoutingModule);
    return RouterRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertService = /** @class */ (function () {
    function AlertService() {
    }
    AlertService.prototype.error = function (e) { };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (user, password) {
        return this.http
            .post("/auth/login", { user: user, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        return this.http.get("/auth/logout");
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rodrigopena/Documents/envirosyst/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/brands/brands.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _brand_models_brand_models_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brand-models/brand-models.component */ "./src/app/brand-models/brand-models.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'brands', component: _brands_brands_component__WEBPACK_IMPORTED_MODULE_2__["BrandsComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: '', redirectTo: '/brands', pathMatch: 'full' },
    { path: 'detail/:id', component: _brand_models_brand_models_component__WEBPACK_IMPORTED_MODULE_4__["BrandModelsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu{\n    margin-right: 20px;\n    text-align: left;\n}\nnav a {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin: 1px 0;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n  }\nnav a:visited, a:link {\n    color: #4885ed;\n  }\nnav a:hover {\n    color: #4885ed;\n    background-color: #efefef;\n  }\nnav a.active {\n    color: #4885ed;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"pagina\">\n  <img class=\"main-logo\" src=\"assets/logo.png\">  \n  <div class=\"main-head\"><app-messages></app-messages></div>\n  <!-- <app-brands></app-brands>   -->\n  <div class=\"contenitore\">\n    <div class=\"menu\">\n      <nav>\n        <!-- <a routerLink=\"/dashboard\">Dashboard</a>\n        <br> -->\n        <a routerLink=\"/brands\">Brands</a>\n      </nav>\n    </div>\n    <router-outlet></router-outlet>\n  </div>  \n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Park // by hackweb';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/brands/brands.component.ts");
/* harmony import */ var _brand_models_brand_models_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand-models/brand-models.component */ "./src/app/brand-models/brand-models.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _brands_brands_component__WEBPACK_IMPORTED_MODULE_4__["BrandsComponent"],
                _brand_models_brand_models_component__WEBPACK_IMPORTED_MODULE_5__["BrandModelsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__["HeroSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brand-models/brand-models.component.css":
/*!*********************************************************!*\
  !*** ./src/app/brand-models/brand-models.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brand-models/brand-models.component.html":
/*!**********************************************************!*\
  !*** ./src/app/brand-models/brand-models.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"brand\">\n  <!-- <button (click)=\"goBack()\">go back</button> -->\n\n  <h2>{{ brand.name }} Details</h2>\n  <div><span>id: </span>{{brand.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"brand.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n  <br>\n  <button (click)=\"save()\">save</button>\n\n</div>"

/***/ }),

/***/ "./src/app/brand-models/brand-models.component.ts":
/*!********************************************************!*\
  !*** ./src/app/brand-models/brand-models.component.ts ***!
  \********************************************************/
/*! exports provided: BrandModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandModelsComponent", function() { return BrandModelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brand */ "./src/app/brand.ts");
/* harmony import */ var _brand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../brand.service */ "./src/app/brand.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrandModelsComponent = /** @class */ (function () {
    function BrandModelsComponent(route, brandService, location) {
        this.route = route;
        this.brandService = brandService;
        this.location = location;
    }
    BrandModelsComponent.prototype.ngOnInit = function () {
        this.getBrand();
    };
    BrandModelsComponent.prototype.getBrand = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.brandService.getBrand(id)
            .subscribe(function (brand) { return _this.brand = brand; });
    };
    BrandModelsComponent.prototype.goBack = function () {
        this.location.back();
    };
    BrandModelsComponent.prototype.save = function () {
        var _this = this;
        this.brandService.updateBrand(this.brand)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _brand__WEBPACK_IMPORTED_MODULE_3__["Brand"])
    ], BrandModelsComponent.prototype, "brand", void 0);
    BrandModelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand-models',
            template: __webpack_require__(/*! ./brand-models.component.html */ "./src/app/brand-models/brand-models.component.html"),
            styles: [__webpack_require__(/*! ./brand-models.component.css */ "./src/app/brand-models/brand-models.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _brand_service__WEBPACK_IMPORTED_MODULE_4__["BrandService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], BrandModelsComponent);
    return BrandModelsComponent;
}());



/***/ }),

/***/ "./src/app/brand.service.ts":
/*!**********************************!*\
  !*** ./src/app/brand.service.ts ***!
  \**********************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BrandService = /** @class */ (function () {
    function BrandService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        // private brandsUrl = 'api/brands';  // URL to web api
        this.brandsUrl = 'https://www.hackweb.it/api/park'; // URL to web api
    }
    // getBrands(): Brand[] {
    //   return BRANDS;
    // }
    BrandService.prototype.getBrands = function () {
        var _this = this;
        // this.messageService.add('ho caricato i brand');
        // return of(BRANDS);
        return this.http.get(this.brandsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (brands) { return _this.log("fetched brands"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBrands', [])));
    };
    // getBrand(id: number): Observable<Brand> {
    //   // this.messageService.add(`HeroService: fetched hero id=${id}`);
    //   // return of(BRANDS.find(brand => brand.id === id));
    //   const url = `${this.brandsUrl}/${id}`;
    //   return this.http.get<Brand>(url)
    //     .pipe(
    //       tap(_ => this.log(`fetched brand id=${id}`)),
    //       catchError(this.handleError<Brand>(`getHero id=${id}`))
    //     );
    // }
    BrandService.prototype.getBrand = function (id) {
        var _this = this;
        var url = this.brandsUrl + '/?id=' + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (brands) { return brands[0]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) { return _this.log('fetching'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getbrand')));
    };
    BrandService.prototype.log = function (message) {
        // this.messageService.add('HeroService: ' + message);
    };
    BrandService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    BrandService.prototype.updateBrand = function (brand) {
        var _this = this;
        return this.http.put(this.brandsUrl, brand, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('update'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateBrand')));
    };
    BrandService.prototype.addBrand = function (brand) {
        var _this = this;
        return this.http.post(this.brandsUrl, brand, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('added brand'); }), 
        // catchError((err, caught) => {
        //   return of(null);
        // })
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('add Brand')));
    };
    BrandService.prototype.deleteBrand = function (brand) {
        var _this = this;
        var id = typeof brand === 'number' ? brand : brand.id;
        var url = this.brandsUrl + '/' + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('delete'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); }));
    };
    BrandService.prototype.searchBrands = function (term) {
        var _this = this;
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        var url = this.brandsUrl + '/?name=' + term;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('searching for brands'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); }));
    };
    BrandService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "./src/app/brand.ts":
/*!**************************!*\
  !*** ./src/app/brand.ts ***!
  \**************************/
/*! exports provided: Brand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
var Brand = /** @class */ (function () {
    function Brand() {
    }
    return Brand;
}());



/***/ }),

/***/ "./src/app/brands/brands.component.css":
/*!*********************************************!*\
  !*** ./src/app/brands/brands.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n.heroes {\n    /* margin: 0 0 2em 0; */\n    margin: 0 auto;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n    text-align: left;\n  }\n.heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 2em;\n    border-radius: 4px;\n  }\n.heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n.heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.heroes .text {\n    position: relative;\n    top: -3px;\n  }\n.heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n    min-width: 30px;\n  }\n.heroes .list-text {\n    display: inline-block;\n    font-size: small;\n    padding: 0.8em 0.7em 0 0.7em;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n.heroes a{\n    text-decoration: none;\n    color: #000;\n  }"

/***/ }),

/***/ "./src/app/brands/brands.component.html":
/*!**********************************************!*\
  !*** ./src/app/brands/brands.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"false\">\n    <h2>My car</h2>\n    <label>Brand:        \n      <strong *ngIf=\"selectedHero\">{{ selectedHero.name }}</strong>\n      <br>\n      <br>    \n      <input *ngIf=\"selectedHero\" [(ngModel)]=\"selectedHero.description\" placeholder=\"name\">\n    </label>\n    <br>\n</div>  \n<div>\n  <label>Brand name:\n    <input #brandName />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(brandName.value); brandName.value=''\">\n    add\n  </button>\n</div>\n\n<app-hero-search></app-hero-search>\n\n<div>\n  <h2>Brands</h2>\n  <ul class=\"heroes\" *ngIf=\"brands != null\">\n    <li *ngFor=\"let brand of brands; let i = index\"\n      [class.selected]=\"brand === selectedHero\"\n      (click)=\"onSelect(brand)\">\n      <a routerLink=\"/detail/{{brand.id}}\">\n        <span class=\"badge\">{{i+1}}</span> <span class=\"list-text\">{{brand.name}}</span>\n      </a>\n      <button class=\"delete\" title=\"delete brand\"\n        (click)=\"delete(brand)\">\n        x\n      </button>\n    </li>\n  </ul>\n</div>\n<!-- <app-brand-models [brand]=\"selectedHero\"></app-brand-models> -->\n\n"

/***/ }),

/***/ "./src/app/brands/brands.component.ts":
/*!********************************************!*\
  !*** ./src/app/brands/brands.component.ts ***!
  \********************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _brand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../brand.service */ "./src/app/brand.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandsComponent = /** @class */ (function () {
    function BrandsComponent(brandService, router) {
        this.brandService = brandService;
        this.router = router;
        this.brand = {
            id: 1,
            name: 'Honda',
            description: ''
        };
    }
    BrandsComponent.prototype.onSelect = function (brand) {
        // this.selectedHero = hero;
        // this.router.navigate(['/detail/' + brand.id]);
    };
    BrandsComponent.prototype.getBrands = function () {
        var _this = this;
        // this.brands = this.brandService.getBrands();
        this.brandService.getBrands().subscribe(function (brands) { return _this.brands = brands; });
    };
    BrandsComponent.prototype.ngOnInit = function () {
        this.getBrands();
    };
    BrandsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.brandService.addBrand({ name: name }).subscribe(function (brand) {
            _this.brands.push(brand);
        });
    };
    BrandsComponent.prototype.delete = function (brand) {
        this.brands = this.brands.filter(function (h) { return h !== brand; });
        this.brandService.deleteBrand(brand).subscribe();
    };
    BrandsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! ./brands.component.html */ "./src/app/brands/brands.component.html"),
            styles: [__webpack_require__(/*! ./brands.component.css */ "./src/app/brands/brands.component.css")]
        }),
        __metadata("design:paramtypes", [_brand_service__WEBPACK_IMPORTED_MODULE_1__["BrandService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n[class*='col-']:last-of-type {\n    padding-right: 0;\n  }\na {\n    text-decoration: none;\n  }\n*, *:after, *:before {\n    box-sizing: border-box;\n  }\nh3 {\n    text-align: center; margin-bottom: 0;\n  }\nh4 {\n    position: relative;\n  }\n.grid {\n    margin: 0;\n  }\n.col-1-4 {\n    width: 25%;\n  }\n.module {\n    padding: 20px;\n    text-align: center;\n    color: #4885ed;\n    max-height: 120px;\n    min-width: 120px;\n    background-color: #efefef;\n    border-radius: 2px;\n  }\n.module:hover {\n    background-color: #4885ed;\n    cursor: pointer;\n    color: #efefef;\n  }\n.grid-pad {\n    padding: 10px 0;\n  }\n.grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px;\n  }\n@media (max-width: 600px) {\n    .module {\n      font-size: 10px;\n      max-height: 75px; }\n  }\n@media (max-width: 1024px) {\n    .grid {\n      margin: 0;\n    }\n    .module {\n      min-width: 60px;\n    }\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let brand of brands\" class=\"col-1-4\"\n    routerLink=\"/detail/{{brand.id}}\">\n    <div class=\"module hero\">\n      <h4>{{brand.name}}</h4>\n    </div>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _brand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../brand.service */ "./src/app/brand.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(brandService) {
        this.brandService = brandService;
        this.brands = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getBrands();
    };
    DashboardComponent.prototype.getBrands = function () {
        var _this = this;
        this.brandService.getBrands()
            .subscribe(function (brands) { return _this.brands = brands.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_brand_service__WEBPACK_IMPORTED_MODULE_1__["BrandService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/hero-search/hero-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Brand Search</h4>\n  \n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  \n  <ul class=\"search-result\">\n    <li *ngFor=\"let brand of brands$ | async\" >\n      <a routerLink=\"/detail/{{brand.id}}\">\n        {{brand.name}}\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.ts ***!
  \******************************************************/
/*! exports provided: HeroSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function() { return HeroSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _brand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brand.service */ "./src/app/brand.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroSearchComponent = /** @class */ (function () {
    function HeroSearchComponent(brandService) {
        this.brandService = brandService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brands$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.brandService.searchBrands(term); }));
    };
    HeroSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-search',
            template: __webpack_require__(/*! ./hero-search.component.html */ "./src/app/hero-search/hero-search.component.html"),
            styles: [__webpack_require__(/*! ./hero-search.component.css */ "./src/app/hero-search/hero-search.component.css")]
        }),
        __metadata("design:paramtypes", [_brand_service__WEBPACK_IMPORTED_MODULE_3__["BrandService"]])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        // this.messages.push(message);
        this.messages[0] = message;
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */   \n  button.clear {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n  }   \n  button:hover {\n    background-color: #cfd8dc;\n  }   \n  button:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto;\n  }   \n  button.clear {\n    color: #888;\n    margin-bottom: 12px;\n  }"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n<!--   \n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button> -->\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/francesco/websites/hackweb/hw_ux/hw-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
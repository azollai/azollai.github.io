webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./test/test.module": [
		"./src/app/test/test.module.ts",
		"test.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */], },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'test', loadChildren: './test/test.module#TestModule', canLoad: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__["a" /* AuthGuard */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenav role=\"navigation\">\r\n    <app-sidenav-list (sidenavToggle)=\"sidenav.toggle()\"></app-sidenav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n    <main class=\"sidenav-content-margin\">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%; }\n\nmat-sidenav {\n  width: 250px; }\n\n.sidenav-content-margin {\n  padding-top: 64px;\n  height: calc( 100vh - 64px);\n  overflow-y: auto; }\n\n@media screen and (max-width: 599px) {\n    .sidenav-content-margin {\n      padding-top: 56px;\n      height: calc( 100vh - 56px); } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_state__ = __webpack_require__("./src/app/auth/auth.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: 'AIzaSyAeBhGFzs-5WC-9WU-Olmxi-seYLKvcMbQ',
            authDomain: 'valto-214b6.firebaseapp.com',
            databaseURL: 'https://valto-214b6.firebaseio.com',
            projectId: 'valto-214b6',
            storageBucket: 'valto-214b6.appspot.com',
            messagingSenderId: '940441955516'
        });
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            debugger;
            if (user) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__auth_auth_state__["d" /* SetUser */](user));
            }
            console.log('one chane', user);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngxs_store__["f" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'valto' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__auth_auth_module__["a" /* AuthModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_finish_signup_finish_signup_component__ = __webpack_require__("./src/app/auth/signup/finish-signup/finish-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var authRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'finish-signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_finish_signup_finish_signup_component__["a" /* FinishSignupComponent */] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(authRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__auth_guard__["a" /* AuthGuard */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_state__ = __webpack_require__("./src/app/auth/auth.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, store) {
        this.router = router;
        this.store = store;
        // this.isAuthenticated$.subscribe(isAuthenticated => {
        //   debugger
        //   if (!isAuthenticated) {
        //     this.router.navigate(['/welcome']);
        //   }
        // });
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.isAuthenticated();
    };
    AuthGuard.prototype.canLoad = function (route) {
        return this.isAuthenticated();
    };
    // canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    //   return this.isAuthenticated();
    // }
    AuthGuard.prototype.isAuthenticated = function () {
        var _this = this;
        // return Observable.from(firebase.auth().)
        //                  .map(auth => {
        //
        //                  });
        return this.store.selectOnce(function (state) { return state.auth.isAuthenticated; })
            .do(function (isAuthenticated) {
            debugger;
            if (isAuthenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/welcome']);
            }
        });
        // this.isAuthenticated$.map(isAuthenticated => {
        //   debugger;
        //   if (isAuthenticated !== undefined) {
        //     if (isAuthenticated) {
        //       return true;
        //     } else {
        //       this.router.navigate(['/welcome']);
        //     }
        //   }
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngxs_store__["c" /* Select */])(__WEBPACK_IMPORTED_MODULE_5__auth_state__["a" /* AuthState */].isAuthenticated),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], AuthGuard.prototype, "isAuthenticated$", void 0);
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__ngxs_store__["f" /* Store */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(store) {
        this.store = store;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        return this.store.select(function (store) { return store.auth.token; })
            .take(1)
            .switchMap(function (token) {
            var copiedReq = req.clone({ params: req.params.set('auth', token) });
            return next.handle(copiedReq);
        });
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngxs_store__["f" /* Store */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_state__ = __webpack_require__("./src/app/auth/auth.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_place_search_place_search_module__ = __webpack_require__("./src/app/common/place-search/place-search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_finish_signup_finish_signup_component__ = __webpack_require__("./src/app/auth/signup/finish-signup/finish-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_form_control_error_messages_form_control_error_messages_module__ = __webpack_require__("./src/app/common/form-control-error-messages/form-control-error-messages.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_finish_signup_finish_signup_component__["a" /* FinishSignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngxs_store__["b" /* NgxsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_7__auth_state__["a" /* AuthState */]]),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__common_place_search_place_search_module__["a" /* PlaceSearchModule */],
                __WEBPACK_IMPORTED_MODULE_14__common_form_control_error_messages_form_control_error_messages_module__["a" /* FormControlErrorMessagesModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    // signupUser(email: string, password: string) {
    //   firebase.auth().createUserWithEmailAndPassword(email, password)
    //           .catch(
    //             error => console.log(error)
    //           );
    // }
    AuthService.prototype.socialSignup = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"].FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithPopup(provider).then(function (result) {
            console.log(result);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export START_LOADING */
/* unused harmony export STOP_LOADING */
/* unused harmony export START_EMAIL_SIGNUP */
/* unused harmony export START_SOCIAL_SIGNUP */
/* unused harmony export FINISH_SOCIAL_SIGNUP */
/* unused harmony export START_EMAIL_LOGIN */
/* unused harmony export START_SOCIAL_LOGIN */
/* unused harmony export START_LOGOUT */
/* unused harmony export SET_USER */
/* unused harmony export DELETE_USER */
/* unused harmony export StartLoading */
/* unused harmony export StopLoading */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return StartEmailSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return StartSocialSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FinishSocialSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StartEmailLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return StartSocialLogin; });
/* unused harmony export StartLogout */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromPromise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var START_LOADING = '[Auth] START_LOADING';
var STOP_LOADING = '[Auth] STOP_LOADING';
var START_EMAIL_SIGNUP = '[Auth] START_EMAIL_SIGNUP';
var START_SOCIAL_SIGNUP = '[Auth] START_SOCIAL_SIGNUP';
var FINISH_SOCIAL_SIGNUP = '[Auth] FINISH_SOCIAL_SIGNUP';
var START_EMAIL_LOGIN = '[Auth] START_EMAIL_LOGIN';
var START_SOCIAL_LOGIN = '[Auth] START_SOCIAL_LOGIN';
var START_LOGOUT = '[Auth] START_LOGOUT';
var SET_USER = '[Auth] SET_USER';
var DELETE_USER = '[Auth] DELETE_USER';
var StartLoading = /** @class */ (function () {
    function StartLoading() {
    }
    StartLoading.type = START_LOADING;
    return StartLoading;
}());

var StopLoading = /** @class */ (function () {
    function StopLoading() {
    }
    StopLoading.type = STOP_LOADING;
    return StopLoading;
}());

var StartEmailSignup = /** @class */ (function () {
    function StartEmailSignup(payload) {
        this.payload = payload;
    }
    StartEmailSignup.type = START_EMAIL_SIGNUP;
    return StartEmailSignup;
}());

var StartSocialSignup = /** @class */ (function () {
    function StartSocialSignup() {
    }
    StartSocialSignup.type = START_SOCIAL_SIGNUP;
    return StartSocialSignup;
}());

var FinishSocialSignup = /** @class */ (function () {
    function FinishSocialSignup(payload) {
        this.payload = payload;
    }
    FinishSocialSignup.type = FINISH_SOCIAL_SIGNUP;
    return FinishSocialSignup;
}());

var StartEmailLogin = /** @class */ (function () {
    function StartEmailLogin(payload) {
        this.payload = payload;
    }
    StartEmailLogin.type = START_EMAIL_LOGIN;
    return StartEmailLogin;
}());

var StartSocialLogin = /** @class */ (function () {
    function StartSocialLogin() {
    }
    StartSocialLogin.type = START_SOCIAL_LOGIN;
    return StartSocialLogin;
}());

var StartLogout = /** @class */ (function () {
    function StartLogout() {
    }
    StartLogout.type = START_LOGOUT;
    return StartLogout;
}());

var SetUser = /** @class */ (function () {
    function SetUser(payload) {
        this.payload = payload;
    }
    SetUser.type = SET_USER;
    return SetUser;
}());

var DeleteUser = /** @class */ (function () {
    function DeleteUser() {
    }
    DeleteUser.type = DELETE_USER;
    return DeleteUser;
}());

var AuthState = /** @class */ (function () {
    function AuthState(router) {
        this.router = router;
    }
    AuthState.isLoading = function (state) {
        return state.isLoading;
    };
    AuthState.isAuthenticated = function (state) {
        return state.isAuthenticated;
    };
    AuthState.prototype.setUser = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            isAuthenticated: true,
            user: payload
        });
        debugger;
    };
    AuthState.prototype.deleteUser = function (_a) {
        var _this = this;
        var patchState = _a.patchState;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut().then(function () {
            patchState({
                isAuthenticated: false,
                user: null
            });
            _this.router.navigate(['/']);
        }, function (error) {
            console.error(error);
        });
    };
    AuthState.prototype.startLoading = function (_a) {
        var patchState = _a.patchState;
        patchState({
            isLoading: true
        });
    };
    AuthState.prototype.stopLoading = function (_a) {
        var patchState = _a.patchState;
        patchState({
            isLoading: false
        });
    };
    AuthState.prototype.startEmailSignup = function (_a, _b) {
        var dispatch = _a.dispatch;
        var payload = _b.payload;
        dispatch(new StartLoading());
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__["a" /* fromPromise */])(__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(payload.email, payload.password))
            .subscribe(function (user) {
            console.log('mail signup', user);
            dispatch(new SetUser(user));
            var userMeta = {
                birthDate: payload.birthDate.getTime(),
                firstName: payload.firstName,
                graduation: payload.graduation,
                lastName: payload.lastName,
                location: payload.location
            };
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + user.uid).set(userMeta)
                .then(function (result) {
                console.log('db done', result);
                dispatch(new StopLoading());
            }, function (error) {
                console.error('db error', error);
                dispatch(new StopLoading());
            });
        }, function (error) {
            dispatch(new StopLoading());
            console.error(error);
        });
    };
    AuthState.prototype.startSocialSignup = function (_a) {
        var _this = this;
        var dispatch = _a.dispatch;
        dispatch(new StartLoading());
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithPopup(provider).then(function (result) {
            var userMeta = {
                firstName: result.additionalUserInfo.profile.first_name,
                lastName: result.additionalUserInfo.profile.last_name
            };
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + result.user.uid).set(userMeta)
                .then(function () {
                console.log('db manipulated');
            })
                .catch(function (error) { return console.error('db error', error); });
            _this.router.navigate(['finish-signup']);
            dispatch(new StopLoading());
        }, function (error) {
            dispatch(new StopLoading());
            console.error(error);
        });
    };
    AuthState.prototype.finishSocialSignup = function (_a, _b) {
        var dispatch = _a.dispatch;
        var payload = _b.payload;
        var userMeta = {
            birthDate: payload.birthDate.getTime(),
            graduation: payload.graduation,
            location: payload.location
        };
        var currentUser = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser;
        dispatch(new SetUser(currentUser));
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + currentUser.uid).update(userMeta)
            .then(function (result) {
            console.log('db manipulated', currentUser);
            dispatch(new StopLoading());
        }, function (error) {
            console.error('db error', error);
            dispatch(new StopLoading());
        });
    };
    AuthState.prototype.startLogout = function (_a) {
        var dispatch = _a.dispatch;
        dispatch(new StartLoading());
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut()
            .then(function () {
            dispatch([
                new DeleteUser(),
                new StopLoading()
            ]);
        });
    };
    AuthState.prototype.startEmailLogin = function (_a, _b) {
        var dispatch = _a.dispatch;
        var payload = _b.payload;
        dispatch(new StartLoading());
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(payload.email, payload.password)
            .then(function (user) {
            dispatch([
                new StopLoading(),
                new SetUser(user)
            ]);
        }, function (error) {
            console.error(error);
            dispatch(new StopLoading());
        });
    };
    AuthState.prototype.startSocialLogin = function (_a) {
        var dispatch = _a.dispatch;
        dispatch(new StartLoading());
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithPopup(provider)
            .then(function (response) {
            dispatch([new StopLoading(), new SetUser(response.user)]);
        }, function (error) {
            console.error(error);
            dispatch(new StopLoading());
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(SetUser),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetUser]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "setUser", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(DeleteUser),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "deleteUser", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(StartLoading),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "startLoading", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(StopLoading),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "stopLoading", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(StartEmailSignup),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, StartEmailSignup]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "startEmailSignup", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(StartSocialSignup),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "startSocialSignup", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(FinishSocialSignup),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, FinishSocialSignup]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "finishSocialSignup", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(StartLogout),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "startLogout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(StartEmailLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, StartEmailLogin]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "startEmailLogin", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["a" /* Action */])(StartSocialLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "startSocialLogin", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["d" /* Selector */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState, "isLoading", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["d" /* Selector */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState, "isAuthenticated", null);
    AuthState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngxs_store__["e" /* State */])({
            name: 'auth',
            defaults: {
                isLoading: false,
                isAuthenticated: undefined,
                user: null,
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthState);
    return AuthState;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-form\">\r\n  <form fxLayout=\"column\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" fxLayoutAlign=\"center none\" fxLayoutGap=\"10px\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"30px\">\r\n      <button mat-button class=\"facebook-login\" type=\"button\" (click)=\"socialSignin()\">\r\n        Jelentkezz be Facebook fiókoddal\r\n      </button>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n          <!--E-mail-->\r\n          <mat-form-field>\r\n            <input\r\n              type=\"email\"\r\n              matInput\r\n              formControlName=\"email\"\r\n              autocomplete=\"email\"\r\n              placeholder=\"E-mail\"\r\n              name=\"email\"\r\n              required>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"emailControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n          <!--Password-->\r\n          <mat-form-field>\r\n            <input\r\n              type=\"password\"\r\n              matInput\r\n              formControlName=\"password\"\r\n              autocomplete=\"new-password\"\r\n              placeholder=\"Jelszó\"\r\n              name=\"password\"\r\n              required>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"passwordControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n\r\n      <button *ngIf=\"!(isLoading$ | async)\" type=\"submit\" mat-raised-button color=\"primary\"\r\n              (click)=\"submitPressed=true\">\r\n        Bejelentkezés\r\n      </button>\r\n      <!--<ng-template #matSpinner>-->\r\n      <!--<mat-spinner></mat-spinner>-->\r\n      <!--</ng-template>-->\r\n    </div>\r\n  </form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  min-width: 300px; }\n\n.login-form {\n  margin: 10px; }\n\n.facebook-login {\n  max-width: 500px;\n  background-color: #3b5998;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_state__ = __webpack_require__("./src/app/auth/auth.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_validators__ = __webpack_require__("./node_modules/ngx-validators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
        this.emailControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
        this.passwordControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].alphabeticalCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].digitCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].lowercaseCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].uppercaseCharacterRule(1)
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginComponent.prototype.initForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: this.emailControl,
            password: this.passwordControl,
        });
    };
    LoginComponent.prototype.socialSignin = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__auth_state__["g" /* StartSocialLogin */]());
    };
    LoginComponent.prototype.onSubmit = function (form) {
        if (this.form.valid) {
            // console.log('FORM', this.form.value);
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__auth_state__["e" /* StartEmailLogin */]({
                email: this.form.value.email,
                password: this.form.value.password,
            }));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngxs_store__["c" /* Select */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], LoginComponent.prototype, "isLoading$", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngxs_store__["f" /* Store */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/finish-signup/finish-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"signup-form\">\r\n  <form fxLayout=\"column\" [formGroup]=\"form\" fxLayoutAlign=\"center none\" fxLayoutGap=\"10px\" (ngSubmit)=\"onSubmit()\">\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n        <!--Birth date-->\r\n        <mat-form-field>\r\n          <input matInput\r\n                 placeholder=\"Születési idő\"\r\n                 [matDatepicker]=\"picker\"\r\n                 [max]=\"maxDate\"\r\n                 formControlName=\"birthDate\"\r\n                 name=\"birthDate\"\r\n                 required\r\n                 (focus)=\"picker.open()\"\r\n                 (click)=\"picker.open()\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n          <mat-error>\r\n            <app-form-control-error-messages\r\n              [errorKeys]=\"birthDateControl?.errors\"></app-form-control-error-messages>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <!--Graduation Level-->\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Legmagasabb végzettség\"\r\n                      required\r\n                      formControlName=\"graduation\"\r\n                      name=\"graduation\">\r\n            <mat-option *ngFor=\"let level of levels\" [value]=\"level.value\">\r\n              {{ level.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error>\r\n            <app-form-control-error-messages\r\n              [errorKeys]=\"graduationControl?.errors\"></app-form-control-error-messages>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <!--Region-->\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n          <button mat-icon-button color=\"primary\" type=\"button\" (click)=\"gpsEmitter.next()\">\r\n            <mat-icon aria-label=\"GPS icon\">place</mat-icon>\r\n          </button>\r\n          <mat-form-field ngClass.gt-xs=\"gps-form-field\">\r\n            <input matInput\r\n                   placeholder=\"Tartozkódási hely\"\r\n                   name=\"gps\"\r\n                   formControlName=\"search\"\r\n                   required\r\n                   #placeInput>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"searchControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"app-place-search\">\r\n        <app-place-search [searchElementRef]=\"searchElementRef\" [searchControl]=\"searchControl\"\r\n                          [gpsEmitter]=\"gpsEmitter\" (centerChange)=\"centerChange($event)\"></app-place-search>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n      <!--Terms and Conditions-->\r\n      <mat-checkbox name=\"agree\" color=\"primary\" formControlName=\"agree\" required>\r\n        Elfogadom a Terms and Conditions\r\n      </mat-checkbox>\r\n      <mat-error *ngIf=\"agreeControl.hasError('required') && (!agreeControl.pristine || submitPressed)\">El kell fogadnod\r\n        a Terms\r\n        and\r\n        Conditions\r\n      </mat-error>\r\n      <!--Submit-->\r\n      <button *ngIf=\"!(isLoading$ | async)\" type=\"submit\" mat-raised-button color=\"primary\"\r\n              (click)=\"submitPressed=true\">\r\n        Regisztráció befejezése\r\n      </button>\r\n      <!--<ng-template #matSpinner>-->\r\n      <!--<mat-spinner></mat-spinner>-->\r\n      <!--</ng-template>-->\r\n    </div>\r\n  </form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/finish-signup/finish-signup.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  min-width: 240px; }\n\n.app-place-search {\n  width: 100%;\n  max-width: 600px; }\n\n.signup-form {\n  margin: 10px; }\n\n.gps-form-field {\n  min-width: 400px; }\n"

/***/ }),

/***/ "./src/app/auth/signup/finish-signup/finish-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_state__ = __webpack_require__("./src/app/auth/auth.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinishSignupComponent = /** @class */ (function () {
    function FinishSignupComponent(store) {
        this.store = store;
        this.maxDate = new Date(new Date().getFullYear() - 13, 1, 1);
        this.levels = [
            { name: 'Kevesebb, mint 8 általános', value: 0 },
            { name: 'Általános iskola', value: 1 },
            { name: 'Középiskola', value: 2 },
            { name: 'Felső oktatás', value: 3 }
        ];
        this.birthDateControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
        ]);
        this.graduationControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.agreeControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].requiredTrue);
    }
    FinishSignupComponent.prototype.ngOnInit = function () {
        this.gpsEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.initForm();
    };
    FinishSignupComponent.prototype.initForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            birthDate: this.birthDateControl,
            graduation: this.graduationControl,
            search: this.searchControl,
            agree: this.agreeControl
        });
    };
    FinishSignupComponent.prototype.centerChange = function (event) {
        this.latLngLiteral = event;
    };
    FinishSignupComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__auth_state__["c" /* FinishSocialSignup */]({
                birthDate: this.form.value.birthDate,
                graduation: this.form.value.graduation,
                location: this.latLngLiteral
            }));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngxs_store__["c" /* Select */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], FinishSignupComponent.prototype, "isLoading$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('placeInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], FinishSignupComponent.prototype, "searchElementRef", void 0);
    FinishSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-finish-signup',
            template: __webpack_require__("./src/app/auth/signup/finish-signup/finish-signup.component.html"),
            styles: [__webpack_require__("./src/app/auth/signup/finish-signup/finish-signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngxs_store__["f" /* Store */]])
    ], FinishSignupComponent);
    return FinishSignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"signup-form\">\r\n  <form fxLayout=\"column\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" fxLayoutAlign=\"center none\" fxLayoutGap=\"10px\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"30px\">\r\n      <button mat-button class=\"facebook-login\" type=\"button\" (click)=\"socialSignup()\">\r\n        Regisztrálj Facebook fiókoddal\r\n      </button>\r\n      <div>Vagy a következő adatok kitöltésével!</div>\r\n    </div>\r\n    {{confirmPasswordControl.errors| json}}\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n          <!--Last name-->\r\n          <mat-form-field>\r\n            <input\r\n              type=\"text\"\r\n              matInput\r\n              placeholder=\"Vezetéknév\"\r\n              autocomplete='family-name'\r\n              formControlName=\"lastName\"\r\n              name=\"lastName\"\r\n              required>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"lastNameControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <!--First name-->\r\n          <mat-form-field>\r\n            <input\r\n              type=\"text\"\r\n              matInput\r\n              autocomplete='given-name'\r\n              formControlName=\"firstName\"\r\n              placeholder=\"Keresztnév\"\r\n              name=\"firstName\"\r\n              required>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"firstNameControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n          <!--E-mail-->\r\n          <mat-form-field>\r\n            <input\r\n              type=\"email\"\r\n              matInput\r\n              formControlName=\"email\"\r\n              autocomplete=\"email\"\r\n              placeholder=\"E-mail\"\r\n              name=\"email\"\r\n              required>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"emailControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <!--Birth date-->\r\n          <mat-form-field>\r\n            <input matInput\r\n                   placeholder=\"Születési idő\"\r\n                   [matDatepicker]=\"picker\"\r\n                   [max]=\"maxDate\"\r\n                   formControlName=\"birthDate\"\r\n                   name=\"birthDate\"\r\n                   required\r\n                   (focus)=\"picker.open()\"\r\n                   (click)=\"picker.open()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"birthDateControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n          <!--Password-->\r\n          <mat-form-field>\r\n            <input\r\n              type=\"password\"\r\n              matInput\r\n              formControlName=\"password\"\r\n              autocomplete=\"new-password\"\r\n              placeholder=\"Jelszó\"\r\n              name=\"password\">\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"passwordControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <!--Confirm Password-->\r\n          <mat-form-field>\r\n            <input\r\n              type=\"password\"\r\n              matInput\r\n              formControlName=\"confirmPassword\"\r\n              autocomplete=\"new-password\"\r\n              placeholder=\"Jelszó megerősítése\"\r\n              name=\"confirmPassword\"\r\n              required>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"confirmPasswordControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <!--Graduation Level-->\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Legmagasabb végzettség\"\r\n                      required\r\n                      formControlName=\"graduation\"\r\n                      name=\"graduation\">\r\n            <mat-option *ngFor=\"let level of levels\" [value]=\"level.value\">\r\n              {{ level.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error>\r\n            <app-form-control-error-messages\r\n              [errorKeys]=\"graduationControl?.errors\"></app-form-control-error-messages>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <!--Region-->\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n          <button mat-icon-button color=\"primary\" type=\"button\" (click)=\"gpsEmitter.next()\">\r\n            <mat-icon aria-label=\"GPS icon\">place</mat-icon>\r\n          </button>\r\n          <mat-form-field ngClass.gt-xs=\"gps-form-field\">\r\n            <input matInput\r\n                   placeholder=\"Tartozkódási hely\"\r\n                   name=\"gps\"\r\n                   formControlName=\"search\"\r\n                   required\r\n                   #placeInput>\r\n            <mat-error>\r\n              <app-form-control-error-messages\r\n                [errorKeys]=\"searchControl?.errors\"></app-form-control-error-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"app-place-search\">\r\n        <app-place-search [searchElementRef]=\"searchElementRef\" [searchControl]=\"searchControl\"\r\n                          [gpsEmitter]=\"gpsEmitter\" (centerChange)=\"centerChange($event)\"></app-place-search>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\r\n      <!--Terms and Conditions-->\r\n      <mat-checkbox name=\"agree\" color=\"primary\" formControlName=\"agree\" required>\r\n        Elfogadom a Terms and Conditions\r\n      </mat-checkbox>\r\n      <mat-error *ngIf=\"agreeControl.hasError('required') && (!agreeControl.pristine || submitPressed)\">El kell fogadnod\r\n        a Terms\r\n        and\r\n        Conditions\r\n      </mat-error>\r\n      <!--Submit-->\r\n      <button *ngIf=\"!(isLoading$ | async)\" type=\"submit\" mat-raised-button color=\"primary\"\r\n              (click)=\"submitPressed=true\">\r\n        Regisztráció\r\n      </button>\r\n      <!--<ng-template #matSpinner>-->\r\n      <!--<mat-spinner></mat-spinner>-->\r\n      <!--</ng-template>-->\r\n    </div>\r\n  </form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  min-width: 240px; }\n\n.app-place-search {\n  width: 100%;\n  max-width: 600px; }\n\n.signup-form {\n  margin: 10px; }\n\n.gps-form-field {\n  min-width: 400px; }\n\n.facebook-login {\n  max-width: 500px;\n  background-color: #3b5998;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_state__ = __webpack_require__("./src/app/auth/auth.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_validators__ = __webpack_require__("./node_modules/ngx-validators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(store) {
        this.store = store;
        this.maxDate = new Date(new Date().getFullYear() - 13, 1, 1);
        this.levels = [
            { name: 'Kevesebb, mint 8 általános', value: 0 },
            { name: 'Általános iskola', value: 1 },
            { name: 'Középiskola', value: 2 },
            { name: 'Felső oktatás', value: 3 }
        ];
        this.lastNameControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(2)]);
        this.firstNameControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(2)]);
        this.emailControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email]);
        this.birthDateControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.passwordControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].alphabeticalCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].digitCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].lowercaseCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].uppercaseCharacterRule(1)
        ]);
        this.confirmPasswordControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].alphabeticalCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].digitCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].lowercaseCharacterRule(1),
            __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].uppercaseCharacterRule(1)
        ]);
        this.graduationControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.agreeControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].requiredTrue);
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.gpsEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.initForm();
    };
    SignupComponent.prototype.initForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            lastName: this.lastNameControl,
            firstName: this.firstNameControl,
            email: this.emailControl,
            birthDate: this.birthDateControl,
            password: this.passwordControl,
            confirmPassword: this.confirmPasswordControl,
            graduation: this.graduationControl,
            search: this.searchControl,
            agree: this.agreeControl
        }, __WEBPACK_IMPORTED_MODULE_5_ngx_validators__["a" /* PasswordValidators */].mismatchedPasswords('password', 'confirmPassword'));
    };
    SignupComponent.prototype.centerChange = function (event) {
        this.latLngLiteral = event;
    };
    SignupComponent.prototype.socialSignup = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__auth_state__["h" /* StartSocialSignup */]());
    };
    SignupComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            // console.log('FORM', this.form.value);
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__auth_state__["f" /* StartEmailSignup */]({
                email: this.form.value.email,
                password: this.form.value.password,
                firstName: this.form.value.firstName,
                lastName: this.form.value.lastName,
                birthDate: this.form.value.birthDate,
                graduation: this.form.value.graduation,
                location: this.latLngLiteral
            }));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngxs_store__["c" /* Select */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], SignupComponent.prototype, "isLoading$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('placeInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SignupComponent.prototype, "searchElementRef", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngxs_store__["f" /* Store */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/common/form-control-error-messages/form-control-error-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-error *ngIf=\"firstErrorKey\">\r\n  {{errorMessages[firstErrorKey]}} {{requiredLength}}\r\n</mat-error>\r\n"

/***/ }),

/***/ "./src/app/common/form-control-error-messages/form-control-error-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormControlErrorMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormControlErrorMessagesComponent = /** @class */ (function () {
    function FormControlErrorMessagesComponent() {
        this.errorMessages = {
            required: 'Ez a mező kötelező',
            minlength: 'Legalább x karakter hosszú kell legyen',
            email: 'Létező email címet adj meg',
            digitCharacterRule: 'Legalább x mennyiségű szám kell szerepeljen benne',
            alphabeticalCharacterRule: 'Legalább x mennyiségű betű kell szerepeljen benne',
            lowercaseCharacterRule: 'Legalább x mennyiségű kis betú kell szerepeljen benne',
            uppercaseCharacterRule: 'Legalább x mennyiségű nagy betú kell szerepeljen benne',
            mismatchedPasswords: 'A két jelszó nem egyezik meg'
        };
    }
    FormControlErrorMessagesComponent.prototype.ngOnChanges = function (changes) {
        if (changes.errorKeys.currentValue) {
            this.firstErrorKey = Object.keys(changes.errorKeys.currentValue)[0];
            if (this.firstErrorKey === 'minlength' || this.firstErrorKey === 'maxlength') {
                this.requiredLength = Object.values(changes.errorKeys.currentValue)[0]['requiredLength'];
            }
            else {
                if (this.firstErrorKey === 'digitCharacterRule' || this.firstErrorKey === 'alphabeticalCharacterRule' ||
                    this.firstErrorKey === 'lowercaseCharacterRule' || this.firstErrorKey === 'uppercaseCharacterRule') {
                    this.requiredLength = Object.values(changes.errorKeys.currentValue)[0]['required'];
                }
                else {
                    this.requiredLength = undefined;
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FormControlErrorMessagesComponent.prototype, "errorKeys", void 0);
    FormControlErrorMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-control-error-messages',
            template: __webpack_require__("./src/app/common/form-control-error-messages/form-control-error-messages.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FormControlErrorMessagesComponent);
    return FormControlErrorMessagesComponent;
}());



/***/ }),

/***/ "./src/app/common/form-control-error-messages/form-control-error-messages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormControlErrorMessagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_control_error_messages_component__ = __webpack_require__("./src/app/common/form-control-error-messages/form-control-error-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormControlErrorMessagesModule = /** @class */ (function () {
    function FormControlErrorMessagesModule() {
    }
    FormControlErrorMessagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__form_control_error_messages_component__["a" /* FormControlErrorMessagesComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatFormFieldModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__form_control_error_messages_component__["a" /* FormControlErrorMessagesComponent */]
            ]
        })
    ], FormControlErrorMessagesModule);
    return FormControlErrorMessagesModule;
}());



/***/ }),

/***/ "./src/app/common/place-search/place-search.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"mapVisible\">\r\n  <agm-map [gestureHandling]=\"'cooperative'\" (centerChange)=\"centerChange.emit($event)\" [latitude]=\"latitude\"\r\n           [longitude]=\"longitude\" [scrollwheel]=\"scrollWheel\" [zoom]=\"zoom\">\r\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n  </agm-map>\r\n</section>\r\n<div #map></div>\r\n"

/***/ }),

/***/ "./src/app/common/place-search/place-search.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/common/place-search/place-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import{} from 'googlemaps'
var PlaceSearchComponent = /** @class */ (function () {
    function PlaceSearchComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapVisible = true;
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PlaceSearchComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                _this.latitude = pos.coords.latitude;
                _this.longitude = pos.coords.longitude;
                _this.zoom = 12;
                _this.getLocationByCoordinates();
            }, function (err) {
                console.error(err);
            });
        }
    };
    PlaceSearchComponent.prototype.locationNameCallback = function (results) {
        if (results.length > 0) {
            this.searchElementRef.nativeElement.value = results[0].formatted_address;
        }
    };
    PlaceSearchComponent.prototype.locationCoordinatesCallback = function (results, status) {
        if (results.length > 0) {
            this.latitude = results[0].geometry.location.lat();
            this.longitude = results[0].geometry.location.lng();
            this.zoom = 12;
        }
        else {
            console.error('Kezdj el gépelni és válassz a legördülő listából!');
        }
    };
    PlaceSearchComponent.prototype.subscribeToGpsEmitter = function () {
        var _this = this;
        if (this.gpsEmitter) {
            this.gpsEmitter.subscribe(function () { return _this.getLocation(); });
        }
    };
    PlaceSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribeToGpsEmitter();
        // set google maps defaults
        this.zoom = 7;
        this.longitude = 19.040235;
        this.latitude = 47.497912;
        this.scrollWheel = true;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    if (place.geometry) {
                        _this.latitude = place.geometry.location.lat();
                        _this.longitude = place.geometry.location.lng();
                        _this.zoom = 12;
                    }
                    else {
                        // if location coordinates are not given
                        _this.getLocationByName(place.name);
                    }
                });
            });
        });
    };
    PlaceSearchComponent.prototype.getLocationByName = function (query) {
        var request = {
            query: query
        };
        var realMap = new google.maps.Map(this.mapElementRef.nativeElement);
        var service = new google.maps.places.PlacesService(realMap);
        service.textSearch(request, this.locationCoordinatesCallback.bind(this));
    };
    PlaceSearchComponent.prototype.getLocationByCoordinates = function () {
        var serviceGeo = new google.maps.Geocoder;
        serviceGeo.geocode({ location: { lat: this.latitude, lng: this.longitude } }, this.locationNameCallback.bind(this));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PlaceSearchComponent.prototype, "latitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PlaceSearchComponent.prototype, "longitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PlaceSearchComponent.prototype, "scrollWheel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PlaceSearchComponent.prototype, "zoom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], PlaceSearchComponent.prototype, "mapVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PlaceSearchComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
    ], PlaceSearchComponent.prototype, "searchControl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PlaceSearchComponent.prototype, "gpsEmitter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PlaceSearchComponent.prototype, "centerChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PlaceSearchComponent.prototype, "mapElementRef", void 0);
    PlaceSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-place-search',
            template: __webpack_require__("./src/app/common/place-search/place-search.component.html"),
            styles: [__webpack_require__("./src/app/common/place-search/place-search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], PlaceSearchComponent);
    return PlaceSearchComponent;
}());



/***/ }),

/***/ "./src/app/common/place-search/place-search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceSearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_search_component__ = __webpack_require__("./src/app/common/place-search/place-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlaceSearchModule = /** @class */ (function () {
    function PlaceSearchModule() {
    }
    PlaceSearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__place_search_component__["a" /* PlaceSearchComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDu04Rs5J4w318HpZKf-oPBzF_QVAjMjqQ',
                    libraries: ['places']
                }),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__place_search_component__["a" /* PlaceSearchComponent */]
            ]
        })
    ], PlaceSearchModule);
    return PlaceSearchModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_sidenav_list_sidenav_list_component__ = __webpack_require__("./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_header_header_component__ = __webpack_require__("./src/app/navigation/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_interceptor__ = __webpack_require__("./src/app/auth/auth.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navigation_sidenav_list_sidenav_list_component__["a" /* SidenavListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngxs_store__["b" /* NgxsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatMenuModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngxs_store__["b" /* NgxsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatMenuModule */],
                [__WEBPACK_IMPORTED_MODULE_5__navigation_sidenav_list_sidenav_list_component__["a" /* SidenavListComponent */], __WEBPACK_IMPORTED_MODULE_6__navigation_header_header_component__["a" /* HeaderComponent */]]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_13__auth_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fixed-header\">\r\n  <div fxHide.gt-xs>\r\n    <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div routerLink=\"/welcome\" class=\"pointer\"><img fxHide.xs style=\"width: 30px\" src=\"assets\\icon-128x128.png\"/>Valto</div>\r\n  <div\r\n    fxFlex\r\n    fxLayout\r\n    fxLayoutAlign=\"flex-end\">\r\n    <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items\">\r\n      <!--<li *ngIf=\"!(isAuthenticated$ | async)\"><a name=\"login\" routerLink=\"/login\">-->\r\n\r\n      <!--</a></li>-->\r\n      <li *ngIf=\"!(isAuthenticated$ | async)\" fxHide.xs\r\n        class=\"pointer\">\r\n        <a name=\"login\" routerLink=\"/login\">\r\n          Bejelentkezés\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"!(isAuthenticated$ | async)\" class=\"pointer\">\r\n        <button mat-raised-button style=\"background-color:#3fb5a3\" routerLink=\"/signup\">\r\n          Csatlakozz\r\n        </button>\r\n      </li>\r\n      <li *ngIf=\"(isAuthenticated$ | async)\" class=\"pointer\">\r\n        <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item>Profile</button>\r\n          <button mat-menu-item>Settings</button>\r\n          <button mat-menu-item (click)=\"logout()\">Log out</button>\r\n        </mat-menu>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/navigation/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: white; }\n\na:hover, a:active {\n  color: lightblue; }\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.fixed-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%  !important; }\n"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngxs_store__ = __webpack_require__("./node_modules/@ngxs/store/esm5/ngxs-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_state__ = __webpack_require__("./src/app/auth/auth.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store) {
        this.store = store;
        this.sidenavToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    HeaderComponent.prototype.logout = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__auth_auth_state__["b" /* DeleteUser */]());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngxs_store__["c" /* Select */])(__WEBPACK_IMPORTED_MODULE_3__auth_auth_state__["a" /* AuthState */].isAuthenticated),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], HeaderComponent.prototype, "isAuthenticated$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__("./src/app/navigation/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngxs_store__["f" /* Store */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item routerLink=\"/login\" (click)=\"onToggleSidenav()\">\r\n    <mat-icon>face</mat-icon>\r\n    <span class=\"nav-caption\">Bejelentkezés</span>\r\n  </a>\r\n  <a mat-list-item routerLink=\"/signup\" (click)=\"onToggleSidenav()\">\r\n    <mat-icon>eject</mat-icon>\r\n    <span class=\"nav-caption\">Regisztráció</span>\r\n  </a>\r\n  <a mat-list-item routerLink=\"/welcome\" (click)=\"onToggleSidenav();logout()\">\r\n    <mat-icon>eject</mat-icon>\r\n    <span class=\"nav-caption\">Kijelentkezés</span>\r\n  </a>\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.scss":
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: white; }\n\na:hover, a:active {\n  color: lightblue; }\n\n.nav-caption {\n  display: inline-block;\n  padding-left: 6px; }\n"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent() {
        this.sidenavToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SidenavListComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    SidenavListComponent.prototype.logout = function () {
        // TODO
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SidenavListComponent.prototype, "sidenavToggle", void 0);
    SidenavListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav-list',
            template: __webpack_require__("./src/app/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__("./src/app/navigation/sidenav-list/sidenav-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"error-page\">\r\n  <div>\r\n    <!--h1(data-h1='400') 400-->\r\n    <!--p(data-p='BAD REQUEST') BAD REQUEST-->\r\n    <!--h1(data-h1='401') 401-->\r\n    <!--p(data-p='UNAUTHORIZED') UNAUTHORIZED-->\r\n    <!--h1(data-h1='403') 403-->\r\n    <!--p(data-p='FORBIDDEN') FORBIDDEN-->\r\n    <h1 data-h1=\"404\">404</h1>\r\n    <p data-p=\"NOT FOUND\">Az oldal nem található</p>\r\n    <!--h1(data-h1='500') 500-->\r\n    <!--p(data-p='SERVER ERROR') SERVER ERROR-->\r\n  </div>\r\n</div>\r\n<div id=\"particles-js\"></div>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n  overflow: hidden; }\n\n.error-page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  height: 100%;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif; }\n\n.error-page h1 {\n  font-size: 30vh;\n  font-weight: bold;\n  position: relative;\n  margin: -8vh 0 0;\n  padding: 0; }\n\n.error-page h1:after {\n  content: attr(data-h1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  color: transparent;\n  /* webkit only for graceful degradation to IE */\n  background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: 400%;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);\n  -webkit-animation: animateTextBackground 10s ease-in-out infinite;\n          animation: animateTextBackground 10s ease-in-out infinite; }\n\n.error-page h1 + p {\n  color: #d6d6d6;\n  font-size: 8vh;\n  font-weight: bold;\n  line-height: 10vh;\n  max-width: 700px;\n  position: relative; }\n\n.error-page h1 + p:after {\n  content: attr(data-p);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  color: transparent;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);\n  -webkit-background-clip: text;\n  background-clip: text; }\n\n#particles-js {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n@-webkit-keyframes animateTextBackground {\n  0% {\n    background-position: 0 0; }\n  25% {\n    background-position: 100% 0; }\n  50% {\n    background-position: 100% 100%; }\n  75% {\n    background-position: 0 100%; }\n  100% {\n    background-position: 0 0; } }\n\n@keyframes animateTextBackground {\n  0% {\n    background-position: 0 0; }\n  25% {\n    background-position: 100% 0; }\n  50% {\n    background-position: 100% 100%; }\n  75% {\n    background-position: 0 100%; }\n  100% {\n    background-position: 0 0; } }\n\n@media (max-width: 767px) {\n  .error-page h1 {\n    font-size: 32vw; }\n  .error-page h1 + p {\n    font-size: 8vw;\n    line-height: 10vw;\n    max-width: 70vw; } }\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\" fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"20px\" fxLayoutAlign=\"center\">\r\n  <section>\r\n    <h1>Mit csinál az app?</h1>\r\n    <p>Egy gyűjtő tára azoknak a dolgoknak, amiket a felhasználók problémának gondolnak a hétköznapi életükben, a\r\n      környezetükben</p>\r\n  </section>\r\n  <section>\r\n    <h1>Miért jó az valakinek, ha használja?</h1>\r\n    <p>Mert bizonyos szervezetek meg fogják remélhetőleg őket oldani\r\n    <p>\r\n      Információt nyerhetsz arról, hogy milyen problémák vannak körülötted az emberek szerint, illetve hogy azok milyen\r\n      tempóban oldódnak meg\r\n    </p>\r\n\r\n  </section>\r\n  <section>\r\n    <h1> Hogyan lehet használni?</h1>\r\n    <p>Nézz szét magad körül amint kimész a lakásból, osztd meg mi zavar Téged, min lehetne javítani?</p>\r\n  </section>\r\n</div>\r\n<div class=\"welcome\" fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"20px\" fxLayoutAlign=\"center\">\r\n  <section>\r\n    <h1>Mire vársz még?</h1>\r\n    <p>\r\n      <button mat-raised-button style=\"background-color:#3fb5a3;color:white\" routerLink=\"/signup\">\r\n        Csatlakozz\r\n      </button>\r\n    </p>\r\n  </section>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/***/ (function(module, exports) {

module.exports = ".welcome {\n  text-align: center;\n  margin: 0 10px; }\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
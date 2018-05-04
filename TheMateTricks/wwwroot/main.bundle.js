webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member_member_list_member_list_component__ = __webpack_require__("./src/app/member/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_friends_list_friends_list_component__ = __webpack_require__("./src/app/friends/friends-list/friends-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_messages_list_messages_list_component__ = __webpack_require__("./src/app/messages/messages-list/messages-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__member_member_details_member_details_component__ = __webpack_require__("./src/app/member/member-details/member-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__member_edit_mem_edit_mem_component__ = __webpack_require__("./src/app/member/edit-mem/edit-mem.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_4__member_member_list_member_list_component__["a" /* MemberListComponent */] },
    { path: 'friends', component: __WEBPACK_IMPORTED_MODULE_5__friends_friends_list_friends_list_component__["a" /* FriendsListComponent */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_6__messages_messages_list_messages_list_component__["a" /* MessagesListComponent */] },
    { path: 'members/:id', component: __WEBPACK_IMPORTED_MODULE_7__member_member_details_member_details_component__["a" /* MemberDetailsComponent */] },
    { path: 'member/edit', component: __WEBPACK_IMPORTED_MODULE_8__member_edit_mem_edit_mem_component__["a" /* EditMemComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<body class=\"text-center\">\r\n  \r\n  <router-outlet></router-outlet>\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_collapse__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__member_member_list_member_list_component__ = __webpack_require__("./src/app/member/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__member_member_card_member_card_component__ = __webpack_require__("./src/app/member/member-card/member-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__friends_friends_list_friends_list_component__ = __webpack_require__("./src/app/friends/friends-list/friends-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__messages_messages_list_messages_list_component__ = __webpack_require__("./src/app/messages/messages-list/messages-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__member_member_details_member_details_component__ = __webpack_require__("./src/app/member/member-details/member-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_time_ago_pipe__ = __webpack_require__("./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_tabs__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_carousel__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__member_edit_mem_edit_mem_component__ = __webpack_require__("./src/app/member/edit-mem/edit-mem.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























//import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
//import { FileUploadModule } from 'ng2-file-upload'; 
function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__member_member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__member_member_card_member_card_component__["a" /* MemberCardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__friends_friends_list_friends_list_component__["a" /* FriendsListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__messages_messages_list_messages_list_component__["a" /* MessagesListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__member_member_details_member_details_component__["a" /* MemberDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_21_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_24__member_edit_mem_edit_mem_component__["a" /* EditMemComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:57629', 'localhost:57630', 'localhost:4200']
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_datepicker__["b" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], , __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/friends/friends-list/friends-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/friends/friends-list/friends-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  friends-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/friends/friends-list/friends-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsListComponent; });
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

var FriendsListComponent = /** @class */ (function () {
    function FriendsListComponent() {
    }
    FriendsListComponent.prototype.ngOnInit = function () {
    };
    FriendsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-friends-list',
            template: __webpack_require__("./src/app/friends/friends-list/friends-list.component.html"),
            styles: [__webpack_require__("./src/app/friends/friends-list/friends-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendsListComponent);
    return FriendsListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center m-5\">\r\n  <h1>Welcome to the The Mate Tricks!</h1>\r\n  <div *ngIf=\"loggedIn\">\r\n    <div>\r\n      <img *ngIf=\"member.photoUrl != null\" class=\"card-img-top\" src=\"{{member.photoUrl}}\" style=\"height:140px;width:140px;\" />\r\n      <img *ngIf=\"member.photoUrl ==null\" class=\"card-img-top\" src=\"../../../assets/default.jpg\" style=\"height:140px;width:140px;\" />\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!loggedIn\">\r\n    <button routerLink=\"/register\" class=\"btn btn-lg btn-success m-3\">Register</button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(AuthService, UserService, Router) {
        this.AuthService = AuthService;
        this.UserService = UserService;
        this.Router = Router;
        this.member = {};
        this.id = -1;
        this.loggedIn = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.AuthService.isExpired()) {
            this.loggedIn = true;
            this.getUser(this.id);
        }
        else {
            this.loggedIn = false;
            setTimeout(function () {
                _this.Router.navigate(['/home']);
            }, 5000);
        }
    };
    HomeComponent.prototype.getUser = function (id) {
        var _this = this;
        this.UserService.RetrieveUser(id).subscribe(function (data) { return _this.member = data; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/member/edit-mem/edit-mem.component.css":
/***/ (function(module, exports) {

module.exports = " #rbutton{\r\n   border-radius: 0px,10px,40px,10px;\r\n }\r\n"

/***/ }),

/***/ "./src/app/member/edit-mem/edit-mem.component.html":
/***/ (function(module, exports) {

module.exports = "<form UpdateForm=\"ngForm\" ngSubmit=\"updateUser()\">\r\n  <div class=\"row\">\r\n    <div class=\"card col-s-7\">\r\n      <img *ngIf=\"member.photoUrl != null\" class=\"card-img-top \" src=\"{{member.photoUrl}}\" style=\"height:240px;width:240px;\" />\r\n      <img *ngIf=\"member.photoUrl ==null\" class=\"card-img-top\" src=\"../../../assets/default.jpg\" style=\"height:240px;width:240px;\" />\r\n      <dl class=\"mt-1 ml-4 text-left\">\r\n        <dt>Location</dt>\r\n        <dd>{{member.city}}</dd>\r\n        <dt>Age</dt>\r\n        <dd>{{member.age}}</dd>\r\n        <dt>Last Active</dt>\r\n        <dd>{{member.lastActive | timeAgo}}</dd>\r\n        <dt>Member Since</dt>\r\n        <dd>{{member.created | date}}</dd>\r\n        \r\n      </dl>\r\n      <button class=\"btn btn-primary rbutton\" type=\"submit\">Save Changes</button>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <tabset [justified]=\"true\">\r\n        <tab heading=\"Edit Profile\" id=\"tab1\" class=\"text-left\">\r\n          <h4><strong>Description</strong></h4>\r\n          <textarea name=\"Introduction\" style=\"height:150px;width:1000px;\"[(ngModel)]=\"member.introduction\">{{member.introduction}}</textarea>\r\n          <h4><strong>Looking For</strong></h4>\r\n          <textarea name=\"Lookingfor\"style=\"height:150px;width:1000px;\" [(ngModel)]=\"member.lookingfor\">{{member.lookingFor}}</textarea>\r\n          <h4><strong>Your Interests</strong></h4>\r\n          <textarea name=\"Interests\" style=\"height:150px;width:1000px;\" [(ngModel)]=\"member.interests\" >{{member.interests}}</textarea>\r\n          <h4><strong>City</strong></h4>\r\n          <input type=\"text\" name=\"City\" placeholder=\"{{member.city}}\" [(ngModel)]=\"member.city\">\r\n        </tab>\r\n        <tab heading=\"Edit Photos\" class=\"text-left\" id=\"tab3\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"mt-3\" *ngFor=\"let photo of member.photos\">\r\n              <img class=\"w3-round col-auto\" src=\"{{photo.url}}\">\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/member/edit-mem/edit-mem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditMemComponent = /** @class */ (function () {
    function EditMemComponent(AuthService, UserService, Router) {
        this.AuthService = AuthService;
        this.UserService = UserService;
        this.Router = Router;
        this.member = {};
        this.updates = {};
        this.id = JSON.parse(localStorage.getItem("user")).id;
        this.loggedIn = false;
    }
    //test = localStorage.getItem('token');
    EditMemComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.AuthService.isExpired()) {
            this.loggedIn = true;
            this.getUser(this.id);
        }
        else {
            this.loggedIn = false;
            setTimeout(function () {
                _this.Router.navigate(['/home']);
            }, 5000);
        }
    };
    EditMemComponent.prototype.updateUser = function () {
        this.updates = { introduction: this.member.introduction, lookingFor: this.member.lookingFor, interests: this.member.interests, city: this.member.city };
        this.UserService.UpdateUser(this.id, this.updates).subscribe();
    };
    EditMemComponent.prototype.getUser = function (id) {
        var _this = this;
        this.UserService.RetrieveUser(id).subscribe(function (data) { return _this.member = data; });
    };
    EditMemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-mem',
            template: __webpack_require__("./src/app/member/edit-mem/edit-mem.component.html"),
            styles: [__webpack_require__("./src/app/member/edit-mem/edit-mem.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], EditMemComponent);
    return EditMemComponent;
}());



/***/ }),

/***/ "./src/app/member/member-card/member-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-card/member-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" width=\"250\" routerLink=\"/members/{{member.id}}\">\r\n  <img *ngIf= \"member.photoUrl != null\" class=\"card-img-top\" src=\"{{member.photoUrl}}\" style=\"height:140px;width:140px;\" />\r\n  <img *ngIf=\"member.photoUrl ==null\" class=\"card-img-top\" src=\"../../../assets/default.jpg\" style=\"height:140px;width:140px;\"/>\r\n  <div class=\"card-body\">\r\n    <div class=\"card-title\"><strong>{{member.name}}, {{member.age}}</strong></div>\r\n    <p class=\"card-text\">{{member.city}}</p>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/member/member-card/member-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberCardComponent; });
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

var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent() {
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "member", void 0);
    MemberCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-member-card',
            template: __webpack_require__("./src/app/member/member-card/member-card.component.html"),
            styles: [__webpack_require__("./src/app/member/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/member/member-details/member-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-details/member-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <h1>{{member.name}}'s profile</h1>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"card col-s-6\">\r\n      <img *ngIf=\"member.photoUrl != null\" class=\"profile-picture\" src=\"{{member.photoUrl}}\" style=\"height:240px;width:240px;\"/>\r\n      <img *ngIf=\"member.photoUrl ==null\" class=\"card-img-top\" src=\"../../../assets/default.jpg\" style=\"height:240px;width:240px;\"/>\r\n      <dl class=\"mt-4 ml-3 text-left\">\r\n        <dt>Location</dt>\r\n        <dd>{{member.city}}</dd>\r\n        <dt>Age</dt>\r\n        <dd>{{member.age}}</dd>\r\n        <dt>Last Active</dt>\r\n        <dd>{{member.lastActive | timeAgo}}</dd>\r\n        <dt>Member Since</dt>\r\n        <dd>{{member.created | date}}</dd>\r\n      </dl>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <tabset [justified]=\"true\">\r\n        <tab heading=\"About {{member.name}}\" id=\"tab1\" class=\"text-left\">\r\n          <h2><strong>Description</strong></h2>\r\n          <p>{{member.introduction}}</p>\r\n          <h3><strong>Looking For</strong></h3>\r\n          <p>{{member.lookingFor}}</p>\r\n        </tab>\r\n        <tab heading=\"Interests\" class=\"text-left\" id=\"tab2\">\r\n          <h2><strong>{{member.name}}'s Interests</strong></h2>\r\n          <p>{{member.interests}}</p>\r\n        </tab>\r\n        <tab heading=\"Photos\" class=\"text-left\" id=\"tab3\">\r\n          <div class=\"row\">\r\n            <div class=\"mt-3\" *ngFor=\"let photo of member.photos\">\r\n              <img class=\"w3-round col-auto\" src=\"{{photo.url}}\">\r\n            </div>\r\n          </div>\r\n\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/member/member-details/member-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberDetailsComponent = /** @class */ (function () {
    function MemberDetailsComponent(UserService, activatedRoute, auth, router) {
        this.UserService = UserService;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.router = router;
        this.member = {};
        this.id = -1;
        this.loggedIn = false;
    }
    MemberDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.auth.isExpired()) {
            this.loggedIn = true;
            this.id = this.activatedRoute.snapshot.params.id;
            this.getUser(this.id);
        }
        else {
            this.loggedIn = false;
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 5000);
        }
    };
    MemberDetailsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.UserService.RetrieveUser(id).subscribe(function (data) { return _this.member = data; });
    };
    MemberDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-member-details',
            template: __webpack_require__("./src/app/member/member-details/member-details.component.html"),
            styles: [__webpack_require__("./src/app/member/member-details/member-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], MemberDetailsComponent);
    return MemberDetailsComponent;
}());



/***/ }),

/***/ "./src/app/member/member-list/member-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loggedIn\" class=\"container\">\r\n  <h1 class=\"text.left\"><strong>Members!</strong></h1>\r\n\r\n  <div *ngIf=\"users\"class=\"row md-3\">\r\n    <div *ngFor=\"let user of users\" class=\"col-auto\">\r\n      <app-member-card [member]=\"user\"></app-member-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!loggedIn\">\r\n  <h3 class=\"mt-3\">Please login to view members.</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/member/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(UserService, auth, router) {
        this.UserService = UserService;
        this.auth = auth;
        this.router = router;
        this.users = [];
        this.curUser = {};
        this.loggedIn = false;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.auth.isExpired()) {
            this.loggedIn = true;
            this.curUser = JSON.parse(localStorage.getItem('user'));
            this.getUsers();
        }
        else {
            this.loggedIn = false;
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 5000);
        }
    };
    MemberListComponent.prototype.getUsers = function () {
        var _this = this;
        this.UserService.RetrieveUsers().subscribe(function (p) { return _this.users = p; }, function (err) { return console.log(err); }, function () { return console.log(_this.users); });
        console.log(this.users);
    };
    MemberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-member-list',
            template: __webpack_require__("./src/app/member/member-list/member-list.component.html"),
            styles: [__webpack_require__("./src/app/member/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages-list/messages-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages-list/messages-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  messages-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/messages/messages-list/messages-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesListComponent; });
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

var MessagesListComponent = /** @class */ (function () {
    function MessagesListComponent() {
    }
    MessagesListComponent.prototype.ngOnInit = function () {
    };
    MessagesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages-list',
            template: __webpack_require__("./src/app/messages/messages-list/messages-list.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages-list/messages-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesListComponent);
    return MessagesListComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">The Web</a>\r\n  <button (click)=\"isCollapsed = !isCollapsed\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\" [collapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Matches <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/friends\" href=\"#\">Friend Lists</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/members\" href=\"#\">Members</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/messages\">Messages</a>\r\n      </li>\r\n    </ul>\r\n    <div *ngIf=\"!alertPlaying; else alertPlayer\">\r\n      <form *ngIf=\"checkLogin()\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\" class=\"form-inline my-2 my-lg-0\">\r\n        <input required class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"UserName\" aria-label=\"UserName\" name=\"username\" [(ngModel)]=\"model.userName\">\r\n        <input required class=\"form-control mr-sm-2\" type=\"password\" placeholder=\"Password\" aria-label=\"Password\" name=\"password\" [(ngModel)]=\"model.password\">\r\n        <button [disabled]=\"!loginForm.valid\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Sign In</button>\r\n      </form>\r\n      <div *ngIf=\"!checkLogin()\" class=\"btn-group mr-3\" dropdown>\r\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n          Welcome {{user}}\r\n        </button>\r\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" routerLink=\"/member/edit\"><i class=\"fa fa-user mr-1\"></i>Edit Profile</a></li>\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" routerLink=\"/home\" (click)=\"logOut()\"><i class=\"fa fa-sign-out mr-1\"></i>Log Out</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #alertPlayer>\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"closeAlert()\">{{ alert.msg }}</alert>\r\n  </ng-template>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.model = {};
        this.isCollapsed = false;
        this.loggedIn = false;
        //user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')).userName: '';
        this.alertPlaying = false;
        this.alert = {};
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        console.log(this.model);
        this.authService.login(this.model).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    NavComponent.prototype.playAlert = function (errorStatus) {
        this.alertPlaying = true;
        if (errorStatus == 401) {
            this.alert = {
                type: 'danger',
                msg: 'Invalid userName and/or password',
                timeout: 2000
            };
        }
        else if (errorStatus == 0) {
            this.alert = {
                type: 'success',
                msg: 'Successfully Logged In',
                timeout: 2000
            };
        }
        else if (errorStatus == -1) {
            this.alert = {
                type: 'info',
                msg: 'Logged out',
                timeout: 2000
            };
        }
    };
    NavComponent.prototype.closeAlert = function () {
        this.alertPlaying = false;
    };
    NavComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.playAlert(-1);
    };
    NavComponent.prototype.checkLogin = function () {
        return this.authService.isExpired();
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "input {\r\n  max-width: 330px;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" (ngSubmit)=\"register()\" class=\"form-signin mt-5\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\">Sign Up</h1>\r\n  <label for=\"username\" class=\"sr-only\">UserName</label>\r\n  <input type=\"text\" id=\"username\" class=\"form-control mt-3\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"model.username\" required>\r\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control mt-3\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" required>\r\n  <label for=\"inputPasswordCon\" class=\"sr-only\">Confirm Password</label>\r\n  <input type=\"password\" id=\"inputPasswordCon\" class=\"form-control mt-3 mb-3\" placeholder=\"Confirm Password\" name=\"passwordCon\" [(ngModel)]=\"passwordCon.password\">\r\n  <alert *ngIf=\"!checkPassword()\" [type]=\"passwordConAlert.type\" [dismissOnTimeout]=\"passwordConAlert.timeout\">{{ passwordConAlert.msg }}</alert>\r\n  <alert *ngFor=\"let error of errors\" [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">{{ error }}</alert>\r\n  <fieldset class=\"form-group\">\r\n    <h5 class=\"form-check-inline\">Gender:</h5>\r\n    <div class=\"form-check form-check-inline\">\r\n      <input type=\"radio\" class=\"form-check-input\" name=\"gender\" id=\"optionsRadios1\" [(ngModel)]=\"model.gender\" value=\"male\" required>\r\n      <label class=\"form-check-label form-check-inline\">\r\n        Male\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check form-check-inline\">\r\n      <input type=\"radio\" class=\"form-check-input\" name=\"gender\" id=\"optionsRadios2\" [(ngModel)]=\"model.gender\" value=\"female\">\r\n      <label class=\"form-check-label \">\r\n        Female\r\n      </label>\r\n    </div>\r\n  </fieldset>\r\n  <label for=\"name\" class=\"sr-only\">Name</label>\r\n  <input type=\"text\" id=\"name\" class=\"form-control mt-3\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"model.name\" required>\r\n  <div class=\"content\">\r\n\r\n    <input type=\"text\"\r\n           class=\"form-control mt-3\"\r\n           placeholder=\"BirthDate\"\r\n           name=\"BirthDate\"\r\n           #dp=\"bsDatepicker\"\r\n           showWeekNumbers=\"false\"\r\n           bsDatepicker [(ngModel)]=\"model.birthdate\">\r\n\r\n\r\n  </div>\r\n  <label for=\"city\" class=\"sr-only\">City</label>\r\n  <input type=\"text\" id=\"city\" class=\"form-control mt-3\" placeholder=\"City\" name=\"city\" [(ngModel)]=\"model.city\" required>\r\n\r\n  <div class=\"text-center mt-3 mb-3\">\r\n    <button class=\"btn btn btn-primary\" type=\"submit\">Register</button>\r\n    <button routerLink=\"/home\" class=\"btn btn-default\">Cancel</button>\r\n  </div>\r\n  <alert *ngIf=\"success\" type=\"success\">Thanks for signing up!</alert>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.model = { username: '', password: '', gender: 'male', name: '', birthdate: '', city: '' };
        this.passwordCon = { password: '' };
        this.errors = [];
        this.success = false;
        this.passwordConAlert = {
            type: 'danger',
            msg: 'Passwords do not match!',
            timeout: 10000
        };
        this.alert = {
            type: 'danger',
            timeout: 2000
        };
        this.err = null;
        this.data = null;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.checkPassword = function () {
        return this.model.password == this.passwordCon.password;
    };
    //getErrors(error) {
    //  if (error.Password != null) {
    //    this.errors.push(error.Password["0"]);
    //  }
    //  if (error.UserName != null) {
    //    this.errors.push(error.UserName["0"]);
    //  }
    //}
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.checkPassword()) {
            this.authService.Register(this.model).subscribe(function (data) { return _this.success = true; }, function (error) { return console.log(error); });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    AuthService.prototype.login = function (user) {
        return this.http.post(/*.baseUrl +*/ 'http://localhost:57629/api/auth/login', user)
            .map(function (result) {
            if (result) {
                localStorage.setItem('token', result.tokenString);
                localStorage.setItem("user", JSON.stringify(result));
                console.log(localStorage.getItem("token"));
                console.log(localStorage.getItem("user"));
            }
            return result;
        });
    };
    AuthService.prototype.Register = function (model) {
        var contentHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        return this.http.post(/*.baseUrl +*/ 'http://localhost:57629/api/auth/register', model, { headers: contentHeader });
    };
    AuthService.prototype.isExpired = function () {
        return this.jwtHelperService.isTokenExpired();
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("Logout Successful");
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    UserService.prototype.RetrieveUsers = function () {
        return this.http.get(/*this.baseUrl +*/ 'http://localhost:57629/api/users');
    };
    UserService.prototype.RetrieveUser = function (id) {
        return this.http.get(/*this.baseUrl +*/ 'http://localhost:57629/api/users/' + id);
    };
    UserService.prototype.UpdateUser = function (id, updateUser) {
        return this.http.put('http://localhost:57629/api/users/updateUser/' + id, updateUser);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
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
    production: false,
    apiUrl: 'http://localhost:57629/api'
    //apiUrl: '/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
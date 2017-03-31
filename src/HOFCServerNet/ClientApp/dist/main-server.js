(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(97);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var throw_1 = __webpack_require__(40);
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(126);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(127);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(33);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(78);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(80);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(8);
var Observable_1 = __webpack_require__(2);
__webpack_require__(9);
__webpack_require__(7);
__webpack_require__(6);
__webpack_require__(4);
var ActuService = (function () {
    function ActuService(_http) {
        this._http = _http;
        this._siteUrl = 'api/actus';
    }
    ActuService.prototype.getActus = function () {
        return this._http.get(this._siteUrl)
            .map(this.extractData)
            .catch(this.logError);
    };
    ActuService.prototype.extractData = function (response) {
        var data = response.json();
        data.forEach(function (d) {
            d.date = new Date(d.date);
        });
        return data;
    };
    ActuService.prototype.logError = function (error, caught) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return ActuService;
}());
ActuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ActuService);
exports.ActuService = ActuService;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(8);
var Observable_1 = __webpack_require__(2);
__webpack_require__(9);
__webpack_require__(7);
__webpack_require__(6);
__webpack_require__(4);
var MatchService = (function () {
    function MatchService(_http) {
        this._http = _http;
        this._siteUrl = 'api/matchs';
    }
    MatchService.prototype.getMatchs = function () {
        return this._http.get(this._siteUrl)
            .map(this.extractData)
            .catch(this.logError);
    };
    MatchService.prototype.extractData = function (response) {
        var data = response.json();
        data.forEach(function (d) {
            d.date = new Date(d.date);
        });
        return data;
    };
    MatchService.prototype.logError = function (error, caught) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return MatchService;
}());
MatchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MatchService);
exports.MatchService = MatchService;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(8);
var Observable_1 = __webpack_require__(2);
__webpack_require__(9);
__webpack_require__(7);
__webpack_require__(6);
__webpack_require__(4);
var RankService = (function () {
    function RankService(_http) {
        this._http = _http;
        this._siteUrl = 'api/classements';
    }
    RankService.prototype.getClassements = function () {
        return this._http.get(this._siteUrl)
            .map(this.extractData)
            .catch(this.logError);
    };
    RankService.prototype.extractData = function (response) {
        var data = response.json();
        return data;
    };
    RankService.prototype.logError = function (error, caught) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return RankService;
}());
RankService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RankService);
exports.RankService = RankService;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(9);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
var semver = __webpack_require__(41);
var __core__ = __webpack_require__(1);
var coreVersion = __core__ && __core__.VERSION && __core__.VERSION.full;

// Only patch if you're on Angular >= 2.1.1 and < the next major version (including prerelease)
if (coreVersion && semver.satisfies(coreVersion, '^2.1.1')) {
    var __compiler__ = __webpack_require__(16);
    var __core_private__ = __core__.__core_private__;

    var patch = false;
    if (!__core_private__['ViewUtils']) {
        patch = true;
        __core_private__['ViewUtils'] = __core_private__['view_utils'];
    }

    if (!__compiler__.__compiler_private__) {
        patch = true;
        __compiler__.__compiler_private__ = {
            SelectorMatcher: __compiler__.SelectorMatcher,
            CssSelector: __compiler__.CssSelector
        }
    }

    var __universal__ = __webpack_require__(22);
    if (patch) {
        __universal__.ViewUtils = __core_private__['view_utils'];
        __universal__.CssSelector = __compiler__.CssSelector
        __universal__.SelectorMatcher = __compiler__.SelectorMatcher
    }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(10);
var material_1 = __webpack_require__(48);
var angular2_universal_1 = __webpack_require__(11);
var app_component_1 = __webpack_require__(23);
var home_component_1 = __webpack_require__(26);
var calendar_component_1 = __webpack_require__(24);
var card_component_1 = __webpack_require__(25);
var rank_component_1 = __webpack_require__(27);
var team_1 = __webpack_require__(28);
var flex_layout_1 = __webpack_require__(47);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            card_component_1.CardComponent,
            calendar_component_1.CalendarComponent,
            rank_component_1.RankComponent,
            team_1.TeamPipe
        ],
        imports: [
            material_1.MaterialModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'calendar/:team', component: calendar_component_1.CalendarComponent, },
                { path: 'rank/:team', component: rank_component_1.RankComponent, },
                { path: '**', redirectTo: 'home' }
            ]),
            flex_layout_1.FlexLayoutModule,
            angular2_universal_1.UniversalModule // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(45);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(79);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(81);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_1 = __webpack_require__(15);
var core_1 = __webpack_require__(1);
var compiler_1 = __webpack_require__(16);
var BROWSER_SANITIZATION_PROVIDERS = platform_browser_1.__platform_browser_private__.BROWSER_SANITIZATION_PROVIDERS, SharedStylesHost = platform_browser_1.__platform_browser_private__.SharedStylesHost, DomSharedStylesHost = platform_browser_1.__platform_browser_private__.DomSharedStylesHost, DomRootRenderer = platform_browser_1.__platform_browser_private__.DomRootRenderer, DomEventsPlugin = platform_browser_1.__platform_browser_private__.DomEventsPlugin, KeyEventsPlugin = platform_browser_1.__platform_browser_private__.KeyEventsPlugin, DomAdapter = platform_browser_1.__platform_browser_private__.DomAdapter, setRootDomAdapter = platform_browser_1.__platform_browser_private__.setRootDomAdapter, getDOM = platform_browser_1.__platform_browser_private__.getDOM, HammerGesturesPlugin = platform_browser_1.__platform_browser_private__.HammerGesturesPlugin;
exports.BROWSER_SANITIZATION_PROVIDERS = BROWSER_SANITIZATION_PROVIDERS;
exports.SharedStylesHost = SharedStylesHost;
exports.DomSharedStylesHost = DomSharedStylesHost;
exports.DomRootRenderer = DomRootRenderer;
exports.DomEventsPlugin = DomEventsPlugin;
exports.KeyEventsPlugin = KeyEventsPlugin;
exports.DomAdapter = DomAdapter;
exports.setRootDomAdapter = setRootDomAdapter;
exports.HammerGesturesPlugin = HammerGesturesPlugin;
var ViewUtils = core_1.__core_private__.ViewUtils, AnimationKeyframe = core_1.__core_private__.AnimationKeyframe, AnimationPlayer = core_1.__core_private__.AnimationPlayer, AnimationStyles = core_1.__core_private__.AnimationStyles, RenderDebugInfo = core_1.__core_private__.RenderDebugInfo;
exports.ViewUtils = ViewUtils;
exports.AnimationKeyframe = AnimationKeyframe;
exports.AnimationPlayer = AnimationPlayer;
exports.AnimationStyles = AnimationStyles;
exports.RenderDebugInfo = RenderDebugInfo;
var SelectorMatcher = compiler_1.__compiler_private__.SelectorMatcher, CssSelector = compiler_1.__compiler_private__.CssSelector;
exports.SelectorMatcher = SelectorMatcher;
exports.CssSelector = CssSelector;
var __empty = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = __empty;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var actus_service_1 = __webpack_require__(12);
var matchs_service_1 = __webpack_require__(13);
var ranks_service_1 = __webpack_require__(14);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: __webpack_require__(34),
        styles: [__webpack_require__(42)],
        providers: [actus_service_1.ActuService, matchs_service_1.MatchService, ranks_service_1.RankService]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(10);
var matchs_service_1 = __webpack_require__(13);
var CalendarComponent = (function () {
    function CalendarComponent(_matchService, _route) {
        this._matchService = _matchService;
        this._route = _route;
        this.isLoading = true;
        this.navLinks = [{
                link: '/calendar/equipe1',
                label: 'Equipe1'
            }, {
                link: '/calendar/equipe2',
                label: 'Equipe2'
            }, {
                link: '/calendar/equipe3',
                label: 'Equipe3'
            }];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.updateView(params); });
    };
    CalendarComponent.prototype.updateView = function (params) {
        var _this = this;
        this.matchs = [];
        this.isLoading = true;
        this.team = this._route.snapshot.params['team'];
        this._matchService.getMatchs().subscribe(function (a) {
            _this.matchs = a;
            _this.isLoading = false;
        });
    };
    CalendarComponent.prototype.isHOFC = function (team) {
        return !(team != null && team.indexOf("HORGUES ODOS") != -1);
    };
    CalendarComponent.prototype.OpenMatchDetails = function () {
        console.log('Coucou');
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    core_1.Component({
        selector: 'calendar',
        template: __webpack_require__(35),
        styles: [__webpack_require__(43)]
    }),
    __metadata("design:paramtypes", [matchs_service_1.MatchService, router_1.ActivatedRoute])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(15);
var CardComponent = (function () {
    function CardComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    CardComponent.prototype.getBackgroundImage = function (imageUrl) {
        return this.domSanitizer.bypassSecurityTrustStyle('url(' + imageUrl + ')');
    };
    return CardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "texte", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "imageUrl", void 0);
CardComponent = __decorate([
    core_1.Component({
        selector: 'card',
        template: __webpack_require__(36),
        styles: [__webpack_require__(44)]
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], CardComponent);
exports.CardComponent = CardComponent;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var actus_service_1 = __webpack_require__(12);
var HomeComponent = (function () {
    function HomeComponent(_actuService) {
        this._actuService = _actuService;
        this.regularDistribution = 90 / 3;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._actuService.getActus().subscribe(function (a) { return _this.actus = a; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__(37),
        styles: [__webpack_require__(45)]
    }),
    __metadata("design:paramtypes", [actus_service_1.ActuService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(10);
var ranks_service_1 = __webpack_require__(14);
var RankComponent = (function () {
    function RankComponent(_rankService, _route) {
        this._rankService = _rankService;
        this._route = _route;
        this.isLoading = true;
        this.navLinks = [{
                link: '/rank/equipe1',
                label: 'Equipe1'
            }, {
                link: '/rank/equipe2',
                label: 'Equipe2'
            }, {
                link: '/rank/equipe3',
                label: 'Equipe3'
            }];
    }
    RankComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.updateView(params); });
    };
    RankComponent.prototype.updateView = function (params) {
        var _this = this;
        this._ranks = [];
        this.isLoading = true;
        this.team = this._route.snapshot.params['team'];
        this._rankService.getClassements()
            .subscribe(function (c) {
            _this._ranks = c;
            _this.isLoading = false;
        });
    };
    RankComponent.prototype.isHOFC = function (team) {
        return !(team != null && team.indexOf("HORGUES ODOS") != -1);
    };
    return RankComponent;
}());
RankComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(38),
        styles: [__webpack_require__(46)],
        selector: 'rank'
    }),
    __metadata("design:paramtypes", [ranks_service_1.RankService, router_1.ActivatedRoute])
], RankComponent);
exports.RankComponent = RankComponent;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var TeamPipe = (function () {
    function TeamPipe() {
    }
    TeamPipe.prototype.transform = function (comp, equipe) {
        return comp != null ? comp.filter(function (c) { return c.competition.categorie == equipe || c.competition.categorie == equipe; }) : null;
    };
    return TeamPipe;
}());
TeamPipe = __decorate([
    core_1.Pipe({
        name: 'team',
        pure: false
    }),
    core_1.Injectable()
], TeamPipe);
exports.TeamPipe = TeamPipe;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "md-sidenav a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nmd-toolbar md-icon {\r\n    margin-right:1em;\r\n}\r\n\r\nmd-sidenav md-list-item {\r\n    width: 200px;\r\n}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none;\r\n}\r\n\r\n.list-item {\r\n    text-align: center;\r\n    border-bottom: solid 1px grey;\r\n    padding-bottom: 15px;\r\n    padding-top: 15px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.list-item .dateDiv, .list-item .nameDiv {\r\n    margin-bottom:10px;\r\n    font-size:0.8em;\r\n}\r\n\r\n.dateDiv {\r\n    color: gray;\r\n}\r\n\r\n.teamName {\r\n    color: gray;\r\n    font-size:0.7em;\r\n}\r\n\r\n.scoreDiv {\r\n    color: black;\r\n    font-weight:bold;\r\n}\r\n\r\nmd-progress-circle {\r\n    margin:auto;\r\n}\r\n\r\n.imgDiv img {\r\n    height: 60px;\r\n}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".mat-card {\r\n    margin:15px;\r\n}", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "md-card {\r\n    margin: 15px;\r\n}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none !important;\r\n}\r\n\r\n.row {\r\n    text-align:center;\r\n    padding-top: 1em;\r\n    padding-bottom: 1em;\r\n    height: 3em;\r\n}\r\n\r\n.row .nomDiv {\r\n    text-align: initial;\r\n    font-weight: bold;\r\n}\r\n\r\n.row img {\r\n    height: 3em;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n    <md-icon (click)=\"sidenav.open()\">menu</md-icon>\r\n    <span>WebHOFC</span>\r\n</md-toolbar>\r\n<md-sidenav-container>\r\n    <md-sidenav #sidenav>\r\n        <md-list>\r\n            <h3 md-subheader>Calendrier</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n        <md-list>\r\n            <h3 md-subheader>Classement</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-sidenav>\r\n\r\n    <main class=\"mdl-layout__content\">\r\n        <router-outlet class=\"mdl-grid\"></router-outlet>\r\n    </main>\r\n</md-sidenav-container>\r\n\r\n<!--div mdl class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>\r\n    <header class=\"mdl-layout__header\">\r\n        <div class=\"mdl-layout__header-row\">\r\n            <span class=\"mdl-layout-title\">WebHOFC</span>\r\n        </div>\r\n    </header>\r\n    <div class=\"mdl-layout__drawer\">\r\n        <span class=\"mdl-layout-title\">\r\n            <span>WebHOFC</span>\r\n        </span>\r\n        <nav class=\"mdl-navigation\">\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/home']\">Actu</a>\r\n            <div class=\"android-drawer-separator\"></div>\r\n            <span class=\"mdl-navigation__link\" href=\"\">Calendrier</span>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe1']\">Equipe 1</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe2']\">Equipe 2</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe3']\">Equipe 3</a>\r\n            <span class=\"mdl-navigation__link\" href=\"\">Classement</span>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe1']\">Equipe 1</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe2']\">Equipe 2</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe3']\">Equipe 3</a>\r\n        </nav>\r\n    </div>\r\n</div-->\r\n";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n<div class=\"list-item\" *ngFor=\"let match of (matchs | team : team)\">\r\n    <div class=\"nameDiv\">\r\n        {{match.competition.nom}}\r\n    </div>\r\n    <div class=\"dateDiv\">\r\n        {{match.date | date: 'dd/MM/y HH:mm'}}\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe1)}\" src=\"" + __webpack_require__(5) + "\" />\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe1}}\r\n        </div>\r\n        <div class=\"scoreDiv\" fxFlex>\r\n            {{ (match.score1 != null && match.score2 != null) ? match.score1 + ' - ' + match.score2 : '' }}\r\n            {{ match.message != null ? match.message : ''}}\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe2}}\r\n        </div>\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe2)}\" src=\"" + __webpack_require__(5) + "\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-shadow--2dp\">\r\n    <div class=\"mdl-card__title\"\r\n         [style.backgroundImage]=\"getBackgroundImage(imageUrl)\">\r\n        <h2 class=\"mdl-card__title-text\">{{title}}</h2>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n        {{texte}}\r\n    </div>\r\n    <div class=\"mdl-card__actions mdl-card--border\">\r\n        <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n            Détails\r\n        </a>\r\n    </div>\r\n</div>";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n    <md-card fxFlex.gt-xs=\"40%\" [fxFlex.gt-md]=\"regularDistribution\"  *ngFor=\"let actu of actus; let i = index\">\r\n        <md-card-title>{{actu.titre}}</md-card-title>\r\n        <img md-card-image [src]=\"actu.image\"/>\r\n        <md-card-content>\r\n            <p>{{actu.texte}}</p>\r\n        </md-card-content>\r\n    </md-card>\r\n</div>";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n\r\n<div class=\"row\"\r\n     fxLayout=\"row\"\r\n     fxLayoutWrap=\"wrap\"\r\n     fxLayoutAlign=\"space-around center\"\r\n     [ngClass]=\"{'hidden': isLoading}\">\r\n    <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        #\r\n    </div>\r\n    <div class=\"nomDiv\" fxFlex>\r\n        Nom\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        P\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        J\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        V\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        N\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        D\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        BP\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        BC\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        Diff\r\n    </div>\r\n</div>\r\n<div class=\"row\" \r\n     fxLayout=\"row\" \r\n     fxLayoutWrap=\"wrap\" \r\n     fxLayoutAlign=\"space-around center\" \r\n     *ngFor=\"let rank of (_ranks | team : team); let i = index\"\r\n     [ngClass]=\"{'hidden': isLoading}\">\r\n    <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n        <img [ngClass]=\"{'hidden': isHOFC(rank.nom)}\" src=\"" + __webpack_require__(5) + "\" />\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{i + 1}}\r\n    </div>\r\n    <div class=\"nomDiv\" fxFlex>\r\n        {{rank.nom}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{rank.points}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{rank.joue}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{rank.victoire}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{rank.nul}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{rank.defaite}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{rank.bp}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{rank.bc}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{rank.diff}}\r\n    </div>\r\n</div>";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(2);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = (function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(Observable_1.Observable));
exports.ErrorObservable = ErrorObservable;
//# sourceMappingURL=ErrorObservable.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ErrorObservable_1 = __webpack_require__(39);
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num;
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    return range;

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          M = +M + 1;
        else
          m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return compare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(29);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(30);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(31);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(32);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(33);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(74);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(75);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(20);
__webpack_require__(17);
__webpack_require__(19);
var aspnet_prerendering_1 = __webpack_require__(21);
var core_1 = __webpack_require__(1);
var angular2_universal_1 = __webpack_require__(11);
var app_module_1 = __webpack_require__(18);
core_1.enableProdMode();
var platform = angular2_universal_1.platformNodeDynamic();
exports.default = aspnet_prerendering_1.createServerRenderer(function (params) {
    return new Promise(function (resolve, reject) {
        var requestZone = Zone.current.fork({
            name: 'angular-universal request',
            properties: {
                baseUrl: '/',
                requestUrl: params.url,
                originUrl: params.origin,
                preboot: false,
                document: '<app></app>'
            },
            onHandleError: function (parentZone, currentZone, targetZone, error) {
                // If any error occurs while rendering the module, reject the whole operation
                reject(error);
                return true;
            }
        });
        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
            resolve({ html: html });
        }, reject);
    });
});


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzhlNmJlNGFkZTkwNDFhYzAyZTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmciLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9jYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsL25vZGUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvYWN0dXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL21hdGNocy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvcmFua3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi11bml2ZXJzYWwtcGF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUtbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18uanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9maWx0ZXJzL3RlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL3Rocm93LmpzIiwid2VicGFjazovLy8uL34vc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3M/MjNhNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3M/ZDI3ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3M/NzczOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3M/NTZiMyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2J1bmRsZXMvZmxleC1sYXlvdXQudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2J1bmRsZXMvbWF0ZXJpYWwudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEscUM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7QUNKQSxpQ0FBaUMsbzBnQzs7Ozs7O0FDQWpDLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLG9DQUEyQztBQUMzQyxvQ0FBK0M7QUFDL0MsMENBQThEO0FBQzlELHVCQUErQjtBQUMvQix1QkFBOEI7QUFDOUIsdUJBQWlDO0FBQ2pDLHVCQUFtQztBQUtuQyxJQUFhLFdBQVc7SUFHcEIscUJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRnZCLGFBQVEsR0FBRyxXQUFXLENBQUM7SUFFSSxDQUFDO0lBRXBDLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FB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QixlQUFlLFVBQVUsZ0JBQWdCLGlCQUFpQjtBQUMxRDtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQzs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pyQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBLDhDOzs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7O0FDQUEsd0JBQXNDO0FBQ3RDLHdCQUFrQztBQUNsQyx3QkFBaUI7QUFDakIsb0RBQXlFO0FBQ3pFLG9DQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHFCQUFjLEVBQUUsQ0FBQztBQUNqQixJQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBRXZDLGtCQUFlLDBDQUFvQixDQUFDLGdCQUFNO0lBQ3RDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQzdDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2xDLElBQUksRUFBRSwyQkFBMkI7WUFDakMsVUFBVSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxHQUFHO2dCQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsR0FBRztnQkFDdEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2dCQUN4QixPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUUsYUFBYTthQUMxQjtZQUNELGFBQWEsRUFBRSxVQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUs7Z0JBQ3RELDZFQUE2RTtnQkFDN0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFrQixjQUFNLGVBQVEsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7WUFDeEYsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzOGU2YmU0YWRlOTA0MWFjMDJlMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiLi92ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg5Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgdGhyb3dfMSA9IHJlcXVpcmUoJy4uLy4uL29ic2VydmFibGUvdGhyb3cnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93ID0gdGhyb3dfMS5fdGhyb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHJvdy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKQUFBQUNRQ0FZQUFBRG5SdUs0QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDNnc2NEQ0E2MDIwS3ZRQUFJQUJKUkVGVWVOcnN2WG1VWFdXVjkvL1p6M1BPdmJmdXJibVNTbVdvelBNOFFpQ0JFQWFSZVZKd3dwWldVYnZGZG1nbDJvNm8zZWJWYm0yN203WnRCOENXVm1ZRUFrZ0NCcEE1QkpLUU9aV3BVcWtrVlpXYTczRE9lZmI3eDdsVnFXTFM5ZnNSdStQTHMxYXRsYXFiZSs0OTUreXpoKy8zdS9jRGI2KzMxOXZyN2ZYMmVudTl2ZDVlYjYrMzE5dnI3ZlgyZW51OXZkNWViNiszMTl2cjdmVUhscnpWQjd6c3NzdFlzbVFKcW9ySW14OWVWWTk5RVpIamNvS3FpaEIvanNyZ0UzWmlRVUZ3aUxqNC84Ui9BR2ZpTjd6TzkzTUlpZ0FhdjdmL1FzYWZFNFlPei9QNlA5OFlnNnFpcWtRYVlxeEZNZkg3RllRSWc2R2dGa3VJUjBTSW8wQUN6L3BJNU5Bd29xdW45K3hjd1QxU2trbEpPbDJDWjBCY2lCR0szK2YxcjZ1cThzUVRUL0NiMy96bUxiKyszbHQ5d0tWTGwzTGRkZGNCWUsxOVU4TjQ5V3NEVC95dFdrN2lHOXhuRi9GTjF2aVdxd1drLzlJcnJ6Sm9lYVB2cHNYL0d4c1JBMTdUNHE5aEdPTDdQczY1L3RlTU1RUlJnZDU4Y0czQjhSL0pWQW1lWjJOekZHSHJvVjdXUGZjY0RSdWZXWmRPMklVWFhYU2hUcDg0aVk0anpheGMrVjBlZnZRSmV2TVJpMDVkb3AvOXpOOHdlL3BFU1Znd0FtQmU5N3FxS3M0NVJPVEVNQ0JWeFZyYi84UzltUUVkRDRONTlZcUtSbUVBZ3lBcXNja29vQkgwZXhPRERqUW04eWJmVFIyQ0cvQWt4SWFvSXVDVXpvNzJhMTk4OGNYL2FHeHNwS2FtaHNXTEY2K3JyS3hjK1BEREQrdks3NjZrTjNEVVQ1ck9pREdUdVBDU1M1ZzljeUtOVFMxODQwZDNJb1ZleHBUSmd0dCtkYXZlZWZzOS9Pcm1tM2owdnJ1NTlaWmY4S1Z2Zkp1RlM1Wnc0SEFyNHZtSU1UZ1hZZ3dnNW5XdjZ4OFRDZjdYR1ZEZmwrNzcrWjhLWVZyMENDS0NLNXFISURpRitPUHlpQkhBaXoyS0N1cUtIZ3ZCT2RjZmZ2ck9SYlh2elgydjJ3RStUVGg0cUZrLzlkZC96Vk5QUFVWOWZUMjdkKzltNmRLbEMvN3QzLzVOT3pzN2VlR0ZkWHp5Y3l0WXVPd3NIbGp6TE4rNzhSWldYUDhwWG5oeEEwY09OdkhWejEvTDZWTkhjTnFzU1h6c294L2pucnZ2cFR5Um9MdW5sMXR1dVlYMW0zZndqb3N2WTlUb2VsUUVnNEJxOFR6ZStNRThYZy9yVzI1QUlvSXg1bzh5aU9QNVpQU1prSlcrdkFVaVZaeUNDeFhyR1p4WVFpVTJMZ0VYaFhndVJGeWVob2E5K3NybWJhZ3FDeFlzWU1LRUNkSjNFMVFzZ1RPSVFGZ01Ed0k0RjNIZmIzN0Q2dFdydWZIR0c3bmtra3U0NVpaYldMRmlCWGZkZFJjelo4N0FxR1BpK0Frc08vMFVTb2VONDJ2Zi9nRy9mMjRUdlYzZFZDYzl4bFdXa2dqem5EUjdHcFdsYWJidDNNbDN2djB0bW82MGNOOUR2K1hlKzFleG9lRUF6WWRidWVaOUY1T3dNdEQ1dk9hNjlobjk4YnJXNXMrOVFyQW9SQ0hpWWg4Uk9DVTBRazZodVZkMXgrRWVmWHB6azk3KzhOUDY0cFlHelRzZC81blBmRWJQUHZzc3Z2M3RiM1BERFRkdysrMjNEN29oQlFjRkVicER2VGJuSUVMaUVLTEtybDA3U2FmVExGMjZsRVFpd2ZMbHk2bXBxV0h6NXMya1MwcXdDaTJIbXhHQlREcUJGZkNJcUtuSTBONFowSGl3SFlmUHdZT0h5ZVh6MUkwY3p2Nm1BMXgreFdXc1diMmFYOTl4QjBOcWgzT285U2lSNnJYT1JhaTYvN0ZyN1BGbnZsd1E0YUlJazBpU0QwSWVYdk9ZMWd3ZHhyUVpNL2orais5bS9jYWRwRXZUREtsSWNmRTVpM24ydWZXN2Z2bGZ0L1BSai93bGYvUFp6K0Y1SG9WQ29mOHBqcUtJZ3kwZCt1Ukxtem5VMU16UXFyTC91T3pDYzBTTVlsU3BMQzhubjgremYvOStSb3dZUVJBRXFDcWU1NUhPcE1ta1V6UWZQTWpCcGxZZWUvUVprdFl3ZC9va0tqSWwvUGJwL2Z6SHIzL0hTK3N5M1AxZk4xSldXYzJsbDE3TTVsZlc4L1cvK3dyRFJrNmdQZlFZUDJNZVo1MjFETjh6UHpZRHFzdy9ld05TaGNHMWpBT0pNd2lEUWQ3QUlmYmxWZURRWXJtTktpNFNyRFU0RFFqeEViRm9rTWNGdmRjaTB1Q2wwcXQvZnZNdmRjZldWL2k3TDMvbEhGS2xmT21HNzNMV3VlZnhwWm16YWM4WlhLcWNqLzMxVlNUSk15UUJmbStXc21RVnQvN1hyN2p2L2dmSWxHYTQ1T0pMK2RLWC93NWpQUVREL3NhRFBQN2tVOVJWVmpLcXBod3ZjbmhpTWRaeTZxbEx1UEhHZjJmbHlwVjgvT01mNXplLytRMUJFTEI4K1hMS1NzdXByS3psOWp0K3c1WURQYVNxYXZqZ2V5NWk0ZlJScEsyVHIzN3lJbDN6Mk5OczNiNmVtWXNXY2ZXVmx6Ti96a3laUHFGZUo0MGV5OEhEblNRcnFwZ3pidzYxTlJYaWFkR3pXdi9QNTRuLzN2ZStoM091LzZZUC9JbFVDVlNKbkJKcFJPZ0NJcGNuY25tY0MxLzNQYXFLaXh4aEVGRUlRM3JEUEQxUlFIY1EwaE5HNUtLSTNpQlBTMi8rT3ovKzVaMTY0VVdYNnF4cGsvU1NpOTZoZXc3czFiLzZtOC9xNk5HajlKWE5yMmhucEp6M2w1L1JDei8yUmQzYTFxdGYvdVd6T3ZYS3IrbHBIL3VtbnZuaHorazNiL3k1ZHVjQ1hiM3FVZjNpNTFmbzFSLzRnTTZjT1ZQVDZiU3VXN2RPQzBGQUdFWjBGa0lhc3dWdHpZZlg5Z2FPSUhSRVRnbkNpR3crejAwMzNhUUxGeTdVNGNPSDY4a25uNnczMzN5elpyTlp1am83K2MwZGQrajlEenlzejIvZXJYdmFlN1E5ak1oR0FVSFlRellvMEpVcjBKbkwwNVhQa2kza0NLTUNZU0ZIbE8vRmhTRzVTT2twaE9TREFsR1FKWXJ5UkZId2h0ZXVyNHovM3ZlKzkyZmdnZnJxRlZGRUZkRVlra1BmUEJ2cnE1NUNWWEtZc3p0N0M0KzBkM1NSTHN0UVZaYTZYZkFhZm5Mcm5kZmYvTE9iT1gvWnlWeHo5ZnZZdFhzSGhWekFySm5UK2ErZnQ5UFEwTURvcWRPWnYyQVJhOWIrbnFiV2RrYU5xc0MzaG9zdnZJaXpsMHluT3VVVGlHTlA4eDdlOWQ1M1k0elB2LzdydjlEYzNFeDVlVGtHaHdpVWVJS3hJZ2tSTklvd3hzYWdvRFY0eHVOOTczdWZYSFhWVmYxd1JsOWhZYTNoZ292UEU3R1dRZ2hxUE1RWUJJaWNSOUpBMGlndUtzVHZGVU1RZ3BvRTR2S29LMUNRQkFVeDN3R0RSWDdzdTdDaHhNci9LemxReExFZ0ZxT3c5R015eDRDOFZ3TmhBSVVnWXZYdm45Zm5OKzlpMThIREhHcHBvN1FzelNldi9kQzdLek0rdjN2bVpTNS96d2U1N2tPWGNYVC9icXp2Y2VCQUU5T21Uc1lZdzlhdFd6bjl2QXVZUEhrY2p6NytGQzJIMnhoWlcwblNCclFjUE15VGowZTBIbWpnM0dWenVmZkJlL2o2TjcrR05TbEdqaGpPdjk3NGI0d2RPMWJpUERuQ2lwS2lnS2hGVEFMVktLNTJJbGVzOEFYUDgxNWJPb3NRR28vSWdiTWVnWlB4aFlBWG5FcFZFSGtFK1pBd2w2TzMvUkM1emlQa3N6MzA5T1E1Y3JTTDdxNE9PanU3NlFoOHZKclJaTlhIaEYzWFgzUFptVXdhV1RPd2lqK3hEZWhOOFlZK0FMaG9PQXFJR0Z3VVl5K09xUDhZcmEydHVuUG5UanpQWTlyVWFST01uMnI0MVIzM3NQTklMKys1NWkveFVqNjMvT0xYck4vU3dNbXpKNUlQSXRLbFpXemR0cDNQZmZ6RDdOaitDdWVjZHdIZis5NTNxUnMyakVkKyt6Qkx6ejVQdDJ6Y2pLY2g1U21QdXVveVJsUWwyUExTQzdRUHFXWFVzRklTbnVXZmYvQjlPbzkya1BEVDFOWFZuWlBKbEs1R1FNVVFPc1c0Q0dNOEZJL1FHWndLWWdSVndlQXdRQkFFQkVGQVBwOS9vYjI5ZlVGYld4dXRiVzBjNnV5bXRUT1BaR280M0JYUzBhdTBkeGZvNnNuU0ZTaXV0NDBER3grbmRjdlRCRDF0UklVQXA2RGlveVR3U29jemZza2xST1hEcVVpRnZQdDhpeFh2L3cwUEZDUEFNUWdYSWFpQVUwVThENDBpZkNPRVljaGRkOTJsSzFldXBLT2pnMXd1eDlLbFMzWjk5d2YvektJbHAvTEtYWStSTEsybXZiTUg2NWRSWHorYXFzcFNxaXBLK2YyVGF6bnJwSS94dzMvNUFWLys4Z28yYmQ2RXRaWnJQdlJCL3YzR2YrYzlWMXlHVjE3TDMzejJzOHlaTkpwVU9qbmgyMS80eEs1MFNaS1NralRwaEpXRUtMNEVVRnVIRVFQR0VqbkZpU0VxOG1lQm12SFowT3pLRjRSc0FicTZlMmhyYWVOSWN6TU5XOWZUdUdVZGg1b1BjdWpRSVZwYVd1anQ3U1dmejFNb0JCUWlBK2xheHA1eUFZWE1DUEtTTGdab0pXdVNwRlJwYSswaDM1UEhCQ0cyQ0lDcTl2RjFRaUFsNUtTY2pPOFF6d2R4LzJPSXpKL1dnTlFVK1NuQkNUaUJ3TUcreG9NYTlYWXpkZHdZMmJScGszNys4NS9uc3NzdTQ1T2YvQ1QzM0hNUDMveldONW55ODUrdzdLS3JTVDcwQXYvNTh6dnd2QVMrZU9SN2U2Z3VIY241NTU3T1AzemptM3owbXI5Z3dzaHE5dS9meC9EUll4QnIrZVNuUGlVWFhuQytkbVVEaG80YVMwMTF0WlI0c1JsUHFLc1FGVUdFR0hRTVE5UXBScFJJYytNN3UzdDJkWFRuT05UU3lmYmRlOWk1WnorNVJBMk52U2tPdDNaeHBMV2JmQzdBdUR5ZTV0bTc0VW02ZDZ3RkYvYURlSDE1a0RVRzZ3eGFZZ21rbEY2dm1weWs4VnlBNzNJWUZFOURqQXVSS01DZ0tFS0VqMGlJa0FQSm9jYVJONEpMV01RNmhCQkkvRCtRQTBVUnpoaDZuYU1ubTlXU1JISkNQcFJkUC96SnJ3aHp2ZHp3cFUvcms4K3ZvNk96ZzNkZGNTbGp4OWJ6b1d1dTRkNTc3K2FSaDFaeHhWLzhGU05IajZKZ3kvbUw5NzJUQjI2N2oxLysrQ1k2OXA3QlJSY3VwL3JiWCtIeFJ4K2sxTGQ4K0tQWHN2VDBaUk9TbVhTRGNTR1RwMHdXRVFYakUya1VvK1V1eElWQ1h2eHJPN0x1UDdxNnVtbmF0WTFkbTE5bTU1WlhhTml6amIwSEd0bTM5eEFkSFowNGliQ1pFWXhmOWo0Nk15TlJMQkVsT01wSVNKNWtvWlZJZlVROUZJZHowUUFxeE9CY2pCWGhoSVFLUVJRUVNSYUw0bU9BUElZQ3htb01jVGpGWWhBc1FraUU0SXhQWkFSTGdaVDE4SDJMVTR2cFZ3S0U1UE41MHVsMHZ4TGd6OGNEaWFIZ2xNZGZla1h2Zi9BUlB2S0I5KytxcjY5ajRxeVR1ZTIvYitHWjlhK1FxYWdpakVLMmJkbk1rcVZMU0plV01uejRjSFkzN0NiakN6TW5qZVRwZGE4d3ZOenl4VTlld1ROclIxQlJYa0VTNWZ5emw4Z0ZaNTZFRlVGZFRGT0lpMGxVWXp6Q0tLUXpXN2l0TlNmdmJtcnJwdVhRWVhZM0htSDd2cU0wSHpsS1Ywc1R6ejE4QjRXV0JvdzZJaW1nb29ncndRQmlIU28rb1daQS9UZ2tpMFhGSjNJUlZndzJjamhuK2dVZWZXeThjM0VvY2hJWER6RjRySWhSRkVNUUdpSTFLQVVpNTRONk9CRkVIVW9oTmp6eFVFbmlNSGdhVW1JOWZOOUh4YUxGejJsdmIzL2hSei82MFlMcnJydHVRbGxaV2NNSlI2YStlUmtmeHdsTmxiR3VvWVZoejJ4bmZGT1dEVnQyMHRQZHhiMzMzTTFuUC9FUlJvMnE1ejkvK2pPbXpwaEJaM2VXVGE5czV2U2xTeGhlVlNIbm5UeE5Kd3hKTVRKakdWcWVrc3N2T1FOakJRK1FNTUJLWEFsRjVDa0VoZThFWFlYcjkrM2V6WXNiTnJGaDIxNjJIeW5Ra1I1SmE1Q2dOeGNTT1VIVnc0L3laUEpCbkJCcmlLanJsM084K3ZJYlZUd1hBNXVZRU1GZ05FSXdSWjNQRzE4Qm84WFFiWHh5VWtKT0xOWTVFZ2pHSlNGS1FPU0R4QWJrak1iVnF4dE0wUWhLd3ZkSUpieGlOUnRYcjcyOXZRdHV2dmxtb2lqYXRXTEZDdkY5LzgvSGdIQUZCSThwRTBjeHZINFNkNjU2aXRxS05DZk5HVWMwZlNLUFAvSUExMS8zTWI1eHd3MTg1WXNydVBMS3F5aEpaemoxMUtWODhZdGZvc1FxaXlhUGtvVlRSNkVpUk9wUUd6dHY1eURNT2pxUHR1bVdiWnY0L2JPUDg5TEdEZXg0OFJXT0hHNmxPMXNnNjBwSWpwNUg3YUpoZE5oeUlwTkNyQ0NSbzh6TFlUU0x1cGhCNjZkZ2hXSW1Nb2lpeFpIQUVNWTN6Mmhjb2VFUi9ZR0t5QlhMZkNkZ1RFUkNDNVM0SEJYV1VuQWVsbDQ4Y2tDQTlKRzMyQ0lkTE1WU1JERTRrcDZRS3VxSitnd29tODNTMjl2TDk3Ly9mU1pObXFUdmVjOTc1TThraENraUVTbUJHdDlmZWVaSnM2OC8wUEFnVjcvN0hWeTRiT3E2SjFlWExsajFxNSt6NXBIZjhvbVBmbGhPVzNLcTd0bTltOXBod3hnM2RvSllhM0V1UW93aFZDWEMwaGxFMnQ2ZFk4Kyt3K3g4WlN1L3ZmTk9YbmhxTFcxdEJ3bGRGaldLaVF3V1YxVDYrQ1NpQXNrd1Q0cENUSUlDVnBYS2pNZTRxcEhzTW9iUWVyalFVV1JQNGtTNGlGSVpCWWRQZ1NRV2h6RVF1UUsrTWFnQk5RYU1ZRFRXRnczUzVpQ0Uxc01UOERSTHVXdG4yclN4dkdQeERPb3JTK2xRUzlQZXZkeWZYYytMalNHRWl1QlJVQjlEZ2FqZkl5b2FSWlNtUzJLeVdGMU00NmpTMDlORFBwK25wNmVIdi8zYnYyWG8wS0c2ZlBseStUTXdJQUh4RUhHa1hXN0ZzamtUcm4vd1hzTzJsemR3K1pMeEN4Zk5tcXdmK2REVnpKdytEVlZsNU1oUk1tTDRjQ0lYNFh1V0lIQmtuYUd0SzY4N216cDRlY2QrTm16WlJjUCtabHJiY3lRTDNleCtjVE5kclcySU9vejRSRkZVbEsyR1dCd1FJa1JZamJEcU1KcEhWTEVhb2RtUTJuRWpNVktJcXhvelNHZzR1Qlp3RVZZZ29TR0dQR1daRkJybWtId25YdGdUQnpFUlBPc1JCTUZnSUVQQTh4M1ZmcDZscDgvaS9JdE9aZFA2YmF4YXM1R3M5Wmt4c1k0dmYrVkx2TEI0R2cvZWZTY2JOMjdGZHg1T1F3YVpva0IxWlRrSksrZUl4TlJSRkVWMGRYWDFFN2d0TFMxODduT2Y0NVpiYmxHT2czejVUeDdDQ2phQjBZQ2tCK1BxS2lhY05HZmFycDZlVHFMUVhUdWt1a0srZmNQWE1OWURCS2NhUzBPRGtLYkdSbjM2MmZVOCtYSUQrN0lwZGgrTk9KbzNPUEVKTlkyYU1zbzhJZStCZWpra3pLTk84WXhIU0FSYXhMakZFRW1TWGxOS2p5M0htQWlyQVFubk1FYVpOR0VVZGJYbDdEOGE5R3VJWG04bGpJTHJJZUdPY3NWRlp6Qm43bmk2MmpyWnVXNGRqeDU1aWMyTkhtRVlFa1VSSWdNTlVUSEdVWkdDOTE5Nk5vdk9YTXF2SDN5Q0I1L1lRRmMraVlmSGN5OXNJZDNWd0dWbnpPTExOM3lMVlE4OHdDOS9mU2M5N1QzRjBLcjllVkJsUlNrQ0RWSTBXQkdodTd1Yk1Ed0dJV3pkdXBYcnI3K2V4WXNYbjBnZXFKK1VlSTNRUU5XaVRra0xEWC8xZ1hlQ2dZUnZmbXhzS2c0YkxzQkZTdE9oRmwzN3U5K3hlczNEUFBmMFV6UTJIYVdRR1UzOXlSZVJ6NHdpUjRwSUJURWVTb1NLUlNRV21Wc1RFN2NPVjlRMnUxaHRLSVpJREtIeENVd0NYOEE1QWNrelluZ0ZWN3hqQVNQMWMzemxTOWR6WU4vK291TFpGSTFBQVE4Vmd5VkE4cDFNbjFySDhsTm5jTmZkajFLV1NiTnc0VHpPWFRxTERVK3M1ZmRQcm1YTDFvM3Mycld6M3d1cHhsN2owNSsramxOUFA0VWYzZm9najc2MGt4NVRTZDZtU2FqZ08wZmo3bWErdGZaKzZvWWsrTkJmZklCUGYvWnYrTUhLNzlIZGs4VlJJQktEeGFPMnZJeUVwY0ZwN0pHc3RSdzVjb1F3REFmaFQydlhybVg2OU9uSHhRc2RCd055TVdxSzRFU09VUllJdmxOVURTb0pQRUtHbGFtb0dMSUt1VWhvUFhKRTF6Ly9GUGZmZXorUHJ2NDl6WWNQVVFoNllrQk5rNWdTUmJEZ0JERUdEd2NhWUZSSWhHQkRnMUVQMFFEcldRSVhQNVhHbXBpbklzSzRBcjdtU1pESEN6MGlMVkNTQ2pocnlVSjZEeDlnV0VVMVAvblpyYXk2LzI3dXZ2TjJHZzhlUXFNd0pqelZSd0VyM1l3ZVBwUjNYM0VXVHoyM2xkODlzeHVuQ1I1NjdHa1NQUTBzR1ZmTCs5Ly9BU3FyTW16ZHVwbDE2OWJ4NUpOUDA5T2Q1ZS8vL2h0TVgzd21QL3pGZmZ4K3kyR3lVZ1dhSUtrUmlFT2xBQm9TNWZNY1B0RENQMzdudTlUVmp5TU13Tk9JZ0R5aFdEeEpNTFFraldjRUZRc3VmbFNQSERrU2grNWlXYStxbEplWGswcWwxcDBZWE5pcnl0MDRkWXovR3FtQ2lWdGFnbUxGMHA2TnRPRkFLMnNldko4N2IvNDNkbXpkaUFzaTFQazQxUmloRjFBWG9STGdURWhrSXlJSlVYR0lHaFNQU0F3cU1haG14Y1lpTXV2akloZGpPVWhSTjZ3WXdoanhGVVBLOVRKelpCbG5uamFYbTM1MEM3Zis2RWJtVFIzRnU2NjRpTXQrOFF0Kyt2T2J1ZXYyWDFQSWRxT0VvRG5LVXpuZSs2NVRzWWtDOS83MkNiS21FbHdTR3dRYzJINllseCs4aXgvZCtDK1VsWmN3Y3VRSXpqaGpHZGRmdjRJNXMrZlEwOVBOcHo3MUJZNllZWVRsWTFIcmdabzRNUjVFTldzY3hpUEgzajE3RUkxQkFqU09pYjV4VkZWbUVJMnZycEZZbzkzYzNQd2FQcksydHBaRUlySHd4QWhoQS9XNHVNR1h4QW9pc1hhbVBZYyt0V2t2ai96K0ZkWnYzRTdMdHFmWS9jcDJjQkZHWTliYkdCdno5MHJjOFNDR3ZuNElaNHJIRkVXY0Z1bVJvdGhkaExwaGRjeWNNNGM5dS9mUnRIOHZ1V3kyMk5vVFlUVEVra2RjUktXZjUrcEwzc25PblUwOHRibUo5bDVoN1dPUDh1eVRxem41dE9WODdLLyttaVVuemVlZTIvK2J4NTU0Qm1PVmQxL3lEc2FQRzg3LytiZGYwcFl6OUpna1BqNnB5QklWU3lVeGhzN09Uam83TzhubmMweWJOb3RORzEvaG4vLzVoMnphYzVSeHAxMUJxQjVPZlVBdy9mMGpyOEo3Sk5hWGE3RWFSQVZ4amt4S0dGS2Q3cy92bERoa05UYzN2K2FXRkEzb3hNaUJSQWQ3SStjVWRiRUdLTElXb3hFR3k2NzloL25ISDkvQmdTNFAxUVNpYVZ3b2lDak94WGJvWEI4T0k0Z21nUlJFRnFzVzYrSitLTUdoTG84aGlEL1JHc3BLeTFuNW5lOVFQV1FJeVVRSlRmdjM4ZUNERC9IaXBoMTBlV1Y0RlBCY0ZrOE5DMlpOWXNLNDBYejNYMjZsUFd0UVU0SUxRd291NEpIVnE5bXdhVFB2dnV3Q1B2VEJxNWs3L3lRTzlzSlpaeTNqdXorNWovMEhDdVNvSXZJOWtDeVI2MEZzRUllN0tFVFZrVWo0REI4K25GLy8rbGRzMnJpRmp2Wk9iTlU0UWpXb1NlQ2txTU44bGE1WnRVZzBvMFNPZnJZZnRWZ2c2WVZVVnlTTGZKbEIxVkVvRkdocGFYbU5CNnFycXlPWlRKNGdCalRnT1hKWVFqM21oMFFNbnVZUndQTlM1Q1ZEM2lZd0tuZ2F3L2RnaXZxYUlyWlJCTWpFSkpFUWZJMEJTZDhvR3VWQUk5UllmTWxqSlVCRXVmenl5MGxuMG56MEl4OGxuY3B3MHNMNW5IdnV1WHo4MDE5Z1Q2ZXlmbDhuNjdZMTB0MTZoRXN1UFozVnoyM2xwUjFOeGZ3cUloSVQ5NDJxby9sUU0vLytveDl6MjMrWDhZVXZmNVdQWHYxUmZuTHYwenk3OFJDRnFBcngwa0FBcGdkbjhvVGlCa2h3WTI3cTZhZWZSdFZneENzS253U013WWtwMGhWUkVXS1ExNVhIYU5IQVZBeWl0cWk5VGxLU0VreVJDbkZPNmUzdHZhMnRyZTFWQVVFWU4yN2N5dVBGaVIwWEE1TGlVeEZoQ01UUWVPaUlCbUhBdURFakpGWWlobFJYcGluSmxCRjJCL2hSVUx4NHRyOVFFQkZLU2pMa3d5eFJFS0N1Rjg4UHNhNlQyZFBuY01IRlMvRUkyYjM3RUsyZEJRNDNiS1pyYzRLcUVjTzU3TkxMK1BsTlArWHc0U01RTmJPbllTZDMzWDBQWHJxUzhRdVdjZXFGNytHS2k4K2t0c1JuWDNNUFA3bjNHYkpTVHFYclFMUkFoTzN2Sit0clhyYkpGTFBtbjhUcXg1L256dDgrVHBjWmdUaS9TR3ZrTUNiQWtjQlI4cHBpcDA5V0dzc3VZcUxVQ1VSR2NjWmhYWWdRb205eU8xUzBpSWhiTE1yd1laVWtFM0s3dWhDTXhjUWg4OTJIRHg5K3pXZFBtVEpsL0pFalIwNE1BNG9rem5wRlF5THg2Q2lvL3VldkhtTHhvdG1NR3pPODJFN3N5S1I5U3RNK25nUllFMThncEtnWkVwZzZkU3BmK3J1dnNuM25WdTYvNTA2MmJOMkZrMTZtVGg3T1ZWZWV3ZStmZVptT295M1UxUTJuSkpsaDBZTDVsR1FiT1czMmVBNDA3V1hObWpVb0ZpWENpQkNFQWJtZUhocDI3Q1I0OGxtZTNueUErVlBHOHN5V1BiU0hKUmd0dGlsTFJGOURrQlIvOTJ5U3ovM3RDdEpsNWF6OC9BcWlNUXZJR1VmS0ttZ1k5N1E2RHpRSm1uaXRCeWtLNkZ4ZjAyTGZSNmtXdlk4ck51NFA4RUV5R01pVUlxV2hHSXdHMUZXWGsvRHRsYXF1bi9MbzZ1cWlvNk5qa1BjeHhqQnUzTGgzdDdTMG5CZ0dWQ0NCT0FNdWkvT1ZCNTQvd0VQUEhXTDBwQkJMaEpFRWl1RDcwYnE2S3JNZ3NTdkVlWmE4aElnRjQ0UWgxZFY4NmpPZkpsMVd5cG1ubjhGN0w3MlVKNTU2bHVlMjdlVzhENzZIRjdZMGNOOWo2d2cwZ1l1TzRFZEt0V25sOG1YakdUZG1HSi8rNU5mcDZla21jbDdzUVRRbUxUUnlxQ21obHpKYWN4bnVmL0Vna2FZQWk2Y1JrVEdvdFVDSUVRczJBZ201NHZJUGNQbGxWL0NKejN5Y1hWczNNMjc0WWxLK1JTUWdGSitJSkZZRlF4WkQ5bFd0eGEvQ3gwUmlOYk5hakRwRUExREJhYkxZSFRzNGgreFQvWW9ETlQ3T0tqN2QxTmVVWWZCUkNlTThVT0hBZ1FNRVFkQXZJUUdvckt4azZOQ2hKMDVucWs4Qm5PQnNtczFOclhyVDdROVJJTUdSbGphY0hzdVFQQ3NyNm1wckhzRzFvZ3JXNnhPZ0t6Tm56bURWcWxVODhlVFRKRVE1NjdUVE9QL1NLN2pxL2UvbmdXYzJzT3JaTGZSR0h0Z2tJaUZXajNMV3NvV2NkL1pNVm56aUw5bTFZeTlSRk1WWmR0VFBIaFh2Wmx6TjVZTVFJekpJeWFldlVrK0tFZXBHamVSTGYvZEZ2di85NzdQMmQ3L0QraU9JSXRjdnp6MzJEeGtFV2Z5UitzeGpIdWQxWUw1QmtFaXh1bFIxK0JaR2o2aUxoeW80Y0JwTGJIZnYzajBJaFFZWU9uUW9RNFlNV1hlOEdQbTMzSUNTR3VLTWNEQWI2VS92ZllMZFIzTDRMc21SMXFQOTVDVW92dWpxdWlIVkdKVEl4YUowck1VVmxDZWZmSXFDZ3RnRTFnWGNjZGVkM1B2UW95U0hUNkZ5NW1uMHBvWVJTaEoxUW9JODgyWU80L0tMbDNManlwVTgrY1N6dURBK250UGdEYVdlZjh6b21YUkppbTk5KzV2czNiT1htMjYrbVZ3dUMyVnkzRVZhYjRUdHEwWVljWlQ0aHBGMU5YRUlsR01KZTBOREExRVU5Zjh1SXRUWDExTmVYcjd3ZUgwdmN6eE9OYWZ3d05NNytPMnpPd2hzR2M0a09kTFJTellmYWFTeEhNRVRSMjFOQlVsZlVCZkdaV3dZb2loUkZLUFpVUkRFLzNaS2QwOHZSenQ3eVlZZWdTYXdKa0dDa0hFanF2bndYMXpLcGcwYmVPRCtWUVNSd2FrOU5sWkZYZ1dzREJDM3ZaRVJTYkdyNHIzdnZZcnE2bXF1KzlUZjBOM1ZGVHV3S0h4cmlPWC9EeUZGVU5SRlZKYW1xQ25QNEFrWUU2UHRoVUtCL2Z2M3YrYmhtREpsU245NzBRbGhRQVVzbS9lMzYzL2QrelRkVVlwSVBVSW50SFRtYU0vbWk0aTdna2JVMWxTU1R2aEZCV0VjWWdRR2xjR3FybTg4VkN5bWtRU0N3WE1GaGlRZFYxMndsSHhPdWVlK1J5bW94Ym5pUkE3Nm0xNWZENTE3N1F0eURBUVZhMW13WUFGVHBreGx4UmRXc0cvL3Z0ZExhUDUvcUJJR3p5TDZZL0ZaUVRIaUdGbGJUU2JscjdURnNHeU1KWmZMamQrMWExZS85K3d6cEZtelp2M0JLU24vcXd5b0k1THhQNzN0TWZhM1ptT2xiekh2T05MVlMyZFB0dDhMV0J6RGFzcEoraDVPM2V2YzZWYzdqajVHVGZDQnRBWmNzSFFXOHlhTTVOZTNQOFBCUXprY2ZpekRFSTJoL3dIUzBqK3FnZ3hEeFBOSXAxS01Ham1TZi9xbkg3QjE2M1kwK3AvclBSK1lqQnRqTUtLTXJCdEtPaWtyRE1VR1RhQ25wMmZYL3YzNyt3bFVWU1daVERKeDRzVGorcjNlY2dQcUxlaXVWM1lmSk9jc1RnMitpWlBSZkdRNDNOb1pLN0tLWkd0cHlxZXFLaFByZC81QVh0R1hyeHAxZUZHZWFXUHJ1UERzazNuMGtXZFp2L0VBQlUzanZFUk1TTkxYNW1KZk56M3VMMjFlZFh4akRCcUc1UEo1VmozMElJZWFtMUduUlFOL004aTByeXp2YTF2NjR3d3VMdU1wanJuci94Ykg2dnlCeDRhWTM5T1F5UlBHRmpWSHg4NXQ5KzdkZEhWMURScm5VbDVlem9RSkUwNHNBL0w5MUxycUlabWlPcStVSUJJaVFzSW94WUVESFVRU0V0S0x1QVFabjNXamhvVVlLMFF1Q2ZMNk5Zd0txQmVEakVudHBiNjBtdzlmdFlRWHRqVHk2OGQzMEM0cENsNEtwNloveGx4RVZHU1g5SFhLR2dHTjljdGFCQXRWWTBJU2RVU0ZQTDA5WFJTQ3FGaHhhVDhpTEFxcUhvNWs4ZjBSbUppL3M2R0g1N3lCQmZpcll5UmlZcG1qSUNRam9UU0FST2ppR1QrYUFrMmh4aUNlNFBrRzN4bzg0eE9KUlNVa0liMU1xNi9CNytzSE56NVVCL2JsQUFBZ0FFbEVRVlJPaFMxYnRzU1ZaOStOTllaUm8wWlJWMWNueHpQcGY4dVBuUFR0d2hHMWxSZ1VGL1hGZk1HcDBOalVTc0U1a0hnU2h5OWNPWHhZRlZiMHpSOWFKZTRHdFVMU3M1eDczanZJcWVHTyt4K2pJeHNWaGV6eVdtZnorbjg0RmhSbG9EenJ0WW4yRzN2RENFc0JxdzRiV2F5ekdKV1k1cFhvRFF3bzlsbldGUXNFc1JTOEVySTJSYzVMa2hYQnB4UGZ0V0hEWG56UHB5eGRTbVZGSmVsTVNRd1JpRkJaWHNhdzJpSDBpY2o2WkxNYk4yNGNWSUVCeko4Ly83aVJxTWV0akUvZ3FCdFNnU2Y3TWNYeXZHK3NYTlBoRHZJQmJXbmZWQXVDRlcwWVZUY1VveHY2KzVyZUtId1pRS0lDSnkwNmlmS2hJL2pacjFmVDJOS04yb28zbGc0ZXJ5VXg5V0RVUXpXSmtvanBDbEdjaVY0VGdRYWVoNmRLZ0JJYVE4RWFDcEhEOXlLSWVxbEtkVEcxdHBRTFpsN09wTm9QTXJGK0dLbDBraGMzYmVTclgvMHFQVjNkakIwN2xzckt5dGVZK1VzdnZmU2F6NXN6Wjg2Sk55UFJJMkxreURvSVg4RFlrcGlnUkloVTJOdDhsTjdRVlZVbVBUUlFQQ1BVanhoQ3dqanlHcjN4L1RKZ2NJd2NPWnlxcWlwdXZlTWhHbzkyRTBvSnFtL05LUWdNSWpNSFgvUkI5VDlxTEpHMXVERHVDWFA0aUFtSVBDRXlBNEJDT2Nick9SZERBME5yS21teE1RSHJ1UjU4S1ZCdUNweXlhQWJuTEp2TzdISERxUE1UVkZtTHVBaXM4dWhUajVQTFpSRVI1czJiUnlxVkdsU3Back5adG0vZjN2OVpJb0x2Kzh5ZE8vZkVNeUNMWS9Ud1NsS2VrSE94ckRRZWNHazQwdEZEZTlZeExPUGpDM2dLdzRkV1VaSVV1dVdOM1Vqa1l2MVBaM3M3di92ZEV4eVVERm12RktNZTlxMHFrSVNpNEV6NmNXTFBHaUtpWWhRMmlDbWl3UmpDU0VpSXcyb090SUJ4UFNSc2dDRWtrVWhnamFXOFBNT1lNYU1aUDM0aU0yZk1ZZjY4K1d6YnVaMGJmdmhmbEVnZW8wZVpPbTRrNzd2aUhNcEtQSFllT01UZG0zWlFhTnBMWFlsaDBkd1o3R3pZem8zL2VpTXVpZ3VOdVhQbjloY2NmY2F4ZGV0V0haaEFPK2Vvckt4azh1VEp0NTl3bmFtK09vWldsRkJaV2tKblI0UVd5VlVuUWphME5CNXNZM0xOaURnQkUwZFZXUWsxbFJuYTN1UTg0eUxmbzd1N2wvYXVicUtxb1JTa2hLUkU5TTFmZlF2d3orSVRYUndMTExIeGlJbjU3LzZSd000aFlVVFNCYVFsaXljaG1kSTBsV21QY1VQcXFKbjFMa2FYWDhXTUdWTVlQWG9rNWVWbFpES2w5UGJrdWZ1dWUvbkg3LzBUM1QxQ1hkVE5PYWVmeWFtbkxHTE5vMCt4YnNNMmp2WXFYdFRGd1EyUGtkMzNNcFVsTVhYUmxTMkFHc29yeXBreFk4WWdqMktNNGFXWFhpS1h5dzM2Mit6WnN5a3ZMNyt5YjlMc0NXTkFBbFNXbHpHa3Vwekd6cTVZVVZnODM4QVo5aHhvaGxuMWlDckdLT21rdlgzVThOcDNiMzlkaERmR2ZsUUVKMTRNTklvaFZJc1RpK0l3UkxqK2N2M1ZXYkMraXMyR3dZUEZqMDJiaDJNaEFZSFNzbEltVFovQWlOSERPZExVd3l1Yk5uQzB1dzN4UEZMV2thU1hNMCtad3FLNTR4ZzlxbzdoMVJtR0pEektQWXVvNDJoN0cwMU4rM242NmFkNC92bDFyRnYzRWh0ZTNrQnZieGZKbW5xdXVPQnNwaStheTg5dmZZQXQrenZwMUNGWThTbXpiVVEyalZPbHM2Y0xjUnIzMnh2RG1ERmpHRFZxVkgvUGU1OGhQZmZjYy8zaHE4OERuWHJxcVg4VVpmTy96b0JDTWFRVFpzTFlZZWxkTCs5dXBXQXpHSVdrNWdsRFpjK0JGaUtOTmVDaWpvUUpyNnl2TGRXRWhrVjVwb2NqaXN2bHVLK2llT3Z6UkpKSFRJZ2x4TG9JUjBDQkVDa21zY1cyejRGQUM1Z0VSZ3V4NUVLSWN6STFxRUJPTEFteWxFbUE1d280SE5ZbXVPamlDL21yajMrWVdRc1drU2hKRWVZS3JIcmdOL3p0OVg5SFd5RWlMVTI4NzkzdjRaTHpUNmMwWlhHRmlDT0h1bm54OEFGZWVPNEpOajJ4bG9aZDI5bXpkeWM5UFYzazh3VUVpMU1sa2JCY2RNbjVMRnUraEgrKzZiZHMyOTlCVGxNWUk2QUJMZ3FLdmZNU3F6bTFxQVZ5eXN5Wk15a3ZMNWUrWVovV1dyTFpMT3ZYcisrZlJ0OW5YS2VjY3NxZlpKRDdjUkhWKzVhR0NhUHJzTS90QTRuRlpUaEZqV1hYN2taQ09GdEZWc2ZRUEV3Y093cWp3WUJpVnhpNEpZR29RVlZRRWtTa0VCSjRHQ3hnREFPUVlobTB2d1VvUmd4R0JIR0s5UklrMDZYeG04U1J0QkdwS0VkRlFsaTBlRDR2UHZzTVZjT0dNV2Z1UEFyNUhINGlRYW9ralpkTzhhNTNYYzVMbTdieEx6KzVrM1BlZVE2ekZzem44ZWYyc1gzcmkreHYyRUpQWjVLbXRpNjJ2Zkk0WGR2V1lRbUpYTDVmSXE0NGpGaE9PbmtSSzFaY3p6MVBibVRIM2tQa05ZT0t3V2dJNHBBK0dFRHBwMzNpOXdvTEZpem9MOHVOTVRqbjJMdDNyL1p4WUgwR1UxRlJ3YXhacy9xM1dyRFduamc0VUo4VmpSMVpTNEk4VnVNTEVnOW9FaHFiMituS1JvKzRZcStWd1dOOGZSMitGd0poZjhZek1DUVp3Rk1mMVRRaGFUUVNiRlRBMXdMZUg1aVJMT29vTHkvajZnKzluenQvY3pjTFRqNlpLQXBJbUlpeW9KWFpZNnBaOFptcmNVRWVEZkswTnU3bmhtLy9BKzk1Ny91NTVwcHJhR3M3aWpvbGtmQzU0b3AzVVZwUnpqTXY3K2JUWDcrSmYveVAyM24rbFZlWWU5cXBuSG5adStnSVU0UmFpaldHeUVVRCtMejRQR3FHRE9GcjMvZ21rU1I1L0tsMVpDTkRLSWtpU0dqZUZBcXJxS3hrM3J4NVdHc0g0VDBiTjI0Y0pDSURtRGR2SHVYbDVkSm5hQ2NVRXEzcThBVHE2NnFvTExGWUxZQTZuREZFQnJxeXNQZmdVWnhSVk1DcVlWaFZocHJxTkVnWUQrQ1V3VjRrRnBYR2ZWTklub1IwVUozc1pXUk5nb1FYdlRGMW9KQkpwL24rRC82SkgvendYNWs5YndIYnQyM0JwNEFOTzFnNnE1NHZmT0lpSGwvN1BNOCs5eUpCUGhlTC8xWElGZ3JjZjkvOS9QakgvOWtmRmthUEdjM1EybG9hbTlyb0xYaU1HenVTRlovN0dKZGRlQ1o3R2crZ3pvY0FvakRXQy9XVjFNWVlqQkd1dXZJcVRsNjhoTlZybnFEcGNEdVJKQW5GaTdYUnIxTUl5QURvb0w2K25zbVRKL2Q3bEw1alAvUE1NeFFLaFVHRTZaSWxTL0I5ZjVCWE9tRU1TRkNNT3VxcUs2Z3FUZUJMN0pyVldBS0JYT1RUc0wrRmdzUXpuOFVacXRMSmxjTnJ5MENEb3FEZXZNcUFGR3NpTUwxVUpMczQvOVF4ZlBtdkwrQ0RWNTZOZmJNNlhwU2hRNGV3ZlBseUVxa1VHemR1cEsybGlSS2JZLzZrV2o3NW9RdDU2ZVU5clBuOVM3R1Mwc2FpZXB3U3VyZ3I1SzY3N2lLZnp3TlFWbFpHT3BOQlhZU3ZBZWVjUEozWlk0WVNGZ3BzMjdvVlE0Um9HSWRPWXdZeDZUVTFRN2ptbW1zbzVFTisvL1R6QkNGRWFuR1l1UC90ZFR5cEZLVWFNc0NyRER4dWQzZDNQNERZWjZpKzczUEtLYWNNTXJJVHk0Qk1ySWN1TDdFVHhneXZ4cm9DUmlCVVJhMGhIL3BzMjNXRVNOeDRKRlllcDN4Wk1YclVrSmdHa0hpeTEwQWpjRVg1Z3ljNUxqMXJIbC81eUlXOGMrRVltdmMxa2kyOFdjZXVNR1A2REdwcWhpQmllUGFaWjdCQkR5Tks0YnFyejBWZHlKMnJIcWRMU3VraE5XQ01TdXdQUEd2WnVtVXpIUjBkL1Y3SUdJTTFqcktrWS82VU9rcHd0TFcwY2VEZ1lkU0FzYTQvUHdHd05yN0VaNXh4QnBNblQ2THphQWZiTjIrTjh6eVJJa0dzV0EzN3RjMERQYWkxQmorUjRKUlRUeVdSU0F6YVBxcXhzVkczYnQwNklGUXFvMGFOWXViTW1ZTWtIU2VVQVZIc1pVcFlHcVpOSEJOcmZ0RzRJZEFJMkNUYmQrNGpINFM3MU1WeUJBL0h4SWxqd0F3c3NnZHM0NllRWWtuN1NVNlpOcEc2QkhnOUFWczM3Q0owcFcrSUF3bkNva1VuNGZ2eGhYLysyYWRJYUo2UHZQZENabzZwNWVIVno5RGNHZElsR2ZJbVRTUTIvdjVGUENpSzRtMFNEaDQ4aURHRzd1NXVzdDNkT0NLcXFrb1lOMm9Zb29ZTnJ6VFFIZmdFeGlzMlBJS2Y4Q2twS2FHK3ZwNFpNNlp6L3ZubmtVd21PWHpvSUoxdGJSZzl4ckxIL1N2aFlOaWhPTGN4aWh4VjFkVXNYcnk0MzRENzF2cjE2emw2OU9pZ1VEVi8vbnlHRGgwcWZSdmVuWEJWV0tRK1JnVFBSVXdkTjRLa0ZiSW9PSWRUaXhvNDJOSEZrZmFBeXBvVWxoRGZXTWFQbmtCcFNacWU3dDZZTHRBQkFKLzRPQ3kxRlFtbWpCNEtDQTBIV3RuYmRCU1JNdkR5YUpoRHljVmRGRVhqTTE2S2swNCtoVWlVNXNOSDJMdHJOd3RualdmNXFiTm9iZS9taVJjYTZRMVNKRDJEVHhRSFMrTWRlM0p0TEU0UEN3VlFPSFRvQ0MxSE82Z1o0VEZsM0NqS01vWW9LTEIzKzNhcVV6a3FTc3VZWGo2WFNlOWN3SnpaTTVnMWV3WkJVR0RseXU4d2YvNDh4Q2l0UjQvUTJkMU5TbXhjTUpvQU5DeUt4V0tnMGhSM1VFeElQS1ZrMnFSSmpCMHpSZ1lhVjErL1dWLyswMmRZeTVjdmo4ZmVxWjZZQnFSaUFZTUhUQjQ3aXBRMVNCQmdSY0Q1aEZLZ3JUZlAva09kVEI1YWltZ0JKOEtZVVdPcEhUS01mYjM3aWxzbHVBRk9MZGIrVHBzOGhxRkRLOGtaeS9yZGgyblBGNXZ0VEJJaENXb3hFdi9nSE5XVmxVeVpNZ2tsWXUrZWZiUWVidUgvL1AxWEtjMmsrTjI2M1RTM1JTaEp2RERBa3lLTUlINy9oblJSRkErMHFxNnVRcDJ5YWRNcnRMZTNNelRNc1hqR2FCTHhYQkRPUGVOVTNuRmVPWFUxVlF4SitFaHZOenUyYitYaGgzN0xYWGZmaVRHeHVCMGMyVndQWVZBbzlwMjU0dlRWQ0ZHRE14Wm5iRHpCWGp3OFAwVStuK2VVcGFkVFdwb1oyRFhPMGFOSDIrS0d4V1BiR1ZSVlZiRm8wYUxYbE8zSDA1amUraEFtUmJHbUVhb3JreXZIREsvR2w1QytHVitxUWpZZnNtTlBNK0d4ZlFRWk1tVG9oSEhqeGcwaUNRY21BNzZCK1FzVzRLVkt5U084dUhVWGdVMFNTUkliWkxCQkJ1TXlzWjVHNDRiZlNWUEdVMTFSaGkvSzdsM2JHVGQyREtjc1hVcGVZZE9PM2VURHFMaW5xcnlta0l2M1RoVktNNlhVVk5jUVJSR1BQTFFLRitTbzhCMXpKbzVBZ2dBandxVEprN0dlWmQxTFcvblczMytYaXkrK21Bc3Z1b2l2ZitQcnJGKy9uaUZEaHBCS3BaQml4NnRvUEJYTmFxeXZFN1VvbGpDS0h3aW5RbGwxTFIrNjlxOUpsRld4L056ejQvQS9ZRFUwTkZUdDNMbHowR1o0RXlaTVlQTGt5UlA0RTY3ajBCc2Y5VlBvSHF5WU9YSGs5UnYzYnFSZ1M3QmlFYUFRR3JiczNFYzJXdmlkcFBWV2lDb2x5V1REckZtemVQVFJSekhHREJKSENRNHJ5cElsUzNIRzQwaG5ubDM3RHVDTXhiaVFoT3ZCMXg1RUFwd29WZzBZanpsejVwUEpwRkc2MmJSaFBlZWNmVGFac2pLT0ZvUTlCOXVKSEJqZkZGdUc1VFhWSk9xWU1tMDZxWFNHQS92MzgvREREMkh3R1ZxWllXUnRGV3FFSjU3ZnlJMjNQOHFCRGtmUTNjYis5YitqbzJGOVVhOFlXMlVtVXhyak44NVJVbGFEVjFLR2lsZHNjN0l4Z0s2R0JGa1NaS21wTHVYNkw5eEEySFdZaWVQSE1uM3FwTUV6QjFSWnMyWU4yV3gyVUpLOGJOa3lTa3RMRzA1c0F5S0tKMmtnSkR5WVBXa0VkNjUrZ2Q2K0dSSUtrVW13dTZtZHRxN2M5Wmt5ZjBWQ3dQZDk1c3laZysvN0JFSFE3NFlsbnJMQXVMR2ptVEJ4SWhGQzA2SERIRzA1aEJlVllrMldUTEtEVXNreXVyNkVZVk1XTTJmYUZLWk5uYzZaWjUwRFFLRVFzSHQzQXgvOWl3dXhOa0ZQYnk5SDJudmkzWmRkSDJFeTJBVjUxbUNzeC9MbHl6SEc4SjgvK1FsSDIxb3g2U0ZNbnpxQlJNclNFOExhRFkyODNCU1F0YVdVVUU3ZVpGQVZYTEdjdDlZTUtLY05OU05HVTFrMXRDaGhpZ2RxV2VzaGhHUzBrMG5ETW56aXVxL1M4T0xqckx6aEsxeDU1UlhVVnFZRUY4WmdveXBCRUxCbXpacEJGVmxKU1Fubm5udnVuN3psNkRnWVVOeEZFWU9FTUhmcUdFcHNSS3VMTUNhV1lZYnEwZFRTU1ZOTEovVVZ0VEhUcmNxTUdUT29yS3hrWUIrM2N3NHJ3clNwMDZnZE9veEFsWlpEVFl3ZGx1R2sra21NR0QyYU1hTktHVE9raXZxcVVyU25nNWVlZTU1Zi9PSlc1aStjQjNZa0hSMDlCSVdBMFdQcUFZZHpqbXd1UDJnVXpXdHlPYWVrUzB1NDZPS0xhZGl6ajUvOTdPZmdRb3dHVEpsWUgrdThYY1MyeG5heVhqVlpVbmdTRWpFNC8zRE8wZEhSVGhpR0pIR01xYS9qekhOTzQva2Q3VmpYUWNJWWlLQzZySkpsaXhaeDBmTFpQSERyVGZ6c24vOEJjcjFjZVA2NVdDTTRQYVk2MkwxN3QyN1lzS0dvTTRwaGcvcjZldWJObS9leDQ3K042SEUzb0dPRGtnd3dyREs5Y3ZTSTJ1dWJtdU13NFJCVWZMcHpYZXphYzVDRjQycjdjNDc2K25wR2poelpiMERHR0RLWkRGTW5UZWJTeXk1SGJEeFk0SlI1TTFpOFlEN1dUMUJ3am9NdG5UVHQzcyt2Zi95ZlBQWFlRK3phdXBIcW1pcktxMHVKREJ6dDZpRlhDQ2tyTDhkb3ZCbUsrVU1OR3dwbkxEK0R5Vk1tODRscnI2V3RyUjFyREo3QWxQRmo4VlRwNnN6UmRyUURweVdJR0t6R2c2c0tyenBVYzNNejNkM2RsSlZscUVpRmZPUHpIK0hlTlMreWVkOGg4SlJKRXljeVorWlVBcFJmL3ZmZDNQK3JPK25vekRKN3hoUW16NXBISkY2OHBWVFI0enorK09OMGRIUVFSVkUvNW5UT09lZFFXbHI2WS83RTZ6aVFxWDNiWnp0RUl4SytYVEZ0NHRqcjF6WHVPamFOUzJJdnRMRmhQeGVkTWVlRkpDdzBRSGw1dVV5ZlBsMWZmdmxsakRHVWw1ZnozZTkrbDhzdXVaUk11Z1FWSWVkZ2IzTUhXL2Ewc0dYcmZuYnVidVp3ZXdIdFBjTFdaeCtpcTNFVFFwWVpNNmRTTTZTS1VJWDIxbTZpWEVnNnFUako0NnlTelBnWU91UGg0Q2FKaUk4TFloeklpRkpWV2M3blB2dFpmdkdMVzFtMTZpR01pVGZscmFySVVGOWJnVVI1T3JwN2FPL3BSaWpCZHdHK0N6Q0RsSlZ4Z3R2WTJNaU9IVHVvclIyS1FSazFKTU5IcnpxVG5raUlmS0cxTytUaE5TOXgyMjlmb0x2dE1EMEZpNW9FSjUrNmxOcmhJeVVxN2pGaWkyejdmZmZkMTU4ajlySHc1NTEzWGo5UDFvZENuNWdHcEg0UkhBc3hKc0xETUd2S09ES1BiYVZIQlk4a09JL1FKbmw1YnpOSGNya0ZsU1VKaExpUGFlN2N1ZHgyMjIwWVkvandoei9NdkhueldQdkVXcGFkdnBTUzBuSWFXM3I0K2c5dlkyZXJJZEEwVGowaWtsUzRES0drVUxXSXdzamhJMG1uMHFpSmFHbHVRd3NSUm1MSlJxS2toSXFLRW96dElsTEI0UkZFSVRFdUR1bDBpaHUrOWpXNk9ydjUrMi85UFlWQ1FFSmo1Y0M0MFhWVWxwVWdJalIxZE5GV2lIQXFlSDFiR29nWkFHekc3VVZkWFozY2VPT1BtRDV0SmhYVlZmRVFMWVhlWEo3VlQyN2p0b2ZXc1dWZkJ3VmJRVExLSUg0cG1WU0tjODg4ZzVUbkVabWltZ0ZseDQ0ZCt2TExMdy9xZng4M2Joeno1ODgvT2hCNVBtRnhvR1Axc1BTejBGTW5EYWM4N2RGVGlERlhLUmJ2QncrMjBkcmF6Y1Q2YW9nY3h2TTU2YVNUU0tWUzlQYjI4dE9mL3BRZi92Q0hUSnMyamJXUHI4VVp5NEZEUjJudHlwTjNaWVJhUkdiN0o3b2YrOXd4WThaZ2pTRGthVzdleitHV28zVDFHakthb2NwWXpwZytnMmMzZHVQWkREWnlKS0ljYWMyVFRpWDQ3Q2MreDdUcDA3bjZJOWZTMmRrUnp4K000dDZQY1JPbjRLVXI2WWlVUXgyOUJDUlE0Nk11d3VIRmM2bGZyWkVLSSs2OTkxNTZlL084NDZLTElGVkJVN2ZqbWMzNzJkOGFrdGMwa1pUUlA3TkJZUHpFQ1N3KzVlUzRNN2ZZdFl2QW80OCtTdDhNb0Q0ak92ZmNjNm1wcWFuK1U3RHZmd0lEY3YyYUhvbGxWQXlyU1ROdVZEVUhkM1VVVzJrVXhaTFBXN1p1MzhmSm82dkF4Z25oaEFrVHFLdXJZOWV1WGJTM3R3TXdmY1lNakpjZ3hMRHZZQnU5Z1llektTQkpHSVlNM3ZFeE5xUDZVYU5pMVY0VTBOWjZtS1lqUjlqYjJNeUkwV05KSzV4MzBrU2UyWEtBdFM5c3hoY2xSWjZwWXlwWWNmVjNxQ29KK2N1UFhVdnpvY1BGSVo1RkF6V0dNZU1uMDZ1R2pic1BjZGZEenhHU0lsS0RMVzVJNTdDRE5Fa3hJQm9Md0g3NzhFTTg5TWdhS0J0Qi9Ta1hVU2dkUTQ0cWpQR1JLTVFSWXIxNFF0dnljODVpeU5BaEVoT3pNVTZWN2UxbDFhcFYvZFdYTVlaRUlzSGxsMS9lLy92eEZ0SC9TVHlRRkRGS3dXQlF5cFArT1RNbTFqM3liRU1iem1oODA0MUhJVXF4YVZzemhlVnpNVGlzOWFpdXJwYlpzMmRyWDUrM2lEQjMzanlzNTVGM3dzR1c3bmpBZ3VrYnVmdXFpeVh4VHM3RDZvWVY1MFVsNmVyc29idW5uZFZyVjdOdzhYdzhpYWl0RHZqYXg4N2d4ZFBHY2JTOWl6SDFkZFNQSE1McVZmZno2ZXMrUy92aFpqUWkzbi9RS2I2MVlIeEtLNFp4MjZxbnVlV0I1MmpxRGdncGk5VURHaFhQWEFhMTlXaFJGT2FjdzZtTHgvQTVoNUNNdDRxU0ZFWWpmSW1LZ3lWQ3lzcEtPZWNkNzhEMzQ2SHJVZkY0TzNmdTFQWHIxdzhpU2lkTm1zVGN1WE5YRHV3QStWT3V0NTZObHo3TU9aWmtpanA4MGRVTFpvd21hUndhNVRBUzc1SVRhWVlOV3c1d05PZFVpbHRYVzJ0WnZIaHhmNG1hU3FXWU1ta1N4Z2lSaTJnKzNJRlRIeTB5WHErbkJmSjluN0xTTW94WW5NWmlmT2RDYnJycHAremUxMGl2UXVBSk5XV09kNXc2all2ZmVSSzFkVFg4NHBkM3NHTEZsMmxyYXljS283aWxXWXVWcFlLWUJQL3dEOS9uMzM5Nk53YzZsQUpwd01jNGlxV0RlNVBjTVA2ZVZoVnhEczhwMXNYYnRoZ0prT0o4UjkrM1RKazJsVGx6WnNSK1hGeC9zcnhtelJvR3prQjB6bkhoaFJkU1VWR3g0azl0T01mUEF3MW9IemJHNHFJQ25uRk1telNDMnNwUzhtM2RCQTRjR1p4SmNlaG9DenNiV3hnMlpWaFJhRzlZdG13Wm5oZHZGMUJXVnNiNDhXTVFqUWdManRhV28xRE1NNHc2TE5GcjJQaFVLa1VpNFJOR0VXdlhQc3NqcXg4QlZacjJOM1BOWDM2ZWIzNy8rNHljT0FSeGNPaG9HNnQrdC9IL3RuZmVZVlpWNS83L3JMWDNQbTE2cGN3d0RET1VvUTlkS1NJaVVZb3RGbFJpdVNLaWdCcERWRVM4SmdSampHbEdqY0ViTmJrYU5XaCtkbEVoMFZoQUVFUnBvc0RRaHo0RFREbGw3NzNXNzQrOXorRkExT3ZORlFURGVwN3p3QU04bkRucnZQdXQzL2Y3NWMyM2x4Q3IzNDF0UnpEaStFcUJhWm1Wa0RndU5FVnRvbTZBT0JtNFdpQ0ZoVkFLUTNuNkcrSkxFSklhZ1UwSVE0Y0FpZlEzV1IyaC9jQXZVSzVpekZtaktNalBFWWc0U1hkMjRNQ0JPUys5OUJMeGVEelZtTXpKeVdITW1ERkhGTEw2RFlTd3d5aDVoSWRkem91RWxuYXRiTjFuNjY3bEdFWVlCNG5qdXNTRjRxTTFOZlRyMUJMVHIzVGF0dkYycVQ1WnM0YTh2RHdLOC9Nd3BDU2FjRGpRRlBNQStjbW5NNDBvUVNUaEpFS3dyWFk3UDU3NUUyYi8vakgyNzl1T0ZBTEhrYXpidEkrYmYvUVlzcUFBYWJuc1BSQWpSalpTWjVKcHVDZ1Y4RW05L1owd3Y1TFNDRnpsWUJxV1Q4L3JTU0FvN1RPQ0NaV0NaM3o1c05uMGNVQXF0UTNpSVJJdERGZVJseE5oeU1BZS9qNis0Zk1tS2xZcy8rakNGU3RXa0o0bzkrM2JsNnFxcXNvanZicHpkSWVwSGdPZ2I1a1NoSVdoQmRrR2ZmdDNMU1ZpS0pScitkUG9HTGFLc25qNWVwcGRYYWZSQ05jbEx5ZFBWRmNQUUJwaFdyZHFSU2dVNEVCempKZi92b0F0ZS9haERRTWhITFRRS0dsNHJLcitVRmFnYVRod2dPL2YrQU4rZHMrOTdOMjdBOWRST0s1WE9zZXhhUWdFMkJJTHNha2hRb01vSUNGQ25wd2tOdHB3c0hId2VpL0NaL3N3c0YxUUlvN3JSbkdGQmhrSDRtanBrakEwY1ZQZ1NPbUQwcjdzNFlxRGppS3dQYzVJSlRCY0U5TTFNTFJMcnk1bHRDdk9YR3BxRitWWXVJNkJhOGQ0K2VYbk9IRGdRS3J5c2l5TDg4NDdqOHpNekpwdktud2RJUU02RE5MbHcxTWxVTjI5bkhCUVlwbmVsNk9GaVRiQzFHeXRvM1ozUTU3ajUxQ1dKVG4xMU1FSW9jZ3Z5R1hkdW5WTXVtNHkwMitaem9HR2hrUHlIcDFNV2c4WlF5Z2FHaHE5OGpmcG0zUTZ3dEhmTUJVeTFmZzhMUDUrUHNvNk9kSFVYb0VndFBTRmhQMU5FaTIvZ2dmeW1vUzJESkFRRm80MGNJVkFDMDIyNWZDZFFkMEpTYmV2a2VSOEViQnIxeDQ5OTVYWFVubVVVb3JXclZ0eit1bW5meU9KODFFem9FTTNLQVd0aWpMcDBxRVU3VFlCTGtpVFp0dWdyaEUrWHJNTlYwaVVJVUU2OU9uYmsvejhIT2JOZTUzVFQvOE9jLzd5RitJTkRSNWQyNWMyTXJXL1Q2V1BZRFBOWTR4UEdoRytJWDJWcjlHRHVzZzBKVVFYZ3pnQjNVelgwZ3o2ZFd4TlFMa2UyWVJ2UksvT25jdUdEUnRUWFdjaEJDTkdqS0JObXpZaUhUNzdyVEtndzc5QUFVUUU5NXhVM1I1VFI1SENSZ0dHbFVuVURyQjA1UWFhRlhNVUVxVmNLaXZiM3RPeFV5WDc5amZTMU5TTTY3aGdXamlPYzVpUDBJZnNtcExxZytpdmlaTHVjOTNJSWQ1SHBQSVo1WTlDRGdXekMzRVFvbXJvQkVMSE1GV1VJRkZDdW9HaVVKektJb096VCtsR2k0Z2hMQjlqNzJpYnBtZ3p6ODU1RnR0MlUvOW5Sa1lHNDhhTnd6Uk5QaS8vU1JyWjBmQk01cEV5bmtNdjBQdDlSREp0WU0rcVcyZWJyeE5UQ1Z3QzNyV0xBSi9VYkdmMy91WUxNL0xDQkFWRUl1RnBRd1lQdVhYUmdvVm8xL1dBYXNyYjJFalIveWVONTdBSWxMNmlmR1Q4ajA3aGZRU2VLSXhRTG1nYklkeURaSHpTVDdTVnhqUU5oQlpFQXBLOGxnWDA3RnhKYm1WWENscTB3bElONUFZMEl3WjNJNEQyQUdZK3llT0hIMzJvbDN5d0pOVmFrbEl5WU1BQWV2VG9JYjdLMG1ENnlPTzRNYUF2T2dFTlpZVlo5VjBxeS9MZVg3Y1BHeHM4MVU5MjdtbmcwdzI3YUp2ZnpoTVVNUVNEQnczaC91Q0R4S0tOSEd2SEsvTDlIVm9WUndnSEtSMDB0dStCSklacEVRNEhhZE9tRFYyNmRLZDcxKzVVbHBld3k4NWdqOUdDVmR2cStYajFaelR2M2NUWnAvVWhJOWh6b2hUU3Z4T05yV0k4K2VUak5EYzBwbmlrdGRaY2NjVVZoTVBoUStqc3ZsVmwvQmZHUzYzSXRFVCtvTDdkOUpMUC9vYVVJYi9ycjJpS0s1Wjh2STdUZXJYekNJRVFkT25hbmZMeUN0YXNYc2toeXhwd1NMZFgvUE0yekpmU1ZRbWZ6MUNJbEF5TUg1bkVsM29kWC9YRXd6RGpJbkc5WEU0SURCVWxZam0wS015aVRhdUJuRFNnRDlYVjNhaW9LR2ZuemgxOCtPRnkzbHU0Z0ljZlhzVmVONVBDUG1laXNrclEycUVvSEdiSTRQNEVMUG13ZHJUUFFTUllYMU9qNTgxNzQyQ3cxcHFxcWlwT08rMjAxTVE5WFpudzI5TUg4dVB2NGE3VHdVVmpNTEIzT3g1L0VSb2JiYVFSQWpUTlJGaXliamU3RGtSMU9CZWhFT1FXRll3WWNGTC9lWit0L2hoWEcvNjAreUFobVV3YVE5S2VrdUowYVJzZEhwMmVTaG1KMGdJd01iU0ZRU01hc0lYcERVVGRBQ2dES1V3TWFmdnZZeUNsZzRsQ2F3T0RCR0d4SDB0RXlNb1M1T2NFNmRLdW5HN3RTeWh2bFVWeDFsWHNxZG5Db3ZjWDhzUVRmMmJac21YczNyM1QrNUkxV05vaWtkZU9tQlhDRlJFaVRvS1RxOXJSdTZ5WW9BYU5pNUplSmZueXM4K3pmWE10ams4TVlSb21GMTk4TWNYRnhlTHcwVVc2QVIydFNmelI5MERDSTZBcUxjNmhTL3N5ZGl6ZlJWd3BURE5Bd25IWlhMdVR0UnUzVTFKZENsb1REZ1htRHhzMmxHZWUvRytjbVBNVlBjem5lSTYwYkRZNXpGVUNFakliaGNUUUVIQ2pXSTd0YmNINk16WkhDNlJoWVFwTmJrYVlGcVhsbEZiMVl2Q1kweWpyMHBIaWxrV0VJaUgyN0d4bTNacmRMSGhoRFF0Zm44UDZSUy9pMkRHZkxWYVR6SEc5M0UzNkhoYWtzc21MR0l3WTBwZnNrQlNHRUdqcGFYOXRyNjNWeno3ekxMYnQrTHF2Z3RMU1VyNzczZTkrWTAzRGI5aUF2TG1ZQ1dTWWxqanQ1Qjc2blk5ZklTRXlQS1VzYWRLY2NQaGc1WHBPNmw1K2VsRHErVUlyK3ZicFEzRnhDeG8zYi90WE0vckRRcCtud0NPd2NVVUlxUlZCRlNkVEh5Q1RSaXdkd3doWkZCWG1VOWErUFoyNzlhQnZyNTVVZDYwaUs3OEZiamlYZGJ1YVdMdDFOL1BmK29pYXJYdllzU3VCblRCQko5aSt1d0hiOGFocXBDSDlhYndYWmd6REkxMEhEejhrM0VhcTJwYlRwMnNKbHQ0T3dYZ0FBQ0FBU1VSQlZDK2NtelQzVjE1NWhjOCsrK3dRNFpSenp6Mlg4dkp5d1RGMGpxZ0JwUk1lSlFtUnBIS0pTSmRlSGRwUVZwVEYyajBPQ1JWQUNJRXJBaXhhc1lGeDV6bnpXbWRZUXJvMnBhVWxvbS8vZnJwbVMyMktidmNMeDI5cFpYT1NIVmI2T0JxTjhEbXFFMWdpVGtBM0VITDNFcEl1V1FGTmFVNklIaFZkK2Q0WkhlblJzWndPbFdWa1p1ZVNVTEJ4M1RyKzhZOS84TTdDWlN4YnQ1MkNUc09vZC9Kd1RJVXRRTW9RaUJpR2FFQnpBRkFlSFo1S0dvOFhERjNsZXJNeklRbTROa0dhT1h0NE5Ya1JRMGp0b3BWSG9GVlhWN2ZrNmFlZlR1M2tDeUVvTGk1bTdOaXhSNXgxOVpqelFPbnF3Um9UN2RxWU9MUXR5aHpScDNQYmVadmZYWWV0Z3lBMUNXVlFzN09CVlRXN2FkVzlCTk9RR09FUUkwWjhoNzgrLzdJL3dqaFl0aC9jNmRJSExjY0hxYWNNMlA5N1lRaE1TNUNkWlZGV0VLQ2d0SVRxOW5sMExHOUJlZHQyRk9ZRUNVaEJkUDgrYWpldDR5OXpubWJwMG1WOHNIUUZ1M1p1SnhHTGt0QUJqSndTWk5zRURSbEJYT25obWt4dGVwTGRiaFJUV2NRMUtjK1QzcS95VnJ4dEREZEJVQ1hvVVZITzRPcDJCQTJOY1AzMDNIV1pOMjllbjZWTGx4N3lzSXdlUFpydTNidUxMK284SDgyODU2Z2JVTEpYc1hMMU90Mnhva1NZMGlYRFVQT0hEK3pCcSsrdUlpcUNPRXFnakFEN2JZZDNsNnhsV0xmV0tSRDUwRk9IMHFKRk1Uc1Qrbjl1Ny9nWGFSb0dTSk9XTFlzcGE5T2FMbDJyNk4xL0FKMTY5cWROeHk2WUdRR0Uwa1NiYlRadlA4RDd5OWF6ZHRWeTNuajJNV3BXTGtKSG0vMVY1d0JvMXlmemxHaFhnT0dpekdhdmM2N0RvQUlZMmtScEI2MGlYL29UQ3FFd3BDWkR1SXc1YlNENVdhWVFPZ0VpaU9zNk5FZWIrY01mL2tBMEdrMDlCRVZGUlZ4NTVaVUVBb0Z2ekZDK0VRUHk0cjZuRk5QUTJGUXg2MmMvWitiMG0zWG5EaVhDMEE2ZDI3V2txcklOaXovYmpaQVdqamFRSXNqaVphdlo5OTJCT2pOTENnUzBLV3NqK3A5MGtuN2huVFZwYWJIK29pRUQ0TzJVajd2a1ltNjU5UmJhbExZa0VnbVNzRzMyTkNiWVVydWR6elpzWmZuNnZheXEyY1cyM2Mwa2JCY3JYazlOelc3Y21Fc0FTT2kwWFRibHEvd0N3cEVFN1FEQ2tDU0VpU3ZBTm0wTUVjTzE0cC96c3gwMGZLRTFVdGxVbFpjeXFFOUhER3lrNzBRTncyVCsvUGw2OGVMRmg1VG9ZOGFNb2JxNldpVHpvVys2OTNORURlanpQcGdRZ2s5V3IxNy8xaHV2OHU0cEo5T3B3emlFZ01JdzR0UitIZlJINjJ0eFpkZ2ZFVUR0bmdNcytyU1dnbjdsQkZ3WHkxQ01HbjBHTDcrM0NRaDRSRlRTUldvVDZRWTl1UUh0NEMzZktReERjTkpKL1psMit6VGFsVmZ3eWNxUFdmVCtBdDVkdkp3MXRVMklsbDNablFpVDBCYXVzSEIxQnBhMnlUR2FQUUZicmJHVFV1S09neERLc3gzdExVMXFhZUg2UURKRENseWhVRUlqaEl0d1ZkcUVLSjF0elF1bjBwU0V6U2lqaDNhaEpDY29wQTk1VmRxbHVUbjZUOTRuSnllSDhlUEhFNGxFdnZTT3YrdzdPTDUyNHovSEN6bU93L1BQUDBmZG5sMjg4T0lMYU9rcDlJUU1HSDVTVjRxeVRMVGpvdjBkOGJpMitQdjdLMmwwcVVNS3BOQU1IRHlZRnExTGsxSE5SejE2cXNkSUFmS2dKbGFyMWkyWk9mTkhWTFFyRjV1M2JPSHE4VmN6ZGVyTlBQWG5wMW56NldicVl5YjFib1NZakpBUUFWeGhIWnpJKzk1QTRYTVVKcVdaa3ZwUkdwVGZCb0Ewd1JSQWFvbFU2VHlOaDRtOElIQmRUY2YyNVp3eXNEZW1BS0VPcWliT256OVBweE1tQ0NFNDc3eno2Tm16cHpoYWZEL0hyQUZ0M0xnUmhHREJndmRadDM2OU5xWEFFb3JTdk9ERVliM2FFNWFlYXJFdGdpUkVCc3MrMmNpbTdmdnlIRi91dXJTMGpSZzhkRENHcWYweXk4UVZCcTZRMkZyaWFBL1VucEdSd2MwMy81Q0JKdzhVYU0yVFR6N0pxbFdyaU1maTNocXo2MkE3RG9aaGZpTVhucEVSWWZ6NDhiUm8wVUpJS1RFTVR4eXZ2cjUreWV6WnMybHViazQxWW91TGk1azBhUktXWlIxemhuTlVEQ2lkZHYrODg4NGpIQXF5LzhCK1huanBaVi9CMkNhc0V3K2ZNN1FYMldZQ2lZUFdCcllJc2F2QjRmMlAxMk1qMGNMQU1pMUdqenFWakxEaGt6TUZmR0lDcjhKQ2FHVEE0c0p4bDNMNVpaZmRZeGdHR3pkczBvOCsraWdKMi9ZOWk4SXdMWXpQYmNTSlExYWRreG9mL3ZBanJiTjk2RWhGZitWNzhIN3QxNjgvWjUxMTFpRnM4d0J6NTg3dHMyalJvaFJrd3pBTXhvMGJSMVZWMWJGcE9VZktnQTVWTEQ3b2lrOFpNb1QyRlJVSUFmL3Z1UmRvYUdxZTQvRkVRNWV5d29sOU83Y2g0RFlnY1hHRVJaTmo4ZjVIYTZtUE9scGhZUXJvMWFNRDVTVUZXRnA1WW5JQ0VEYkNhY0pRY1U3cVc4MjBtMzlJVm1ibU5MVGc4Y2VmWU52V3JkN1BvZzdPc3BLN1Y0ZHlraDljby9BSW13VFNrRWpEQUY5YVVwckd3Y0cvVW40YjRYKzRZT25ET0F5RFNDVENoQWtUS0N3c0ZPbThQanQzN3RSLy9PTWZhV2hvU04xWlpXVWw0OGFOSXh3T3AzcG9YL1k2L0R0SWZ4MjNIaWk1dXkybHBMQ29VSnh6MW1nTUlmaGt6YWU4OS80SEY3cCtZUk1KR2crUEh0YUxIS3VSb0V4NFNhV1J3U2MxTzFpOXJoYmI5YllaV3VhRjcrblhvd09HU21BaVBEQzdUcEJwSkdpVkYyYkdyVGZTcmsxTEliU2lwbWFEL3N2VHo2QmM5eERHMUM5eEV4NnhWUm84d2pSTk1qSXp5Y3JPUWhwR21vMGR5aFQvNVFZa1V4c213NFlOWS9UbzBlTHdIdGxMTDczRTRzV0xVLzgyR0F4eTFWVlhVVlZWSlZ6WFBXYkQxeEV2NDVPQUorLzNGdDhiZHduLzlkaWYyRm0zbnlmLzhpekRUejBGUTdtWVZvRHFxaEs2dHkvaS9jOGEwRHFNcXczMk43bThzMmcxZzZwS0NacUtvQ0dtRGV6YjVkWlgzMTNIMWpvSE15Q1FLa0cyNVhEWmhTUHAxYVdzMHNBVDZ2M2pZMzlrdzhaTmFWdXJCenZDNHZQR0xHaE1RMUpXV2tyZlU3dHo2cUErbEZWMElDTTdtdzAxYTFtK2JCbTc2dU9zMkxRZk94U2kwWDg0OVA4UXlKSVBVVUZCQVRkOS8vdEVJdUdVTWJ1dXkrYk5tL1hzMmJPSnhXS3B1NnF1cnVhaWl5N0NOTTFEaHRMSG9pRWQ4VEwrNExRWXl0dDNGS05HamRTUC92Y1R2RGwvSHF0V3JkRmVoYUZvbFIwVVl3YjMxcXRxWHFNaDBZUXlzNGpaRVJZc3IySDlubWJkdlNSREJISHBYbFpJVlhraDIvYlZnckFJeVRobkRlN0dtRk02RVJEVUtGZXhhc1VxUFdmT014NnNUd2hmM3NBQjZZbVc0QWFScHNJUkJxYmpraTF0MnBka2N1YlFmaFFGaHhLSk45QlV2NHRseXo2aW9MZ0ZMejczREcvOTdlOFV0S3lnYmZkVHFPemJodzM3SFRiVnJDV2hMV0prK0ZXZ1Y3b25rU1lwWkNTQ2M4ODlqNEdEQmdyWGRURk5NMFVXL3Zqamo3Tnk1Y3FVa1dSa1pIRGpqVGRTV2xyNlR4UDNyeHFPanVaay9vaVhJdWtmeHJBQ1hEMWhBazg5L1RTN2QreGd6cHhuNk5xMUc1WWxDUXNZMUtzVEhkNWNSTjJtT0ZFZHdSWWh0dTdiejlzZnI2ZGpTVFZCcGNnTENERnNRSlZldUdvOU1UZEt2NjV0dWV5Y3dXUmJockNFaDRkKzRzOVBzbTNidGhSanJOQ0dYKzU3cEROQ0IwRW9wRkRraE1PY1ZGVkpWWGtXc2FZZFRMdDlPdnMyYnlMUmRBQU1TVEFjNXJKeFl6RU1nNTNidDFPNzd4M3F3cVVVZGU1TmRZL09mTHArTS9GbXI0SjBrYW1kdGZRY3FGMjdjcTY3N2xvczB6eGtETE5telJyOStPT1BINUlyamhvMWlqUE9PS1B5NjVxNEgybEU0bEhIQlhUdjNsMmNlZWFadUs3TGM4ODl4NVl0VzVLckJoUmtoeXBIRHorWmlJNWpLUWV3aUxzUjNseTRtcjJOdG5ZMVdGTFFyMHNabFlWQjJ1ZEpyajcvVkVvTE1rVUFqWFpzVmkxZnJwOTcvbm5QR3dpUjRpdEtOZk9FVHltSEltVFk5T2xkUllNZFpkdUJLSysrdVlUZGU1dUlOelppNGZWMzRyRVk3Nzc3SG1lTUdJNXBDb1J3aUNkaXJGbTNnUzIxTytqWHJ3OUYyV0VzYkpBQ1YxaUh4RWpUTkxuODhzdm8xcTJyMElCU0xrb3BFb2tFRHp6d2dOZmU4SE9sMXExYmMrT05ONUtWbFZYelRRTGxqMWtEU3U0elRabzBpWEE0ek1hTkczbjY2YWR4WFFlSlEwanFtaUY5cXFncXpTT2s0aGhJRWlMTTZrMTFMRnExRlcyWUdMaVVGMldJNy9Scno4VHpoekdnUTNGbEVCZXBiYlN5ZWV4UGo3R3RkcnZmSnRDSERUNlN1b1F1a2ppOXE5cHdZSGNOaURock5teW10aTRLcm9VbEJWS29aTDNHbGkxYm1EUjVFcmZjY2hQZHVuWWdKT0tZYmhQMXU3YXhmK2RtTGpsckFObXlpWkN3LzRseHZycTZtaXV1dUFMRE1KRitlUTd3OXR0djYrZWZmejdsSVF6RDRLcXJycUpmdjM2QzQrZ2NWUU9TVW1LYUp2Mzc5MDk1b1VjZWVZVHQyN2RycFRRQlExT1NFeEFYalJ4RUprMElGY05Cc2k4UllPNjdxem1RMEV1MGdMRFVYSEgrR2ZXakJ2VVlrUzNkR3FGZEJMQnMyWEw5ekxQUGtiQnRsSExScnUydCtLUTFjSlFCaG1xbVkxa2VXYnFCb2xDTWM4L3N3OTZkbTdDTUFGcGJQdXpDVDY2bDVBZFRwM0xxOEZPWmNmdXR2UHJpSE82ODZUODRwWE14bmRvVTBLWmxQaTF6QW93ZTNKT1FPb0FoRWlBbGhqVEp5OHZqaHovOElhMWF0UkpLS2IvVkpOaTFhNWYrOWE5L3paNDllMUlWM2NDQkF4ay9mbnpLd1A0dklleGJVOFovMFFjTGg4Tk1tRENCbkp3Y3RtN2R5aU9QUEFyU1FMa3Vwblk1cFU4SHVsVVVFYUFacEkxdGhYaC8xUlpXck4vVngxRWFwUjB5Z2pJL3l4THpoV3VqaEVIVTFqejIrRlBzM0YzbjVUbkpEeWNPcmJzTUowcHV5S1ZyZVQ0VitTR21UYnlBWVQyS0dOYTdnckFiOHdpL1Rla3pmMGpHbkhVMms2Wk1RUUNHb1NuSURUTnFTRmQrOXNQTDZOMnpLKzkvdUp6ZlB6cUhnb0lDOHJNeWtLN3RDU1pveGRsbm44M0lrU09GWVJnK0ZSMGtFZ25tekpuRGUrKzlsOHA3aW9xS21EcDFLaVVsSlNJZC9uTENBMzFCWjFwcnplREJnOFhJa1NNQmVQenh4L2xzN1hxdE5KZzRGR1VhNHR5Ukp4R3g0a2dSeFJHQytvVEZhMjh0SnVaU2dUUkk0bXUwbExqQzVMTk5XL1hyYjc0TE11Q3ZPUi8yNFRTZ0ZRRnNPcFRtTS9LVWFzYVBIVWxaYnBoOHcrWFNrU2ZUcWJTQXNyTFdkT2hTUmMvZTFZd2NPWklmLytUSFpHUmxlWTFIN1dBSUY5T0preHVTYk5tNWw2Mk5zQ01lNEkzM2xsTFdvUW9kQ0tLQThyWnRtVHAxS3VGd09OWHprUUpXci81RS8rNTN2eU1XaXlHRUo4UTdkdXhZVGp2dHRKVHhIT25FOTdoT29zSHJ5b1pDSVNaTm1rUmhZU0cxdGJYTWZ2aGhUOGxRYVFKb1R1bmRqajVkMm1EcUdGbzV1RWplVzE3RHFzMzE2MTB0TUlYWDExSENvaUdoNjE1OFl3RUg0dmdibzU2OXVNbnRMYUg4MXJNQktrNjNEcVcweXNxaVJYWVlTeWNJR0pMaS9FdzZWYlNsc3FLQ3JOd0NsQkRVMWRmUjBOaVE2aGhyNVpYb2xuUlFkZ3d6RkNJdVBBMnoyaDE3c1VJUkJKSnd5T0xHRzYrblU2ZE9JcGwzU1NtSnhxSTg4TUQ5Yk5pd0llV05xNnVydWVHR0c3QXNDOU0wdjVZUTlxMGJaYVRING5RTnJlcnFhbkh4eFJmanVpNS9lZXJQTEZxNFVBc0NTRmRURkxiRXhTTlBwa1hFSXFUaUtPMnd0VkV3ZCtGblJCMHh4L0pucW5Fa0s5ZnR5SHRuOFJvY053akNRR2h2YWRoSk1tRUkxL3VvMmlRY2xBUXRsK2krQmdMQ1Jab0dEYTVnM29KVnZQSFdlN3oxNWxzc2VIY2hTNVo4eUtMRjd6UHJycnRvamtWeHRVWkkwMU5wRlJLa1Jya3V3blk5WW5OSEUyL1lUM0ZoTnFlY09vaExMaDFiNzNXZ2RZcGs2c1VYWDlCejVzeEpRWHh6YzNPWk9YTW1iZHEwRWVrTGd1bjluNjh5dXZpMzgwREpZMWtXMTE1N0xXVmxaZXplczRmZjN2OEErL2NmV09LNkRnWXVmYnEwWmxqL2pvUkVERzFZeEZ5RHR4YXZaTzNXZlJjbWxBZENkeDNGUDk3NWdLWjR3bHZEU1VKSmhSZmlwUElnRnA0djhvVHJOQzVtd0JQeGRaRHNib2p5M09zTGlSRUdhU0h4d28zcktsNS83VFdlZXVwSkRHbmdLSENWWUw5anNkY0pFQWtHQ1FrYld3dGlab1JZUEVhdkxoWGNjY2NNOHZMeTh0UEQwZnIxNi9YUGYvNXpvdEZvU3RmcmhodHVZT2pRb1VJcHhmRlN0aDlUQmlTRW9GMjdkbUxLbENrWWhzSDgrZk41NmVWWCtuaE9JMEZPUUlnTFQrOU5SWEhFbTlRYkFiYlZ4NWkzWUJYTnJuR05RaUNsUzV1eTF0NUdnd1pTVDNKeTlWaGdJSkErK1pOR0l3eEpPQ2RDQW91RU1QbmJvclZzMk5OTTNJaWdsYmNYcXBUM2I3WGo4T3RmL0lJTkd6Znl3UWNmOHNoLy80WGYvR2t1MDM3elYreUVRMzdFUkFod3BFVkd5R0xxcFArZ3VtY1BrVDV0ajBhalBQREFBNnhjdVRMMTJjODg4MHl1dmZaYURNUEFOTTNqSnVjNUpwTG9RN3JUaHNFbGwxekN3Sk5Qb3FtaGtRY2VlSkF0VzdkcEtSU1d0dWxhVmlET0g5R2ZpRzVFYUVXemEvRzM5MWV5ZHZ2KzJZNHdrTkxnNUg2ZEtXMVZoQ2xkVUU3YXFtcHE1ZkRnZnBpUWFEUEVpcysyOCt5OEQzajc0NDBzWEw2UnFMSkl1TjUycXRhdXh6U2tOVm9wbWhvYStkVXZmc1haNTF6QTFKdnY0SmxYM21IaHlscFdmN3FCM3QwNkVaRnhna1RwVUpwUHo4N3RSRkp1TWduTmVPT05OL1JUVHoyVitzd2RPM1prK3ZUcEZCY1hpK1FBOWZQMHZRNVBBZEpmeDBvNGs5K2s5MGxlVW5GeGtaajZnNXZJeTh0bCtZcmwvT2FCQjNDMVF1SVFsQzVuRGUxR3Y4cDhnanFPRWdFMjdXN205ZmRXMHFUa0hLU2tKRCt6Y3RTcEE1QWtRQ2ZBbDFzZ3hRaXJVNDFFQndzcnM0Qi9MRm5Edlg5OGxabS9lNTRXNVoySmhETXhoY2RmaUpTNDJnTVdDc1BnT3lORzhNb3JjNm1yYjhCMkpMWU80WWdNdHUxcHBqbmF5UEMrbFZ3MHRBc1hqeG5pY3g2SzFNT3hZY01HZmUrOTk3SnYzejZVVW1SbFpYSGJiYmRSWFYwdHZ1NjcvTGNMWVVtb2gxS2E0Y09HaWU5ZGVpbENTdjc0eDhkNTQyOS8wd25IcmhDNEZHZElNV1hzNmVRRlhLUXdpQkhpcGI4dFpQMzIrZ3NkRFJsQzEzeG5jQzg2bExYQVUzNU8zU3hLZ0N0OFNYa3pnS3NNOWpZcU51K09zNHRpTmpjR1dMQmtGWDE3OXlTSURUaTRTcU45K0dwV1ZnYVJTSVJ0MjdZalpRQzBpU0VNbEMyd3pTeFdyZjZFODA3cHlwM2poNHQyQlVFaGZLU2oxcHJHeGtidXZmZGVsaTVkaXVNNEJBSUJicnJwSnM0Ly8zeHhQSlhxMzVnQmZkbVRrYzYySmFVa0ZBNHplY3BrdW5idFJsUERBV2JOdXBzZDIzZXQxOXBUaTY5dTMwSmNlT2JKQkdsR1M4bmVxT2E1dWU4UnQvVVNnVXRCYm9hNDdPTHZZaGsrZmxCSXZ3SlRCK2RncmlidUNENWR0NUZtVzJDYkVXSXl6T2J0ZTlpN2V5OXRTMW9pcEhzd2U1SUdBd2NPNU8xLy9BTXBoTGVaWVhpQ2VvWnA0VGcyN2RvVTA3MWRMaUhWaEtFVGFLMVRrL2Jubm50T1AvSEVFeWlsc0N5TE1XUEdNR1hLbEltQlFPQVFsY0d2cy9JOTdnM284K0FjNlEzRTlKSStPZHFRVW9LMGFOZXVVc3k0WlNyWkdXR1dMZjJJKysrZlRhTFpCaTBKQlF3dUdONlZBWjB5TVVTY1pySjRlOUVtVm4yMnUwOU1HR2loK082NUkrbmRxeXRhQ2o4UFVsNVY1Z1BmVVJJaEREWnUza3h1Zmc0bURSZzQyTXJpcy9WYjZGWGRsVnR2dnA2WnMzN0V6Mzl4THcvKzdrR3V1dW9xNnZiczhVbWtiTFN3U2ZnaXd0bHlQMmVlMUk3aTNKQ1FWaEF0REV6Zk1GYXZYcTFuelpxVmFoaFdWMWN6YTlZczh2THlIajVjKy9UL09xNzR0NjNDUHU4cEdqVnFsTGo4OHN0eFhjV2YvdlFuNXM2ZHE1WDJ5S1ZLQzdQRTk4NFpUb3NzQTBzb3RoK0k4ZGQ1UzlnZmRiVENwS2lvcGJodTRuVmtaV1Q0QkUvRzRkWU5TdFBRMEV3a0k1T0N6QWhCYldNcUcyMUh5Y3NPOFAwYnJtSGFMVk81L3ZySlhINzVGWXdhT1pLeFl5L3ljaHJwRFdLRElrR0dPa0JseTJ5R0R1aUJtZHpRRUI0QWJPL2V2WFYzM25sbmF0TGV0bTFiN3IzM1h0cTFheWY0bHAxanhvQ1NzTTlnTU1ndHQ5eENuejU5Mkxkdkg3Tm16ZUxUTlo5cVEwcFA2cWxiV2YwbFovWW5JcVBFUllBM1A5N0FCeXMzNFFpQnhtVE02TE1aTm1RSUJnTGhxTlNLVFdvbUx5Vnh4MlhWSit2bzA3VWJJZVVTVkRZaFlkTzJkVDZoZ0pkcUd4SU1RMkJhRmpQdXVJTisvZnVDVmxnR1pNazRuVnNHdU9UTWdaUVhaVmNhMm9QTmFnU056VkVlZlBEQnZOZGVleTIxV1hIMzNYY3pZTUFBOFUzeU9YOHJEZWh3TjV5RWNMWnUzVnJjZGRkZHRHelprbFdyVmpIckp6K2hmdS9lT2xPN1pFbzNmK3lJUGd6cTNoWXBYUFpHSFo1NjVUMTJOTVMxTFNTNXVZVmkwcVRyS016TFErSVRPZ2hTalVSdmk4T2lycjZCMmkyMUREOTFLQjNibDFOWjBZYlMwa0pQTmRsZkZSVm9sSUtjdkh6dXZ2dW5qQjR6aWxHanorVDBrN3R6K1ZtRE9QdTBYaE9EV3RYZzQ2N3RoTTBiYjh6VER6NzRJRnByc3JLeW1ENTlPdWVjYzQ2d0xPdHp3OWFYbGVQSFl1ZjVxSTR5L2k5OW9rR0RCb21iYnJxSmNEak15eSsrd01NUFBaam5PRGFtMExTSUlLNGRleG9kVzJjZ2NWaXhZVGV2dnJPR0JGeWpEWU5CZzRkVW5uUHV1WmlXaVU4STVKZjEycHUzQ1JOdEJGbS9hUnNidHRUU3MwOWYycFNYcy9LVEdyWnNxU1dSOEpDTlNiT3JyZDNCN3gvNlBZc1d2TWY4VjE1ZzY3cVZET2plaGlEcVlST05GQkxsYWo3NVpJMis4ODcvWk4rK2ZVZ3BtVEpsQ2xkZWVhV3dMSXZqdWR0OFhJU3d3MDhnRU9ES0s2KzhaK3pZc1dqbDh1RDlEL0RTcTNPMVZpN1NqZEd0SkZkY2UrRndpaklOOXJzbXo4OTdqMDA3RDh5Mk5ZUXlNbXNtVGJtZTFpVWwvdE1yVXVNTno1NE1GQVp4R1dERnVrMjg5dmE3Tk5xS2R4Y3U0YUtMcjJEU3BKdDQvYlUzcUszZHh0YXRXN2g2d2pVOC84Skw3TjJ6aDV6TURDWmRjd1V0QzNPRjVkK2VjcUcrL2tEZDlOdHVZODNxMVFTRFFjYVBIOC9OTjk4c3d1RndDdlB6YlR6SDdLZlNXcE9kblQxdCt2VHBET2pYbC9xNk9uNzBvNWtzKzNpNU5nVUVkSXdSZmN0SFhIcjJNSXlneWRaZGRUejcwdHRFWFgyTnF4VlZuVHVLU1pNbkViQUNmZ2hMK1RtZmFOekFsaWEyWVZHN3U1NEZTNVlSZFNVREJwOUtZMU9DdSsrK2w4bVRKelA3NGYvaWd3OCtvTHhkT1NQUC9BNi8vT1U5OU94ZUpReWZoazRJaWRMdzA3dC9sdmYzdjgvSE5BVGp4bzNqUnovNjBUTVpHUmtZaG5Hb2dQQUpBL3A2UmhsZmRhZXF2THhjL09JM3Y2Vk51d3JXcmw3TmpGdHZZOVBtSFZyS0lGbFN6Ny84OUU1Y1BLUUVVd1I1YWVGVzVpL2ZNanNxRTJnamV2cFY0NjhjY2NxcGc1Q0dJR0FhWGs2a0JVSWZaSmFYV2dKQkdoSWhGcSt1NWZHblh1RER4WXZJeWdoVFZGQ0VHMjFtNUJraktDbHJ5NWh6eitQY01TTkZFQmRUS3d3SnJtUHoyR09QNm9jZi9uMXFtM1RXckZuMU9UazVGeVhEZWZybzRjdnl3TVB2NTFncDFZOUxENVR1OG52MTZpMSsrY3Rma1orZnp6dHZ2OE5QZm5JWDlmdjIvMHdLUVc3UUVsZWZld1pEZXJlbnVYa3ZjMTU0ZzlvNnBWMlpPVCtVRVp4Lys0d1pGQllXNGpPMStHTXl6Y0ZoSzZDRngxMW9tTGhLczNIakJ0NTg4eTJlZU9JSkhucm9kL3oxcjM4bFA3K0FDeTY0WUFSb2ozdEllOXV1OCtmUDE3Tm16Y0p4SEM2ODhFTHV1dXN1Y25Oejg0LzE1UGZmSW9TbEsvQU5IejVjM0hISEhXUmtaUEQwMDAvejYxLy8rdFpvTkVwQVNOcG1SOFRreTRaVDNiVUZhOVp0NGErdkxxUFJOcGRnbVBUcDAwOU12UFphVE92Z3hGdWd2ZW44b2U5NHNHT05sMFFMSVhBY2h3RURCbkRQUGZlUW1aazVQeWt0SUlSZ3hZb1ZldnIwNmV6WnM0ZnZmZTk3M0h2dnZmV0ZoWVVpMldYK05vd3F2dkZPOU5kaFJNbiswT1dYWHk1dXZQRkdUTlBrL3Z2djU0a25udEN1N1JCUWlnNUZFVEg1aXJOb1cxTEM2My8vbUNVcnR2V0phMVZoQm9OTW1IZ2RnMDg1SmJYbUk3UkNIa1l1cmJWZnFybU9wN1hvazBsVlZGVHcwRU1QVVZKU2NzaWkzN1p0Mi9RUGZ2QUQxcTVkeStXWFg4N1BmLzd6ZXdvS0N2TFR1OHpmbG5uWGNlbUIwbk9CSktsMk9Cem0rOS8vdnBnNGNTTHhlSnc3Nzd5VEYxNTRYaXZYSnVqRzZGYVN0L1FIMTExRVZuYUFKLzd5UEx2MlJOYzdRbEJZWENSKzhwTzdLQ2t0Uld2bENaa29ONTJNdzk5OTkyQ09Ra2lrRUxSczJaTFpzMmZUdVhObmtWeFJUZzVKcDA2ZHlySmx5N2poaGh1NCsrNjc3OG5MeTV1V0RMMkhreUg4SzMyeFl3bXljVndhME9FWG05UkR6OHpNWlByMDZTTW1USmhBZlgwOVA1eDJDeS8vN1hXdFhaZGNvZnBXVitUZWM5UGtjN0RkWnA3NTZ6d2MyMFZyUVhWMXRaaHg1MzhTQ0FYUnlrWGlWVkhwNytFQjM3MFFscHVieTMzMzNjZmd3WU5GdWpkcGFtcXF1TzIyMi9SYmI3M0ZIWGZjd1l3Wk0wVFNlUDRkUE01eGFVREpMblZ5eXAyZG5UMS81c3laSXlaTW1NQ09YVHY1NFl6cExGandnVGExSmtKOFd0ZjJoVXk1N2pKcWErdFk4UDVTVFpKdjU1SUx4Ymh4bDJCSUVHazc3Q240cXhCb3BjbklpUERUbi82VWtTTkhpblF2RUkxR3VlKysrOWEvOXRwci9PcFh2K0w2NjY4WFNlTExZNDI3OE4raUUvMVZRZVBKUHpOTk16WHV5TTdPbmo5anhneXV1ZnBxdHE2dDRjYWJwckprNlVjNmdFR2VFS0pYMjJKeDQ5WG44ZUdxZGF6YnVGVXJPMGJFY0xoNTBxWDA3ZG9XU3pkaUNZRVdOcTdaakRRY0xHMFFOc1BjTVdNYWwxeDZZV1VTSmFpVXduVmQvdkNIUCtoWFhubUYyYk5uYzlGRkY0bmt6NU5rR3Z0WFpsMUhJa3dkVFFEK2NlT0IwaThqK2FUbjVlV0ptVCtlV1RuMXBoOVFVMVBEZFZPdVorV0sxZHBVRUJhYXRxM3p4RVhuajJiTGxpM0VZczF6aEFHRk9RRXgrWXJSZEd3VndZM3ZRMGlKcTAxczEwVVlEcE52bXN6NGF5ZFZtc0ZJVFpLZUx4NlA4OVJUVCttMzNucUxSeDU1aEtGRGg0cmtDczdoUEVFblBOQnhjcFJTQkFJQnNyS3lhbTYvL1hieDA1LytsSTBiTjNMVlZWZngwVWNmZVVRcnJrUHJnaXd4K09TK3dneUZMM0l4TUV5VHptM3pKOTU2MVNqYXRUU3czQmhoWlJHUmlndk9IOHlVNzErQ0ZRblhhSEd3N0gvOTlkZjFtalZyZVBUUlJ5ZDI2TkFoQlpqL3RzNjN2dlVHZExnYWtHRVlUSnc0VWZ6MnQ3K2xycTZPU1pNbXNYVHBVbTFJUVJBYktSeWtGY0NWQm1pWFRPRThQS1JycWJoeDNHbVVSMnp5NHZ1NTVQVGVqRDl2TUpsV3M5QnV3aCttd3VMRmk3VVFncGt6WjRxY25KeUhreFZoZXJYMTczek1iL0xOLzlXS0pUMmNwYk45WFhEQkJhSjE2OWI2OXR0djU3cnJydU9oaDM2bisvYnRLUXdrcnZMWVhpMEpobmF3Y0JuZHI1TVFUYTdldE8wQTR5NDhtZUpRVkpqRTZnZ0U4NVVMQnhvYXJ5a3JLK1BrazA4V3lYd292VU9lUHFvNDJ2ZnpWZURDSnp6US84S2dram5KNE1HRHhXT1BQVWIzN3QyNTVwcHJXTFI0cVFhSktTV1cxa2dGV2t2QUlxd1Zady90SnE2N2RMQW9EZ2tSVUFLcFF0NUNvQ0hJeXNwNnVGV3JWdDlLSU5nSkEvcWNCbHpTRzFWVVZJajc3cnV2OHVvSjEzRHQ1SnY0KzkvL29aMkVqVkNPUDZpd2NFUUFRd1lKU0VYUWpDRzFEVzRHV21WakU4Qk9VeGh5WGZlRXBSek5FSlpNTFArM1QrNVh6U2NPNXdCTUdrNXl3ME5yVFc1dWJzMlV5Vk5FMy80bjZkLzg2cGMwN0svWFo0MFpMU3hwb2JWQ0MwOFVWd3JERTVrekxaTDA4NFlRQ01ORStJbjYwZXJ2ZkYzdmNmajlIRmNVZCtseklPVnpLWC9SNjRzOHlmL21kYmdoSmQ5YisrUDMzajI3aTk4OStNQTlkZlg3ZVBIbFYzVTBGa01wMTVlMVZRZ2trZ0JhQzI4WFRHZ01yWkgrLzVlZTV4enZyK09ta1poc3ZIMFZVWkFqM2ZDU1VwS2RuVDN0eWl1dkZEMTY5R0RWcWxVNkZvdjkyNHdja2cveWticmZwU2lrelFBQUFGWkpSRUZVcnoyRXZmdnV1NGU0MFMvN290TC83a2lHaURScUdXSGJOblBuemlVU2lYeHJZYWFIRzVEV092VzluRGduem9sejRwdzRKODZKYytLY09DZk9pWFBpbkRnbnpvbHo0cHc0Sjg2SmMrSWM5ZlAvQVVUcDUrSk8yNWpNQUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTI2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2RvLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDc4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsL25vZGUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmFibGVJbnB1dCB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuaW1wb3J0IHsgQWN0dSB9IGZyb20gJy4uL21vZGVscy9BY3R1JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjdHVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3NpdGVVcmwgPSAnYXBpL2FjdHVzJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBnZXRBY3R1cygpOiBPYnNlcnZhYmxlPEFjdHVbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9zaXRlVXJsKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ0Vycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBleHRyYWN0RGF0YShyZXNwb25zZTogUmVzcG9uc2UpOiBBY3R1W10ge1xyXG4gICAgICAgIHZhciBkYXRhID0gPEFjdHVbXT5yZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGQuZGF0ZSA9IG5ldyBEYXRlKGQuZGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nRXJyb3IoZXJyb3I6IFJlc3BvbnNlLCBjYXVnaHQ6IE9ic2VydmFibGU8QWN0dVtdPik6IE9ic2VydmFibGVJbnB1dDxBY3R1W10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2FjdHVzLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmFibGVJbnB1dCB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICcuLi9tb2RlbHMvbWF0Y2gnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWF0Y2hTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3NpdGVVcmwgPSAnYXBpL21hdGNocyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgZ2V0TWF0Y2hzKCk6IE9ic2VydmFibGU8TWF0Y2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9zaXRlVXJsKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ0Vycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBleHRyYWN0RGF0YShyZXNwb25zZTogUmVzcG9uc2UpOiBNYXRjaFtdIHtcclxuICAgICAgICB2YXIgZGF0YSA9IDxNYXRjaFtdPnJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgZC5kYXRlID0gbmV3IERhdGUoZC5kYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dFcnJvcihlcnJvcjogUmVzcG9uc2UsIGNhdWdodDogT2JzZXJ2YWJsZTxNYXRjaFtdPik6IE9ic2VydmFibGVJbnB1dDxNYXRjaFtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9tYXRjaHMuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0IH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcbmltcG9ydCB7IENsYXNzZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvY2xhc3NlbWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSYW5rU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsID0gJ2FwaS9jbGFzc2VtZW50cydcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldENsYXNzZW1lbnRzKCk6IE9ic2VydmFibGU8Q2xhc3NlbWVudFtdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fc2l0ZVVybClcclxuICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ0Vycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlc3BvbnNlOiBSZXNwb25zZSk6IENsYXNzZW1lbnRbXSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSA8Q2xhc3NlbWVudFtdPnJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ0Vycm9yKGVycm9yOiBSZXNwb25zZSwgY2F1Z2h0OiBPYnNlcnZhYmxlPENsYXNzZW1lbnRbXT4pOiBPYnNlcnZhYmxlSW5wdXQ8Q2xhc3NlbWVudFtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvcmFua3Muc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG52YXIgc2VtdmVyID0gcmVxdWlyZSgnc2VtdmVyJyk7XG52YXIgX19jb3JlX18gPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgY29yZVZlcnNpb24gPSBfX2NvcmVfXyAmJiBfX2NvcmVfXy5WRVJTSU9OICYmIF9fY29yZV9fLlZFUlNJT04uZnVsbDtcblxuLy8gT25seSBwYXRjaCBpZiB5b3UncmUgb24gQW5ndWxhciA+PSAyLjEuMSBhbmQgPCB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIChpbmNsdWRpbmcgcHJlcmVsZWFzZSlcbmlmIChjb3JlVmVyc2lvbiAmJiBzZW12ZXIuc2F0aXNmaWVzKGNvcmVWZXJzaW9uLCAnXjIuMS4xJykpIHtcbiAgICB2YXIgX19jb21waWxlcl9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbiAgICB2YXIgX19jb3JlX3ByaXZhdGVfXyA9IF9fY29yZV9fLl9fY29yZV9wcml2YXRlX187XG5cbiAgICB2YXIgcGF0Y2ggPSBmYWxzZTtcbiAgICBpZiAoIV9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddKSB7XG4gICAgICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAgICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgfVxuXG4gICAgaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcbiAgICAgICAgcGF0Y2ggPSB0cnVlO1xuICAgICAgICBfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX191bml2ZXJzYWxfXyA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuICAgIGlmIChwYXRjaCkge1xuICAgICAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICAgICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgICAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlYW1QaXBlIH0gZnJvbSAnLi9maWx0ZXJzL3RlYW0nO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIENhcmRDb21wb25lbnQsXHJcbiAgICAgICAgQ2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICAgICAgUmFua0NvbXBvbmVudCxcclxuICAgICAgICBUZWFtUGlwZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBNYXRlcmlhbE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdjYWxlbmRhci86dGVhbScsIGNvbXBvbmVudDogQ2FsZW5kYXJDb21wb25lbnQsIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3JhbmsvOnRlYW0nLCBjb21wb25lbnQ6IFJhbmtDb21wb25lbnQsIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cclxuICAgICAgICBdKSxcclxuICAgICAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cclxuXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg4MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBwbGF0Zm9ybV9icm93c2VyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJyk7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGNvbXBpbGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xudmFyIEJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUyA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUywgU2hhcmVkU3R5bGVzSG9zdCA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLlNoYXJlZFN0eWxlc0hvc3QsIERvbVNoYXJlZFN0eWxlc0hvc3QgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21TaGFyZWRTdHlsZXNIb3N0LCBEb21Sb290UmVuZGVyZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21Sb290UmVuZGVyZXIsIERvbUV2ZW50c1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbUV2ZW50c1BsdWdpbiwgS2V5RXZlbnRzUGx1Z2luID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uS2V5RXZlbnRzUGx1Z2luLCBEb21BZGFwdGVyID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uRG9tQWRhcHRlciwgc2V0Um9vdERvbUFkYXB0ZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5zZXRSb290RG9tQWRhcHRlciwgZ2V0RE9NID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uZ2V0RE9NLCBIYW1tZXJHZXN0dXJlc1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkhhbW1lckdlc3R1cmVzUGx1Z2luO1xuZXhwb3J0cy5CUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlMgPSBCUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlM7XG5leHBvcnRzLlNoYXJlZFN0eWxlc0hvc3QgPSBTaGFyZWRTdHlsZXNIb3N0O1xuZXhwb3J0cy5Eb21TaGFyZWRTdHlsZXNIb3N0ID0gRG9tU2hhcmVkU3R5bGVzSG9zdDtcbmV4cG9ydHMuRG9tUm9vdFJlbmRlcmVyID0gRG9tUm9vdFJlbmRlcmVyO1xuZXhwb3J0cy5Eb21FdmVudHNQbHVnaW4gPSBEb21FdmVudHNQbHVnaW47XG5leHBvcnRzLktleUV2ZW50c1BsdWdpbiA9IEtleUV2ZW50c1BsdWdpbjtcbmV4cG9ydHMuRG9tQWRhcHRlciA9IERvbUFkYXB0ZXI7XG5leHBvcnRzLnNldFJvb3REb21BZGFwdGVyID0gc2V0Um9vdERvbUFkYXB0ZXI7XG5leHBvcnRzLkhhbW1lckdlc3R1cmVzUGx1Z2luID0gSGFtbWVyR2VzdHVyZXNQbHVnaW47XG52YXIgVmlld1V0aWxzID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzLCBBbmltYXRpb25LZXlmcmFtZSA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvbktleWZyYW1lLCBBbmltYXRpb25QbGF5ZXIgPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5BbmltYXRpb25QbGF5ZXIsIEFuaW1hdGlvblN0eWxlcyA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvblN0eWxlcywgUmVuZGVyRGVidWdJbmZvID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uUmVuZGVyRGVidWdJbmZvO1xuZXhwb3J0cy5WaWV3VXRpbHMgPSBWaWV3VXRpbHM7XG5leHBvcnRzLkFuaW1hdGlvbktleWZyYW1lID0gQW5pbWF0aW9uS2V5ZnJhbWU7XG5leHBvcnRzLkFuaW1hdGlvblBsYXllciA9IEFuaW1hdGlvblBsYXllcjtcbmV4cG9ydHMuQW5pbWF0aW9uU3R5bGVzID0gQW5pbWF0aW9uU3R5bGVzO1xuZXhwb3J0cy5SZW5kZXJEZWJ1Z0luZm8gPSBSZW5kZXJEZWJ1Z0luZm87XG52YXIgU2VsZWN0b3JNYXRjaGVyID0gY29tcGlsZXJfMS5fX2NvbXBpbGVyX3ByaXZhdGVfXy5TZWxlY3Rvck1hdGNoZXIsIENzc1NlbGVjdG9yID0gY29tcGlsZXJfMS5fX2NvbXBpbGVyX3ByaXZhdGVfXy5Dc3NTZWxlY3RvcjtcbmV4cG9ydHMuU2VsZWN0b3JNYXRjaGVyID0gU2VsZWN0b3JNYXRjaGVyO1xuZXhwb3J0cy5Dc3NTZWxlY3RvciA9IENzc1NlbGVjdG9yO1xudmFyIF9fZW1wdHkgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX19lbXB0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18uanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3R1U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXRjaHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmtTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmFua3Muc2VydmljZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbQWN0dVNlcnZpY2UsIE1hdGNoU2VydmljZSwgUmFua1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJy4uLy4uL21vZGVscy9tYXRjaCc7XHJcbmltcG9ydCB7IE1hdGNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21hdGNocy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYWxlbmRhcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9jYWxlbmRhci5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIG1hdGNoczogTWF0Y2hbXTtcclxuICAgIHByaXZhdGUgdGVhbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgbmF2TGlua3MgPSBbe1xyXG4gICAgICAgICAgICBsaW5rOiAnL2NhbGVuZGFyL2VxdWlwZTEnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0VxdWlwZTEnXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxpbms6ICcvY2FsZW5kYXIvZXF1aXBlMicsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXF1aXBlMidcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgbGluazogJy9jYWxlbmRhci9lcXVpcGUzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdFcXVpcGUzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWF0Y2hTZXJ2aWNlOiBNYXRjaFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLnVwZGF0ZVZpZXcocGFyYW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm1hdGNocyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRlYW0gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ3RlYW0nXTtcclxuICAgICAgICB0aGlzLl9tYXRjaFNlcnZpY2UuZ2V0TWF0Y2hzKCkuc3Vic2NyaWJlKGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNocyA9IGE7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNIT0ZDKHRlYW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAhKHRlYW0gIT0gbnVsbCAmJiB0ZWFtLmluZGV4T2YoXCJIT1JHVUVTIE9ET1NcIikgIT0gLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIE9wZW5NYXRjaERldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvdWNvdScpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYXJkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2NhcmQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdGV4dGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGltYWdlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gICAgZ2V0QmFja2dyb3VuZEltYWdlKGltYWdlVXJsOiBzdHJpbmcpIDogU2FmZVN0eWxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd1cmwoJyArIGltYWdlVXJsICsgJyknKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0dVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0dSB9IGZyb20gJy4uLy4uL21vZGVscy9BY3R1JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIGFjdHVzOiBBY3R1W107XHJcbiAgICByZWd1bGFyRGlzdHJpYnV0aW9uID0gOTAgLyAzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdHVTZXJ2aWNlOiBBY3R1U2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9hY3R1U2VydmljZS5nZXRBY3R1cygpLnN1YnNjcmliZShhID0+IHRoaXMuYWN0dXMgPSBhKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSYW5rU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JhbmtzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbGFzc2VtZW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NsYXNzZW1lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yYW5rLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3JhbmsuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHNlbGVjdG9yOiAncmFuaydcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfcmFua3M6IENsYXNzZW1lbnRbXTtcclxuICAgIHByaXZhdGUgdGVhbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgbmF2TGlua3MgPSBbe1xyXG4gICAgICAgIGxpbms6ICcvcmFuay9lcXVpcGUxJyxcclxuICAgICAgICBsYWJlbDogJ0VxdWlwZTEnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbGluazogJy9yYW5rL2VxdWlwZTInLFxyXG4gICAgICAgIGxhYmVsOiAnRXF1aXBlMidcclxuICAgIH0sIHtcclxuICAgICAgICBsaW5rOiAnL3JhbmsvZXF1aXBlMycsXHJcbiAgICAgICAgbGFiZWw6ICdFcXVpcGUzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmFua1NlcnZpY2U6IFJhbmtTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMudXBkYXRlVmlldyhwYXJhbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3JhbmtzID0gW107XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGVhbSA9IHRoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtc1sndGVhbSddO1xyXG4gICAgICAgIHRoaXMuX3JhbmtTZXJ2aWNlLmdldENsYXNzZW1lbnRzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhbmtzID0gYztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSE9GQyh0ZWFtOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gISh0ZWFtICE9IG51bGwgJiYgdGVhbS5pbmRleE9mKFwiSE9SR1VFUyBPRE9TXCIpICE9IC0xKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBldGl0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbi5jb21wZXRpdGlvbic7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAndGVhbScsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWFtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGNvbXA6IENvbW1vbkNvbXBldGl0aW9uW10sIGVxdWlwZSkge1xyXG4gICAgICAgIHJldHVybiBjb21wICE9IG51bGwgPyBjb21wLmZpbHRlcihjID0+IGMuY29tcGV0aXRpb24uY2F0ZWdvcmllID09IGVxdWlwZSB8fCBjLmNvbXBldGl0aW9uLmNhdGVnb3JpZSA9PSBlcXVpcGUpIDogbnVsbDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9maWx0ZXJzL3RlYW0udHMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJtZC1zaWRlbmF2IGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubWQtdG9vbGJhciBtZC1pY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjFlbTtcXHJcXG59XFxyXFxuXFxyXFxubWQtc2lkZW5hdiBtZC1saXN0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIC5kYXRlRGl2LCAubGlzdC1pdGVtIC5uYW1lRGl2IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcclxcbiAgICBmb250LXNpemU6MC44ZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlRGl2IHtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50ZWFtTmFtZSB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbiAgICBmb250LXNpemU6MC43ZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZURpdiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG59XFxyXFxuXFxyXFxubWQtcHJvZ3Jlc3MtY2lyY2xlIHtcXHJcXG4gICAgbWFyZ2luOmF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbWdEaXYgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWF0LWNhcmQge1xcclxcbiAgICBtYXJnaW46MTVweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm1kLWNhcmQge1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgIGhlaWdodDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IC5ub21EaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDNlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWQtdG9vbGJhciBjb2xvcj1cXFwicHJpbWFyeVxcXCI+XFxyXFxuICAgIDxtZC1pY29uIChjbGljayk9XFxcInNpZGVuYXYub3BlbigpXFxcIj5tZW51PC9tZC1pY29uPlxcclxcbiAgICA8c3Bhbj5XZWJIT0ZDPC9zcGFuPlxcclxcbjwvbWQtdG9vbGJhcj5cXHJcXG48bWQtc2lkZW5hdi1jb250YWluZXI+XFxyXFxuICAgIDxtZC1zaWRlbmF2ICNzaWRlbmF2PlxcclxcbiAgICAgICAgPG1kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgPGgzIG1kLXN1YmhlYWRlcj5DYWxlbmRyaWVyPC9oMz5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2FsZW5kYXIvZXF1aXBlMSddXFxcIj5FcXVpcGUgMTwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2FsZW5kYXIvZXF1aXBlMiddXFxcIj5FcXVpcGUgMjwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2FsZW5kYXIvZXF1aXBlMyddXFxcIj5FcXVpcGUgMzwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgIDwvbWQtbGlzdD5cXHJcXG4gICAgICAgIDxtZC1saXN0PlxcclxcbiAgICAgICAgICAgIDxoMyBtZC1zdWJoZWFkZXI+Q2xhc3NlbWVudDwvaDM+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3JhbmsvZXF1aXBlMSddXFxcIj5FcXVpcGUgMTwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmFuay9lcXVpcGUyJ11cXFwiPkVxdWlwZSAyPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9yYW5rL2VxdWlwZTMnXVxcXCI+RXF1aXBlIDM8L2E+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICA8L21kLWxpc3Q+XFxyXFxuICAgIDwvbWQtc2lkZW5hdj5cXHJcXG5cXHJcXG4gICAgPG1haW4gY2xhc3M9XFxcIm1kbC1sYXlvdXRfX2NvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPHJvdXRlci1vdXRsZXQgY2xhc3M9XFxcIm1kbC1ncmlkXFxcIj48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgIDwvbWFpbj5cXHJcXG48L21kLXNpZGVuYXYtY29udGFpbmVyPlxcclxcblxcclxcbjwhLS1kaXYgbWRsIGNsYXNzPSdtZGwtbGF5b3V0IG1kbC1qcy1sYXlvdXQgbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyJz5cXHJcXG4gICAgPGhlYWRlciBjbGFzcz1cXFwibWRsLWxheW91dF9faGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1sYXlvdXRfX2hlYWRlci1yb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtZGwtbGF5b3V0LXRpdGxlXFxcIj5XZWJIT0ZDPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvaGVhZGVyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtbGF5b3V0X19kcmF3ZXJcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1kbC1sYXlvdXQtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPldlYkhPRkM8L3NwYW4+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QWN0dTwvYT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbmRyb2lkLWRyYXdlci1zZXBhcmF0b3JcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgaHJlZj1cXFwiXFxcIj5DYWxlbmRyaWVyPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUxJ11cXFwiPkVxdWlwZSAxPC9hPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUyJ11cXFwiPkVxdWlwZSAyPC9hPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUzJ11cXFwiPkVxdWlwZSAzPC9hPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgaHJlZj1cXFwiXFxcIj5DbGFzc2VtZW50PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9yYW5rL2VxdWlwZTEnXVxcXCI+RXF1aXBlIDE8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3JhbmsvZXF1aXBlMiddXFxcIj5FcXVpcGUgMjwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmFuay9lcXVpcGUzJ11cXFwiPkVxdWlwZSAzPC9hPlxcclxcbiAgICAgICAgPC9uYXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2LS0+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgbWQtdGFiLW5hdi1iYXI+XFxyXFxuICAgIDxhIG1kLXRhYi1saW5rXFxyXFxuICAgICAgICpuZ0Zvcj1cXFwibGV0IHRhYiBvZiBuYXZMaW5rc1xcXCJcXHJcXG4gICAgICAgW3JvdXRlckxpbmtdPVxcXCJ0YWIubGlua1xcXCJcXHJcXG4gICAgICAgcm91dGVyTGlua0FjdGl2ZSAjcmxhPVxcXCJyb3V0ZXJMaW5rQWN0aXZlXFxcIlxcclxcbiAgICAgICBbYWN0aXZlXT1cXFwicmxhLmlzQWN0aXZlXFxcIj5cXHJcXG4gICAgICAgIHt7dGFiLmxhYmVsfX1cXHJcXG4gICAgPC9hPlxcclxcbjwvbmF2PlxcclxcbjxtZC1wcm9ncmVzcy1jaXJjbGUgY29sb3I9XFxcInByaW1hcnlcXFwiIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiAhaXNMb2FkaW5nfVxcXCIgbW9kZT1cXFwiaW5kZXRlcm1pbmF0ZVxcXCI+PC9tZC1wcm9ncmVzcy1jaXJjbGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwibGlzdC1pdGVtXFxcIiAqbmdGb3I9XFxcImxldCBtYXRjaCBvZiAobWF0Y2hzIHwgdGVhbSA6IHRlYW0pXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmFtZURpdlxcXCI+XFxyXFxuICAgICAgICB7e21hdGNoLmNvbXBldGl0aW9uLm5vbX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlRGl2XFxcIj5cXHJcXG4gICAgICAgIHt7bWF0Y2guZGF0ZSB8IGRhdGU6ICdkZC9NTS95IEhIOm1tJ319XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4TGF5b3V0PVxcXCJyb3dcXFwiIGZ4TGF5b3V0V3JhcD1cXFwid3JhcFxcXCIgZnhMYXlvdXRBbGlnbj1cXFwic3BhY2UtYXJvdW5kIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWdEaXZcXFwiIGZ4RmxleD1cXFwiMTBcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgICAgICA8aW1nIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0hPRkMobWF0Y2guZXF1aXBlMSl9XFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIikgKyBcIlxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVhbU5hbWVcXFwiIGZ4RmxleD1cXFwiMzVcXFwiPlxcclxcbiAgICAgICAgICAgIHt7bWF0Y2guZXF1aXBlMX19XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlRGl2XFxcIiBmeEZsZXg+XFxyXFxuICAgICAgICAgICAge3sgKG1hdGNoLnNjb3JlMSAhPSBudWxsICYmIG1hdGNoLnNjb3JlMiAhPSBudWxsKSA/IG1hdGNoLnNjb3JlMSArICcgLSAnICsgbWF0Y2guc2NvcmUyIDogJycgfX1cXHJcXG4gICAgICAgICAgICB7eyBtYXRjaC5tZXNzYWdlICE9IG51bGwgPyBtYXRjaC5tZXNzYWdlIDogJyd9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtTmFtZVxcXCIgZnhGbGV4PVxcXCIzNVxcXCI+XFxyXFxuICAgICAgICAgICAge3ttYXRjaC5lcXVpcGUyfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1nRGl2XFxcIiBmeEZsZXg9XFxcIjEwXFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICAgICAgPGltZyBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNIT0ZDKG1hdGNoLmVxdWlwZTIpfVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHBcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtY2FyZF9fdGl0bGVcXFwiXFxyXFxuICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRJbWFnZV09XFxcImdldEJhY2tncm91bmRJbWFnZShpbWFnZVVybClcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJtZGwtY2FyZF9fdGl0bGUtdGV4dFxcXCI+e3t0aXRsZX19PC9oMj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHRcXFwiPlxcclxcbiAgICAgICAge3t0ZXh0ZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtYnV0dG9uIG1kbC1idXR0b24tLWNvbG9yZWQgbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgRMOpdGFpbHNcXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBmeExheW91dD1cXFwicm93XFxcIiBmeExheW91dC54cz1cXFwiY29sdW1uXFxcIiBmeExheW91dFdyYXA9XFxcIndyYXBcXFwiIGZ4TGF5b3V0QWxpZ249XFxcInNwYWNlLWFyb3VuZCBjZW50ZXJcXFwiPlxcclxcbiAgICA8bWQtY2FyZCBmeEZsZXguZ3QteHM9XFxcIjQwJVxcXCIgW2Z4RmxleC5ndC1tZF09XFxcInJlZ3VsYXJEaXN0cmlidXRpb25cXFwiICAqbmdGb3I9XFxcImxldCBhY3R1IG9mIGFjdHVzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgIDxtZC1jYXJkLXRpdGxlPnt7YWN0dS50aXRyZX19PC9tZC1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgPGltZyBtZC1jYXJkLWltYWdlIFtzcmNdPVxcXCJhY3R1LmltYWdlXFxcIi8+XFxyXFxuICAgICAgICA8bWQtY2FyZC1jb250ZW50PlxcclxcbiAgICAgICAgICAgIDxwPnt7YWN0dS50ZXh0ZX19PC9wPlxcclxcbiAgICAgICAgPC9tZC1jYXJkLWNvbnRlbnQ+XFxyXFxuICAgIDwvbWQtY2FyZD5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IG1kLXRhYi1uYXYtYmFyPlxcclxcbiAgICA8YSBtZC10YWItbGlua1xcclxcbiAgICAgICAqbmdGb3I9XFxcImxldCB0YWIgb2YgbmF2TGlua3NcXFwiXFxyXFxuICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwidGFiLmxpbmtcXFwiXFxyXFxuICAgICAgIHJvdXRlckxpbmtBY3RpdmUgI3JsYT1cXFwicm91dGVyTGlua0FjdGl2ZVxcXCJcXHJcXG4gICAgICAgW2FjdGl2ZV09XFxcInJsYS5pc0FjdGl2ZVxcXCI+XFxyXFxuICAgICAgICB7e3RhYi5sYWJlbH19XFxyXFxuICAgIDwvYT5cXHJcXG48L25hdj5cXHJcXG48bWQtcHJvZ3Jlc3MtY2lyY2xlIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogIWlzTG9hZGluZ31cXFwiIG1vZGU9XFxcImluZGV0ZXJtaW5hdGVcXFwiPjwvbWQtcHJvZ3Jlc3MtY2lyY2xlPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCJcXHJcXG4gICAgIGZ4TGF5b3V0PVxcXCJyb3dcXFwiXFxyXFxuICAgICBmeExheW91dFdyYXA9XFxcIndyYXBcXFwiXFxyXFxuICAgICBmeExheW91dEFsaWduPVxcXCJzcGFjZS1hcm91bmQgY2VudGVyXFxcIlxcclxcbiAgICAgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzTG9hZGluZ31cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbWdEaXZcXFwiIGZ4RmxleD1cXFwiMTBcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIj5cXHJcXG4gICAgICAgICNcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5vbURpdlxcXCIgZnhGbGV4PlxcclxcbiAgICAgICAgTm9tXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICBQXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICBKXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgVlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIE5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICBEXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgQlBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICBCQ1xcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAgRGlmZlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIFxcclxcbiAgICAgZnhMYXlvdXQ9XFxcInJvd1xcXCIgXFxyXFxuICAgICBmeExheW91dFdyYXA9XFxcIndyYXBcXFwiIFxcclxcbiAgICAgZnhMYXlvdXRBbGlnbj1cXFwic3BhY2UtYXJvdW5kIGNlbnRlclxcXCIgXFxyXFxuICAgICAqbmdGb3I9XFxcImxldCByYW5rIG9mIChfcmFua3MgfCB0ZWFtIDogdGVhbSk7IGxldCBpID0gaW5kZXhcXFwiXFxyXFxuICAgICBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNMb2FkaW5nfVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImltZ0RpdlxcXCIgZnhGbGV4PVxcXCIxMFxcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgPGltZyBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNIT0ZDKHJhbmsubm9tKX1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAge3tpICsgMX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJub21EaXZcXFwiIGZ4RmxleD5cXHJcXG4gICAgICAgIHt7cmFuay5ub219fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAge3tyYW5rLnBvaW50c319XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICB7e3Jhbmsuam91ZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAge3tyYW5rLnZpY3RvaXJlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e3JhbmsubnVsfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e3JhbmsuZGVmYWl0ZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAge3tyYW5rLmJwfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e3JhbmsuYmN9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAge3tyYW5rLmRpZmZ9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbnZhciBFcnJvck9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFcnJvck9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRXJyb3JPYnNlcnZhYmxlKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG5vIGl0ZW1zIHRvIHRoZSBPYnNlcnZlciBhbmQgaW1tZWRpYXRlbHlcbiAgICAgKiBlbWl0cyBhbiBlcnJvciBub3RpZmljYXRpb24uXG4gICAgICpcbiAgICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+SnVzdCBlbWl0cyAnZXJyb3InLCBhbmQgbm90aGluZyBlbHNlLlxuICAgICAqIDwvc3Bhbj5cbiAgICAgKlxuICAgICAqIDxpbWcgc3JjPVwiLi9pbWcvdGhyb3cucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICpcbiAgICAgKiBUaGlzIHN0YXRpYyBvcGVyYXRvciBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIGEgc2ltcGxlIE9ic2VydmFibGUgdGhhdCBvbmx5XG4gICAgICogZW1pdHMgdGhlIGVycm9yIG5vdGlmaWNhdGlvbi4gSXQgY2FuIGJlIHVzZWQgZm9yIGNvbXBvc2luZyB3aXRoIG90aGVyXG4gICAgICogT2JzZXJ2YWJsZXMsIHN1Y2ggYXMgaW4gYSB7QGxpbmsgbWVyZ2VNYXB9LlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdCB0aGUgbnVtYmVyIDcsIHRoZW4gZW1pdCBhbiBlcnJvci48L2NhcHRpb24+XG4gICAgICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUudGhyb3cobmV3IEVycm9yKCdvb3BzIScpKS5zdGFydFdpdGgoNyk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpLCBlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIGFuZCBmbGF0dGVuIG51bWJlcnMgdG8gdGhlIHNlcXVlbmNlICdhJywgJ2InLCAnYycsIGJ1dCB0aHJvdyBhbiBlcnJvciBmb3IgMTM8L2NhcHRpb24+XG4gICAgICogdmFyIGludGVydmFsID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAgICAgKiB2YXIgcmVzdWx0ID0gaW50ZXJ2YWwubWVyZ2VNYXAoeCA9PlxuICAgICAqICAgeCA9PT0gMTMgP1xuICAgICAqICAgICBSeC5PYnNlcnZhYmxlLnRocm93KCdUaGlydGVlbnMgYXJlIGJhZCcpIDpcbiAgICAgKiAgICAgUnguT2JzZXJ2YWJsZS5vZignYScsICdiJywgJ2MnKVxuICAgICAqICk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpLCBlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgY3JlYXRlfVxuICAgICAqIEBzZWUge0BsaW5rIGVtcHR5fVxuICAgICAqIEBzZWUge0BsaW5rIG5ldmVyfVxuICAgICAqIEBzZWUge0BsaW5rIG9mfVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGVycm9yIFRoZSBwYXJ0aWN1bGFyIEVycm9yIHRvIHBhc3MgdG8gdGhlIGVycm9yIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gQSB7QGxpbmsgSVNjaGVkdWxlcn0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gICAgICogdGhlIGVtaXNzaW9uIG9mIHRoZSBlcnJvciBub3RpZmljYXRpb24uXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gZXJyb3IgT2JzZXJ2YWJsZTogZW1pdHMgb25seSB0aGUgZXJyb3Igbm90aWZpY2F0aW9uXG4gICAgICogdXNpbmcgdGhlIGdpdmVuIGVycm9yIGFyZ3VtZW50LlxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIHRocm93XG4gICAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICAgKi9cbiAgICBFcnJvck9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9ic2VydmFibGUoZXJyb3IsIHNjaGVkdWxlcik7XG4gICAgfTtcbiAgICBFcnJvck9ic2VydmFibGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGFyZy5lcnJvciwgc3Vic2NyaWJlciA9IGFyZy5zdWJzY3JpYmVyO1xuICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbiAgICB9O1xuICAgIEVycm9yT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuZXJyb3I7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShFcnJvck9ic2VydmFibGUuZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBFcnJvck9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkVycm9yT2JzZXJ2YWJsZSA9IEVycm9yT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVycm9yT2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vYnNlcnZhYmxlL0Vycm9yT2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgRXJyb3JPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL0Vycm9yT2JzZXJ2YWJsZScpO1xuZXhwb3J0cy5fdGhyb3cgPSBFcnJvck9ic2VydmFibGVfMS5FcnJvck9ic2VydmFibGUuY3JlYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3cuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvb2JzZXJ2YWJsZS90aHJvdy5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWQ7XG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW07XG4gICAgICB9XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSk7XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXTtcbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoO1xuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5sb29zZSwgb3RoZXIpO1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIC0xO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAwO1xuXG4gIHZhciBpID0gMDtcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldO1xuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXTtcbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYik7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgZWxzZSBpZiAoYSA9PT0gYilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYik7XG4gIH0gd2hpbGUgKCsraSk7XG59O1xuXG4vLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4vLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG5TZW1WZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWFqb3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgIGlmICh0aGlzLm1pbm9yICE9PSAwIHx8IHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnBhdGNoKys7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rKztcbiAgICAgICAgICAgIGkgPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMCk7XG4gICAgICB9XG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlWzBdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKTtcbiAgfVxuICB0aGlzLmZvcm1hdCgpO1xuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmluYyA9IGluYztcbmZ1bmN0aW9uIGluYyh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mKGxvb3NlKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gbG9vc2U7XG4gICAgbG9vc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvbjtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuZnVuY3Rpb24gZGlmZih2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSk7XG4gICAgdmFyIHYyID0gcGFyc2UodmVyc2lvbjIpO1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByZScra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdwcmVyZWxlYXNlJztcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuY29tcGFyZUlkZW50aWZpZXJzID0gY29tcGFyZUlkZW50aWZpZXJzO1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC87XG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKTtcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYik7XG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYTtcbiAgICBiID0gK2I7XG4gIH1cblxuICByZXR1cm4gKGFudW0gJiYgIWJudW0pID8gLTEgOlxuICAgICAgICAgKGJudW0gJiYgIWFudW0pID8gMSA6XG4gICAgICAgICBhIDwgYiA/IC0xIDpcbiAgICAgICAgIGEgPiBiID8gMSA6XG4gICAgICAgICAwO1xufVxuXG5leHBvcnRzLnJjb21wYXJlSWRlbnRpZmllcnMgPSByY29tcGFyZUlkZW50aWZpZXJzO1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSk7XG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvcjtcbmZ1bmN0aW9uIG1ham9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvcjtcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yO1xuZnVuY3Rpb24gbWlub3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yO1xufVxuXG5leHBvcnRzLnBhdGNoID0gcGF0Y2g7XG5mdW5jdGlvbiBwYXRjaChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2g7XG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKGIpO1xufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZTtcbmZ1bmN0aW9uIGNvbXBhcmVMb29zZShhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpO1xufVxuXG5leHBvcnRzLnJjb21wYXJlID0gcmNvbXBhcmU7XG5mdW5jdGlvbiByY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShiLCBhLCBsb29zZSk7XG59XG5cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5yc29ydCA9IHJzb3J0O1xuZnVuY3Rpb24gcnNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMucmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5ndCA9IGd0O1xuZnVuY3Rpb24gZ3QoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMDtcbn1cblxuZXhwb3J0cy5sdCA9IGx0O1xuZnVuY3Rpb24gbHQoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDwgMDtcbn1cblxuZXhwb3J0cy5lcSA9IGVxO1xuZnVuY3Rpb24gZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwO1xufVxuXG5leHBvcnRzLm5lcSA9IG5lcTtcbmZ1bmN0aW9uIG5lcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDA7XG59XG5cbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZnVuY3Rpb24gZ3RlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwO1xufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmZ1bmN0aW9uIGx0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMDtcbn1cblxuZXhwb3J0cy5jbXAgPSBjbXA7XG5mdW5jdGlvbiBjbXAoYSwgb3AsIGIsIGxvb3NlKSB7XG4gIHZhciByZXQ7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhID09PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSAhPT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyc6IGNhc2UgJz0nOiBjYXNlICc9PSc6IHJldCA9IGVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnIT0nOiByZXQgPSBuZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+JzogcmV0ID0gZ3QoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+PSc6IHJldCA9IGd0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzwnOiByZXQgPSBsdChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzw9JzogcmV0ID0gbHRlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnRzLkNvbXBhcmF0b3IgPSBDb21wYXJhdG9yO1xuZnVuY3Rpb24gQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICBpZiAoY29tcC5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gY29tcDtcbiAgICBlbHNlXG4gICAgICBjb21wID0gY29tcC52YWx1ZTtcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSlcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHRoaXMucGFyc2UoY29tcCk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICBlbHNlXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uO1xuXG4gIGRlYnVnKCdjb21wJywgdGhpcyk7XG59XG5cbnZhciBBTlkgPSB7fTtcbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oY29tcCkge1xuICB2YXIgciA9IHRoaXMubG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBtID0gY29tcC5tYXRjaChyKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjb21wYXJhdG9yOiAnICsgY29tcCk7XG5cbiAgdGhpcy5vcGVyYXRvciA9IG1bMV07XG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpXG4gICAgdGhpcy5vcGVyYXRvciA9ICcnO1xuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pXG4gICAgdGhpcy5zZW12ZXIgPSBBTlk7XG4gIGVsc2VcbiAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5sb29zZSk7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMubG9vc2UpO1xufTtcblxuXG5leHBvcnRzLlJhbmdlID0gUmFuZ2U7XG5mdW5jdGlvbiBSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgaWYgKChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSAmJiByYW5nZS5sb29zZSA9PT0gbG9vc2UpXG4gICAgcmV0dXJuIHJhbmdlO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpXG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHRoaXMubG9vc2UgPSBsb29zZTtcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnJhdyA9IHJhbmdlO1xuICB0aGlzLnNldCA9IHJhbmdlLnNwbGl0KC9cXHMqXFx8XFx8XFxzKi8pLm1hcChmdW5jdGlvbihyYW5nZSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmFuZ2UocmFuZ2UudHJpbSgpKTtcbiAgfSwgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcbiAgICAvLyB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCByZWxldmFudCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgcmV0dXJuIGMubGVuZ3RoO1xuICB9KTtcblxuICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgU2VtVmVyIFJhbmdlOiAnICsgcmFuZ2UpO1xuICB9XG5cbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuUmFuZ2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJhbmdlID0gdGhpcy5zZXQubWFwKGZ1bmN0aW9uKGNvbXBzKSB7XG4gICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKCk7XG4gIH0pLmpvaW4oJ3x8JykudHJpbSgpO1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS5wYXJzZVJhbmdlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIGxvb3NlID0gdGhpcy5sb29zZTtcbiAgcmFuZ2UgPSByYW5nZS50cmltKCk7XG4gIGRlYnVnKCdyYW5nZScsIHJhbmdlLCBsb29zZSk7XG4gIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICB2YXIgaHIgPSBsb29zZSA/IHJlW0hZUEhFTlJBTkdFTE9PU0VdIDogcmVbSFlQSEVOUkFOR0VdO1xuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UpO1xuICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSk7XG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpO1xuICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHJlW0NPTVBBUkFUT1JUUklNXSk7XG5cbiAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtUSUxERVRSSU1dLCB0aWxkZVRyaW1SZXBsYWNlKTtcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpO1xuXG4gIC8vIG5vcm1hbGl6ZSBzcGFjZXNcbiAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcblxuICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpLnNwbGl0KC9cXHMrLyk7XG4gIGlmICh0aGlzLmxvb3NlKSB7XG4gICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKTtcbiAgICB9KTtcbiAgfVxuICBzZXQgPSBzZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KTtcblxuICByZXR1cm4gc2V0O1xufTtcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9ycztcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMocmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5zZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICB9KTtcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygneHJhbmdlJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpO1xuICBkZWJ1Zygnc3RhcnMnLCBjb21wKTtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIGlzWChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonO1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSkge1xuICB2YXIgciA9IGxvb3NlID8gcmVbVElMREVMT09TRV0gOiByZVtUSUxERV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKVxuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gcmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLm1pblNhdGlzZnlpbmcgPSBtaW5TYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWluU2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLnZhbGlkUmFuZ2UgPSB2YWxpZFJhbmdlO1xuZnVuY3Rpb24gdmFsaWRSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnJhbmdlIHx8ICcqJztcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyO1xuZnVuY3Rpb24gbHRyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBsb29zZSk7XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyO1xuZnVuY3Rpb24gZ3RyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBsb29zZSk7XG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGU7XG5mdW5jdGlvbiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBsb29zZSkge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdmFyIGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcDtcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3Q7XG4gICAgICBsdGVmbiA9IGx0ZTtcbiAgICAgIGx0Zm4gPSBsdDtcbiAgICAgIGNvbXAgPSAnPic7XG4gICAgICBlY29tcCA9ICc+PSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdDtcbiAgICAgIGx0ZWZuID0gZ3RlO1xuICAgICAgbHRmbiA9IGd0O1xuICAgICAgY29tcCA9ICc8JztcbiAgICAgIGVjb21wID0gJzw9JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpO1xuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldO1xuXG4gICAgdmFyIGhpZ2ggPSBudWxsO1xuICAgIHZhciBsb3cgPSBudWxsO1xuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvcjtcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yO1xuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3I7XG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZTtcbmZ1bmN0aW9uIHByZXJlbGVhc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZW12ZXIvc2VtdmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NhbGVuZGFyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jYXJkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JhbmsuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDc0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZmxleC1sYXlvdXQvYnVuZGxlcy9mbGV4LWxheW91dC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg3NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2J1bmRsZXMvbWF0ZXJpYWwudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcGF0Y2gnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzxhcHA+PC9hcHA+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiXSwic291cmNlUm9vdCI6IiJ9
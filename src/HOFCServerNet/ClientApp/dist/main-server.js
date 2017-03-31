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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
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

module.exports = (__webpack_require__(0))(97);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var throw_1 = __webpack_require__(43);
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
var Observable_1 = __webpack_require__(3);
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
var Observable_1 = __webpack_require__(3);
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
var Observable_1 = __webpack_require__(3);
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
var semver = __webpack_require__(44);
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
var material_1 = __webpack_require__(52);
var angular2_universal_1 = __webpack_require__(11);
var app_component_1 = __webpack_require__(23);
var home_component_1 = __webpack_require__(26);
var calendar_component_1 = __webpack_require__(24);
var card_component_1 = __webpack_require__(25);
var rank_component_1 = __webpack_require__(27);
var rank_line_component_1 = __webpack_require__(28);
var team_1 = __webpack_require__(29);
var flex_layout_1 = __webpack_require__(51);
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
            rank_line_component_1.RankLineComponent,
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
        template: __webpack_require__(36),
        styles: [__webpack_require__(45)],
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
        template: __webpack_require__(37),
        styles: [__webpack_require__(46)]
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
        template: __webpack_require__(38),
        styles: [__webpack_require__(47)]
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
        template: __webpack_require__(39),
        styles: [__webpack_require__(48)]
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
    return RankComponent;
}());
RankComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(40),
        styles: [__webpack_require__(49)],
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var RankLineComponent = (function () {
    function RankLineComponent() {
    }
    RankLineComponent.prototype.isHOFC = function () {
        return !(this.nom != null && this.nom.indexOf("HORGUES ODOS") != -1);
    };
    return RankLineComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "rank", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "nom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "points", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "joue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "victoire", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "nul", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "defaite", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "bp", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "bc", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RankLineComponent.prototype, "diff", void 0);
RankLineComponent = __decorate([
    core_1.Component({
        selector: 'rank-line',
        template: __webpack_require__(41),
        styles: [__webpack_require__(50)]
    })
], RankLineComponent);
exports.RankLineComponent = RankLineComponent;


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "md-sidenav a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nmd-toolbar md-icon {\r\n    margin-right:1em;\r\n}\r\n\r\nmd-sidenav md-list-item {\r\n    width: 200px;\r\n}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none;\r\n}\r\n\r\n.list-item {\r\n    text-align: center;\r\n    border-bottom: solid 1px grey;\r\n    padding-bottom: 15px;\r\n    padding-top: 15px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.list-item .dateDiv, .list-item .nameDiv {\r\n    margin-bottom:10px;\r\n    font-size:0.8em;\r\n}\r\n\r\n.dateDiv {\r\n    color: gray;\r\n}\r\n\r\n.teamName {\r\n    color: gray;\r\n    font-size:0.7em;\r\n}\r\n\r\n.scoreDiv {\r\n    color: black;\r\n    font-weight:bold;\r\n}\r\n\r\nmd-progress-circle {\r\n    margin:auto;\r\n}\r\n\r\n.imgDiv img {\r\n    height: 60px;\r\n}", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".mat-card {\r\n    margin:15px;\r\n}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "md-card {\r\n    margin: 15px;\r\n}", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none !important;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none !important;\r\n}\r\n\r\n.row {\r\n    text-align: center;\r\n    padding-top: 1em;\r\n    padding-bottom: 1em;\r\n    height: 3em;\r\n}\r\n\r\n.row .nomDiv {\r\n    text-align: initial;\r\n    font-weight: bold;\r\n}\r\n\r\n.row img {\r\n    height: 3em;\r\n}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n    <md-icon (click)=\"sidenav.open()\">menu</md-icon>\r\n    <span>WebHOFC</span>\r\n</md-toolbar>\r\n<md-sidenav-container>\r\n    <md-sidenav #sidenav>\r\n        <md-list>\r\n            <h3 md-subheader>Calendrier</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n        <md-list>\r\n            <h3 md-subheader>Classement</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-sidenav>\r\n\r\n    <main class=\"mdl-layout__content\">\r\n        <router-outlet class=\"mdl-grid\"></router-outlet>\r\n    </main>\r\n</md-sidenav-container>\r\n\r\n<!--div mdl class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>\r\n    <header class=\"mdl-layout__header\">\r\n        <div class=\"mdl-layout__header-row\">\r\n            <span class=\"mdl-layout-title\">WebHOFC</span>\r\n        </div>\r\n    </header>\r\n    <div class=\"mdl-layout__drawer\">\r\n        <span class=\"mdl-layout-title\">\r\n            <span>WebHOFC</span>\r\n        </span>\r\n        <nav class=\"mdl-navigation\">\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/home']\">Actu</a>\r\n            <div class=\"android-drawer-separator\"></div>\r\n            <span class=\"mdl-navigation__link\" href=\"\">Calendrier</span>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe1']\">Equipe 1</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe2']\">Equipe 2</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe3']\">Equipe 3</a>\r\n            <span class=\"mdl-navigation__link\" href=\"\">Classement</span>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe1']\">Equipe 1</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe2']\">Equipe 2</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe3']\">Equipe 3</a>\r\n        </nav>\r\n    </div>\r\n</div-->\r\n";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n<div class=\"list-item\" *ngFor=\"let match of (matchs | team : team)\">\r\n    <div class=\"nameDiv\">\r\n        {{match.competition.nom}}\r\n    </div>\r\n    <div class=\"dateDiv\">\r\n        {{match.date | date: 'dd/MM/y HH:mm'}}\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe1)}\" src=\"" + __webpack_require__(5) + "\" />\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe1}}\r\n        </div>\r\n        <div class=\"scoreDiv\" fxFlex>\r\n            {{ (match.score1 != null && match.score2 != null) ? match.score1 + ' - ' + match.score2 : '' }}\r\n            {{ match.message != null ? match.message : ''}}\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe2}}\r\n        </div>\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe2)}\" src=\"" + __webpack_require__(5) + "\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-shadow--2dp\">\r\n    <div class=\"mdl-card__title\"\r\n         [style.backgroundImage]=\"getBackgroundImage(imageUrl)\">\r\n        <h2 class=\"mdl-card__title-text\">{{title}}</h2>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n        {{texte}}\r\n    </div>\r\n    <div class=\"mdl-card__actions mdl-card--border\">\r\n        <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n            Détails\r\n        </a>\r\n    </div>\r\n</div>";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n    <md-card fxFlex.gt-xs=\"40%\" [fxFlex.gt-md]=\"regularDistribution\"  *ngFor=\"let actu of actus; let i = index\">\r\n        <md-card-title>{{actu.titre}}</md-card-title>\r\n        <img md-card-image [src]=\"actu.image\"/>\r\n        <md-card-content>\r\n            <p>{{actu.texte}}</p>\r\n        </md-card-content>\r\n    </md-card>\r\n</div>";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n\r\n<rank-line [ngClass]=\"{'hidden': isLoading}\"\r\n           rank=\"#\"\r\n           nom=\"Nom\"\r\n           points=\"P\"\r\n           joue=\"J\"\r\n           victoire=\"V\"\r\n           nul=\"N\"\r\n           defaite=\"D\"\r\n           bp=\"BP\"\r\n           bc=\"BC\"\r\n           diff=\"Diff\"></rank-line>\r\n\r\n<rank-line *ngFor=\"let rank of (_ranks | team : team); let i = index\"\r\n           [ngClass]=\"{'hidden': isLoading}\"\r\n           [rank]=\"i + 1\"\r\n           [nom]=\"rank.nom\"\r\n           [points]=\"rank.points\"\r\n           [joue]=\"rank.joue\"\r\n           [victoire]=\"rank.victoire\"\r\n           [nul]=\"rank.nul\"\r\n           [defaite]=\"rank.defaite\"\r\n           [bp]=\"rank.bp\"\r\n           [bc]=\"rank.bc\"\r\n           [diff]=\"rank.diff\"></rank-line>";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"row\"\r\n     fxLayout=\"row\"\r\n     fxLayoutWrap=\"wrap\"\r\n     fxLayoutAlign=\"space-around center\">\r\n    <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n        <img [ngClass]=\"{'hidden': isHOFC()}\" src=\"" + __webpack_require__(5) + "\" />\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{rank}}\r\n    </div>\r\n    <div class=\"nomDiv\" fxFlex>\r\n        {{nom}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{points}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{joue}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{victoire}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{nul}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{defaite}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{bp}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{bc}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{diff}}\r\n    </div>\r\n</div>";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(3);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ErrorObservable_1 = __webpack_require__(42);
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(30);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(31);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(32);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(33);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(34);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(35);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(74);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(75);

/***/ }),
/* 53 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmFkZTZiNjcxYTQxYmFmOTdlZmQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmciLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9jYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsL25vZGUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvYWN0dXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL21hdGNocy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvcmFua3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi11bml2ZXJzYWwtcGF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUtbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18uanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2ZpbHRlcnMvdGVhbS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL3Rocm93LmpzIiwid2VicGFjazovLy8uL34vc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3M/MjNhNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3M/ZDI3ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3M/NzczOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3M/NTZiMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LmNzcz9hNThjIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZmxleC1sYXlvdXQvYnVuZGxlcy9mbGV4LWxheW91dC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYnVuZGxlcy9tYXRlcmlhbC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxxQzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7OztBQ0pBLGlDQUFpQyxvMGdDOzs7Ozs7QUNBakMsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw4Qzs7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YjtBQUNBLGVBQWUsSUFBSTtBQUNuQixlQUFlLFVBQVUsZ0JBQWdCLGlCQUFpQjtBQUMxRDtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQzs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pyQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQSw4Qzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7OztBQ0FBLHdCQUFzQztBQUN0Qyx3QkFBa0M7QUFDbEMsd0JBQWlCO0FBQ2pCLG9EQUF5RTtBQUN6RSxvQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxxQkFBYyxFQUFFLENBQUM7QUFDakIsSUFBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxrQkFBZSwwQ0FBb0IsQ0FBQyxnQkFBTTtJQUN0QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWUsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLEVBQUUsMkJBQTJCO1lBQ2pDLFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUUsR0FBRztnQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7Z0JBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDeEIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLGFBQWE7YUFDMUI7WUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2dCQUN0RCw2RUFBNkU7Z0JBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7U0FDSixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBa0IsY0FBTSxlQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJO1lBQ3hGLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1Myk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmFkZTZiNjcxYTQxYmFmOTdlZmQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoOTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvT2JzZXJ2YWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHRocm93XzEgPSByZXF1aXJlKCcuLi8uLi9vYnNlcnZhYmxlL3Rocm93Jyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyA9IHRocm93XzEuX3Rocm93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3cuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSkFBQUFDUUNBWUFBQURuUnVLNEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUgzZ3NjRENBNjAyMEt2UUFBSUFCSlJFRlVlTnJzdlhtVVhXV1Y5Ly9aejNQT3ZiZnVyYm1TU21Xb3pQTThRaUNCRUFhUmVWSnd3cFpXVWJ2RmRtZ2wybzZvM2ViVmJtMjdtN1p0QjhDV1ZtWUVBa2dDQnBBNUJKS1FPWldwVXFra1ZaV2E3M0RPZWZiN3g3bFZxV0xTOWZzUnUrUExzMWF0bGFxYmUrNDk1K3l6aCsvM3UvY0RiNiszMTl2cjdmWDJlbnU5dmQ1ZWI2KzMxOXZyN2ZYMmVudTl2ZDVlYjYrMzE5dnI3ZlVIbHJ6VkI3enNzc3RZc21RSnFvcklteDllVlk5OUVaSGpjb0txaWhCL2pzcmdFM1ppUVVGd2lMajQvOFIvQUdmaU43ek85M01JaWdBYXY3Zi9Rc2FmRTRZT3ovUDZQOThZZzZxaXFrUWFZcXhGTWZIN0ZZUUlnNkdnRmt1SVIwU0lvMEFDei9wSTVOQXdvcXVuOSt4Y3dUMVNra2xKT2wyQ1owQmNpQkdLMytmMXI2dXE4c1FUVC9DYjMvem1MYisrM2x0OXdLVkxsM0xkZGRjQllLMTlVOE40OVdzRFQveXRXazdpRzl4bkYvRk4xdmlXcXdXay85SXJyekpvZWFQdnBzWC9HeHNSQTE3VDRxOWhHT0w3UHM2NS90ZU1NUVJSZ2Q1OGNHM0I4Ui9KVkFtZVoyTnpGR0hyb1Y3V1BmY2NEUnVmV1pkTzJJVVhYWFNoVHA4NGlZNGp6YXhjK1YwZWZ2UUpldk1SaTA1ZG9wLzl6Tjh3ZS9wRVNWZ3dBbUJlOTdxcUtzNDVST1RFTUNCVnhWcmIvOFM5bVFFZEQ0TjU5WXFLUm1FQWd5QXFzY2tvb0JIMGV4T0REalFtOHliZlRSMkNHL0FreElhb0l1Q1V6bzcyYTE5ODhjWC9hR3hzcEthbWhzV0xGNityckt4YytQREREK3ZLNzY2a04zRFVUNXJPaURHVHVQQ1NTNWc5Y3lLTlRTMTg0MGQzSW9WZXhwVEpndHQrZGF2ZWVmczkvT3JtbTNqMHZydTU5WlpmOEtWdmZKdUZTNVp3NEhBcjR2bUlNVGdYWWd3ZzVuV3Y2eDhUQ2Y3WEdWRGZsKzc3K1o4S1lWcjBDQ0tDSzVxSElEaUYrT1B5aUJIQWl6MktDdXFLSGd2Qk9kY2ZmdnJPUmJYdnpYMnYyd0UrVFRoNHFGay85ZGQvelZOUFBVVjlmVDI3ZCs5bTZkS2xDLzd0My81Tk96czdlZUdGZFh6eWN5dFl1T3dzSGxqekxOKzc4UlpXWFA4cFhuaHhBMGNPTnZIVnoxL0w2Vk5IY05xc1NYenNveC9qbnJ2dnBUeVJvTHVubDF0dXVZWDFtM2Z3am9zdlk5VG9lbFFFZzRCcThUemUrTUU4WGcvclcyNUFJb0l4NW84eWlPUDVaUFNaa0pXK3ZBVWlWWnlDQ3hYckdaeFlRaVUyTGdFWGhYZ3VSRnllaG9hOStzcm1iYWdxQ3hZc1lNS0VDZEozRTFRc2dUT0lRRmdNRHdJNEYzSGZiMzdENnRXcnVmSEdHN25ra2t1NDVaWmJXTEZpQlhmZGRSY3paODdBcUdQaStBa3NPLzBVU29lTjQydmYvZ0cvZjI0VHZWM2RWQ2M5eGxXV2tnanpuRFI3R3BXbGFiYnQzTWwzdnYwdG1vNjBjTjlEditYZSsxZXhvZUVBellkYnVlWjlGNU93TXRENXZPYTY5aG45OGJyVzVzKzlRckFvUkNIaVloOFJPQ1UwUWs2aHVWZDF4K0VlZlhwems5Nys4TlA2NHBZR3pUc2QvNW5QZkViUFB2c3N2djN0YjNQRERUZHcrKzIzRDdvaEJRY0ZFYnBEdlRibklFTGlFS0xLcmwwN1NhZlRMRjI2bEVRaXdmTGx5Nm1wcVdIejVzMmtTMHF3Q2kySG14R0JURHFCRmZDSXFLbkkwTjRaMEhpd0hZZlB3WU9IeWVYejFJMGN6djZtQTF4K3hXV3NXYjJhWDk5eEIwTnFoM09vOVNpUjZyWE9SYWk2LzdGcjdQRm52bHdRNGFJSWswaVNEMEllWHZPWTFnd2R4clFaTS9qK2orOW0vY2FkcEV2VERLbEljZkU1aTNuMnVmVzdmdmxmdC9QUmovd2xmL1BaeitGNUhvVkNvZjhwanFLSWd5MGQrdVJMbXpuVTFNelFxckwvdU96Q2MwU01ZbFNwTEM4bm44K3pmLzkrUm93WVFSQUVxQ3FlNTVIT3BNbWtVelFmUE1qQnBsWWVlL1Faa3RZd2Qvb2tLaklsL1BicC9mekhyMy9IUytzeTNQMWZOMUpXV2MybGwxN001bGZXOC9XLyt3ckRSazZnUGZRWVAyTWVaNTIxRE44elB6WURxc3cvZXdOU2hjRzFqQU9KTXdpRFFkN0FJZmJsVmVEUVlybU5LaTRTckRVNERRanhFYkZva01jRnZkY2kwdUNsMHF0L2Z2TXZkY2ZXVi9pN0wzL2xIRktsZk9tRzczTFd1ZWZ4cFptemFjOFpYS3Fjai8zMVZTVEpNeVFCZm0rV3NtUVZ0LzdYcjdqdi9nZklsR2E0NU9KTCtkS1gvdzVqUFFURC9zYURQUDdrVTlSVlZqS3FwaHd2Y25oaU1kWnk2cWxMdVBIR2YyZmx5cFY4L09NZjV6ZS8rUTFCRUxCOCtYTEtTc3Vwckt6bDlqdCt3NVlEUGFTcWF2amdleTVpNGZSUnBLMlRyMzd5SWwzejJOTnMzYjZlbVlzV2NmV1Zsek4vemt5WlBxRmVKNDBleThIRG5TUXJxcGd6Ync2MU5SWGlhZEd6V3YvUDU0bi8zdmUraDNPdS82WVAvSWxVQ1ZTSm5CSnBST2dDSXBjbmNubWNDMS8zUGFxS2l4eGhFRkVJUTNyRFBEMVJRSGNRMGhORzVLS0kzaUJQUzIvK096Lys1WjE2NFVXWDZxeHBrL1NTaTk2aGV3N3MxYi82bTgvcTZOR2o5SlhOcjJobnBKejNsNS9SQ3ovMlJkM2ExcXRmL3VXek92WEtyK2xwSC91bW52bmh6K2szYi95NWR1Y0NYYjNxVWYzaTUxZm8xUi80Z002Y09WUFQ2YlN1VzdkT0MwRkFHRVowRmtJYXN3VnR6WWZYOWdhT0lIUkVUZ25DaUd3K3owMDMzYVFMRnk3VTRjT0g2OGtubjZ3MzMzeXpack5adWpvNytjMGRkK2o5RHp5c3oyL2VyWHZhZTdROWpNaEdBVUhZUXpZbzBKVXIwSm5MMDVYUGtpM2tDS01DWVNGSGxPL0ZoU0c1U09rcGhPU0RBbEdRSllyeVJGSHdodGV1cjR6LzN2ZSs5MmZnZ2ZycUZWRkVGZEVZa2tQZlBCdnJxNTVDVlhLWXN6dDdDNCswZDNTUkxzdFFWWmE2WGZBYWZuTHJuZGZmL0xPYk9YL1p5Vnh6OWZ2WXRYc0hoVnpBckpuVCthK2Z0OVBRME1Eb3FkT1p2MkFSYTliK25xYldka2FOcXNDM2hvc3Z2SWl6bDB5bk91VVRpR05QOHg3ZTlkNTNZNHpQdi83cnY5RGMzRXg1ZVRrR2h3aVVlSUt4SWdrUk5Jb3d4c2Fnb0RWNHh1Tjk3M3VmWEhYVlZmMXdSbDloWWEzaGdvdlBFN0dXUWdocVBNUVlCSWljUjlKQTBpZ3VLc1R2RlVNUWdwb0U0dktvSzFDUUJBVXgzd0dEUlg3c3U3Q2h4TXIvS3psUXhMRWdGcU93OUdNeXg0QzhWd05oQUlVZ1l2WHZuOWZuTis5aTE4SERIR3BwbzdRc3pTZXYvZEM3S3pNK3Yzdm1aUzUvendlNTdrT1hjWFQvYnF6dmNlQkFFOU9tVHNZWXc5YXRXem45dkF1WVBIa2NqejcrRkMySDJ4aFpXMG5TQnJRY1BNeVRqMGUwSG1qZzNHVnp1ZmZCZS9qNk43K0dOU2xHamhqT3Y5NzRiNHdkTzFiaVBEbkNpcEtpZ0toRlRBTFZLSzUySWxlczhBWFA4MTViT29zUUdvL0lnYk1lZ1pQeGhZQVhuRXBWRUhrRStaQXdsNk8zL1JDNXppUGtzejMwOU9RNWNyU0w3cTRPT2p1NzZRaDh2SnJSWk5YSGhGM1hYM1BabVV3YVdUT3dpait4RGVoTjhZWStBTGhvT0FxSUdGd1VZeStPcVA4WXJhMnR1blBuVGp6UFk5clVhUk9NbjJyNDFSMzNzUE5JTCsrNTVpL3hVajYzL09MWHJOL1N3TW16SjVJUEl0S2xaV3pkdHAzUGZmekQ3TmorQ3VlY2R3SGYrOTUzcVJzMmpFZCsrekJMeno1UHQyemNqS2NoNVNtUHV1b3lSbFFsMlBMU0M3UVBxV1hVc0ZJU251V2ZmL0I5T285MmtQRFQxTlhWblpQSmxLNUdRTVVRT3NXNENHTThGSS9RR1p3S1lnUlZ3ZUF3UUJBRUJFRkFQcDkvb2IyOWZVRmJXeHV0YlcwYzZ1eW10VE9QWkdvNDNCWFMwYXUwZHhmbzZzblNGU2l1dDQwREd4K25kY3ZUQkQxdFJJVUFwNkRpb3lUd1NvY3pmc2tsUk9YRHFVaUZ2UHQ4aXhYdi93MFBGQ1BBTVFnWElhaUFVMFU4RDQwaWZDT0VZY2hkZDkybEsxZXVwS09qZzF3dXg5S2xTM1o5OXdmL3pLSWxwL0xLWFkrUkxLMm12Yk1INjVkUlh6K2Fxc3BTcWlwSytmMlRhem5ycEkveHczLzVBVi8rOGdvMmJkNkV0WlpyUHZSQi92M0dmK2M5VjF5R1YxN0wzM3oyczh5Wk5KcFVPam5oMjEvNHhLNTBTWktTa2pUcGhKV0VLTDRFVUZ1SEVRUEdFam5GaVNFcThtZUJtdkhaME96S0Y0UnNBYnE2ZTJocmFlTkljek1OVzlmVHVHVWRoNW9QY3VqUUlWcGFXdWp0N1NXZnoxTW9CQlFpQStsYXhwNXlBWVhNQ1BLU0xnWm9KV3VTcEZScGErMGgzNVBIQkNHMkNJQ3E5dkYxUWlBbDVLU2NqTzhRendkeC8yT0l6Si9XZ05RVStTbkJDVGlCd01HK3hvTWE5WFl6ZGR3WTJiUnBrMzcrODUvbnNzc3U0NU9mL0NUMzNITVAzL3pXTjVueTg1K3c3S0tyU1Q3MEF2LzU4enZ3dkFTK2VPUjdlNmd1SGNuNTU1N09QM3pqbTN6MG1yOWd3c2hxOXUvZngvRFJZeEJyK2VTblBpVVhYbkMrZG1VRGhvNGFTMDExdFpSNHNSbFBxS3NRRlVHRUdIUU1ROVFwUnBSSWMrTTd1M3QyZFhUbk9OVFN5ZmJkZTlpNVp6KzVSQTJOdlNrT3QzWnhwTFdiZkM3QXVEeWU1dG03NFVtNmQ2d0ZGL2FEZUgxNWtEVUc2d3hhWWdta2xGNnZtcHlrOFZ5QTczSVlGRTlEakF1UktNQ2dLRUtFajBpSWtBUEpvY2FSTjRKTFdNUTZoQkJJL0QrUUEwVVJ6aGg2bmFNbm05V1NSSEpDUHBSZFAvekpyd2h6dmR6d3BVL3JrOCt2bzZPemczZGRjU2xqeDliem9XdXU0ZDU3NythUmgxWnh4Vi84RlNOSGo2Smd5L21MOTcyVEIyNjdqMS8rK0NZNjlwN0JSUmN1cC9yYlgrSHhSeCtrMUxkOCtLUFhzdlQwWlJPU21YU0RjU0dUcDB3V0VRWGpFMmtVbytVdXhJVkNYdnhyTzdMdVA3cTZ1bW5hdFkxZG0xOW01NVpYYU5pempiMEhHdG0zOXhBZEhaMDRpYkNaRVl4ZjlqNDZNeU5STEJFbE9NcElTSjVrb1pWSWZVUTlGSWR6MFFBcXhPQmNqQlhoaElRS1FSUVFTUmFMNG1PQVBJWUN4bW9NY1RqRlloQXNRa2lFNEl4UFpBUkxnWlQxOEgyTFU0dnBWd0tFNVBONTB1bDB2eExnejhjRGlhSGdsTWRmZWtYdmYvQVJQdktCOSsrcXI2OWo0cXlUdWUyL2IrR1o5YStRcWFnaWpFSzJiZG5Na3FWTFNKZVdNbno0Y0hZMzdDYmpDek1uamVUcGRhOHd2Tnp5eFU5ZXdUTnJSMUJSWGtFUzVmeXpsOGdGWjU2RUZVRmRURk9JaTBsVVl6ekNLS1F6VzdpdE5TZnZibXJycHVYUVlYWTNIbUg3dnFNMEh6bEtWMHNUenoxOEI0V1dCb3c2SWltZ29vZ3J3UUJpSFNvK29XWkEvVGdraTBYRkozSVJWZ3cyY2pobitnVWVmV3k4YzNFb2NoSVhEekY0ckloUkZFTVFHaUkxS0FVaTU0TjZPQkZFSFVvaE5qenhVRW5pTUhnYVVtSTlmTjlIeGFMRnoybHZiMy9oUnovNjBZTHJycnR1UWxsWldjTUpSNmErZVJrZnh3bE5sYkd1b1lWaHoyeG5mRk9XRFZ0MjB0UGR4YjMzM00xblAvRVJSbzJxNXo5LytqT216cGhCWjNlV1RhOXM1dlNsU3hoZVZTSG5uVHhOSnd4Sk1USmpHVnFla3Nzdk9RTmpCUStRTU1CS1hBbEY1Q2tFaGU4RVhZWHI5KzNlellzYk5yRmgyMTYySHluUWtSNUphNUNnTnhjU09VSFZ3NC95WlBKQm5CQnJpS2pybDNPOCt2SWJWVHdYQTV1WUVNRmdORUl3UlozUEcxOEJvOFhRYlh4eVVrSk9MTlk1RWdqR0pTRktRT1NEeEFia2pNYlZxeHRNMFFoS3d2ZElKYnhpTlJ0WHI3Mjl2UXR1dnZsbW9pamF0V0xGQ3ZGOS84L0hnSEFGQkk4cEUwY3h2SDRTZDY1Nml0cUtOQ2ZOR1VjMGZTS1BQL0lBMTEvM01iNXh3dzE4NVlzcnVQTEtxeWhKWnpqMTFLVjg4WXRmb3NRcWl5YVBrb1ZUUjZFaVJPcFFHenR2NXlETU9qcVB0dW1XYlp2NC9iT1A4OUxHRGV4NDhSV09IRzZsTzFzZzYwcElqcDVIN2FKaGROaHlJcE5DckNDUm84ekxZVFNMdXBoQjY2ZGdoV0ltTW9paXhaSEFFTVkzejJoY29lRVIvWUdLeUJYTGZDZGdURVJDQzVTNEhCWFdVbkFlbGw0OGNrQ0E5SkczMkNJZExNVlNSREU0a3A2UUt1cUorZ3dvbTgzUzI5dkw5Ny8vZlNaTm1xVHZlYzk3NU04a2hDa2lFU21CR3Q5ZmVlWkpzNjgvMFBBZ1Y3LzdIVnk0Yk9xNkoxZVhMbGoxcTUrejVwSGY4b21QZmxoT1czS3E3dG05bTlwaHd4ZzNkb0pZYTNFdVFvd2hWQ1hDMGhsRTJ0NmRZOCsrdyt4OFpTdS92Zk5PWG5ocUxXMXRCd2xkRmpXS2lRd1dWMVQ2K0NTaUFza3dUNHBDVElJQ1ZwWEtqTWU0cXBIc01vYlFlcmpRVVdSUDRrUzRpRklaQllkUGdTUVdoekVRdVFLK01hZ0JOUWFNWURUV0Z3M1M1aUNFMXNNVDhEUkx1V3RuMnJTeHZHUHhET29yUytsUVM5UGV2ZHlmWGMrTGpTR0VpdUJSVUI5RGdhamZJeW9hUlpTbVMyS3lXRjFNNDZqUzA5TkRQcCtucDZlSHYvM2J2MlhvMEtHNmZQbHkrVE13SUFIeEVIR2tYVzdGc2prVHJuL3dYc08ybHpkdytaTHhDeGZObXF3ZitkRFZ6SncrRFZWbDVNaFJNbUw0Y0NJWDRYdVdJSEJrbmFHdEs2ODdtenA0ZWNkK05telpSY1ArWmxyYmN5UUwzZXgrY1ROZHJXMklPb3o0UkZGVWxLMkdXQndRSWtSWWpiRHFNSnBIVkxFYW9kbVEybkVqTVZLSXF4b3pTR2c0dUJad0VWWWdvU0dHUEdXWkZCcm1rSHduWHRnVEJ6RVJQT3NSQk1GZ0lFUEE4eDNWZnA2bHA4L2kvSXRPWmRQNmJheGFzNUdzOVpreHNZNHZmK1ZMdkxCNEdnL2VmU2NiTjI3RmR4NU9Rd2Fab2tCMVpUa0pLK2VJeE5SUkZFVjBkWFgxRTdndExTMTg3bk9mNDVaYmJsR09nM3o1VHg3Q0NqYUIwWUNrQitQcUtpYWNOR2ZhcnA2ZVRxTFFYVHVrdWtLK2ZjUFhNTllEQktjYVMwT0RrS2JHUm4zNjJmVTgrWElEKzdJcGRoK05PSm8zT1BFSk5ZMmFNc284SWUrQmVqa2t6S05POFl4SFNBUmF4TGpGRUVtU1hsTktqeTNIbUFpckFRbm5NRWFaTkdFVWRiWGw3RDhhOUd1SVhtOGxqSUxySWVHT2NzVkZaekJuN25pNjJqclp1VzRkang1NWljMk5IbUVZRWtVUklnTU5VVEhHVVpHQzkxOTZOb3ZPWE1xdkgzeUNCNS9ZUUZjK2lZZkhjeTlzSWQzVndHVm56T0xMTjN5TFZRODh3QzkvZlNjOTdUM0YwS3I5ZVZCbFJTa0NEVkkwV0JHaHU3dWJNRHdHSVd6ZHVwWHJyNytleFlzWG4wZ2VxSitVZUkzUVFOV2lUa2tMRFgvMWdYZUNnWVJ2Zm14c0tnNGJMc0JGU3RPaEZsMzd1OSt4ZXMzRFBQZjBVelEySGFXUUdVMzl5UmVSejR3aVI0cElCVEVlU29TS1JTUVdtVnNURTdjT1Y5UTJ1MWh0S0laSURLSHhDVXdDWDhBNUFja3pZbmdGVjd4akFTUDFjM3psUzlkellOLytvdUxaRkkxQUFROFZneVZBOHAxTW4xckg4bE5uY05mZGoxS1dTYk53NFR6T1hUcUxEVStzNWZkUHJtWEwxbzNzMnJXejN3dXB4bDdqMDUrK2psTlBQNFVmM2ZvZ2o3NjBreDVUU2Q2bVNhamdPMGZqN21hK3RmWis2b1lrK05CZmZJQlBmL1p2K01ISzc5SGRrOFZSSUJLRHhhTzJ2SXlFcGNGcDdKR3N0Unc1Y29Rd0RBZmhUMnZYcm1YNjlPbkh4UXNkQndOeU1XcUs0RVNPVVJZSXZsTlVEU29KUEVLR2xhbW9HTElLdVVob1BYSkUxei8vRlBmZmV6K1BydjQ5elljUFVRaDZZa0JOazVnU1JiRGdCREVHRHdjYVlGUkloR0JEZzFFUDBRRHJXUUlYUDVYR21waW5Jc0s0QXI3bVNaREhDejBpTFZDU0NqaHJ5VUo2RHg5Z1dFVTFQL25acmF5Ni8yN3V2dk4yR2c4ZVFxTXdKanpWUndFcjNZd2VQcFIzWDNFV1R6MjNsZDg5c3h1bkNSNTY3R2tTUFEwc0dWZkwrOS8vQVNxck1temR1cGwxNjlieDVKTlAwOU9kNWUvLy9odE1YM3dtUC96RmZmeCt5Mkd5VWdXYUlLa1JpRU9sQUJvUzVmTWNQdERDUDM3bnU5VFZqeU1Nd05PSWdEeWhXRHhKTUxRa2pXY0VGUXN1ZmxTUEhEa1NoKzVpV2ErcWxKZVhrMHFsMXAwWVhOaXJ5dDA0ZFl6L0dxbUNpVnRhZ21MRjBwNk50T0ZBSzJzZXZKODdiLzQzZG16ZGlBc2kxUGs0MVJpaEYxQVhvUkxnVEVoa0l5SUpVWEdJR2hTUFNBd3FNYWhteGNZaU11dmpJaGRqT1VoUk42d1l3aGp4RlVQSzlUSnpaQmxubmphWG0zNTBDN2YrNkVibVRSM0Z1NjY0aU10KzhRdCsrdk9idWV2MlgxUElkcU9Fb0RuS1V6bmUrNjVUc1lrQzkvNzJDYkttRWx3U0d3UWMySDZZbHgrOGl4L2QrQytVbFpjd2N1UUl6amhqR2RkZnY0STVzK2ZRMDlQTnB6NzFCWTZZWVlUbFkxSHJnWm80TVI1RU5Xc2N4aVBIM2oxN0VJMUJBalNPaWI1eFZGVm1FSTJ2cnBGWW85M2MzUHdhUHJLMnRwWkVJckh3eEFoaEEvVzR1TUdYeEFvaXNYYW1QWWMrdFdrdmoveitGZFp2M0U3THRxZlkvY3AyY0JGR1k5YmJHQnZ6OTByYzhTQ0d2bjRJWjRySEZFV2NGdW1Sb3RoZGhMcGhkY3ljTTRjOXUvZlJ0SDh2dVd5MjJOb1RZVFRFa2tkY1JLV2Y1K3BMM3NuT25VMDh0Ym1KOWw1aDdXT1A4dXlUcXpuNXRPVjg3Sy8rbWlVbnplZWUyLytieDU1NEJtT1ZkMS95RHNhUEc4Ny8rYmRmMHBZejlKZ2tQajZweUJJVlN5VXhoczdPVGpvN084bm5jMHliTm90TkcxL2huLy81aDJ6YWM1UnhwMTFCcUI1T2ZVQXcvZjBqcjhKN0pOYVhhN0VhUkFWeGpreEtHRktkN3MvdmxEaGtOVGMzdithV0ZBM294TWlCUkFkN0krY1VkYkVHS0xJV294RUd5Njc5aC9uSEg5L0JnUzRQMVFTaWFWd29pQ2pPeFhib1hCOE9JNGdtZ1JSRUZxc1c2K0orS01HaExvOGhpRC9SR3NwS3kxbjVuZTlRUFdRSXlVUUpUZnYzOGVDREQvSGlwaDEwZVdWNEZQQmNGazhOQzJaTllzSzQwWHozWDI2bFBXdFFVNElMUXdvdTRKSFZxOW13YVRQdnZ1d0NQdlRCcTVrNy95UU85c0paWnkzanV6KzVqLzBIQ3VTb0l2STlrQ3lSNjBGc0VJZTdLRVRWa1VqNERCOCtuRi8vK2xkczJyaUZqdlpPYk5VNFFqV29TZUNrcU1OOGxhNVp0VWcwbzBTT2ZyWWZ0VmdnNllWVVZ5U0xmSmxCMVZFb0ZHaHBhWG1OQjZxcnF5T1pUSjRnQmpUZ09YSllRajNtaDBRTW51WVJ3UE5TNUNWRDNpWXdLbmdhdy9kZ2l2cWFJclpSQk1qRUpKRVFmSTBCU2Q4b0d1VkFJOVJZZk1sakpVQkV1Znp5eTBsbjBuejBJeDhsbmNwdzBzTDVuSHZ1dVh6ODAxOWdUNmV5Zmw4bjY3WTEwdDE2aEVzdVBaM1Z6MjNscFIxTnhmd3FJaElUOTQycW8vbFFNLy8rb3g5ejIzK1g4WVV2ZjVXUFh2MVJmbkx2MHp5NzhSQ0ZxQXJ4MGtBQXBnZG44b1RpQmtod1kyN3E2YWVmUnRWZ3hDc0tud1NNd1lrcDBoVlJFV0tRMTVYSGFOSEFWQXlpdHFpOVRsS1NFa3lSQ25GTzZlM3R2YTJ0cmUxVkFVRVlOMjdjeXVQRmlSMFhBNUxpVXhGaENNVFFlT2lJQm1IQXVERWpKRllpaGxSWHBpbkpsQkYyQi9oUlVMeDR0cjlRRUJGS1NqTGt3eXhSRUtDdUY4OFBzYTZUMmRQbmNNSEZTL0VJMmIzN0VLMmRCUTQzYktacmM0S3FFY081N05MTCtQbE5QK1h3NFNNUU5iT25ZU2QzM1gwUFhycVM4UXVXY2VxRjcrR0tpOCtrdHNSblgzTVBQN24zR2JKU1RxWHJRTFJBaE8zdkordHJYcmJKRkxQbW44VHF4NS9uenQ4K1RwY1pnVGkvU0d2a01DYkFrY0JSOHBwaXAwOVdHc3N1WXFMVUNVUkdjY1poWFlnUW9tOXlPMVMwaUloYkxNcndZWlVrRTNLN3VoQ014Y1FoODkySER4OSt6V2RQbVRKbC9KRWpSMDRNQTRva3pucEZReUx4NkNpby91ZXZIbUx4b3RtTUd6TzgyRTdzeUtSOVN0TStuZ1JZRTE4Z3BLZ1pFcGc2ZFNwZitydXZzbjNuVnU2LzUwNjJiTjJGazE2bVRoN09WVmVld2UrZmVabU9veTNVMVEybkpKbGgwWUw1bEdRYk9XMzJlQTQwN1dYTm1qVW9GaVhDaUJDRUFibWVIaHAyN0NSNDhsbWUzbnlBK1ZQRzhzeVdQYlNISlJndHRpbExSRjlEa0JSLzkyeVN6LzN0Q3RKbDVhejgvQXFpTVF2SUdVZktLbWdZOTdRNkR6UUptbml0QnlrSzZGeGYwMkxmUjZrV3ZZOHJOdTRQOEVFeUdNaVVJcVdoR0l3RzFGV1hrL0R0bGFxdW4vTG82dXFpbzZOamtQY3h4akJ1M0xoM3Q3UzBuQmdHVkNDQk9BTXVpL09WQjU0L3dFUFBIV0wwcEJCTGhKRUVpdUQ3MGJxNktyTWdzU3ZFZVphOGhJZ0Y0NFFoMWRWODZqT2ZKbDFXeXBtbm44RjdMNzJVSjU1Nmx1ZTI3ZVc4RDc2SEY3WTBjTjlqNndnMGdZdU80RWRLdFdubDhtWGpHVGRtR0ovKzVOZnA2ZWttY2w3c1FUUW1MVFJ5cUNtaGx6SmFjeG51Zi9FZ2thWUFpNmNSa1RHb3RVQ0lFUXMyQWdtNTR2SVBjUGxsVi9DSnozeWNYVnMzTTI3NFlsSytSU1FnRkorSUpGWUZReFpEOWxXdHhhL0N4MFJpTmJOYWpEcEVBMURCYWJMWUhUczRoK3hUL1lvRE5UN09LajdkMU5lVVlmQlJDZU04VU9IQWdRTUVRZEF2SVFHb3JLeGs2TkNoSjA1bnFrOEJuT0JzbXMxTnJYclQ3UTlSSU1HUmxqYWNIc3VRUENzcjZtcHJIc0cxb2dyVzZ4T2dLek5uem1EVnFsVTg4ZVRUSkVRNTY3VFRPUC9TSzdqcS9lL25nV2Myc09yWkxmUkdIdGdrSWlGV2ozTFdzb1djZC9aTVZuemlMOW0xWXk5UkZNVlpkdFRQSGhYdlpsek41WU1RSXpKSXlhZXZVaytLRWVwR2plUkxmL2RGdnYvOTc3UDJkNy9EK2lPSUl0Y3Z6ejMyRHhrRVdmeVIrc3hqSHVkMVlMNUJrRWl4dWxSMStCWkdqNmlMaHlvNGNCcExiSGZ2M2owSWhRWVlPblFvUTRZTVdYZThHUG0zM0lDU0d1S01jREFiNlUvdmZZTGRSM0w0THNtUjFxUDk1Q1VvdnVqcXVpSFZHSlRJeGFKMHJNVVZsQ2VmZklxQ2d0Z0UxZ1hjY2RlZDNQdlFveVNIVDZGeTVtbjBwb1lSU2hKMVFvSTg4MllPNC9LTGwzTGp5cFU4K2NTenVEQStudFBnRGFXZWY4em9tWFJKaW05OSs1dnMzYk9YbTI2K21Wd3VDMlZ5M0VWYWI0VHRxMFlZY1pUNGhwRjFOWEVJbEdNSmUwTkRBMUVVOWY4dUl0VFgxMU5lWHI3d2VIMHZjenhPTmFmd3dOTTcrTzJ6T3doc0djNGtPZExSU3pZZmFhU3hITUVUUjIxTkJVbGZVQmZHWld3WW9paFJGS1BaVVJERS8zWktkMDh2Unp0N3lZWWVnU2F3SmtHQ2tIRWpxdm53WDF6S3BnMGJlT0QrVlFTUndhazlObFpGWGdXc0RCQzN2WkVSU2JHcjRyM3Z2WXJxNm1xdSs5VGYwTjNWRlR1d0tIeHJpT1gvRHlGRlVOUkZWSmFtcUNuUDRBa1lFNlB0aFVLQi9mdjN2K2JobURKbFNuOTcwUWxoUUFVc20vZTM2My9kK3pUZFVZcElQVUludEhUbWFNL21pNGk3Z2tiVTFsU1NUdmhGQldFY1lnUUdsY0dxcm04OFZDeW1rUVNDd1hNRmhpUWRWMTJ3bEh4T3VlZStSeW1veGJuaVJBNzZtMTVmRDUxNzdRdHlEQVFWYTFtd1lBRlRwa3hseFJkV3NHLy92dGRMYVA1L3FCSUd6eUw2WS9GWlFUSGlHRmxiVFNibHI3VEZzR3lNSlpmTGpkKzFhMWUvOSt3enBGbXpadjNCS1NuL3F3eW9JNUx4UDczdE1mYTNabU9sYnpIdk9OTFZTMmRQdHQ4TFdCekRhc3BKK2g1TzNldmM2VmM3amo1R1RmQ0J0QVpjc0hRVzh5YU01TmUzUDhQQlF6a2NmaXpERUkyaC93SFMwaitxZ2d4RHhQTklwMUtNR2ptU2YvcW5IN0IxNjNZMCtwL3JQUitZakJ0ak1LS01yQnRLT2lrckRNVUdUYUNucDJmWC92Mzcrd2xVVlNXWlRESng0c1RqK3IzZWNnUHFMZWl1VjNZZkpPY3NUZzIraVpQUmZHUTQzTm9aSzdLS1pHdHB5cWVxS2hQcmQvNUFYdEdYcnhwMWVGR2VhV1BydVBEc2szbjBrV2Radi9FQUJVM2p2RVJNU05MWDVtSmZOejN1TDIxZWRYeGpEQnFHNVBKNVZqMzBJSWVhbTFHblJRTi9NOGkwcnl6dmExdjY0d3d1THVNcGpybnIveGJINnZ5Qng0YVkzOU9ReVJQR0ZqVkh4ODV0OSs3ZGRIVjFEUnJuVWw1ZXpvUUpFMDRzQS9MOTFMcnFJWm1pT3ErVUlCSWlRc0lveFlFREhVUVNFdEtMdUFRWm4zV2pob1VZSzBRdUNmTDZOWXdLcUJlRGpFbnRwYjYwbXc5ZnRZUVh0alR5NjhkMzBDNHBDbDRLcDZaL3hseEVWR1NYOUhYS0dnR045Y3RhQkF0VlkwSVNkVVNGUEwwOVhSU0NxRmh4YVQ4aUxBcXFIbzVrOGYwUm1KaS9zNkdINTd5QkJmaXJZeVJpWXBtaklDUWpvVFNBUk9qaUdUK2FBazJoeGlDZTRQa0czeG84NHhPSlJTVWtJYjFNcTYvQjcrc0hOejVVQi9ibEFBQWdBRWxFUVZST2hTMWJ0c1NWWjkrTk5ZWlJvMFpSVjFjbnh6UHBmOHVQblBUdHdoRzFsUmdVRi9YRmZNR3AwTmpVU3NFNWtIZ1NoeTljT1h4WUZWYjB6UjlhSmU0R3RVTFNzNXg3M2p2SXFlR08reCtqSXhzVmhlenlXbWZ6K244NEZoUmxvRHpydFluMkczdkRDRXNCcXc0YldheXpHSldZNXBYb0RRd285bG5XRlFzRXNSUzhFckkyUmM1TGtoWEJweFBmdFdIRFhuelBweXhkU21WRkplbE1TUXdSaUZCWlhzYXcyaUgwaWNqNlpMTWJOMjRjVklFQnpKOC8vN2lScU1ldGpFL2dxQnRTZ1NmN01jWHl2RytzWE5QaER2SUJiV25mVkF1Q0ZXMFlWVGNVb3h2Nis1cmVLSHdaUUtJQ0p5MDZpZktoSS9qWnIxZlQyTktOMm9vM2xnNGVyeVV4OVdEVVF6V0prb2pwQ2xHY2lWNFRnUWFlaDZkS2dCSWFROEVhQ3BIRDl5S0llcWxLZFRHMXRwUUxabDdPcE5vUE1yRitHS2wwa2hjM2JlU3JYLzBxUFYzZGpCMDdsc3JLeXRlWStVc3Z2ZlNhejVzelo4NkpOeVBSSTJMa3lEb0lYOERZa3BpZ1JJaFUyTnQ4bE43UVZWVW1QVFJRUENQVWp4aEN3amp5R3IzeC9USmdjSXdjT1p5cXFpcHV2ZU1oR285MkUwb0pxbS9OS1FnTUlqTUhYL1JCOVQ5cUxKRzF1RER1Q1hQNGlBbUlQQ0V5QTRCQ09jYnJPUmREQTBOckttbXhNUUhydVI1OEtWQnVDcHl5YUFibkxKdk83SEhEcVBNVFZGbUx1QWlzOHVoVGo1UExaUkVSNXMyYlJ5cVZHbFNwWnJOWnRtL2YzdjlaSW9Mdis4eWRPL2ZFTXlDTFkvVHdTbEtla0hPeHJEUWVjR2s0MHRGRGU5WXhMT1BqQzNnS3c0ZFdVWklVdXVXTjNVamtZdjFQWjNzN3YvdmRFeHlVREZtdkZLTWU5cTBxa0lTaTRFejZjV0xQR2lLaVloUTJpQ21pd1JqQ1NFaUl3Mm9PdElCeFBTUnNnQ0Vra1VoZ2phVzhQTU9ZTWFNWlAzNGlNMmZNWWY2OCtXemJ1WjBiZnZoZmxFZ2VvMGVaT200azc3dmlITXBLUEhZZU9NVGRtM1pRYU5wTFhZbGgwZHdaN0d6WXpvMy9laU11aWd1TnVYUG45aGNjZmNheGRldFdIWmhBTytlb3JLeGs4dVRKdDU5d25hbStPb1pXbEZCWldrSm5SNFFXeVZVblFqYTBOQjVzWTNMTmlEZ0JFMGRWV1FrMWxSbmEzdVE4NHlMZm83dTdsL2F1YnFLcW9SU2toS1JFOU0xZmZRdnd6K0lUWFJ3TExMSHhpSW41Ny82UndNNGhZVVRTQmFRbGl5Y2htZEkwbFdtUGNVUHFxSm4xTGthWFg4V01HVk1ZUFhvazVlVmxaREtsOVBia3VmdXVlL25INy8wVDNUMUNYZFROT2FlZnlhbW5MR0xObzAreGJzTTJqdllxWHRURndRMlBrZDMzTXBVbE1YWFJsUzJBR3Nvcnlwa3hZOFlnajJLTTRhV1hYaUtYeXczNjIrelpzeWt2TDcreWI5THNDV05BQWxTV2x6R2t1cHpHenE1WVVWZzgzOEFaOWh4b2hsbjFpQ3JHS09ta3ZYM1U4TnAzYjM5ZGhEZkdmbFFFSjE0TU5Jb2hWSXNUaStJd1JMaitjdjNWV2JDK2lzMkd3WVBGajAyYmgyTWhBWUhTc2xJbVRaL0FpTkhET2RMVXd5dWJObkMwdXczeFBGTFdrYVNYTTArWndxSzU0eGc5cW83aDFSbUdKRHpLUFl1bzQyaDdHMDFOKzNuNjZhZDQvdmwxckZ2M0VodGUza0J2YnhmSm1ucXV1T0JzcGkrYXk4OXZmWUF0K3p2cDFDRlk4U216YlVRMmpWT2xzNmNMY1JyMzJ4dkRtREZqR0RWcVZIL1BlNThoUGZmY2MvM2hxODhEblhycXFYOFVaZk8vem9CQ01hUVRac0xZWWVsZEwrOXVwV0F6R0lXazVnbERaYytCRmlLTk5lQ2lqb1FKcjZ5dkxkV0Voa1Y1cG9jamlzdmx1SytpZU92elJKSkhUSWdseExvSVIwQ0JFQ2ttc2NXMno0RkFDNWdFUmd1eDVFS0ljekkxcUVCT0xBbXlsRW1BNXdvNEhOWW11T2ppQy9tcmozK1lXUXNXa1NoSkVlWUtySHJnTi96dDlYOUhXeUVpTFUyODc5M3Y0Wkx6VDZjMFpYR0ZpQ09IdW5ueDhBRmVlTzRKTmoyeGxvWmQyOW16ZHljOVBWM2s4d1VFaTFNbGtiQmNkTW41TEZ1K2hIKys2YmRzMjk5QlRsTVlJNkFCTGdxS3ZmTVNxem0xcUFWeXlzeVpNeWt2TDVlK1laL1dXckxaTE92WHIrK2ZSdDluWEtlY2NzcWZaSkQ3Y1JIVis1YUdDYVByc00vdEE0bkZaVGhGaldYWDdrWkNPRnRGVnNmUVBFd2NPd3Fqd1lCaVZ4aTRKWUdvUVZWUUVrU2tFQko0R0N4Z0RBT1FZaG0wdndVb1JneEdCSEdLOVJJazA2WHhtOFNSdEJHcEtFZEZRbGkwZUQ0dlB2c01WY09HTVdmdVBBcjVISDRpUWFva2paZE84YTUzWGM1TG03YnhMeis1azNQZWVRNnpGc3puOGVmMnNYM3JpK3h2MkVKUFo1S210aTYydmZJNFhkdldZUW1KWEw1ZklxNDRqRmhPT25rUksxWmN6ejFQYm1USDNrUGtOWU9Ld1dnSTRwQStHRURwcDMzaTl3b0xGaXpvTDh1Tk1Uam4yTHQzci9aeFlIMEdVMUZSd2F4WnMvcTNXckRXbmpnNFVKOFZqUjFaUzRJOFZ1TUxFZzlvRWhxYjIrbktSbys0WXErVndXTjhmUjIrRndKaGY4WXpNQ1Fad0ZNZjFUUWhhVFFTYkZUQTF3TGVINWlSTE9vb0x5L2o2Zys5bnp0L2N6Y0xUajZaS0FwSW1JaXlvSlhaWTZwWjhabXJjVUVlRGZLME51N25obS8vQSs5NTcvdTU1cHByYUdzN2lqb2xrZkM1NG9wM1VWcFJ6ak12NytiVFg3K0pmL3lQMjNuK2xWZVllOXFwbkhuWnUrZ0lVNFJhaWpXR3lFVUQrTHo0UEdxR0RPRnIzL2dta1NSNS9LbDFaQ05ES0lraVNHamVGQXFycUt4azNyeDVXR3NINFQwYk4yNGNKQ0lEbURkdkh1WGw1ZEpuYUNjVUVxM3E4QVRxNjZxb0xMRllMWUE2bkRGRUJycXlzUGZnVVp4UlZNQ3FZVmhWaHBycU5FZ1lEK0NVd1Y0a0ZwWEdmVk5Jbm9SMFVKM3NaV1JOZ29RWHZURjFvSkJKcC9uK0QvNkpIL3p3WDVrOWJ3SGJ0MjNCcDRBTk8xZzZxNTR2Zk9JaUhsLzdQTTgrOXlKQlBoZUwvMVhJRmdyY2Y5LzkvUGpILzlrZkZrYVBHYzNRMmxvYW05cm9MWGlNR3p1U0ZaLzdHSmRkZUNaN0dnK2d6b2NBb2pEV0MvV1YxTVlZakJHdXV2SXFUbDY4aE5Wcm5xRHBjRHVSSkFuRmk3WFJyMU1JeUFEb29MNituc21USi9kN2xMNWpQL1BNTXhRS2hVR0U2WklsUy9COWY1QlhPbUVNU0ZDTU91cXFLNmdxVGVCTDdKclZXQUtCWE9UVHNMK0Znc1F6bjhVWnF0TEpsY05yeTBDRG9xRGV2TXFBRkdzaU1MMVVKTHM0LzlReGZQbXZMK0NEVjU2TmZiTTZYcFNoUTRld2ZQbHlFcWtVR3pkdXBLMmxpUktiWS82a1dqNzVvUXQ1NmVVOXJQbjlTN0dTMHNhaWVwd1N1cmdyNUs2NzdpS2Z6d05RVmxaR09wTkJYWVN2QWVlY1BKM1pZNFlTRmdwczI3b1ZRNFJvR0lkT1l3WXg2VFUxUTdqbW1tc281RU4rLy9UekJDRkVhbkdZdVAvdGRUeXBGS1VhTXNDckREeHVkM2QzUDREWVo2aSs3M1BLS2FjTU1ySVR5NEJNckljdUw3RVR4Z3l2eHJvQ1JpQlVSYTBoSC9wczIzV0VTTng0SkZZZXAzeFpNWHJVa0pnR2tIaXkxMEFqY0VYNWd5YzVMajFySGwvNXlJVzhjK0VZbXZjMWtpMjhXY2V1TUdQNkRHcHFoaUJpZVBhWlo3QkJEeU5LNGJxcnowVmR5SjJySHFkTFN1a2hOV0NNU3V3UFBHdlp1bVV6SFIwZC9WN0lHSU0xanJLa1kvNlVPa3B3dExXMGNlRGdZZFNBc2E0L1B3R3dOcjdFWjV4eEJwTW5UNkx6YUFmYk4yK044enlSSWtHc1dBMzd0YzBEUGFpMUJqK1I0SlJUVHlXUlNBemFQcXF4c1ZHM2J0MDZJRlFxbzBhTll1Yk1tWU1rSFNlVUFWSHNaVXBZR3FaTkhCTnJmdEc0SWRBSTJDVGJkKzRqSDRTNzFNVnlCQS9IeElsandBd3NzZ2RzNDZZUVlrbjdTVTZaTnBHNkJIZzlBVnMzN0NKMHBXK0lBd25Db2tVbjRmdnhoWC8rMmFkSWFKNlB2UGRDWm82cDVlSFZ6OURjR2RJbEdmSW1UU1EyL3Y1RlBDaUs0bTBTRGg0OGlER0c3dTV1c3QzZE9DS3Fxa29ZTjJvWW9vWU5yelRRSGZnRXhpczJQSUtmOENrcEthRyt2cDRaTTZaei92bm5rVXdtT1h6b0lKMXRiUmc5eHJMSC9TdmhZTmloT0xjeGloeFYxZFVzWHJ5NDM0RDcxdnIxNnpsNjlPaWdVRFYvL255R0RoMHFmUnZlblhCVldLUStSZ1RQUlV3ZE40S2tGYklvT0lkVGl4bzQyTkhGa2ZhQXlwb1VsaERmV01hUG5rQnBTWnFlN3Q2WUx0QUJBSi80T0N5MUZRbW1qQjRLQ0EwSFd0bmJkQlNSTXZEeWFKaER5Y1ZkRkVYak0xNktrMDQraFVpVTVzTkgyTHRyTnd0bmpXZjVxYk5vYmUvbWlSY2E2UTFTSkQyRFR4UUhTK01kZTNKdExFNFBDd1ZRT0hUb0NDMUhPNmdaNFRGbDNDaktNb1lvS0xCMyszYXFVemtxU3N1WVhqNlhTZTljd0p6Wk01ZzFld1pCVUdEbHl1OHdmLzQ4eENpdFI0L1EyZDFOU214Y01Kb0FOQ3lLeFdLZzBoUjNVRXhJUEtWazJxUkpqQjB6UmdZYVYxKy9XVi8rMDJkWXk1Y3ZqOGZlcVo2WUJxUmlBWU1IVEI0N2lwUTFTQkJnUmNENWhGS2dyVGZQL2tPZFRCNWFpbWdCSjhLWVVXT3BIVEtNZmIzN2lsc2x1QUZPTGRiK1RwczhocUZESzhrWnkvcmRoMm5QRjV2dFRCSWhDV294RXYvZ0hOV1ZsVXlaTWdrbFl1K2VmYlFlYnVILy9QMVhLYzJrK04yNjNUUzNSU2hKdkREQWt5S01JSDcvaG5SUkZBKzBxcTZ1UXAyeWFkTXJ0TGUzTXpUTXNYakdhQkx4WEJET1BlTlUzbkZlT1hVMVZReEorRWh2Tnp1MmIrWGhoMzdMWFhmZmlUR3h1QjBjMlZ3UFlWQW85cDI1NHZUVkNGR0RNeFpuYkR6QlhqdzhQMFUrbitlVXBhZFRXcG9aMkRYTzBhTkgyK0tHeFdQYkdWUlZWYkZvMGFMWGxPM0gwNWplK2hBbVJiR21FYW9ya3l2SERLL0dsNUMrR1YrcVFqWWZzbU5QTStHeGZRUVpNbVRvaEhIanhnMGlDUWNtQTc2QitRc1c0S1ZLeVNPOHVIVVhnVTBTU1JJYlpMQkJCdU15c1o1RzQ0YmZTVlBHVTExUmhpL0s3bDNiR1RkMkRLY3NYVXBlWWRPTzNlVERxTGlucXJ5bWtJdjNUaFZLTTZYVVZOY1FSUkdQUExRS0YrU284QjF6Sm81QWdnQWp3cVRKazdHZVpkMUxXL25XMzMrWGl5KyttQXN2dW9pdmYrUHJyRisvbmlGRGhwQktwWkJpeDZ0b1BCWE5hcXl2RTdVb2xqQ0tId2luUWxsMUxSKzY5cTlKbEZXeC9Oeno0L0EvWURVME5GVHQzTGx6MEdaNEV5Wk1ZUExreVJQNEU2N2owQnNmOVZQb0hxeVlPWEhrOVJ2M2JxUmdTN0JpRWFBUUdyYnMzRWMyV3ZpZHBQVldpQ29seVdURHJGbXplUFRSUnpIR0RCSkhDUTRyeXBJbFMzSEc0MGhubmwzN0R1Q014YmlRaE92QjF4NUVBcHdvVmcwWWp6bHo1cFBKcEZHNjJiUmhQZWVjZlRhWnNqS09Gb1E5Qjl1SkhCamZGRnVHNVRYVkpPcVlNbTA2cVhTR0EvdjM4L0RERDJId0dWcVpZV1J0RldxRUo1N2Z5STIzUDhxQkRrZlEzY2IrOWIram8yRjlVYThZVzJVbVV4cmpOODVSVWxhRFYxS0dpbGRzYzdJeGdLNkdCRmtTWkttcEx1WDZMOXhBMkhXWWllUEhNbjNxcE1FekIxUlpzMllOMld4MlVKSzhiTmt5U2t0TEcwNXNBeUtLSjJrZ0pEeVlQV2tFZDY1K2dkNitHUklLa1Vtd3U2bWR0cTdjOVpreWYwVkN3UGQ5NXN5WmcrLzdCRUhRNzRZbG5yTEF1TEdqbVRCeEloRkMwNkhESEcwNWhCZVZZazJXVExLRFVza3l1cjZFWVZNV00yZmFGS1pObmM2Wlo1MERRS0VRc0h0M0F4Lzlpd3V4TmtGUGJ5OUgybnZpM1pkZEgyRXkyQVY1MW1Dc3gvTGx5ekhHOEo4LytRbEgyMW94NlNGTW56cUJSTXJTRThMYURZMjgzQlNRdGFXVVVFN2VaRkFWWExHY3Q5WU1LS2NOTlNOR1UxazF0Q2hoaWdkcVdlc2hoR1MwazBuRE1ueml1cS9TOE9ManJMemhLMXg1NVJYVVZxWUVGOFpnb3lwQkVMQm16WnBCRlZsSlNRbm5ubnZ1bjd6bDZEZ1lVTnhGRVlPRU1IZnFHRXBzUkt1TE1DYVdZWWJxMGRUU1NWTkxKL1VWdFRIVHJjcU1HVE9vckt4a1lCKzNjdzRyd3JTcDA2Z2RPb3hBbFpaRFRZd2RsdUdrK2ttTUdEMmFNYU5LR1RPa2l2cXFVclNuZzVlZWU1NWYvT0pXNWkrY0IzWWtIUjA5QklXQTBXUHFBWWR6am13dVAyZ1V6V3R5T2Fla1MwdTQ2T0tMYWRpemo1Lzk3T2ZnUW93R1RKbFlIK3U4WGNTMnhuYXlYalZaVW5nU0VqRTQvM0RPMGRIUlRoaUdKSEdNcWEvanpITk80L2tkN1ZqWFFjSVlpS0M2ckpKbGl4WngwZkxaUEhEclRmenNuLzhCY3IxY2VQNjVXQ000UGFZNjJMMTd0MjdZc0tHb000cGhnL3I2ZXViTm0vZXg0NytONkhFM29HT0RrZ3d3ckRLOWN2U0kydXVibXVNdzRSQlVmTHB6WGV6YWM1Q0Y0MnI3YzQ3NitucEdqaHpaYjBER0dES1pERk1uVGViU3l5NUhiRHhZNEpSNU0xaThZRDdXVDFCd2pvTXRuVFR0M3MrdmYveWZQUFhZUSt6YXVwSHFtaXJLcTB1SkRCenQ2aUZYQ0Nrckw4ZG92Qm1LK1VNTkd3cG5MRCtEeVZNbTg0bHJyNld0clIxckRKN0FsUEZqOFZUcDZzelJkclFEcHlXSUdLekdnNnNLcnpwVWMzTXozZDNkbEpWbHFFaUZmT1B6SCtIZU5TK3llZDhoOEpSSkV5Y3laK1pVQXBSZi92ZmQzUCtyTytub3pESjd4aFFtejVwSEpGNjhwVlRSNHp6KytPTjBkSFFRUlZFLzVuVE9PZWRRV2xyNlkvN0U2emlRcVgzYlp6dEVJeEsrWFRGdDR0anIxelh1T2phTlMySXZ0TEZoUHhlZE1lZUZKQ3cwUUhsNXVVeWZQbDFmZnZsbGpER1VsNWZ6M2U5K2w4c3V1WlJNdWdRVkllZGdiM01IVy9hMHNHWHJmbmJ1YnVad2V3SHRQY0xXWngraXEzRVRRcFlaTTZkU002U0tVSVgyMW02aVhFZzZxVGpKNDZ5U3pQZ1lPdVBoNENhSmlJOExZaHpJaUZKVldjN25QdnRaZnZHTFcxbTE2aUdNaVRmbHJhcklVRjliZ1VSNU9ycDdhTy9wUmlqQmR3RytDekNEbEpWeGd0dlkyTWlPSFR1b3JSMktRUmsxSk1OSHJ6cVRua2lJZktHMU8rVGhOUzl4MjI5Zm9MdnRNRDBGaTVvRUo1KzZsTnJoSXlVcTdqRmlpMno3ZmZmZDE1OGo5ckh3NTUxM1hqOVAxb2RDbjVnR3BINFJIQXN4SnNMRE1HdktPREtQYmFWSEJZOGtPSS9RSm5sNWJ6TkhjcmtGbFNVSmhMaVBhZTdjdWR4MjIyMFlZL2p3aHovTXZIbnpXUHZFV3BhZHZwU1MwbklhVzNyNCtnOXZZMmVySWRBMFRqMGlrbFM0REtHa1VMV0l3c2poSTBtbjBxaUphR2x1UXdzUlJtTEpScUtraElxS0VvenRJbExCNFJGRUlURXVEdWwwaWh1KzlqVzZPcnY1KzIvOVBZVkNRRUpqNWNDNDBYVlVscFVnSWpSMWRORldpSEFxZUgxYkdvZ1pBR3pHN1VWZFhaM2NlT09QbUQ1dEpoWFZWZkVRTFlYZVhKN1ZUMjdqdG9mV3NXVmZCd1ZiUVRMS0lINHBtVlNLYzg4OGc1VG5FWm1pbWdGbHg0NGQrdkxMTHcvcWZ4ODNiaHp6NTg4L09oQjVQbUZ4b0dQMXNQU3owRk1uRGFjODdkRlRpREZYS1JidkJ3KzIwZHJhemNUNmFvZ2N4dk01NmFTVFNLVlM5UGIyOHRPZi9wUWYvdkNIVEpzMmpiV1ByOFVaeTRGRFIybnR5cE4zWllSYVJHYjdKN29mKzl3eFk4WmdqU0RrYVc3ZXorR1dvM1QxR2pLYW9jcFl6cGcrZzJjM2R1UFpERFp5SktJY2FjMlRUaVg0N0NjK3g3VHAwN242STlmUzJka1J6eCtNNHQ2UGNST240S1VyNllpVVF4MjlCQ1JRNDZNdXd1SEZjNmxmclpFS0krNjk5MTU2ZS9PODQ2S0xJRlZCVTdmam1jMzcyZDhha3RjMGtaVFJQN05CWVB6RUNTdys1ZVM0TTdmWXRZdkFvNDgrU3Q4TW9ENGpPdmZjYzZtcHFhbitVN0R2ZndJRGN2MmFIb2xsVkF5clNUTnVWRFVIZDNVVVcya1V4WkxQVzdadTM4ZkpvNnZBeGduaGhBa1RxS3VyWTlldVhiUzN0d013ZmNZTWpKY2d4TER2WUJ1OWdZZXpLU0JKR0lZTTN2RXhOcVA2VWFOaTFWNFUwTlo2bUtZalI5amIyTXlJMFdOSks1eDMwa1NlMlhLQXRTOXN4aGNsUlo2cFl5cFljZlYzcUNvSitjdVBYVXZ6b2NQRklaNUZBeldHTWVNbjA2dUdqYnNQY2RmRHp4R1NJbEtETFc1STU3Q0RORWt4SUJvTHdINzc4RU04OU1nYUtCdEIvU2tYVVNnZFE0NHFqUEdSS01RUllyMTRRdHZ5Yzg1aXlOQWhFaE96TVU2VjdlMWwxYXBWL2RXWE1ZWkVJc0hsbDEvZS8vdnhGdEgvU1R5UUZERkt3V0JReXBQK09UTW0xajN5YkVNYnptaDgwNDFISVVxeGFWc3poZVZ6TVRpczlhaXVycGJaczJkclg1KzNpREIzM2p5czU1RjN3c0dXN25qQWd1a2J1ZnVxaXlYeFRzN0Q2b1lWNTBVbDZlcnNvYnVubmRWclY3Tnc4WHc4aWFpdER2amF4ODdneGRQR2NiUzlpekgxZGRTUEhNTHFWZmZ6NmVzK1MvdmhaalFpM24vUUtiNjFZSHhLSzRaeDI2cW51ZVdCNTJqcURnZ3BpOVVER2hYUFhBYTE5V2hSRk9hY3c2bUx4L0E1aDVDTXQ0cVNGRVlqZkltS2d5VkN5c3BLT2VjZDc4RDM0NkhyVWZGNE8zZnUxUFhyMXc4aVNpZE5tc1RjdVhOWER1d0ErVk91dDU2Tmx6N01PWlpraWpwODBkVUxab3dtYVJ3YTVUQVM3NUlUYVlZTld3NXdOT2RVaWx0WFcydFp2SGh4ZjRtYVNxV1lNbWtTeGdpUmkyZyszSUZUSHkweVhxK25CZko5bjdMU01veFluTVppZk9kQ2JycnBwK3plMTBpdlF1QUpOV1dPZDV3NmpZdmZlUksxZFRYODRwZDNzR0xGbDJscmF5Y0tvN2lsV1l1VnBZS1lCUC93RDkvbjMzOTZOd2M2bEFKcHdNYzRpcVdEZTVQY01QNmVWaFZ4RHM4cDFzWGJ0aGdKa09KOFI5KzNUSmsybFRselpzUitYRngvc3J4bXpSb0d6a0Iwem5IaGhSZFNVVkd4NGs5dE9NZlBBdzFvSHpiRzRxSUNubkZNbXpTQzJzcFM4bTNkQkE0Y0daeEpjZWhvQ3pzYld4ZzJaVmhSYUc5WXRtd1puaGR2RjFCV1ZzYjQ4V01RalFnTGp0YVdvMURNTTR3NkxORnIyUGhVS2tVaTRSTkdFV3ZYUHNzanF4OEJWWnIyTjNQTlgzNmViMzcvKzR5Y09BUnhjT2hvRzZ0K3QvSC90bmZlWVZaVjUvNy9yTFgzUG0xNnBjd3dERE9Vb1E5ZEtTSWlVWW90RmxSaXVTS2lnQnBEVkVTOEpnUmpqR2xHamNFYk5ia2FOV2grZGxFaDBWaEFFRVJwb3NEUWh6NERURGxsNzczVzc0Kzl6K0ZBMU92TkZRVERlcDd6d0FNOG5EbnJ2UHV0My9mNzVjMjNseENyMzQxdFJ6RGkrRXFCYVptVmtEZ3VORVZ0b202QU9CbTRXaUNGaFZBS1EzbjZHK0pMRUpJYWdVMElRNGNBaWZRM1dSMmgvY0F2VUs1aXpGbWpLTWpQRVlnNFNYZDI0TUNCT1MrOTlCTHhlRHpWbU16SnlXSE1tREZIRkxMNkRZU3d3eWg1aElkZHpvdUVsbmF0Yk4xbjY2N2xHRVlZQjRuanVzU0Y0cU0xTmZUcjFCTFRyM1RhdHZGMnFUNVpzNGE4dkR3SzgvTXdwQ1NhY0RqUUZQTUErY21uTTQwb1FTVGhKRUt3clhZN1A1NzVFMmIvL2pIMjc5dU9GQUxIa2F6YnRJK2JmL1FZc3FBQWFibnNQUkFqUmpaU1o1SnB1Q2dWOEVtOS9aMHd2NUxTQ0Z6bFlCcVdUOC9yU1NBbzdUT0NDWldDWjN6NXNObjBjVUFxdFEzaUlSSXRERmVSbHhOaHlNQWUvajYrNGZNbUtsWXMvK2pDRlN0V2tKNG85KzNibDZxcXFzb2p2YnB6ZEllcEhnT2diNWtTaElXaEJka0dmZnQzTFNWaUtKUnIrZFBvR0xhS3NuajVlcHBkWGFmUkNOY2xMeWRQVkZjUFFCcGhXcmRxUlNnVTRFQnpqSmYvdm9BdGUvYWhEUU1oSExUUUtHbDRyS3IrVUZhZ2FUaHdnTy9mK0FOK2RzKzk3TjI3QTlkUk9LNVhPc2V4YVFnRTJCSUxzYWtoUW9Nb0lDRkNucHdrTnRwd3NISHdlaS9DWi9zd3NGMVFJbzdyUm5HRkJoa0g0bWpwa2pBMGNWUGdTT21EMHI3czRZcURqaUt3UGM1SUpUQmNFOU0xTUxSTHJ5NWx0Q3ZPWEdwcUYrVll1STZCYThkNCtlWG5PSERnUUtyeXNpeUw4ODQ3ajh6TXpKcHZLbndkSVFNNkROTGx3MU1sVU4yOW5IQlFZcG5lbDZPRmlUYkMxR3l0bzNaM1E1N2o1MUNXSlRuMTFNRUlvY2d2eUdYZHVuVk11bTR5MDIrWnpvR0doa1B5SHAxTVdnOFpReWdhR2hxOThqZnBtM1E2d3RIZk1CVXkxZmc4TFA1K1BzbzZPZEhVWG9FZ3RQU0ZoUDFORWkyL2dnZnltb1MyREpBUUZvNDBjSVZBQzAyMjVmQ2RRZDBKU2JldmtlUjhFYkJyMXg0OTk1WFhVbm1VVW9yV3JWdHordW1uZnlPSjgxRXpvRU0zS0FXdGlqTHAwcUVVN1RZQkxraVRadHVncmhFK1hyTU5WMGlVSVVFNjlPbmJrL3o4SE9iTmU1M1RULzhPYy83eUYrSU5EUjVkMjVjMk1yVy9UNldQWURQTlk0eFBHaEcrSVgyVnI5R0R1c2cwSlVRWGd6Z0IzVXpYMGd6NmRXeE5RTGtlMllSdlJLL09uY3VHRFJ0VFhXY2hCQ05HaktCTm16WWlIVDc3clRLZ3c3OUFBVVFFOTV4VTNSNVRSNUhDUmdHR2xVblVEckIwNVFhYUZYTVVFcVZjS2l2YjN0T3hVeVg3OWpmUzFOU002N2hnV2ppT2M1aVAwSWZzbXBMcWcraXZpWkx1YzkzSUlkNUhwUElaNVk5Q0RnV3pDM0VRb21yb0JFTEhNRldVSUZGQ3VvR2lVSnpLSW9PelQrbEdpNGdoTEI5ajcyaWJwbWd6ejg1NUZ0dDJVLzluUmtZRzQ4YU53elJOUGkvL1NSclowZkJNNXBFeW5rTXYwUHQ5UkRKdFlNK3FXMmVicnhOVENWd0MzcldMQUovVWJHZjMvdVlMTS9MQ0JBVkVJdUZwUXdZUHVYWFJnb1ZvMS9XQWFzcmIyRWpSL3llTjU3QUlsTDZpZkdUOGowN2hmUVNlS0l4UUxtZ2JJZHlEWkh6U1Q3U1Z4alFOaEJaRUFwSzhsZ1gwN0Z4SmJtVlhDbHEwd2xJTjVBWTBJd1ozSTREMkFHWSt5ZU9ISDMyb2wzeXdKTlZha2xJeVlNQUFldlRvSWI3SzBtRDZ5T080TWFBdk9nRU5aWVZaOVYwcXkvTGVYN2NQR3hzODFVOTI3bW5nMHcyN2FKdmZ6aE1VTVFTREJ3M2gvdUNEeEtLTkhHdkhLL0w5SFZvVlJ3Z0hLUjAwdHUrQkpJWnBFUTRIYWRPbURWMjZkS2Q3MSs1VWxwZXd5ODVnajlHQ1ZkdnErWGoxWnpUdjNjVFpwL1VoSTloem9oVFN2eE9OcldJOCtlVGpORGMwcG5pa3RkWmNjY1VWaE1QaFEranN2bFZsL0JmR1M2M0l0RVQrb0w3ZDlKTFAvb2FVSWIvcnIyaUtLNVo4dkk3VGVyWHpDSUVRZE9uYW5mTHlDdGFzWHNraHl4cHdTTGRYL1BNMnpKZlNWUW1mejFDSWxBeU1INW5FbDNvZFgvWEV3ekRqSW5HOVhFNElEQlVsWWptMEtNeWlUYXVCbkRTZ0Q5WFYzYWlvS0dmbnpoMTgrT0Z5M2x1NGdJY2ZYc1ZlTjVQQ1BtZWlza3JRMnFFb0hHYkk0UDRFTFBtd2RyVFBRU1JZWDFPajU4MTc0MkN3MXBxcXFpcE9PKzIwMU1ROVhabncyOU1IOHVQdjRhN1R3VVZqTUxCM094NS9FUm9iYmFRUkFqVE5SRml5YmplN0RrUjFPQmVoRU9RV0ZZd1ljRkwvZVordC9oaFhHLzYwK3lBaG1Vd2FROUtla3VKMGFSc2RIcDJlU2htSjBnSXdNYlNGUVNNYXNJWHBEVVRkQUNnREtVd01hZnZ2WXlDbGc0bENhd09EQkdHeEgwdEV5TW9TNU9jRTZkS3VuRzd0U3lodmxVVngxbFhzcWRuQ292Y1g4c1FUZjJiWnNtWHMzcjNUKzVJMVdOb2lrZGVPbUJYQ0ZSRWlUb0tUcTlyUnU2eVlvQWFOaTVKZUpmbnlzOCt6ZlhNdGprOE1ZUm9tRjE5OE1jWEZ4ZUx3MFVXNkFSMnRTZnpSOTBEQ0k2QXFMYzZoUy9zeWRpemZSVndwVEROQXduSFpYTHVUdFJ1M1UxSmRDbG9URGdYbUR4czJsR2VlL0crY21QTVZQY3puZUk2MGJEWTV6RlVDRWpJYmhjVFFFSENqV0k3dGJjSDZNelpIQzZSaFlRcE5ia2FZRnFYbGxGYjFZdkNZMHlqcjBwSGlsa1dFSWlIMjdHeG0zWnJkTEhoaERRdGZuOFA2UlMvaTJER2ZMVmFUekhHOTNFMzZIaGFrc3NtTEdJd1kwcGZza0JTR0VHanBhWDl0cjYzVnp6N3pMTGJ0K0xxdmd0TFNVcjc3M2U5K1kwM0RiOWlBdkxtWUNXU1lsamp0NUI3Nm5ZOWZJU0V5UEtVc2FkS2NjUGhnNVhwTzZsNStlbERxK1VJcit2YnBRM0Z4Q3hvM2IvdFhNL3JEUXArbndDT3djVVVJcVJWQkZTZFRIeUNUUml3ZHd3aFpGQlhtVTlhK1BaMjc5YUJ2cjU1VWQ2MGlLNzhGYmppWGRidWFXTHQxTi9QZitvaWFyWHZZc1N1Qm5UQkJKOWkrdXdIYjhhaHFwQ0g5YWJ3WFpnekRJMTBIRHo4azNFYXEycGJUcDJzSmx0NE93WGdBQUNBQVNVUkJWQytjbXpUM1YxNTVoYzgrKyt3UTRaUnp6ejJYOHZKeXdURjBqcWdCcFJNZUpRbVJwSEtKU0pkZUhkcFFWcFRGMmowT0NSVkFDSUVyQWl4YXNZRng1em56V21kWVFybzJwYVVsb20vL2ZycG1TMjJLYnZjTHgyOXBaWE9TSFZiNk9CcU44RG1xRTFnaVRrQTNFSEwzRXBJdVdRRk5hVTZJSGhWZCtkNFpIZW5Sc1p3T2xXVmtadWVTVUxCeDNUcis4WTkvOE03Q1pTeGJ0NTJDVHNPb2QvSndUSVV0UU1vUWlCaUdhRUJ6QUZBZUhaNUtHbzhYREYzbGVyTXpJUW00TmtHYU9YdDROWGtSUTBqdG9wVkhvRlZYVjdmazZhZWZUdTNrQ3lFb0xpNW03Tml4UjV4MTlaanpRT25xd1JvVDdkcVlPTFF0eWh6UnAzUGJlWnZmWFlldGd5QTFDV1ZRczdPQlZUVzdhZFc5Qk5PUUdPRVFJMFo4aDc4Ky83SS93amhZdGgvYzZkSUhMY2NIcWFjTTJQOTdZUWhNUzVDZFpWRldFS0NndElUcTlubDBMRzlCZWR0MkZPWUVDVWhCZFA4K2FqZXQ0eTl6bm1icDBtVjhzSFFGdTNadUp4R0xrdEFCakp3U1pOc0VEUmxCWE9uaG1reHRlcExkYmhSVFdjUTFLYytUM3EveVZyeHRERGRCVUNYb1VWSE80T3AyQkEyTmNQMzAzSFdaTjI5ZW42VkxseDd5c0l3ZVBacnUzYnVMTCtvOEg4Mjg1NmdiVUxKWHNYTDFPdDJ4b2tTWTBpWERVUE9IRCt6QnErK3VJaXFDT0VxZ2pBRDdiWWQzbDZ4bFdMZldLUkQ1MEZPSDBxSkZNVHNUK245dTcvZ1hhUm9HU0pPV0xZc3BhOU9hTGwycjZOMS9BSjE2OXFkTnh5NllHUUdFMGtTYmJUWnZQOEQ3eTlhemR0VnkzbmoyTVdwV0xrSkhtLzFWNXdCbzF5ZnpsR2hYZ09HaXpHYXZjNjdEb0FJWTJrUnBCNjBpWC9vVENxRXdwQ1pEdUl3NWJTRDVXYVlRT2dFaWlPczZORWViK2NNZi9rQTBHazA5QkVWRlJWeDU1WlVFQW9GdnpGQytFUVB5NHI2bkZOUFEyRlF4NjJjL1orYjBtM1huRGlYQzBBNmQyN1drcXJJTml6L2JqWkFXamphUUlzamlaYXZaOTkyQk9qTkxDZ1MwS1dzaitwOTBrbjdoblRWcGFiSCtvaUVENE8yVWo3dmtZbTY1OVJiYWxMWWtFZ21Tc0czMk5DYllVcnVkenpac1pmbjZ2YXlxMmNXMjNjMGtiQmNyWGs5TnpXN2NtRXNBU09pMFhUYmxxL3dDd3BFRTdRRENrQ1NFaVN2QU5tME1FY08xNHAvenN4MDBmS0UxVXRsVWxaY3lxRTlIREd5azcwUU53MlQrL1BsNjhlTEZoNVRvWThhTW9icTZXaVR6b1crNjkzTkVEZWp6UHBnUWdrOVdyMTcvMWh1djh1NHBKOU9wd3ppRWdNSXc0dFIrSGZSSDYydHhaZGdmRVVEdG5nTXMrclNXZ243bEJGd1h5MUNNR24wR0w3KzNDUWg0UkZUU1JXb1Q2UVk5dVFIdDRDM2ZLUXhEY05KSi9abDIrelRhbFZmd3ljcVBXZlQrQXQ1ZHZKdzF0VTJJbGwzWm5RaVQwQmF1c0hCMUJwYTJ5VEdhUFFGYnJiR1RVdUtPZ3hES3N4M3RMVTFxYWVINlFESkRDbHloVUVJamhJdHdWZHFFS0oxdHpRdW4wcFNFelNpamgzYWhKQ2NvcEE5NVZkcWx1VG42VDk0bkp5ZUg4ZVBIRTRsRXZ2U092K3c3T0w1MjR6L0hDem1Pdy9QUFAwZmRubDI4OE9JTGFPa3A5SVFNR0g1U1Y0cXlUTFRqb3YwZDhiaTIrUHY3SzJsMHFVTUtwTkFNSER5WUZxMUxrMUhOUnoxNnFzZElBZktnSmxhcjFpMlpPZk5IVkxRckY1dTNiT0hxOFZjemRlck5QUFhucDFuejZXYnFZeWIxYm9TWWpKQVFBVnhoSFp6SSs5NUE0WE1VSnFXWmt2cFJHcFRmQm9BMHdSUkFhb2xVNlR5Tmg0bThJSEJkVGNmMjVad3lzRGVtQUtFT3FpYk9uejlQcHhNbUNDRTQ3N3p6Nk5tenB6aGFmRC9IckFGdDNMZ1JoR0RCZ3ZkWnQzNjlOcVhBRW9yU3ZPREVZYjNhRTVhZWFyRXRnaVJFQnNzKzJjaW03ZnZ5SEYvdXVyUzBqUmc4ZERDR3FmMHl5OFFWQnE2UTJGcmlhQS9VbnBHUndjMDMvNUNCSnc4VWFNMlRUejdKcWxXcmlNZmkzaHF6NjJBN0RvWmhmaU1YbnBFUllmejQ4YlJvMFVKSUtURU1UeHl2dnI1K3llelpzMmx1Yms0MVlvdUxpNWswYVJLV1pSMXpobk5VRENpZGR2Kzg4ODRqSEFxeS84QitYbmpwWlYvQjJDYXNFdytmTTdRWDJXWUNpWVBXQnJZSXNhdkI0ZjJQMTJNajBjTEFNaTFHanpxVmpMRGhrek1GZkdJQ3I4SkNhR1RBNHNKeGwzTDVaWmZkWXhnR0d6ZHMwbzgrK2lnSjIvWTlpOEl3TFl6UGJjU0pRMWFka3hvZi92QWpyYk45NkVoRmYrVjc4SDd0MTY4L1o1MTExaUZzOHdCejU4N3RzMmpSb2hSa3d6QU14bzBiUjFWVjFiRnBPVWZLZ0E1VkxEN29pazhaTW9UMkZSVUlBZi92dVJkb2FHcWU0L0ZFUTVleXdvbDlPN2NoNERZZ2NYR0VSWk5qOGY1SGE2bVBPbHBoWVFybzFhTUQ1U1VGV0ZwNVluSUNFRGJDYWNKUWNVN3FXODIwbTM5SVZtYm1OTFRnOGNlZllOdldyZDdQb2c3T3NwSzdWNGR5a2g5Y28vQUltd1RTa0VqREFGOWFVcHJHd2NHL1VuNGI0WCs0WU9uRE9BeURTQ1RDaEFrVEtDd3NGT204UGp0Mzd0Ui8vT01mYVdob1NOMVpaV1VsNDhhTkl4d09wM3BvWC9ZNi9EdElmeDIzSGlpNXV5MmxwTENvVUp4ejFtZ01JZmhremFlODkvNEhGN3ArWVJNSkdnK1BIdGFMSEt1Um9FeDRTYVdSd1NjMU8xaTlyaGJiOWJZWld1YUY3K25Yb3dPR1NtQWlQREM3VHBCcEpHaVZGMmJHclRmU3JrMUxJYlNpcG1hRC9zdlR6NkJjOXhERzFDOXhFeDZ4VlJvOHdqUk5Nakl6eWNyT1FocEdtbzBkeWhULzVRWWtVeHNtdzRZTlkvVG8wZUx3SHRsTEw3M0U0c1dMVS84MkdBeHkxVlZYVVZWVkpWelhQV2JEMXhFdjQ1T0FKKy8zRnQ4YmR3bi85ZGlmMkZtM255Zi84aXpEVHowRlE3bVlWb0RxcWhLNnR5L2kvYzhhMERxTXF3MzJON204czJnMWc2cEtDWnFLb0NHbURlemI1ZFpYMzEzSDFqb0hNeUNRS2tHMjVYRFpoU1BwMWFXczBzQVQ2djNqWTM5a3c4Wk5hVnVyQnp2QzR2UEdMR2hNUTFKV1drcmZVN3R6NnFBK2xGVjBJQ003bXcwMWExbStiQm03NnVPczJMUWZPeFNpMFg4NDlQOFF5SklQVVVGQkFUZDkvL3RFSXVHVU1idXV5K2JObS9YczJiT0p4V0twdTZxdXJ1YWlpeTdDTk0xRGh0TEhvaUVkOFRMKzRMUVl5dHQzRktOR2pkU1AvdmNUdkRsL0hxdFdyZEZlaGFGb2xSMFVZd2IzMXF0cVhxTWgwWVF5czRqWkVSWXNyMkg5bm1iZHZTUkRCSEhwWGxaSVZYa2gyL2JWZ3JBSXlUaG5EZTdHbUZNNkVSRFVLRmV4YXNVcVBXZk9NeDZzVHdoZjNzQUI2WW1XNEFhUnBzSVJCcWJqa2kxdDJwZGtjdWJRZmhRRmh4S0pOOUJVdjR0bHl6NmlvTGdGTHo3M0RHLzk3ZThVdEt5Z2JmZFRxT3piaHczN0hUYlZyQ1doTFdKaytGV2dWN29ua1NZcFpDU0NjODg5ajRHREJnclhkVEZOTTBVVy92ampqN055NWNxVWtXUmtaSERqalRkU1dscjZUeFAzcnhxT2p1Wmsvb2lYSXVrZnhyQUNYRDFoQWs4OS9UUzdkK3hnenB4bjZOcTFHNVlsQ1FzWTFLc1RIZDVjUk4ybU9GRWR3UllodHU3Yno5c2ZyNmRqU1RWQnBjZ0xDREZzUUpWZXVHbzlNVGRLdjY1dHVleWN3V1JiaHJDRWg0ZCs0czlQc20zYnRoUmpyTkNHWCs1N3BETkNCMEVvcEZEa2hNT2NWRlZKVlhrV3NhWWRUTHQ5T3ZzMmJ5TFJkQUFNU1RBYzVySnhZekVNZzUzYnQxTzc3eDNxd3FVVWRlNU5kWS9PZkxwK00vRm1yNEowa2FtZHRmUWNxRjI3Y3E2Nzdsb3MwenhrRExObXpScjkrT09QSDVJcmpobzFpalBPT0tQeTY1cTRIMmxFNGxISEJYVHYzbDJjZWVhWnVLN0xjODg5eDVZdFc1S3JCaFJraHlwSER6K1ppSTVqS1Fld2lMc1IzbHk0bXIyTnRuWTFXRkxRcjBzWmxZVkIydWRKcmo3L1ZFb0xNa1VBalhac1ZpMWZycDk3L25uUEd3aVI0aXRLTmZPRVR5bUhJbVRZOU9sZFJZTWRaZHVCS0srK3VZVGRlNXVJTnpaaTRmVjM0ckVZNzc3N0htZU1HSTVwQ29Sd2lDZGlyRm0zZ1MyMU8ralhydzlGMldFc2JKQUNWMWlIeEVqVE5Mbjg4c3ZvMXEycjBJQlNMa29wRW9rRUR6endnTmZlOEhPbDFxMWJjK09OTjVLVmxWWHpUUUxsajFrRFN1NHpUWm8waVhBNHpNYU5HM242NmFkeFhRZUpRMGpxbWlGOXFxZ3F6U09rNGhoSUVpTE02azExTEZxMUZXMllHTGlVRjJXSTcvUnJ6OFR6aHpHZ1EzRmxFQmVwYmJTeWVleFBqN0d0ZHJ2Zkp0Q0hEVDZTdW9RdWtqaTlxOXB3WUhjTmlEaHJObXltdGk0S3JvVWxCVktvWkwzR2xpMWJtRFI1RXJmY2NoUGR1bllnSk9LWWJoUDF1N2F4ZitkbUxqbHJBTm15aVpDdy80bHh2cnE2bWl1dXVBTERNSkYrZVE3dzl0dHY2K2VmZno3bElRekQ0S3FycnFKZnYzNkM0K2djVlFPU1VtS2FKdjM3OTA5NW9VY2VlWVR0MjdkcnBUUUJRMU9TRXhBWGpSeEVKazBJRmNOQnNpOFJZTzY3cXptUTBFdTBnTERVWEhIK0dmV2pCdlVZa1MzZEdxRmRCTEJzMlhMOXpMUFBrYkJ0bEhMUnJ1MnQrS1ExY0pRQmhtcW1ZMWtlV2JxQm9sQ01jOC9zdzk2ZG03Q01BRnBiUHV6Q1Q2Nmw1QWRUcDNMcThGT1pjZnV0dlByaUhPNjg2VDg0cFhNeG5kb1UwS1psUGkxekFvd2UzSk9RT29BaEVpQWxoalRKeTh2amh6LzhJYTFhdFJKS0tiL1ZKTmkxYTVmKzlhOS96WjQ5ZTFJVjNjQ0JBeGsvZm56S3dQNHZJZXhiVThaLzBRY0xoOE5NbURDQm5Kd2N0bTdkeWlPUFBBclNRTGt1cG5ZNXBVOEh1bFVVRWFBWnBJMXRoWGgvMVJaV3JOL1Z4MUVhcFIweWdqSS95eEx6aFd1amhFSFUxanoyK0ZQczNGM241VG5KRHljT3Jic01KMHB1eUtWcmVUNFYrU0dtVGJ5QVlUMktHTmE3Z3JBYjh3aS9UZWt6ZjBqR25IVTJrNlpNUVFDR29TbklEVE5xU0ZkKzlzUEw2TjJ6Sys5L3VKemZQenFIZ29JQzhyTXlrSzd0Q1Nab3hkbG5uODNJa1NPRllSZytGUjBrRWdubXpKbkRlKys5bDhwN2lvcUttRHAxS2lVbEpTSWQvbkxDQTMxQloxcHJ6ZURCZzhYSWtTTUJlUHp4eC9sczdYcXROSmc0RkdVYTR0eVJKeEd4NGtnUnhSR0Mrb1RGYTI4dEp1WlNnVFJJNG11MGxMakM1TE5OVy9YcmI3NExNdUN2T1IvMjRUU2dGUUZzT3BUbU0vS1Vhc2FQSFVsWmJwaDh3K1hTa1NmVHFiU0FzckxXZE9oU1JjL2UxWXdjT1pJZi8rVEhaR1JsZVkxSDdXQUlGOU9Ka3h1U2JObTVsNjJOc0NNZTRJMzNsbExXb1FvZENLS0E4clp0bVRwMUt1RndPTlh6a1FKV3IvNUUvKzUzdnlNV2l5R0VKOFE3ZHV4WVRqdnR0SlR4SE9uRTk3aE9vc0hyeW9aQ0lTWk5ta1JoWVNHMXRiWE1mdmhoVDhsUWFRSm9UdW5kamo1ZDJtRHFHRm81dUVqZVcxN0RxczMxNjEwdE1JWFgxMUhDb2lHaDYxNThZd0VINHZnYm81Njl1TW50TGFIODFyTUJLazYzRHFXMHlzcWlSWFlZU3ljSUdKTGkvRXc2VmJTbHNxS0NyTndDbEJEVTFkZlIwTmlRNmhocjVaWG9sblJRZGd3ekZDSXVQQTJ6MmgxN3NVSVJCSkp3eU9MR0c2K25VNmRPSXBsM1NTbUp4cUk4OE1EOWJOaXdJZVdOcTZ1cnVlR0dHN0FzQzlNMHY1WVE5cTBiWmFUSDRuUU5yZXJxYW5IeHhSZmp1aTUvZWVyUExGcTRVQXNDU0ZkVEZMYkV4U05QcGtYRUlxVGlLTzJ3dFZFd2QrRm5SQjB4eC9KbnFuRWtLOWZ0eUh0bjhSb2NOd2pDUUdodmFkaEpNbUVJMS91bzJpUWNsQVF0bCtpK0JnTENSWm9HRGE1ZzNvSlZ2UEhXZTd6MTVsc3NlSGNoUzVaOHlLTEY3elBycnJ0b2prVnh0VVpJMDFOcEZSS2tScmt1d25ZOVluTkhFMi9ZVDNGaE5xZWNPb2hMTGgxYjczV2dkWXBrNnNVWFg5Qno1c3hKUVh4emMzT1pPWE1tYmRxMEVla0xndW45bjY4eXV2aTM4MERKWTFrVzExNTdMV1ZsWmV6ZXM0ZmYzdjhBKy9jZldPSzZEZ1l1ZmJxMFpsai9qb1JFREcxWXhGeUR0eGF2Wk8zV2ZSY21sQWRDZHgzRlA5NzVnS1o0d2x2RFNVSkpoUmZpcFBJZ0ZwNHY4b1RyTkM1bXdCUHhkWkRzYm9qeTNPc0xpUkVHYVNIeHdvM3JLbDUvN1RXZWV1cEpER25nS0hDVllMOWpzZGNKRUFrR0NRa2JXd3RpWm9SWVBFYXZMaFhjY2NjTTh2THk4dFBEMGZyMTYvWFBmLzV6b3RGb1N0ZnJoaHR1WU9qUW9VSXB4ZkZTdGg5VEJpU0VvRjI3ZG1MS2xDa1loc0g4K2ZONTZlVlgrbmhPSTBGT1FJZ0xUKzlOUlhIRW05UWJBYmJWeDVpM1lCWE5ybkdOUWlDbFM1dXkxdDVHZ3daU1QzSnk5VmhnSUpBKytaTkdJd3hKT0NkQ0FvdUVNUG5ib3JWczJOTk0zSWlnbGJjWHFwVDNiN1hqOE90Zi9JSU5HemZ5d1FjZjhzaC8vNFhmL0drdTAzN3pWK3lFUTM3RVJBaHdwRVZHeUdMcXBQK2d1bWNQa1Q1dGowYWpQUERBQTZ4Y3VUTDEyYzg4ODB5dXZmWmFETVBBTk0zakp1YzVKcExvUTdyVGhzRWxsMXpDd0pOUG9xbWhrUWNlZUpBdFc3ZHBLUlNXdHVsYVZpRE9IOUdmaUc1RWFFV3phL0czOTFleWR2disyWTR3a05MZzVINmRLVzFWaENsZFVFN2FxbXBxNWZEZ2ZwaVFhRFBFaXMrMjgreThEM2o3NDQwc1hMNlJxTEpJdU41MnF0YXV4elNrTlZvcG1ob2ErZFV2ZnNYWjUxekExSnZ2NEpsWDNtSGh5bHBXZjdxQjN0MDZFWkZ4Z2tUcFVKcFB6ODd0UkZKdU1nbk5lT09OTi9SVFR6MlYrc3dkTzNaayt2VHBGQmNYaStRQTlmUDB2UTVQQWRKZngwbzRrOStrOTBsZVVuRnhrWmo2ZzV2SXk4dGwrWXJsL09hQkIzQzFRdUlRbEM1bkRlMUd2OHA4Z2pxT0VnRTI3VzdtOWZkVzBxVGtIS1NrSkQremN0U3BBNUFrUUNmQWwxc2d4UWlyVTQxRUJ3c3JzNEIvTEZuRHZYOThsWm0vZTU0VzVaMkpoRE14aGNkZmlKUzQyZ01XQ3NQZ095Tkc4TW9yYzZtcmI4QjJKTFlPNFlnTXR1MXBwam5heVBDK2xWdzB0QXNYanhuaWN4NksxTU94WWNNR2ZlKzk5N0p2M3o2VVVtUmxaWEhiYmJkUlhWMHR2dTY3L0xjTFlVbW9oMUthNGNPR2llOWRlaWxDU3Y3NHg4ZDU0MjkvMHduSHJoQzRGR2RJTVdYczZlUUZYS1F3aUJIaXBiOHRaUDMyK2dzZERSbEMxM3huY0M4NmxMWEFVMzVPM1N4S2dDdDhTWGt6Z0tzTTlqWXFOdStPczR0aU5qY0dXTEJrRlgxNzl5U0lEVGk0U3FOOStHcFdWZ2FSU0lSdDI3WWpaUUMwaVNFTWxDMnd6U3hXcmY2RTgwN3B5cDNqaDR0MkJVRWhmS1NqMXByR3hrYnV2ZmRlbGk1ZGl1TTRCQUlCYnJycEpzNC8vM3h4UEpYcTM1Z0JmZG1Ua2M2MkphVWtGQTR6ZWNwa3VuYnRSbFBEQVdiTnVwc2QyM2V0MTlwVGk2OXUzMEpjZU9iSkJHbEdTOG5lcU9hNXVlOFJ0L1VTZ1V0QmJvYTQ3T0x2WWhrK2ZsQkl2d0pUQitkZ3JpYnVDRDVkdDVGbVcyQ2JFV0l5ek9idGU5aTdleTl0UzFvaXBIc3dlNUlHQXdjTzVPMS8vQU1waExlWllYaUNlb1pwNFRnMjdkb1UwNzFkTGlIVmhLRVRhSzFUay9ibm5udE9QL0hFRXlpbHNDeUxNV1BHTUdYS2xJbUJRT0FRbGNHdnMvSTk3ZzNvOCtBYzZRM0U5SkkrT2RxUVVvSzBhTmV1VXN5NFpTclpHV0dXTGYySSsrK2ZUYUxaQmkwSkJRd3VHTjZWQVoweU1VU2Nacko0ZTlFbVZuMjJ1MDlNR0dpaCtPNjVJK25kcXl0YUNqOFBVbDVWNWdQZlVSSWhERFp1M2t4dWZnNG1EUmc0Mk1yaXMvVmI2RlhkbFZ0dnZwNlpzMzdFejM5eEx3Lys3a0d1dXVvcTZ2YnM4VW1rYkxTd1NmZ2l3dGx5UDJlZTFJN2kzSkNRVmhBdERFemZNRmF2WHExbnpacVZhaGhXVjFjemE5WXM4dkx5SGo1YysvVC9PcTc0dDYzQ1B1OHBHalZxbExqODhzdHhYY1dmL3ZRbjVzNmRxNVgyeUtWS0M3UEU5ODRaVG9zc0Ewc290aCtJOGRkNVM5Z2ZkYlRDcEtpb3BiaHU0blZrWldUNEJFL0c0ZFlOU3RQUTBFd2tJNU9DekFoQmJXTXFHMjFIeWNzTzhQMGJybUhhTFZPNS92ckpYSDc1Rll3YU9aS3hZeS95Y2hycERXS0RJa0dHT2tCbHkyeUdEdWlCbWR6UUVCNEFiTy9ldlhWMzNubG5hdExldG0xYjdyMzNYdHExYXlmNGxwMWp4b0NTc005Z01NZ3R0OXhDbno1OTJMZHZIN05temVMVE5aOXFRMHBQNnFsYldmMGxaL1luSXFQRVJZQTNQOTdBQnlzMzRRaUJ4bVRNNkxNWk5tUUlCZ0xocU5TS1RXb21MeVZ4eDJYVkordm8wN1ViSWVVU1ZEWWhZZE8yZFQ2aGdKZHFHeElNUTJCYUZqUHV1SU4rL2Z1Q1ZsZ0daTWs0blZzR3VPVE1nWlFYWlZjYTJvUE5hZ1NOelZFZWZQREJ2TmRlZXkyMVdYSDMzWGN6WU1BQThVM3lPWDhyRGVod041eUVjTFp1M1ZyY2RkZGR0R3paa2xXclZqSHJKeitoZnUvZU9sTzdaRW8zZit5SVBnenEzaFlwWFBaR0haNTY1VDEyTk1TMUxTUzV1WVZpMHFUcktNekxRK0lUT2doU2pVUnZpOE9pcnI2QjJpMjFERDkxS0IzYmwxTlowWWJTMGtKUE5kbGZGUlZvbElLY3ZIenV2dnVuakI0emlsR2p6K1Qwazd0eitWbURPUHUwWGhPRFd0WGc0Njd0aE0wYmI4elREejc0SUZwcnNyS3ltRDU5T3VlY2M0NndMT3R6dzlhWGxlUEhZdWY1cUk0eS9pOTlva0dEQm9tYmJycUpjRGpNeXkrK3dNTVBQWmpuT0RhbTBMU0lJSzRkZXhvZFcyY2djVml4WVRldnZyT0dCRnlqRFlOQmc0ZFVublB1dVppV2lVOEk1SmYxMnB1M0NSTnRCRm0vYVJzYnR0VFNzMDlmMnBTWHMvS1RHclpzcVNXUjhKQ05TYk9ycmQzQjd4LzZQWXNXdk1mOFYxNWc2N3FWRE9qZWhpRHFZUk9ORkJMbGFqNzVaSTIrODg3L1pOKytmVWdwbVRKbENsZGVlYVd3TEl2anVkdDhYSVN3dzA4Z0VPREtLNis4Wit6WXNXamw4dUQ5RC9EU3EzTzFWaTdTamRHdEpGZGNlK0Z3aWpJTjlyc216ODk3ajAwN0Q4eTJOWVF5TW1zbVRibWUxaVVsL3RNclV1TU56NTRNRkFaeEdXREZ1azI4OXZhN05OcUtkeGN1NGFLTHIyRFNwSnQ0L2JVM3FLM2R4dGF0VzdoNndqVTgvOEpMN04yemg1ek1EQ1pkY3dVdEMzT0Y1ZCtlY3FHKy9rRGQ5TnR1WTgzcTFRU0RRY2FQSDgvTk45OHN3dUZ3Q3ZQemJUekg3S2ZTV3BPZG5UMXQrdlRwRE9qWGwvcTZPbjcwbzVrcyszaTVOZ1VFZEl3UmZjdEhYSHIyTUl5Z3lkWmRkVHo3MHR0RVhYMk5xeFZWblR1S1NaTW5FYkFDZmdoTCtUbWZhTnpBbGlhMllWRzd1NTRGUzVZUmRTVURCcDlLWTFPQ3UrKytsOG1USnpQNzRmL2lndzgrb0x4ZE9TUFAvQTYvL09VOTlPeGVKUXlmaGs0SWlkTHcwN3QvbHZmM3Y4L0hOQVRqeG8zalJ6LzYwVE1aR1JrWWhuR29nUEFKQS9wNlJobGZkYWVxdkx4Yy9PSTN2NlZOdXdyV3JsN05qRnR2WTlQbUhWcktJRmxTejcvODlFNWNQS1FFVXdSNWFlRlc1aS9mTWpzcUUyZ2pldnBWNDY4Y2NjcXBnNUNHSUdBYVhrNmtCVUlmWkphWFdnSkJHaEloRnErdTVmR25YdUREeFl2SXlnaFRWRkNFRzIxbTVCa2pLQ2xyeTVoenorUGNNU05GRUJkVEt3d0pybVB6MkdPUDZvY2YvbjFxbTNUV3JGbjFPVGs1RnlYRGVmcm80Y3Z5d01QdjUxZ3AxWTlMRDVUdThudjE2aTErK2N0ZmtaK2Z6enR2djhOUGZuSVg5ZnYyLzB3S1FXN1FFbGVmZXdaRGVyZW51WGt2YzE1NGc5bzZwVjJaT1QrVUVaeC8rNHdaRkJZVzRqTzErR015emNGaEs2Q0Z4MTFvbUxoS3MzSGpCdDU4OHkyZWVPSUpIbnJvZC96MXIzOGxQNytBQ3k2NFlBUm9qM3RJZTl1dTgrZlAxN05temNKeEhDNjg4RUx1dXVzdWNuTno4NC8xNVBmZklvU2xLL0FOSHo1YzNISEhIV1JrWlBEMDAwL3o2MS8vK3Rab05FcEFTTnBtUjhUa3k0WlQzYlVGYTladDRhK3ZMcVBSTnBkZ21QVHAwMDlNdlBaYVRPdmd4RnVndmVuOG9lOTRzR09ObDBRTElYQWNod0VEQm5EUFBmZVFtWms1UHlrdElJUmd4WW9WZXZyMDZlelpzNGZ2ZmU5NzNIdnZ2ZldGaFlVaTJXWCtOb3dxdnZGTzlOZGhSTW4rME9XWFh5NXV2UEZHVE5Qay92dnY1NGtubnRDdTdSQlFpZzVGRVRINWlyTm9XMUxDNjMvL21DVXJ0dldKYTFWaEJvTk1tSGdkZzA4NUpiWG1JN1JDSGtZdXJiVmZxcm1PcDdYb2swbFZWRlR3MEVNUFVWSlNjc2lpMzdadDIvUVBmdkFEMXE1ZHkrV1hYODdQZi83emV3b0tDdkxUdTh6ZmxublhjZW1CMG5PQkpLbDJPQnptKzkvL3ZwZzRjU0x4ZUp3Nzc3eVRGMTU0WGl2WEp1akc2RmFTdC9RSDExMUVWbmFBSi83eVBMdjJSTmM3UWxCWVhDUis4cE83S0NrdFJXdmxDWmtvTjUyTXc5OTk5MkNPUWtpa0VMUnMyWkxaczJmVHVYTm5rVnhSVGc1SnAwNmR5ckpseTdqaGhodTQrKzY3NzhuTHk1dVdETDJIa3lIOEszMnhZd215Y1Z3YTBPRVhtOVJEejh6TVpQcjA2U01tVEpoQWZYMDlQNXgyQ3kvLzdYV3RYWmRjb2ZwV1YrVGVjOVBrYzdEZFpwNzU2endjMjBWclFYVjF0Wmh4NTM4U0NBWFJ5a1hpVlZIcDcrRUIzNzBRbHB1YnkzMzMzY2Znd1lORnVqZHBhbXFxdU8yMjIvUmJiNzNGSFhmY3dZd1pNMFRTZVA0ZFBNNXhhVURKTG5WeXlwMmRuVDEvNXN5Wkl5Wk1tTUNPWFR2NTRZenBMRmp3Z1RhMUprSjhXdGYyaFV5NTdqSnFhK3RZOFA1U1RaSnY1NUlMeGJoeGwyQklFR2s3N0NuNHF4Qm9wY25JaVBEVG4vNlVrU05IaW5RdkVJMUd1ZSsrKzlhLzl0cHIvT3BYditMNjY2OFhTZUxMWTQyNzhOK2lFLzFWUWVQSlB6Tk5Nelh1eU03T25qOWp4Z3l1dWZwcXRxNnQ0Y2FicHJKazZVYzZnRUdlRUtKWDIySng0OVhuOGVHcWRhemJ1RlVyTzBiRWNMaDUwcVgwN2RvV1N6ZGlDWUVXTnE3WmpEUWNMRzBRTnNQY01XTWFsMXg2WVdVU0phaVV3blZkL3ZDSFAraFhYbm1GMmJObmM5RkZGNG5rejVOa0d2dFhabDFISWt3ZFRRRCtjZU9CMGk4aithVG41ZVdKbVQrZVdUbjFwaDlRVTFQRGRWT3VaK1dLMWRwVUVCYWF0cTN6eEVYbmoyYkxsaTNFWXMxemhBR0ZPUUV4K1lyUmRHd1Z3WTN2UTBpSnEwMXMxMFVZRHBOdm1zejRheWRWbXNGSVRaS2VMeDZQODlSVFQrbTMzbnFMUng1NWhLRkRoNHJrQ3M3aFBFRW5QTkJ4Y3BSU0JBSUJzckt5YW02Ly9YYngwNS8rbEkwYk4zTFZWVmZ4MFVjZmVVUXJya1ByZ2l3eCtPUyt3Z3lGTDNJeE1FeVR6bTN6Sjk1NjFTamF0VFN3M0JoaFpSR1JpZ3ZPSDh5VTcxK0NGUW5YYUhHdzdILzk5ZGYxbWpWcmVQVFJSeWQyNk5BaEJaai90czYzdnZVR2RMZ2FrR0VZVEp3NFVmejJ0NytscnE2T1NaTW1zWFRwVW0xSVFSQWJLUnlrRmNDVkJtaVhUT0U4UEtScnFiaHgzR21VUjJ6eTR2dTU1UFRlakQ5dk1KbFdzOUJ1d2grbXd1TEZpN1VRZ3Brelo0cWNuSnlIa3hWaGVyWDE3M3pNYi9MTi85V0tKVDJjcGJOOVhYREJCYUoxNjliNjl0dHY1N3JycnVPaGgzNm4rL2J0S1F3a3J2TFlYaTBKaG5hd2NCbmRyNU1RVGE3ZXRPMEE0eTQ4bWVKUVZKakU2Z2dFODVVTEJ4b2FyeWtySytQa2swOFd5WHdvdlVPZVBxbzQydmZ6VmVEQ0p6elEvOEtna2puSjRNR0R4V09QUFViMzd0MjU1cHByV0xSNHFRYUpLU1dXMWtnRldrdkFJcXdWWncvdEpxNjdkTEFvRGdrUlVBS3BRdDVDb0NISXlzcDZ1RldyVnQ5S0lOZ0pBL3FjQmx6U0cxVlVWSWo3N3J1djh1b0oxM0R0NUp2NCs5Ly9vWjJFalZDT1A2aXdjRVFBUXdZSlNFWFFqQ0cxRFc0R1dtVmpFOEJPVXhoeVhmZUVwUnpORUpaTUxQKzNUKzVYelNjTzV3Qk1HazV5dzBOclRXNXViczJVeVZORTMvNG42ZC84NnBjMDdLL1haNDBaTFN4cG9iVkNDMDhVVndyREU1a3pMWkwwODRZUUNNTkUrSW42MGVydmZGM3ZjZmo5SEZjVWQrbHpJT1Z6S1gvUjY0czh5Zi9tZGJnaEpkOWIrK1AzM2oyN2k5ODkrTUE5ZGZYN2VQSGxWM1UwRmtNcDE1ZTFWUWdra2dCYUMyOFhUR2dNclpIKy81ZWU1eHp2citPbWtaaHN2SDBWVVpBajNmQ1NVcEtkblQzdHlpdXZGRDE2OUdEVnFsVTZGb3Y5MjR3Y2tnL3lrYnJmcFNpa3pRQUFBRlpKUkVGVXJ6MkV2ZnZ1dTRlNDBTLzdvdEwvN2tpR2lEUnFHV0hiTm5QbnppVVNpWHhyWWFhSEc1RFdPdlc5bkRnbnpvbHo0cHc0Sjg2SmMrS2NPQ2ZPaVhQaW5EZ256b2x6NHB3NEo4NkpjK0ljOWZQL0FVVHA1K0pPMjVqTUFBQUFBRWxGVGtTdVFtQ0NcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEyNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2NhdGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDMzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg3OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg4MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbmltcG9ydCB7IEFjdHUgfSBmcm9tICcuLi9tb2RlbHMvQWN0dSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3R1U2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsID0gJ2FwaS9hY3R1cyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgZ2V0QWN0dXMoKTogT2JzZXJ2YWJsZTxBY3R1W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fc2l0ZVVybClcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKTogQWN0dVtdIHtcclxuICAgICAgICB2YXIgZGF0YSA9IDxBY3R1W10+cmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBkLmRhdGUgPSBuZXcgRGF0ZShkLmRhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ0Vycm9yKGVycm9yOiBSZXNwb25zZSwgY2F1Z2h0OiBPYnNlcnZhYmxlPEFjdHVbXT4pOiBPYnNlcnZhYmxlSW5wdXQ8QWN0dVtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSAnLi4vbW9kZWxzL21hdGNoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hdGNoU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsID0gJ2FwaS9tYXRjaHMnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGdldE1hdGNocygpOiBPYnNlcnZhYmxlPE1hdGNoW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fc2l0ZVVybClcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKTogTWF0Y2hbXSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSA8TWF0Y2hbXT5yZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGQuZGF0ZSA9IG5ldyBEYXRlKGQuZGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nRXJyb3IoZXJyb3I6IFJlc3BvbnNlLCBjYXVnaHQ6IE9ic2VydmFibGU8TWF0Y2hbXT4pOiBPYnNlcnZhYmxlSW5wdXQ8TWF0Y2hbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvbWF0Y2hzLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmFibGVJbnB1dCB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5pbXBvcnQgeyBDbGFzc2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL2NsYXNzZW1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmFua1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfc2l0ZVVybCA9ICdhcGkvY2xhc3NlbWVudHMnXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDbGFzc2VtZW50cygpOiBPYnNlcnZhYmxlPENsYXNzZW1lbnRbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3NpdGVVcmwpXHJcbiAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXNwb25zZTogUmVzcG9uc2UpOiBDbGFzc2VtZW50W10ge1xyXG4gICAgICAgIHZhciBkYXRhID0gPENsYXNzZW1lbnRbXT5yZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dFcnJvcihlcnJvcjogUmVzcG9uc2UsIGNhdWdodDogT2JzZXJ2YWJsZTxDbGFzc2VtZW50W10+KTogT2JzZXJ2YWJsZUlucHV0PENsYXNzZW1lbnRbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL3JhbmtzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbXBpbGVyL2J1bmRsZXMvY29tcGlsZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xudmFyIHNlbXZlciA9IHJlcXVpcmUoJ3NlbXZlcicpO1xudmFyIF9fY29yZV9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGNvcmVWZXJzaW9uID0gX19jb3JlX18gJiYgX19jb3JlX18uVkVSU0lPTiAmJiBfX2NvcmVfXy5WRVJTSU9OLmZ1bGw7XG5cbi8vIE9ubHkgcGF0Y2ggaWYgeW91J3JlIG9uIEFuZ3VsYXIgPj0gMi4xLjEgYW5kIDwgdGhlIG5leHQgbWFqb3IgdmVyc2lvbiAoaW5jbHVkaW5nIHByZXJlbGVhc2UpXG5pZiAoY29yZVZlcnNpb24gJiYgc2VtdmVyLnNhdGlzZmllcyhjb3JlVmVyc2lvbiwgJ14yLjEuMScpKSB7XG4gICAgdmFyIF9fY29tcGlsZXJfXyA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG4gICAgdmFyIF9fY29yZV9wcml2YXRlX18gPSBfX2NvcmVfXy5fX2NvcmVfcHJpdmF0ZV9fO1xuXG4gICAgdmFyIHBhdGNoID0gZmFsc2U7XG4gICAgaWYgKCFfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSkge1xuICAgICAgICBwYXRjaCA9IHRydWU7XG4gICAgICAgIF9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddID0gX19jb3JlX3ByaXZhdGVfX1sndmlld191dGlscyddO1xuICAgIH1cblxuICAgIGlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XG4gICAgICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAgICAgX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9fdW5pdmVyc2FsX18gPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcbiAgICBpZiAocGF0Y2gpIHtcbiAgICAgICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICAgICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi11bml2ZXJzYWwtcGF0Y2gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYW5rQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYW5rTGluZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZWFtUGlwZSB9IGZyb20gJy4vZmlsdGVycy90ZWFtJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgICAgIFJhbmtDb21wb25lbnQsXHJcbiAgICAgICAgUmFua0xpbmVDb21wb25lbnQsXHJcbiAgICAgICAgVGVhbVBpcGVcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY2FsZW5kYXIvOnRlYW0nLCBjb21wb25lbnQ6IENhbGVuZGFyQ29tcG9uZW50LCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdyYW5rLzp0ZWFtJywgY29tcG9uZW50OiBSYW5rQ29tcG9uZW50LCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgRmxleExheW91dE1vZHVsZSxcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXHJcblxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDQ1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUtbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDc5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoODEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcGxhdGZvcm1fYnJvd3Nlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcicpO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBjb21waWxlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbnZhciBCUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlMgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5CUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlMsIFNoYXJlZFN0eWxlc0hvc3QgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5TaGFyZWRTdHlsZXNIb3N0LCBEb21TaGFyZWRTdHlsZXNIb3N0ID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uRG9tU2hhcmVkU3R5bGVzSG9zdCwgRG9tUm9vdFJlbmRlcmVyID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uRG9tUm9vdFJlbmRlcmVyLCBEb21FdmVudHNQbHVnaW4gPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21FdmVudHNQbHVnaW4sIEtleUV2ZW50c1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLktleUV2ZW50c1BsdWdpbiwgRG9tQWRhcHRlciA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbUFkYXB0ZXIsIHNldFJvb3REb21BZGFwdGVyID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uc2V0Um9vdERvbUFkYXB0ZXIsIGdldERPTSA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLmdldERPTSwgSGFtbWVyR2VzdHVyZXNQbHVnaW4gPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5IYW1tZXJHZXN0dXJlc1BsdWdpbjtcbmV4cG9ydHMuQlJPV1NFUl9TQU5JVElaQVRJT05fUFJPVklERVJTID0gQlJPV1NFUl9TQU5JVElaQVRJT05fUFJPVklERVJTO1xuZXhwb3J0cy5TaGFyZWRTdHlsZXNIb3N0ID0gU2hhcmVkU3R5bGVzSG9zdDtcbmV4cG9ydHMuRG9tU2hhcmVkU3R5bGVzSG9zdCA9IERvbVNoYXJlZFN0eWxlc0hvc3Q7XG5leHBvcnRzLkRvbVJvb3RSZW5kZXJlciA9IERvbVJvb3RSZW5kZXJlcjtcbmV4cG9ydHMuRG9tRXZlbnRzUGx1Z2luID0gRG9tRXZlbnRzUGx1Z2luO1xuZXhwb3J0cy5LZXlFdmVudHNQbHVnaW4gPSBLZXlFdmVudHNQbHVnaW47XG5leHBvcnRzLkRvbUFkYXB0ZXIgPSBEb21BZGFwdGVyO1xuZXhwb3J0cy5zZXRSb290RG9tQWRhcHRlciA9IHNldFJvb3REb21BZGFwdGVyO1xuZXhwb3J0cy5IYW1tZXJHZXN0dXJlc1BsdWdpbiA9IEhhbW1lckdlc3R1cmVzUGx1Z2luO1xudmFyIFZpZXdVdGlscyA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLlZpZXdVdGlscywgQW5pbWF0aW9uS2V5ZnJhbWUgPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5BbmltYXRpb25LZXlmcmFtZSwgQW5pbWF0aW9uUGxheWVyID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uQW5pbWF0aW9uUGxheWVyLCBBbmltYXRpb25TdHlsZXMgPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5BbmltYXRpb25TdHlsZXMsIFJlbmRlckRlYnVnSW5mbyA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLlJlbmRlckRlYnVnSW5mbztcbmV4cG9ydHMuVmlld1V0aWxzID0gVmlld1V0aWxzO1xuZXhwb3J0cy5BbmltYXRpb25LZXlmcmFtZSA9IEFuaW1hdGlvbktleWZyYW1lO1xuZXhwb3J0cy5BbmltYXRpb25QbGF5ZXIgPSBBbmltYXRpb25QbGF5ZXI7XG5leHBvcnRzLkFuaW1hdGlvblN0eWxlcyA9IEFuaW1hdGlvblN0eWxlcztcbmV4cG9ydHMuUmVuZGVyRGVidWdJbmZvID0gUmVuZGVyRGVidWdJbmZvO1xudmFyIFNlbGVjdG9yTWF0Y2hlciA9IGNvbXBpbGVyXzEuX19jb21waWxlcl9wcml2YXRlX18uU2VsZWN0b3JNYXRjaGVyLCBDc3NTZWxlY3RvciA9IGNvbXBpbGVyXzEuX19jb21waWxlcl9wcml2YXRlX18uQ3NzU2VsZWN0b3I7XG5leHBvcnRzLlNlbGVjdG9yTWF0Y2hlciA9IFNlbGVjdG9yTWF0Y2hlcjtcbmV4cG9ydHMuQ3NzU2VsZWN0b3IgPSBDc3NTZWxlY3RvcjtcbnZhciBfX2VtcHR5ID0gbnVsbDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9fZW1wdHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0dVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0Y2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWF0Y2hzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYW5rU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JhbmtzLnNlcnZpY2UnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW0FjdHVTZXJ2aWNlLCBNYXRjaFNlcnZpY2UsIFJhbmtTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICcuLi8uLi9tb2RlbHMvbWF0Y2gnO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXRjaHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FsZW5kYXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vY2FsZW5kYXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBtYXRjaHM6IE1hdGNoW107XHJcbiAgICBwcml2YXRlIHRlYW06IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIG5hdkxpbmtzID0gW3tcclxuICAgICAgICAgICAgbGluazogJy9jYWxlbmRhci9lcXVpcGUxJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdFcXVpcGUxJ1xyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBsaW5rOiAnL2NhbGVuZGFyL2VxdWlwZTInLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0VxdWlwZTInXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxpbms6ICcvY2FsZW5kYXIvZXF1aXBlMycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXF1aXBlMydcclxuICAgIH1dO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hdGNoU2VydmljZTogTWF0Y2hTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gdGhpcy51cGRhdGVWaWV3KHBhcmFtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5tYXRjaHMgPSBbXTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50ZWFtID0gdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1zWyd0ZWFtJ107XHJcbiAgICAgICAgdGhpcy5fbWF0Y2hTZXJ2aWNlLmdldE1hdGNocygpLnN1YnNjcmliZShhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaHMgPSBhO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSE9GQyh0ZWFtOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gISh0ZWFtICE9IG51bGwgJiYgdGVhbS5pbmRleE9mKFwiSE9SR1VFUyBPRE9TXCIpICE9IC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBPcGVuTWF0Y2hEZXRhaWxzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb3Vjb3UnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhcmQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FyZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9jYXJkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRleHRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICAgIGdldEJhY2tncm91bmRJbWFnZShpbWFnZVVybDogc3RyaW5nKSA6IFNhZmVTdHlsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKCcgKyBpbWFnZVVybCArICcpJyk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdHVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWN0dXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdHUgfSBmcm9tICcuLi8uLi9tb2RlbHMvQWN0dSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3R1czogQWN0dVtdO1xyXG4gICAgcmVndWxhckRpc3RyaWJ1dGlvbiA9IDkwIC8gMztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3R1U2VydmljZTogQWN0dVNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0dVNlcnZpY2UuZ2V0QWN0dXMoKS5zdWJzY3JpYmUoYSA9PiB0aGlzLmFjdHVzID0gYSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmFua1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yYW5rcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2xhc3NlbWVudCB9IGZyb20gJy4uLy4uL21vZGVscy9jbGFzc2VtZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmFuay5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yYW5rLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBzZWxlY3RvcjogJ3JhbmsnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgX3JhbmtzOiBDbGFzc2VtZW50W107XHJcbiAgICBwcml2YXRlIHRlYW06IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIG5hdkxpbmtzID0gW3tcclxuICAgICAgICBsaW5rOiAnL3JhbmsvZXF1aXBlMScsXHJcbiAgICAgICAgbGFiZWw6ICdFcXVpcGUxJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGxpbms6ICcvcmFuay9lcXVpcGUyJyxcclxuICAgICAgICBsYWJlbDogJ0VxdWlwZTInXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbGluazogJy9yYW5rL2VxdWlwZTMnLFxyXG4gICAgICAgIGxhYmVsOiAnRXF1aXBlMydcclxuICAgIH1dO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JhbmtTZXJ2aWNlOiBSYW5rU2VydmljZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLnVwZGF0ZVZpZXcocGFyYW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl9yYW5rcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRlYW0gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ3RlYW0nXTtcclxuICAgICAgICB0aGlzLl9yYW5rU2VydmljZS5nZXRDbGFzc2VtZW50cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYW5rcyA9IGM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmFuay1saW5lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JhbmsubGluZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yYW5rLmxpbmUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFua0xpbmVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcmFuazogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbm9tOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwb2ludHM6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGpvdWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHZpY3RvaXJlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBudWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGRlZmFpdGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGJwOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBiYzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGlmZjogc3RyaW5nO1xyXG5cclxuICAgIGlzSE9GQygpIHtcclxuICAgICAgICByZXR1cm4gISh0aGlzLm5vbSAhPSBudWxsICYmIHRoaXMubm9tLmluZGV4T2YoXCJIT1JHVUVTIE9ET1NcIikgIT0gLTEpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wZXRpdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb21tb24uY29tcGV0aXRpb24nO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3RlYW0nLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVhbVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShjb21wOiBDb21tb25Db21wZXRpdGlvbltdLCBlcXVpcGUpIHtcclxuICAgICAgICByZXR1cm4gY29tcCAhPSBudWxsID8gY29tcC5maWx0ZXIoYyA9PiBjLmNvbXBldGl0aW9uLmNhdGVnb3JpZSA9PSBlcXVpcGUgfHwgYy5jb21wZXRpdGlvbi5jYXRlZ29yaWUgPT0gZXF1aXBlKSA6IG51bGw7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvZmlsdGVycy90ZWFtLnRzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibWQtc2lkZW5hdiBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1kLXRvb2xiYXIgbWQtaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoxZW07XFxyXFxufVxcclxcblxcclxcbm1kLXNpZGVuYXYgbWQtbGlzdC1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSAuZGF0ZURpdiwgLmxpc3QtaXRlbSAubmFtZURpdiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXHJcXG4gICAgZm9udC1zaXplOjAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZURpdiB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbU5hbWUge1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgZm9udC1zaXplOjAuN2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVEaXYge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxufVxcclxcblxcclxcbm1kLXByb2dyZXNzLWNpcmNsZSB7XFxyXFxuICAgIG1hcmdpbjphdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nRGl2IGltZyB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hdC1jYXJkIHtcXHJcXG4gICAgbWFyZ2luOjE1cHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJtZC1jYXJkIHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgIGhlaWdodDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IC5ub21EaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDNlbTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtZC10b29sYmFyIGNvbG9yPVxcXCJwcmltYXJ5XFxcIj5cXHJcXG4gICAgPG1kLWljb24gKGNsaWNrKT1cXFwic2lkZW5hdi5vcGVuKClcXFwiPm1lbnU8L21kLWljb24+XFxyXFxuICAgIDxzcGFuPldlYkhPRkM8L3NwYW4+XFxyXFxuPC9tZC10b29sYmFyPlxcclxcbjxtZC1zaWRlbmF2LWNvbnRhaW5lcj5cXHJcXG4gICAgPG1kLXNpZGVuYXYgI3NpZGVuYXY+XFxyXFxuICAgICAgICA8bWQtbGlzdD5cXHJcXG4gICAgICAgICAgICA8aDMgbWQtc3ViaGVhZGVyPkNhbGVuZHJpZXI8L2gzPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUxJ11cXFwiPkVxdWlwZSAxPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUyJ11cXFwiPkVxdWlwZSAyPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUzJ11cXFwiPkVxdWlwZSAzPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgPC9tZC1saXN0PlxcclxcbiAgICAgICAgPG1kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgPGgzIG1kLXN1YmhlYWRlcj5DbGFzc2VtZW50PC9oMz5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmFuay9lcXVpcGUxJ11cXFwiPkVxdWlwZSAxPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9yYW5rL2VxdWlwZTInXVxcXCI+RXF1aXBlIDI8L2E+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3JhbmsvZXF1aXBlMyddXFxcIj5FcXVpcGUgMzwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgIDwvbWQtbGlzdD5cXHJcXG4gICAgPC9tZC1zaWRlbmF2PlxcclxcblxcclxcbiAgICA8bWFpbiBjbGFzcz1cXFwibWRsLWxheW91dF9fY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8cm91dGVyLW91dGxldCBjbGFzcz1cXFwibWRsLWdyaWRcXFwiPjwvcm91dGVyLW91dGxldD5cXHJcXG4gICAgPC9tYWluPlxcclxcbjwvbWQtc2lkZW5hdi1jb250YWluZXI+XFxyXFxuXFxyXFxuPCEtLWRpdiBtZGwgY2xhc3M9J21kbC1sYXlvdXQgbWRsLWpzLWxheW91dCBtZGwtbGF5b3V0LS1maXhlZC1oZWFkZXInPlxcclxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJtZGwtbGF5b3V0X19oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWRsLWxheW91dF9faGVhZGVyLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1kbC1sYXlvdXQtdGl0bGVcXFwiPldlYkhPRkM8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9oZWFkZXI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1sYXlvdXRfX2RyYXdlclxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWRsLWxheW91dC10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4+V2ViSE9GQzwvc3Bhbj5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5BY3R1PC9hPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFuZHJvaWQtZHJhd2VyLXNlcGFyYXRvclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBocmVmPVxcXCJcXFwiPkNhbGVuZHJpZXI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NhbGVuZGFyL2VxdWlwZTEnXVxcXCI+RXF1aXBlIDE8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NhbGVuZGFyL2VxdWlwZTInXVxcXCI+RXF1aXBlIDI8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NhbGVuZGFyL2VxdWlwZTMnXVxcXCI+RXF1aXBlIDM8L2E+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBocmVmPVxcXCJcXFwiPkNsYXNzZW1lbnQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3JhbmsvZXF1aXBlMSddXFxcIj5FcXVpcGUgMTwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmFuay9lcXVpcGUyJ11cXFwiPkVxdWlwZSAyPC9hPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9yYW5rL2VxdWlwZTMnXVxcXCI+RXF1aXBlIDM8L2E+XFxyXFxuICAgICAgICA8L25hdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXYtLT5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBtZC10YWItbmF2LWJhcj5cXHJcXG4gICAgPGEgbWQtdGFiLWxpbmtcXHJcXG4gICAgICAgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIG5hdkxpbmtzXFxcIlxcclxcbiAgICAgICBbcm91dGVyTGlua109XFxcInRhYi5saW5rXFxcIlxcclxcbiAgICAgICByb3V0ZXJMaW5rQWN0aXZlICNybGE9XFxcInJvdXRlckxpbmtBY3RpdmVcXFwiXFxyXFxuICAgICAgIFthY3RpdmVdPVxcXCJybGEuaXNBY3RpdmVcXFwiPlxcclxcbiAgICAgICAge3t0YWIubGFiZWx9fVxcclxcbiAgICA8L2E+XFxyXFxuPC9uYXY+XFxyXFxuPG1kLXByb2dyZXNzLWNpcmNsZSBjb2xvcj1cXFwicHJpbWFyeVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6ICFpc0xvYWRpbmd9XFxcIiBtb2RlPVxcXCJpbmRldGVybWluYXRlXFxcIj48L21kLXByb2dyZXNzLWNpcmNsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJsaXN0LWl0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IG1hdGNoIG9mIChtYXRjaHMgfCB0ZWFtIDogdGVhbSlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lRGl2XFxcIj5cXHJcXG4gICAgICAgIHt7bWF0Y2guY29tcGV0aXRpb24ubm9tfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGVEaXZcXFwiPlxcclxcbiAgICAgICAge3ttYXRjaC5kYXRlIHwgZGF0ZTogJ2RkL01NL3kgSEg6bW0nfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhMYXlvdXQ9XFxcInJvd1xcXCIgZnhMYXlvdXRXcmFwPVxcXCJ3cmFwXFxcIiBmeExheW91dEFsaWduPVxcXCJzcGFjZS1hcm91bmQgY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImltZ0RpdlxcXCIgZnhGbGV4PVxcXCIxMFxcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgICAgIDxpbWcgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzSE9GQyhtYXRjaC5lcXVpcGUxKX1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtTmFtZVxcXCIgZnhGbGV4PVxcXCIzNVxcXCI+XFxyXFxuICAgICAgICAgICAge3ttYXRjaC5lcXVpcGUxfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVEaXZcXFwiIGZ4RmxleD5cXHJcXG4gICAgICAgICAgICB7eyAobWF0Y2guc2NvcmUxICE9IG51bGwgJiYgbWF0Y2guc2NvcmUyICE9IG51bGwpID8gbWF0Y2guc2NvcmUxICsgJyAtICcgKyBtYXRjaC5zY29yZTIgOiAnJyB9fVxcclxcbiAgICAgICAgICAgIHt7IG1hdGNoLm1lc3NhZ2UgIT0gbnVsbCA/IG1hdGNoLm1lc3NhZ2UgOiAnJ319XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW1OYW1lXFxcIiBmeEZsZXg9XFxcIjM1XFxcIj5cXHJcXG4gICAgICAgICAgICB7e21hdGNoLmVxdWlwZTJ9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWdEaXZcXFwiIGZ4RmxleD1cXFwiMTBcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgICAgICA8aW1nIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0hPRkMobWF0Y2guZXF1aXBlMil9XFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIikgKyBcIlxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkX190aXRsZVxcXCJcXHJcXG4gICAgICAgICBbc3R5bGUuYmFja2dyb3VuZEltYWdlXT1cXFwiZ2V0QmFja2dyb3VuZEltYWdlKGltYWdlVXJsKVxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcIm1kbC1jYXJkX190aXRsZS10ZXh0XFxcIj57e3RpdGxlfX08L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dFxcXCI+XFxyXFxuICAgICAgICB7e3RleHRlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcXFwiPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1idXR0b24gbWRsLWJ1dHRvbi0tY29sb3JlZCBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XFxcIj5cXHJcXG4gICAgICAgICAgICBEw6l0YWlsc1xcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGZ4TGF5b3V0PVxcXCJyb3dcXFwiIGZ4TGF5b3V0LnhzPVxcXCJjb2x1bW5cXFwiIGZ4TGF5b3V0V3JhcD1cXFwid3JhcFxcXCIgZnhMYXlvdXRBbGlnbj1cXFwic3BhY2UtYXJvdW5kIGNlbnRlclxcXCI+XFxyXFxuICAgIDxtZC1jYXJkIGZ4RmxleC5ndC14cz1cXFwiNDAlXFxcIiBbZnhGbGV4Lmd0LW1kXT1cXFwicmVndWxhckRpc3RyaWJ1dGlvblxcXCIgICpuZ0Zvcj1cXFwibGV0IGFjdHUgb2YgYWN0dXM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgPG1kLWNhcmQtdGl0bGU+e3thY3R1LnRpdHJlfX08L21kLWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICA8aW1nIG1kLWNhcmQtaW1hZ2UgW3NyY109XFxcImFjdHUuaW1hZ2VcXFwiLz5cXHJcXG4gICAgICAgIDxtZC1jYXJkLWNvbnRlbnQ+XFxyXFxuICAgICAgICAgICAgPHA+e3thY3R1LnRleHRlfX08L3A+XFxyXFxuICAgICAgICA8L21kLWNhcmQtY29udGVudD5cXHJcXG4gICAgPC9tZC1jYXJkPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgbWQtdGFiLW5hdi1iYXI+XFxyXFxuICAgIDxhIG1kLXRhYi1saW5rXFxyXFxuICAgICAgICpuZ0Zvcj1cXFwibGV0IHRhYiBvZiBuYXZMaW5rc1xcXCJcXHJcXG4gICAgICAgW3JvdXRlckxpbmtdPVxcXCJ0YWIubGlua1xcXCJcXHJcXG4gICAgICAgcm91dGVyTGlua0FjdGl2ZSAjcmxhPVxcXCJyb3V0ZXJMaW5rQWN0aXZlXFxcIlxcclxcbiAgICAgICBbYWN0aXZlXT1cXFwicmxhLmlzQWN0aXZlXFxcIj5cXHJcXG4gICAgICAgIHt7dGFiLmxhYmVsfX1cXHJcXG4gICAgPC9hPlxcclxcbjwvbmF2PlxcclxcbjxtZC1wcm9ncmVzcy1jaXJjbGUgY29sb3I9XFxcInByaW1hcnlcXFwiIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiAhaXNMb2FkaW5nfVxcXCIgbW9kZT1cXFwiaW5kZXRlcm1pbmF0ZVxcXCI+PC9tZC1wcm9ncmVzcy1jaXJjbGU+XFxyXFxuXFxyXFxuPHJhbmstbGluZSBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNMb2FkaW5nfVxcXCJcXHJcXG4gICAgICAgICAgIHJhbms9XFxcIiNcXFwiXFxyXFxuICAgICAgICAgICBub209XFxcIk5vbVxcXCJcXHJcXG4gICAgICAgICAgIHBvaW50cz1cXFwiUFxcXCJcXHJcXG4gICAgICAgICAgIGpvdWU9XFxcIkpcXFwiXFxyXFxuICAgICAgICAgICB2aWN0b2lyZT1cXFwiVlxcXCJcXHJcXG4gICAgICAgICAgIG51bD1cXFwiTlxcXCJcXHJcXG4gICAgICAgICAgIGRlZmFpdGU9XFxcIkRcXFwiXFxyXFxuICAgICAgICAgICBicD1cXFwiQlBcXFwiXFxyXFxuICAgICAgICAgICBiYz1cXFwiQkNcXFwiXFxyXFxuICAgICAgICAgICBkaWZmPVxcXCJEaWZmXFxcIj48L3JhbmstbGluZT5cXHJcXG5cXHJcXG48cmFuay1saW5lICpuZ0Zvcj1cXFwibGV0IHJhbmsgb2YgKF9yYW5rcyB8IHRlYW0gOiB0ZWFtKTsgbGV0IGkgPSBpbmRleFxcXCJcXHJcXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0xvYWRpbmd9XFxcIlxcclxcbiAgICAgICAgICAgW3JhbmtdPVxcXCJpICsgMVxcXCJcXHJcXG4gICAgICAgICAgIFtub21dPVxcXCJyYW5rLm5vbVxcXCJcXHJcXG4gICAgICAgICAgIFtwb2ludHNdPVxcXCJyYW5rLnBvaW50c1xcXCJcXHJcXG4gICAgICAgICAgIFtqb3VlXT1cXFwicmFuay5qb3VlXFxcIlxcclxcbiAgICAgICAgICAgW3ZpY3RvaXJlXT1cXFwicmFuay52aWN0b2lyZVxcXCJcXHJcXG4gICAgICAgICAgIFtudWxdPVxcXCJyYW5rLm51bFxcXCJcXHJcXG4gICAgICAgICAgIFtkZWZhaXRlXT1cXFwicmFuay5kZWZhaXRlXFxcIlxcclxcbiAgICAgICAgICAgW2JwXT1cXFwicmFuay5icFxcXCJcXHJcXG4gICAgICAgICAgIFtiY109XFxcInJhbmsuYmNcXFwiXFxyXFxuICAgICAgICAgICBbZGlmZl09XFxcInJhbmsuZGlmZlxcXCI+PC9yYW5rLWxpbmU+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIlxcclxcbiAgICAgZnhMYXlvdXQ9XFxcInJvd1xcXCJcXHJcXG4gICAgIGZ4TGF5b3V0V3JhcD1cXFwid3JhcFxcXCJcXHJcXG4gICAgIGZ4TGF5b3V0QWxpZ249XFxcInNwYWNlLWFyb3VuZCBjZW50ZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbWdEaXZcXFwiIGZ4RmxleD1cXFwiMTBcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIDxpbWcgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzSE9GQygpfVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICB7e3Jhbmt9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibm9tRGl2XFxcIiBmeEZsZXg+XFxyXFxuICAgICAgICB7e25vbX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICB7e3BvaW50c319XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICB7e2pvdWV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7dmljdG9pcmV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7bnVsfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e2RlZmFpdGV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7YnB9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7YmN9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAge3tkaWZmfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbnZhciBFcnJvck9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFcnJvck9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRXJyb3JPYnNlcnZhYmxlKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG5vIGl0ZW1zIHRvIHRoZSBPYnNlcnZlciBhbmQgaW1tZWRpYXRlbHlcbiAgICAgKiBlbWl0cyBhbiBlcnJvciBub3RpZmljYXRpb24uXG4gICAgICpcbiAgICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+SnVzdCBlbWl0cyAnZXJyb3InLCBhbmQgbm90aGluZyBlbHNlLlxuICAgICAqIDwvc3Bhbj5cbiAgICAgKlxuICAgICAqIDxpbWcgc3JjPVwiLi9pbWcvdGhyb3cucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICpcbiAgICAgKiBUaGlzIHN0YXRpYyBvcGVyYXRvciBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIGEgc2ltcGxlIE9ic2VydmFibGUgdGhhdCBvbmx5XG4gICAgICogZW1pdHMgdGhlIGVycm9yIG5vdGlmaWNhdGlvbi4gSXQgY2FuIGJlIHVzZWQgZm9yIGNvbXBvc2luZyB3aXRoIG90aGVyXG4gICAgICogT2JzZXJ2YWJsZXMsIHN1Y2ggYXMgaW4gYSB7QGxpbmsgbWVyZ2VNYXB9LlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdCB0aGUgbnVtYmVyIDcsIHRoZW4gZW1pdCBhbiBlcnJvci48L2NhcHRpb24+XG4gICAgICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUudGhyb3cobmV3IEVycm9yKCdvb3BzIScpKS5zdGFydFdpdGgoNyk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpLCBlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIGFuZCBmbGF0dGVuIG51bWJlcnMgdG8gdGhlIHNlcXVlbmNlICdhJywgJ2InLCAnYycsIGJ1dCB0aHJvdyBhbiBlcnJvciBmb3IgMTM8L2NhcHRpb24+XG4gICAgICogdmFyIGludGVydmFsID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAgICAgKiB2YXIgcmVzdWx0ID0gaW50ZXJ2YWwubWVyZ2VNYXAoeCA9PlxuICAgICAqICAgeCA9PT0gMTMgP1xuICAgICAqICAgICBSeC5PYnNlcnZhYmxlLnRocm93KCdUaGlydGVlbnMgYXJlIGJhZCcpIDpcbiAgICAgKiAgICAgUnguT2JzZXJ2YWJsZS5vZignYScsICdiJywgJ2MnKVxuICAgICAqICk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpLCBlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgY3JlYXRlfVxuICAgICAqIEBzZWUge0BsaW5rIGVtcHR5fVxuICAgICAqIEBzZWUge0BsaW5rIG5ldmVyfVxuICAgICAqIEBzZWUge0BsaW5rIG9mfVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGVycm9yIFRoZSBwYXJ0aWN1bGFyIEVycm9yIHRvIHBhc3MgdG8gdGhlIGVycm9yIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gQSB7QGxpbmsgSVNjaGVkdWxlcn0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gICAgICogdGhlIGVtaXNzaW9uIG9mIHRoZSBlcnJvciBub3RpZmljYXRpb24uXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gZXJyb3IgT2JzZXJ2YWJsZTogZW1pdHMgb25seSB0aGUgZXJyb3Igbm90aWZpY2F0aW9uXG4gICAgICogdXNpbmcgdGhlIGdpdmVuIGVycm9yIGFyZ3VtZW50LlxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIHRocm93XG4gICAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICAgKi9cbiAgICBFcnJvck9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9ic2VydmFibGUoZXJyb3IsIHNjaGVkdWxlcik7XG4gICAgfTtcbiAgICBFcnJvck9ic2VydmFibGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGFyZy5lcnJvciwgc3Vic2NyaWJlciA9IGFyZy5zdWJzY3JpYmVyO1xuICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbiAgICB9O1xuICAgIEVycm9yT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuZXJyb3I7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShFcnJvck9ic2VydmFibGUuZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBFcnJvck9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkVycm9yT2JzZXJ2YWJsZSA9IEVycm9yT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVycm9yT2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vYnNlcnZhYmxlL0Vycm9yT2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgRXJyb3JPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL0Vycm9yT2JzZXJ2YWJsZScpO1xuZXhwb3J0cy5fdGhyb3cgPSBFcnJvck9ic2VydmFibGVfMS5FcnJvck9ic2VydmFibGUuY3JlYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3cuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvb2JzZXJ2YWJsZS90aHJvdy5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWQ7XG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW07XG4gICAgICB9XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSk7XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXTtcbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoO1xuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5sb29zZSwgb3RoZXIpO1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIC0xO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAwO1xuXG4gIHZhciBpID0gMDtcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldO1xuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXTtcbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYik7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgZWxzZSBpZiAoYSA9PT0gYilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYik7XG4gIH0gd2hpbGUgKCsraSk7XG59O1xuXG4vLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4vLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG5TZW1WZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWFqb3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgIGlmICh0aGlzLm1pbm9yICE9PSAwIHx8IHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnBhdGNoKys7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rKztcbiAgICAgICAgICAgIGkgPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMCk7XG4gICAgICB9XG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlWzBdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKTtcbiAgfVxuICB0aGlzLmZvcm1hdCgpO1xuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmluYyA9IGluYztcbmZ1bmN0aW9uIGluYyh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mKGxvb3NlKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gbG9vc2U7XG4gICAgbG9vc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvbjtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuZnVuY3Rpb24gZGlmZih2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSk7XG4gICAgdmFyIHYyID0gcGFyc2UodmVyc2lvbjIpO1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByZScra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdwcmVyZWxlYXNlJztcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuY29tcGFyZUlkZW50aWZpZXJzID0gY29tcGFyZUlkZW50aWZpZXJzO1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC87XG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKTtcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYik7XG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYTtcbiAgICBiID0gK2I7XG4gIH1cblxuICByZXR1cm4gKGFudW0gJiYgIWJudW0pID8gLTEgOlxuICAgICAgICAgKGJudW0gJiYgIWFudW0pID8gMSA6XG4gICAgICAgICBhIDwgYiA/IC0xIDpcbiAgICAgICAgIGEgPiBiID8gMSA6XG4gICAgICAgICAwO1xufVxuXG5leHBvcnRzLnJjb21wYXJlSWRlbnRpZmllcnMgPSByY29tcGFyZUlkZW50aWZpZXJzO1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSk7XG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvcjtcbmZ1bmN0aW9uIG1ham9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvcjtcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yO1xuZnVuY3Rpb24gbWlub3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yO1xufVxuXG5leHBvcnRzLnBhdGNoID0gcGF0Y2g7XG5mdW5jdGlvbiBwYXRjaChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2g7XG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKGIpO1xufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZTtcbmZ1bmN0aW9uIGNvbXBhcmVMb29zZShhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpO1xufVxuXG5leHBvcnRzLnJjb21wYXJlID0gcmNvbXBhcmU7XG5mdW5jdGlvbiByY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShiLCBhLCBsb29zZSk7XG59XG5cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5yc29ydCA9IHJzb3J0O1xuZnVuY3Rpb24gcnNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMucmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5ndCA9IGd0O1xuZnVuY3Rpb24gZ3QoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMDtcbn1cblxuZXhwb3J0cy5sdCA9IGx0O1xuZnVuY3Rpb24gbHQoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDwgMDtcbn1cblxuZXhwb3J0cy5lcSA9IGVxO1xuZnVuY3Rpb24gZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwO1xufVxuXG5leHBvcnRzLm5lcSA9IG5lcTtcbmZ1bmN0aW9uIG5lcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDA7XG59XG5cbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZnVuY3Rpb24gZ3RlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwO1xufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmZ1bmN0aW9uIGx0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMDtcbn1cblxuZXhwb3J0cy5jbXAgPSBjbXA7XG5mdW5jdGlvbiBjbXAoYSwgb3AsIGIsIGxvb3NlKSB7XG4gIHZhciByZXQ7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhID09PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSAhPT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyc6IGNhc2UgJz0nOiBjYXNlICc9PSc6IHJldCA9IGVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnIT0nOiByZXQgPSBuZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+JzogcmV0ID0gZ3QoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+PSc6IHJldCA9IGd0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzwnOiByZXQgPSBsdChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzw9JzogcmV0ID0gbHRlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnRzLkNvbXBhcmF0b3IgPSBDb21wYXJhdG9yO1xuZnVuY3Rpb24gQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICBpZiAoY29tcC5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gY29tcDtcbiAgICBlbHNlXG4gICAgICBjb21wID0gY29tcC52YWx1ZTtcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSlcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHRoaXMucGFyc2UoY29tcCk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICBlbHNlXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uO1xuXG4gIGRlYnVnKCdjb21wJywgdGhpcyk7XG59XG5cbnZhciBBTlkgPSB7fTtcbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oY29tcCkge1xuICB2YXIgciA9IHRoaXMubG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBtID0gY29tcC5tYXRjaChyKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjb21wYXJhdG9yOiAnICsgY29tcCk7XG5cbiAgdGhpcy5vcGVyYXRvciA9IG1bMV07XG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpXG4gICAgdGhpcy5vcGVyYXRvciA9ICcnO1xuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pXG4gICAgdGhpcy5zZW12ZXIgPSBBTlk7XG4gIGVsc2VcbiAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5sb29zZSk7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMubG9vc2UpO1xufTtcblxuXG5leHBvcnRzLlJhbmdlID0gUmFuZ2U7XG5mdW5jdGlvbiBSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgaWYgKChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSAmJiByYW5nZS5sb29zZSA9PT0gbG9vc2UpXG4gICAgcmV0dXJuIHJhbmdlO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpXG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHRoaXMubG9vc2UgPSBsb29zZTtcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnJhdyA9IHJhbmdlO1xuICB0aGlzLnNldCA9IHJhbmdlLnNwbGl0KC9cXHMqXFx8XFx8XFxzKi8pLm1hcChmdW5jdGlvbihyYW5nZSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmFuZ2UocmFuZ2UudHJpbSgpKTtcbiAgfSwgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcbiAgICAvLyB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCByZWxldmFudCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgcmV0dXJuIGMubGVuZ3RoO1xuICB9KTtcblxuICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgU2VtVmVyIFJhbmdlOiAnICsgcmFuZ2UpO1xuICB9XG5cbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuUmFuZ2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJhbmdlID0gdGhpcy5zZXQubWFwKGZ1bmN0aW9uKGNvbXBzKSB7XG4gICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKCk7XG4gIH0pLmpvaW4oJ3x8JykudHJpbSgpO1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS5wYXJzZVJhbmdlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIGxvb3NlID0gdGhpcy5sb29zZTtcbiAgcmFuZ2UgPSByYW5nZS50cmltKCk7XG4gIGRlYnVnKCdyYW5nZScsIHJhbmdlLCBsb29zZSk7XG4gIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICB2YXIgaHIgPSBsb29zZSA/IHJlW0hZUEhFTlJBTkdFTE9PU0VdIDogcmVbSFlQSEVOUkFOR0VdO1xuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UpO1xuICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSk7XG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpO1xuICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHJlW0NPTVBBUkFUT1JUUklNXSk7XG5cbiAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtUSUxERVRSSU1dLCB0aWxkZVRyaW1SZXBsYWNlKTtcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpO1xuXG4gIC8vIG5vcm1hbGl6ZSBzcGFjZXNcbiAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcblxuICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpLnNwbGl0KC9cXHMrLyk7XG4gIGlmICh0aGlzLmxvb3NlKSB7XG4gICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKTtcbiAgICB9KTtcbiAgfVxuICBzZXQgPSBzZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KTtcblxuICByZXR1cm4gc2V0O1xufTtcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9ycztcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMocmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5zZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICB9KTtcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygneHJhbmdlJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpO1xuICBkZWJ1Zygnc3RhcnMnLCBjb21wKTtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIGlzWChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonO1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSkge1xuICB2YXIgciA9IGxvb3NlID8gcmVbVElMREVMT09TRV0gOiByZVtUSUxERV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKVxuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gcmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLm1pblNhdGlzZnlpbmcgPSBtaW5TYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWluU2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLnZhbGlkUmFuZ2UgPSB2YWxpZFJhbmdlO1xuZnVuY3Rpb24gdmFsaWRSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnJhbmdlIHx8ICcqJztcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyO1xuZnVuY3Rpb24gbHRyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBsb29zZSk7XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyO1xuZnVuY3Rpb24gZ3RyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBsb29zZSk7XG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGU7XG5mdW5jdGlvbiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBsb29zZSkge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdmFyIGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcDtcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3Q7XG4gICAgICBsdGVmbiA9IGx0ZTtcbiAgICAgIGx0Zm4gPSBsdDtcbiAgICAgIGNvbXAgPSAnPic7XG4gICAgICBlY29tcCA9ICc+PSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdDtcbiAgICAgIGx0ZWZuID0gZ3RlO1xuICAgICAgbHRmbiA9IGd0O1xuICAgICAgY29tcCA9ICc8JztcbiAgICAgIGVjb21wID0gJzw9JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpO1xuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldO1xuXG4gICAgdmFyIGhpZ2ggPSBudWxsO1xuICAgIHZhciBsb3cgPSBudWxsO1xuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvcjtcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yO1xuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3I7XG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZTtcbmZ1bmN0aW9uIHByZXJlbGVhc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZW12ZXIvc2VtdmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NhbGVuZGFyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jYXJkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JhbmsuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yYW5rLmxpbmUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mbGV4LWxheW91dC9idW5kbGVzL2ZsZXgtbGF5b3V0LnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDc1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYnVuZGxlcy9tYXRlcmlhbC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaCc7XHJcbmltcG9ydCAnem9uZS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPGFwcD48L2FwcD4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcclxuICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyJdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(97);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(78);

/***/ }),
/* 6 */
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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(10);
var Observable_1 = __webpack_require__(4);
__webpack_require__(11);
__webpack_require__(9);
__webpack_require__(8);
__webpack_require__(7);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var throw_1 = __webpack_require__(48);
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(126);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(127);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(16);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(33);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(80);

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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(10);
var Observable_1 = __webpack_require__(4);
__webpack_require__(11);
__webpack_require__(9);
__webpack_require__(8);
__webpack_require__(7);
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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(10);
var Observable_1 = __webpack_require__(4);
__webpack_require__(11);
__webpack_require__(9);
__webpack_require__(8);
__webpack_require__(7);
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

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DateUtils = (function () {
    function DateUtils() {
    }
    DateUtils.isSameWeek = function (date1, date2) {
        var monday1 = this.getPreviousMonday(date1);
        var monday2 = this.getPreviousMonday(date2);
        return (monday1.getDate() == monday2.getDate() && monday1.getFullYear() == monday2.getFullYear() && monday1.getMonth() == monday2.getMonth());
    };
    DateUtils.getPreviousMonday = function (d) {
        var date = new Date(d);
        var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(date.setDate(diff));
    };
    DateUtils.getPreviousWeek = function (d) {
        var date = new Date(d);
        return new Date(date.setDate(date.getDate() - 7));
    };
    DateUtils.getNextWeek = function (d) {
        var date = new Date(d);
        return new Date(date.setDate(date.getDate() + 7));
    };
    DateUtils.formatDate = function (d) {
        var date = "";
        if (d.getDate() < 10)
            date += "0";
        date += d.getDate();
        date += "-";
        if (d.getMonth() < 9)
            date += "0";
        date += d.getMonth() + 1;
        date += "-";
        date += d.getFullYear();
        return date;
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(4);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(9);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
var semver = __webpack_require__(49);
var __core__ = __webpack_require__(0);
var coreVersion = __core__ && __core__.VERSION && __core__.VERSION.full;

// Only patch if you're on Angular >= 2.1.1 and < the next major version (including prerelease)
if (coreVersion && semver.satisfies(coreVersion, '^2.1.1')) {
    var __compiler__ = __webpack_require__(17);
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

    var __universal__ = __webpack_require__(23);
    if (patch) {
        __universal__.ViewUtils = __core_private__['view_utils'];
        __universal__.CssSelector = __compiler__.CssSelector
        __universal__.SelectorMatcher = __compiler__.SelectorMatcher
    }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var material_1 = __webpack_require__(58);
var angular2_universal_1 = __webpack_require__(12);
var app_component_1 = __webpack_require__(25);
var home_component_1 = __webpack_require__(28);
var calendar_component_1 = __webpack_require__(26);
var card_component_1 = __webpack_require__(27);
var rank_component_1 = __webpack_require__(29);
var agenda_component_1 = __webpack_require__(24);
var rank_line_component_1 = __webpack_require__(30);
var team_1 = __webpack_require__(32);
var agenda_1 = __webpack_require__(31);
var flex_layout_1 = __webpack_require__(57);
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
            agenda_component_1.AgendaComponent,
            rank_component_1.RankComponent,
            rank_line_component_1.RankLineComponent,
            team_1.TeamPipe,
            agenda_1.AgendaPipe
        ],
        imports: [
            material_1.MaterialModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'calendar/:team', component: calendar_component_1.CalendarComponent, },
                { path: 'rank/:team', component: rank_component_1.RankComponent, },
                { path: 'agenda/:date', component: agenda_component_1.AgendaComponent, },
                { path: '**', redirectTo: 'home' }
            ]),
            flex_layout_1.FlexLayoutModule,
            angular2_universal_1.UniversalModule // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(45);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(79);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(81);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_1 = __webpack_require__(16);
var core_1 = __webpack_require__(0);
var compiler_1 = __webpack_require__(17);
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var matchs_service_1 = __webpack_require__(6);
var date_utils_1 = __webpack_require__(15);
var AgendaComponent = (function () {
    function AgendaComponent(_matchService, _route) {
        this._matchService = _matchService;
        this._route = _route;
        this.isLoading = true;
        this.navLinks = [];
    }
    AgendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.updateView(params); });
        var date = new Date();
        var monday = date_utils_1.DateUtils.getPreviousMonday(date);
        var previousWeek = date_utils_1.DateUtils.getPreviousWeek(monday);
        var nextWeek = date_utils_1.DateUtils.getNextWeek(monday);
        this.navLinks.push({ link: '/agenda/' + date_utils_1.DateUtils.formatDate(previousWeek), label: 'Semaine dernière' });
        this.navLinks.push({ link: '/agenda/' + date_utils_1.DateUtils.formatDate(monday), label: 'Cette semaine' });
        this.navLinks.push({ link: '/agenda/' + date_utils_1.DateUtils.formatDate(nextWeek), label: 'Semaine Prochaine' });
    };
    AgendaComponent.prototype.updateView = function (params) {
        var _this = this;
        this.matchs = [];
        this.isLoading = true;
        var splitDate = this._route.snapshot.params['date'].split('-');
        this.date = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
        this._matchService.getMatchs().subscribe(function (a) {
            _this.matchs = a;
            _this.isLoading = false;
        });
    };
    AgendaComponent.prototype.isHOFC = function (team) {
        return !(team != null && team.indexOf("HORGUES ODOS") != -1);
    };
    AgendaComponent.prototype.OpenMatchDetails = function () {
        console.log('Coucou');
    };
    return AgendaComponent;
}());
AgendaComponent = __decorate([
    core_1.Component({
        selector: 'agenda',
        template: __webpack_require__(40),
        styles: [__webpack_require__(50)]
    }),
    __metadata("design:paramtypes", [matchs_service_1.MatchService, router_1.ActivatedRoute])
], AgendaComponent);
exports.AgendaComponent = AgendaComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var actus_service_1 = __webpack_require__(13);
var matchs_service_1 = __webpack_require__(6);
var ranks_service_1 = __webpack_require__(14);
var date_utils_1 = __webpack_require__(15);
var AppComponent = (function () {
    function AppComponent() {
        this.weeks = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        var date = new Date();
        var monday = date_utils_1.DateUtils.getPreviousMonday(date);
        var previousWeek = date_utils_1.DateUtils.getPreviousWeek(monday);
        var nextWeek = date_utils_1.DateUtils.getNextWeek(monday);
        this.weeks.push({ link: 'agenda/' + date_utils_1.DateUtils.formatDate(previousWeek), label: 'Semaine derni�re' });
        this.weeks.push({ link: 'agenda/' + date_utils_1.DateUtils.formatDate(monday), label: 'Cette semaine' });
        this.weeks.push({ link: 'agenda/' + date_utils_1.DateUtils.formatDate(nextWeek), label: 'Semaine Prochaine' });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: __webpack_require__(41),
        styles: [__webpack_require__(51)],
        providers: [actus_service_1.ActuService, matchs_service_1.MatchService, ranks_service_1.RankService]
    })
], AppComponent);
exports.AppComponent = AppComponent;


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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var matchs_service_1 = __webpack_require__(6);
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
        template: __webpack_require__(42),
        styles: [__webpack_require__(52)]
    }),
    __metadata("design:paramtypes", [matchs_service_1.MatchService, router_1.ActivatedRoute])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;


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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(16);
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
        template: __webpack_require__(43),
        styles: [__webpack_require__(53)]
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], CardComponent);
exports.CardComponent = CardComponent;


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
var core_1 = __webpack_require__(0);
var actus_service_1 = __webpack_require__(13);
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
        template: __webpack_require__(44),
        styles: [__webpack_require__(54)]
    }),
    __metadata("design:paramtypes", [actus_service_1.ActuService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
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
        template: __webpack_require__(45),
        styles: [__webpack_require__(55)],
        selector: 'rank'
    }),
    __metadata("design:paramtypes", [ranks_service_1.RankService, router_1.ActivatedRoute])
], RankComponent);
exports.RankComponent = RankComponent;


/***/ }),
/* 30 */
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
var core_1 = __webpack_require__(0);
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
        template: __webpack_require__(46),
        styles: [__webpack_require__(56)]
    })
], RankLineComponent);
exports.RankLineComponent = RankLineComponent;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AgendaPipe = (function () {
    function AgendaPipe() {
    }
    AgendaPipe.prototype.transform = function (match, date) {
        var _this = this;
        return match != null ? match.filter(function (m) { return _this.isSameWeek(m.date, date) && (m.equipe1.indexOf("HORGUES ODOS") != -1 || m.equipe2.indexOf("HORGUES ODOS") != -1); }) : null;
    };
    AgendaPipe.prototype.isSameWeek = function (date1, date2) {
        var monday1 = this.getPreviousMonday(date1);
        var monday2 = this.getPreviousMonday(date2);
        return (monday1.getDate() == monday2.getDate() && monday1.getFullYear() == monday2.getFullYear() && monday1.getMonth() == monday2.getMonth());
    };
    AgendaPipe.prototype.getPreviousMonday = function (d) {
        var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    };
    return AgendaPipe;
}());
AgendaPipe = __decorate([
    core_1.Pipe({
        name: 'agenda'
    }),
    core_1.Injectable()
], AgendaPipe);
exports.AgendaPipe = AgendaPipe;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none;\r\n}\r\n\r\n.list-item {\r\n    text-align: center;\r\n    border-bottom: solid 1px grey;\r\n    padding-bottom: 15px;\r\n    padding-top: 15px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.list-item .dateDiv, .list-item .nameDiv {\r\n    margin-bottom:10px;\r\n    font-size:0.8em;\r\n}\r\n\r\n.dateDiv {\r\n    color: gray;\r\n}\r\n\r\n.teamName {\r\n    color: gray;\r\n    font-size:0.7em;\r\n}\r\n\r\n.scoreDiv {\r\n    color: black;\r\n    font-weight:bold;\r\n}\r\n\r\nmd-progress-circle {\r\n    margin:auto;\r\n}\r\n\r\n.imgDiv img {\r\n    height: 60px;\r\n}", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "md-sidenav a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nmd-toolbar md-icon {\r\n    margin-right:1em;\r\n}\r\n\r\nmd-sidenav md-list-item {\r\n    width: 200px;\r\n}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none;\r\n}\r\n\r\n.list-item {\r\n    text-align: center;\r\n    border-bottom: solid 1px grey;\r\n    padding-bottom: 15px;\r\n    padding-top: 15px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.list-item .dateDiv, .list-item .nameDiv {\r\n    margin-bottom:10px;\r\n    font-size:0.8em;\r\n}\r\n\r\n.dateDiv {\r\n    color: gray;\r\n}\r\n\r\n.teamName {\r\n    color: gray;\r\n    font-size:0.7em;\r\n}\r\n\r\n.scoreDiv {\r\n    color: black;\r\n    font-weight:bold;\r\n}\r\n\r\nmd-progress-circle {\r\n    margin:auto;\r\n}\r\n\r\n.imgDiv img {\r\n    height: 60px;\r\n}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".mat-card {\r\n    margin:15px;\r\n}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "md-card {\r\n    margin: 15px;\r\n}", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none !important;\r\n}\r\n\r\nmd-progress-circle {\r\n    margin: auto;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none !important;\r\n}\r\n\r\n.row {\r\n    text-align: center;\r\n    padding-top: 1em;\r\n    padding-bottom: 1em;\r\n    height: 3em;\r\n}\r\n\r\n.row .nomDiv {\r\n    text-align: initial;\r\n    font-weight: bold;\r\n}\r\n\r\n.row img {\r\n    height: 3em;\r\n}", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n<div class=\"list-item\" *ngFor=\"let match of (matchs | agenda : date)\">\r\n    <div class=\"nameDiv\">\r\n        {{match.competition.nom}}\r\n    </div>\r\n    <div class=\"dateDiv\">\r\n        {{match.date | date: 'dd/MM/y HH:mm'}}\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe1)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe1}}\r\n        </div>\r\n        <div class=\"scoreDiv\" fxFlex>\r\n            {{ (match.score1 != null && match.score2 != null) ? match.score1 + ' - ' + match.score2 : '' }}\r\n            {{ match.message != null ? match.message : ''}}\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe2}}\r\n        </div>\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe2)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n    <md-icon (click)=\"sidenav.open()\">menu</md-icon>\r\n    <span>WebHOFC</span>\r\n</md-toolbar>\r\n<md-sidenav-container>\r\n    <md-sidenav #sidenav>\r\n        <md-list>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/home']\">Actu</a>\r\n            </md-list-item>\r\n            <h3 md-subheader>Calendrier</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n        <md-list>\r\n            <h3 md-subheader>Classement</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n        <md-list>\r\n            <h3 md-subheader>Agenda</h3>\r\n            <md-list-item *ngFor=\"let week of weeks\">\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"[week.link]\">{{week.label}}</a>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-sidenav>\r\n    <main class=\"mdl-layout__content\">\r\n        <router-outlet class=\"mdl-grid\"></router-outlet>\r\n    </main>\r\n</md-sidenav-container>\r\n";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n<div class=\"list-item\" *ngFor=\"let match of (matchs | team : team)\">\r\n    <div class=\"nameDiv\">\r\n        {{match.competition.nom}}\r\n    </div>\r\n    <div class=\"dateDiv\">\r\n        {{match.date | date: 'dd/MM/y HH:mm'}}\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe1)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe1}}\r\n        </div>\r\n        <div class=\"scoreDiv\" fxFlex>\r\n            {{ (match.score1 != null && match.score2 != null) ? match.score1 + ' - ' + match.score2 : '' }}\r\n            {{ match.message != null ? match.message : ''}}\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe2}}\r\n        </div>\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe2)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-shadow--2dp\">\r\n    <div class=\"mdl-card__title\"\r\n         [style.backgroundImage]=\"getBackgroundImage(imageUrl)\">\r\n        <h2 class=\"mdl-card__title-text\">{{title}}</h2>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n        {{texte}}\r\n    </div>\r\n    <div class=\"mdl-card__actions mdl-card--border\">\r\n        <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n            Détails\r\n        </a>\r\n    </div>\r\n</div>";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n    <md-card fxFlex.gt-xs=\"40%\" [fxFlex.gt-md]=\"regularDistribution\"  *ngFor=\"let actu of actus; let i = index\">\r\n        <md-card-title>{{actu.titre}}</md-card-title>\r\n        <img md-card-image [src]=\"actu.image\"/>\r\n        <md-card-content>\r\n            <p>{{actu.texte}}</p>\r\n        </md-card-content>\r\n    </md-card>\r\n</div>";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n\r\n<rank-line [ngClass]=\"{'hidden': isLoading}\"\r\n           rank=\"#\"\r\n           nom=\"Nom\"\r\n           points=\"P\"\r\n           joue=\"J\"\r\n           victoire=\"V\"\r\n           nul=\"N\"\r\n           defaite=\"D\"\r\n           bp=\"BP\"\r\n           bc=\"BC\"\r\n           diff=\"Diff\"></rank-line>\r\n\r\n<rank-line *ngFor=\"let rank of (_ranks | team : team); let i = index\"\r\n           [ngClass]=\"{'hidden': isLoading}\"\r\n           [rank]=\"i + 1\"\r\n           [nom]=\"rank.nom\"\r\n           [points]=\"rank.points\"\r\n           [joue]=\"rank.joue\"\r\n           [victoire]=\"rank.victoire\"\r\n           [nul]=\"rank.nul\"\r\n           [defaite]=\"rank.defaite\"\r\n           [bp]=\"rank.bp\"\r\n           [bc]=\"rank.bc\"\r\n           [diff]=\"rank.diff\"></rank-line>";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"row\"\r\n     fxLayout=\"row\"\r\n     fxLayoutWrap=\"wrap\"\r\n     fxLayoutAlign=\"space-around center\">\r\n    <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n        <img [ngClass]=\"{'hidden': isHOFC()}\" src=\"" + __webpack_require__(3) + "\" />\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{rank}}\r\n    </div>\r\n    <div class=\"nomDiv\" fxFlex>\r\n        {{nom}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{points}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{joue}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{victoire}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{nul}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{defaite}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{bp}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{bc}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{diff}}\r\n    </div>\r\n</div>";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(4);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ErrorObservable_1 = __webpack_require__(47);
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(33);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(34);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(35);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(36);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(37);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(38);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(39);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(74);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(75);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(21);
__webpack_require__(18);
__webpack_require__(20);
var aspnet_prerendering_1 = __webpack_require__(22);
var core_1 = __webpack_require__(0);
var angular2_universal_1 = __webpack_require__(12);
var app_module_1 = __webpack_require__(19);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzJkYzMxNjk1YjM4NjJlNjQyYWQiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4vdmVuZG9yXCIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hc3NldHMvaW1hZ2VzL2ljb24ucG5nIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvbWF0Y2hzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwvbm9kZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvcmFua3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3V0aWxzL2RhdGUudXRpbHMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItdW5pdmVyc2FsLXBhdGNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZmlsdGVycy9hZ2VuZGEudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9maWx0ZXJzL3RlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL3Rocm93LmpzIiwid2VicGFjazovLy8uL34vc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQuY3NzPzU0NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzPzIzYTQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzP2QyN2YiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzPzc3MzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuY3NzPzU2YjMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudC5jc3M/YTU4YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2J1bmRsZXMvZmxleC1sYXlvdXQudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2J1bmRsZXMvbWF0ZXJpYWwudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxj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QTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQzs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pyQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEEsOEM7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7QUNBQSx3QkFBc0M7QUFDdEMsd0JBQWtDO0FBQ2xDLHdCQUFpQjtBQUNqQixvREFBeUU7QUFDekUsb0NBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0MscUJBQWMsRUFBRSxDQUFDO0FBQ2pCLElBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsa0JBQWUsMENBQW9CLENBQUMsZ0JBQU07SUFDdEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFlLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDN0MsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDbEMsSUFBSSxFQUFFLDJCQUEyQjtZQUNqQyxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2dCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxhQUFhO2FBQzFCO1lBQ0QsYUFBYSxFQUFFLFVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSztnQkFDdEQsNkVBQTZFO2dCQUM3RSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWtCLGNBQU0sZUFBUSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBSTtZQUN4RixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMyZGMzMTY5NWIzODYyZTY0MmFkIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDk3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpBQUFBQ1FDQVlBQUFEblJ1SzRBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVIM2dzY0RDQTYwMjBLdlFBQUlBQkpSRUZVZU5yc3ZYbVVYV1dWOS8vWnozUE92YmZ1cmJtU1NtV296UE04UWlDQkVBYVJlVkp3d3BaV1VidkZkbWdsMm82bzNlYlZibTI3bTdadEI4Q1dWbVlFQWtnQ0JwQTVCSktRT1pXcFVxa2tWWldhNzNET2VmYjd4N2xWcVdMUzlmc1J1K1BMczFhdGxhcWJlKzQ5NSt5emgrLzN1L2NEYjYrMzE5dnI3ZlgyZW51OXZkNWViNiszMTl2cjdmWDJlbnU5dmQ1ZWI2KzMxOXZyN2ZVSGxyelZCN3pzc3N0WXNtUUpxb3JJbXg5ZVZZOTlFWkhqY29LcWloQi9qc3JnRTNaaVFVRndpTGo0LzhSL0FHZmlON3pPOTNNSWlnQWF2N2YvUXNhZkU0WU96L1A2UDk4WWc2cWlxa1FhWXF4Rk1mSDdGWVFJZzZHZ0ZrdUlSMFNJbzBBQ3ovcEk1TkF3b3F1bjkreGN3VDFTa2tsSk9sMkNaMEJjaUJHSzMrZjFyNnVxOHNRVFQvQ2IzL3ptTGIrKzNsdDl3S1ZMbDNMZGRkY0JZSzE5VThONDlXc0RUL3l0V2s3aUc5eG5GL0ZOMXZpV3F3V2svOUlycnpKb2VhUHZwc1gvR3hzUkExN1Q0cTloR09MN1BzNjUvdGVNTVFSUmdkNThjRzNCOFIvSlZBbWVaMk56RkdIcm9WN1dQZmNjRFJ1ZldaZE8ySVVYWFhTaFRwODRpWTRqemF4YytWMGVmdlFKZXZNUmkwNWRvcC85ek44d2UvcEVTVmd3QW1CZTk3cXFLczQ1Uk9URU1DQlZ4VnJiLzhTOW1RRWRENE41OVlxS1JtRUFneUFxc2Nrb29CSDBleE9ERGpRbTh5YmZUUjJDRy9Ba3hJYW9JdUNVem83MmExOTg4Y1gvYUd4c3BLYW1oc1dMRjYrcnJLeGMrUERERCt2Szc2NmtOM0RVVDVyT2lER1R1UENTUzVnOWN5S05UUzE4NDBkM0lvVmV4cFRKZ3R0K2RhdmVlZnM5L09ybW0zajB2cnU1OVpaZjhLVnZmSnVGUzVadzRIQXI0dm1JTVRnWFlnd2c1bld2Nng4VENmN1hHVkRmbCs3NytaOEtZVnIwQ0NLQ0s1cUhJRGlGK09QeWlCSEFpejJLQ3VxS0hndkJPZGNmZnZyT1JiWHZ6WDJ2MndFK1RUaDRxRmsvOWRkL3pWTlBQVVY5ZlQyN2QrOW02ZEtsQy83dDMvNU5PenM3ZWVHRmRYenljeXRZdU93c0hsanpMTis3OFJaV1hQOHBYbmh4QTBjT052SFZ6MS9MNlZOSGNOcXNTWHpzb3gvam5ydnZwVHlSb0x1bmwxdHV1WVgxbTNmd2pvc3ZZOVRvZWxRRWc0QnE4VHplK01FOFhnL3JXMjVBSW9JeDVvOHlpT1A1WlBTWmtKVyt2QVVpVlp5Q0N4WHJHWnhZUWlVMkxnRVhoWGd1UkZ5ZWhvYTkrc3JtYmFncUN4WXNZTUtFQ2RKM0UxUXNnVE9JUUZnTUR3STRGM0hmYjM3RDZ0V3J1ZkhHRzdua2trdTQ1WlpiV0xGaUJYZmRkUmN6Wjg3QXFHUGkrQWtzTy8wVVNvZU40MnZmL2dHL2YyNFR2VjNkVkNjOXhsV1drZ2p6bkRSN0dwV2xhYmJ0M01sM3Z2MHRtbzYwY045RHYrWGUrMWV4b2VFQXpZZGJ1ZVo5RjVPd010RDV2T2E2OWhuOThiclc1cys5UXJBb1JDSGlZaDhST0NVMFFrNmh1VmQxeCtFZWZYcHprOTcrOE5QNjRwWUd6VHNkLzVuUGZFYlBQdnNzdnYzdGIzUEREVGR3KysyM0Q3b2hCUWNGRWJwRHZUYm5JRUxpRUtMS3JsMDdTYWZUTEYyNmxFUWl3ZkxseTZtcHFXSHo1czJrUzBxd0NpMkhteEdCVERxQkZmQ0lxS25JME40WjBIaXdIWWZQd1lPSHllWHoxSTBjenY2bUExeCt4V1dzV2IyYVg5OXhCME5xaDNPbzlTaVI2clhPUmFpNi83RnI3UEZudmx3UTRhSUlrMGlTRDBJZVh2T1kxZ3dkeHJRWk0vaitqKzltL2NhZHBFdlRES2xJY2ZFNWkzbjJ1Zlc3ZnZsZnQvUFJqL3dsZi9QWnorRjVIb1ZDb2Y4cGpxS0lneTBkK3VSTG16blUxTXpRcXJML3VPekNjMFNNWWxTcExDOG5uOCt6Zi85K1Jvd1lRUkFFcUNxZTU1SE9wTW1rVXpRZlBNakJwbFllZS9RWmt0WXdkL29rS2pJbC9QYnAvZnpIcjMvSFMrc3kzUDFmTjFKV1djMmxsMTdNNWxmVzgvVy8rd3JEUms2Z1BmUVlQMk1lWjUyMUROOHpQellEcXN3L2V3TlNoY0cxakFPSk13aURRZDdBSWZibFZlRFFZcm1OS2k0U3JEVTREUWp4RWJGb2tNY0Z2ZGNpMHVDbDBxdC9mdk12ZGNmV1YvaTdMMy9sSEZLbGZPbUc3M0xXdWVmeHBabXphYzhaWEtxY2ovMzFWU1RKTXlRQmZtK1dzbVFWdC83WHI3anYvZ2ZJbEdhNDVPSkwrZEtYL3c1alBRVEQvc2FEUFA3a1U5UlZWaktxcGh3dmNuaGlNZFp5NnFsTHVQSEdmMmZseXBWOC9PTWY1emUvK1ExQkVMQjgrWExLU3N1cHJLemw5anQrdzVZRFBhU3FhdmpnZXk1aTRmUlJwSzJUcjM3eUlsM3oyTk5zM2I2ZW1Zc1djZldWbHpOL3preVpQcUZlSjQwZXk4SERuU1FycXBnemJ3NjFOUlhpYWRHeld2L1A1NG4vM3ZlK2gzT3UvNllQL0lsVUNWU0puQkpwUk9nQ0lwY25jbm1jQzEvM1BhcUtpeHhoRUZFSVEzckRQRDFSUUhjUTBoTkc1S0tJM2lCUFMyLytPei8rNVoxNjRVV1g2cXhway9TU2k5NmhldzdzMWIvNm04L3E2TkdqOUpYTnIyaG5wSnozbDUvUkN6LzJSZDNhMXF0Zi91V3pPdlhLcitscEgvdW1udm5oeitrM2IveTVkdWNDWGIzcVVmM2k1MWZvMVIvNGdNNmNPVlBUNmJTdVc3ZE9DMEZBR0VaMEZrSWFzd1Z0ellmWDlnYU9JSFJFVGduQ2lHdyt6MDAzM2FRTEZ5N1U0Y09INjhrbm42dzMzM3l6WnJOWnVqbzcrYzBkZCtqOUR6eXN6Mi9lclh2YWU3UTlqTWhHQVVIWVF6WW8wSlVyMEpuTDA1WFBraTNrQ0tNQ1lTRkhsTy9GaFNHNVNPa3BoT1NEQWxHUUpZcnlSRkh3aHRldXI0ei8zdmUrOTJmZ2dmcnFGVkZFRmRFWWtrUGZQQnZycTU1Q1ZYS1lzenQ3QzQrMGQzU1JMc3RRVlphNlhmQWFmbkxybmRmZi9MT2JPWC9aeVZ4ejlmdll0WHNIaFZ6QXJKblQrYStmdDlQUTBNRG9xZE9adjJBUmE5YitucWJXZGthTnFzQzNob3N2dklpemwweW5PdVVUaUdOUDh4N2U5ZDUzWTR6UHYvN3J2OURjM0V4NWVUa0dod2lVZUlLeElna1JOSW93eHNhZ29EVjR4dU45NzN1ZlhIWFZWZjF3Umw5aFlhM2hnb3ZQRTdHV1FnaHFQTVFZQklpY1I5SkEwaWd1S3NUdkZVTVFncG9FNHZLb0sxQ1FCQVV4M3dHRFJYN3N1N0NoeE1yL0t6bFF4TEVnRnFPdzlHTXl4NEM4VndOaEFJVWdZdlh2bjlmbk4rOWkxOEhESEdwcG83UXN6U2V2L2RDN0t6TSt2M3ZtWlM1L3p3ZTU3a09YY1hUL2JxenZjZUJBRTlPbVRzWVl3OWF0V3puOXZBdVlQSGtjano3K0ZDMkgyeGhaVzBuU0JyUWNQTXlUajBlMEhtamczR1Z6dWZmQmUvajZONytHTlNsR2poak92OTc0YjR3ZE8xYmlQRG5DaXBLaWdLaEZUQUxWS0s1MklsZXM4QVhQODE1Yk9vc1FHby9JZ2JNZWdaUHhoWUFYbkVwVkVIa0UrWkF3bDZPMy9SQzV6aVBrc3ozMDlPUTVjclNMN3E0T09qdTc2UWg4dkpyUlpOWEhoRjNYWDNQWm1Vd2FXVE93aWoreERlaE44WVkrQUxob09BcUlHRndVWXkrT3FQOFlyYTJ0dW5QblRqelBZOXJVYVJPTW4ycjQxUjMzc1BOSUwrKzU1aS94VWo2My9PTFhyTi9Td01teko1SVBJdEtsWld6ZHRwM1BmZnpEN05qK0N1ZWNkd0hmKzk1M3FSczJqRWQrK3pCTHp6NVB0MnpjaktjaDVTbVB1dW95UmxRbDJQTFNDN1FQcVdYVXNGSVNudVdmZi9COU9vOTJrUERUMU5YVm5aUEpsSzVHUU1VUU9zVzRDR004RkkvUUdad0tZZ1JWd2VBd1FCQUVCRUZBUHA5L29iMjlmVUZiV3h1dGJXMGM2dXltdFRPUFpHbzQzQlhTMGF1MGR4Zm82c25TRlNpdXQ0MERHeCtuZGN2VEJEMXRSSVVBcDZEaW95VHdTb2N6ZnNrbFJPWERxVWlGdlB0OGl4WHYvdzBQRkNQQU1RZ1hJYWlBVTBVOEQ0MGlmQ09FWWNoZGQ5MmxLMWV1cEtPamcxd3V4OUtsUzNaOTl3Zi96S0lscC9MS1hZK1JMSzJtdmJNSDY1ZFJYeithcXNwU3FpcEsrZjJUYXpucnBJL3h3My81QVYvKzhnbzJiZDZFdFpaclB2UkIvdjNHZitjOVYxeUdWMTdMMzN6MnM4eVpOSnBVT2puaDIxLzR4SzUwU1pLU2tqVHBoSldFS0w0RVVGdUhFUVBHRWpuRmlTRXE4bWVCbXZIWjBPektGNFJzQWJxNmUyaHJhZU5JY3pNTlc5ZlR1R1VkaDVvUGN1alFJVnBhV3VqdDdTV2Z6MU1vQkJRaUErbGF4cDV5QVlYTUNQS1NMZ1pvSld1U3BGUnBhKzBoMzVQSEJDRzJDSUNxOXZGMVFpQWw1S1Njak84UXp3ZHgvMk9JekovV2dOUVUrU25CQ1RpQndNRyt4b01hOVhZemRkd1kyYlJwazM3Kzg1L25zc3N1NDVPZi9DVDMzSE1QMy96V041bnk4NSt3N0tLclNUNzBBdi81OHp2d3ZBUytlT1I3ZTZndUhjbjU1NTdPUDN6am0zejBtcjlnd3NocTl1L2Z4L0RSWXhCcitlU25QaVVYWG5DK2RtVURobzRhUzAxMXRaUjRzUmxQcUtzUUZVR0VHSFFNUTlRcFJwUkljK003dTN0MmRYVG5PTlRTeWZiZGU5aTVaeis1UkEyTnZTa090M1p4cExXYmZDN0F1RHllNXRtNzRVbTZkNndGRi9hRGVIMTVrRFVHNnd4YVlnbWtsRjZ2bXB5azhWeUE3M0lZRkU5RGpBdVJLTUNnS0VLRWowaUlrQVBKb2NhUk40SkxXTVE2aEJCSS9EK1FBMFVSemhoNm5hTW5tOVdTUkhKQ1BwUmRQL3pKcndoenZkendwVS9yazgrdm82T3pnM2RkY1Nsang5YnpvV3V1NGQ1NzcrYVJoMVp4eFYvOEZTTkhqNkpneS9tTDk3MlRCMjY3ajEvKytDWTY5cDdCUlJjdXAvcmJYK0h4UngrazFMZDgrS1BYc3ZUMFpST1NtWFNEY1NHVHAwd1dFUVhqRTJrVW8rVXV4SVZDWHZ4ck83THVQN3E2dW1uYXRZMWRtMTltNTVaWGFOaXpqYjBIR3RtMzl4QWRIWjA0aWJDWkVZeGY5ajQ2TXlOUkxCRWxPTXBJU0o1a29aVklmVVE5RklkejBRQXF4T0JjakJYaGhJUUtRUlFRU1JhTDRtT0FQSVlDeG1vTWNUakZZaEFzUWtpRTRJeFBaQVJMZ1pUMThIMkxVNHZwVndLRTVQTjUwdWwwdnhMZ3o4Y0RpYUhnbE1kZmVrWHZmL0FSUHZLQjkrK3FyNjlqNHF5VHVlMi9iK0daOWErUXFhZ2lqRUsyYmRuTWtxVkxTSmVXTW56NGNIWTM3Q2JqQ3pNbmplVHBkYTh3dk56eXhVOWV3VE5yUjFCUlhrRVM1Znl6bDhnRlo1NkVGVUZkVEZPSWkwbFVZenpDS0tRelc3aXROU2Z2Ym1ycnB1WFFZWFkzSG1IN3ZxTTBIemxLVjBzVHp6MThCNFdXQm93NklpbWdvb2dyd1FCaUhTbytvV1pBL1Rna2kwWEZKM0lSVmd3MmNqaG4rZ1VlZld5OGMzRW9jaElYRHpGNHJJaFJGRU1RR2lJMUtBVWk1NE42T0JGRUhVb2hOanp4VUVuaU1IZ2FVbUk5Zk45SHhhTEZ6Mmx2YjMvaFJ6LzYwWUxycnJ0dVFsbFpXY01KUjZhK2VSa2Z4d2xObGJHdW9ZVmh6MnhuZkZPV0RWdDIwdFBkeGIzMzNNMW5QL0VSUm8ycTV6OS8rak9tenBoQlozZVdUYTlzNXZTbFN4aGVWU0hublR4Tkp3eEpNVEpqR1ZxZWtzc3ZPUU5qQlErUU1NQktYQWxGNUNrRWhlOEVYWVhyOSszZXpZc2JOckZoMjE2Mkh5blFrUjVKYTVDZ054Y1NPVUhWdzQveVpQSkJuQkJyaUtqcmwzTzgrdkliVlR3WEE1dVlFTUZnTkVJd1JaM1BHMThCbzhYUWJYeHlVa0pPTE5ZNUVnakdKU0ZLUU9TRHhBYmtqTWJWcXh0TTBRaEt3dmRJSmJ4aU5SdFhyNzI5dlF0dXZ2bG1vaWphdFdMRkN2RjkvOC9IZ0hBRkJJOHBFMGN4dkg0U2Q2NTZpdHFLTkNmTkdVYzBmU0tQUC9JQTExLzNNYjV4d3cxODVZc3J1UExLcXloSlp6ajExS1Y4OFl0Zm9zUXFpeWFQa29WVFI2RWlST3BRR3p0djV5RE1PanFQdHVtV2JadjQvYk9QODlMR0RleDQ4UldPSEc2bE8xc2c2MHBJanA1SDdhSmhkTmh5SXBOQ3JDQ1JvOHpMWVRTTHVwaEI2NmRnaFdJbU1vaWl4WkhBRU1ZM3oyaGNvZUVSL1lHS3lCWExmQ2RnVEVSQ0M1UzRIQlhXVW5BZWxsNDhja0NBOUpHMzJDSWRMTVZTUkRFNGtwNlFLdXFKK2d3b204M1MyOXZMOTcvL2ZTWk5tcVR2ZWM5NzVNOGtoQ2tpRVNtQkd0OWZlZVpKczY4LzBQQWdWNy83SFZ5NGJPcTZKMWVYTGxqMXE1K3o1cEhmOG9tUGZsaE9XM0txN3RtOW05cGh3eGczZG9KWWEzRXVRb3doVkNYQzBobEUydDZkWTgrK3creDhaU3UvdmZOT1huaHFMVzF0QndsZEZqV0tpUXdXVjFUNitDU2lBc2t3VDRwQ1RJSUNWcFhLak1lNHFwSHNNb2JRZXJqUVVXUlA0a1M0aUZJWkJZZFBnU1FXaHpFUXVRSytNYWdCTlFhTVlEVFdGdzNTNWlDRTFzTVQ4RFJMdVd0bjJyU3h2R1B4RE9vclMrbFFTOVBldmR5ZlhjK0xqU0dFaXVCUlVCOURnYWpmSXlvYVJaU21TMkt5V0YxTTQ2alMwOU5EUHArbnA2ZUh2LzNidjJYbzBLRzZmUGx5K1RNd0lBSHhFSEdrWFc3RnNqa1Rybi93WHNPMmx6ZHcrWkx4Q3hmTm1xd2YrZERWekp3K0RWVmw1TWhSTW1MNGNDSVg0WHVXSUhCa25hR3RLNjg3bXpwNGVjZCtObXpaUmNQK1pscmJjeVFMM2V4K2NUTmRyVzJJT296NFJGRlVsSzJHV0J3UUlrUllqYkRxTUpwSFZMRWFvZG1RMm5Fak1WS0lxeG96U0dnNHVCWndFVllnb1NHR1BHV1pGQnJta0h3blh0Z1RCekVSUE9zUkJNRmdJRVBBOHgzVmZwNmxwOC9pL0l0T1pkUDZiYXhhczVHczlaa3hzWTR2ZitWTHZMQjRHZy9lZlNjYk4yN0ZkeDVPUXdhWm9rQjFaVGtKSytlSXhOUlJGRVYwZFhYMUU3Z3RMUzE4N25PZjQ1WmJibEdPZzN6NVR4N0NDamFCMFlDa0IrUHFLaWFjTkdmYXJwNmVUcUxRWFR1a3VrSytmY1BYTU5ZREJLY2FTME9Ea0tiR1JuMzYyZlU4K1hJRCs3SXBkaCtOT0pvM09QRUpOWTJhTXNvOEllK0JlamtrektOTzhZeEhTQVJheExqRkVFbVNYbE5LankzSG1BaXJBUW5uTUVhWk5HRVVkYlhsN0Q4YTlHdUlYbThsaklMckllR09jc1ZGWnpCbjduaTYyanJadVc0ZGp4NTVpYzJOSG1FWUVrVVJJZ01OVVRIR1VaR0M5MTk2Tm92T1hNcXZIM3lDQjUvWVFGYytpWWZIY3k5c0lkM1Z3R1Zuek9MTE4zeUxWUTg4d0M5L2ZTYzk3VDNGMEtyOWVWQmxSU2tDRFZJMFdCR2h1N3ViTUR3R0lXemR1cFhycjcrZXhZc1huMGdlcUorVWVJM1FRTldpVGtrTERYLzFnWGVDZ1lSdmZteHNLZzRiTHNCRlN0T2hGbDM3dTkreGVzM0RQUGYwVXpRMkhhV1FHVTM5eVJlUno0d2lSNHBJQlRFZVNvU0tSU1FXbVZzVEU3Y09WOVEydTFodEtJWklES0h4Q1V3Q1g4QTVBY2t6WW5nRlY3eGpBU1AxYzN6bFM5ZHpZTi8rb3VMWkZJMUFBUThWZ3lWQThwMU1uMXJIOGxObmNOZmRqMUtXU2JOdzRUek9YVHFMRFUrczVmZFBybVhMMW8zczJyV3ozd3VweGw3ajA1KytqbE5QUDRVZjNmb2dqNzYwa3g1VFNkNm1TYWpnTzBmajdtYSt0ZlorNm9ZaytOQmZmSUJQZi9aditNSEs3OUhkazhWUklCS0R4YU8ydkl5RXBjRnA3SkdzdFJ3NWNvUXdEQWZoVDJ2WHJtWDY5T25IeFFzZEJ3TnlNV3FLNEVTT1VSWUl2bE5VRFNvSlBFS0dsYW1vR0xJS3VVaG9QWEpFMXovL0ZQZmZleitQcnY0OXpZY1BVUWg2WWtCTms1Z1NSYkRnQkRFR0R3Y2FZRlJJaEdCRGcxRVAwUURyV1FJWFA1WEdtcGluSXNLNEFyN21TWkRIQ3owaUxWQ1NDamhyeVVKNkR4OWdXRVUxUC9uWnJheTYvMjd1dnZOMkdnOGVRcU13Smp6VlJ3RXIzWXdlUHBSM1gzRVdUejIzbGQ4OXN4dW5DUjU2N0drU1BRMHNHVmZMKzkvL0FTcXJNbXpkdXBsMTY5Yng1Sk5QMDlPZDVlLy8vaHRNWDN3bVAvekZmZngreTJHeVVnV2FJS2tSaUVPbEFCb1M1Zk1jUHREQ1AzN251OVRWanlNTXdOT0lnRHloV0R4Sk1MUWtqV2NFRlFzdWZsU1BIRGtTaCs1aVdhK3FsSmVYazBxbDFwMFlYTmlyeXQwNGRZei9HcW1DaVZ0YWdtTEYwcDZOdE9GQUsyc2V2Sjg3Yi80M2RtemRpQXNpMVBrNDFSaWhGMUFYb1JMZ1RFaGtJeUlKVVhHSUdoU1BTQXdxTWFobXhjWWlNdXZqSWhkak9VaFJONndZd2hqeEZVUEs5VEp6WkJsbm5qYVhtMzUwQzdmKzZFYm1UUjNGdTY2NGlNdCs4UXQrK3ZPYnVldjJYMVBJZHFPRW9EbktVem5lKzY1VHNZa0M5LzcyQ2JLbUVsd1NHd1FjMkg2WWx4KzhpeC9kK0MrVWxaY3djdVFJempoakdkZGZ2NEk1cytmUTA5UE5wejcxQlk2WVlZVGxZMUhyZ1pvNE1SNUVOV3NjeGlQSDNqMTdFSTFCQWpTT2liNXhWRlZtRUkydnJwRllvOTNjM1B3YVBySzJ0cFpFSXJId3hBaGhBL1c0dU1HWHhBb2lzWGFtUFljK3RXa3ZqL3orRmRadjNFN0x0cWZZL2NwMmNCRkdZOWJiR0J2ejkwcmM4U0NHdm40SVo0ckhGRVdjRnVtUm90aGRoTHBoZGN5Y000Yzl1L2ZSdEg4dnVXeTIyTm9UWVRURWtrZGNSS1dmNStwTDNzbk9uVTA4dGJtSjlsNWg3V09QOHV5VHF6bjV0T1Y4N0svK21pVW56ZWVlMi8rYng1NTRCbU9WZDEveURzYVBHODcvK2JkZjBwWXo5SmdrUGo2cHlCSVZTeVV4aHM3T1RqbzdPOG5uYzB5Yk5vdE5HMS9obi8vNWgyemFjNVJ4cDExQnFCNU9mVUF3L2YwanI4SjdKTmFYYTdFYVJBVnhqa3hLR0ZLZDdzL3ZsRGhrTlRjM3YrYVdGQTNveE1pQlJBZDdJK2NVZGJFR0tMSVdveEVHeTY3OWgvbkhIOS9CZ1M0UDFRU2lhVndvaUNqT3hYYm9YQjhPSTRnbWdSUkVGcXNXNitKK0tNR2hMbzhoaUQvUkdzcEt5MW41bmU5UVBXUUl5VVFKVGZ2MzhlQ0REL0hpcGgxMGVXVjRGUEJjRms4TkMyWk5Zc0s0MFh6M1gyNmxQV3RRVTRJTFF3b3U0SkhWcTltd2FUUHZ2dXdDUHZUQnE1azcveVFPOXNKWlp5M2p1eis1ai8wSEN1U29Jdkk5a0N5UjYwRnNFSWU3S0VUVmtVajREQjgrbkYvLytsZHMycmlGanZaT2JOVTRRaldvU2VDa3FNTjhsYTVadFVnMG8wU09mcllmdFZnZzZZVlVWeVNMZkpsQjFWRW9GR2hwYVhtTkI2cXJxeU9aVEo0Z0JqVGdPWEpZUWozbWgwUU1udVlSd1BOUzVDVkQzaVl3S25nYXcvZGdpdnFhSXJaUkJNakVKSkVRZkkwQlNkOG9HdVZBSTlSWWZNbGpKVUJFdWZ6eXkwbG4wbnowSXg4bG5jcHcwc0w1bkh2dXVYejgwMTlnVDZleWZsOG42N1kxMHQxNmhFc3VQWjNWejIzbHBSMU54ZndxSWhJVDk0MnFvL2xRTS8vK294OXoyMytYOFlVdmY1V1BYdjFSZm5MdjB6eTc4UkNGcUFyeDBrQUFwZ2RuOG9UaUJraHdZMjdxNmFlZlJ0Vmd4Q3NLbndTTXdZa3AwaFZSRVdLUTE1WEhhTkhBVkF5aXRxaTlUbEtTRWt5UkNuRk82ZTN0dmEydHJlMVZBVUVZTjI3Y3l1UEZpUjBYQTVMaVV4RmhDTVRRZU9pSUJtSEF1REVqSkZZaWhsUlhwaW5KbEJGMkIvaFJVTHg0dHI5UUVCRktTakxrd3l4UkVLQ3VGODhQc2E2VDJkUG5jTUhGUy9FSTJiMzdFSzJkQlE0M2JLWnJjNEtxRWNPNTdOTEwrUGxOUCtYdzRTTVFOYk9uWVNkMzNYMFBYcnFTOFF1V2NlcUY3K0dLaTgra3RzUm5YM01QUDduM0diSlNUcVhyUUxSQWhPM3ZKK3RyWHJiSkZMUG1uOFRxeDUvbnp0OCtUcGNaZ1RpL1NHdmtNQ2JBa2NCUjhwcGlwMDlXR3NzdVlxTFVDVVJHY2NaaFhZZ1FvbTl5TzFTMGlJaGJMTXJ3WVpVa0UzSzd1aENNeGNRaDg5MkhEeDkreldkUG1USmwvSkVqUjA0TUE0b2t6bnBGUXlMeDZDaW8vdWV2SG1MeG90bU1Hek84MkU3c3lLUjlTdE0rbmdSWUUxOGdwS2daRXBnNmRTcGYrcnV2c24zblZ1Ni81MDYyYk4yRmsxNm1UaDdPVlZlZXdlK2ZlWm1Pb3kzVTFRMm5KSmxoMFlMNWxHUWJPVzMyZUE0MDdXWE5talVvRmlYQ2lCQ0VBYm1lSGhwMjdDUjQ4bG1lM255QStWUEc4c3lXUGJTSEpSZ3R0aWxMUkY5RGtCUi85MnlTei8zdEN0Smw1YXo4L0FxaU1RdklHVWZLS21nWTk3UTZEelFKbW5pdEJ5a0s2RnhmMDJMZlI2a1d2WThyTnU0UDhFRXlHTWlVSXFXaEdJd0cxRldYay9EdGxhcXVuL0xvNnVxaW82TmprUGN4eGpCdTNMaDN0N1MwbkJnR1ZDQ0JPQU11aS9PVkI1NC93RVBQSFdMMHBCQkxoSkVFaXVENzBicTZLck1nc1N2RWVaYThoSWdGNDRRaDFkVjg2ak9mSmwxV3lwbW5uOEY3TDcyVUo1NTZsdWUyN2VXOEQ3NkhGN1kwY045ajZ3ZzBnWXVPNEVkS3RXbmw4bVhqR1RkbUdKLys1TmZwNmVrbWNsN3NRVFFtTFRSeXFDbWhsekphY3hudWYvRWdrYVlBaTZjUmtUR290VUNJRVFzMkFnbTU0dklQY1BsbFYvQ0p6M3ljWFZzM00yNzRZbEsrUlNRZ0ZKK0lKRllGUXhaRDlsV3R4YS9DeDBSaU5iTmFqRHBFQTFEQmFiTFlIVHM0aCt4VC9Zb0ROVDdPS2o3ZDFOZVVZZkJSQ2VNOFVPSEFnUU1FUWRBdklRR29yS3hrNk5DaEowNW5xazhCbk9Cc21zMU5yWHJUN1E5UklNR1JsamFjSHN1UVBDc3I2bXBySHNHMW9nclc2eE9nS3pObnptRFZxbFU4OGVUVEpFUTU2N1RUT1AvU0s3anEvZS9uZ1djMnNPclpMZlJHSHRna0lpRldqM0xXc29XY2QvWk1WbnppTDltMVl5OVJGTVZaZHRUUEhoWHZabHpONVlNUUl6Skl5YWV2VWsrS0VlcEdqZVJMZi9kRnZ2Lzk3N1AyZDcvRCtpT0lJdGN2enozMkR4a0VXZnlSK3N4akh1ZDFZTDVCa0VpeHVsUjErQlpHajZpTGh5bzRjQnBMYkhmdjNqMEloUVlZT25Rb1E0WU1XWGU4R1BtMzNJQ1NHdUtNY0RBYjZVL3ZmWUxkUjNMNExzbVIxcVA5NUNVb3Z1anF1aUhWR0pUSXhhSjByTVVWbENlZmZJcUNndGdFMWdYY2NkZWQzUHZRb3lTSFQ2Rnk1bW4wcG9ZUlNoSjFRb0k4ODJZTzQvS0xsM0xqeXBVOCtjU3p1REErbnRQZ0RhV2VmOHpvbVhSSmltOTkrNXZzM2JPWG0yNittVnd1QzJWeTNFVmFiNFR0cTBZWWNaVDRocEYxTlhFSWxHTUplME5EQTFFVTlmOHVJdFRYMTFOZVhyN3dlSDB2Y3p4T05hZnd3Tk03K08yek93aHNHYzRrT2RMUlN6WWZhYVN4SE1FVFIyMU5CVWxmVUJmR1pXd1lvaWhSRktQWlVSREUvM1pLZDA4dlJ6dDd5WVllZ1Nhd0prR0NrSEVqcXZud1gxektwZzBiZU9EK1ZRU1J3YWs5TmxaRlhnV3NEQkMzdlpFUlNiR3I0cjN2dllycTZtcXUrOVRmME4zVkZUdXdLSHhyaU9YL0R5RkZVTlJGVkphbXFDblA0QWtZRTZQdGhVS0IvZnYzditiaG1ESmxTbjk3MFFsaFFBVXNtL2UzNjMvZCt6VGRVWXBJUFVJbnRIVG1hTS9taTRpN2drYlUxbFNTVHZoRkJXRWNZZ1FHbGNHcXJtODhWQ3lta1FTQ3dYTUZoaVFkVjEyd2xIeE91ZWUrUnltb3hibmlSQTc2bTE1ZkQ1MTc3UXR5REFRVmExbXdZQUZUcGt4bHhSZFdzRy8vdnRkTGFQNS9xQklHenlMNlkvRlpRVEhpR0ZsYlRTYmxyN1RGc0d5TUpaZkxqZCsxYTFlLzkrd3pwRm16WnYzQktTbi9xd3lvSTVMeFA3M3RNZmEzWm1PbGJ6SHZPTkxWUzJkUHR0OExXQnpEYXNwSitoNU8zZXZjNlZjN2pqNUdUZkNCdEFaY3NIUVc4eWFNNU5lM1A4UEJRemtjZml6REVJMmgvd0hTMGorcWdneER4UE5JcDFLTUdqbVNmL3FuSDdCMTYzWTArcC9yUFIrWWpCdGpNS0tNckJ0S09pa3JETVVHVGFDbnAyZlgvdjM3K3dsVVZTV1pUREp4NHNUaityM2VjZ1BxTGVpdVYzWWZKT2NzVGcyK2laUFJmR1E0M05vWks3S0taR3RweXFlcUtoUHJkLzVBWHRHWHJ4cDFlRkdlYVdQcnVQRHNrM24wa1dkWnYvRUFCVTNqdkVSTVNOTFg1bUpmTnozdUwyMWVkWHhqREJxRzVQSjVWajMwSUllYW0xR25SUU4vTThpMHJ5enZhMXY2NHd3dUx1TXBqcm5yL3hiSDZ2eUJ4NGFZMzlPUXlSUEdGalZIeDg1dDkrN2RkSFYxRFJyblVsNWV6b1FKRTA0c0EvTDkxTHJxSVptaU9xK1VJQklpUXNJb3hZRURIVVFTRXRLTHVBUVpuM1dqaG9VWUswUXVDZkw2Tll3S3FCZURqRW50cGI2MG13OWZ0WVFYdGpUeTY4ZDMwQzRwQ2w0S3A2Wi94bHhFVkdTWDlIWEtHZ0dOOWN0YUJBdFZZMElTZFVTRlBMMDlYUlNDcUZoeGFUOGlMQXFxSG81azhmMFJtSmkvczZHSDU3eUJCZmlyWXlSaVlwbWpJQ1Fqb1RTQVJPamlHVCthQWsyaHhpQ2U0UGtHM3hvODR4T0pSU1VrSWIxTXE2L0I3K3NITno1VUIvYmxBQUFnQUVsRVFWUk9oUzFidHNTVlo5K05OWVpSbzBaUlYxY254elBwZjh1UG5QVHR3aEcxbFJnVUYvWEZmTUdwME5qVVNzRTVrSGdTaHk5Y09YeFlGVmIwelI5YUplNEd0VUxTczV4NzNqdklxZUdPK3grakl4c1ZoZXp5V21meituODRGaFJsb0R6cnRZbjJHM3ZEQ0VzQnF3NGJXYXl6R0pXWTVwWG9EUXdvOWxuV0ZRc0VzUlM4RXJJMlJjNUxraFhCcHhQZnRXSERYbnpQcHl4ZFNtVkZKZWxNU1F3UmlGQlpYc2F3MmlIMGljajZaTE1iTjI0Y1ZJRUJ6SjgvLzdpUnFNZXRqRS9ncUJ0U2dTZjdNY1h5dkcrc1hOUGhEdklCYlduZlZBdUNGVzBZVlRjVW94djYrNXJlS0h3WlFLSUNKeTA2aWZLaEkvalpyMWZUMk5LTjJvbzNsZzRlcnlVeDlXRFVReldKa29qcENsR2NpVjRUZ1FhZWg2ZEtnQklhUThFYUNwSEQ5eUtJZXFsS2RURzF0cFFMWmw3T3BOb1BNckYrR0tsMGtoYzNiZVNyWC8wcVBWM2RqQjA3bHNyS3l0ZVkrVXN2dmZTYXo1c3paODZKTnlQUkkyTGt5RG9JWDhEWWtwaWdSSWhVMk50OGxON1FWVlVtUFRSUVBDUFVqeGhDd2pqeUdyM3gvVEpnY0l3Y09aeXFxaXB1dmVNaEdvOTJFMG9KcW0vTktRZ01Jak1IWC9SQjlUOXFMSkcxdUREdUNYUDRpQW1JUENFeUE0QkNPY2JyT1JkREEwTnJLbW14TVFIcnVSNThLVkJ1Q3B5eWFBYm5MSnZPN0hIRHFQTVRWRm1MdUFpczh1aFRqNVBMWlJFUjVzMmJSeXFWR2xTcFpyTlp0bS9mM3Y5WklvTHYrOHlkTy9mRU15Q0xZL1R3U2xLZWtIT3hyRFFlY0drNDB0RkRlOVl4TE9QakMzZ0t3NGRXVVpJVXV1V04zVWprWXYxUFozczd2L3ZkRXh5VURGbXZGS01lOXEwcWtJU2k0RXo2Y1dMUEdpS2lZaFEyaUNtaXdSakNTRWlJdzJvT3RJQnhQU1JzZ0NFa2tVaGdqYVc4UE1PWU1hTVpQMzRpTTJmTVlmNjgrV3pidVowYmZ2aGZsRWdlbzBlWk9tNGs3N3ZpSE1wS1BIWWVPTVRkbTNaUWFOcExYWWxoMGR3WjdHell6bzMvZWlNdWlndU51WFBuOWhjY2ZjYXhkZXRXSFpoQU8rZW9yS3hrOHVUSnQ1OXduYW0rT29aV2xGQlpXa0puUjRRV3lWVW5RamEwTkI1c1kzTE5pRGdCRTBkVldRazFsUm5hM3VRODR5TGZvN3U3bC9hdWJxS3FvUlNraEtSRTlNMWZmUXZ3eitJVFhSd0xMTEh4aUluNTcvNlJ3TTRoWVVUU0JhUWxpeWNobWRJMGxXbVBjVVBxcUpuMUxrYVhYOFdNR1ZNWVBYb2s1ZVZsWkRLbDlQYmt1ZnV1ZS9uSDcvMFQzVDFDWGRUTk9hZWZ5YW1uTEdMTm8wK3hic00yanZZcVh0VEZ3UTJQa2QzM01wVWxNWFhSbFMyQUdzb3J5cGt4WThZZ2oyS000YVdYWGlLWHl3MzYyK3pac3lrdkw3K3liOUxzQ1dOQUFsU1dsekdrdXB6R3pxNVlVVmc4MzhBWjloeG9obG4xaUNyR0tPbWt2WDNVOE5wM2IzOWRoRGZHZmxRRUoxNE1OSW9oVklzVGkrSXdSTGorY3YzVldiQytpczJHd1lQRmowMmJoMk1oQVlIU3NsSW1UWi9BaU5IRE9kTFV3eXViTm5DMHV3M3hQRkxXa2FTWE0wK1p3cUs1NHhnOXFvN2gxUm1HSkR6S1BZdW80Mmg3RzAxTiszbjY2YWQ0L3ZsMXJGdjNFaHRlM2tCdmJ4ZkptbnF1dU9Cc3BpK2F5ODl2ZllBdCt6dnAxQ0ZZOFNtemJVUTJqVk9sczZjTGNScjMyeHZEbURGakdEVnFWSC9QZTU4aFBmZmNjLzNocTg4RG5YcnFxWDhVWmZPL3pvQkNNYVFUWnNMWVllbGRMKzl1cFdBekdJV2s1Z2xEWmMrQkZpS05OZUNpam9RSnI2eXZMZFdFaGtWNXBvY2ppc3ZsdUsraWVPdnpSSkpIVElnbHhMb0lSMENCRUNrbXNjVzJ6NEZBQzVnRVJndXg1RUtJY3pJMXFFQk9MQW15bEVtQTV3bzRITlltdU9qaUMvbXJqMytZV1FzV2tTaEpFZVlLckhyZ04venQ5WDlIV3lFaUxVMjg3OTN2NFpMelQ2YzBaWEdGaUNPSHVubng4QUZlZU80Sk5qMnhsb1pkMjltemR5YzlQVjNrOHdVRWkxTWxrYkJjZE1uNUxGdStoSCsrNmJkczI5OUJUbE1ZSTZBQkxncUt2Zk1TcXptMXFBVnl5c3laTXlrdkw1ZStZWi9XV3JMWkxPdlhyKytmUnQ5blhLZWNjc3FmWkpEN2NSSFYrNWFHQ2FQcnNNL3RBNG5GWlRoRmpXWFg3a1pDT0Z0RlZzZlFQRXdjT3dxandZQmlWeGk0SllHb1FWVlFFa1NrRUJKNEdDeGdEQU9RWWhtMHZ3VW9SZ3hHQkhHSzlSSWswNlh4bThTUnRCR3BLRWRGUWxpMGVENHZQdnNNVmNPR01XZnVQQXI1SEg0aVFhb2tqWmRPOGE1M1hjNUxtN2J4THorNWszUGVlUTZ6RnN6bjhlZjJzWDNyaSt4djJFSlBaNUttdGk2MnZmSTRYZHZXWVFtSlhMNWZJcTQ0akZoT09ua1JLMVpjenoxUGJtVEgza1BrTllPS3dXZ0k0cEErR0VEcHAzM2k5d29MRml6b0w4dU5NVGpuMkx0M3IvWnhZSDBHVTFGUndheFpzL3EzV3JEV25qZzRVSjhWalIxWlM0SThWdU1MRWc5b0VocWIyK25LUm8rNFlxK1Z3V044ZlIyK0Z3SmhmOFl6TUNRWndGTWYxVFFoYVRRU2JGVEExd0xlSDVpUkxPb29MeS9qNmcrOW56dC9jemNMVGo2WktBcEltSWl5b0pYWlk2cFo4Wm1yY1VFZURmSzBOdTduaG0vL0ErOTU3L3U1NXBwcmFHczdpam9sa2ZDNTRvcDNVVnBSempNdjcrYlRYNytKZi95UDIzbitsVmVZZTlxcG5Iblp1K2dJVTRSYWlqV0d5RVVEK0x6NFBHcUdET0ZyMy9nbWtTUjUvS2wxWkNOREtJa2lTR2plRkFxcnFLeGszcng1V0dzSDRUMGJOMjRjSkNJRG1EZHZIdVhsNWRKbmFDY1VFcTNxOEFUcTY2cW9MTEZZTFlBNm5ERkVCcnF5c1BmZ1VaeFJWTUNxWVZoVmhwcnFORWdZRCtDVXdWNGtGcFhHZlZOSW5vUjBVSjNzWldSTmdvUVh2VEYxb0pCSnAvbitELzZKSC96d1g1azlid0hidDIzQnA0QU5PMWc2cTU0dmZPSWlIbC83UE04Kzl5SkJQaGVMLzFYSUZncmNmOS85L1BqSC85a2ZGa2FQR2MzUTJsb2FtOXJvTFhpTUd6dVNGWi83R0pkZGVDWjdHZytnem9jQW9qRFdDL1dWMU1ZWWpCR3V1dklxVGw2OGhOVnJucURwY0R1UkpBbkZpN1hScjFNSXlBRG9vTDYrbnNtVEovZDdsTDVqUC9QTU14UUtoVUdFNlpJbFMvQjlmNUJYT21FTVNGQ01PdXFxSzZncVRlQkw3SnJWV0FLQlhPVFRzTCtGZ3NRem44VVpxdExKbGNOcnkwQ0RvcURldk1xQUZHc2lNTDFVSkxzNC85UXhmUG12TCtDRFY1Nk5mYk02WHBTaFE0ZXdmUGx5RXFrVUd6ZHVwSzJsaVJLYlkvNmtXajc1b1F0NTZlVTlyUG45UzdHUzBzYWllcHdTdXJncjVLNjc3aUtmendOUVZsWkdPcE5CWFlTdkFlZWNQSjNaWTRZU0ZncHMyN29WUTRSb0dJZE9Zd1l4NlRVMVE3am1tbXNvNUVOKy8vVHpCQ0ZFYW5HWXVQL3RkVHlwRktVYU1zQ3JERHh1ZDNkM1A0RFlaNmkrNzNQS0thY01NcklUeTRCTXJJY3VMN0VUeGd5dnhyb0NSaUJVUmEwaEgvcHMyM1dFU054NEpGWWVwM3haTVhyVWtKZ0drSGl5MTBBamNFWDVneWM1TGoxckhsLzV5SVc4YytFWW12YzFraTI4V2NldU1HUDZER3BxaGlCaWVQYVpaN0JCRHlOSzRicXJ6MFZkeUoyckhxZExTdWtoTldDTVN1d1BQR3ZadW1VekhSMGQvVjdJR0lNMWpyS2tZLzZVT2twd3RMVzBjZURnWWRTQXNhNC9Qd0d3TnI3RVo1eHhCcE1uVDZMemFBZmJOMitOOHp5UklrR3NXQTM3dGMwRFBhaTFCaitSNEpSVFR5V1JTQXphUHFxeHNWRzNidDA2SUZRcW8wYU5ZdWJNbVlNa0hTZVVBVkhzWlVwWUdxWk5IQk5yZnRHNElkQUkyQ1RiZCs0akg0UzcxTVZ5QkEvSHhJbGp3QXdzc2dkczQ2WVFZa243U1U2Wk5wRzZCSGc5QVZzMzdDSjBwVytJQXduQ29rVW40ZnZ4aFgvKzJhZElhSjZQdlBkQ1pvNnA1ZUhWejlEY0dkSWxHZkltVFNRMi92NUZQQ2lLNG0wU0RoNDhpREdHN3U1dXN0M2RPQ0txcWtvWU4yb1lvb1lOcnpUUUhmZ0V4aXMyUElLZjhDa3BLYUcrdnA0Wk02Wnovdm5ua1V3bU9Yem9JSjF0YlJnOXhyTEgvU3ZoWU5paE9MY3hpaHhWMWRVc1hyeTQzNEQ3MXZyMTZ6bDY5T2lnVURWLy9ueUdEaDBxZlJ2ZW5YQlZXS1ErUmdUUFJVd2RONEtrRmJJb09JZFRpeG80Mk5IRmtmYUF5cG9VbGhEZldNYVBua0JwU1pxZTd0NllMdEFCQUovNE9DeTFGUW1takI0S0NBMEhXdG5iZEJTUk12RHlhSmhEeWNWZEZFWGpNMTZLazA0K2hVaVU1c05IMkx0ck53dG5qV2Y1cWJOb2JlL21pUmNhNlExU0pEMkRUeFFIUytNZGUzSnRMRTRQQ3dWUU9IVG9DQzFITzZnWjRURmwzQ2pLTW9Zb0tMQjMrM2FxVXprcVNzdVlYajZYU2U5Y3dKelpNNWcxZXdaQlVHRGx5dTh3Zi80OHhDaXRSNC9RMmQxTlNteGNNSm9BTkN5S3hXS2cwaFIzVUV4SVBLVmsycVJKakIwelJnWWFWMSsvV1YvKzAyZFl5NWN2ajhmZXFaNllCcVJpQVlNSFRCNDdpcFExU0JCZ1JjRDVoRktnclRmUC9rT2RUQjVhaW1nQko4S1lVV09wSFRLTWZiMzdpbHNsdUFGT0xkYitUcHM4aHFGREs4a1p5L3JkaDJuUEY1dnRUQkloQ1dveEV2L2dITldWbFV5Wk1na2xZdStlZmJRZWJ1SC8vUDFYS2MyaytOMjYzVFMzUlNoSnZEREFreUtNSUg3L2huUlJGQSswcXE2dVFwMnlhZE1ydExlM016VE1zWGpHYUJMeFhCRE9QZU5VM25GZU9YVTFWUXhKK0Vodk56dTJiK1hoaDM3TFhYZmZpVEd4dUIwYzJWd1BZVkFvOXAyNTR2VFZDRkdETXhabmJEekJYanc4UDBVK24rZVVwYWRUV3BvWjJEWE8wYU5IMitLR3hXUGJHVlJWVmJGbzBhTFhsTzNIMDVqZStoQW1SYkdtRWFvcmt5dkhESy9HbDVDK0dWK3FRallmc21OUE0rR3hmUVFaTW1Ub2hISGp4ZzBpQ1FjbUE3NkIrUXNXNEtWS3lTTzh1SFVYZ1UwU1NSSWJaTEJCQnVNeXNaNUc0NGJmU1ZQR1UxMVJoaS9LN2wzYkdUZDJES2NzWFVwZVlkT08zZVREcUxpbnFyeW1rSXYzVGhWS002WFVWTmNRUlJHUFBMUUtGK1NvOEIxekpvNUFnZ0Fqd3FUSms3R2VaZDFMVy9uVzMzK1hpeSsrbUFzdnVvaXZmK1ByckYrL25pRkRocEJLcFpCaXg2dG9QQlhOYXF5dkU3VW9sakNLSHdpblFsbDFMUis2OXE5SmxGV3gvTnp6NC9BL1lEVTBORlR0M0xsejBHWjRFeVpNWVBMa3lSUDRFNjdqMEJzZjlWUG9IcXlZT1hIazlSdjNicVJnUzdCaUVhQVFHcmJzM0VjMld2aWRwUFZXaUNvbHlXVERyRm16ZVBUUlJ6SEdEQkpIQ1E0cnlwSWxTM0hHNDBobm5sMzdEdUNNeGJpUWhPdkIxeDVFQXB3b1ZnMFlqemx6NXBQSnBGRzYyYlJoUGVlY2ZUYVpzaktPRm9ROUI5dUpIQmpmRkZ1RzVUWFZKT3FZTW0wNnFYU0dBL3YzOC9EREQySHdHVnFaWVdSdEZXcUVKNTdmeUkyM1A4cUJEa2ZRM2NiKzliK2pvMkY5VWE4WVcyVW1VeHJqTjg1UlVsYURWMUtHaWxkc2M3SXhnSzZHQkZrU1pLbXBMdVg2TDl4QTJIV1lpZVBITW4zcXBNRXpCMVJaczJZTjJXeDJVSks4Yk5reVNrdExHMDVzQXlLS0oya2dKRHlZUFdrRWQ2NStnZDYrR1JJS2tVbXd1Nm1kdHE3Yzlaa3lmMFZDd1BkOTVzeVpnKy83QkVIUTc0WWxuckxBdUxHam1UQnhJaEZDMDZIREhHMDVoQmVWWWsyV1RMS0RVc2t5dXI2RVlWTVdNMmZhRktaTm5jNlpaNTBEUUtFUXNIdDNBeC85aXd1eE5rRlBieTlIMm52aTNaZGRIMkV5MkFWNTFtQ3N4L0xseXpIRzhKOC8rUWxIMjFveDZTRk1uenFCUk1yU0U4TGFEWTI4M0JTUXRhV1VVRTdlWkZBVlhMR2N0OVlNS0tjTk5TTkdVMWsxdENoaGlnZHFXZXNoaEdTMGswbkRNbnppdXEvUzhPTGpyTHpoSzF4NTVSWFVWcVlFRjhaZ295cEJFTEJtelpwQkZWbEpTUW5ubm52dW43emw2RGdZVU54RkVZT0VNSGZxR0Vwc1JLdUxNQ2FXWVlicTBkVFNTVk5MSi9VVnRUSFRyY3FNR1RPb3JLeGtZQiszY3c0cndyU3AwNmdkT294QWxaWkRUWXdkbHVHaytrbU1HRDJhTWFOS0dUT2tpdnFxVXJTbmc1ZWVlNTVmL09KVzVpK2NCM1lrSFIwOUJJV0EwV1BxQVlkemptd3VQMmdVeld0eU9hZWtTMHU0Nk9LTGFkaXpqNS85N09mZ1Fvd0dUSmxZSCt1OFhjUzJ4bmF5WGpWWlVuZ1NFakU0LzNETzBkSFJUaGlHSkhHTXFhL2p6SE5PNC9rZDdWalhRY0lZaUtDNnJKSmxpeFp4MGZMWlBIRHJUZnpzbi84QmNyMWNlUDY1V0NNNFBhWTYyTDE3dDI3WXNLR29NNHBoZy9yNmV1Yk5tL2V4NDcrTjZIRTNvR09Ea2d3d3JESzljdlNJMnV1Ym11TXc0UkJVZkxwelhlemFjNUNGNDJyN2M0NzYrbnBHamh6WmIwREdHREtaREZNblRlYlN5eTVIYkR4WTRKUjVNMWk4WUQ3V1QxQndqb010blRUdDNzK3ZmL3lmUFBYWVEremF1cEhxbWlyS3EwdUpEQnp0NmlGWENDa3JMOGRvdkJtSytVTU5Hd3BuTEQrRHlWTW04NGxycjZXdHJSMXJESjdBbFBGajhWVHA2c3pSZHJRRHB5V0lHS3pHZzZzS3J6cFVjM016M2QzZGxKVmxxRWlGZk9QekgrSGVOUyt5ZWQ4aDhKUkpFeWN5WitaVUFwUmYvdmZkM1Arck8rbm96REo3eGhRbXo1cEhKRjY4cFZUUjR6eisrT04wZEhRUVJWRS81blRPT2VkUVdscjZZLzdFNnppUXFYM2JaenRFSXhLK1hURnQ0dGpyMXpYdU9qYU5TMkl2dExGaFB4ZWRNZWVGSkN3MFFIbDV1VXlmUGwxZmZ2bGxqREdVbDVmejNlOStsOHN1dVpSTXVnUVZJZWRnYjNNSFcvYTBzR1hyZm5idWJ1Wndld0h0UGNMV1p4K2lxM0VUUXBZWk02ZFNNNlNLVUlYMjFtNmlYRWc2cVRqSjQ2eVN6UGdZT3VQaDRDYUppSThMWWh6SWlGSlZXYzduUHZ0WmZ2R0xXMW0xNmlHTWlUZmxyYXJJVUY5YmdVUjVPcnA3YU8vcFJpakJkd0crQ3pDRGxKVnhndHZZMk1pT0hUdW9yUjJLUVJrMUpNTkhyenFUbmtpSWZLRzFPK1RoTlM5eDIyOWZvTHZ0TUQwRmk1b0VKNSs2bE5yaEl5VXE3akZpaTJ6N2ZmZmQxNThqOXJIdzU1MTNYajlQMW9kQ241Z0dwSDRSSEFzeEpzTERNR3ZLT0RLUGJhVkhCWThrT0kvUUpubDViek5IY3JrRmxTVUpoTGlQYWU3Y3VkeDIyMjBZWS9qd2h6L012SG56V1B2RVdwYWR2cFNTMG5JYVczcjQrZzl2WTJlcklkQTBUajBpa2xTNERLR2tVTFdJd3NqaEkwbW4wcWlKYUdsdVF3c1JSbUxKUnFLa2hJcUtFb3p0SWxMQjRSRkVJVEV1RHVsMGlodSs5alc2T3J2NSsyLzlQWVZDUUVKajVjQzQwWFZVbHBVZ0lqUjFkTkZXaUhBcWVIMWJHb2daQUd6RzdVVmRYWjNjZU9PUG1ENXRKaFhWVmZFUUxZWGVYSjdWVDI3anRvZldzV1ZmQndWYlFUTEtJSDRwbVZTS2M4ODhnNVRuRVptaW1nRmx4NDRkK3ZMTEx3L3FmeDgzYmh6ejU4OC9PaEI1UG1GeG9HUDFzUFN6MEZNbkRhYzg3ZEZUaURGWEtSYnZCdysyMGRyYXpjVDZhb2djeHZNNTZhU1RTS1ZTOVBiMjh0T2YvcFFmL3ZDSFRKczJqYldQcjhVWnk0RkRSMm50eXBOM1pZUmFSR2I3SjdvZis5d3hZOFpnalNEa2FXN2V6K0dXbzNUMUdqS2FvY3BZenBnK2cyYzNkdVBaRERaeUpLSWNhYzJUVGlYNDdDYyt4N1RwMDduNkk5ZlMyZGtSengrTTR0NlBjUk9uNEtVcjZZaVVReDI5QkNSUTQ2TXV3dUhGYzZsZnJaRUtJKzY5OTE1NmUvTzg0NktMSUZWQlU3ZmptYzM3MmQ4YWt0YzBrWlRSUDdOQllQekVDU3crNWVTNE03Zll0WXZBbzQ4K1N0OE1vRDRqT3ZmY2M2bXBxYW4rVTdEdmZ3SURjdjJhSG9sbFZBeXJTVE51VkRVSGQzVVVXMmtVeFpMUFc3WnUzOGZKbzZ2QXhnbmhoQWtUcUt1clk5ZXVYYlMzdHdNd2ZjWU1qSmNneExEdllCdTlnWWV6S1NCSkdJWU0zdkV4TnFQNlVhTmkxVjRVME5aNm1LWWpSOWpiMk15STBXTkpLNXgzMGtTZTJYS0F0UzlzeGhjbFJaNnBZeXBZY2ZWM3FDb0orY3VQWFV2em9jUEZJWjVGQXpXR01lTW4wNnVHamJzUGNkZkR6eEdTSWxLRExXNUk1N0NETkVreElCb0x3SDc3OEVNODlNZ2FLQnRCL1NrWFVTZ2RRNDRxalBHUktNUVJZcjE0UXR2eWM4NWl5TkFoRWhPek1VNlY3ZTFsMWFwVi9kV1hNWVpFSXNIbGwxL2UvL3Z4RnRIL1NUeVFGREZLd1dCUXlwUCtPVE1tMWozeWJFTWJ6bWg4MDQxSElVcXhhVnN6aGVWek1UaXM5YWl1cnBiWnMyZHJYNSszaURCMzNqeXM1NUYzd3NHVzduakFndWtidWZ1cWl5WHhUczdENm9ZVjUwVWw2ZXJzb2J1bm5kVnJWN053OFh3OGlhaXREdmpheDg3Z3hkUEdjYlM5aXpIMWRkU1BITUxxVmZmejZlcytTL3ZoWmpRaTNuL1FLYjYxWUh4S0s0WngyNnFudWVXQjUyanFEZ2dwaTlVREdoWFBYQWExOVdoUkZPYWN3Nm1MeC9BNWg1Q010NHFTRkVZamZJbUtneVZDeXNwS09lY2Q3OEQzNDZIclVmRjRPM2Z1MVBYcjF3OGlTaWRObXNUY3VYTlhEdXdBK1ZPdXQ1Nk5sejdNT1paa2lqcDgwZFVMWm93bWFSd2E1VEFTNzVJVGFZWU5XdzV3Tk9kVWlsdFhXMnRadkhoeGY0bWFTcVdZTW1rU3hnaVJpMmcrM0lGVEh5MHlYcStuQmZKOW43TFNNb3hZbk1aaWZPZENicnJwcCt6ZTEwaXZRdUFKTldXT2Q1dzZqWXZmZVJLMWRUWDg0cGQzc0dMRmwybHJheWNLbzdpbFdZdVZwWUtZQlAvd0Q5L24zMzk2TndjNmxBSnB3TWM0aXFXRGU1UGNNUDZlVmhWeERzOHAxc1hidGhnSmtPSjhSOSszVEprMmxUbHpac1IrWEZ4L3NyeG16Um9HemtCMHpuSGhoUmRTVVZHeDRrOXRPTWZQQXcxb0h6Ykc0cUlDbm5GTW16U0Myc3BTOG0zZEJBNGNHWnhKY2Vob0N6c2JXeGcyWlZoUmFHOVl0bXdabmhkdkYxQldWc2I0OFdNUWpRZ0xqdGFXbzFETU00dzZMTkZyMlBoVUtrVWk0Uk5HRVd2WFBzc2pxeDhCVlpyMk4zUE5YMzZlYjM3Lys0eWNPQVJ4Y09ob0c2dCt0L0gvdG5mZVlWWlY1LzcvckxYM1BtMTZwY3d3RERPVW9ROWRLU0lpVVlvdEZsUml1U0tpZ0JwRFZFUzhKZ1JqakdsR2pjRWJOYmthTldoK2RsRWgwVmhBRUVScG9zRFFoejREVERsbDc3M1c3NCs5eitGQTFPdk5GUVREZXA3endBTThuRG5ydlB1dDMvZjc1YzIzbHhDcjM0MXRSekRpK0VxQmFabVZrRGd1TkVWdG9tNkFPQm00V2lDRmhWQUtRM242RytKTEVKSWFnVTBJUTRjQWlmUTNXUjJoL2NBdlVLNWl6Rm1qS01qUEVZZzRTWGQyNE1DQk9TKzk5Qkx4ZUR6Vm1Nekp5V0hNbURGSEZMTDZEWVN3d3loNWhJZGR6b3VFbG5hdGJOMW42NjdsR0VZWUI0bmp1c1NGNHFNMU5mVHIxQkxUcjNUYXR2RjJxVDVaczRhOHZEd0s4L013cENTYWNEalFGUE1BK2Ntbk00MG9RU1RoSkVLd3JYWTdQNTc1RTJiLy9qSDI3OXVPRkFMSGthemJ0SStiZi9RWXNxQUFhYm5zUFJBalJqWlNaNUpwdUNnVjhFbTkvWjB3djVMU0NGemxZQnFXVDgvclNTQW83VE9DQ1pXQ1ozejVzTm4wY1VBcXRRM2lJUkl0REZlUmx4Tmh5TUFlL2o2KzRmTW1LbFlzLytqQ0ZTdFdrSjRvOSszYmw2cXFxc29qdmJwemRJZXBIZ09nYjVrU2hJV2hCZGtHZmZ0M0xTVmlLSlJyK2RQb0dMYUtzbmo1ZXBwZFhhZlJDTmNsTHlkUFZGY1BRQnBoV3JkcVJTZ1U0RUJ6akpmL3ZvQXRlL2FoRFFNaEhMVFFLR2w0cktyK1VGYWdhVGh3Z08vZitBTitkcys5N04yN0E5ZFJPSzVYT3NleGFRZ0UyQklMc2FraFFvTW9JQ0ZDbnB3a050cHdzSEh3ZWkvQ1ovc3dzRjFRSW83clJuR0ZCaGtING1qcGtqQTBjVlBnU09tRDByN3M0WXFEamlLd1BjNUlKVEJjRTlNMU1MUkxyeTVsdEN2T1hHcHFGK1ZZdUk2QmE4ZDQrZVhuT0hEZ1FLcnlzaXlMODg0N2o4ek16SnB2S253ZElRTTZETkxsdzFNbFVOMjluSEJRWXBuZWw2T0ZpVGJDMUd5dG8zWjNRNTdqNTFDV0pUbjExTUVJb2NndnlHWGR1blZNdW00eTAyK1p6b0dHaGtQeUhwMU1XZzhaUXlnYUdocTk4amZwbTNRNnd0SGZNQlV5MWZnOExQNStQc282T2RIVVhvRWd0UFNGaFAxTkVpMi9nZ2Z5bW9TMkRKQVFGbzQwY0lWQUMwMjI1ZkNkUWQwSlNiZXZrZVI4RWJCcjF4NDk5NVhYVW5tVVVvcldyVnR6K3VtbmZ5T0o4MUV6b0VNM0tBV3RpakxwMHFFVTdUWUJMa2lUWnR1Z3JoRStYck1OVjBpVUlVRTY5T25iay96OEhPYk5lNTNUVC84T2MvN3lGK0lORFI1ZDI1YzJNclcvVDZXUFlEUE5ZNHhQR2hHK0lYMlZyOUdEdXNnMEpVUVhnemdCM1V6WDBnejZkV3hOUUxrZTJZUnZSSy9PbmN1R0RSdFRYV2NoQkNOR2pLQk5tellpSFQ3N3JUS2d3NzlBQVVRRTk1eFUzUjVUUjVIQ1JnR0dsVW5VRHJCMDVRYWFGWE1VRXFWY0tpdmIzdE94VXlYNzlqZlMxTlNNNjdoZ1dqaU9jNWlQMElmc21wTHFnK2l2aVpMdWM5M0lJZDVIcFBJWjVZOUNEZ1d6QzNFUW9tcm9CRUxITUZXVUlGRkN1b0dpVUp6S0lvT3pUK2xHaTRnaExCOWo3MmlicG1neno4NTVGdHQyVS85blJrWUc0OGFOd3pSTlBpLy9TUnJaMGZCTTVwRXlua012MFB0OVJESnRZTStxVzJlYnJ4TlRDVndDM3JXTEFKL1ViR2YzL3VZTE0vTENCQVZFSXVGcFF3WVB1WFhSZ29WbzEvV0Fhc3JiMkVqUi95ZU41N0FJbEw2aWZHVDhqMDdoZlFTZUtJeFFMbWdiSWR5RFpIelNUN1NWeGpRTmhCWkVBcEs4bGdYMDdGeEpibVZYQ2xxMHdsSU41QVkwSXdaM0k0RDJBR1kreWVPSEgzMm9sM3l3Sk5WYWtsSXlZTUFBZXZUb0liN0swbUQ2eU9PNE1hQXZPZ0VOWllWWjlWMHF5L0xlWDdjUEd4czgxVTkyN21uZzB3MjdhSnZmemhNVU1RU0RCdzNoL3VDRHhLS05IR3ZISy9MOUhWb1ZSd2dIS1IwMHR1K0JKSVpwRVE0SGFkT21EVjI2ZEtkNzErNVVscGV3eTg1Z2o5R0NWZHZxK1hqMVp6VHYzY1RacC9VaEk5aHpvaFRTdnhPTnJXSTgrZVRqTkRjMHBuaWt0ZFpjY2NVVmhNUGhRK2pzdmxWbC9CZkdTNjNJdEVUK29MN2Q5SkxQL29hVUliL3JyMmlLSzVaOHZJN1Rlclh6Q0lFUWRPbmFuZkx5Q3Rhc1hza2h5eHB3U0xkWC9QTTJ6SmZTVlFtZnoxQ0lsQXlNSDVuRWwzb2RYL1hFd3pEakluRzlYRTRJREJVbFlqbTBLTXlpVGF1Qm5EU2dEOVhWM2Fpb0tHZm56aDE4K09GeTNsdTRnSWNmWHNWZU41UENQbWVpc2tyUTJxRW9IR2JJNFA0RUxQbXdkclRQUVNSWVgxT2o1ODE3NDJDdzFwcXFxaXBPTysyMDFNUTlYWm53MjlNSDh1UHY0YTdUd1VWak1MQjNPeDUvRVJvYmJhUVJBalROUkZpeWJqZTdEa1IxT0JlaEVPUVdGWXdZY0ZML2VaK3QvaGhYRy82MCt5QWhtVXdhUTlLZWt1SjBhUnNkSHAyZVNobUowZ0l3TWJTRlFTTWFzSVhwRFVUZEFDZ0RLVXdNYWZ2dll5Q2xnNGxDYXdPREJHR3hIMHRFeU1vUzVPY0U2ZEt1bkc3dFN5aHZsVVZ4MWxYc3FkbkNvdmNYOHNRVGYyYlpzbVhzM3IzVCs1STFXTm9pa2RlT21CWENGUkVpVG9LVHE5clJ1NnlZb0FhTmk1SmVKZm55czgremZYTXRqazhNWVJvbUYxOThNY1hGeGVMdzBVVzZBUjJ0U2Z6UjkwRENJNkFxTGM2aFMvc3lkaXpmUlZ3cFRETkF3bkhaWEx1VHRSdTNVMUpkQ2xvVERnWG1EeHMybEdlZS9HK2NtUE1WUGN6bmVJNjBiRFk1ekZVQ0VqSWJoY1RRRUhDaldJN3RiY0g2TXpaSEM2UmhZUXBOYmthWUZxWGxsRmIxWXZDWTB5anIwcEhpbGtXRUlpSDI3R3htM1pyZExIaGhEUXRmbjhQNlJTL2kyREdmTFZhVHpIRzkzRTM2SGhha3NzbUxHSXdZMHBmc2tCU0dFR2pwYVg5dHI2M1Z6ejd6TExidCtMcXZndExTVXI3NzNlOStZMDNEYjlpQXZMbVlDV1NZbGpqdDVCNzZuWTlmSVNFeVBLVXNhZEtjY1BoZzVYcE82bDUrZWxEcStVSXIrdmJwUTNGeEN4bzNiL3RYTS9yRFFwK253Q093Y1VVSXFSVkJGU2RUSHlDVFJpd2R3d2haRkJYbVU5YStQWjI3OWFCdnI1NVVkNjBpSzc4RmJqaVhkYnVhV0x0MU4vUGYrb2lhclh2WXNTdUJuVEJCSjlpK3V3SGI4YWhxcENIOWFid1haZ3pESTEwSER6OGszRWFxMnBiVHAyc0psdDRPd1hnQUFDQUFTVVJCVkMrY216VDNWMTU1aGM4Kysrd1E0WlJ6enoyWDh2Snl3VEYwanFnQnBSTWVKUW1ScEhLSlNKZGVIZHBRVnBURjJqME9DUlZBQ0lFckFpeGFzWUZ4NXpueldtZFlRcm8ycGFVbG9tLy9mcnBtUzIyS2J2Y0x4MjlwWlhPU0hWYjZPQnFOOERtcUUxZ2lUa0EzRUhMM0VwSXVXUUZOYVU2SUhoVmQrZDRaSGVuUnNad09sV1ZrWnVlU1VMQngzVHIrOFk5LzhNN0NaU3hidDUyQ1RzT29kL0p3VElVdFFNb1FpQmlHYUVCekFGQWVIWjVLR284WERGM2xlck16SVFtNE5rR2FPWHQ0TlhrUlEwanRvcFZIb0ZWWFY3Zms2YWVmVHUza0N5RW9MaTVtN05peFI1eDE5Wmp6UU9ucXdSb1Q3ZHFZT0xRdHloelJwM1BiZVp2ZlhZZXRneUExQ1dWUXM3T0JWVFc3YWRXOUJOT1FHT0VRSTBaOGg3OCsvN0kvd2poWXRoL2M2ZElITGNjSHFhY00yUDk3WVFoTVM1Q2RaVkZXRUtDZ3RJVHE5bmwwTEc5QmVkdDJGT1lFQ1VoQmRQOCthamV0NHk5em5tYnAwbVY4c0hRRnUzWnVKeEdMa3RBQmpKd1NaTnNFRFJsQlhPbmhta3h0ZXBMZGJoUlRXY1ExS2MrVDNxL3lWcnh0RERkQlVDWG9VVkhPNE9wMkJBMk5jUDMwM0hXWk4yOWVuNlZMbHg3eXNJd2VQWnJ1M2J1TEwrbzhIODI4NTZnYlVMSlhzWEwxT3QyeG9rU1kwaVhEVVBPSEQrekJxKyt1SWlxQ09FcWdqQUQ3YllkM2w2eGxXTGZXS1JENTBGT0gwcUpGTVRzVCtuOXU3L2dYYVJvR1NKT1dMWXNwYTlPYUxsMnI2TjEvQUoxNjlxZE54eTZZR1FHRTBrU2JiVFp2UDhEN3k5YXpkdFZ5M25qMk1XcFdMa0pIbS8xVjV3Qm8xeWZ6bEdoWGdPR2l6R2F2YzY3RG9BSVkya1JwQjYwaVgvb1RDcUV3cENaRHVJdzViU0Q1V2FZUU9nRWlpT3M2TkVlYitjTWYva0EwR2swOUJFVkZSVng1NVpVRUFvRnZ6RkMrRVFQeTRyNm5GTlBRMkZReDYyYy9aK2IwbTNYbkRpWEMwQTZkMjdXa3FySU5pei9ialpBV2pqYVFJc2ppWmF2Wjk5MkJPak5MQ2dTMEtXc2orcDkwa243aG5UVnBhYkgrb2lFRDRPMlVqN3ZrWW02NTlSYmFsTFlrRWdtU3NHMzJOQ2JZVXJ1ZHp6WnNaZm42dmF5cTJjVzIzYzBrYkJjclhrOU56VzdjbUVzQVNPaTBYVGJscS93Q3dwRUU3UURDa0NTRWlTdkFObTBNRWNPMTRwL3pzeDAwZktFMVV0bFVsWmN5cUU5SERHeWs3MFFOdzJUKy9QbDY4ZUxGaDVUb1k4YU1vYnE2V2lUem9XKzY5M05FRGVqelBwZ1FnazlXcjE3LzFodXY4dTRwSjlPcHd6aUVnTUl3NHRSK0hmUkg2MnR4WmRnZkVVRHRuZ01zK3JTV2duN2xCRndYeTFDTUduMEdMNyszQ1FoNFJGVFNSV29UNlFZOXVRSHQ0QzNmS1F4RGNOSkovWmwyK3pUYWxWZnd5Y3FQV2ZUK0F0NWR2SncxdFUySWxsM1puUWlUMEJhdXNIQjFCcGEyeVRHYVBRRmJyYkdUVXVLT2d4REtzeDN0TFUxcWFlSDZRREpEQ2x5aFVFSWpoSXR3VmRxRUtKMXR6UXVuMHBTRXpTaWpoM2FoSkNjb3BBOTVWZHFsdVRuNlQ5NG5KeWVIOGVQSEU0bEV2dlNPdit3N09MNTI0ei9IQ3ptT3cvUFBQMGZkbmwyODhPSUxhT2twOUlRTUdINVNWNHF5VExUam92MGQ4YmkyK1B2N0sybDBxVU1LcE5BTUhEeVlGcTFMazFITlJ6MTZxc2RJQWZLZ0psYXIxaTJaT2ZOSFZMUXJGNXUzYk9IcThWY3pkZXJOUFBYbnAxbno2V2JxWXliMWJvU1lqSkFRQVZ4aEhaekkrOTVBNFhNVUpxV1prdnBSR3BUZkJvQTB3UlJBYW9sVTZUeU5oNG04SUhCZFRjZjI1Wnd5c0RlbUFLRU9xaWJPbno5UHB4TW1DQ0U0Nzd6ejZObXpwemhhZkQvSHJBRnQzTGdSaEdEQmd2ZFp0MzY5TnFYQUVvclN2T0RFWWIzYUU1YWVhckV0Z2lSRUJzcysyY2ltN2Z2eUhGL3V1clMwalJnOGREQ0dxZjB5eThRVkJxNlEyRnJpYUEvVW5wR1J3YzAzLzVDQkp3OFVhTTJUVHo3SnFsV3JpTWZpM2hxejYyQTdEb1poZmlNWG5wRVJZZno0OGJSbzBVSklLVEVNVHh5dnZyNSt5ZXpaczJsdWJrNDFZb3VMaTVrMGFSS1daUjF6aG5OVURDaWRkdis4ODg0akhBcXkvOEIrWG5qcFpWL0IyQ2FzRXcrZk03UVgyV1lDaVlQV0JyWUlzYXZCNGYyUDEyTWowY0xBTWkxR2p6cVZqTERoa3pNRmZHSUNyOEpDYUdUQTRzSnhsM0w1WlpmZFl4Z0dHemRzMG84KytpZ0oyL1k5aThJd0xZelBiY1NKUTFhZGt4b2YvdkFqcmJOOTZFaEZmK1Y3OEg3dDE2OC9aNTExMWlGczh3Qno1ODd0czJqUm9oUmt3ekFNeG8wYlIxVlYxYkZwT1VmS2dBNVZMRDdvaWs4Wk1vVDJGUlVJQWYvdnVSZG9hR3FlNC9GRVE1ZXl3b2w5TzdjaDREWWdjWEdFUlpOajhmNUhhNm1QT2xwaFlRcm8xYU1ENVNVRldGcDVZbklDRURiQ2FjSlFjVTdxVzgyMG0zOUlWbWJtTkxUZzhjZWZZTnZXcmQ3UG9nN09zcEs3VjRkeWtoOWNvL0FJbXdUU2tFakRBRjlhVXByR3djRy9VbjRiNFgrNFlPbkRPQXlEU0NUQ2hBa1RLQ3dzRk9tOFBqdDM3dFIvL09NZmFXaG9TTjFaWldVbDQ4YU5JeHdPcDNwb1gvWTYvRHRJZngyM0hpaTV1eTJscExDb1VKeHoxbWdNSWZoa3phZTg5LzRIRjdwK1lSTUpHZytQSHRhTEhLdVJvRXg0U2FXUndTYzFPMWk5cmhiYjliWVpXdWFGNytuWG93T0dTbUFpUERDN1RwQnBKR2lWRjJiR3JUZlNyazFMSWJTaXBtYUQvc3ZUejZCYzl4REcxQzl4RXg2eFZSbzh3alJOTWpJenljck9RaHBHbW8wZHloVC81UVlrVXhzbXc0WU5ZL1RvMGVMd0h0bExMNzNFNHNXTFUvODJHQXh5MVZWWFVWVlZKVnpYUFdiRDF4RXY0NU9BSisvM0Z0OGJkd24vOWRpZjJGbTNueWYvOGl6RFR6MEZRN21ZVm9EcXFoSzZ0eS9pL2M4YTBEcU1xdzMyTjdtOHMyZzFnNnBLQ1pxS29DR21EZXpiNWRaWDMxM0gxam9ITXlDUUtrRzI1WERaaFNQcDFhV3Mwc0FUNnYzalkzOWt3OFpOYVZ1ckJ6dkM0dlBHTEdoTVExSldXa3JmVTd0ejZxQStsRlYwSUNNN213MDFhMW0rYkJtNzZ1T3MyTFFmT3hTaTBYODQ5UDhReUpJUFVVRkJBVGQ5Ly90RUl1R1VNYnV1eStiTm0vWHMyYk9KeFdLcHU2cXVydWFpaXk3Q05NMURodExIb2lFZDhUTCs0TFFZeXR0M0ZLTkdqZFNQL3ZjVHZEbC9IcXRXcmRGZWhhRm9sUjBVWXdiMzFxdHFYcU1oMFlReXM0alpFUllzcjJIOW5tYmR2U1JEQkhIcFhsWklWWGtoMi9iVmdyQUl5VGhuRGU3R21GTTZFUkRVS0ZleGFzVXFQV2ZPTXg2c1R3aGYzc0FCNlltVzRBYVJwc0lSQnFiamtpMXQycGRrY3ViUWZoUUZoeEtKTjlCVXY0dGx5ejZpb0xnRkx6NzNERy85N2U4VXRLeWdiZmRUcU96Ymh3MzdIVGJWckNXaExXSmsrRldnVjdvbmtTWXBaQ1NDYzg4OWo0R0RCZ3JYZFRGTk0wVVcvdmpqajdOeTVjcVVrV1JrWkhEampUZFNXbHI2VHhQM3J4cU9qdVprL29pWEl1a2Z4ckFDWEQxaEFrODkvVFM3ZCt4Z3pweG42TnExRzVZbENRc1kxS3NUSGQ1Y1JOMm1PRkVkd1JZaHR1N2J6OXNmcjZkalNUVkJwY2dMQ0RGc1FKVmV1R285TVRkS3Y2NXR1ZXljd1dSYmhyQ0VoNGQrNHM5UHNtM2J0aFJqck5DR1grNTdwRE5DQjBFb3BGRGtoTU9jVkZWSlZYa1dzYVlkVEx0OU92czJieUxSZEFBTVNUQWM1ckp4WXpFTWc1M2J0MU83N3gzcXdxVVVkZTVOZFkvT2ZMcCtNL0ZtcjRKMGthbWR0ZlFjcUYyN2NxNjc3bG9zMHp4a0RMTm16UnI5K09PUEg1SXJqaG8xaWpQT09LUHk2NXE0SDJsRTRsSEhCWFR2M2wyY2VlYVp1SzdMYzg4OXg1WXRXNUtyQmhSa2h5cEhEeitaaUk1aktRZXdpTHNSM2x5NG1yMk50blkxV0ZMUXIwc1psWVZCMnVkSnJqNy9WRW9MTWtVQWpYWnNWaTFmcnA5Ny9ublBHd2lSNGl0S05mT0VUeW1ISW1UWTlPbGRSWU1kWmR1QktLKyt1WVRkZTV1SU56Wmk0ZlYzNHJFWTc3NzdIbWVNR0k1cENvUndpQ2RpckZtM2dTMjFPK2pYcnc5RjJXRXNiSkFDVjFpSHhFalROTG44OHN2bzFxMnIwSUJTTGtvcEVva0VEenp3Z05mZThIT2wxcTFiYytPTk41S1ZsVlh6VFFMbGoxa0RTdTR6VFpvMGlYQTR6TWFORzNuNjZhZHhYUWVKUTBqcW1pRjlxcWdxelNPazRoaElFaUxNNmsxMUxGcTFGVzJZR0xpVUYyV0k3L1JyejhUemh6R2dRM0ZsRUJlcGJiU3llZXhQajdHdGRydmZKdENIRFQ2U3VvUXVramk5cTlwd1lIY05pRGhyTm15bXRpNEtyb1VsQlZLb1pMM0dsaTFibURSNUVyZmNjaFBkdW5ZZ0pPS1liaFAxdTdheGYrZG1MamxyQU5teWlaQ3cvNGx4dnJxNm1pdXV1QUxETUpGK2VRN3c5dHR2NitlZmZ6N2xJUXpENEtxcnJxSmZ2MzZDNCtnY1ZRT1NVbUthSnYzNzkwOTVvVWNlZVlUdDI3ZHJwVFFCUTFPU0V4QVhqUnhFSmswSUZjTkJzaThSWU82N3F6bVEwRXUwZ0xEVVhISCtHZldqQnZVWWtTM2RHcUZkQkxCczJYTDl6TFBQa2JCdGxITFJydTJ0K0tRMWNKUUJobXFtWTFrZVdicUJvbENNYzgvc3c5NmRtN0NNQUZwYlB1ekNUNjZsNUFkVHAzTHE4Rk9aY2Z1dHZQcmlITzY4NlQ4NHBYTXhuZG9VMEtabFBpMXpBb3dlM0pPUU9vQWhFaUFsaGpUSnk4dmpoei84SWExYXRSSktLYi9WSk5pMWE1Zis5YTkvelo0OWUxSVYzY0NCQXhrL2Zuekt3UDR2SWV4YlU4Wi8wUWNMaDhOTW1EQ0JuSndjdG03ZHlpT1BQQXJTUUxrdXBuWTVwVThIdWxVVUVhQVpwSTF0aFhoLzFSWldyTi9WeDFFYXBSMHlnakkveXhMemhXdWpoRUhVMWp6MitGUHMzRjNuNVRuSkR5Y09yYnNNSjBwdXlLVnJlVDRWK1NHbVRieUFZVDJLR05hN2dyQWI4d2kvVGVremYwakduSFUyazZaTVFRQ0dvU25JRFROcVNGZCs5c1BMNk4yeksrOS91SnpmUHpxSGdvSUM4ck15a0s3dENTWm94ZGxubjgzSWtTT0ZZUmcrRlIwa0Vnbm16Sm5EZSsrOWw4cDdpb3FLbURwMUtpVWxKU0lkL25MQ0EzMUJaMXByemVEQmc4WElrU01CZVB6eHgvbHM3WHF0TkpnNEZHVWE0dHlSSnhHeDRrZ1J4UkdDK29URmEyOHRKdVpTZ1RSSTRtdTBsTGpDNUxOTlcvWHJiNzRMTXVDdk9SLzI0VFNnRlFGc09wVG1NL0tVYXNhUEhVbFpicGg4dytYU2tTZlRxYlNBc3JMV2RPaFNSYy9lMVl3Y09aSWYvK1RIWkdSbGVZMUg3V0FJRjlPSmt4dVNiTm01bDYyTnNDTWU0STMzbGxMV29Rb2RDS0tBOHJadG1UcDFLdUZ3T05YemtRSldyLzVFLys1M3Z5TVdpeUdFSjhRN2R1eFlUanZ0dEpUeEhPbkU5N2hPb3NIcnlvWkNJU1pObWtSaFlTRzF0YlhNZnZoaFQ4bFFhUUpvVHVuZGpqNWQybURxR0ZvNXVFamVXMTdEcXMzMTYxMHRNSVhYMTFIQ29pR2g2MTU4WXdFSDR2Z2JvNTY5dU1udExhSDgxck1CS2s2M0RxVzB5c3FpUlhZWVN5Y0lHSkxpL0V3NlZiU2xzcUtDck53Q2xCRFUxZGZSME5pUTZoaHI1WlhvbG5SUWRnd3pGQ0l1UEEyejJoMTdzVUlSQkpKd3lPTEdHNituVTZkT0lwbDNTU21KeHFJODhNRDliTml3SWVXTnE2dXJ1ZUdHRzdBc0M5TTB2NVlROXEwYlphVEg0blFOcmVycWFuSHh4UmZqdWk1L2VlclBMRnE0VUFzQ1NGZFRGTGJFeFNOUHBrWEVJcVRpS08yd3RWRXdkK0ZuUkIweHgvSm5xbkVrSzlmdHlIdG44Um9jTndqQ1FHaHZhZGhKTW1FSTEvdW8yaVFjbEFRdGwraStCZ0xDUlpvR0RhNWczb0pWdlBIV2U3ejE1bHNzZUhjaFM1Wjh5S0xGN3pQcnJydG9qa1Z4dFVaSTAxTnBGUktrUnJrdXduWTlZbk5IRTIvWVQzRmhOcWVjT29oTExoMWI3M1dnZFlwazZzVVhYOUJ6NXN4SlFYeHpjM09aT1hNbWJkcTBFZWtMZ3VuOW42OHl1dmkzODBESlkxa1cxMTU3TFdWbFplemVzNGZmM3Y4QSsvY2ZXT0s2RGdZdWZicTBabGovam9SRURHMVl4RnlEdHhhdlpPM1dmUmNtbEFkQ2R4M0ZQOTc1Z0taNHdsdkRTVUpKaFJmaXBQSWdGcDR2OG9Uck5DNW13QlB4ZFpEc2JvankzT3NMaVJFR2FTSHh3bzNyS2w1LzdUV2VldXBKREduZ0tIQ1ZZTDlqc2RjSkVBa0dDUWtiV3d0aVpvUllQRWF2TGhYY2NjY004dkx5OHRQRDBmcjE2L1hQZi81em90Rm9TdGZyaGh0dVlPalFvVUlweGZGU3RoOVRCaVNFb0YyN2RtTEtsQ2tZaHNIOCtmTjU2ZVZYK25oT0kwRk9RSWdMVCs5TlJYSEVtOVFiQWJiVng1aTNZQlhOcm5HTlFpQ2xTNXV5MXQ1R2d3WlNUM0p5OVZoZ0lKQSsrWk5HSXd4Sk9DZENBb3VFTVBuYm9yVnMyTk5NM0lpZ2xiY1hxcFQzYjdYajhPdGYvSUlOR3pmeXdRY2Y4c2gvLzRYZi9Ha3UwMzd6Vit5RVEzN0VSQWh3cEVWR3lHTHFwUCtndW1jUGtUNXRqMGFqUFBEQUE2eGN1VEwxMmM4ODgweXV2ZlphRE1QQU5NM2pKdWM1SnBMb1E3clRoc0VsbDF6Q3dKTlBvcW1oa1FjZWVKQXRXN2RwS1JTV3R1bGFWaURPSDlHZmlHNUVhRVd6YS9HMzkxZXlkdnYrMlk0d2tOTGc1SDZkS1cxVmhDbGRVRTdhcW1wcTVmRGdmcGlRYURQRWlzKzI4K3k4RDNqNzQ0MHNYTDZScUxKSXVONTJxdGF1eHpTa05Wb3BtaG9hK2RVdmZzWFo1MXpBMUp2djRKbFgzbUhoeWxwV2Y3cUIzdDA2RVpGeGdrVHBVSnBQejg3dFJGSnVNZ25OZU9PTk4vUlRUejJWK3N3ZE8zWmsrdlRwRkJjWGkrUUE5ZlAwdlE1UEFkSmZ4MG80azkrazkwbGVVbkZ4a1pqNmc1dkl5OHRsK1lybC9PYUJCM0MxUXVJUWxDNW5EZTFHdjhwOGdqcU9FZ0UyN1c3bTlmZFcwcVRrSEtTa0pEK3pjdFNwQTVBa1FDZkFsMXNneFFpclU0MUVCd3NyczRCL0xGbkR2WDk4bFptL2U1NFc1WjJKaERNeGhjZGZpSlM0MmdNV0NzUGdPeU5HOE1vcmM2bXJiOEIySkxZTzRZZ010dTFwcGpuYXlQQytsVncwdEFzWGp4bmljeDZLMU1PeFljTUdmZSs5OTdKdjN6NlVVbVJsWlhIYmJiZFJYVjB0dnU2Ny9MY0xZVW1vaDFLYTRjT0dpZTlkZWlsQ1N2NzR4OGQ1NDI5LzB3bkhyaEM0RkdkSU1XWHM2ZVFGWEtRd2lCSGlwYjh0WlAzMitnc2REUmxDMTN4bmNDODZsTFhBVTM1TzNTeEtnQ3Q4U1hremdLc005allxTnUrT3M0dGlOamNHV0xCa0ZYMTc5eVNJRFRpNFNxTjkrR3BXVmdhUlNJUnQyN1lqWlFDMGlTRU1sQzJ3elN4V3JmNkU4MDdweXAzamg0dDJCVUVoZktTajFwckd4a2J1dmZkZWxpNWRpdU00QkFJQmJycnBKczQvLzN4eFBKWHEzNWdCZmRtVGtjNjJKYVVrRkE0emVjcGt1bmJ0UmxQREFXYk51cHNkMjNldDE5cFRpNjl1MzBKY2VPYkpCR2xHUzhuZXFPYTV1ZThSdC9VU2dVdEJib2E0N09MdlloaytmbEJJdndKVEIrZGdyaWJ1Q0Q1ZHQ1Rm1XMkNiRVdJeXpPYnRlOWk3ZXk5dFMxb2lwSHN3ZTVJR0F3Y081TzEvL0FNcGhMZVpZWGlDZW9acDRUZzI3ZG9VMDcxZExpSFZoS0VUYUsxVGsvYm5ubnRPUC9IRUV5aWxzQ3lMTVdQR01HWEtsSW1CUU9BUWxjR3ZzL0k5N2czbzgrQWM2UTNFOUpJK09kcVFVb0swYU5ldVVzeTRaU3JaR1dHV0xmMkkrKytmVGFMWkJpMEpCUXd1R042VkFaMHlNVVNjWnJKNGU5RW1WbjIydTA5TUdHaWgrTzY1SStuZHF5dGFDajhQVWw1VjVnUGZVUkloRERadTNreHVmZzRtRFJnNDJNcmlzL1ZiNkZYZGxWdHZ2cDZaczM3RXozOXhMdy8rN2tHdXV1b3E2dmJzOFVta2JMU3dTZmdpd3RseVAyZWUxSTdpM0pDUVZoQXRERXpmTUZhdlhxMW56WnFWYWhoV1YxY3phOVlzOHZMeUhqNWMrL1QvT3E3NHQ2M0NQdThwR2pWcWxMajg4c3R4WGNXZi92UW41czZkcTVYMnlLVktDN1BFOTg0WlRvc3NBMHNvdGgrSThkZDVTOWdmZGJUQ3BLaW9wYmh1NG5Wa1pXVDRCRS9HNGRZTlN0UFEwRXdrSTVPQ3pBaEJiV01xRzIxSHljc084UDBicm1IYUxWTzUvdnJKWEg3NUZZd2FPWkt4WXkveWNocnBEV0tESWtHR09rQmx5MnlHRHVpQm1kelFFQjRBYk8vZXZYVjMzbmxuYXRMZXRtMWI3cjMzWHRxMWF5ZjRscDFqeG9DU3NNOWdNTWd0dDl4Q256NTkyTGR2SDdObXplTFROWjlxUTBwUDZxbGJXZjBsWi9ZbklxUEVSWUEzUDk3QUJ5czM0UWlCeG1UTTZMTVpObVFJQmdMaHFOU0tUV29tTHlWeHgyWFZKK3ZvMDdVYkllVVNWRFloWWRPMmRUNmhnSmRxR3hJTVEyQmFGalB1dUlOKy9mdUNWbGdHWk1rNG5Wc0d1T1RNZ1pRWFpWY2Eyb1BOYWdTTnpWRWVmUERCdk5kZWV5MjFXWEgzM1hjellNQUE4VTN5T1g4ckRlaHdONXlFY0xadTNWcmNkZGRkdEd6WmtsV3JWakhySnoraGZ1L2VPbE83WkVvM2YreUlQZ3pxM2hZcFhQWkdIWjU2NVQxMk5NUzFMU1M1dVlWaTBxVHJLTXpMUStJVE9naFNqVVJ2aThPaXJyNkIyaTIxREQ5MUtCM2JsMU5aMFliUzBrSlBOZGxmRlJWb2xJS2N2SHp1dnZ1bmpCNHppbEdqeitUMGs3dHorVm1ET1B1MFhoT0RXdFhnNDY3dGhNMGJiOHpURHo3NElGcHJzckt5bUQ1OU91ZWNjNDZ3TE90enc5YVhsZVBIWXVmNXFJNHkvaTk5b2tHREJvbWJicnFKY0RqTXl5Kyt3TU1QUFpqbk9EYW0wTFNJSUs0ZGV4b2RXMmNnY1ZpeFlUZXZ2ck9HQkZ5akRZTkJnNGRVbm5QdXVaaVdpVThJNUpmMTJwdTNDUk50QkZtL2FSc2J0dFRTczA5ZjJwU1hzL0tUR3Jac3FTV1I4SkNOU2JPcnJkM0I3eC82UFlzV3ZNZjhWMTVnNjdxVkRPamVoaURxWVJPTkZCTGxhajc1WkkyKzg4Ny9aTisrZlVncG1USmxDbGRlZWFXd0xJdmp1ZHQ4WElTd3cwOGdFT0RLSzYrOForellzV2psOHVEOUQvRFNxM08xVmk3U2pkR3RKRmRjZStGd2lqSU45cnNtejg5N2owMDdEOHkyTllReU1tc21UYm1lMWlVbC90TXJVdU1OejU0TUZBWnhHV0RGdWsyODl2YTdOTnFLZHhjdTRhS0xyMkRTcEp0NC9iVTNxSzNkeHRhdFc3aDZ3alU4LzhKTDdOMnpoNXpNRENaZGN3VXRDM09GNWQrZWNxRysva0RkOU50dVk4M3ExUVNEUWNhUEg4L05OOThzd3VGd0N2UHpiVHpIN0tmU1dwT2RuVDF0K3ZUcERPalhsL3E2T243MG81a3MrM2k1TmdVRWRJd1JmY3RIWEhyMk1JeWd5ZFpkZFR6NzB0dEVYWDJOcXhWVm5UdUtTWk1uRWJBQ2ZnaEwrVG1mYU56QWxpYTJZVkc3dTU0RlM1WVJkU1VEQnA5S1kxT0N1KysrbDhtVEp6UDc0Zi9pZ3c4K29MeGRPU1BQL0E2Ly9PVTk5T3hlSlF5ZmhrNElpZEx3MDd0L2x2ZjN2OC9ITkFUanhvM2pSei82MFRNWkdSa1lobkdvZ1BBSkEvcDZSaGxmZGFlcXZMeGMvT0kzdjZWTnV3cldybDdOakZ0dlk5UG1IVnJLSUZsU3o3Lzg5RTVjUEtRRVV3UjVhZUZXNWkvZk1qc3FFMmdqZXZwVjQ2OGNjY3FwZzVDR0lHQWFYazZrQlVJZlpKYVhXZ0pCR2hJaEZxK3U1ZkduWHVERHhZdkl5Z2hUVkZDRUcyMW01QmtqS0Nscnk1aHp6K1BjTVNORkVCZFRLd3dKcm1QejJHT1A2b2NmL24xcW0zVFdyRm4xT1RrNUZ5WERlZnJvNGN2eXdNUHY1MWdwMVk5TEQ1VHU4bnYxNmkxKytjdGZrWitmenp0dnY4TlBmbklYOWZ2Mi8wd0tRVzdRRWxlZmV3WkRlcmVudVhrdmMxNTRnOW82cFYyWk9UK1VFWngvKzR3WkZCWVc0ak8xK0dNeXpjRmhLNkNGeDExb21MaEtzM0hqQnQ1ODh5MmVlT0lKSG5yb2QvejFyMzhsUDcrQUN5NjRZQVJvajN0SWU5dXU4K2ZQMTdObXpjSnhIQzY4OEVMdXV1c3Vjbk56ODQvMTVQZmZJb1NsSy9BTkh6NWMzSEhISFdSa1pQRDAwMC96NjEvLyt0Wm9ORXBBU05wbVI4VGt5NFpUM2JVRmE5WnQ0YSt2THFQUk5wZGdtUFRwMDA5TXZQWmFUT3ZneEZ1Z3ZlbjhvZTk0c0dPTmwwUUxJWEFjaHdFREJuRFBQZmVRbVprNVB5a3RJSVJneFlvVmV2cjA2ZXpaczRmdmZlOTczSHZ2dmZXRmhZVWkyV1grTm93cXZ2Rk85TmRoUk1uKzBPV1hYeTV1dlBGR1ROUGsvdnZ2NTRrbm50Q3U3UkJRaWc1RkVUSDVpck5vVzFMQzYzLy9tQ1VydHZXSmExVmhCb05NbUhnZGcwODVKYlhtSTdSQ0hrWXVyYlZmcXJtT3A3WG9rMGxWVkZUdzBFTVBVVkpTY3NpaTM3WnQyL1FQZnZBRDFxNWR5K1dYWDg3UGYvN3pld29LQ3ZMVHU4emZsbm5YY2VtQjBuT0JKS2wyT0J6bSs5Ly92cGc0Y1NMeGVKdzc3N3lURjE1NFhpdlhKdWpHNkZhU3QvUUgxMTFFVm5hQUovN3lQTHYyUk5jN1FsQllYQ1IrOHBPN0tDa3RSV3ZsQ1prb041Mk13OTk5OTJDT1FraWtFTFJzMlpMWnMyZlR1WE5ua1Z4UlRnNUpwMDZkeXJKbHk3amhoaHU0Kys2Nzc4bkx5NXVXREwySGt5SDhLMzJ4WXdteWNWd2EwT0VYbTlSRHo4ek1aUHIwNlNNbVRKaEFmWDA5UDV4MkN5Ly83WFd0WFpkY29mcFdWK1RlYzlQa2M3RGRacDc1Nnp3YzIwVnJRWFYxdFpoeDUzOFNDQVhSeWtYaVZWSHA3K0VCMzcwUWxwdWJ5MzMzM2NmZ3dZTkZ1amRwYW1xcXVPMjIyL1JiYjczRkhYZmN3WXdaTTBUU2VQNGRQTTV4YVVESkxuVnl5cDJkblQxLzVzeVpJeVpNbU1DT1hUdjU0WXpwTEZqd2dUYTFKa0o4V3RmMmhVeTU3akpxYSt0WThQNVNUWkp2NTVJTHhiaHhsMkJJRUdrNzdDbjRxeEJvcGNuSWlQRFRuLzZVa1NOSGluUXZFSTFHdWUrKys5YS85dHByL09wWHYrTDY2NjhYU2VMTFk0Mjc4TitpRS8xVlFlUEpQek5OTXpYdXlNN09uajlqeGd5dXVmcHF0cTZ0NGNhYnBySms2VWM2Z0VHZUVLSlgyMkp4NDlYbjhlR3FkYXpidUZVck8wYkVjTGg1MHFYMDdkb1dTemRpQ1lFV05xN1pqRFFjTEcwUU5zUGNNV01hbDF4NllXVVNKYWlVd25WZC92Q0hQK2hYWG5tRjJiTm5jOUZGRjRua3o1TmtHdnRYWmwxSElrd2RUUUQrY2VPQjBpOGorYVRuNWVXSm1UK2VXVG4xcGg5UVUxUERkVk91WitXSzFkcFVFQmFhdHEzenhFWG5qMmJMbGkzRVlzMXpoQUdGT1FFeCtZclJkR3dWd1kzdlEwaUpxMDFzMTBVWURwTnZtc3o0YXlkVm1zRklUWktlTHg2UDg5UlRUK20zM25xTFJ4NTVoS0ZEaDRya0NzN2hQRUVuUE5CeGNwUlNCQUlCc3JLeWFtNi8vWGJ4MDUvK2xJMGJOM0xWVlZmeDBVY2ZlVVFycmtQcmdpd3grT1Mrd2d5RkwzSXhNRXlUem0zeko5NTYxU2phdFRTdzNCaGhaUkdSaWd2T0g4eVU3MStDRlFuWGFIR3c3SC85OWRmMW1qVnJlUFRSUnlkMjZOQWhCWmovdHM2M3Z2VUdkTGdha0dFWVRKdzRVZnoydDcrbHJxNk9TWk1tc1hUcFVtMUlRUkFiS1J5a0ZjQ1ZCbWlYVE9FOFBLUnJxYmh4M0dtVVIyenk0dnU1NVBUZWpEOXZNSmxXczlCdXdoK213dUxGaTdVUWdwa3paNHFjbkp5SGt4VmhlclgxNzN6TWIvTE4vOVdLSlQyY3BiTjlYWERCQmFKMTY5YjY5dHR2NTdycnJ1T2hoMzZuKy9idEtRd2tydkxZWGkwSmhuYXdjQm5kcjVNUVRhN2V0TzBBNHk0OG1lSlFWSmpFNmdnRTg1VUxCeG9hcnlrcksrUGtrMDhXeVh3b3ZVT2VQcW80MnZmelZlRENKenpRLzhLZ2tqbko0TUdEeFdPUFBVYjM3dDI1NXBwcldMUjRxUWFKS1NXVzFrZ0ZXa3ZBSXF3Vlp3L3RKcTY3ZExBb0Rna1JVQUtwUXQ1Q29DSEl5c3A2dUZXclZ0OUtJTmdKQS9xY0JselNHMVZVVklqNzdydXY4dW9KMTNEdDVKdjQrOS8vb1oyRWpWQ09QNml3Y0VRQVF3WUpTRVhRakNHMURXNEdXbVZqRThCT1V4aHlYZmVFcFJ6TkVKWk1MUCszVCs1WHpTY081d0JNR2s1eXcwTnJUVzV1YnMyVXlWTkUzLzRuNmQvODZwYzA3Sy9YWjQwWkxTeHBvYlZDQzA4VVZ3ckRFNWt6TFpMMDg0WVFDTU5FK0luNjBlcnZmRjN2Y2ZqOUhGY1VkK2x6SU9WektYL1I2NHM4eWYvbWRiZ2hKZDliKytQMzNqMjdpOTg5K01BOWRmWDdlUEhsVjNVMEZrTXAxNWUxVlFna2tnQmFDMjhYVEdnTXJaSCsvNWVlNXh6dnIrT21rWmhzdkgwVlVaQWozZkNTVXBLZG5UM3R5aXV2RkQxNjlHRFZxbFU2Rm92OTI0d2NrZy95a2JyZnBTaWt6UUFBQUZaSlJFRlVyejJFdmZ2dXU0ZTQwUy83b3RMLzdraUdpRFJxR1dIYk5uUG56aVVTaVh4cllhYUhHNURXT3ZXOW5EZ256b2x6NHB3NEo4NkpjK0tjT0NmT2lYUGluRGduem9sejRwdzRKODZKYytJYzlmUC9BVVRwNStKTzI1ak1BQUFBQUVsRlRrU3VRbUNDXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0IH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJy4uL21vZGVscy9tYXRjaCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXRjaFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfc2l0ZVVybCA9ICdhcGkvbWF0Y2hzJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBnZXRNYXRjaHMoKTogT2JzZXJ2YWJsZTxNYXRjaFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3NpdGVVcmwpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3REYXRhKHJlc3BvbnNlOiBSZXNwb25zZSk6IE1hdGNoW10ge1xyXG4gICAgICAgIHZhciBkYXRhID0gPE1hdGNoW10+cmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBkLmRhdGUgPSBuZXcgRGF0ZShkLmRhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ0Vycm9yKGVycm9yOiBSZXNwb25zZSwgY2F1Z2h0OiBPYnNlcnZhYmxlPE1hdGNoW10+KTogT2JzZXJ2YWJsZUlucHV0PE1hdGNoW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL21hdGNocy5zZXJ2aWNlLnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHRocm93XzEgPSByZXF1aXJlKCcuLi8uLi9vYnNlcnZhYmxlL3Rocm93Jyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyA9IHRocm93XzEuX3Rocm93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3cuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTI2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEyNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2RvLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDMzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoODApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwvbm9kZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0IH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5pbXBvcnQgeyBBY3R1IH0gZnJvbSAnLi4vbW9kZWxzL0FjdHUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWN0dVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfc2l0ZVVybCA9ICdhcGkvYWN0dXMnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGdldEFjdHVzKCk6IE9ic2VydmFibGU8QWN0dVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3NpdGVVcmwpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3REYXRhKHJlc3BvbnNlOiBSZXNwb25zZSk6IEFjdHVbXSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSA8QWN0dVtdPnJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgZC5kYXRlID0gbmV3IERhdGUoZC5kYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dFcnJvcihlcnJvcjogUmVzcG9uc2UsIGNhdWdodDogT2JzZXJ2YWJsZTxBY3R1W10+KTogT2JzZXJ2YWJsZUlucHV0PEFjdHVbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvYWN0dXMuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0IH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcbmltcG9ydCB7IENsYXNzZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvY2xhc3NlbWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSYW5rU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsID0gJ2FwaS9jbGFzc2VtZW50cydcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldENsYXNzZW1lbnRzKCk6IE9ic2VydmFibGU8Q2xhc3NlbWVudFtdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fc2l0ZVVybClcclxuICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ0Vycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlc3BvbnNlOiBSZXNwb25zZSk6IENsYXNzZW1lbnRbXSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSA8Q2xhc3NlbWVudFtdPnJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ0Vycm9yKGVycm9yOiBSZXNwb25zZSwgY2F1Z2h0OiBPYnNlcnZhYmxlPENsYXNzZW1lbnRbXT4pOiBPYnNlcnZhYmxlSW5wdXQ8Q2xhc3NlbWVudFtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvcmFua3Muc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBEYXRlVXRpbHMge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNTYW1lV2VlayhkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpIHtcclxuICAgICAgICB2YXIgbW9uZGF5MSA9IHRoaXMuZ2V0UHJldmlvdXNNb25kYXkoZGF0ZTEpO1xyXG4gICAgICAgIHZhciBtb25kYXkyID0gdGhpcy5nZXRQcmV2aW91c01vbmRheShkYXRlMik7XHJcbiAgICAgICAgcmV0dXJuIChtb25kYXkxLmdldERhdGUoKSA9PSBtb25kYXkyLmdldERhdGUoKSAmJiBtb25kYXkxLmdldEZ1bGxZZWFyKCkgPT0gbW9uZGF5Mi5nZXRGdWxsWWVhcigpICYmIG1vbmRheTEuZ2V0TW9udGgoKSA9PSBtb25kYXkyLmdldE1vbnRoKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJldmlvdXNNb25kYXkoZDogRGF0ZSk6IERhdGUge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGQuZ2V0RGF5KCksXHJcbiAgICAgICAgICAgIGRpZmYgPSBkLmdldERhdGUoKSAtIGRheSArIChkYXkgPT0gMCA/IC02IDogMSk7IC8vIGFkanVzdCB3aGVuIGRheSBpcyBzdW5kYXlcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGRpZmYpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFByZXZpb3VzV2VlayhkOiBEYXRlKTogRGF0ZSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkKTtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gNykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmV4dFdlZWsoZDogRGF0ZSk6IERhdGUge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDcpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdERhdGUoZDogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChkLmdldERhdGUoKSA8IDEwKVxyXG4gICAgICAgICAgICBkYXRlICs9IFwiMFwiO1xyXG4gICAgICAgIGRhdGUgKz0gZC5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgIGRhdGUgKz0gXCItXCJcclxuXHJcbiAgICAgICAgaWYgKGQuZ2V0TW9udGgoKSA8IDkpXHJcbiAgICAgICAgICAgIGRhdGUgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgIGRhdGUgKz0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICAgICAgZGF0ZSArPSBcIi1cIlxyXG5cclxuICAgICAgICBkYXRlICs9IGQuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdXRpbHMvZGF0ZS51dGlscy50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG52YXIgc2VtdmVyID0gcmVxdWlyZSgnc2VtdmVyJyk7XG52YXIgX19jb3JlX18gPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgY29yZVZlcnNpb24gPSBfX2NvcmVfXyAmJiBfX2NvcmVfXy5WRVJTSU9OICYmIF9fY29yZV9fLlZFUlNJT04uZnVsbDtcblxuLy8gT25seSBwYXRjaCBpZiB5b3UncmUgb24gQW5ndWxhciA+PSAyLjEuMSBhbmQgPCB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIChpbmNsdWRpbmcgcHJlcmVsZWFzZSlcbmlmIChjb3JlVmVyc2lvbiAmJiBzZW12ZXIuc2F0aXNmaWVzKGNvcmVWZXJzaW9uLCAnXjIuMS4xJykpIHtcbiAgICB2YXIgX19jb21waWxlcl9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbiAgICB2YXIgX19jb3JlX3ByaXZhdGVfXyA9IF9fY29yZV9fLl9fY29yZV9wcml2YXRlX187XG5cbiAgICB2YXIgcGF0Y2ggPSBmYWxzZTtcbiAgICBpZiAoIV9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddKSB7XG4gICAgICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAgICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgfVxuXG4gICAgaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcbiAgICAgICAgcGF0Y2ggPSB0cnVlO1xuICAgICAgICBfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX191bml2ZXJzYWxfXyA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuICAgIGlmIChwYXRjaCkge1xuICAgICAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICAgICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgICAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFnZW5kYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhbmtMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlYW1QaXBlIH0gZnJvbSAnLi9maWx0ZXJzL3RlYW0nO1xyXG5pbXBvcnQgeyBBZ2VuZGFQaXBlIH0gZnJvbSAnLi9maWx0ZXJzL2FnZW5kYSc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgQ2FyZENvbXBvbmVudCxcclxuICAgICAgICBDYWxlbmRhckNvbXBvbmVudCxcclxuICAgICAgICBBZ2VuZGFDb21wb25lbnQsXHJcbiAgICAgICAgUmFua0NvbXBvbmVudCxcclxuICAgICAgICBSYW5rTGluZUNvbXBvbmVudCxcclxuICAgICAgICBUZWFtUGlwZSxcclxuICAgICAgICBBZ2VuZGFQaXBlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE1hdGVyaWFsTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2NhbGVuZGFyLzp0ZWFtJywgY29tcG9uZW50OiBDYWxlbmRhckNvbXBvbmVudCwgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAncmFuay86dGVhbScsIGNvbXBvbmVudDogUmFua0NvbXBvbmVudCwgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWdlbmRhLzpkYXRlJywgY29tcG9uZW50OiBBZ2VuZGFDb21wb25lbnQsIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cclxuICAgICAgICBdKSxcclxuICAgICAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cclxuXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg4MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBwbGF0Zm9ybV9icm93c2VyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJyk7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGNvbXBpbGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xudmFyIEJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUyA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUywgU2hhcmVkU3R5bGVzSG9zdCA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLlNoYXJlZFN0eWxlc0hvc3QsIERvbVNoYXJlZFN0eWxlc0hvc3QgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21TaGFyZWRTdHlsZXNIb3N0LCBEb21Sb290UmVuZGVyZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21Sb290UmVuZGVyZXIsIERvbUV2ZW50c1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbUV2ZW50c1BsdWdpbiwgS2V5RXZlbnRzUGx1Z2luID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uS2V5RXZlbnRzUGx1Z2luLCBEb21BZGFwdGVyID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uRG9tQWRhcHRlciwgc2V0Um9vdERvbUFkYXB0ZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5zZXRSb290RG9tQWRhcHRlciwgZ2V0RE9NID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uZ2V0RE9NLCBIYW1tZXJHZXN0dXJlc1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkhhbW1lckdlc3R1cmVzUGx1Z2luO1xuZXhwb3J0cy5CUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlMgPSBCUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlM7XG5leHBvcnRzLlNoYXJlZFN0eWxlc0hvc3QgPSBTaGFyZWRTdHlsZXNIb3N0O1xuZXhwb3J0cy5Eb21TaGFyZWRTdHlsZXNIb3N0ID0gRG9tU2hhcmVkU3R5bGVzSG9zdDtcbmV4cG9ydHMuRG9tUm9vdFJlbmRlcmVyID0gRG9tUm9vdFJlbmRlcmVyO1xuZXhwb3J0cy5Eb21FdmVudHNQbHVnaW4gPSBEb21FdmVudHNQbHVnaW47XG5leHBvcnRzLktleUV2ZW50c1BsdWdpbiA9IEtleUV2ZW50c1BsdWdpbjtcbmV4cG9ydHMuRG9tQWRhcHRlciA9IERvbUFkYXB0ZXI7XG5leHBvcnRzLnNldFJvb3REb21BZGFwdGVyID0gc2V0Um9vdERvbUFkYXB0ZXI7XG5leHBvcnRzLkhhbW1lckdlc3R1cmVzUGx1Z2luID0gSGFtbWVyR2VzdHVyZXNQbHVnaW47XG52YXIgVmlld1V0aWxzID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzLCBBbmltYXRpb25LZXlmcmFtZSA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvbktleWZyYW1lLCBBbmltYXRpb25QbGF5ZXIgPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5BbmltYXRpb25QbGF5ZXIsIEFuaW1hdGlvblN0eWxlcyA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvblN0eWxlcywgUmVuZGVyRGVidWdJbmZvID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uUmVuZGVyRGVidWdJbmZvO1xuZXhwb3J0cy5WaWV3VXRpbHMgPSBWaWV3VXRpbHM7XG5leHBvcnRzLkFuaW1hdGlvbktleWZyYW1lID0gQW5pbWF0aW9uS2V5ZnJhbWU7XG5leHBvcnRzLkFuaW1hdGlvblBsYXllciA9IEFuaW1hdGlvblBsYXllcjtcbmV4cG9ydHMuQW5pbWF0aW9uU3R5bGVzID0gQW5pbWF0aW9uU3R5bGVzO1xuZXhwb3J0cy5SZW5kZXJEZWJ1Z0luZm8gPSBSZW5kZXJEZWJ1Z0luZm87XG52YXIgU2VsZWN0b3JNYXRjaGVyID0gY29tcGlsZXJfMS5fX2NvbXBpbGVyX3ByaXZhdGVfXy5TZWxlY3Rvck1hdGNoZXIsIENzc1NlbGVjdG9yID0gY29tcGlsZXJfMS5fX2NvbXBpbGVyX3ByaXZhdGVfXy5Dc3NTZWxlY3RvcjtcbmV4cG9ydHMuU2VsZWN0b3JNYXRjaGVyID0gU2VsZWN0b3JNYXRjaGVyO1xuZXhwb3J0cy5Dc3NTZWxlY3RvciA9IENzc1NlbGVjdG9yO1xudmFyIF9fZW1wdHkgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX19lbXB0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICcuLi8uLi9tb2RlbHMvbWF0Y2gnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpbmsnO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXRjaHMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlLnV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZ2VuZGEnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWdlbmRhLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FnZW5kYS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ2VuZGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBtYXRjaHM6IE1hdGNoW107XHJcbiAgICBwcml2YXRlIGRhdGU6IERhdGU7XHJcbiAgICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBuYXZMaW5rczogTGlua1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWF0Y2hTZXJ2aWNlOiBNYXRjaFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLnVwZGF0ZVZpZXcocGFyYW1zKSk7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb25kYXkgPSBEYXRlVXRpbHMuZ2V0UHJldmlvdXNNb25kYXkoZGF0ZSk7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzV2VlayA9IERhdGVVdGlscy5nZXRQcmV2aW91c1dlZWsobW9uZGF5KTtcclxuICAgICAgICB2YXIgbmV4dFdlZWsgPSBEYXRlVXRpbHMuZ2V0TmV4dFdlZWsobW9uZGF5KTtcclxuICAgICAgICB0aGlzLm5hdkxpbmtzLnB1c2goeyBsaW5rOiAnL2FnZW5kYS8nICsgRGF0ZVV0aWxzLmZvcm1hdERhdGUocHJldmlvdXNXZWVrKSwgbGFiZWw6ICdTZW1haW5lIGRlcm5pw6hyZScgfSk7XHJcbiAgICAgICAgdGhpcy5uYXZMaW5rcy5wdXNoKHsgbGluazogJy9hZ2VuZGEvJyArIERhdGVVdGlscy5mb3JtYXREYXRlKG1vbmRheSksIGxhYmVsOiAnQ2V0dGUgc2VtYWluZScgfSk7XHJcbiAgICAgICAgdGhpcy5uYXZMaW5rcy5wdXNoKHsgbGluazogJy9hZ2VuZGEvJyArIERhdGVVdGlscy5mb3JtYXREYXRlKG5leHRXZWVrKSwgbGFiZWw6ICdTZW1haW5lIFByb2NoYWluZScgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm1hdGNocyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3BsaXREYXRlID0gdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1zWydkYXRlJ10uc3BsaXQoJy0nKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShzcGxpdERhdGVbMl0sIHNwbGl0RGF0ZVsxXSAtIDEsIHNwbGl0RGF0ZVswXSk7XHJcbiAgICAgICAgdGhpcy5fbWF0Y2hTZXJ2aWNlLmdldE1hdGNocygpLnN1YnNjcmliZShhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaHMgPSBhO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSE9GQyh0ZWFtOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gISh0ZWFtICE9IG51bGwgJiYgdGVhbS5pbmRleE9mKFwiSE9SR1VFUyBPRE9TXCIpICE9IC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBPcGVuTWF0Y2hEZXRhaWxzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb3Vjb3UnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0dVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0Y2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWF0Y2hzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYW5rU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JhbmtzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL21vZGVscy9saW5rJztcclxuXHJcbmltcG9ydCB7IERhdGVVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUudXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtBY3R1U2VydmljZSwgTWF0Y2hTZXJ2aWNlLCBSYW5rU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgd2Vla3M6IExpbmtbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgbW9uZGF5ID0gRGF0ZVV0aWxzLmdldFByZXZpb3VzTW9uZGF5KGRhdGUpO1xyXG4gICAgICAgIHZhciBwcmV2aW91c1dlZWsgPSBEYXRlVXRpbHMuZ2V0UHJldmlvdXNXZWVrKG1vbmRheSk7XHJcbiAgICAgICAgdmFyIG5leHRXZWVrID0gRGF0ZVV0aWxzLmdldE5leHRXZWVrKG1vbmRheSk7XHJcbiAgICAgICAgdGhpcy53ZWVrcy5wdXNoKHsgbGluazogJ2FnZW5kYS8nICsgRGF0ZVV0aWxzLmZvcm1hdERhdGUocHJldmlvdXNXZWVrKSwgbGFiZWw6ICdTZW1haW5lIGRlcm5p77+9cmUnIH0pO1xyXG4gICAgICAgIHRoaXMud2Vla3MucHVzaCh7IGxpbms6ICdhZ2VuZGEvJyArIERhdGVVdGlscy5mb3JtYXREYXRlKG1vbmRheSksIGxhYmVsOiAnQ2V0dGUgc2VtYWluZScgfSk7XHJcbiAgICAgICAgdGhpcy53ZWVrcy5wdXNoKHsgbGluazogJ2FnZW5kYS8nICsgRGF0ZVV0aWxzLmZvcm1hdERhdGUobmV4dFdlZWspLCBsYWJlbDogJ1NlbWFpbmUgUHJvY2hhaW5lJyB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICcuLi8uLi9tb2RlbHMvbWF0Y2gnO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXRjaHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FsZW5kYXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vY2FsZW5kYXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBtYXRjaHM6IE1hdGNoW107XHJcbiAgICBwcml2YXRlIHRlYW06IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIG5hdkxpbmtzID0gW3tcclxuICAgICAgICAgICAgbGluazogJy9jYWxlbmRhci9lcXVpcGUxJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdFcXVpcGUxJ1xyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBsaW5rOiAnL2NhbGVuZGFyL2VxdWlwZTInLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0VxdWlwZTInXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxpbms6ICcvY2FsZW5kYXIvZXF1aXBlMycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXF1aXBlMydcclxuICAgIH1dO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hdGNoU2VydmljZTogTWF0Y2hTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gdGhpcy51cGRhdGVWaWV3KHBhcmFtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5tYXRjaHMgPSBbXTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50ZWFtID0gdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1zWyd0ZWFtJ107XHJcbiAgICAgICAgdGhpcy5fbWF0Y2hTZXJ2aWNlLmdldE1hdGNocygpLnN1YnNjcmliZShhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaHMgPSBhO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSE9GQyh0ZWFtOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gISh0ZWFtICE9IG51bGwgJiYgdGVhbS5pbmRleE9mKFwiSE9SR1VFUyBPRE9TXCIpICE9IC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBPcGVuTWF0Y2hEZXRhaWxzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb3Vjb3UnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhcmQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FyZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9jYXJkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRleHRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICAgIGdldEJhY2tncm91bmRJbWFnZShpbWFnZVVybDogc3RyaW5nKSA6IFNhZmVTdHlsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKCcgKyBpbWFnZVVybCArICcpJyk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdHVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWN0dXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdHUgfSBmcm9tICcuLi8uLi9tb2RlbHMvQWN0dSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3R1czogQWN0dVtdO1xyXG4gICAgcmVndWxhckRpc3RyaWJ1dGlvbiA9IDkwIC8gMztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3R1U2VydmljZTogQWN0dVNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0dVNlcnZpY2UuZ2V0QWN0dXMoKS5zdWJzY3JpYmUoYSA9PiB0aGlzLmFjdHVzID0gYSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmFua1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yYW5rcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2xhc3NlbWVudCB9IGZyb20gJy4uLy4uL21vZGVscy9jbGFzc2VtZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmFuay5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yYW5rLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBzZWxlY3RvcjogJ3JhbmsnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgX3JhbmtzOiBDbGFzc2VtZW50W107XHJcbiAgICBwcml2YXRlIHRlYW06IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIG5hdkxpbmtzID0gW3tcclxuICAgICAgICBsaW5rOiAnL3JhbmsvZXF1aXBlMScsXHJcbiAgICAgICAgbGFiZWw6ICdFcXVpcGUxJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGxpbms6ICcvcmFuay9lcXVpcGUyJyxcclxuICAgICAgICBsYWJlbDogJ0VxdWlwZTInXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbGluazogJy9yYW5rL2VxdWlwZTMnLFxyXG4gICAgICAgIGxhYmVsOiAnRXF1aXBlMydcclxuICAgIH1dO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JhbmtTZXJ2aWNlOiBSYW5rU2VydmljZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLnVwZGF0ZVZpZXcocGFyYW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl9yYW5rcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRlYW0gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ3RlYW0nXTtcclxuICAgICAgICB0aGlzLl9yYW5rU2VydmljZS5nZXRDbGFzc2VtZW50cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYW5rcyA9IGM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmFuay1saW5lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JhbmsubGluZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yYW5rLmxpbmUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFua0xpbmVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcmFuazogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbm9tOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwb2ludHM6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGpvdWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHZpY3RvaXJlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBudWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGRlZmFpdGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGJwOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBiYzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGlmZjogc3RyaW5nO1xyXG5cclxuICAgIGlzSE9GQygpIHtcclxuICAgICAgICByZXR1cm4gISh0aGlzLm5vbSAhPSBudWxsICYmIHRoaXMubm9tLmluZGV4T2YoXCJIT1JHVUVTIE9ET1NcIikgIT0gLTEpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJy4uL21vZGVscy9tYXRjaCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnYWdlbmRhJ1xyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZ2VuZGFQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0obWF0Y2g6IE1hdGNoW10sIGRhdGU6IERhdGUpIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2ggIT0gbnVsbCA/IG1hdGNoLmZpbHRlcihtID0+IHRoaXMuaXNTYW1lV2VlayhtLmRhdGUsIGRhdGUpICYmIChtLmVxdWlwZTEuaW5kZXhPZihcIkhPUkdVRVMgT0RPU1wiKSAhPSAtMSB8fCBtLmVxdWlwZTIuaW5kZXhPZihcIkhPUkdVRVMgT0RPU1wiKSAhPSAtMSkpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpc1NhbWVXZWVrKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSkge1xyXG4gICAgICAgIHZhciBtb25kYXkxID0gdGhpcy5nZXRQcmV2aW91c01vbmRheShkYXRlMSk7XHJcbiAgICAgICAgdmFyIG1vbmRheTIgPSB0aGlzLmdldFByZXZpb3VzTW9uZGF5KGRhdGUyKTtcclxuICAgICAgICByZXR1cm4gKG1vbmRheTEuZ2V0RGF0ZSgpID09IG1vbmRheTIuZ2V0RGF0ZSgpICYmIG1vbmRheTEuZ2V0RnVsbFllYXIoKSA9PSBtb25kYXkyLmdldEZ1bGxZZWFyKCkgJiYgbW9uZGF5MS5nZXRNb250aCgpID09IG1vbmRheTIuZ2V0TW9udGgoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJldmlvdXNNb25kYXkoZDogRGF0ZSkge1xyXG4gICAgICAgIHZhciBkYXkgPSBkLmdldERheSgpLFxyXG4gICAgICAgICAgICBkaWZmID0gZC5nZXREYXRlKCkgLSBkYXkgKyAoZGF5ID09IDAgPyAtNiA6IDEpOyAvLyBhZGp1c3Qgd2hlbiBkYXkgaXMgc3VuZGF5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGQuc2V0RGF0ZShkaWZmKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvZmlsdGVycy9hZ2VuZGEudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBldGl0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbi5jb21wZXRpdGlvbic7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAndGVhbScsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWFtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGNvbXA6IENvbW1vbkNvbXBldGl0aW9uW10sIGVxdWlwZSkge1xyXG4gICAgICAgIHJldHVybiBjb21wICE9IG51bGwgPyBjb21wLmZpbHRlcihjID0+IGMuY29tcGV0aXRpb24uY2F0ZWdvcmllID09IGVxdWlwZSB8fCBjLmNvbXBldGl0aW9uLmNhdGVnb3JpZSA9PSBlcXVpcGUpIDogbnVsbDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9maWx0ZXJzL3RlYW0udHMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0gLmRhdGVEaXYsIC5saXN0LWl0ZW0gLm5hbWVEaXYge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTowLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVEaXYge1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW1OYW1lIHtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxuICAgIGZvbnQtc2l6ZTowLjdlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlRGl2IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5tZC1wcm9ncmVzcy1jaXJjbGUge1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0RpdiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibWQtc2lkZW5hdiBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1kLXRvb2xiYXIgbWQtaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoxZW07XFxyXFxufVxcclxcblxcclxcbm1kLXNpZGVuYXYgbWQtbGlzdC1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSAuZGF0ZURpdiwgLmxpc3QtaXRlbSAubmFtZURpdiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXHJcXG4gICAgZm9udC1zaXplOjAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZURpdiB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbU5hbWUge1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgZm9udC1zaXplOjAuN2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVEaXYge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxufVxcclxcblxcclxcbm1kLXByb2dyZXNzLWNpcmNsZSB7XFxyXFxuICAgIG1hcmdpbjphdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nRGl2IGltZyB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hdC1jYXJkIHtcXHJcXG4gICAgbWFyZ2luOjE1cHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJtZC1jYXJkIHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxubWQtcHJvZ3Jlc3MtY2lyY2xlIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAzZW07XFxyXFxufVxcclxcblxcclxcbi5yb3cgLm5vbURpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IGltZyB7XFxyXFxuICAgIGhlaWdodDogM2VtO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBtZC10YWItbmF2LWJhcj5cXHJcXG4gICAgPGEgbWQtdGFiLWxpbmtcXHJcXG4gICAgICAgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIG5hdkxpbmtzXFxcIlxcclxcbiAgICAgICBbcm91dGVyTGlua109XFxcInRhYi5saW5rXFxcIlxcclxcbiAgICAgICByb3V0ZXJMaW5rQWN0aXZlICNybGE9XFxcInJvdXRlckxpbmtBY3RpdmVcXFwiXFxyXFxuICAgICAgIFthY3RpdmVdPVxcXCJybGEuaXNBY3RpdmVcXFwiPlxcclxcbiAgICAgICAge3t0YWIubGFiZWx9fVxcclxcbiAgICA8L2E+XFxyXFxuPC9uYXY+XFxyXFxuPG1kLXByb2dyZXNzLWNpcmNsZSBjb2xvcj1cXFwicHJpbWFyeVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6ICFpc0xvYWRpbmd9XFxcIiBtb2RlPVxcXCJpbmRldGVybWluYXRlXFxcIj48L21kLXByb2dyZXNzLWNpcmNsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJsaXN0LWl0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IG1hdGNoIG9mIChtYXRjaHMgfCBhZ2VuZGEgOiBkYXRlKVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVEaXZcXFwiPlxcclxcbiAgICAgICAge3ttYXRjaC5jb21wZXRpdGlvbi5ub219fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGF0ZURpdlxcXCI+XFxyXFxuICAgICAgICB7e21hdGNoLmRhdGUgfCBkYXRlOiAnZGQvTU0veSBISDptbSd9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeExheW91dD1cXFwicm93XFxcIiBmeExheW91dFdyYXA9XFxcIndyYXBcXFwiIGZ4TGF5b3V0QWxpZ249XFxcInNwYWNlLWFyb3VuZCBjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1nRGl2XFxcIiBmeEZsZXg9XFxcIjEwXFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICAgICAgPGltZyBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNIT0ZDKG1hdGNoLmVxdWlwZTEpfVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW1OYW1lXFxcIiBmeEZsZXg9XFxcIjM1XFxcIj5cXHJcXG4gICAgICAgICAgICB7e21hdGNoLmVxdWlwZTF9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZURpdlxcXCIgZnhGbGV4PlxcclxcbiAgICAgICAgICAgIHt7IChtYXRjaC5zY29yZTEgIT0gbnVsbCAmJiBtYXRjaC5zY29yZTIgIT0gbnVsbCkgPyBtYXRjaC5zY29yZTEgKyAnIC0gJyArIG1hdGNoLnNjb3JlMiA6ICcnIH19XFxyXFxuICAgICAgICAgICAge3sgbWF0Y2gubWVzc2FnZSAhPSBudWxsID8gbWF0Y2gubWVzc2FnZSA6ICcnfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVhbU5hbWVcXFwiIGZ4RmxleD1cXFwiMzVcXFwiPlxcclxcbiAgICAgICAgICAgIHt7bWF0Y2guZXF1aXBlMn19XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImltZ0RpdlxcXCIgZnhGbGV4PVxcXCIxMFxcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgICAgIDxpbWcgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzSE9GQyhtYXRjaC5lcXVpcGUyKX1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWQtdG9vbGJhciBjb2xvcj1cXFwicHJpbWFyeVxcXCI+XFxyXFxuICAgIDxtZC1pY29uIChjbGljayk9XFxcInNpZGVuYXYub3BlbigpXFxcIj5tZW51PC9tZC1pY29uPlxcclxcbiAgICA8c3Bhbj5XZWJIT0ZDPC9zcGFuPlxcclxcbjwvbWQtdG9vbGJhcj5cXHJcXG48bWQtc2lkZW5hdi1jb250YWluZXI+XFxyXFxuICAgIDxtZC1zaWRlbmF2ICNzaWRlbmF2PlxcclxcbiAgICAgICAgPG1kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QWN0dTwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICA8aDMgbWQtc3ViaGVhZGVyPkNhbGVuZHJpZXI8L2gzPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUxJ11cXFwiPkVxdWlwZSAxPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUyJ11cXFwiPkVxdWlwZSAyPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUzJ11cXFwiPkVxdWlwZSAzPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgPC9tZC1saXN0PlxcclxcbiAgICAgICAgPG1kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgPGgzIG1kLXN1YmhlYWRlcj5DbGFzc2VtZW50PC9oMz5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmFuay9lcXVpcGUxJ11cXFwiPkVxdWlwZSAxPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9yYW5rL2VxdWlwZTInXVxcXCI+RXF1aXBlIDI8L2E+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3JhbmsvZXF1aXBlMyddXFxcIj5FcXVpcGUgMzwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgIDwvbWQtbGlzdD5cXHJcXG4gICAgICAgIDxtZC1saXN0PlxcclxcbiAgICAgICAgICAgIDxoMyBtZC1zdWJoZWFkZXI+QWdlbmRhPC9oMz5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtICpuZ0Zvcj1cXFwibGV0IHdlZWsgb2Ygd2Vla3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiW3dlZWsubGlua11cXFwiPnt7d2Vlay5sYWJlbH19PC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgPC9tZC1saXN0PlxcclxcbiAgICA8L21kLXNpZGVuYXY+XFxyXFxuICAgIDxtYWluIGNsYXNzPVxcXCJtZGwtbGF5b3V0X19jb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0IGNsYXNzPVxcXCJtZGwtZ3JpZFxcXCI+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICA8L21haW4+XFxyXFxuPC9tZC1zaWRlbmF2LWNvbnRhaW5lcj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBtZC10YWItbmF2LWJhcj5cXHJcXG4gICAgPGEgbWQtdGFiLWxpbmtcXHJcXG4gICAgICAgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIG5hdkxpbmtzXFxcIlxcclxcbiAgICAgICBbcm91dGVyTGlua109XFxcInRhYi5saW5rXFxcIlxcclxcbiAgICAgICByb3V0ZXJMaW5rQWN0aXZlICNybGE9XFxcInJvdXRlckxpbmtBY3RpdmVcXFwiXFxyXFxuICAgICAgIFthY3RpdmVdPVxcXCJybGEuaXNBY3RpdmVcXFwiPlxcclxcbiAgICAgICAge3t0YWIubGFiZWx9fVxcclxcbiAgICA8L2E+XFxyXFxuPC9uYXY+XFxyXFxuPG1kLXByb2dyZXNzLWNpcmNsZSBjb2xvcj1cXFwicHJpbWFyeVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6ICFpc0xvYWRpbmd9XFxcIiBtb2RlPVxcXCJpbmRldGVybWluYXRlXFxcIj48L21kLXByb2dyZXNzLWNpcmNsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJsaXN0LWl0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IG1hdGNoIG9mIChtYXRjaHMgfCB0ZWFtIDogdGVhbSlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lRGl2XFxcIj5cXHJcXG4gICAgICAgIHt7bWF0Y2guY29tcGV0aXRpb24ubm9tfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGVEaXZcXFwiPlxcclxcbiAgICAgICAge3ttYXRjaC5kYXRlIHwgZGF0ZTogJ2RkL01NL3kgSEg6bW0nfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhMYXlvdXQ9XFxcInJvd1xcXCIgZnhMYXlvdXRXcmFwPVxcXCJ3cmFwXFxcIiBmeExheW91dEFsaWduPVxcXCJzcGFjZS1hcm91bmQgY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImltZ0RpdlxcXCIgZnhGbGV4PVxcXCIxMFxcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgICAgIDxpbWcgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzSE9GQyhtYXRjaC5lcXVpcGUxKX1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtTmFtZVxcXCIgZnhGbGV4PVxcXCIzNVxcXCI+XFxyXFxuICAgICAgICAgICAge3ttYXRjaC5lcXVpcGUxfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVEaXZcXFwiIGZ4RmxleD5cXHJcXG4gICAgICAgICAgICB7eyAobWF0Y2guc2NvcmUxICE9IG51bGwgJiYgbWF0Y2guc2NvcmUyICE9IG51bGwpID8gbWF0Y2guc2NvcmUxICsgJyAtICcgKyBtYXRjaC5zY29yZTIgOiAnJyB9fVxcclxcbiAgICAgICAgICAgIHt7IG1hdGNoLm1lc3NhZ2UgIT0gbnVsbCA/IG1hdGNoLm1lc3NhZ2UgOiAnJ319XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW1OYW1lXFxcIiBmeEZsZXg9XFxcIjM1XFxcIj5cXHJcXG4gICAgICAgICAgICB7e21hdGNoLmVxdWlwZTJ9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWdEaXZcXFwiIGZ4RmxleD1cXFwiMTBcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgICAgICA8aW1nIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0hPRkMobWF0Y2guZXF1aXBlMil9XFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIikgKyBcIlxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkX190aXRsZVxcXCJcXHJcXG4gICAgICAgICBbc3R5bGUuYmFja2dyb3VuZEltYWdlXT1cXFwiZ2V0QmFja2dyb3VuZEltYWdlKGltYWdlVXJsKVxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcIm1kbC1jYXJkX190aXRsZS10ZXh0XFxcIj57e3RpdGxlfX08L2gyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dFxcXCI+XFxyXFxuICAgICAgICB7e3RleHRlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcXFwiPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1idXR0b24gbWRsLWJ1dHRvbi0tY29sb3JlZCBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XFxcIj5cXHJcXG4gICAgICAgICAgICBEw6l0YWlsc1xcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGZ4TGF5b3V0PVxcXCJyb3dcXFwiIGZ4TGF5b3V0LnhzPVxcXCJjb2x1bW5cXFwiIGZ4TGF5b3V0V3JhcD1cXFwid3JhcFxcXCIgZnhMYXlvdXRBbGlnbj1cXFwic3BhY2UtYXJvdW5kIGNlbnRlclxcXCI+XFxyXFxuICAgIDxtZC1jYXJkIGZ4RmxleC5ndC14cz1cXFwiNDAlXFxcIiBbZnhGbGV4Lmd0LW1kXT1cXFwicmVndWxhckRpc3RyaWJ1dGlvblxcXCIgICpuZ0Zvcj1cXFwibGV0IGFjdHUgb2YgYWN0dXM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgPG1kLWNhcmQtdGl0bGU+e3thY3R1LnRpdHJlfX08L21kLWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICA8aW1nIG1kLWNhcmQtaW1hZ2UgW3NyY109XFxcImFjdHUuaW1hZ2VcXFwiLz5cXHJcXG4gICAgICAgIDxtZC1jYXJkLWNvbnRlbnQ+XFxyXFxuICAgICAgICAgICAgPHA+e3thY3R1LnRleHRlfX08L3A+XFxyXFxuICAgICAgICA8L21kLWNhcmQtY29udGVudD5cXHJcXG4gICAgPC9tZC1jYXJkPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgbWQtdGFiLW5hdi1iYXI+XFxyXFxuICAgIDxhIG1kLXRhYi1saW5rXFxyXFxuICAgICAgICpuZ0Zvcj1cXFwibGV0IHRhYiBvZiBuYXZMaW5rc1xcXCJcXHJcXG4gICAgICAgW3JvdXRlckxpbmtdPVxcXCJ0YWIubGlua1xcXCJcXHJcXG4gICAgICAgcm91dGVyTGlua0FjdGl2ZSAjcmxhPVxcXCJyb3V0ZXJMaW5rQWN0aXZlXFxcIlxcclxcbiAgICAgICBbYWN0aXZlXT1cXFwicmxhLmlzQWN0aXZlXFxcIj5cXHJcXG4gICAgICAgIHt7dGFiLmxhYmVsfX1cXHJcXG4gICAgPC9hPlxcclxcbjwvbmF2PlxcclxcbjxtZC1wcm9ncmVzcy1jaXJjbGUgY29sb3I9XFxcInByaW1hcnlcXFwiIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiAhaXNMb2FkaW5nfVxcXCIgbW9kZT1cXFwiaW5kZXRlcm1pbmF0ZVxcXCI+PC9tZC1wcm9ncmVzcy1jaXJjbGU+XFxyXFxuXFxyXFxuPHJhbmstbGluZSBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNMb2FkaW5nfVxcXCJcXHJcXG4gICAgICAgICAgIHJhbms9XFxcIiNcXFwiXFxyXFxuICAgICAgICAgICBub209XFxcIk5vbVxcXCJcXHJcXG4gICAgICAgICAgIHBvaW50cz1cXFwiUFxcXCJcXHJcXG4gICAgICAgICAgIGpvdWU9XFxcIkpcXFwiXFxyXFxuICAgICAgICAgICB2aWN0b2lyZT1cXFwiVlxcXCJcXHJcXG4gICAgICAgICAgIG51bD1cXFwiTlxcXCJcXHJcXG4gICAgICAgICAgIGRlZmFpdGU9XFxcIkRcXFwiXFxyXFxuICAgICAgICAgICBicD1cXFwiQlBcXFwiXFxyXFxuICAgICAgICAgICBiYz1cXFwiQkNcXFwiXFxyXFxuICAgICAgICAgICBkaWZmPVxcXCJEaWZmXFxcIj48L3JhbmstbGluZT5cXHJcXG5cXHJcXG48cmFuay1saW5lICpuZ0Zvcj1cXFwibGV0IHJhbmsgb2YgKF9yYW5rcyB8IHRlYW0gOiB0ZWFtKTsgbGV0IGkgPSBpbmRleFxcXCJcXHJcXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0xvYWRpbmd9XFxcIlxcclxcbiAgICAgICAgICAgW3JhbmtdPVxcXCJpICsgMVxcXCJcXHJcXG4gICAgICAgICAgIFtub21dPVxcXCJyYW5rLm5vbVxcXCJcXHJcXG4gICAgICAgICAgIFtwb2ludHNdPVxcXCJyYW5rLnBvaW50c1xcXCJcXHJcXG4gICAgICAgICAgIFtqb3VlXT1cXFwicmFuay5qb3VlXFxcIlxcclxcbiAgICAgICAgICAgW3ZpY3RvaXJlXT1cXFwicmFuay52aWN0b2lyZVxcXCJcXHJcXG4gICAgICAgICAgIFtudWxdPVxcXCJyYW5rLm51bFxcXCJcXHJcXG4gICAgICAgICAgIFtkZWZhaXRlXT1cXFwicmFuay5kZWZhaXRlXFxcIlxcclxcbiAgICAgICAgICAgW2JwXT1cXFwicmFuay5icFxcXCJcXHJcXG4gICAgICAgICAgIFtiY109XFxcInJhbmsuYmNcXFwiXFxyXFxuICAgICAgICAgICBbZGlmZl09XFxcInJhbmsuZGlmZlxcXCI+PC9yYW5rLWxpbmU+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIlxcclxcbiAgICAgZnhMYXlvdXQ9XFxcInJvd1xcXCJcXHJcXG4gICAgIGZ4TGF5b3V0V3JhcD1cXFwid3JhcFxcXCJcXHJcXG4gICAgIGZ4TGF5b3V0QWxpZ249XFxcInNwYWNlLWFyb3VuZCBjZW50ZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbWdEaXZcXFwiIGZ4RmxleD1cXFwiMTBcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIDxpbWcgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzSE9GQygpfVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICB7e3Jhbmt9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibm9tRGl2XFxcIiBmeEZsZXg+XFxyXFxuICAgICAgICB7e25vbX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICB7e3BvaW50c319XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICB7e2pvdWV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7dmljdG9pcmV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7bnVsfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e2RlZmFpdGV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7YnB9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7YmN9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAge3tkaWZmfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbnZhciBFcnJvck9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFcnJvck9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRXJyb3JPYnNlcnZhYmxlKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG5vIGl0ZW1zIHRvIHRoZSBPYnNlcnZlciBhbmQgaW1tZWRpYXRlbHlcbiAgICAgKiBlbWl0cyBhbiBlcnJvciBub3RpZmljYXRpb24uXG4gICAgICpcbiAgICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+SnVzdCBlbWl0cyAnZXJyb3InLCBhbmQgbm90aGluZyBlbHNlLlxuICAgICAqIDwvc3Bhbj5cbiAgICAgKlxuICAgICAqIDxpbWcgc3JjPVwiLi9pbWcvdGhyb3cucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICpcbiAgICAgKiBUaGlzIHN0YXRpYyBvcGVyYXRvciBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIGEgc2ltcGxlIE9ic2VydmFibGUgdGhhdCBvbmx5XG4gICAgICogZW1pdHMgdGhlIGVycm9yIG5vdGlmaWNhdGlvbi4gSXQgY2FuIGJlIHVzZWQgZm9yIGNvbXBvc2luZyB3aXRoIG90aGVyXG4gICAgICogT2JzZXJ2YWJsZXMsIHN1Y2ggYXMgaW4gYSB7QGxpbmsgbWVyZ2VNYXB9LlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdCB0aGUgbnVtYmVyIDcsIHRoZW4gZW1pdCBhbiBlcnJvci48L2NhcHRpb24+XG4gICAgICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUudGhyb3cobmV3IEVycm9yKCdvb3BzIScpKS5zdGFydFdpdGgoNyk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpLCBlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIGFuZCBmbGF0dGVuIG51bWJlcnMgdG8gdGhlIHNlcXVlbmNlICdhJywgJ2InLCAnYycsIGJ1dCB0aHJvdyBhbiBlcnJvciBmb3IgMTM8L2NhcHRpb24+XG4gICAgICogdmFyIGludGVydmFsID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAgICAgKiB2YXIgcmVzdWx0ID0gaW50ZXJ2YWwubWVyZ2VNYXAoeCA9PlxuICAgICAqICAgeCA9PT0gMTMgP1xuICAgICAqICAgICBSeC5PYnNlcnZhYmxlLnRocm93KCdUaGlydGVlbnMgYXJlIGJhZCcpIDpcbiAgICAgKiAgICAgUnguT2JzZXJ2YWJsZS5vZignYScsICdiJywgJ2MnKVxuICAgICAqICk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpLCBlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgY3JlYXRlfVxuICAgICAqIEBzZWUge0BsaW5rIGVtcHR5fVxuICAgICAqIEBzZWUge0BsaW5rIG5ldmVyfVxuICAgICAqIEBzZWUge0BsaW5rIG9mfVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGVycm9yIFRoZSBwYXJ0aWN1bGFyIEVycm9yIHRvIHBhc3MgdG8gdGhlIGVycm9yIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gQSB7QGxpbmsgSVNjaGVkdWxlcn0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gICAgICogdGhlIGVtaXNzaW9uIG9mIHRoZSBlcnJvciBub3RpZmljYXRpb24uXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gZXJyb3IgT2JzZXJ2YWJsZTogZW1pdHMgb25seSB0aGUgZXJyb3Igbm90aWZpY2F0aW9uXG4gICAgICogdXNpbmcgdGhlIGdpdmVuIGVycm9yIGFyZ3VtZW50LlxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIHRocm93XG4gICAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICAgKi9cbiAgICBFcnJvck9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9ic2VydmFibGUoZXJyb3IsIHNjaGVkdWxlcik7XG4gICAgfTtcbiAgICBFcnJvck9ic2VydmFibGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGFyZy5lcnJvciwgc3Vic2NyaWJlciA9IGFyZy5zdWJzY3JpYmVyO1xuICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbiAgICB9O1xuICAgIEVycm9yT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuZXJyb3I7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShFcnJvck9ic2VydmFibGUuZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBFcnJvck9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkVycm9yT2JzZXJ2YWJsZSA9IEVycm9yT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVycm9yT2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vYnNlcnZhYmxlL0Vycm9yT2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgRXJyb3JPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL0Vycm9yT2JzZXJ2YWJsZScpO1xuZXhwb3J0cy5fdGhyb3cgPSBFcnJvck9ic2VydmFibGVfMS5FcnJvck9ic2VydmFibGUuY3JlYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3cuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvb2JzZXJ2YWJsZS90aHJvdy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWQ7XG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW07XG4gICAgICB9XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSk7XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXTtcbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoO1xuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5sb29zZSwgb3RoZXIpO1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIC0xO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAwO1xuXG4gIHZhciBpID0gMDtcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldO1xuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXTtcbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYik7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgZWxzZSBpZiAoYSA9PT0gYilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYik7XG4gIH0gd2hpbGUgKCsraSk7XG59O1xuXG4vLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4vLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG5TZW1WZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWFqb3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgIGlmICh0aGlzLm1pbm9yICE9PSAwIHx8IHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnBhdGNoKys7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rKztcbiAgICAgICAgICAgIGkgPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMCk7XG4gICAgICB9XG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlWzBdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKTtcbiAgfVxuICB0aGlzLmZvcm1hdCgpO1xuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmluYyA9IGluYztcbmZ1bmN0aW9uIGluYyh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mKGxvb3NlKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gbG9vc2U7XG4gICAgbG9vc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvbjtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuZnVuY3Rpb24gZGlmZih2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSk7XG4gICAgdmFyIHYyID0gcGFyc2UodmVyc2lvbjIpO1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByZScra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdwcmVyZWxlYXNlJztcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuY29tcGFyZUlkZW50aWZpZXJzID0gY29tcGFyZUlkZW50aWZpZXJzO1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC87XG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKTtcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYik7XG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYTtcbiAgICBiID0gK2I7XG4gIH1cblxuICByZXR1cm4gKGFudW0gJiYgIWJudW0pID8gLTEgOlxuICAgICAgICAgKGJudW0gJiYgIWFudW0pID8gMSA6XG4gICAgICAgICBhIDwgYiA/IC0xIDpcbiAgICAgICAgIGEgPiBiID8gMSA6XG4gICAgICAgICAwO1xufVxuXG5leHBvcnRzLnJjb21wYXJlSWRlbnRpZmllcnMgPSByY29tcGFyZUlkZW50aWZpZXJzO1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSk7XG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvcjtcbmZ1bmN0aW9uIG1ham9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvcjtcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yO1xuZnVuY3Rpb24gbWlub3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yO1xufVxuXG5leHBvcnRzLnBhdGNoID0gcGF0Y2g7XG5mdW5jdGlvbiBwYXRjaChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2g7XG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKGIpO1xufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZTtcbmZ1bmN0aW9uIGNvbXBhcmVMb29zZShhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpO1xufVxuXG5leHBvcnRzLnJjb21wYXJlID0gcmNvbXBhcmU7XG5mdW5jdGlvbiByY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShiLCBhLCBsb29zZSk7XG59XG5cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5yc29ydCA9IHJzb3J0O1xuZnVuY3Rpb24gcnNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMucmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5ndCA9IGd0O1xuZnVuY3Rpb24gZ3QoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMDtcbn1cblxuZXhwb3J0cy5sdCA9IGx0O1xuZnVuY3Rpb24gbHQoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDwgMDtcbn1cblxuZXhwb3J0cy5lcSA9IGVxO1xuZnVuY3Rpb24gZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwO1xufVxuXG5leHBvcnRzLm5lcSA9IG5lcTtcbmZ1bmN0aW9uIG5lcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDA7XG59XG5cbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZnVuY3Rpb24gZ3RlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwO1xufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmZ1bmN0aW9uIGx0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMDtcbn1cblxuZXhwb3J0cy5jbXAgPSBjbXA7XG5mdW5jdGlvbiBjbXAoYSwgb3AsIGIsIGxvb3NlKSB7XG4gIHZhciByZXQ7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhID09PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSAhPT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyc6IGNhc2UgJz0nOiBjYXNlICc9PSc6IHJldCA9IGVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnIT0nOiByZXQgPSBuZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+JzogcmV0ID0gZ3QoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+PSc6IHJldCA9IGd0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzwnOiByZXQgPSBsdChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzw9JzogcmV0ID0gbHRlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnRzLkNvbXBhcmF0b3IgPSBDb21wYXJhdG9yO1xuZnVuY3Rpb24gQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICBpZiAoY29tcC5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gY29tcDtcbiAgICBlbHNlXG4gICAgICBjb21wID0gY29tcC52YWx1ZTtcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSlcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHRoaXMucGFyc2UoY29tcCk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICBlbHNlXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uO1xuXG4gIGRlYnVnKCdjb21wJywgdGhpcyk7XG59XG5cbnZhciBBTlkgPSB7fTtcbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oY29tcCkge1xuICB2YXIgciA9IHRoaXMubG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBtID0gY29tcC5tYXRjaChyKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjb21wYXJhdG9yOiAnICsgY29tcCk7XG5cbiAgdGhpcy5vcGVyYXRvciA9IG1bMV07XG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpXG4gICAgdGhpcy5vcGVyYXRvciA9ICcnO1xuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pXG4gICAgdGhpcy5zZW12ZXIgPSBBTlk7XG4gIGVsc2VcbiAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5sb29zZSk7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMubG9vc2UpO1xufTtcblxuXG5leHBvcnRzLlJhbmdlID0gUmFuZ2U7XG5mdW5jdGlvbiBSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgaWYgKChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSAmJiByYW5nZS5sb29zZSA9PT0gbG9vc2UpXG4gICAgcmV0dXJuIHJhbmdlO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpXG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHRoaXMubG9vc2UgPSBsb29zZTtcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnJhdyA9IHJhbmdlO1xuICB0aGlzLnNldCA9IHJhbmdlLnNwbGl0KC9cXHMqXFx8XFx8XFxzKi8pLm1hcChmdW5jdGlvbihyYW5nZSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmFuZ2UocmFuZ2UudHJpbSgpKTtcbiAgfSwgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcbiAgICAvLyB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCByZWxldmFudCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgcmV0dXJuIGMubGVuZ3RoO1xuICB9KTtcblxuICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgU2VtVmVyIFJhbmdlOiAnICsgcmFuZ2UpO1xuICB9XG5cbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuUmFuZ2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJhbmdlID0gdGhpcy5zZXQubWFwKGZ1bmN0aW9uKGNvbXBzKSB7XG4gICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKCk7XG4gIH0pLmpvaW4oJ3x8JykudHJpbSgpO1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS5wYXJzZVJhbmdlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIGxvb3NlID0gdGhpcy5sb29zZTtcbiAgcmFuZ2UgPSByYW5nZS50cmltKCk7XG4gIGRlYnVnKCdyYW5nZScsIHJhbmdlLCBsb29zZSk7XG4gIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICB2YXIgaHIgPSBsb29zZSA/IHJlW0hZUEhFTlJBTkdFTE9PU0VdIDogcmVbSFlQSEVOUkFOR0VdO1xuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UpO1xuICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSk7XG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpO1xuICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHJlW0NPTVBBUkFUT1JUUklNXSk7XG5cbiAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtUSUxERVRSSU1dLCB0aWxkZVRyaW1SZXBsYWNlKTtcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpO1xuXG4gIC8vIG5vcm1hbGl6ZSBzcGFjZXNcbiAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcblxuICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpLnNwbGl0KC9cXHMrLyk7XG4gIGlmICh0aGlzLmxvb3NlKSB7XG4gICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKTtcbiAgICB9KTtcbiAgfVxuICBzZXQgPSBzZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KTtcblxuICByZXR1cm4gc2V0O1xufTtcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9ycztcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMocmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5zZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICB9KTtcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygneHJhbmdlJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpO1xuICBkZWJ1Zygnc3RhcnMnLCBjb21wKTtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIGlzWChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonO1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSkge1xuICB2YXIgciA9IGxvb3NlID8gcmVbVElMREVMT09TRV0gOiByZVtUSUxERV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKVxuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gcmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLm1pblNhdGlzZnlpbmcgPSBtaW5TYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWluU2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLnZhbGlkUmFuZ2UgPSB2YWxpZFJhbmdlO1xuZnVuY3Rpb24gdmFsaWRSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnJhbmdlIHx8ICcqJztcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyO1xuZnVuY3Rpb24gbHRyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBsb29zZSk7XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyO1xuZnVuY3Rpb24gZ3RyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBsb29zZSk7XG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGU7XG5mdW5jdGlvbiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBsb29zZSkge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdmFyIGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcDtcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3Q7XG4gICAgICBsdGVmbiA9IGx0ZTtcbiAgICAgIGx0Zm4gPSBsdDtcbiAgICAgIGNvbXAgPSAnPic7XG4gICAgICBlY29tcCA9ICc+PSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdDtcbiAgICAgIGx0ZWZuID0gZ3RlO1xuICAgICAgbHRmbiA9IGd0O1xuICAgICAgY29tcCA9ICc8JztcbiAgICAgIGVjb21wID0gJzw9JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpO1xuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldO1xuXG4gICAgdmFyIGhpZ2ggPSBudWxsO1xuICAgIHZhciBsb3cgPSBudWxsO1xuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvcjtcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yO1xuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3I7XG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZTtcbmZ1bmN0aW9uIHByZXJlbGVhc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZW12ZXIvc2VtdmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYWdlbmRhLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jYWxlbmRhci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2FyZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2hvbWUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yYW5rLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcmFuay5saW5lLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDc0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZmxleC1sYXlvdXQvYnVuZGxlcy9mbGV4LWxheW91dC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2J1bmRsZXMvbWF0ZXJpYWwudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcGF0Y2gnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzxhcHA+PC9hcHA+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiXSwic291cmNlUm9vdCI6IiJ9
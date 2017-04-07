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
var http_1 = __webpack_require__(11);
var Observable_1 = __webpack_require__(4);
__webpack_require__(12);
__webpack_require__(10);
__webpack_require__(9);
__webpack_require__(8);
var date_utils_1 = __webpack_require__(7);
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
    MatchService.prototype.getHOFCMatchsForTeam = function (equipe) {
        return this._http.get(this._siteUrl + '/team/' + equipe)
            .map(this.extractData)
            .catch(this.logError);
    };
    MatchService.prototype.getHOFCMatchsForWeek = function (date) {
        return this._http.get(this._siteUrl + '/week/' + date_utils_1.DateUtils.formatDate(date))
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
        var date = "" + d.getFullYear();
        date += "-";
        if (d.getMonth() < 9)
            date += "0";
        date += d.getMonth() + 1;
        date += "-";
        if (d.getDate() < 10)
            date += "0";
        date += d.getDate();
        return date;
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var throw_1 = __webpack_require__(48);
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(126);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(127);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(16);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(33);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(80);

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
var http_1 = __webpack_require__(11);
var Observable_1 = __webpack_require__(4);
__webpack_require__(12);
__webpack_require__(10);
__webpack_require__(9);
__webpack_require__(8);
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
/* 15 */
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
var http_1 = __webpack_require__(11);
var Observable_1 = __webpack_require__(4);
__webpack_require__(12);
__webpack_require__(10);
__webpack_require__(9);
__webpack_require__(8);
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
    RankService.prototype.getClassementsForTeam = function (equipe) {
        return this._http.get(this._siteUrl + '/' + equipe)
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
var angular2_universal_1 = __webpack_require__(13);
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
var date_utils_1 = __webpack_require__(7);
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
        this.date = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
        this._matchService.getHOFCMatchsForWeek(this.date).subscribe(function (a) {
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
var actus_service_1 = __webpack_require__(14);
var matchs_service_1 = __webpack_require__(6);
var ranks_service_1 = __webpack_require__(15);
var date_utils_1 = __webpack_require__(7);
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
        this._matchService.getHOFCMatchsForTeam(this.team).subscribe(function (a) {
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
var actus_service_1 = __webpack_require__(14);
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
var ranks_service_1 = __webpack_require__(15);
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
        this._rankService.getClassementsForTeam(this.team)
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

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n<div class=\"list-item\" *ngFor=\"let match of matchs\">\r\n    <div class=\"nameDiv\">\r\n        {{match.competition.nom}}\r\n    </div>\r\n    <div class=\"dateDiv\">\r\n        {{match.date | date: 'dd/MM/y HH:mm'}}\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe1)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe1}}\r\n        </div>\r\n        <div class=\"scoreDiv\" fxFlex>\r\n            {{ (match.score1 != null && match.score2 != null) ? match.score1 + ' - ' + match.score2 : '' }}\r\n            {{ match.message != null ? match.message : ''}}\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe2}}\r\n        </div>\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe2)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:fixed;z-index:2;width:100%;\">\r\n    <md-toolbar color=\"primary\">\r\n        <md-icon (click)=\"sidenav.open()\">menu</md-icon>\r\n        <span>WebHOFC</span>\r\n    </md-toolbar>\r\n</div>\r\n<md-sidenav-container>\r\n    <div style=\"height:50px;\"></div>\r\n    <md-sidenav #sidenav>\r\n        <div style=\"height:50px;\"></div>\r\n        <md-list>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/home']\">Actu</a>\r\n            </md-list-item>\r\n            <h3 md-subheader>Calendrier</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n        <md-list>\r\n            <h3 md-subheader>Classement</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n        <md-list>\r\n            <h3 md-subheader>Agenda</h3>\r\n            <md-list-item *ngFor=\"let week of weeks\">\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"[week.link]\">{{week.label}}</a>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-sidenav>\r\n    <main class=\"mdl-layout__content\">\r\n        <router-outlet class=\"mdl-grid\"></router-outlet>\r\n    </main>\r\n</md-sidenav-container>\r\n";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n<div class=\"list-item\" *ngFor=\"let match of matchs\">\r\n    <div class=\"nameDiv\">\r\n        {{match.competition.nom}}\r\n    </div>\r\n    <div class=\"dateDiv\">\r\n        {{match.date | date: 'dd/MM/y HH:mm'}}\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe1)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe1}}\r\n        </div>\r\n        <div class=\"scoreDiv\" fxFlex>\r\n            {{ (match.score1 != null && match.score2 != null) ? match.score1 + ' - ' + match.score2 : '' }}\r\n            {{ match.message != null ? match.message : ''}}\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe2}}\r\n        </div>\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe2)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";

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

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n\r\n<rank-line [ngClass]=\"{'hidden': isLoading}\"\r\n           rank=\"#\"\r\n           nom=\"Nom\"\r\n           points=\"P\"\r\n           joue=\"J\"\r\n           victoire=\"V\"\r\n           nul=\"N\"\r\n           defaite=\"D\"\r\n           bp=\"BP\"\r\n           bc=\"BC\"\r\n           diff=\"Diff\"></rank-line>\r\n\r\n<rank-line *ngFor=\"let rank of _ranks; let i = index\"\r\n           [ngClass]=\"{'hidden': isLoading}\"\r\n           [rank]=\"i + 1\"\r\n           [nom]=\"rank.nom\"\r\n           [points]=\"rank.points\"\r\n           [joue]=\"rank.joue\"\r\n           [victoire]=\"rank.victoire\"\r\n           [nul]=\"rank.nul\"\r\n           [defaite]=\"rank.defaite\"\r\n           [bp]=\"rank.bp\"\r\n           [bc]=\"rank.bc\"\r\n           [diff]=\"rank.diff\"></rank-line>";

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
var angular2_universal_1 = __webpack_require__(13);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTA2NjdiYzA2Zjg4YjgyMmViNWYiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4vdmVuZG9yXCIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hc3NldHMvaW1hZ2VzL2ljb24ucG5nIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvbWF0Y2hzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC91dGlscy9kYXRlLnV0aWxzLnRzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2NhdGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2RvLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsL25vZGUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvYWN0dXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL3JhbmtzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItdW5pdmVyc2FsLXBhdGNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL34vYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvZmlsdGVycy9hZ2VuZGEudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9maWx0ZXJzL3RlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL3Rocm93LmpzIiwid2VicGFjazovLy8uL34vc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQuY3NzPzU0NzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzPzIzYTQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzP2QyN2YiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzPzc3MzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuY3NzPzU2YjMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudC5jc3M/YTU4YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2J1bmRsZXMvZmxleC1sYXlvdXQudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2J1bmRsZXMvbWF0ZXJpYWwudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxj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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O2dCQUNkLFFBQVEsRUFBRSxhQUFhO2FBQzFCO1lBQ0QsYUFBYSxFQUFFLFVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSztnQkFDdEQsNkVBQTZFO2dCQUM3RSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWtCLGNBQU0sZUFBUSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBSTtZQUN4RixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUwNjY3YmMwNmY4OGI4MjJlYjVmIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDk3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpBQUFBQ1FDQVlBQUFEblJ1SzRBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVIM2dzY0RDQTYwMjBLdlFBQUlBQkpSRUZVZU5yc3ZYbVVYV1dWOS8vWnozUE92YmZ1cmJtU1NtV296UE04UWlDQkVBYVJlVkp3d3BaV1VidkZkbWdsMm82bzNlYlZibTI3bTdadEI4Q1dWbVlFQWtnQ0JwQTVCSktRT1pXcFVxa2tWWldhNzNET2VmYjd4N2xWcVdMUzlmc1J1K1BMczFhdGxhcWJlKzQ5NSt5emgrLzN1L2NEYjYrMzE5dnI3ZlgyZW51OXZkNWViNiszMTl2cjdmWDJlbnU5dmQ1ZWI2KzMxOXZyN2ZVSGxyelZCN3pzc3N0WXNtUUpxb3JJbXg5ZVZZOTlFWkhqY29LcWloQi9qc3JnRTNaaVFVRndpTGo0LzhSL0FHZmlON3pPOTNNSWlnQWF2N2YvUXNhZkU0WU96L1A2UDk4WWc2cWlxa1FhWXF4Rk1mSDdGWVFJZzZHZ0ZrdUlSMFNJbzBBQ3ovcEk1TkF3b3F1bjkreGN3VDFTa2tsSk9sMkNaMEJjaUJHSzMrZjFyNnVxOHNRVFQvQ2IzL3ptTGIrKzNsdDl3S1ZMbDNMZGRkY0JZSzE5VThONDlXc0RUL3l0V2s3aUc5eG5GL0ZOMXZpV3F3V2svOUlycnpKb2VhUHZwc1gvR3hzUkExN1Q0cTloR09MN1BzNjUvdGVNTVFSUmdkNThjRzNCOFIvSlZBbWVaMk56RkdIcm9WN1dQZmNjRFJ1ZldaZE8ySVVYWFhTaFRwODRpWTRqemF4YytWMGVmdlFKZXZNUmkwNWRvcC85ek44d2UvcEVTVmd3QW1CZTk3cXFLczQ1Uk9URU1DQlZ4VnJiLzhTOW1RRWRENE41OVlxS1JtRUFneUFxc2Nrb29CSDBleE9ERGpRbTh5YmZUUjJDRy9Ba3hJYW9JdUNVem83MmExOTg4Y1gvYUd4c3BLYW1oc1dMRjYrcnJLeGMrUERERCt2Szc2NmtOM0RVVDVyT2lER1R1UENTUzVnOWN5S05UUzE4NDBkM0lvVmV4cFRKZ3R0K2RhdmVlZnM5L09ybW0zajB2cnU1OVpaZjhLVnZmSnVGUzVadzRIQXI0dm1JTVRnWFlnd2c1bld2Nng4VENmN1hHVkRmbCs3NytaOEtZVnIwQ0NLQ0s1cUhJRGlGK09QeWlCSEFpejJLQ3VxS0hndkJPZGNmZnZyT1JiWHZ6WDJ2MndFK1RUaDRxRmsvOWRkL3pWTlBQVVY5ZlQyN2QrOW02ZEtsQy83dDMvNU5PenM3ZWVHRmRYenljeXRZdU93c0hsanpMTis3OFJaV1hQOHBYbmh4QTBjT052SFZ6MS9MNlZOSGNOcXNTWHpzb3gvam5ydnZwVHlSb0x1bmwxdHV1WVgxbTNmd2pvc3ZZOVRvZWxRRWc0QnE4VHplK01FOFhnL3JXMjVBSW9JeDVvOHlpT1A1WlBTWmtKVyt2QVVpVlp5Q0N4WHJHWnhZUWlVMkxnRVhoWGd1UkZ5ZWhvYTkrc3JtYmFncUN4WXNZTUtFQ2RKM0UxUXNnVE9JUUZnTUR3STRGM0hmYjM3RDZ0V3J1ZkhHRzdua2trdTQ1WlpiV0xGaUJYZmRkUmN6Wjg3QXFHUGkrQWtzTy8wVVNvZU40MnZmL2dHL2YyNFR2VjNkVkNjOXhsV1drZ2p6bkRSN0dwV2xhYmJ0M01sM3Z2MHRtbzYwY045RHYrWGUrMWV4b2VFQXpZZGJ1ZVo5RjVPd010RDV2T2E2OWhuOThiclc1cys5UXJBb1JDSGlZaDhST0NVMFFrNmh1VmQxeCtFZWZYcHprOTcrOE5QNjRwWUd6VHNkLzVuUGZFYlBQdnNzdnYzdGIzUEREVGR3KysyM0Q3b2hCUWNGRWJwRHZUYm5JRUxpRUtMS3JsMDdTYWZUTEYyNmxFUWl3ZkxseTZtcHFXSHo1czJrUzBxd0NpMkhteEdCVERxQkZmQ0lxS25JME40WjBIaXdIWWZQd1lPSHllWHoxSTBjenY2bUExeCt4V1dzV2IyYVg5OXhCME5xaDNPbzlTaVI2clhPUmFpNi83RnI3UEZudmx3UTRhSUlrMGlTRDBJZVh2T1kxZ3dkeHJRWk0vaitqKzltL2NhZHBFdlRES2xJY2ZFNWkzbjJ1Zlc3ZnZsZnQvUFJqL3dsZi9QWnorRjVIb1ZDb2Y4cGpxS0lneTBkK3VSTG16blUxTXpRcXJML3VPekNjMFNNWWxTcExDOG5uOCt6Zi85K1Jvd1lRUkFFcUNxZTU1SE9wTW1rVXpRZlBNakJwbFllZS9RWmt0WXdkL29rS2pJbC9QYnAvZnpIcjMvSFMrc3kzUDFmTjFKV1djMmxsMTdNNWxmVzgvVy8rd3JEUms2Z1BmUVlQMk1lWjUyMUROOHpQellEcXN3L2V3TlNoY0cxakFPSk13aURRZDdBSWZibFZlRFFZcm1OS2k0U3JEVTREUWp4RWJGb2tNY0Z2ZGNpMHVDbDBxdC9mdk12ZGNmV1YvaTdMMy9sSEZLbGZPbUc3M0xXdWVmeHBabXphYzhaWEtxY2ovMzFWU1RKTXlRQmZtK1dzbVFWdC83WHI3anYvZ2ZJbEdhNDVPSkwrZEtYL3c1alBRVEQvc2FEUFA3a1U5UlZWaktxcGh3dmNuaGlNZFp5NnFsTHVQSEdmMmZseXBWOC9PTWY1emUvK1ExQkVMQjgrWExLU3N1cHJLemw5anQrdzVZRFBhU3FhdmpnZXk1aTRmUlJwSzJUcjM3eUlsM3oyTk5zM2I2ZW1Zc1djZldWbHpOL3preVpQcUZlSjQwZXk4SERuU1FycXBnemJ3NjFOUlhpYWRHeld2L1A1NG4vM3ZlK2gzT3UvNllQL0lsVUNWU0puQkpwUk9nQ0lwY25jbm1jQzEvM1BhcUtpeHhoRUZFSVEzckRQRDFSUUhjUTBoTkc1S0tJM2lCUFMyLytPei8rNVoxNjRVV1g2cXhway9TU2k5NmhldzdzMWIvNm04L3E2TkdqOUpYTnIyaG5wSnozbDUvUkN6LzJSZDNhMXF0Zi91V3pPdlhLcitscEgvdW1udm5oeitrM2IveTVkdWNDWGIzcVVmM2k1MWZvMVIvNGdNNmNPVlBUNmJTdVc3ZE9DMEZBR0VaMEZrSWFzd1Z0ellmWDlnYU9JSFJFVGduQ2lHdyt6MDAzM2FRTEZ5N1U0Y09INjhrbm42dzMzM3l6WnJOWnVqbzcrYzBkZCtqOUR6eXN6Mi9lclh2YWU3UTlqTWhHQVVIWVF6WW8wSlVyMEpuTDA1WFBraTNrQ0tNQ1lTRkhsTy9GaFNHNVNPa3BoT1NEQWxHUUpZcnlSRkh3aHRldXI0ei8zdmUrOTJmZ2dmcnFGVkZFRmRFWWtrUGZQQnZycTU1Q1ZYS1lzenQ3QzQrMGQzU1JMc3RRVlphNlhmQWFmbkxybmRmZi9MT2JPWC9aeVZ4ejlmdll0WHNIaFZ6QXJKblQrYStmdDlQUTBNRG9xZE9adjJBUmE5YitucWJXZGthTnFzQzNob3N2dklpemwweW5PdVVUaUdOUDh4N2U5ZDUzWTR6UHYvN3J2OURjM0V4NWVUa0dod2lVZUlLeElna1JOSW93eHNhZ29EVjR4dU45NzN1ZlhIWFZWZjF3Umw5aFlhM2hnb3ZQRTdHV1FnaHFQTVFZQklpY1I5SkEwaWd1S3NUdkZVTVFncG9FNHZLb0sxQ1FCQVV4M3dHRFJYN3N1N0NoeE1yL0t6bFF4TEVnRnFPdzlHTXl4NEM4VndOaEFJVWdZdlh2bjlmbk4rOWkxOEhESEdwcG83UXN6U2V2L2RDN0t6TSt2M3ZtWlM1L3p3ZTU3a09YY1hUL2JxenZjZUJBRTlPbVRzWVl3OWF0V3puOXZBdVlQSGtjano3K0ZDMkgyeGhaVzBuU0JyUWNQTXlUajBlMEhtamczR1Z6dWZmQmUvajZONytHTlNsR2poak92OTc0YjR3ZE8xYmlQRG5DaXBLaWdLaEZUQUxWS0s1MklsZXM4QVhQODE1Yk9vc1FHby9JZ2JNZWdaUHhoWUFYbkVwVkVIa0UrWkF3bDZPMy9SQzV6aVBrc3ozMDlPUTVjclNMN3E0T09qdTc2UWg4dkpyUlpOWEhoRjNYWDNQWm1Vd2FXVE93aWoreERlaE44WVkrQUxob09BcUlHRndVWXkrT3FQOFlyYTJ0dW5QblRqelBZOXJVYVJPTW4ycjQxUjMzc1BOSUwrKzU1aS94VWo2My9PTFhyTi9Td01teko1SVBJdEtsWld6ZHRwM1BmZnpEN05qK0N1ZWNkd0hmKzk1M3FSczJqRWQrK3pCTHp6NVB0MnpjaktjaDVTbVB1dW95UmxRbDJQTFNDN1FQcVdYVXNGSVNudVdmZi9COU9vOTJrUERUMU5YVm5aUEpsSzVHUU1VUU9zVzRDR004RkkvUUdad0tZZ1JWd2VBd1FCQUVCRUZBUHA5L29iMjlmVUZiV3h1dGJXMGM2dXltdFRPUFpHbzQzQlhTMGF1MGR4Zm82c25TRlNpdXQ0MERHeCtuZGN2VEJEMXRSSVVBcDZEaW95VHdTb2N6ZnNrbFJPWERxVWlGdlB0OGl4WHYvdzBQRkNQQU1RZ1hJYWlBVTBVOEQ0MGlmQ09FWWNoZGQ5MmxLMWV1cEtPamcxd3V4OUtsUzNaOTl3Zi96S0lscC9MS1hZK1JMSzJtdmJNSDY1ZFJYeithcXNwU3FpcEsrZjJUYXpucnBJL3h3My81QVYvKzhnbzJiZDZFdFpaclB2UkIvdjNHZitjOVYxeUdWMTdMMzN6MnM4eVpOSnBVT2puaDIxLzR4SzUwU1pLU2tqVHBoSldFS0w0RVVGdUhFUVBHRWpuRmlTRXE4bWVCbXZIWjBPektGNFJzQWJxNmUyaHJhZU5JY3pNTlc5ZlR1R1VkaDVvUGN1alFJVnBhV3VqdDdTV2Z6MU1vQkJRaUErbGF4cDV5QVlYTUNQS1NMZ1pvSld1U3BGUnBhKzBoMzVQSEJDRzJDSUNxOXZGMVFpQWw1S1Njak84UXp3ZHgvMk9JekovV2dOUVUrU25CQ1RpQndNRyt4b01hOVhZemRkd1kyYlJwazM3Kzg1L25zc3N1NDVPZi9DVDMzSE1QMy96V041bnk4NSt3N0tLclNUNzBBdi81OHp2d3ZBUytlT1I3ZTZndUhjbjU1NTdPUDN6am0zejBtcjlnd3NocTl1L2Z4L0RSWXhCcitlU25QaVVYWG5DK2RtVURobzRhUzAxMXRaUjRzUmxQcUtzUUZVR0VHSFFNUTlRcFJwUkljK003dTN0MmRYVG5PTlRTeWZiZGU5aTVaeis1UkEyTnZTa090M1p4cExXYmZDN0F1RHllNXRtNzRVbTZkNndGRi9hRGVIMTVrRFVHNnd4YVlnbWtsRjZ2bXB5azhWeUE3M0lZRkU5RGpBdVJLTUNnS0VLRWowaUlrQVBKb2NhUk40SkxXTVE2aEJCSS9EK1FBMFVSemhoNm5hTW5tOVdTUkhKQ1BwUmRQL3pKcndoenZkendwVS9yazgrdm82T3pnM2RkY1Nsang5YnpvV3V1NGQ1NzcrYVJoMVp4eFYvOEZTTkhqNkpneS9tTDk3MlRCMjY3ajEvKytDWTY5cDdCUlJjdXAvcmJYK0h4UngrazFMZDgrS1BYc3ZUMFpST1NtWFNEY1NHVHAwd1dFUVhqRTJrVW8rVXV4SVZDWHZ4ck83THVQN3E2dW1uYXRZMWRtMTltNTVaWGFOaXpqYjBIR3RtMzl4QWRIWjA0aWJDWkVZeGY5ajQ2TXlOUkxCRWxPTXBJU0o1a29aVklmVVE5RklkejBRQXF4T0JjakJYaGhJUUtRUlFRU1JhTDRtT0FQSVlDeG1vTWNUakZZaEFzUWtpRTRJeFBaQVJMZ1pUMThIMkxVNHZwVndLRTVQTjUwdWwwdnhMZ3o4Y0RpYUhnbE1kZmVrWHZmL0FSUHZLQjkrK3FyNjlqNHF5VHVlMi9iK0daOWErUXFhZ2lqRUsyYmRuTWtxVkxTSmVXTW56NGNIWTM3Q2JqQ3pNbmplVHBkYTh3dk56eXhVOWV3VE5yUjFCUlhrRVM1Znl6bDhnRlo1NkVGVUZkVEZPSWkwbFVZenpDS0tRelc3aXROU2Z2Ym1ycnB1WFFZWFkzSG1IN3ZxTTBIemxLVjBzVHp6MThCNFdXQm93NklpbWdvb2dyd1FCaUhTbytvV1pBL1Rna2kwWEZKM0lSVmd3MmNqaG4rZ1VlZld5OGMzRW9jaElYRHpGNHJJaFJGRU1RR2lJMUtBVWk1NE42T0JGRUhVb2hOanp4VUVuaU1IZ2FVbUk5Zk45SHhhTEZ6Mmx2YjMvaFJ6LzYwWUxycnJ0dVFsbFpXY01KUjZhK2VSa2Z4d2xObGJHdW9ZVmh6MnhuZkZPV0RWdDIwdFBkeGIzMzNNMW5QL0VSUm8ycTV6OS8rak9tenBoQlozZVdUYTlzNXZTbFN4aGVWU0hublR4Tkp3eEpNVEpqR1ZxZWtzc3ZPUU5qQlErUU1NQktYQWxGNUNrRWhlOEVYWVhyOSszZXpZc2JOckZoMjE2Mkh5blFrUjVKYTVDZ054Y1NPVUhWdzQveVpQSkJuQkJyaUtqcmwzTzgrdkliVlR3WEE1dVlFTUZnTkVJd1JaM1BHMThCbzhYUWJYeHlVa0pPTE5ZNUVnakdKU0ZLUU9TRHhBYmtqTWJWcXh0TTBRaEt3dmRJSmJ4aU5SdFhyNzI5dlF0dXZ2bG1vaWphdFdMRkN2RjkvOC9IZ0hBRkJJOHBFMGN4dkg0U2Q2NTZpdHFLTkNmTkdVYzBmU0tQUC9JQTExLzNNYjV4d3cxODVZc3J1UExLcXloSlp6ajExS1Y4OFl0Zm9zUXFpeWFQa29WVFI2RWlST3BRR3p0djV5RE1PanFQdHVtV2JadjQvYk9QODlMR0RleDQ4UldPSEc2bE8xc2c2MHBJanA1SDdhSmhkTmh5SXBOQ3JDQ1JvOHpMWVRTTHVwaEI2NmRnaFdJbU1vaWl4WkhBRU1ZM3oyaGNvZUVSL1lHS3lCWExmQ2RnVEVSQ0M1UzRIQlhXVW5BZWxsNDhja0NBOUpHMzJDSWRMTVZTUkRFNGtwNlFLdXFKK2d3b204M1MyOXZMOTcvL2ZTWk5tcVR2ZWM5NzVNOGtoQ2tpRVNtQkd0OWZlZVpKczY4LzBQQWdWNy83SFZ5NGJPcTZKMWVYTGxqMXE1K3o1cEhmOG9tUGZsaE9XM0txN3RtOW05cGh3eGczZG9KWWEzRXVRb3doVkNYQzBobEUydDZkWTgrK3creDhaU3UvdmZOT1huaHFMVzF0QndsZEZqV0tpUXdXVjFUNitDU2lBc2t3VDRwQ1RJSUNWcFhLak1lNHFwSHNNb2JRZXJqUVVXUlA0a1M0aUZJWkJZZFBnU1FXaHpFUXVRSytNYWdCTlFhTVlEVFdGdzNTNWlDRTFzTVQ4RFJMdVd0bjJyU3h2R1B4RE9vclMrbFFTOVBldmR5ZlhjK0xqU0dFaXVCUlVCOURnYWpmSXlvYVJaU21TMkt5V0YxTTQ2alMwOU5EUHArbnA2ZUh2LzNidjJYbzBLRzZmUGx5K1RNd0lBSHhFSEdrWFc3RnNqa1Rybi93WHNPMmx6ZHcrWkx4Q3hmTm1xd2YrZERWekp3K0RWVmw1TWhSTW1MNGNDSVg0WHVXSUhCa25hR3RLNjg3bXpwNGVjZCtObXpaUmNQK1pscmJjeVFMM2V4K2NUTmRyVzJJT296NFJGRlVsSzJHV0J3UUlrUllqYkRxTUpwSFZMRWFvZG1RMm5Fak1WS0lxeG96U0dnNHVCWndFVllnb1NHR1BHV1pGQnJta0h3blh0Z1RCekVSUE9zUkJNRmdJRVBBOHgzVmZwNmxwOC9pL0l0T1pkUDZiYXhhczVHczlaa3hzWTR2ZitWTHZMQjRHZy9lZlNjYk4yN0ZkeDVPUXdhWm9rQjFaVGtKSytlSXhOUlJGRVYwZFhYMUU3Z3RMUzE4N25PZjQ1WmJibEdPZzN6NVR4N0NDamFCMFlDa0IrUHFLaWFjTkdmYXJwNmVUcUxRWFR1a3VrSytmY1BYTU5ZREJLY2FTME9Ea0tiR1JuMzYyZlU4K1hJRCs3SXBkaCtOT0pvM09QRUpOWTJhTXNvOEllK0JlamtrektOTzhZeEhTQVJheExqRkVFbVNYbE5LankzSG1BaXJBUW5uTUVhWk5HRVVkYlhsN0Q4YTlHdUlYbThsaklMckllR09jc1ZGWnpCbjduaTYyanJadVc0ZGp4NTVpYzJOSG1FWUVrVVJJZ01OVVRIR1VaR0M5MTk2Tm92T1hNcXZIM3lDQjUvWVFGYytpWWZIY3k5c0lkM1Z3R1Zuek9MTE4zeUxWUTg4d0M5L2ZTYzk3VDNGMEtyOWVWQmxSU2tDRFZJMFdCR2h1N3ViTUR3R0lXemR1cFhycjcrZXhZc1huMGdlcUorVWVJM1FRTldpVGtrTERYLzFnWGVDZ1lSdmZteHNLZzRiTHNCRlN0T2hGbDM3dTkreGVzM0RQUGYwVXpRMkhhV1FHVTM5eVJlUno0d2lSNHBJQlRFZVNvU0tSU1FXbVZzVEU3Y09WOVEydTFodEtJWklES0h4Q1V3Q1g4QTVBY2t6WW5nRlY3eGpBU1AxYzN6bFM5ZHpZTi8rb3VMWkZJMUFBUThWZ3lWQThwMU1uMXJIOGxObmNOZmRqMUtXU2JOdzRUek9YVHFMRFUrczVmZFBybVhMMW8zczJyV3ozd3VweGw3ajA1KytqbE5QUDRVZjNmb2dqNzYwa3g1VFNkNm1TYWpnTzBmajdtYSt0ZlorNm9ZaytOQmZmSUJQZi9aditNSEs3OUhkazhWUklCS0R4YU8ydkl5RXBjRnA3SkdzdFJ3NWNvUXdEQWZoVDJ2WHJtWDY5T25IeFFzZEJ3TnlNV3FLNEVTT1VSWUl2bE5VRFNvSlBFS0dsYW1vR0xJS3VVaG9QWEpFMXovL0ZQZmZleitQcnY0OXpZY1BVUWg2WWtCTms1Z1NSYkRnQkRFR0R3Y2FZRlJJaEdCRGcxRVAwUURyV1FJWFA1WEdtcGluSXNLNEFyN21TWkRIQ3owaUxWQ1NDamhyeVVKNkR4OWdXRVUxUC9uWnJheTYvMjd1dnZOMkdnOGVRcU13Smp6VlJ3RXIzWXdlUHBSM1gzRVdUejIzbGQ4OXN4dW5DUjU2N0drU1BRMHNHVmZMKzkvL0FTcXJNbXpkdXBsMTY5Yng1Sk5QMDlPZDVlLy8vaHRNWDN3bVAvekZmZngreTJHeVVnV2FJS2tSaUVPbEFCb1M1Zk1jUHREQ1AzN251OVRWanlNTXdOT0lnRHloV0R4Sk1MUWtqV2NFRlFzdWZsU1BIRGtTaCs1aVdhK3FsSmVYazBxbDFwMFlYTmlyeXQwNGRZei9HcW1DaVZ0YWdtTEYwcDZOdE9GQUsyc2V2Sjg3Yi80M2RtemRpQXNpMVBrNDFSaWhGMUFYb1JMZ1RFaGtJeUlKVVhHSUdoU1BTQXdxTWFobXhjWWlNdXZqSWhkak9VaFJONndZd2hqeEZVUEs5VEp6WkJsbm5qYVhtMzUwQzdmKzZFYm1UUjNGdTY2NGlNdCs4UXQrK3ZPYnVldjJYMVBJZHFPRW9EbktVem5lKzY1VHNZa0M5LzcyQ2JLbUVsd1NHd1FjMkg2WWx4KzhpeC9kK0MrVWxaY3djdVFJempoakdkZGZ2NEk1cytmUTA5UE5wejcxQlk2WVlZVGxZMUhyZ1pvNE1SNUVOV3NjeGlQSDNqMTdFSTFCQWpTT2liNXhWRlZtRUkydnJwRllvOTNjM1B3YVBySzJ0cFpFSXJId3hBaGhBL1c0dU1HWHhBb2lzWGFtUFljK3RXa3ZqL3orRmRadjNFN0x0cWZZL2NwMmNCRkdZOWJiR0J2ejkwcmM4U0NHdm40SVo0ckhGRVdjRnVtUm90aGRoTHBoZGN5Y000Yzl1L2ZSdEg4dnVXeTIyTm9UWVRURWtrZGNSS1dmNStwTDNzbk9uVTA4dGJtSjlsNWg3V09QOHV5VHF6bjV0T1Y4N0svK21pVW56ZWVlMi8rYng1NTRCbU9WZDEveURzYVBHODcvK2JkZjBwWXo5SmdrUGo2cHlCSVZTeVV4aHM3T1RqbzdPOG5uYzB5Yk5vdE5HMS9obi8vNWgyemFjNVJ4cDExQnFCNU9mVUF3L2YwanI4SjdKTmFYYTdFYVJBVnhqa3hLR0ZLZDdzL3ZsRGhrTlRjM3YrYVdGQTNveE1pQlJBZDdJK2NVZGJFR0tMSVdveEVHeTY3OWgvbkhIOS9CZ1M0UDFRU2lhVndvaUNqT3hYYm9YQjhPSTRnbWdSUkVGcXNXNitKK0tNR2hMbzhoaUQvUkdzcEt5MW41bmU5UVBXUUl5VVFKVGZ2MzhlQ0REL0hpcGgxMGVXVjRGUEJjRms4TkMyWk5Zc0s0MFh6M1gyNmxQV3RRVTRJTFF3b3U0SkhWcTltd2FUUHZ2dXdDUHZUQnE1azcveVFPOXNKWlp5M2p1eis1ai8wSEN1U29Jdkk5a0N5UjYwRnNFSWU3S0VUVmtVajREQjgrbkYvLytsZHMycmlGanZaT2JOVTRRaldvU2VDa3FNTjhsYTVadFVnMG8wU09mcllmdFZnZzZZVlVWeVNMZkpsQjFWRW9GR2hwYVhtTkI2cXJxeU9aVEo0Z0JqVGdPWEpZUWozbWgwUU1udVlSd1BOUzVDVkQzaVl3S25nYXcvZGdpdnFhSXJaUkJNakVKSkVRZkkwQlNkOG9HdVZBSTlSWWZNbGpKVUJFdWZ6eXkwbG4wbnowSXg4bG5jcHcwc0w1bkh2dXVYejgwMTlnVDZleWZsOG42N1kxMHQxNmhFc3VQWjNWejIzbHBSMU54ZndxSWhJVDk0MnFvL2xRTS8vK294OXoyMytYOFlVdmY1V1BYdjFSZm5MdjB6eTc4UkNGcUFyeDBrQUFwZ2RuOG9UaUJraHdZMjdxNmFlZlJ0Vmd4Q3NLbndTTXdZa3AwaFZSRVdLUTE1WEhhTkhBVkF5aXRxaTlUbEtTRWt5UkNuRk82ZTN0dmEydHJlMVZBVUVZTjI3Y3l1UEZpUjBYQTVMaVV4RmhDTVRRZU9pSUJtSEF1REVqSkZZaWhsUlhwaW5KbEJGMkIvaFJVTHg0dHI5UUVCRktTakxrd3l4UkVLQ3VGODhQc2E2VDJkUG5jTUhGUy9FSTJiMzdFSzJkQlE0M2JLWnJjNEtxRWNPNTdOTEwrUGxOUCtYdzRTTVFOYk9uWVNkMzNYMFBYcnFTOFF1V2NlcUY3K0dLaTgra3RzUm5YM01QUDduM0diSlNUcVhyUUxSQWhPM3ZKK3RyWHJiSkZMUG1uOFRxeDUvbnp0OCtUcGNaZ1RpL1NHdmtNQ2JBa2NCUjhwcGlwMDlXR3NzdVlxTFVDVVJHY2NaaFhZZ1FvbTl5TzFTMGlJaGJMTXJ3WVpVa0UzSzd1aENNeGNRaDg5MkhEeDkreldkUG1USmwvSkVqUjA0TUE0b2t6bnBGUXlMeDZDaW8vdWV2SG1MeG90bU1Hek84MkU3c3lLUjlTdE0rbmdSWUUxOGdwS2daRXBnNmRTcGYrcnV2c24zblZ1Ni81MDYyYk4yRmsxNm1UaDdPVlZlZXdlK2ZlWm1Pb3kzVTFRMm5KSmxoMFlMNWxHUWJPVzMyZUE0MDdXWE5talVvRmlYQ2lCQ0VBYm1lSGhwMjdDUjQ4bG1lM255QStWUEc4c3lXUGJTSEpSZ3R0aWxMUkY5RGtCUi85MnlTei8zdEN0Smw1YXo4L0FxaU1RdklHVWZLS21nWTk3UTZEelFKbW5pdEJ5a0s2RnhmMDJMZlI2a1d2WThyTnU0UDhFRXlHTWlVSXFXaEdJd0cxRldYay9EdGxhcXVuL0xvNnVxaW82TmprUGN4eGpCdTNMaDN0N1MwbkJnR1ZDQ0JPQU11aS9PVkI1NC93RVBQSFdMMHBCQkxoSkVFaXVENzBicTZLck1nc1N2RWVaYThoSWdGNDRRaDFkVjg2ak9mSmwxV3lwbW5uOEY3TDcyVUo1NTZsdWUyN2VXOEQ3NkhGN1kwY045ajZ3ZzBnWXVPNEVkS3RXbmw4bVhqR1RkbUdKLys1TmZwNmVrbWNsN3NRVFFtTFRSeXFDbWhsekphY3hudWYvRWdrYVlBaTZjUmtUR290VUNJRVFzMkFnbTU0dklQY1BsbFYvQ0p6M3ljWFZzM00yNzRZbEsrUlNRZ0ZKK0lKRllGUXhaRDlsV3R4YS9DeDBSaU5iTmFqRHBFQTFEQmFiTFlIVHM0aCt4VC9Zb0ROVDdPS2o3ZDFOZVVZZkJSQ2VNOFVPSEFnUU1FUWRBdklRR29yS3hrNk5DaEowNW5xazhCbk9Cc21zMU5yWHJUN1E5UklNR1JsamFjSHN1UVBDc3I2bXBySHNHMW9nclc2eE9nS3pObnptRFZxbFU4OGVUVEpFUTU2N1RUT1AvU0s3anEvZS9uZ1djMnNPclpMZlJHSHRna0lpRldqM0xXc29XY2QvWk1WbnppTDltMVl5OVJGTVZaZHRUUEhoWHZabHpONVlNUUl6Skl5YWV2VWsrS0VlcEdqZVJMZi9kRnZ2Lzk3N1AyZDcvRCtpT0lJdGN2enozMkR4a0VXZnlSK3N4akh1ZDFZTDVCa0VpeHVsUjErQlpHajZpTGh5bzRjQnBMYkhmdjNqMEloUVlZT25Rb1E0WU1XWGU4R1BtMzNJQ1NHdUtNY0RBYjZVL3ZmWUxkUjNMNExzbVIxcVA5NUNVb3Z1anF1aUhWR0pUSXhhSjByTVVWbENlZmZJcUNndGdFMWdYY2NkZWQzUHZRb3lTSFQ2Rnk1bW4wcG9ZUlNoSjFRb0k4ODJZTzQvS0xsM0xqeXBVOCtjU3p1REErbnRQZ0RhV2VmOHpvbVhSSmltOTkrNXZzM2JPWG0yNittVnd1QzJWeTNFVmFiNFR0cTBZWWNaVDRocEYxTlhFSWxHTUplME5EQTFFVTlmOHVJdFRYMTFOZVhyN3dlSDB2Y3p4T05hZnd3Tk03K08yek93aHNHYzRrT2RMUlN6WWZhYVN4SE1FVFIyMU5CVWxmVUJmR1pXd1lvaWhSRktQWlVSREUvM1pLZDA4dlJ6dDd5WVllZ1Nhd0prR0NrSEVqcXZud1gxektwZzBiZU9EK1ZRU1J3YWs5TmxaRlhnV3NEQkMzdlpFUlNiR3I0cjN2dllycTZtcXUrOVRmME4zVkZUdXdLSHhyaU9YL0R5RkZVTlJGVkphbXFDblA0QWtZRTZQdGhVS0IvZnYzditiaG1ESmxTbjk3MFFsaFFBVXNtL2UzNjMvZCt6VGRVWXBJUFVJbnRIVG1hTS9taTRpN2drYlUxbFNTVHZoRkJXRWNZZ1FHbGNHcXJtODhWQ3lta1FTQ3dYTUZoaVFkVjEyd2xIeE91ZWUrUnltb3hibmlSQTc2bTE1ZkQ1MTc3UXR5REFRVmExbXdZQUZUcGt4bHhSZFdzRy8vdnRkTGFQNS9xQklHenlMNlkvRlpRVEhpR0ZsYlRTYmxyN1RGc0d5TUpaZkxqZCsxYTFlLzkrd3pwRm16WnYzQktTbi9xd3lvSTVMeFA3M3RNZmEzWm1PbGJ6SHZPTkxWUzJkUHR0OExXQnpEYXNwSitoNU8zZXZjNlZjN2pqNUdUZkNCdEFaY3NIUVc4eWFNNU5lM1A4UEJRemtjZml6REVJMmgvd0hTMGorcWdneER4UE5JcDFLTUdqbVNmL3FuSDdCMTYzWTArcC9yUFIrWWpCdGpNS0tNckJ0S09pa3JETVVHVGFDbnAyZlgvdjM3K3dsVVZTV1pUREp4NHNUaityM2VjZ1BxTGVpdVYzWWZKT2NzVGcyK2laUFJmR1E0M05vWks3S0taR3RweXFlcUtoUHJkLzVBWHRHWHJ4cDFlRkdlYVdQcnVQRHNrM24wa1dkWnYvRUFCVTNqdkVSTVNOTFg1bUpmTnozdUwyMWVkWHhqREJxRzVQSjVWajMwSUllYW0xR25SUU4vTThpMHJ5enZhMXY2NHd3dUx1TXBqcm5yL3hiSDZ2eUJ4NGFZMzlPUXlSUEdGalZIeDg1dDkrN2RkSFYxRFJyblVsNWV6b1FKRTA0c0EvTDkxTHJxSVptaU9xK1VJQklpUXNJb3hZRURIVVFTRXRLTHVBUVpuM1dqaG9VWUswUXVDZkw2Tll3S3FCZURqRW50cGI2MG13OWZ0WVFYdGpUeTY4ZDMwQzRwQ2w0S3A2Wi94bHhFVkdTWDlIWEtHZ0dOOWN0YUJBdFZZMElTZFVTRlBMMDlYUlNDcUZoeGFUOGlMQXFxSG81azhmMFJtSmkvczZHSDU3eUJCZmlyWXlSaVlwbWpJQ1Fqb1RTQVJPamlHVCthQWsyaHhpQ2U0UGtHM3hvODR4T0pSU1VrSWIxTXE2L0I3K3NITno1VUIvYmxBQUFnQUVsRVFWUk9oUzFidHNTVlo5K05OWVpSbzBaUlYxY254elBwZjh1UG5QVHR3aEcxbFJnVUYvWEZmTUdwME5qVVNzRTVrSGdTaHk5Y09YeFlGVmIwelI5YUplNEd0VUxTczV4NzNqdklxZUdPK3grakl4c1ZoZXp5V21meituODRGaFJsb0R6cnRZbjJHM3ZEQ0VzQnF3NGJXYXl6R0pXWTVwWG9EUXdvOWxuV0ZRc0VzUlM4RXJJMlJjNUxraFhCcHhQZnRXSERYbnpQcHl4ZFNtVkZKZWxNU1F3UmlGQlpYc2F3MmlIMGljajZaTE1iTjI0Y1ZJRUJ6SjgvLzdpUnFNZXRqRS9ncUJ0U2dTZjdNY1h5dkcrc1hOUGhEdklCYlduZlZBdUNGVzBZVlRjVW94djYrNXJlS0h3WlFLSUNKeTA2aWZLaEkvalpyMWZUMk5LTjJvbzNsZzRlcnlVeDlXRFVReldKa29qcENsR2NpVjRUZ1FhZWg2ZEtnQklhUThFYUNwSEQ5eUtJZXFsS2RURzF0cFFMWmw3T3BOb1BNckYrR0tsMGtoYzNiZVNyWC8wcVBWM2RqQjA3bHNyS3l0ZVkrVXN2dmZTYXo1c3paODZKTnlQUkkyTGt5RG9JWDhEWWtwaWdSSWhVMk50OGxON1FWVlVtUFRSUVBDUFVqeGhDd2pqeUdyM3gvVEpnY0l3Y09aeXFxaXB1dmVNaEdvOTJFMG9KcW0vTktRZ01Jak1IWC9SQjlUOXFMSkcxdUREdUNYUDRpQW1JUENFeUE0QkNPY2JyT1JkREEwTnJLbW14TVFIcnVSNThLVkJ1Q3B5eWFBYm5MSnZPN0hIRHFQTVRWRm1MdUFpczh1aFRqNVBMWlJFUjVzMmJSeXFWR2xTcFpyTlp0bS9mM3Y5WklvTHYrOHlkTy9mRU15Q0xZL1R3U2xLZWtIT3hyRFFlY0drNDB0RkRlOVl4TE9QakMzZ0t3NGRXVVpJVXV1V04zVWprWXYxUFozczd2L3ZkRXh5VURGbXZGS01lOXEwcWtJU2k0RXo2Y1dMUEdpS2lZaFEyaUNtaXdSakNTRWlJdzJvT3RJQnhQU1JzZ0NFa2tVaGdqYVc4UE1PWU1hTVpQMzRpTTJmTVlmNjgrV3pidVowYmZ2aGZsRWdlbzBlWk9tNGs3N3ZpSE1wS1BIWWVPTVRkbTNaUWFOcExYWWxoMGR3WjdHell6bzMvZWlNdWlndU51WFBuOWhjY2ZjYXhkZXRXSFpoQU8rZW9yS3hrOHVUSnQ1OXduYW0rT29aV2xGQlpXa0puUjRRV3lWVW5RamEwTkI1c1kzTE5pRGdCRTBkVldRazFsUm5hM3VRODR5TGZvN3U3bC9hdWJxS3FvUlNraEtSRTlNMWZmUXZ3eitJVFhSd0xMTEh4aUluNTcvNlJ3TTRoWVVUU0JhUWxpeWNobWRJMGxXbVBjVVBxcUpuMUxrYVhYOFdNR1ZNWVBYb2s1ZVZsWkRLbDlQYmt1ZnV1ZS9uSDcvMFQzVDFDWGRUTk9hZWZ5YW1uTEdMTm8wK3hic00yanZZcVh0VEZ3UTJQa2QzM01wVWxNWFhSbFMyQUdzb3J5cGt4WThZZ2oyS000YVdYWGlLWHl3MzYyK3pac3lrdkw3K3liOUxzQ1dOQUFsU1dsekdrdXB6R3pxNVlVVmc4MzhBWjloeG9obG4xaUNyR0tPbWt2WDNVOE5wM2IzOWRoRGZHZmxRRUoxNE1OSW9oVklzVGkrSXdSTGorY3YzVldiQytpczJHd1lQRmowMmJoMk1oQVlIU3NsSW1UWi9BaU5IRE9kTFV3eXViTm5DMHV3M3hQRkxXa2FTWE0wK1p3cUs1NHhnOXFvN2gxUm1HSkR6S1BZdW80Mmg3RzAxTiszbjY2YWQ0L3ZsMXJGdjNFaHRlM2tCdmJ4ZkptbnF1dU9Cc3BpK2F5ODl2ZllBdCt6dnAxQ0ZZOFNtemJVUTJqVk9sczZjTGNScjMyeHZEbURGakdEVnFWSC9QZTU4aFBmZmNjLzNocTg4RG5YcnFxWDhVWmZPL3pvQkNNYVFUWnNMWVllbGRMKzl1cFdBekdJV2s1Z2xEWmMrQkZpS05OZUNpam9RSnI2eXZMZFdFaGtWNXBvY2ppc3ZsdUsraWVPdnpSSkpIVElnbHhMb0lSMENCRUNrbXNjVzJ6NEZBQzVnRVJndXg1RUtJY3pJMXFFQk9MQW15bEVtQTV3bzRITlltdU9qaUMvbXJqMytZV1FzV2tTaEpFZVlLckhyZ04venQ5WDlIV3lFaUxVMjg3OTN2NFpMelQ2YzBaWEdGaUNPSHVubng4QUZlZU80Sk5qMnhsb1pkMjltemR5YzlQVjNrOHdVRWkxTWxrYkJjZE1uNUxGdStoSCsrNmJkczI5OUJUbE1ZSTZBQkxncUt2Zk1TcXptMXFBVnl5c3laTXlrdkw1ZStZWi9XV3JMWkxPdlhyKytmUnQ5blhLZWNjc3FmWkpEN2NSSFYrNWFHQ2FQcnNNL3RBNG5GWlRoRmpXWFg3a1pDT0Z0RlZzZlFQRXdjT3dxandZQmlWeGk0SllHb1FWVlFFa1NrRUJKNEdDeGdEQU9RWWhtMHZ3VW9SZ3hHQkhHSzlSSWswNlh4bThTUnRCR3BLRWRGUWxpMGVENHZQdnNNVmNPR01XZnVQQXI1SEg0aVFhb2tqWmRPOGE1M1hjNUxtN2J4THorNWszUGVlUTZ6RnN6bjhlZjJzWDNyaSt4djJFSlBaNUttdGk2MnZmSTRYZHZXWVFtSlhMNWZJcTQ0akZoT09ua1JLMVpjenoxUGJtVEgza1BrTllPS3dXZ0k0cEErR0VEcHAzM2k5d29MRml6b0w4dU5NVGpuMkx0M3IvWnhZSDBHVTFGUndheFpzL3EzV3JEV25qZzRVSjhWalIxWlM0SThWdU1MRWc5b0VocWIyK25LUm8rNFlxK1Z3V044ZlIyK0Z3SmhmOFl6TUNRWndGTWYxVFFoYVRRU2JGVEExd0xlSDVpUkxPb29MeS9qNmcrOW56dC9jemNMVGo2WktBcEltSWl5b0pYWlk2cFo4Wm1yY1VFZURmSzBOdTduaG0vL0ErOTU3L3U1NXBwcmFHczdpam9sa2ZDNTRvcDNVVnBSempNdjcrYlRYNytKZi95UDIzbitsVmVZZTlxcG5Iblp1K2dJVTRSYWlqV0d5RVVEK0x6NFBHcUdET0ZyMy9nbWtTUjUvS2wxWkNOREtJa2lTR2plRkFxcnFLeGszcng1V0dzSDRUMGJOMjRjSkNJRG1EZHZIdVhsNWRKbmFDY1VFcTNxOEFUcTY2cW9MTEZZTFlBNm5ERkVCcnF5c1BmZ1VaeFJWTUNxWVZoVmhwcnFORWdZRCtDVXdWNGtGcFhHZlZOSW5vUjBVSjNzWldSTmdvUVh2VEYxb0pCSnAvbitELzZKSC96d1g1azlid0hidDIzQnA0QU5PMWc2cTU0dmZPSWlIbC83UE04Kzl5SkJQaGVMLzFYSUZncmNmOS85L1BqSC85a2ZGa2FQR2MzUTJsb2FtOXJvTFhpTUd6dVNGWi83R0pkZGVDWjdHZytnem9jQW9qRFdDL1dWMU1ZWWpCR3V1dklxVGw2OGhOVnJucURwY0R1UkpBbkZpN1hScjFNSXlBRG9vTDYrbnNtVEovZDdsTDVqUC9QTU14UUtoVUdFNlpJbFMvQjlmNUJYT21FTVNGQ01PdXFxSzZncVRlQkw3SnJWV0FLQlhPVFRzTCtGZ3NRem44VVpxdExKbGNOcnkwQ0RvcURldk1xQUZHc2lNTDFVSkxzNC85UXhmUG12TCtDRFY1Nk5mYk02WHBTaFE0ZXdmUGx5RXFrVUd6ZHVwSzJsaVJLYlkvNmtXajc1b1F0NTZlVTlyUG45UzdHUzBzYWllcHdTdXJncjVLNjc3aUtmendOUVZsWkdPcE5CWFlTdkFlZWNQSjNaWTRZU0ZncHMyN29WUTRSb0dJZE9Zd1l4NlRVMVE3am1tbXNvNUVOKy8vVHpCQ0ZFYW5HWXVQL3RkVHlwRktVYU1zQ3JERHh1ZDNkM1A0RFlaNmkrNzNQS0thY01NcklUeTRCTXJJY3VMN0VUeGd5dnhyb0NSaUJVUmEwaEgvcHMyM1dFU054NEpGWWVwM3haTVhyVWtKZ0drSGl5MTBBamNFWDVneWM1TGoxckhsLzV5SVc4YytFWW12YzFraTI4V2NldU1HUDZER3BxaGlCaWVQYVpaN0JCRHlOSzRicXJ6MFZkeUoyckhxZExTdWtoTldDTVN1d1BQR3ZadW1VekhSMGQvVjdJR0lNMWpyS2tZLzZVT2twd3RMVzBjZURnWWRTQXNhNC9Qd0d3TnI3RVo1eHhCcE1uVDZMemFBZmJOMitOOHp5UklrR3NXQTM3dGMwRFBhaTFCaitSNEpSVFR5V1JTQXphUHFxeHNWRzNidDA2SUZRcW8wYU5ZdWJNbVlNa0hTZVVBVkhzWlVwWUdxWk5IQk5yZnRHNElkQUkyQ1RiZCs0akg0UzcxTVZ5QkEvSHhJbGp3QXdzc2dkczQ2WVFZa243U1U2Wk5wRzZCSGc5QVZzMzdDSjBwVytJQXduQ29rVW40ZnZ4aFgvKzJhZElhSjZQdlBkQ1pvNnA1ZUhWejlEY0dkSWxHZkltVFNRMi92NUZQQ2lLNG0wU0RoNDhpREdHN3U1dXN0M2RPQ0txcWtvWU4yb1lvb1lOcnpUUUhmZ0V4aXMyUElLZjhDa3BLYUcrdnA0Wk02Wnovdm5ua1V3bU9Yem9JSjF0YlJnOXhyTEgvU3ZoWU5paE9MY3hpaHhWMWRVc1hyeTQzNEQ3MXZyMTZ6bDY5T2lnVURWLy9ueUdEaDBxZlJ2ZW5YQlZXS1ErUmdUUFJVd2RONEtrRmJJb09JZFRpeG80Mk5IRmtmYUF5cG9VbGhEZldNYVBua0JwU1pxZTd0NllMdEFCQUovNE9DeTFGUW1takI0S0NBMEhXdG5iZEJTUk12RHlhSmhEeWNWZEZFWGpNMTZLazA0K2hVaVU1c05IMkx0ck53dG5qV2Y1cWJOb2JlL21pUmNhNlExU0pEMkRUeFFIUytNZGUzSnRMRTRQQ3dWUU9IVG9DQzFITzZnWjRURmwzQ2pLTW9Zb0tMQjMrM2FxVXprcVNzdVlYajZYU2U5Y3dKelpNNWcxZXdaQlVHRGx5dTh3Zi80OHhDaXRSNC9RMmQxTlNteGNNSm9BTkN5S3hXS2cwaFIzVUV4SVBLVmsycVJKakIwelJnWWFWMSsvV1YvKzAyZFl5NWN2ajhmZXFaNllCcVJpQVlNSFRCNDdpcFExU0JCZ1JjRDVoRktnclRmUC9rT2RUQjVhaW1nQko4S1lVV09wSFRLTWZiMzdpbHNsdUFGT0xkYitUcHM4aHFGREs4a1p5L3JkaDJuUEY1dnRUQkloQ1dveEV2L2dITldWbFV5Wk1na2xZdStlZmJRZWJ1SC8vUDFYS2MyaytOMjYzVFMzUlNoSnZEREFreUtNSUg3L2huUlJGQSswcXE2dVFwMnlhZE1ydExlM016VE1zWGpHYUJMeFhCRE9QZU5VM25GZU9YVTFWUXhKK0Vodk56dTJiK1hoaDM3TFhYZmZpVEd4dUIwYzJWd1BZVkFvOXAyNTR2VFZDRkdETXhabmJEekJYanc4UDBVK24rZVVwYWRUV3BvWjJEWE8wYU5IMitLR3hXUGJHVlJWVmJGbzBhTFhsTzNIMDVqZStoQW1SYkdtRWFvcmt5dkhESy9HbDVDK0dWK3FRallmc21OUE0rR3hmUVFaTW1Ub2hISGp4ZzBpQ1FjbUE3NkIrUXNXNEtWS3lTTzh1SFVYZ1UwU1NSSWJaTEJCQnVNeXNaNUc0NGJmU1ZQR1UxMVJoaS9LN2wzYkdUZDJES2NzWFVwZVlkT08zZVREcUxpbnFyeW1rSXYzVGhWS002WFVWTmNRUlJHUFBMUUtGK1NvOEIxekpvNUFnZ0Fqd3FUSms3R2VaZDFMVy9uVzMzK1hpeSsrbUFzdnVvaXZmK1ByckYrL25pRkRocEJLcFpCaXg2dG9QQlhOYXF5dkU3VW9sakNLSHdpblFsbDFMUis2OXE5SmxGV3gvTnp6NC9BL1lEVTBORlR0M0xsejBHWjRFeVpNWVBMa3lSUDRFNjdqMEJzZjlWUG9IcXlZT1hIazlSdjNicVJnUzdCaUVhQVFHcmJzM0VjMld2aWRwUFZXaUNvbHlXVERyRm16ZVBUUlJ6SEdEQkpIQ1E0cnlwSWxTM0hHNDBobm5sMzdEdUNNeGJpUWhPdkIxeDVFQXB3b1ZnMFlqemx6NXBQSnBGRzYyYlJoUGVlY2ZUYVpzaktPRm9ROUI5dUpIQmpmRkZ1RzVUWFZKT3FZTW0wNnFYU0dBL3YzOC9EREQySHdHVnFaWVdSdEZXcUVKNTdmeUkyM1A4cUJEa2ZRM2NiKzliK2pvMkY5VWE4WVcyVW1VeHJqTjg1UlVsYURWMUtHaWxkc2M3SXhnSzZHQkZrU1pLbXBMdVg2TDl4QTJIV1lpZVBITW4zcXBNRXpCMVJaczJZTjJXeDJVSks4Yk5reVNrdExHMDVzQXlLS0oya2dKRHlZUFdrRWQ2NStnZDYrR1JJS2tVbXd1Nm1kdHE3Yzlaa3lmMFZDd1BkOTVzeVpnKy83QkVIUTc0WWxuckxBdUxHam1UQnhJaEZDMDZIREhHMDVoQmVWWWsyV1RMS0RVc2t5dXI2RVlWTVdNMmZhRktaTm5jNlpaNTBEUUtFUXNIdDNBeC85aXd1eE5rRlBieTlIMm52aTNaZGRIMkV5MkFWNTFtQ3N4L0xseXpIRzhKOC8rUWxIMjFveDZTRk1uenFCUk1yU0U4TGFEWTI4M0JTUXRhV1VVRTdlWkZBVlhMR2N0OVlNS0tjTk5TTkdVMWsxdENoaGlnZHFXZXNoaEdTMGswbkRNbnppdXEvUzhPTGpyTHpoSzF4NTVSWFVWcVlFRjhaZ295cEJFTEJtelpwQkZWbEpTUW5ubm52dW43emw2RGdZVU54RkVZT0VNSGZxR0Vwc1JLdUxNQ2FXWVlicTBkVFNTVk5MSi9VVnRUSFRyY3FNR1RPb3JLeGtZQiszY3c0cndyU3AwNmdkT294QWxaWkRUWXdkbHVHaytrbU1HRDJhTWFOS0dUT2tpdnFxVXJTbmc1ZWVlNTVmL09KVzVpK2NCM1lrSFIwOUJJV0EwV1BxQVlkemptd3VQMmdVeld0eU9hZWtTMHU0Nk9LTGFkaXpqNS85N09mZ1Fvd0dUSmxZSCt1OFhjUzJ4bmF5WGpWWlVuZ1NFakU0LzNETzBkSFJUaGlHSkhHTXFhL2p6SE5PNC9rZDdWalhRY0lZaUtDNnJKSmxpeFp4MGZMWlBIRHJUZnpzbi84QmNyMWNlUDY1V0NNNFBhWTYyTDE3dDI3WXNLR29NNHBoZy9yNmV1Yk5tL2V4NDcrTjZIRTNvR09Ea2d3d3JESzljdlNJMnV1Ym11TXc0UkJVZkxwelhlemFjNUNGNDJyN2M0NzYrbnBHamh6WmIwREdHREtaREZNblRlYlN5eTVIYkR4WTRKUjVNMWk4WUQ3V1QxQndqb010blRUdDNzK3ZmL3lmUFBYWVEremF1cEhxbWlyS3EwdUpEQnp0NmlGWENDa3JMOGRvdkJtSytVTU5Hd3BuTEQrRHlWTW04NGxycjZXdHJSMXJESjdBbFBGajhWVHA2c3pSZHJRRHB5V0lHS3pHZzZzS3J6cFVjM016M2QzZGxKVmxxRWlGZk9QekgrSGVOUyt5ZWQ4aDhKUkpFeWN5WitaVUFwUmYvdmZkM1Arck8rbm96REo3eGhRbXo1cEhKRjY4cFZUUjR6eisrT04wZEhRUVJWRS81blRPT2VkUVdscjZZLzdFNnppUXFYM2JaenRFSXhLK1hURnQ0dGpyMXpYdU9qYU5TMkl2dExGaFB4ZWRNZWVGSkN3MFFIbDV1VXlmUGwxZmZ2bGxqREdVbDVmejNlOStsOHN1dVpSTXVnUVZJZWRnYjNNSFcvYTBzR1hyZm5idWJ1Wndld0h0UGNMV1p4K2lxM0VUUXBZWk02ZFNNNlNLVUlYMjFtNmlYRWc2cVRqSjQ2eVN6UGdZT3VQaDRDYUppSThMWWh6SWlGSlZXYzduUHZ0WmZ2R0xXMW0xNmlHTWlUZmxyYXJJVUY5YmdVUjVPcnA3YU8vcFJpakJkd0crQ3pDRGxKVnhndHZZMk1pT0hUdW9yUjJLUVJrMUpNTkhyenFUbmtpSWZLRzFPK1RoTlM5eDIyOWZvTHZ0TUQwRmk1b0VKNSs2bE5yaEl5VXE3akZpaTJ6N2ZmZmQxNThqOXJIdzU1MTNYajlQMW9kQ241Z0dwSDRSSEFzeEpzTERNR3ZLT0RLUGJhVkhCWThrT0kvUUpubDViek5IY3JrRmxTVUpoTGlQYWU3Y3VkeDIyMjBZWS9qd2h6L012SG56V1B2RVdwYWR2cFNTMG5JYVczcjQrZzl2WTJlcklkQTBUajBpa2xTNERLR2tVTFdJd3NqaEkwbW4wcWlKYUdsdVF3c1JSbUxKUnFLa2hJcUtFb3p0SWxMQjRSRkVJVEV1RHVsMGlodSs5alc2T3J2NSsyLzlQWVZDUUVKajVjQzQwWFZVbHBVZ0lqUjFkTkZXaUhBcWVIMWJHb2daQUd6RzdVVmRYWjNjZU9PUG1ENXRKaFhWVmZFUUxZWGVYSjdWVDI3anRvZldzV1ZmQndWYlFUTEtJSDRwbVZTS2M4ODhnNVRuRVptaW1nRmx4NDRkK3ZMTEx3L3FmeDgzYmh6ejU4OC9PaEI1UG1GeG9HUDFzUFN6MEZNbkRhYzg3ZEZUaURGWEtSYnZCdysyMGRyYXpjVDZhb2djeHZNNTZhU1RTS1ZTOVBiMjh0T2YvcFFmL3ZDSFRKczJqYldQcjhVWnk0RkRSMm50eXBOM1pZUmFSR2I3SjdvZis5d3hZOFpnalNEa2FXN2V6K0dXbzNUMUdqS2FvY3BZenBnK2cyYzNkdVBaRERaeUpLSWNhYzJUVGlYNDdDYyt4N1RwMDduNkk5ZlMyZGtSengrTTR0NlBjUk9uNEtVcjZZaVVReDI5QkNSUTQ2TXV3dUhGYzZsZnJaRUtJKzY5OTE1NmUvTzg0NktMSUZWQlU3ZmptYzM3MmQ4YWt0YzBrWlRSUDdOQllQekVDU3crNWVTNE03Zll0WXZBbzQ4K1N0OE1vRDRqT3ZmY2M2bXBxYW4rVTdEdmZ3SURjdjJhSG9sbFZBeXJTVE51VkRVSGQzVVVXMmtVeFpMUFc3WnUzOGZKbzZ2QXhnbmhoQWtUcUt1clk5ZXVYYlMzdHdNd2ZjWU1qSmNneExEdllCdTlnWWV6S1NCSkdJWU0zdkV4TnFQNlVhTmkxVjRVME5aNm1LWWpSOWpiMk15STBXTkpLNXgzMGtTZTJYS0F0UzlzeGhjbFJaNnBZeXBZY2ZWM3FDb0orY3VQWFV2em9jUEZJWjVGQXpXR01lTW4wNnVHamJzUGNkZkR6eEdTSWxLRExXNUk1N0NETkVreElCb0x3SDc3OEVNODlNZ2FLQnRCL1NrWFVTZ2RRNDRxalBHUktNUVJZcjE0UXR2eWM4NWl5TkFoRWhPek1VNlY3ZTFsMWFwVi9kV1hNWVpFSXNIbGwxL2UvL3Z4RnRIL1NUeVFGREZLd1dCUXlwUCtPVE1tMWozeWJFTWJ6bWg4MDQxSElVcXhhVnN6aGVWek1UaXM5YWl1cnBiWnMyZHJYNSszaURCMzNqeXM1NUYzd3NHVzduakFndWtidWZ1cWl5WHhUczdENm9ZVjUwVWw2ZXJzb2J1bm5kVnJWN053OFh3OGlhaXREdmpheDg3Z3hkUEdjYlM5aXpIMWRkU1BITUxxVmZmejZlcytTL3ZoWmpRaTNuL1FLYjYxWUh4S0s0WngyNnFudWVXQjUyanFEZ2dwaTlVREdoWFBYQWExOVdoUkZPYWN3Nm1MeC9BNWg1Q010NHFTRkVZamZJbUtneVZDeXNwS09lY2Q3OEQzNDZIclVmRjRPM2Z1MVBYcjF3OGlTaWRObXNUY3VYTlhEdXdBK1ZPdXQ1Nk5sejdNT1paa2lqcDgwZFVMWm93bWFSd2E1VEFTNzVJVGFZWU5XdzV3Tk9kVWlsdFhXMnRadkhoeGY0bWFTcVdZTW1rU3hnaVJpMmcrM0lGVEh5MHlYcStuQmZKOW43TFNNb3hZbk1aaWZPZENicnJwcCt6ZTEwaXZRdUFKTldXT2Q1dzZqWXZmZVJLMWRUWDg0cGQzc0dMRmwybHJheWNLbzdpbFdZdVZwWUtZQlAvd0Q5L24zMzk2TndjNmxBSnB3TWM0aXFXRGU1UGNNUDZlVmhWeERzOHAxc1hidGhnSmtPSjhSOSszVEprMmxUbHpac1IrWEZ4L3NyeG16Um9HemtCMHpuSGhoUmRTVVZHeDRrOXRPTWZQQXcxb0h6Ykc0cUlDbm5GTW16U0Myc3BTOG0zZEJBNGNHWnhKY2Vob0N6c2JXeGcyWlZoUmFHOVl0bXdabmhkdkYxQldWc2I0OFdNUWpRZ0xqdGFXbzFETU00dzZMTkZyMlBoVUtrVWk0Uk5HRVd2WFBzc2pxeDhCVlpyMk4zUE5YMzZlYjM3Lys0eWNPQVJ4Y09ob0c2dCt0L0gvdG5mZVlWWlY1LzcvckxYM1BtMTZwY3d3RERPVW9ROWRLU0lpVVlvdEZsUml1U0tpZ0JwRFZFUzhKZ1JqakdsR2pjRWJOYmthTldoK2RsRWgwVmhBRUVScG9zRFFoejREVERsbDc3M1c3NCs5eitGQTFPdk5GUVREZXA3endBTThuRG5ydlB1dDMvZjc1YzIzbHhDcjM0MXRSekRpK0VxQmFabVZrRGd1TkVWdG9tNkFPQm00V2lDRmhWQUtRM242RytKTEVKSWFnVTBJUTRjQWlmUTNXUjJoL2NBdlVLNWl6Rm1qS01qUEVZZzRTWGQyNE1DQk9TKzk5Qkx4ZUR6Vm1Nekp5V0hNbURGSEZMTDZEWVN3d3loNWhJZGR6b3VFbG5hdGJOMW42NjdsR0VZWUI0bmp1c1NGNHFNMU5mVHIxQkxUcjNUYXR2RjJxVDVaczRhOHZEd0s4L013cENTYWNEalFGUE1BK2Ntbk00MG9RU1RoSkVLd3JYWTdQNTc1RTJiLy9qSDI3OXVPRkFMSGthemJ0SStiZi9RWXNxQUFhYm5zUFJBalJqWlNaNUpwdUNnVjhFbTkvWjB3djVMU0NGemxZQnFXVDgvclNTQW83VE9DQ1pXQ1ozejVzTm4wY1VBcXRRM2lJUkl0REZlUmx4Tmh5TUFlL2o2KzRmTW1LbFlzLytqQ0ZTdFdrSjRvOSszYmw2cXFxc29qdmJwemRJZXBIZ09nYjVrU2hJV2hCZGtHZmZ0M0xTVmlLSlJyK2RQb0dMYUtzbmo1ZXBwZFhhZlJDTmNsTHlkUFZGY1BRQnBoV3JkcVJTZ1U0RUJ6akpmL3ZvQXRlL2FoRFFNaEhMVFFLR2w0cktyK1VGYWdhVGh3Z08vZitBTitkcys5N04yN0E5ZFJPSzVYT3NleGFRZ0UyQklMc2FraFFvTW9JQ0ZDbnB3a050cHdzSEh3ZWkvQ1ovc3dzRjFRSW83clJuR0ZCaGtING1qcGtqQTBjVlBnU09tRDByN3M0WXFEamlLd1BjNUlKVEJjRTlNMU1MUkxyeTVsdEN2T1hHcHFGK1ZZdUk2QmE4ZDQrZVhuT0hEZ1FLcnlzaXlMODg0N2o4ek16SnB2S253ZElRTTZETkxsdzFNbFVOMjluSEJRWXBuZWw2T0ZpVGJDMUd5dG8zWjNRNTdqNTFDV0pUbjExTUVJb2NndnlHWGR1blZNdW00eTAyK1p6b0dHaGtQeUhwMU1XZzhaUXlnYUdocTk4amZwbTNRNnd0SGZNQlV5MWZnOExQNStQc282T2RIVVhvRWd0UFNGaFAxTkVpMi9nZ2Z5bW9TMkRKQVFGbzQwY0lWQUMwMjI1ZkNkUWQwSlNiZXZrZVI4RWJCcjF4NDk5NVhYVW5tVVVvcldyVnR6K3VtbmZ5T0o4MUV6b0VNM0tBV3RpakxwMHFFVTdUWUJMa2lUWnR1Z3JoRStYck1OVjBpVUlVRTY5T25iay96OEhPYk5lNTNUVC84T2MvN3lGK0lORFI1ZDI1YzJNclcvVDZXUFlEUE5ZNHhQR2hHK0lYMlZyOUdEdXNnMEpVUVhnemdCM1V6WDBnejZkV3hOUUxrZTJZUnZSSy9PbmN1R0RSdFRYV2NoQkNOR2pLQk5tellpSFQ3N3JUS2d3NzlBQVVRRTk1eFUzUjVUUjVIQ1JnR0dsVW5VRHJCMDVRYWFGWE1VRXFWY0tpdmIzdE94VXlYNzlqZlMxTlNNNjdoZ1dqaU9jNWlQMElmc21wTHFnK2l2aVpMdWM5M0lJZDVIcFBJWjVZOUNEZ1d6QzNFUW9tcm9CRUxITUZXVUlGRkN1b0dpVUp6S0lvT3pUK2xHaTRnaExCOWo3MmlicG1neno4NTVGdHQyVS85blJrWUc0OGFOd3pSTlBpLy9TUnJaMGZCTTVwRXlua012MFB0OVJESnRZTStxVzJlYnJ4TlRDVndDM3JXTEFKL1ViR2YzL3VZTE0vTENCQVZFSXVGcFF3WVB1WFhSZ29WbzEvV0Fhc3JiMkVqUi95ZU41N0FJbEw2aWZHVDhqMDdoZlFTZUtJeFFMbWdiSWR5RFpIelNUN1NWeGpRTmhCWkVBcEs4bGdYMDdGeEpibVZYQ2xxMHdsSU41QVkwSXdaM0k0RDJBR1kreWVPSEgzMm9sM3l3Sk5WYWtsSXlZTUFBZXZUb0liN0swbUQ2eU9PNE1hQXZPZ0VOWllWWjlWMHF5L0xlWDdjUEd4czgxVTkyN21uZzB3MjdhSnZmemhNVU1RU0RCdzNoL3VDRHhLS05IR3ZISy9MOUhWb1ZSd2dIS1IwMHR1K0JKSVpwRVE0SGFkT21EVjI2ZEtkNzErNVVscGV3eTg1Z2o5R0NWZHZxK1hqMVp6VHYzY1RacC9VaEk5aHpvaFRTdnhPTnJXSTgrZVRqTkRjMHBuaWt0ZFpjY2NVVmhNUGhRK2pzdmxWbC9CZkdTNjNJdEVUK29MN2Q5SkxQL29hVUliL3JyMmlLSzVaOHZJN1Rlclh6Q0lFUWRPbmFuZkx5Q3Rhc1hza2h5eHB3U0xkWC9QTTJ6SmZTVlFtZnoxQ0lsQXlNSDVuRWwzb2RYL1hFd3pEakluRzlYRTRJREJVbFlqbTBLTXlpVGF1Qm5EU2dEOVhWM2Fpb0tHZm56aDE4K09GeTNsdTRnSWNmWHNWZU41UENQbWVpc2tyUTJxRW9IR2JJNFA0RUxQbXdkclRQUVNSWVgxT2o1ODE3NDJDdzFwcXFxaXBPTysyMDFNUTlYWm53MjlNSDh1UHY0YTdUd1VWak1MQjNPeDUvRVJvYmJhUVJBalROUkZpeWJqZTdEa1IxT0JlaEVPUVdGWXdZY0ZML2VaK3QvaGhYRy82MCt5QWhtVXdhUTlLZWt1SjBhUnNkSHAyZVNobUowZ0l3TWJTRlFTTWFzSVhwRFVUZEFDZ0RLVXdNYWZ2dll5Q2xnNGxDYXdPREJHR3hIMHRFeU1vUzVPY0U2ZEt1bkc3dFN5aHZsVVZ4MWxYc3FkbkNvdmNYOHNRVGYyYlpzbVhzM3IzVCs1STFXTm9pa2RlT21CWENGUkVpVG9LVHE5clJ1NnlZb0FhTmk1SmVKZm55czgremZYTXRqazhNWVJvbUYxOThNY1hGeGVMdzBVVzZBUjJ0U2Z6UjkwRENJNkFxTGM2aFMvc3lkaXpmUlZ3cFRETkF3bkhaWEx1VHRSdTNVMUpkQ2xvVERnWG1EeHMybEdlZS9HK2NtUE1WUGN6bmVJNjBiRFk1ekZVQ0VqSWJoY1RRRUhDaldJN3RiY0g2TXpaSEM2UmhZUXBOYmthWUZxWGxsRmIxWXZDWTB5anIwcEhpbGtXRUlpSDI3R3htM1pyZExIaGhEUXRmbjhQNlJTL2kyREdmTFZhVHpIRzkzRTM2SGhha3NzbUxHSXdZMHBmc2tCU0dFR2pwYVg5dHI2M1Z6ejd6TExidCtMcXZndExTVXI3NzNlOStZMDNEYjlpQXZMbVlDV1NZbGpqdDVCNzZuWTlmSVNFeVBLVXNhZEtjY1BoZzVYcE82bDUrZWxEcStVSXIrdmJwUTNGeEN4bzNiL3RYTS9yRFFwK253Q093Y1VVSXFSVkJGU2RUSHlDVFJpd2R3d2haRkJYbVU5YStQWjI3OWFCdnI1NVVkNjBpSzc4RmJqaVhkYnVhV0x0MU4vUGYrb2lhclh2WXNTdUJuVEJCSjlpK3V3SGI4YWhxcENIOWFid1haZ3pESTEwSER6OGszRWFxMnBiVHAyc0psdDRPd1hnQUFDQUFTVVJCVkMrY216VDNWMTU1aGM4Kysrd1E0WlJ6enoyWDh2Snl3VEYwanFnQnBSTWVKUW1ScEhLSlNKZGVIZHBRVnBURjJqME9DUlZBQ0lFckFpeGFzWUZ4NXpueldtZFlRcm8ycGFVbG9tLy9mcnBtUzIyS2J2Y0x4MjlwWlhPU0hWYjZPQnFOOERtcUUxZ2lUa0EzRUhMM0VwSXVXUUZOYVU2SUhoVmQrZDRaSGVuUnNad09sV1ZrWnVlU1VMQngzVHIrOFk5LzhNN0NaU3hidDUyQ1RzT29kL0p3VElVdFFNb1FpQmlHYUVCekFGQWVIWjVLR284WERGM2xlck16SVFtNE5rR2FPWHQ0TlhrUlEwanRvcFZIb0ZWWFY3Zms2YWVmVHUza0N5RW9MaTVtN05peFI1eDE5Wmp6UU9ucXdSb1Q3ZHFZT0xRdHloelJwM1BiZVp2ZlhZZXRneUExQ1dWUXM3T0JWVFc3YWRXOUJOT1FHT0VRSTBaOGg3OCsvN0kvd2poWXRoL2M2ZElITGNjSHFhY00yUDk3WVFoTVM1Q2RaVkZXRUtDZ3RJVHE5bmwwTEc5QmVkdDJGT1lFQ1VoQmRQOCthamV0NHk5em5tYnAwbVY4c0hRRnUzWnVKeEdMa3RBQmpKd1NaTnNFRFJsQlhPbmhta3h0ZXBMZGJoUlRXY1ExS2MrVDNxL3lWcnh0RERkQlVDWG9VVkhPNE9wMkJBMk5jUDMwM0hXWk4yOWVuNlZMbHg3eXNJd2VQWnJ1M2J1TEwrbzhIODI4NTZnYlVMSlhzWEwxT3QyeG9rU1kwaVhEVVBPSEQrekJxKyt1SWlxQ09FcWdqQUQ3YllkM2w2eGxXTGZXS1JENTBGT0gwcUpGTVRzVCtuOXU3L2dYYVJvR1NKT1dMWXNwYTlPYUxsMnI2TjEvQUoxNjlxZE54eTZZR1FHRTBrU2JiVFp2UDhEN3k5YXpkdFZ5M25qMk1XcFdMa0pIbS8xVjV3Qm8xeWZ6bEdoWGdPR2l6R2F2YzY3RG9BSVkya1JwQjYwaVgvb1RDcUV3cENaRHVJdzViU0Q1V2FZUU9nRWlpT3M2TkVlYitjTWYva0EwR2swOUJFVkZSVng1NVpVRUFvRnZ6RkMrRVFQeTRyNm5GTlBRMkZReDYyYy9aK2IwbTNYbkRpWEMwQTZkMjdXa3FySU5pei9ialpBV2pqYVFJc2ppWmF2Wjk5MkJPak5MQ2dTMEtXc2orcDkwa243aG5UVnBhYkgrb2lFRDRPMlVqN3ZrWW02NTlSYmFsTFlrRWdtU3NHMzJOQ2JZVXJ1ZHp6WnNaZm42dmF5cTJjVzIzYzBrYkJjclhrOU56VzdjbUVzQVNPaTBYVGJscS93Q3dwRUU3UURDa0NTRWlTdkFObTBNRWNPMTRwL3pzeDAwZktFMVV0bFVsWmN5cUU5SERHeWs3MFFOdzJUKy9QbDY4ZUxGaDVUb1k4YU1vYnE2V2lUem9XKzY5M05FRGVqelBwZ1FnazlXcjE3LzFodXY4dTRwSjlPcHd6aUVnTUl3NHRSK0hmUkg2MnR4WmRnZkVVRHRuZ01zK3JTV2duN2xCRndYeTFDTUduMEdMNyszQ1FoNFJGVFNSV29UNlFZOXVRSHQ0QzNmS1F4RGNOSkovWmwyK3pUYWxWZnd5Y3FQV2ZUK0F0NWR2SncxdFUySWxsM1puUWlUMEJhdXNIQjFCcGEyeVRHYVBRRmJyYkdUVXVLT2d4REtzeDN0TFUxcWFlSDZRREpEQ2x5aFVFSWpoSXR3VmRxRUtKMXR6UXVuMHBTRXpTaWpoM2FoSkNjb3BBOTVWZHFsdVRuNlQ5NG5KeWVIOGVQSEU0bEV2dlNPdit3N09MNTI0ei9IQ3ptT3cvUFBQMGZkbmwyODhPSUxhT2twOUlRTUdINVNWNHF5VExUam92MGQ4YmkyK1B2N0sybDBxVU1LcE5BTUhEeVlGcTFMazFITlJ6MTZxc2RJQWZLZ0psYXIxaTJaT2ZOSFZMUXJGNXUzYk9IcThWY3pkZXJOUFBYbnAxbno2V2JxWXliMWJvU1lqSkFRQVZ4aEhaekkrOTVBNFhNVUpxV1prdnBSR3BUZkJvQTB3UlJBYW9sVTZUeU5oNG04SUhCZFRjZjI1Wnd5c0RlbUFLRU9xaWJPbno5UHB4TW1DQ0U0Nzd6ejZObXpwemhhZkQvSHJBRnQzTGdSaEdEQmd2ZFp0MzY5TnFYQUVvclN2T0RFWWIzYUU1YWVhckV0Z2lSRUJzcysyY2ltN2Z2eUhGL3V1clMwalJnOGREQ0dxZjB5eThRVkJxNlEyRnJpYUEvVW5wR1J3YzAzLzVDQkp3OFVhTTJUVHo3SnFsV3JpTWZpM2hxejYyQTdEb1poZmlNWG5wRVJZZno0OGJSbzBVSklLVEVNVHh5dnZyNSt5ZXpaczJsdWJrNDFZb3VMaTVrMGFSS1daUjF6aG5OVURDaWRkdis4ODg0akhBcXkvOEIrWG5qcFpWL0IyQ2FzRXcrZk03UVgyV1lDaVlQV0JyWUlzYXZCNGYyUDEyTWowY0xBTWkxR2p6cVZqTERoa3pNRmZHSUNyOEpDYUdUQTRzSnhsM0w1WlpmZFl4Z0dHemRzMG84KytpZ0oyL1k5aThJd0xZelBiY1NKUTFhZGt4b2YvdkFqcmJOOTZFaEZmK1Y3OEg3dDE2OC9aNTExMWlGczh3Qno1ODd0czJqUm9oUmt3ekFNeG8wYlIxVlYxYkZwT1VmS2dBNVZMRDdvaWs4Wk1vVDJGUlVJQWYvdnVSZG9hR3FlNC9GRVE1ZXl3b2w5TzdjaDREWWdjWEdFUlpOajhmNUhhNm1QT2xwaFlRcm8xYU1ENVNVRldGcDVZbklDRURiQ2FjSlFjVTdxVzgyMG0zOUlWbWJtTkxUZzhjZWZZTnZXcmQ3UG9nN09zcEs3VjRkeWtoOWNvL0FJbXdUU2tFakRBRjlhVXByR3djRy9VbjRiNFgrNFlPbkRPQXlEU0NUQ2hBa1RLQ3dzRk9tOFBqdDM3dFIvL09NZmFXaG9TTjFaWldVbDQ4YU5JeHdPcDNwb1gvWTYvRHRJZngyM0hpaTV1eTJscExDb1VKeHoxbWdNSWZoa3phZTg5LzRIRjdwK1lSTUpHZytQSHRhTEhLdVJvRXg0U2FXUndTYzFPMWk5cmhiYjliWVpXdWFGNytuWG93T0dTbUFpUERDN1RwQnBKR2lWRjJiR3JUZlNyazFMSWJTaXBtYUQvc3ZUejZCYzl4REcxQzl4RXg2eFZSbzh3alJOTWpJenljck9RaHBHbW8wZHloVC81UVlrVXhzbXc0WU5ZL1RvMGVMd0h0bExMNzNFNHNXTFUvODJHQXh5MVZWWFVWVlZKVnpYUFdiRDF4RXY0NU9BSisvM0Z0OGJkd24vOWRpZjJGbTNueWYvOGl6RFR6MEZRN21ZVm9EcXFoSzZ0eS9pL2M4YTBEcU1xdzMyTjdtOHMyZzFnNnBLQ1pxS29DR21EZXpiNWRaWDMxM0gxam9ITXlDUUtrRzI1WERaaFNQcDFhV3Mwc0FUNnYzalkzOWt3OFpOYVZ1ckJ6dkM0dlBHTEdoTVExSldXa3JmVTd0ejZxQStsRlYwSUNNN213MDFhMW0rYkJtNzZ1T3MyTFFmT3hTaTBYODQ5UDhReUpJUFVVRkJBVGQ5Ly90RUl1R1VNYnV1eStiTm0vWHMyYk9KeFdLcHU2cXVydWFpaXk3Q05NMURodExIb2lFZDhUTCs0TFFZeXR0M0ZLTkdqZFNQL3ZjVHZEbC9IcXRXcmRGZWhhRm9sUjBVWXdiMzFxdHFYcU1oMFlReXM0alpFUllzcjJIOW5tYmR2U1JEQkhIcFhsWklWWGtoMi9iVmdyQUl5VGhuRGU3R21GTTZFUkRVS0ZleGFzVXFQV2ZPTXg2c1R3aGYzc0FCNlltVzRBYVJwc0lSQnFiamtpMXQycGRrY3ViUWZoUUZoeEtKTjlCVXY0dGx5ejZpb0xnRkx6NzNERy85N2U4VXRLeWdiZmRUcU96Ymh3MzdIVGJWckNXaExXSmsrRldnVjdvbmtTWXBaQ1NDYzg4OWo0R0RCZ3JYZFRGTk0wVVcvdmpqajdOeTVjcVVrV1JrWkhEampUZFNXbHI2VHhQM3J4cU9qdVprL29pWEl1a2Z4ckFDWEQxaEFrODkvVFM3ZCt4Z3pweG42TnExRzVZbENRc1kxS3NUSGQ1Y1JOMm1PRkVkd1JZaHR1N2J6OXNmcjZkalNUVkJwY2dMQ0RGc1FKVmV1R285TVRkS3Y2NXR1ZXljd1dSYmhyQ0VoNGQrNHM5UHNtM2J0aFJqck5DR1grNTdwRE5DQjBFb3BGRGtoTU9jVkZWSlZYa1dzYVlkVEx0OU92czJieUxSZEFBTVNUQWM1ckp4WXpFTWc1M2J0MU83N3gzcXdxVVVkZTVOZFkvT2ZMcCtNL0ZtcjRKMGthbWR0ZlFjcUYyN2NxNjc3bG9zMHp4a0RMTm16UnI5K09PUEg1SXJqaG8xaWpQT09LUHk2NXE0SDJsRTRsSEhCWFR2M2wyY2VlYVp1SzdMYzg4OXg1WXRXNUtyQmhSa2h5cEhEeitaaUk1aktRZXdpTHNSM2x5NG1yMk50blkxV0ZMUXIwc1psWVZCMnVkSnJqNy9WRW9MTWtVQWpYWnNWaTFmcnA5Ny9ublBHd2lSNGl0S05mT0VUeW1ISW1UWTlPbGRSWU1kWmR1QktLKyt1WVRkZTV1SU56Wmk0ZlYzNHJFWTc3NzdIbWVNR0k1cENvUndpQ2RpckZtM2dTMjFPK2pYcnc5RjJXRXNiSkFDVjFpSHhFalROTG44OHN2bzFxMnIwSUJTTGtvcEVva0VEenp3Z05mZThIT2wxcTFiYytPTk41S1ZsVlh6VFFMbGoxa0RTdTR6VFpvMGlYQTR6TWFORzNuNjZhZHhYUWVKUTBqcW1pRjlxcWdxelNPazRoaElFaUxNNmsxMUxGcTFGVzJZR0xpVUYyV0k3L1JyejhUemh6R2dRM0ZsRUJlcGJiU3llZXhQajdHdGRydmZKdENIRFQ2U3VvUXVramk5cTlwd1lIY05pRGhyTm15bXRpNEtyb1VsQlZLb1pMM0dsaTFibURSNUVyZmNjaFBkdW5ZZ0pPS1liaFAxdTdheGYrZG1MamxyQU5teWlaQ3cvNGx4dnJxNm1pdXV1QUxETUpGK2VRN3c5dHR2NitlZmZ6N2xJUXpENEtxcnJxSmZ2MzZDNCtnY1ZRT1NVbUthSnYzNzkwOTVvVWNlZVlUdDI3ZHJwVFFCUTFPU0V4QVhqUnhFSmswSUZjTkJzaThSWU82N3F6bVEwRXUwZ0xEVVhISCtHZldqQnZVWWtTM2RHcUZkQkxCczJYTDl6TFBQa2JCdGxITFJydTJ0K0tRMWNKUUJobXFtWTFrZVdicUJvbENNYzgvc3c5NmRtN0NNQUZwYlB1ekNUNjZsNUFkVHAzTHE4Rk9aY2Z1dHZQcmlITzY4NlQ4NHBYTXhuZG9VMEtabFBpMXpBb3dlM0pPUU9vQWhFaUFsaGpUSnk4dmpoei84SWExYXRSSktLYi9WSk5pMWE1Zis5YTkvelo0OWUxSVYzY0NCQXhrL2Zuekt3UDR2SWV4YlU4Wi8wUWNMaDhOTW1EQ0JuSndjdG03ZHlpT1BQQXJTUUxrdXBuWTVwVThIdWxVVUVhQVpwSTF0aFhoLzFSWldyTi9WeDFFYXBSMHlnakkveXhMemhXdWpoRUhVMWp6MitGUHMzRjNuNVRuSkR5Y09yYnNNSjBwdXlLVnJlVDRWK1NHbVRieUFZVDJLR05hN2dyQWI4d2kvVGVremYwakduSFUyazZaTVFRQ0dvU25JRFROcVNGZCs5c1BMNk4yeksrOS91SnpmUHpxSGdvSUM4ck15a0s3dENTWm94ZGxubjgzSWtTT0ZZUmcrRlIwa0Vnbm16Sm5EZSsrOWw4cDdpb3FLbURwMUtpVWxKU0lkL25MQ0EzMUJaMXByemVEQmc4WElrU01CZVB6eHgvbHM3WHF0TkpnNEZHVWE0dHlSSnhHeDRrZ1J4UkdDK29URmEyOHRKdVpTZ1RSSTRtdTBsTGpDNUxOTlcvWHJiNzRMTXVDdk9SLzI0VFNnRlFGc09wVG1NL0tVYXNhUEhVbFpicGg4dytYU2tTZlRxYlNBc3JMV2RPaFNSYy9lMVl3Y09aSWYvK1RIWkdSbGVZMUg3V0FJRjlPSmt4dVNiTm01bDYyTnNDTWU0STMzbGxMV29Rb2RDS0tBOHJadG1UcDFLdUZ3T05YemtRSldyLzVFLys1M3Z5TVdpeUdFSjhRN2R1eFlUanZ0dEpUeEhPbkU5N2hPb3NIcnlvWkNJU1pObWtSaFlTRzF0YlhNZnZoaFQ4bFFhUUpvVHVuZGpqNWQybURxR0ZvNXVFamVXMTdEcXMzMTYxMHRNSVhYMTFIQ29pR2g2MTU4WXdFSDR2Z2JvNTY5dU1udExhSDgxck1CS2s2M0RxVzB5c3FpUlhZWVN5Y0lHSkxpL0V3NlZiU2xzcUtDck53Q2xCRFUxZGZSME5pUTZoaHI1WlhvbG5SUWRnd3pGQ0l1UEEyejJoMTdzVUlSQkpKd3lPTEdHNituVTZkT0lwbDNTU21KeHFJODhNRDliTml3SWVXTnE2dXJ1ZUdHRzdBc0M5TTB2NVlROXEwYlphVEg0blFOcmVycWFuSHh4UmZqdWk1L2VlclBMRnE0VUFzQ1NGZFRGTGJFeFNOUHBrWEVJcVRpS08yd3RWRXdkK0ZuUkIweHgvSm5xbkVrSzlmdHlIdG44Um9jTndqQ1FHaHZhZGhKTW1FSTEvdW8yaVFjbEFRdGwraStCZ0xDUlpvR0RhNWczb0pWdlBIV2U3ejE1bHNzZUhjaFM1Wjh5S0xGN3pQcnJydG9qa1Z4dFVaSTAxTnBGUktrUnJrdXduWTlZbk5IRTIvWVQzRmhOcWVjT29oTExoMWI3M1dnZFlwazZzVVhYOUJ6NXN4SlFYeHpjM09aT1hNbWJkcTBFZWtMZ3VuOW42OHl1dmkzODBESlkxa1cxMTU3TFdWbFplemVzNGZmM3Y4QSsvY2ZXT0s2RGdZdWZicTBabGovam9SRURHMVl4RnlEdHhhdlpPM1dmUmNtbEFkQ2R4M0ZQOTc1Z0taNHdsdkRTVUpKaFJmaXBQSWdGcDR2OG9Uck5DNW13QlB4ZFpEc2JvankzT3NMaVJFR2FTSHh3bzNyS2w1LzdUV2VldXBKREduZ0tIQ1ZZTDlqc2RjSkVBa0dDUWtiV3d0aVpvUllQRWF2TGhYY2NjY004dkx5OHRQRDBmcjE2L1hQZi81em90Rm9TdGZyaGh0dVlPalFvVUlweGZGU3RoOVRCaVNFb0YyN2RtTEtsQ2tZaHNIOCtmTjU2ZVZYK25oT0kwRk9RSWdMVCs5TlJYSEVtOVFiQWJiVng1aTNZQlhOcm5HTlFpQ2xTNXV5MXQ1R2d3WlNUM0p5OVZoZ0lKQSsrWk5HSXd4Sk9DZENBb3VFTVBuYm9yVnMyTk5NM0lpZ2xiY1hxcFQzYjdYajhPdGYvSUlOR3pmeXdRY2Y4c2gvLzRYZi9Ha3UwMzd6Vit5RVEzN0VSQWh3cEVWR3lHTHFwUCtndW1jUGtUNXRqMGFqUFBEQUE2eGN1VEwxMmM4ODgweXV2ZlphRE1QQU5NM2pKdWM1SnBMb1E3clRoc0VsbDF6Q3dKTlBvcW1oa1FjZWVKQXRXN2RwS1JTV3R1bGFWaURPSDlHZmlHNUVhRVd6YS9HMzkxZXlkdnYrMlk0d2tOTGc1SDZkS1cxVmhDbGRVRTdhcW1wcTVmRGdmcGlRYURQRWlzKzI4K3k4RDNqNzQ0MHNYTDZScUxKSXVONTJxdGF1eHpTa05Wb3BtaG9hK2RVdmZzWFo1MXpBMUp2djRKbFgzbUhoeWxwV2Y3cUIzdDA2RVpGeGdrVHBVSnBQejg3dFJGSnVNZ25OZU9PTk4vUlRUejJWK3N3ZE8zWmsrdlRwRkJjWGkrUUE5ZlAwdlE1UEFkSmZ4MG80azkrazkwbGVVbkZ4a1pqNmc1dkl5OHRsK1lybC9PYUJCM0MxUXVJUWxDNW5EZTFHdjhwOGdqcU9FZ0UyN1c3bTlmZFcwcVRrSEtTa0pEK3pjdFNwQTVBa1FDZkFsMXNneFFpclU0MUVCd3NyczRCL0xGbkR2WDk4bFptL2U1NFc1WjJKaERNeGhjZGZpSlM0MmdNV0NzUGdPeU5HOE1vcmM2bXJiOEIySkxZTzRZZ010dTFwcGpuYXlQQytsVncwdEFzWGp4bmljeDZLMU1PeFljTUdmZSs5OTdKdjN6NlVVbVJsWlhIYmJiZFJYVjB0dnU2Ny9MY0xZVW1vaDFLYTRjT0dpZTlkZWlsQ1N2NzR4OGQ1NDI5LzB3bkhyaEM0RkdkSU1XWHM2ZVFGWEtRd2lCSGlwYjh0WlAzMitnc2REUmxDMTN4bmNDODZsTFhBVTM1TzNTeEtnQ3Q4U1hremdLc005allxTnUrT3M0dGlOamNHV0xCa0ZYMTc5eVNJRFRpNFNxTjkrR3BXVmdhUlNJUnQyN1lqWlFDMGlTRU1sQzJ3elN4V3JmNkU4MDdweXAzamg0dDJCVUVoZktTajFwckd4a2J1dmZkZWxpNWRpdU00QkFJQmJycnBKczQvLzN4eFBKWHEzNWdCZmRtVGtjNjJKYVVrRkE0emVjcGt1bmJ0UmxQREFXYk51cHNkMjNldDE5cFRpNjl1MzBKY2VPYkpCR2xHUzhuZXFPYTV1ZThSdC9VU2dVdEJib2E0N09MdlloaytmbEJJdndKVEIrZGdyaWJ1Q0Q1ZHQ1Rm1XMkNiRVdJeXpPYnRlOWk3ZXk5dFMxb2lwSHN3ZTVJR0F3Y081TzEvL0FNcGhMZVpZWGlDZW9acDRUZzI3ZG9VMDcxZExpSFZoS0VUYUsxVGsvYm5ubnRPUC9IRUV5aWxzQ3lMTVdQR01HWEtsSW1CUU9BUWxjR3ZzL0k5N2czbzgrQWM2UTNFOUpJK09kcVFVb0swYU5ldVVzeTRaU3JaR1dHV0xmMkkrKytmVGFMWkJpMEpCUXd1R042VkFaMHlNVVNjWnJKNGU5RW1WbjIydTA5TUdHaWgrTzY1SStuZHF5dGFDajhQVWw1VjVnUGZVUkloRERadTNreHVmZzRtRFJnNDJNcmlzL1ZiNkZYZGxWdHZ2cDZaczM3RXozOXhMdy8rN2tHdXV1b3E2dmJzOFVta2JMU3dTZmdpd3RseVAyZWUxSTdpM0pDUVZoQXRERXpmTUZhdlhxMW56WnFWYWhoV1YxY3phOVlzOHZMeUhqNWMrL1QvT3E3NHQ2M0NQdThwR2pWcWxMajg4c3R4WGNXZi92UW41czZkcTVYMnlLVktDN1BFOTg0WlRvc3NBMHNvdGgrSThkZDVTOWdmZGJUQ3BLaW9wYmh1NG5Wa1pXVDRCRS9HNGRZTlN0UFEwRXdrSTVPQ3pBaEJiV01xRzIxSHljc084UDBicm1IYUxWTzUvdnJKWEg3NUZZd2FPWkt4WXkveWNocnBEV0tESWtHR09rQmx5MnlHRHVpQm1kelFFQjRBYk8vZXZYVjMzbmxuYXRMZXRtMWI3cjMzWHRxMWF5ZjRscDFqeG9DU3NNOWdNTWd0dDl4Q256NTkyTGR2SDdObXplTFROWjlxUTBwUDZxbGJXZjBsWi9ZbklxUEVSWUEzUDk3QUJ5czM0UWlCeG1UTTZMTVpObVFJQmdMaHFOU0tUV29tTHlWeHgyWFZKK3ZvMDdVYkllVVNWRFloWWRPMmRUNmhnSmRxR3hJTVEyQmFGalB1dUlOKy9mdUNWbGdHWk1rNG5Wc0d1T1RNZ1pRWFpWY2Eyb1BOYWdTTnpWRWVmUERCdk5kZWV5MjFXWEgzM1hjellNQUE4VTN5T1g4ckRlaHdONXlFY0xadTNWcmNkZGRkdEd6WmtsV3JWakhySnoraGZ1L2VPbE83WkVvM2YreUlQZ3pxM2hZcFhQWkdIWjU2NVQxMk5NUzFMU1M1dVlWaTBxVHJLTXpMUStJVE9naFNqVVJ2aThPaXJyNkIyaTIxREQ5MUtCM2JsMU5aMFliUzBrSlBOZGxmRlJWb2xJS2N2SHp1dnZ1bmpCNHppbEdqeitUMGs3dHorVm1ET1B1MFhoT0RXdFhnNDY3dGhNMGJiOHpURHo3NElGcHJzckt5bUQ1OU91ZWNjNDZ3TE90enc5YVhsZVBIWXVmNXFJNHkvaTk5b2tHREJvbWJicnFKY0RqTXl5Kyt3TU1QUFpqbk9EYW0wTFNJSUs0ZGV4b2RXMmNnY1ZpeFlUZXZ2ck9HQkZ5akRZTkJnNGRVbm5QdXVaaVdpVThJNUpmMTJwdTNDUk50QkZtL2FSc2J0dFRTczA5ZjJwU1hzL0tUR3Jac3FTV1I4SkNOU2JPcnJkM0I3eC82UFlzV3ZNZjhWMTVnNjdxVkRPamVoaURxWVJPTkZCTGxhajc1WkkyKzg4Ny9aTisrZlVncG1USmxDbGRlZWFXd0xJdmp1ZHQ4WElTd3cwOGdFT0RLSzYrOForellzV2psOHVEOUQvRFNxM08xVmk3U2pkR3RKRmRjZStGd2lqSU45cnNtejg5N2owMDdEOHkyTllReU1tc21UYm1lMWlVbC90TXJVdU1OejU0TUZBWnhHV0RGdWsyODl2YTdOTnFLZHhjdTRhS0xyMkRTcEp0NC9iVTNxSzNkeHRhdFc3aDZ3alU4LzhKTDdOMnpoNXpNRENaZGN3VXRDM09GNWQrZWNxRysva0RkOU50dVk4M3ExUVNEUWNhUEg4L05OOThzd3VGd0N2UHpiVHpIN0tmU1dwT2RuVDF0K3ZUcERPalhsL3E2T243MG81a3MrM2k1TmdVRWRJd1JmY3RIWEhyMk1JeWd5ZFpkZFR6NzB0dEVYWDJOcXhWVm5UdUtTWk1uRWJBQ2ZnaEwrVG1mYU56QWxpYTJZVkc3dTU0RlM1WVJkU1VEQnA5S1kxT0N1KysrbDhtVEp6UDc0Zi9pZ3c4K29MeGRPU1BQL0E2Ly9PVTk5T3hlSlF5ZmhrNElpZEx3MDd0L2x2ZjN2OC9ITkFUanhvM2pSei82MFRNWkdSa1lobkdvZ1BBSkEvcDZSaGxmZGFlcXZMeGMvT0kzdjZWTnV3cldybDdOakZ0dlk5UG1IVnJLSUZsU3o3Lzg5RTVjUEtRRVV3UjVhZUZXNWkvZk1qc3FFMmdqZXZwVjQ2OGNjY3FwZzVDR0lHQWFYazZrQlVJZlpKYVhXZ0pCR2hJaEZxK3U1ZkduWHVERHhZdkl5Z2hUVkZDRUcyMW01QmtqS0Nscnk1aHp6K1BjTVNORkVCZFRLd3dKcm1QejJHT1A2b2NmL24xcW0zVFdyRm4xT1RrNUZ5WERlZnJvNGN2eXdNUHY1MWdwMVk5TEQ1VHU4bnYxNmkxKytjdGZrWitmenp0dnY4TlBmbklYOWZ2Mi8wd0tRVzdRRWxlZmV3WkRlcmVudVhrdmMxNTRnOW82cFYyWk9UK1VFWngvKzR3WkZCWVc0ak8xK0dNeXpjRmhLNkNGeDExb21MaEtzM0hqQnQ1ODh5MmVlT0lKSG5yb2QvejFyMzhsUDcrQUN5NjRZQVJvajN0SWU5dXU4K2ZQMTdObXpjSnhIQzY4OEVMdXV1c3Vjbk56ODQvMTVQZmZJb1NsSy9BTkh6NWMzSEhISFdSa1pQRDAwMC96NjEvLyt0Wm9ORXBBU05wbVI4VGt5NFpUM2JVRmE5WnQ0YSt2THFQUk5wZGdtUFRwMDA5TXZQWmFUT3ZneEZ1Z3ZlbjhvZTk0c0dPTmwwUUxJWEFjaHdFREJuRFBQZmVRbVprNVB5a3RJSVJneFlvVmV2cjA2ZXpaczRmdmZlOTczSHZ2dmZXRmhZVWkyV1grTm93cXZ2Rk85TmRoUk1uKzBPV1hYeTV1dlBGR1ROUGsvdnZ2NTRrbm50Q3U3UkJRaWc1RkVUSDVpck5vVzFMQzYzLy9tQ1VydHZXSmExVmhCb05NbUhnZGcwODVKYlhtSTdSQ0hrWXVyYlZmcXJtT3A3WG9rMGxWVkZUdzBFTVBVVkpTY3NpaTM3WnQyL1FQZnZBRDFxNWR5K1dYWDg3UGYvN3pld29LQ3ZMVHU4emZsbm5YY2VtQjBuT0JKS2wyT0J6bSs5Ly92cGc0Y1NMeGVKdzc3N3lURjE1NFhpdlhKdWpHNkZhU3QvUUgxMTFFVm5hQUovN3lQTHYyUk5jN1FsQllYQ1IrOHBPN0tDa3RSV3ZsQ1prb041Mk13OTk5OTJDT1FraWtFTFJzMlpMWnMyZlR1WE5ua1Z4UlRnNUpwMDZkeXJKbHk3amhoaHU0Kys2Nzc4bkx5NXVXREwySGt5SDhLMzJ4WXdteWNWd2EwT0VYbTlSRHo4ek1aUHIwNlNNbVRKaEFmWDA5UDV4MkN5Ly83WFd0WFpkY29mcFdWK1RlYzlQa2M3RGRacDc1Nnp3YzIwVnJRWFYxdFpoeDUzOFNDQVhSeWtYaVZWSHA3K0VCMzcwUWxwdWJ5MzMzM2NmZ3dZTkZ1amRwYW1xcXVPMjIyL1JiYjczRkhYZmN3WXdaTTBUU2VQNGRQTTV4YVVESkxuVnl5cDJkblQxLzVzeVpJeVpNbU1DT1hUdjU0WXpwTEZqd2dUYTFKa0o4V3RmMmhVeTU3akpxYSt0WThQNVNUWkp2NTVJTHhiaHhsMkJJRUdrNzdDbjRxeEJvcGNuSWlQRFRuLzZVa1NOSGluUXZFSTFHdWUrKys5YS85dHByL09wWHYrTDY2NjhYU2VMTFk0Mjc4TitpRS8xVlFlUEpQek5OTXpYdXlNN09uajlqeGd5dXVmcHF0cTZ0NGNhYnBySms2VWM2Z0VHZUVLSlgyMkp4NDlYbjhlR3FkYXpidUZVck8wYkVjTGg1MHFYMDdkb1dTemRpQ1lFV05xN1pqRFFjTEcwUU5zUGNNV01hbDF4NllXVVNKYWlVd25WZC92Q0hQK2hYWG5tRjJiTm5jOUZGRjRua3o1TmtHdnRYWmwxSElrd2RUUUQrY2VPQjBpOGorYVRuNWVXSm1UK2VXVG4xcGg5UVUxUERkVk91WitXSzFkcFVFQmFhdHEzenhFWG5qMmJMbGkzRVlzMXpoQUdGT1FFeCtZclJkR3dWd1kzdlEwaUpxMDFzMTBVWURwTnZtc3o0YXlkVm1zRklUWktlTHg2UDg5UlRUK20zM25xTFJ4NTVoS0ZEaDRya0NzN2hQRUVuUE5CeGNwUlNCQUlCc3JLeWFtNi8vWGJ4MDUvK2xJMGJOM0xWVlZmeDBVY2ZlVVFycmtQcmdpd3grT1Mrd2d5RkwzSXhNRXlUem0zeko5NTYxU2phdFRTdzNCaGhaUkdSaWd2T0g4eVU3MStDRlFuWGFIR3c3SC85OWRmMW1qVnJlUFRSUnlkMjZOQWhCWmovdHM2M3Z2VUdkTGdha0dFWVRKdzRVZnoydDcrbHJxNk9TWk1tc1hUcFVtMUlRUkFiS1J5a0ZjQ1ZCbWlYVE9FOFBLUnJxYmh4M0dtVVIyenk0dnU1NVBUZWpEOXZNSmxXczlCdXdoK213dUxGaTdVUWdwa3paNHFjbkp5SGt4VmhlclgxNzN6TWIvTE4vOVdLSlQyY3BiTjlYWERCQmFKMTY5YjY5dHR2NTdycnJ1T2hoMzZuKy9idEtRd2tydkxZWGkwSmhuYXdjQm5kcjVNUVRhN2V0TzBBNHk0OG1lSlFWSmpFNmdnRTg1VUxCeG9hcnlrcksrUGtrMDhXeVh3b3ZVT2VQcW80MnZmelZlRENKenpRLzhLZ2tqbko0TUdEeFdPUFBVYjM3dDI1NXBwcldMUjRxUWFKS1NXVzFrZ0ZXa3ZBSXF3Vlp3L3RKcTY3ZExBb0Rna1JVQUtwUXQ1Q29DSEl5c3A2dUZXclZ0OUtJTmdKQS9xY0JselNHMVZVVklqNzdydXY4dW9KMTNEdDVKdjQrOS8vb1oyRWpWQ09QNml3Y0VRQVF3WUpTRVhRakNHMURXNEdXbVZqRThCT1V4aHlYZmVFcFJ6TkVKWk1MUCszVCs1WHpTY081d0JNR2s1eXcwTnJUVzV1YnMyVXlWTkUzLzRuNmQvODZwYzA3Sy9YWjQwWkxTeHBvYlZDQzA4VVZ3ckRFNWt6TFpMMDg0WVFDTU5FK0luNjBlcnZmRjN2Y2ZqOUhGY1VkK2x6SU9WektYL1I2NHM4eWYvbWRiZ2hKZDliKytQMzNqMjdpOTg5K01BOWRmWDdlUEhsVjNVMEZrTXAxNWUxVlFna2tnQmFDMjhYVEdnTXJaSCsvNWVlNXh6dnIrT21rWmhzdkgwVlVaQWozZkNTVXBLZG5UM3R5aXV2RkQxNjlHRFZxbFU2Rm92OTI0d2NrZy95a2JyZnBTaWt6UUFBQUZaSlJFRlVyejJFdmZ2dXU0ZTQwUy83b3RMLzdraUdpRFJxR1dIYk5uUG56aVVTaVh4cllhYUhHNURXT3ZXOW5EZ256b2x6NHB3NEo4NkpjK0tjT0NmT2lYUGluRGduem9sejRwdzRKODZKYytJYzlmUC9BVVRwNStKTzI1ak1BQUFBQUVsRlRrU3VRbUNDXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0IH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJy4uL21vZGVscy9tYXRjaCc7XHJcbmltcG9ydCB7IERhdGVVdGlscyB9IGZyb20gJy4uL3V0aWxzL2RhdGUudXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWF0Y2hTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3NpdGVVcmwgPSAnYXBpL21hdGNocyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgZ2V0TWF0Y2hzKCk6IE9ic2VydmFibGU8TWF0Y2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9zaXRlVXJsKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ0Vycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIT0ZDTWF0Y2hzRm9yVGVhbShlcXVpcGU6IHN0cmluZyk6IE9ic2VydmFibGU8TWF0Y2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9zaXRlVXJsICsgJy90ZWFtLycgKyBlcXVpcGUpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhPRkNNYXRjaHNGb3JXZWVrKGRhdGU6IERhdGUpOiBPYnNlcnZhYmxlPE1hdGNoW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fc2l0ZVVybCArICcvd2Vlay8nICsgRGF0ZVV0aWxzLmZvcm1hdERhdGUoZGF0ZSkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3REYXRhKHJlc3BvbnNlOiBSZXNwb25zZSk6IE1hdGNoW10ge1xyXG4gICAgICAgIHZhciBkYXRhID0gPE1hdGNoW10+cmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBkLmRhdGUgPSBuZXcgRGF0ZShkLmRhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ0Vycm9yKGVycm9yOiBSZXNwb25zZSwgY2F1Z2h0OiBPYnNlcnZhYmxlPE1hdGNoW10+KTogT2JzZXJ2YWJsZUlucHV0PE1hdGNoW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL21hdGNocy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIERhdGVVdGlscyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1NhbWVXZWVrKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSkge1xyXG4gICAgICAgIHZhciBtb25kYXkxID0gdGhpcy5nZXRQcmV2aW91c01vbmRheShkYXRlMSk7XHJcbiAgICAgICAgdmFyIG1vbmRheTIgPSB0aGlzLmdldFByZXZpb3VzTW9uZGF5KGRhdGUyKTtcclxuICAgICAgICByZXR1cm4gKG1vbmRheTEuZ2V0RGF0ZSgpID09IG1vbmRheTIuZ2V0RGF0ZSgpICYmIG1vbmRheTEuZ2V0RnVsbFllYXIoKSA9PSBtb25kYXkyLmdldEZ1bGxZZWFyKCkgJiYgbW9uZGF5MS5nZXRNb250aCgpID09IG1vbmRheTIuZ2V0TW9udGgoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQcmV2aW91c01vbmRheShkOiBEYXRlKTogRGF0ZSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkKTtcclxuICAgICAgICB2YXIgZGF5ID0gZC5nZXREYXkoKSxcclxuICAgICAgICAgICAgZGlmZiA9IGQuZ2V0RGF0ZSgpIC0gZGF5ICsgKGRheSA9PSAwID8gLTYgOiAxKTsgLy8gYWRqdXN0IHdoZW4gZGF5IGlzIHN1bmRheVxyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGlmZikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJldmlvdXNXZWVrKGQ6IERhdGUpOiBEYXRlIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGQpO1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSA3KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXh0V2VlayhkOiBEYXRlKTogRGF0ZSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkKTtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgNykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0ZShkOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IFwiXCIgKyBkLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGRhdGUgKz0gXCItXCJcclxuXHJcbiAgICAgICAgaWYgKGQuZ2V0TW9udGgoKSA8IDkpXHJcbiAgICAgICAgICAgIGRhdGUgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgIGRhdGUgKz0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICAgICAgZGF0ZSArPSBcIi1cIjtcclxuXHJcbiAgICAgICAgaWYgKGQuZ2V0RGF0ZSgpIDwgMTApXHJcbiAgICAgICAgICAgIGRhdGUgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgIGRhdGUgKz0gZC5nZXREYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdXRpbHMvZGF0ZS51dGlscy50cyIsIlwidXNlIHN0cmljdFwiO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uLy4uL09ic2VydmFibGUnKTtcbnZhciB0aHJvd18xID0gcmVxdWlyZSgnLi4vLi4vb2JzZXJ2YWJsZS90aHJvdycpO1xuT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUudGhyb3cgPSB0aHJvd18xLl90aHJvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm93LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEyNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL2NhdGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMjcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9kby5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg4MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbmltcG9ydCB7IEFjdHUgfSBmcm9tICcuLi9tb2RlbHMvQWN0dSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3R1U2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsID0gJ2FwaS9hY3R1cyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgZ2V0QWN0dXMoKTogT2JzZXJ2YWJsZTxBY3R1W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fc2l0ZVVybClcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKTogQWN0dVtdIHtcclxuICAgICAgICB2YXIgZGF0YSA9IDxBY3R1W10+cmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBkLmRhdGUgPSBuZXcgRGF0ZShkLmRhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ0Vycm9yKGVycm9yOiBSZXNwb25zZSwgY2F1Z2h0OiBPYnNlcnZhYmxlPEFjdHVbXT4pOiBPYnNlcnZhYmxlSW5wdXQ8QWN0dVtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuaW1wb3J0IHsgQ2xhc3NlbWVudCB9IGZyb20gJy4uL21vZGVscy9jbGFzc2VtZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJhbmtTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3NpdGVVcmwgPSAnYXBpL2NsYXNzZW1lbnRzJ1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NlbWVudHMoKTogT2JzZXJ2YWJsZTxDbGFzc2VtZW50W10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9zaXRlVXJsKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDbGFzc2VtZW50c0ZvclRlYW0oZXF1aXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENsYXNzZW1lbnRbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9zaXRlVXJsICsgJy8nICsgZXF1aXBlKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ0Vycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlc3BvbnNlOiBSZXNwb25zZSk6IENsYXNzZW1lbnRbXSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSA8Q2xhc3NlbWVudFtdPnJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ0Vycm9yKGVycm9yOiBSZXNwb25zZSwgY2F1Z2h0OiBPYnNlcnZhYmxlPENsYXNzZW1lbnRbXT4pOiBPYnNlcnZhYmxlSW5wdXQ8Q2xhc3NlbWVudFtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvcmFua3Muc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG52YXIgc2VtdmVyID0gcmVxdWlyZSgnc2VtdmVyJyk7XG52YXIgX19jb3JlX18gPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgY29yZVZlcnNpb24gPSBfX2NvcmVfXyAmJiBfX2NvcmVfXy5WRVJTSU9OICYmIF9fY29yZV9fLlZFUlNJT04uZnVsbDtcblxuLy8gT25seSBwYXRjaCBpZiB5b3UncmUgb24gQW5ndWxhciA+PSAyLjEuMSBhbmQgPCB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIChpbmNsdWRpbmcgcHJlcmVsZWFzZSlcbmlmIChjb3JlVmVyc2lvbiAmJiBzZW12ZXIuc2F0aXNmaWVzKGNvcmVWZXJzaW9uLCAnXjIuMS4xJykpIHtcbiAgICB2YXIgX19jb21waWxlcl9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbiAgICB2YXIgX19jb3JlX3ByaXZhdGVfXyA9IF9fY29yZV9fLl9fY29yZV9wcml2YXRlX187XG5cbiAgICB2YXIgcGF0Y2ggPSBmYWxzZTtcbiAgICBpZiAoIV9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddKSB7XG4gICAgICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAgICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgfVxuXG4gICAgaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcbiAgICAgICAgcGF0Y2ggPSB0cnVlO1xuICAgICAgICBfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX191bml2ZXJzYWxfXyA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuICAgIGlmIChwYXRjaCkge1xuICAgICAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICAgICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgICAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFnZW5kYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhbmtMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlYW1QaXBlIH0gZnJvbSAnLi9maWx0ZXJzL3RlYW0nO1xyXG5pbXBvcnQgeyBBZ2VuZGFQaXBlIH0gZnJvbSAnLi9maWx0ZXJzL2FnZW5kYSc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgQ2FyZENvbXBvbmVudCxcclxuICAgICAgICBDYWxlbmRhckNvbXBvbmVudCxcclxuICAgICAgICBBZ2VuZGFDb21wb25lbnQsXHJcbiAgICAgICAgUmFua0NvbXBvbmVudCxcclxuICAgICAgICBSYW5rTGluZUNvbXBvbmVudCxcclxuICAgICAgICBUZWFtUGlwZSxcclxuICAgICAgICBBZ2VuZGFQaXBlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE1hdGVyaWFsTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2NhbGVuZGFyLzp0ZWFtJywgY29tcG9uZW50OiBDYWxlbmRhckNvbXBvbmVudCwgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAncmFuay86dGVhbScsIGNvbXBvbmVudDogUmFua0NvbXBvbmVudCwgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWdlbmRhLzpkYXRlJywgY29tcG9uZW50OiBBZ2VuZGFDb21wb25lbnQsIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cclxuICAgICAgICBdKSxcclxuICAgICAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cclxuXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg4MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBwbGF0Zm9ybV9icm93c2VyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJyk7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGNvbXBpbGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xudmFyIEJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUyA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUywgU2hhcmVkU3R5bGVzSG9zdCA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLlNoYXJlZFN0eWxlc0hvc3QsIERvbVNoYXJlZFN0eWxlc0hvc3QgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21TaGFyZWRTdHlsZXNIb3N0LCBEb21Sb290UmVuZGVyZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21Sb290UmVuZGVyZXIsIERvbUV2ZW50c1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbUV2ZW50c1BsdWdpbiwgS2V5RXZlbnRzUGx1Z2luID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uS2V5RXZlbnRzUGx1Z2luLCBEb21BZGFwdGVyID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uRG9tQWRhcHRlciwgc2V0Um9vdERvbUFkYXB0ZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5zZXRSb290RG9tQWRhcHRlciwgZ2V0RE9NID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uZ2V0RE9NLCBIYW1tZXJHZXN0dXJlc1BsdWdpbiA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkhhbW1lckdlc3R1cmVzUGx1Z2luO1xuZXhwb3J0cy5CUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlMgPSBCUk9XU0VSX1NBTklUSVpBVElPTl9QUk9WSURFUlM7XG5leHBvcnRzLlNoYXJlZFN0eWxlc0hvc3QgPSBTaGFyZWRTdHlsZXNIb3N0O1xuZXhwb3J0cy5Eb21TaGFyZWRTdHlsZXNIb3N0ID0gRG9tU2hhcmVkU3R5bGVzSG9zdDtcbmV4cG9ydHMuRG9tUm9vdFJlbmRlcmVyID0gRG9tUm9vdFJlbmRlcmVyO1xuZXhwb3J0cy5Eb21FdmVudHNQbHVnaW4gPSBEb21FdmVudHNQbHVnaW47XG5leHBvcnRzLktleUV2ZW50c1BsdWdpbiA9IEtleUV2ZW50c1BsdWdpbjtcbmV4cG9ydHMuRG9tQWRhcHRlciA9IERvbUFkYXB0ZXI7XG5leHBvcnRzLnNldFJvb3REb21BZGFwdGVyID0gc2V0Um9vdERvbUFkYXB0ZXI7XG5leHBvcnRzLkhhbW1lckdlc3R1cmVzUGx1Z2luID0gSGFtbWVyR2VzdHVyZXNQbHVnaW47XG52YXIgVmlld1V0aWxzID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzLCBBbmltYXRpb25LZXlmcmFtZSA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvbktleWZyYW1lLCBBbmltYXRpb25QbGF5ZXIgPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5BbmltYXRpb25QbGF5ZXIsIEFuaW1hdGlvblN0eWxlcyA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvblN0eWxlcywgUmVuZGVyRGVidWdJbmZvID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uUmVuZGVyRGVidWdJbmZvO1xuZXhwb3J0cy5WaWV3VXRpbHMgPSBWaWV3VXRpbHM7XG5leHBvcnRzLkFuaW1hdGlvbktleWZyYW1lID0gQW5pbWF0aW9uS2V5ZnJhbWU7XG5leHBvcnRzLkFuaW1hdGlvblBsYXllciA9IEFuaW1hdGlvblBsYXllcjtcbmV4cG9ydHMuQW5pbWF0aW9uU3R5bGVzID0gQW5pbWF0aW9uU3R5bGVzO1xuZXhwb3J0cy5SZW5kZXJEZWJ1Z0luZm8gPSBSZW5kZXJEZWJ1Z0luZm87XG52YXIgU2VsZWN0b3JNYXRjaGVyID0gY29tcGlsZXJfMS5fX2NvbXBpbGVyX3ByaXZhdGVfXy5TZWxlY3Rvck1hdGNoZXIsIENzc1NlbGVjdG9yID0gY29tcGlsZXJfMS5fX2NvbXBpbGVyX3ByaXZhdGVfXy5Dc3NTZWxlY3RvcjtcbmV4cG9ydHMuU2VsZWN0b3JNYXRjaGVyID0gU2VsZWN0b3JNYXRjaGVyO1xuZXhwb3J0cy5Dc3NTZWxlY3RvciA9IENzc1NlbGVjdG9yO1xudmFyIF9fZW1wdHkgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX19lbXB0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICcuLi8uLi9tb2RlbHMvbWF0Y2gnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpbmsnO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXRjaHMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlLnV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZ2VuZGEnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWdlbmRhLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FnZW5kYS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ2VuZGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBtYXRjaHM6IE1hdGNoW107XHJcbiAgICBwcml2YXRlIGRhdGU6IERhdGU7XHJcbiAgICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBuYXZMaW5rczogTGlua1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWF0Y2hTZXJ2aWNlOiBNYXRjaFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLnVwZGF0ZVZpZXcocGFyYW1zKSk7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb25kYXkgPSBEYXRlVXRpbHMuZ2V0UHJldmlvdXNNb25kYXkoZGF0ZSk7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzV2VlayA9IERhdGVVdGlscy5nZXRQcmV2aW91c1dlZWsobW9uZGF5KTtcclxuICAgICAgICB2YXIgbmV4dFdlZWsgPSBEYXRlVXRpbHMuZ2V0TmV4dFdlZWsobW9uZGF5KTtcclxuICAgICAgICB0aGlzLm5hdkxpbmtzLnB1c2goeyBsaW5rOiAnL2FnZW5kYS8nICsgRGF0ZVV0aWxzLmZvcm1hdERhdGUocHJldmlvdXNXZWVrKSwgbGFiZWw6ICdTZW1haW5lIGRlcm5pw6hyZScgfSk7XHJcbiAgICAgICAgdGhpcy5uYXZMaW5rcy5wdXNoKHsgbGluazogJy9hZ2VuZGEvJyArIERhdGVVdGlscy5mb3JtYXREYXRlKG1vbmRheSksIGxhYmVsOiAnQ2V0dGUgc2VtYWluZScgfSk7XHJcbiAgICAgICAgdGhpcy5uYXZMaW5rcy5wdXNoKHsgbGluazogJy9hZ2VuZGEvJyArIERhdGVVdGlscy5mb3JtYXREYXRlKG5leHRXZWVrKSwgbGFiZWw6ICdTZW1haW5lIFByb2NoYWluZScgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm1hdGNocyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3BsaXREYXRlID0gdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1zWydkYXRlJ10uc3BsaXQoJy0nKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShzcGxpdERhdGVbMF0sIHNwbGl0RGF0ZVsxXSAtIDEsIHNwbGl0RGF0ZVsyXSk7XHJcbiAgICAgICAgdGhpcy5fbWF0Y2hTZXJ2aWNlLmdldEhPRkNNYXRjaHNGb3JXZWVrKHRoaXMuZGF0ZSkuc3Vic2NyaWJlKGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNocyA9IGE7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNIT0ZDKHRlYW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAhKHRlYW0gIT0gbnVsbCAmJiB0ZWFtLmluZGV4T2YoXCJIT1JHVUVTIE9ET1NcIikgIT0gLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIE9wZW5NYXRjaERldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvdWNvdScpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3R1U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXRjaHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmtTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmFua3Muc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZS51dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW0FjdHVTZXJ2aWNlLCBNYXRjaFNlcnZpY2UsIFJhbmtTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB3ZWVrczogTGlua1tdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb25kYXkgPSBEYXRlVXRpbHMuZ2V0UHJldmlvdXNNb25kYXkoZGF0ZSk7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzV2VlayA9IERhdGVVdGlscy5nZXRQcmV2aW91c1dlZWsobW9uZGF5KTtcclxuICAgICAgICB2YXIgbmV4dFdlZWsgPSBEYXRlVXRpbHMuZ2V0TmV4dFdlZWsobW9uZGF5KTtcclxuICAgICAgICB0aGlzLndlZWtzLnB1c2goeyBsaW5rOiAnYWdlbmRhLycgKyBEYXRlVXRpbHMuZm9ybWF0RGF0ZShwcmV2aW91c1dlZWspLCBsYWJlbDogJ1NlbWFpbmUgZGVybmnvv71yZScgfSk7XHJcbiAgICAgICAgdGhpcy53ZWVrcy5wdXNoKHsgbGluazogJ2FnZW5kYS8nICsgRGF0ZVV0aWxzLmZvcm1hdERhdGUobW9uZGF5KSwgbGFiZWw6ICdDZXR0ZSBzZW1haW5lJyB9KTtcclxuICAgICAgICB0aGlzLndlZWtzLnB1c2goeyBsaW5rOiAnYWdlbmRhLycgKyBEYXRlVXRpbHMuZm9ybWF0RGF0ZShuZXh0V2VlayksIGxhYmVsOiAnU2VtYWluZSBQcm9jaGFpbmUnIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJy4uLy4uL21vZGVscy9tYXRjaCc7XHJcbmltcG9ydCB7IE1hdGNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21hdGNocy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYWxlbmRhcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9jYWxlbmRhci5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIG1hdGNoczogTWF0Y2hbXTtcclxuICAgIHByaXZhdGUgdGVhbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgbmF2TGlua3MgPSBbe1xyXG4gICAgICAgICAgICBsaW5rOiAnL2NhbGVuZGFyL2VxdWlwZTEnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0VxdWlwZTEnXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxpbms6ICcvY2FsZW5kYXIvZXF1aXBlMicsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXF1aXBlMidcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgbGluazogJy9jYWxlbmRhci9lcXVpcGUzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdFcXVpcGUzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWF0Y2hTZXJ2aWNlOiBNYXRjaFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLnVwZGF0ZVZpZXcocGFyYW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm1hdGNocyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRlYW0gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ3RlYW0nXTtcclxuICAgICAgICB0aGlzLl9tYXRjaFNlcnZpY2UuZ2V0SE9GQ01hdGNoc0ZvclRlYW0odGhpcy50ZWFtKS5zdWJzY3JpYmUoYSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hzID0gYTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0hPRkModGVhbTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICEodGVhbSAhPSBudWxsICYmIHRlYW0uaW5kZXhPZihcIkhPUkdVRVMgT0RPU1wiKSAhPSAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgT3Blbk1hdGNoRGV0YWlscygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ291Y291Jyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJkJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NhcmQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vY2FyZC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0ZXh0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgICBnZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VVcmw6IHN0cmluZykgOiBTYWZlU3R5bGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3VybCgnICsgaW1hZ2VVcmwgKyAnKScpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3R1U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3R1IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0FjdHUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgYWN0dXM6IEFjdHVbXTtcclxuICAgIHJlZ3VsYXJEaXN0cmlidXRpb24gPSA5MCAvIDM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0dVNlcnZpY2U6IEFjdHVTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2FjdHVTZXJ2aWNlLmdldEFjdHVzKCkuc3Vic2NyaWJlKGEgPT4gdGhpcy5hY3R1cyA9IGEpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJhbmtTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmFua3Muc2VydmljZSc7XHJcbmltcG9ydCB7IENsYXNzZW1lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xhc3NlbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JhbmsuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcmFuay5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgc2VsZWN0b3I6ICdyYW5rJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9yYW5rczogQ2xhc3NlbWVudFtdO1xyXG4gICAgcHJpdmF0ZSB0ZWFtOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBuYXZMaW5rcyA9IFt7XHJcbiAgICAgICAgbGluazogJy9yYW5rL2VxdWlwZTEnLFxyXG4gICAgICAgIGxhYmVsOiAnRXF1aXBlMSdcclxuICAgIH0sIHtcclxuICAgICAgICBsaW5rOiAnL3JhbmsvZXF1aXBlMicsXHJcbiAgICAgICAgbGFiZWw6ICdFcXVpcGUyJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGxpbms6ICcvcmFuay9lcXVpcGUzJyxcclxuICAgICAgICBsYWJlbDogJ0VxdWlwZTMnXHJcbiAgICB9XTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yYW5rU2VydmljZTogUmFua1NlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gdGhpcy51cGRhdGVWaWV3KHBhcmFtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5fcmFua3MgPSBbXTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50ZWFtID0gdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1zWyd0ZWFtJ107XHJcbiAgICAgICAgdGhpcy5fcmFua1NlcnZpY2UuZ2V0Q2xhc3NlbWVudHNGb3JUZWFtKHRoaXMudGVhbSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhbmtzID0gYztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYW5rLWxpbmUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmFuay5saW5lLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3JhbmsubGluZS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYW5rTGluZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSByYW5rOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBub206IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBvaW50czogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgam91ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdmljdG9pcmU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIG51bDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGVmYWl0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYnA6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGJjOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkaWZmOiBzdHJpbmc7XHJcblxyXG4gICAgaXNIT0ZDKCkge1xyXG4gICAgICAgIHJldHVybiAhKHRoaXMubm9tICE9IG51bGwgJiYgdGhpcy5ub20uaW5kZXhPZihcIkhPUkdVRVMgT0RPU1wiKSAhPSAtMSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSAnLi4vbW9kZWxzL21hdGNoJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdhZ2VuZGEnXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFnZW5kYVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShtYXRjaDogTWF0Y2hbXSwgZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBtYXRjaCAhPSBudWxsID8gbWF0Y2guZmlsdGVyKG0gPT4gdGhpcy5pc1NhbWVXZWVrKG0uZGF0ZSwgZGF0ZSkgJiYgKG0uZXF1aXBlMS5pbmRleE9mKFwiSE9SR1VFUyBPRE9TXCIpICE9IC0xIHx8IG0uZXF1aXBlMi5pbmRleE9mKFwiSE9SR1VFUyBPRE9TXCIpICE9IC0xKSkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2FtZVdlZWsoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XHJcbiAgICAgICAgdmFyIG1vbmRheTEgPSB0aGlzLmdldFByZXZpb3VzTW9uZGF5KGRhdGUxKTtcclxuICAgICAgICB2YXIgbW9uZGF5MiA9IHRoaXMuZ2V0UHJldmlvdXNNb25kYXkoZGF0ZTIpO1xyXG4gICAgICAgIHJldHVybiAobW9uZGF5MS5nZXREYXRlKCkgPT0gbW9uZGF5Mi5nZXREYXRlKCkgJiYgbW9uZGF5MS5nZXRGdWxsWWVhcigpID09IG1vbmRheTIuZ2V0RnVsbFllYXIoKSAmJiBtb25kYXkxLmdldE1vbnRoKCkgPT0gbW9uZGF5Mi5nZXRNb250aCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmV2aW91c01vbmRheShkOiBEYXRlKSB7XHJcbiAgICAgICAgdmFyIGRheSA9IGQuZ2V0RGF5KCksXHJcbiAgICAgICAgICAgIGRpZmYgPSBkLmdldERhdGUoKSAtIGRheSArIChkYXkgPT0gMCA/IC02IDogMSk7IC8vIGFkanVzdCB3aGVuIGRheSBpcyBzdW5kYXlcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZC5zZXREYXRlKGRpZmYpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9maWx0ZXJzL2FnZW5kYS50cyIsImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcGV0aXRpb24gfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uLmNvbXBldGl0aW9uJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICd0ZWFtJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlYW1QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oY29tcDogQ29tbW9uQ29tcGV0aXRpb25bXSwgZXF1aXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXAgIT0gbnVsbCA/IGNvbXAuZmlsdGVyKGMgPT4gYy5jb21wZXRpdGlvbi5jYXRlZ29yaWUgPT0gZXF1aXBlIHx8IGMuY29tcGV0aXRpb24uY2F0ZWdvcmllID09IGVxdWlwZSkgOiBudWxsO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2ZpbHRlcnMvdGVhbS50cyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSAuZGF0ZURpdiwgLmxpc3QtaXRlbSAubmFtZURpdiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXHJcXG4gICAgZm9udC1zaXplOjAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZURpdiB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbU5hbWUge1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgZm9udC1zaXplOjAuN2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVEaXYge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxufVxcclxcblxcclxcbm1kLXByb2dyZXNzLWNpcmNsZSB7XFxyXFxuICAgIG1hcmdpbjphdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nRGl2IGltZyB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJtZC1zaWRlbmF2IGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubWQtdG9vbGJhciBtZC1pY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjFlbTtcXHJcXG59XFxyXFxuXFxyXFxubWQtc2lkZW5hdiBtZC1saXN0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIC5kYXRlRGl2LCAubGlzdC1pdGVtIC5uYW1lRGl2IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcclxcbiAgICBmb250LXNpemU6MC44ZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlRGl2IHtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50ZWFtTmFtZSB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbiAgICBmb250LXNpemU6MC43ZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZURpdiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG59XFxyXFxuXFxyXFxubWQtcHJvZ3Jlc3MtY2lyY2xlIHtcXHJcXG4gICAgbWFyZ2luOmF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbWdEaXYgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWF0LWNhcmQge1xcclxcbiAgICBtYXJnaW46MTVweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm1kLWNhcmQge1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5tZC1wcm9ncmVzcy1jaXJjbGUge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICBoZWlnaHQ6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyAubm9tRGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5yb3cgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAzZW07XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IG1kLXRhYi1uYXYtYmFyPlxcclxcbiAgICA8YSBtZC10YWItbGlua1xcclxcbiAgICAgICAqbmdGb3I9XFxcImxldCB0YWIgb2YgbmF2TGlua3NcXFwiXFxyXFxuICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwidGFiLmxpbmtcXFwiXFxyXFxuICAgICAgIHJvdXRlckxpbmtBY3RpdmUgI3JsYT1cXFwicm91dGVyTGlua0FjdGl2ZVxcXCJcXHJcXG4gICAgICAgW2FjdGl2ZV09XFxcInJsYS5pc0FjdGl2ZVxcXCI+XFxyXFxuICAgICAgICB7e3RhYi5sYWJlbH19XFxyXFxuICAgIDwvYT5cXHJcXG48L25hdj5cXHJcXG48bWQtcHJvZ3Jlc3MtY2lyY2xlIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogIWlzTG9hZGluZ31cXFwiIG1vZGU9XFxcImluZGV0ZXJtaW5hdGVcXFwiPjwvbWQtcHJvZ3Jlc3MtY2lyY2xlPlxcclxcbjxkaXYgY2xhc3M9XFxcImxpc3QtaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgbWF0Y2ggb2YgbWF0Y2hzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmFtZURpdlxcXCI+XFxyXFxuICAgICAgICB7e21hdGNoLmNvbXBldGl0aW9uLm5vbX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlRGl2XFxcIj5cXHJcXG4gICAgICAgIHt7bWF0Y2guZGF0ZSB8IGRhdGU6ICdkZC9NTS95IEhIOm1tJ319XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4TGF5b3V0PVxcXCJyb3dcXFwiIGZ4TGF5b3V0V3JhcD1cXFwid3JhcFxcXCIgZnhMYXlvdXRBbGlnbj1cXFwic3BhY2UtYXJvdW5kIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWdEaXZcXFwiIGZ4RmxleD1cXFwiMTBcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgICAgICA8aW1nIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0hPRkMobWF0Y2guZXF1aXBlMSl9XFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIikgKyBcIlxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVhbU5hbWVcXFwiIGZ4RmxleD1cXFwiMzVcXFwiPlxcclxcbiAgICAgICAgICAgIHt7bWF0Y2guZXF1aXBlMX19XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlRGl2XFxcIiBmeEZsZXg+XFxyXFxuICAgICAgICAgICAge3sgKG1hdGNoLnNjb3JlMSAhPSBudWxsICYmIG1hdGNoLnNjb3JlMiAhPSBudWxsKSA/IG1hdGNoLnNjb3JlMSArICcgLSAnICsgbWF0Y2guc2NvcmUyIDogJycgfX1cXHJcXG4gICAgICAgICAgICB7eyBtYXRjaC5tZXNzYWdlICE9IG51bGwgPyBtYXRjaC5tZXNzYWdlIDogJyd9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtTmFtZVxcXCIgZnhGbGV4PVxcXCIzNVxcXCI+XFxyXFxuICAgICAgICAgICAge3ttYXRjaC5lcXVpcGUyfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1nRGl2XFxcIiBmeEZsZXg9XFxcIjEwXFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICAgICAgPGltZyBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNIT0ZDKG1hdGNoLmVxdWlwZTIpfVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgc3R5bGU9XFxcInBvc2l0aW9uOmZpeGVkO3otaW5kZXg6Mjt3aWR0aDoxMDAlO1xcXCI+XFxyXFxuICAgIDxtZC10b29sYmFyIGNvbG9yPVxcXCJwcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgIDxtZC1pY29uIChjbGljayk9XFxcInNpZGVuYXYub3BlbigpXFxcIj5tZW51PC9tZC1pY29uPlxcclxcbiAgICAgICAgPHNwYW4+V2ViSE9GQzwvc3Bhbj5cXHJcXG4gICAgPC9tZC10b29sYmFyPlxcclxcbjwvZGl2PlxcclxcbjxtZC1zaWRlbmF2LWNvbnRhaW5lcj5cXHJcXG4gICAgPGRpdiBzdHlsZT1cXFwiaGVpZ2h0OjUwcHg7XFxcIj48L2Rpdj5cXHJcXG4gICAgPG1kLXNpZGVuYXYgI3NpZGVuYXY+XFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6NTBweDtcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPG1kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+QWN0dTwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICA8aDMgbWQtc3ViaGVhZGVyPkNhbGVuZHJpZXI8L2gzPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUxJ11cXFwiPkVxdWlwZSAxPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUyJ11cXFwiPkVxdWlwZSAyPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9jYWxlbmRhci9lcXVpcGUzJ11cXFwiPkVxdWlwZSAzPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgPC9tZC1saXN0PlxcclxcbiAgICAgICAgPG1kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgPGgzIG1kLXN1YmhlYWRlcj5DbGFzc2VtZW50PC9oMz5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmFuay9lcXVpcGUxJ11cXFwiPkVxdWlwZSAxPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9yYW5rL2VxdWlwZTInXVxcXCI+RXF1aXBlIDI8L2E+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3JhbmsvZXF1aXBlMyddXFxcIj5FcXVpcGUgMzwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgIDwvbWQtbGlzdD5cXHJcXG4gICAgICAgIDxtZC1saXN0PlxcclxcbiAgICAgICAgICAgIDxoMyBtZC1zdWJoZWFkZXI+QWdlbmRhPC9oMz5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtICpuZ0Zvcj1cXFwibGV0IHdlZWsgb2Ygd2Vla3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiW3dlZWsubGlua11cXFwiPnt7d2Vlay5sYWJlbH19PC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgPC9tZC1saXN0PlxcclxcbiAgICA8L21kLXNpZGVuYXY+XFxyXFxuICAgIDxtYWluIGNsYXNzPVxcXCJtZGwtbGF5b3V0X19jb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0IGNsYXNzPVxcXCJtZGwtZ3JpZFxcXCI+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICA8L21haW4+XFxyXFxuPC9tZC1zaWRlbmF2LWNvbnRhaW5lcj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBtZC10YWItbmF2LWJhcj5cXHJcXG4gICAgPGEgbWQtdGFiLWxpbmtcXHJcXG4gICAgICAgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIG5hdkxpbmtzXFxcIlxcclxcbiAgICAgICBbcm91dGVyTGlua109XFxcInRhYi5saW5rXFxcIlxcclxcbiAgICAgICByb3V0ZXJMaW5rQWN0aXZlICNybGE9XFxcInJvdXRlckxpbmtBY3RpdmVcXFwiXFxyXFxuICAgICAgIFthY3RpdmVdPVxcXCJybGEuaXNBY3RpdmVcXFwiPlxcclxcbiAgICAgICAge3t0YWIubGFiZWx9fVxcclxcbiAgICA8L2E+XFxyXFxuPC9uYXY+XFxyXFxuPG1kLXByb2dyZXNzLWNpcmNsZSBjb2xvcj1cXFwicHJpbWFyeVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6ICFpc0xvYWRpbmd9XFxcIiBtb2RlPVxcXCJpbmRldGVybWluYXRlXFxcIj48L21kLXByb2dyZXNzLWNpcmNsZT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJsaXN0LWl0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IG1hdGNoIG9mIG1hdGNoc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVEaXZcXFwiPlxcclxcbiAgICAgICAge3ttYXRjaC5jb21wZXRpdGlvbi5ub219fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGF0ZURpdlxcXCI+XFxyXFxuICAgICAgICB7e21hdGNoLmRhdGUgfCBkYXRlOiAnZGQvTU0veSBISDptbSd9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeExheW91dD1cXFwicm93XFxcIiBmeExheW91dFdyYXA9XFxcIndyYXBcXFwiIGZ4TGF5b3V0QWxpZ249XFxcInNwYWNlLWFyb3VuZCBjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1nRGl2XFxcIiBmeEZsZXg9XFxcIjEwXFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICAgICAgPGltZyBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNIT0ZDKG1hdGNoLmVxdWlwZTEpfVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW1OYW1lXFxcIiBmeEZsZXg9XFxcIjM1XFxcIj5cXHJcXG4gICAgICAgICAgICB7e21hdGNoLmVxdWlwZTF9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZURpdlxcXCIgZnhGbGV4PlxcclxcbiAgICAgICAgICAgIHt7IChtYXRjaC5zY29yZTEgIT0gbnVsbCAmJiBtYXRjaC5zY29yZTIgIT0gbnVsbCkgPyBtYXRjaC5zY29yZTEgKyAnIC0gJyArIG1hdGNoLnNjb3JlMiA6ICcnIH19XFxyXFxuICAgICAgICAgICAge3sgbWF0Y2gubWVzc2FnZSAhPSBudWxsID8gbWF0Y2gubWVzc2FnZSA6ICcnfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVhbU5hbWVcXFwiIGZ4RmxleD1cXFwiMzVcXFwiPlxcclxcbiAgICAgICAgICAgIHt7bWF0Y2guZXF1aXBlMn19XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImltZ0RpdlxcXCIgZnhGbGV4PVxcXCIxMFxcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgICAgIDxpbWcgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzSE9GQyhtYXRjaC5lcXVpcGUyKX1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLWNhcmRfX3RpdGxlXFxcIlxcclxcbiAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kSW1hZ2VdPVxcXCJnZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VVcmwpXFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwibWRsLWNhcmRfX3RpdGxlLXRleHRcXFwiPnt7dGl0bGV9fTwvaDI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XFxcIj5cXHJcXG4gICAgICAgIHt7dGV4dGV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwibWRsLWJ1dHRvbiBtZGwtYnV0dG9uLS1jb2xvcmVkIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcXFwiPlxcclxcbiAgICAgICAgICAgIETDqXRhaWxzXFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgZnhMYXlvdXQ9XFxcInJvd1xcXCIgZnhMYXlvdXQueHM9XFxcImNvbHVtblxcXCIgZnhMYXlvdXRXcmFwPVxcXCJ3cmFwXFxcIiBmeExheW91dEFsaWduPVxcXCJzcGFjZS1hcm91bmQgY2VudGVyXFxcIj5cXHJcXG4gICAgPG1kLWNhcmQgZnhGbGV4Lmd0LXhzPVxcXCI0MCVcXFwiIFtmeEZsZXguZ3QtbWRdPVxcXCJyZWd1bGFyRGlzdHJpYnV0aW9uXFxcIiAgKm5nRm9yPVxcXCJsZXQgYWN0dSBvZiBhY3R1czsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICA8bWQtY2FyZC10aXRsZT57e2FjdHUudGl0cmV9fTwvbWQtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDxpbWcgbWQtY2FyZC1pbWFnZSBbc3JjXT1cXFwiYWN0dS5pbWFnZVxcXCIvPlxcclxcbiAgICAgICAgPG1kLWNhcmQtY29udGVudD5cXHJcXG4gICAgICAgICAgICA8cD57e2FjdHUudGV4dGV9fTwvcD5cXHJcXG4gICAgICAgIDwvbWQtY2FyZC1jb250ZW50PlxcclxcbiAgICA8L21kLWNhcmQ+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBtZC10YWItbmF2LWJhcj5cXHJcXG4gICAgPGEgbWQtdGFiLWxpbmtcXHJcXG4gICAgICAgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIG5hdkxpbmtzXFxcIlxcclxcbiAgICAgICBbcm91dGVyTGlua109XFxcInRhYi5saW5rXFxcIlxcclxcbiAgICAgICByb3V0ZXJMaW5rQWN0aXZlICNybGE9XFxcInJvdXRlckxpbmtBY3RpdmVcXFwiXFxyXFxuICAgICAgIFthY3RpdmVdPVxcXCJybGEuaXNBY3RpdmVcXFwiPlxcclxcbiAgICAgICAge3t0YWIubGFiZWx9fVxcclxcbiAgICA8L2E+XFxyXFxuPC9uYXY+XFxyXFxuPG1kLXByb2dyZXNzLWNpcmNsZSBjb2xvcj1cXFwicHJpbWFyeVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6ICFpc0xvYWRpbmd9XFxcIiBtb2RlPVxcXCJpbmRldGVybWluYXRlXFxcIj48L21kLXByb2dyZXNzLWNpcmNsZT5cXHJcXG5cXHJcXG48cmFuay1saW5lIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0xvYWRpbmd9XFxcIlxcclxcbiAgICAgICAgICAgcmFuaz1cXFwiI1xcXCJcXHJcXG4gICAgICAgICAgIG5vbT1cXFwiTm9tXFxcIlxcclxcbiAgICAgICAgICAgcG9pbnRzPVxcXCJQXFxcIlxcclxcbiAgICAgICAgICAgam91ZT1cXFwiSlxcXCJcXHJcXG4gICAgICAgICAgIHZpY3RvaXJlPVxcXCJWXFxcIlxcclxcbiAgICAgICAgICAgbnVsPVxcXCJOXFxcIlxcclxcbiAgICAgICAgICAgZGVmYWl0ZT1cXFwiRFxcXCJcXHJcXG4gICAgICAgICAgIGJwPVxcXCJCUFxcXCJcXHJcXG4gICAgICAgICAgIGJjPVxcXCJCQ1xcXCJcXHJcXG4gICAgICAgICAgIGRpZmY9XFxcIkRpZmZcXFwiPjwvcmFuay1saW5lPlxcclxcblxcclxcbjxyYW5rLWxpbmUgKm5nRm9yPVxcXCJsZXQgcmFuayBvZiBfcmFua3M7IGxldCBpID0gaW5kZXhcXFwiXFxyXFxuICAgICAgICAgICBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNMb2FkaW5nfVxcXCJcXHJcXG4gICAgICAgICAgIFtyYW5rXT1cXFwiaSArIDFcXFwiXFxyXFxuICAgICAgICAgICBbbm9tXT1cXFwicmFuay5ub21cXFwiXFxyXFxuICAgICAgICAgICBbcG9pbnRzXT1cXFwicmFuay5wb2ludHNcXFwiXFxyXFxuICAgICAgICAgICBbam91ZV09XFxcInJhbmsuam91ZVxcXCJcXHJcXG4gICAgICAgICAgIFt2aWN0b2lyZV09XFxcInJhbmsudmljdG9pcmVcXFwiXFxyXFxuICAgICAgICAgICBbbnVsXT1cXFwicmFuay5udWxcXFwiXFxyXFxuICAgICAgICAgICBbZGVmYWl0ZV09XFxcInJhbmsuZGVmYWl0ZVxcXCJcXHJcXG4gICAgICAgICAgIFticF09XFxcInJhbmsuYnBcXFwiXFxyXFxuICAgICAgICAgICBbYmNdPVxcXCJyYW5rLmJjXFxcIlxcclxcbiAgICAgICAgICAgW2RpZmZdPVxcXCJyYW5rLmRpZmZcXFwiPjwvcmFuay1saW5lPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCJcXHJcXG4gICAgIGZ4TGF5b3V0PVxcXCJyb3dcXFwiXFxyXFxuICAgICBmeExheW91dFdyYXA9XFxcIndyYXBcXFwiXFxyXFxuICAgICBmeExheW91dEFsaWduPVxcXCJzcGFjZS1hcm91bmQgY2VudGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaW1nRGl2XFxcIiBmeEZsZXg9XFxcIjEwXFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICA8aW1nIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0hPRkMoKX1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAge3tyYW5rfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5vbURpdlxcXCIgZnhGbGV4PlxcclxcbiAgICAgICAge3tub219fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAge3twb2ludHN9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiPlxcclxcbiAgICAgICAge3tqb3VlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e3ZpY3RvaXJlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e251bH19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAge3tkZWZhaXRlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e2JwfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICB7e2JjfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIj5cXHJcXG4gICAgICAgIHt7ZGlmZn19XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL09ic2VydmFibGUnKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG52YXIgRXJyb3JPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRXJyb3JPYnNlcnZhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVycm9yT2JzZXJ2YWJsZShlcnJvciwgc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBubyBpdGVtcyB0byB0aGUgT2JzZXJ2ZXIgYW5kIGltbWVkaWF0ZWx5XG4gICAgICogZW1pdHMgYW4gZXJyb3Igbm90aWZpY2F0aW9uLlxuICAgICAqXG4gICAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkp1c3QgZW1pdHMgJ2Vycm9yJywgYW5kIG5vdGhpbmcgZWxzZS5cbiAgICAgKiA8L3NwYW4+XG4gICAgICpcbiAgICAgKiA8aW1nIHNyYz1cIi4vaW1nL3Rocm93LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAqXG4gICAgICogVGhpcyBzdGF0aWMgb3BlcmF0b3IgaXMgdXNlZnVsIGZvciBjcmVhdGluZyBhIHNpbXBsZSBPYnNlcnZhYmxlIHRoYXQgb25seVxuICAgICAqIGVtaXRzIHRoZSBlcnJvciBub3RpZmljYXRpb24uIEl0IGNhbiBiZSB1c2VkIGZvciBjb21wb3Npbmcgd2l0aCBvdGhlclxuICAgICAqIE9ic2VydmFibGVzLCBzdWNoIGFzIGluIGEge0BsaW5rIG1lcmdlTWFwfS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgdGhlIG51bWJlciA3LCB0aGVuIGVtaXQgYW4gZXJyb3IuPC9jYXB0aW9uPlxuICAgICAqIHZhciByZXN1bHQgPSBSeC5PYnNlcnZhYmxlLnRocm93KG5ldyBFcnJvcignb29wcyEnKSkuc3RhcnRXaXRoKDcpO1xuICAgICAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSwgZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPk1hcCBhbmQgZmxhdHRlbiBudW1iZXJzIHRvIHRoZSBzZXF1ZW5jZSAnYScsICdiJywgJ2MnLCBidXQgdGhyb3cgYW4gZXJyb3IgZm9yIDEzPC9jYXB0aW9uPlxuICAgICAqIHZhciBpbnRlcnZhbCA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCk7XG4gICAgICogdmFyIHJlc3VsdCA9IGludGVydmFsLm1lcmdlTWFwKHggPT5cbiAgICAgKiAgIHggPT09IDEzID9cbiAgICAgKiAgICAgUnguT2JzZXJ2YWJsZS50aHJvdygnVGhpcnRlZW5zIGFyZSBiYWQnKSA6XG4gICAgICogICAgIFJ4Lk9ic2VydmFibGUub2YoJ2EnLCAnYicsICdjJylcbiAgICAgKiApO1xuICAgICAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSwgZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIGNyZWF0ZX1cbiAgICAgKiBAc2VlIHtAbGluayBlbXB0eX1cbiAgICAgKiBAc2VlIHtAbGluayBuZXZlcn1cbiAgICAgKiBAc2VlIHtAbGluayBvZn1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBlcnJvciBUaGUgcGFydGljdWxhciBFcnJvciB0byBwYXNzIHRvIHRoZSBlcnJvciBub3RpZmljYXRpb24uXG4gICAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIEEge0BsaW5rIElTY2hlZHVsZXJ9IHRvIHVzZSBmb3Igc2NoZWR1bGluZ1xuICAgICAqIHRoZSBlbWlzc2lvbiBvZiB0aGUgZXJyb3Igbm90aWZpY2F0aW9uLlxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIGVycm9yIE9ic2VydmFibGU6IGVtaXRzIG9ubHkgdGhlIGVycm9yIG5vdGlmaWNhdGlvblxuICAgICAqIHVzaW5nIHRoZSBnaXZlbiBlcnJvciBhcmd1bWVudC5cbiAgICAgKiBAc3RhdGljIHRydWVcbiAgICAgKiBAbmFtZSB0aHJvd1xuICAgICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgRXJyb3JPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChlcnJvciwgc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3JPYnNlcnZhYmxlKGVycm9yLCBzY2hlZHVsZXIpO1xuICAgIH07XG4gICAgRXJyb3JPYnNlcnZhYmxlLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICB2YXIgZXJyb3IgPSBhcmcuZXJyb3IsIHN1YnNjcmliZXIgPSBhcmcuc3Vic2NyaWJlcjtcbiAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgICBFcnJvck9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLmVycm9yO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoRXJyb3JPYnNlcnZhYmxlLmRpc3BhdGNoLCAwLCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRXJyb3JPYnNlcnZhYmxlO1xufShPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkpO1xuZXhwb3J0cy5FcnJvck9ic2VydmFibGUgPSBFcnJvck9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FcnJvck9ic2VydmFibGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3J4anMvb2JzZXJ2YWJsZS9FcnJvck9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIEVycm9yT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi9FcnJvck9ic2VydmFibGUnKTtcbmV4cG9ydHMuX3Rocm93ID0gRXJyb3JPYnNlcnZhYmxlXzEuRXJyb3JPYnNlcnZhYmxlLmNyZWF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm93LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL29ic2VydmFibGUvdGhyb3cuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkO1xuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUilcbiAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnO1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2VtdmVyL3NlbXZlci5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FnZW5kYS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2FsZW5kYXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NhcmQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcmFuay5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JhbmsubGluZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2ZsZXgtbGF5b3V0L2J1bmRsZXMvZmxleC1sYXlvdXQudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9idW5kbGVzL21hdGVyaWFsLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBhdGNoJztcclxuaW1wb3J0ICd6b25lLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8YXBwPjwvYXBwPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
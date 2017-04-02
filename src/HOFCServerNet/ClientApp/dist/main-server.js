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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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
var throw_1 = __webpack_require__(47);
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

module.exports = (__webpack_require__(1))(4);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(9);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
var semver = __webpack_require__(48);
var __core__ = __webpack_require__(0);
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var material_1 = __webpack_require__(57);
var angular2_universal_1 = __webpack_require__(12);
var app_component_1 = __webpack_require__(24);
var home_component_1 = __webpack_require__(27);
var calendar_component_1 = __webpack_require__(25);
var card_component_1 = __webpack_require__(26);
var rank_component_1 = __webpack_require__(28);
var agenda_component_1 = __webpack_require__(23);
var rank_line_component_1 = __webpack_require__(29);
var team_1 = __webpack_require__(31);
var agenda_1 = __webpack_require__(30);
var flex_layout_1 = __webpack_require__(56);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(45);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(79);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(81);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_1 = __webpack_require__(15);
var core_1 = __webpack_require__(0);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var matchs_service_1 = __webpack_require__(6);
var AgendaComponent = (function () {
    function AgendaComponent(_matchService, _route) {
        this._matchService = _matchService;
        this._route = _route;
        this.isLoading = true;
        this.navLinks = [{
                link: '/agenda/20-03-2017',
                label: '20-03-2017'
            }, {
                link: '/agenda/27-03-2017',
                label: '27-03-2017'
            }, {
                link: '/agenda/03-04-2017',
                label: '03-04-2017'
            }];
    }
    AgendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.updateView(params); });
    };
    AgendaComponent.prototype.updateView = function (params) {
        var _this = this;
        this.matchs = [];
        this.isLoading = true;
        var splitDate = this._route.snapshot.params['date'].split('-');
        this.date = new Date(splitDate[2], splitDate[1], splitDate[0]);
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
        template: __webpack_require__(39),
        styles: [__webpack_require__(49)]
    }),
    __metadata("design:paramtypes", [matchs_service_1.MatchService, router_1.ActivatedRoute])
], AgendaComponent);
exports.AgendaComponent = AgendaComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var actus_service_1 = __webpack_require__(13);
var matchs_service_1 = __webpack_require__(6);
var ranks_service_1 = __webpack_require__(14);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: __webpack_require__(40),
        styles: [__webpack_require__(50)],
        providers: [actus_service_1.ActuService, matchs_service_1.MatchService, ranks_service_1.RankService]
    })
], AppComponent);
exports.AppComponent = AppComponent;


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
        template: __webpack_require__(41),
        styles: [__webpack_require__(51)]
    }),
    __metadata("design:paramtypes", [matchs_service_1.MatchService, router_1.ActivatedRoute])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;


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
        template: __webpack_require__(42),
        styles: [__webpack_require__(52)]
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], CardComponent);
exports.CardComponent = CardComponent;


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
        template: __webpack_require__(43),
        styles: [__webpack_require__(53)]
    }),
    __metadata("design:paramtypes", [actus_service_1.ActuService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


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
        template: __webpack_require__(44),
        styles: [__webpack_require__(54)],
        selector: 'rank'
    }),
    __metadata("design:paramtypes", [ranks_service_1.RankService, router_1.ActivatedRoute])
], RankComponent);
exports.RankComponent = RankComponent;


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
        template: __webpack_require__(45),
        styles: [__webpack_require__(55)]
    })
], RankLineComponent);
exports.RankLineComponent = RankLineComponent;


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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none;\r\n}\r\n\r\n.list-item {\r\n    text-align: center;\r\n    border-bottom: solid 1px grey;\r\n    padding-bottom: 15px;\r\n    padding-top: 15px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.list-item .dateDiv, .list-item .nameDiv {\r\n    margin-bottom:10px;\r\n    font-size:0.8em;\r\n}\r\n\r\n.dateDiv {\r\n    color: gray;\r\n}\r\n\r\n.teamName {\r\n    color: gray;\r\n    font-size:0.7em;\r\n}\r\n\r\n.scoreDiv {\r\n    color: black;\r\n    font-weight:bold;\r\n}\r\n\r\nmd-progress-circle {\r\n    margin:auto;\r\n}\r\n\r\n.imgDiv img {\r\n    height: 60px;\r\n}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "md-sidenav a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nmd-toolbar md-icon {\r\n    margin-right:1em;\r\n}\r\n\r\nmd-sidenav md-list-item {\r\n    width: 200px;\r\n}", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none;\r\n}\r\n\r\n.list-item {\r\n    text-align: center;\r\n    border-bottom: solid 1px grey;\r\n    padding-bottom: 15px;\r\n    padding-top: 15px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.list-item .dateDiv, .list-item .nameDiv {\r\n    margin-bottom:10px;\r\n    font-size:0.8em;\r\n}\r\n\r\n.dateDiv {\r\n    color: gray;\r\n}\r\n\r\n.teamName {\r\n    color: gray;\r\n    font-size:0.7em;\r\n}\r\n\r\n.scoreDiv {\r\n    color: black;\r\n    font-weight:bold;\r\n}\r\n\r\nmd-progress-circle {\r\n    margin:auto;\r\n}\r\n\r\n.imgDiv img {\r\n    height: 60px;\r\n}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".mat-card {\r\n    margin:15px;\r\n}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "md-card {\r\n    margin: 15px;\r\n}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none !important;\r\n}\r\n\r\nmd-progress-circle {\r\n    margin: auto;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hidden {\r\n    display: none !important;\r\n}\r\n\r\n.row {\r\n    text-align: center;\r\n    padding-top: 1em;\r\n    padding-bottom: 1em;\r\n    height: 3em;\r\n}\r\n\r\n.row .nomDiv {\r\n    text-align: initial;\r\n    font-weight: bold;\r\n}\r\n\r\n.row img {\r\n    height: 3em;\r\n}", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n<div class=\"list-item\" *ngFor=\"let match of (matchs | agenda : date)\">\r\n    <div class=\"nameDiv\">\r\n        {{match.competition.nom}}\r\n    </div>\r\n    <div class=\"dateDiv\">\r\n        {{match.date | date: 'dd/MM/y HH:mm'}}\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe1)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe1}}\r\n        </div>\r\n        <div class=\"scoreDiv\" fxFlex>\r\n            {{ (match.score1 != null && match.score2 != null) ? match.score1 + ' - ' + match.score2 : '' }}\r\n            {{ match.message != null ? match.message : ''}}\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe2}}\r\n        </div>\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe2)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n    <md-icon (click)=\"sidenav.open()\">menu</md-icon>\r\n    <span>WebHOFC</span>\r\n</md-toolbar>\r\n<md-sidenav-container>\r\n    <md-sidenav #sidenav>\r\n        <md-list>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/home']\">Actu</a>\r\n            </md-list-item>\r\n            <h3 md-subheader>Calendrier</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/calendar/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n        <md-list>\r\n            <h3 md-subheader>Classement</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe1']\">Equipe 1</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe2']\">Equipe 2</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/rank/equipe3']\">Equipe 3</a>\r\n            </md-list-item>\r\n        </md-list>\r\n        <md-list>\r\n            <h3 md-subheader>Agenda</h3>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/agenda/20-03-2017']\">Avant</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/agenda/27-03-2017']\">Now</a>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <a (click)=\"sidenav.close()\" [routerLink]=\"['/agenda/03-04-2017']\">Apr�s</a>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-sidenav>\r\n\r\n    <main class=\"mdl-layout__content\">\r\n        <router-outlet class=\"mdl-grid\"></router-outlet>\r\n    </main>\r\n</md-sidenav-container>\r\n\r\n<!--div mdl class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>\r\n    <header class=\"mdl-layout__header\">\r\n        <div class=\"mdl-layout__header-row\">\r\n            <span class=\"mdl-layout-title\">WebHOFC</span>\r\n        </div>\r\n    </header>\r\n    <div class=\"mdl-layout__drawer\">\r\n        <span class=\"mdl-layout-title\">\r\n            <span>WebHOFC</span>\r\n        </span>\r\n        <nav class=\"mdl-navigation\">\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/home']\">Actu</a>\r\n            <div class=\"android-drawer-separator\"></div>\r\n            <span class=\"mdl-navigation__link\" href=\"\">Calendrier</span>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe1']\">Equipe 1</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe2']\">Equipe 2</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/calendar/equipe3']\">Equipe 3</a>\r\n            <span class=\"mdl-navigation__link\" href=\"\">Classement</span>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe1']\">Equipe 1</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe2']\">Equipe 2</a>\r\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/rank/equipe3']\">Equipe 3</a>\r\n        </nav>\r\n    </div>\r\n</div-->\r\n";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n<div class=\"list-item\" *ngFor=\"let match of (matchs | team : team)\">\r\n    <div class=\"nameDiv\">\r\n        {{match.competition.nom}}\r\n    </div>\r\n    <div class=\"dateDiv\">\r\n        {{match.date | date: 'dd/MM/y HH:mm'}}\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe1)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe1}}\r\n        </div>\r\n        <div class=\"scoreDiv\" fxFlex>\r\n            {{ (match.score1 != null && match.score2 != null) ? match.score1 + ' - ' + match.score2 : '' }}\r\n            {{ match.message != null ? match.message : ''}}\r\n        </div>\r\n        <div class=\"teamName\" fxFlex=\"35\">\r\n            {{match.equipe2}}\r\n        </div>\r\n        <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n            <img [ngClass]=\"{'hidden': isHOFC(match.equipe2)}\" src=\"" + __webpack_require__(3) + "\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-shadow--2dp\">\r\n    <div class=\"mdl-card__title\"\r\n         [style.backgroundImage]=\"getBackgroundImage(imageUrl)\">\r\n        <h2 class=\"mdl-card__title-text\">{{title}}</h2>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n        {{texte}}\r\n    </div>\r\n    <div class=\"mdl-card__actions mdl-card--border\">\r\n        <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n            Détails\r\n        </a>\r\n    </div>\r\n</div>";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\r\n    <md-card fxFlex.gt-xs=\"40%\" [fxFlex.gt-md]=\"regularDistribution\"  *ngFor=\"let actu of actus; let i = index\">\r\n        <md-card-title>{{actu.titre}}</md-card-title>\r\n        <img md-card-image [src]=\"actu.image\"/>\r\n        <md-card-content>\r\n            <p>{{actu.texte}}</p>\r\n        </md-card-content>\r\n    </md-card>\r\n</div>";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<nav md-tab-nav-bar>\r\n    <a md-tab-link\r\n       *ngFor=\"let tab of navLinks\"\r\n       [routerLink]=\"tab.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n        {{tab.label}}\r\n    </a>\r\n</nav>\r\n<md-progress-circle color=\"primary\" [ngClass]=\"{'hidden': !isLoading}\" mode=\"indeterminate\"></md-progress-circle>\r\n\r\n<rank-line [ngClass]=\"{'hidden': isLoading}\"\r\n           rank=\"#\"\r\n           nom=\"Nom\"\r\n           points=\"P\"\r\n           joue=\"J\"\r\n           victoire=\"V\"\r\n           nul=\"N\"\r\n           defaite=\"D\"\r\n           bp=\"BP\"\r\n           bc=\"BC\"\r\n           diff=\"Diff\"></rank-line>\r\n\r\n<rank-line *ngFor=\"let rank of (_ranks | team : team); let i = index\"\r\n           [ngClass]=\"{'hidden': isLoading}\"\r\n           [rank]=\"i + 1\"\r\n           [nom]=\"rank.nom\"\r\n           [points]=\"rank.points\"\r\n           [joue]=\"rank.joue\"\r\n           [victoire]=\"rank.victoire\"\r\n           [nul]=\"rank.nul\"\r\n           [defaite]=\"rank.defaite\"\r\n           [bp]=\"rank.bp\"\r\n           [bc]=\"rank.bc\"\r\n           [diff]=\"rank.diff\"></rank-line>";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"row\"\r\n     fxLayout=\"row\"\r\n     fxLayoutWrap=\"wrap\"\r\n     fxLayoutAlign=\"space-around center\">\r\n    <div class=\"imgDiv\" fxFlex=\"10\" fxShow=\"false\" fxShow.gt-xs>\r\n        <img [ngClass]=\"{'hidden': isHOFC()}\" src=\"" + __webpack_require__(3) + "\" />\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{rank}}\r\n    </div>\r\n    <div class=\"nomDiv\" fxFlex>\r\n        {{nom}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{points}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{joue}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{victoire}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{nul}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{defaite}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{bp}}\r\n    </div>\r\n    <div fxFlex=\"7\" fxShow=\"false\" fxShow.gt-xs>\r\n        {{bc}}\r\n    </div>\r\n    <div fxFlex=\"7\">\r\n        {{diff}}\r\n    </div>\r\n</div>";

/***/ }),
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ErrorObservable_1 = __webpack_require__(46);
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(32);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
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

module.exports = (__webpack_require__(1))(74);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(75);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(20);
__webpack_require__(17);
__webpack_require__(19);
var aspnet_prerendering_1 = __webpack_require__(21);
var core_1 = __webpack_require__(0);
var angular2_universal_1 = __webpack_require__(12);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGY0OGQ5NDhkM2I1MWQzODVhZWUiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4vdmVuZG9yXCIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hc3NldHMvaW1hZ2VzL2ljb24ucG5nIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvbWF0Y2hzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwvbm9kZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvcmFua3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi11bml2ZXJzYWwtcGF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUtbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18uanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9maWx0ZXJzL2FnZW5kYS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2ZpbHRlcnMvdGVhbS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb2JzZXJ2YWJsZS9FcnJvck9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvdGhyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC5jc3M/NTQ3MiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3M/MjNhNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3M/ZDI3ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3M/NzczOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3M/NTZiMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LmNzcz9hNThjIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZmxleC1sYXlvdXQvYnVuZGxlcy9mbGV4LWxheW91dC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYnVuZGxlcy9tYXRlcmlhbC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7QUNIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDanJDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQSw4Qzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7OztBQ0FBLHdCQUFzQztBQUN0Qyx3QkFBa0M7QUFDbEMsd0JBQWlCO0FBQ2pCLG9EQUF5RTtBQUN6RSxvQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxxQkFBYyxFQUFFLENBQUM7QUFDakIsSUFBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxrQkFBZSwwQ0FBb0IsQ0FBQyxnQkFBTTtJQUN0QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWUsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLEVBQUUsMkJBQTJCO1lBQ2pDLFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUUsR0FBRztnQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7Z0JBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDeEIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLGFBQWE7YUFDMUI7WUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2dCQUN0RCw2RUFBNkU7Z0JBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7U0FDSixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBa0IsY0FBTSxlQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJO1lBQ3hGLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGY0OGQ5NDhkM2I1MWQzODVhZWUiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoOTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSkFBQUFDUUNBWUFBQURuUnVLNEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUgzZ3NjRENBNjAyMEt2UUFBSUFCSlJFRlVlTnJzdlhtVVhXV1Y5Ly9aejNQT3ZiZnVyYm1TU21Xb3pQTThRaUNCRUFhUmVWSnd3cFpXVWJ2RmRtZ2wybzZvM2ViVmJtMjdtN1p0QjhDV1ZtWUVBa2dDQnBBNUJKS1FPWldwVXFra1ZaV2E3M0RPZWZiN3g3bFZxV0xTOWZzUnUrUExzMWF0bGFxYmUrNDk1K3l6aCsvM3UvY0RiNiszMTl2cjdmWDJlbnU5dmQ1ZWI2KzMxOXZyN2ZYMmVudTl2ZDVlYjYrMzE5dnI3ZlVIbHJ6VkI3enNzc3RZc21RSnFvcklteDllVlk5OUVaSGpjb0txaWhCL2pzcmdFM1ppUVVGd2lMajQvOFIvQUdmaU43ek85M01JaWdBYXY3Zi9Rc2FmRTRZT3ovUDZQOThZZzZxaXFrUWFZcXhGTWZIN0ZZUUlnNkdnRmt1SVIwU0lvMEFDei9wSTVOQXdvcXVuOSt4Y3dUMVNra2xKT2wyQ1owQmNpQkdLMytmMXI2dXE4c1FUVC9DYjMvem1MYisrM2x0OXdLVkxsM0xkZGRjQllLMTlVOE40OVdzRFQveXRXazdpRzl4bkYvRk4xdmlXcXdXay85SXJyekpvZWFQdnBzWC9HeHNSQTE3VDRxOWhHT0w3UHM2NS90ZU1NUVJSZ2Q1OGNHM0I4Ui9KVkFtZVoyTnpGR0hyb1Y3V1BmY2NEUnVmV1pkTzJJVVhYWFNoVHA4NGlZNGp6YXhjK1YwZWZ2UUpldk1SaTA1ZG9wLzl6Tjh3ZS9wRVNWZ3dBbUJlOTdxcUtzNDVST1RFTUNCVnhWcmIvOFM5bVFFZEQ0TjU5WXFLUm1FQWd5QXFzY2tvb0JIMGV4T0REalFtOHliZlRSMkNHL0FreElhb0l1Q1V6bzcyYTE5ODhjWC9hR3hzcEthbWhzV0xGNityckt4YytQREREK3ZLNzY2a04zRFVUNXJPaURHVHVQQ1NTNWc5Y3lLTlRTMTg0MGQzSW9WZXhwVEpndHQrZGF2ZWVmczkvT3JtbTNqMHZydTU5WlpmOEtWdmZKdUZTNVp3NEhBcjR2bUlNVGdYWWd3ZzVuV3Y2eDhUQ2Y3WEdWRGZsKzc3K1o4S1lWcjBDQ0tDSzVxSElEaUYrT1B5aUJIQWl6MktDdXFLSGd2Qk9kY2ZmdnJPUmJYdnpYMnYyd0UrVFRoNHFGay85ZGQvelZOUFBVVjlmVDI3ZCs5bTZkS2xDLzd0My81Tk96czdlZUdGZFh6eWN5dFl1T3dzSGxqekxOKzc4UlpXWFA4cFhuaHhBMGNPTnZIVnoxL0w2Vk5IY05xc1NYenNveC9qbnJ2dnBUeVJvTHVubDF0dXVZWDFtM2Z3am9zdlk5VG9lbFFFZzRCcThUemUrTUU4WGcvclcyNUFJb0l4NW84eWlPUDVaUFNaa0pXK3ZBVWlWWnlDQ3hYckdaeFlRaVUyTGdFWGhYZ3VSRnllaG9hOStzcm1iYWdxQ3hZc1lNS0VDZEozRTFRc2dUT0lRRmdNRHdJNEYzSGZiMzdENnRXcnVmSEdHN25ra2t1NDVaWmJXTEZpQlhmZGRSY3paODdBcUdQaStBa3NPLzBVU29lTjQydmYvZ0cvZjI0VHZWM2RWQ2M5eGxXV2tnanpuRFI3R3BXbGFiYnQzTWwzdnYwdG1vNjBjTjlEditYZSsxZXhvZUVBellkYnVlWjlGNU93TXRENXZPYTY5aG45OGJyVzVzKzlRckFvUkNIaVloOFJPQ1UwUWs2aHVWZDF4K0VlZlhwems5Nys4TlA2NHBZR3pUc2QvNW5QZkViUFB2c3N2djN0YjNQRERUZHcrKzIzRDdvaEJRY0ZFYnBEdlRibklFTGlFS0xLcmwwN1NhZlRMRjI2bEVRaXdmTGx5Nm1wcVdIejVzMmtTMHF3Q2kySG14R0JURHFCRmZDSXFLbkkwTjRaMEhpd0hZZlB3WU9IeWVYejFJMGN6djZtQTF4K3hXV3NXYjJhWDk5eEIwTnFoM09vOVNpUjZyWE9SYWk2LzdGcjdQRm52bHdRNGFJSWswaVNEMEllWHZPWTFnd2R4clFaTS9qK2orOW0vY2FkcEV2VERLbEljZkU1aTNuMnVmVzdmdmxmdC9QUmovd2xmL1BaeitGNUhvVkNvZjhwanFLSWd5MGQrdVJMbXpuVTFNelFxckwvdU96Q2MwU01ZbFNwTEM4bm44K3pmLzkrUm93WVFSQUVxQ3FlNTVIT3BNbWtVelFmUE1qQnBsWWVlL1Faa3RZd2Qvb2tLaklsL1BicC9mekhyMy9IUytzeTNQMWZOMUpXV2MybGwxN001bGZXOC9XLyt3ckRSazZnUGZRWVAyTWVaNTIxRE44elB6WURxc3cvZXdOU2hjRzFqQU9KTXdpRFFkN0FJZmJsVmVEUVlybU5LaTRTckRVNERRanhFYkZva01jRnZkY2kwdUNsMHF0L2Z2TXZkY2ZXVi9pN0wzL2xIRktsZk9tRzczTFd1ZWZ4cFptemFjOFpYS3Fjai8zMVZTVEpNeVFCZm0rV3NtUVZ0LzdYcjdqdi9nZklsR2E0NU9KTCtkS1gvdzVqUFFURC9zYURQUDdrVTlSVlZqS3FwaHd2Y25oaU1kWnk2cWxMdVBIR2YyZmx5cFY4L09NZjV6ZS8rUTFCRUxCOCtYTEtTc3Vwckt6bDlqdCt3NVlEUGFTcWF2amdleTVpNGZSUnBLMlRyMzd5SWwzejJOTnMzYjZlbVlzV2NmV1Zsek4vemt5WlBxRmVKNDBleThIRG5TUXJxcGd6Ync2MU5SWGlhZEd6V3YvUDU0bi8zdmUraDNPdS82WVAvSWxVQ1ZTSm5CSnBST2dDSXBjbmNubWNDMS8zUGFxS2l4eGhFRkVJUTNyRFBEMVJRSGNRMGhORzVLS0kzaUJQUzIvK096Lys1WjE2NFVXWDZxeHBrL1NTaTk2aGV3N3MxYi82bTgvcTZOR2o5SlhOcjJobnBKejNsNS9SQ3ovMlJkM2ExcXRmL3VXek92WEtyK2xwSC91bW52bmh6K2szYi95NWR1Y0NYYjNxVWYzaTUxZm8xUi80Z002Y09WUFQ2YlN1VzdkT0MwRkFHRVowRmtJYXN3VnR6WWZYOWdhT0lIUkVUZ25DaUd3K3owMDMzYVFMRnk3VTRjT0g2OGtubjZ3MzMzeXpack5adWpvNytjMGRkK2o5RHp5c3oyL2VyWHZhZTdROWpNaEdBVUhZUXpZbzBKVXIwSm5MMDVYUGtpM2tDS01DWVNGSGxPL0ZoU0c1U09rcGhPU0RBbEdRSllyeVJGSHdodGV1cjR6LzN2ZSs5MmZnZ2ZycUZWRkVGZEVZa2tQZlBCdnJxNTVDVlhLWXN6dDdDNCswZDNTUkxzdFFWWmE2WGZBYWZuTHJuZGZmL0xPYk9YL1p5Vnh6OWZ2WXRYc0hoVnpBckpuVCthK2Z0OVBRME1Eb3FkT1p2MkFSYTliK25xYldka2FOcXNDM2hvc3Z2SWl6bDB5bk91VVRpR05QOHg3ZTlkNTNZNHpQdi83cnY5RGMzRXg1ZVRrR2h3aVVlSUt4SWdrUk5Jb3d4c2Fnb0RWNHh1Tjk3M3VmWEhYVlZmMXdSbDloWWEzaGdvdlBFN0dXUWdocVBNUVlCSWljUjlKQTBpZ3VLc1R2RlVNUWdwb0U0dktvSzFDUUJBVXgzd0dEUlg3c3U3Q2h4TXIvS3psUXhMRWdGcU93OUdNeXg0QzhWd05oQUlVZ1l2WHZuOWZuTis5aTE4SERIR3BwbzdRc3pTZXYvZEM3S3pNK3Yzdm1aUzUvendlNTdrT1hjWFQvYnF6dmNlQkFFOU9tVHNZWXc5YXRXem45dkF1WVBIa2NqejcrRkMySDJ4aFpXMG5TQnJRY1BNeVRqMGUwSG1qZzNHVnp1ZmZCZS9qNk43K0dOU2xHamhqT3Y5NzRiNHdkTzFiaVBEbkNpcEtpZ0toRlRBTFZLSzUySWxlczhBWFA4MTViT29zUUdvL0lnYk1lZ1pQeGhZQVhuRXBWRUhrRStaQXdsNk8zL1JDNXppUGtzejMwOU9RNWNyU0w3cTRPT2p1NzZRaDh2SnJSWk5YSGhGM1hYM1BabVV3YVdUT3dpait4RGVoTjhZWStBTGhvT0FxSUdGd1VZeStPcVA4WXJhMnR1blBuVGp6UFk5clVhUk9NbjJyNDFSMzNzUE5JTCsrNTVpL3hVajYzL09MWHJOL1N3TW16SjVJUEl0S2xaV3pkdHAzUGZmekQ3TmorQ3VlY2R3SGYrOTUzcVJzMmpFZCsrekJMeno1UHQyemNqS2NoNVNtUHV1b3lSbFFsMlBMU0M3UVBxV1hVc0ZJU251V2ZmL0I5T285MmtQRFQxTlhWblpQSmxLNUdRTVVRT3NXNENHTThGSS9RR1p3S1lnUlZ3ZUF3UUJBRUJFRkFQcDkvb2IyOWZVRmJXeHV0YlcwYzZ1eW10VE9QWkdvNDNCWFMwYXUwZHhmbzZzblNGU2l1dDQwREd4K25kY3ZUQkQxdFJJVUFwNkRpb3lUd1NvY3pmc2tsUk9YRHFVaUZ2UHQ4aXhYdi93MFBGQ1BBTVFnWElhaUFVMFU4RDQwaWZDT0VZY2hkZDkybEsxZXVwS09qZzF3dXg5S2xTM1o5OXdmL3pLSWxwL0xLWFkrUkxLMm12Yk1INjVkUlh6K2Fxc3BTcWlwSytmMlRhem5ycEkveHczLzVBVi8rOGdvMmJkNkV0WlpyUHZSQi92M0dmK2M5VjF5R1YxN0wzM3oyczh5Wk5KcFVPam5oMjEvNHhLNTBTWktTa2pUcGhKV0VLTDRFVUZ1SEVRUEdFam5GaVNFcThtZUJtdkhaME96S0Y0UnNBYnE2ZTJocmFlTkljek1OVzlmVHVHVWRoNW9QY3VqUUlWcGFXdWp0N1NXZnoxTW9CQlFpQStsYXhwNXlBWVhNQ1BLU0xnWm9KV3VTcEZScGErMGgzNVBIQkNHMkNJQ3E5dkYxUWlBbDVLU2NqTzhRendkeC8yT0l6Si9XZ05RVStTbkJDVGlCd01HK3hvTWE5WFl6ZGR3WTJiUnBrMzcrODUvbnNzc3U0NU9mL0NUMzNITVAzL3pXTjVueTg1K3c3S0tyU1Q3MEF2LzU4enZ3dkFTK2VPUjdlNmd1SGNuNTU1N09QM3pqbTN6MG1yOWd3c2hxOXUvZngvRFJZeEJyK2VTblBpVVhYbkMrZG1VRGhvNGFTMDExdFpSNHNSbFBxS3NRRlVHRUdIUU1ROVFwUnBSSWMrTTd1M3QyZFhUbk9OVFN5ZmJkZTlpNVp6KzVSQTJOdlNrT3QzWnhwTFdiZkM3QXVEeWU1dG03NFVtNmQ2d0ZGL2FEZUgxNWtEVUc2d3hhWWdta2xGNnZtcHlrOFZ5QTczSVlGRTlEakF1UktNQ2dLRUtFajBpSWtBUEpvY2FSTjRKTFdNUTZoQkJJL0QrUUEwVVJ6aGg2bmFNbm05V1NSSEpDUHBSZFAvekpyd2h6dmR6d3BVL3JrOCt2bzZPemczZGRjU2xqeDliem9XdXU0ZDU3NythUmgxWnh4Vi84RlNOSGo2Smd5L21MOTcyVEIyNjdqMS8rK0NZNjlwN0JSUmN1cC9yYlgrSHhSeCtrMUxkOCtLUFhzdlQwWlJPU21YU0RjU0dUcDB3V0VRWGpFMmtVbytVdXhJVkNYdnhyTzdMdVA3cTZ1bW5hdFkxZG0xOW01NVpYYU5pempiMEhHdG0zOXhBZEhaMDRpYkNaRVl4ZjlqNDZNeU5STEJFbE9NcElTSjVrb1pWSWZVUTlGSWR6MFFBcXhPQmNqQlhoaElRS1FSUVFTUmFMNG1PQVBJWUN4bW9NY1RqRlloQXNRa2lFNEl4UFpBUkxnWlQxOEgyTFU0dnBWd0tFNVBONTB1bDB2eExnejhjRGlhSGdsTWRmZWtYdmYvQVJQdktCOSsrcXI2OWo0cXlUdWUyL2IrR1o5YStRcWFnaWpFSzJiZG5Na3FWTFNKZVdNbno0Y0hZMzdDYmpDek1uamVUcGRhOHd2Tnp5eFU5ZXdUTnJSMUJSWGtFUzVmeXpsOGdGWjU2RUZVRmRURk9JaTBsVVl6ekNLS1F6VzdpdE5TZnZibXJycHVYUVlYWTNIbUg3dnFNMEh6bEtWMHNUenoxOEI0V1dCb3c2SWltZ29vZ3J3UUJpSFNvK29XWkEvVGdraTBYRkozSVJWZ3cyY2pobitnVWVmV3k4YzNFb2NoSVhEekY0ckloUkZFTVFHaUkxS0FVaTU0TjZPQkZFSFVvaE5qenhVRW5pTUhnYVVtSTlmTjlIeGFMRnoybHZiMy9oUnovNjBZTHJycnR1UWxsWldjTUpSNmErZVJrZnh3bE5sYkd1b1lWaHoyeG5mRk9XRFZ0MjB0UGR4YjMzM00xblAvRVJSbzJxNXo5LytqT216cGhCWjNlV1RhOXM1dlNsU3hoZVZTSG5uVHhOSnd4Sk1USmpHVnFla3Nzdk9RTmpCUStRTU1CS1hBbEY1Q2tFaGU4RVhZWHI5KzNlellzYk5yRmgyMTYySHluUWtSNUphNUNnTnhjU09VSFZ3NC95WlBKQm5CQnJpS2pybDNPOCt2SWJWVHdYQTV1WUVNRmdORUl3UlozUEcxOEJvOFhRYlh4eVVrSk9MTlk1RWdqR0pTRktRT1NEeEFia2pNYlZxeHRNMFFoS3d2ZElKYnhpTlJ0WHI3Mjl2UXR1dnZsbW9pamF0V0xGQ3ZGOS84L0hnSEFGQkk4cEUwY3h2SDRTZDY1Nml0cUtOQ2ZOR1VjMGZTS1BQL0lBMTEvM01iNXh3dzE4NVlzcnVQTEtxeWhKWnpqMTFLVjg4WXRmb3NRcWl5YVBrb1ZUUjZFaVJPcFFHenR2NXlETU9qcVB0dW1XYlp2NC9iT1A4OUxHRGV4NDhSV09IRzZsTzFzZzYwcElqcDVIN2FKaGROaHlJcE5DckNDUm84ekxZVFNMdXBoQjY2ZGdoV0ltTW9paXhaSEFFTVkzejJoY29lRVIvWUdLeUJYTGZDZGdURVJDQzVTNEhCWFdVbkFlbGw0OGNrQ0E5SkczMkNJZExNVlNSREU0a3A2UUt1cUorZ3dvbTgzUzI5dkw5Ny8vZlNaTm1xVHZlYzk3NU04a2hDa2lFU21CR3Q5ZmVlWkpzNjgvMFBBZ1Y3LzdIVnk0Yk9xNkoxZVhMbGoxcTUrejVwSGY4b21QZmxoT1czS3E3dG05bTlwaHd4ZzNkb0pZYTNFdVFvd2hWQ1hDMGhsRTJ0NmRZOCsrdyt4OFpTdS92Zk5PWG5ocUxXMXRCd2xkRmpXS2lRd1dWMVQ2K0NTaUFza3dUNHBDVElJQ1ZwWEtqTWU0cXBIc01vYlFlcmpRVVdSUDRrUzRpRklaQllkUGdTUVdoekVRdVFLK01hZ0JOUWFNWURUV0Z3M1M1aUNFMXNNVDhEUkx1V3RuMnJTeHZHUHhET29yUytsUVM5UGV2ZHlmWGMrTGpTR0VpdUJSVUI5RGdhamZJeW9hUlpTbVMyS3lXRjFNNDZqUzA5TkRQcCtucDZlSHYvM2J2MlhvMEtHNmZQbHkrVE13SUFIeEVIR2tYVzdGc2prVHJuL3dYc08ybHpkdytaTHhDeGZObXF3ZitkRFZ6SncrRFZWbDVNaFJNbUw0Y0NJWDRYdVdJSEJrbmFHdEs2ODdtenA0ZWNkK05telpSY1ArWmxyYmN5UUwzZXgrY1ROZHJXMklPb3o0UkZGVWxLMkdXQndRSWtSWWpiRHFNSnBIVkxFYW9kbVEybkVqTVZLSXF4b3pTR2c0dUJad0VWWWdvU0dHUEdXWkZCcm1rSHduWHRnVEJ6RVJQT3NSQk1GZ0lFUEE4eDNWZnA2bHA4L2kvSXRPWmRQNmJheGFzNUdzOVpreHNZNHZmK1ZMdkxCNEdnL2VmU2NiTjI3RmR4NU9Rd2Fab2tCMVpUa0pLK2VJeE5SUkZFVjBkWFgxRTdndExTMTg3bk9mNDVaYmJsR09nM3o1VHg3Q0NqYUIwWUNrQitQcUtpYWNOR2ZhcnA2ZVRxTFFYVHVrdWtLK2ZjUFhNTllEQktjYVMwT0RrS2JHUm4zNjJmVTgrWElEKzdJcGRoK05PSm8zT1BFSk5ZMmFNc284SWUrQmVqa2t6S05POFl4SFNBUmF4TGpGRUVtU1hsTktqeTNIbUFpckFRbm5NRWFaTkdFVWRiWGw3RDhhOUd1SVhtOGxqSUxySWVHT2NzVkZaekJuN25pNjJqclp1VzRkang1NWljMk5IbUVZRWtVUklnTU5VVEhHVVpHQzkxOTZOb3ZPWE1xdkgzeUNCNS9ZUUZjK2lZZkhjeTlzSWQzVndHVm56T0xMTjN5TFZRODh3QzkvZlNjOTdUM0YwS3I5ZVZCbFJTa0NEVkkwV0JHaHU3dWJNRHdHSVd6ZHVwWHJyNytleFlzWG4wZ2VxSitVZUkzUVFOV2lUa2tMRFgvMWdYZUNnWVJ2Zm14c0tnNGJMc0JGU3RPaEZsMzd1OSt4ZXMzRFBQZjBVelEySGFXUUdVMzl5UmVSejR3aVI0cElCVEVlU29TS1JTUVdtVnNURTdjT1Y5UTJ1MWh0S0laSURLSHhDVXdDWDhBNUFja3pZbmdGVjd4akFTUDFjM3psUzlkellOLytvdUxaRkkxQUFROFZneVZBOHAxTW4xckg4bE5uY05mZGoxS1dTYk53NFR6T1hUcUxEVStzNWZkUHJtWEwxbzNzMnJXejN3dXB4bDdqMDUrK2psTlBQNFVmM2ZvZ2o3NjBreDVUU2Q2bVNhamdPMGZqN21hK3RmWis2b1lrK05CZmZJQlBmL1p2K01ISzc5SGRrOFZSSUJLRHhhTzJ2SXlFcGNGcDdKR3N0Unc1Y29Rd0RBZmhUMnZYcm1YNjlPbkh4UXNkQndOeU1XcUs0RVNPVVJZSXZsTlVEU29KUEVLR2xhbW9HTElLdVVob1BYSkUxei8vRlBmZmV6K1BydjQ5elljUFVRaDZZa0JOazVnU1JiRGdCREVHRHdjYVlGUkloR0JEZzFFUDBRRHJXUUlYUDVYR21waW5Jc0s0QXI3bVNaREhDejBpTFZDU0NqaHJ5VUo2RHg5Z1dFVTFQL25acmF5Ni8yN3V2dk4yR2c4ZVFxTXdKanpWUndFcjNZd2VQcFIzWDNFV1R6MjNsZDg5c3h1bkNSNTY3R2tTUFEwc0dWZkwrOS8vQVNxck1temR1cGwxNjlieDVKTlAwOU9kNWUvLy9odE1YM3dtUC96RmZmeCt5Mkd5VWdXYUlLa1JpRU9sQUJvUzVmTWNQdERDUDM3bnU5VFZqeU1Nd05PSWdEeWhXRHhKTUxRa2pXY0VGUXN1ZmxTUEhEa1NoKzVpV2ErcWxKZVhrMHFsMXAwWVhOaXJ5dDA0ZFl6L0dxbUNpVnRhZ21MRjBwNk50T0ZBSzJzZXZKODdiLzQzZG16ZGlBc2kxUGs0MVJpaEYxQVhvUkxnVEVoa0l5SUpVWEdJR2hTUFNBd3FNYWhteGNZaU11dmpJaGRqT1VoUk42d1l3aGp4RlVQSzlUSnpaQmxubmphWG0zNTBDN2YrNkVibVRSM0Z1NjY0aU10KzhRdCsrdk9idWV2MlgxUElkcU9Fb0RuS1V6bmUrNjVUc1lrQzkvNzJDYkttRWx3U0d3UWMySDZZbHgrOGl4L2QrQytVbFpjd2N1UUl6amhqR2RkZnY0STVzK2ZRMDlQTnB6NzFCWTZZWVlUbFkxSHJnWm80TVI1RU5Xc2N4aVBIM2oxN0VJMUJBalNPaWI1eFZGVm1FSTJ2cnBGWW85M2MzUHdhUHJLMnRwWkVJckh3eEFoaEEvVzR1TUdYeEFvaXNYYW1QWWMrdFdrdmoveitGZFp2M0U3THRxZlkvY3AyY0JGR1k5YmJHQnZ6OTByYzhTQ0d2bjRJWjRySEZFV2NGdW1Sb3RoZGhMcGhkY3ljTTRjOXUvZlJ0SDh2dVd5MjJOb1RZVFRFa2tkY1JLV2Y1K3BMM3NuT25VMDh0Ym1KOWw1aDdXT1A4dXlUcXpuNXRPVjg3Sy8rbWlVbnplZWUyLytieDU1NEJtT1ZkMS95RHNhUEc4Ny8rYmRmMHBZejlKZ2tQajZweUJJVlN5VXhoczdPVGpvN084bm5jMHliTm90TkcxL2huLy81aDJ6YWM1UnhwMTFCcUI1T2ZVQXcvZjBqcjhKN0pOYVhhN0VhUkFWeGpreEtHRktkN3MvdmxEaGtOVGMzdithV0ZBM294TWlCUkFkN0krY1VkYkVHS0xJV294RUd5Njc5aC9uSEg5L0JnUzRQMVFTaWFWd29pQ2pPeFhib1hCOE9JNGdtZ1JSRUZxc1c2K0orS01HaExvOGhpRC9SR3NwS3kxbjVuZTlRUFdRSXlVUUpUZnYzOGVDREQvSGlwaDEwZVdWNEZQQmNGazhOQzJaTllzSzQwWHozWDI2bFBXdFFVNElMUXdvdTRKSFZxOW13YVRQdnZ1d0NQdlRCcTVrNy95UU85c0paWnkzanV6KzVqLzBIQ3VTb0l2STlrQ3lSNjBGc0VJZTdLRVRWa1VqNERCOCtuRi8vK2xkczJyaUZqdlpPYk5VNFFqV29TZUNrcU1OOGxhNVp0VWcwbzBTT2ZyWWZ0VmdnNllWVVZ5U0xmSmxCMVZFb0ZHaHBhWG1OQjZxcnF5T1pUSjRnQmpUZ09YSllRajNtaDBRTW51WVJ3UE5TNUNWRDNpWXdLbmdhdy9kZ2l2cWFJclpSQk1qRUpKRVFmSTBCU2Q4b0d1VkFJOVJZZk1sakpVQkV1Znp5eTBsbjBuejBJeDhsbmNwdzBzTDVuSHZ1dVh6ODAxOWdUNmV5Zmw4bjY3WTEwdDE2aEVzdVBaM1Z6MjNscFIxTnhmd3FJaElUOTQycW8vbFFNLy8rb3g5ejIzK1g4WVV2ZjVXUFh2MVJmbkx2MHp5NzhSQ0ZxQXJ4MGtBQXBnZG44b1RpQmtod1kyN3E2YWVmUnRWZ3hDc0tud1NNd1lrcDBoVlJFV0tRMTVYSGFOSEFWQXlpdHFpOVRsS1NFa3lSQ25GTzZlM3R2YTJ0cmUxVkFVRVlOMjdjeXVQRmlSMFhBNUxpVXhGaENNVFFlT2lJQm1IQXVERWpKRllpaGxSWHBpbkpsQkYyQi9oUlVMeDR0cjlRRUJGS1NqTGt3eXhSRUtDdUY4OFBzYTZUMmRQbmNNSEZTL0VJMmIzN0VLMmRCUTQzYktacmM0S3FFY081N05MTCtQbE5QK1h3NFNNUU5iT25ZU2QzM1gwUFhycVM4UXVXY2VxRjcrR0tpOCtrdHNSblgzTVBQN24zR2JKU1RxWHJRTFJBaE8zdkordHJYcmJKRkxQbW44VHF4NS9uenQ4K1RwY1pnVGkvU0d2a01DYkFrY0JSOHBwaXAwOVdHc3N1WXFMVUNVUkdjY1poWFlnUW9tOXlPMVMwaUloYkxNcndZWlVrRTNLN3VoQ014Y1FoODkySER4OSt6V2RQbVRKbC9KRWpSMDRNQTRva3pucEZReUx4NkNpby91ZXZIbUx4b3RtTUd6TzgyRTdzeUtSOVN0TStuZ1JZRTE4Z3BLZ1pFcGc2ZFNwZitydXZzbjNuVnU2LzUwNjJiTjJGazE2bVRoN09WVmVld2UrZmVabU9veTNVMVEybkpKbGgwWUw1bEdRYk9XMzJlQTQwN1dYTm1qVW9GaVhDaUJDRUFibWVIaHAyN0NSNDhsbWUzbnlBK1ZQRzhzeVdQYlNISlJndHRpbExSRjlEa0JSLzkyeVN6LzN0Q3RKbDVhejgvQXFpTVF2SUdVZktLbWdZOTdRNkR6UUptbml0QnlrSzZGeGYwMkxmUjZrV3ZZOHJOdTRQOEVFeUdNaVVJcVdoR0l3RzFGV1hrL0R0bGFxdW4vTG82dXFpbzZOamtQY3h4akJ1M0xoM3Q3UzBuQmdHVkNDQk9BTXVpL09WQjU0L3dFUFBIV0wwcEJCTGhKRUVpdUQ3MGJxNktyTWdzU3ZFZVphOGhJZ0Y0NFFoMWRWODZqT2ZKbDFXeXBtbm44RjdMNzJVSjU1Nmx1ZTI3ZVc4RDc2SEY3WTBjTjlqNndnMGdZdU80RWRLdFdubDhtWGpHVGRtR0ovKzVOZnA2ZWttY2w3c1FUUW1MVFJ5cUNtaGx6SmFjeG51Zi9FZ2thWUFpNmNSa1RHb3RVQ0lFUXMyQWdtNTR2SVBjUGxsVi9DSnozeWNYVnMzTTI3NFlsSytSU1FnRkorSUpGWUZReFpEOWxXdHhhL0N4MFJpTmJOYWpEcEVBMURCYWJMWUhUczRoK3hUL1lvRE5UN09LajdkMU5lVVlmQlJDZU04VU9IQWdRTUVRZEF2SVFHb3JLeGs2TkNoSjA1bnFrOEJuT0JzbXMxTnJYclQ3UTlSSU1HUmxqYWNIc3VRUENzcjZtcHJIc0cxb2dyVzZ4T2dLek5uem1EVnFsVTg4ZVRUSkVRNTY3VFRPUC9TSzdqcS9lL25nV2Myc09yWkxmUkdIdGdrSWlGV2ozTFdzb1djZC9aTVZuemlMOW0xWXk5UkZNVlpkdFRQSGhYdlpsek41WU1RSXpKSXlhZXZVaytLRWVwR2plUkxmL2RGdnYvOTc3UDJkNy9EK2lPSUl0Y3Z6ejMyRHhrRVdmeVIrc3hqSHVkMVlMNUJrRWl4dWxSMStCWkdqNmlMaHlvNGNCcExiSGZ2M2owSWhRWVlPblFvUTRZTVdYZThHUG0zM0lDU0d1S01jREFiNlUvdmZZTGRSM0w0THNtUjFxUDk1Q1VvdnVqcXVpSFZHSlRJeGFKMHJNVVZsQ2VmZklxQ2d0Z0UxZ1hjY2RlZDNQdlFveVNIVDZGeTVtbjBwb1lSU2hKMVFvSTg4MllPNC9LTGwzTGp5cFU4K2NTenVEQStudFBnRGFXZWY4em9tWFJKaW05OSs1dnMzYk9YbTI2K21Wd3VDMlZ5M0VWYWI0VHRxMFlZY1pUNGhwRjFOWEVJbEdNSmUwTkRBMUVVOWY4dUl0VFgxMU5lWHI3d2VIMHZjenhPTmFmd3dOTTcrTzJ6T3doc0djNGtPZExSU3pZZmFhU3hITUVUUjIxTkJVbGZVQmZHWld3WW9paFJGS1BaVVJERS8zWktkMDh2Unp0N3lZWWVnU2F3SmtHQ2tIRWpxdm53WDF6S3BnMGJlT0QrVlFTUndhazlObFpGWGdXc0RCQzN2WkVSU2JHcjRyM3Z2WXJxNm1xdSs5VGYwTjNWRlR1d0tIeHJpT1gvRHlGRlVOUkZWSmFtcUNuUDRBa1lFNlB0aFVLQi9mdjN2K2JobURKbFNuOTcwUWxoUUFVc20vZTM2My9kK3pUZFVZcElQVUludEhUbWFNL21pNGk3Z2tiVTFsU1NUdmhGQldFY1lnUUdsY0dxcm04OFZDeW1rUVNDd1hNRmhpUWRWMTJ3bEh4T3VlZStSeW1veGJuaVJBNzZtMTVmRDUxNzdRdHlEQVFWYTFtd1lBRlRwa3hseFJkV3NHLy92dGRMYVA1L3FCSUd6eUw2WS9GWlFUSGlHRmxiVFNibHI3VEZzR3lNSlpmTGpkKzFhMWUvOSt3enBGbXpadjNCS1NuL3F3eW9JNUx4UDczdE1mYTNabU9sYnpIdk9OTFZTMmRQdHQ4TFdCekRhc3BKK2g1TzNldmM2VmM3amo1R1RmQ0J0QVpjc0hRVzh5YU01TmUzUDhQQlF6a2NmaXpERUkyaC93SFMwaitxZ2d4RHhQTklwMUtNR2ptU2YvcW5IN0IxNjNZMCtwL3JQUitZakJ0ak1LS01yQnRLT2lrckRNVUdUYUNucDJmWC92Mzcrd2xVVlNXWlRESng0c1RqK3IzZWNnUHFMZWl1VjNZZkpPY3NUZzIraVpQUmZHUTQzTm9aSzdLS1pHdHB5cWVxS2hQcmQvNUFYdEdYcnhwMWVGR2VhV1BydVBEc2szbjBrV2Radi9FQUJVM2p2RVJNU05MWDVtSmZOejN1TDIxZWRYeGpEQnFHNVBKNVZqMzBJSWVhbTFHblJRTi9NOGkwcnl6dmExdjY0d3d1THVNcGpybnIveGJINnZ5Qng0YVkzOU9ReVJQR0ZqVkh4ODV0OSs3ZGRIVjFEUnJuVWw1ZXpvUUpFMDRzQS9MOTFMcnFJWm1pT3ErVUlCSWlRc0lveFlFREhVUVNFdEtMdUFRWm4zV2pob1VZSzBRdUNmTDZOWXdLcUJlRGpFbnRwYjYwbXc5ZnRZUVh0alR5NjhkMzBDNHBDbDRLcDZaL3hseEVWR1NYOUhYS0dnR045Y3RhQkF0VlkwSVNkVVNGUEwwOVhSU0NxRmh4YVQ4aUxBcXFIbzVrOGYwUm1KaS9zNkdINTd5QkJmaXJZeVJpWXBtaklDUWpvVFNBUk9qaUdUK2FBazJoeGlDZTRQa0czeG84NHhPSlJTVWtJYjFNcTYvQjcrc0hOejVVQi9ibEFBQWdBRWxFUVZST2hTMWJ0c1NWWjkrTk5ZWlJvMFpSVjFjbnh6UHBmOHVQblBUdHdoRzFsUmdVRi9YRmZNR3AwTmpVU3NFNWtIZ1NoeTljT1h4WUZWYjB6UjlhSmU0R3RVTFNzNXg3M2p2SXFlR08reCtqSXhzVmhlenlXbWZ6K244NEZoUmxvRHpydFluMkczdkRDRXNCcXc0YldheXpHSldZNXBYb0RRd285bG5XRlFzRXNSUzhFckkyUmM1TGtoWEJweFBmdFdIRFhuelBweXhkU21WRkplbE1TUXdSaUZCWlhzYXcyaUgwaWNqNlpMTWJOMjRjVklFQnpKOC8vN2lScU1ldGpFL2dxQnRTZ1NmN01jWHl2RytzWE5QaER2SUJiV25mVkF1Q0ZXMFlWVGNVb3h2Nis1cmVLSHdaUUtJQ0p5MDZpZktoSS9qWnIxZlQyTktOMm9vM2xnNGVyeVV4OVdEVVF6V0prb2pwQ2xHY2lWNFRnUWFlaDZkS2dCSWFROEVhQ3BIRDl5S0llcWxLZFRHMXRwUUxabDdPcE5vUE1yRitHS2wwa2hjM2JlU3JYLzBxUFYzZGpCMDdsc3JLeXRlWStVc3Z2ZlNhejVzelo4NkpOeVBSSTJMa3lEb0lYOERZa3BpZ1JJaFUyTnQ4bE43UVZWVW1QVFJRUENQVWp4aEN3amp5R3IzeC9USmdjSXdjT1p5cXFpcHV2ZU1oR285MkUwb0pxbS9OS1FnTUlqTUhYL1JCOVQ5cUxKRzF1RER1Q1hQNGlBbUlQQ0V5QTRCQ09jYnJPUmREQTBOckttbXhNUUhydVI1OEtWQnVDcHl5YUFibkxKdk83SEhEcVBNVFZGbUx1QWlzOHVoVGo1UExaUkVSNXMyYlJ5cVZHbFNwWnJOWnRtL2YzdjlaSW9Mdis4eWRPL2ZFTXlDTFkvVHdTbEtla0hPeHJEUWVjR2s0MHRGRGU5WXhMT1BqQzNnS3c0ZFdVWklVdXVXTjNVamtZdjFQWjNzN3YvdmRFeHlVREZtdkZLTWU5cTBxa0lTaTRFejZjV0xQR2lLaVloUTJpQ21pd1JqQ1NFaUl3Mm9PdElCeFBTUnNnQ0Vra1VoZ2phVzhQTU9ZTWFNWlAzNGlNMmZNWWY2OCtXemJ1WjBiZnZoZmxFZ2VvMGVaT200azc3dmlITXBLUEhZZU9NVGRtM1pRYU5wTFhZbGgwZHdaN0d6WXpvMy9laU11aWd1TnVYUG45aGNjZmNheGRldFdIWmhBTytlb3JLeGs4dVRKdDU5d25hbStPb1pXbEZCWldrSm5SNFFXeVZVblFqYTBOQjVzWTNMTmlEZ0JFMGRWV1FrMWxSbmEzdVE4NHlMZm83dTdsL2F1YnFLcW9SU2toS1JFOU0xZmZRdnd6K0lUWFJ3TExMSHhpSW41Ny82UndNNGhZVVRTQmFRbGl5Y2htZEkwbFdtUGNVUHFxSm4xTGthWFg4V01HVk1ZUFhvazVlVmxaREtsOVBia3VmdXVlL25INy8wVDNUMUNYZFROT2FlZnlhbW5MR0xObzAreGJzTTJqdllxWHRURndRMlBrZDMzTXBVbE1YWFJsUzJBR3Nvcnlwa3hZOFlnajJLTTRhV1hYaUtYeXczNjIrelpzeWt2TDcreWI5THNDV05BQWxTV2x6R2t1cHpHenE1WVVWZzgzOEFaOWh4b2hsbjFpQ3JHS09ta3ZYM1U4TnAzYjM5ZGhEZkdmbFFFSjE0TU5Jb2hWSXNUaStJd1JMaitjdjNWV2JDK2lzMkd3WVBGajAyYmgyTWhBWUhTc2xJbVRaL0FpTkhET2RMVXd5dWJObkMwdXczeFBGTFdrYVNYTTArWndxSzU0eGc5cW83aDFSbUdKRHpLUFl1bzQyaDdHMDFOKzNuNjZhZDQvdmwxckZ2M0VodGUza0J2YnhmSm1ucXV1T0JzcGkrYXk4OXZmWUF0K3p2cDFDRlk4U216YlVRMmpWT2xzNmNMY1JyMzJ4dkRtREZqR0RWcVZIL1BlNThoUGZmY2MvM2hxODhEblhycXFYOFVaZk8vem9CQ01hUVRac0xZWWVsZEwrOXVwV0F6R0lXazVnbERaYytCRmlLTk5lQ2lqb1FKcjZ5dkxkV0Voa1Y1cG9jamlzdmx1SytpZU92elJKSkhUSWdseExvSVIwQ0JFQ2ttc2NXMno0RkFDNWdFUmd1eDVFS0ljekkxcUVCT0xBbXlsRW1BNXdvNEhOWW11T2ppQy9tcmozK1lXUXNXa1NoSkVlWUtySHJnTi96dDlYOUhXeUVpTFUyODc5M3Y0Wkx6VDZjMFpYR0ZpQ09IdW5ueDhBRmVlTzRKTmoyeGxvWmQyOW16ZHljOVBWM2s4d1VFaTFNbGtiQmNkTW41TEZ1K2hIKys2YmRzMjk5QlRsTVlJNkFCTGdxS3ZmTVNxem0xcUFWeXlzeVpNeWt2TDVlK1laL1dXckxaTE92WHIrK2ZSdDluWEtlY2NzcWZaSkQ3Y1JIVis1YUdDYVByc00vdEE0bkZaVGhGaldYWDdrWkNPRnRGVnNmUVBFd2NPd3Fqd1lCaVZ4aTRKWUdvUVZWUUVrU2tFQko0R0N4Z0RBT1FZaG0wdndVb1JneEdCSEdLOVJJazA2WHhtOFNSdEJHcEtFZEZRbGkwZUQ0dlB2c01WY09HTVdmdVBBcjVISDRpUWFva2paZE84YTUzWGM1TG03YnhMeis1azNQZWVRNnpGc3puOGVmMnNYM3JpK3h2MkVKUFo1S210aTYydmZJNFhkdldZUW1KWEw1ZklxNDRqRmhPT25rUksxWmN6ejFQYm1USDNrUGtOWU9Ld1dnSTRwQStHRURwcDMzaTl3b0xGaXpvTDh1Tk1Uam4yTHQzci9aeFlIMEdVMUZSd2F4WnMvcTNXckRXbmpnNFVKOFZqUjFaUzRJOFZ1TUxFZzlvRWhxYjIrbktSbys0WXErVndXTjhmUjIrRndKaGY4WXpNQ1Fad0ZNZjFUUWhhVFFTYkZUQTF3TGVINWlSTE9vb0x5L2o2Zys5bnp0L2N6Y0xUajZaS0FwSW1JaXlvSlhaWTZwWjhabXJjVUVlRGZLME51N25obS8vQSs5NTcvdTU1cHByYUdzN2lqb2xrZkM1NG9wM1VWcFJ6ak12NytiVFg3K0pmL3lQMjNuK2xWZVllOXFwbkhuWnUrZ0lVNFJhaWpXR3lFVUQrTHo0UEdxR0RPRnIzL2dta1NSNS9LbDFaQ05ES0lraVNHamVGQXFycUt4azNyeDVXR3NINFQwYk4yNGNKQ0lEbURkdkh1WGw1ZEpuYUNjVUVxM3E4QVRxNjZxb0xMRllMWUE2bkRGRUJycXlzUGZnVVp4UlZNQ3FZVmhWaHBycU5FZ1lEK0NVd1Y0a0ZwWEdmVk5Jbm9SMFVKM3NaV1JOZ29RWHZURjFvSkJKcC9uK0QvNkpIL3p3WDVrOWJ3SGJ0MjNCcDRBTk8xZzZxNTR2Zk9JaUhsLzdQTTgrOXlKQlBoZUwvMVhJRmdyY2Y5LzkvUGpILzlrZkZrYVBHYzNRMmxvYW05cm9MWGlNR3p1U0ZaLzdHSmRkZUNaN0dnK2d6b2NBb2pEV0MvV1YxTVlZakJHdXV2SXFUbDY4aE5Wcm5xRHBjRHVSSkFuRmk3WFJyMU1JeUFEb29MNituc21USi9kN2xMNWpQL1BNTXhRS2hVR0U2WklsUy9COWY1QlhPbUVNU0ZDTU91cXFLNmdxVGVCTDdKclZXQUtCWE9UVHNMK0Znc1F6bjhVWnF0TEpsY05yeTBDRG9xRGV2TXFBRkdzaU1MMVVKTHM0LzlReGZQbXZMK0NEVjU2TmZiTTZYcFNoUTRld2ZQbHlFcWtVR3pkdXBLMmxpUktiWS82a1dqNzVvUXQ1NmVVOXJQbjlTN0dTMHNhaWVwd1N1cmdyNUs2NzdpS2Z6d05RVmxaR09wTkJYWVN2QWVlY1BKM1pZNFlTRmdwczI3b1ZRNFJvR0lkT1l3WXg2VFUxUTdqbW1tc281RU4rLy9UekJDRkVhbkdZdVAvdGRUeXBGS1VhTXNDckREeHVkM2QzUDREWVo2aSs3M1BLS2FjTU1ySVR5NEJNckljdUw3RVR4Z3l2eHJvQ1JpQlVSYTBoSC9wczIzV0VTTng0SkZZZXAzeFpNWHJVa0pnR2tIaXkxMEFqY0VYNWd5YzVMajFySGwvNXlJVzhjK0VZbXZjMWtpMjhXY2V1TUdQNkRHcHFoaUJpZVBhWlo3QkJEeU5LNGJxcnowVmR5SjJySHFkTFN1a2hOV0NNU3V3UFBHdlp1bVV6SFIwZC9WN0lHSU0xanJLa1kvNlVPa3B3dExXMGNlRGdZZFNBc2E0L1B3R3dOcjdFWjV4eEJwTW5UNkx6YUFmYk4yK044enlSSWtHc1dBMzd0YzBEUGFpMUJqK1I0SlJUVHlXUlNBemFQcXF4c1ZHM2J0MDZJRlFxbzBhTll1Yk1tWU1rSFNlVUFWSHNaVXBZR3FaTkhCTnJmdEc0SWRBSTJDVGJkKzRqSDRTNzFNVnlCQS9IeElsandBd3NzZ2RzNDZZUVlrbjdTVTZaTnBHNkJIZzlBVnMzN0NKMHBXK0lBd25Db2tVbjRmdnhoWC8rMmFkSWFKNlB2UGRDWm82cDVlSFZ6OURjR2RJbEdmSW1UU1EyL3Y1RlBDaUs0bTBTRGg0OGlER0c3dTV1c3QzZE9DS3Fxa29ZTjJvWW9vWU5yelRRSGZnRXhpczJQSUtmOENrcEthRyt2cDRaTTZaei92bm5rVXdtT1h6b0lKMXRiUmc5eHJMSC9TdmhZTmloT0xjeGloeFYxZFVzWHJ5NDM0RDcxdnIxNnpsNjlPaWdVRFYvL255R0RoMHFmUnZlblhCVldLUStSZ1RQUlV3ZE40S2tGYklvT0lkVGl4bzQyTkhGa2ZhQXlwb1VsaERmV01hUG5rQnBTWnFlN3Q2WUx0QUJBSi80T0N5MUZRbW1qQjRLQ0EwSFd0bmJkQlNSTXZEeWFKaER5Y1ZkRkVYak0xNktrMDQraFVpVTVzTkgyTHRyTnd0bmpXZjVxYk5vYmUvbWlSY2E2UTFTSkQyRFR4UUhTK01kZTNKdExFNFBDd1ZRT0hUb0NDMUhPNmdaNFRGbDNDaktNb1lvS0xCMyszYXFVemtxU3N1WVhqNlhTZTljd0p6Wk01ZzFld1pCVUdEbHl1OHdmLzQ4eENpdFI0L1EyZDFOU214Y01Kb0FOQ3lLeFdLZzBoUjNVRXhJUEtWazJxUkpqQjB6UmdZYVYxKy9XVi8rMDJkWXk1Y3ZqOGZlcVo2WUJxUmlBWU1IVEI0N2lwUTFTQkJnUmNENWhGS2dyVGZQL2tPZFRCNWFpbWdCSjhLWVVXT3BIVEtNZmIzN2lsc2x1QUZPTGRiK1RwczhocUZESzhrWnkvcmRoMm5QRjV2dFRCSWhDV294RXYvZ0hOV1ZsVXlaTWdrbFl1K2VmYlFlYnVILy9QMVhLYzJrK04yNjNUUzNSU2hKdkREQWt5S01JSDcvaG5SUkZBKzBxcTZ1UXAyeWFkTXJ0TGUzTXpUTXNYakdhQkx4WEJET1BlTlUzbkZlT1hVMVZReEorRWh2Tnp1MmIrWGhoMzdMWFhmZmlUR3h1QjBjMlZ3UFlWQW85cDI1NHZUVkNGR0RNeFpuYkR6QlhqdzhQMFUrbitlVXBhZFRXcG9aMkRYTzBhTkgyK0tHeFdQYkdWUlZWYkZvMGFMWGxPM0gwNWplK2hBbVJiR21FYW9ya3l2SERLL0dsNUMrR1YrcVFqWWZzbU5QTStHeGZRUVpNbVRvaEhIanhnMGlDUWNtQTc2QitRc1c0S1ZLeVNPOHVIVVhnVTBTU1JJYlpMQkJCdU15c1o1RzQ0YmZTVlBHVTExUmhpL0s3bDNiR1RkMkRLY3NYVXBlWWRPTzNlVERxTGlucXJ5bWtJdjNUaFZLTTZYVVZOY1FSUkdQUExRS0YrU284QjF6Sm81QWdnQWp3cVRKazdHZVpkMUxXL25XMzMrWGl5KyttQXN2dW9pdmYrUHJyRisvbmlGRGhwQktwWkJpeDZ0b1BCWE5hcXl2RTdVb2xqQ0tId2luUWxsMUxSKzY5cTlKbEZXeC9Oeno0L0EvWURVME5GVHQzTGx6MEdaNEV5Wk1ZUExreVJQNEU2N2owQnNmOVZQb0hxeVlPWEhrOVJ2M2JxUmdTN0JpRWFBUUdyYnMzRWMyV3ZpZHBQVldpQ29seVdURHJGbXplUFRSUnpIR0RCSkhDUTRyeXBJbFMzSEc0MGhubmwzN0R1Q014YmlRaE92QjF4NUVBcHdvVmcwWWp6bHo1cFBKcEZHNjJiUmhQZWVjZlRhWnNqS09Gb1E5Qjl1SkhCamZGRnVHNVRYVkpPcVlNbTA2cVhTR0EvdjM4L0RERDJId0dWcVpZV1J0RldxRUo1N2Z5STIzUDhxQkRrZlEzY2IrOWIram8yRjlVYThZVzJVbVV4cmpOODVSVWxhRFYxS0dpbGRzYzdJeGdLNkdCRmtTWkttcEx1WDZMOXhBMkhXWWllUEhNbjNxcE1FekIxUlpzMllOMld4MlVKSzhiTmt5U2t0TEcwNXNBeUtLSjJrZ0pEeVlQV2tFZDY1K2dkNitHUklLa1Vtd3U2bWR0cTdjOVpreWYwVkN3UGQ5NXN5WmcrLzdCRUhRNzRZbG5yTEF1TEdqbVRCeEloRkMwNkhESEcwNWhCZVZZazJXVExLRFVza3l1cjZFWVZNV00yZmFGS1pObmM2Wlo1MERRS0VRc0h0M0F4Lzlpd3V4TmtGUGJ5OUgybnZpM1pkZEgyRXkyQVY1MW1Dc3gvTGx5ekhHOEo4LytRbEgyMW94NlNGTW56cUJSTXJTRThMYURZMjgzQlNRdGFXVVVFN2VaRkFWWExHY3Q5WU1LS2NOTlNOR1UxazF0Q2hoaWdkcVdlc2hoR1MwazBuRE1ueml1cS9TOE9ManJMemhLMXg1NVJYVVZxWUVGOFpnb3lwQkVMQm16WnBCRlZsSlNRbm5ubnZ1bjd6bDZEZ1lVTnhGRVlPRU1IZnFHRXBzUkt1TE1DYVdZWWJxMGRUU1NWTkxKL1VWdFRIVHJjcU1HVE9vckt4a1lCKzNjdzRyd3JTcDA2Z2RPb3hBbFpaRFRZd2RsdUdrK2ttTUdEMmFNYU5LR1RPa2l2cXFVclNuZzVlZWU1NWYvT0pXNWkrY0IzWWtIUjA5QklXQTBXUHFBWWR6am13dVAyZ1V6V3R5T2Fla1MwdTQ2T0tMYWRpemo1Lzk3T2ZnUW93R1RKbFlIK3U4WGNTMnhuYXlYalZaVW5nU0VqRTQvM0RPMGRIUlRoaUdKSEdNcWEvanpITk80L2tkN1ZqWFFjSVlpS0M2ckpKbGl4WngwZkxaUEhEclRmenNuLzhCY3IxY2VQNjVXQ000UGFZNjJMMTd0MjdZc0tHb000cGhnL3I2ZXViTm0vZXg0NytONkhFM29HT0RrZ3d3ckRLOWN2U0kydXVibXVNdzRSQlVmTHB6WGV6YWM1Q0Y0MnI3YzQ3NitucEdqaHpaYjBER0dES1pERk1uVGViU3l5NUhiRHhZNEpSNU0xaThZRDdXVDFCd2pvTXRuVFR0M3MrdmYveWZQUFhZUSt6YXVwSHFtaXJLcTB1SkRCenQ2aUZYQ0Nrckw4ZG92Qm1LK1VNTkd3cG5MRCtEeVZNbTg0bHJyNld0clIxckRKN0FsUEZqOFZUcDZzelJkclFEcHlXSUdLekdnNnNLcnpwVWMzTXozZDNkbEpWbHFFaUZmT1B6SCtIZU5TK3llZDhoOEpSSkV5Y3laK1pVQXBSZi92ZmQzUCtyTytub3pESjd4aFFtejVwSEpGNjhwVlRSNHp6KytPTjBkSFFRUlZFLzVuVE9PZWRRV2xyNlkvN0U2emlRcVgzYlp6dEVJeEsrWFRGdDR0anIxelh1T2phTlMySXZ0TEZoUHhlZE1lZUZKQ3cwUUhsNXVVeWZQbDFmZnZsbGpER1VsNWZ6M2U5K2w4c3V1WlJNdWdRVkllZGdiM01IVy9hMHNHWHJmbmJ1YnVad2V3SHRQY0xXWngraXEzRVRRcFlaTTZkU002U0tVSVgyMW02aVhFZzZxVGpKNDZ5U3pQZ1lPdVBoNENhSmlJOExZaHpJaUZKVldjN25QdnRaZnZHTFcxbTE2aUdNaVRmbHJhcklVRjliZ1VSNU9ycDdhTy9wUmlqQmR3RytDekNEbEpWeGd0dlkyTWlPSFR1b3JSMktRUmsxSk1OSHJ6cVRua2lJZktHMU8rVGhOUzl4MjI5Zm9MdnRNRDBGaTVvRUo1KzZsTnJoSXlVcTdqRmlpMno3ZmZmZDE1OGo5ckh3NTUxM1hqOVAxb2RDbjVnR3BINFJIQXN4SnNMRE1HdktPREtQYmFWSEJZOGtPSS9RSm5sNWJ6TkhjcmtGbFNVSmhMaVBhZTdjdWR4MjIyMFlZL2p3aHovTXZIbnpXUHZFV3BhZHZwU1MwbklhVzNyNCtnOXZZMmVySWRBMFRqMGlrbFM0REtHa1VMV0l3c2poSTBtbjBxaUphR2x1UXdzUlJtTEpScUtraElxS0VvenRJbExCNFJGRUlURXVEdWwwaWh1KzlqVzZPcnY1KzIvOVBZVkNRRUpqNWNDNDBYVlVscFVnSWpSMWRORldpSEFxZUgxYkdvZ1pBR3pHN1VWZFhaM2NlT09QbUQ1dEpoWFZWZkVRTFlYZVhKN1ZUMjdqdG9mV3NXVmZCd1ZiUVRMS0lINHBtVlNLYzg4OGc1VG5FWm1pbWdGbHg0NGQrdkxMTHcvcWZ4ODNiaHp6NTg4L09oQjVQbUZ4b0dQMXNQU3owRk1uRGFjODdkRlRpREZYS1JidkJ3KzIwZHJhemNUNmFvZ2N4dk01NmFTVFNLVlM5UGIyOHRPZi9wUWYvdkNIVEpzMmpiV1ByOFVaeTRGRFIybnR5cE4zWllSYVJHYjdKN29mKzl3eFk4WmdqU0RrYVc3ZXorR1dvM1QxR2pLYW9jcFl6cGcrZzJjM2R1UFpERFp5SktJY2FjMlRUaVg0N0NjK3g3VHAwN242STlmUzJka1J6eCtNNHQ2UGNST240S1VyNllpVVF4MjlCQ1JRNDZNdXd1SEZjNmxmclpFS0krNjk5MTU2ZS9PODQ2S0xJRlZCVTdmam1jMzcyZDhha3RjMGtaVFJQN05CWVB6RUNTdys1ZVM0TTdmWXRZdkFvNDgrU3Q4TW9ENGpPdmZjYzZtcHFhbitVN0R2ZndJRGN2MmFIb2xsVkF5clNUTnVWRFVIZDNVVVcya1V4WkxQVzdadTM4ZkpvNnZBeGduaGhBa1RxS3VyWTlldVhiUzN0d013ZmNZTWpKY2d4TER2WUJ1OWdZZXpLU0JKR0lZTTN2RXhOcVA2VWFOaTFWNFUwTlo2bUtZalI5amIyTXlJMFdOSks1eDMwa1NlMlhLQXRTOXN4aGNsUlo2cFl5cFljZlYzcUNvSitjdVBYVXZ6b2NQRklaNUZBeldHTWVNbjA2dUdqYnNQY2RmRHp4R1NJbEtETFc1STU3Q0RORWt4SUJvTHdINzc4RU04OU1nYUtCdEIvU2tYVVNnZFE0NHFqUEdSS01RUllyMTRRdHZ5Yzg1aXlOQWhFaE96TVU2VjdlMWwxYXBWL2RXWE1ZWkVJc0hsbDEvZS8vdnhGdEgvU1R5UUZERkt3V0JReXBQK09UTW0xajN5YkVNYnptaDgwNDFISVVxeGFWc3poZVZ6TVRpczlhaXVycGJaczJkclg1KzNpREIzM2p5czU1RjN3c0dXN25qQWd1a2J1ZnVxaXlYeFRzN0Q2b1lWNTBVbDZlcnNvYnVubmRWclY3Tnc4WHc4aWFpdER2amF4ODdneGRQR2NiUzlpekgxZGRTUEhNTHFWZmZ6NmVzK1MvdmhaalFpM24vUUtiNjFZSHhLSzRaeDI2cW51ZVdCNTJqcURnZ3BpOVVER2hYUFhBYTE5V2hSRk9hY3c2bUx4L0E1aDVDTXQ0cVNGRVlqZkltS2d5VkN5c3BLT2VjZDc4RDM0NkhyVWZGNE8zZnUxUFhyMXc4aVNpZE5tc1RjdVhOWER1d0ErVk91dDU2Tmx6N01PWlpraWpwODBkVUxab3dtYVJ3YTVUQVM3NUlUYVlZTld3NXdOT2RVaWx0WFcydFp2SGh4ZjRtYVNxV1lNbWtTeGdpUmkyZyszSUZUSHkweVhxK25CZko5bjdMU01veFluTVppZk9kQ2JycnBwK3plMTBpdlF1QUpOV1dPZDV3NmpZdmZlUksxZFRYODRwZDNzR0xGbDJscmF5Y0tvN2lsV1l1VnBZS1lCUC93RDkvbjMzOTZOd2M2bEFKcHdNYzRpcVdEZTVQY01QNmVWaFZ4RHM4cDFzWGJ0aGdKa09KOFI5KzNUSmsybFRselpzUitYRngvc3J4bXpSb0d6a0Iwem5IaGhSZFNVVkd4NGs5dE9NZlBBdzFvSHpiRzRxSUNubkZNbXpTQzJzcFM4bTNkQkE0Y0daeEpjZWhvQ3pzYld4ZzJaVmhSYUc5WXRtd1puaGR2RjFCV1ZzYjQ4V01RalFnTGp0YVdvMURNTTR3NkxORnIyUGhVS2tVaTRSTkdFV3ZYUHNzanF4OEJWWnIyTjNQTlgzNmViMzcvKzR5Y09BUnhjT2hvRzZ0K3QvSC90bmZlWVZaVjUvNy9yTFgzUG0xNnBjd3dERE9Vb1E5ZEtTSWlVWW90RmxSaXVTS2lnQnBEVkVTOEpnUmpqR2xHamNFYk5ia2FOV2grZGxFaDBWaEFFRVJwb3NEUWh6NERURGxsNzczVzc0Kzl6K0ZBMU92TkZRVERlcDd6d0FNOG5EbnJ2UHV0My9mNzVjMjNseENyMzQxdFJ6RGkrRXFCYVptVmtEZ3VORVZ0b202QU9CbTRXaUNGaFZBS1EzbjZHK0pMRUpJYWdVMElRNGNBaWZRM1dSMmgvY0F2VUs1aXpGbWpLTWpQRVlnNFNYZDI0TUNCT1MrOTlCTHhlRHpWbU16SnlXSE1tREZIRkxMNkRZU3d3eWg1aElkZHpvdUVsbmF0Yk4xbjY2N2xHRVlZQjRuanVzU0Y0cU0xTmZUcjFCTFRyM1RhdHZGMnFUNVpzNGE4dkR3SzgvTXdwQ1NhY0RqUUZQTUErY21uTTQwb1FTVGhKRUt3clhZN1A1NzVFMmIvL2pIMjc5dU9GQUxIa2F6YnRJK2JmL1FZc3FBQWFibnNQUkFqUmpaU1o1SnB1Q2dWOEVtOS9aMHd2NUxTQ0Z6bFlCcVdUOC9yU1NBbzdUT0NDWldDWjN6NXNObjBjVUFxdFEzaUlSSXRERmVSbHhOaHlNQWUvajYrNGZNbUtsWXMvK2pDRlN0V2tKNG85KzNibDZxcXFzb2p2YnB6ZEllcEhnT2diNWtTaElXaEJka0dmZnQzTFNWaUtKUnIrZFBvR0xhS3NuajVlcHBkWGFmUkNOY2xMeWRQVkZjUFFCcGhXcmRxUlNnVTRFQnpqSmYvdm9BdGUvYWhEUU1oSExUUUtHbDRyS3IrVUZhZ2FUaHdnTy9mK0FOK2RzKzk3TjI3QTlkUk9LNVhPc2V4YVFnRTJCSUxzYWtoUW9Nb0lDRkNucHdrTnRwd3NISHdlaS9DWi9zd3NGMVFJbzdyUm5HRkJoa0g0bWpwa2pBMGNWUGdTT21EMHI3czRZcURqaUt3UGM1SUpUQmNFOU0xTUxSTHJ5NWx0Q3ZPWEdwcUYrVll1STZCYThkNCtlWG5PSERnUUtyeXNpeUw4ODQ3ajh6TXpKcHZLbndkSVFNNkROTGx3MU1sVU4yOW5IQlFZcG5lbDZPRmlUYkMxR3l0bzNaM1E1N2o1MUNXSlRuMTFNRUlvY2d2eUdYZHVuVk11bTR5MDIrWnpvR0doa1B5SHAxTVdnOFpReWdhR2hxOThqZnBtM1E2d3RIZk1CVXkxZmc4TFA1K1BzbzZPZEhVWG9FZ3RQU0ZoUDFORWkyL2dnZnltb1MyREpBUUZvNDBjSVZBQzAyMjVmQ2RRZDBKU2JldmtlUjhFYkJyMXg0OTk1WFhVbm1VVW9yV3JWdHordW1uZnlPSjgxRXpvRU0zS0FXdGlqTHAwcUVVN1RZQkxraVRadHVncmhFK1hyTU5WMGlVSVVFNjlPbmJrL3o4SE9iTmU1M1RULzhPYy83eUYrSU5EUjVkMjVjMk1yVy9UNldQWURQTlk0eFBHaEcrSVgyVnI5R0R1c2cwSlVRWGd6Z0IzVXpYMGd6NmRXeE5RTGtlMllSdlJLL09uY3VHRFJ0VFhXY2hCQ05HaktCTm16WWlIVDc3clRLZ3c3OUFBVVFFOTV4VTNSNVRSNUhDUmdHR2xVblVEckIwNVFhYUZYTVVFcVZjS2l2YjN0T3hVeVg3OWpmUzFOU002N2hnV2ppT2M1aVAwSWZzbXBMcWcraXZpWkx1YzkzSUlkNUhwUElaNVk5Q0RnV3pDM0VRb21yb0JFTEhNRldVSUZGQ3VvR2lVSnpLSW9PelQrbEdpNGdoTEI5ajcyaWJwbWd6ejg1NUZ0dDJVLzluUmtZRzQ4YU53elJOUGkvL1NSclowZkJNNXBFeW5rTXYwUHQ5UkRKdFlNK3FXMmVicnhOVENWd0MzcldMQUovVWJHZjMvdVlMTS9MQ0JBVkVJdUZwUXdZUHVYWFJnb1ZvMS9XQWFzcmIyRWpSL3llTjU3QUlsTDZpZkdUOGowN2hmUVNlS0l4UUxtZ2JJZHlEWkh6U1Q3U1Z4alFOaEJaRUFwSzhsZ1gwN0Z4SmJtVlhDbHEwd2xJTjVBWTBJd1ozSTREMkFHWSt5ZU9ISDMyb2wzeXdKTlZha2xJeVlNQUFldlRvSWI3SzBtRDZ5T080TWFBdk9nRU5aWVZaOVYwcXkvTGVYN2NQR3hzODFVOTI3bW5nMHcyN2FKdmZ6aE1VTVFTREJ3M2gvdUNEeEtLTkhHdkhLL0w5SFZvVlJ3Z0hLUjAwdHUrQkpJWnBFUTRIYWRPbURWMjZkS2Q3MSs1VWxwZXd5ODVnajlHQ1ZkdnErWGoxWnpUdjNjVFpwL1VoSTloem9oVFN2eE9OcldJOCtlVGpORGMwcG5pa3RkWmNjY1VWaE1QaFEranN2bFZsL0JmR1M2M0l0RVQrb0w3ZDlKTFAvb2FVSWIvcnIyaUtLNVo4dkk3VGVyWHpDSUVRZE9uYW5mTHlDdGFzWHNraHl4cHdTTGRYL1BNMnpKZlNWUW1mejFDSWxBeU1INW5FbDNvZFgvWEV3ekRqSW5HOVhFNElEQlVsWWptMEtNeWlUYXVCbkRTZ0Q5WFYzYWlvS0dmbnpoMTgrT0Z5M2x1NGdJY2ZYc1ZlTjVQQ1BtZWlza3JRMnFFb0hHYkk0UDRFTFBtd2RyVFBRU1JZWDFPajU4MTc0MkN3MXBxcXFpcE9PKzIwMU1ROVhabncyOU1IOHVQdjRhN1R3VVZqTUxCM094NS9FUm9iYmFRUkFqVE5SRml5YmplN0RrUjFPQmVoRU9RV0ZZd1ljRkwvZVordC9oaFhHLzYwK3lBaG1Vd2FROUtla3VKMGFSc2RIcDJlU2htSjBnSXdNYlNGUVNNYXNJWHBEVVRkQUNnREtVd01hZnZ2WXlDbGc0bENhd09EQkdHeEgwdEV5TW9TNU9jRTZkS3VuRzd0U3lodmxVVngxbFhzcWRuQ292Y1g4c1FUZjJiWnNtWHMzcjNUKzVJMVdOb2lrZGVPbUJYQ0ZSRWlUb0tUcTlyUnU2eVlvQWFOaTVKZUpmbnlzOCt6ZlhNdGprOE1ZUm9tRjE5OE1jWEZ4ZUx3MFVXNkFSMnRTZnpSOTBEQ0k2QXFMYzZoUy9zeWRpemZSVndwVEROQXduSFpYTHVUdFJ1M1UxSmRDbG9URGdYbUR4czJsR2VlL0crY21QTVZQY3puZUk2MGJEWTV6RlVDRWpJYmhjVFFFSENqV0k3dGJjSDZNelpIQzZSaFlRcE5ia2FZRnFYbGxGYjFZdkNZMHlqcjBwSGlsa1dFSWlIMjdHeG0zWnJkTEhoaERRdGZuOFA2UlMvaTJER2ZMVmFUekhHOTNFMzZIaGFrc3NtTEdJd1kwcGZza0JTR0VHanBhWDl0cjYzVnp6N3pMTGJ0K0xxdmd0TFNVcjc3M2U5K1kwM0RiOWlBdkxtWUNXU1lsamp0NUI3Nm5ZOWZJU0V5UEtVc2FkS2NjUGhnNVhwTzZsNStlbERxK1VJcit2YnBRM0Z4Q3hvM2IvdFhNL3JEUXArbndDT3djVVVJcVJWQkZTZFRIeUNUUml3ZHd3aFpGQlhtVTlhK1BaMjc5YUJ2cjU1VWQ2MGlLNzhGYmppWGRidWFXTHQxTi9QZitvaWFyWHZZc1N1Qm5UQkJKOWkrdXdIYjhhaHFwQ0g5YWJ3WFpnekRJMTBIRHo4azNFYXEycGJUcDJzSmx0NE93WGdBQUNBQVNVUkJWQytjbXpUM1YxNTVoYzgrKyt3UTRaUnp6ejJYOHZKeXdURjBqcWdCcFJNZUpRbVJwSEtKU0pkZUhkcFFWcFRGMmowT0NSVkFDSUVyQWl4YXNZRng1em56V21kWVFybzJwYVVsb20vL2ZycG1TMjJLYnZjTHgyOXBaWE9TSFZiNk9CcU44RG1xRTFnaVRrQTNFSEwzRXBJdVdRRk5hVTZJSGhWZCtkNFpIZW5Sc1p3T2xXVmtadWVTVUxCeDNUcis4WTkvOE03Q1pTeGJ0NTJDVHNPb2QvSndUSVV0UU1vUWlCaUdhRUJ6QUZBZUhaNUtHbzhYREYzbGVyTXpJUW00TmtHYU9YdDROWGtSUTBqdG9wVkhvRlZYVjdmazZhZWZUdTNrQ3lFb0xpNW03Tml4UjV4MTlaanpRT25xd1JvVDdkcVlPTFF0eWh6UnAzUGJlWnZmWFlldGd5QTFDV1ZRczdPQlZUVzdhZFc5Qk5PUUdPRVFJMFo4aDc4Ky83SS93amhZdGgvYzZkSUhMY2NIcWFjTTJQOTdZUWhNUzVDZFpWRldFS0NndElUcTlubDBMRzlCZWR0MkZPWUVDVWhCZFA4K2FqZXQ0eTl6bm1icDBtVjhzSFFGdTNadUp4R0xrdEFCakp3U1pOc0VEUmxCWE9uaG1reHRlcExkYmhSVFdjUTFLYytUM3EveVZyeHRERGRCVUNYb1VWSE80T3AyQkEyTmNQMzAzSFdaTjI5ZW42VkxseDd5c0l3ZVBacnUzYnVMTCtvOEg4Mjg1NmdiVUxKWHNYTDFPdDJ4b2tTWTBpWERVUE9IRCt6QnErK3VJaXFDT0VxZ2pBRDdiWWQzbDZ4bFdMZldLUkQ1MEZPSDBxSkZNVHNUK245dTcvZ1hhUm9HU0pPV0xZc3BhOU9hTGwycjZOMS9BSjE2OXFkTnh5NllHUUdFMGtTYmJUWnZQOEQ3eTlhemR0VnkzbmoyTVdwV0xrSkhtLzFWNXdCbzF5ZnpsR2hYZ09HaXpHYXZjNjdEb0FJWTJrUnBCNjBpWC9vVENxRXdwQ1pEdUl3NWJTRDVXYVlRT2dFaWlPczZORWViK2NNZi9rQTBHazA5QkVWRlJWeDU1WlVFQW9GdnpGQytFUVB5NHI2bkZOUFEyRlF4NjJjL1orYjBtM1huRGlYQzBBNmQyN1drcXJJTml6L2JqWkFXamphUUlzamlaYXZaOTkyQk9qTkxDZ1MwS1dzaitwOTBrbjdoblRWcGFiSCtvaUVENE8yVWo3dmtZbTY1OVJiYWxMWWtFZ21Tc0czMk5DYllVcnVkenpac1pmbjZ2YXlxMmNXMjNjMGtiQmNyWGs5TnpXN2NtRXNBU09pMFhUYmxxL3dDd3BFRTdRRENrQ1NFaVN2QU5tME1FY08xNHAvenN4MDBmS0UxVXRsVWxaY3lxRTlIREd5azcwUU53MlQrL1BsNjhlTEZoNVRvWThhTW9icTZXaVR6b1crNjkzTkVEZWp6UHBnUWdrOVdyMTcvMWh1djh1NHBKOU9wd3ppRWdNSXc0dFIrSGZSSDYydHhaZGdmRVVEdG5nTXMrclNXZ243bEJGd1h5MUNNR24wR0w3KzNDUWg0UkZUU1JXb1Q2UVk5dVFIdDRDM2ZLUXhEY05KSi9abDIrelRhbFZmd3ljcVBXZlQrQXQ1ZHZKdzF0VTJJbGwzWm5RaVQwQmF1c0hCMUJwYTJ5VEdhUFFGYnJiR1RVdUtPZ3hES3N4M3RMVTFxYWVINlFESkRDbHloVUVJamhJdHdWZHFFS0oxdHpRdW4wcFNFelNpamgzYWhKQ2NvcEE5NVZkcWx1VG42VDk0bkp5ZUg4ZVBIRTRsRXZ2U092K3c3T0w1MjR6L0hDem1Pdy9QUFAwZmRubDI4OE9JTGFPa3A5SVFNR0g1U1Y0cXlUTFRqb3YwZDhiaTIrUHY3SzJsMHFVTUtwTkFNSER5WUZxMUxrMUhOUnoxNnFzZElBZktnSmxhcjFpMlpPZk5IVkxRckY1dTNiT0hxOFZjemRlck5QUFhucDFuejZXYnFZeWIxYm9TWWpKQVFBVnhoSFp6SSs5NUE0WE1VSnFXWmt2cFJHcFRmQm9BMHdSUkFhb2xVNlR5Tmg0bThJSEJkVGNmMjVad3lzRGVtQUtFT3FpYk9uejlQcHhNbUNDRTQ3N3p6Nk5tenB6aGFmRC9IckFGdDNMZ1JoR0RCZ3ZkWnQzNjlOcVhBRW9yU3ZPREVZYjNhRTVhZWFyRXRnaVJFQnNzKzJjaW03ZnZ5SEYvdXVyUzBqUmc4ZERDR3FmMHl5OFFWQnE2UTJGcmlhQS9VbnBHUndjMDMvNUNCSnc4VWFNMlRUejdKcWxXcmlNZmkzaHF6NjJBN0RvWmhmaU1YbnBFUllmejQ4YlJvMFVKSUtURU1UeHl2dnI1K3llelpzMmx1Yms0MVlvdUxpNWswYVJLV1pSMXpobk5VRENpZGR2Kzg4ODRqSEFxeS84QitYbmpwWlYvQjJDYXNFdytmTTdRWDJXWUNpWVBXQnJZSXNhdkI0ZjJQMTJNajBjTEFNaTFHanpxVmpMRGhrek1GZkdJQ3I4SkNhR1RBNHNKeGwzTDVaWmZkWXhnR0d6ZHMwbzgrK2lnSjIvWTlpOEl3TFl6UGJjU0pRMWFka3hvZi92QWpyYk45NkVoRmYrVjc4SDd0MTY4L1o1MTExaUZzOHdCejU4N3RzMmpSb2hSa3d6QU14bzBiUjFWVjFiRnBPVWZLZ0E1VkxEN29pazhaTW9UMkZSVUlBZi92dVJkb2FHcWU0L0ZFUTVleXdvbDlPN2NoNERZZ2NYR0VSWk5qOGY1SGE2bVBPbHBoWVFybzFhTUQ1U1VGV0ZwNVluSUNFRGJDYWNKUWNVN3FXODIwbTM5SVZtYm1OTFRnOGNlZllOdldyZDdQb2c3T3NwSzdWNGR5a2g5Y28vQUltd1RTa0VqREFGOWFVcHJHd2NHL1VuNGI0WCs0WU9uRE9BeURTQ1RDaEFrVEtDd3NGT204UGp0Mzd0Ui8vT01mYVdob1NOMVpaV1VsNDhhTkl4d09wM3BvWC9ZNi9EdElmeDIzSGlpNXV5MmxwTENvVUp4ejFtZ01JZmhremFlODkvNEhGN3ArWVJNSkdnK1BIdGFMSEt1Um9FeDRTYVdSd1NjMU8xaTlyaGJiOWJZWld1YUY3K25Yb3dPR1NtQWlQREM3VHBCcEpHaVZGMmJHclRmU3JrMUxJYlNpcG1hRC9zdlR6NkJjOXhERzFDOXhFeDZ4VlJvOHdqUk5Nakl6eWNyT1FocEdtbzBkeWhULzVRWWtVeHNtdzRZTlkvVG8wZUx3SHRsTEw3M0U0c1dMVS84MkdBeHkxVlZYVVZWVkpWelhQV2JEMXhFdjQ1T0FKKy8zRnQ4YmR3bi85ZGlmMkZtM255Zi84aXpEVHowRlE3bVlWb0RxcWhLNnR5L2kvYzhhMERxTXF3MzJON204czJnMWc2cEtDWnFLb0NHbURlemI1ZFpYMzEzSDFqb0hNeUNRS2tHMjVYRFpoU1BwMWFXczBzQVQ2djNqWTM5a3c4Wk5hVnVyQnp2QzR2UEdMR2hNUTFKV1drcmZVN3R6NnFBK2xGVjBJQ003bXcwMWExbStiQm03NnVPczJMUWZPeFNpMFg4NDlQOFF5SklQVVVGQkFUZDkvL3RFSXVHVU1idXV5K2JObS9YczJiT0p4V0twdTZxdXJ1YWlpeTdDTk0xRGh0TEhvaUVkOFRMKzRMUVl5dHQzRktOR2pkU1AvdmNUdkRsL0hxdFdyZEZlaGFGb2xSMFVZd2IzMXF0cVhxTWgwWVF5czRqWkVSWXNyMkg5bm1iZHZTUkRCSEhwWGxaSVZYa2gyL2JWZ3JBSXlUaG5EZTdHbUZNNkVSRFVLRmV4YXNVcVBXZk9NeDZzVHdoZjNzQUI2WW1XNEFhUnBzSVJCcWJqa2kxdDJwZGtjdWJRZmhRRmh4S0pOOUJVdjR0bHl6NmlvTGdGTHo3M0RHLzk3ZThVdEt5Z2JmZFRxT3piaHczN0hUYlZyQ1doTFdKaytGV2dWN29ua1NZcFpDU0NjODg5ajRHREJnclhkVEZOTTBVVy92ampqN055NWNxVWtXUmtaSERqalRkU1dscjZUeFAzcnhxT2p1Wmsvb2lYSXVrZnhyQUNYRDFoQWs4OS9UUzdkK3hnenB4bjZOcTFHNVlsQ1FzWTFLc1RIZDVjUk4ybU9GRWR3UllodHU3Yno5c2ZyNmRqU1RWQnBjZ0xDREZzUUpWZXVHbzlNVGRLdjY1dHVleWN3V1JiaHJDRWg0ZCs0czlQc20zYnRoUmpyTkNHWCs1N3BETkNCMEVvcEZEa2hNT2NWRlZKVlhrV3NhWWRUTHQ5T3ZzMmJ5TFJkQUFNU1RBYzVySnhZekVNZzUzYnQxTzc3eDNxd3FVVWRlNU5kWS9PZkxwK00vRm1yNEowa2FtZHRmUWNxRjI3Y3E2Nzdsb3MwenhrRExObXpScjkrT09QSDVJcmpobzFpalBPT0tQeTY1cTRIMmxFNGxISEJYVHYzbDJjZWVhWnVLN0xjODg5eDVZdFc1S3JCaFJraHlwSER6K1ppSTVqS1Fld2lMc1IzbHk0bXIyTnRuWTFXRkxRcjBzWmxZVkIydWRKcmo3L1ZFb0xNa1VBalhac1ZpMWZycDk3L25uUEd3aVI0aXRLTmZPRVR5bUhJbVRZOU9sZFJZTWRaZHVCS0srK3VZVGRlNXVJTnpaaTRmVjM0ckVZNzc3N0htZU1HSTVwQ29Sd2lDZGlyRm0zZ1MyMU8ralhydzlGMldFc2JKQUNWMWlIeEVqVE5Mbjg4c3ZvMXEycjBJQlNMa29wRW9rRUR6endnTmZlOEhPbDFxMWJjK09OTjVLVmxWWHpUUUxsajFrRFN1NHpUWm8waVhBNHpNYU5HM242NmFkeFhRZUpRMGpxbWlGOXFxZ3F6U09rNGhoSUVpTE02azExTEZxMUZXMllHTGlVRjJXSTcvUnJ6OFR6aHpHZ1EzRmxFQmVwYmJTeWVleFBqN0d0ZHJ2Zkp0Q0hEVDZTdW9RdWtqaTlxOXB3WUhjTmlEaHJObXltdGk0S3JvVWxCVktvWkwzR2xpMWJtRFI1RXJmY2NoUGR1bllnSk9LWWJoUDF1N2F4ZitkbUxqbHJBTm15aVpDdy80bHh2cnE2bWl1dXVBTERNSkYrZVE3dzl0dHY2K2VmZno3bElRekQ0S3FycnFKZnYzNkM0K2djVlFPU1VtS2FKdjM3OTA5NW9VY2VlWVR0MjdkcnBUUUJRMU9TRXhBWGpSeEVKazBJRmNOQnNpOFJZTzY3cXptUTBFdTBnTERVWEhIK0dmV2pCdlVZa1MzZEdxRmRCTEJzMlhMOXpMUFBrYkJ0bEhMUnJ1MnQrS1ExY0pRQmhtcW1ZMWtlV2JxQm9sQ01jOC9zdzk2ZG03Q01BRnBiUHV6Q1Q2Nmw1QWRUcDNMcThGT1pjZnV0dlByaUhPNjg2VDg0cFhNeG5kb1UwS1psUGkxekFvd2UzSk9RT29BaEVpQWxoalRKeTh2amh6LzhJYTFhdFJKS0tiL1ZKTmkxYTVmKzlhOS96WjQ5ZTFJVjNjQ0JBeGsvZm56S3dQNHZJZXhiVThaLzBRY0xoOE5NbURDQm5Kd2N0bTdkeWlPUFBBclNRTGt1cG5ZNXBVOEh1bFVVRWFBWnBJMXRoWGgvMVJaV3JOL1Z4MUVhcFIweWdqSS95eEx6aFd1amhFSFUxanoyK0ZQczNGM241VG5KRHljT3Jic01KMHB1eUtWcmVUNFYrU0dtVGJ5QVlUMktHTmE3Z3JBYjh3aS9UZWt6ZjBqR25IVTJrNlpNUVFDR29TbklEVE5xU0ZkKzlzUEw2TjJ6Sys5L3VKemZQenFIZ29JQzhyTXlrSzd0Q1Nab3hkbG5uODNJa1NPRllSZytGUjBrRWdubXpKbkRlKys5bDhwN2lvcUttRHAxS2lVbEpTSWQvbkxDQTMxQloxcHJ6ZURCZzhYSWtTTUJlUHp4eC9sczdYcXROSmc0RkdVYTR0eVJKeEd4NGtnUnhSR0Mrb1RGYTI4dEp1WlNnVFJJNG11MGxMakM1TE5OVy9YcmI3NExNdUN2T1IvMjRUU2dGUUZzT3BUbU0vS1Vhc2FQSFVsWmJwaDh3K1hTa1NmVHFiU0FzckxXZE9oU1JjL2UxWXdjT1pJZi8rVEhaR1JsZVkxSDdXQUlGOU9Ka3h1U2JObTVsNjJOc0NNZTRJMzNsbExXb1FvZENLS0E4clp0bVRwMUt1RndPTlh6a1FKV3IvNUUvKzUzdnlNV2l5R0VKOFE3ZHV4WVRqdnR0SlR4SE9uRTk3aE9vc0hyeW9aQ0lTWk5ta1JoWVNHMXRiWE1mdmhoVDhsUWFRSm9UdW5kamo1ZDJtRHFHRm81dUVqZVcxN0RxczMxNjEwdE1JWFgxMUhDb2lHaDYxNThZd0VINHZnYm81Njl1TW50TGFIODFyTUJLazYzRHFXMHlzcWlSWFlZU3ljSUdKTGkvRXc2VmJTbHNxS0NyTndDbEJEVTFkZlIwTmlRNmhocjVaWG9sblJRZGd3ekZDSXVQQTJ6MmgxN3NVSVJCSkp3eU9MR0c2K25VNmRPSXBsM1NTbUp4cUk4OE1EOWJOaXdJZVdOcTZ1cnVlR0dHN0FzQzlNMHY1WVE5cTBiWmFUSDRuUU5yZXJxYW5IeHhSZmp1aTUvZWVyUExGcTRVQXNDU0ZkVEZMYkV4U05QcGtYRUlxVGlLTzJ3dFZFd2QrRm5SQjB4eC9KbnFuRWtLOWZ0eUh0bjhSb2NOd2pDUUdodmFkaEpNbUVJMS91bzJpUWNsQVF0bCtpK0JnTENSWm9HRGE1ZzNvSlZ2UEhXZTd6MTVsc3NlSGNoUzVaOHlLTEY3elBycnJ0b2prVnh0VVpJMDFOcEZSS2tScmt1d25ZOVluTkhFMi9ZVDNGaE5xZWNPb2hMTGgxYjczV2dkWXBrNnNVWFg5Qno1c3hKUVh4emMzT1pPWE1tYmRxMEVla0xndW45bjY4eXV2aTM4MERKWTFrVzExNTdMV1ZsWmV6ZXM0ZmYzdjhBKy9jZldPSzZEZ1l1ZmJxMFpsai9qb1JFREcxWXhGeUR0eGF2Wk8zV2ZSY21sQWRDZHgzRlA5NzVnS1o0d2x2RFNVSkpoUmZpcFBJZ0ZwNHY4b1RyTkM1bXdCUHhkWkRzYm9qeTNPc0xpUkVHYVNIeHdvM3JLbDUvN1RXZWV1cEpER25nS0hDVllMOWpzZGNKRUFrR0NRa2JXd3RpWm9SWVBFYXZMaFhjY2NjTTh2THk4dFBEMGZyMTYvWFBmLzV6b3RGb1N0ZnJoaHR1WU9qUW9VSXB4ZkZTdGg5VEJpU0VvRjI3ZG1MS2xDa1loc0g4K2ZONTZlVlgrbmhPSTBGT1FJZ0xUKzlOUlhIRW05UWJBYmJWeDVpM1lCWE5ybkdOUWlDbFM1dXkxdDVHZ3daU1QzSnk5VmhnSUpBKytaTkdJd3hKT0NkQ0FvdUVNUG5ib3JWczJOTk0zSWlnbGJjWHFwVDNiN1hqOE90Zi9JSU5HemZ5d1FjZjhzaC8vNFhmL0drdTAzN3pWK3lFUTM3RVJBaHdwRVZHeUdMcXBQK2d1bWNQa1Q1dGowYWpQUERBQTZ4Y3VUTDEyYzg4ODB5dXZmWmFETVBBTk0zakp1YzVKcExvUTdyVGhzRWxsMXpDd0pOUG9xbWhrUWNlZUpBdFc3ZHBLUlNXdHVsYVZpRE9IOUdmaUc1RWFFV3phL0czOTFleWR2disyWTR3a05MZzVINmRLVzFWaENsZFVFN2FxbXBxNWZEZ2ZwaVFhRFBFaXMrMjgreThEM2o3NDQwc1hMNlJxTEpJdU41MnF0YXV4elNrTlZvcG1ob2ErZFV2ZnNYWjUxekExSnZ2NEpsWDNtSGh5bHBXZjdxQjN0MDZFWkZ4Z2tUcFVKcFB6ODd0UkZKdU1nbk5lT09OTi9SVFR6MlYrc3dkTzNaayt2VHBGQmNYaStRQTlmUDB2UTVQQWRKZngwbzRrOStrOTBsZVVuRnhrWmo2ZzV2SXk4dGwrWXJsL09hQkIzQzFRdUlRbEM1bkRlMUd2OHA4Z2pxT0VnRTI3VzdtOWZkVzBxVGtIS1NrSkQremN0U3BBNUFrUUNmQWwxc2d4UWlyVTQxRUJ3c3JzNEIvTEZuRHZYOThsWm0vZTU0VzVaMkpoRE14aGNkZmlKUzQyZ01XQ3NQZ095Tkc4TW9yYzZtcmI4QjJKTFlPNFlnTXR1MXBwam5heVBDK2xWdzB0QXNYanhuaWN4NksxTU94WWNNR2ZlKzk5N0p2M3o2VVVtUmxaWEhiYmJkUlhWMHR2dTY3L0xjTFlVbW9oMUthNGNPR2llOWRlaWxDU3Y3NHg4ZDU0MjkvMHduSHJoQzRGR2RJTVdYczZlUUZYS1F3aUJIaXBiOHRaUDMyK2dzZERSbEMxM3huY0M4NmxMWEFVMzVPM1N4S2dDdDhTWGt6Z0tzTTlqWXFOdStPczR0aU5qY0dXTEJrRlgxNzl5U0lEVGk0U3FOOStHcFdWZ2FSU0lSdDI3WWpaUUMwaVNFTWxDMnd6U3hXcmY2RTgwN3B5cDNqaDR0MkJVRWhmS1NqMXByR3hrYnV2ZmRlbGk1ZGl1TTRCQUlCYnJycEpzNC8vM3h4UEpYcTM1Z0JmZG1Ua2M2MkphVWtGQTR6ZWNwa3VuYnRSbFBEQVdiTnVwc2QyM2V0MTlwVGk2OXUzMEpjZU9iSkJHbEdTOG5lcU9hNXVlOFJ0L1VTZ1V0QmJvYTQ3T0x2WWhrK2ZsQkl2d0pUQitkZ3JpYnVDRDVkdDVGbVcyQ2JFV0l5ek9idGU5aTdleTl0UzFvaXBIc3dlNUlHQXdjTzVPMS8vQU1waExlWllYaUNlb1pwNFRnMjdkb1UwNzFkTGlIVmhLRVRhSzFUay9ibm5udE9QL0hFRXlpbHNDeUxNV1BHTUdYS2xJbUJRT0FRbGNHdnMvSTk3ZzNvOCtBYzZRM0U5SkkrT2RxUVVvSzBhTmV1VXN5NFpTclpHV0dXTGYySSsrK2ZUYUxaQmkwSkJRd3VHTjZWQVoweU1VU2Nacko0ZTlFbVZuMjJ1MDlNR0dpaCtPNjVJK25kcXl0YUNqOFBVbDVWNWdQZlVSSWhERFp1M2t4dWZnNG1EUmc0Mk1yaXMvVmI2RlhkbFZ0dnZwNlpzMzdFejM5eEx3Lys3a0d1dXVvcTZ2YnM4VW1rYkxTd1NmZ2l3dGx5UDJlZTFJN2kzSkNRVmhBdERFemZNRmF2WHExbnpacVZhaGhXVjFjemE5WXM4dkx5SGo1YysvVC9PcTc0dDYzQ1B1OHBHalZxbExqODhzdHhYY1dmL3ZRbjVzNmRxNVgyeUtWS0M3UEU5ODRaVG9zc0Ewc290aCtJOGRkNVM5Z2ZkYlRDcEtpb3BiaHU0blZrWldUNEJFL0c0ZFlOU3RQUTBFd2tJNU9DekFoQmJXTXFHMjFIeWNzTzhQMGJybUhhTFZPNS92ckpYSDc1Rll3YU9aS3hZeS95Y2hycERXS0RJa0dHT2tCbHkyeUdEdWlCbWR6UUVCNEFiTy9ldlhWMzNubG5hdExldG0xYjdyMzNYdHExYXlmNGxwMWp4b0NTc005Z01NZ3R0OXhDbno1OTJMZHZIN05temVMVE5aOXFRMHBQNnFsYldmMGxaL1luSXFQRVJZQTNQOTdBQnlzMzRRaUJ4bVRNNkxNWk5tUUlCZ0xocU5TS1RXb21MeVZ4eDJYVkordm8wN1ViSWVVU1ZEWWhZZE8yZFQ2aGdKZHFHeElNUTJCYUZqUHV1SU4rL2Z1Q1ZsZ0daTWs0blZzR3VPVE1nWlFYWlZjYTJvUE5hZ1NOelZFZWZQREJ2TmRlZXkyMVdYSDMzWGN6WU1BQThVM3lPWDhyRGVod041eUVjTFp1M1ZyY2RkZGR0R3paa2xXclZqSHJKeitoZnUvZU9sTzdaRW8zZit5SVBnenEzaFlwWFBaR0haNTY1VDEyTk1TMUxTUzV1WVZpMHFUcktNekxRK0lUT2doU2pVUnZpOE9pcnI2QjJpMjFERDkxS0IzYmwxTlowWWJTMGtKUE5kbGZGUlZvbElLY3ZIenV2dnVuakI0emlsR2p6K1Qwazd0eitWbURPUHUwWGhPRFd0WGc0Njd0aE0wYmI4elREejc0SUZwcnNyS3ltRDU5T3VlY2M0NndMT3R6dzlhWGxlUEhZdWY1cUk0eS9pOTlva0dEQm9tYmJycUpjRGpNeXkrK3dNTVBQWmpuT0RhbTBMU0lJSzRkZXhvZFcyY2djVml4WVRldnZyT0dCRnlqRFlOQmc0ZFVublB1dVppV2lVOEk1SmYxMnB1M0NSTnRCRm0vYVJzYnR0VFNzMDlmMnBTWHMvS1RHclpzcVNXUjhKQ05TYk9ycmQzQjd4LzZQWXNXdk1mOFYxNWc2N3FWRE9qZWhpRHFZUk9ORkJMbGFqNzVaSTIrODg3L1pOKytmVWdwbVRKbENsZGVlYVd3TEl2anVkdDhYSVN3dzA4Z0VPREtLNis4Wit6WXNXamw4dUQ5RC9EU3EzTzFWaTdTamRHdEpGZGNlK0Z3aWpJTjlyc216ODk3ajAwN0Q4eTJOWVF5TW1zbVRibWUxaVVsL3RNclV1TU56NTRNRkFaeEdXREZ1azI4OXZhN05OcUtkeGN1NGFLTHIyRFNwSnQ0L2JVM3FLM2R4dGF0VzdoNndqVTgvOEpMN04yemg1ek1EQ1pkY3dVdEMzT0Y1ZCtlY3FHKy9rRGQ5TnR1WTgzcTFRU0RRY2FQSDgvTk45OHN3dUZ3Q3ZQemJUekg3S2ZTV3BPZG5UMXQrdlRwRE9qWGwvcTZPbjcwbzVrcyszaTVOZ1VFZEl3UmZjdEhYSHIyTUl5Z3lkWmRkVHo3MHR0RVhYMk5xeFZWblR1S1NaTW5FYkFDZmdoTCtUbWZhTnpBbGlhMllWRzd1NTRGUzVZUmRTVURCcDlLWTFPQ3UrKytsOG1USnpQNzRmL2lndzgrb0x4ZE9TUFAvQTYvL09VOTlPeGVKUXlmaGs0SWlkTHcwN3QvbHZmM3Y4L0hOQVRqeG8zalJ6LzYwVE1aR1JrWWhuR29nUEFKQS9wNlJobGZkYWVxdkx4Yy9PSTN2NlZOdXdyV3JsN05qRnR2WTlQbUhWcktJRmxTejcvODlFNWNQS1FFVXdSNWFlRlc1aS9mTWpzcUUyZ2pldnBWNDY4Y2NjcXBnNUNHSUdBYVhrNmtCVUlmWkphWFdnSkJHaEloRnErdTVmR25YdUREeFl2SXlnaFRWRkNFRzIxbTVCa2pLQ2xyeTVoenorUGNNU05GRUJkVEt3d0pybVB6MkdPUDZvY2YvbjFxbTNUV3JGbjFPVGs1RnlYRGVmcm80Y3Z5d01QdjUxZ3AxWTlMRDVUdThudjE2aTErK2N0ZmtaK2Z6enR2djhOUGZuSVg5ZnYyLzB3S1FXN1FFbGVmZXdaRGVyZW51WGt2YzE1NGc5bzZwVjJaT1QrVUVaeC8rNHdaRkJZVzRqTzErR015emNGaEs2Q0Z4MTFvbUxoS3MzSGpCdDU4OHkyZWVPSUpIbnJvZC96MXIzOGxQNytBQ3k2NFlBUm9qM3RJZTl1dTgrZlAxN05temNKeEhDNjg4RUx1dXVzdWNuTno4NC8xNVBmZklvU2xLL0FOSHo1YzNISEhIV1JrWlBEMDAwL3o2MS8vK3Rab05FcEFTTnBtUjhUa3k0WlQzYlVGYTladDRhK3ZMcVBSTnBkZ21QVHAwMDlNdlBaYVRPdmd4RnVndmVuOG9lOTRzR09ObDBRTElYQWNod0VEQm5EUFBmZVFtWms1UHlrdElJUmd4WW9WZXZyMDZlelpzNGZ2ZmU5NzNIdnZ2ZldGaFlVaTJXWCtOb3dxdnZGTzlOZGhSTW4rME9XWFh5NXV2UEZHVE5Qay92dnY1NGtubnRDdTdSQlFpZzVGRVRINWlyTm9XMUxDNjMvL21DVXJ0dldKYTFWaEJvTk1tSGdkZzA4NUpiWG1JN1JDSGtZdXJiVmZxcm1PcDdYb2swbFZWRlR3MEVNUFVWSlNjc2lpMzdadDIvUVBmdkFEMXE1ZHkrV1hYODdQZi83emV3b0tDdkxUdTh6ZmxublhjZW1CMG5PQkpLbDJPQnptKzkvL3ZwZzRjU0x4ZUp3Nzc3eVRGMTU0WGl2WEp1akc2RmFTdC9RSDExMUVWbmFBSi83eVBMdjJSTmM3UWxCWVhDUis4cE83S0NrdFJXdmxDWmtvTjUyTXc5OTk5MkNPUWtpa0VMUnMyWkxaczJmVHVYTm5rVnhSVGc1SnAwNmR5ckpseTdqaGhodTQrKzY3NzhuTHk1dVdETDJIa3lIOEszMnhZd215Y1Z3YTBPRVhtOVJEejh6TVpQcjA2U01tVEpoQWZYMDlQNXgyQ3kvLzdYV3RYWmRjb2ZwV1YrVGVjOVBrYzdEZFpwNzU2endjMjBWclFYVjF0Wmh4NTM4U0NBWFJ5a1hpVlZIcDcrRUIzNzBRbHB1YnkzMzMzY2Znd1lORnVqZHBhbXFxdU8yMjIvUmJiNzNGSFhmY3dZd1pNMFRTZVA0ZFBNNXhhVURKTG5WeXlwMmRuVDEvNXN5Wkl5Wk1tTUNPWFR2NTRZenBMRmp3Z1RhMUprSjhXdGYyaFV5NTdqSnFhK3RZOFA1U1RaSnY1NUlMeGJoeGwyQklFR2s3N0NuNHF4Qm9wY25JaVBEVG4vNlVrU05IaW5RdkVJMUd1ZSsrKzlhLzl0cHIvT3BYditMNjY2OFhTZUxMWTQyNzhOK2lFLzFWUWVQSlB6Tk5Nelh1eU03T25qOWp4Z3l1dWZwcXRxNnQ0Y2FicHJKazZVYzZnRUdlRUtKWDIySng0OVhuOGVHcWRhemJ1RlVyTzBiRWNMaDUwcVgwN2RvV1N6ZGlDWUVXTnE3WmpEUWNMRzBRTnNQY01XTWFsMXg2WVdVU0phaVV3blZkL3ZDSFAraFhYbm1GMmJObmM5RkZGNG5rejVOa0d2dFhabDFISWt3ZFRRRCtjZU9CMGk4aithVG41ZVdKbVQrZVdUbjFwaDlRVTFQRGRWT3VaK1dLMWRwVUVCYWF0cTN6eEVYbmoyYkxsaTNFWXMxemhBR0ZPUUV4K1lyUmRHd1Z3WTN2UTBpSnEwMXMxMFVZRHBOdm1zejRheWRWbXNGSVRaS2VMeDZQODlSVFQrbTMzbnFMUng1NWhLRkRoNHJrQ3M3aFBFRW5QTkJ4Y3BSU0JBSUJzckt5YW02Ly9YYngwNS8rbEkwYk4zTFZWVmZ4MFVjZmVVUXJya1ByZ2l3eCtPUyt3Z3lGTDNJeE1FeVR6bTN6Sjk1NjFTamF0VFN3M0JoaFpSR1JpZ3ZPSDh5VTcxK0NGUW5YYUhHdzdILzk5ZGYxbWpWcmVQVFJSeWQyNk5BaEJaai90czYzdnZVR2RMZ2FrR0VZVEp3NFVmejJ0NytscnE2T1NaTW1zWFRwVW0xSVFSQWJLUnlrRmNDVkJtaVhUT0U4UEtScnFiaHgzR21VUjJ6eTR2dTU1UFRlakQ5dk1KbFdzOUJ1d2grbXd1TEZpN1VRZ3Brelo0cWNuSnlIa3hWaGVyWDE3M3pNYi9MTi85V0tKVDJjcGJOOVhYREJCYUoxNjliNjl0dHY1N3JycnVPaGgzNm4rL2J0S1F3a3J2TFlYaTBKaG5hd2NCbmRyNU1RVGE3ZXRPMEE0eTQ4bWVKUVZKakU2Z2dFODVVTEJ4b2FyeWtySytQa2swOFd5WHdvdlVPZVBxbzQydmZ6VmVEQ0p6elEvOEtna2puSjRNR0R4V09QUFViMzd0MjU1cHByV0xSNHFRYUpLU1dXMWtnRldrdkFJcXdWWncvdEpxNjdkTEFvRGdrUlVBS3BRdDVDb0NISXlzcDZ1RldyVnQ5S0lOZ0pBL3FjQmx6U0cxVlVWSWo3N3J1djh1b0oxM0R0NUp2NCs5Ly9vWjJFalZDT1A2aXdjRVFBUXdZSlNFWFFqQ0cxRFc0R1dtVmpFOEJPVXhoeVhmZUVwUnpORUpaTUxQKzNUKzVYelNjTzV3Qk1HazV5dzBOclRXNXViczJVeVZORTMvNG42ZC84NnBjMDdLL1haNDBaTFN4cG9iVkNDMDhVVndyREU1a3pMWkwwODRZUUNNTkUrSW42MGVydmZGM3ZjZmo5SEZjVWQrbHpJT1Z6S1gvUjY0czh5Zi9tZGJnaEpkOWIrK1AzM2oyN2k5ODkrTUE5ZGZYN2VQSGxWM1UwRmtNcDE1ZTFWUWdra2dCYUMyOFhUR2dNclpIKy81ZWU1eHp2citPbWtaaHN2SDBWVVpBajNmQ1NVcEtkblQzdHlpdXZGRDE2OUdEVnFsVTZGb3Y5MjR3Y2tnL3lrYnJmcFNpa3pRQUFBRlpKUkVGVXJ6MkV2ZnZ1dTRlNDBTLzdvdEwvN2tpR2lEUnFHV0hiTm5QbnppVVNpWHhyWWFhSEc1RFdPdlc5bkRnbnpvbHo0cHc0Sjg2SmMrS2NPQ2ZPaVhQaW5EZ256b2x6NHB3NEo4NkpjK0ljOWZQL0FVVHA1K0pPMjVqTUFBQUFBRWxGVGtTdVFtQ0NcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDc4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSAnLi4vbW9kZWxzL21hdGNoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hdGNoU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsID0gJ2FwaS9tYXRjaHMnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGdldE1hdGNocygpOiBPYnNlcnZhYmxlPE1hdGNoW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fc2l0ZVVybClcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKTogTWF0Y2hbXSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSA8TWF0Y2hbXT5yZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGQuZGF0ZSA9IG5ldyBEYXRlKGQuZGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nRXJyb3IoZXJyb3I6IFJlc3BvbnNlLCBjYXVnaHQ6IE9ic2VydmFibGU8TWF0Y2hbXT4pOiBPYnNlcnZhYmxlSW5wdXQ8TWF0Y2hbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvbWF0Y2hzLnNlcnZpY2UudHMiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgdGhyb3dfMSA9IHJlcXVpcmUoJy4uLy4uL29ic2VydmFibGUvdGhyb3cnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93ID0gdGhyb3dfMS5fdGhyb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHJvdy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9jYXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTI3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9hZGQvb3BlcmF0b3IvZG8uanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg4MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbmltcG9ydCB7IEFjdHUgfSBmcm9tICcuLi9tb2RlbHMvQWN0dSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3R1U2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9zaXRlVXJsID0gJ2FwaS9hY3R1cyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgZ2V0QWN0dXMoKTogT2JzZXJ2YWJsZTxBY3R1W10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fc2l0ZVVybClcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKTogQWN0dVtdIHtcclxuICAgICAgICB2YXIgZGF0YSA9IDxBY3R1W10+cmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBkLmRhdGUgPSBuZXcgRGF0ZShkLmRhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ0Vycm9yKGVycm9yOiBSZXNwb25zZSwgY2F1Z2h0OiBPYnNlcnZhYmxlPEFjdHVbXT4pOiBPYnNlcnZhYmxlSW5wdXQ8QWN0dVtdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuaW1wb3J0IHsgQ2xhc3NlbWVudCB9IGZyb20gJy4uL21vZGVscy9jbGFzc2VtZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJhbmtTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3NpdGVVcmwgPSAnYXBpL2NsYXNzZW1lbnRzJ1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NlbWVudHMoKTogT2JzZXJ2YWJsZTxDbGFzc2VtZW50W10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9zaXRlVXJsKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKTogQ2xhc3NlbWVudFtdIHtcclxuICAgICAgICB2YXIgZGF0YSA9IDxDbGFzc2VtZW50W10+cmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9nRXJyb3IoZXJyb3I6IFJlc3BvbnNlLCBjYXVnaHQ6IE9ic2VydmFibGU8Q2xhc3NlbWVudFtdPik6IE9ic2VydmFibGVJbnB1dDxDbGFzc2VtZW50W10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9yYW5rcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cbnZhciBzZW12ZXIgPSByZXF1aXJlKCdzZW12ZXInKTtcbnZhciBfX2NvcmVfXyA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBjb3JlVmVyc2lvbiA9IF9fY29yZV9fICYmIF9fY29yZV9fLlZFUlNJT04gJiYgX19jb3JlX18uVkVSU0lPTi5mdWxsO1xuXG4vLyBPbmx5IHBhdGNoIGlmIHlvdSdyZSBvbiBBbmd1bGFyID49IDIuMS4xIGFuZCA8IHRoZSBuZXh0IG1ham9yIHZlcnNpb24gKGluY2x1ZGluZyBwcmVyZWxlYXNlKVxuaWYgKGNvcmVWZXJzaW9uICYmIHNlbXZlci5zYXRpc2ZpZXMoY29yZVZlcnNpb24sICdeMi4xLjEnKSkge1xuICAgIHZhciBfX2NvbXBpbGVyX18gPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuICAgIHZhciBfX2NvcmVfcHJpdmF0ZV9fID0gX19jb3JlX18uX19jb3JlX3ByaXZhdGVfXztcblxuICAgIHZhciBwYXRjaCA9IGZhbHNlO1xuICAgIGlmICghX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10pIHtcbiAgICAgICAgcGF0Y2ggPSB0cnVlO1xuICAgICAgICBfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICB9XG5cbiAgICBpZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgICAgICBwYXRjaCA9IHRydWU7XG4gICAgICAgIF9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcbiAgICAgICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfX3VuaXZlcnNhbF9fID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG4gICAgaWYgKHBhdGNoKSB7XG4gICAgICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfX1sndmlld191dGlscyddO1xuICAgICAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxuICAgIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5ndWxhcjItdW5pdmVyc2FsLXBhdGNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yYW5rL3JhbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWdlbmRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFua0xpbmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVhbVBpcGUgfSBmcm9tICcuL2ZpbHRlcnMvdGVhbSc7XHJcbmltcG9ydCB7IEFnZW5kYVBpcGUgfSBmcm9tICcuL2ZpbHRlcnMvYWdlbmRhJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgICAgIEFnZW5kYUNvbXBvbmVudCxcclxuICAgICAgICBSYW5rQ29tcG9uZW50LFxyXG4gICAgICAgIFJhbmtMaW5lQ29tcG9uZW50LFxyXG4gICAgICAgIFRlYW1QaXBlLFxyXG4gICAgICAgIEFnZW5kYVBpcGVcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY2FsZW5kYXIvOnRlYW0nLCBjb21wb25lbnQ6IENhbGVuZGFyQ29tcG9uZW50LCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdyYW5rLzp0ZWFtJywgY29tcG9uZW50OiBSYW5rQ29tcG9uZW50LCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhZ2VuZGEvOmRhdGUnLCBjb21wb25lbnQ6IEFnZW5kYUNvbXBvbmVudCwgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG5cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg0NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDgxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHBsYXRmb3JtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInKTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgY29tcGlsZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG52YXIgQlJPV1NFUl9TQU5JVElaQVRJT05fUFJPVklERVJTID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uQlJPV1NFUl9TQU5JVElaQVRJT05fUFJPVklERVJTLCBTaGFyZWRTdHlsZXNIb3N0ID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uU2hhcmVkU3R5bGVzSG9zdCwgRG9tU2hhcmVkU3R5bGVzSG9zdCA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbVNoYXJlZFN0eWxlc0hvc3QsIERvbVJvb3RSZW5kZXJlciA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkRvbVJvb3RSZW5kZXJlciwgRG9tRXZlbnRzUGx1Z2luID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uRG9tRXZlbnRzUGx1Z2luLCBLZXlFdmVudHNQbHVnaW4gPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5LZXlFdmVudHNQbHVnaW4sIERvbUFkYXB0ZXIgPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5Eb21BZGFwdGVyLCBzZXRSb290RG9tQWRhcHRlciA9IHBsYXRmb3JtX2Jyb3dzZXJfMS5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLnNldFJvb3REb21BZGFwdGVyLCBnZXRET00gPSBwbGF0Zm9ybV9icm93c2VyXzEuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5nZXRET00sIEhhbW1lckdlc3R1cmVzUGx1Z2luID0gcGxhdGZvcm1fYnJvd3Nlcl8xLl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uSGFtbWVyR2VzdHVyZXNQbHVnaW47XG5leHBvcnRzLkJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUyA9IEJST1dTRVJfU0FOSVRJWkFUSU9OX1BST1ZJREVSUztcbmV4cG9ydHMuU2hhcmVkU3R5bGVzSG9zdCA9IFNoYXJlZFN0eWxlc0hvc3Q7XG5leHBvcnRzLkRvbVNoYXJlZFN0eWxlc0hvc3QgPSBEb21TaGFyZWRTdHlsZXNIb3N0O1xuZXhwb3J0cy5Eb21Sb290UmVuZGVyZXIgPSBEb21Sb290UmVuZGVyZXI7XG5leHBvcnRzLkRvbUV2ZW50c1BsdWdpbiA9IERvbUV2ZW50c1BsdWdpbjtcbmV4cG9ydHMuS2V5RXZlbnRzUGx1Z2luID0gS2V5RXZlbnRzUGx1Z2luO1xuZXhwb3J0cy5Eb21BZGFwdGVyID0gRG9tQWRhcHRlcjtcbmV4cG9ydHMuc2V0Um9vdERvbUFkYXB0ZXIgPSBzZXRSb290RG9tQWRhcHRlcjtcbmV4cG9ydHMuSGFtbWVyR2VzdHVyZXNQbHVnaW4gPSBIYW1tZXJHZXN0dXJlc1BsdWdpbjtcbnZhciBWaWV3VXRpbHMgPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMsIEFuaW1hdGlvbktleWZyYW1lID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uQW5pbWF0aW9uS2V5ZnJhbWUsIEFuaW1hdGlvblBsYXllciA9IGNvcmVfMS5fX2NvcmVfcHJpdmF0ZV9fLkFuaW1hdGlvblBsYXllciwgQW5pbWF0aW9uU3R5bGVzID0gY29yZV8xLl9fY29yZV9wcml2YXRlX18uQW5pbWF0aW9uU3R5bGVzLCBSZW5kZXJEZWJ1Z0luZm8gPSBjb3JlXzEuX19jb3JlX3ByaXZhdGVfXy5SZW5kZXJEZWJ1Z0luZm87XG5leHBvcnRzLlZpZXdVdGlscyA9IFZpZXdVdGlscztcbmV4cG9ydHMuQW5pbWF0aW9uS2V5ZnJhbWUgPSBBbmltYXRpb25LZXlmcmFtZTtcbmV4cG9ydHMuQW5pbWF0aW9uUGxheWVyID0gQW5pbWF0aW9uUGxheWVyO1xuZXhwb3J0cy5BbmltYXRpb25TdHlsZXMgPSBBbmltYXRpb25TdHlsZXM7XG5leHBvcnRzLlJlbmRlckRlYnVnSW5mbyA9IFJlbmRlckRlYnVnSW5mbztcbnZhciBTZWxlY3Rvck1hdGNoZXIgPSBjb21waWxlcl8xLl9fY29tcGlsZXJfcHJpdmF0ZV9fLlNlbGVjdG9yTWF0Y2hlciwgQ3NzU2VsZWN0b3IgPSBjb21waWxlcl8xLl9fY29tcGlsZXJfcHJpdmF0ZV9fLkNzc1NlbGVjdG9yO1xuZXhwb3J0cy5TZWxlY3Rvck1hdGNoZXIgPSBTZWxlY3Rvck1hdGNoZXI7XG5leHBvcnRzLkNzc1NlbGVjdG9yID0gQ3NzU2VsZWN0b3I7XG52YXIgX19lbXB0eSA9IG51bGw7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBfX2VtcHR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJy4uLy4uL21vZGVscy9tYXRjaCc7XHJcbmltcG9ydCB7IE1hdGNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21hdGNocy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZ2VuZGEnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWdlbmRhLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FnZW5kYS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ2VuZGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBtYXRjaHM6IE1hdGNoW107XHJcbiAgICBwcml2YXRlIGRhdGU6IERhdGU7XHJcbiAgICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBuYXZMaW5rcyA9IFt7XHJcbiAgICAgICAgICAgIGxpbms6ICcvYWdlbmRhLzIwLTAzLTIwMTcnLFxyXG4gICAgICAgICAgICBsYWJlbDogJzIwLTAzLTIwMTcnXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxpbms6ICcvYWdlbmRhLzI3LTAzLTIwMTcnLFxyXG4gICAgICAgICAgICBsYWJlbDogJzI3LTAzLTIwMTcnXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxpbms6ICcvYWdlbmRhLzAzLTA0LTIwMTcnLFxyXG4gICAgICAgICAgICBsYWJlbDogJzAzLTA0LTIwMTcnXHJcbiAgICB9XTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYXRjaFNlcnZpY2U6IE1hdGNoU2VydmljZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMudXBkYXRlVmlldyhwYXJhbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMubWF0Y2hzID0gW107XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzcGxpdERhdGUgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2RhdGUnXS5zcGxpdCgnLScpO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKHNwbGl0RGF0ZVsyXSwgc3BsaXREYXRlWzFdLCBzcGxpdERhdGVbMF0pO1xyXG4gICAgICAgIHRoaXMuX21hdGNoU2VydmljZS5nZXRNYXRjaHMoKS5zdWJzY3JpYmUoYSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hzID0gYTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0hPRkModGVhbTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICEodGVhbSAhPSBudWxsICYmIHRlYW0uaW5kZXhPZihcIkhPUkdVRVMgT0RPU1wiKSAhPSAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgT3Blbk1hdGNoRGV0YWlscygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ291Y291Jyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3R1U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYXRjaHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmtTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmFua3Muc2VydmljZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbQWN0dVNlcnZpY2UsIE1hdGNoU2VydmljZSwgUmFua1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJy4uLy4uL21vZGVscy9tYXRjaCc7XHJcbmltcG9ydCB7IE1hdGNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21hdGNocy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYWxlbmRhcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9jYWxlbmRhci5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIG1hdGNoczogTWF0Y2hbXTtcclxuICAgIHByaXZhdGUgdGVhbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgbmF2TGlua3MgPSBbe1xyXG4gICAgICAgICAgICBsaW5rOiAnL2NhbGVuZGFyL2VxdWlwZTEnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0VxdWlwZTEnXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxpbms6ICcvY2FsZW5kYXIvZXF1aXBlMicsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXF1aXBlMidcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgbGluazogJy9jYWxlbmRhci9lcXVpcGUzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdFcXVpcGUzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWF0Y2hTZXJ2aWNlOiBNYXRjaFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLnVwZGF0ZVZpZXcocGFyYW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm1hdGNocyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRlYW0gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ3RlYW0nXTtcclxuICAgICAgICB0aGlzLl9tYXRjaFNlcnZpY2UuZ2V0TWF0Y2hzKCkuc3Vic2NyaWJlKGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNocyA9IGE7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNIT0ZDKHRlYW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAhKHRlYW0gIT0gbnVsbCAmJiB0ZWFtLmluZGV4T2YoXCJIT1JHVUVTIE9ET1NcIikgIT0gLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIE9wZW5NYXRjaERldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvdWNvdScpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jYXJkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2NhcmQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdGV4dGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGltYWdlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gICAgZ2V0QmFja2dyb3VuZEltYWdlKGltYWdlVXJsOiBzdHJpbmcpIDogU2FmZVN0eWxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd1cmwoJyArIGltYWdlVXJsICsgJyknKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0dVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY3R1cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0dSB9IGZyb20gJy4uLy4uL21vZGVscy9BY3R1JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIGFjdHVzOiBBY3R1W107XHJcbiAgICByZWd1bGFyRGlzdHJpYnV0aW9uID0gOTAgLyAzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdHVTZXJ2aWNlOiBBY3R1U2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9hY3R1U2VydmljZS5nZXRBY3R1cygpLnN1YnNjcmliZShhID0+IHRoaXMuYWN0dXMgPSBhKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSYW5rU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JhbmtzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbGFzc2VtZW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NsYXNzZW1lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yYW5rLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3JhbmsuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHNlbGVjdG9yOiAncmFuaydcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfcmFua3M6IENsYXNzZW1lbnRbXTtcclxuICAgIHByaXZhdGUgdGVhbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgbmF2TGlua3MgPSBbe1xyXG4gICAgICAgIGxpbms6ICcvcmFuay9lcXVpcGUxJyxcclxuICAgICAgICBsYWJlbDogJ0VxdWlwZTEnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbGluazogJy9yYW5rL2VxdWlwZTInLFxyXG4gICAgICAgIGxhYmVsOiAnRXF1aXBlMidcclxuICAgIH0sIHtcclxuICAgICAgICBsaW5rOiAnL3JhbmsvZXF1aXBlMycsXHJcbiAgICAgICAgbGFiZWw6ICdFcXVpcGUzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmFua1NlcnZpY2U6IFJhbmtTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMudXBkYXRlVmlldyhwYXJhbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3JhbmtzID0gW107XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGVhbSA9IHRoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtc1sndGVhbSddO1xyXG4gICAgICAgIHRoaXMuX3JhbmtTZXJ2aWNlLmdldENsYXNzZW1lbnRzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhbmtzID0gYztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYW5rLWxpbmUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmFuay5saW5lLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3JhbmsubGluZS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYW5rTGluZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSByYW5rOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBub206IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBvaW50czogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgam91ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdmljdG9pcmU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIG51bDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGVmYWl0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYnA6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGJjOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkaWZmOiBzdHJpbmc7XHJcblxyXG4gICAgaXNIT0ZDKCkge1xyXG4gICAgICAgIHJldHVybiAhKHRoaXMubm9tICE9IG51bGwgJiYgdGhpcy5ub20uaW5kZXhPZihcIkhPUkdVRVMgT0RPU1wiKSAhPSAtMSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSAnLi4vbW9kZWxzL21hdGNoJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdhZ2VuZGEnXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFnZW5kYVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShtYXRjaDogTWF0Y2hbXSwgZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBtYXRjaCAhPSBudWxsID8gbWF0Y2guZmlsdGVyKG0gPT4gdGhpcy5pc1NhbWVXZWVrKG0uZGF0ZSwgZGF0ZSkgJiYgKG0uZXF1aXBlMS5pbmRleE9mKFwiSE9SR1VFUyBPRE9TXCIpICE9IC0xIHx8IG0uZXF1aXBlMi5pbmRleE9mKFwiSE9SR1VFUyBPRE9TXCIpICE9IC0xKSkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2FtZVdlZWsoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XHJcbiAgICAgICAgdmFyIG1vbmRheTEgPSB0aGlzLmdldFByZXZpb3VzTW9uZGF5KGRhdGUxKTtcclxuICAgICAgICB2YXIgbW9uZGF5MiA9IHRoaXMuZ2V0UHJldmlvdXNNb25kYXkoZGF0ZTIpO1xyXG4gICAgICAgIHJldHVybiAobW9uZGF5MS5nZXREYXRlKCkgPT0gbW9uZGF5Mi5nZXREYXRlKCkgJiYgbW9uZGF5MS5nZXRGdWxsWWVhcigpID09IG1vbmRheTIuZ2V0RnVsbFllYXIoKSAmJiBtb25kYXkxLmdldE1vbnRoKCkgPT0gbW9uZGF5Mi5nZXRNb250aCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmV2aW91c01vbmRheShkOiBEYXRlKSB7XHJcbiAgICAgICAgdmFyIGRheSA9IGQuZ2V0RGF5KCksXHJcbiAgICAgICAgICAgIGRpZmYgPSBkLmdldERhdGUoKSAtIGRheSArIChkYXkgPT0gMCA/IC02IDogMSk7IC8vIGFkanVzdCB3aGVuIGRheSBpcyBzdW5kYXlcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZC5zZXREYXRlKGRpZmYpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9maWx0ZXJzL2FnZW5kYS50cyIsImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcGV0aXRpb24gfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uLmNvbXBldGl0aW9uJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICd0ZWFtJyxcclxuICAgIHB1cmU6IGZhbHNlXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlYW1QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oY29tcDogQ29tbW9uQ29tcGV0aXRpb25bXSwgZXF1aXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXAgIT0gbnVsbCA/IGNvbXAuZmlsdGVyKGMgPT4gYy5jb21wZXRpdGlvbi5jYXRlZ29yaWUgPT0gZXF1aXBlIHx8IGMuY29tcGV0aXRpb24uY2F0ZWdvcmllID09IGVxdWlwZSkgOiBudWxsO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2ZpbHRlcnMvdGVhbS50cyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSAuZGF0ZURpdiwgLmxpc3QtaXRlbSAubmFtZURpdiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXHJcXG4gICAgZm9udC1zaXplOjAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZURpdiB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbU5hbWUge1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgZm9udC1zaXplOjAuN2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVEaXYge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxufVxcclxcblxcclxcbm1kLXByb2dyZXNzLWNpcmNsZSB7XFxyXFxuICAgIG1hcmdpbjphdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nRGl2IGltZyB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJtZC1zaWRlbmF2IGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubWQtdG9vbGJhciBtZC1pY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjFlbTtcXHJcXG59XFxyXFxuXFxyXFxubWQtc2lkZW5hdiBtZC1saXN0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIC5kYXRlRGl2LCAubGlzdC1pdGVtIC5uYW1lRGl2IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcclxcbiAgICBmb250LXNpemU6MC44ZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlRGl2IHtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50ZWFtTmFtZSB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbiAgICBmb250LXNpemU6MC43ZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZURpdiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG59XFxyXFxuXFxyXFxubWQtcHJvZ3Jlc3MtY2lyY2xlIHtcXHJcXG4gICAgbWFyZ2luOmF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbWdEaXYgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWF0LWNhcmQge1xcclxcbiAgICBtYXJnaW46MTVweDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm1kLWNhcmQge1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5tZC1wcm9ncmVzcy1jaXJjbGUge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICBoZWlnaHQ6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyAubm9tRGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5yb3cgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAzZW07XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JhbmsvcmFuay5saW5lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IG1kLXRhYi1uYXYtYmFyPlxcclxcbiAgICA8YSBtZC10YWItbGlua1xcclxcbiAgICAgICAqbmdGb3I9XFxcImxldCB0YWIgb2YgbmF2TGlua3NcXFwiXFxyXFxuICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwidGFiLmxpbmtcXFwiXFxyXFxuICAgICAgIHJvdXRlckxpbmtBY3RpdmUgI3JsYT1cXFwicm91dGVyTGlua0FjdGl2ZVxcXCJcXHJcXG4gICAgICAgW2FjdGl2ZV09XFxcInJsYS5pc0FjdGl2ZVxcXCI+XFxyXFxuICAgICAgICB7e3RhYi5sYWJlbH19XFxyXFxuICAgIDwvYT5cXHJcXG48L25hdj5cXHJcXG48bWQtcHJvZ3Jlc3MtY2lyY2xlIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogIWlzTG9hZGluZ31cXFwiIG1vZGU9XFxcImluZGV0ZXJtaW5hdGVcXFwiPjwvbWQtcHJvZ3Jlc3MtY2lyY2xlPlxcclxcbjxkaXYgY2xhc3M9XFxcImxpc3QtaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgbWF0Y2ggb2YgKG1hdGNocyB8IGFnZW5kYSA6IGRhdGUpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmFtZURpdlxcXCI+XFxyXFxuICAgICAgICB7e21hdGNoLmNvbXBldGl0aW9uLm5vbX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlRGl2XFxcIj5cXHJcXG4gICAgICAgIHt7bWF0Y2guZGF0ZSB8IGRhdGU6ICdkZC9NTS95IEhIOm1tJ319XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4TGF5b3V0PVxcXCJyb3dcXFwiIGZ4TGF5b3V0V3JhcD1cXFwid3JhcFxcXCIgZnhMYXlvdXRBbGlnbj1cXFwic3BhY2UtYXJvdW5kIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWdEaXZcXFwiIGZ4RmxleD1cXFwiMTBcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgICAgICA8aW1nIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0hPRkMobWF0Y2guZXF1aXBlMSl9XFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIikgKyBcIlxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVhbU5hbWVcXFwiIGZ4RmxleD1cXFwiMzVcXFwiPlxcclxcbiAgICAgICAgICAgIHt7bWF0Y2guZXF1aXBlMX19XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlRGl2XFxcIiBmeEZsZXg+XFxyXFxuICAgICAgICAgICAge3sgKG1hdGNoLnNjb3JlMSAhPSBudWxsICYmIG1hdGNoLnNjb3JlMiAhPSBudWxsKSA/IG1hdGNoLnNjb3JlMSArICcgLSAnICsgbWF0Y2guc2NvcmUyIDogJycgfX1cXHJcXG4gICAgICAgICAgICB7eyBtYXRjaC5tZXNzYWdlICE9IG51bGwgPyBtYXRjaC5tZXNzYWdlIDogJyd9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtTmFtZVxcXCIgZnhGbGV4PVxcXCIzNVxcXCI+XFxyXFxuICAgICAgICAgICAge3ttYXRjaC5lcXVpcGUyfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1nRGl2XFxcIiBmeEZsZXg9XFxcIjEwXFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICAgICAgPGltZyBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNIT0ZDKG1hdGNoLmVxdWlwZTIpfVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtZC10b29sYmFyIGNvbG9yPVxcXCJwcmltYXJ5XFxcIj5cXHJcXG4gICAgPG1kLWljb24gKGNsaWNrKT1cXFwic2lkZW5hdi5vcGVuKClcXFwiPm1lbnU8L21kLWljb24+XFxyXFxuICAgIDxzcGFuPldlYkhPRkM8L3NwYW4+XFxyXFxuPC9tZC10b29sYmFyPlxcclxcbjxtZC1zaWRlbmF2LWNvbnRhaW5lcj5cXHJcXG4gICAgPG1kLXNpZGVuYXYgI3NpZGVuYXY+XFxyXFxuICAgICAgICA8bWQtbGlzdD5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5BY3R1PC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxoMyBtZC1zdWJoZWFkZXI+Q2FsZW5kcmllcjwvaDM+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NhbGVuZGFyL2VxdWlwZTEnXVxcXCI+RXF1aXBlIDE8L2E+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NhbGVuZGFyL2VxdWlwZTInXVxcXCI+RXF1aXBlIDI8L2E+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2NhbGVuZGFyL2VxdWlwZTMnXVxcXCI+RXF1aXBlIDM8L2E+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICA8L21kLWxpc3Q+XFxyXFxuICAgICAgICA8bWQtbGlzdD5cXHJcXG4gICAgICAgICAgICA8aDMgbWQtc3ViaGVhZGVyPkNsYXNzZW1lbnQ8L2gzPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9yYW5rL2VxdWlwZTEnXVxcXCI+RXF1aXBlIDE8L2E+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2lkZW5hdi5jbG9zZSgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3JhbmsvZXF1aXBlMiddXFxcIj5FcXVpcGUgMjwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmFuay9lcXVpcGUzJ11cXFwiPkVxdWlwZSAzPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgPC9tZC1saXN0PlxcclxcbiAgICAgICAgPG1kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgPGgzIG1kLXN1YmhlYWRlcj5BZ2VuZGE8L2gzPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9hZ2VuZGEvMjAtMDMtMjAxNyddXFxcIj5BdmFudDwvYT5cXHJcXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaWRlbmF2LmNsb3NlKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvYWdlbmRhLzI3LTAzLTIwMTcnXVxcXCI+Tm93PC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNpZGVuYXYuY2xvc2UoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9hZ2VuZGEvMDMtMDQtMjAxNyddXFxcIj5BcHLvv71zPC9hPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgPC9tZC1saXN0PlxcclxcbiAgICA8L21kLXNpZGVuYXY+XFxyXFxuXFxyXFxuICAgIDxtYWluIGNsYXNzPVxcXCJtZGwtbGF5b3V0X19jb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0IGNsYXNzPVxcXCJtZGwtZ3JpZFxcXCI+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICA8L21haW4+XFxyXFxuPC9tZC1zaWRlbmF2LWNvbnRhaW5lcj5cXHJcXG5cXHJcXG48IS0tZGl2IG1kbCBjbGFzcz0nbWRsLWxheW91dCBtZGwtanMtbGF5b3V0IG1kbC1sYXlvdXQtLWZpeGVkLWhlYWRlcic+XFxyXFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcIm1kbC1sYXlvdXRfX2hlYWRlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtbGF5b3V0X19oZWFkZXItcm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWRsLWxheW91dC10aXRsZVxcXCI+V2ViSE9GQzwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLWxheW91dF9fZHJhd2VyXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtZGwtbGF5b3V0LXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5XZWJIT0ZDPC9zcGFuPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkFjdHU8L2E+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYW5kcm9pZC1kcmF3ZXItc2VwYXJhdG9yXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIGhyZWY9XFxcIlxcXCI+Q2FsZW5kcmllcjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2FsZW5kYXIvZXF1aXBlMSddXFxcIj5FcXVpcGUgMTwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2FsZW5kYXIvZXF1aXBlMiddXFxcIj5FcXVpcGUgMjwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2FsZW5kYXIvZXF1aXBlMyddXFxcIj5FcXVpcGUgMzwvYT5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIGhyZWY9XFxcIlxcXCI+Q2xhc3NlbWVudDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLW5hdmlnYXRpb25fX2xpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmFuay9lcXVpcGUxJ11cXFwiPkVxdWlwZSAxPC9hPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbmF2aWdhdGlvbl9fbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9yYW5rL2VxdWlwZTInXVxcXCI+RXF1aXBlIDI8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1uYXZpZ2F0aW9uX19saW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3JhbmsvZXF1aXBlMyddXFxcIj5FcXVpcGUgMzwvYT5cXHJcXG4gICAgICAgIDwvbmF2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdi0tPlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IG1kLXRhYi1uYXYtYmFyPlxcclxcbiAgICA8YSBtZC10YWItbGlua1xcclxcbiAgICAgICAqbmdGb3I9XFxcImxldCB0YWIgb2YgbmF2TGlua3NcXFwiXFxyXFxuICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwidGFiLmxpbmtcXFwiXFxyXFxuICAgICAgIHJvdXRlckxpbmtBY3RpdmUgI3JsYT1cXFwicm91dGVyTGlua0FjdGl2ZVxcXCJcXHJcXG4gICAgICAgW2FjdGl2ZV09XFxcInJsYS5pc0FjdGl2ZVxcXCI+XFxyXFxuICAgICAgICB7e3RhYi5sYWJlbH19XFxyXFxuICAgIDwvYT5cXHJcXG48L25hdj5cXHJcXG48bWQtcHJvZ3Jlc3MtY2lyY2xlIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogIWlzTG9hZGluZ31cXFwiIG1vZGU9XFxcImluZGV0ZXJtaW5hdGVcXFwiPjwvbWQtcHJvZ3Jlc3MtY2lyY2xlPlxcclxcbjxkaXYgY2xhc3M9XFxcImxpc3QtaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgbWF0Y2ggb2YgKG1hdGNocyB8IHRlYW0gOiB0ZWFtKVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hbWVEaXZcXFwiPlxcclxcbiAgICAgICAge3ttYXRjaC5jb21wZXRpdGlvbi5ub219fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGF0ZURpdlxcXCI+XFxyXFxuICAgICAgICB7e21hdGNoLmRhdGUgfCBkYXRlOiAnZGQvTU0veSBISDptbSd9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeExheW91dD1cXFwicm93XFxcIiBmeExheW91dFdyYXA9XFxcIndyYXBcXFwiIGZ4TGF5b3V0QWxpZ249XFxcInNwYWNlLWFyb3VuZCBjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1nRGl2XFxcIiBmeEZsZXg9XFxcIjEwXFxcIiBmeFNob3c9XFxcImZhbHNlXFxcIiBmeFNob3cuZ3QteHM+XFxyXFxuICAgICAgICAgICAgPGltZyBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNIT0ZDKG1hdGNoLmVxdWlwZTEpfVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIpICsgXCJcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW1OYW1lXFxcIiBmeEZsZXg9XFxcIjM1XFxcIj5cXHJcXG4gICAgICAgICAgICB7e21hdGNoLmVxdWlwZTF9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZURpdlxcXCIgZnhGbGV4PlxcclxcbiAgICAgICAgICAgIHt7IChtYXRjaC5zY29yZTEgIT0gbnVsbCAmJiBtYXRjaC5zY29yZTIgIT0gbnVsbCkgPyBtYXRjaC5zY29yZTEgKyAnIC0gJyArIG1hdGNoLnNjb3JlMiA6ICcnIH19XFxyXFxuICAgICAgICAgICAge3sgbWF0Y2gubWVzc2FnZSAhPSBudWxsID8gbWF0Y2gubWVzc2FnZSA6ICcnfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVhbU5hbWVcXFwiIGZ4RmxleD1cXFwiMzVcXFwiPlxcclxcbiAgICAgICAgICAgIHt7bWF0Y2guZXF1aXBlMn19XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImltZ0RpdlxcXCIgZnhGbGV4PVxcXCIxMFxcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgICAgIDxpbWcgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzSE9GQyhtYXRjaC5lcXVpcGUyKX1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiKSArIFwiXFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLWNhcmRfX3RpdGxlXFxcIlxcclxcbiAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kSW1hZ2VdPVxcXCJnZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VVcmwpXFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwibWRsLWNhcmRfX3RpdGxlLXRleHRcXFwiPnt7dGl0bGV9fTwvaDI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XFxcIj5cXHJcXG4gICAgICAgIHt7dGV4dGV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwibWRsLWJ1dHRvbiBtZGwtYnV0dG9uLS1jb2xvcmVkIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcXFwiPlxcclxcbiAgICAgICAgICAgIETDqXRhaWxzXFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgZnhMYXlvdXQ9XFxcInJvd1xcXCIgZnhMYXlvdXQueHM9XFxcImNvbHVtblxcXCIgZnhMYXlvdXRXcmFwPVxcXCJ3cmFwXFxcIiBmeExheW91dEFsaWduPVxcXCJzcGFjZS1hcm91bmQgY2VudGVyXFxcIj5cXHJcXG4gICAgPG1kLWNhcmQgZnhGbGV4Lmd0LXhzPVxcXCI0MCVcXFwiIFtmeEZsZXguZ3QtbWRdPVxcXCJyZWd1bGFyRGlzdHJpYnV0aW9uXFxcIiAgKm5nRm9yPVxcXCJsZXQgYWN0dSBvZiBhY3R1czsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICA8bWQtY2FyZC10aXRsZT57e2FjdHUudGl0cmV9fTwvbWQtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDxpbWcgbWQtY2FyZC1pbWFnZSBbc3JjXT1cXFwiYWN0dS5pbWFnZVxcXCIvPlxcclxcbiAgICAgICAgPG1kLWNhcmQtY29udGVudD5cXHJcXG4gICAgICAgICAgICA8cD57e2FjdHUudGV4dGV9fTwvcD5cXHJcXG4gICAgICAgIDwvbWQtY2FyZC1jb250ZW50PlxcclxcbiAgICA8L21kLWNhcmQ+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBtZC10YWItbmF2LWJhcj5cXHJcXG4gICAgPGEgbWQtdGFiLWxpbmtcXHJcXG4gICAgICAgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIG5hdkxpbmtzXFxcIlxcclxcbiAgICAgICBbcm91dGVyTGlua109XFxcInRhYi5saW5rXFxcIlxcclxcbiAgICAgICByb3V0ZXJMaW5rQWN0aXZlICNybGE9XFxcInJvdXRlckxpbmtBY3RpdmVcXFwiXFxyXFxuICAgICAgIFthY3RpdmVdPVxcXCJybGEuaXNBY3RpdmVcXFwiPlxcclxcbiAgICAgICAge3t0YWIubGFiZWx9fVxcclxcbiAgICA8L2E+XFxyXFxuPC9uYXY+XFxyXFxuPG1kLXByb2dyZXNzLWNpcmNsZSBjb2xvcj1cXFwicHJpbWFyeVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6ICFpc0xvYWRpbmd9XFxcIiBtb2RlPVxcXCJpbmRldGVybWluYXRlXFxcIj48L21kLXByb2dyZXNzLWNpcmNsZT5cXHJcXG5cXHJcXG48cmFuay1saW5lIFtuZ0NsYXNzXT1cXFwieydoaWRkZW4nOiBpc0xvYWRpbmd9XFxcIlxcclxcbiAgICAgICAgICAgcmFuaz1cXFwiI1xcXCJcXHJcXG4gICAgICAgICAgIG5vbT1cXFwiTm9tXFxcIlxcclxcbiAgICAgICAgICAgcG9pbnRzPVxcXCJQXFxcIlxcclxcbiAgICAgICAgICAgam91ZT1cXFwiSlxcXCJcXHJcXG4gICAgICAgICAgIHZpY3RvaXJlPVxcXCJWXFxcIlxcclxcbiAgICAgICAgICAgbnVsPVxcXCJOXFxcIlxcclxcbiAgICAgICAgICAgZGVmYWl0ZT1cXFwiRFxcXCJcXHJcXG4gICAgICAgICAgIGJwPVxcXCJCUFxcXCJcXHJcXG4gICAgICAgICAgIGJjPVxcXCJCQ1xcXCJcXHJcXG4gICAgICAgICAgIGRpZmY9XFxcIkRpZmZcXFwiPjwvcmFuay1saW5lPlxcclxcblxcclxcbjxyYW5rLWxpbmUgKm5nRm9yPVxcXCJsZXQgcmFuayBvZiAoX3JhbmtzIHwgdGVhbSA6IHRlYW0pOyBsZXQgaSA9IGluZGV4XFxcIlxcclxcbiAgICAgICAgICAgW25nQ2xhc3NdPVxcXCJ7J2hpZGRlbic6IGlzTG9hZGluZ31cXFwiXFxyXFxuICAgICAgICAgICBbcmFua109XFxcImkgKyAxXFxcIlxcclxcbiAgICAgICAgICAgW25vbV09XFxcInJhbmsubm9tXFxcIlxcclxcbiAgICAgICAgICAgW3BvaW50c109XFxcInJhbmsucG9pbnRzXFxcIlxcclxcbiAgICAgICAgICAgW2pvdWVdPVxcXCJyYW5rLmpvdWVcXFwiXFxyXFxuICAgICAgICAgICBbdmljdG9pcmVdPVxcXCJyYW5rLnZpY3RvaXJlXFxcIlxcclxcbiAgICAgICAgICAgW251bF09XFxcInJhbmsubnVsXFxcIlxcclxcbiAgICAgICAgICAgW2RlZmFpdGVdPVxcXCJyYW5rLmRlZmFpdGVcXFwiXFxyXFxuICAgICAgICAgICBbYnBdPVxcXCJyYW5rLmJwXFxcIlxcclxcbiAgICAgICAgICAgW2JjXT1cXFwicmFuay5iY1xcXCJcXHJcXG4gICAgICAgICAgIFtkaWZmXT1cXFwicmFuay5kaWZmXFxcIj48L3JhbmstbGluZT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiXFxyXFxuICAgICBmeExheW91dD1cXFwicm93XFxcIlxcclxcbiAgICAgZnhMYXlvdXRXcmFwPVxcXCJ3cmFwXFxcIlxcclxcbiAgICAgZnhMYXlvdXRBbGlnbj1cXFwic3BhY2UtYXJvdW5kIGNlbnRlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImltZ0RpdlxcXCIgZnhGbGV4PVxcXCIxMFxcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAgPGltZyBbbmdDbGFzc109XFxcInsnaGlkZGVuJzogaXNIT0ZDKCl9XFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIikgKyBcIlxcXCIgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIj5cXHJcXG4gICAgICAgIHt7cmFua319XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJub21EaXZcXFwiIGZ4RmxleD5cXHJcXG4gICAgICAgIHt7bm9tfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIj5cXHJcXG4gICAgICAgIHt7cG9pbnRzfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZnhGbGV4PVxcXCI3XFxcIj5cXHJcXG4gICAgICAgIHt7am91ZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAge3t2aWN0b2lyZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAge3tudWx9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmeEZsZXg9XFxcIjdcXFwiIGZ4U2hvdz1cXFwiZmFsc2VcXFwiIGZ4U2hvdy5ndC14cz5cXHJcXG4gICAgICAgIHt7ZGVmYWl0ZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAge3ticH19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCIgZnhTaG93PVxcXCJmYWxzZVxcXCIgZnhTaG93Lmd0LXhzPlxcclxcbiAgICAgICAge3tiY319XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGZ4RmxleD1cXFwiN1xcXCI+XFxyXFxuICAgICAgICB7e2RpZmZ9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yYW5rL3JhbmsubGluZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9PYnNlcnZhYmxlJyk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xudmFyIEVycm9yT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVycm9yT2JzZXJ2YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFcnJvck9ic2VydmFibGUoZXJyb3IsIHNjaGVkdWxlcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgbm8gaXRlbXMgdG8gdGhlIE9ic2VydmVyIGFuZCBpbW1lZGlhdGVseVxuICAgICAqIGVtaXRzIGFuIGVycm9yIG5vdGlmaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5KdXN0IGVtaXRzICdlcnJvcicsIGFuZCBub3RoaW5nIGVsc2UuXG4gICAgICogPC9zcGFuPlxuICAgICAqXG4gICAgICogPGltZyBzcmM9XCIuL2ltZy90aHJvdy5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgKlxuICAgICAqIFRoaXMgc3RhdGljIG9wZXJhdG9yIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgYSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IG9ubHlcbiAgICAgKiBlbWl0cyB0aGUgZXJyb3Igbm90aWZpY2F0aW9uLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29tcG9zaW5nIHdpdGggb3RoZXJcbiAgICAgKiBPYnNlcnZhYmxlcywgc3VjaCBhcyBpbiBhIHtAbGluayBtZXJnZU1hcH0uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IHRoZSBudW1iZXIgNywgdGhlbiBlbWl0IGFuIGVycm9yLjwvY2FwdGlvbj5cbiAgICAgKiB2YXIgcmVzdWx0ID0gUnguT2JzZXJ2YWJsZS50aHJvdyhuZXcgRXJyb3IoJ29vcHMhJykpLnN0YXJ0V2l0aCg3KTtcbiAgICAgKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCksIGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5NYXAgYW5kIGZsYXR0ZW4gbnVtYmVycyB0byB0aGUgc2VxdWVuY2UgJ2EnLCAnYicsICdjJywgYnV0IHRocm93IGFuIGVycm9yIGZvciAxMzwvY2FwdGlvbj5cbiAgICAgKiB2YXIgaW50ZXJ2YWwgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICAgICAqIHZhciByZXN1bHQgPSBpbnRlcnZhbC5tZXJnZU1hcCh4ID0+XG4gICAgICogICB4ID09PSAxMyA/XG4gICAgICogICAgIFJ4Lk9ic2VydmFibGUudGhyb3coJ1RoaXJ0ZWVucyBhcmUgYmFkJykgOlxuICAgICAqICAgICBSeC5PYnNlcnZhYmxlLm9mKCdhJywgJ2InLCAnYycpXG4gICAgICogKTtcbiAgICAgKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCksIGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBjcmVhdGV9XG4gICAgICogQHNlZSB7QGxpbmsgZW1wdHl9XG4gICAgICogQHNlZSB7QGxpbmsgbmV2ZXJ9XG4gICAgICogQHNlZSB7QGxpbmsgb2Z9XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZXJyb3IgVGhlIHBhcnRpY3VsYXIgRXJyb3IgdG8gcGFzcyB0byB0aGUgZXJyb3Igbm90aWZpY2F0aW9uLlxuICAgICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBBIHtAbGluayBJU2NoZWR1bGVyfSB0byB1c2UgZm9yIHNjaGVkdWxpbmdcbiAgICAgKiB0aGUgZW1pc3Npb24gb2YgdGhlIGVycm9yIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBlcnJvciBPYnNlcnZhYmxlOiBlbWl0cyBvbmx5IHRoZSBlcnJvciBub3RpZmljYXRpb25cbiAgICAgKiB1c2luZyB0aGUgZ2l2ZW4gZXJyb3IgYXJndW1lbnQuXG4gICAgICogQHN0YXRpYyB0cnVlXG4gICAgICogQG5hbWUgdGhyb3dcbiAgICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIEVycm9yT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoZXJyb3IsIHNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JzZXJ2YWJsZShlcnJvciwgc2NoZWR1bGVyKTtcbiAgICB9O1xuICAgIEVycm9yT2JzZXJ2YWJsZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgdmFyIGVycm9yID0gYXJnLmVycm9yLCBzdWJzY3JpYmVyID0gYXJnLnN1YnNjcmliZXI7XG4gICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xuICAgIH07XG4gICAgRXJyb3JPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5lcnJvcjtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKEVycm9yT2JzZXJ2YWJsZS5kaXNwYXRjaCwgMCwge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvciwgc3Vic2NyaWJlcjogc3Vic2NyaWJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEVycm9yT2JzZXJ2YWJsZTtcbn0oT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpKTtcbmV4cG9ydHMuRXJyb3JPYnNlcnZhYmxlID0gRXJyb3JPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXJyb3JPYnNlcnZhYmxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBFcnJvck9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4vRXJyb3JPYnNlcnZhYmxlJyk7XG5leHBvcnRzLl90aHJvdyA9IEVycm9yT2JzZXJ2YWJsZV8xLkVycm9yT2JzZXJ2YWJsZS5jcmVhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHJvdy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vYnNlcnZhYmxlL3Rocm93LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTZW1WZXI7XG5cbi8vIFRoZSBkZWJ1ZyBmdW5jdGlvbiBpcyBleGNsdWRlZCBlbnRpcmVseSBmcm9tIHRoZSBtaW5pZmllZCB2ZXJzaW9uLlxuLyogbm9taW4gKi8gdmFyIGRlYnVnO1xuLyogbm9taW4gKi8gaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52ICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAgIC8qIG5vbWluICovIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpKVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIC8qIG5vbWluICovIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAvKiBub21pbiAqLyBhcmdzLnVuc2hpZnQoJ1NFTVZFUicpO1xuICAgIC8qIG5vbWluICovIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIC8qIG5vbWluICovIH07XG4vKiBub21pbiAqLyBlbHNlXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuZXhwb3J0cy5TRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJztcblxudmFyIE1BWF9MRU5HVEggPSAyNTY7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG52YXIgcmUgPSBleHBvcnRzLnJlID0gW107XG52YXIgc3JjID0gZXhwb3J0cy5zcmMgPSBbXTtcbnZhciBSID0gMDtcblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxudmFyIE5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJztcbnZhciBOVU1FUklDSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdID0gJ1swLTldKyc7XG5cblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxudmFyIE5PTk5VTUVSSUNJREVOVElGSUVSID0gUisrO1xuc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSA9ICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJztcblxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxudmFyIE1BSU5WRVJTSU9OID0gUisrO1xuc3JjW01BSU5WRVJTSU9OXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgTUFJTlZFUlNJT05MT09TRSA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTkxPT1NFXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpJztcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvbiBJZGVudGlmaWVyXG4vLyBBIG51bWVyaWMgaWRlbnRpZmllciwgb3IgYSBub24tbnVtZXJpYyBpZGVudGlmaWVyLlxuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVIgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgUFJFUkVMRUFTRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFXSA9ICcoPzotKCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICtcbiAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJdICsgJykqKSknO1xuXG52YXIgUFJFUkVMRUFTRUxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VMT09TRV0gPSAnKD86LT8oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gKyAnKSopKSc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbnZhciBCVUlMRElERU5USUZJRVIgPSBSKys7XG5zcmNbQlVJTERJREVOVElGSUVSXSA9ICdbMC05QS1aYS16LV0rJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBCVUlMRCA9IFIrKztcbnNyY1tCVUlMRF0gPSAnKD86XFxcXCsoJyArIHNyY1tCVUlMRElERU5USUZJRVJdICtcbiAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW0JVSUxESURFTlRJRklFUl0gKyAnKSopKSc7XG5cblxuLy8gIyMgRnVsbCBWZXJzaW9uIFN0cmluZ1xuLy8gQSBtYWluIHZlcnNpb24sIGZvbGxvd2VkIG9wdGlvbmFsbHkgYnkgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uIGFuZFxuLy8gYnVpbGQgbWV0YWRhdGEuXG5cbi8vIE5vdGUgdGhhdCB0aGUgb25seSBtYWpvciwgbWlub3IsIHBhdGNoLCBhbmQgcHJlLXJlbGVhc2Ugc2VjdGlvbnMgb2Zcbi8vIHRoZSB2ZXJzaW9uIHN0cmluZyBhcmUgY2FwdHVyaW5nIGdyb3Vwcy4gIFRoZSBidWlsZCBtZXRhZGF0YSBpcyBub3QgYVxuLy8gY2FwdHVyaW5nIGdyb3VwLCBiZWNhdXNlIGl0IHNob3VsZCBub3QgZXZlciBiZSB1c2VkIGluIHZlcnNpb25cbi8vIGNvbXBhcmlzb24uXG5cbnZhciBGVUxMID0gUisrO1xudmFyIEZVTExQTEFJTiA9ICd2PycgKyBzcmNbTUFJTlZFUlNJT05dICtcbiAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnNyY1tGVUxMXSA9ICdeJyArIEZVTExQTEFJTiArICckJztcblxuLy8gbGlrZSBmdWxsLCBidXQgYWxsb3dzIHYxLjIuMyBhbmQgPTEuMi4zLCB3aGljaCBwZW9wbGUgZG8gc29tZXRpbWVzLlxuLy8gYWxzbywgMS4wLjBhbHBoYTEgKHByZXJlbGVhc2Ugd2l0aG91dCB0aGUgaHlwaGVuKSB3aGljaCBpcyBwcmV0dHlcbi8vIGNvbW1vbiBpbiB0aGUgbnBtIHJlZ2lzdHJ5LlxudmFyIExPT1NFUExBSU4gPSAnW3Y9XFxcXHNdKicgKyBzcmNbTUFJTlZFUlNJT05MT09TRV0gK1xuICAgICAgICAgICAgICAgICBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICc/JyArXG4gICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPyc7XG5cbnZhciBMT09TRSA9IFIrKztcbnNyY1tMT09TRV0gPSAnXicgKyBMT09TRVBMQUlOICsgJyQnO1xuXG52YXIgR1RMVCA9IFIrKztcbnNyY1tHVExUXSA9ICcoKD86PHw+KT89PyknO1xuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG52YXIgWFJBTkdFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnfHh8WHxcXFxcKic7XG52YXIgWFJBTkdFSURFTlRJRklFUiA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnfHh8WHxcXFxcKic7XG5cbnZhciBYUkFOR0VQTEFJTiA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTl0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFUExBSU5MT09TRSA9IFIrKztcbnNyY1tYUkFOR0VQTEFJTkxPT1NFXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRUxPT1NFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0UgPSBSKys7XG5zcmNbWFJBTkdFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBYUkFOR0VMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbnZhciBMT05FVElMREUgPSBSKys7XG5zcmNbTE9ORVRJTERFXSA9ICcoPzp+Pj8pJztcblxudmFyIFRJTERFVFJJTSA9IFIrKztcbnNyY1tUSUxERVRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FVElMREVdICsgJ1xcXFxzKyc7XG5yZVtUSUxERVRSSU1dID0gbmV3IFJlZ0V4cChzcmNbVElMREVUUklNXSwgJ2cnKTtcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfic7XG5cbnZhciBUSUxERSA9IFIrKztcbnNyY1tUSUxERV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgVElMREVMT09TRSA9IFIrKztcbnNyY1tUSUxERUxPT1NFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBDYXJldCByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwiYXQgbGVhc3QgYW5kIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGhcIlxudmFyIExPTkVDQVJFVCA9IFIrKztcbnNyY1tMT05FQ0FSRVRdID0gJyg/OlxcXFxeKSc7XG5cbnZhciBDQVJFVFRSSU0gPSBSKys7XG5zcmNbQ0FSRVRUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORUNBUkVUXSArICdcXFxccysnO1xucmVbQ0FSRVRUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NBUkVUVFJJTV0sICdnJyk7XG52YXIgY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nO1xuXG52YXIgQ0FSRVQgPSBSKys7XG5zcmNbQ0FSRVRdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIENBUkVUTE9PU0UgPSBSKys7XG5zcmNbQ0FSRVRMT09TRV0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQSBzaW1wbGUgZ3QvbHQvZXEgdGhpbmcsIG9yIGp1c3QgXCJcIiB0byBpbmRpY2F0ZSBcImFueSB2ZXJzaW9uXCJcbnZhciBDT01QQVJBVE9STE9PU0UgPSBSKys7XG5zcmNbQ09NUEFSQVRPUkxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnKSR8XiQnO1xudmFyIENPTVBBUkFUT1IgPSBSKys7XG5zcmNbQ09NUEFSQVRPUl0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBGVUxMUExBSU4gKyAnKSR8XiQnO1xuXG5cbi8vIEFuIGV4cHJlc3Npb24gdG8gc3RyaXAgYW55IHdoaXRlc3BhY2UgYmV0d2VlbiB0aGUgZ3RsdCBhbmQgdGhlIHRoaW5nXG4vLyBpdCBtb2RpZmllcywgc28gdGhhdCBgPiAxLjIuM2AgPT0+IGA+MS4yLjNgXG52YXIgQ09NUEFSQVRPUlRSSU0gPSBSKys7XG5zcmNbQ09NUEFSQVRPUlRSSU1dID0gJyhcXFxccyopJyArIHNyY1tHVExUXSArXG4gICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICd8JyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKSc7XG5cbi8vIHRoaXMgb25lIGhhcyB0byB1c2UgdGhlIC9nIGZsYWdcbnJlW0NPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NPTVBBUkFUT1JUUklNXSwgJ2cnKTtcbnZhciBjb21wYXJhdG9yVHJpbVJlcGxhY2UgPSAnJDEkMiQzJztcblxuXG4vLyBTb21ldGhpbmcgbGlrZSBgMS4yLjMgLSAxLjIuNGBcbi8vIE5vdGUgdGhhdCB0aGVzZSBhbGwgdXNlIHRoZSBsb29zZSBmb3JtLCBiZWNhdXNlIHRoZXknbGwgYmVcbi8vIGNoZWNrZWQgYWdhaW5zdCBlaXRoZXIgdGhlIHN0cmljdCBvciBsb29zZSBjb21wYXJhdG9yIGZvcm1cbi8vIGxhdGVyLlxudmFyIEhZUEhFTlJBTkdFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxudmFyIEhZUEhFTlJBTkdFTE9PU0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VMT09TRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG52YXIgU1RBUiA9IFIrKztcbnNyY1tTVEFSXSA9ICcoPHw+KT89P1xcXFxzKlxcXFwqJztcblxuLy8gQ29tcGlsZSB0byBhY3R1YWwgcmVnZXhwIG9iamVjdHMuXG4vLyBBbGwgYXJlIGZsYWctZnJlZSwgdW5sZXNzIHRoZXkgd2VyZSBjcmVhdGVkIGFib3ZlIHdpdGggYSBmbGFnLlxuZm9yICh2YXIgaSA9IDA7IGkgPCBSOyBpKyspIHtcbiAgZGVidWcoaSwgc3JjW2ldKTtcbiAgaWYgKCFyZVtpXSlcbiAgICByZVtpXSA9IG5ldyBSZWdFeHAoc3JjW2ldKTtcbn1cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZnVuY3Rpb24gcGFyc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpXG4gICAgcmV0dXJuIHZlcnNpb247XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJylcbiAgICByZXR1cm4gbnVsbDtcblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciByID0gbG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXTtcbiAgaWYgKCFyLnRlc3QodmVyc2lvbikpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy52YWxpZCA9IHZhbGlkO1xuZnVuY3Rpb24gdmFsaWQodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHYgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbDtcbn1cblxuXG5leHBvcnRzLmNsZWFuID0gY2xlYW47XG5mdW5jdGlvbiBjbGVhbih2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcyA9IHBhcnNlKHZlcnNpb24udHJpbSgpLnJlcGxhY2UoL15bPXZdKy8sICcnKSwgbG9vc2UpO1xuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGw7XG59XG5cbmV4cG9ydHMuU2VtVmVyID0gU2VtVmVyO1xuXG5mdW5jdGlvbiBTZW1WZXIodmVyc2lvbiwgbG9vc2UpIHtcbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICBpZiAodmVyc2lvbi5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICBlbHNlXG4gICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICcgKyBNQVhfTEVOR1RIICsgJyBjaGFyYWN0ZXJzJylcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG5cbiAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB2YXIgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF0pO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcblxuICB0aGlzLnJhdyA9IHZlcnNpb247XG5cbiAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgdGhpcy5tYWpvciA9ICttWzFdO1xuICB0aGlzLm1pbm9yID0gK21bMl07XG4gIHRoaXMucGF0Y2ggPSArbVszXTtcblxuICBpZiAodGhpcy5tYWpvciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5tYWpvciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcblxuICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcblxuICAvLyBudW1iZXJpZnkgYW55IHByZXJlbGVhc2UgbnVtZXJpYyBpZHNcbiAgaWYgKCFtWzRdKVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICBlbHNlXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbihpZCkge1xuICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgdmFyIG51bSA9ICtpZDtcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZDtcbiAgICB9KTtcblxuICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdO1xuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5TZW1WZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZlcnNpb24gPSB0aGlzLm1ham9yICsgJy4nICsgdGhpcy5taW5vciArICcuJyArIHRoaXMucGF0Y2g7XG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHRoaXMudmVyc2lvbiArPSAnLScgKyB0aGlzLnByZXJlbGVhc2Uuam9pbignLicpO1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvb3NlLCBvdGhlcik7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlTWFpbiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlUHJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gLTE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAxO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDA7XG5cbiAgdmFyIGkgPSAwO1xuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLnByZXJlbGVhc2VbaV07XG4gICAgdmFyIGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldO1xuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKTtcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAwO1xuICAgIGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAtMTtcbiAgICBlbHNlIGlmIChhID09PSBiKVxuICAgICAgY29udGludWU7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKTtcbiAgfSB3aGlsZSAoKytpKTtcbn07XG5cbi8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbi8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cblNlbVZlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24ocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtYWpvcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgaWYgKHRoaXMubWlub3IgIT09IDAgfHwgdGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucGF0Y2grKztcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrO1xuICAgICAgICAgICAgaSA9IC0yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSlcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpO1xuICB9XG4gIHRoaXMuZm9ybWF0KCk7XG4gIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmV4cG9ydHMuaW5jID0gaW5jO1xuZnVuY3Rpb24gaW5jKHZlcnNpb24sIHJlbGVhc2UsIGxvb3NlLCBpZGVudGlmaWVyKSB7XG4gIGlmICh0eXBlb2YobG9vc2UpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBsb29zZTtcbiAgICBsb29zZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG5mdW5jdGlvbiBkaWZmKHZlcnNpb24xLCB2ZXJzaW9uMikge1xuICBpZiAoZXEodmVyc2lvbjEsIHZlcnNpb24yKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKTtcbiAgICB2YXIgdjIgPSBwYXJzZSh2ZXJzaW9uMik7XG4gICAgaWYgKHYxLnByZXJlbGVhc2UubGVuZ3RoIHx8IHYyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAncHJlJytrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3ByZXJlbGVhc2UnO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jb21wYXJlSWRlbnRpZmllcnMgPSBjb21wYXJlSWRlbnRpZmllcnM7XG5cbnZhciBudW1lcmljID0gL15bMC05XSskLztcbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHZhciBhbnVtID0gbnVtZXJpYy50ZXN0KGEpO1xuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKTtcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthO1xuICAgIGIgPSArYjtcbiAgfVxuXG4gIHJldHVybiAoYW51bSAmJiAhYm51bSkgPyAtMSA6XG4gICAgICAgICAoYm51bSAmJiAhYW51bSkgPyAxIDpcbiAgICAgICAgIGEgPCBiID8gLTEgOlxuICAgICAgICAgYSA+IGIgPyAxIDpcbiAgICAgICAgIDA7XG59XG5cbmV4cG9ydHMucmNvbXBhcmVJZGVudGlmaWVycyA9IHJjb21wYXJlSWRlbnRpZmllcnM7XG5mdW5jdGlvbiByY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKTtcbn1cblxuZXhwb3J0cy5tYWpvciA9IG1ham9yO1xuZnVuY3Rpb24gbWFqb3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yO1xufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3I7XG5mdW5jdGlvbiBtaW5vcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3I7XG59XG5cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcbmZ1bmN0aW9uIHBhdGNoKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaDtcbn1cblxuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUoYik7XG59XG5cbmV4cG9ydHMuY29tcGFyZUxvb3NlID0gY29tcGFyZUxvb3NlO1xuZnVuY3Rpb24gY29tcGFyZUxvb3NlKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZTtcbmZ1bmN0aW9uIHJjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5zb3J0ID0gc29ydDtcbmZ1bmN0aW9uIHNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJzb3J0ID0gcnNvcnQ7XG5mdW5jdGlvbiByc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLmd0ID0gZ3Q7XG5mdW5jdGlvbiBndChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwO1xufVxuXG5leHBvcnRzLmx0ID0gbHQ7XG5mdW5jdGlvbiBsdChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwO1xufVxuXG5leHBvcnRzLmVxID0gZXE7XG5mdW5jdGlvbiBlcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDA7XG59XG5cbmV4cG9ydHMubmVxID0gbmVxO1xuZnVuY3Rpb24gbmVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMDtcbn1cblxuZXhwb3J0cy5ndGUgPSBndGU7XG5mdW5jdGlvbiBndGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDA7XG59XG5cbmV4cG9ydHMubHRlID0gbHRlO1xuZnVuY3Rpb24gbHRlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwO1xufVxuXG5leHBvcnRzLmNtcCA9IGNtcDtcbmZ1bmN0aW9uIGNtcChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgdmFyIHJldDtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgPT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhICE9PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnJzogY2FzZSAnPSc6IGNhc2UgJz09JzogcmV0ID0gZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICchPSc6IHJldCA9IG5lcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz4nOiByZXQgPSBndChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz49JzogcmV0ID0gZ3RlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPCc6IHJldCA9IGx0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPD0nOiByZXQgPSBsdGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wZXJhdG9yOiAnICsgb3ApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3I7XG5mdW5jdGlvbiBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIGlmIChjb21wLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiBjb21wO1xuICAgIGVsc2VcbiAgICAgIGNvbXAgPSBjb21wLnZhbHVlO1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKVxuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG5cbiAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdGhpcy5wYXJzZShjb21wKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIGVsc2VcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb247XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKTtcbn1cblxudmFyIEFOWSA9IHt9O1xuQ29tcGFyYXRvci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihjb21wKSB7XG4gIHZhciByID0gdGhpcy5sb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIG0gPSBjb21wLm1hdGNoKHIpO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNvbXBhcmF0b3I6ICcgKyBjb21wKTtcblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXTtcbiAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9JylcbiAgICB0aGlzLm9wZXJhdG9yID0gJyc7XG5cbiAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gIGlmICghbVsyXSlcbiAgICB0aGlzLnNlbXZlciA9IEFOWTtcbiAgZWxzZVxuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLmxvb3NlKTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5sb29zZSk7XG59O1xuXG5cbmV4cG9ydHMuUmFuZ2UgPSBSYW5nZTtcbmZ1bmN0aW9uIFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICBpZiAoKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpICYmIHJhbmdlLmxvb3NlID09PSBsb29zZSlcbiAgICByZXR1cm4gcmFuZ2U7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuXG4gIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gIHRoaXMucmF3ID0gcmFuZ2U7XG4gIHRoaXMuc2V0ID0gcmFuZ2Uuc3BsaXQoL1xccypcXHxcXHxcXHMqLykubWFwKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpO1xuICB9LCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oYykge1xuICAgIC8vIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHJlbGV2YW50IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICByZXR1cm4gYy5sZW5ndGg7XG4gIH0pO1xuXG4gIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICcgKyByYW5nZSk7XG4gIH1cblxuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5SYW5nZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmFuZ2UgPSB0aGlzLnNldC5tYXAoZnVuY3Rpb24oY29tcHMpIHtcbiAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKTtcbiAgfSkuam9pbignfHwnKS50cmltKCk7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnBhcnNlUmFuZ2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICB2YXIgbG9vc2UgPSB0aGlzLmxvb3NlO1xuICByYW5nZSA9IHJhbmdlLnRyaW0oKTtcbiAgZGVidWcoJ3JhbmdlJywgcmFuZ2UsIGxvb3NlKTtcbiAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gIHZhciBociA9IGxvb3NlID8gcmVbSFlQSEVOUkFOR0VMT09TRV0gOiByZVtIWVBIRU5SQU5HRV07XG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSk7XG4gIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKTtcbiAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSk7XG4gIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSwgcmVbQ09NUEFSQVRPUlRSSU1dKTtcblxuICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW1RJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpO1xuXG4gIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSk7XG5cbiAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpO1xuXG4gIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG5cbiAgdmFyIGNvbXBSZSA9IGxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgc2V0ID0gcmFuZ2Uuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJykuc3BsaXQoL1xccysvKTtcbiAgaWYgKHRoaXMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24oY29tcCkge1xuICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChjb21wUmUpO1xuICAgIH0pO1xuICB9XG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXQ7XG59O1xuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5leHBvcnRzLnRvQ29tcGFyYXRvcnMgPSB0b0NvbXBhcmF0b3JzO1xuZnVuY3Rpb24gdG9Db21wYXJhdG9ycyhyYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBjb21wLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9KS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gIH0pO1xufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygndGlsZGVzJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdzdGFycycsIGNvbXApO1xuICByZXR1cm4gY29tcDtcbn1cblxuZnVuY3Rpb24gaXNYKGlkKSB7XG4gIHJldHVybiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKic7XG59XG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wXG5mdW5jdGlvbiByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKSB7XG4gIHZhciByID0gbG9vc2UgPyByZVtUSUxERUxPT1NFXSA6IHJlW1RJTERFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpXG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH0gZWxzZVxuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBsb29zZSk7XG4gIHZhciByID0gbG9vc2UgPyByZVtDQVJFVExPT1NFXSA6IHJlW0NBUkVUXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKTtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIGxvb3NlKTtcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKSB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1hSQU5HRUxPT1NFXSA6IHJlW1hSQU5HRV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24ocmV0LCBndGx0LCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgeE0gPSBpc1goTSk7XG4gICAgdmFyIHhtID0geE0gfHwgaXNYKG0pO1xuICAgIHZhciB4cCA9IHhtIHx8IGlzWChwKTtcbiAgICB2YXIgYW55WCA9IHhwO1xuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKVxuICAgICAgZ3RsdCA9ICcnO1xuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndGx0ICYmIGFueVgpIHtcbiAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgIGlmICh4bSlcbiAgICAgICAgbSA9IDA7XG4gICAgICBpZiAoeHApXG4gICAgICAgIHAgPSAwO1xuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49JztcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgICBtID0gMDtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8JztcbiAgICAgICAgaWYgKHhtKVxuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwO1xuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuZnVuY3Rpb24gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBsb29zZSk7XG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVtTVEFSXSwgJycpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVtIWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMFxuZnVuY3Rpb24gaHlwaGVuUmVwbGFjZSgkMCxcbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgICAgICAgICAgICAgICAgICAgICAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcblxuICBpZiAoaXNYKGZNKSlcbiAgICBmcm9tID0gJyc7XG4gIGVsc2UgaWYgKGlzWChmbSkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKGZwKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnO1xuICBlbHNlXG4gICAgZnJvbSA9ICc+PScgKyBmcm9tO1xuXG4gIGlmIChpc1godE0pKVxuICAgIHRvID0gJyc7XG4gIGVsc2UgaWYgKGlzWCh0bSkpXG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWCh0cCkpXG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCc7XG4gIGVsc2UgaWYgKHRwcilcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHI7XG4gIGVsc2VcbiAgICB0byA9ICc8PScgKyB0bztcblxuICByZXR1cm4gKGZyb20gKyAnICcgKyB0bykudHJpbSgpO1xufVxuXG5cbi8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcblJhbmdlLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTZXQoc2V0LCB2ZXJzaW9uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpO1xuICAgICAgaWYgKHNldFtpXS5zZW12ZXIgPT09IEFOWSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXI7XG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnNhdGlzZmllcyA9IHNhdGlzZmllcztcbmZ1bmN0aW9uIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKTtcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZztcbmZ1bmN0aW9uIG1heFNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiByY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMubWluU2F0aXNmeWluZyA9IG1pblNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtaW5TYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2U7XG5mdW5jdGlvbiB2YWxpZFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkucmFuZ2UgfHwgJyonO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuZXhwb3J0cy5sdHIgPSBsdHI7XG5mdW5jdGlvbiBsdHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIGxvb3NlKTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuZXhwb3J0cy5ndHIgPSBndHI7XG5mdW5jdGlvbiBndHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5vdXRzaWRlID0gb3V0c2lkZTtcbmZ1bmN0aW9uIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIGxvb3NlKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wO1xuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndDtcbiAgICAgIGx0ZWZuID0gbHRlO1xuICAgICAgbHRmbiA9IGx0O1xuICAgICAgY29tcCA9ICc+JztcbiAgICAgIGVjb21wID0gJz49JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0O1xuICAgICAgbHRlZm4gPSBndGU7XG4gICAgICBsdGZuID0gZ3Q7XG4gICAgICBjb21wID0gJzwnO1xuICAgICAgZWNvbXAgPSAnPD0nO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJyk7XG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV07XG5cbiAgICB2YXIgaGlnaCA9IG51bGw7XG4gICAgdmFyIGxvdyA9IG51bGw7XG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yO1xuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3I7XG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvcjtcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuZnVuY3Rpb24gcHJlcmVsZWFzZSh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NlbXZlci9zZW12ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hZ2VuZGEuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NhbGVuZGFyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jYXJkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JhbmsuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yYW5rLmxpbmUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmFuay9yYW5rLmxpbmUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNzQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mbGV4LWxheW91dC9idW5kbGVzL2ZsZXgtbGF5b3V0LnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDc1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYnVuZGxlcy9tYXRlcmlhbC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wYXRjaCc7XHJcbmltcG9ydCAnem9uZS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPGFwcD48L2FwcD4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcclxuICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyJdLCJzb3VyY2VSb290IjoiIn0=
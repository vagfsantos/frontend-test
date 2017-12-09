webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app__container\">\r\n  <app-fazenda-ranking></app-fazenda-ranking>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app__container {\n  width: 100%;\n  max-width: 342px;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fazenda_ranking_fazenda_ranking_component__ = __webpack_require__("../../../../../src/app/fazenda-ranking/fazenda-ranking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fazenda_ranking_header_header_component__ = __webpack_require__("../../../../../src/app/fazenda-ranking/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fazenda_ranking_candidate_candidate_component__ = __webpack_require__("../../../../../src/app/fazenda-ranking/candidate/candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fazenda_ranking_candidate_rating_rating_component__ = __webpack_require__("../../../../../src/app/fazenda-ranking/candidate/rating/rating.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__fazenda_ranking_fazenda_ranking_component__["a" /* FazendaRankingComponent */],
                __WEBPACK_IMPORTED_MODULE_5__fazenda_ranking_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__fazenda_ranking_candidate_candidate_component__["a" /* CandidateComponent */],
                __WEBPACK_IMPORTED_MODULE_7__fazenda_ranking_candidate_rating_rating_component__["a" /* RatingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/candidate/candidate.component.html":
/***/ (function(module, exports) {

module.exports = "<figure class=\"candidate\" [class.even]=\"isEven\" (mouseenter)=\"onShowRating($event)\" (mouseleave)=\"onHideRating($event)\">\r\n  <div class=\"candidate__picture\">\r\n    <div>\r\n      <img src=\"{{ candidate.picture }}\" alt=\"{{ candidate.name }}\">\r\n    </div>\r\n    <span>{{ position }}</span>\r\n  </div>\r\n  <figcaption class=\"candidate__description\">\r\n    <h2 [innerHTML]=\"candidate.name\"></h2>\r\n    <p [innerHTML]=\"candidate.description\"></p>\r\n    <app-rating [candidate]=\"candidate\" [isOpened]=\"showRating\"></app-rating>\r\n  </figcaption>\r\n</figure>\r\n"

/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/candidate/candidate.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".candidate {\n  width: 100%;\n  display: table;\n  position: relative;\n  margin: 0;\n  padding: 15px;\n  cursor: pointer;\n  color: #707070; }\n  .candidate.even {\n    background-color: #f2f1f1; }\n  .candidate:hover {\n    background-color: #ba3638; }\n    .candidate:hover .candidate__picture div {\n      border-color: #fff; }\n    .candidate:hover .candidate__description h2 {\n      color: #fff; }\n    .candidate:hover .candidate__description p {\n      color: #272727; }\n  .candidate__picture {\n    width: 70px;\n    display: table-cell;\n    vertical-align: middle;\n    position: relative; }\n    .candidate__picture div {\n      width: 70px;\n      height: 70px;\n      border-radius: 50%;\n      overflow: hidden;\n      text-align: center;\n      border: 3px solid #ba3638; }\n      .candidate__picture div img {\n        max-width: none;\n        max-height: 100%;\n        -webkit-transform: translateX(-12.5%);\n                transform: translateX(-12.5%); }\n    .candidate__picture span {\n      width: 21px;\n      height: 21px;\n      margin-left: auto;\n      margin-top: -22px;\n      background-color: #fff;\n      border: 1px solid currentColor;\n      display: block;\n      border-radius: 50%;\n      text-align: center;\n      font-weight: 700;\n      font-size: 14px;\n      line-height: 21px;\n      position: relative;\n      z-index: 1px; }\n  .candidate__description {\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 20px; }\n    .candidate__description h2 {\n      margin: 0 0 4px;\n      font-size: 18px;\n      color: #ba3638;\n      letter-spacing: -1px; }\n    .candidate__description p {\n      margin: 0;\n      font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/candidate/candidate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateComponent = (function () {
    function CandidateComponent() {
        this.showRating = false;
    }
    CandidateComponent.prototype.ngOnInit = function () {
    };
    CandidateComponent.prototype.onShowRating = function (e) {
        this.showRating = true;
    };
    CandidateComponent.prototype.onHideRating = function (e) {
        this.showRating = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CandidateComponent.prototype, "candidate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], CandidateComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CandidateComponent.prototype, "isEven", void 0);
    CandidateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-candidate',
            template: __webpack_require__("../../../../../src/app/fazenda-ranking/candidate/candidate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fazenda-ranking/candidate/candidate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CandidateComponent);
    return CandidateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/candidate/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rating\" [class.opened]=\"isOpened\">\r\n  <div>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th class=\"first\">Gostam</th>\r\n          <th>Não Gostam</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngIf=\"candidate.hasNoCalculatedValue;then whenHasNoVotes else whenHasVotes\"></tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #whenHasVotes>\r\n  <td class=\"first\">{{candidate.positivePercentage + '%'}}</td>\r\n  <td>{{candidate.negativePercentage + '%'}}</td>\r\n</ng-template>\r\n\r\n<ng-template #whenHasNoVotes>\r\n  <td class=\"first\">...</td>\r\n  <td>...</td>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/candidate/rating/rating.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rating {\n  position: absolute;\n  left: 104%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  margin: 0 0 0 15px;\n  opacity: 0;\n  visibility: hidden;\n  transition: .2s ease-in-out; }\n  @media screen and (max-width: 768px) {\n    .rating {\n      position: static; } }\n  .rating.opened {\n    opacity: 1;\n    left: 100%;\n    visibility: visible; }\n  @media screen and (max-width: 768px) {\n    .rating {\n      opacity: 1;\n      visibility: visible;\n      margin: 10px 0 0 0;\n      -webkit-transform: none;\n              transform: none;\n      clear: both; } }\n  .rating:after {\n    content: '';\n    width: 0;\n    height: 0;\n    display: block;\n    border-top: 7px solid transparent;\n    border-bottom: 7px solid transparent;\n    border-right: 7px solid #fff;\n    position: absolute;\n    right: 100%;\n    top: 0;\n    bottom: 0;\n    margin: auto 0; }\n    @media screen and (max-width: 768px) {\n      .rating:after {\n        display: none; } }\n  .rating div {\n    border-radius: 4px;\n    overflow: hidden; }\n    @media screen and (max-width: 768px) {\n      .rating div {\n        border-radius: 0; } }\n  .rating table {\n    width: 155px;\n    min-height: 60px;\n    background-color: #fff;\n    border: 0;\n    border-spacing: 0;\n    text-align: center; }\n    @media screen and (max-width: 768px) {\n      .rating table {\n        width: 100%;\n        min-height: none;\n        border: 1px solid #c7c7c7;\n        border-collapse: collapse; } }\n  .rating th {\n    background-color: #ba3638;\n    color: #fff;\n    font-size: 10px;\n    text-transform: uppercase;\n    padding: 5px 0; }\n  .rating td {\n    font-size: 24px;\n    font-weight: 700;\n    text-transform: uppercase;\n    min-height: 30px;\n    color: #909090; }\n  .rating th, .rating td {\n    vertical-align: middle; }\n    @media screen and (min-width: 768px) {\n      .rating th:first-child, .rating td:first-child {\n        border-right: 1px solid #8c8b8b; }\n      .rating th:last-child, .rating td:last-child {\n        border-left: 1px solid rgba(248, 247, 247, 0.3); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/candidate/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = (function () {
    function RatingComponent() {
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "candidate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "isOpened", void 0);
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-rating',
            template: __webpack_require__("../../../../../src/app/fazenda-ranking/candidate/rating/rating.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fazenda-ranking/candidate/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/fazenda-ranking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fz-ranking\">\r\n  <div class=\"fz-ranking__header\">\r\n    <app-header title={{headerTitle}}></app-header>\r\n  </div>\r\n  <div class=\"fz-ranking__candidates\">\r\n    <app-candidate\r\n      *ngFor=\"let cdt of candidates; let i = index\"\r\n        [candidate]=\"cdt\" [position]=\"i+1\" [isEven]=\"(i+1) % 2 === 0\"></app-candidate>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/fazenda-ranking.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fz-ranking__candidates {\n  margin-top: 15px;\n  background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/fazenda-ranking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FazendaRankingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FazendaRankingComponent = (function () {
    function FazendaRankingComponent(http) {
        this.http = http;
        this.headerTitle = "Ranking";
    }
    FazendaRankingComponent.prototype.ngOnInit = function () {
        this.getCandidates();
    };
    FazendaRankingComponent.prototype.getCandidates = function () {
        var _this = this;
        this.http.get('assets/api/fazenda.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (json) { return _this.setCandidates(json); });
    };
    FazendaRankingComponent.prototype.setCandidates = function (apiData) {
        var _this = this;
        if (!apiData.data) {
            this.onApiDataNotFound();
            return;
        }
        this.candidates = apiData.data.map(function (candidate) {
            return _this.setCandidateVotePercetage(candidate);
        });
        this.orderCanditatesByPositiveValues();
    };
    FazendaRankingComponent.prototype.setCandidateVotePercetage = function (candidate) {
        if (candidate.positive && candidate.negative) {
            var totalVotes = parseInt(candidate.positive, 10) + parseInt(candidate.negative, 10);
            var positivePercentage = ((candidate.positive * 100) / totalVotes).toFixed(2);
            positivePercentage = parseFloat(positivePercentage);
            var negativePercentage = 100 - positivePercentage;
            candidate.positivePercentage = positivePercentage;
            candidate.negativePercentage = negativePercentage;
            return candidate;
        }
        candidate.hasNoCalculatedValue = true;
        return candidate;
    };
    FazendaRankingComponent.prototype.orderCanditatesByPositiveValues = function () {
        this.candidates.sort(function (candidateA, candidateB) {
            var positiveVotesA = candidateA.positivePercentage || 0;
            var positiveVotesB = candidateB.positivePercentage || 0;
            if (positiveVotesA > positiveVotesB)
                return -1;
            if (positiveVotesA < positiveVotesB)
                return 1;
            return 0;
        });
    };
    FazendaRankingComponent.prototype.onApiDataNotFound = function () {
        this.apiDataNotFound = true;
    };
    FazendaRankingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-fazenda-ranking',
            template: __webpack_require__("../../../../../src/app/fazenda-ranking/fazenda-ranking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fazenda-ranking/fazenda-ranking.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FazendaRankingComponent);
    return FazendaRankingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <img class=\"header__img\" src=\"assets/images/a-fazenda-logo.png\" alt=\"{{title}}\">\r\n  <h1 class=\"header__title\">{{title}}</h1>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header__img {\n  margin-bottom: -60px;\n  margin-left: -32px; }\n  @media screen and (max-width: 768px) {\n    .header__img {\n      max-width: 125px;\n      margin-left: -10px; } }\n\n.header__title {\n  max-width: 80%;\n  margin: 0 0 0 auto;\n  padding: 8px 0 8px 20%;\n  background-color: #fff;\n  font-size: 30px;\n  font-weight: 700;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: -4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fazenda-ranking/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/fazenda-ranking/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fazenda-ranking/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
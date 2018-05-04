webpackJsonp([10],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaEventoPageModule", function() { return EditaEventoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edita_evento__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditaEventoPageModule = /** @class */ (function () {
    function EditaEventoPageModule() {
    }
    EditaEventoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edita_evento__["a" /* EditaEventoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edita_evento__["a" /* EditaEventoPage */]),
            ],
        })
    ], EditaEventoPageModule);
    return EditaEventoPageModule;
}());

//# sourceMappingURL=edita-evento.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditaEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditaEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditaEventoPage = /** @class */ (function () {
    function EditaEventoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditaEventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditaEventoPage');
    };
    EditaEventoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edita-evento',template:/*ion-inline-start:"/mnt/c/Users/pedre/listapp/src/pages/edita-evento/edita-evento.html"*/'<!--\n  Generated template for the EditaEventoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EditaEvento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/c/Users/pedre/listapp/src/pages/edita-evento/edita-evento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditaEventoPage);
    return EditaEventoPage;
}());

//# sourceMappingURL=edita-evento.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
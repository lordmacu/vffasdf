(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AppComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_274_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_392_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AppComponent {
    constructor() {
        this.slides = [
            { img: '/assets/instituto_baritrioco.png' },
            { img: '/assets/Cancerlogico-Pegasi.png' },
            { img: '/assets/Roche-Pegasi.png' },
            { img: '/assets/Posta-Central-chile-Pegasi.png' },
            { img: '/assets/Novartis-Pegasi.png' },
            { img: '/assets/MedicalNET-PEGASI.png' },
            { img: '/assets/Centro-Medico-regional-Aguasvivas-PEGASI.png' }
        ];
        this.slidesTwo = [
            { img: '/assets/1.png' },
            { img: '/assets/2.png' },
            { img: '/assets/3.png' },
            { img: '/assets/Katapult-Pegasi.png' },
            { img: '/assets/5.png' },
            { img: '/assets/Startuphealthlogo_tm-1024x250-1.png' },
        ];
        this.slidesTrhee = [
            { img: '/assets/Challenge-Cup.png' },
            { img: '/assets/SOCAP.png' },
            { img: '/assets/HealthTech-Builders-Lab.png' },
            { img: '/assets/Wayra.png' },
            { img: '/assets/Innovation-Awards.png' },
            { img: '/assets/Desafios-en-Cancer.png' },
            { img: '/assets/Global-Pitch.png' },
        ];
        this.slideConfig = {
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "nextArrow": "<div class='nav-btn next-slide'><i class='icon icon-arrow-right'></i></div>",
            "prevArrow": "<div class='nav-btn prev-slide'><i class='icon icon-arrow-left'></i></div>",
            "dots": false,
            "infinite": true,
            "autoplay": true,
            variableWidth: true,
            "autoplaySpeed": 2000
        };
    }
    ngOnInit() {
        $(".fancy").fancybox({
            type: "iframe",
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 456, vars: 6, consts: [[1, "navbar"], [1, "container", "containerNav"], [1, "navbar-section"], ["href", "#inicio", 1, "navbar-brand", "mr-2"], ["src", "/assets/PEGASI-Logo-1.jpg"], [1, "navbar-section", "desktopMenu"], ["href", "#funcionalidades", 1, "btn", "btn-link"], ["href", "#precios", 1, "btn", "btn-link"], ["href", "https://nosotros.pegasi.io/", 1, "btn", "btn-link"], [1, "dropdown"], ["href", "#", "tabindex", "0", 1, "btn", "btn-link", "dropdown-toggle"], [1, "icon", "icon-caret"], [1, "menu"], ["href", "https://pegasi.io/blog/?category=tu-empresa", 1, "btn", "btn-link"], ["href", "https://pegasi.io/blog/?category=futurology-review", 1, "btn", "btn-link"], ["href", "https://pegasi.io/blog/?category=futurology-review-decovidficacion", 1, "btn", "btn-link"], ["href", "https://pegasi.io/preguntas/", 1, "btn", "btn-link"], ["href", "https://meetings.hubspot.com/julian-torres1/meeting?__hstc=57975093.42d4aa2c70bdbfc1c25167f7a50aae6a.1592850552574.1594074994575.1594143011434.26&__hssc=&hsCtaTracking=ad6e230e-55b2-420a-b822-51e6fb8a89e2%7Cd37dcde8-7c03-4594-92b1-609575c3ff7b", 1, "btn", "btn-link", "blueLightButton"], ["href", "https://med.pegasi.io/", 1, "btn", "btn-link", "blueDarkButton"], [1, "menuMobile"], [1, "hamburger"], [1, "_layer", "-top"], [1, "_layer", "-mid"], [1, "_layer", "-bottom"], [1, "menuppal"], ["href", "#inicio", 1, "btn", "btn-link"], ["href", "/blog/?category=magazine", 1, "btn", "btn-link"], ["href", "/blog/?category=tu-empresa", 1, "btn", "btn-link"], ["href", "/blog/?category=futurology-review", 1, "btn", "btn-link"], ["href", "/?category=futurology-review-decovidficacion", 1, "btn", "btn-link"], ["href", "/blog/category/podcast/", 1, "btn", "btn-link"], ["href", "/blog/preguntas/", 1, "btn", "btn-link"], ["name", "inicio", "id", "inicio", 1, "heroSlider"], [1, "container"], [1, "columns"], ["data-fancybox-type", "iframe", "href", "https://www.youtube.com/embed/nXSgXzqdGCo?autoplay=1", 1, "fancy", "stepFour"], ["src", "/assets/play.png", "width", "30", 1, "play"], [1, "col-7", "col-xs-12", "bannerImage", "stepOne", "bannerMobile"], ["src", "/assets/banner-images.png"], [1, "col-5", "col-xs-12"], [1, "stepOne"], [1, "stepTwo"], [1, "stepThree"], [1, "column", "col-3", "col-xs-6", "containerHeroImage", "stepOne"], ["src", "/assets/iconfinder_medical-healthcare-hospital-32_4082081.png"], [1, "column", "col-3", "col-xs-6", "containerHeroImage", "stepTwo"], ["src", "/assets/iconfinder_medical-healthcare-hospital-48_4082065.png"], [1, "column", "col-3", "col-xs-6", "containerHeroImage", "stepThree"], ["src", "/assets/iconfinder_medical-healthcare-hospital-25_4082088-1.png"], [1, "column", "col-3", "col-xs-6", "containerHeroImage", "stepFour"], ["src", "/assets/iconfinder_medical-healthcare-hospital-26_4082087.png"], [1, "col-7", "col-xs-12", "bannerImage", "stepOne", "bannerDesktop"], [1, "sectionTwo", "stepThree"], [1, "vc_sep_line"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "sectionTwo", "hidden"], [1, "column", "col-3", "col-xs-12", "col-md-6"], [1, "containerDescrition"], [1, "sectionThree", "hidden"], [1, "col-5", "col-xs-12", "containerQuote", "col-md-12"], [1, "col-12"], [1, "col-6"], ["src", "/assets/LASA.png"], [1, "col-7", "col-xs-12", "col-md-12", "containerPlayVideo"], [1, "innerPlay"], ["data-fancybox-type", "iframe", "href", "https://www.youtube.com/embed/nXSgXzqdGCo?autoplay=1", 1, "fancy"], ["src", "/assets/write-1.png"], [1, "main-video"], [1, "video-img"], [1, "consult-video", "video-btn"], [1, "btn-waves"], [1, "waves", "wave-1"], [1, "waves", "wave-2"], [1, "waves", "wave-3"], ["name", "funcionalidades", "id", "funcionalidades", 1, "container", "sectionFour", "hidden"], [1, "columns", "columnInformation"], [1, "col-6", "col-xs-12"], ["src", "/assets/Linea-de-tiempo.png"], [1, "columns", "columnInformation", "rightAlign"], [1, "textRightContainer"], ["src", "/assets/Calendario-e1592336762435.png"], ["src", "/assets/Telemedicina-1.png"], [1, "sectionFive", "hidden"], [1, "containerImagesStandard"], ["src", "/assets/fhir-logo-www.jpg"], ["src", "/assets/hipaa-compliance-1-1200x675-1.jpg"], ["src", "/assets/isoorg1600x560-1.jpg"], [1, "sectionSix", "container", "section"], ["src", "/assets/benefis.jpg"], ["href", "#precios", 1, "button_action"], [1, "sectionSeven", "hidden"], ["name", "precios", "id", "precios", 1, "sectionEight", "container", "section"], [1, "columns", "containerPrices"], [1, "col-3", "col-xs-12", "col-md-6"], [1, "priceContainer"], [1, "headPrice"], [1, "price_number"], [1, "price_text_time"], [1, "bodyPrice", "withPadding"], ["data-stringify-type", "bold"], [1, "footerPrice"], ["href", "javascript:void(0)", "data-cb-type", "checkout", "data-cb-plan-id", "pegasi-med-licencia-mensual-(dop)", "onclick", "addEvent('Seleccionarndo plan','plan 1 mes','en planes')"], [1, "priceContainer", "promoted"], ["href", "javascript:void(0)", "data-cb-type", "checkout", "data-cb-plan-id", "pegasi-med-licencia-anual-(dop)", "onclick", "addEvent('Seleccionarndo plan','plan 1 a\u00F1o','en planes')"], [1, "containerDiscount"], ["href", "javascript:void(0)", "data-cb-type", "checkout", "data-cb-plan-id", "pegasi-med-licencia-semestral", "onclick", "addEvent('Seleccionarndo plan','plan 1 semestre','en planes')"], [1, "headPrice", "contactContainerPrice"], [1, "bodyPrice", "contactContainer"], [2, "font-size", "12px"], ["href", "https://meetings.hubspot.com/julian-torres1/meeting?__hstc=57975093.42d4aa2c70bdbfc1c25167f7a50aae6a.1592850552574.1594595598919.1594603706136.33&__hssc=57975093.2.1594603706136&__hsfp=3189259272"], [1, "sectionNine", "container", "hidden"], [1, "col-6", "col-xs-12", "col-md-12"], [1, "form-group"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "name", "name", "placeholder", "Ingresa tu nombre", 1, "form-input"], ["for", "lastname", 1, "form-label"], ["type", "text", "id", "lastname", "name", "lastname", "placeholder", "Ingresa tu apellido", 1, "form-input"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "placeholder", "Ingresa tu correo", 1, "form-input"], ["for", "input-example-1", 1, "form-label"], ["placeholder", "Ingresa tu mensaje", 1, "form-input"], [1, "button_action"], [1, "col-6", "col-xs-12", "containerImageContactUs"], ["src", "/assets/contactus.jpg"], [1, "sectionTen", "hidden"], [1, "col-3", "col-xs-12", "col-md-4"], ["src", "/assets/logo-pegasi-blanco.png"], [1, "et-social-icons"], [1, "et-social-icon", "et-social-linkedin"], ["target", "_blank", "href", "https://www.linkedin.com/company/pegasi-med"], ["src", "/assets/linkedin.PNG"], [1, "et-social-icon", "et-social-facebook"], ["target", "_blank", "href", "https://www.facebook.com/pegasimed"], ["src", "/assets/facebook.PNG"], [1, "et-social-icon", "et-social-twitter"], ["target", "_blank", "href", "https://twitter.com/pegasi_med"], ["src", "/assets/twitter.PNG"], [1, "et-social-icon", "et-social-instagram"], ["target", "_blank", "href", "https://www.instagram.com/pegasi_med/"], ["src", "/assets/instagram.PNG"], ["href", "/blog/?category=futurology-review-decovidficacion", 1, "btn", "btn-link"], ["href", "https://nosotros.pegasi.io/"], [1, "col-3", "col-xs-12", "col-md-12"], [1, "textwidget"], ["width", "15", "height", "15", "src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAARpQTFRF////bZLb222S6urqO3bE2DtOc5nM2XOAe6HQ43uOUoXI3FJq7+/v7+/vSoPH30pk8PDwUIfI4VBo7+/vTIXG3kxnRH7E3kRgV4vJ31dwRH/F30Rg8PDwP3vE3j9c8PDwX5HM4V92NnbC3jZVOXfC3jlW8PDwI2m93CNE8PDwEV252hE2E1+42hM2Dlu42Q4yAFK0AVKzAVO0BVW1GWGuHEeiJmu9KUOZKm2+Km6/SW4tSm8vTHExT2ktT2otUGktUojIZINMZVgsZoVPdJ7Pd6DSgEQrhz8qiKzWlRlTl7K+nK6Nni0ppicpqsDTrCIpwdHkxBAoxQ4ox9DBz9fK2AAn3ePl4FJs5ent5oiZ6Orn6uzv7O3r8PDwHzWxMgAAADB0Uk5TAAcHDA0NFBQ2NkFBTnB/f4qQkKSrq7CwsrK1tb7T09jc3Ofn7e3y9vb4+/v9/f7+OJH5YQAAApRJREFUWMOl19dWIkEQANBSUJCs5CBBybGMq4WrIGbM0Eb8/9/YB5iVwa5hpq0nzumuCx3pAmDC5vEGgqlMsZhJBQNejw0shSuRrXzpopJLus1mL8dKiJ2vmXgVohx3mEi3h+qIckCIRnhpXv5qFZEHhKitGaY784jGgBCFFT7f18T5gGj5ufwIohlAiKg0fWEdzQIivSjJ30DzgNj8Kei+fy4g0kbjNwPMzoMPrQJCtxbOpnWgNb0f8mgdEIWp/YsqgPi/q+1VNaCmnawQqgEiPDn/dVWgMb4fYqgKiDgAAJTUgTIAgAvVAeEGgMRvgCQAZDuyuBqnvd3fv40/vb/KIgdgq3xx8Xm+v424vX/+yXap2MDDNj4eauM5fGQ7ecDL5u98z8gOK3ghwP3+A9z7M4k9POBGEYAg03KGeK3N9TXiGdMtCCmmZVcP7DLdUpCRN7xs6YGtF3m/DBTlDTeoB/BG3q/IAQMietCAByIacAAzhI820a0G3BK1P7ghcJPYJbrQgAuiLjuJ3DL2iY6fxvlPx0R9dhm5jTTqEZ0+CyHE8ylRb8RuJHYrD4+ITi7v7i7/Eh0N+a3MH6ZhjybRGxocJoPjPOp320Ttbn9kdJwhJ70p3ierORhM1u9Keu9kASApvateZ7+rI735EgDg/g3gAgAoqwMlAACIqwMxAABwNFSB+vL4zzGsCoQm/85LNTWgatceCGtqwOr3E6WgAuSn3kgrLetA0zn9TPNbB3z6h2LUKhCZfaqmrQHrP97Ki5tWgI2Fn8/1xbR5YH1BWjFEzQIRrmTxt8wATR9fNK0U5gN5p2HdtlYzBqqr8wrHpXCDB+ohu4na1REvy4FSbNls+exO5maL72zCZa2AN1v+/wPNdteMTMn46gAAAABJRU5ErkJggg==", 1, ""], ["width", "15", "height", "15", "src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAcVQTFRF////////gKrV/4CA5ubm6urqc5nM2XOAb5vT6W+F7Ozs7+/vbpvN4W6CbprP5W6E7u7u8vLy7+/v7+/v8PDw8PDwZ5XM4md97+/v8PDwZZTO42V7Y5PN4mN68PDw8fHxXI7L4lx0Wo3L4Vpy7+/vWYzJ4FlyVorJ4FZv8fHxVIrJ4VRu8PDw8PDw8PDwTITH4UxnTILG8PDwSYPH4Ell7+/v8PDwP3vE3j9b8fHxOHfC3jhWNXXBRWCq3TVU8PDwMXPB3jFQMHHA3TBP8PDwKW2+3SlJImi82yJE8PDwIGe82yBC8PDwNU6fFmG62xY6El642hI2DFm3IUuk2gwx8PDwAFK0AVO0BFS1Bla1B1a2C0+tDFq3DVu3D1y4EF24El64FF+5F2G6I2m9JWq9Jmu9KW2+LXC/LnDAMHLAMXLAM3PBOHfCRX/FSILGWY3KWo3LXY/LX5HMbZrPc57Rd6DSeKHSeaLSfqXUiazWja/Xl7XamrjbnLnbnrrcqMHerMPfrcTfrsXgtcnhwdHkxNPlyNXmz9ro0Nvo2AAn2AEo2AYs2uLr2+Lr4OXs5Ojt5+ru6uzv6+3v7O7v7e7v7+/w8PDwDTWHUAAAAFZ0Uk5TAAMGBgoMFBQXFxsfMzM6OjxMTmJkaGpqcHSBgYSEio6enqGhpKamr6+ws7O2vsDJycrLzc3V2N/f5efn6urq6u7u7+/y9PT4+Pj5+fn6/Pz9/f7+/v6EUxSrAAACfElEQVQYGaXBB0NSURgG4FdwK+69FUVzZa4wDUMcmOYo/UzbZXuaZXvPA02r7/cmQzjAvYdxnwd6suvaDx4+dvzk5HBPa0NVSQaSkt82tk4BHDDbXZ6LBGV2Tq1RCIes9lenIz5TywLJWDZSloY4amYoEkcaKoZKwQRF42i9edBVsUQxOMZ4EXQ0rVMsjjVfCi2mAdLCWhrTEMN0hDSxpgNpiDZA2lhbI6I0UcjFayRhHaWIULFOIVtPSMI65osgKViisLefScJ6xvMQNkFhF3Z5k8JYVy9Cakhyn/kRhbG+YgSZZkjyhvkjhbG+oTQEtJDf9R2/38z8dMfnDu1hhTL4ZS5QwNYvluxur9EeVhhJh08n7bv6iUO+3CI/VqmGzxSFbDzjoJdnKYBV+rEnf40kj9nvOe1jldVcAG0ke81+H2gfK5UDGCPJxk/mf3+Y/16iIFbqBrLXSXKP+fvd21+ZH1IQK81moI5kL/j9ZaJzr/gdBbFaCdpJcvrb9hr5PPhxngJYrQqHSHLlJgVt3qAAVmvAUVJjtVacIDVW68EpUmO1YZwhNVabxIowZAVzwpA5OIUhTtiFIXb0CUP60CEM6UC9MKQeOV5hgDcHcAgDHABswgAbAItHpMxjwZ5pkbJp+HSJlHXBJ2tRpGgxC35WkSIrAsxukRK3GUG1IiW1CHGJFLgQVrgskrZcCEmlVyTJW4kIzSJJzYgyKJIyiGjmUZGEUTNimAdFwgbN0NLsFQnxNkNH5bJIwHIldBW6RFyuQqjUuoWSuxZxmK2LQtei1Yz4srqmPUKDZ7orCwmy2BxeEcHrsFmQlJz6jj67c25lZc5p7+uoz4GO/9AmPgQN5kLSAAAAAElFTkSuQmCC", 1, ""], ["width", "15", "height", "15", "src", "data:image/png;base64,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", 1, ""], ["href", "mailto:info@pegasi.io"], ["ngxSlickItem", "", 1, "slide"], ["alt", "", "width", "100%", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Funcionalidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sobre PEGASI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Magazine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tu Consulta, tu empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Transformaci\u00F3n-medica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "DeCOVIDficaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ag\u00E9ndame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nav", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Funcionalidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sobre PEGASI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Magazine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tu Consulta, tu empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Transformaci\u00F3n-medica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "DeCOVIDficaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Ag\u00E9ndame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Tu consultorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "port\u00E1til");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Gestiona la informaci\u00F3n de tus pacientes y la de tu cl\u00EDnica de manera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "simple, \u00E1gil y segura.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "En cualquier lugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Hecho a tu medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "En cualquier dispositivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Alt\u00EDsima seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "section", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Estos clientes conf\u00EDan en nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ngx-slick-carousel", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, AppComponent_div_118_Template, 2, 1, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "section", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Pensamos en lo importante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "En cualquier lugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " PEGASI MED permite tener lo mejor de dos mundos: una conexi\u00F3n local a la plataforma que no depende del Internet, y una conexi\u00F3n a nuestro servidor remoto o nube que no depende de un dispositivo en particular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Hecho a tu medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Guarde la informaci\u00F3n demogr\u00E1fica de sus pacientes y la historia m\u00E9dica adaptada a su especialidad, genere informes m\u00E9dicos, r\u00E9cipes, constancias, almacene im\u00E1genes y elabore estad\u00EDsticas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "En cualquier dispositivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "PEGASI MED es un plataforma vers\u00E1til basada en navegador Web, que funciona en cualquier dispositivo (Tablets, Smartphones, laptops, PCs, etc) y bajo cualquier sistema operativo (Windows, MacOS, Linux, entre otros)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Alt\u00EDsima seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "PEGASI MED cumple por completo el est\u00E1ndar de seguridad norteamericano HIPAA (Health Insurance Portability and Accountability Act), para asegurar a nuestros clientes y a sus pacientes la seguridad de su informaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " En PEGASI construimos d\u00EDa a d\u00EDa un mundo donde el acceso claro y seguro a la informaci\u00F3n de Salud es una garant\u00EDa para pacientes, practicantes y proveedores de servicios\u201D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Luis Santiago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "CEO \u2013 PEGASI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u25BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "section", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Conoce nuestras funcionalidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Consultorio virtual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Manejo 360\u00B0 de tu paciente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " M\u00E1s de 30 tipos de registros m\u00E9dicos electr\u00F3nicos, que contienen las herramientas necesarias para cada especialista. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Manejo de laboratorio cl\u00EDnico y patol\u00F3gico en l\u00EDnea.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Gesti\u00F3n de archivos imagenol\u00F3gicos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Suite de creaci\u00F3n de estad\u00EDsticas personalizadas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Encontrar\u00E1s registro de r\u00E9cipes, asistencia, informes m\u00E9dicos y quir\u00FArgicos, ex\u00E1menes y mucho m\u00E1s. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h3", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Gestiona las citas m\u00E9dicas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Completa la planilla de datos demogr\u00E1ficos de tu paciente, con el objetivo de permitir su f\u00E1cil contacto y de emplearlos en estudios estad\u00EDsticos avanzados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Agenda citas al instante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Tendr\u00E1s la posibilidad de programar visitas sucesivas a un mismo paciente desde la opci\u00F3n de planificaci\u00F3n de citas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Plan de cirug\u00EDas y de tratamientos siempre a tu alcance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Teleconsulta Integrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Controla el flujo de trabajo de tus teleconsultas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Habla con tu paciente y escribe su historial en vivo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Maneja tu sala de espera virtual de manera muy sencilla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Sesi\u00F3n optimizada para cualquier dispositivo con c\u00E1mara.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Genera ingresos desde casa atendiendo tus pacientes con nuestras videollamadas y lleva su registro m\u00E9dico online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "section", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Trabajamos bajo los m\u00E1s altos est\u00E1ndares de calidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "section", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Beneficios que hacen la diferencia en la industria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Crear tu propio registro m\u00E9dico.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Gestionar tus citas medicas y llevar registro con o sin internet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Interactuar con tus pacientes, personal o remotamente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Crear tus estad\u00EDsticas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Acceder desde cualquier dispositivo y cualquier lugar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Mantener una alta seguridad de tus datos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Reg\u00EDstrate Ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "section", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Nuestros socios a nivel global apoyan nuestro crecimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "ngx-slick-carousel", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](274, AppComponent_div_274_Template, 2, 1, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "section", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " DOP $\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "2,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "/mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Prueba gratuita de 14 d\u00EDas. Pago mensual de\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "b", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "DOP $2,500.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Quiero 1 mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " DOP $\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "2,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "/mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "\u00A0Prueba gratuita de 14 d\u00EDas. Pago anual de\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "b", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "DOP $ 24,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Quiero 1 a\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Ahorra 25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " DOP $\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "2,250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "/mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Prueba gratuita de 14 d\u00EDas. Pago semestral de\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "b", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "DOP $ 13,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Quiero 6 meses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Ahorra 12.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Plan Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " Cont\u00E1ctanos para obtener m\u00E1s informaci\u00F3n sobre licencias por volumen, personalizaci\u00F3n y otras formas de pago.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Contactar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "section", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " \u00A1D\u00E9janos tus datos y nosotros te contactamos! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "label", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "input", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "label", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "label", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "input", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "label", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "textarea", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "button", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "section", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Reconocimientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "ngx-slick-carousel", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](392, AppComponent_div_392_Template, 2, 1, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "img", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, " (C) 2020 PEGASI International, Inc. Todos los derechos reservados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "ul", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "li", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "li", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "img", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "li", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "img", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "a", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, " Magazine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Tu Consulta, tu empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Transformaci\u00F3n-medica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "DeCOVIDficaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, " Nosotros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Sobre Pegasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "img", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, " Rep\u00FAblica Dominicana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Calle Mois\u00E9s Garc\u00EDa # 5, Edificio Le Residence. Santo Domingo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "img", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "\nCalle Monjitas 550, Oficina 19. Santiago. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "img", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " Estados Unidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "\n112 Capitol Trail. Newark, Delaware 19711. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, " Tel\u00E9fono: +1 (829) 771-3468.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "a", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "info@pegasi.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slidesTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slidesTrhee);
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"]], styles: ["@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n.contactContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.76rem !important;\n  line-height: 1.04rem !important;\n}\n@media only screen and (max-width: 1024px) {\n  .contactContainerPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n.menuMobile[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px !important;\n}\n@media only screen and (max-width: 600px) {\n  .bannerDesktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.bannerMobile[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .bannerMobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .bannerMobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: -20px !important;\n    margin-bottom: 70px;\n    width: 100%;\n  }\n}\n.containerNav[_ngcontent-%COMP%] {\n  display: flex;\n}\n.menuppal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #006ea1;\n}\na[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n@media only screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 840px) {\n  section[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  footer[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 840px) {\n  footer[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  footer[_ngcontent-%COMP%]   .textwidget[_ngcontent-%COMP%] {\n    border-top: 1px solid white;\n    padding-top: 30px;\n    padding-bottom: 20px;\n    margin-top: 50px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .desktopMenu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 840px) {\n  .desktopMenu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.desktopMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  margin-right: 15px;\n}\n@media (max-width: 1024px) {\n  .desktopMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px;\n  }\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 840px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.navbar[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1071;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  min-height: 4rem;\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: white;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n}\n@media only screen and (max-width: 600px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-top: 3px solid #2ea3f2;\n  font-weight: 600;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 190px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-section[_ngcontent-%COMP%]   .blueLightButton[_ngcontent-%COMP%] {\n  background-color: #46c8f4;\n  color: white;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 30px;\n  line-height: 1.4rem;\n  margin-right: 10px;\n  margin-left: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-section[_ngcontent-%COMP%]   .blueDarkButton[_ngcontent-%COMP%] {\n  background-color: #007eff;\n  color: white;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 30px;\n  line-height: 1.2rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #006a9f;\n  font-weight: 600;\n}\n.heroSlider[_ngcontent-%COMP%] {\n  padding-top: 110px;\n  position: relative;\n  background: #f0f3fc;\n  \n  \n  \n  background: linear-gradient(to bottom, #f0f3fc 0%, #fbfaff 50%, #fbfaff 51%, #ffffff 99%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#f0f3fc\", endColorstr=\"#ffffff\",GradientType=0 );\n  \n}\n@media only screen and (max-width: 600px) {\n  .heroSlider[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 840px) {\n  .heroSlider[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 1024px) {\n  .heroSlider[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.heroSlider[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.heroSlider[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  display: table;\n  position: absolute;\n  left: -100px;\n  top: 99px;\n}\n.heroSlider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #206a9c;\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.heroSlider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #46c8f4;\n  font-size: 4rem;\n  font-weight: 700;\n}\n.heroSlider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #194f73;\n  font-size: 1rem;\n  font-weight: 200;\n}\n.heroSlider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.heroSlider[_ngcontent-%COMP%]   .containerHeroImage[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n@media only screen and (max-width: 600px) {\n  .heroSlider[_ngcontent-%COMP%]   .containerHeroImage[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n}\n.heroSlider[_ngcontent-%COMP%]   .containerHeroImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 46px;\n}\n.heroSlider[_ngcontent-%COMP%]   .containerHeroImage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  line-height: 0.9rem;\n  margin-top: 10px;\n}\n.heroSlider[_ngcontent-%COMP%]   .bannerImage[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.heroSlider[_ngcontent-%COMP%]   .bannerImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n}\n@media only screen and (max-width: 600px) {\n  .heroSlider[_ngcontent-%COMP%]   .bannerImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n@media (max-width: 840px) {\n  .heroSlider[_ngcontent-%COMP%]   .bannerImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 130px;\n  }\n}\n.sectionTwo[_ngcontent-%COMP%] {\n  margin-top: 130px;\n  margin-bottom: 130px;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n  .sectionTwo[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .sectionTwo[_ngcontent-%COMP%] {\n    margin-top: 80px;\n    margin-bottom: 80px;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n.sectionTwo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 70px;\n  font-weight: 700;\n}\n.sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n  padding: 25px;\n  min-height: 510px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    padding: 25px;\n  }\n}\n@media (max-width: 840px) {\n  .sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n.sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.5rem;\n  margin-bottom: 0px;\n  text-align: left;\n}\n.sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 120px;\n}\n.sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.sectionThree[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sectionThree[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 30px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin-bottom: 20px;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media only screen and (max-width: 600px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n    position: relative;\n    transform: none;\n    -ms-transform: none;\n    top: 0px;\n  }\n}\n@media (max-width: 840px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n    position: relative;\n    transform: none;\n    -ms-transform: none;\n    top: 0px;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n@media only screen and (max-width: 600px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.56rem !important;\n  margin-bottom: 80px;\n  line-height: 2.2rem !important;\n  margin-bottom: 80px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem !important;\n    margin-bottom: 80px;\n    line-height: 2.2rem !important;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: \" \";\n  width: 30px;\n  height: 30px;\n  background-image: url(/assets/quote.png);\n  position: absolute;\n  background-repeat: no-repeat;\n  left: -40px;\n  top: -40px;\n}\n@media (max-width: 1024px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n    left: -20px;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (max-width: 840px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .innerPlay[_ngcontent-%COMP%] {\n  max-width: 500px;\n  position: relative;\n  margin: auto;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%]   .waves[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  animation: waves 3s ease-in-out infinite;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%]   .wave-1[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%]   .wave-2[_ngcontent-%COMP%] {\n  animation-delay: 0.6s;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%]   .wave-3[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  z-index: 2;\n  position: absolute;\n  top: 0 !important;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .main-video[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #46c8f4;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  border-radius: 90px;\n  background: #fff;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n@keyframes waves {\n  0% {\n    transform: scale(0.2, 0.2);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n  50% {\n    opacity: 0.9;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n  }\n  100% {\n    transform: scale(0.9, 0.9);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n}\n.sectionFour[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  margin-bottom: 120px;\n}\n@media (max-width: 600px) {\n  .sectionFour[_ngcontent-%COMP%] {\n    margin-top: 80px;\n    margin-bottom: 80px;\n  }\n}\n@media (max-width: 1024px) {\n  .sectionFour[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .sectionFour[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.sectionFour[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.sectionFour[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n}\n.sectionFour[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n.sectionFour[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n  margin-top: 30px;\n}\n.sectionFour[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n  list-style-position: inside;\n}\n.sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%] {\n  margin-bottom: 120px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%] {\n    margin-bottom: 60px;\n  }\n}\n.sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   .textRightContainer[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media only screen and (max-width: 600px) {\n  .sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 50px;\n  }\n  .sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n.sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.sectionFive[_ngcontent-%COMP%] {\n  margin-top: 130px;\n  margin-bottom: 130px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  text-align: center;\n}\n@media only screen and (max-width: 600px) {\n  .sectionFive[_ngcontent-%COMP%] {\n    margin-bottom: 100px;\n  }\n}\n@media (max-width: 1024px) {\n  .sectionFive[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionFive[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 40px;\n  font-weight: 700;\n}\n.sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.3);\n  min-height: 510px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n.sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.5rem;\n  margin-bottom: 0px;\n}\n.sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 120px;\n}\n.sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.sectionSix[_ngcontent-%COMP%] {\n  margin-bottom: 130px;\n}\n@media (max-width: 1024px) {\n  .sectionSix[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionSix[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 300;\n}\n.sectionSix[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 700;\n  margin-bottom: 30px;\n}\n.sectionSix[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionSix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .sectionSix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media (max-width: 840px) {\n  .sectionSix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.sectionSeven[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n  .sectionSeven[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionSeven[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 70px;\n  font-weight: 700;\n}\n.sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.3);\n  padding: 25px;\n  min-height: 510px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n.sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.5rem;\n  margin-bottom: 0px;\n}\n.sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 120px;\n}\n.sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.sectionEight[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 130px;\n}\n.sectionEight[_ngcontent-%COMP%]   .containerPrices[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.sectionEight[_ngcontent-%COMP%]   .priceContainer[_ngcontent-%COMP%] {\n  margin: 20px;\n  min-height: 345px;\n  transition: box-shadow 0.3s;\n  border: 2px solid #006a9f;\n  border-radius: 30px;\n  \n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 30px;\n  padding-bottom: 0px;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #006a9f;\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  border-radius: 20px;\n  padding-bottom: 10px;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #006a9fe3;\n  text-decoration: none;\n}\n.sectionEight[_ngcontent-%COMP%]   .headPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #8080802e;\n}\n.sectionEight[_ngcontent-%COMP%]   .headPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .price_number[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: bolder !important;\n}\n.sectionEight[_ngcontent-%COMP%]   .headPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .price_text_time[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  color: #808080ad;\n}\n.sectionEight[_ngcontent-%COMP%]   .bodyPrice[_ngcontent-%COMP%] {\n  min-height: 90px;\n}\n@media (max-width: 1024px) {\n  .sectionEight[_ngcontent-%COMP%]   .bodyPrice[_ngcontent-%COMP%] {\n    min-height: 106px;\n  }\n}\n.sectionEight[_ngcontent-%COMP%]   .bodyPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-height: 50px;\n  font-size: 0.8rem;\n  line-height: 1.3rem;\n  text-align: center;\n  color: #808080a6;\n}\n@media (max-width: 1024px) {\n  .sectionEight[_ngcontent-%COMP%]   .bodyPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #cecece30;\n  border-radius: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 13px;\n  margin: auto;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background: #cecece20;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   .containerDiscount[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.sectionEight[_ngcontent-%COMP%]   .promoted[_ngcontent-%COMP%] {\n  box-shadow: 0 0 11px #00c8f7;\n}\n.sectionEight[_ngcontent-%COMP%]   .promoted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #4cadc9;\n  background-image: linear-gradient(to right, #4cadc9 0%, #5472d2 50%, #5472d2 100%);\n}\n.sectionEight[_ngcontent-%COMP%]   .withPadding[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.sectionNine[_ngcontent-%COMP%] {\n  margin-bottom: 160px;\n}\n@media (max-width: 1024px) {\n  .sectionNine[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionNine[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #eff1fe;\n  border-radius: 4px;\n  padding-left: 15px;\n  height: 55px;\n  line-height: 55px;\n  clear: both;\n  border: 1px solid #e1e1e1;\n  background-color: #eff1fe !important;\n  padding-left: 15px !important;\n}\n.sectionNine[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  background: #eff1fe;\n  padding: 15px 15px;\n  height: 150px;\n  border-radius: 4px;\n}\n.sectionNine[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 600;\n  margin-bottom: 50px;\n}\n.sectionNine[_ngcontent-%COMP%]   .containerImageContactUs[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n.sectionNine[_ngcontent-%COMP%]   .containerImageContactUs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media only screen and (max-width: 600px) {\n  .sectionNine[_ngcontent-%COMP%]   .containerImageContactUs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 50px;\n    top: 0px;\n    transform: none;\n  }\n}\n@media (max-width: 840px) {\n  .sectionNine[_ngcontent-%COMP%]   .containerImageContactUs[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.sectionTen[_ngcontent-%COMP%] {\n  margin-bottom: 160px;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n  .sectionTen[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionTen[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 70px;\n  font-weight: 700;\n}\n.sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.3);\n  padding: 25px;\n  min-height: 510px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n.sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.5rem;\n  margin-bottom: 0px;\n}\n.sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 120px;\n}\n.sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\nfooter[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  color: white;\n  padding-bottom: 50px;\n  background-color: #222222;\n}\n@media (max-width: 1024px) {\n  footer[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: 0px;\n  padding-left: 0px;\n}\nfooter[_ngcontent-%COMP%]   .et-social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  display: inline-block;\n  margin-left: 20px;\n}\nfooter[_ngcontent-%COMP%]   .textwidget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.stepOne[_ngcontent-%COMP%] {\n  animation: fadein 2s;\n  -moz-animation: fadein 2s;\n  \n  -webkit-animation: fadein 2s;\n  \n  -o-animation: fadein 2s;\n  \n}\n.stepTwo[_ngcontent-%COMP%] {\n  animation: fadein 2.5s;\n  -moz-animation: fadein 2.5s;\n  \n  -webkit-animation: fadein 2.5s;\n  \n  -o-animation: fadein 2.5s;\n  \n}\n.stepThree[_ngcontent-%COMP%] {\n  animation: fadein 3s;\n  -moz-animation: fadein 3s;\n  \n  -webkit-animation: fadein 3s;\n  \n  -o-animation: fadein 3s;\n  \n}\n.stepFour[_ngcontent-%COMP%] {\n  animation: fadein 3.5s;\n  -moz-animation: fadein 3.5s;\n  \n  -webkit-animation: fadein 3.5s;\n  \n  -o-animation: fadein 3.5s;\n  \n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7Ozs7O0lBS0UsaUJBQUE7RUFDRjtBQUNGO0FBR0U7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0FBREo7QUFVTTtFQURGO0lBRUksNEJBQUE7RUFOTjtBQUNGO0FBV0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBUkY7QUFZRTtFQURGO0lBRUcsYUFBQTtFQVJEO0FBQ0Y7QUFZQTtFQUNFLGFBQUE7QUFURjtBQVVFO0VBRkY7SUFHSSxjQUFBO0VBUEY7RUFRRTtJQUNFLDRCQUFBO0lBQ0YsbUJBQUE7SUFDQSxXQUFBO0VBTkY7QUFDRjtBQVVBO0VBQ0UsYUFBQTtBQVBGO0FBV0U7RUFDRSxjQUFBO0FBUko7QUFXQTtFQUNFLFlBQUE7QUFSRjtBQVlJO0VBREo7SUFFUSxrQkFBQTtJQUNBLG1CQUFBO0VBUk47QUFDRjtBQVNJO0VBTEo7SUFPUSxrQkFBQTtJQUNBLG1CQUFBO0VBUE47QUFDRjtBQWVJO0VBREo7SUFFUSxrQkFBQTtJQUNBLG1CQUFBO0VBWE47QUFDRjtBQVlJO0VBTEo7SUFPUSxrQkFBQTtJQUNBLG1CQUFBO0VBVk47RUFhTTtJQUNJLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0VBWFY7QUFDRjtBQWlCSTtFQUZKO0lBR1EsYUFBQTtFQWJOO0FBQ0Y7QUFlSTtFQU5KO0lBUVEsYUFBQTtFQWJOO0FBQ0Y7QUFnQks7RUFDQyxrQkFBQTtFQUVBLGtCQUFBO0FBZk47QUFzQkc7RUFWRTtJQVlELGlCQUFBO0lBQ0EsWUFBQTtFQXBCRjtBQUNGO0FBMEJBO0VBQ0ksYUFBQTtBQXZCSjtBQXlCSTtFQUhKO0lBSVEsY0FBQTtFQXRCTjtBQUNGO0FBeUJJO0VBUko7SUFVUSxjQUFBO0VBdkJOO0FBQ0Y7QUE0QkE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9C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QUNBLGtCQUFBO0FBcElOO0FBc0lJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBcElOO0FBdUlJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFySU47QUEwSUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBdklGO0FBd0lFO0VBTEY7SUFRSSxrQkFBQTtJQUNBLG1CQUFBO0VBdklGO0FBQ0Y7QUF5SUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF2SUo7QUEwSUk7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQXhJTjtBQTZJTTtFQUNJLGtCQUFBO0FBM0lWO0FBOElFO0VBQ0ksWUFBQTtBQTVJTjtBQWdKQTtFQUVFLG9CQUFBO0VBQ0EseUJBQUE7RUFBMkIsWUFBQTtFQUMzQiw0QkFBQTtFQUE4QixzQkFBQTtFQUM5Qix1QkFBQTtFQUF5QixVQUFBO0FBM0kzQjtBQThJQTtFQUVFLHNCQUFBO0VBQ0EsMkJBQUE7RUFBNkIsWUFBQTtFQUM3Qiw4QkFBQTtFQUFnQyxzQkFBQTtFQUNoQyx5QkFBQTtFQUEyQixVQUFBO0FBekk3QjtBQTZJQTtFQUVFLG9CQUFBO0VBQ0EseUJBQUE7RUFBMkIsWUFBQTtFQUMzQiw0QkFBQTtFQUE4QixzQkFBQTtFQUM5Qix1QkFBQTtFQUF5QixVQUFBO0FBeEkzQjtBQTJJQTtFQUVFLHNCQUFBO0VBQ0EsMkJBQUE7RUFBOEIsWUFBQTtFQUM5Qiw4QkFBQTtFQUFnQyxzQkFBQTtFQUNoQyx5QkFBQTtFQUEwQixVQUFBO0FBdEk1QjtBQTJJQTtFQUNFO0lBQ0ksVUFBQTtFQXhJSjtFQTBJQTtJQUNJLFVBQUE7RUF4SUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyLFxyXG4gIC5jb250YWluZXItbGcsXHJcbiAgLmNvbnRhaW5lci1tZCxcclxuICAuY29udGFpbmVyLXNtLFxyXG4gIC5jb250YWluZXIteGwge1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdENvbnRhaW5lcntcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAwLjc2cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS4wNHJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgXHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdENvbnRhaW5lclByaWNle1xyXG4gIHB7XHJcbiAgICBzcGFue1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1lbnVNb2JpbGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYW5uZXJEZXNrdG9we1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgZGlzcGxheTogbm9uZTtcclxufVxyXG59XHJcblxyXG5cclxuLmJhbm5lck1vYmlsZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaW1ne1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuIH1cclxufVxyXG5cclxuLmNvbnRhaW5lck5hdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubWVudXBwYWx7XHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAjMDA2ZWExO1xyXG4gIH1cclxufVxyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZm9vdGVye1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcblxyXG4gICAgICAgIC50ZXh0d2lkZ2V0e1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4OztcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG59XHJcblxyXG4uZGVza3RvcE1lbnV7XHJcbiAgICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuXHJcbiAgICAgfVxyXG4gICAgIGF7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgXHJcbiBcclxuXHJcbiAgIH1cclxuXHJcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgICAgIFxyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcblxyXG5cclxuIH1cclxuICAgICB9XHJcbn1cclxuXHJcbi5oYW1idXJnZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuXHJcbiAgICAgfVxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDcxO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDRyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gIC5kcm9wZG93biB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMmVhM2YyO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1zZWN0aW9uIHtcclxuXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibHVlTGlnaHRCdXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZjOGY0O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibHVlRGFya0J1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdlZmY7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjMDA2YTlmO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlcm9TbGlkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiBiYWNrZ3JvdW5kOiAjZjBmM2ZjOyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2YwZjNmYyAwJSwgI2ZiZmFmZiA1MCUsICNmYmZhZmYgNTElLCAjZmZmZmZmIDk5JSk7IC8qIEZGMy42LTE1ICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICNmMGYzZmMgMCUsI2ZiZmFmZiA1MCUsI2ZiZmFmZiA1MSUsI2ZmZmZmZiA5OSUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgI2YwZjNmYyAwJSwjZmJmYWZmIDUwJSwjZmJmYWZmIDUxJSwjZmZmZmZmIDk5JSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2YwZjNmYycsIGVuZENvbG9yc3RyPScjZmZmZmZmJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICAgfVxyXG5cclxuICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLnBsYXl7XHJcbiAgICAgICBcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0xMDBweDtcclxuICAgICAgICB0b3A6IDk5cHg7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiAjMjA2YTljO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjNDZjOGY0O1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICMxOTRmNzM7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lckhlcm9JbWFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDs7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMC45cmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhbm5lckltYWdlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4OztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzMHB4OztcclxuXHJcblxyXG4gICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uVHdvIHtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTMwcHg7XHJcblxyXG4gIFxyXG4gICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAgICAgICBcclxuICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG5cclxuICAgfVxyXG5cclxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgIH1cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJEZXNjcml0aW9uIHtcclxuICBcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb25UaHJlZSB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5jb250YWluZXJRdW90ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAgICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjU2cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvcXVvdGUucG5nKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBsZWZ0OiAtNDBweDtcclxuICAgICAgICB0b3A6IC00MHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgICAgICBcclxuICAgICAgICAgIGxlZnQ6IC0yMHB4O1xyXG5cclxuICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lclBsYXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgbWFyZ2luLXRvcDogMTAwcHg7O1xyXG5cclxuICAgICB9XHJcbiAgICAuaW5uZXJQbGF5IHtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvLWJ0biB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA0MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAudmlkZW8tYnRuIC5idG4td2F2ZXMgLndhdmVzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHdhdmVzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgICBhbmltYXRpb246IHdhdmVzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlby1idG4gLmJ0bi13YXZlcyAud2F2ZS0xIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgfVxyXG4gICAgLnZpZGVvLWJ0biAuYnRuLXdhdmVzIC53YXZlLTIge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgfVxyXG4gICAgLnZpZGVvLWJ0biAuYnRuLXdhdmVzIC53YXZlLTMge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvLWJ0biAuYnRuLXdhdmVzIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tdmlkZW8gLnZpZGVvLWJ0biBzcGFuIHtcclxuICAgICAgY29sb3I6ICM0NmM4ZjQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHdhdmVzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT05MClcIjtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHdhdmVzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT05MClcIjtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbkZvdXIge1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG5cclxuIFxyXG4gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAgICAgICBcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblxyXG4gfVxyXG5cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDozMHB4O1xyXG59XHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbkluZm9ybWF0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG4gICAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcblxyXG5cclxuICAgICAgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAudGV4dFJpZ2h0Q29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDs7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bHtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbkZpdmUge1xyXG4gIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuXHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcbiBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAgICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG5cclxuIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJEZXNjcml0aW9uIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjMpO1xyXG5cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gIH1cclxuICAgIG1pbi1oZWlnaHQ6IDUxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb25TaXgge1xyXG4gIG1hcmdpbi1ib3R0b206IDEzMHB4O1xyXG4gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuXHJcbiB9XHJcblxyXG4gIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgb2wge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICBpbWd7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG5cclxuIH1cclxufVxyXG5cclxuLnNlY3Rpb25TZXZlbiB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuXHJcbiB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyRGVzY3JpdGlvbiB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMTc1LCAxNzUsIDE3NSwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgIH1cclxuXHJcbiAgICBtaW4taGVpZ2h0OiA1MTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uRWlnaHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XHJcblxyXG4gIC5jb250YWluZXJQcmljZXMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC5wcmljZUNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNDVweDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDZhOWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyUHJpY2UgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2YTlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDZhOWZlMztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRQcmljZSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgLnByaWNlX251bWJlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnByaWNlX3RleHRfdGltZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwYWQ7XHJcbiAgICAgIH1cclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwMmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm9keVByaWNlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcblxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgICAgICBcclxuICAgICAgbWluLWhlaWdodDogMTA2cHg7XHJcbiAgIH1cclxuICAgIHAge1xyXG4gICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzgwODA4MGE2O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuZm9vdGVyUHJpY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjY2VjZWNlMzA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2VjZWNlMjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyRGlzY291bnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb21vdGVkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4ICMwMGM4Zjc7XHJcbiAgICBhIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWRjOTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgbGVmdCxcclxuICAgICAgICAjNGNhZGM5IDAlLFxyXG4gICAgICAgICM1NDcyZDIgNTAlLFxyXG4gICAgICAgICM1NDcyZDIgMTAwJVxyXG4gICAgICApO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgIzRjYWRjOSAwJSxcclxuICAgICAgICAjNTQ3MmQyIDUwJSxcclxuICAgICAgICAjNTQ3MmQyIDEwMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53aXRoUGFkZGluZyB7XHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb25OaW5lIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNjBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAgICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG5cclxuIH1cclxuICBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmMWZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmMWZlO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lckltYWdlQ29udGFjdFVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgIFxyXG4gICAgIH1cclxuICB9XHJcbiAgICAgICBcclxuXHJcbn1cclxuXHJcbi5zZWN0aW9uVGVuIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuXHJcbiB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJEZXNjcml0aW9uIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjMpO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgfVxyXG4gICAgbWluLWhlaWdodDogNTEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAgICAgICBcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblxyXG4gfVxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIC5ldC1zb2NpYWwtaWNvbnMge1xyXG4gICAgbGkge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0d2lkZ2V0e1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgYXtcclxuICAgICAgY29sb3I6d2hpdGVcclxuICB9XHJcbn1cclxuXHJcbi5zdGVwT25lIHtcclxuIFxyXG4gIGFuaW1hdGlvbjogZmFkZWluIDJzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEZpcmVmb3ggKi9cclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xyXG4gIC1vLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBPcGVyYSAqL1xyXG59XHJcblxyXG4uc3RlcFR3byB7XHJcbiAgXHJcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMi41cztcclxuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDIuNXM7IC8qIEZpcmVmb3ggKi9cclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDIuNXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMi41czsgLyogT3BlcmEgKi9cclxufVxyXG5cclxuXHJcbi5zdGVwVGhyZWUge1xyXG4gXHJcbiAgYW5pbWF0aW9uOiBmYWRlaW4gM3M7XHJcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAzczsgLyogRmlyZWZveCAqL1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gM3M7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gM3M7IC8qIE9wZXJhICovXHJcbn1cclxuXHJcbi5zdGVwRm91ciB7XHJcbiBcclxuICBhbmltYXRpb246IGZhZGVpbiAzLjVzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMy41czs7IC8qIEZpcmVmb3ggKi9cclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDMuNXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMy41czsvKiBPcGVyYSAqL1xyXG59XHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7IC8qIEZpcmVmb3ggKi9cclxuICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgZmFkZWluIHsgLyogT3BlcmEgKi9cclxuICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cristian\Documents\alquilerdirecto\landing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
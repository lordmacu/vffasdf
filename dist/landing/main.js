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




function AppComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_275_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_393_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 134);
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
            "nextArrow": "<div class='nav-btn next-slide'></div>",
            "prevArrow": "<div class='nav-btn prev-slide'></div>",
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 457, vars: 6, consts: [[1, "navbar"], [1, "container", "containerNav"], [1, "navbar-section"], ["href", "...", 1, "navbar-brand", "mr-2"], ["src", "/assets/PEGASI-Logo-1.jpg"], [1, "navbar-section", "desktopMenu"], ["href", "#inicio", 1, "btn", "btn-link"], ["href", "#funcionalidades", 1, "btn", "btn-link"], ["href", "#precios", 1, "btn", "btn-link"], ["href", "https://nosotros.pegasi.io/", 1, "btn", "btn-link"], [1, "dropdown"], ["href", "#", "tabindex", "0", 1, "btn", "btn-link", "dropdown-toggle"], [1, "icon", "icon-caret"], [1, "menu"], ["href", "https://pegasi.io/blog/?category=magazine", 1, "btn", "btn-link"], ["href", "https://pegasi.io/blog/?category=tu-empresa", 1, "btn", "btn-link"], ["href", "https://pegasi.io/blog/?category=futurology-review", 1, "btn", "btn-link"], ["href", "https://pegasi.io/blog/?category=futurology-review-decovidficacion", 1, "btn", "btn-link"], ["href", "https://pegasi.io/preguntas/", 1, "btn", "btn-link"], ["href", "https://meetings.hubspot.com/julian-torres1/meeting?__hstc=57975093.42d4aa2c70bdbfc1c25167f7a50aae6a.1592850552574.1594074994575.1594143011434.26&__hssc=&hsCtaTracking=ad6e230e-55b2-420a-b822-51e6fb8a89e2%7Cd37dcde8-7c03-4594-92b1-609575c3ff7b", 1, "btn", "btn-link", "blueLightButton"], ["href", "https://med.pegasi.io/", 1, "btn", "btn-link", "blueDarkButton"], [1, "menuMobile"], [1, "hamburger"], [1, "_layer", "-top"], [1, "_layer", "-mid"], [1, "_layer", "-bottom"], [1, "menuppal"], ["href", "https://pegasi.io/category/podcast/", 1, "btn", "btn-link"], ["name", "inicio", "id", "inicio", 1, "heroSlider"], [1, "container"], [1, "columns"], ["data-fancybox-type", "iframe", "href", "https://www.youtube.com/embed/nXSgXzqdGCo?autoplay=1", 1, "fancy"], ["src", "/assets/play.png", "width", "30", 1, "play"], [1, "col-5", "col-xs-12"], [1, "column", "col-3", "containerHeroImage"], ["src", "/assets/iconfinder_medical-healthcare-hospital-32_4082081.png"], ["src", "/assets/iconfinder_medical-healthcare-hospital-48_4082065.png"], ["src", "/assets/iconfinder_medical-healthcare-hospital-25_4082088-1.png"], ["src", "/assets/iconfinder_medical-healthcare-hospital-26_4082087.png"], [1, "col-7", "col-xs-12", "bannerImage"], ["src", "/assets/banner-images.png"], [1, "sectionTwo", "hidden"], [1, "vc_sep_line"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [1, "column", "col-3", "col-xs-12", "col-md-6"], [1, "containerDescrition"], [1, "sectionThree", "hidden"], [1, "col-5", "col-xs-12", "containerQuote", "col-md-12"], [1, "col-12"], [1, "col-6"], ["src", "/assets/LASA.png"], [1, "col-7", "col-xs-12", "col-md-12", "containerPlayVideo"], [1, "innerPlay"], ["src", "/assets/write-1.png"], [1, "main-video"], [1, "video-img"], [1, "consult-video", "video-btn"], [1, "btn-waves"], [1, "waves", "wave-1"], [1, "waves", "wave-2"], [1, "waves", "wave-3"], ["name", "funcionalidades", "id", "funcionalidades", 1, "container", "sectionFour", "hidden"], [1, "columns", "columnInformation"], [1, "col-6", "col-xs-12"], ["src", "/assets/Linea-de-tiempo.png"], [1, "columns", "columnInformation", "rightAlign"], ["src", "/assets/Calendario-e1592336762435.png"], ["src", "/assets/Telemedicina-1.png"], [1, "sectionFive", "hidden"], [1, "containerImagesStandard"], ["src", "/assets/fhir-logo-www.jpg"], ["src", "/assets/hipaa-compliance-1-1200x675-1.jpg"], ["src", "/assets/isoorg1600x560-1.jpg"], [1, "sectionSix", "container", "section"], ["src", "/assets/benefis.jpg"], ["href", "#precios", 1, "button_action"], [1, "sectionSeven", "hidden"], ["name", "precios", "id", "precios", 1, "sectionEight", "container", "section"], [1, "columns", "containerPrices"], [1, "col-3", "col-xs-12", "col-md-6"], [1, "priceContainer"], [1, "headPrice"], [1, "price_number"], [1, "price_text_time"], [1, "bodyPrice", "withPadding"], ["data-stringify-type", "bold"], [1, "footerPrice"], ["href", "javascript:void(0)", "data-cb-type", "checkout", "data-cb-plan-id", "pegasi-med-licencia-mensual-(dop)", "onclick", "addEvent('Seleccionarndo plan','plan 1 mes','en planes')"], [1, "priceContainer", "promoted"], ["href", "javascript:void(0)", "data-cb-type", "checkout", "data-cb-plan-id", "pegasi-med-licencia-anual-(dop)", "onclick", "addEvent('Seleccionarndo plan','plan 1 a\u00F1o','en planes')"], [1, "containerDiscount"], ["href", "javascript:void(0)", "data-cb-type", "checkout", "data-cb-plan-id", "pegasi-med-licencia-semestral", "onclick", "addEvent('Seleccionarndo plan','plan 1 semestre','en planes')"], [1, "bodyPrice"], [2, "font-size", "12px"], ["href", "https://meetings.hubspot.com/julian-torres1/meeting?__hstc=57975093.42d4aa2c70bdbfc1c25167f7a50aae6a.1592850552574.1594595598919.1594603706136.33&__hssc=57975093.2.1594603706136&__hsfp=3189259272"], [1, "sectionNine", "container", "hidden"], [1, "col-6", "col-xs-12", "col-md-12"], [1, "form-group"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "name", "name", "placeholder", "Ingresa tu nombre", 1, "form-input"], ["for", "lastname", 1, "form-label"], ["type", "text", "id", "lastname", "name", "lastname", "placeholder", "Ingresa tu apellido", 1, "form-input"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "placeholder", "Ingresa tu correo", 1, "form-input"], ["for", "input-example-1", 1, "form-label"], ["placeholder", "Ingresa tu mensaje", 1, "form-input"], [1, "button_action"], [1, "col-6", "col-xs-12", "containerImageContactUs"], ["src", "/assets/contactus.jpg"], [1, "sectionTen", "hidden"], [1, "col-3", "col-xs-12", "col-md-4"], ["src", "/assets/logo-pegasi-blanco.png"], [1, "et-social-icons"], [1, "et-social-icon", "et-social-linkedin"], ["href", "https://www.linkedin.com/company/pegasi-med"], ["src", "/assets/linkedin.PNG"], [1, "et-social-icon", "et-social-facebook"], ["href", "https://www.facebook.com/pegasimed"], ["src", "/assets/facebook.PNG"], [1, "et-social-icon", "et-social-twitter"], ["href", "https://twitter.com/pegasi_med"], ["src", "/assets/twitter.PNG"], [1, "et-social-icon", "et-social-instagram"], ["href", "https://www.instagram.com/pegasi_med/"], ["src", "/assets/instagram.PNG"], [1, "col-3", "col-xs-12", "col-md-12"], [1, "textwidget"], ["width", "15", "height", "15", "src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAARpQTFRF////bZLb222S6urqO3bE2DtOc5nM2XOAe6HQ43uOUoXI3FJq7+/v7+/vSoPH30pk8PDwUIfI4VBo7+/vTIXG3kxnRH7E3kRgV4vJ31dwRH/F30Rg8PDwP3vE3j9c8PDwX5HM4V92NnbC3jZVOXfC3jlW8PDwI2m93CNE8PDwEV252hE2E1+42hM2Dlu42Q4yAFK0AVKzAVO0BVW1GWGuHEeiJmu9KUOZKm2+Km6/SW4tSm8vTHExT2ktT2otUGktUojIZINMZVgsZoVPdJ7Pd6DSgEQrhz8qiKzWlRlTl7K+nK6Nni0ppicpqsDTrCIpwdHkxBAoxQ4ox9DBz9fK2AAn3ePl4FJs5ent5oiZ6Orn6uzv7O3r8PDwHzWxMgAAADB0Uk5TAAcHDA0NFBQ2NkFBTnB/f4qQkKSrq7CwsrK1tb7T09jc3Ofn7e3y9vb4+/v9/f7+OJH5YQAAApRJREFUWMOl19dWIkEQANBSUJCs5CBBybGMq4WrIGbM0Eb8/9/YB5iVwa5hpq0nzumuCx3pAmDC5vEGgqlMsZhJBQNejw0shSuRrXzpopJLus1mL8dKiJ2vmXgVohx3mEi3h+qIckCIRnhpXv5qFZEHhKitGaY784jGgBCFFT7f18T5gGj5ufwIohlAiKg0fWEdzQIivSjJ30DzgNj8Kei+fy4g0kbjNwPMzoMPrQJCtxbOpnWgNb0f8mgdEIWp/YsqgPi/q+1VNaCmnawQqgEiPDn/dVWgMb4fYqgKiDgAAJTUgTIAgAvVAeEGgMRvgCQAZDuyuBqnvd3fv40/vb/KIgdgq3xx8Xm+v424vX/+yXap2MDDNj4eauM5fGQ7ecDL5u98z8gOK3ghwP3+A9z7M4k9POBGEYAg03KGeK3N9TXiGdMtCCmmZVcP7DLdUpCRN7xs6YGtF3m/DBTlDTeoB/BG3q/IAQMietCAByIacAAzhI820a0G3BK1P7ghcJPYJbrQgAuiLjuJ3DL2iY6fxvlPx0R9dhm5jTTqEZ0+CyHE8ylRb8RuJHYrD4+ITi7v7i7/Eh0N+a3MH6ZhjybRGxocJoPjPOp320Ttbn9kdJwhJ70p3ierORhM1u9Keu9kASApvateZ7+rI735EgDg/g3gAgAoqwMlAACIqwMxAABwNFSB+vL4zzGsCoQm/85LNTWgatceCGtqwOr3E6WgAuSn3kgrLetA0zn9TPNbB3z6h2LUKhCZfaqmrQHrP97Ki5tWgI2Fn8/1xbR5YH1BWjFEzQIRrmTxt8wATR9fNK0U5gN5p2HdtlYzBqqr8wrHpXCDB+ohu4na1REvy4FSbNls+exO5maL72zCZa2AN1v+/wPNdteMTMn46gAAAABJRU5ErkJggg==", 1, ""], ["width", "15", "height", "15", "src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAcVQTFRF////////gKrV/4CA5ubm6urqc5nM2XOAb5vT6W+F7Ozs7+/vbpvN4W6CbprP5W6E7u7u8vLy7+/v7+/v8PDw8PDwZ5XM4md97+/v8PDwZZTO42V7Y5PN4mN68PDw8fHxXI7L4lx0Wo3L4Vpy7+/vWYzJ4FlyVorJ4FZv8fHxVIrJ4VRu8PDw8PDw8PDwTITH4UxnTILG8PDwSYPH4Ell7+/v8PDwP3vE3j9b8fHxOHfC3jhWNXXBRWCq3TVU8PDwMXPB3jFQMHHA3TBP8PDwKW2+3SlJImi82yJE8PDwIGe82yBC8PDwNU6fFmG62xY6El642hI2DFm3IUuk2gwx8PDwAFK0AVO0BFS1Bla1B1a2C0+tDFq3DVu3D1y4EF24El64FF+5F2G6I2m9JWq9Jmu9KW2+LXC/LnDAMHLAMXLAM3PBOHfCRX/FSILGWY3KWo3LXY/LX5HMbZrPc57Rd6DSeKHSeaLSfqXUiazWja/Xl7XamrjbnLnbnrrcqMHerMPfrcTfrsXgtcnhwdHkxNPlyNXmz9ro0Nvo2AAn2AEo2AYs2uLr2+Lr4OXs5Ojt5+ru6uzv6+3v7O7v7e7v7+/w8PDwDTWHUAAAAFZ0Uk5TAAMGBgoMFBQXFxsfMzM6OjxMTmJkaGpqcHSBgYSEio6enqGhpKamr6+ws7O2vsDJycrLzc3V2N/f5efn6urq6u7u7+/y9PT4+Pj5+fn6/Pz9/f7+/v6EUxSrAAACfElEQVQYGaXBB0NSURgG4FdwK+69FUVzZa4wDUMcmOYo/UzbZXuaZXvPA02r7/cmQzjAvYdxnwd6suvaDx4+dvzk5HBPa0NVSQaSkt82tk4BHDDbXZ6LBGV2Tq1RCIes9lenIz5TywLJWDZSloY4amYoEkcaKoZKwQRF42i9edBVsUQxOMZ4EXQ0rVMsjjVfCi2mAdLCWhrTEMN0hDSxpgNpiDZA2lhbI6I0UcjFayRhHaWIULFOIVtPSMI65osgKViisLefScJ6xvMQNkFhF3Z5k8JYVy9Cakhyn/kRhbG+YgSZZkjyhvkjhbG+oTQEtJDf9R2/38z8dMfnDu1hhTL4ZS5QwNYvluxur9EeVhhJh08n7bv6iUO+3CI/VqmGzxSFbDzjoJdnKYBV+rEnf40kj9nvOe1jldVcAG0ke81+H2gfK5UDGCPJxk/mf3+Y/16iIFbqBrLXSXKP+fvd21+ZH1IQK81moI5kL/j9ZaJzr/gdBbFaCdpJcvrb9hr5PPhxngJYrQqHSHLlJgVt3qAAVmvAUVJjtVacIDVW68EpUmO1YZwhNVabxIowZAVzwpA5OIUhTtiFIXb0CUP60CEM6UC9MKQeOV5hgDcHcAgDHABswgAbAItHpMxjwZ5pkbJp+HSJlHXBJ2tRpGgxC35WkSIrAsxukRK3GUG1IiW1CHGJFLgQVrgskrZcCEmlVyTJW4kIzSJJzYgyKJIyiGjmUZGEUTNimAdFwgbN0NLsFQnxNkNH5bJIwHIldBW6RFyuQqjUuoWSuxZxmK2LQtei1Yz4srqmPUKDZ7orCwmy2BxeEcHrsFmQlJz6jj67c25lZc5p7+uoz4GO/9AmPgQN5kLSAAAAAElFTkSuQmCC", 1, ""], ["width", "15", "height", "15", "src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAdtSURBVHja5VtpUFNXGI2AqLVj3ahbazdbl0rH1qU6olM7SqVairiCigqoiAsMoI52RGSsMlZFWztTbZ1aBzrWbaBo2BNANMgigqAhZCUYQoCEpDoVUW7v9ySZl+Q9SCEbyY8zgeTm3e+cd5fz3XyPgRBiWBIRvz4YFX2+Yr/fEU7ajJj8R1Mj2A0fbMv9581NWe0DVzNRa2urBoOLwVKpVEn49Rh+jcTwVSgUr1s6PotcdMVRzhfzvyvMfG9rjqb/qpuI4X+DFphwV3iGwcQIa25uHmfXAvgnlo4JOlV6fcou1hMywYATxWhEUGZPBSCjA6MEI0Ymk71mNwJ4x1QMXhrPuTpkbfpLKoJXb4nQ+sQScwigg1qtfoxfQ3H/rjYTgBEX5+KXUJQ4alPWczpyw9ZnoKYWFbqCRTCnAFrgdaJao9EstboAuON3cAB5EMQ9nhx9GpWnIzQuNBsxiyWUAStVrehA0gPktuKmWQQgIQ9isooASqXSC3eogI5/YfLQ4IB0o7vqignuvVCJWpQqXZCPRAo0b/8to7YqucI8aJA3NVXxF1hUgNQ74t2YTJuW1DTSnTcECCNvUuoEuJjLp2zHZUw0K4Q+IVfNLgCbjdy+jC2sKKqWoewyKVqHFzVBfROKTa6iFWDZ0SLU2KxEO8+VowvZfNSgUKKBa5gWFwAgWbb9rqkLZLcN4i5Xuy+Ku103ITxXb/6ODs5CJ1O4tALsu1iJPCPZuv83ni5FCw/etooAALHfdiFis916JQD+tN+sPQVc7bw2DN5l+Q3Ubzm1AFTtqd6zlAAAgVdANWbh0mMBFsYWplCRm7vvVpfujozP9xQg9y7coCUFAIi+CrnWIwECjhdHu1Dc3TEhWSjnntRkAc6k1aBFFEPfWgJwXSejuq0Hwv+XADt+K587dF1GB1XAW34uI1Z12O+7I99/5U0ketyMfsIi2EwADN7ouS/rE3+fZrIAP1znPoTgtUGuPVmCklkCAtXCRkKA3HIp8T9sb4ZGCPwBfPY3R0y0lTa06L4P/oBshKwhADEV5qxpxnT7dStA4ImSBEhTDe/U5jNlevs64IGgEc3eW2DU9t2tOYRA+ra1FR25XG20HsiTU60GBadsdZcCfLSFPRInNS/ohivs6WRSk3ayaIf2gFVMJGts0bU9m84zey7Qk9zB0B/oCXCnShbptoJ+xb5WKCJIXcoTEheE9YCuLYwMaJNeXIe4EgV6KGqk3DKtKUAnQikFgHw+KVfQsuBAIW1mB8P6Q2yItE4P5jSdAPGXqlDU+fuEVxi5IRNdLhChGTH5NhcAUmnyeYJOgDXHi1MhoLc2U6/uHhszjebv2JBsWiNkuEtAO2hvByMAEGMkwPgtOf+aureP3pRlsg8Ay9yLIzFLoURPADhvmx6dZxIhSGjOZdSaLADkBFMj2PYmQIf2jJEQAA4d4/6sMonQ0sMcJMeZ3SCKzI4Kdx/JCBHsTABAGFkAZgVfjvwTigj4fl+EyEYIFkbtZ9dvvzI3kBlq35uyi623LmjfDz3zyjWWcht074GA5J1Gfv6KTSA7daGMEADO3juPn4lgK7EQs3bnGy12VMdcYG6OXnlI7PmGdhnOAgzbl9U0GB2iWMsJUmaLKyPGw/merzZA2ObeWJdBOVRhO0vE+T+Z0Dffc2iH9sd43pONUFqRhPL4zJYCSLfHx4IAkdq7VYKHalfz+XTqKwG0lnjJYXoB8K6i15Yug7SlAGK/bWmMZJbwDzA3iw/dIY656OwtzFuuWEHY4eFBGSgJmyA6ewvYcbYcse/Xo/fDcog1RYyzQiofYNMpMH0ZlzEhPLeJvL/THXYAEcP5C4sanREyXEjfxgZr5u58uxKAP3GxgoGd31NT93RLwJYC1I5f8IQxPCiz3VkF4I2c3c5w7+bXW0cWgDvAkzBBGhu6MVtDw+gsTnBWAbggAMuJBWAxOstSnFIA4A4j4JgTj4BjhBV24hEQqZcMOaEAvkbpsBPhGXAnDkQkG/byxf47kDMBOOtOhMTewWk2dWS2SIUxZ50AkoBoL2cTADjrHYsLJvs8cRbywNXodwFJYFSK09x9zNVIgNqd+zx4I2a9dHTywBG4Uv44KvELv+Twdx9zpP11WO69fnCNx5x2RyUP3IBjlwUS0sCoBNHXm5EjAriZVCKjrQN2MOSZXCPUWQytcCDyCrpi6u6KotscgHwbcOlRoSRWLdgBMr7gXtUKq9Xqk32VPMRujmpxV3yhlD5IPsWUinFT6+pd+9JI6Lzz5imXp1gT7HlhbOtuzvf6kZm6gKio2nHzX9QM8ET2BIgJYrPKQ1NQeCxcuEFhLxYXYqErhrboc4M4rUzgDZ35wmaZHe5bQmFvrfrgpMRzyTCJb9hftWPmWU0I6Av6hL7t5tHZ2qSkIdJd8cn8iYufWrCg4Sn0AX3Z9cPTYu9gH5x9pQinfdvMdZ/ac9L4u3ANuBZcs888Pa43Mo786CEJP3RQ5B2cKfQKrBR85l/Pn+Sj5o2d97xm0CcdAPgb3oPPoA20he/Ady0d33/1+T5bg/11sQAAAABJRU5ErkJggg==", 1, ""], ["href", "mailto:info@pegasi.io"], ["ngxSlickItem", "", 1, "slide"], ["alt", "", "width", "100%", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Funcionalidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sobre PEGASI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Magazine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tu Consulta, tu empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Transformaci\u00F3n-medica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "DeCOVIDficaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ag\u00E9ndame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nav", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Funcionalidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sobre PEGASI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Magazine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Tu Consulta, tu empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Transformaci\u00F3n-medica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "DeCOVIDficaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Ag\u00E9ndame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Tu consultorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "port\u00E1til");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Gestiona la informaci\u00F3n de tus pacientes y la de tu cl\u00EDnica de manera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "simple, \u00E1gil y segura.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "En cualquier lugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Hecho a tu medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "En cualquier dispositivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Alt\u00EDsima seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Estos clientes conf\u00EDan en nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ngx-slick-carousel", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AppComponent_div_119_Template, 2, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Pensamos en lo importante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "En cualquier lugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " PEGASI MED permite tener lo mejor de dos mundos: una conexi\u00F3n local a la plataforma que no depende del Internet, y una conexi\u00F3n a nuestro servidor remoto o nube que no depende de un dispositivo en particular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Hecho a tu medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Guarde la informaci\u00F3n demogr\u00E1fica de sus pacientes y la historia m\u00E9dica adaptada a su especialidad, genere informes m\u00E9dicos, r\u00E9cipes, constancias, almacene im\u00E1genes y elabore estad\u00EDsticas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "En cualquier dispositivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "PEGASI MED es un plataforma vers\u00E1til basada en navegador Web, que funciona en cualquier dispositivo (Tablets, Smartphones, laptops, PCs, etc) y bajo cualquier sistema operativo (Windows, MacOS, Linux, entre otros)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Alt\u00EDsima seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "PEGASI MED cumple por completo el est\u00E1ndar de seguridad norteamericano HIPAA (Health Insurance Portability and Accountability Act), para asegurar a nuestros clientes y a sus pacientes la seguridad de su informaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " En PEGASI construimos d\u00EDa a d\u00EDa un mundo donde el acceso claro y seguro a la informaci\u00F3n de Salud es una garant\u00EDa para pacientes, practicantes y proveedores de servicios\u201D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Luis Santiago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "CEO \u2013 PEGASI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\u25BA");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "section", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Conoce nuestras funcionalidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Consultorio virtual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Manejo 360\u00B0 de tu paciente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " M\u00E1s de 30 tipos de registros m\u00E9dicos electr\u00F3nicos, que contienen las herramientas necesarias para cada especialista. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Manejo de laboratorio cl\u00EDnico y patol\u00F3gico en l\u00EDnea.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Gesti\u00F3n de archivos imagenol\u00F3gicos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Suite de creaci\u00F3n de estad\u00EDsticas personalizadas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Encontrar\u00E1s registro de r\u00E9cipes, asistencia, informes m\u00E9dicos y quir\u00FArgicos, ex\u00E1menes y mucho m\u00E1s. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Gestiona las citas m\u00E9dicas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Completa la planilla de datos demogr\u00E1ficos de tu paciente, con el objetivo de permitir su f\u00E1cil contacto y de emplearlos en estudios estad\u00EDsticos avanzados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Agenda citas al instante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Tendr\u00E1s la posibilidad de programar visitas sucesivas a un mismo paciente desde la opci\u00F3n de planificaci\u00F3n de citas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Plan de cirug\u00EDas y de tratamientos siempre a tu alcance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Teleconsulta Integrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Controla el flujo de trabajo de tus teleconsultas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Habla con tu paciente y escribe su historial en vivo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Maneja tu sala de espera virtual de manera muy sencilla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Sesi\u00F3n optimizada para cualquier dispositivo con c\u00E1mara.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " Genera ingresos desde casa atendiendo tus pacientes con nuestras videollamadas y lleva su registro m\u00E9dico online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "section", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Trabajamos bajo los m\u00E1s altos est\u00E1ndares de calidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "section", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Beneficios que hacen la diferencia en la industria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Crear tu propio registro m\u00E9dico.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Gestionar tus citas medicas y llevar registro con o sin internet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Interactuar con tus pacientes, personal o remotamente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Crear tus estad\u00EDsticas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Acceder desde cualquier dispositivo y cualquier lugar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Mantener una alta seguridad de tus datos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Reg\u00EDstrate Ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "section", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Nuestros socios a nivel global apoyan nuestro crecimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "ngx-slick-carousel", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](275, AppComponent_div_275_Template, 2, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "section", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " DOP $\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "2,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "/mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Prueba gratuita de 14 d\u00EDas. Pago mensual de\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "DOP $2,500.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Quiero 1 mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " DOP $\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "2,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "/mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\u00A0Prueba gratuita de 14 d\u00EDas. Pago anual de\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "DOP $ 24,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Quiero 1 a\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Ahorra 12.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " DOP $\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "2,250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "/mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Prueba gratuita de 14 d\u00EDas. Pago semestral de\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "DOP $ 13,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Quiero 6 meses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Ahorra 30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Plan Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " Cont\u00E1ctanos para obtener m\u00E1s informaci\u00F3n sobre licencias por volumen, personalizaci\u00F3n y otras formas de pago.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Contactar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "section", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " \u00A1D\u00E9janos tus datos y nosotros te contactamos! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "label", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "label", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "textarea", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "button", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "img", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "section", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Reconocimientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "ngx-slick-carousel", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](393, AppComponent_div_393_Template, 2, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, " (C) 2020 PEGASI International, Inc. Todos los derechos reservados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "ul", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "li", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "li", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "li", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "li", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "img", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "DeCOVIDficaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Transformaci\u00F3n Medica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Tu Consulta, tu empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Magazine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, " Nosotros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Sobre Pegasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, " Rep. Dominicana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Calle Mois\u00E9s Garc\u00EDa # 5, Edificio Le Residence. Santo Domingo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "\nCalle Monjitas 550, Oficina 19. Santiago. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, " Estados Unidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](450, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "\n112 Capitol Trail. Newark, Delaware 19711. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " Tel\u00E9fono: +1 (829) 771-3468.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "info@pegasi.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](117);
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
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"]], styles: ["@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n.containerNav[_ngcontent-%COMP%] {\n  display: flex;\n}\na[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n@media only screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 840px) {\n  section[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  footer[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 840px) {\n  footer[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  footer[_ngcontent-%COMP%]   .textwidget[_ngcontent-%COMP%] {\n    border-top: 1px solid white;\n    padding-top: 30px;\n    padding-bottom: 20px;\n    margin-top: 50px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .desktopMenu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 840px) {\n  .desktopMenu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.desktopMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  margin-right: 15px;\n}\n@media (max-width: 1024px) {\n  .desktopMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px;\n  }\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 840px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.navbar[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1071;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  min-height: 4rem;\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: white;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n}\n@media only screen and (max-width: 600px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-top: 3px solid #2ea3f2;\n  font-weight: 600;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 190px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-section[_ngcontent-%COMP%]   .blueLightButton[_ngcontent-%COMP%] {\n  background-color: #46c8f4;\n  color: white;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 30px;\n  line-height: 1.4rem;\n  margin-right: 10px;\n  margin-left: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-section[_ngcontent-%COMP%]   .blueDarkButton[_ngcontent-%COMP%] {\n  background-color: #007eff;\n  color: white;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 30px;\n  line-height: 1.2rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #006a9f;\n  font-weight: 600;\n}\n.heroSlider[_ngcontent-%COMP%] {\n  padding-top: 110px;\n  position: relative;\n  background: #f0f3fc;\n  \n  \n  \n  background: linear-gradient(to bottom, #f0f3fc 0%, #fbfaff 50%, #fbfaff 51%, #ffffff 99%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#f0f3fc\", endColorstr=\"#ffffff\",GradientType=0 );\n  \n}\n@media only screen and (max-width: 600px) {\n  .heroSlider[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 840px) {\n  .heroSlider[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 1024px) {\n  .heroSlider[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.heroSlider[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.heroSlider[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  display: table;\n  position: absolute;\n  left: -100px;\n  top: 99px;\n}\n.heroSlider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #206a9c;\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.heroSlider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #46c8f4;\n  font-size: 4rem;\n  font-weight: 700;\n}\n.heroSlider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #194f73;\n  font-size: 1rem;\n  font-weight: 200;\n}\n.heroSlider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.heroSlider[_ngcontent-%COMP%]   .containerHeroImage[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.heroSlider[_ngcontent-%COMP%]   .containerHeroImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 46px;\n}\n.heroSlider[_ngcontent-%COMP%]   .containerHeroImage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  line-height: 0.9rem;\n  margin-top: 10px;\n}\n.heroSlider[_ngcontent-%COMP%]   .bannerImage[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.heroSlider[_ngcontent-%COMP%]   .bannerImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n}\n@media only screen and (max-width: 600px) {\n  .heroSlider[_ngcontent-%COMP%]   .bannerImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n@media (max-width: 840px) {\n  .heroSlider[_ngcontent-%COMP%]   .bannerImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 130px;\n  }\n}\n.sectionTwo[_ngcontent-%COMP%] {\n  margin-top: 130px;\n  margin-bottom: 130px;\n  text-align: center;\n}\n@media only screen and (max-width: 600px) {\n  .sectionTwo[_ngcontent-%COMP%] {\n    margin-top: 80px;\n    margin-bottom: 80px;\n  }\n}\n@media (max-width: 1024px) {\n  .sectionTwo[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionTwo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 70px;\n  font-weight: 700;\n}\n.sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.3);\n  padding: 25px;\n  min-height: 510px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n@media (max-width: 840px) {\n  .sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n.sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.5rem;\n  margin-bottom: 0px;\n}\n.sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 120px;\n}\n.sectionTwo[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.sectionThree[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sectionThree[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 30px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin-bottom: 20px;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media only screen and (max-width: 600px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n    position: relative;\n    transform: none;\n    -ms-transform: none;\n    top: 0px;\n  }\n}\n@media (max-width: 840px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n    position: relative;\n    transform: none;\n    -ms-transform: none;\n    top: 0px;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 300;\n}\n@media only screen and (max-width: 600px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.56rem !important;\n  margin-bottom: 80px;\n  line-height: 2.2rem !important;\n  margin-bottom: 80px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem !important;\n    margin-bottom: 80px;\n    line-height: 2.2rem !important;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: \" \";\n  width: 30px;\n  height: 30px;\n  background-image: url(/assets/quote.png);\n  position: absolute;\n  background-repeat: no-repeat;\n  left: -40px;\n  top: -40px;\n}\n@media (max-width: 1024px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerQuote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n    left: -20px;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (max-width: 840px) {\n  .sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .innerPlay[_ngcontent-%COMP%] {\n  max-width: 500px;\n  position: relative;\n  margin: auto;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%]   .waves[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  animation: waves 3s ease-in-out infinite;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%]   .wave-1[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%]   .wave-2[_ngcontent-%COMP%] {\n  animation-delay: 0.6s;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%]   .wave-3[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   .btn-waves[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  z-index: 2;\n  position: absolute;\n  top: 0 !important;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n.sectionThree[_ngcontent-%COMP%]   .containerPlayVideo[_ngcontent-%COMP%]   .main-video[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #46c8f4;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  border-radius: 90px;\n  background: #fff;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n@keyframes waves {\n  0% {\n    transform: scale(0.2, 0.2);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n  50% {\n    opacity: 0.9;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n  }\n  100% {\n    transform: scale(0.9, 0.9);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n}\n.sectionFour[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  margin-bottom: 120px;\n}\n@media (max-width: 600px) {\n  .sectionFour[_ngcontent-%COMP%] {\n    margin-top: 80px;\n    margin-bottom: 80px;\n  }\n}\n@media (max-width: 1024px) {\n  .sectionFour[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionFour[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.sectionFour[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n}\n.sectionFour[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n.sectionFour[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.8rem;\n  margin-top: 30px;\n}\n.sectionFour[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n  list-style-position: inside;\n}\n.sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%] {\n  margin-bottom: 120px;\n}\n.sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   .rightAlign[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media only screen and (max-width: 600px) {\n  .sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 50px;\n  }\n  .sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n.sectionFour[_ngcontent-%COMP%]   .columnInformation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.sectionFive[_ngcontent-%COMP%] {\n  margin-top: 130px;\n  margin-bottom: 130px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n  .sectionFive[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionFive[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 40px;\n  font-weight: 700;\n}\n.sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.3);\n  padding: 25px;\n  min-height: 510px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n.sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.5rem;\n  margin-bottom: 0px;\n}\n.sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 120px;\n}\n.sectionFive[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.sectionSix[_ngcontent-%COMP%] {\n  margin-bottom: 130px;\n}\n@media (max-width: 1024px) {\n  .sectionSix[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionSix[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 300;\n}\n.sectionSix[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 700;\n  margin-bottom: 30px;\n}\n.sectionSix[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n@media only screen and (max-width: 600px) {\n  .sectionSix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .sectionSix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media (max-width: 840px) {\n  .sectionSix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.sectionSeven[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n  .sectionSeven[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionSeven[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 70px;\n  font-weight: 700;\n}\n.sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.3);\n  padding: 25px;\n  min-height: 510px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n.sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.5rem;\n  margin-bottom: 0px;\n}\n.sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 120px;\n}\n.sectionSeven[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.sectionEight[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 130px;\n}\n.sectionEight[_ngcontent-%COMP%]   .containerPrices[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.sectionEight[_ngcontent-%COMP%]   .priceContainer[_ngcontent-%COMP%] {\n  margin: 20px;\n  min-height: 345px;\n  transition: box-shadow 0.3s;\n  border: 2px solid #006a9f;\n  border-radius: 30px;\n  \n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 30px;\n  padding-bottom: 0px;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #006a9f;\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  border-radius: 20px;\n  padding-bottom: 10px;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #006a9fe3;\n  text-decoration: none;\n}\n.sectionEight[_ngcontent-%COMP%]   .headPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #8080802e;\n}\n.sectionEight[_ngcontent-%COMP%]   .headPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .price_number[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: bolder !important;\n}\n.sectionEight[_ngcontent-%COMP%]   .headPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .price_text_time[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  color: #808080ad;\n}\n.sectionEight[_ngcontent-%COMP%]   .bodyPrice[_ngcontent-%COMP%] {\n  min-height: 90px;\n}\n.sectionEight[_ngcontent-%COMP%]   .bodyPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-height: 50px;\n  font-size: 0.8rem;\n  line-height: 1.3rem;\n  text-align: center;\n  color: #808080a6;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #cecece30;\n  border-radius: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 13px;\n  margin: auto;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background: #cecece20;\n}\n.sectionEight[_ngcontent-%COMP%]   .footerPrice[_ngcontent-%COMP%]   .containerDiscount[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.sectionEight[_ngcontent-%COMP%]   .promoted[_ngcontent-%COMP%] {\n  box-shadow: 0 0 11px #00c8f7;\n}\n.sectionEight[_ngcontent-%COMP%]   .promoted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #4cadc9;\n  background-image: linear-gradient(to right, #4cadc9 0%, #5472d2 50%, #5472d2 100%);\n}\n.sectionEight[_ngcontent-%COMP%]   .withPadding[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.sectionNine[_ngcontent-%COMP%] {\n  margin-bottom: 160px;\n}\n@media (max-width: 1024px) {\n  .sectionNine[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionNine[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #eff1fe;\n  border-radius: 4px;\n  padding-left: 15px;\n  height: 55px;\n  line-height: 55px;\n  clear: both;\n  border: 1px solid #e1e1e1;\n  background-color: #eff1fe !important;\n  padding-left: 15px !important;\n}\n.sectionNine[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  background: #eff1fe;\n  padding: 15px 15px;\n  height: 150px;\n  border-radius: 4px;\n}\n.sectionNine[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 600;\n  margin-bottom: 50px;\n}\n.sectionNine[_ngcontent-%COMP%]   .containerImageContactUs[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n.sectionNine[_ngcontent-%COMP%]   .containerImageContactUs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media only screen and (max-width: 600px) {\n  .sectionNine[_ngcontent-%COMP%]   .containerImageContactUs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 50px;\n    top: 0px;\n    transform: none;\n  }\n}\n@media (max-width: 840px) {\n  .sectionNine[_ngcontent-%COMP%]   .containerImageContactUs[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.sectionTen[_ngcontent-%COMP%] {\n  margin-bottom: 160px;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n  .sectionTen[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n.sectionTen[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 70px;\n  font-weight: 700;\n}\n.sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.3);\n  padding: 25px;\n  min-height: 510px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n.sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.5rem;\n  margin-bottom: 0px;\n}\n.sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 120px;\n}\n.sectionTen[_ngcontent-%COMP%]   .containerDescrition[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\nfooter[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  color: white;\n  padding-bottom: 50px;\n  background-color: #222222;\n}\n@media (max-width: 1024px) {\n  footer[_ngcontent-%COMP%] {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: 0px;\n  padding-left: 0px;\n}\nfooter[_ngcontent-%COMP%]   .et-social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  display: inline-block;\n  margin-left: 20px;\n}\nfooter[_ngcontent-%COMP%]   .textwidget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7Ozs7O0lBS0UsaUJBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxhQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUlJO0VBREo7SUFFUSxrQkFBQTtJQUNBLG1CQUFBO0VBQU47QUFDRjtBQUNJO0VBTEo7SUFPUSxrQkFBQTtJQUNBLG1CQUFBO0VBQ047QUFDRjtBQU9JO0VBREo7SUFFUSxrQkFBQTtJQUNBLG1CQUFBO0VBSE47QUFDRjtBQUlJO0VBTEo7SUFPUSxrQkFBQTtJQUNBLG1CQUFBO0VBRk47RUFLTTtJQUNJLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0VBSFY7QUFDRjtBQVNJO0VBRko7SUFHUSxhQUFBO0VBTE47QUFDRjtBQU9JO0VBTko7SUFRUSxhQUFBO0VBTE47QUFDRjtBQVFLO0VBQ0Msa0JBQUE7RUFFQSxrQkFBQTtBQVBOO0FBY0c7RUFWRTtJQVlELGlCQUFBO0lBQ0EsWUFBQTtFQVpGO0FBQ0Y7QUFrQkE7RUFDSSxhQUFBO0FBZko7QUFpQkk7RUFISjtJQUlRLGNBQUE7RUFkTjtBQUNGO0FBaUJJO0VBUko7SUFVUSxjQUFBO0VBZk47QUFDRjtBQW9CQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFRQSx1QkFBQTtFQUdBLHNDQUFBO0FBeEJGO0FBZUU7RUFWRjtJQVdJLGlCQUFBO0lBQ0Esa0JBQUE7RUFaRjtBQUNGO0FBcUJJO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQW5CTjtBQTBCSTtFQUNFLFlBQUE7QUF4Qk47QUEyQkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFB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ZUFBQTtFQTNHVjtBQUNGO0FBOEdLO0VBbEJIO0lBbUJNLGFBQUE7RUEzR047QUFDRjtBQWtIQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUEvR0Y7QUFnSEU7RUFIRjtJQU1JLGtCQUFBO0lBQ0EsbUJBQUE7RUEvR0Y7QUFDRjtBQWlIRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQS9HSjtBQWtIRTtFQUNFLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWhISjtBQWlISTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQS9HTjtBQWlISTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQS9HTjtBQWtISTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBaEhOO0FBcUhBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQWxIRjtBQW1IRTtFQUxGO0lBUUksa0JBQUE7SUFDQSxtQkFBQTtFQWxIRjtBQUNGO0FBb0hFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBbEhKO0FBcUhJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFuSE47QUF3SE07RUFDSSxrQkFBQTtBQXRIVjtBQXlIRTtFQUNJLFlBQUE7QUF2SE4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNvbnRhaW5lcixcclxuICAuY29udGFpbmVyLWxnLFxyXG4gIC5jb250YWluZXItbWQsXHJcbiAgLmNvbnRhaW5lci1zbSxcclxuICAuY29udGFpbmVyLXhsIHtcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lck5hdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZm9vdGVye1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcblxyXG4gICAgICAgIC50ZXh0d2lkZ2V0e1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4OztcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG59XHJcblxyXG4uZGVza3RvcE1lbnV7XHJcbiAgICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuXHJcbiAgICAgfVxyXG4gICAgIGF7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgXHJcbiBcclxuXHJcbiAgIH1cclxuXHJcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgICAgIFxyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcblxyXG5cclxuIH1cclxuICAgICB9XHJcbn1cclxuXHJcbi5oYW1idXJnZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuXHJcbiAgICAgfVxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDcxO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDRyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gIC5kcm9wZG93biB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMmVhM2YyO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1zZWN0aW9uIHtcclxuXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibHVlTGlnaHRCdXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZjOGY0O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibHVlRGFya0J1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdlZmY7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjMDA2YTlmO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlcm9TbGlkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiBiYWNrZ3JvdW5kOiAjZjBmM2ZjOyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2YwZjNmYyAwJSwgI2ZiZmFmZiA1MCUsICNmYmZhZmYgNTElLCAjZmZmZmZmIDk5JSk7IC8qIEZGMy42LTE1ICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICNmMGYzZmMgMCUsI2ZiZmFmZiA1MCUsI2ZiZmFmZiA1MSUsI2ZmZmZmZiA5OSUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgI2YwZjNmYyAwJSwjZmJmYWZmIDUwJSwjZmJmYWZmIDUxJSwjZmZmZmZmIDk5JSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2YwZjNmYycsIGVuZENvbG9yc3RyPScjZmZmZmZmJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICAgfVxyXG5cclxuICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLnBsYXl7XHJcbiAgICAgICBcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0xMDBweDtcclxuICAgICAgICB0b3A6IDk5cHg7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiAjMjA2YTljO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjNDZjOGY0O1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICMxOTRmNzM7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lckhlcm9JbWFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMC45cmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhbm5lckltYWdlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4OztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzMHB4OztcclxuXHJcblxyXG4gICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uVHdvIHtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTMwcHg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIFxyXG4gICAgICAgfVxyXG4gICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAgICAgICBcclxuICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG5cclxuICAgfVxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lckRlc2NyaXRpb24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDE3NSwgMTc1LCAxNzUsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgbWluLWhlaWdodDogNTEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb25UaHJlZSB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5jb250YWluZXJRdW90ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAgICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjU2cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvcXVvdGUucG5nKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBsZWZ0OiAtNDBweDtcclxuICAgICAgICB0b3A6IC00MHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgICAgICBcclxuICAgICAgICAgIGxlZnQ6IC0yMHB4O1xyXG5cclxuICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lclBsYXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgbWFyZ2luLXRvcDogMTAwcHg7O1xyXG5cclxuICAgICB9XHJcbiAgICAuaW5uZXJQbGF5IHtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvLWJ0biB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA0MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAudmlkZW8tYnRuIC5idG4td2F2ZXMgLndhdmVzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHdhdmVzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgICBhbmltYXRpb246IHdhdmVzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlby1idG4gLmJ0bi13YXZlcyAud2F2ZS0xIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgfVxyXG4gICAgLnZpZGVvLWJ0biAuYnRuLXdhdmVzIC53YXZlLTIge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgfVxyXG4gICAgLnZpZGVvLWJ0biAuYnRuLXdhdmVzIC53YXZlLTMge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvLWJ0biAuYnRuLXdhdmVzIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tdmlkZW8gLnZpZGVvLWJ0biBzcGFuIHtcclxuICAgICAgY29sb3I6ICM0NmM4ZjQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHdhdmVzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT05MClcIjtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHdhdmVzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT05MClcIjtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbkZvdXIge1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG5cclxuIFxyXG4gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAgICAgICBcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblxyXG4gfVxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxuICB9XHJcblxyXG4gIC5jb2x1bW5JbmZvcm1hdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxuLnJpZ2h0QWxpZ257XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVse1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uRml2ZSB7XHJcbiAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAgICAgICBcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblxyXG4gfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lckRlc2NyaXRpb24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDE3NSwgMTc1LCAxNzUsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgbWluLWhlaWdodDogNTEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvblNpeCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTMwcHg7XHJcbiBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAgICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG5cclxuIH1cclxuXHJcbiAgbGkge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBvbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgIGltZ3tcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBpbWd7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gfVxyXG59XHJcblxyXG4uc2VjdGlvblNldmVuIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAgICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG5cclxuIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJEZXNjcml0aW9uIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjMpO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb25FaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMzBweDtcclxuXHJcbiAgLmNvbnRhaW5lclByaWNlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnByaWNlQ29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM0NXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNmE5ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJQcmljZSBhIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDZhOWY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzAwNmE5ZmUzO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZFByaWNlIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAucHJpY2VfbnVtYmVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJpY2VfdGV4dF90aW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwODBhZDtcclxuICAgICAgfVxyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODAyZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib2R5UHJpY2Uge1xyXG4gICAgbWluLWhlaWdodDogOTBweDtcclxuICAgIHAge1xyXG4gICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzgwODA4MGE2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvb3RlclByaWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2NlY2VjZTMwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NlY2VjZTIwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lckRpc2NvdW50IHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9tb3RlZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTFweCAjMDBjOGY3O1xyXG4gICAgYSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FkYzk7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIGxlZnQsXHJcbiAgICAgICAgIzRjYWRjOSAwJSxcclxuICAgICAgICAjNTQ3MmQyIDUwJSxcclxuICAgICAgICAjNTQ3MmQyIDEwMCVcclxuICAgICAgKTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICM0Y2FkYzkgMCUsXHJcbiAgICAgICAgIzU0NzJkMiA1MCUsXHJcbiAgICAgICAgIzU0NzJkMiAxMDAlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud2l0aFBhZGRpbmcge1xyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uTmluZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuXHJcbiB9XHJcbiAgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjFmZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjFmZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJJbWFnZUNvbnRhY3RVcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICBcclxuICAgICB9XHJcbiAgfVxyXG4gICAgICAgXHJcblxyXG59XHJcblxyXG4uc2VjdGlvblRlbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAgICAgICBcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblxyXG4gfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyRGVzY3JpdGlvbiB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMTc1LCAxNzUsIDE3NSwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuXHJcbiB9XHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLmV0LXNvY2lhbC1pY29ucyB7XHJcbiAgICBsaSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHR3aWRnZXR7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gIH1cclxuICBhe1xyXG4gICAgICBjb2xvcjp3aGl0ZVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
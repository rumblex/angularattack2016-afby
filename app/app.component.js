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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var book_center_component_1 = require('./components/books/book-center.component');
var home_component_1 = require('./components/home/home.component');
var book_service_1 = require('./components/books/book.service');
var about_us_component_1 = require('./components/home/about-us/about-us.component');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.onclick = function () {
        this.router.navigate(['Home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [book_service_1.BookService],
            template: "\n    <div (click)=\"onclick()\" class=\"jumbotron\">\n        <div class=\"page-header\">\n            <h2><big>Shared Library</big><small>Because we should never stop reading</small></h2>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n    "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/books/...', name: 'BookCenter', component: book_center_component_1.BookCenterComponent },
            { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: '/aboutUs', name: 'AboutUs', component: about_us_component_1.AboutUsComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
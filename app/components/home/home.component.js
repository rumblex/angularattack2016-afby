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
var new_books_component_1 = require('./lists/new-books.component');
var random_book_component_1 = require('./lists/random-book.component');
var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.onclickUserView = function () {
        this._router.navigate(['BookCenter', 'BookUserComponent']);
    };
    HomeComponent.prototype.onclick = function () {
        this._router.navigate(['BookCenter']);
    };
    HomeComponent.prototype.onclickAboutUs = function () {
        this._router.navigate(['AboutUs']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [new_books_component_1.NewBooksComponent, random_book_component_1.RandomBooksComponent],
            templateUrl: "app/components/home/home.template.html"
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
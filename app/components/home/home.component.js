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
var login_service_1 = require('./../users/login.service');
var user_1 = require('./../users/user');
var HomeComponent = (function () {
    function HomeComponent(_router, _loginService) {
        this._router = _router;
        this._loginService = _loginService;
        this.active = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = this._loginService.user;
    };
    HomeComponent.prototype.onclickUserView = function () {
        this._router.navigate(['BookCenter', 'BookUserComponent']);
    };
    HomeComponent.prototype.onclick = function () {
        this._router.navigate(['BookCenter']);
    };
    HomeComponent.prototype.onclickAboutUs = function () {
        this._router.navigate(['AboutUs']);
    };
    HomeComponent.prototype.resetLogin = function () {
        var _this = this;
        this.userName = "";
        this.password = "";
        this.confirmPassword = "";
        this.contact = "";
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    HomeComponent.prototype.onLogin = function () {
        var _this = this;
        var checkUser = new user_1.LibUser(this.userName, this.password);
        this._loginService.login(checkUser)
            .subscribe(function (data) {
            _this.user = data;
            $("#cLoginForm").modal('hide');
        });
    };
    HomeComponent.prototype.onLogout = function () {
        var _this = this;
        this._loginService.logout()
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    HomeComponent.prototype.onSignUp = function () {
        var _this = this;
        var checkUser = new user_1.LibUser(this.userName, this.password, this.contact);
        this._loginService.login(checkUser)
            .subscribe(function (data) {
            _this.user = data;
            $("#cSignUpForm").modal('hide');
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [new_books_component_1.NewBooksComponent, random_book_component_1.RandomBooksComponent],
            templateUrl: "app/components/home/home.template.html"
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, login_service_1.LoginService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
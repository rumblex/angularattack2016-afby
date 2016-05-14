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
var book_service_1 = require('../book.service');
var BookDetailComponent = (function () {
    function BookDetailComponent(_bookService, routeParams) {
        this._bookService = _bookService;
        this.routeParams = routeParams;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.routeParams.get('id');
        this._bookService.getBook(this.id)
            .subscribe(function (data) { _this.book = data; });
        this._bookService.getUsersForBook(this.id)
            .subscribe(function (data) { _this.listUser = data; });
    };
    BookDetailComponent = __decorate([
        core_1.Component({
            selector: 'book-detail',
            templateUrl: 'app/components/books/book-detail/book-detail.template.html'
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, router_deprecated_1.RouteParams])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map
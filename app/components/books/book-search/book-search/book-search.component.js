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
var book_service_1 = require('../../book.service');
var book_list_component_1 = require('./../book-list/book-list.component');
var BookSearchComponent = (function () {
    function BookSearchComponent(_bookService, router, routeParams) {
        this._bookService = _bookService;
        this.router = router;
        this.routeParams = routeParams;
    }
    BookSearchComponent.prototype.ngOnInit = function () {
        this.doSearch();
    };
    BookSearchComponent.prototype.onSubmit = function () {
        this.router.navigate(['BookSearchComponent', { query: this.textSearch }]);
        this.doSearch();
    };
    BookSearchComponent.prototype.doSearch = function () {
        var _this = this;
        this.textSearch = this.routeParams.get('query');
        if (this.textSearch) {
            this._bookService.getMockBooks(this.textSearch)
                .subscribe(function (data) {
                _this.listResults = data;
            });
        }
    };
    BookSearchComponent.prototype.onClear = function () {
        this.listResults = null;
        this.textSearch = "";
        this.router.navigate(['BookSearchComponent', { query: this.textSearch }]);
    };
    BookSearchComponent = __decorate([
        core_1.Component({
            selector: 'book-search',
            templateUrl: 'app/components/books/book-search/book-search/book-search.template.html',
            directives: [book_list_component_1.BookListComponent],
            providers: [book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], BookSearchComponent);
    return BookSearchComponent;
}());
exports.BookSearchComponent = BookSearchComponent;
//# sourceMappingURL=book-search.component.js.map
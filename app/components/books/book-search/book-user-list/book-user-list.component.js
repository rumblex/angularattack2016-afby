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
var book_1 = require('../../book');
var book_service_1 = require('../../book.service');
var book_list_component_1 = require('./../book-list/book-list.component');
var BookUserComponent = (function () {
    function BookUserComponent(_bookService, router, routeParams) {
        this._bookService = _bookService;
        this.router = router;
        this.routeParams = routeParams;
        this.active = true;
        this.showSucccess = false;
    }
    BookUserComponent.prototype.ngOnInit = function () {
        this.book = new book_1.Book();
        this.doSearch();
    };
    BookUserComponent.prototype.onSubmit = function () {
        this.doSearch();
    };
    BookUserComponent.prototype.doSearch = function () {
        var _this = this;
        if (this.textSearch) {
            this._bookService.getBooks(this.textSearch)
                .subscribe(function (data) {
                _this.listResults = data;
            });
        }
        else {
            this._bookService.getAllUserBooks()
                .subscribe(function (data) {
                _this.listResults = data;
            });
        }
    };
    BookUserComponent.prototype.onClear = function () {
        this.listResults = null;
        this.textSearch = "";
        this.router.navigate(['BookCenter', 'BookUserComponent', { query: this.textSearch }]);
    };
    BookUserComponent.prototype.onAddNew = function () {
        var _this = this;
        this.book = new book_1.Book();
        this.showSucccess = false;
        this.active = false;
        this.doSearch();
        setTimeout(function () { return _this.active = true; }, 0);
    };
    BookUserComponent.prototype.onSaveBook = function () {
        var _this = this;
        this.book.genres = this.genreString.split(',');
        this.book.sharable = true;
        console.log(this.book.id);
        if (this.book.id == null) {
            console.log("inside");
            this._bookService.saveBook(this.book)
                .subscribe(function (data) {
                _this.onAddNew();
                _this.showSucccess = true;
            });
        }
        else {
            this._bookService.updateBook(this.book)
                .subscribe(function (data) {
                _this.onAddNew();
                _this.showSucccess = true;
            });
        }
    };
    BookUserComponent.prototype.onEditBook = function (book) {
        this.book = book;
        $("#addBook").modal();
    };
    BookUserComponent.prototype.onDeleteBook = function (book) {
        var _this = this;
        this._bookService.deleteBook(book)
            .subscribe(function (data) {
            _this.doSearch();
            _this.showSucccess = true;
        });
    };
    BookUserComponent = __decorate([
        core_1.Component({
            selector: 'book-user-list',
            templateUrl: 'app/components/books/book-search/book-user-list/book-user-list.template.html',
            directives: [book_list_component_1.BookListComponent]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], BookUserComponent);
    return BookUserComponent;
}());
exports.BookUserComponent = BookUserComponent;
//# sourceMappingURL=book-user-list.component.js.map
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
var Observable_1 = require('rxjs/Observable');
var user_1 = require('../users/user');
var book_1 = require('./book');
var request_params_1 = require('../request.params');
var http_common_service_1 = require('../http-common.service');
var BookService = (function () {
    function BookService(_httpService) {
        this._httpService = _httpService;
        this.listBooks = [
            new book_1.Book({ id: 1, title: 'abc', authorName: 'author 111' }),
            new book_1.Book({ id: 2, title: 'pqr', authorName: 'author 211' }),
            new book_1.Book({ id: 3, title: 'xyz', authorName: 'author 311' }),
            new book_1.Book({ id: 4, title: 'lmn', authorName: 'author 411' })
        ];
        this.listUser = [
            new user_1.LibUser("test user", "mumbai", "1111111111111"),
            new user_1.LibUser("john doe", "mumbai", "1111111111111"),
            new user_1.LibUser("jane doe", "mumbai", "1111111111111"),
            new user_1.LibUser("random user", "mumbai", "1111111111111"),
            new user_1.LibUser("bob smith", "mumbai", "1111111111111"),
            new user_1.LibUser("Yun Lee", "mumbai", "1111111111111"),
            new user_1.LibUser("Aaron", "mumbai", "1111111111111")
        ];
    }
    BookService.prototype.getMockBooks = function (searchString) {
        return Observable_1.Observable.of(this.listBooks);
        ;
    };
    BookService.prototype.getBooks = function (searchString) {
        var param = new request_params_1.RequestParameters();
        param.key = 'searchText';
        param.value = searchString;
        var params = new Array();
        params.push(param);
        return this._httpService.callSearch("book/fuzzySearch", params);
    };
    BookService.prototype.getBook = function (id) {
        return Observable_1.Observable.of(this.listBooks[+id - 1]);
    };
    BookService.prototype.getUsersForBook = function (id) {
        return Observable_1.Observable.of(this.listUser);
    };
    BookService.prototype.getUserBooks = function (searchString) {
        return Observable_1.Observable.of(this.listBooks);
    };
    BookService.prototype.getAllUserBooks = function () {
        return Observable_1.Observable.of(this.listBooks);
    };
    BookService.prototype.saveBook = function (book) {
        book.id = this.listBooks.length + 1;
        this.listBooks.push(book);
        return Observable_1.Observable.of(book);
    };
    BookService.prototype.updateBook = function (book) {
        book.id = this.listBooks.length + 1;
        this.listBooks.push(book);
        return Observable_1.Observable.of(book);
    };
    BookService.prototype.deleteBook = function (book) {
        this.listBooks.pop();
        return Observable_1.Observable.of(book);
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_common_service_1.HttpServies])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map
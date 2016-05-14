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
var book_1 = require('./book');
var BookService = (function () {
    function BookService() {
        this.listBooks = [
            new book_1.Book({ id: 1, title: 'abc' }),
            new book_1.Book({ id: 2, title: 'pqr' }),
            new book_1.Book({ id: 3, title: 'xyz' }),
            new book_1.Book({ id: 4, title: 'lmn' }),
        ];
    }
    BookService.prototype.getBooks = function (searchString) {
        return Observable_1.Observable.of(this.listBooks);
        ;
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map
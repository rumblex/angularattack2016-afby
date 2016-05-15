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
var book_item_component_1 = require('../book-item/book-item.component');
var BookListComponent = (function () {
    function BookListComponent() {
        this.editBook = new core_1.EventEmitter();
        this.deleteBook = new core_1.EventEmitter();
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent.prototype.onEdit = function (book) {
        this.editBook.emit(book);
    };
    BookListComponent.prototype.onDelete = function (book) {
        this.deleteBook.emit(book);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BookListComponent.prototype, "itemList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BookListComponent.prototype, "editBook", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BookListComponent.prototype, "deleteBook", void 0);
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'book-list',
            directives: [book_item_component_1.BookItemComponent],
            template: "\n    <div class=\"row\">     \n        <div *ngFor=\"let item of itemList\">\n            <book-item (bookEdited)=\"onEdit($event)\" (bookDeleted)=\"onDelete($event)\"  [book] = item></book-item>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=book-list.component.js.map
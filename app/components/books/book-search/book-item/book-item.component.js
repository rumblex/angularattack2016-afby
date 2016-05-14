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
var BookItemComponent = (function () {
    function BookItemComponent(router) {
        this.router = router;
    }
    BookItemComponent.prototype.ngOnInit = function () {
    };
    BookItemComponent.prototype.onclick = function () {
        //this.router.navigate([this.item.action] )
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], BookItemComponent.prototype, "item", void 0);
    BookItemComponent = __decorate([
        core_1.Component({
            selector: 'book-item',
            template: "\n    <div class=\"col-sm-6 col-md-6\" (click)=\"onclick()\">\n      <div class=\"thumbnail\">\n        <div class=\"caption\">\n          <fieldset>\n            <legend>Book Details</legend>\n            <h3>Title: {{item.title}}</h3>\n            <p>Author: {{item.authorName}}</p>\n          </fieldset>\n        </div>\n      </div>\n    <div>\n    "
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], BookItemComponent);
    return BookItemComponent;
}());
exports.BookItemComponent = BookItemComponent;
//# sourceMappingURL=book-item.component.js.map
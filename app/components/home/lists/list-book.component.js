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
var ListBookComponent = (function () {
    function ListBookComponent(_router) {
        this._router = _router;
    }
    ListBookComponent.prototype.ngOnInit = function () { };
    ListBookComponent.prototype.navigate = function (id) {
        this._router.navigate(['BookCenter', 'BookDetailComponent', { 'id': id }]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ListBookComponent.prototype, "newBooks", void 0);
    ListBookComponent = __decorate([
        core_1.Component({
            selector: 'list-book',
            template: "\n        <ul class=\"list-group\">\n            <li *ngFor=\"let book of newBooks\" (click)=\"navigate(book.id)\" \n            class=\"list-group-item\">{{book.title}} by {{book.authorName}}</li>\n        </ul>\n        "
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ListBookComponent);
    return ListBookComponent;
}());
exports.ListBookComponent = ListBookComponent;
//# sourceMappingURL=list-book.component.js.map
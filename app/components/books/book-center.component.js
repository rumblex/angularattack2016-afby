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
var book_detail_component_1 = require('./book-detail/book-detail.component');
var book_search_component_1 = require('./book-search/book-search/book-search.component');
var book_user_list_component_1 = require('./book-search/book-user-list/book-user-list.component');
var book_service_1 = require('./book.service');
var BookCenterComponent = (function () {
    function BookCenterComponent() {
    }
    BookCenterComponent = __decorate([
        core_1.Component({
            template: "<router-outlet></router-outlet>",
            directives: [router_deprecated_1.RouterOutlet],
            providers: [book_service_1.BookService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'BookSearchComponent', component: book_search_component_1.BookSearchComponent, useAsDefault: true },
            { path: '/:id', name: 'BookDetailComponent', component: book_detail_component_1.BookDetailComponent },
            { path: '/user', name: 'BookUserComponent', component: book_user_list_component_1.BookUserComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], BookCenterComponent);
    return BookCenterComponent;
}());
exports.BookCenterComponent = BookCenterComponent;
//# sourceMappingURL=book-center.component.js.map
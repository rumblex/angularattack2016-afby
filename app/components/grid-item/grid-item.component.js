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
var item_1 = require('./item');
var GridItemComponent = (function () {
    function GridItemComponent() {
    }
    GridItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_1.Item)
    ], GridItemComponent.prototype, "item", void 0);
    GridItemComponent = __decorate([
        core_1.Component({
            selector: 'grid-item',
            template: "\n    <div class=\"col-sm-6 col-md-6\">\n      <div class=\"thumbnail\">\n        <img *ngIf=\"item.imageSrc != '' \" src=\"{{item.imageSrc}}\" alt=\"could not load image\">\n        <div class=\"caption\">\n          <h3>{{item.header}}</h3>\n          <p>{{item.description}}</p>\n          <p>\n           <a *ngIf=\"item.action != '' \" class=\"btn btn-primary\" role=\"button\">{{item.action}}</a>\n          </p>\n        </div>\n      </div>\n    <div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GridItemComponent);
    return GridItemComponent;
}());
exports.GridItemComponent = GridItemComponent;
//# sourceMappingURL=grid-item.component.js.map
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
var GridItemComponent = (function () {
    function GridItemComponent() {
    }
    GridItemComponent = __decorate([
        core_1.Component({
            selector: 'grid-item',
            template: "\n    <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"...\" alt=\"...\">\n      <div class=\"caption\">\n        <h3>Thumbnail label</h3>\n        <p>...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n      </div>\n    </div>\n    <div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GridItemComponent);
    return GridItemComponent;
}());
exports.GridItemComponent = GridItemComponent;
//# sourceMappingURL=grid-item.component.js.map
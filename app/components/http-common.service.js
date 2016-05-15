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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var core_1 = require('@angular/core');
var HttpServies = (function () {
    function HttpServies(http) {
        this.http = http;
        this._url = 'http://localhost:8081/';
    }
    HttpServies.prototype.callSearch = function (path, passedParams) {
        var params = new http_1.URLSearchParams();
        if (passedParams != null) {
            passedParams.forEach(function (e) {
                params.set(e.key, e.value);
            });
        }
        return this.http.get(this._url + path, { search: params }).map(this.extractData).catch(this.handleError);
    };
    HttpServies.prototype.callSave = function (path, body) {
        var header = new http_1.Headers();
        header.set('Content-Type', 'application/json');
        return this.http.post(this._url + path, body, { headers: header }).map(this.extractData).catch(this.handleError);
    };
    HttpServies.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var body = res.json();
        console.log(body);
        return body;
    };
    HttpServies.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    HttpServies = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpServies);
    return HttpServies;
}());
exports.HttpServies = HttpServies;
//# sourceMappingURL=http-common.service.js.map
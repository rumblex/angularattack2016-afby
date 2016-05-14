"use strict";
var Observable_1 = require('rxjs/Observable');
var HttpServies = (function () {
    function HttpServies(http) {
        this.http = http;
        this._url = 'http://localhost:8080/';
    }
    HttpServies.prototype.callSearch = function (path) {
        return this.http.get(this._url + path);
    };
    HttpServies.prototype.callSave = function (path, body) {
        return this.http.post(this._url + path, body);
    };
    HttpServies.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    HttpServies.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return HttpServies;
}());
exports.HttpServies = HttpServies;
//# sourceMappingURL=http-common.service.js.map
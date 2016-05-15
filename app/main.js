"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var app_component_1 = require('./app.component');
var http_common_service_1 = require('./components/http-common.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, http_common_service_1.HttpServies]);
//# sourceMappingURL=main.js.map
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/of';


import {AppComponent} from './app.component';
import {HttpServies} from './components/http-common.service';

bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,HttpServies]);

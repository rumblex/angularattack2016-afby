import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {GridListComponent} from './components/grid-list/grid-list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [ROUTER_DIRECTIVES,GridListComponent],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
 // {path: '/heroes',name: 'Heroes',component: HeroesComponent}
])
export class AppComponent { }

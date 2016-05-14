import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {GridListComponent} from './components/grid-list/grid-list.component';

@Component({
    selector: 'my-app',    
    directives: [ROUTER_DIRECTIVES,GridListComponent],
    providers: [ROUTER_PROVIDERS],
    template:`
    <div class="jumbotron">
    <h2>Shared Library</h2>
    </div>
    <grid-list></grid-list>`
    
})
@RouteConfig([
 // {path: '/heroes',name: 'Heroes',component: HeroesComponent}
])
export class AppComponent { }

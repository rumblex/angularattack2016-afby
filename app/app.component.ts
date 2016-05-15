import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {BookCenterComponent} from './components/books/book-center.component';
import {HomeComponent} from './components/home/home.component';
import { BookService } from './components/books/book.service';
import {AboutUsComponent} from './components/home/about-us/about-us.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [BookService],
    template: `
    <div (click)="onclick()" class="jumbotron">
        <div class="page-header">
            <h2><big>Shared Library</big><small>Because we should never stop reading</small></h2>
        </div>
    </div>
    <router-outlet></router-outlet>
    `

})
@RouteConfig([
    { path: '/books/...', name: 'BookCenter', component: BookCenterComponent },
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/aboutUs', name: 'AboutUs', component: AboutUsComponent }
])
export class AppComponent {

    constructor(private router: Router) { }

    onclick() {
        this.router.navigate(['Home'])
    }

}

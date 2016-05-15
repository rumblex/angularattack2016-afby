import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {BookCenterComponent} from './components/books/book-center.component';
import {HomeComponent} from './components/home/home.component';
import { BookService } from './components/books/book.service';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [BookService],
    template: `
    <div (click)="onclick()" class="jumbotron">
        <h2>Shared Library</h2>
    </div>
    <router-outlet></router-outlet>
    `

})
@RouteConfig([
    { path: '/books/...', name: 'BookCenter', component: BookCenterComponent },
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true }
])
export class AppComponent {

    constructor(private router: Router) { }

    onclick() {
        this.router.navigate(['Home'])
    }

}

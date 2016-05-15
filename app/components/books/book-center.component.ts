import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import { BookDetailComponent }   from './book-detail/book-detail.component';
import { BookSearchComponent } from './book-search/book-search/book-search.component';
import { BookUserComponent } from './book-search/book-user-list/book-user-list.component';
import { BookService } from './book.service';

@Component({
  template:  `<router-outlet></router-outlet>`,
  directives: [RouterOutlet],
  providers:  [BookService]
})
@RouteConfig([
  {path:'/',    name: 'BookSearchComponent',   component: BookSearchComponent, useAsDefault: true},
  {path:'/:id', name: 'BookDetailComponent', component: BookDetailComponent},
  {path:'/user', name: 'BookUserComponent', component: BookUserComponent},
])
export class BookCenterComponent { }

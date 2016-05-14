import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {Book} from '../book';
import {BookService} from '../book.service';
import {BookListComponent} from './book-list/book-list.component';

@Component({
    selector: 'book-search',
    templateUrl: 'app/components/books/book-search/book-search.template.html',
    directives: [BookListComponent]
})
export class BookSearchComponent implements OnInit {

    private textSearch: string;
    private listResults: Array<Book>;

    constructor(private _bookService: BookService, public router: Router, public routeParams: RouteParams) { }

    ngOnInit() {
        this.doSearch();
    }

    onSubmit() {
        this.router.navigate(['BookSearchComponent', { query: this.textSearch }]);
        this.doSearch();
    }

    doSearch() {
        this.textSearch = this.routeParams.get('query');
        if (this.textSearch) {
            this._bookService.getBooks(this.textSearch)
                .subscribe(data => {
                    this.listResults = data;
                });
        }
    }

    onClear() {
        this.listResults = null;
        this.textSearch = "";
        this.router.navigate(['BookSearchComponent', { query: this.textSearch }]);
    }

}
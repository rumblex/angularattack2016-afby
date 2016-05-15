import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {Book} from '../../book';
import {BookService} from '../../book.service';
import {BookListComponent} from './../book-list/book-list.component';

@Component({
    selector: 'book-user-list',
    templateUrl: 'app/components/books/book-search/book-user-list/book-user-list.template.html',
    directives: [BookListComponent]
})
export class BookUserComponent implements OnInit {

    private textSearch: string;
    private listResults: Array<Book>;
    private book: Book;
    active = true;
    showSucccess = false;

    constructor(private _bookService: BookService, public router: Router, public routeParams: RouteParams) { }

    ngOnInit() {
        this.book = new Book();
        this.doSearch();
    }

    onSubmit() {
        this.router.navigate(['BookSearchComponent', { query: this.textSearch }]);
        this.doSearch();
    }

    doSearch() {
        this.textSearch = this.routeParams.get('query');
        if (this.textSearch) {
            this._bookService.getUserBooks(this.textSearch)
                .subscribe(data => {
                    this.listResults = data;
                });
        } else {
            this._bookService.getAllUserBooks()
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

    onAddNew() {
        this.book = new Book();
        this.showSucccess = false;
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    onSaveBook() {
        this._bookService.saveBook(this.book)
            .subscribe(data => {
                this.onAddNew();
                this.showSucccess = true;
            });
    }

}
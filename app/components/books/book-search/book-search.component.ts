import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {BookListComponent} from './book-list/book-list.component';

@Component({
    selector: 'book-search',
    templateUrl: 'app/components/books/book-search/book-search.template.html',
    directives:[BookListComponent]
})
export class BookSearchComponent implements OnInit {

    private textSearch: string;
    private listResults: Array<Book>;

    constructor(private _bookService: BookService) { }

    ngOnInit() {
    }

    onSubmit() {
        this._bookService.getBooks(this.textSearch)
            .subscribe(data => {
                this.listResults = data;
            });
    }
}
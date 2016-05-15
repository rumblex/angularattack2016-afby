import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {ListBookComponent} from './list-book.component';
import {BookService} from '../../books/book.service';
import {Book} from '../../books/book';


@Component({
    selector: 'new-books',
    directives: [ListBookComponent],
    template: `<list-book [newBooks]="listBooks" ></list-book>`
})
export class NewBooksComponent implements OnInit {

    private listBooks: Array<Book>;

    constructor(private _bookService: BookService) { }

    ngOnInit() {
        this._bookService.getTopNewBooks()
            .subscribe(data => { this.listBooks = data; })
    }

}
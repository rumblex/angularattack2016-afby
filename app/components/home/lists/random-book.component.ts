import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {ListBookComponent} from './list-book.component';
import {BookService} from '../../books/book.service';
import {Book} from '../../books/book';


@Component({
    selector: 'random-books',
    directives: [ListBookComponent],
    template: `<list-book [newBooks]="listBooks" ></list-book>`
})
export class RandomBooksComponent implements OnInit {

    private listBooks: Array<Book>;

    constructor(private _bookService: BookService) { }

    ngOnInit() {
        this._bookService.getRandomBooks()
            .subscribe(data => { this.listBooks = data; })
    }

}
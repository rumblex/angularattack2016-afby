import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BookItemComponent} from '../book-item/book-item.component';
import {Book} from '../../book';

@Component({
    selector: 'book-list',
    directives: [BookItemComponent],
    template: `
    <div class="row">     
        <div *ngFor="let item of itemList">
            <book-item (bookEdited)="onEdit($event)" (bookDeleted)="onDelete($event)"  [book] = item></book-item>
        </div>
    </div>
    `
})
export class BookListComponent implements OnInit {

    @Input() private itemList: Array<Book>;
    @Output() private editBook: EventEmitter<Book>;
    @Output() private deleteBook: EventEmitter<Book>;
    
    constructor() {
        this.editBook = new EventEmitter<Book>();
        this.deleteBook = new EventEmitter<Book>();
    }

    ngOnInit() {

    }

    onEdit(book: Book) {
        this.editBook.emit(book);
    }

    onDelete(book: Book) {
        this.deleteBook.emit(book);
    }
}

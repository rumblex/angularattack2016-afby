import {Component, OnInit,Input} from '@angular/core';
import {BookItemComponent} from '../book-item/book-item.component';
import {Book} from '../../book';

@Component({
    selector: 'book-list',
    directives: [BookItemComponent],
    template: `
    <div class="row">     
        <div *ngFor="let item of itemList">
            <book-item [item] = item></book-item>
        </div>
    </div>
    `
})
export class BookListComponent implements OnInit {

    @Input() private itemList: Array<Book>;

    constructor() { }

    ngOnInit() {
        
    }

}

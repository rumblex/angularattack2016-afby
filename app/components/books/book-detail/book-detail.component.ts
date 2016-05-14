import {Component,OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
    selector: 'book-detail',
    templateUrl: 'app/components/books/book-detail/book-detail.template.html'
})
export class BookDetailComponent implements OnInit { 
        
    private book:Book;
    
    private active = true;    
        
    constructor(){}
    
    ngOnInit(){
    }
}
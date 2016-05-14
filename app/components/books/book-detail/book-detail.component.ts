import {Component,OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {Book} from '../book';
import {BookService} from '../book.service';
import {LibUser} from '../../users/user';

@Component({
    selector: 'book-detail',
    templateUrl: 'app/components/books/book-detail/book-detail.template.html'
})
export class BookDetailComponent implements OnInit { 
        
    private book:Book;
    private id:string;
    private listUser:Array<LibUser>;
    
    constructor(private _bookService: BookService,public routeParams: RouteParams){}
    
    ngOnInit(){
         this.id = this.routeParams.get('id');
         this._bookService.getBook(this.id)
            .subscribe(data => {this.book = data});
         this._bookService.getUsersForBook(this.id)
            .subscribe(data => {this.listUser = data});       
    }    
      
}
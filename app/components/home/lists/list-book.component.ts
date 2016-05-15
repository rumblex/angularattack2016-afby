import {Component,OnInit,Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Book} from '../../books/book';

@Component({
    selector: 'list-book',
    template: `
        <ul class="list-group">
            <li *ngFor="let book of newBooks" (click)="navigate(book.id)" 
            class="list-group-item">{{book.title}} by {{book.authorName}}</li>
        </ul>
        `
})
export class ListBookComponent implements OnInit { 
       
    @Input() private newBooks:Array<Book>;
       
    constructor(private _router:Router){}
    
    ngOnInit(){}
    
    navigate(id:any){
        this._router.navigate(['BookCenter','BookDetailComponent',{'id':id}]);
    }              
}
import {Component,OnInit,Input} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {Book} from '../../book';

@Component({
    selector: 'book-item',
    template: `
    <div class="col-sm-6 col-md-6" (click)="onclick()">
      <div class="thumbnail">
        <div class="caption">
          <fieldset>
            <legend>Book Details</legend>
            <h3>Title: {{item.title}}</h3>
            <p>Author: {{item.authorName}}</p>
          </fieldset>
        </div>
      </div>
    <div>
    `
})
export class BookItemComponent implements OnInit { 
    
    @Input() private item:Book;
    
    constructor(private router: Router){}
    
    ngOnInit(){
    }
    
    onclick(){
      //this.router.navigate([this.item.action] )
    }
}
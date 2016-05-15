import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {Book} from '../../book';

@Component({
  selector: 'book-item',
  template: `
    <div class="col-sm-6 col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Book Details</h3>
        </div>
        <div class="panel-body">
          <h3>Title: {{book.title}}</h3>
          <p>Author: {{book.authorName}}</p>
          <p>ID: {{book.bookId}}</p>
        </div>            
        <div class="panel-footer">
            <button type="button" class="btn btn-default" (click)="onclick()">View</button>    
            <button type="button" class="btn btn-default" (click)="onEdit()">Edit</button>    
            <button type="button" class="btn btn-default" (click)="onDelete()">Delete</button>    
        </div>
      </div>
    </div>
    `
})
export class BookItemComponent implements OnInit {

  @Input() private book: Book=new Book();
  @Output() private bookEdited: EventEmitter<Book>;
  @Output() private bookDeleted: EventEmitter<Book>;

  constructor(private router: Router) {
    this.bookEdited = new EventEmitter<Book>();
    this.bookDeleted = new EventEmitter<Book>();
  }

  ngOnInit() {
  }

  onclick() {
    this.router.navigate(['BookDetailComponent', { id: this.book.bookId }]);
  }

  onEdit() {
    this.bookEdited.emit(this.book);
  }

  onDelete() {
    this.bookDeleted.emit(this.book);
  }

}
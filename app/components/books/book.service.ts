import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS,Http }    from '@angular/http';

import { Book } from './book';

@Injectable()
export class BookService {
    
    listBooks:Array<Book> =[
        new Book({id:1,title:'abc'}),
        new Book({id:2,title:'pqr'}),
        new Book({id:3,title:'xyz'}),
        new Book({id:4,title:'lmn'}),
    ]
    
    getBooks(searchString:string): Observable<Array<Book>> {
        return Observable.of(this.listBooks);;
    }
}

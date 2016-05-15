import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS,Http }    from '@angular/http';


import {LibUser} from '../users/user';
import { Book } from './book';
import {HttpServies} from '../http-common.service';



@Injectable()
export class BookService {
    
    constructor(private _httpService:HttpServies){
        
    }
    
    listBooks:Array<Book> =[
        new Book({id:1,title:'abc',authorName:'author 111'}),
        new Book({id:2,title:'pqr',authorName:'author 211'}),
        new Book({id:3,title:'xyz',authorName:'author 311'}),
        new Book({id:4,title:'lmn',authorName:'author 411'}),
    ]
    
    listUser:Array<LibUser> =[
        new LibUser("test user","mumbai","1111111111111"),
        new LibUser("john doe","mumbai","1111111111111"),
        new LibUser("jane doe","mumbai","1111111111111"),
        new LibUser("random user","mumbai","1111111111111"),
        new LibUser("bob smith","mumbai","1111111111111"),
        new LibUser("Yun Lee","mumbai","1111111111111"),
        new LibUser("Aaron","mumbai","1111111111111")
    ]
    
    
    getBooks(searchString:string) :Observable<Array<Book>>{
        return this._httpService.callSearch("book/getBooks");
        //return Observable.of(this.listBooks);
    }
    
    getBook(id:string): Observable<Book> {
        return Observable.of(this.listBooks[+id-1]);
    }
    
    getUsersForBook(id:string):Observable<Array<LibUser>>{
        return Observable.of(this.listUser);        
    }
}

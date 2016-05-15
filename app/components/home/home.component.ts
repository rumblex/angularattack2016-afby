import {Component,OnInit,Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NewBooksComponent} from './lists/new-books.component';
import {RandomBooksComponent} from './lists/random-book.component';

@Component({
    selector: 'home',
    directives:[NewBooksComponent,RandomBooksComponent],
    templateUrl: `app/components/home/home.template.html`
})
export class HomeComponent implements OnInit { 
       
    constructor(private _router:Router){}
    
    ngOnInit(){}
    
    onclickUserView(){
        this._router.navigate(['BookCenter','BookUserComponent']);
    }
    
    onclick(){
        this._router.navigate(['BookCenter']);
    }     
    
    onclickAboutUs(){
        this._router.navigate(['AboutUs']);
    }         
}
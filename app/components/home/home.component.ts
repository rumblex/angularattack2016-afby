import {Component,OnInit,Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'home',
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
}
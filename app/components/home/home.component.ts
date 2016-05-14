import {Component,OnInit,Input} from '@angular/core';
import {GridListComponent} from './grid-list/grid-list.component';
import {Item} from './grid-item/item';

@Component({
    selector: 'home',
    directives:[GridListComponent],
    template: `<grid-list [itemList]="itemList"></grid-list>`
})
export class HomeComponent implements OnInit { 
       
    private itemList:Array<Item>;
       
    constructor(){}
    
    ngOnInit(){
        this.itemList = [
            new Item("Search", "Search for books", "image", "BookCenter")            
        ]
    }
}
import {Component, OnInit} from '@angular/core';
import {GridItemComponent} from '../grid-item/grid-item.component';
import {Item} from '../grid-item/item';

@Component({
    selector: 'grid-list',
    directives: [GridItemComponent],
    template: `
    <div class="row">     
        <div *ngFor="let item of itemList">
            <grid-item *ngIf="item.description != '' " [item] = item></grid-item>
        </div>
    </div>
    `
})
export class GridListComponent implements OnInit {

    private itemList: Array<Item>;

    constructor() { }

    ngOnInit() {
        this.itemList = [
            new Item("Search", "Search for books", "image", "Search"),
            new Item("Your Books", "view all your books", "image", "View")
        ]
    }

}

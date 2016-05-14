import {Component, OnInit,Input} from '@angular/core';
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

    @Input() private itemList: Array<Item>;

    constructor() { }

    ngOnInit() {
        
    }

}

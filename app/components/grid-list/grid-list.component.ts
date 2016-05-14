import {Component} from '@angular/core';
import {GridItemComponent} from '../grid-item/grid-item.component';

@Component({
    selector: 'grid-list',
    directives:[GridItemComponent],
    template: `
    <div class="row">     
        <grid-item></grid-item>
        <grid-item></grid-item>
        <grid-item></grid-item>
        <grid-item></grid-item>
    </div>
    `
})
export class GridListComponent {

}

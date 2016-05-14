import {Component,OnInit,Input} from '@angular/core';
import {Item} from './item';

@Component({
    selector: 'grid-item',
    template: `
    <div class="col-sm-6 col-md-6">
      <div class="thumbnail">
        <img *ngIf="item.imageSrc != '' " src="{{item.imageSrc}}" alt="could not load image">
        <div class="caption">
          <h3>{{item.header}}</h3>
          <p>{{item.description}}</p>
          <p>
           <a *ngIf="item.action != '' " class="btn btn-primary" role="button">{{item.action}}</a>
          </p>
        </div>
      </div>
    <div>
    `
})
export class GridItemComponent implements OnInit { 
    
    @Input() private item:Item;
    
    constructor(){}
    
    ngOnInit(){
    }
}
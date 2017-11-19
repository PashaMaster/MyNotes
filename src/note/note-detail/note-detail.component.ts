import { Component, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Item } from '../../item/item';


@Component({
	selector:'note-detail',
	template:`
            <div  class="form-inline form-group"
                *ngIf="item">
                <h3>{{item.textNote}}</h3>
                <div>
                    <label>
                        {{'DETAIL.ID' | translate}}: 
                    </label>
                    {{item.id}}
                </div>
                <div>
                    <label>
                        {{'DETAIL.Note' | translate}}: 
                    </label>
                    <input class="form-control" [(ngModel)]="item.textNote" placeholder="textNote"/>
                </div>
            </div>
            `,
    styles:[`
            .form-group{
             margin: 0 0 0 5em;
             display: inline-block;
          `]
})

export class NoteDetailComponent {
    
  /** 
    *  Импортируем массив, котлрый лежит в app.component
    */
	@Input()
	item: Item;	
}
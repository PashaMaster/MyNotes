import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
	selector:'note-detail',
	template: `
		<div  class="form-inline form-group"
            *ngIf="item">
            <h3>{{item.textNote}}</h3>
            <div><label>ID: </label>{{item.id}}</div>
            <div>
                <label>Note: </label>
                <input class="form-control" [(ngModel)]="item.textNote" placeholder="textNote"/>
            </div>
        </div>
	`
})

export class NoteDetailComponent {

	@Input()
	item: Item;	
}
import { Component } from '@angular/core';
import { Item } from './item';     
import { NoteDetailComponent } from './note-detail.component';     
 
@Component({
    selector: 'purchase-app',
    template: `
    <div class="title">
        <h1> {{title}} </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <input class="form-control" [(ngModel)]="text" placeholder = "Note" />
                <button class="btn btn-default btnw" (click)="addItem(text)">Add</button>
            </div>
        </div>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <input class="form-control" [(ngModel)]="id" placeholder = "Number note" />
                <button class="btn btn-default btnw" (click)="removeItem(id)">Remove</button>
            </div>
        </div>
    </div>
    <div class="panel">
        <ul class="notes">
            <li (click) = "notSelected()">
                <span class="badge">ID</span>Note
            </li>
            <li *ngFor="let item of items"
                [class.selected]="item === selectedItem"
                (click) = "onSelected(item)"
            > 
                <span class="badge">{{item.id}}</span>{{item.textNote}}
            </li>
        </ul>
        <note-detail [item]="selectedItem"></note-detail>    
    </div>        
   `,
    styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .notes {
        margin: 0 0 2em 5em;
        list-style-type: none;
        padding: 0;
        width: 45em;
      }
      .notes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 3em;
        border-radius: 4px;
      }
      .notes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .notes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .notes .text {
        position: relative;
        top: -3px;
      }
      .notes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 2.2em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
      .title {
        margin: 0 3em 2em 20em;
        color: #607D8B;
      }
      .form-group{
        margin: 0 0 0 5em;
        display: inline-block;
      }
      .btnw{
        width: 6em;
      }
    `]
})
export class AppComponent { 

    title = 'My notes';

    selectedItem: Item;
    
    public items = ITEMS;

    addItem(textN: string): void {
         
        if(textN==null || textN==undefined || textN.trim()=="")
            return;	

		let id: number;
		id=0;
		for (var item of this.items) {

			if (item.id>id)
                id=item.id;
		}
		id=id+1;
        this.items.push(new Item(textN, id));
    }

	removeItem(id: number): void {
        
        if(id==null)
            return; 
		let newItems : Item[]=[];
		for (var item of this.items) {

            if (item.id != id)
                newItems.push(new Item(item.textNote, item.id ));
		}
		this.items=newItems;
        this.selectedItem = null;
	}
   
    onSelected(item: Item) : void {

        this.selectedItem = item;
    }

    notSelected() : void {

        this.selectedItem = null;
    }

}

var ITEMS: Item[] = 
    [
        { id: 1, textNote: "Hello!"},
        { id: 2, textNote: "I am Pasha"},
        { id: 3, textNote: "Good morning:)"},
        { id: 4, textNote: "What do you do?"}
  
    ];
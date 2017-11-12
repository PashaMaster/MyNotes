import { Component } from '@angular/core';
import { OnInit } from '@angular/core';    
import { Item } from '../../item/item';     
import { NoteDetailComponent } from '../note-detail/note-detail.component';    
import { NoteService } from '../note.service';    


 
@Component({
    selector: 'purchase-notes',
    template: `
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
    providers: []
})
export class NotesComponent implements OnInit{ 

    selectedItem: Item;
    
    items: Item[];

    constructor(private _noteService: NoteService) {}

    ngOnInit() {

        this.getItems();
    }

    getItems() {

        this.items = this._noteService.getItems();
    }

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


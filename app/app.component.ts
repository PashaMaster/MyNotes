import { Component } from '@angular/core';
     
export class Item{
	id : number;
    textNote: string;
     
    constructor(textNote: string, id: number) {
  
		this.id=id;
        this.textNote = textNote;
    }
}
 
@Component({
    selector: 'purchase-app',
    template: `
    <div class="page-header">
        <h1> My notes </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Note" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text)">Add</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Numbers</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items"	>
                	<td>{{item.id}}</td>
                    <td>{{item.textNote}}</td>
                </tr>
            </tbody>
        </table>
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="id" placeholder = "Number note" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="removeItem(id)">Remove</button>
                </div>
            </div>
        </div>
    </div>`
})
export class AppComponent { 

    public items = ITEMS;
    addItem(textN: string): void {
         
        if(textN==null || textN==undefined || textN.trim()=="")
            return;	
		let id: number;
		id=0;
		for (var item of this.items) {

			id=item.id;
		}
		id=id+1;
        this.items.push(new Item(textN, id));
    }
	removeItem(id: number): void {

		let newItems : Item[]=[];
		for (var item of this.items) {

            if (item.id != id)
                newItems.push(new Item(item.textNote, item.id ));
		}
		this.items=newItems;
	}
}

var ITEMS: Item[] = 
    [
        { id: 1, textNote: "Hello!"},
        { id: 2, textNote: "I am Pasha"},
        { id: 3, textNote: "Good morning"},
        { id: 4, textNote: "What do you do?"}
  
    ];
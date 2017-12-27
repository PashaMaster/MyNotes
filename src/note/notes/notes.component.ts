import { Component } from '@angular/core';
import { OnInit } from '@angular/core';    
import { Item } from '../../item/item';   
import { NoteDetailComponent } from '../note-detail/note-detail.component';    
import { NoteService } from '../note.service';    

@Component({
    selector: 'purchase-notes',
    template: ` <div class="panel">
                    <div class="form-inline">
                        <div class="form-group">
                            <input type="range" min="-200" max="200" value="1" [(ngModel)]="count" (change)="getCount(count)">
                            <input class="form-control" [(ngModel)]="text" placeholder = "{{'NOTES.Note' | translate}}" />
                            <input class="form-control" type="date" [(ngModel)]="date" placeholder = "{{'NOTES.Date' | translate}}" />
                            <input class="form-control" [(ngModel)]="name" placeholder = "{{'NOTES.Name' | translate}}" />
                            <button class="btn btn-default btnw" (click)="addItem(text, date, name)">
                                {{'NOTES.Add' | translate}}
                             </button>
                        </div>
                    </div>
                </div>
                <div class="panel">
                    <div class="form-inline">
                        <div class="form-group">
                            <input class="form-control" [(ngModel)]="id" placeholder = "{{'NOTES.Number' | translate}}"/>
                            <button class="btn btn-default btnw" (click)="removeItem(id)">
                                {{'NOTES.Remove' | translate}}                                
                            </button>
                        </div>
                    </div>
                </div>
                <div class="panel">
                    <ul class="notes">
                        <li (click) = "notSelected()">
                            <span class="badge">
                                ID
                            </span>
                            {{'NOTES.NoteIn' | translate}}
                        </li>
                        <li *ngFor="let item of items"
                            [class.selected]="item === selectedItem"
                            (click) = "onSelected(item)"
                        > 
                            <span class="badge">
                                <font color={{getColor(item.dateOfBegin)}}>
                                {{item.id}} 
                                </font>
                            </span>
                            {{item.textNote}}
                        </li>
                    </ul>
                    <note-detail [item]="selectedItem"></note-detail>    
                </div>   
               `,
    providers: []
})

/** 
  * Класс, для работы с нашим списком
  */
export class NotesComponent implements OnInit{ 

    /** 
      * Поле, которое хранит в себе выделенный элемент списка
      */
    selectedItem: Item;

    /** 
      * Конструктор класса
      * @param=_noteService параметр, который передает доступ к хранилищу данных 
      */
    constructor(private _noteService: NoteService) {
      this.countDay=0;
    }
  
    /** 
      * Поле, которое хранит в себе массив элементов списка
      */
    items: Item[]=[];

    /** 
      * Метод, который срабатывает при загрузке, вызывая метод получения данных из хранилища
      */
    ngOnInit() {
        
        this._noteService.getItems().subscribe(data => this.items=data);
    }

    /** 
      * Метод, который добавляет записку
      * @param=textN строка, которую нужно добавить
      */
    addItem(textN: string, dateN: Date, nameN: string): void {

        if(textN==null || textN==undefined || textN.trim()=="")
            return;	
        let id: number;
		id=0;
		for (var item of this.items) {

			if (item.id>id)
                id=item.id;
		}
		id=id+1;
    this.items.push(new Item(textN, id, new Date(dateN), nameN));
    }

    /** 
      * Метод, который удаляет записку
      * @param=id номер удаляемой строки
      */
  	removeItem(id: number): void {

          if(id==null)
              return; 
  		let newItems : Item[]=[];
  		for (var item of this.items) {

              if (item.id != id)
                  newItems.push(new Item(item.textNote, item.id,  item.dateOfBegin, item.autor));
  		}
  		this.items=newItems;
      this.selectedItem = null;
  	}

    /** 
      * Метод, который запоминает выделенный элемент
      * @param=item объект клааса Item
      */
    onSelected(item: Item) : void {

        this.selectedItem = item;
    }

    /** 
      * Метод, который снимает выделение с элемента
      */
    notSelected() : void {

        this.selectedItem = null;
    }

    /** 
      * Переменная, которая хранит значение ползунка  
      */
    countDay:number;

    /** 
      *  Метод переопределения переменной countDay
      *  @param=num новое значение
      */        
    public getCount(num : number)
    {
      this.countDay=num;
    }    

    /** 
      *  Метод для получения цвета, зависящего от даты
      *  @param=dateN дата заметки
      */
    getColor(dateN : Date) : string {

        let myDate: Date;
        myDate = new Date();
        let day, count:number;
        day = myDate.getDate();
        count = this.countDay;
        myDate.setDate(day + count);        
        if (myDate > dateN)
            return "red";
        else
          if (myDate <= dateN)
            return "green";
          else
            return "white";
    }
}


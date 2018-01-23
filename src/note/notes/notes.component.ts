import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../item/item';   
import { NoteDetailComponent } from '../note-detail/note-detail.component';    
import { NoteService } from '../note.service';    

@Component({
    selector: 'purchase-notes',
    templateUrl: './src/note/notes/notes.component.html',
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
      * Поле, которое хранит в себе массив элементов списка
      */
    items: Item[]=[];

    /** 
      * Поле, которое хранит в себе коды ошибок
      */
    statusCode: number;
  
    /** 
      * Конструктор класса
      * @param=_noteService параметр, который передает доступ к хранилищу данных 
      */
    constructor(private _noteService: NoteService, private router: Router) {
      
      this.countDay=0;
    }
    
    /** 
      * Метод, который срабатывает при загрузке стр и вызывает метод получения данных
      */
    ngOnInit(): void {
        this.getNotes();
    }   

    /** 
     * Метод, который получает все записки из хранилища
     */
    getNotes() {
      this._noteService.getItems()
      .subscribe(
        data => this.items = data,
        errorCode =>  this.statusCode = errorCode)
    }

    /** 
      * Метод, который добавляет записку
      * @param=textN строка, которую нужно добавить
      * @param=dateN дата, которую нужно добавить
      * @param=nameN автор, которого нужно добавить
      */
    addItem(textN: string, dateN: Date, nameN: string): void {
      let id;
      this._noteService.getItems()
        .subscribe(items => {
           let maxIndex = items.length - 1;
           let itemWithMaxIndex = items[maxIndex];
           let itemId = itemWithMaxIndex.id + 1;
           let item = new Item(itemId, textN, dateN, nameN);  
           this._noteService.createItem(item)
        .subscribe(successCode => {
           this.statusCode = successCode;
           this.getNotes();  
         },
         errorCode => this.statusCode = errorCode
         );
       });    
    }

    /** 
      * Метод, который удаляет записку
      * @param=id номер удаляемой строки
      */
  	removeItem(id: number): void {
      this._noteService.deleteItemById(id.toString())
        .subscribe(successCode => {
          this.statusCode = 204;
          this.getNotes();  
      },
      errorCode => this.statusCode = errorCode);   
  	}

    /** 
      * Метод, который запоминает выделенный элемент
      * @param=item объект клааса Item
      */
    onSelected(item: Item) : void {

        this.selectedItem = item;
        this.goToItem();
    }

    /** 
      * Метод, который снимает выделение с элемента
      */
    notSelected() : void {

        this.selectedItem = null;
    }

    /** 
      * Метод, который производи переход на новую стр для просмотра детализированых данных записки
      */
    goToItem()
    {
      this.router.navigate(
            ['/notedetail', this.selectedItem.id], 
            {
                queryParams:{
                    'autor': this.selectedItem.autor, 
                    'dateOfBegin': this.selectedItem.dateOfBegin,
                    'textNote': this.selectedItem.textNote
                }
            }
        );
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

        dateN=new Date(dateN);
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


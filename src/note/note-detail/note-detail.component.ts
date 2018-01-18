import { Component, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';
import { Item } from '../../item/item';


@Component({
	selector:'note-detail',
	templateUrl: './src/note/note-detail/note-detail.component.html',
  styleUrls: ['./src/note/note-detail/note-detail.component.css']  
})

export class NoteDetailComponent {
    
     /** 
      * Объект класса, который булет хнанить данные для вывода
      */ 
    public item: Item;    

    /** 
      * Переменная для записи параметра роутинга в нее
      */     
    private id:number;    

    /** 
      * Переменная для записи параметра роутинга в нее
      */ 
    private autor :string;

    /** 
      * Переменная для записи параметра роутинга в нее
      */ 
    private textNote:string;

    /** 
      * Переменная для записи параметра роутинга в нее
      */ 
    private dateOfBegin:Date;

    /** 
      * Переменная для получения параметра id роутинга
      */ 
    private routeSubscription: Subscription;
    
    /** 
      * Переменная для получения доп передаваемых параметров роутинга
      */ 
    private querySubscription: Subscription;

    /** 
      * Метод, который делает валидацию даты
      * @param=route Объект, который хранит данные роутинга
      */    
    constructor(private route: ActivatedRoute){
        
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.autor = queryParam['autor'];
                this.dateOfBegin = queryParam['dateOfBegin'];
                this.textNote = queryParam['textNote'];
            }
        );
        this.item=new Item(this.textNote ,this.id, this.dateOfBegin, this.autor);  
    }
    
     /** 
      * Метод, который делает валидацию даты
      * @param=date Дата полученая при роутинге
      * @return Дату или ничего, если дата не задана
      */
    getDate(date:Date): Date
    {
        if(date.toString()=="Invalid Date")
            return null
        else
            return date;
    }
		
}
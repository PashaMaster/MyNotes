import { Injectable } from '@angular/core';
import { ITEMS } from '../mock/mock-note';
import { Item } from '../item/item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

/** 
  * Класс сервиса, с помощью которого получаем данные из архива
  */
export class NoteService {
	
	 /** 
      * Конструктор класса
      * @param=http переменная, передпющая данные клиента
      */	
	constructor(private http: HttpClient){ }
      
	/** 
      * Метод, который получает данные из хранилища
      * @return=Observable<Item[]> объект, который содержит результаты запроса
      */
    getItems() : Observable<Item[]> {
        return this.http.get('./src/mock/mock.json').map(data=>{
            let itemsList = data["itemList"];
            return itemsList.map(function(item:any) {
                return {id: item.id, textNote: item.textNote, dateOfBegin: new Date(item.dateOfBegin), autor: item.autor};
              });
        });
    }
}

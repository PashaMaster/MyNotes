import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Item } from '../item/item';

@Injectable()

/** 
  * Класс сервиса, с помощью которого получаем данные из архива
  */
export class NoteService {
	
  /** 
    * Поле, которое содержит http адрес на сервер json
    */
  itemUrl = "http://localhost:3000/itemList";

	/** 
    * Конструктор класса
    * @param=http переменная, передпющая данные клиента
    */	
	constructor(private http: Http){ }
      
	/** 
    * Метод, который получает данные из json
    * @return=Observable<Item[]> объект, который содержит результаты запроса
    */
  getItems(): Observable<Item[]> {
    return this.http.get(this.itemUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }  

  /** 
    * Метод, который добавляет данные в json
    * @param=item объект, который добавляем
    * @return=Observable<number> объект, который содержит результаты запроса
    */
  createItem(item: Item):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.itemUrl, item, options)
        .map(success => success.status)
        .catch(this.handleError);
  }

  /** 
    * Метод, который удаляет данные из json
    * @param=itemId id объекта, который удаляем
    * @return=Observable<number> объект, который содержит результаты запроса
    */
  deleteItemById(itemId: string): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.delete(this.itemUrl +"/"+ itemId)
         .map(success => success.status)
         .catch(this.handleError);
  }  

  /** 
    * Метод, который парсит файл
    */
  private extractData(res: Response) {
      let body = res.json();
      return body;
    }
  
  /** 
    * Метод, который обрабатывает ошибки
    */
  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}

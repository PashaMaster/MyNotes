"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var NoteService = (function () {
    /**
    * Конструктор класса
    * @param=http переменная, передпющая данные клиента
    */
    function NoteService(http) {
        this.http = http;
        /**
          * Поле, которое содержит http адрес на сервер json
          */
        this.itemUrl = "http://localhost:3000/itemList";
    }
    /**
    * Метод, который получает данные из json
    * @return=Observable<Item[]> объект, который содержит результаты запроса
    */
    NoteService.prototype.getItems = function () {
        return this.http.get(this.itemUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
      * Метод, который добавляет данные в json
      * @param=item объект, который добавляем
      * @return=Observable<number> объект, который содержит результаты запроса
      */
    NoteService.prototype.createItem = function (item) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.post(this.itemUrl, item, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    /**
      * Метод, который удаляет данные из json
      * @param=itemId id объекта, который удаляем
      * @return=Observable<number> объект, который содержит результаты запроса
      */
    NoteService.prototype.deleteItemById = function (itemId) {
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.itemUrl + "/" + itemId)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    /**
      * Метод, который парсит файл
      */
    NoteService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    /**
      * Метод, который обрабатывает ошибки
      */
    NoteService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.status);
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable()
    /**
      * Класс сервиса, с помощью которого получаем данные из архива
      */
    ,
    __metadata("design:paramtypes", [http_1.Http])
], NoteService);
exports.NoteService = NoteService;

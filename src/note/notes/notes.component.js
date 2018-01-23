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
var router_1 = require("@angular/router");
var item_1 = require("../../item/item");
var note_service_1 = require("../note.service");
var NotesComponent = (function () {
    /**
      * Конструктор класса
      * @param=_noteService параметр, который передает доступ к хранилищу данных
      */
    function NotesComponent(_noteService, router) {
        this._noteService = _noteService;
        this.router = router;
        /**
         * Поле, которое хранит в себе массив элементов списка
         */
        this.items = [];
        this.countDay = 0;
    }
    /**
      * Метод, который срабатывает при загрузке стр и вызывает метод получения данных
      */
    NotesComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    /**
     * Метод, который получает все записки из хранилища
     */
    NotesComponent.prototype.getNotes = function () {
        var _this = this;
        this._noteService.getItems()
            .subscribe(function (data) { return _this.items = data; }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    /**
      * Метод, который добавляет записку
      * @param=textN строка, которую нужно добавить
      * @param=dateN дата, которую нужно добавить
      * @param=nameN автор, которого нужно добавить
      */
    NotesComponent.prototype.addItem = function (textN, dateN, nameN) {
        var _this = this;
        var id;
        this._noteService.getItems()
            .subscribe(function (items) {
            var maxIndex = items.length - 1;
            var itemWithMaxIndex = items[maxIndex];
            var itemId = itemWithMaxIndex.id + 1;
            var item = new item_1.Item(itemId, textN, dateN, nameN);
            _this._noteService.createItem(item)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.getNotes();
            }, function (errorCode) { return _this.statusCode = errorCode; });
        });
    };
    /**
      * Метод, который удаляет записку
      * @param=id номер удаляемой строки
      */
    NotesComponent.prototype.removeItem = function (id) {
        var _this = this;
        this._noteService.deleteItemById(id.toString())
            .subscribe(function (successCode) {
            _this.statusCode = 204;
            _this.getNotes();
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    /**
      * Метод, который запоминает выделенный элемент
      * @param=item объект клааса Item
      */
    NotesComponent.prototype.onSelected = function (item) {
        this.selectedItem = item;
        this.goToItem();
    };
    /**
      * Метод, который снимает выделение с элемента
      */
    NotesComponent.prototype.notSelected = function () {
        this.selectedItem = null;
    };
    /**
      * Метод, который производи переход на новую стр для просмотра детализированых данных записки
      */
    NotesComponent.prototype.goToItem = function () {
        this.router.navigate(['/notedetail', this.selectedItem.id], {
            queryParams: {
                'autor': this.selectedItem.autor,
                'dateOfBegin': this.selectedItem.dateOfBegin,
                'textNote': this.selectedItem.textNote
            }
        });
    };
    /**
      *  Метод переопределения переменной countDay
      *  @param=num новое значение
      */
    NotesComponent.prototype.getCount = function (num) {
        this.countDay = num;
    };
    /**
      *  Метод для получения цвета, зависящего от даты
      *  @param=dateN дата заметки
      */
    NotesComponent.prototype.getColor = function (dateN) {
        dateN = new Date(dateN);
        var myDate;
        myDate = new Date();
        var day, count;
        day = myDate.getDate();
        count = this.countDay;
        myDate.setDate(day + count);
        if (myDate > dateN)
            return "red";
        else if (myDate <= dateN)
            return "green";
        else
            return "white";
    };
    return NotesComponent;
}());
NotesComponent = __decorate([
    core_1.Component({
        selector: 'purchase-notes',
        templateUrl: './src/note/notes/notes.component.html',
        providers: []
    })
    /**
      * Класс, для работы с нашим списком
      */
    ,
    __metadata("design:paramtypes", [note_service_1.NoteService, router_1.Router])
], NotesComponent);
exports.NotesComponent = NotesComponent;

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
var item_1 = require("../../item/item");
var note_service_1 = require("../note.service");
var NotesComponent = (function () {
    /**
      * Конструктор класса
      * @param=_noteService параметр, который передает доступ к хранилищу данных
      */
    function NotesComponent(_noteService) {
        this._noteService = _noteService;
        /**
          * Поле, которое хранит в себе массив элементов списка
          */
        this.items = [];
        this.countDay = 0;
    }
    /**
      * Метод, который срабатывает при загрузке, вызывая метод получения данных из хранилища
      */
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._noteService.getItems().subscribe(function (data) { return _this.items = data; });
    };
    /**
      * Метод, который добавляет записку
      * @param=textN строка, которую нужно добавить
      */
    NotesComponent.prototype.addItem = function (textN, dateN, nameN) {
        if (textN == null || textN == undefined || textN.trim() == "")
            return;
        var id;
        id = 0;
        //for (var item of this.items) {
        this.items.forEach(function (item, i, items) {
            if (item.id > id)
                id = item.id;
        });
        id = id + 1;
        this.items.push(new item_1.Item(textN, id, new Date(dateN), nameN));
    };
    /**
      * Метод, который удаляет записку
      * @param=id номер удаляемой строки
      */
    NotesComponent.prototype.removeItem = function (id) {
        if (id == null)
            return;
        var newItems = [];
        this.items.forEach(function (item, i, items) {
            if (item.id != id)
                newItems.push(new item_1.Item(item.textNote, item.id, item.dateOfBegin, item.autor));
        });
        this.items = newItems;
        this.selectedItem = null;
    };
    /**
      * Метод, который запоминает выделенный элемент
      * @param=item объект клааса Item
      */
    NotesComponent.prototype.onSelected = function (item) {
        this.selectedItem = item;
    };
    /**
      * Метод, который снимает выделение с элемента
      */
    NotesComponent.prototype.notSelected = function () {
        this.selectedItem = null;
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
        template: " <div class=\"panel\">\n                    <div class=\"form-inline\">\n                        <div class=\"form-group\">\n                            <input type=\"range\" min=\"-200\" max=\"200\" value=\"1\" [(ngModel)]=\"count\" (change)=\"getCount(count)\">\n                            <input class=\"form-control\" [(ngModel)]=\"text\" placeholder = \"{{'NOTES.Note' | translate}}\" />\n                            <input class=\"form-control\" type=\"date\" [(ngModel)]=\"date\" placeholder = \"{{'NOTES.Date' | translate}}\" />\n                            <input class=\"form-control\" [(ngModel)]=\"name\" placeholder = \"{{'NOTES.Name' | translate}}\" />\n                            <button class=\"btn btn-default btnw\" (click)=\"addItem(text, date, name)\">\n                                {{'NOTES.Add' | translate}}\n                             </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel\">\n                    <ul class=\"notes\">\n                        <li (click) = \"notSelected()\">\n                            <span class=\"badge\">\n                                ID\n                            </span>\n                            {{'NOTES.NoteIn' | translate}}\n                        </li>\n                        <li *ngFor=\"let item of items\"\n                            [class.selected]=\"item === selectedItem\"\n                            (click) = \"onSelected(item)\"\n                        > \n                            <span class=\"badge\">\n                                <font color={{getColor(item.dateOfBegin)}}>\n                                {{item.id}} \n                                </font>\n                            </span>\n                            <div class=\"note\" >{{item.textNote}} </div>\n                            <div class=\"delete\">  \n                              <button class=\"delete-link\" (click)=\"removeItem(item.id)\">\n                                  &#10008;\n                              </button>\n                            </div>  \n                        </li>\n                    </ul>\n                    <note-detail [item]=\"selectedItem\"></note-detail>    \n                </div>   \n                <a routerLink=\"/dasasdfhboard\">\n                                {{'HOME.ButtonDashboard' | translate}}\n                </a>\n               ",
        providers: []
    })
    /**
      * Класс, для работы с нашим списком
      */
    ,
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NotesComponent);
exports.NotesComponent = NotesComponent;

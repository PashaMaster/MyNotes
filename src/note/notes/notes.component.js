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
    function NotesComponent(_noteService) {
        this._noteService = _noteService;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    NotesComponent.prototype.getItems = function () {
        this.items = this._noteService.getItems();
    };
    NotesComponent.prototype.addItem = function (textN) {
        if (textN == null || textN == undefined || textN.trim() == "")
            return;
        var id;
        id = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id > id)
                id = item.id;
        }
        id = id + 1;
        this.items.push(new item_1.Item(textN, id));
    };
    NotesComponent.prototype.removeItem = function (id) {
        if (id == null)
            return;
        var newItems = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id != id)
                newItems.push(new item_1.Item(item.textNote, item.id));
        }
        this.items = newItems;
        this.selectedItem = null;
    };
    NotesComponent.prototype.onSelected = function (item) {
        this.selectedItem = item;
    };
    NotesComponent.prototype.notSelected = function () {
        this.selectedItem = null;
    };
    return NotesComponent;
}());
NotesComponent = __decorate([
    core_1.Component({
        selector: 'purchase-notes',
        template: "\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <input class=\"form-control\" [(ngModel)]=\"text\" placeholder = \"{{'NOTES.Note' | translate}}\" />\n                <button class=\"btn btn-default btnw\" (click)=\"addItem(text)\">{{'NOTES.Add' | translate}}</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <input class=\"form-control\" [(ngModel)]=\"id\" placeholder = \"{{'NOTES.Number' | translate}}\" />\n                <button class=\"btn btn-default btnw\" (click)=\"removeItem(id)\">{{'NOTES.Remove' | translate}}</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel\">\n        <ul class=\"notes\">\n            <li (click) = \"notSelected()\">\n                <span class=\"badge\">ID</span>{{'NOTES.NoteIn' | translate}}\n            </li>\n            <li *ngFor=\"let item of items\"\n                [class.selected]=\"item === selectedItem\"\n                (click) = \"onSelected(item)\"\n            > \n                <span class=\"badge\">{{item.id}}</span>{{item.textNote}}\n            </li>\n        </ul>\n        <note-detail [item]=\"selectedItem\"></note-detail>    \n    </div>        \n   ",
        providers: []
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NotesComponent);
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map
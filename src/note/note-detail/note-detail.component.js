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
var NoteDetailComponent = (function () {
    function NoteDetailComponent() {
    }
    return NoteDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", item_1.Item)
], NoteDetailComponent.prototype, "item", void 0);
NoteDetailComponent = __decorate([
    core_1.Component({
        selector: 'note-detail',
        template: "\n\t\t<div  class=\"form-inline form-group\"\n            *ngIf=\"item\">\n            <h3>{{item.textNote}}</h3>\n            <div><label>{{'DETAIL.ID' | translate}}: </label>{{item.id}}</div>\n            <div>\n                <label>{{'DETAIL.Note' | translate}}: </label>\n                <input class=\"form-control\" [(ngModel)]=\"item.textNote\" placeholder=\"textNote\"/>\n            </div>\n        </div>\n\t",
        styles: ["\n      .form-group{\n        margin: 0 0 0 5em;\n        display: inline-block;\n\n    "]
    })
], NoteDetailComponent);
exports.NoteDetailComponent = NoteDetailComponent;
//# sourceMappingURL=note-detail.component.js.map
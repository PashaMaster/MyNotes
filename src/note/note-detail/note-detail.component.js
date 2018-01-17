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
var NoteDetailComponent = (function () {
    function NoteDetailComponent(route) {
        var _this = this;
        this.route = route;
        this.routeSubscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.querySubscription = route.queryParams.subscribe(function (queryParam) {
            _this.autor = queryParam['autor'];
            _this.dateOfBegin = queryParam['dateOfBegin'];
            _this.textNote = queryParam['textNote'];
        });
        this.item = new item_1.Item(this.textNote, this.id, this.dateOfBegin, this.autor);
    }
    return NoteDetailComponent;
}());
NoteDetailComponent = __decorate([
    core_1.Component({
        selector: 'note-detail',
        template: "\n\n           <div  class=\"form-inline form-group\"\n                *ngIf=\"item\">\n                <h3>{{item.textNote}}</h3>\n                <div>\n                    <label>\n                        {{'DETAIL.ID' | translate}}: \n                    </label>\n                    {{item.id}}\n                </div>\n                <div>\n                    <label>\n                        {{'DETAIL.Note' | translate}}: \n                    </label>\n                    {{item.textNote}}\n                </div>\n                <div>\n                    <label>\n                        {{'DETAIL.Date' | translate}}:\n                    </label>\n                    {{item.dateOfBegin | date}}\n                <div>\n                <div>\n                    <label>\n                        {{'DETAIL.Autor' | translate}}:\n                    </label>\n                    {{item.autor}}\n                </div>\n            </div>\n            ",
        styles: ["\n            .form-group{\n             margin: 0 0 0 5em;\n             display: inline-block;\n          "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], NoteDetailComponent);
exports.NoteDetailComponent = NoteDetailComponent;

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
    /**
      * Метод, который делает валидацию даты
      * @param=route Объект, который хранит данные роутинга
      */
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
    /**
     * Метод, который делает валидацию даты
     * @param=date Дата полученая при роутинге
     * @return Дату или ничего, если дата не задана
     */
    NoteDetailComponent.prototype.getDate = function (date) {
        if (date.toString() == "Invalid Date")
            return null;
        else
            return date;
    };
    return NoteDetailComponent;
}());
NoteDetailComponent = __decorate([
    core_1.Component({
        selector: 'note-detail',
        templateUrl: './src/note/note-detail/note-detail.component.html',
        styleUrls: ['./src/note/note-detail/note-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], NoteDetailComponent);
exports.NoteDetailComponent = NoteDetailComponent;

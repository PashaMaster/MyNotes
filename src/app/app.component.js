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
var core_2 = require("@ngx-translate/core");
var note_service_1 = require("../note/note.service");
var AppComponent = (function () {
    /**
      * Конструктор класса, в котором идет определение выбранного языка из списка и просходит перевод страницы
      * @param=translate сервис, который хранит все необходимые параметры для перевода
      */
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(["en", "ru"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'purchase-app',
        template: "\n                <div class=\"language\">\n                    <label>\n                        {{'HOME.Language' | translate}}\n                        <select #langSelect (change)=\"translate.use(langSelect.value)\">\n                            <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">\n                                {{ lang }}\n                            </option>\n                        </select>\n                    </label>\n                </div>\n                <div class=\"title\">\n                    <h1> {{'HOME.Title' | translate}} </h1>        \n                </div>\n                <div class=\"panel\">\n                    <ul class=\"nav\">\n                        <li>\n                            <a routerLink=\"/dashboard\">\n                                {{'HOME.ButtonDashboard' | translate}}\n                            </a>\n                        </li>\n                        <li>\n                        \t<a routerLink=\"/notes\">\n                                {{'HOME.ButtonNotes' | translate}}\n                            </a>\n                        </li>\n                    </ul>\n                </div>   \n                <router-outlet></router-outlet>\n                ",
        providers: [note_service_1.NoteService]
    }),
    __metadata("design:paramtypes", [core_2.TranslateService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
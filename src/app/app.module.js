"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var note_detail_component_1 = require("../note/note-detail/note-detail.component");
var notes_component_1 = require("../note/notes/notes.component");
var dashboard_component_1 = require("../main-page/dashboard.component");
var noteinfo_component_1 = require("../note/noteinfo/noteinfo.component");
/**
  * Переменная-константа, которая определяет навигацию по страницам, так же задает начальную страницу при запуске
  */
var routers = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, userAsDefault: true },
    { path: 'notes', component: notes_component_1.NotesComponent },
    { path: 'noteinfo', component: noteinfo_component_1.NoteInfoComponent }
];
/**
  * Функция, которая определяет параметры для перевода(открывает json файл определенного языка)
  * @param=httpClient переменная, передпющая данные клиента
  */
function HttpLoaderFactory(httpClient) {
    return new http_loader_1.TranslateHttpLoader(httpClient, "i18n/", ".json");
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            note_detail_component_1.NoteDetailComponent,
            notes_component_1.NotesComponent,
            dashboard_component_1.DashboardComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(routers),
            http_1.HttpClientModule,
            core_2.TranslateModule.forRoot({
                loader: {
                    provide: core_2.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [http_1.HttpClient]
                }
            })
        ],
        providers: [],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;

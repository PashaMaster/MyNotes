import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NoteDetailComponent }   from '../note/note-detail/note-detail.component';
import { NotesComponent } from '../note/notes/notes.component';
import { DashboardComponent }      from '../main-page/dashboard.component';
import { RouterModule }      from '@angular/router';

const routers = [
	{path: 'dashboard', component: DashboardComponent, userAsDefault: true},
	{path: 'notes', component: NotesComponent}
];

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "i18n/", ".json");
}

@NgModule({
    declarations: [ AppComponent, NoteDetailComponent, NotesComponent,  DashboardComponent],
    imports:      [ 
    	BrowserModule, 
    	FormsModule, 
    	RouterModule.forRoot(routers),
    	HttpClientModule,
	    TranslateModule.forRoot({
	     loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }})],
	providers:    [], 
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
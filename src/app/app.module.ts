import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
    declarations: [ AppComponent, NoteDetailComponent, NotesComponent,  DashboardComponent],
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routers)],
	providers:    [], 
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
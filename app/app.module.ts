import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NoteDetailComponent }   from './note-detail.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, NoteDetailComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
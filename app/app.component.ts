import { Component } from '@angular/core';
import { NotesComponent } from './notes.component';
import { DashboardComponent }      from './dashboard.component';
import { NoteService } from './note.service';
import { RouterModule }      from '@angular/router';


@Component({
    selector: 'purchase-app',
    template: `
    <div class="title">
        <h1> {{title}} </h1>
    </div>
    <div class="panel">
        <ul class="nav">
            <li>
                <a routerLink="/dashboard">Dashboard</a>
            </li>
            <li>
            	<a routerLink="/notes">Notes</a>
            </li>
        </ul>
    </div>   
    <router-outlet></router-outlet>
    `,
    providers: [NoteService]
})

export class AppComponent {

	title = 'My notes';
}
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';
import { NotesComponent } from '../note/notes/notes.component';
import { DashboardComponent } from '../main-page/dashboard.component';
import { NoteService } from '../note/note.service';

@Component({
    selector: 'purchase-app',
    template: `
                <div class="language">
                    <label>
                        {{'HOME.Language' | translate}}
                        <select #langSelect (change)="translate.use(langSelect.value)">
                            <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">
                                {{ lang }}
                            </option>
                        </select>
                    </label>
                </div>
                <div class="title">
                    <h1> {{'HOME.Title' | translate}} </h1>        
                </div>
                <div class="panel">
                    <ul class="nav">
                        <li>
                            <a routerLink="/dashboard">
                                {{'HOME.ButtonDashboard' | translate}}
                            </a>
                        </li>
                        <li>
                        	<a routerLink="/notes">
                                {{'HOME.ButtonNotes' | translate}}
                            </a>
                        </li>
                    </ul>
                </div>   
                <router-outlet></router-outlet>
                `,
    providers: [NoteService]
})

export class AppComponent {

    /** 
      * Конструктор класса, в котором идет определение выбранного языка из списка и просходит перевод страницы
      * @param=translate сервис, который хранит все необходимые параметры для перевода
      */
    constructor(private translate: TranslateService) {
       
        translate.addLangs(["en", "ru"]);
        translate.setDefaultLang('en');
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    }
}
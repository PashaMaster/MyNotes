import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';
import { NotesComponent } from '../note/notes/notes.component';
import { DashboardComponent } from '../main-page/dashboard.component';
import { NoteService } from '../note/note.service';

@Component({
    selector: 'purchase-app',
    template: `
                <div class="menu">                    
                    <ul>
                        <li>
                            <div class="title">
                                {{'HOME.Title' | translate}}
                            </div>
                        </li>
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
                        <li>
                            <a>
                                {{'HOME.Language' | translate}}
                                <select #langSelect (change)="translate.use(langSelect.value)">
                                    <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">
                                        {{ lang }}
                                    </option>
                                </select>
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
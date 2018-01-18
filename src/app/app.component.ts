import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';
import { NotesComponent } from '../note/notes/notes.component';
import { DashboardComponent } from '../main-page/dashboard.component';
import { NoteService } from '../note/note.service';

@Component({
    selector: 'purchase-app',
    templateUrl: './src/app/app.component.html',
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
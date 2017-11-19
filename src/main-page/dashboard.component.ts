import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'my-dashboard',
    template: `<h3>{{ 'Dashboard.h3' | translate }}</h3>`,
})

export class DashboardComponent {
	
}
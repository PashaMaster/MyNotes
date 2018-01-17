import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'my-dashboard',
    template: `
    		<div  class="form-inline form-group">
    			<h3 class="text-color">{{ 'Dashboard.h3' | translate }}</h3>
            </div>
    `
})

export class DashboardComponent {
	
}
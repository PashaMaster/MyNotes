import { Component, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';
import { Item } from '../../item/item';


@Component({
	selector:'note-detail',
	template:`

           <div  class="form-inline form-group"
                *ngIf="item">
                <h3>{{item.textNote}}</h3>
                <div>
                    <label>
                        {{'DETAIL.ID' | translate}}: 
                    </label>
                    {{item.id}}
                </div>
                <div>
                    <label>
                        {{'DETAIL.Note' | translate}}: 
                    </label>
                    {{item.textNote}}
                </div>
                <div>
                    <label>
                        {{'DETAIL.Date' | translate}}:
                    </label>
                    {{item.dateOfBegin | date}}
                <div>
                <div>
                    <label>
                        {{'DETAIL.Autor' | translate}}:
                    </label>
                    {{item.autor}}
                </div>
            </div>
            `,
    styles:[`
            .form-group{
             margin: 0 0 0 5em;
             display: inline-block;
          `]
})

export class NoteDetailComponent {
    
    public item: Item;    
    private id:number;    
    private autor :string;
    private textNote:string;
    private dateOfBegin:Date;
    private routeSubscription: Subscription;
    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute){
        
        
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.autor = queryParam['autor'];
                this.dateOfBegin = queryParam['dateOfBegin'];
                this.textNote = queryParam['textNote'];
            }
        );
        this.item=new Item(this.textNote ,this.id, this.dateOfBegin, this.autor);  
    }
		
}
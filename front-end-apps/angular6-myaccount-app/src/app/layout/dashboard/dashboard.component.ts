import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    
    userName:string;
    userId:string;
    email:string;
    
    
    checked = false;
//    indeterminate = false;
//    labelPosition = 'after';
//    disabled = false;

    constructor(){}

    ngOnInit() {
    		
    }    

}
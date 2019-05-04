import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MatButtonModule, 
		 MatCheckboxModule, 
		 MatDatepickerModule, 
		 MatNativeDateModule, 
		 MatInputModule} 
	from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule, MatCheckboxModule,MatDatepickerModule, MatNativeDateModule,MatInputModule,

    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {}

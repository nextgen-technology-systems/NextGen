import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule, 
        NgbAlertModule.forRoot(),
        MaterialModule,
        RegisterRoutingModule],
    declarations: [RegisterComponent],
    providers: []
})
export class RegisterModule {}

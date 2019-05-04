import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AuthService } from '../services/auth.service';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule.forRoot() ,
        ReactiveFormsModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    providers: [AuthService],
})
export class LayoutModule {}

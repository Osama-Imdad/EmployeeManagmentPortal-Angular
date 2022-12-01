import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashbordAnalyticsComponent } from './pages/dashbord-analytics/dashbord-analytics.component';
import { EMPDataComponent } from './pages/emp-data/emp-data.component';
import { UpdatedEmpolyeesComponent } from './pages/updated-empolyees/updated-empolyees.component';
import { EmpDataModelComponent } from './pages/emp-data/emp-data-model/emp-data-model.component';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessageService } from "primeng/api";
import { ConfirmationService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashbordAnalyticsComponent,
    EMPDataComponent,
    UpdatedEmpolyeesComponent,
    EmpDataModelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    InputSwitchModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule,
    MessagesModule,
    AdminDashboardRoutingModule
  ],
  providers: [ConfirmationService,MessageService],
})
export class AdminDashboardModule { }

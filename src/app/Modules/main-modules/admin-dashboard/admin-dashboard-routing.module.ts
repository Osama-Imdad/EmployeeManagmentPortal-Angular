import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordAnalyticsComponent } from './pages/dashbord-analytics/dashbord-analytics.component';
import { EMPDataComponent } from './pages/emp-data/emp-data.component';
import { UpdatedEmpolyeesComponent } from './pages/updated-empolyees/updated-empolyees.component';

const routes: Routes = [
  {path:"admin",component:DashbordAnalyticsComponent},
  {path:"admin/employees",component:EMPDataComponent},
  {path:"admin/updated-employees",component:UpdatedEmpolyeesComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { AdminViewComponent } from './_layouts/adminLayout/admin-View/admin-view/admin-view.component';
import { UserViewComponent } from './_layouts/clientLayout/client-View/user-view/user-view.component';
import { PageNotFoundComponent } from './_layouts/_shared-Layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"",
    component:UserViewComponent,
    children:[
    {
    path:"",
    redirectTo:"/login",
    pathMatch:'full'
  },
    {
      path:"",loadChildren:()=>import("./Modules/authentication/auth/auth.module").then((m)=>m.AuthModule),//as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of page & real funcationlity of lazyloading is distrubed.....

    },


  ]
  },
  {
    path:"",
    component:AdminViewComponent,
    canActivate:[AuthGuardGuard],
    children:[
    {
    path:"",
    redirectTo:"/admin",
    pathMatch:'full'
  },
    {
      path:"",loadChildren:()=>import("./Modules/main-modules/admin-dashboard/admin-dashboard.module").then((m)=>m.AdminDashboardModule),//as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of page & real funcationlity of lazyloading is distrubed.....

    }

  ]
},
// {
//   path:"",
//   component:AdminViewComponent,
//   canActivate:[AuthGuardGuard],
//   children:[
//   {
//   path:"",
//   redirectTo:"/admin",
//   pathMatch:'full'
// },
//   {
//     path:"",loadChildren:()=>import("./Modules/main-modules/admin-dashboard/admin-dashboard.module").then((m)=>m.),//as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of page & real funcationlity of lazyloading is distrubed.....

//   }

// ]
// },

{
  path:"**",component:PageNotFoundComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

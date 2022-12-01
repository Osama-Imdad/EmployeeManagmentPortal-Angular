import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signin",component:RegisterComponent},
  {path:"forgetpassword",component:ForgetPasswordComponent},
  {path:"otp",component:OtpComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

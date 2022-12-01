import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './_layouts/adminLayout/admin-View/admin-view/admin-view.component';
import { FooterComponent } from './_layouts/adminLayout/components/footer/footer/footer.component';
import { NavbarComponent } from './_layouts/adminLayout/components/navbar/navbar/navbar.component';
import { SidebarComponent } from './_layouts/adminLayout/components/sidebar/sidebar/sidebar.component';
import { LoaderComponent } from './_layouts/_shared-Layout/loader/loader.component';
import { PageNotFoundComponent } from './_layouts/_shared-Layout/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserViewComponent } from './_layouts/clientLayout/client-View/user-view/user-view.component';
// import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent,
    PageNotFoundComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

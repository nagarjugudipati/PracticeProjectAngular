import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerManagerComponent,
    CustomerComponent,
    AboutComponent,
    LoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

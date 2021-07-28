import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceproviderComponent } from './serviceprovider/serviceprovider.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListOfServiceProvidersComponent } from './list-of-service-providers/list-of-service-providers.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

// const routes: Routes = [
//   { path : "", component : SignupComponent },
//   { path : 'serviceProviders', component : ListOfServiceProvidersComponent },
//   { path : 'serviceProviders/:userName', component : ServiceproviderComponent },
//   { path : '**' ,component : SignupComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    ServiceproviderComponent,
    CustomerComponent,
    HomeComponent,
    ListOfServiceProvidersComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

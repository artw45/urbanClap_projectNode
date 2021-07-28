import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListOfServiceProvidersComponent } from './list-of-service-providers/list-of-service-providers.component';
import { ServiceproviderComponent } from './serviceprovider/serviceprovider.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "register/:isSignIn",component : HomeComponent },
  { path : "signin", component : SigninComponent },
  { path : "signup", component : SignupComponent },
  { path : 'serviceProviders/:type', component : ListOfServiceProvidersComponent },
  { path : 'serviceProviders/:type/:userName', component : ServiceproviderComponent },
  { path : 'customer', component : CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

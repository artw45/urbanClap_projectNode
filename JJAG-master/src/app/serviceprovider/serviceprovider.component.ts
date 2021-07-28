import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ForServiceProviderService } from '../for-service-provider.service';
import { signUpData } from '../signup/signUp';
import { ActivatedRoute } from '@angular/router';
// import { $ } from 'protractor';

@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.component.html',
  styleUrls: ['./serviceprovider.component.css']
})
export class ServiceproviderComponent implements OnInit {

  serviceProviderData : signUpData = {
    name : "",
    userName : "",
    address : "",
    reach : 0,
    reviews : 0,
    mobileNumber1 : "",
    mobileNumber2 : "",
    email1 : "",
    email2 : "",
    instagram : "",
    facebook : "",
    linkedIn : "",
    clients : [],
    nameOfServices : [],
    images : [],
    password : ""
  };

  message : any = {
    mailContent : "",
    email : ""
  }

  constructor(private serviceForServiceProvider : ForServiceProviderService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    let userName = this.route.snapshot.paramMap.get('userName'); 
    this.serviceForServiceProvider.serviceProviderData(`${userName}`).subscribe((data:any) => {
      // console.log(data);
      this.serviceProviderData = data;
      // console.log(this.serviceProviderData);
      // console.log(this.serviceProviderData.images[0][0]);
    })
  }

  showModal() {
    ($('#staticBackdrop') as any).modal('show');
    // ($('#successModal') as any).modal('show');
    // ($('#successModal') as any).modal('show');
  }

  sendMail() {
    this.message.email = this.serviceProviderData.email1;
    this.serviceForServiceProvider.sendMail(this.message).subscribe((data : any) => {
      alert(`message is sent to ${this.serviceProviderData.userName}`);
    });
    ($('#staticBackdrop') as any).modal('hide');
    this.message.mailContent = "";
  }

  
}

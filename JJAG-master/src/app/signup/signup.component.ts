import { ReadVarExpr, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { signUpData } from './signUp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  imageCount : number = -1;
  myFiles:string = "";
  testData = {
    'name' : "dharmesh"
  }

  signUpData : signUpData = {
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
  }



  constructor(private signUpService : SignUpService) { 
  }

  ngOnInit(): void {
  }
  
  servicesNames(event : any) {
    let numberOfServices = event.target.value;
    this.signUpData.nameOfServices = [];
    this.signUpData.images = [];
    for(let i = 0; i < Number(numberOfServices); i++) {
      this.signUpData.nameOfServices.push("");
      this.signUpData.images.push([]);
    }
  }

  clientsNames(event : any) {
    let numberOfCLients = event.target.value;
    this.signUpData.clients = [];
    for(let i = 0; i < numberOfCLients; i++) {
      this.signUpData.clients.push("");
    }
  }

  trackByFn(index: any, item: any) {
    return index;
 }

  onFileChange(event : any) {
    let fileCounts = event.target.files.length;
    this.imageCount = this.imageCount + 1;
    for(let i = 0; i < fileCounts; i++) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      console.log(event.target.files[i].result);
      reader.onload = (e) => {
        this.signUpData.images[this.imageCount].push(String(e.target?.result));
      }
    }
  }

  onSubmit() {
    this.signUpService.postSignUpData(this.signUpData).subscribe(data => {
      console.log(data);
    });
  }
}

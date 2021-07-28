import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../signin.service';
import { signIn } from './signIn';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private signinService : SigninService,private router : Router) { }
  signInData : signIn = {
    userName : "",
    password : ""
  }
  ngOnInit(): void {
  }

  signIn() {
    this.signinService.postSignInData(this.signInData).subscribe(data => {
      if(data) {
        this.router.navigate(["register/true"])
      }else {
        alert("password or username is invalid");
      }
    });
  }
  signInpage() {
    this.router.navigate(["/signup"]);
  }

}

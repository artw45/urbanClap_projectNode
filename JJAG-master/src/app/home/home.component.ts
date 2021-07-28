import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router : Router) { }

  isSignInDone : any = "true";

  ngOnInit(): void {
    this.isSignInDone = this.route.snapshot.paramMap.get('isSignIn');
    // this.isSignInDone = "true";
  }

  moveToNextPage(type:String) {
    console.log("hi");
    if(this.isSignInDone === "true") {
      this.router.navigate(["/serviceProviders",type])
    }else {
      this.router.navigate(["/signin"]);
    }
  }

  signInPage() {
    if(this.isSignInDone === "true") {
      alert("you are already signed in");
    }else {
      this.router.navigate(['/signin']);
    }
  }

  signUpPage() {
    if(this.isSignInDone === "true") {
      alert("you have already make an account");
    }else {
      this.router.navigate(['/signup']);
    }

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http : HttpClient) { }

  postSignUpData (signupData : any) {
    console.log(signupData);
    console.log(signupData.images[0]);
    return this.http.post('http://localhost/signUp',signupData);
  }
}

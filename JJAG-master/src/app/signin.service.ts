import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http : HttpClient) { }

  postSignInData(signInData : any) {
    return this.http.post("http://localhost/signin",signInData);
  }
}

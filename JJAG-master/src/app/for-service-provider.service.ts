import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForServiceProviderService {

  constructor(private http : HttpClient) { }

  serviceProviderData(userName : String){
    return this.http.get(`http://localhost/data/${userName}`);
  }

  sendMail(message : any) {
    // console.log(message);
    return this.http.post("http://localhost/sendMail",message);
  }
}

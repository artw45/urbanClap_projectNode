import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http : HttpClient) { }

  listOfServiceProviders(type : String) {
    return this.http.get(`http://localhost/serviceproviders/${type}`);
  }
}

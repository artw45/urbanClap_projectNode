import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../list.service';
import { signUpData } from '../signup/signUp';

@Component({
  selector: 'app-list-of-service-providers',
  templateUrl: './list-of-service-providers.component.html',
  styleUrls: ['./list-of-service-providers.component.css']
})
export class ListOfServiceProvidersComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router,private listService : ListService) { }

  serviceProviderData: signUpData[] = [];


  ngOnInit(): void {
    let type = String(this.route.snapshot.paramMap.get('type'));
    this.listService.listOfServiceProviders(type).subscribe((data:any) => {
      this.serviceProviderData = data;
      // console.log(this.serviceProviderData);
    });
  }

  individualServiceprovider(name : any) {
    this.router.navigate([`serviceProviders/${this.serviceProviderData[0].nameOfServices[0]}`,name]);
  }

}

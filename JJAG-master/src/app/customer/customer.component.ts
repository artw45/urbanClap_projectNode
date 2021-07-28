import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jay : string[][] = [["jay","nisarg"],["hem","hi"]];

  onchange()  {
    console.log(this.jay[0][0]);
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.carService.getCars().subscribe(data => {
    //   console.log(data);
    // });
  }
}

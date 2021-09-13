import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private carService: CarService) {}

  ngOnInit() {
     this.carService.getCars().subscribe(data => {
      console.log(data);
     });
  }
}

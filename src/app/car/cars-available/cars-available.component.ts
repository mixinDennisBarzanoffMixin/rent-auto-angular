import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Car } from 'src/app/models/car';
import { AvailableCarsService } from 'src/app/services/available-cars.service';

@Component({
  selector: 'app-cars-available',
  templateUrl: './cars-available.component.html',
  styleUrls: ['./cars-available.component.scss']
})
export class CarsAvailableComponent implements OnInit {

  constructor(public availableCarsService: AvailableCarsService) {
  }

  ngOnInit(): void {
    
  }

  bookCar(carId: string) {
  }
}

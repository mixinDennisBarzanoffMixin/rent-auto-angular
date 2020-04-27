import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class AvailableCarsService {
  availableCars$ = new Subject<Car[]>()

  constructor() { }

  addCars(cars: Car[]) {
    this.availableCars$.next(cars)
  }
}

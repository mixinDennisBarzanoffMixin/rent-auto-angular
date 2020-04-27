import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Car } from '../models/car';
import { AngularFireFunctions } from '@angular/fire/functions';

export interface FormData {
  startDate: Date
  endDate: Date
}

@Injectable({
  providedIn: 'root'
})
export class CarSearchService {
  constructor(private funcions: AngularFireFunctions) {
  }

  findAvailableCars(startDate: Date, endDate: Date): Promise<Car[]> {
    // not reactive, cuz functions doesn't support it
    return this.funcions.httpsCallable('findAvailableCars')({
      startDate, endDate
    }).toPromise()
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { CarSearchService } from 'src/app/services/car-search.service';
import { AvailableCarsService } from 'src/app/services/available-cars.service';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any
declare var moment: any

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {


  startDateId = '#datetime_pick';
  endDateId = '#datetime_off';

  startDate: Date;
  endDate: Date;
  checkoutForm: FormGroup;

  constructor(
    private carService: CarSearchService,
    private availableCarsService: AvailableCarsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      startDate: '',
      endDate: ''
    });
  }
  setStartDate(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value
    console.log(this.startDate)
  }

  setEndDate(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value
  }

  async search() {
    $('.preloader').fadeOut(1000); // set duration in brackets
    const cars = await this.carService.findAvailableCars(this.startDate, this.endDate)
    this.availableCarsService.addCars(cars)
  }
}

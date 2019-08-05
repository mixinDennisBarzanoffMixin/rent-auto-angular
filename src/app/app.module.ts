import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { NavComponent } from './nav/nav.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { BookCarComponent } from './book-car/book-car.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarsAvailableComponent } from './cars-available/cars-available.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatNativeDateModule} from '@angular/material';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavComponent,
    CompanyServicesComponent,
    ContactMapComponent,
    BookCarComponent,
    ThankYouComponent,
    CarSearchComponent,
    CarsAvailableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

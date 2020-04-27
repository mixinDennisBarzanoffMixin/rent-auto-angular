import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { NavComponent } from './nav/nav.component';
import { CarSearchComponent } from './car/car-search/car-search.component';
import { CarsAvailableComponent } from './car/cars-available/cars-available.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavComponent,
    // CompanyServicesComponent,
    // ContactMapComponent,
    // BookCarComponent,
    // ThankYouComponent,
    CarSearchComponent,
    CarsAvailableComponent,
    FooterComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    MatDatepickerModule,
    AngularFirestore,
    AngularFireFunctions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

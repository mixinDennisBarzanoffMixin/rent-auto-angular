import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarSearchComponent} from './car-search/car-search.component';

const routes: Routes = [
  {path: '', component: CarSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

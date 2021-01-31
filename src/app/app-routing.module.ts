import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesRountingModule } from './countries/countries-rounting.module';

const routes: Routes = [
  // / -> Country routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CountriesRountingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
